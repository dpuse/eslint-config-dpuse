/**
 * ESLint configuration.
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable unicorn/no-useless-fallback-in-spread */
/** Vendor dependencies. */
import importPlugin from 'eslint-plugin-import';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import unicorn from 'eslint-plugin-unicorn';
/** Configuration export. */
export default [
    {
        ignores: ['bundle-analysis-reports/**', 'dependency-check-bin/**', 'dependency-check-reports/**', 'docs/**', 'dist/**', 'licenses/**']
    },
    {
        files: ['vite.config.ts', 'app/**/*.ts', 'src/**/*.ts'],
        languageOptions: {
            parser: tseslintParser,
            parserOptions: { project: './tsconfig.json' }
        },
        plugins: {
            '@typescript-eslint': tseslint,
            import: importPlugin,
            unicorn,
            sonarjs,
            security
        },
        settings: {
            'import/resolver': {
                node: { extensions: ['.js', '.mjs', '.ts'] },
                typescript: {
                    project: './tsconfig.json' // Teach eslint-plugin-import about TS aliases.
                }
            }
        },
        rules: {
            ...(tseslint.configs['recommended']?.rules ?? {}),
            ...(tseslint.configs['recommended-type-checked']?.rules ?? {}),
            ...(tseslint.configs['strict-type-checked']?.rules ?? {}),
            ...(tseslint.configs['stylistic-type-checked']?.rules ?? {}),
            ...importPlugin.flatConfigs.recommended.rules, // Import plugin recommended rules.
            ...unicorn.configs.recommended.rules, // Unicorn plugin recommended rules.
            ...sonarjs.configs.recommended.rules, // SonarJS plugin recommended rules.
            ...security.configs.recommended.rules, // Security plugin recommended rules.
            'no-empty': 'warn',
            'prefer-const': 'warn',
            '@typescript-eslint/consistent-type-imports': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-import-type-side-effects': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/restrict-template-expressions': ['warn', { allowNumber: true }],
            '@typescript-eslint/strict-boolean-expressions': 'warn',
            'import/no-duplicates': 'warn',
            'sort-imports': [
                'warn',
                {
                    allowSeparatedGroups: true,
                    ignoreCase: true,
                    memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
                }
            ],
            'sonarjs/no-commented-code': 'warn',
            'sonarjs/no-dead-store': 'warn',
            'sonarjs/no-unused-vars': 'warn',
            'sonarjs/todo-tag': 'warn',
            'unicorn/prefer-switch': 'warn',
            'unicorn/switch-case-braces': ['warn', 'avoid'],
            'unicorn/filename-case': 'off',
            'unicorn/no-null': 'off'
        }
    },
    {
        files: ['eslint.config.ts']
    }
];
//# sourceMappingURL=index.js.map