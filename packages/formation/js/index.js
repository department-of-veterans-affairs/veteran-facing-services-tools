import loadAccordionHandler from './accordion';
import domready from 'domready';

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  loadAccordionHandler();
} else {
  domready(() => {
    loadAccordionHandler();
  });
}
