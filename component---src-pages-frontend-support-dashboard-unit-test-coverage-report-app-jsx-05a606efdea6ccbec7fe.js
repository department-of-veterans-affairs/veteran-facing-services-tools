(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{KMEj:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t("q1tI")),l=r(t("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}var c="vads-u-border-top--0 vads-u-border-right--0 vads-u-border-left--0 vads-u-font-family--sans vads-u-padding--0 vads-u-padding-y--0p5 medium-screen:vads-u-padding--2";var u=function(e){var a=e.currentSort,t=e.fields,r=e.data,u=e.ariaLabelledBy;return n.default.createElement("table",{"aria-labelledby":u,className:"responsive",role:"table"},n.default.createElement("thead",null,n.default.createElement("tr",{role:"row"},t.map((function(e){return e.nonSortable?n.default.createElement("th",{key:e.value},e.label):n.default.createElement("th",{key:e.value,className:c,role:"columnheader",scope:"col"},n.default.createElement("button",{className:"va-button-link vads-u-font-weight--bold vads-u-color--base vads-u-text-decoration--none"},e.label,(null==a?void 0:a.value)===e.value&&n.default.createElement("i",{className:(0,l.default)({fa:!0,"fas fa-caret-down":"DESC"===a.order,"fas fa-caret-up":"ASC"===a.order})})))})))),n.default.createElement("tbody",null,r.map((function(e,a){return n.default.createElement("tr",{key:a,className:"".concat(c," ").concat("vads-u-padding-y--2"),role:"row"},t.map((function(t,r){return n.default.createElement("td",{"data-index":r,className:(0,l.default)(c,{"vads-u-text-align--left":t.alignLeft,"medium-screen:vads-u-text-align--right":t.alignRight}),"data-label":t.label,key:"".concat(a,"-").concat(t.label),role:"cell"},null===e[t.value]?"---":e[t.value])})))}))))};a.default=u},WlEe:function(e,a,t){"use strict";t.r(a);var n=t("HaE+"),l=t("o0o1"),r=t.n(l),c=t("q1tI"),u=t.n(c),s=t("KMEj"),o=t.n(s),d=t("8FPV"),i=t("FRpb"),f=t("XMbe"),p=t("sN80"),v=function(){var e=Object(n.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object.values(a).map((function(e){return{appName:e.path.substr(0,e.path.lastIndexOf("/"))||"All Files",lines:e.lines.pct+"%",functions:e.functions.pct+"%",statements:e.statements.pct+"%",branches:e.branches.pct+"%"}})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b=[{label:"Application",value:"appName"},{label:"Lines",value:"lines"},{label:"Functions",value:"functions"},{label:"Statements",value:"statements"},{label:"Branches",value:"branches"}];a.default=function(e){var a=e.location,t=Object(c.useState)([]),l=t[0],s=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(n.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)(p.b);case 2:return a=e.sent,e.next=5,v(a);case 5:t=e.sent,s(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0===l.length?null:u.a.createElement(d.a,{location:a},u.a.createElement("div",{className:"vads-l-row site-l-wrapper"},u.a.createElement(i.a,{location:a}),u.a.createElement("div",{id:"main-content-coverage",className:"dash-coverage-table site-c-content__content docSearch-content vads-l-col--12"},u.a.createElement("h1",null,"Frontend Support Dashboard"),u.a.createElement("h2",null,"Unit Test Coverage Report"),u.a.createElement(o.a,{data:l,fields:b}))))}}}]);
//# sourceMappingURL=component---src-pages-frontend-support-dashboard-unit-test-coverage-report-app-jsx-05a606efdea6ccbec7fe.js.map