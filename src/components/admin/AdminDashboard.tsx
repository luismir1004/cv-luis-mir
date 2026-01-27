import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const MOCK_LOGS = [
    "[SYSTEM] Neural Core initialized v6.0",
    "[NETWORK] Establishing secure connection...",
    "[AI] LuisAI Agent active and listening",
    "[TRAFFIC] New visitor from Madrid, ES",
    "[PERFORMANCE] 3D Engine running at 60fps",
    "[SECURITY] Firewall active. No threats detected.",
    "[SYSTEM] Garbage collection complete. Freed 24MB.",
    "[AI] Model confidence level: 98.4%",
    "[TRAFFIC] New visitor from San Francisco, US",
    "[DATA] Knowledge Graph re-indexed.",
];

export const AdminDashboard = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    // const { isDark } = useTheme(); // Unused, keeping dark theme for admin panel
    const [logs, setLogs] = useState<string[]>(MOCK_LOGS.slice(0, 4));
    const [metrics, setMetrics] = useState({ cpu: 12, ram: 45, visitors: 142 });
    const logContainerRef = useRef<HTMLDivElement>(null);

    // Simulate live data
    useEffect(() => {
        if (!isOpen) return;

        const interval = setInterval(() => {
            // Randomize metrics
            setMetrics(prev => ({
                cpu: Math.min(100, Math.max(5, prev.cpu + (Math.random() * 10 - 5))),
                ram: Math.min(100, Math.max(20, prev.ram + (Math.random() * 5 - 2))),
                visitors: Math.max(100, prev.visitors + (Math.random() > 0.7 ? 1 : 0))
            }));

            // Add random log
            if (Math.random() > 0.6) {
                const randomLog = MOCK_LOGS[Math.floor(Math.random() * MOCK_LOGS.length)];
                const timestamp = new Date().toLocaleTimeString('es-ES', { hour12: false });
                setLogs(prev => [`[${timestamp}] ${randomLog}`, ...prev].slice(0, 15));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl p-4 sm:p-8 overflow-hidden font-mono text-xs sm:text-sm"
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 border-b border-indigo-500/30 pb-4">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 uppercase tracking-widest flex items-center gap-3">
                            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                            Admin Command Center
                        </h2>
                        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                            [CLOSE_SESSION]
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">

                        {/* Column 1: System Health */}
                        <div className="col-span-1 border border-slate-700 bg-slate-900/50 rounded-2xl p-6 flex flex-col gap-6">
                            <h3 className="text-slate-400 uppercase tracking-wider mb-2 border-b border-slate-800 pb-2">Hardware Monitor</h3>

                            {/* CPU */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-indigo-400">
                                    <span>V-CPU Load</span>
                                    <span>{metrics.cpu.toFixed(1)}%</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: `${metrics.cpu}%` }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="h-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"
                                    />
                                </div>
                            </div>

                            {/* RAM */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-cyan-400">
                                    <span>Neural Memory</span>
                                    <span>{metrics.ram.toFixed(1)} GB</span>
                                </div>
                                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: `${metrics.ram}%` }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                                    />
                                </div>
                            </div>

                            {/* Visitor Counter */}
                            <div className="mt-auto p-6 bg-indigo-900/20 rounded-xl border border-indigo-500/30 text-center">
                                <p className="text-slate-400 mb-1">Active Sessions</p>
                                <p className="text-5xl font-bold text-white tracking-tighter">{metrics.visitors}</p>
                                <p className="text-green-500 text-xs mt-2 flex items-center justify-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Live Stream
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Terminal Logs */}
                        <div className="col-span-1 lg:col-span-2 border border-slate-700 bg-black/80 rounded-2xl p-6 overflow-hidden flex flex-col font-mono">
                            <h3 className="text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2 flex justify-between">
                                <span>/var/log/syslog</span>
                                <span className="text-yellow-500">TAILING...</span>
                            </h3>
                            <div ref={logContainerRef} className="flex-1 overflow-y-auto space-y-2 text-green-500/90 selection:bg-green-900/50">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="border-l-2 border-green-900 pl-3 hover:bg-green-900/10 transition-colors"
                                    >
                                        <span className="opacity-50 mr-2">{'>'}</span>
                                        {log}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
