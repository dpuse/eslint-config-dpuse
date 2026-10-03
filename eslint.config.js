// ── Local (DPUse ESLint) Framework
import { dpuseESLintConfig } from './src/index.ts';

// ── DPUse ESLint Configuration ───────────────────────────────────────────────────────────────────────────────────────

/** @type {import('eslint').Linter.Config[]} */
const config = dpuseESLintConfig({ ignores: ['tests/fixtures/**'] }); // The fixtures break the rules on purpose.

export default config;
