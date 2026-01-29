/**
 * 🎨 Global Type Declarations
 * 
 * Extensión global de JSX.IntrinsicElements para Three.js y R3F.
 */

import { ThreeElements } from '@react-three/fiber';

declare global {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements { }
    }
}

// Support for React 19 JSX types where it might be name-spaced under React
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements { }
    }
}
