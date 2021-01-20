// Mock for window.matchMedia
import '../../matchMedia.mock';

document.body.innerHTML = `
<div>
<!-- Begin mobile toggle button -->
<div class="va-btn-sidebarnav-trigger" id="sidebar-nav-trigger">
  <!-- The button background is to hide any content that is behind the trigger -->
  <div class="button-background"></div>
  <div class="button-wrapper">
    <button aria-controls="va-detailpage-sidebar">
      <strong>In this section</strong>
      {% include "src/site/assets/img/bars.svg" %}
    </button>
  </div>
</div>
<div class="trigger-placeholder"></div>
<div class="medium-screen:vads-u-display--flex">
  <div class="medium-screen:vads-l-col--3">
    <nav class="va-sidebarnav vads-u-width--full" id="va-detailpage-sidebar">
      <div>
        <button type="button" aria-label="Close this menu" class="va-btn-close-icon va-sidebarnav-close"></button>
        <div class="left-side-nav-title">
          <h4>Section title</h4>
        </div>
        <ul class="usa-accordion">
          <li>
            <button class="usa-accordion-button" aria-expanded="false" aria-controls="a1">
              Nav section
            </button>
            <div id="a1" class="usa-accordion-content" aria-hidden="true">
              <ul class="usa-sidenav-list">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button class="usa-accordion-button" aria-expanded="true" aria-controls="a2">
              Second nav section
            </button>
            <div id="a2" class="usa-accordion-content" aria-hidden="false">
              <ul class="usa-sidenav-list">
                <li>
                  <a href="#">Link</a>
                </li>
                <li class="active-level">
                  <a class="usa-current" href="#">Current section</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <script type="text/javascript">
        var mobileMediaQuery = window.matchMedia('(max-width: 767px)');
        var element = document.getElementsByClassName("va-btn-sidebarnav-trigger")[0];
        var offset;

        if (mobileMediaQuery.matches) {
          offset = element.offsetTop;
        }

        window.addEventListener("resize", function() {
          if (mobileMediaQuery.matches) {
            offset = element.offsetTop;
          }
        }, false);

        window.addEventListener("scroll", function() {
          if (mobileMediaQuery.matches) {
            if (offset < window.pageYOffset) {
              element.classList.add("fixed-trigger");
            } else {
              element.classList.remove("fixed-trigger");
            }
          }
        }, false);
    </script>
  </div>
</div>
`;

require('../../../js');

describe('Sidenav', () => {
  it('should show sidenav when clicking on the trigger button', () => {
    global.window.innerWidth = '600px';
    const mobileSideNavButton = document.querySelector(
      '.va-btn-sidebarnav-trigger button',
    );

    mobileSideNavButton.click();

    const navElement = document.querySelector('nav');

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(true);
    expect(navElement.getAttribute('aria-hidden')).toEqual('false');
  });

  it('should hide sidenav when clicking on close button', () => {
    global.window.innerWidth = '600px';
    const navElement = document.querySelector('nav');

    const closeButton = navElement.querySelector('.va-btn-close-icon');

    closeButton.click();

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(false);
    expect(navElement.getAttribute('aria-hidden')).toEqual('true');
  });
});
