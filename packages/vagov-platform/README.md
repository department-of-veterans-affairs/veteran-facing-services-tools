# VA.gov Platform

## Installation & Usage

### npm

```bash
npm install @department-of-veterans-affairs/vagov-platform
```

### yarn

```bash
yarn add @department-of-veterans-affairs/vagov-platform
```

## Dependency Security Checks

Shared command to run security checks on non-dev dependencies.

### Usage

```bash
npm run dependency-check
```

or

```bash
yarn dependency-check
```

### Return

If no issues found:
> No security advisories rated moderate or higher found for non-dev dependencies.

If issues are found:
> Security advisory:
>
> Title: Regular Expression Denial of Service in minimatch
  Module name: minimatch
  Dependency: metalsmith-assets
  Path: metalsmith-assets>recursive-readdir>minimatch
  Severity: high
  Details: https://github.com/advisories/GHSA-hxm2-r34f-qmc5