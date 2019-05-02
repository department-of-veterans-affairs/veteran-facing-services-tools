import loadAccordionHandler from './accordion';
import SideBarMenu from './sidenav';
import domready from 'domready';

if (
  document.readyState === 'complete' &&
  (document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
  loadAccordionHandler();
  SideBarMenu();
} else {
  domready(loadAccordionHandler);
  domready(SideBarMenu);
}
