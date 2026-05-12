/**
 * ESLint configuration.
 */
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
/** Configuration export. */
declare const _default: ({
    ignores: string[];
    files?: never;
    languageOptions?: never;
    plugins?: never;
    settings?: never;
    rules?: never;
} | {
    files: string[];
    languageOptions: {
        parser: any;
        parserOptions: {
            project: string;
        };
    };
    plugins: {
        '@typescript-eslint': {
            configs: Record<string, import("@typescript-eslint/utils/ts-eslint").ClassicConfig.Config>;
            meta: import("@typescript-eslint/utils/ts-eslint").FlatConfig.PluginMeta;
            rules: typeof import("@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules");
        };
        import: {
            meta: {
                name: string;
                version: string;
            };
            rules: {
                "no-unresolved": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/no-unresolved").MessageId, [(import("eslint-plugin-import-x/rules/no-unresolved").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                named: import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/named").MessageId, [(import("eslint-plugin-import-x/utils").ModuleOptions | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                default: import("@typescript-eslint/utils/ts-eslint").RuleModule<"noDefaultExport", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                namespace: import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/namespace").MessageId, [import("eslint-plugin-import-x/rules/namespace").Options], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-namespace": import("@typescript-eslint/utils/ts-eslint").RuleModule<"noNamespace", [(import("eslint-plugin-import-x/rules/no-namespace").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                export: import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/export").MessageId, [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-mutable-exports": import("@typescript-eslint/utils/ts-eslint").RuleModule<"noMutable", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                extensions: import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/extensions").MessageId, import("eslint-plugin-import-x/rules/extensions").Options, import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-restricted-paths": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/no-restricted-paths").MessageId, [(import("eslint-plugin-import-x/rules/no-restricted-paths").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-internal-modules": import("@typescript-eslint/utils/ts-eslint").RuleModule<"noAllowed", [(import("eslint-plugin-import-x/rules/no-internal-modules").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "group-exports": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/group-exports").MessageId, [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-relative-packages": import("@typescript-eslint/utils/ts-eslint").RuleModule<"noAllowed", [(import("eslint-plugin-import-x/utils").ModuleOptions | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-relative-parent-imports": import("@typescript-eslint/utils/ts-eslint").RuleModule<"noAllowed", [(import("eslint-plugin-import-x/utils").ModuleOptions | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "consistent-type-specifier-style": import("@typescript-eslint/utils/ts-eslint").RuleModule<"inline" | "topLevel", [(import("eslint-plugin-import-x/rules/consistent-type-specifier-style").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-self-import": import("@typescript-eslint/utils/ts-eslint").RuleModule<"self", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-cycle": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/no-cycle").MessageId, [(import("eslint-plugin-import-x/rules/no-cycle").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-named-default": import("@typescript-eslint/utils/ts-eslint").RuleModule<"default", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-named-as-default": import("@typescript-eslint/utils/ts-eslint").RuleModule<"default", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-named-as-default-member": import("@typescript-eslint/utils/ts-eslint").RuleModule<"member", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-anonymous-default-export": import("@typescript-eslint/utils/ts-eslint").RuleModule<"assign" | "anonymous", [(import("eslint-plugin-import-x/rules/no-anonymous-default-export").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-rename-default": import("@typescript-eslint/utils/ts-eslint").RuleModule<"renameDefault", [(import("eslint-plugin-import-x/rules/no-rename-default").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-unused-modules": import("@typescript-eslint/utils/ts-eslint").RuleModule<"notFound" | "unused", import("eslint-plugin-import-x/rules/no-unused-modules").Options[], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-commonjs": import("@typescript-eslint/utils/ts-eslint").RuleModule<"import" | "export", [(import("eslint-plugin-import-x/rules/no-commonjs").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-amd": import("@typescript-eslint/utils/ts-eslint").RuleModule<"amd", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-duplicates": import("@typescript-eslint/utils/ts-eslint").RuleModule<"duplicate", [(import("eslint-plugin-import-x/rules/no-duplicates").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                first: import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/first").MessageId, [(import("eslint-plugin-import-x/rules/first").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "max-dependencies": import("@typescript-eslint/utils/ts-eslint").RuleModule<"max", [(import("eslint-plugin-import-x/rules/max-dependencies").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-extraneous-dependencies": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/no-extraneous-dependencies").MessageId, [(import("eslint-plugin-import-x/rules/no-extraneous-dependencies").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-absolute-path": import("@typescript-eslint/utils/ts-eslint").RuleModule<"absolute", [(import("eslint-plugin-import-x/utils").ModuleOptions | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-nodejs-modules": import("@typescript-eslint/utils/ts-eslint").RuleModule<"builtin", [(import("eslint-plugin-import-x/rules/no-nodejs-modules").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-webpack-loader-syntax": import("@typescript-eslint/utils/ts-eslint").RuleModule<"unexpected", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                order: import("@typescript-eslint/utils/ts-eslint").RuleModule<"error" | "order" | "noLineWithinGroup" | "noLineBetweenGroups" | "oneLineBetweenGroups" | "oneLineBetweenTheMultiLineImport" | "oneLineBetweenThisMultiLineImport" | "noLineBetweenSingleLineImport", [(import("eslint-plugin-import-x/rules/order").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "newline-after-import": import("@typescript-eslint/utils/ts-eslint").RuleModule<"newline", [(import("eslint-plugin-import-x/rules/newline-after-import").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "prefer-default-export": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/prefer-default-export").MessageId, [(import("eslint-plugin-import-x/rules/prefer-default-export").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "prefer-namespace-import": import("@typescript-eslint/utils/ts-eslint").RuleModule<"preferNamespaceImport", [(import("eslint-plugin-import-x/rules/prefer-namespace-import").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-default-export": import("@typescript-eslint/utils/ts-eslint").RuleModule<"preferNamed" | "noAliasDefault", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-named-export": import("@typescript-eslint/utils/ts-eslint").RuleModule<"noAllowed", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-dynamic-require": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/no-dynamic-require").MessageId, [(import("eslint-plugin-import-x/rules/no-dynamic-require").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                unambiguous: import("@typescript-eslint/utils/ts-eslint").RuleModule<"module", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-unassigned-import": import("@typescript-eslint/utils/ts-eslint").RuleModule<"unassigned", [(import("eslint-plugin-import-x/rules/no-unassigned-import").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-useless-path-segments": import("@typescript-eslint/utils/ts-eslint").RuleModule<"useless", [(import("eslint-plugin-import-x/rules/no-useless-path-segments").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "dynamic-import-chunkname": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/dynamic-import-chunkname").MessageId, [(import("eslint-plugin-import-x/rules/dynamic-import-chunkname").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-import-module-exports": import("@typescript-eslint/utils/ts-eslint").RuleModule<"notAllowed", [(import("eslint-plugin-import-x/rules/no-import-module-exports").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-empty-named-blocks": import("@typescript-eslint/utils/ts-eslint").RuleModule<"emptyNamed" | "unused" | "emptyImport", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "exports-last": import("@typescript-eslint/utils/ts-eslint").RuleModule<"end", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-deprecated": import("@typescript-eslint/utils/ts-eslint").RuleModule<"deprecated" | "deprecatedDesc", [], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "imports-first": import("@typescript-eslint/utils/ts-eslint").RuleModule<import("eslint-plugin-import-x/rules/first").MessageId, [(import("eslint-plugin-import-x/rules/first").Options | undefined)?], import("eslint-plugin-import-x/utils").ImportXPluginDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
            };
            cjsRequire: import("eslint-plugin-import-x").CjsRequire;
            importXResolverCompat: typeof import("eslint-plugin-import-x").importXResolverCompat;
            createNodeResolver: typeof import("eslint-plugin-import-x").createNodeResolver;
        } & import("@eslint/core", { with: { "resolution-mode": "require" } }).Plugin & {
            flatConfigs: {
                recommended: import("eslint").Linter.Config<{
                    "import-x/no-unresolved": "error";
                    "import-x/named": "error";
                    "import-x/namespace": "error";
                    "import-x/default": "error";
                    "import-x/export": "error";
                    "import-x/no-named-as-default": "warn";
                    "import-x/no-named-as-default-member": "warn";
                    "import-x/no-duplicates": "warn";
                }>;
                errors: import("eslint").Linter.Config<{
                    "import-x/no-unresolved": 2;
                    "import-x/named": 2;
                    "import-x/namespace": 2;
                    "import-x/default": 2;
                    "import-x/export": 2;
                }>;
                warnings: import("eslint").Linter.Config<{
                    "import-x/no-named-as-default": 1;
                    "import-x/no-named-as-default-member": 1;
                    "import-x/no-rename-default": 1;
                    "import-x/no-duplicates": 1;
                }>;
                'stage-0': import("eslint").Linter.Config<{
                    "import-x/no-deprecated": 1;
                }>;
                react: import("eslint").Linter.Config<{}>;
                'react-native': import("eslint").Linter.Config<{}>;
                electron: import("eslint").Linter.Config<{}>;
                typescript: import("eslint").Linter.Config<{
                    "import-x/named": "off";
                }>;
            };
            configs: {
                recommended: {
                    plugins: ["import-x"];
                    rules: {
                        "import-x/no-unresolved": "error";
                        "import-x/named": "error";
                        "import-x/namespace": "error";
                        "import-x/default": "error";
                        "import-x/export": "error";
                        "import-x/no-named-as-default": "warn";
                        "import-x/no-named-as-default-member": "warn";
                        "import-x/no-duplicates": "warn";
                    };
                    parserOptions: {
                        sourceType: "module";
                        ecmaVersion: 2018;
                    };
                };
                errors: {
                    plugins: ["import-x"];
                    rules: {
                        "import-x/no-unresolved": 2;
                        "import-x/named": 2;
                        "import-x/namespace": 2;
                        "import-x/default": 2;
                        "import-x/export": 2;
                    };
                };
                warnings: {
                    plugins: ["import-x"];
                    rules: {
                        "import-x/no-named-as-default": 1;
                        "import-x/no-named-as-default-member": 1;
                        "import-x/no-rename-default": 1;
                        "import-x/no-duplicates": 1;
                    };
                };
                'stage-0': import("eslint-plugin-import-x").PluginConfig;
                react: {
                    settings: {
                        "import-x/extensions": (".js" | ".jsx")[];
                    };
                    parserOptions: {
                        ecmaFeatures: {
                            jsx: true;
                        };
                    };
                };
                'react-native': {
                    settings: {
                        "import-x/resolver": {
                            node: {
                                extensions: string[];
                            };
                        };
                    };
                };
                electron: {
                    settings: {
                        "import-x/core-modules": string[];
                    };
                };
                typescript: {
                    settings: {
                        "import-x/extensions": readonly [".ts", ".tsx", ".cts", ".mts", ".js", ".jsx", ".cjs", ".mjs"];
                        "import-x/external-module-folders": string[];
                        "import-x/parsers": {
                            "@typescript-eslint/parser": (".ts" | ".tsx" | ".cts" | ".mts")[];
                        };
                        "import-x/resolver": {
                            typescript: true;
                        };
                    };
                    rules: {
                        "import-x/named": "off";
                    };
                };
                'flat/recommended': import("eslint").Linter.Config<{
                    "import-x/no-unresolved": "error";
                    "import-x/named": "error";
                    "import-x/namespace": "error";
                    "import-x/default": "error";
                    "import-x/export": "error";
                    "import-x/no-named-as-default": "warn";
                    "import-x/no-named-as-default-member": "warn";
                    "import-x/no-duplicates": "warn";
                }>;
                'flat/errors': import("eslint").Linter.Config<{
                    "import-x/no-unresolved": 2;
                    "import-x/named": 2;
                    "import-x/namespace": 2;
                    "import-x/default": 2;
                    "import-x/export": 2;
                }>;
                'flat/warnings': import("eslint").Linter.Config<{
                    "import-x/no-named-as-default": 1;
                    "import-x/no-named-as-default-member": 1;
                    "import-x/no-rename-default": 1;
                    "import-x/no-duplicates": 1;
                }>;
                'flat/stage-0': import("eslint").Linter.Config<{
                    "import-x/no-deprecated": 1;
                }>;
                'flat/react': import("eslint").Linter.Config<{}>;
                'flat/react-native': import("eslint").Linter.Config<{}>;
                'flat/electron': import("eslint").Linter.Config<{}>;
                'flat/typescript': import("eslint").Linter.Config<{
                    "import-x/named": "off";
                }>;
            };
        };
        unicorn: import("@eslint/core", { with: { "resolution-mode": "require" } }).Plugin & {
            configs: {
                recommended: import("eslint").Linter.Config;
                unopinionated: import("eslint").Linter.Config;
                all: import("eslint").Linter.Config;
                "flat/all": import("eslint").Linter.Config;
                "flat/recommended": import("eslint").Linter.Config;
            };
        };
        sonarjs: typeof sonarjs;
        security: typeof security;
    };
    settings: {
        'import/resolver': {
            node: {
                extensions: string[];
            };
            typescript: {
                project: string;
            };
        };
    };
    rules: {
        'no-empty': string;
        'prefer-const': string;
        '@typescript-eslint/consistent-type-imports': string;
        '@typescript-eslint/explicit-function-return-type': string;
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/no-import-type-side-effects': string;
        '@typescript-eslint/no-unused-vars': string;
        '@typescript-eslint/restrict-template-expressions': (string | {
            allowNumber: boolean;
        })[];
        '@typescript-eslint/strict-boolean-expressions': string;
        'import/no-duplicates': string;
        'sort-imports': (string | {
            allowSeparatedGroups: boolean;
            ignoreCase: boolean;
            memberSyntaxSortOrder: string[];
        })[];
        'security/detect-object-injection': string[];
        'sonarjs/cognitive-complexity': (string | number)[];
        'sonarjs/no-commented-code': string;
        'sonarjs/no-dead-store': string;
        'sonarjs/no-unused-vars': string;
        'sonarjs/todo-tag': string;
        'unicorn/filename-case': string;
        'unicorn/no-null': string;
        'unicorn/number-literal-case': (string | {
            hexadecimalValue: string;
        })[];
        'unicorn/prefer-switch': string;
        'unicorn/switch-case-braces': string[];
        'import-x/no-unresolved'?: "error";
        'import-x/named'?: "error";
        'import-x/namespace'?: "error";
        'import-x/default'?: "error";
        'import-x/export'?: "error";
        'import-x/no-named-as-default'?: "warn";
        'import-x/no-named-as-default-member'?: "warn";
        'import-x/no-duplicates'?: "warn";
    };
    ignores?: never;
} | {
    files: string[];
    ignores?: never;
    languageOptions?: never;
    plugins?: never;
    settings?: never;
    rules?: never;
})[];
export default _default;
//# sourceMappingURL=index.d.ts.map