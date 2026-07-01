# DPUse ESLint Configuration

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/@dpuse/eslint-config-dpuse.svg)](https://www.npmjs.com/package/@dpuse/eslint-config-dpuse)

## Introduction

Common ESLint configuration used in most DPUse projects.

## Reports & Compliance

### Dependency Check Report

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the npm package `owasp-dependency-check`. We also rely on GitHub Dependabot to continuously check for vulnerabilities across all dependencies.

[View the OWASP Dependency Check Report](https://dpuse.github.io/eslint-config-dpuse/dependency-check-reports/dependency-check-report.html)

### Dependency Licenses

The following table lists top-level production and peer dependencies. All these dependencies (including transitive ones) have been recursively verified to use Apache-2.0, LGPL-3.0-only, or MIT—commercially friendly licenses with minimal restrictions. Developers cloning this repository should independently verify dev and optional dependencies; users of the uploaded library are covered by these checks. We do not include unlicensed dependencies. Used to support development activity and not released as part of the production release. Check if you clone.

<!-- DEPENDENCY_LICENSES_START -->
|Dependency|Version|License(s)|Document|
|:-|:-:|:-|:-|
|[@babel/helper-validator-identifier](https://github.com/babel/babel)|7.29.7|MIT|[LICENSE](licenses/downloads/@babel/helper-validator-identifier@7.29.7-LICENSE.txt)|
|[@eslint-community/eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments)|4.7.2|MIT|[LICENSE](licenses/downloads/@eslint-community/eslint-plugin-eslint-comments@4.7.2-LICENSE.txt)|
|[@eslint-community/eslint-utils](https://github.com/eslint-community/eslint-utils)|4.9.1|MIT|[LICENSE](licenses/downloads/@eslint-community/eslint-utils@4.9.1-LICENSE.txt)|
|[@eslint-community/regexpp](https://github.com/eslint-community/regexpp)|4.12.2|MIT|[LICENSE](licenses/downloads/@eslint-community/regexpp@4.12.2-LICENSE.txt)|
|[@eslint/config-array](https://github.com/eslint/rewrite)|0.23.5|Apache-2.0|[LICENSE](licenses/downloads/@eslint/config-array@0.23.5-LICENSE.txt)|
|[@eslint/config-helpers](https://github.com/eslint/rewrite)|0.6.0|Apache-2.0|[LICENSE](licenses/downloads/@eslint/config-helpers@0.6.0-LICENSE.txt)|
|[@eslint/core](https://github.com/eslint/rewrite)|1.2.1|Apache-2.0|[LICENSE](licenses/downloads/@eslint/core@1.2.1-LICENSE.txt)|
|[@eslint/object-schema](https://github.com/eslint/rewrite)|3.0.5|Apache-2.0|[LICENSE](licenses/downloads/@eslint/object-schema@3.0.5-LICENSE.txt)|
|[@eslint/plugin-kit](https://github.com/eslint/rewrite)|0.7.2|Apache-2.0|[LICENSE](licenses/downloads/@eslint/plugin-kit@0.7.2-LICENSE.txt)|
|[@humanfs/core](https://github.com/humanwhocodes/humanfs)|0.19.1|Apache-2.0|[LICENSE](licenses/downloads/@humanfs/core@0.19.1-LICENSE.txt)|
|[@humanfs/node](https://github.com/humanwhocodes/humanfs)|0.16.7|Apache-2.0|[LICENSE](licenses/downloads/@humanfs/node@0.16.7-LICENSE.txt)|
|[@humanwhocodes/module-importer](https://github.com/humanwhocodes/module-importer)|1.0.1|Apache-2.0|[LICENSE](licenses/downloads/@humanwhocodes/module-importer@1.0.1-LICENSE.txt)|
|[@humanwhocodes/retry](https://github.com/humanwhocodes/retry)|0.4.3|Apache-2.0|[LICENSE](licenses/downloads/@humanwhocodes/retry@0.4.3-LICENSE.txt)|
|[@types/eslint-plugin-security](https://github.com/DefinitelyTyped/DefinitelyTyped)|3.0.1|MIT|[LICENSE](licenses/downloads/@types/eslint-plugin-security@3.0.1-LICENSE.txt)|
|[@types/eslint](https://github.com/DefinitelyTyped/DefinitelyTyped)|9.6.1|MIT|[LICENSE](licenses/downloads/@types/eslint@9.6.1-LICENSE.txt)|
|[@types/esrecurse](https://github.com/DefinitelyTyped/DefinitelyTyped)|4.3.1|MIT|[LICENSE](licenses/downloads/@types/esrecurse@4.3.1-LICENSE.txt)|
|[@types/estree](https://github.com/DefinitelyTyped/DefinitelyTyped)|1.0.8|MIT|[LICENSE](licenses/downloads/@types/estree@1.0.8-LICENSE.txt)|
|[@types/json-schema](https://github.com/DefinitelyTyped/DefinitelyTyped)|7.0.15|MIT|[LICENSE](licenses/downloads/@types/json-schema@7.0.15-LICENSE.txt)|
|[@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/eslint-plugin@8.62.1-LICENSE.txt)|
|[@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/parser@8.62.1-LICENSE.txt)|
|[@typescript-eslint/project-service](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/project-service@8.62.1-LICENSE.txt)|
|[@typescript-eslint/scope-manager](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/scope-manager@8.62.1-LICENSE.txt)|
|[@typescript-eslint/tsconfig-utils](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/tsconfig-utils@8.62.1-LICENSE.txt)|
|[@typescript-eslint/type-utils](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/type-utils@8.62.1-LICENSE.txt)|
|[@typescript-eslint/types](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/types@8.62.1-LICENSE.txt)|
|[@typescript-eslint/typescript-estree](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/typescript-estree@8.62.1-LICENSE.txt)|
|[@typescript-eslint/utils](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/utils@8.62.1-LICENSE.txt)|
|[@typescript-eslint/visitor-keys](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/@typescript-eslint/visitor-keys@8.62.1-LICENSE.txt)|
|[@unrs/resolver-binding-darwin-arm64](https://github.com/unrs/unrs-resolver)|1.11.1|MIT|[LICENSE](licenses/downloads/@unrs/resolver-binding-darwin-arm64@1.11.1-LICENSE.txt)|
|[acorn-jsx](https://github.com/acornjs/acorn-jsx)|5.3.2|MIT|[LICENSE](licenses/downloads/acorn-jsx@5.3.2-LICENSE.txt)|
|[acorn](https://github.com/acornjs/acorn)|8.17.0|MIT|[LICENSE](licenses/downloads/acorn@8.17.0-LICENSE.txt)|
|[ajv](https://github.com/ajv-validator/ajv)|6.15.0|MIT|[LICENSE](licenses/downloads/ajv@6.15.0-LICENSE.txt)|
|[balanced-match](https://github.com/juliangruber/balanced-match)|4.0.4|MIT|[LICENSE](licenses/downloads/balanced-match@4.0.4-LICENSE.txt)|
|[baseline-browser-mapping](https://github.com/web-platform-dx/baseline-browser-mapping)|2.10.29|Apache-2.0|[LICENSE](licenses/downloads/baseline-browser-mapping@2.10.29-LICENSE.txt)|
|[brace-expansion](https://github.com/juliangruber/brace-expansion)|5.0.6|MIT|[LICENSE](licenses/downloads/brace-expansion@5.0.6-LICENSE.txt)|
|[browserslist](https://github.com/browserslist/browserslist)|4.28.2|MIT|[LICENSE](licenses/downloads/browserslist@4.28.2-LICENSE.txt)|
|[builtin-modules](https://github.com/sindresorhus/builtin-modules)|3.3.0|MIT|[LICENSE](licenses/downloads/builtin-modules@3.3.0-LICENSE.txt)|
|[builtin-modules](https://github.com/sindresorhus/builtin-modules)|5.0.0|MIT|[LICENSE](licenses/downloads/builtin-modules@5.0.0-LICENSE.txt)|
|[bytes](https://github.com/visionmedia/bytes.js)|3.1.2|MIT|[LICENSE](licenses/downloads/bytes@3.1.2-LICENSE.txt)|
|[caniuse-lite](https://github.com/browserslist/caniuse-lite)|1.0.30001792|CC-BY-4.0|[LICENSE](licenses/downloads/caniuse-lite@1.0.30001792-LICENSE.txt)|
|[change-case](https://github.com/blakeembrey/change-case)|5.4.4|MIT|[LICENSE](licenses/downloads/change-case@5.4.4-LICENSE.txt)|
|[ci-info](https://github.com/watson/ci-info)|4.4.0|MIT|[LICENSE](licenses/downloads/ci-info@4.4.0-LICENSE.txt)|
|[comment-parser](https://github.com/yavorskiy/comment-parser)|1.4.6|MIT|[LICENSE](licenses/downloads/comment-parser@1.4.6-LICENSE.txt)|
|[core-js-compat](https://github.com/zloirock/core-js)|3.49.0|MIT|[LICENSE](licenses/downloads/core-js-compat@3.49.0-LICENSE.txt)|
|[cross-spawn](https://github.com/moxystudio/node-cross-spawn)|7.0.6|MIT|[LICENSE](licenses/downloads/cross-spawn@7.0.6-LICENSE.txt)|
|[debug](https://github.com/debug-js/debug)|4.4.3|MIT|[LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)|
|[deep-is](https://github.com/thlorenz/deep-is)|0.1.4|MIT|[LICENSE](licenses/downloads/deep-is@0.1.4-LICENSE.txt)|
|[detect-indent](https://github.com/sindresorhus/detect-indent)|7.0.2|MIT|[LICENSE](licenses/downloads/detect-indent@7.0.2-LICENSE.txt)|
|[electron-to-chromium](https://github.com/Kilian/electron-to-chromium)|1.5.353|ISC|[LICENSE](licenses/downloads/electron-to-chromium@1.5.353-LICENSE.txt)|
|[escalade](https://github.com/lukeed/escalade)|3.2.0|MIT|[LICENSE](licenses/downloads/escalade@3.2.0-LICENSE.txt)|
|[escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp)|4.0.0|MIT|[LICENSE](licenses/downloads/escape-string-regexp@4.0.0-LICENSE.txt)|
|[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)|10.1.8|MIT|[LICENSE](licenses/downloads/eslint-config-prettier@10.1.8-LICENSE.txt)|
|[eslint-import-context](https://github.com/un-ts/eslint-import-context)|0.1.9|MIT|[LICENSE](licenses/downloads/eslint-import-context@0.1.9-LICENSE.txt)|
|[eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript)|4.4.5|ISC|[LICENSE](licenses/downloads/eslint-import-resolver-typescript@4.4.5-LICENSE.txt)|
|[eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)|4.17.1|MIT|[LICENSE](licenses/downloads/eslint-plugin-import-x@4.17.1-LICENSE.txt)|
|[eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)|3.1.1|MIT|[LICENSE](licenses/downloads/eslint-plugin-regexp@3.1.1-LICENSE.txt)|
|[eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security)|4.0.1|Apache-2.0|[LICENSE](licenses/downloads/eslint-plugin-security@4.0.1-LICENSE.txt)|
|[eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS)|4.1.0|LGPL-3.0-only|[LICENSE](licenses/downloads/eslint-plugin-sonarjs@4.1.0-LICENSE.txt)|
|[eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)|69.0.0|MIT|[LICENSE](licenses/downloads/eslint-plugin-unicorn@69.0.0-LICENSE.txt)|
|[eslint-scope](https://github.com/eslint/js)|9.1.2|BSD-2-Clause|[LICENSE](licenses/downloads/eslint-scope@9.1.2-LICENSE.txt)|
|[eslint-visitor-keys](https://github.com/eslint/eslint-visitor-keys)|3.4.3|Apache-2.0|[LICENSE](licenses/downloads/eslint-visitor-keys@3.4.3-LICENSE.txt)|
|[eslint-visitor-keys](https://github.com/eslint/js)|5.0.1|Apache-2.0|[LICENSE](licenses/downloads/eslint-visitor-keys@5.0.1-LICENSE.txt)|
|[eslint](https://github.com/eslint/eslint)|10.6.0|MIT|[LICENSE](licenses/downloads/eslint@10.6.0-LICENSE.txt)|
|[espree](https://github.com/eslint/js)|11.2.0|BSD-2-Clause|[LICENSE](licenses/downloads/espree@11.2.0-LICENSE.txt)|
|[esquery](https://github.com/estools/esquery)|1.7.0|BSD-3-Clause|[LICENSE](licenses/downloads/esquery@1.7.0-LICENSE.txt)|
|[esrecurse](https://github.com/estools/esrecurse)|4.3.0|BSD-2-Clause|[LICENSE](licenses/downloads/esrecurse@4.3.0-LICENSE.txt)|
|[estraverse](https://github.com/estools/estraverse)|5.3.0|BSD-2-Clause|[LICENSE](licenses/downloads/estraverse@5.3.0-LICENSE.txt)|
|[esutils](https://github.com/estools/esutils)|2.0.3|BSD-2-Clause|[LICENSE](licenses/downloads/esutils@2.0.3-LICENSE.txt)|
|[fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)|3.1.3|MIT|[LICENSE](licenses/downloads/fast-deep-equal@3.1.3-LICENSE.txt)|
|[fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify)|2.1.0|MIT|[LICENSE](licenses/downloads/fast-json-stable-stringify@2.1.0-LICENSE.txt)|
|[fast-levenshtein](https://github.com/hiddentao/fast-levenshtein)|2.0.6|MIT|[LICENSE](licenses/downloads/fast-levenshtein@2.0.6-LICENSE.txt)|
|[fdir](https://github.com/thecodrr/fdir)|6.5.0|MIT|[LICENSE](licenses/downloads/fdir@6.5.0-LICENSE.txt)|
|[file-entry-cache](https://github.com/jaredwray/file-entry-cache)|8.0.0|MIT|[LICENSE](licenses/downloads/file-entry-cache@8.0.0-LICENSE.txt)|
|[find-up-simple](https://github.com/sindresorhus/find-up-simple)|1.0.1|MIT|[LICENSE](licenses/downloads/find-up-simple@1.0.1-LICENSE.txt)|
|[find-up](https://github.com/sindresorhus/find-up)|5.0.0|MIT|[LICENSE](licenses/downloads/find-up@5.0.0-LICENSE.txt)|
|[flat-cache](https://github.com/jaredwray/flat-cache)|4.0.1|MIT|[LICENSE](licenses/downloads/flat-cache@4.0.1-LICENSE.txt)|
|[flatted](https://github.com/WebReflection/flatted)|3.4.2|ISC|[LICENSE](licenses/downloads/flatted@3.4.2-LICENSE.txt)|
|[functional-red-black-tree](https://github.com/mikolalysenko/functional-red-black-tree)|1.0.1|MIT|[LICENSE](licenses/downloads/functional-red-black-tree@1.0.1-LICENSE.txt)|
|[get-tsconfig](https://github.com/privatenumber/get-tsconfig)|4.13.6|MIT|[LICENSE](licenses/downloads/get-tsconfig@4.13.6-LICENSE.txt)|
|[glob-parent](https://github.com/gulpjs/glob-parent)|6.0.2|ISC|[LICENSE](licenses/downloads/glob-parent@6.0.2-LICENSE.txt)|
|[globals](https://github.com/sindresorhus/globals)|17.6.0|MIT|[LICENSE](licenses/downloads/globals@17.6.0-LICENSE.txt)|
|[ignore](https://github.com/kaelzhang/node-ignore)|5.3.2|MIT|[LICENSE](licenses/downloads/ignore@5.3.2-LICENSE.txt)|
|[ignore](https://github.com/kaelzhang/node-ignore)|7.0.5|MIT|[LICENSE](licenses/downloads/ignore@7.0.5-LICENSE.txt)|
|[imurmurhash](https://github.com/jensyt/imurmurhash-js)|0.1.4|MIT|[LICENSE](licenses/downloads/imurmurhash@0.1.4-LICENSE.txt)|
|[indent-string](https://github.com/sindresorhus/indent-string)|5.0.0|MIT|[LICENSE](licenses/downloads/indent-string@5.0.0-LICENSE.txt)|
|[is-builtin-module](https://github.com/sindresorhus/is-builtin-module)|5.0.0|MIT|[LICENSE](licenses/downloads/is-builtin-module@5.0.0-LICENSE.txt)|
|[is-bun-module](https://github.com/SunsetTechuila/is-bun-module)|2.0.0|MIT|[LICENSE](licenses/downloads/is-bun-module@2.0.0-LICENSE.txt)|
|[is-extglob](https://github.com/jonschlinkert/is-extglob)|2.1.1|MIT|[LICENSE](licenses/downloads/is-extglob@2.1.1-LICENSE.txt)|
|[is-glob](https://github.com/micromatch/is-glob)|4.0.3|MIT|[LICENSE](licenses/downloads/is-glob@4.0.3-LICENSE.txt)|
|[isexe](https://github.com/isaacs/isexe)|2.0.0|ISC|[LICENSE](licenses/downloads/isexe@2.0.0-LICENSE.txt)|
|[jiti](https://github.com/unjs/jiti)|2.7.0|MIT|[LICENSE](licenses/downloads/jiti@2.7.0-LICENSE.txt)|
|[jsdoc-type-pratt-parser](https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser)|7.2.0|MIT|[LICENSE](licenses/downloads/jsdoc-type-pratt-parser@7.2.0-LICENSE.txt)|
|[jsesc](https://github.com/mathiasbynens/jsesc)|3.1.0|MIT|[LICENSE](licenses/downloads/jsesc@3.1.0-LICENSE.txt)|
|[json-buffer](https://github.com/dominictarr/json-buffer)|3.0.1|MIT|[LICENSE](licenses/downloads/json-buffer@3.0.1-LICENSE.txt)|
|[json-schema-traverse](https://github.com/epoberezkin/json-schema-traverse)|0.4.1|MIT|[LICENSE](licenses/downloads/json-schema-traverse@0.4.1-LICENSE.txt)|
|[json-stable-stringify-without-jsonify](https://github.com/samn/json-stable-stringify)|1.0.1|MIT|[LICENSE](licenses/downloads/json-stable-stringify-without-jsonify@1.0.1-LICENSE.txt)|
|[jsx-ast-utils-x](https://github.com/eslinter/jsx-ast-utils-x)|0.1.0|MIT|[LICENSE](licenses/downloads/jsx-ast-utils-x@0.1.0-LICENSE.txt)|
|[keyv](https://github.com/jaredwray/keyv)|4.5.4|MIT|[LICENSE](licenses/downloads/keyv@4.5.4-LICENSE.txt)|
|[levn](https://github.com/gkz/levn)|0.4.1|MIT|[LICENSE](licenses/downloads/levn@0.4.1-LICENSE.txt)|
|[locate-path](https://github.com/sindresorhus/locate-path)|6.0.0|MIT|[LICENSE](licenses/downloads/locate-path@6.0.0-LICENSE.txt)|
|[lodash.merge](https://github.com/lodash/lodash)|4.6.2|MIT|[LICENSE](licenses/downloads/lodash.merge@4.6.2-LICENSE.txt)|
|[minimatch](https://github.com/isaacs/minimatch)|10.2.5|BlueOak-1.0.0|[LICENSE](licenses/downloads/minimatch@10.2.5-LICENSE.txt)|
|[ms](https://github.com/vercel/ms)|2.1.3|MIT|[LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)|
|[napi-postinstall](https://github.com/un-ts/napi-postinstall)|0.3.4|MIT|[LICENSE](licenses/downloads/napi-postinstall@0.3.4-LICENSE.txt)|
|[natural-compare](https://github.com/litejs/natural-compare-lite)|1.4.0|MIT|[LICENSE](licenses/downloads/natural-compare@1.4.0-LICENSE.txt)|
|[node-releases](https://github.com/chicoxyzzy/node-releases)|2.0.44|MIT|[LICENSE](licenses/downloads/node-releases@2.0.44-LICENSE.txt)|
|[optionator](https://github.com/gkz/optionator)|0.9.4|MIT|[LICENSE](licenses/downloads/optionator@0.9.4-LICENSE.txt)|
|[p-limit](https://github.com/sindresorhus/p-limit)|3.1.0|MIT|[LICENSE](licenses/downloads/p-limit@3.1.0-LICENSE.txt)|
|[p-locate](https://github.com/sindresorhus/p-locate)|5.0.0|MIT|[LICENSE](licenses/downloads/p-locate@5.0.0-LICENSE.txt)|
|[path-exists](https://github.com/sindresorhus/path-exists)|4.0.0|MIT|[LICENSE](licenses/downloads/path-exists@4.0.0-LICENSE.txt)|
|[path-key](https://github.com/sindresorhus/path-key)|3.1.1|MIT|[LICENSE](licenses/downloads/path-key@3.1.1-LICENSE.txt)|
|[picocolors](https://github.com/alexeyraspopov/picocolors)|1.1.1|ISC|[LICENSE](licenses/downloads/picocolors@1.1.1-LICENSE.txt)|
|[picomatch](https://github.com/micromatch/picomatch)|4.0.4|MIT|[LICENSE](licenses/downloads/picomatch@4.0.4-LICENSE.txt)|
|[pluralize](https://github.com/blakeembrey/pluralize)|8.0.0|MIT|[LICENSE](licenses/downloads/pluralize@8.0.0-LICENSE.txt)|
|[prelude-ls](https://github.com/gkz/prelude-ls)|1.2.1|MIT|[LICENSE](licenses/downloads/prelude-ls@1.2.1-LICENSE.txt)|
|[punycode](https://github.com/mathiasbynens/punycode.js)|2.3.1|MIT|[LICENSE](licenses/downloads/punycode@2.3.1-LICENSE.txt)|
|[refa](https://github.com/RunDevelopment/refa)|0.12.1|MIT|[LICENSE](licenses/downloads/refa@0.12.1-LICENSE.txt)|
|[regexp-ast-analysis](https://github.com/RunDevelopment/regexp-ast-analysis)|0.7.1|MIT|[LICENSE](licenses/downloads/regexp-ast-analysis@0.7.1-LICENSE.txt)|
|[regexp-tree](https://github.com/DmitrySoshnikov/regexp-tree)|0.1.27|MIT|[LICENSE](licenses/downloads/regexp-tree@0.1.27-LICENSE.txt)|
|[regjsparser](https://github.com/jviereck/regjsparser)|0.13.2|BSD-2-Clause|[LICENSE](licenses/downloads/regjsparser@0.13.2-LICENSE.txt)|
|[resolve-pkg-maps](https://github.com/privatenumber/resolve-pkg-maps)|1.0.0|MIT|[LICENSE](licenses/downloads/resolve-pkg-maps@1.0.0-LICENSE.txt)|
|[safe-regex](https://github.com/davisjam/safe-regex)|2.1.1|MIT|[LICENSE](licenses/downloads/safe-regex@2.1.1-LICENSE.txt)|
|[scslre](https://github.com/RunDevelopment/scslre)|0.3.0|MIT|[LICENSE](licenses/downloads/scslre@0.3.0-LICENSE.txt)|
|[semver](https://github.com/npm/node-semver)|7.8.5|ISC|[LICENSE](licenses/downloads/semver@7.8.5-LICENSE.txt)|
|[shebang-command](https://github.com/kevva/shebang-command)|2.0.0|MIT|[LICENSE](licenses/downloads/shebang-command@2.0.0-LICENSE.txt)|
|[shebang-regex](https://github.com/sindresorhus/shebang-regex)|3.0.0|MIT|[LICENSE](licenses/downloads/shebang-regex@3.0.0-LICENSE.txt)|
|[stable-hash-x](https://github.com/un-ts/stable-hash-x)|0.2.0|MIT|[LICENSE](licenses/downloads/stable-hash-x@0.2.0-LICENSE.txt)|
|[strip-indent](https://github.com/sindresorhus/strip-indent)|4.1.1|MIT|[LICENSE](licenses/downloads/strip-indent@4.1.1-LICENSE.txt)|
|[tinyglobby](https://github.com/SuperchupuDev/tinyglobby)|0.2.15|MIT|[LICENSE](licenses/downloads/tinyglobby@0.2.15-LICENSE.txt)|
|[ts-api-utils](https://github.com/JoshuaKGoldberg/ts-api-utils)|2.5.0|MIT|[LICENSE](licenses/downloads/ts-api-utils@2.5.0-LICENSE.txt)|
|[type-check](https://github.com/gkz/type-check)|0.4.0|MIT|[LICENSE](licenses/downloads/type-check@0.4.0-LICENSE.txt)|
|[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)|8.62.1|MIT|[LICENSE](licenses/downloads/typescript-eslint@8.62.1-LICENSE.txt)|
|[typescript](https://github.com/microsoft/TypeScript)|6.0.3|Apache-2.0|[LICENSE](licenses/downloads/typescript@6.0.3-LICENSE.txt)|
|[unrs-resolver](https://github.com/unrs/unrs-resolver)|1.11.1|MIT|[LICENSE](licenses/downloads/unrs-resolver@1.11.1-LICENSE.txt)|
|[update-browserslist-db](https://github.com/browserslist/update-db)|1.2.3|MIT|[LICENSE](licenses/downloads/update-browserslist-db@1.2.3-LICENSE.txt)|
|[uri-js](https://github.com/garycourt/uri-js)|4.4.1|BSD-2-Clause|[LICENSE](licenses/downloads/uri-js@4.4.1-LICENSE.txt)|
|[which](https://github.com/isaacs/node-which)|2.0.2|ISC|[LICENSE](licenses/downloads/which@2.0.2-LICENSE.txt)|
|[word-wrap](https://github.com/jonschlinkert/word-wrap)|1.2.5|MIT|[LICENSE](licenses/downloads/word-wrap@1.2.5-LICENSE.txt)|
|[yaml](https://github.com/eemeli/yaml)|2.9.0|ISC|[LICENSE](licenses/downloads/yaml@2.9.0-LICENSE.txt)|
|[yocto-queue](https://github.com/sindresorhus/yocto-queue)|0.1.0|MIT|[LICENSE](licenses/downloads/yocto-queue@0.1.0-LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->

<!-- DEPENDENCY_TREE_END -->
