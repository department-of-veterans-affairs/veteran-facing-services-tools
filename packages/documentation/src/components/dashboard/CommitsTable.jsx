import React from 'react';

const isOnEnv = (isOn) => {
  const trueIcon = <span className="dash-true-icon" aria-label="True Icon"><i class="fas fa-check-circle fa-3x" aria-hidden="true"></i></span>;
  const falseIcon = <span className="dash-false-icon" aria-label="False Icon"><i class="fas fa-times-circle fa-3x" aria-hidden="true"></i></span>;
  return isOn ? trueIcon : falseIcon;
}

export default function CommitsTable({
  repo,
  devBuildText,
  stagingBuildText,
  prodBuildText,
  commits,
}) {
  const devRows = devBuildText.split('\n').filter(x => x) || [];
  const stagingRows = stagingBuildText.split('\n').filter(x => x);
  const prodRows = prodBuildText.split('\n').filter(x => x);

  const devRef = devRows[6]?.slice(4);
  const stagingRef = stagingRows[6]?.slice(4);
  const prodRef = prodRows[6]?.slice(4);
  let isOnDev = false;
  let isOnStaging = false;
  let isOnProd = false;

  const openAccordion = repo.repo === 'vets-website' ? false : true;

  return (
    <div>
      <div class="feature">
        <h3>{repo.repo} BUILD.txt files</h3>
        <div className="dash-build-div">
            <div>
              <h4>
                <a href={repo.devBuildText}>Dev</a>
              </h4>
              {devRows.map(info => {
                return <div key={info}>{info}</div>;
              })}
            </div>
            <div>
              <h4>
                <a href={repo.stagingBuildText}>Staging</a>
              </h4>
              {stagingRows.map(info => {
                return <div key={info}>{info}</div>;
              })}
            </div>
            <div>
              <h4>
                <a href={repo.prodBuildText}>Prod</a>
              </h4>
              {prodRows.map(info => {
                return <div key={info}>{info}</div>;
              })}
            </div>
          </div>
      </div>

      <va-accordion multi bordered>
        <va-accordion-item 
          header={`${repo.repo} commits`} 
          subheader='latest 30 commits'
          open={openAccordion}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Commit</th>
                <th scope="col">On Dev?</th>
                <th scope="col">On Staging?</th>
                <th scope="col">On Prod?</th>
              </tr>
            </thead>
            <tbody>
              {commits.map(x => {
                const { commit = {}, author: githubAuthor = {}, html_url, sha, } = x; // eslint-disable-line camelcase
                const { author = {}, committer = {}, message = '' } = commit;
                const { name } = author;
                const { date } = committer;
                const { login } = githubAuthor;

                if (sha === devRef) isOnDev = true;
                if (sha === stagingRef) isOnStaging = true;
                if (sha === prodRef) isOnProd = true;

                return (
                  <tr key={sha}>
                    <td className="dash-td-center">
                      <div>
                          <a href={`https://www.github.com/${login}`} rel="noreferrer" target="_blank">
                            <img className="dash-github-image" src={`https://www.github.com/${login}.png`} alt="github"></img> 
                            <br />{name}
                          </a>
                      </div>
                    </td>
                    <td>
                      <div><b>{message.slice(0, 100)}</b></div>
                      <br></br>
                      <div>
                        <a href={html_url /* eslint-disable-line camelcase */}>{sha}</a>
                      </div>
                      <div>
                        Merged on {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        }).format(new Date(date))}
                      </div>
                    </td>
                    <td className="dash-td-center">{isOnEnv(isOnDev)}</td>
                    <td className="dash-td-center">{isOnEnv(isOnStaging)}</td>
                    <td className="dash-td-center">{isOnEnv(isOnProd)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
         </va-accordion-item>
      </va-accordion>

    </div>
  );
}
