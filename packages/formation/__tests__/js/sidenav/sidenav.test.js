// Mock for window.matchMedia
import '../../matchMedia.mock';

document.body.innerHTML = `
<div>
<!-- Begin mobile toggle button -->
<button type="button" class="va-btn-sidebarnav-trigger" aria-controls="va-detailpage-sidebar">
  <span>
    <b>More in this section</b>
  </span>
</button>
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
  it('should show sidenav when clicking on More in this section', () => {
    global.window.innerWidth = '600px';
    const mobileSideNavButton = document.querySelector(
      '.va-btn-sidebarnav-trigger',
    );

    mobileSideNavButton.click();

    const navElement = document.querySelector('nav');

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(true);
    expect(navElement.getAttribute('aria-hidden')).toEqual('false');
    expect(mobileSideNavButton.getAttribute('hidden')).toEqual('true');
  });

  it('should hide sidenav when clicking on close button', () => {
    global.window.innerWidth = '600px';
    const mobileSideNavButton = document.querySelector(
      '.va-btn-sidebarnav-trigger',
    );
    const navElement = document.querySelector('nav');

    const closeButton = navElement.querySelector('.va-btn-close-icon');

    closeButton.click();

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(false);
    expect(mobileSideNavButton.getAttribute('hidden')).toEqual(null);
    expect(navElement.getAttribute('aria-hidden')).toEqual('true');
  });

  it('', () => {
    global.window.innerWidth = '600px';
    const mobileSideNavButton = document.querySelector(
      '.va-btn-sidebarnav-trigger',
    );
    const navElement = document.querySelector('nav');

    const closeButton = navElement.querySelector('.va-btn-close-icon');

    closeButton.click();

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(false);
    expect(mobileSideNavButton.getAttribute('hidden')).toEqual(null);
    expect(navElement.getAttribute('aria-hidden')).toEqual('true');
  });
});
