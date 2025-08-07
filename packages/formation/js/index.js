import loadAccordionHandler from './accordion';
import createAdditionalInfoWidget from './additional-info';
import addSidenavListeners from './sidenav';
import domready from 'domready';
import rawElementClosest from 'element-closest';

// element-closest is a CommonJS module that exports a function directly.
// When imported via Babel/ESM, the default export may be undefined.
const elementClosest = typeof rawElementClosest === 'function' ? rawElementClosest : rawElementClosest.default;

if (typeof elementClosest === 'function') {
  elementClosest(window);
}

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  addSidenavListeners();
  createAdditionalInfoWidget();
  loadAccordionHandler();
} else {
  domready(() => {
    addSidenavListeners();
    createAdditionalInfoWidget();
    loadAccordionHandler();
  });
}
