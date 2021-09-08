(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"3dLD":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),o=a.n(n),i=a("FRpb");function r(e){var t=e.sourceUrl;return t?o.a.createElement("div",null,o.a.createElement("i",{class:"fa fa-edit","aria-hidden":"true"})," ",o.a.createElement("a",{href:t},"Edit this page on GitHub")):null}var l=a("8FPV");function s(e){var t=e.children,a=e.location,n=e.pageContext;return o.a.createElement(l.a,{location:a},o.a.createElement("div",{className:"vads-l-row site-l-wrapper"},o.a.createElement(i.a,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t,o.a.createElement(r,{sourceUrl:n.sourceUrl}))))}},FRpb:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),o=a.n(n),i=a("Wbzz");function r(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(i.Link,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function l(e){var t=e.items,a=e.isSublist,n=void 0!==a&&a;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map((function(e){return e.items?o.a.createElement("li",{key:e.name},n&&o.a.createElement(r,{item:e}),!n&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,{isSublist:!0,items:e.items})):o.a.createElement(r,{item:e,key:e.name})}))):null}var s=a("MEl4"),c=a.n(s);function p(e){var t=e.location,a=c.a.sections.find((function(e){return t.pathname.includes(e.href)}));return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(l,{items:a.items}))):null}},bW0g:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("3dLD"),r=["components"],l={},s={_frontmatter:l},c=i.a;function p(e){var t=e.components,a=Object(n.a)(e,r);return Object(o.b)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"vagov-application-generator"},"VA.gov application generator"),Object(o.b)("div",{className:"deprecation-message"},Object(o.b)("h2",null,"We're moving our docs!"),Object(o.b)("h3",null,"Find ",Object(o.b)("a",{href:"https://depo-platform-documentation.scrollhelp.site/developer-docs/VA.gov-application-generator.1849426056.html"},"the latest version of this page")," on the Platform website."),Object(o.b)("h3",null,"Still can't find what you're looking for? Reach out to ",Object(o.b)("a",{href:"https://dsva.slack.com/archives/CBU0KDSB1"},"#vfs-platform-support")," on Slack.")),Object(o.b)("p",null,"We have a Yeoman generator for starting up new React applications in vets-website. This page will guide you through setting up the generator and explaining the questions that are asked as part of the setup process."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can find more information about creating forms in the ",Object(o.b)("a",{parentName:"p",href:"/forms"},"forms section"),".")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Navigate to the root of the vets-website repository and run:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ yarn new:app\n")),Object(o.b)("p",null,"After running the above command, the generator will start up and ask you a series of questions:"),Object(o.b)("h3",{id:"whats-the-name-of-your-application"},"What's the name of your application?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This will be the default page title. Examples: ",Object(o.b)("inlineCode",{parentName:"p"},"21P-530 Burials benefits form")," or ",Object(o.b)("inlineCode",{parentName:"p"},"GI Bill School Feedback Tool"))),Object(o.b)("p",null,"This value will be used as the page title. If you're creating a form, it will also be used as the header for the introduction page and as a header on the confirmation page."),Object(o.b)("h3",{id:"what-folder-in-srcapplications-should-your-app-live-in"},"What folder in src/applications/ should your app live in?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This can be a subfolder. Examples: ",Object(o.b)("inlineCode",{parentName:"p"},"burials")," or ",Object(o.b)("inlineCode",{parentName:"p"},"edu-benefits/0993"))),Object(o.b)("p",null,"Most of our React applications have their own folder in src/applications, so normally you want to pick a new folder. However, if you're building an application that's related to other applications, there may be a folder that your app should go in. An example would be if you were creating a new education form, you would probably create your app in edu-benefits/newform."),Object(o.b)("h3",{id:"what-should-be-the-name-of-your-apps-entry-bundle"},"What should be the name of your app's entry bundle?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Examples: ",Object(o.b)("inlineCode",{parentName:"p"},"0993-edu-benefits")," or ",Object(o.b)("inlineCode",{parentName:"p"},"feedback-tool"))),Object(o.b)("p",null,"This is the name of the bundle that Webpack builds for your application. They're normally lower case with dashes separating words. This is primarily used to link your bundle to the content page that is created as a base for your application. It doesn't show up in your code anywhere. It's also separate from the entry file."),Object(o.b)("h3",{id:"whats-the-root-url-for-this-app"},"What's the root URL for this app?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Examples: ",Object(o.b)("inlineCode",{parentName:"p"},"/gi-bill-comparison-tool/")," or ",Object(o.b)("inlineCode",{parentName:"p"},"/education/opt-out-information-sharing/opt-out-form-0993"))),Object(o.b)("p",null,"This is the URL your application will live at, starting with a leading slash. In your React apps you will likely have multiple pages and the URLs for those pages will have this as the base. This value also gets translated into the page for the content page, which lives in ",Object(o.b)("inlineCode",{parentName:"p"},"content/pages"),"."),Object(o.b)("h3",{id:"is-this-a-form-app"},"Is this a form app?"),Object(o.b)("p",null,"If this is a form, there are some more questions after this step. If not, you're done!"),Object(o.b)("h3",{id:"whats-your-form-number"},"What's your form number?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Examples: ",Object(o.b)("inlineCode",{parentName:"p"},"22-0993")," or ",Object(o.b)("inlineCode",{parentName:"p"},"21P-530"))),Object(o.b)("p",null,"This is the form number for the paper form you're converting. This is used in a couple places in the UI and also as a key for the save in progress functionality of our forms."),Object(o.b)("h3",{id:"whats-the-google-analytics-event-prefix-that-you-want-to-use"},"What's the Google Analytics event prefix that you want to use?"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Examples: ",Object(o.b)("inlineCode",{parentName:"p"},"burials-530-")," or ",Object(o.b)("inlineCode",{parentName:"p"},"edu-0993-"))),Object(o.b)("p",null,"Our shared form code sends events to Google Analytics and we need a unique prefix to be able to categorize the events by form. It's normally a dash separated value like ",Object(o.b)("inlineCode",{parentName:"p"},"hca-")," or ",Object(o.b)("inlineCode",{parentName:"p"},"edu-1990-")," and is made up by developers."),Object(o.b)("h3",{id:"whats-the-respondent-burden-of-this-form-in-minutes"},"What's the respondent burden of this form in minutes?"),Object(o.b)("p",null,"Each paper form has OMB information that lives in the margins of each page (usually in the top right):"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"../../images/omb_form_info.png",alt:"Form page with OMB info"})),Object(o.b)("p",null,"This is the respondent burden value from that information. All the information from this question and the next two can be found in the props for the ",Object(o.b)("inlineCode",{parentName:"p"},"OMBInfo")," component in ",Object(o.b)("inlineCode",{parentName:"p"},"containers/IntroductionPage.jsx"),", if you need to change it later."),Object(o.b)("h3",{id:"whats-the-omb-control-number-for-this-form"},"What's the OMB control number for this form?"),Object(o.b)("p",null,"Similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),Object(o.b)("h3",{id:"whats-the-omb-expiration-date-in-mdyyyy-format-for-this-form-example-1312019"},"What's the OMB expiration date (in M/D/YYYY format) for this form? Example: 1/31/2019"),Object(o.b)("p",null,"Again similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),Object(o.b)("h3",{id:"whats-the-benefit-description-for-this-form-examples-education-benefits-or-disability-claims-increase"},"What's the benefit description for this form? Examples: education benefits or disability claims increase"),Object(o.b)("p",null,"This question is a bit more nebulous. We have a description of the type of benefits that you would be getting by using this form. Other examples are ",Object(o.b)("inlineCode",{parentName:"p"},"health care benefits")," and ",Object(o.b)("inlineCode",{parentName:"p"},"veteran id card"),"."),Object(o.b)("h3",{id:"what-kind-of-form-template-would-you-like-to-start-with"},"What kind of form template would you like to start with?"),Object(o.b)("p",null,"Choose from the following options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"BLANK: A form without any fields"),"\nThis option gives you a bare bones form config object in ",Object(o.b)("inlineCode",{parentName:"p"},"form.js")," pre-filled with basic boilerplate data based on the answers to the generator's questions.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"SIMPLE: A single-chapter form with a single field"),"\nThis option gives you a simple form config object in ",Object(o.b)("inlineCode",{parentName:"p"},"form.js")," that renders a simple form composed of a single input field on a single page chapter.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"COMPLEX: A complex, multi-chapter form with multiple fields"),"\nThis option gives you a complex form config object in ",Object(o.b)("inlineCode",{parentName:"p"},"form.js"),' that renders a "playground" form composed of multiple chapters, including both single page and multi-page chapters, and a variety of form components to inspect and experiment with.'))),Object(o.b)("h2",{id:"youre-done"},"You're done!"),Object(o.b)("p",null,"Once you've answered all those questions, you're done and the generator will create the files for you. To see them in your local development environment, you'll need to build again or restart the watch task you have running."),Object(o.b)("p",null,"Once you've done that, you can access the URL at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3001/APP_ROOT_URL"),". Replace ",Object(o.b)("inlineCode",{parentName:"p"},"APP_ROOT_URL")," with the root URL for your application."),Object(o.b)("p",null,"To learn more about using the generator and working with the generated code, see our ",Object(o.b)("a",{parentName:"p",href:"/forms"},"forms documentation"),"."))}p.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-platform-tools-generator-mdx-a3e828c9e6ada5e6d245.js.map