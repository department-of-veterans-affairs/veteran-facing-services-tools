document.body.innerHTML = `
<h6>Borderless</h6>

<ul class="usa-accordion">
  <li>
    <p>
      <button class="usa-accordion-button"
        aria-controls="a1">
        First Amendment
      </button>
    <p>
    <div id="a1" class="usa-accordion-content">
      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="a2">
      Second Amendment
    </button>
    <div id="a2" class="usa-accordion-content">
      A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="a3">
      Third Amendment
    </button>
    <div id="a3" class="usa-accordion-content">
      No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="a4">
      Fourth Amendment
    </button>
    <div id="a4" class="usa-accordion-content">
      The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="a5">
      Fifth Amendment
    </button>
    <div id="a5" class="usa-accordion-content">
      No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.
    </div>
  </li>
</ul>

<h6>Bordered</h6>

<ul class="usa-accordion-bordered">
  <li>
    <button class="usa-accordion-button"
      aria-controls="b-a1">
      First Amendment
    </button>
    <div id="b-a1" class="usa-accordion-content">
      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="b-a2">
      Second Amendment
    </button>
    <div id="b-a2" class="usa-accordion-content">
      A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="b-a3">
      Third Amendment
    </button>
    <div id="b-a3" class="usa-accordion-content">
      No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="b-a4">
      Fourth Amendment
    </button>
    <div id="b-a4" class="usa-accordion-content">
      The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.
    </div>
  </li><li>
    <button class="usa-accordion-button"
      aria-expanded="false"
      aria-controls="b-a5">
      <span class="usa-banner-button-text">Here’s how you know</span>
    </button>
    <div id="b-a5" class="usa-accordion-content">
      No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.
    </div>
  </li>
</ul>
`;

require('../../../js');

describe('accordion', () => {
  it('should set aria-expanded attribute on load if non exists', () => {
    const a1Element = document.querySelector('[aria-controls="a1"]');

    expect(a1Element.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should set aria-hidden attribute on load if non exists', () => {
    const ariaHiddenIsSet = [
      ...document.getElementsByClassName('usa-accordion-content'),
    ].every(
      el =>
        (el.getAttribute('aria-hidden') === 'true') !==
        (document
          .querySelector(`[aria-controls="${el.id}"]`)
          .getAttribute('aria-expanded') ===
          'true'),
    );

    expect(ariaHiddenIsSet).toEqual(true);
  });

  it('should show if clicked', () => {
    const a1El = document.getElementById('a1');
    const a1BtnEl = document.querySelector('[aria-controls="a1"]');

    a1BtnEl.click();

    expect(a1El.getAttribute('aria-hidden')).toEqual('false');
    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('true');
  });

  it('.usa-accordion-bordered should show if clicked', () => {
    const a1El = document.getElementById('b-a1');
    const a1BtnEl = document.querySelector('[aria-controls="b-a1"]');

    a1BtnEl.click();

    expect(a1El.getAttribute('aria-hidden')).toEqual('false');
    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('true');
  });

  it('should hide if clicked', () => {
    const a1El = document.getElementById('a1');
    const a1BtnEl = document.querySelector('[aria-controls="a1"]');

    a1BtnEl.click();

    expect(a1El.getAttribute('aria-hidden')).toEqual('true');
    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('false');
  });

  it('.usa-accordion-bordered should hide if clicked', () => {
    const a1El = document.getElementById('b-a1');
    const a1BtnEl = document.querySelector('[aria-controls="b-a1"]');

    a1BtnEl.click();

    expect(a1El.getAttribute('aria-hidden')).toEqual('true');
    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('false');
  });

  it('should close any other open dropdowns if clicked', () => {
    const a1BtnEl = document.querySelector('[aria-controls="a1"]');
    const a2BtnEl = document.querySelector('[aria-controls="a2"]');

    a1BtnEl.click();
    a2BtnEl.click();

    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('false');
    expect(a2BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(document.getElementById('a1').getAttribute('aria-hidden')).toEqual(
      'true',
    );
    expect(document.getElementById('a2').getAttribute('aria-hidden')).toEqual(
      'false',
    );
  });

  it('.usa-accordion-bordered should close any other open dropdowns if clicked', () => {
    const a1BtnEl = document.querySelector('[aria-controls="b-a1"]');
    const a2BtnEl = document.querySelector('[aria-controls="b-a2"]');

    a1BtnEl.click();
    a2BtnEl.click();

    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('false');
    expect(a2BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(document.getElementById('b-a1').getAttribute('aria-hidden')).toEqual(
      'true',
    );
    expect(document.getElementById('b-a2').getAttribute('aria-hidden')).toEqual(
      'false',
    );
  });

  it('.usa-accordion click should not affect .usa-accordion-bordered when clicked', () => {
    const a1BtnEl = document.querySelector('[aria-controls="a1"]');
    const bA1BtnEl = document.querySelector('[aria-controls="b-a1"]');

    a1BtnEl.click();
    bA1BtnEl.click();

    expect(a1BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(bA1BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(document.getElementById('a1').getAttribute('aria-hidden')).toEqual(
      'false',
    );
    expect(document.getElementById('b-a1').getAttribute('aria-hidden')).toEqual(
      'false',
    );
  });

  it('should show both dropdown if aria-multiselectable is true', () => {
    document
      .querySelector('.usa-accordion')
      .setAttribute('aria-multiselectable', true);

    const a3BtnEl = document.querySelector('[aria-controls="a3"]');
    const a4BtnEl = document.querySelector('[aria-controls="a4"]');

    a3BtnEl.click();
    a4BtnEl.click();

    expect(a3BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(a4BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(document.getElementById('a3').getAttribute('aria-hidden')).toEqual(
      'false',
    );
    expect(document.getElementById('a4').getAttribute('aria-hidden')).toEqual(
      'false',
    );
  });

  it('.usa-accordion-bordered should show both dropdown if aria-multiselectable is true', () => {
    document
      .querySelector('.usa-accordion-bordered')
      .setAttribute('aria-multiselectable', true);

    const a3BtnEl = document.querySelector('[aria-controls="b-a3"]');
    const a4BtnEl = document.querySelector('[aria-controls="b-a4"]');

    a3BtnEl.click();
    a4BtnEl.click();

    expect(a3BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(a4BtnEl.getAttribute('aria-expanded')).toEqual('true');
    expect(document.getElementById('b-a3').getAttribute('aria-hidden')).toEqual(
      'false',
    );
    expect(document.getElementById('b-a4').getAttribute('aria-hidden')).toEqual(
      'false',
    );
  });

  it('clicking on nested tag in .usa-accordion-button should open content', () => {
    const usaBannerTextEl = document.querySelector('.usa-banner-button-text');

    usaBannerTextEl.click();

    expect(document.getElementById('b-a5').getAttribute('aria-hidden')).toEqual(
      'false',
    );
  });
});
