import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// ============================================================================
// VALIDATION SCHEMA
// ============================================================================

const ContactSchema = z.object({
    name: z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres.')
        .max(100, 'El nombre no puede exceder los 100 caracteres.')
        .trim(),
    email: z
        .string()
        .email('Dirección de correo electrónico inválida.')
        .max(254, 'El email no puede exceder los 254 caracteres.')
        .trim()
        .toLowerCase(),
    message: z
        .string()
        .min(10, 'El mensaje debe tener al menos 10 caracteres.')
        .max(5000, 'El mensaje no puede exceder los 5000 caracteres.')
        .trim(),
});

// ============================================================================
// RATE LIMITING (in-memory, per-instance)
// ============================================================================

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 requests per window

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimit.get(ip);

    if (!entry || now > entry.resetAt) {
        rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (entry.count >= RATE_LIMIT_MAX) {
        return true;
    }

    entry.count++;
    return false;
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// ============================================================================
// POST HANDLER
// ============================================================================

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded?.split(',')[0]?.trim() ?? 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.',
                },
                { status: 429 }
            );
        }

        // Parse and validate body
        const body = await request.json().catch(() => null);

        if (!body) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'El cuerpo de la solicitud es inválido o está vacío.',
                },
                { status: 400 }
            );
        }

        const validation = ContactSchema.safeParse(body);

        if (!validation.success) {
            const errors = validation.error.flatten().fieldErrors;
            return NextResponse.json(
                {
                    success: false,
                    error: 'Error de validación.',
                    details: errors,
                },
                { status: 400 }
            );
        }

        const { name, email, message } = validation.data;

        // Escape user input before interpolating into the email HTML
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message);

        // Verify API key is configured
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error('[Contact API] RESEND_API_KEY is not configured.');
            return NextResponse.json(
                {
                    success: false,
                    error: 'El servicio de correo no está configurado. Contacta al administrador.',
                },
                { status: 500 }
            );
        }

        // Send email via Resend
        const resend = new Resend(apiKey);

        const { error: sendError } = await resend.emails.send({
            from: `Portafolio Contact <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`,
            to: [process.env.CONTACT_EMAIL || 'luismir1420@gmail.com'],
            replyTo: email,
            subject: `[Portafolio] Nuevo mensaje de ${name}`,
            html: `
                <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fafafa; border-radius: 8px;">
                    <div style="background: #0a0a0a; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
                        <h1 style="margin: 0; font-size: 20px; font-weight: 700;">📬 Nuevo Mensaje de Contacto</h1>
                        <p style="margin: 8px 0 0; font-size: 13px; color: #999;">Enviado desde luismir.com</p>
                    </div>
                    <div style="background: white; padding: 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #333; width: 100px;">Nombre</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #555;">${safeName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600; color: #333;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></td>
                            </tr>
                        </table>
                        <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 6px; border-left: 3px solid #10b981;">
                            <p style="margin: 0 0 8px; font-weight: 600; font-size: 13px; color: #333;">Mensaje:</p>
                            <p style="margin: 0; color: #555; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
                        </div>
                    </div>
                </div>
            `,
        });

        if (sendError) {
            console.error('[Contact API] Resend error:', sendError);
            return NextResponse.json(
                {
                    success: false,
                    error: 'No se pudo enviar el correo. Intenta de nuevo más tarde.',
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: '¡Mensaje enviado con éxito! Te responderé lo antes posible.',
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('[Contact API] Unexpected error:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Error interno del servidor.',
            },
            { status: 500 }
        );
    }
}
