import type { Linter } from 'eslint';
/** Options accepted by the shared DPUse ESLint configuration factory. */
export interface DPUseESLintConfigOptions {
    /** Glob patterns for the files to type-check. Defaults to the common DPUse project layout. */
    files?: string[];
    /** Extra glob patterns to ignore, on top of the standard DPUse build/report directories. */
    ignores?: string[];
    /** Module specifiers that `import-x` should treat as resolvable core modules (e.g. `cloudflare:workers`). */
    importCoreModules?: string[];
    /** Project-specific rule overrides, applied last so they take precedence over the shared defaults. */
    rules?: Linter.RulesRecord;
    /** Path to the consuming project's `tsconfig.json`. Defaults to `./tsconfig.json`, used by every DPUse project. */
    tsconfigPath?: string;
    /** The consuming project's root directory. Defaults to `process.cwd()`, correct as long as ESLint is run from the project root. */
    tsconfigRootDir?: string;
}
export declare function dpuseESLintConfig(options: DPUseESLintConfigOptions): Linter.Config[];
export default dpuseESLintConfig;
//# sourceMappingURL=index.d.ts.map