(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{341:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return u}),t.d(n,"_frontmatter",function(){return d});t(45);var a=t(46),o=t.n(a),s=t(3),r=t.n(s),c=t(2),i=t.n(c),m=t(4),p=t(368),l={},u=function(e){function n(n){var t;return(t=e.call(this,n)||this).layout=p.a,t}return r()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,t=o()(e,["components"]);return i.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,t),components:n},i.a.createElement("h1",{id:"redux-action-guidelines"},"Redux Action Guidelines"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Actions are an important part of Redux and in order to making usage of Redux consistent and maintainable across applications, here are some guidelines to follow."),i.a.createElement(m.MDXTag,{name:"p",components:n},"Important note: actions are the objects that are returned by action creator functions and used by reducers to generate a new state object. Guidelines for reducers and action creators will be in other documentation."),i.a.createElement(m.MDXTag,{name:"ol",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Follow the documentation on the ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://redux.js.org"}},"Redux site"),". The basics of actions are ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://redux.js.org/basics/actions"}},"here")," and some frequently asked questions can be found ",i.a.createElement(m.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://redux.js.org/faq/actions"}},"here"),"."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Define constants for your action types. We typically do this in the same file as the actions, and import them in the reducer."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Actions should reflect something a user did or an external event. It's easy to get in the habit of choosing action types based on what's happening in a component or in the Redux state itself, but choosing them based on implementation details couples the action to that implementation and makes it confusing to change later. Actions are also meant to show the history of what has happened in your application, and a bunch of types like ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"SET_FETCH_FORM_STATUS")," are not easy to understand just from the type itself."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Action types should be uppercase, separated by underscores."),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ol"},"Action types should be in past tense. The user or external event already happened, you're updating the application state to reflect that fact. Most of our code uses present tense currently, but the consensus is that this is the better convention.")),i.a.createElement("h2",{id:"examples"},"Examples"),i.a.createElement(m.MDXTag,{name:"p",components:n},"Say you have a modal that a user can open or close, which is controlled by a status property in the Redux state. One approach might be to create an action with a type of ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"SET_MODAL_STATUS")," to handle this. This gets the job done, but that type doesn't reflect what a user is actually trying to do (open a particular modal), it reflects what is changing in the Redux state (the open/closed status flag is being set)."),i.a.createElement(m.MDXTag,{name:"p",components:n},"Instead, a better approach is to think about what a user is trying to do by triggering that action. ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"MODAL_OPENED")," is a better action type, but you could still improve that by thinking about the context that modal is in. If the user is clicking on a link to show a modal window with some additional information about a subject, you could consider ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ADDITIONAL_INFORMATION_DISPLAYED")," or ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ADDITIONAL_INFORMATION_TOGGLED"),". You should use your best judgment about what makes sense in your code, but the more your action type reflects what the user is trying to accomplish, the buetter."),i.a.createElement("h2",{id:"async-action-objects"},"Async action objects"),i.a.createElement(m.MDXTag,{name:"p",components:n},"A common pattern in Redux is to have several actions related to one asynchronous action, like a server request. You might be updating an address and have actions with types like like ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UPDATE_ADDRESS"),", ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UPDATE_ADDRESS_SUCCESS"),", and ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UPDATE_ADDRESS_FAILURE"),". To that end, we recommend that you use the suffixes:"),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_STARTED")),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_SUCCEEDED")),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"_FAILED"))),i.a.createElement(m.MDXTag,{name:"p",components:n},"For example, if the user trigger an action to update an address, you would have ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UPDATE_ADDRESS_STARTED"),", ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UPDATE_ADDRESS_SUCCEEDED"),", and ",i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UPDATE_ADDRESS_FAILED"),"."),i.a.createElement(m.MDXTag,{name:"p",components:n},"We also suggest using the following properties for data in those action types:"),i.a.createElement(m.MDXTag,{name:"ul",components:n},i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"response"),": the response data in a successful action"),i.a.createElement(m.MDXTag,{name:"li",components:n,parentName:"ul"},i.a.createElement(m.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"error"),": the error data in a failed action")))},n}(i.a.Component),d={}},367:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/promobanner/",context:{source:"component",name:"PromoBanner"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}}]}}}},368:function(e,n,t){"use strict";var a=t(2),o=t.n(a),s=t(14),r=t.n(s),c=t(371),i=(t(149),t(150),t(372),t(21),t(367)),m=t(369);function p(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:i})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(m.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,t=e.isSublist,a=void 0!==t&&t;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(l,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=t(370),h=t.n(d);function g(e){var n=e.location,t=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return t?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:t.items}))):null}function E(e){var n=e.children,t=e.location;return o.a.createElement(c.a,{location:t},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:t}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}t.d(n,"a",function(){return E}),E.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-redux-mdx-0cc74cd23a4d6e99fc82.js.map