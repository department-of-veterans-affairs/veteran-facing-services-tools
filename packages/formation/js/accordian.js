const toBoolean = value => value === 'true';

const loadAccordianHandler = () => {
  const usaAccordion = document.getElementsByClassName('usa-accordion');
  const usaAccordionContentElements = [
    ...document.getElementsByClassName('usa-accordion-content'),
  ];

  usaAccordionContentElements.forEach(el => {
    if (el.getAttribute('aria-hidden') === null) {
      el.setAttribute(
        'aria-hidden',
        !el.previousElementSibling.getAttribute('aria-expanded'),
      );
    }
  });

  for (let i = 0; i < usaAccordion.length; i++) {
    usaAccordion[i].addEventListener('click', e => {
      const target = e.target;

      if (target.getAttribute('aria-controls')) {
        const dropDownElement = document.getElementById(
          target.getAttribute('aria-controls'),
        );
        const targetExpandedAttr = toBoolean(
          target.getAttribute('aria-expanded'),
        );

        dropDownElement.setAttribute('aria-hidden', targetExpandedAttr);
        target.setAttribute('aria-expanded', !targetExpandedAttr);
      }
    });
  }
};

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  loadAccordianHandler();
} else {
  document.addEventListener('DOMContentLoaded', loadAccordianHandler);
}
