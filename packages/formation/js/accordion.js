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

const addAriasExpandedAttr = () => {
  document.querySelectorAll('.usa-accordion-button').forEach(element => {
    const hasAriasExpandedAttr = element.getAttribute('aria-expanded');

    if (!hasAriasExpandedAttr) {
      element.setAttribute('aria-expanded', false);
    }
  });
};

const addAriaHiddenAttr = () => {
  document
    .querySelectorAll('.usa-accordion-content:not([aria-hidden])')
    .forEach(el => {
      const buttonElement = document.querySelector(
        `[aria-controls="${el.id}"]`,
      );
      const hiddenValue = !toBoolean(
        buttonElement.getAttribute('aria-expanded'),
      );

      el.setAttribute('aria-hidden', hiddenValue);
    });
};

const getOtherButtons = (element, target) =>
  Array.from(element.getElementsByClassName('usa-accordion-button')).filter(
    item => item !== target,
  );

const addAccordionClickHandler = () => {
  document
    .querySelectorAll('.usa-accordion, .usa-accordion-bordered')
    .forEach(element => {
      element.addEventListener('click', e => {
        const accordionButton = e.target.closest('.usa-accordion-button');

        // Checks whether the button has a click event already assigned to it.
        // and if it is a .usa-accordion-button.
        // Specifically React Components.
        if (accordionButton && !accordionButton.onclick) {
          const multiSelectable = toBoolean(
            element.getAttribute('aria-multiselectable'),
          );

          const hasAriaControlsAttr = accordionButton.getAttribute(
            'aria-controls',
          );

          if (hasAriaControlsAttr && !multiSelectable) {
            getOtherButtons(element, accordionButton).forEach(el => {
              const contentEl = el.getAttribute('aria-controls');

              el.setAttribute('aria-expanded', 'false');

              document
                .getElementById(contentEl)
                .setAttribute('aria-hidden', 'true');
            });
          }

          if (hasAriaControlsAttr) {
            const dropDownElement = document.getElementById(
              accordionButton.getAttribute('aria-controls'),
            );
            const accordionButtonExpandedAttr = toBoolean(
              accordionButton.getAttribute('aria-expanded'),
            );

            dropDownElement.setAttribute(
              'aria-hidden',
              accordionButtonExpandedAttr,
            );

            accordionButton.setAttribute(
              'aria-expanded',
              !accordionButtonExpandedAttr,
            );

            if (!isElementInViewport(accordionButton)) {
              element.scrollIntoView();
            }
          }
        }
      });
    });
};

const loadAccordionHandler = () => {
  addAriaHiddenAttr();
  addAriasExpandedAttr();
  addAccordionClickHandler();
};

export default loadAccordionHandler;
