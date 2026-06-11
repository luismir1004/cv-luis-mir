import { Dictionary } from './types';

export const es: Dictionary = {
    meta: {
        title: "Luis Mir | Senior Full Stack Developer & Product Engineer",
        description: "Portafolio profesional de Luis Mir, Ingeniero de Software enfocado en el desarrollo guiado por el impacto de negocio. Soluciones con Next.js, React y Supabase."
    },
    personalInfo: {
        name: "Luis Alejandro Mir Jimenez",
        titles: ["Product Engineer & Senior Full-Stack Developer"],
        email: "luismir1420@gmail.com",
        phone: "+584121955216",
        linkedin: "https://www.linkedin.com/in/luis-mir-68b5293aa/",
        github: "https://github.com/luismir1004",
    },
    profile: {
        text: "Ingeniero de Software enfocado en el desarrollo guiado por el impacto de negocio. Como Product Engineer, no solo optimizo arquitecturas modernas (Next.js, Supabase), sino que diseño soluciones que aceleran los ciclos de producción, reducen costos operativos y mejoran la conversión. Cuento con sólida experiencia colaborando en entornos dinámicos bajo metodologías ágiles, asegurando flujos de integración continua (CI/CD) y código limpio, tipado y exhaustivamente documentado para el éxito del equipo.",
    },
    techStack: [
        {
            title: "Lenguajes y Core",
            specialty: "Fundamentos de desarrollo sólidos",
            skills: [
                { name: "TypeScript", level: "Senior", isPrimary: true },
                { name: "JavaScript ES6+", level: "Senior", isPrimary: true },
                { name: "HTML5 / CSS3", level: "Senior" },
                { name: "Python", level: "Familiar" }
            ]
        },
        {
            title: "Frameworks y Librerías",
            specialty: "Ecosistema de desarrollo principal",
            skills: [
                { name: "Next.js 16", level: "Senior", isPrimary: true },
                { name: "React 19", level: "Senior", isPrimary: true },
                { name: "Tailwind CSS 4", level: "Semi-Senior", isPrimary: true },
                { name: "Framer Motion", level: "Semi-Senior", isPrimary: true },
                { name: "Shadcn/ui", level: "Semi-Senior" },
                { name: "Radix", level: "Semi-Senior" }
            ]
        },
        {
            title: "Backend e Infraestructura",
            specialty: "Servicios cloud y persistencia",
            skills: [
                { name: "Supabase (BaaS)", level: "Senior", isPrimary: true },
                { name: "Drizzle ORM", level: "Semi-Senior", isPrimary: true },
                { name: "PostgreSQL", level: "Semi-Senior" },
                { name: "Node.js", level: "Semi-Senior" },
                { name: "Edge Functions", level: "Semi-Senior", isPrimary: true },
                { name: "Vercel", level: "Semi-Senior", isPrimary: true },
                { name: "Docker", level: "Familiar" }
            ]
        },
        {
            title: "Competencias de Ingeniería",
            specialty: "Calidad, rendimiento y automatización",
            skills: [
                { name: "Integración de IA (AI SDKs)", level: "Semi-Senior", isPrimary: true },
                { name: "Arquitectura Serverless", level: "Senior", isPrimary: true },
                { name: "Optimización de Rendimiento (Web Vitals)", level: "Senior", isPrimary: true },
                { name: "CI/CD (GitHub Actions)", level: "Semi-Senior" },
                { name: "Playwright", level: "Familiar" },
                { name: "Clean Architecture", level: "Senior", isPrimary: true },
                { name: "Seguridad Web (OWASP)", level: "Familiar" },
                { name: "Metodologías Ágiles (Git Flow)", level: "Familiar" }
            ]
        }
    ],
    projects: [
        {
            id: "superautos-code",
            url: "https://superautos-code.vercel.app/",
            title: "Superautos Code",
            description: "Diseñé y coordiné la arquitectura completa de esta plataforma full-stack, enfocada en optimizar los flujos de venta automotriz en producción.",
            problem: "Optimizar los flujos de venta automotriz con comunicación en tiempo real, visualización geográfica y gestión de inventario, reduciendo los tiempos de respuesta al cliente y acelerando la conversión de leads.",
            outcome: "La integración de chat en tiempo real y catálogos dinámicos redujo los tiempos de respuesta al cliente en un 45%, impulsando directamente la tasa de conversión de leads. Proyecto estructurado bajo Git Flow y documentación exhaustiva para escalabilidad multidisciplinaria.",
            tags: ["Supabase", "Real-time Chat", "Interactive Maps", "UX Design"],
            image: "/superautos-code.png",
            alt: "Captura de pantalla de la interfaz de usuario de Superautos Code en modo oscuro"
        },
        {
            id: "caribe-stay",
            url: "https://caribe-stay.vercel.app/",
            title: "Caribe Stay",
            description: "Sistema dinámico de reservas vacacionales con mecanismos de seguridad en tiempo de ejecución y flujos de checkout optimizados para conversión.",
            problem: "Mitigar el abandono de carritos de reserva optimizando los flujos críticos del checkout, la velocidad de carga y la seguridad en tiempo de ejecución de una plataforma vacacional.",
            outcome: "Al optimizar los flujos críticos del checkout y alcanzar Core Web Vitals de 95+, se logró mitigar en un 30% el abandono de carritos de reserva, transformando la infraestructura técnica en un canal de producción altamente eficiente y confiable para el negocio.",
            tags: ["Runtime Security", "Vacation Rental", "React", "TypeScript"],
            image: "/caribe-stay.png",
            alt: "Captura de pantalla del panel de control de alquileres vacacionales Caribe Stay"
        },
        {
            id: "tienda-alfareria",
            url: "https://alfareria-code.vercel.app/",
            title: "Tienda de Alfarería",
            description: "Solución de e-commerce modular que automatizó la gestión de inventario y el procesamiento de pedidos, eliminando cuellos de botella operativos.",
            problem: "Eliminar los cuellos de botella operativos en la administración manual de pedidos e inventario de un comercio artesanal, garantizando alta disponibilidad ante picos de tráfico.",
            outcome: "La plataforma eliminó los cuellos de botella operativos, reduciendo en un 60% el tiempo manual dedicado a la administración de pedidos y garantizando un entorno serverless de alta disponibilidad capaz de absorber picos de tráfico comercial sin pérdidas de facturación.",
            tags: ["E-Commerce", "Enrutamiento Avanzado", "Vercel", "Catálogos Dinámicos"],
            image: "/tienda-alfareria.png",
            alt: "Captura de pantalla de la tienda virtual de cerámica y alfarería"
        },
        {
            id: "tienda-online",
            url: "https://tiendaonline-git.vercel.app/",
            title: "Tienda Online",
            description: "Plataforma de e-commerce que automatizó el ciclo completo de venta: catálogo dinámico, inventario en tiempo real y pasarela de pagos integrada.",
            problem: "Automatizar el ciclo completo de venta digital — desde la exhibición del catálogo hasta el cobro — reduciendo la dependencia de procesos manuales y maximizando la conversión.",
            outcome: "Automatización completa del flujo de venta con catálogo dinámico, inventario actualizado en tiempo real y pasarela integrada, optimizada para conversión y rendimiento en producción.",
            tags: ["E-Commerce", "Catálogos Dinámicos", "Pasarela de Pagos", "React"],
            image: "/tienda-online.png",
            alt: "Mockup de panel de e-commerce y facturación para Tienda Online"
        },
        {
            id: "pizzeria",
            url: "https://pizzeria-la-foccacia.vercel.app/",
            title: "Pizzería La Focaccia",
            description: "E-commerce de alta gama para el sector gastronómico.",
            problem: "La necesidad de una experiencia de pedido fluida y visualmente atractiva que reduzca la fricción en la personalización de productos complejos.",
            outcome: "Implementación de un sistema de gestión de estado reactivo y animaciones inmersivas, resultando en una interfaz intuitiva y de alto rendimiento.",
            tags: ["React", "Motion", "Tailwind", "UX Design"],
            image: "/pizzeria.png",
            alt: "Captura de aplicación móvil de pedidos de comida a domicilio"
        },
        {
            id: "blog-vision",
            url: "https://blog-vision-seven.vercel.app/",
            title: "Blog Vision",
            description: "Plataforma de blog moderna con enfoque en la lectura fluida, optimización de tipografía y rendimiento excepcional.",
            problem: "Desarrollar un blog minimalista de alto rendimiento con optimización de Core Web Vitals, carga diferida de imágenes y un diseño adaptativo premium enfocado en la legibilidad.",
            outcome: "Implementación exitosa de un blog de velocidad ultra rápida utilizando técnicas avanzadas de renderizado estático, optimización SEO y animaciones de transición fluidas.",
            tags: ["Next.js", "Tailwind CSS", "Markdown", "Optimización SEO"],
            image: "/blog-vision.png",
            alt: "Mesa de trabajo limpia mostrando un blog abierto en una laptop"
        },
        {
            id: "startup-proyecto",
            url: "https://startup-proyecto-app.vercel.app/",
            title: "Startup App",
            description: "Plataforma SaaS moderna orientada al lanzamiento, validación y gestión ágil de nuevas ideas de negocio.",
            problem: "Simplificar el proceso de captación de leads, landing pages dinámicas y visualización del modelo de negocio en fases tempranas de una startup.",
            outcome: "Construcción de una SPA adaptativa de alto rendimiento con flujos de registro optimizados, transiciones suaves y arquitectura modular reutilizable.",
            tags: ["Next.js", "React", "Tailwind CSS", "Arquitectura SaaS"],
            image: "/startup-proyecto.png",
            alt: "Mockup de panel de control SaaS con analíticas en modo oscuro"
        },
        {
            id: "portfolio-v1",
            url: "https://portafolioluis-gamma.vercel.app/",
            title: "Legacy Portfolio",
            description: "Primera iteración del ecosistema personal de marca.",
            problem: "Establecer una presencia digital inicial centrada en la claridad visual y la presentación de habilidades core.",
            outcome: "Diseño minimalista que sirvió como base para la evolución hacia arquitecturas web más complejas.",
            tags: ["React", "Vite", "CSS3", "Responsive"],
            image: "/portfolio-v1.png",
            alt: "Portafolio web anterior abierto en la pantalla de una laptop"
        }
    ],
    experience: [
        {
            id: "1",
            role: "Product Engineer & Full-Stack Developer (Independiente)",
            company: "Consultoría Independiente",
            date: "2023 - Presente",
            description: "Diseñé y orquesté la arquitectura completa de una plataforma automotriz premium (Superautos Code), integrando características complejas como chat en tiempo real basado en WebSockets (Supabase), mapas interactivos y catálogos dinámicos. Implementé mecanismos estrictos de seguridad en tiempo de ejecución (runtime safety) en componentes dinámicos de visualización de datos para aplicaciones de reservas vacacionales (Caribe Stay). Automaticé la gestión de inventario y pedidos para la Tienda de Alfarería, eliminando cuellos de botella mediante flujos serverless de alta disponibilidad.",
            technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS 4", "WebSockets", "Runtime Security", "E-Commerce"]
        }
    ],
    education: [
        {
            id: "1",
            degree: "Certificación Profesional en Arquitectura Web",
            school: "Formación Especializada",
            date: "Mediados 2025 - Finales 2025",
            description: "Me capacité intensivamente en arquitectura de software, patrones de diseño modernos, seguridad web y metodologías ágiles."
        },
        {
            id: "2",
            degree: "Fundamentos de Ciencias de la Computación",
            school: "Investigación Continua",
            date: "2025 - Presente",
            description: "Investigo de forma autodidacta estructuras de datos avanzadas, algoritmos de optimización y paradigmas de Inteligencia Artificial Generativa."
        }
    ],
    courses: [
        {
            id: "diseno-web-profesional",
            title: "Diseño Web Profesional: Curso Completo, Práctico y desde 0",
            instructor: "Carlos Arturo Esparza (FalconMasters)",
            platform: "Udemy",
            category: "Frontend",
            year: 2024,
            duration: "97 horas",
            description: "Maquetación avanzada, CSS Grid, Flexbox, y fundamentos robustos de JavaScript y React."
        },
        {
            id: "fullstack-nextjs-ai",
            title: "Full Stack Next.js - Drizzle ORM, Better Auth, AI SDK y TS",
            instructor: "Juan Pablo De la torre Valdez",
            platform: "Udemy",
            category: "Backend",
            year: 2024,
            duration: "24.5 horas",
            description: "Arquitecturas modernas, bases de datos con ORM, autenticación avanzada y desarrollo asistido con SDKs de Inteligencia Artificial."
        },
        {
            id: "supabase-baas",
            title: "Curso de Supabase. Backend as a Service (BaaS) desde cero",
            instructor: "Ivan AlsiGo",
            platform: "Udemy",
            category: "Backend",
            year: 2024,
            duration: "6 horas",
            description: "Orquestación de bases de datos serverless, backend moderno y lógica en tiempo real (91 clases)."
        }
    ],
    businessImpact: [
        {
            id: 'impact-1',
            projectTitle: 'Superautos Code',
            metricValue: '+$48,000',
            metricLabel: 'Retorno de Inversión (ROI)',
            description: 'La integración de chat en tiempo real por WebSockets y un catálogo de carga instantánea redujeron dráctimente la fricción, acelerando el contacto directo cliente-vendedor.',
            category: 'revenue'
        },
        {
            id: 'impact-2',
            projectTitle: 'Tienda de Alfarería',
            metricValue: '-60%',
            metricLabel: 'Tiempo de Gestión',
            description: 'Transición exitosa de una administración manual a un ecosistema serverless. Eliminación total de horas operativas dedicadas al cuadre de despachos e inventarios.',
            category: 'efficiency'
        },
        {
            id: 'impact-3',
            projectTitle: 'Caribe Stay',
            metricValue: '-30%',
            metricLabel: 'Abandono de Carritos',
            description: 'Al alcanzar puntuaciones Core Web Vitals casi perfectas y refactorizar el flujo de pagos, se logró retener tráfico orgánico crítico que antes abandonaba la plataforma.',
            category: 'efficiency'
        }
    ],
    metricsList: [
        {
            value: "10+",
            label: "Despliegues Activos",
            description: "Plataformas y soluciones full-stack optimizadas y corriendo en producción vía Vercel y Railway."
        },
        {
            value: "95+",
            label: "Puntuación Performance",
            description: "Optimización estricta de Core Web Vitals y auditorías Lighthouse para una carga instantánea."
        },
        {
            value: "99.9%",
            label: "Alta Disponibilidad",
            description: "Arquitecturas serverless y bases de datos distribuidas que garantizan tolerancia a fallos."
        },
        {
            value: "40%",
            label: "Eficiencia en Carga",
            description: "Incremento de rendimiento mediante refactorización de código, lazy loading y code splitting."
        },
        {
            value: "120+",
            label: "Horas de Especialización",
            description: "Formación intensiva continua y certificada en el ecosistema React 19, Next.js 16 y Supabase BaaS."
        },
        {
            value: "100%",
            label: "TypeScript Estricto",
            description: "Configuración robusta (strict: true) para garantizar la seguridad en tiempo de ejecución y erradicar bugs."
        }
    ],
    achievementsList: [
        {
            id: "1",
            title: "Arquitectura de Producto Destacada",
            description: "Desarrollo y despliegue autónomo de la plataforma automotriz 'Superautos Code', implementando bases de datos y chat en tiempo real."
        },
        {
            id: "2",
            title: "Especialista en Ecosistema Serverless",
            description: "Diseño y orquestación de arquitecturas modernas y escalables utilizando el ecosistema de Next.js 16 combinado con Supabase BaaS."
        },
        {
            id: "3",
            title: "Optimización de Rendimiento",
            description: "Mejora significativa en tiempos de carga (Core Web Vitals) e interactividad mediante técnicas avanzadas de code-splitting en React 19."
        },
        {
            id: "4",
            title: "Garantía de Robustez y CI/CD",
            description: "Implementación de entornos TypeScript estrictos y flujos de despliegue automatizados vía Vercel para asegurar estabilidad en producción."
        }
    ],
    ui: {
        navbar: {
            home: "Inicio",
            projects: "Proyectos",
            experience: "Experiencia",
            skills: "Habilidades",
            education: "Educación",
            contact: "Contacto",
            cv: "Currículum"
        },
        hero: {
            badge: "Disponible para oportunidades",
            ctaDownload: "Descargar CV",
            ctaResults: "Ver Resultados",
            ctaProjects: "Ver Proyectos",
            ctaContact: "Contáctame",
            scrollText: "Desplazarse"
        },
        metrics: {
            badge: "Impacto Cuantificable",
            title: "Resultados",
            footerText: "Métricas actualizadas en tiempo real basadas en proyectos entregados y su impacto medido en producción."
        },
        projectsSection: {
            title: "Proyectos Destacados",
            subtitle: "Una selección de proyectos que demuestran capacidad técnica, resolución de problemas y atención al detalle.",
            liveDemo: "Demostración",
            viewDetails: "Detalles",
            close: "Cerrar",
            projectDetails: "Detalles del Proyecto",
            problemLabel: "El Problema",
            outcomeLabel: "El Resultado",
            techUsedLabel: "Tecnologías Utilizadas",
            visitSite: "Visitar Sitio"
        },
        businessImpactSection: {
            title: "Impacto de Negocio",
            subtitle: "Cómo mi código se traduce en retorno de inversión, métricas de eficiencia y mejores ingresos para los productos.",
            all: "Todos",
            efficiency: "Eficiencia Operativa",
            revenue: "Ingresos y Conversión",
            userExperience: "Experiencia de Usuario"
        },
        experienceSection: {
            title: "Trayectoria Profesional",
            subtitle: "Experiencia diseñando y desarrollando aplicaciones web avanzadas, optimizando rendimiento e integrando arquitecturas modernas."
        },
        techSection: {
            title: "Ecosistema Tecnológico",
            subtitle: "Mi caja de herramientas técnicas, organizada por especialización e ingeniería.",
            specialtyLabel: "Especialidad"
        },
        certificationsSection: {
            title: "Formación",
            subtitle: "Especialización continua en tecnologías modernas a través de formación estructurada y práctica. {count}+ cursos certificados en ecosistemas clave.",
            badge: "Educación Continua",
            durationLabel: "Duración",
            instructorLabel: "Instructor",
            all: "Todos",
            frontend: "Frontend / UI",
            backend: "Backend / Cloud",
            cloud: "Cloud / DevOps",
            achievementsTitle: "Logros Destacados",
            achievementsSubtitle: "Reconocimientos profesionales y logros técnicos significativos.",
            noCourses: "No hay cursos en esta categoría."
        },
        contactSection: {
            title: "Conecta Conmigo",
            subtitle: "Ya sea para arquitectura de software, liderazgo técnico o desarrollo full-stack de alto impacto, estoy disponible para conversar sobre cómo aportar valor a tu equipo.",
            headingPart1: "Iniciemos un nuevo ",
            headingPart2: "proyecto.",
            nameLabel: "Nombre",
            emailLabel: "Correo Electrónico",
            messageLabel: "Mensaje",
            namePlaceholder: "Tu nombre completo",
            emailPlaceholder: "tu@email.com",
            messagePlaceholder: "Detalla tu propuesta de proyecto o consulta técnica...",
            submitButton: "Enviar Mensaje",
            sending: "Enviando...",
            successHeading: "Transmisión Exitosa",
            successMessage: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
            errorMessage: "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
            connectionError: "Error de conexión. Verifica tu conexión a internet.",
            getInTouch: "Canales de Contacto",
            availableText: "Disponible para proyectos globales e iniciativas de alta ingeniería."
        },
        cvPage: {
            downloadPdf: "Descargar PDF",
            generatingPdf: "Generando PDF...",
            summaryTitle: "Resumen Profesional",
            experienceTitle: "Experiencia",
            projectsTitle: "Proyectos Clave",
            expertiseTitle: "Especialidades",
            educationTitle: "Educación",
            verifiedCredential: "Credencial Digital Verificada",
            generatingId: "Generando ID Seguro...",
            statusText: "SISTEMA: EN LÍNEA",
            connectionMessage: "Estableciendo conexión segura. Disponible para colaboraciones de ingeniería avanzada y arquitectura de sistemas distribuidos a escala global.",
            verWeb: "Ver versión web",
            solicitarAcceso: "Solicitar Acceso"
        },
        cvAccessModal: {
            titleLocked: "Acceso Restringido",
            titleScanning: "Verificando Credenciales...",
            titleGranted: "Acceso Autorizado",
            descLocked: "El documento contiene arquitectura de sistemas propietaria. Se requiere autorización para visualizar el expediente completo.",
            descScanning: "Analizando firma biométrica y permisos de seguridad...",
            descGranted: "Redirigiendo a canal seguro de comunicación...",
            downloadButton: "Descargar CV",
            viewWebButton: "Ver versión web"
        },
        footer: {
            rights: "Todos los derechos reservados.",
            privacy: "Protocolo de Privacidad",
            terms: "Términos de Servicio",
            brandDescription: "Construyendo experiencias digitales excepcionales con ingeniería de precisión y tecnologías modernas.",
            quickLinksTitle: "Enlaces Rápidos",
            contactTitle: "Contacto",
            projects: "Proyectos",
            experience: "Experiencia",
            skills: "Habilidades",
            education: "Educación",
            backToTop: "Volver arriba"
        }
    }
};
