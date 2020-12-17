(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),s=a.n(n),r=a("Wbzz");function i(){return s.a.createElement(r.StaticQuery,{query:"68798663",render:function(e){return s.a.createElement(c,{items:e.components.edges.map((function(e){return{href:e.node.path,name:e.node.context.name}}))})}})}function m(e){var t=e.item;return t.href?s.a.createElement("li",{key:t.name},s.a.createElement(r.Link,{to:t.href},t.name)):s.a.createElement("li",{key:t.name},t.name," (future)")}function c(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?s.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?s.a.createElement("li",{key:e.name},n&&s.a.createElement(m,{item:e}),!n&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(c,{isSublist:!0,items:e.items})):"componentList"===e.query?s.a.createElement("li",{key:e.name},n&&s.a.createElement(m,{item:e}),!n&&s.a.createElement("h2",{className:"heading-level-4"},e.name),s.a.createElement(i,null)):s.a.createElement(m,{item:e,key:e.name})}))):null}var l=a("MEl4"),o=a.n(l);function d(e){var t=e.location,a=o.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?s.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},s.a.createElement("div",{className:"site-c-sidenav"},s.a.createElement(c,{items:a.items}))):null}function p(e){var t=e.sourceUrl;return t?s.a.createElement("div",null,s.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",s.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var u=a("8FPV");function b(e){var t=e.children,a=e.location,n=e.pageContext;return s.a.createElement(u.a,{location:a},s.a.createElement("div",{className:"vads-l-row"},s.a.createElement(d,{location:a}),s.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,s.a.createElement(p,{sourceUrl:n.sourceUrl}))))}},EWft:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a("zLVn"),s=(a("q1tI"),a("7ljp")),r=a("3dLD"),i={},m={_frontmatter:i},c=r.a;function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(s.mdx)(c,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"writing-an-end-to-end-test"},"Writing an end-to-end test"),Object(s.mdx)("p",null,"Front end engineers use end-to-end (e2e) tests in ",Object(s.mdx)("inlineCode",{parentName:"p"},"vets-website")," to validate multipage applications with client-side routing. They are primarily used to assert that:"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"client applications render their inputs"),Object(s.mdx)("li",{parentName:"ul"},"client-side navigation occurs when the required fields are populated")),Object(s.mdx)("h2",{id:"end-to-end-testing-overview"},"End-to-end testing overview"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"vets-website")," uses ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://www.cypress.io/"}),"Cypress")," to write end-to-end tests. See ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/cypress-best-practices-on-vsp.md"}),"Cypress Best Practices on VSP")," and ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/vsp-cypress-resources.md"}),"Cypress Resources Reference Guide")," for detailed use cases and documented helpers/mocks.",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},"Some older end-to-end tests were written in ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://nightwatchjs.org"}),"Nightwatch")," prior to Cypress. All new tests should be written using Cypress moving forward and Nightwatch tests are in the process of being deprecated/migrated to Cypress."),Object(s.mdx)("li",{parentName:"ul"},"Refer to the ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/cypress-migration-guide.md"}),"Cypress migration guide")," to convert old tests or write new tests."))),Object(s.mdx)("li",{parentName:"ul"},"End-to-end tests are ",Object(s.mdx)("strong",{parentName:"li"},"collocated in application folder")," with the application they test"),Object(s.mdx)("li",{parentName:"ul"},"Cypress tests can be run using the command ",Object(s.mdx)("inlineCode",{parentName:"li"},"yarn cy:run")," (after ",Object(s.mdx)("inlineCode",{parentName:"li"},"yarn watch")," to ",Object(s.mdx)("inlineCode",{parentName:"li"},"yarn build"),").")),Object(s.mdx)("h2",{id:"end-to-end-tests-conventions"},"End-to-end tests conventions"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Use a comment to indicate what page is being tested"),Object(s.mdx)("li",{parentName:"ul"},"Disable scrolling"),Object(s.mdx)("li",{parentName:"ul"},"Assert navigation is successful"),Object(s.mdx)("li",{parentName:"ul"},"Use functions from the helper file to perform all actions on the page")),Object(s.mdx)("p",null,Object(s.mdx)("em",{parentName:"p"},"These are recommendations not requirements.")),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Separate navigation from field input",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},"Use a ",Object(s.mdx)("strong",{parentName:"li"},"main test file")," for navigation, assertions, and calls helpers"),Object(s.mdx)("li",{parentName:"ul"},"Use a ",Object(s.mdx)("strong",{parentName:"li"},"helper file")," for filling out forms"))),Object(s.mdx)("li",{parentName:"ul"},"Create separate, numbered ",Object(s.mdx)("strong",{parentName:"li"},"main test files")," to organize tests by their focus:",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("strong",{parentName:"li"},"00-all-fields.cypress.spec.js")," - required and optional fields"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("strong",{parentName:"li"},"01-required.cypress.spec.js")," - only required fields"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("strong",{parentName:"li"},"02-accessibility.cypress.spec.js")," - validates accessibility"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("strong",{parentName:"li"},"03-auth.cypress.spec.js")," - validates authentication"),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("strong",{parentName:"li"},"04-cross-cutting-feature.cypress.spec.js")," - validates one feature used across several pages (e.g. save in progress)"))),Object(s.mdx)("li",{parentName:"ul"},"Group tests by pages and use a comment to indicate what page is being tested"),Object(s.mdx)("li",{parentName:"ul"},"Mock all api responses before starting the test. See ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end#mocks"}),"Mock API responses")),Object(s.mdx)("li",{parentName:"ul"},"Use ",Object(s.mdx)("inlineCode",{parentName:"li"},"waitForElementVisible")," before interacting with any element on the page"),Object(s.mdx)("li",{parentName:"ul"},"Use ",Object(s.mdx)("inlineCode",{parentName:"li"},"Timeouts")," constants for setting timeouts (",Object(s.mdx)("inlineCode",{parentName:"li"},"platform/testing/e2e/timeouts.js"),")"),Object(s.mdx)("li",{parentName:"ul"},"Use helpers for filling data and performing actions on the page"),Object(s.mdx)("li",{parentName:"ul"},"Perform ",Object(s.mdx)("inlineCode",{parentName:"li"},"axeCheck")," on the main body of the application on each page - see ",Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/axeCheck.js"}),"axeCheck")),Object(s.mdx)("li",{parentName:"ul"},"Assert that each navigation is successful")),Object(s.mdx)("h2",{id:"mocking-api-responses"},"Mocking API responses"),Object(s.mdx)("p",null,"A mock server runs with the end-to-end tests to allow tests to make production-like calls."),Object(s.mdx)("p",null,"See the ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/testing/end-to-end/vsp-cypress-resources.md#mocks"}),"Mocks section of Cypress Resources Reference Guide")," for detailed mock API examples currently used."),Object(s.mdx)("p",null,"Below are some of the commonly used Cypress mocks (accessible from the link above)."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"confirmedVA"),Object(s.mdx)("li",{parentName:"ul"},"confirmedCC"),Object(s.mdx)("li",{parentName:"ul"},"requests"),Object(s.mdx)("li",{parentName:"ul"},"cancelReasons"),Object(s.mdx)("li",{parentName:"ul"},"supportedSites"),Object(s.mdx)("li",{parentName:"ul"},"facilities"),Object(s.mdx)("li",{parentName:"ul"},"facilities983"),Object(s.mdx)("li",{parentName:"ul"},"clinicList983"),Object(s.mdx)("li",{parentName:"ul"},"slots"),Object(s.mdx)("li",{parentName:"ul"},"getVAAppointmentMock"),Object(s.mdx)("li",{parentName:"ul"},"getExpressCareRequestCriteriaMock"),Object(s.mdx)("li",{parentName:"ul"},"getParentSiteMock")),Object(s.mdx)("h2",{id:"custom-cypress-commands"},"Custom Cypress commands"),Object(s.mdx)("p",null,"Cypress supports extending its client api with ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands"}),"custom commands"),"."),Object(s.mdx)("p",null,"Below are some of the commonly used custom Cypress commands."),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/axeCheck.js"}),"axeCheck")," - Callback from a11y check that logs aXe violations to console output."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/expandAccordions.js"}),"expandAccordions")," - Expands all accordions and AdditionalInfo components."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/hasCount.js"}),"injectAxeThenAxeCheck")," - Combines two common, sequentially called functions."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/login.js"}),"login")," - Simulates a logged in session."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/syncFixtures.js"}),"syncFixtures")," - Runs task to sync fixtures under a temp path in the Cypress fixtures folder then overwrites ",Object(s.mdx)("inlineCode",{parentName:"li"},"cy.fixture")," and the fixture shorthand in ",Object(s.mdx)("inlineCode",{parentName:"li"},"cy.route")," to look for fixtures under that temp path."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/upload.js"}),"upload")," - Workaround to support file upload functionality in tests, which is currently not officially implemented."),Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/viewportPreset.js"}),"viewportPreset")," - Sets the viewport by preset name.")),Object(s.mdx)("h2",{id:"helpers"},"Helpers"),Object(s.mdx)("p",null,"The ",Object(s.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end"}),"Cypress Resources Reference Guide")," contains a list of currently utilized Cypress & VAOS Helpers adn Appointment Helpers."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-end-to-end-test-mdx-6dc609057130a7ce6479.js.map