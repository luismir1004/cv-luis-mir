/**
 * 🎨 Global Type Declarations
 * 
 * Extensión global de JSX.IntrinsicElements para Three.js.
 * Este archivo debe ser incluido automáticamente por TypeScript.
 */

import type { ThreeElements } from '@react-three/fiber';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        // Extendemos IntrinsicElements con todos los elementos de Three.js
        interface IntrinsicElements extends ThreeElements { }
    }
}

// Necesario para que TypeScript trate este archivo como un módulo
export { };
