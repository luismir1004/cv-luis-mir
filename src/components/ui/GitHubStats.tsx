import { motion } from 'framer-motion';
import Image from 'next/image';

export const GitHubStats = ({ isDark }: { isDark: boolean }) => {
    // Dynamic theme colors for stats
    const statsTheme = isDark ? 'radical' : 'default';
    const langTheme = isDark ? 'radical' : 'default';

    return (
        <div className="flex flex-col gap-4 w-full">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Open Source Activity
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* General Stats */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm"
                >
                    <Image
                        src={`https://github-readme-stats.vercel.app/api?username=luismir1004&show_icons=true&theme=${statsTheme}&hide_border=true&bg_color=00000000`}
                        alt="GitHub Stats"
                        width={500}
                        height={200}
                        className="w-full h-auto dark:invert-[.05]"
                        unoptimized
                    />
                </motion.div>

                {/* Top Languages */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-sm"
                >
                    <Image
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=luismir1004&layout=compact&theme=${langTheme}&hide_border=true&bg_color=00000000`}
                        alt="Top Languages"
                        width={500}
                        height={200}
                        className="w-full h-auto dark:invert-[.05]"
                        unoptimized
                    />
                </motion.div>
            </div>

            <motion.a
                href="https://github.com/luismir1004"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mt-2 group"
            >
                View full profile
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
        </div>
    );
};
