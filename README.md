# DPUse ESLint Configuration

<!-- OPENING_START -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![DPUse version](https://img.shields.io/github/v/release/dpuse/eslint-config-dpuse?color=f6821f&label=DPUse)](https://github.com/dpuse/eslint-config-dpuse/releases/latest)
[![CI](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml/badge.svg)](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/ci.yml)
[![CodeQL](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/codeql.yml/badge.svg)](https://github.com/dpuse/eslint-config-dpuse/actions/workflows/codeql.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=dpuse_eslint-config-dpuse&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=dpuse_eslint-config-dpuse)

[Documentation](https://www.dpuse.app) · [Report a Vulnerability](https://github.com/dpuse/eslint-config-dpuse/security/advisories/new) · [Open an Issue](https://github.com/dpuse/eslint-config-dpuse/issues)

## About DPUse

DPUse (Data Positioning & Use) is an in-browser application that positions your data for use through three core activities: sourcing, contextualising, and publishing. **Sourcing** uses a library of [Connectors](https://www.dpuse.app) to establish [Connections](https://www.dpuse.app) to applications, databases, file stores, and curated datasets; these connections are subsequently used to configure structured [Data Views](https://www.dpuse.app) from the underlying sources. **Contextualising** extracts chronological events from those [Data Views](https://www.dpuse.app) and maps them into comprehensive [Context Models](https://www.dpuse.app). This provides the DPUse Engine with the structural framework required to generate deterministic transactions, facts, or observations. **Publishing** employs a library of [Presenters](https://www.dpuse.app) to render standard [Presentations](https://www.dpuse.app) immediately using the contextualised data; additionally, [Cookbooks](https://www.dpuse.app) of [Recipes](https://www.dpuse.app) allow you to build Data Apps using your preferred tools.

## Introduction

Common ESLint configuration used in most DPUse projects.

<!-- OPENING_END -->

<!-- USAGE_START -->

This connector is automatically uploaded to the DPUse Engine cloud once released and becomes instantly available to all new browser app instances, with existing instances notified of the update.

You may view or clone this repository for your own purposes, such as building a new, similar connector, though there is currently no process to accept third-party connectors into DPUse at this stage. Cloned or forked code is unsupported and isn't guaranteed to remain compatible with the DPUse Engine as it evolves.

```bash
git clone https://github.com/dpuse/eslint-config-dpuse.git
cd eslint-config-dpuse
npm install
```

_Requires [Node.js](https://nodejs.org/) 22 or later, [npm](https://www.npmjs.com/) 11 or later, and [TypeScript](https://www.typescriptlang.org/) 6.0.3 or later._

<!-- USAGE_END -->

### Dependency Licenses

<!-- DEPENDENCY_LICENSES_START -->

> [!WARNING]
> Dependency licenses are not documented here: @dpuse/eslint-config-dpuse is a development-only tool and is never part of a production release.

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

<!-- DEPENDENCY_TREE_END -->

<!-- GOVERNANCE_START -->

## Security & Quality

### CodeQL

[CodeQL](https://github.com/dpuse/eslint-config-dpuse/security/code-scanning) static analysis runs on every push to `main` and on a weekly schedule, scanning TypeScript, JavaScript, Rust, and GitHub Actions workflow files for security vulnerabilities and coding errors.

### SonarCloud

[SonarCloud](https://sonarcloud.io/summary/new_code?id=dpuse_eslint-config-dpuse) performs continuous code quality and security analysis on every push, detecting bugs, code smells, and security vulnerabilities in the TypeScript source.

### Vulnerability Scanning

Two complementary tools continuously monitor dependencies for known vulnerabilities:

- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit) runs on every push to `main` via the CI workflow, failing the build if any high or critical severity vulnerabilities are detected.
- [GitHub Dependabot](https://docs.github.com/en/code-security/dependabot) automatically raises pull requests to update vulnerable dependencies, drawing on the GitHub Advisory Database which combines NVD and npm-specific advisories.

### Supply Chain Security

[Socket.dev](https://socket.dev) monitors all dependencies for supply chain risk — detecting malicious packages, dependency confusion, typosquatting, and suspicious behaviour that may not yet have a CVE.

### Reporting Vulnerabilities

Please do not open public GitHub issues for security vulnerabilities. Use [GitHub private vulnerability reporting](https://github.com/dpuse/eslint-config-dpuse/security/advisories/new) instead. See [SECURITY.md](./SECURITY.md) for the full disclosure policy, contact details, and expected response times.

### OpenSSF 🚧

[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/dpuse/eslint-config-dpuse/badge)](https://scorecard.dev/viewer/?uri=github.com/dpuse/eslint-config-dpuse)

This project is working towards the [OpenSSF Best Practices](https://www.bestpractices.dev) Passing badge, a self-certification covering security policy, vulnerability reporting, build processes, code quality, and more. Currently the [OpenSSF Scorecard](https://scorecard.dev/viewer/?uri=github.com/dpuse/eslint-config-dpuse) provides an independent automated assessment of the project's security practices and is an ongoing area of improvement.

## Contributing

This repository is maintained solely by its owner and does not, at present, accept external contributions into the canonical repo. Its source is published openly under the MIT License — every DPUse project is fully open source except DPUse Engine, which remains closed and proprietary.

For security vulnerabilities, see [Reporting Vulnerabilities](#reporting-vulnerabilities). For bugs, inconsistencies, or other feedback, [open a GitHub issue](https://github.com/dpuse/eslint-config-dpuse/issues) — feedback is read, but responses and fixes are at the maintainer's discretion.

## License

This project is licensed under the MIT License, permitting free use, modification, and distribution.

[MIT](./LICENSE) © 2026-present Jonathan Terrell

<!-- GOVERNANCE_END -->
