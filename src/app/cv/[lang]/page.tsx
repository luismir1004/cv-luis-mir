import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { es } from "../../../dictionaries/es";
import { en } from "../../../dictionaries/en";
import type { Language } from "../../../dictionaries/types";

/**
 * CV Page — Executive PDF Layout
 * 
 * This is a SERVER COMPONENT intentionally. No "use client" directive.
 * No window.print(), no dynamic state, no hydration issues.
 * Designed to be captured by Playwright as a clean, professional, ATS-friendly PDF.
 * Uses the /cv layout which strips all website chrome (navbar, footer, etc.)
 */
export default async function CVPage({ params }: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Language;
    const dict = lang === 'en' ? en : es;
    const labels = dict.ui.cvPage;

    const personalInfo = dict.personalInfo;
    const profile = dict.profile;
    const experience = dict.experience;
    const education = dict.education;
    const techStack = dict.techStack;
    const projects = dict.projects;
    const impacts = dict.businessImpact;
    const courses = dict.courses;

    return (
        <div className="bg-white text-slate-800 min-h-screen" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
            {/* ====== PAGE 1 ====== */}
            <div className="max-w-[210mm] mx-auto bg-white flex flex-col" style={{ minHeight: '590mm', padding: '40px 48px' }}>

                {/* ── HEADER ── */}
                <header className="mb-8">
                    {/* Name & Title */}
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                                {personalInfo.name}
                            </h1>
                            <p className="text-base font-medium text-amber-600 mt-1">
                                {personalInfo.titles[0]}
                            </p>
                        </div>
                        {/* Contact Info */}
                        <div className="text-right text-xs text-slate-600 space-y-1 flex-shrink-0 ml-8">
                            <div className="flex items-center justify-end gap-1.5">
                                <span>{personalInfo.email}</span>
                                <Mail className="w-3 h-3 text-slate-400" />
                            </div>
                            {personalInfo.phone && (
                                <div className="flex items-center justify-end gap-1.5">
                                    <span>{personalInfo.phone}</span>
                                    <Phone className="w-3 h-3 text-slate-400" />
                                </div>
                            )}
                            <div className="flex items-center justify-end gap-1.5">
                                <span>{labels.location}</span>
                                <MapPin className="w-3 h-3 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-end gap-1.5 pt-1">
                                <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
                                <span className="text-slate-300">|</span>
                                <a href={personalInfo.github} className="text-blue-600 hover:underline">GitHub</a>
                                <span className="text-slate-300">|</span>
                                <a href="https://luismir.com" className="text-blue-600 hover:underline">luismir.com</a>
                            </div>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="w-full h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />
                </header>

                {/* ── MAIN GRID ── */}
                <div className="grid grid-cols-12 gap-8">

                    {/* ═══ LEFT COLUMN (8 cols) ═══ */}
                    <div className="col-span-8 space-y-6">

                        {/* PROFESSIONAL SUMMARY */}
                        <section>
                            <SectionTitle>{labels.summaryTitle}</SectionTitle>
                            <p className="text-[13px] text-slate-700 leading-relaxed text-justify">
                                {profile.text}
                            </p>
                        </section>

                        {/* EXPERIENCE */}
                        <section>
                            <SectionTitle>{labels.experienceTitle}</SectionTitle>
                            <div className="space-y-5">
                                {experience.map((job) => (
                                    <div key={job.id} className="break-inside-avoid">
                                        <div className="flex justify-between items-baseline mb-0.5">
                                            <h4 className="text-sm font-bold text-slate-900">
                                                {job.role}
                                            </h4>
                                            <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap ml-4 flex-shrink-0">
                                                {job.date}
                                            </span>
                                        </div>
                                        <div className="text-[11px] font-semibold text-amber-700 mb-2 uppercase tracking-wide">
                                            {job.company}
                                        </div>
                                        <p className="text-[12px] text-slate-600 leading-relaxed mb-2.5 text-justify">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {job.technologies?.map((tech) => (
                                                <span key={tech} className="text-[10px] font-medium text-slate-600 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* KEY PROJECTS */}
                        <section>
                            <SectionTitle>{labels.projectsTitle}</SectionTitle>
                            <div className="space-y-4">
                                {projects.map((project, index) => (
                                    <div key={project.id} className={`border-l-2 border-amber-400 pl-3 break-inside-avoid ${index === 2 ? 'break-before-page pt-12' : ''}`}>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <h5 className="text-[13px] font-bold text-slate-900">{project.title}</h5>
                                            <a href={project.url} className="text-[10px] text-blue-600 flex items-center gap-0.5">
                                                <ExternalLink className="w-2.5 h-2.5" />
                                            </a>
                                        </div>
                                        <p className="text-[12px] text-slate-600 leading-relaxed mb-1.5">
                                            {project.description}
                                        </p>
                                        <div className="bg-amber-50 border border-amber-100 rounded px-2.5 py-1.5">
                                            <p className="text-[11px] text-slate-700 leading-relaxed">
                                                <span className="font-semibold text-amber-800">{labels.impactLabel}</span> {project.outcome}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* ═══ RIGHT COLUMN (4 cols) ═══ */}
                    <div className="col-span-4 space-y-6">

                        {/* BUSINESS IMPACT */}
                        <section>
                            <SectionTitle>{labels.impactTitle}</SectionTitle>
                            <div className="space-y-3">
                                {impacts.map((impact) => (
                                    <div key={impact.id} className="bg-slate-50 border border-slate-200 rounded-lg p-3 break-inside-avoid">
                                        <div className="text-lg font-black text-amber-600 leading-none mb-0.5">
                                            {impact.metricValue}
                                        </div>
                                        <div className="text-[11px] font-bold text-slate-800 mb-1">
                                            {impact.metricLabel}
                                        </div>
                                        <div className="text-[10px] text-slate-500 font-medium">
                                            {impact.projectTitle}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* TECHNICAL SKILLS */}
                        <section>
                            <SectionTitle>{labels.stackTitle}</SectionTitle>
                            <div className="space-y-4">
                                {techStack.map((group) => (
                                    <div key={group.title} className="break-inside-avoid">
                                        <h4 className="text-[11px] font-bold uppercase text-slate-800 mb-1.5 tracking-wide">
                                            {group.title}
                                        </h4>
                                        <div className="flex flex-wrap gap-1">
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill.name}
                                                    className={`text-[10px] px-1.5 py-0.5 rounded border ${
                                                        skill.isPrimary
                                                            ? 'bg-amber-50 border-amber-200 text-amber-800 font-semibold'
                                                            : 'bg-white border-slate-200 text-slate-600'
                                                    }`}
                                                >
                                                    {skill.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* EDUCATION */}
                        <section className="break-before-page pt-12">
                            <SectionTitle>{labels.educationTitle}</SectionTitle>
                            <div className="space-y-3">
                                {education.map((edu) => (
                                    <div key={edu.id} className="break-inside-avoid">
                                        <h4 className="text-[12px] font-bold text-slate-900 leading-tight">
                                            {edu.degree}
                                        </h4>
                                        <div className="text-[11px] text-slate-600 font-medium mt-0.5">{edu.school}</div>
                                        <div className="text-[10px] text-slate-400 mt-0.5">{edu.date}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* COURSES */}
                        <section>
                            <SectionTitle>{labels.coursesTitle}</SectionTitle>
                            <div className="space-y-3">
                                {courses.map((course) => (
                                    <div key={course.id} className="break-inside-avoid">
                                        <h4 className="text-[12px] font-bold text-slate-900 leading-tight">
                                            {course.title}
                                        </h4>
                                        <div className="text-[11px] text-slate-600 font-medium mt-0.5">{course.instructor}</div>
                                        <div className="text-[10px] text-slate-400 mt-0.5">{course.platform} • {course.year} • {course.duration}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* LANGUAGES */}
                        <section className="break-inside-avoid">
                            <SectionTitle>{labels.languagesTitle}</SectionTitle>
                            <div className="space-y-1">
                                <div className="flex justify-between text-[12px]">
                                    <span className="text-slate-700 font-medium">{labels.langSpanish}</span>
                                    <span className="text-slate-500">{labels.langSpanishLevel}</span>
                                </div>
                                <div className="flex justify-between text-[12px]">
                                    <span className="text-slate-700 font-medium">{labels.langEnglish}</span>
                                    <span className="text-slate-500">{labels.langEnglishLevel}</span>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                {/* ── FOOTER ── */}
                <footer className="mt-auto pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <span>© {new Date().getFullYear()} Luis Alejandro Mir Jimenez</span>
                        <span>{labels.generatedFrom}</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

/**
 * Reusable section title component for consistent styling.
 */
function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-900 mb-3 pb-1.5 border-b border-slate-200 flex items-center gap-2">
            <div className="w-1 h-3.5 bg-amber-500 rounded-full" />
            {children}
        </h3>
    );
}
