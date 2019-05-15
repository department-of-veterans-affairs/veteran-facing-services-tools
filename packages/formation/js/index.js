import loadAccordionHandler from './accordion';
import addSidenavListeners from './sidenav';
import domready from 'domready';

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  addSidenavListeners();
  loadAccordionHandler();
} else {
  domready(() => {
    addSidenavListeners();
    loadAccordionHandler();
  });
}
