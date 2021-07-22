export const deployStatusInitialState = {
  appsDevBuildText: '',
  appsStagingBuildText: '',
  appsProdBuildText: '',
  appsCommits: [],
  contentDevBuildText: '',
  contentStagingBuildText: '',
  contentProdBuildText: '',
  contentCommits: [],
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
      };
    }
    case 'contentBuild': {
      return {
        ...state,
        contentDevBuildText: action.contentDevBuildText,
        contentStagingBuildText: action.contentStagingBuildText,
        contentProdBuildText: action.contentProdBuildText,
        contentCommits: action.contentCommits,
      };
    }
    default:
      return state;
  }
}
