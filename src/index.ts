// ── External Dependencies & Registrations
import type { Linter } from 'eslint';
import pluginComments from '@eslint-community/eslint-plugin-eslint-comments';
import { flatConfigs as pluginImportFlatConfigs } from 'eslint-plugin-import-x';
import pluginN from 'eslint-plugin-n';
import { configs as pluginRegexpConfigs } from 'eslint-plugin-regexp';
import pluginSecurity from 'eslint-plugin-security';
import pluginSonarJS from 'eslint-plugin-sonarjs';
import pluginUnicorn from 'eslint-plugin-unicorn';
import skipFormatting from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

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

// ── ESLint Configuration ─────────────────────────────────────────────────────────────────────────────────────────────

/** The rules, plugins, and ignores shared by every DPUse project, TypeScript or otherwise (e.g. dpuse-app's Vue setup). */
export function dpuseBaseESLintConfig(options: DPUseBaseESLintConfigOptions): Linter.Config[] {
    const { files, ignores = [], rules = {} } = options;

    return defineConfig(
        // Ignores.
        globalIgnores(['bundle-analysis-reports/**', 'dependency-check-bin/**', 'dependency-check-reports/**', 'dist/**', 'licenses/**', ...ignores]),

        // Plugin configurations.
        {
            // '@eslint-community/eslint-comments' only ships a legacy config; manually convert to flat format.
            plugins: { '@eslint-community/eslint-comments': pluginComments },
            rules: {
                '@eslint-community/eslint-comments/disable-enable-pair': 'error',
                '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
                '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
                '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
                '@eslint-community/eslint-comments/no-unused-enable': 'error'
            }
        },
        pluginImportFlatConfigs.recommended,
        {
            plugins: { n: pluginN },
            rules: {
                'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
                'n/no-unsupported-features/node-builtins': 'error'
            }
        },
        pluginRegexpConfigs['flat/recommended'],
        pluginSecurity.configs.recommended,
        pluginSonarJS.configs.recommended,
        pluginUnicorn.configs.recommended,
        skipFormatting,

        // Rule overrides.
        {
            files,
            rules: {
                'sort-imports': ['warn', { allowSeparatedGroups: true, ignoreCase: true, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] }],

                '@typescript-eslint/no-unused-vars': 'warn',

                '@eslint-community/eslint-comments/require-description': 'warn',

                'security/detect-object-injection': 'off', // Generates too many false positives.

                'sonarjs/no-commented-code': 'warn',
                'sonarjs/no-dead-store': 'warn',
                'sonarjs/no-unused-vars': 'warn',
                'sonarjs/todo-tag': 'warn',

                'unicorn/consistent-class-member-order': [
                    'error',
                    {
                        // DPUse convention: private helpers are positioned after the public methods that use them, not before.
                        order: ['static-field', 'static-block', 'static-method', 'private-field', 'public-field', 'constructor', 'public-method', 'private-method']
                    }
                ],
                'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
                'no-non-function-verb-prefix': 'off',
                'unicorn/no-null': 'off', // Null is required for JSON interop.
                'unicorn/switch-case-braces': ['warn', 'avoid'],

                ...rules
            }
        }
    );
}

export function dpuseESLintConfig(options: DPUseESLintConfigOptions): Linter.Config[] {
    const {
        files = ['eslint.config.js', 'src/**/*.ts', 'vite.config.ts', 'vitest.config.ts'],
        ignores = [],
        importCoreModules = [],
        rules = {},
        tsconfigPath = './tsconfig.json',
        tsconfigRootDir: tsconfigRootDirectory = process.cwd()
    } = options;

    return defineConfig(
        // Linting scope, strict TypeScript type-checking, and module resolver.
        {
            files,
            extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
            languageOptions: {
                parserOptions: { project: tsconfigPath, tsconfigRootDir: tsconfigRootDirectory }
            },
            settings: {
                'import-x/core-modules': importCoreModules,
                'import-x/resolver': {
                    typescript: { project: [tsconfigPath] }
                }
            }
        },

        ...dpuseBaseESLintConfig({ files, ignores, rules })
    );
}

export default dpuseESLintConfig;
