/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { closure } from '../../../js/back-to-top';

describe('static page back to top widget', () => {
  const testButton = {
    classList: {
      toggle: sinon.spy(),
    },
  };
  const testButtonContainer = {
    classList: {
      toggle: sinon.spy(),
    },
  };
  const buttonClasses = {
    transitionIn: 'test-transition',
    containerRelative: 'test-container-relative',
  };

  const windowClone = global.window;

  afterEach(() => {
    global.window = windowClone;
    testButton.classList.toggle.resetHistory();
    testButtonContainer.classList.toggle.resetHistory();
  });

  it('should not toggle button transition class when at top of page', () => {
    global.window.scrollY = 0;

    closure(
      testButton,
      testButtonContainer,
      {
        getBoundingClientRect: () => ({
          top: 0,
        }),
      },
      buttonClasses,
    )();

    expect(testButton.classList.toggle.calledWith(buttonClasses.transitionIn))
      .not.to.be.true;
  });

  it('should toggle button transition class when scrolled past breakpoint', () => {
    global.window.scrollY = 601;

    closure(
      testButton,
      testButtonContainer,
      {
        getBoundingClientRect: () => ({
          top: 601,
        }),
      },
      buttonClasses,
    )();

    expect(testButton.classList.toggle.calledWith(buttonClasses.transitionIn))
      .to.be.true;
  });

  it('should toggle button transition class when scrolled past breakpoint in IE11', () => {
    global.window.scrollY = undefined;
    global.window.pageYOffset = 601;

    closure(
      testButton,
      testButtonContainer,
      {
        getBoundingClientRect: () => ({
          top: 601,
        }),
      },
      buttonClasses,
    )();

    expect(testButton.classList.toggle.calledWith(buttonClasses.transitionIn))
      .to.be.true;
  });

  it('should toggle button transition class even when footer is not present', () => {
    global.window.scrollY = 601;

    closure(testButton, testButtonContainer, null, buttonClasses)();

    expect(testButton.classList.toggle.calledWith(buttonClasses.transitionIn))
      .to.be.true;
  });

  it('should not toggle button container relative class when footer is out of view', () => {
    closure(
      testButton,
      testButtonContainer,
      {
        getBoundingClientRect: () => ({
          top: 800,
        }),
      },
      buttonClasses,
    )();

    expect(
      testButtonContainer.classList.toggle.calledWith(
        buttonClasses.containerRelative,
      ),
    ).not.to.be.true;
  });

  it('should toggle button container relative class when footer is in view', () => {
    closure(
      testButton,
      testButtonContainer,
      {
        getBoundingClientRect: () => ({
          top: 0,
        }),
      },
      buttonClasses,
    )();

    expect(
      testButtonContainer.classList.toggle.calledWith(
        buttonClasses.containerRelative,
      ),
    ).to.be.true;
  });
});
