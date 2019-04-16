import loadAccordionHandler from './accordion';

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  loadAccordionHandler();
} else {
  document.addEventListener('DOMContentLoaded', loadAccordionHandler);
}
