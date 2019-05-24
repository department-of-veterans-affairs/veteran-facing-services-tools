function uniqueId() {
  return Math.floor(Math.random() * Math.floor(100000));
}

function qSA(rootNode, selector) {
  return Array.from(rootNode.querySelectorAll(selector));
}

export function qS(rootNode, selector) {
  return rootNode.querySelector(selector);
}

function removeChildNodes(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export default function createAdditionalInfoWidget() {
  const widgets = qSA(document, '.additional-info-container');

  if (widgets.length) {
    widgets.forEach(el => {
      const titleNode = qS(el, '.additional-info-title');
      const titleText =
        (titleNode && titleNode.textContent) || 'More information';
      const dataset = qS(el, '.additional-info-content').parentNode.dataset;
      const contentMarkup = qS(el, '.additional-info-content').innerHTML;
      const additionalInfoId = uniqueId('additional-info-');

      const template = `
          <button type="button" class="additional-info-button va-button-link" aria-controls="${additionalInfoId}" aria-expanded="false">
            <span class="additional-info-title">${titleText}
              <i class="fa fa-angle-down"></i>
            </span>
          </button>
          <span id="${additionalInfoId}">
            <div class="additional-info-content">
              ${contentMarkup}
            </div>
          </span>`;

      removeChildNodes(el);

      el.insertAdjacentHTML('afterbegin', template);

      const chevron = qS(el, 'i.fa-angle-down');
      const button = qS(el, 'button');

      const additionalInfoClickEvent = new CustomEvent(
        '@department-of-veterans-affairs/formation/additional-info/button-clicked',
        { bubbles: true, detail: { titleText, dataset } },
      );

      button.addEventListener('click', () => {
        const ariaExpanded = JSON.parse(button.getAttribute('aria-expanded'));

        button.setAttribute('aria-expanded', `${!ariaExpanded}`);
        button.parentNode.classList.toggle('form-expanding-group-open');
        chevron.classList.toggle('open');

        button.dispatchEvent(additionalInfoClickEvent);
      });
    });
  }
}
