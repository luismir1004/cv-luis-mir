import { motion } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    id?: string;
}

export const Reveal = ({ children, width = "100%", delay = 0.25, className = "", id }: RevealProps) => {
    return (
        <div id={id} className={className} style={{ position: "relative", width, zIndex: 20 }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.0, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
