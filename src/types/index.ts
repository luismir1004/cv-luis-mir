export interface Project {
    id: string;
    url: string;
    title: string;
    description: {
        es: string;
        en: string;
    };
    tags: string[];
    colors: {
        iconBg: string; // Tailwind class
        iconText: string; // Tailwind class
        hoverText: string; // Tailwind class
        hex: string;
    };
    icons: {
        bg: string; // SVG string
        tech: string; // SVG string
    };
}

// Bilingual field type
export interface BilingualField {
    es: string;
    en: string;
}

export interface BilingualArrayField {
    es: string[];
    en: string[];
}

export interface Experience {
    _id: string;
    role: BilingualField;
    subRole: BilingualField;
    date: BilingualField;
    description: BilingualField;
    points: BilingualArrayField;
}

export interface TranslationSchema {
    open_to_work: string;
    role_ai: string;
    role_fs: string;
    hero_subtitle: string;
    download_cv: string;
    stack_title: string;
    cat_ai: string;
    cat_frontend: string;
    cat_infra: string;
    edu_title: string;
    edu_1_title: string;
    edu_1_date: string;
    edu_1_desc: string;
    edu_2_title: string;
    edu_2_date: string;
    edu_2_desc: string;
    contact_title: string;
    contact_subtitle: string;
    lang_title: string;
    lang_es: string;
    lang_es_lvl: string;
    lang_en: string;
    lang_en_lvl: string;
    profile_title: string;
    profile_text: string;
    exp_title: string;
    role_1: string;
    role_1_sub: string;
    role_1_date: string;
    role_1_desc: string;
    role_1_point1: string;
    role_1_point2: string;
    role_2: string;
    role_2_sub: string;
    role_2_date: string;
    role_2_desc: string;
    role_2_point1: string;
    role_2_point2: string;
    projects_title: string;
    footer_text: string;
    location_type: string;
    nav_home?: string; // Optional as it might be added later
    [key: string]: string | undefined; // Fallback for dynamic keys
}

export interface Translations {
    es: TranslationSchema;
    en: TranslationSchema;
}

