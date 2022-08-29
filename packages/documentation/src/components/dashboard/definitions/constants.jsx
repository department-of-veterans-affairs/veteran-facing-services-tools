// https://github.com/department-of-veterans-affairs/vets-website/blob/1cee564813462d6fe3896a10e477016f7cac2ebd/jenkins/common.groovy#L316
export const vetsWebsiteInfo = {
  owner: 'department-of-veterans-affairs',
  repo: 'vets-website',
  devBuildText:
    'https://dev-va-gov-assets.s3-us-gov-west-1.amazonaws.com/BUILD.txt',
  stagingBuildText:
    'https://staging-va-gov-assets.s3-us-gov-west-1.amazonaws.com/BUILD.txt',
  prodBuildText:
    'https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/BUILD.txt',
  prodTestCoverage:
    'https://s3-us-gov-west-1.amazonaws.com/vetsgov-website-builds-s3-upload-test/coverage/test-coverage-report.json',
  backendStatus: 'https://paltform-api.va.gov/v0/backend_statuses',
  crossAppImports:
    'https://s3-us-gov-west-1.amazonaws.com/vetsgov-website-builds-s3-upload-test/cross-app-imports/cross-app-imports.json',
  buildArtifacts:
    'https://s3-us-gov-west-1.amazonaws.com/vetsgov-website-builds-s3-upload-test/build-artifacts',
};

// https://github.com/department-of-veterans-affairs/content-build/blob/844d3170a92005dbee70a7ecf643362137ba68c3/jenkins/common.groovy#L280
export const contentBuildInfo = {
  owner: 'department-of-veterans-affairs',
  repo: 'content-build',
  devBuildText: 'https://dev.va.gov/BUILD.txt',
  stagingBuildText: 'https://staging.va.gov/BUILD.txt',
  prodBuildText: 'https://www.va.gov/BUILD.txt',
};
