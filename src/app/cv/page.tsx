"use client";

import { useEffect, useState } from "react";
import { PERSONAL_INFO, PROFILE, EXPERIENCE, EDUCATION, TECH_STACK, PROJECTS_DATA } from "@/data/cv-data";
import { Mail, ExternalLink, Printer, MessageCircle } from "lucide-react";

export default function CVPage() {

    const [credentials, setCredentials] = useState<{ id: string, hash: string } | null>(null);

    // Auto-print on load for that "System Output" feel and generate credentials
    useEffect(() => {
        setCredentials({
            id: Math.random().toString(36).substring(2, 15).toUpperCase(),
            hash: Date.now().toString(16).toUpperCase()
        });

        const timer = setTimeout(() => {
            window.print();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans p-0 md:p-8 print:p-0">

            {/* FAB - Print Button (Hidden when printing) */}
            <button
                onClick={() => window.print()}
                className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-none shadow-2xl print:hidden hover:bg-slate-800 transition-all z-50 flex items-center gap-2 font-bold uppercase tracking-widest text-xs"
            >
                <Printer className="w-4 h-4" />
                <span className="hidden md:inline">Descargar PDF</span>
            </button>

            {/* A4 Container */}
            <div className="max-w-[210mm] mx-auto bg-white print:max-w-none print:mx-0 min-h-[297mm] shadow-2xl print:shadow-none p-12 md:p-16 relative overflow-hidden">

                {/* Header Section */}
                <header className="border-b-4 border-black pb-8 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black mb-2 leading-none">
                            {PERSONAL_INFO.name}
                        </h1>
                        <h2 className="text-xl text-slate-500 font-medium tracking-widest uppercase">
                            {PERSONAL_INFO.titles[0]} <span className="text-slate-300 mx-2">{`//`}</span> {PERSONAL_INFO.titles[1]}
                        </h2>
                    </div>
                    <div className="text-right text-xs space-y-1.5 font-mono text-slate-600">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-end gap-2 hover:text-black hover:underline group">
                            {PERSONAL_INFO.email} <Mail className="w-3 h-3 group-hover:text-black" />
                        </a>
                        {PERSONAL_INFO.phone && (
                            <a href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-2 hover:text-black hover:underline group">
                                WhatsApp <MessageCircle className="w-3 h-3 group-hover:text-black" />
                            </a>
                        )}
                        <div className="flex items-center justify-end gap-2 text-slate-400">
                            Caracas, VE • Remote <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse print:hidden" />
                        </div>
                    </div>
                </header>

                {/* Main Grid */}
                <div className="grid grid-cols-12 gap-8 print:gap-10">

                    {/* Left Column (Main Content) */}
                    <div className="col-span-12 md:col-span-8 space-y-10">

                        {/* Summary */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 border-b border-slate-100 pb-2">
                                Professional Summary
                            </h3>
                            <p className="text-slate-800 leading-relaxed text-justify text-sm font-medium">
                                {PROFILE.text}
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">
                                Experience
                            </h3>
                            <div className="space-y-8">
                                {EXPERIENCE.map((job) => (
                                    <div key={job.id} className="group">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="text-lg font-bold text-black group-hover:text-slate-700 transition-colors">
                                                {job.role}
                                            </h4>
                                            <span className="text-xs font-mono font-medium text-slate-500">
                                                {job.date}
                                            </span>
                                        </div>
                                        <div className="text-xs font-bold text-emerald-700 mb-3 uppercase tracking-wide">
                                            {job.company}
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-3 text-justify">
                                            {job.description}
                                        </p>
                                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                                            {job.technologies?.map((tech, i) => (
                                                <span key={tech} className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                                                    {i > 0 && <span className="mr-3 text-slate-200">/</span>}
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Significant Projects */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">
                                Key Projects
                            </h3>
                            <div className="grid grid-cols-1 gap-5">
                                {PROJECTS_DATA.slice(0, 3).map((project) => (
                                    <div key={project.id} className="border-l-2 border-slate-100 pl-4 hover:border-black transition-colors">
                                        <div className="flex justify-between items-center mb-1">
                                            <h5 className="font-bold text-sm text-black">{project.title}</h5>
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-600 hover:underline uppercase font-bold flex items-center gap-1 print:hidden">
                                                Live Demo <ExternalLink className="w-2.5 h-2.5" />
                                            </a>
                                        </div>
                                        <p className="text-xs text-slate-600 mb-1 leading-snug">{project.description}</p>
                                        <p className="text-[10px] text-slate-400 italic font-medium">Impact: {project.outcome}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Column (Sidebar info) */}
                    <div className="col-span-12 md:col-span-4 space-y-10 pl-0 md:pl-4 print:pl-4">

                        {/* Skills */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">
                                Expertise
                            </h3>
                            <div className="space-y-6">
                                {TECH_STACK.map((group) => (
                                    <div key={group.title}>
                                        <h4 className="text-[10px] font-black uppercase text-slate-900 mb-2">
                                            {group.title}
                                        </h4>
                                        <div className="text-xs text-slate-600 leading-relaxed font-medium">
                                            {group.skills.map((skill) => skill.name).join(", ")}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b border-slate-100 pb-2">
                                Education
                            </h3>
                            <div className="space-y-5">
                                {EDUCATION.map((edu) => (
                                    <div key={edu.id}>
                                        <h4 className="text-sm font-bold text-black leading-tight">
                                            {edu.degree}
                                        </h4>
                                        <div className="text-xs text-emerald-700 font-bold mt-1">{edu.school}</div>
                                        <div className="text-[10px] text-slate-400 mt-0.5 font-mono">{edu.date}</div>
                                        <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Footer Note */}
                        <div className="pt-20 mt-auto">
                            <div className="border p-4 border-slate-200 text-center">
                                <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                                    Verified Digital Credential
                                </p>
                                <div className="text-[8px] text-slate-300 break-all leading-tight font-mono">
                                    {credentials ? (
                                        <>
                                            ID: {credentials.id}
                                            <br />
                                            HASH: {credentials.hash}
                                        </>
                                    ) : (
                                        <>Generating Secure ID...</>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
