/**
 * 🪝 Hooks Index
 * 
 * Exportación centralizada de todos los custom hooks.
 */

// Core hooks existentes
export { useTheme } from './useTheme';
export { useChatLogic } from './useChatLogic';
export { useTilt } from './useTilt';

// Nuevos hooks de utilidad
export { useReducedMotion } from './useReducedMotion';
export { useMediaQuery, useBreakpoints, breakpoints } from './useMediaQuery';
export { useFocusTrap } from './useFocusTrap';
export { useClickOutside, useClickOutsideMultiple } from './useClickOutside';
export { useLocalStorage, useReadLocalStorage } from './useLocalStorage';
export { useDebounce, useDebouncedCallback, useDebouncedState } from './useDebounce';
export { useScrollLock, useScrollLockControl } from './useScrollLock';
