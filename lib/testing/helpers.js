import { mount } from 'enzyme';

export function axeCheck(component) {
  let div = document.getElementById('axeContainer');
  if (!div) {
    div = document.createElement('div');
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  }
  div.innerHTML = '';

  mount(component, { attachTo: div });

  return new Promise((resolve, reject) => {
    axe.run(document.body, function (err, result) {
      if (err) {
        console.error(err);
        reject(err);
      }
      if (result.violations.length) {
        reject(new Error(result.violations.map(violation => {
          const nodeInfo = violation.nodes.reduce((str, node) => {
            const { html, target } = node;
            return [str, html, ...target].join('\n');
          }, '');

          return `[${violation.impact}] ${violation.help}
            See ${violation.helpUrl}
            ${nodeInfo}`;
        }).join('\n')));
      }

      resolve();
    });
  });
}
