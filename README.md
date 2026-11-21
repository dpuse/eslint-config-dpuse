# DPUse ESLint Configuration

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![CI](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml)
[![CodeQL](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/eslint-config-dpuse/security/code-scanning)
![Coverage](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdpuse%2Feslint-config-dpuse%2Fmain%2Fcode-health-reports%2Fvitest%2Fbadge.json)
[![npm version](https://img.shields.io/npm/v/@dpuse/eslint-config-dpuse?label=npm)](https://www.npmjs.com/package/@dpuse/eslint-config-dpuse)

Common ESLint configuration used across DPUse projects.

[Report a Vulnerability](https://github.com/dpuse/eslint-config-dpuse/security/advisories/new) · [Open an Issue](https://github.com/dpuse/eslint-config-dpuse/issues)

## About DPUse

DPUse (Data Positioning & Use) is a browser-based app that helps you prepare your data for use in two main steps: Sourcing and Contextualising. Once your data is contextualised, Presentations and Cookbooks give you two ways to put it to use.

**Sourcing** uses Connectors to link to applications, databases, file stores, and curated datasets. These Connections help you set up tabular Data Views from your sources.

**Contextualising** maps events from your Data Views to detailed Context Models. These models give the DPUse Engine the structure it needs to create clear transactions, facts, or observations.

**Presentations** use ready-made Presenters to show your contextualised data in a meaningful way as soon as it's ready.

**Cookbooks** of Recipes guide you in building Data Apps, and additional Presenters, with your contextualised data using your preferred tools.

<!-- OPENING_END -->

<!-- USAGE_START -->

## Usage

This [package](https://www.npmjs.com/package/@dpuse/eslint-config-dpuse) is available on [npm](https://www.npmjs.com/). Install it with:

```bash
npm install -D @dpuse/eslint-config-dpuse eslint
```

_Requires [Node.js](https://nodejs.org/) 24 or later, [npm](https://www.npmjs.com/) 12 or later, and `eslint` 10.15.0 or later as a peer dependency._

> [!WARNING]
> Built for DPUse projects and their conventions. You are welcome to use or adapt it, but it may change without notice to suit DPUse.

To work on the source instead, clone this repository.

```bash
git clone https://github.com/dpuse/eslint-config-dpuse.git
cd eslint-config-dpuse
npm install
```

_Working on the source also requires [TypeScript](https://www.typescriptlang.org/) 6.0.3 or a later 6.0 release. Later versions, including TypeScript 7, are not supported yet._

This repository is managed using the common set of actions provided by [@dpuse/dpuse-development](https://github.com/dpuse/dpuse-development). See the `scripts` block in [package.json](https://github.com/dpuse/eslint-config-dpuse/blob/main/package.json) for details.

### Release Status

DPUse is a new product, and this package is a release candidate: complete and in use across DPUse, but not yet at its first stable release.

The last number of the version increases with every push to GitHub, whether or not that push is released, so the versions of consecutive releases can skip numbers, for example from 1.1.120 to 1.1.124. Until the first stable release, any release may include changes that need updates in the projects that use it, so depend on an exact version to avoid unexpected changes. Once stable, versions will follow [Semantic Versioning](https://semver.org): breaking changes in the first number, new features in the second and fixes in the last.

Every release is listed on the [Releases](https://github.com/dpuse/eslint-config-dpuse/releases) page.

<!-- USAGE_END -->

## Configuration

The package uses ESLint's flat configuration format and is published as an ES module. Create `eslint.config.js` in the project root:

```js
import { dpuseESLintConfig } from '@dpuse/eslint-config-dpuse';

export default dpuseESLintConfig({
    ignores: ['generated/**'],
    importCoreModules: ['cloudflare:workers'],
    rules: { 'unicorn/no-array-reduce': 'off' }
});
```

Run ESLint from the project root, where it finds `tsconfig.json`.

### Options

| Option              | Default                                                                                      | What it does                                                                                        |
| :------------------ | :------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| `files`             | `['eslint.config.js', 'src/**/*.ts', 'tests/**/*.ts', 'vite.config.ts', 'vitest.config.ts']` | The files linted with the type-aware TypeScript rules.                                              |
| `ignores`           | `[]`                                                                                         | Glob patterns to ignore, added to the folders that are always ignored.                              |
| `rules`             | `{}`                                                                                         | Rule settings for the project. They are applied last, so they override the shared settings.         |
| `importCoreModules` | `[]`                                                                                         | Module names the import rules treat as built in, such as `cloudflare:workers`.                      |
| `tsconfigPath`      | `'./tsconfig.json'`                                                                          | The `tsconfig.json` the import resolver reads.                                                      |
| `tsconfigRootDir`   | `process.cwd()`                                                                              | The project's root folder, where type-aware linting starts looking for each file's `tsconfig.json`. |

A project that sets up its own TypeScript parser, such as a Vue project, uses `dpuseBaseESLintConfig({ files, ignores, rules })` instead. It adds the shared plugins, rule settings and ignores, but not the TypeScript rules. `files` is required.

### What It Includes

- [ESLint's recommended rules](https://eslint.org/docs/latest/rules/).
- [typescript-eslint](https://typescript-eslint.io)'s `strict-type-checked` and `stylistic-type-checked` configurations. Type information comes from the project service, which checks each file with its nearest `tsconfig.json`, as the editor does.
- The recommended configurations of [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn), [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) (with the TypeScript resolver), [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp) and [@eslint-community/eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments).
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)'s checks for syntax and built-in modules that the project's Node.js version does not support.
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier), which turns off the rules that conflict with Prettier.
- Node.js globals, such as `console` and `process`, in plain JavaScript files (`.js`, `.cjs`, `.mjs`).

The plugin rules also apply to JavaScript files outside `files`, such as `.mjs` scripts, but never to files in other languages, such as CSS. These folders are always ignored: `bundle-analysis-reports`, `dependency-check-bin`, `dependency-check-reports`, `dist` and `licenses`.

### DPUse Rule Settings

| Rule                                                     | Setting                                                                      | Why                                                                                         |
| :------------------------------------------------------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| `sort-imports`                                           | Warn. Groups separated by a blank line are sorted separately, ignoring case. | Imports are grouped by where they come from.                                                |
| `import-x/no-duplicates`                                 | Off                                                                          | A long import list is split into several one-line imports from the same module.             |
| `@eslint-community/eslint-comments/require-description`  | Warn                                                                         | A comment that switches a rule off should say why.                                          |
| `unicorn/consistent-boolean-name`                        | Also allows the subject first, such as `viewportIsWide`                      | DPUse names a boolean after its subject, then the verb.                                     |
| `unicorn/consistent-class-member-order`                  | Private methods after public methods                                         | A private helper sits after the public methods that use it.                                 |
| `unicorn/filename-case`                                  | camelCase or PascalCase                                                      | Vue components use PascalCase file names.                                                   |
| `unicorn/no-asterisk-prefix-in-documentation-comments`   | Off                                                                          | VS Code adds the `*` prefix, and TypeScript drops it when reading the comment.              |
| `unicorn/no-null`                                        | Off                                                                          | JSON uses `null`.                                                                           |
| `unicorn/single-line-block-comment-style`                | Off                                                                          | A short block comment may stay on one line.                                                 |
| `unicorn/switch-case-braces`                             | Warn, no braces                                                              | A `case` needs braces only when it declares a variable.                                     |
| `unicorn/text-encoding-identifier-case`                  | `utf-8`, with the dash                                                       | `utf-8` is the standard name, used by `TextDecoder` and accepted by Node.js.                |
| `@typescript-eslint/no-unused-vars`                      | Warn. Names starting with `_` are allowed.                                   | An underscore marks a value that exists only to be discarded.                               |
| `@typescript-eslint/no-unsafe-class-instance-assignment` | Off                                                                          | In typescript-eslint 8.73.0 the rule overflows the stack on Vite and Rolldown plugin types. |

<!-- DEPENDENCY_LICENSES_START -->

## Dependency Licenses

> [!WARNING]
> Dependency licenses are not documented here: @dpuse/eslint-config-dpuse is a development-only tool and is never part of a production release.

<!-- DEPENDENCY_LICENSES_END -->

<!-- QUALITY_SECURITY_START -->

## Quality & Security

This section is updated each time `npm run document` is run. Settings come from the repository's workflow files and GitHub. Test coverage and the Fallow score are measured at the same time.

### Testing

| Check                | Status | What it does                                                                                                                                                                                 |
| :------------------- | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit tests           | ✅ On  | [Vitest](https://vitest.dev) runs the unit tests. Part of the [CI workflow](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Property-based tests | ❌ Off | [fast-check](https://fast-check.dev) runs many random inputs per test to find edge cases, alongside the unit tests.                                                                          |
| Test coverage        | ✅ On  | [Vitest's V8 coverage](https://vitest.dev/guide/coverage) measures the share of source lines the unit tests run.                                                                             |

### Code Quality

| Check         | Status | What it does                                                                                                                                                                                                                                                                                                         |
| :------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linting       | ✅ On  | [ESLint](https://eslint.org) checks the code for errors and style problems, and the [TypeScript](https://www.typescriptlang.org/) compiler type-checks the whole project. Part of the [CI workflow](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Code analysis | ❌ Off | [SonarCloud](https://sonarcloud.io) checks every push for bugs, code smells and vulnerabilities.                                                                                                                                                                                                                     |

### Security Analysis

| Check           | Status | What it does                                                                                                                                                                                                      |
| :-------------- | :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push protection | ✅ On  | [GitHub push protection](https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations) blocks pushes that contain credentials.                                     |
| Static analysis | ✅ On  | [GitHub CodeQL](https://codeql.github.com) scans GitHub Actions and JavaScript/TypeScript for security vulnerabilities, using the extended security queries, on every push and pull request to `main` and weekly. |
| Secret scanning | ✅ On  | [GitHub secret scanning](https://docs.github.com/en/code-security/secret-scanning) detects credentials, such as API keys and tokens, committed to the repository.                                                 |

### Dependencies

| Check               | Status | What it does                                                                                                                                                                                                                                                                                                               |
| :------------------ | :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vulnerability audit | ✅ On  | [npm audit](https://docs.npmjs.com/cli/commands/npm-audit) fails when a shipped dependency has any known vulnerability, or a development dependency has a high or critical one. Part of the [CI workflow](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml) on every push and pull request to `main`. |
| Supply chain risk   | ✅ On  | [Socket.dev](https://socket.dev) flags malicious packages, typosquatting and suspicious behaviour that may not yet have a CVE.                                                                                                                                                                                             |
| Security alerts     | ✅ On  | [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) alerts when a dependency has a known vulnerability, using the GitHub Advisory Database.                                                                                                                                                           |
| Dependency updates  | ❌ Off | [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) can open pull requests for new and vulnerable dependency versions. Dependencies are updated by hand with `npm run check` instead.                                                                                                                 |

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/eslint-config-dpuse/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/eslint-config-dpuse)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/eslint-config-dpuse/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

<!-- QUALITY_SECURITY_END -->

<!-- CONTRIBUTING_LICENSE_START -->

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine and DPUse API, which remain closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/eslint-config-dpuse/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026 Jonathan Terrell

<!-- CONTRIBUTING_LICENSE_END -->
