import { dpuseESLintConfig } from '@/index.ts';
import { ESLint } from 'eslint';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { beforeAll, describe, expect, it } from 'vitest';

// ── Constants ────────────────────────────────────────────────────────────────────────────────────────────────────────

const FIXTURE_DIRECTORY = fileURLToPath(new URL('fixtures/project', import.meta.url));

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

// ESLint only checks rule names and options when it lints, so a plugin upgrade that renames a rule or changes its
// options is caught here rather than in every consuming project.
describe('dpuseESLintConfig', () => {
    let eslint: ESLint;
    let results: ESLint.LintResult[];

    beforeAll(async () => {
        eslint = createESLint();
        results = await eslint.lintFiles(['src/**/*.ts']);
    }, 60_000); // Type-aware linting builds a TypeScript program, which is slow on a cold start.

    it('lints without configuration errors', () => {
        expect(results).toHaveLength(2);
        for (const result of results) expect(result.fatalErrorCount).toBe(0);
    });

    it('enables no deprecated rules', () => {
        for (const result of results) expect(result.usedDeprecatedRules).toEqual([]);
    });

    it('accepts code that relies on the DPUse rule overrides', () => {
        expect(getMessages(results, 'conventions.ts')).toEqual([]);
    });

    it('reports code that breaks the DPUse rule settings', () => {
        expect(getMessages(results, 'violations.ts')).toEqual([
            { ruleId: 'unicorn/consistent-class-member-order', severity: 2 },
            { ruleId: 'unicorn/text-encoding-identifier-case', severity: 2 },
            { ruleId: '@typescript-eslint/no-unused-vars', severity: 1 }
        ]);
    });

    it('applies project rules last, so they override the shared defaults', async () => {
        const config = (await createESLint({ rules: { 'unicorn/no-null': 'error' } }).calculateConfigForFile('src/conventions.ts')) as ESLint.ConfigData;
        expect(config.rules?.['unicorn/no-null']).toEqual([2, expect.anything()]);
    });

    it('applies the DPUse overrides to files outside the TypeScript scope', async () => {
        const config = (await eslint.calculateConfigForFile('scripts/tool.mjs')) as ESLint.ConfigData;
        expect(config.rules?.['unicorn/no-null']).toEqual([0, expect.anything()]);
        expect(config.rules?.['@typescript-eslint/no-unused-vars']).toBeUndefined();
    });

    it('applies no JavaScript rules to files in other languages', async () => {
        // A project linting CSS adds its own block for it; an empty one stands in, so ESLint treats the file as linted.
        const withCSS = new ESLint({ cwd: FIXTURE_DIRECTORY, overrideConfig: [...dpuseESLintConfig({}), { files: ['**/*.css'] }], overrideConfigFile: true });
        const config = (await withCSS.calculateConfigForFile('src/styles.css')) as ESLint.ConfigData;
        expect(Object.keys(config.rules ?? {})).toEqual([]);
    });

    it('ignores the standard build and report directories, plus any extra ignores', async () => {
        const extended = createESLint({ ignores: ['generated/**'] });
        for (const filePath of ['bundle-analysis-reports/x.js', 'dist/x.js', 'generated/x.ts', 'licenses/x.js']) {
            expect(await extended.isPathIgnored(filePath), filePath).toBe(true);
        }
        expect(await extended.isPathIgnored('src/x.ts')).toBe(false);
    });

    it('passes core modules through to the import resolver', async () => {
        const config = (await createESLint({ importCoreModules: ['cloudflare:workers'] }).calculateConfigForFile('src/conventions.ts')) as ESLint.ConfigData;
        expect(config.settings?.['import-x/core-modules']).toEqual(['cloudflare:workers']);
    });
});

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

/** Creates an ESLint instance that lints the fixture project with the shared configuration only. */
function createESLint(options: Parameters<typeof dpuseESLintConfig>[0] = {}): ESLint {
    return new ESLint({
        cwd: FIXTURE_DIRECTORY,
        overrideConfig: dpuseESLintConfig({ tsconfigPath: path.join(FIXTURE_DIRECTORY, 'tsconfig.json'), tsconfigRootDir: FIXTURE_DIRECTORY, ...options }),
        overrideConfigFile: true // Stops ESLint picking up this repository's own 'eslint.config.js'.
    });
}

/** Returns the rule and severity of each message reported for a fixture file. */
function getMessages(results: ESLint.LintResult[], fileName: string): { ruleId: string | null; severity: number }[] {
    const result = results.find((result) => path.basename(result.filePath) === fileName);
    if (result === undefined) throw new Error(`No lint result for '${fileName}'.`);
    return result.messages.map(({ ruleId, severity }) => ({ ruleId, severity }));
}
