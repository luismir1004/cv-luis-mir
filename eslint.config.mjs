import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
    ...nextCoreWebVitals,
    globalIgnores([
        '.next/**',
        'node_modules/**',
        'playwright-report/**',
        'test-results/**',
        'scripts/**',
    ]),
]);

export default eslintConfig;
