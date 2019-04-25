const toBoolean = value => value === 'true';

const isElementInViewport = (
  el,
  win = window,
  docEl = document.documentElement,
) => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (win.innerHeight || docEl.clientHeight) &&
    rect.right <= (win.innerWidth || docEl.clientWidth)
  );
};

const loadAccordionHandler = () => {
  const usaAccordion = [
    ...document.getElementsByClassName('usa-accordion'),
    ...document.getElementsByClassName('usa-accordion-bordered'),
  ];
  const usaAccordionContentElements = [
    ...document.getElementsByClassName('usa-accordion-content'),
  ];

  usaAccordionContentElements.forEach(el => {
    if (el.getAttribute('aria-hidden') === null) {
      el.setAttribute(
        'aria-hidden',
        !toBoolean(el.previousElementSibling.getAttribute('aria-expanded')),
      );
    }
  });

  usaAccordion.forEach(element => {
    element.addEventListener('click', e => {
      const target = e.target;
      const other = Array.from(
        element.getElementsByClassName('usa-accordion-button'),
      ).filter(item => item !== target);

      const multiSelectable = toBoolean(
        element.getAttribute('aria-multiselectable'),
      );

      if (target.getAttribute('aria-controls')) {
        if (!multiSelectable) {
          other.forEach(el => {
            el.setAttribute('aria-expanded', 'false');
            el.parentElement
              .querySelector('.usa-accordion-content')
              .setAttribute('aria-hidden', 'true');
          });
        }

        const dropDownElement = document.getElementById(
          target.getAttribute('aria-controls'),
        );
        const targetExpandedAttr = toBoolean(
          target.getAttribute('aria-expanded'),
        );

        dropDownElement.setAttribute('aria-hidden', targetExpandedAttr);
        target.setAttribute('aria-expanded', !targetExpandedAttr);

        if (!isElementInViewport(target)) {
          element.scrollIntoView();
        }
      }
    });
  });
};

export default loadAccordionHandler;
