export const deployStatusInitialState = {
  appsDevBuildText: '',
  appsStagingBuildText: '',
  appsProdBuildText: '',
  appsCommits: [],
  appsWorkflowRuns: [],
  contentDevBuildText: '',
  contentStagingBuildText: '',
  contentProdBuildText: '',
  contentCommits: [],
  contentWorkflowRuns: [],
};

export function DeployStatusReducer(state, action) {
  switch (action.type) {
    case 'vetsWebsite': {
      return {
        ...state,
        appsDevBuildText: action.appsDevBuildText,
        appsStagingBuildText: action.appsStagingBuildText,
        appsProdBuildText: action.appsProdBuildText,
        appsCommits: action.appsCommits,
        appsWorkflowRuns: action.appsWorkflowRuns,
      };
    }
    case 'contentBuild': {
      return {
        ...state,
        contentDevBuildText: action.contentDevBuildText,
        contentStagingBuildText: action.contentStagingBuildText,
        contentProdBuildText: action.contentProdBuildText,
        contentCommits: action.contentCommits,
        contentWorkflowRuns: action.contentWorkflowRuns,
      };
    }
    default:
      return state;
  }
}
