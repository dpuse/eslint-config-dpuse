/**
 * ESLint configuration.
 */
declare const _default: ({
    ignores: string[];
    files?: undefined;
    languageOptions?: undefined;
    plugins?: undefined;
    settings?: undefined;
    rules?: undefined;
} | {
    files: string[];
    languageOptions: {
        parser: any;
        parserOptions: {
            project: string;
        };
    };
    plugins: {
        '@typescript-eslint': any;
        import: any;
        unicorn: any;
        sonarjs: any;
        security: any;
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
    rules: any;
    ignores?: undefined;
})[];
export default _default;
