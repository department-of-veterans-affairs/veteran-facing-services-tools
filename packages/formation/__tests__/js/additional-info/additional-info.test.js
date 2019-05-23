/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import additionalInfoWidget from '../../../js/additional-info';

function qS(rootNode, selector) {
  return rootNode.querySelector(selector);
}

describe('static page additional information widget', () => {
  const basicTemplate = `<div class="form-expanding-group additional-info-container">
    <span id="tooltip-1">
      <div class="additional-info-content">
        <ul>
          <li>info A</li>
          <li>info B</li>
          <li>info C</li>
          <li>info D</li>
        </ul>
      </div>
    </span>
  </div>`;

  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
  });

  it('should display a default title and content', () => {
    document.body.insertAdjacentHTML('beforeend', basicTemplate);

    additionalInfoWidget();

    expect(qS(document, '.additional-info-title')).to.not.be.null;
    expect(qS(document, '.additional-info-content').textContent).to.contain(
      'info A',
    );
  });

  it('should display a custom title', () => {
    const customTemplate = `<div class="form-expanding-group additional-info-container">
      <span class="additional-info-title">Additional Information</span>
      <span id="tooltip-1">
        <div class="additional-info-content">
          <ul>
            <li>info A</li>
            <li>info B</li>
            <li>info C</li>
            <li>info D</li>
          </ul>
        </div>
      </span>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', customTemplate);

    additionalInfoWidget();
    expect(qS(document, '.additional-info-title')).to.not.be.null;
    expect(qS(document, '.additional-info-title').textContent).to.contain(
      'Additional Information',
    );
  });

  it('should reveal hidden content', () => {
    document.body.insertAdjacentHTML('beforeend', basicTemplate);

    additionalInfoWidget();
    expect(qS(document, '.form-expanding-group-open')).to.be.null;
    expect(qS(document, 'i.fa-angle-down.open')).to.be.null;
    expect(qS(document, 'button').getAttribute('aria-expanded')).to.equal(
      'false',
    );

    qS(document, 'button').click();

    expect(qS(document, '.form-expanding-group-open')).to.not.be.null;
    expect(qS(document, 'i.fa-angle-down.open')).to.not.be.null;
    expect(qS(document, 'button').getAttribute('aria-expanded')).to.equal(
      'true',
    );
  });
});
