import { HTMLMotionProps, motion } from 'framer-motion';
import { useTilt } from '../../hooks/useTilt';

interface TiltCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export const TiltCard = ({ children, className, variants, ...props }: TiltCardProps) => {
    const ref = useTilt();
    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            {...props}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-30 rounded-3xl"
                style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)'
                }}
            />
            {children}
        </motion.div>
    );
};
