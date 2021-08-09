/**
 * This button is used for navigating the user back to the top of the page.
 * It's to be used on long article pages.
 */

function navigateToTop() {
  // Focus the h1 tag on the page.
  const el = document.querySelector('h1');
  if (el) {
    // Prepare the element so that it can accept focus properly.
    el.setAttribute('tabindex', '-1');
    el.focus();

    // Cleanup the tabindex on blur.
    el.addEventListener('blur', () => el.removeAttribute('tabindex'));
  }

  // Scroll to the top.
  return window.scrollTo(0, 0);
}

function isScrolledIntoView(el) {
  const elemTop = el?.getBoundingClientRect().top;

  if (!elemTop && elemTop !== 0) {
    return false;
  }

  // Only partially || completely visible elements return true
  return elemTop >= 0 && elemTop <= window.innerHeight;
}

export function closure(button, buttonContainer, footer, buttonClasses) {
  const scrollBreakpoint = 600;
  // Fallback to window.pageYOffset for IE11
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#browser_compatibility
  const breakpointCheck = () =>
    (window.scrollY || window.pageYOffset) > scrollBreakpoint;
  let hasHitBreakpoint = false;

  const footerCheck = () => isScrolledIntoView(footer);
  let footerVisChanged = false;

  return () => {
    if (breakpointCheck() !== hasHitBreakpoint) {
      button.classList.toggle(buttonClasses.transitionIn);
      hasHitBreakpoint = !hasHitBreakpoint;
    }

    if (footerCheck() !== footerVisChanged) {
      buttonContainer.classList.toggle(buttonClasses.containerRelative);
      footerVisChanged = !footerVisChanged;
    }
  };
}

export default function setup() {
  const buttonContainer = document.getElementById('back-to-top-container');
  if (!buttonContainer) return;

  const upToTopButton = buttonContainer.querySelector('button');
  if (!upToTopButton) return;
  // The current page likely does not contain a "Back to top" button in its layout.

  const footer = document.getElementById('footerNav');

  const buttonClasses = {
    transitionIn: 'va-top-button-transition-in',
    containerRelative: 'va-top-button-container-relative',
  };

  // Attach listeners
  upToTopButton.addEventListener('click', navigateToTop);
  window.addEventListener(
    'scroll',
    closure(upToTopButton, buttonContainer, footer, buttonClasses),
  );
}
