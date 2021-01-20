import {
  isTab,
  isReverseTab,
  getTabbableElements,
} from './utilities/accessibility';

/*
@param menuTriggers: One or more elements that will trigger the appearance of
the menu. Typically this will be `.va-btn-sidebarnav-trigger button`
*/
class SideBarMenu {
  constructor(menuTriggers) {
    this.menuTriggers = Array.from(menuTriggers);
    this.init = this.init.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.addCloseMenuListener = this.addCloseMenuListener.bind(this);
    this.captureFocus = this.captureFocus.bind(this);
    this.checkAccordionFocus = this.checkAccordionFocus.bind(this);
    this.findKeyNodes = this.loadKeyNodes.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.menu = null;
    this.init();
  }

  init() {
    // Just in case we ever use this with server-side rendering
    if (window) {
      window.matchMedia('(min-width: 768px)').addListener(() => {
        if (this.menu && this.menu.getAttribute('aria-hidden') === 'false') {
          this.closeMenu();
        }
      });
    }

    this.menuTriggers.forEach(mt => {
      mt.addEventListener('click', domEvent => {
        this.openMenu(domEvent.currentTarget);
      });
    });
  }

  captureFocus(e) {
    if (e.target === this.closeControl) {
      if (isReverseTab(e)) {
        e.preventDefault();
        // check if the element is hidden
        if (this.lastTabbableElement.offsetHeight === 0) {
          this.lastAccordionButton.focus();
        } else {
          this.lastTabbableElement.focus();
        }
        // if it is, its nested in an accordion
      }
    }
    if (e.target === this.lastTabbableElement) {
      if (isTab(e)) {
        e.preventDefault();
        this.closeControl.focus();
      }
    }
  }
  checkAccordionFocus(e) {
    if (e.target.getAttribute('aria-expanded') === 'false') {
      if (isTab(e)) {
        e.preventDefault();
        this.closeControl.focus();
      }
    }
  }
  getAccordionButtons(node) {
    return node.querySelectorAll('.usa-accordion-button');
  }
  loadKeyNodes(element) {
    this.menu = document.querySelector(
      `#${element.getAttribute('aria-controls')}`,
    );
    this.tabbableElements = getTabbableElements(this.menu);
    this.accordionButtons = this.getAccordionButtons(this.menu);
    this.lastAccordionButton = this.accordionButtons[
      this.accordionButtons.length - 1
    ];
    this.closeControl = this.tabbableElements[0];
    this.lastTabbableElement = this.tabbableElements[
      this.tabbableElements.length - 1
    ];
  }
  openMenu(trigger) {
    this.loadKeyNodes(trigger);
    this.menu.classList.add('va-sidebarnav--opened');
    this.menu.setAttribute('aria-hidden', 'false');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    this.addCloseMenuListener();
    // main trigger, switch focus to close button
    this.closeControl.focus();
    // capture the focus
    if (this.lastAccordionButton) {
      this.lastAccordionButton.addEventListener(
        'keydown',
        this.checkAccordionFocus,
      );
    }
    this.closeControl.addEventListener('keydown', this.captureFocus);
    this.lastTabbableElement.addEventListener('keydown', this.captureFocus);
  }
  removeListeners() {
    if (this.lastAccordionButton) {
      this.lastAccordionButton.removeEventListener(
        'keydown',
        this.checkAccordionFocus,
      );
    }
    this.closeControl.removeEventListener('keydown', this.captureFocus);
    this.lastTabbableElement.removeEventListener('keydown', this.captureFocus);
  }

  addCloseMenuListener() {
    const close = this.menu.querySelector('.va-sidebarnav-close');
    close.addEventListener('click', () => {
      this.closeMenu();
      this.removeListeners();
    });
  }

  closeMenu() {
    this.menu.classList.remove('va-sidebarnav--opened');
    this.menu.setAttribute('aria-hidden', 'true');
    document.getElementsByTagName('body')[0].style.overflow = 'initial';
  }
}

function addActiveState() {
  // Add active state for Drupal-based side nav
  const sideNav = document.querySelector(
    '#va-detailpage-sidebar[data-drupal-sidebar]',
  );
  if (sideNav) {
    const current = sideNav.getElementsByClassName('usa-current')[0];
    if (current) {
      const accordionContent = current.closest('.usa-accordion-content');
      if (accordionContent) {
        const parent = accordionContent.previousElementSibling;
        const ariaExpanded =
          parent.getAttribute('aria-expanded') === 'false' ? 'true' : 'false';
        parent.setAttribute('aria-expanded', ariaExpanded);
      }
    }
  }
}

const addSidenavListeners = () => {
  // eslint-disable-next-line no-new
  new SideBarMenu(
    document.querySelectorAll('.va-btn-sidebarnav-trigger button'),
  );
  addActiveState();
};

export default addSidenavListeners;
