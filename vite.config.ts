import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'framer-motion'],
                    'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
                    'ui-vendor': ['sonner', 'clsx', 'tailwind-merge'],
                },
            },
        },
    },
})
