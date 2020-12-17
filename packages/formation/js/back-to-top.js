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

function doesElHaveClass(el, className) {
  return el.classList.contains(className);
}

function isScrolledIntoView(el) {
  const elemTop = el.getBoundingClientRect().top;
  // Only partially || completely visible elements return true
  return elemTop >= 0 && elemTop <= window.innerHeight;
}

// Responsible for toggling animation classes
function scrollListener(button, buttonContainer, footer, buttonClasses) {
  const distanceOfScrollingBeforeAppearing = 600;
  const scrollFromTop = window.scrollY;

  if (
    scrollFromTop > distanceOfScrollingBeforeAppearing &&
    !doesElHaveClass(button, buttonClasses.transitionIn)
  ) {
    button.classList.add(buttonClasses.transitionIn);
    button.classList.remove(buttonClasses.transitionOut);
  } else if (
    scrollFromTop < distanceOfScrollingBeforeAppearing &&
    doesElHaveClass(button, buttonClasses.transitionIn)
  ) {
    button.classList.add(buttonClasses.transitionOut);
    button.classList.remove(buttonClasses.transitionIn);
  }

  if (isScrolledIntoView(footer)) {
    buttonContainer.classList.add(buttonClasses.containerRelative);
    button.classList.add(buttonClasses.transitionReset);
  } else if (
    doesElHaveClass(buttonContainer, buttonClasses.containerRelative)
  ) {
    buttonContainer.classList.remove(buttonClasses.containerRelative);
    button.classList.remove(buttonClasses.transitionReset);
  }
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
    transitionOut: 'va-top-button-transition-out',
    containerRelative: 'va-top-button-container-relative',
    transitionReset: 'va-top-button-transition-reset',
  };

  // Attach listeners
  upToTopButton.addEventListener('click', navigateToTop);
  window.addEventListener('scroll', () =>
    scrollListener(upToTopButton, buttonContainer, footer, buttonClasses),
  );
}
