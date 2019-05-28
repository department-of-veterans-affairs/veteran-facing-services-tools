(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d}),t.d(n,"_frontmatter",function(){return u});t(42);var a=t(43),o=t.n(a),s=t(3),r=t.n(s),c=t(2),i=t.n(c),m=t(4),l=t(347),p={},d=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=l.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,t),components:n},i.a.createElement("h1",{id:"creating-a-new-react-widget"},"Creating a new React widget"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Note: Check out the ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/veteran-facing-services-tools/getting-started/common-tasks/new-feature"}},"Adding a new feature")," doc to make sure you're trying to add the right type of feature to VA.gov."),i.a.createElement("h2",{id:"adding-a-new-widget"},"Adding a new widget"),i.a.createElement(m.MDXTag,{name:"p",components:n},"All the static pages use the ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"static-pages")," entry bundle, so any JS code included from that file will be on all static pages. In order to add a widget, you'll want to create a function that loads your desired React components (or plain JS) asynchronously, and mounts to an element on the page with your widget id."),i.a.createElement(m.MDXTag,{name:"ol",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Add a mount point element in the static content page your widget will live on:")),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-html"}},'<div data-widget-type="my-new-widget" id="someId"></div>\n')),i.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:2}},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Add a start up function to: ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"src/applications/static-pages/static-pages-entry.js"),":")),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"...\ncreateMyWidget(store, widgetTypes.MY_NEW_WIDGET);\n...\n")),i.a.createElement(m.MDXTag,{name:"p",components:n},"You should also add a constant for your widget type in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/static-pages/widgetTypes.js"),":"),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"export default {\n  ...\n  MY_NEW_WIDGET: 'my-new-widget',\n  ...\n}\n")),i.a.createElement(m.MDXTag,{name:"ol",components:n,props:{start:3}},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Write your create widget function:")),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},'export default async function createMyWidget(store, widgetType) {\n  const widget = document.querySelector(`[data-widget-type="${widgetType}"]`);\n\n  if (widget) {\n    // Load widget if there\'s a mount point for it\n    const {\n      default: MyNewWidget,\n    } = await import(/* webpackChunkName: "my-new-widget" */ \'../../platform/site-wide/my-new-widget\');\n\n    // Do whatever you need to do to start up your widget\n    ReactDOM.render(<MyNewWidget>, widget);\n  }\n}\n')),i.a.createElement(m.MDXTag,{name:"p",components:n},"Note that we don't import the widget code unless there's a mount point in the DOM. This function will run on every page, so we want to make sure we only download the bulk of the widget code when we're actually going to use it."),i.a.createElement("h2",{id:"guidelines-for-using-react-on-a-static-page"},"Guidelines for using React on a static page"),i.a.createElement(m.MDXTag,{name:"p",components:n},"We should be careful to not create a bad user experience when using React on static pages. Here are some guidelines you should follow:"),i.a.createElement(m.MDXTag,{name:"ol",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"JS and React take time to download, parse, and render. Make sure you are providing the appropriate feedback to users while that is happening, with a spinner or another method from the UX team."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Make sure the page is still usable if your React code fails to work. This can mean it fails to download, an error occurs, or just handling the different login states a user can be in."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Be aware of how much weight you're adding to the static-pages bundle and code-split/lazy load when it makes sense.")),i.a.createElement("h2",{id:"common-widget-code"},"Common widget code"),i.a.createElement(m.MDXTag,{name:"p",components:n},"There's a simple static page widget feature that you can use to help with the first two points above. The code is in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"src/applications/static-pages/static-page-widgets.js"),". Using this will inline some JS that can handle displaying a loading spinner and showing an error message if something goes wrong before the React code can take over rendering. Several pension pages use this functionality (",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pages/pension/index.md"),", ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pages/pension/apply.md")," in ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"vagov-content"),"). It's controlled by defining a widgets list in the front matter for the static content page you're on. The options are:"),i.a.createElement(m.MDXTag,{name:"pre",components:n},i.a.createElement(m.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"- widgets\n  - root: someId \n    timeout: 20\n    showSpinnerUnauthed: false\n    slowLoadingThreshold: 6\n    loadingMessage: Loading\n    slowMessage: Sorry, this is taking longer than expected.\n    errorMessage: Sorry, something went wrong.\n")),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"root: The id of the div where the React component will mount."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"timeout: The amount of time in seconds before the error message is shown."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"showSpinnerUnauthed: By default, a spinner is shown only if a user has a session token. This will override that and show it always."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"slowLoadingThreshold: The amount of time in seconds before the slow loading message is shown. This is skipped if the threshold is greater than the overall timeout. Defaulted to 6 seconds."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"slowMessage: Message shown when the slowThreshold is passed. Defaulted to message above."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"loadingMessage: Message shown while the JS code is loading. This should probably match any loading message in your React code."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},"errorMessage: Message shown when the JS code fails or times out.")))},n}(i.a.Component),u={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}}]}}}},347:function(e,n,t){"use strict";var a=t(2),o=t.n(a),s=t(13),r=t.n(s),c=t(350),i=(t(133),t(134),t(135),t(17),t(346)),m=t(348);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function p(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function d(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=t(349),g=t.n(u);function h(e){var n=e.location,t=g.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:t.items}))):null}function w(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(h,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return w}),w.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-getting-started-common-tasks-new-widget-mdx-1525365d2871f47a49d1.js.map