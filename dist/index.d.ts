import type { Linter } from 'eslint';
/** Options accepted by the shared DPUse base ESLint configuration, common to every DPUse project regardless of framework. */
export interface DPUseBaseESLintConfigOptions {
    /** Glob patterns for the files to lint. */
    files: string[];
    /** Extra glob patterns to ignore, on top of the standard DPUse build/report directories. */
    ignores?: string[];
    /** Project-specific rule overrides, applied last so they take precedence over the shared defaults. */
    rules?: Linter.RulesRecord;
}
/** Options accepted by the shared DPUse TypeScript ESLint configuration factory. */
export interface DPUseESLintConfigOptions extends Omit<DPUseBaseESLintConfigOptions, 'files'> {
    /** Glob patterns for the files to type-check. Defaults to the common DPUse project layout. */
    files?: string[];
    /** Module specifiers that `import-x` should treat as resolvable core modules (e.g. `cloudflare:workers`). */
    importCoreModules?: string[];
    /** Path to the consuming project's `tsconfig.json`. Defaults to `./tsconfig.json`, used by every DPUse project. */
    tsconfigPath?: string;
    /** The consuming project's root directory. Defaults to `process.cwd()`, correct as long as ESLint is run from the project root. */
    tsconfigRootDir?: string;
}
/** The rules, plugins, and ignores shared by every DPUse project, TypeScript or otherwise (e.g. dpuse-app's Vue setup). */
export declare function dpuseBaseESLintConfig(options: DPUseBaseESLintConfigOptions): Linter.Config[];
export declare function dpuseESLintConfig(options: DPUseESLintConfigOptions): Linter.Config[];
export default dpuseESLintConfig;
//# sourceMappingURL=index.d.ts.map