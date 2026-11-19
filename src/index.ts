// ── External Dependencies & Registrations
import globals from 'globals';
import type { Linter } from 'eslint';
import { recommended as pluginCommentsRecommended } from '@eslint-community/eslint-plugin-eslint-comments/configs';
import { flatConfigs as pluginImportFlatConfigs } from 'eslint-plugin-import-x';
import pluginJS from '@eslint/js';
import pluginN from 'eslint-plugin-n';
import { configs as pluginRegexpConfigs } from 'eslint-plugin-regexp';
import pluginUnicorn from 'eslint-plugin-unicorn';
import skipFormatting from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

// ── Types ────────────────────────────────────────────────────────────────────────────────────────────────────────────

/**
 * Options accepted by the shared DPUse base ESLint configuration, common to every DPUse project regardless of
 * framework.
 */
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
    /**
     * Path to the consuming project's `tsconfig.json`, used by the import resolver. Defaults to `./tsconfig.json`, used
     * by every DPUse project.
     */
    tsconfigPath?: string;
    /**
     * The consuming project's root directory. Defaults to `process.cwd()`, correct as long as ESLint is run from the
     * project root.
     */
    tsconfigRootDir?: string;
}

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

// Everything except code files, for 'ignores'. A block limited this way, rather than by 'files', keeps its rules off
// other languages without also telling ESLint to lint code files that the project's 'files' leave out.
const NON_CODE_FILES = ['**/*', '!**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx,vue}'];

// ── ESLint Configuration ─────────────────────────────────────────────────────────────────────────────────────────────

/**
 * The rules, plugins, and ignores shared by every DPUse project, TypeScript or otherwise (e.g. dpuse-app's Vue
 * setup).
 */
export function dpuseBaseESLintConfig(options: DPUseBaseESLintConfigOptions): Linter.Config[] {
    const { files, ignores = [], rules = {} } = options;

    return defineConfig(
        // Ignores.
        globalIgnores(['bundle-analysis-reports/**', 'dependency-check-bin/**', 'dependency-check-reports/**', 'dist/**', 'licenses/**', ...ignores]),

        // Plugin configurations and rule overrides. Limited to code files rather than 'files', so a script outside
        // 'files' (e.g. a '.mjs' script) still gets the DPUse settings, while a file in another language (e.g. '.css')
        // gets none of these JavaScript rules, which ESLint refuses to run on it.
        {
            ignores: NON_CODE_FILES,
            extends: [
                pluginCommentsRecommended,
                pluginImportFlatConfigs.recommended,
                {
                    plugins: { n: pluginN },
                    rules: {
                        'n/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
                        'n/no-unsupported-features/node-builtins': 'error'
                    }
                },
                pluginRegexpConfigs['flat/recommended'],
                pluginUnicorn.configs.recommended,
                skipFormatting
            ],
            rules: {
                'sort-imports': ['warn', { allowSeparatedGroups: true, ignoreCase: true, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] }],

                '@eslint-community/eslint-comments/require-description': 'warn',

                'import-x/no-duplicates': 'off', // A long import list is split into several one-line imports from the same module, rather than wrapped.

                'unicorn/consistent-boolean-name': [
                    'error',
                    {
                        // DPUse convention: a boolean may lead with its subject, then the verb (viewportIsWide,
                        // viewportNeedsTopEdgeLine).
                        ignore: ['^[a-z]+(Is|Are|Has|Have|Can|Should|Was|Were|Did|Will|Requires|Needs)[A-Z]']
                    }
                ],
                'unicorn/consistent-class-member-order': [
                    'error',
                    {
                        // DPUse convention: private helpers are positioned after the public methods that use them, not
                        // before.
                        order: ['static-field', 'static-block', 'static-method', 'private-field', 'public-field', 'constructor', 'public-method', 'private-method']
                    }
                ],
                'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
                'unicorn/no-asterisk-prefix-in-documentation-comments': 'off', // VS Code adds the ' * ' prefix, and TypeScript drops it when reading the comment.
                'unicorn/no-null': 'off', // Null is required for JSON interop.
                'unicorn/single-line-block-comment-style': 'off', // Prefer compact single line when appropriate.
                'unicorn/switch-case-braces': ['warn', 'avoid'],
                'unicorn/text-encoding-identifier-case': ['error', { withDash: true }] // 'utf-8' is the standard name TextDecoder and chardet use, and Node accepts it too.
            }
        },

        // TypeScript and project rule overrides. Limited to 'files', where the TypeScript plugin is set up.
        {
            files,
            rules: {
                // A leading underscore marks a binding that exists only to be discarded, such as the key omitted by a
                // destructuring rest.
                '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

                '@typescript-eslint/no-unsafe-class-instance-assignment': 'off', // Off until typescript-eslint fixes it. In 8.73.0 it overflows the stack on Vite and Rolldown plugin types.

                ...rules
            }
        }
    );
}

/**
 * The full DPUse ESLint configuration for a TypeScript project: the base configuration plus type-aware TypeScript
 * rules.
 */
export function dpuseESLintConfig(options: DPUseESLintConfigOptions): Linter.Config[] {
    const {
        files = ['eslint.config.js', 'src/**/*.ts', 'tests/**/*.ts', 'vite.config.ts', 'vitest.config.ts'],
        ignores = [],
        importCoreModules = [],
        rules = {},
        tsconfigPath = './tsconfig.json',
        tsconfigRootDir: tsconfigRootDirectory = process.cwd()
    } = options;

    return defineConfig(
        // ESLint's own recommended rules. Before the TypeScript configs, which switch off the ones TypeScript checks
        // better.
        { ignores: NON_CODE_FILES, extends: [pluginJS.configs.recommended] },

        // Plain JavaScript files in DPUse projects are Node scripts, so their Node globals ('console', 'process') are
        // declared. TypeScript files need none, because TypeScript checks names itself.
        { files: ['**/*.{cjs,js,mjs}'], languageOptions: { globals: globals.node } },

        // Linting scope, strict TypeScript type-checking, and module resolver.
        {
            files,
            extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
            languageOptions: {
                // The project service type-checks each file with its nearest 'tsconfig.json', as the editor does.
                parserOptions: { projectService: true, tsconfigRootDir: tsconfigRootDirectory }
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
