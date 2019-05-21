import loadAccordionHandler from './accordion';
import addSidenavListeners from './sidenav';
import domready from 'domready';
import elementClosest from 'element-closest';

elementClosest(window);

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
