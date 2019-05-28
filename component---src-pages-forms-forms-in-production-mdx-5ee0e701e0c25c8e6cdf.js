(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{294:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u}),a.d(n,"_frontmatter",function(){return d});a(42);var t=a(43),o=a.n(t),r=a(3),s=a.n(r),c=a(2),m=a.n(c),i=a(4),p=a(351),l={},u=function(e){function n(n){var a;return(a=e.call(this,n)||this).layout=p.a,a}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.components,a=o()(e,["components"]);return m.a.createElement(i.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},l,a),components:n},m.a.createElement("h1",{id:"forms-in-production"},"Forms in production"),m.a.createElement(i.MDXTag,{name:"p",components:n},"Previous: ",m.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"./forms/save-in-progress"}},"Setting up Save in Progress")),m.a.createElement(i.MDXTag,{name:"p",components:n},"Now that you have a form in production, making future changes requires some extra care."),m.a.createElement("h2",{id:"changing-your-form-schema"},"Changing your form schema"),m.a.createElement(i.MDXTag,{name:"p",components:n},"Once you're in production and you're also using the save in progress functionality, you have a dilemma when you want to change some fields or some validation on your form. Since there are forms that are saved, if you change the structure of the form, the saved data may no longer match and result in confusing validation errors for a user. Similarly, if validation changes, a user might have already gone past that field and won't know how to fix the new error."),m.a.createElement(i.MDXTag,{name:"p",components:n},'To address this issue, we have the ability to write "migrations" for form data. This way, you can update a user\'s data to match the new structure, as well as move their position in the form back, if they need to adjust something. Migrations are functions, run in a sequence, based on the "version" of the form, which is saved along with the form data.'),m.a.createElement(i.MDXTag,{name:"p",components:n},"Migrations go in the form config object:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const formConfig = {\n   ...\n   version: 1,\n   migrations: [\n     ({ formData, metadata, formId }) => {\n       // do something\n       return {\n         formData,\n         metadata\n       };\n     }\n   ]\n   ...\n};\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"We typically start at version 0 and increment each time we need to add a migration. Migrations are functions that get ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData"),", ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metadata"),", and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formId")," as arguments. And they must return the ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," and ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"metadata"),", with any changes that they have made. For example, here is a migration that the health care application uses to convert an old url:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"({ formData, metadata }) => {\n  const url = metadata.returnUrl || metadata.return_url;\n  let newMetadata = metadata;\n\n  if (url === '/household-information/child-information') {\n    newMetadata = _.set('returnUrl', '/household-information/dependent-information', metadata);\n  }\n\n  return { formData, metadata: newMetadata };\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"If the current return URL (which is the URL a user will return to when the load a saved form) matches the outdated one, we update it. The ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formData")," is not changed in this case."),m.a.createElement(i.MDXTag,{name:"p",components:n},"Another example from the health care application was to fix a bug in our form structure:"),m.a.createElement(i.MDXTag,{name:"pre",components:n},m.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"(savedData) => {\n  const newData = savedData;\n  newData.formData = _.unset('isSpanishHispanicLatino', savedData.formData);\n\n  if (typeof _.get('view:demographicCategories.isSpanishHispanicLatino', newData.formData) === 'undefined') {\n    newData.formData = _.set('view:demographicCategories.isSpanishHispanicLatino', false, newData.formData);\n    return newData;\n  }\n\n  return newData;\n}\n")),m.a.createElement(i.MDXTag,{name:"p",components:n},"In this example, we're moving an incorrectly located ",m.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"isSpanishHispanicLatino")," flag and setting it in the right spot."),m.a.createElement(i.MDXTag,{name:"p",components:n},"Writing migrations is not very common, but you may need to do it if you end up modifying a form that's already in production."))},n}(m.a.Component),d={}},350:function(e){e.exports={data:{components:{edges:[{node:{path:"/visual-design/components/accepttermsprompt/",context:{source:"component",name:"AcceptTermsPrompt"}}},{node:{path:"/visual-design/components/additionalinfo/",context:{source:"component",name:"AdditionalInfo"}}},{node:{path:"/visual-design/components/alertbox/",context:{source:"component",name:"AlertBox"}}},{node:{path:"/visual-design/components/breadcrumbs/",context:{source:"component",name:"Breadcrumbs"}}},{node:{path:"/visual-design/components/collapsiblepanel/",context:{source:"component",name:"CollapsiblePanel"}}},{node:{path:"/visual-design/components/dropdownpanel/",context:{source:"component",name:"DropDownPanel"}}},{node:{path:"/visual-design/components/errorablecheckbox/",context:{source:"component",name:"ErrorableCheckbox"}}},{node:{path:"/visual-design/components/errorablecheckboxgroup/",context:{source:"component",name:"ErrorableCheckboxGroup"}}},{node:{path:"/visual-design/components/errorabledate/",context:{source:"component",name:"ErrorableDate"}}},{node:{path:"/visual-design/components/errorablefileinput/",context:{source:"component",name:"ErrorableFileInput"}}},{node:{path:"/visual-design/components/errorablemonthyear/",context:{source:"component",name:"ErrorableMonthYear"}}},{node:{path:"/visual-design/components/errorableradiobuttons/",context:{source:"component",name:"ErrorableRadioButtons"}}},{node:{path:"/visual-design/components/errorablenumberinput/",context:{source:"component",name:"ErrorableNumberInput"}}},{node:{path:"/visual-design/components/errorabletextarea/",context:{source:"component",name:"ErrorableTextArea"}}},{node:{path:"/visual-design/components/errorableselect/",context:{source:"component",name:"ErrorableSelect"}}},{node:{path:"/visual-design/components/expandinggroup/",context:{source:"component",name:"ExpandingGroup"}}},{node:{path:"/visual-design/components/errorabletextinput/",context:{source:"component",name:"ErrorableTextInput"}}},{node:{path:"/visual-design/components/helpmenu/",context:{source:"component",name:"HelpMenu"}}},{node:{path:"/visual-design/components/iconbase/",context:{source:"component",name:"IconBase"}}},{node:{path:"/visual-design/components/iconhelp/",context:{source:"component",name:"IconHelp"}}},{node:{path:"/visual-design/components/iconuser/",context:{source:"component",name:"IconUser"}}},{node:{path:"/visual-design/components/loadingindicator/",context:{source:"component",name:"LoadingIndicator"}}},{node:{path:"/visual-design/components/megamenu/",context:{source:"component",name:"MegaMenu"}}},{node:{path:"/visual-design/components/pagination/",context:{source:"component",name:"Pagination"}}},{node:{path:"/visual-design/components/iconsearch/",context:{source:"component",name:"IconSearch"}}},{node:{path:"/visual-design/components/privacyagreement/",context:{source:"component",name:"PrivacyAgreement"}}},{node:{path:"/visual-design/components/ombinfo/",context:{source:"component",name:"OMBInfo"}}},{node:{path:"/visual-design/components/progressbar/",context:{source:"component",name:"ProgressBar"}}},{node:{path:"/visual-design/components/progressbutton/",context:{source:"component",name:"ProgressButton"}}},{node:{path:"/visual-design/components/searchmenu/",context:{source:"component",name:"SearchMenu"}}},{node:{path:"/visual-design/components/sortabletable/",context:{source:"component",name:"SortableTable"}}},{node:{path:"/visual-design/components/systemdownview/",context:{source:"component",name:"SystemDownView"}}},{node:{path:"/visual-design/components/modal/",context:{source:"component",name:"Modal"}}},{node:{path:"/visual-design/components/segmentedprogressbar/",context:{source:"component",name:"SegmentedProgressBar"}}}]}}}},351:function(e,n,a){"use strict";var t=a(2),o=a.n(t),r=a(13),s=a.n(r),c=a(354),m=(a(133),a(134),a(135),a(17),a(350)),i=a(352);function p(){return o.a.createElement(i.b,{query:"157057713",render:function(e){return o.a.createElement(u,{items:e.components.edges.map(function(e){return{href:e.node.path,name:e.node.context.name}})})},data:m})}function l(e){var n=e.item;return n.href?o.a.createElement("li",{key:n.name},o.a.createElement(i.a,{to:n.href},n.name)):o.a.createElement("li",{key:n.name},n.name," (future)")}function u(e){var n=e.items,a=e.isSublist,t=void 0!==a&&a;return n.length?o.a.createElement("ul",{className:"site-c-sidenav-list"},n.map(function(e){return e.items?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(u,{isSublist:!0,items:e.items})):"componentList"===e.query?o.a.createElement("li",{key:e.name},t&&o.a.createElement(l,{item:e}),!t&&o.a.createElement("h2",{className:"heading-level-4"},e.name),o.a.createElement(p,null)):o.a.createElement(l,{item:e,key:e.name})})):null}var d=a(353),h=a.n(d);function g(e){var n=e.location,a=h.a.sections.find(function(e){return n.pathname.includes(e.href)});return a?o.a.createElement("div",{className:"vads-l-col--4 site-c-content__nav"},o.a.createElement("div",{className:"site-c-sidenav"},o.a.createElement(u,{items:a.items}))):null}function f(e){var n=e.children,a=e.location;return o.a.createElement(c.a,{location:a},o.a.createElement("div",{className:"vads-l-row"},o.a.createElement(g,{location:a}),o.a.createElement("div",{id:"main-content",className:"vads-l-col--8 site-c-content__content docSearch-content"},n)))}a.d(n,"a",function(){return f}),f.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-forms-forms-in-production-mdx-5ee0e701e0c25c8e6cdf.js.map