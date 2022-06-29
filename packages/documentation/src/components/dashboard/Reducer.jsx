export const deployStatusInitialState = {
  appsDevBuildText: '',
  appsStagingBuildText: '',
  appsProdBuildText: '',
  appsCommits: [],
  appsDeploys: [],
  contentDevBuildText: '',
  contentStagingBuildText: '',
  contentProdBuildText: '',
  contentCommits: [],
  contentDeploys: [],
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
        appsDeploys: action.appsDeploys,
      };
    }
    case 'contentBuild': {
      return {
        ...state,
        contentDevBuildText: action.contentDevBuildText,
        contentStagingBuildText: action.contentStagingBuildText,
        contentProdBuildText: action.contentProdBuildText,
        contentCommits: action.contentCommits,
        contentDeploys: action.contentDeploys,
      };
    }
    default:
      return state;
  }
}
