import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { TranslationSchema } from '../../types';

interface CommandMenuProps {
    t: TranslationSchema;
    toggleTheme: () => void;
    toggleLang: () => void;
    lang: 'es' | 'en';
}

export const CommandMenu = ({ t, toggleTheme, toggleLang, lang }: CommandMenuProps) => {
    const [open, setOpen] = useState(false);
    const { isDark } = useTheme();

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-[100] overflow-hidden p-2"
        >
            <div className="flex items-center border-b border-slate-100 dark:border-slate-800 px-3 pb-2" cmdk-input-wrapper="">
                <svg className="w-5 h-5 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <Command.Input
                    placeholder="Type a command or search..."
                    className="w-full h-10 outline-none bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 font-medium"
                />
            </div>

            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden pt-2">
                <Command.Empty className="py-6 text-center text-sm text-slate-500">No results found.</Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2 selection:bg-transparent">
                    <Command.Item
                        onSelect={() => runCommand(() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        <span>{t.nav_home || "Home"}</span>
                    </Command.Item>
                    <Command.Item
                        onSelect={() => runCommand(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }))}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        <span>{t.projects_title}</span>
                    </Command.Item>
                    <Command.Item
                        onSelect={() => runCommand(() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }))}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>{t.exp_title}</span>
                    </Command.Item>
                </Command.Group>

                <Command.Separator className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2" />

                <Command.Group heading="Settings" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                    <Command.Item
                        onSelect={() => runCommand(toggleTheme)}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                    >
                        {isDark ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                        )}
                        <span>Toggle Theme</span>
                        <span className="ml-auto text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">T</span>
                    </Command.Item>
                    <Command.Item
                        onSelect={() => runCommand(toggleLang)}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                        <span>Change Language ({lang === 'es' ? 'English' : 'Español'})</span>
                        <span className="ml-auto text-xs text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">L</span>
                    </Command.Item>
                </Command.Group>

                <Command.Separator className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2" />

                <Command.Group heading="Socials" className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                    <Command.Item
                        onSelect={() => runCommand(() => window.open('https://github.com/luismir1004', '_blank'))}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-slate-800"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        <span>GitHub</span>
                    </Command.Item>
                </Command.Group>
            </Command.List>

            <div className="border-t border-slate-100 dark:border-slate-800 p-2 text-[10px] text-slate-400 flex items-center justify-between px-3">
                <span>Select</span>
                <div className="flex gap-1">
                    <span className="bg-slate-100 dark:bg-slate-800 px-1 rounded border border-slate-200 dark:border-slate-700">↵</span>
                    <span>to confirm</span>
                </div>
            </div>
        </Command.Dialog>
    );
};
