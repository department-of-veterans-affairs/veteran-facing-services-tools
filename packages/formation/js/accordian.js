const toBoolean = value => value === 'true';

const loadAccordianHandler = () => {
  const usaAccordian = document.getElementsByClassName('usa-accordion')[0];

  usaAccordian.addEventListener('click', e => {
    const target = e.target;

    if (target.getAttribute('aria-controls')) {
      const dropDownElement = document.getElementById(
        target.getAttribute('aria-controls'),
      );
      const dropDownHiddenAttr = dropDownElement.getAttribute('aria-hidden');
      const targetExpandedAttr = target.getAttribute('aria-expanded');

      dropDownElement.setAttribute(
        'aria-hidden',
        !toBoolean(dropDownHiddenAttr),
      );
      target.setAttribute('aria-expanded', !toBoolean(targetExpandedAttr));
    }
  });
};

if (
  document.readyState === 'complete' ||
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  loadAccordianHandler();
} else {
  document.addEventListener('DOMContentLoaded', loadAccordianHandler);
}
