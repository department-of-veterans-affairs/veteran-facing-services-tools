(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{339:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return h});t(42);var a=t(43),o=t.n(a),r=t(3),s=t.n(r),i=t(2),m=t.n(i),c=t(4),p=t(347),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},m.a.createElement("h1",{id:"vagov-application-generator"},"VA.gov application generator"),m.a.createElement(c.MDXTag,{name:"p",components:n},"We have a Yeoman generator for starting up new React applications in vets-website. This page will guide you through setting up the generator and explaining the questions that are asked as part of the setup process."),m.a.createElement(c.MDXTag,{name:"blockquote",components:n},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You can find more information about creating forms in the ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms"}},"forms section"),".")),m.a.createElement("h2",{id:"getting-started"},"Getting Started"),m.a.createElement(c.MDXTag,{name:"p",components:n},"To install the generator, you'll need to do the following:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"npm install -g yo\nnpm install -g @department-of-veterans-affairs/generator-vets-website\n")),m.a.createElement("h2",{id:"usage"},"Usage"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Once you have the generator installed, navigate to the root of the vets-website repository and run:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-bash"}},"yo @department-of-veterans-affairs/vets-website\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"After running the above command, the generator will start up and ask you a series of questions:"),m.a.createElement("h3",{id:"whats-the-name-of-your-application"},"What's the name of your application?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:n},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This will be the default page title. Examples: '21P-530 Burials benefits form' or 'GI Bill School Feedback Tool'")),m.a.createElement(c.MDXTag,{name:"p",components:n},"This value will be used as the page title. If you're creating a form, it will also be used as the header for the introduction page and as a header on the confirmation page."),m.a.createElement("h3",{id:"what-folder-in-srcapplications-should-your-app-live-in"},"What folder in src/applications/ should your app live in?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:n},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This can be a subfolder. Examples: 'burials' or 'edu-benefits/0993'")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Most of our React applications have their own folder in src/applications, so normally you want to pick a new folder. However, if you're building an application that's related to other applications, there may be a folder that your app should go in. An example would be if you were creating a new education form, you would probably create your app in edu-benefits/newform."),m.a.createElement("h3",{id:"what-should-be-the-name-of-your-apps-entry-bundle"},"What should be the name of your app's entry bundle?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:n},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Examples: '0993-edu-benefits' or 'feedback-tool'")),m.a.createElement(c.MDXTag,{name:"p",components:n},"This is the name of the bundle that Webpack builds for your application. They're normally lower case with dashes separating words. This is primarily used to link your bundle to the content page that is created as a base for your application. It doesn't show up in your code anywhere. It's also separate from the entry file."),m.a.createElement("h3",{id:"whats-the-root-url-for-this-app"},"What's the root url for this app?"),m.a.createElement(c.MDXTag,{name:"blockquote",components:n},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Examples: '/gi-bill-comparison-tool/' or 'education/opt-out-information-sharing/opt-out-form-0993'")),m.a.createElement(c.MDXTag,{name:"p",components:n},"This is the url your application will live at. In your React apps you will likely have multiple pages and the urls for those pages will have this as the base. This value also gets translated into the page for the content page, which lives in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"content/pages"),"."),m.a.createElement("h3",{id:"is-this-a-form-app"},"Is this a form app?"),m.a.createElement(c.MDXTag,{name:"p",components:n},"If this is a form, there are some more questions after this step. If not, you're done!"),m.a.createElement("h3",{id:"whats-your-form-number-examples-22-0993-or-21p-530"},"What's your form number? Examples: '22-0993' or '21P-530'"),m.a.createElement(c.MDXTag,{name:"p",components:n},"This is the form number for the paper form you're converting. Normally it's something like 22-1990 or 21-22. This is used in a couple places in the UI and also as a key for the save in progress functionality of our forms."),m.a.createElement("h3",{id:"whats-the-google-analytics-event-prefix-that-you-want-to-use-examples-burials-530--or-edu-0993-"},"What's the Google Analytics event prefix that you want to use? Examples: 'burials-530-' or 'edu-0993-'"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Our shared form code sends events to Google Analytics and we need a unique prefix to be able to categorize the events by form. It's normally a dash separated value like ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"hca-")," or ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"edu-1990-")," and is made up by developers."),m.a.createElement("h3",{id:"whats-the-respondent-burden-of-this-form-in-minutes"},"What's the respondent burden of this form in minutes?"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Each paper form has OMB information that lives in the margins of each page (usually in the top right):"),m.a.createElement(c.MDXTag,{name:"p",components:n},m.a.createElement(c.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"../../images/omb_form_info.png",alt:"Form page with OMB info"}})),m.a.createElement(c.MDXTag,{name:"p",components:n},"This is the respondent burden value from that information. All the information from this question and the next two can be found in the props for the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"OMBInfo")," component in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"containers/IntroductionPage.jsx"),", if you need to change it later."),m.a.createElement("h3",{id:"whats-the-omb-control-number-for-this-form"},"What's the OMB control number for this form?"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),m.a.createElement("h3",{id:"whats-the-omb-expiration-date-in-mdyyyy-format-for-this-form-example-1312019"},"What's the OMB expiration date (in M/D/YYYY format) for this form? Example: '1/31/2019'"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Again similarly to the last question, this is more information from the OMB data, which lives in the margins of the pages of the paper form."),m.a.createElement("h3",{id:"whats-the-benefit-description-for-this-form-examples-education-benefits-or-disability-claims-increase"},"What's the benefit description for this form? Examples: 'education benefits' or 'disability claims increase'"),m.a.createElement(c.MDXTag,{name:"p",components:n},'This question is a bit more nebulous. We have a description of the type of benefits that you would be getting by using this form. Other examples are "health care benefits" and "veteran id card."'),m.a.createElement("h3",{id:"what-kind-of-form-template-would-you-like-to-start-with"},"What kind of form template would you like to start with?"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Choose from the following options:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"p"},"BLANK: A form without any fields"),"\nThis option gives you a bare bones form config object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js")," pre-filled with basic boilerplate data based on the answers to the generator's questions.")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"p"},"SIMPLE: A single-chapter form with a single field"),"\nThis option gives you a simple form config object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js")," that renders a simple form composed of a single input field on a single page chapter.")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(c.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"p"},"COMPLEX: A complex, multi-chapter form with multiple fields"),"\nThis option gives you a complex form config object in ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"form.js"),' that renders a "playground" form composed of multiple chapters, including both single page and multi-page chapters, and a variety of form components to inspect and experiment with.'))),m.a.createElement("h2",{id:"youre-done"},"You're done!"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Once you've answered all those questions, you're done and the generator will create the files for you. To see them in your local development environment, you'll need to build again or restart the watch task you have running."),m.a.createElement(c.MDXTag,{name:"p",components:n},"To learn more about using the generator and working with the generated code, see our ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/forms"}},"forms documentation"),"."))},n}(m.a.Component),h={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),r=t(13),s=t.n(r),i=t(350),m=(t(133),t(134),t(135),t(17),t(346)),c=t(348);function p(){return o.a.createElement(c.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(c.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var h=t(349),d=t.n(h);function g(e){var n=e.location,t=d.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function f(e){var n=e.children,t=e.location;return o.a.createElement(i.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-tools-generator-mdx-a7dd845d6d05c0d8d1de.js.map