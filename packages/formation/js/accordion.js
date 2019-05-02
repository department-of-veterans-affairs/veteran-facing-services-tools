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

  document
    .querySelectorAll('.usa-accordion, .usa-accordion-bordered')
    .forEach(element => {
      element.addEventListener('click', e => {
        const target = e.target;

        // Checks whether the button has a click event already assigned to it.
        // Specifically React Components.
        if (!target.onclick) {
          const other = Array.from(
            element.getElementsByClassName('usa-accordion-button'),
          ).filter(item => item !== target);

          const multiSelectable = toBoolean(
            element.getAttribute('aria-multiselectable'),
          );

          if (target.getAttribute('aria-controls')) {
            if (!multiSelectable) {
              other.forEach(el => {
                const contentEl = el.getAttribute('aria-controls');

                el.setAttribute('aria-expanded', 'false');

                document
                  .getElementById(contentEl)
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
        }
      });
    });
};

export default loadAccordionHandler;
