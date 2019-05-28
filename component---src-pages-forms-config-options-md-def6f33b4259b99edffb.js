(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{290:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var o=t(43),a=t.n(o),r=t(3),s=t.n(r),i=t(2),c=t.n(i),m=t(4),p=t(347),l={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=a()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},c.a.createElement("h1",{id:"form-config-options"},"Form config options"),c.a.createElement(m.MDXTag,{name:"pre",components:n},c.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n  // Prefix string to add to the path for each page.\n  urlPrefix: '',\n\n  // The introduction page component. To exclude an introduction page, remove\n  // this component.\n  introduction: IntroductionComponent,\n\n  // The confirmation page component that will render after the user\n  // successfully submits the form.\n  confirmation: ConfirmationComponent,\n\n  // The prefix for Google Analytics events that are sent for different form\n  // actions.\n  trackingPrefix: '',\n\n  // The title of the form, rendered on all pages.\n  title: '',\n\n  // The subtitle of the form, usually the form number. The subtitle is rendered\n  // on all pages when there's also a title.\n  subTitle: '',\n\n  // Schema definitions that can be referenced on any page. These are added to\n  // each page's schema in the reducer code, so that you don't have to put all\n  // of the common fields in the definitions property in each page schema. For\n  // more information on definitions, see schema.definitions below.\n  defaultDefinitions: {},\n\n  // When a user begins completing a pre-filled form, this function is called\n  // after data migrations are run for pre-filled data in order to make\n  // necessary updates to the data or form schema ahead of time.\n  prefillTransformer: (pages, formData, metadata ) => { pages, formData, metadata },\n\n  // The object that contains the configuration for each chapter.\n  chapters: {\n    // Each property is the key for a chapter.\n    chapterOne: {\n      // The title of the chapter.\n      title: '',\n\n      // The object that contains the pages in each chapter.\n      pages: {\n        // Each property is the key for a page, and should be unique across\n        // chapters.\n        pageOne: {\n          // The URL for the page.\n          path: 'some-path',\n\n          // The title of the page that renders on the review page.\n          title: '',\n          // `title` can also be a function that receives the current data as a\n          // parameter:\n          title: formData => `A title for ${formData.thing}`,\n\n          // Any initial data that should be set for the form.\n          initialData: {\n            field1: 'Default string'\n          },\n\n          // Specifies that a page will turn its schema into a page for each\n          // item in an array, such as an array of children with a page for each\n          // child. The schema/uiSchema for this type of page should be built as\n          // usual for an array field.\n          showPagePerItem: true,\n          // The path to the array.\n          arrayPath: 'children',\n          // Items in the array that should not have a page.\n          itemFilter: () => true,\n          // You must specify a path with an :index parameter.\n          path: 'some-path/:index',\n\n          // The JSON schema object for the page, following the JSON Schema\n          // format.\n          schema: {\n            type: 'object',\n            // A schema's properties refer to definitions. For example:\n            // \"homePhone\": { \"$ref\": \"#/definitions/phone\" } In the\n            // configuration file, the definition for `phone` must be added into\n            // definitions in order to be parsed correctly and added to\n            // `homePhone`.\n            definitions: {},\n            properties: {\n              field1: {\n                type: 'string'\n              },\n              // Fields of type `string`, `boolean`, `number`, and `array` that\n              // begin with `view:` are excluded from data that's sent to the\n              // server. Instead, their children are merged into the parent\n              // object and sent to the server. Use these to exclude fields from\n              // being sent to the server, such as a question that's only used\n              // to reveal other questions, or to group related questions\n              // together to be conditionally revealed that aren't in an object\n              // in the schema.\n              'view:field2': {\n                type: 'string'\n              },\n              'view:artificialGroup': {\n                type: 'object',\n                properties: {\n                  // `view:artificialGroup` is flattened. `subField1` and\n                  // `subField2` are siblings of `field1` when sent to the API.\n                  subField1: {\n                    type: 'string'\n                  },\n                  subField2: {\n                    type: 'boolean'\n                  }\n                }\n              }\n            }\n          },\n\n          // See \"About the `schema` and `uiSchema` objects\" below.\n          uiSchema: {\n            'ui:title': 'My form',\n            field1: {\n              'ui:title': 'My field'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nexport default formConfig\n")),c.a.createElement(m.MDXTag,{name:"p",components:n},c.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/about-the-schema-and-uischema-objects"}},"About the schema and uiSchema objects")))},n}(c.a.Component),u={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}}]}}}},347:function(e,n,t){"use strict";var o=t(2),a=t.n(o),r=t(13),s=t.n(r),i=t(350),c=(t(133),t(134),t(135),t(17),t(346)),m=t(348);function p(){return a.a.createElement(m.b,{query:"157057713",render:function(e){return a.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function l(e){var n=e.item;return n.href?a.a.createElement("li",{key:n.name},a.a.createElement(m.a,{to:n.href},n.name)):a.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,o=void 0!==t&&t;return n.length?a.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?a.a.createElement("li",{key:e.name},o&&a.a.createElement(l,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?a.a.createElement("li",{key:e.name},o&&a.a.createElement(l,{item:e}),!o&&a.a.createElement("h2",{className:"heading-level-4"},e.name),a.a.createElement(p,null)):a.a.createElement(l,{item:e,key:e.name})})):null}var u=t(349),h=t.n(u);function f(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?a.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},a.a.createElement("div",{className:"site-c-sidenav"},a.a.createElement(d,{items:t.items}))):null}function g(e){var n=e.children,t=e.location;return a.a.createElement(i.a,{location:t},a.a.createElement("div",{className:"vads-l-row"},a.a.createElement(f,{location:t}),a.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return g}),g.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-config-options-md-def6f33b4259b99edffb.js.map