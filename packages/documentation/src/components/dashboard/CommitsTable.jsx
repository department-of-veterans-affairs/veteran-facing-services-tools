import React, { useState } from 'react';
import DropDownPanel from '@department-of-veterans-affairs/component-library/DropDownPanel'

const isOnEnv = (isOn) => {
  const trueIcon = <span className="dash-true-icon" aria-label="True Icon"><i className="fas fa-check-circle fa-2x" aria-hidden="true"></i></span>;
  const falseIcon = <span className="dash-false-icon" aria-label="False Icon"><i className="fas fa-times-circle fa-2x" aria-hidden="true"></i></span>;
  return isOn ? trueIcon : falseIcon;
}

const getGithubLoginId = (githubObject) => {
  const { author, committer } = githubObject
  return author?.login || committer?.login;
}

export default function CommitsTable({
  repo,
  devBuildText,
  stagingBuildText,
  prodBuildText,
  commits,
  deploys,
}) {
  const [isPanelOpen, setPanelOpen] = useState(false)
  const devRows = devBuildText.split('\n').filter(x => x) || [];
  const stagingRows = stagingBuildText.split('\n').filter(x => x);
  const prodRows = prodBuildText.split('\n').filter(x => x);

  const openAccordion = repo.repo === 'vets-website';

  return (

    <div>

      <div className="dash-build-pannel">
        <DropDownPanel
          buttonText={`${repo.repo} BUILD.txt files`}
          clickHandler={() => {
            setPanelOpen(!isPanelOpen)
          }}
          isOpen={isPanelOpen}
        >
          <div>
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
        </DropDownPanel>
      </div>

      <va-accordion multi bordered>
        <va-accordion-item
          header={`${repo.repo} commits`}
          subheader='latest 30 commits'
          open={openAccordion}
        >
          <table className="dash-table">
            <thead>
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Commit</th>
                <th scope="col">Dev</th>
                <th scope="col">Staging</th>
                <th scope="col">Prod</th>
              </tr>
            </thead>
            <tbody>
              {commits.map(x => {
                const { commit = {}, html_url, sha, } = x; // eslint-disable-line camelcase
                const { author = {}, committer = {}, message = '' } = commit;
                const { name } = author;
                const { date } = committer;
                const login = getGithubLoginId(x);

                return (
                  <tr key={sha}>
                    <td className="dash-td-center">
                      <div className="dash-github-info">
                        <a href={`https://www.github.com/${login}`} rel="noreferrer" target="_blank">
                          <img className="dash-github-image" src={`https://www.github.com/${login}.png`} alt="github"></img>
                        </a>
                        <a href={`https://www.github.com/${login}`} rel="noreferrer" target="_blank">
                          <div className="dash-github-name">{name}</div>
                        </a>
                      </div>
                    </td>
                    <td>
                      <div>
                        <b>{message.slice(0, 100)}</b>
                        {deploys[sha]?.['continuousDeployment'] && (
                          <i className="fas fa-bolt dash-span-right" aria-hidden="true"></i>
                        )}
                      </div>
                      <div>
                        <a href={html_url /* eslint-disable-line camelcase */}>{sha}</a>
                        <span className="dash-span-right">
                          Merged on {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          }).format(new Date(date))}
                        </span>
                      </div>
                    </td>
                    <td className="dash-td-center">{isOnEnv(deploys[sha]?.['dev'])}</td>
                    <td className="dash-td-center">{isOnEnv(deploys[sha]?.['staging'])}</td>
                    <td className="dash-td-center">{isOnEnv(deploys[sha]?.['prod'])}</td>
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
