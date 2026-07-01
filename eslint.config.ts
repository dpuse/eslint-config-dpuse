// ── Local (DPUse ESLint) Framework
import { dpuseESLintConfig } from '@/index.ts';

// ── DPUse ESLint Configuration ───────────────────────────────────────────────────────────────────────────────────────

export default dpuseESLintConfig({ tsconfigPath: './tsconfig.json', tsconfigRootDir: import.meta.dirname });
