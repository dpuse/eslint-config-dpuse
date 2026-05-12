# DPUse ESLint Configuration

[![npm version](https://img.shields.io/npm/v/@dpuse/eslint-config-dpuse.svg)](https://www.npmjs.com/package/@dpuse/eslint-config-dpuse)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
<span><!-- OWASP_BADGES_START -->
[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://data-positioning.github.io/eslint-config-dpuse/dependency-check-reports/dependency-check-report.html)

<!-- OWASP_BADGES_END --></span>

Common ESLint configuration used in most DPUse projects.

## Reports & Compliance

### Dependency Check Report

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the npm package `owasp-dependency-check`. We also rely on GitHub Dependabot to continuously check for vulnerabilities across all dependencies.

[View the OWASP Dependency Check Report](https://dpuse.github.io/eslint-config-dpuse/dependency-check-reports/dependency-check-report.html)

### Dependency Licenses

The following table lists top-level production and peer dependencies. All these dependencies (including transitive ones) have been recursively verified to use Apache-2.0, LGPL-3.0-only, or MIT—commercially friendly licenses with minimal restrictions. Developers cloning this repository should independently verify dev and optional dependencies; users of the uploaded library are covered by these checks. We do not include unlicensed dependencies. Used to support development activity and not released as part of the production release. Check if you clone.

<!-- DEPENDENCY_LICENSES_START -->
|Name|Type|Installed|Latest|Latest Released|Deps|Document|
|:-|:-|:-:|:-:|:-|-:|:-|
|@types/eslint-plugin-security|MIT|3.0.1|3.0.1|3 months ago: 2026-01-21|n/a|⚠️ No license file|
|@typescript-eslint/eslint-plugin|MIT|8.59.3|8.59.3|this month: 2026-05-11|n/a|[LICENSE](https://raw.githubusercontent.com/typescript-eslint/typescript-eslint/main/LICENSE)|
|@typescript-eslint/parser|MIT|8.59.3|8.59.3|this month: 2026-05-11|n/a|[LICENSE](https://raw.githubusercontent.com/typescript-eslint/typescript-eslint/main/LICENSE)|
|@typescript-eslint/utils|MIT|8.59.3|8.59.3|this month: 2026-05-11|n/a|[LICENSE](https://raw.githubusercontent.com/typescript-eslint/typescript-eslint/main/LICENSE)|
|eslint|n/a|n/a ⚠️|9.39.4|this month: 2026-05-01|n/a|[LICENSE](https://raw.githubusercontent.com/eslint/eslint/main/LICENSE)|
|eslint-import-resolver-typescript|ISC|4.4.4|4.4.4|10 months ago: 2025-06-25 ⚠️|n/a|[LICENSE](https://raw.githubusercontent.com/import-js/eslint-import-resolver-typescript/master/LICENSE)|
|eslint-plugin-import-x|MIT|4.16.2|4.16.2|2 months ago: 2026-03-11|n/a|[LICENSE](https://raw.githubusercontent.com/un-ts/eslint-plugin-import-x/master/LICENSE)|
|eslint-plugin-prettier|MIT|5.5.5|5.5.5|3 months ago: 2026-01-14|n/a|[LICENSE.md](https://raw.githubusercontent.com/prettier/eslint-plugin-prettier/main/LICENSE.md)|
|eslint-plugin-security|Apache-2.0|4.0.0|4.0.0|2 months ago: 2026-02-19|n/a|[LICENSE](https://raw.githubusercontent.com/eslint-community/eslint-plugin-security/main/LICENSE)|
|eslint-plugin-sonarjs|LGPL-3.0-only|4.0.3|4.0.3|this month: 2026-04-16|n/a|[LICENSE.txt](https://raw.githubusercontent.com/SonarSource/SonarJS/master/LICENSE.txt)|
|eslint-plugin-unicorn|n/a|n/a ⚠️|63.0.0|1 month ago: 2026-03-27|n/a|[license](https://raw.githubusercontent.com/sindresorhus/eslint-plugin-unicorn/main/license)|

<!-- DEPENDENCY_LICENSES_END -->

**Installed dependencies are kept up-to-date with latest releases.**
