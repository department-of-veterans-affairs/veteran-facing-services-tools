// Mock for window.matchMedia
import '../../matchMedia.mock';

import loadAccordionHandler from '../../../js/accordion';

document.body.innerHTML = `
<va-accordion>
  <va-accordion-item header="First Amendment">
    Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
  </va-accordion-item>
  <va-accordion-item header="Second Amendment">
    <div id="4567">A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.</div>
  </va-accordion-item>
  <va-accordion-item header="Third Amendment">
    No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
  </va-accordion-item>
</va-accordion>`;

describe('va-accordion (web-component)', () => {
  global.scrollTo = jest.fn();
  it('should render accordion + 3 accordion-items', () => {
    document.location.hash = '#five';
    expect(document.querySelectorAll('va-accordion').length).toEqual(1);
    expect(document.querySelectorAll('va-accordion-item').length).toEqual(3);
    const isOpen = [...document.querySelectorAll('va-accordion-item')].filter(
      item => item.getAttribute('open'),
    );
    expect(isOpen.length).toEqual(0);
  });

  it('should open accordion with header text that matches the location hash', () => {
    document.location.hash = '#third-amend';
    loadAccordionHandler();
    const lastItem = [...document.querySelectorAll('va-accordion-item')][2];
    expect(lastItem.getAttribute('open')).toEqual('true');
  });

  it('should open accordion with header id that matches the location hash', () => {
    document.location.hash = '#4567';
    const secondItem = [...document.querySelectorAll('va-accordion-item')][1];
    loadAccordionHandler();
    expect(secondItem.getAttribute('open')).toEqual('true');
  });
});
