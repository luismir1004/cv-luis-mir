export interface TechItem {
    name: string;
    description?: string;
}

export interface BilingualName {
    es: string;
    en: string;
}

export interface TechOrbit {
    name: BilingualName;
    color: string; // The "planet" color
    distance: number; // Distance from center
    speed: number; // Orbit speed multiplier
    size: number; // Planet size
    items: TechItem[];
}

export const COSMIC_DATA: TechOrbit[] = [
    {
        name: { es: "Frontend", en: "Frontend" },
        color: "#3B82F6", // Blue
        distance: 12,
        speed: 0.8,
        size: 1.2,
        items: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Tailwind" },
            { name: "Three.js" },
            { name: "TypeScript" }
        ]
    },
    {
        name: { es: "IA & ML", en: "AI & ML" },
        color: "#10B981", // Emerald
        distance: 18,
        speed: 0.5,
        size: 1.0,
        items: [
            { name: "Python" },
            { name: "OpenAI" },
            { name: "LangChain" },
            { name: "RAG" }
        ]
    },
    {
        name: { es: "Backend", en: "Backend" },
        color: "#F59E0B", // Amber
        distance: 24,
        speed: 0.3,
        size: 1.4,
        items: [
            { name: "Node.js" },
            { name: "Docker" },
            { name: "PostgreSQL" },
            { name: "Git" }
        ]
    }
];
