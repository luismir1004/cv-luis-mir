# CV / Portfolio — Luis Mir

Portfolio profesional y CV interactivo de **Luis Mir**, Product Engineer & Senior Full-Stack Developer.

**🌐 En vivo:** [cv-luis-mir.vercel.app](https://cv-luis-mir.vercel.app)

## Características

- **Bilingüe (ES/EN)** con detección automática del idioma del navegador
- **CV descargable en PDF** en ambos idiomas, generado desde la propia web (`/cv`)
- **Formulario de contacto** con envío de email vía Resend, validación con Zod y rate limiting
- **PWA instalable** con manifest e iconos
- **SEO completo**: metadata Open Graph, JSON-LD (Schema.org), sitemap y robots
- **Seguridad**: Content Security Policy estricta, cabeceras endurecidas e inputs escapados
- Modo oscuro/claro, animaciones con Framer Motion y diseño responsive

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 + Framer Motion |
| Email | Resend |
| Testing | Playwright |
| CI/CD | GitHub Actions (calidad) + Vercel (deploy) |

## Desarrollo

```bash
npm install
cp .env.example .env.local   # completar credenciales
npm run dev                  # http://localhost:3000
```

### Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (incluye chequeo de TypeScript) |
| `npm run lint` | ESLint |
| `npm test` | Suite E2E de Playwright (levanta el servidor automáticamente) |
| `npm run cv:pdf` | Regenera los PDFs del CV desde la ruta `/cv` (requiere `npm run dev` activo) |
| `npm run screenshots` | Captura screenshots de los proyectos desplegados |

> **Nota:** si cambias datos del CV en `src/data/cv-data.ts`, recuerda regenerar los PDFs con `npm run cv:pdf`.

## Estructura

```
src/
├── app/            # App Router: home, /cv (layout limpio para PDF), API de contacto
├── components/     # Componentes de UI (corporate/ = mini design system)
├── context/        # LanguageContext (i18n) y UIContext
├── data/           # cv-data.ts — fuente de verdad de los datos del CV
├── dictionaries/   # Traducciones ES/EN
└── hooks/          # Custom hooks (useMounted, etc.)
```

## Autor

**Luis Alejandro Mir Jimenez**
[LinkedIn](https://www.linkedin.com/in/luis-mir-68b5293aa/) · [GitHub](https://github.com/luismir1004) · luismir1420@gmail.com
