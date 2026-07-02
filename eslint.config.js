// ── Local (DPUse ESLint) Framework
import { dpuseESLintConfig } from './src/index.ts';

// ── DPUse ESLint Configuration ───────────────────────────────────────────────────────────────────────────────────────

/** @type {import('eslint').Linter.Config[]} */
const config = dpuseESLintConfig({ tsconfigPath: './tsconfig.json', tsconfigRootDir: import.meta.dirname });

export default config;
