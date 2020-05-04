---
title: Automated code quality
tags: vagovprod, vagovstaging, vagovdev
---

# Automated code quality

Each pull request (PR) on `vets-website` runs through an automated process that looks for code additions and modifications that don't meet code quality standards. If no issues are found, the code does not need to be reviewed by a VSP engineer. If a potential issue is found, a bot will leave an automated comment and request a manual review from the **frontend-review-group**.

   ![Screen Shot](https://images.zenhubusercontent.com/5e387fa505ac7e30c820a2da/a09c4c8c-ae32-4142-8fa5-0fc81b6a1892)

## Manual reviews

The following items trigger a manual review:

- A call to `Sentry`
- ESLint being disabled
- An icon is added with `<i ...`

### Sentry calls

VSP reviews logs to Sentry to ensure that any new logs are useful and do not contain personally identifiable information (PII).

Examples:
- Do not log an entire request response if all that's important is an error code.
- Do not log PII such as names, emails, or user IDs.

### ESLint

VSP enforces [ESLint rules](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/frontend/eslint) through CircleCI to enforce code quality. ESLint rules are included in the `.eslintrc` file, which is located in the root folder. Any rules that VSP is [testing for inclusion](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/adding-new-rules.md) are located in the [`circle.eslint.json`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/circle.eslint.json) file.

When ESLint rules are disabled, VSP will review each case individually. 

### Icons

VSP uses Font Awesome as a dependency, which uses the `<i>` tag for adding icons. Sometimes an icon is used as decoration, but other times it is used to convey meaning to the user. VSP reviews the code to ensure that whenever an icon is being used to convey meaning, the meaning is also conveyed to a screen reader.

## Actions to take

If a manual review is triggered, you can use the error information provided in the comment to identify the problem and resolve any errors. A member of the VSP team will review the PR and confirm that all issues have been resolved or will follow up with more feedback. 
