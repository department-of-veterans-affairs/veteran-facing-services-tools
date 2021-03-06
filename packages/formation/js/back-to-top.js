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
  const elemTop = el.getBoundingClientRect().top;
  // Only partially || completely visible elements return true
  return elemTop >= 0 && elemTop <= window.innerHeight;
}

function closure(button, buttonContainer, footer, buttonClasses) {
  const scrollBreakpoint = 600;
  const breakpointCheck = () => window.scrollY > scrollBreakpoint;
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
  if (!footer) return;

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
