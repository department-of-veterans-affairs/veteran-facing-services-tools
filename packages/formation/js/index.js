import loadAccordionHandler from './accordion';
import createAdditionalInfoWidget from './additional-info';
import addSidenavListeners from './sidenav';
import backToTopListener from './back-to-top';
import domready from 'domready';
import elementClosest from 'element-closest';

elementClosest(window);

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  addSidenavListeners();
  createAdditionalInfoWidget();
  loadAccordionHandler();
  backToTopListener();
} else {
  domready(() => {
    addSidenavListeners();
    createAdditionalInfoWidget();
    loadAccordionHandler();
    backToTopListener();
  });
}
