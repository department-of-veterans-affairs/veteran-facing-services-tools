(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{323:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"_frontmatter",function(){return u});n(42);var a=n(43),o=n.n(a),s=n(3),r=n.n(s),i=n(2),c=n.n(i),m=n(4),l=n(347),p={},d=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=o()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,n),components:t},c.a.createElement("h1",{id:"using-redux"},"Using Redux"),c.a.createElement(m.MDXTag,{name:"table",components:t},c.a.createElement(m.MDXTag,{name:"thead",components:t,parentName:"table"},c.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"thead"},c.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),c.a.createElement(m.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}))),c.a.createElement(m.MDXTag,{name:"tbody",components:t,parentName:"table"},c.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Made:")),c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"td"},"Decision Date:")),c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"08/04/2016")),c.a.createElement(m.MDXTag,{name:"tr",components:t,parentName:"tbody"},c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Decision:")),c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Yes"),c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"td"},"Revisit Date:")),c.a.createElement(m.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"January 2017")))),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Revisit Criteria:")," The JavaScript community changes very quickly. This decision is worth revisiting in in 6 months to determine if the landscape has shifted significantly."),c.a.createElement(m.MDXTag,{name:"p",components:t},c.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"Decision Makers:")," @plusjeff @akainic @alexose @webinista @U-DON @ayaleloehr"),c.a.createElement(m.MDXTag,{name:"hr",components:t}),c.a.createElement("h2",{id:"tldr"},"tl;dr"),c.a.createElement(m.MDXTag,{name:"p",components:t},"React applications will use Redux to manage state and data flow."),c.a.createElement("h2",{id:"history"},"History"),c.a.createElement(m.MDXTag,{name:"p",components:t},"The Healthcare Application (HCA) began without Redux for the first ~2 months of development.  During this time, the team created a way for state to flow between components that worked, but it was hacky and as the application grew it became unmanagable. The decision was made to try Redux; the codebase retrofit to Redux was hard on both the person doing the retrofit (Albert) and the rest of the developers working on the codebase."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Prescriptions began without Redux for the first ~1 week of development. This was done because prescriptions has a significantly simpler data model than HCA and the majority of the Prescriptions team was new to React, so the thought was learning both React and Redux at the same time was a burden that would decrease velocity. The team did well creating individual components during this week, but started to bump up against questions of how to make components talk to each other. That led to a meeting on 8/4/2016 to make this decision."),c.a.createElement("h2",{id:"pros-to-using-redux"},"Pros to using Redux"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Established pattern for managing state for components."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Easier to follow and maintain than a hacky solution."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Redux is good for complicated state on the page."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Team uses it in other areas."),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Development community seems to be coalescing around it (that is, as much as the JS community does around anything...)")),c.a.createElement("h2",{id:"cons"},"Cons"),c.a.createElement(m.MDXTag,{name:"ul",components:t},c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Redux can be heavy. Why overengineer apps from the beginning if it might not be needed?"),c.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Developer burden to learn (especially if also learning React).")),c.a.createElement("h2",{id:"example-of-an-alternative-approach"},"Example of an alternative approach"),c.a.createElement(m.MDXTag,{name:"p",components:t},"To make the discussion more tangible, Alex Ose created a branch in the prescriptions repo showing how components could communicate without Redux, using the Observer Pattern. The repository where this was created has now been deleted, so this branch is no longer findable, but did once exist."),c.a.createElement("h2",{id:"decision"},"Decision"),c.a.createElement(m.MDXTag,{name:"p",components:t},"React applications will use Redux to manage state and data flow."),c.a.createElement(m.MDXTag,{name:"hr",components:t}),c.a.createElement(m.MDXTag,{name:"p",components:t},"Below is background written by Alex Ose in September 2016 when researching this decision:"),c.a.createElement("h1",{id:"woo-redux"},"Woo, Redux!"),c.a.createElement(m.MDXTag,{name:"p",components:t},"There are lots of guides out there about how to do Redux.  This is more of a guide about ",c.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"why")," to do redux.  Albeit, written by a Redux skeptic, who happens to think that HTML 1.0 was the pinnacale and it's been all downhill from there."),c.a.createElement("h2",{id:"my-understanding-of-why-this-is-a-thing"},"My understanding of why this is a thing"),c.a.createElement(m.MDXTag,{name:"p",components:t},'Dan Abramov invented Redux by accident when he was messing around with another project.  He was trying to implement undo/redo (a.k.a "time travel"), when he concluded that the holy grail would be to record each successive state of the application as a javascript object.'),c.a.createElement(m.MDXTag,{name:"p",components:t},"This wouldn't work if the application decided to store data outside of that object— in the DOM, for instance— because he would lose track of the change.  It also wouldn't work if there were parts of the application writing and overwriting the object without any kind of oversight."),c.a.createElement(m.MDXTag,{name:"p",components:t},'Thus, he needed a thing to enforce that the application managed this state object (a.k.a "store") in a reasonable way.  Redux became that thing.'),c.a.createElement(m.MDXTag,{name:"p",components:t},"Also, per @jbalboni:  It’s helpful to know that Redux is a simplification of Facebook’s Flux architecture. That’s how they were suggesting you structure React apps, but it’s complicated and jargon-y, and Redux is a much simpler version of it. That’s one of the reasons it took off."),c.a.createElement(m.MDXTag,{name:"p",components:t},"What's neat about his approach is that in trying achieve predictability, it reduces all of the app's functionality down to pure functions (i.e. functions that have zero side effects).  Not only does this make time travel work, and allow for some really interesting ",c.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en"}},"DevTools")," but it means that it's possible to write 100% comprehensive tests that test everything that your application can do."),c.a.createElement("h2",{id:"and-now-the-bad-stuff"},"And now the bad stuff"),c.a.createElement(m.MDXTag,{name:"p",components:t},"While reducing everything to pure functions is extremely cool, it is very different than what we're used to as frontend engineers.  We are used to treating the DOM as the record of truth, and the DOM is a jerk, so we spend a lot of time mitigating weird unintended behaviors."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Redux throws a ",c.a.createElement(m.MDXTag,{name:"em",components:t,parentName:"p"},"lot")," of new jargon at you, and doesn't spend much time explaining why it's necessary to learn it.  On top of that, it assumes that you're up-to-date with a host of new tools and techniques that most people outside of the React world have never used."),c.a.createElement(m.MDXTag,{name:"p",components:t},"Lastly, Redux (the react-redux package especially) makes heavy use of composability.  This is neat and elegant in theory, but it can make hard to debug with traditional tools*.  In this developer's opinion, its key functions are way too magical."),c.a.createElement("h2",{id:"in-conclusion"},"In conclusion"),c.a.createElement(m.MDXTag,{name:"p",components:t},"Redux gives you some amazing capabilities at the expense of some boilerplate and lots of time spent hitting your head against your desk.  I am personally skeptical that the up-front cost is worth it for a small app, but there is no denying that the principles behind Redux are the future of UI development."),c.a.createElement(m.MDXTag,{name:"p",components:t},"*This is also why people don't like D3, in my experience."),c.a.createElement(m.MDXTag,{name:"p",components:t},"**Slack's UI is written almost completely in native jQuery and a special scrolling plugin.  Redux is not necessary to build a quality product that people use."))},t}(c.a.Component),u={}},346:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}}]}}}},347:function(e,t,n){"use strict";var a=n(2),o=n.n(a),s=n(13),r=n.n(s),i=n(350),c=(n(133),n(134),n(135),n(17),n(346)),m=n(348);function l(){return o.a.createElement(m.b,{query:"157057713",render:function(e){return o.a.createElement(d,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:c})}function p(e){var t=e.item;return t.href?o.a.createElement("li",{key:t.name},o.a.createElement(m.a,{to:t.href},t.name)):o.a.createElement("li",{key:t.name},t.name," (future)")}function d(e){var t=e.items,n=e.isSublist,a=void 0!==n&&n;return t.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},t.map(function(e){return e.items?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(d,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},a&&o.a.createElement(p,{item:e}),!a&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(l,null)):o.a.createElement(p,{item:e,key:e.name})})):null}var u=n(349),h=n.n(u);function g(e){var t=e.location,n=h.a.sections.find(function(e){return t.pathname.includes(e.href)});return n?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(d,{items:n.items}))):null}function b(e){var t=e.children,n=e.location;return o.a.createElement(i.a,{location:n},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:n}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},t)))}n.d(t,"a",function(){return b}),b.propTypes={children:r.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-platform-front-end-standards-documented-decisions-redux-mdx-98c5bd69660f94b14e05.js.map