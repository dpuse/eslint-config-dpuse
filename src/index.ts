// ── External Dependencies & Registrations
import type { Linter } from 'eslint';
import pluginComments from '@eslint-community/eslint-plugin-eslint-comments';
import { flatConfigs as pluginImportFlatConfigs } from 'eslint-plugin-import-x';
import { configs as pluginRegexpConfigs } from 'eslint-plugin-regexp';
import pluginSecurity from 'eslint-plugin-security';
import pluginSonarJS from 'eslint-plugin-sonarjs';
import pluginUnicorn from 'eslint-plugin-unicorn';
import skipFormatting from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

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
    /** Path to the consuming project's `tsconfig.json`, used for typed linting and import resolution. */
    tsconfigPath: string;
    /** The consuming project's root directory, e.g. `import.meta.dirname` from its own `eslint.config.ts`. */
    tsconfigRootDir: string;
}

/** Configuration export. */
export function dpuseESLintConfig(options: DPUseESLintConfigOptions): Linter.Config[] {
    const { files = ['eslint.config.*', 'src/**/*.ts'], ignores = [], importCoreModules = [], rules = {}, tsconfigPath, tsconfigRootDir } = options;

    return defineConfig(
        // Linting scope, strict TypeScript type-checking, and module resolver.
        {
            files,
            extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
            languageOptions: {
                parserOptions: { project: tsconfigPath, tsconfigRootDir }
            },
            settings: {
                'import-x/core-modules': importCoreModules,
                'import-x/resolver': {
                    typescript: { project: [tsconfigPath] }
                }
            }
        },

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
        pluginRegexpConfigs['flat/recommended'],
        pluginSecurity.configs.recommended,
        pluginSonarJS.configs.recommended,
        pluginUnicorn.configs.recommended,
        skipFormatting,

        // Rule overrides.
        {
            rules: {
                'sort-imports': ['warn', { allowSeparatedGroups: true, ignoreCase: true, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'] }],

                '@typescript-eslint/no-unused-vars': 'warn',

                '@eslint-community/eslint-comments/require-description': 'warn',

                'security/detect-object-injection': 'off',

                'sonarjs/no-commented-code': 'warn',
                'sonarjs/no-dead-store': 'warn',
                'sonarjs/no-unused-vars': 'warn',
                'sonarjs/todo-tag': 'warn',

                'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
                'unicorn/no-null': 'off',
                'unicorn/switch-case-braces': ['warn', 'avoid'],

                ...rules
            }
        }
    );
}

export default dpuseESLintConfig;
