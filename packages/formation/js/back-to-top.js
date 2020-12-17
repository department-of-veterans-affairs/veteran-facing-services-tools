/**
 * This button is used for navigating the user back to the top of the page.
 * It's to be used on long article pages.
 * There is some complexity in the animation toggling function "scrollListener"
 */
// import { focusElement } from 'platform/utilities/ui';

function navigateToTop() {
  // focusElement('#content');
  return window.scrollTo(0, 0);
}

function isScrolledIntoView(el) {
  const elemTop = el.getBoundingClientRect().top;
  // Only partially || completely visible elements return true
  return elemTop >= 0 && elemTop <= window.innerHeight;
}

function closure(button, buttonContainer, footer, buttonClasses) {
  const scrollBreakpoint = 600;
  const comparators = [
    () => window.scrollY > scrollBreakpoint,
    () => window.scrollY < scrollBreakpoint,
  ];
  let compIdx = 0;

  const footerComparators = [
    () => isScrolledIntoView(footer),
    () => !isScrolledIntoView(footer),
  ];
  let footerCompIdx = 0;

  return () => {
    if (comparators[compIdx]()) {
      button.classList.toggle(buttonClasses.transitionIn);
      compIdx = (compIdx + 1) % 2;
    }

    if (footerComparators[footerCompIdx]()) {
      buttonContainer.classList.toggle(buttonClasses.containerRelative);
      button.classList.toggle(buttonClasses.transitionReset);
      footerCompIdx = (footerCompIdx + 1) % 2;
    }
  };
}

export default function setup() {
  const buttonContainer = document.getElementById('top-button-container');
  if (!buttonContainer) return;

  const upToTopButton = buttonContainer.querySelector('button');
  if (!upToTopButton) return;
  // The current page likely does not contain a "Back to top" button in its layout.

  const footer = document.getElementById('footerNav');
  if (!footer) return;

  const buttonClasses = {
    transitionIn: 'va-top-button-transition-in',
    containerRelative: 'va-top-button-container-relative',
    transitionReset: 'va-top-button-transition-reset',
  };

  // Attach listeners
  upToTopButton.addEventListener('click', navigateToTop);
  window.addEventListener(
    'scroll',
    closure(upToTopButton, buttonContainer, footer, buttonClasses),
  );
}
