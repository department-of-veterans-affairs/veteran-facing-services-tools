(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{Gk6P:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return B}));var r=n("q1tI"),o=n.n(r),a=n("8FPV"),i=n("FRpb"),l=n("js7b"),s=n.n(l),c=function(e){return e?o.a.createElement("span",{className:"dash-true-icon","aria-label":"True Icon"},o.a.createElement("i",{className:"fas fa-check-circle fa-2x","aria-hidden":"true"})):o.a.createElement("span",{className:"dash-false-icon","aria-label":"False Icon"},o.a.createElement("i",{className:"fas fa-times-circle fa-2x","aria-hidden":"true"}))};function u(e){var t,n,a,i=e.repo,l=e.devBuildText,u=e.stagingBuildText,d=e.prodBuildText,f=e.commits,$=Object(r.useState)(!1),p=$[0],m=$[1],h=l.split("\n").filter((function(e){return e}))||[],v=u.split("\n").filter((function(e){return e})),g=d.split("\n").filter((function(e){return e})),b=null===(t=h[6])||void 0===t?void 0:t.slice(4),y=null===(n=v[6])||void 0===n?void 0:n.slice(4),x=null===(a=g[6])||void 0===a?void 0:a.slice(4),w=!1,T=!1,E=!1,B="vets-website"!==i.repo;return o.a.createElement("div",null,o.a.createElement("div",{className:"dash-build-pannel"},o.a.createElement(s.a,{buttonText:i.repo+" BUILD.txt files",clickHandler:function(){m(!p)},isOpen:p},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h4",null,o.a.createElement("a",{href:i.devBuildText},"Dev")),h.map((function(e){return o.a.createElement("div",{key:e},e)}))),o.a.createElement("div",null,o.a.createElement("h4",null,o.a.createElement("a",{href:i.stagingBuildText},"Staging")),v.map((function(e){return o.a.createElement("div",{key:e},e)}))),o.a.createElement("div",null,o.a.createElement("h4",null,o.a.createElement("a",{href:i.prodBuildText},"Prod")),g.map((function(e){return o.a.createElement("div",{key:e},e)})))))),o.a.createElement("va-accordion",{multi:!0,bordered:!0},o.a.createElement("va-accordion-item",{header:i.repo+" commits",subheader:"latest 30 commits",open:B},o.a.createElement("table",{className:"dash-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Author"),o.a.createElement("th",{scope:"col"},"Commit"),o.a.createElement("th",{scope:"col"},"Dev"),o.a.createElement("th",{scope:"col"},"Staging"),o.a.createElement("th",{scope:"col"},"Prod"))),o.a.createElement("tbody",null,f.map((function(e){var t=e.commit,n=void 0===t?{}:t,r=e.html_url,a=e.sha,i=n.author,l=void 0===i?{}:i,s=n.committer,u=void 0===s?{}:s,d=n.message,f=void 0===d?"":d,$=l.name,p=u.date,m=function(e){var t=e.author,n=e.committer;return(null==t?void 0:t.login)||n.login}(e);return a===b&&(w=!0),a===y&&(T=!0),a===x&&(E=!0),o.a.createElement("tr",{key:a},o.a.createElement("td",{className:"dash-td-center"},o.a.createElement("div",{className:"dash-github-info"},o.a.createElement("a",{href:"https://www.github.com/"+m,rel:"noreferrer",target:"_blank"},o.a.createElement("img",{className:"dash-github-image",src:"https://www.github.com/"+m+".png",alt:"github"})),o.a.createElement("a",{href:"https://www.github.com/"+m,rel:"noreferrer",target:"_blank"},o.a.createElement("div",{className:"dash-github-name"},$)))),o.a.createElement("td",null,o.a.createElement("div",null,o.a.createElement("b",null,f.slice(0,100))),o.a.createElement("div",null,o.a.createElement("a",{href:r},a),o.a.createElement("span",{className:"dash-span-right"},"Merged on ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(p))))),o.a.createElement("td",{className:"dash-td-center"},c(w)),o.a.createElement("td",{className:"dash-td-center"},c(T)),o.a.createElement("td",{className:"dash-td-center"},c(E)))})))))))}var d=n("HaE+"),f=n("o0o1"),$=n.n(f);function p(e){return m.apply(this,arguments)}function m(){return(m=Object(d.a)($.a.mark((function e(t){var n,r,o,a,i,l,s,c,u,d;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch(t.devBuildText),fetch(t.stagingBuildText),fetch(t.prodBuildText),fetch("https://api.github.com/repos/"+t.owner+"/"+t.repo+"/commits")]);case 2:return n=e.sent,r=n[0],o=n[1],a=n[2],i=n[3],e.next=9,r.text();case 9:if(l=e.sent,r.ok){e.next=12;break}throw Error(r.statusText);case 12:return e.next=14,o.text();case 14:if(s=e.sent,o.ok){e.next=17;break}throw Error(o.statusText);case 17:return e.next=19,a.text();case 19:if(c=e.sent,a.ok){e.next=22;break}throw Error(a.statusText);case 22:return e.next=24,i.json();case 24:if(u=e.sent,i.ok){e.next=27;break}throw Error(i.statusText);case 27:return d={devBuildText:l,stagingBuildText:s,prodBuildText:c,commits:u},e.abrupt("return",d);case 29:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=n("rePB");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={appsDevBuildText:"",appsStagingBuildText:"",appsProdBuildText:"",appsCommits:[],contentDevBuildText:"",contentStagingBuildText:"",contentProdBuildText:"",contentCommits:[]};function y(e,t){switch(t.type){case"vetsWebsite":return g(g({},e),{},{appsDevBuildText:t.appsDevBuildText,appsStagingBuildText:t.appsStagingBuildText,appsProdBuildText:t.appsProdBuildText,appsCommits:t.appsCommits});case"contentBuild":return g(g({},e),{},{contentDevBuildText:t.contentDevBuildText,contentStagingBuildText:t.contentStagingBuildText,contentProdBuildText:t.contentProdBuildText,contentCommits:t.contentCommits});default:return e}}var x={owner:"department-of-veterans-affairs",repo:"vets-website",devBuildText:"https://dev-va-gov-assets.s3-us-gov-west-1.amazonaws.com/BUILD.txt",stagingBuildText:"https://staging-va-gov-assets.s3-us-gov-west-1.amazonaws.com/BUILD.txt",prodBuildText:"https://prod-va-gov-assets.s3-us-gov-west-1.amazonaws.com/BUILD.txt"},w={owner:"department-of-veterans-affairs",repo:"content-build",devBuildText:"https://dev.va.gov/BUILD.txt",stagingBuildText:"https://staging.va.gov/BUILD.txt",prodBuildText:"https://www.va.gov/BUILD.txt"};n("L/Ir");var T,E=n("zc2C");function B(e){var t=e.location,n=Object(r.useReducer)(y,b),l=n[0],s=n[1],c=l.appsDevBuildText,d=l.appsStagingBuildText,f=l.appsProdBuildText,$=l.appsCommits,m=l.contentDevBuildText,h=l.contentStagingBuildText,v=l.contentProdBuildText,g=l.contentCommits;return o.a.useEffect((function(){p(x).then((function(e){var t=e.devBuildText,n=e.stagingBuildText,r=e.prodBuildText,o=e.commits;return s({type:"vetsWebsite",appsDevBuildText:t,appsStagingBuildText:n,appsProdBuildText:r,appsCommits:o}),e})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){p(w).then((function(e){var t=e.devBuildText,n=e.stagingBuildText,r=e.prodBuildText,o=e.commits;return s({type:"contentBuild",contentDevBuildText:t,contentStagingBuildText:n,contentProdBuildText:r,contentCommits:o}),e})).catch((function(e){console.log(e)}))}),[]),o.a.createElement(a.a,{location:t},o.a.createElement("div",{className:"vads-l-row site-l-wrapper"},o.a.createElement(i.a,{location:t}),o.a.createElement("div",{id:"main-content",className:"dash-deploy-status site-c-content__content docSearch-content vads-l-col--12"},o.a.createElement("h1",null,"Frontend Support Dashboard"),o.a.createElement("h2",null,"Deploy Status vets-website"),o.a.createElement(u,{repo:x,devBuildText:c,stagingBuildText:d,prodBuildText:f,commits:$}),o.a.createElement("h2",null,"Deploy Status content-build"),o.a.createElement(u,{repo:w,devBuildText:m,stagingBuildText:h,prodBuildText:v,commits:g}))))}!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(E.a&&E.a.supports&&E.a.supports("color","var(--c)")?Object(E.c)():n.e(102).then(n.t.bind(null,"/Vt9",7)).then((function(){return(E.h.$cssShim$=E.j.__cssshim)?E.h.$cssShim$.i():0}))).then((function(){return Object(E.d)([["my-component",[[1,"my-component",{first:[1],middle:[1],last:[1]}]]],["va-accordion",[[1,"va-accordion",{bordered:[4],openSingle:[4,"open-single"],disableAnalytics:[4,"disable-analytics"]},[[0,"accordionItemToggled","itemToggledHandler"]]]]],["va-accordion-item",[[1,"va-accordion-item",{header:[1],subheader:[1],open:[4],level:[2]}]]],["va-alert",[[1,"va-alert",{status:[1],backgroundOnly:[4,"background-only"],disableAnalytics:[4,"disable-analytics"],visible:[4],closeBtnAriaLabel:[1,"close-btn-aria-label"],closeable:[4]}]]],["va-checkbox",[[1,"va-checkbox",{label:[1],error:[1],description:[1],required:[4],enableAnalytics:[4,"enable-analytics"],checked:[1028],ariaDescribedby:[1,"aria-describedby"]}]]],["va-on-this-page",[[1,"va-on-this-page"]]],["va-radio",[[1,"va-radio",{label:[1],required:[4],error:[1],enableAnalytics:[4,"enable-analytics"]},[[0,"radioOptionSelected","radioOptionSelectedHandler"]]]]],["va-radio-option",[[1,"va-radio-option",{name:[1],label:[1],value:[1],checked:[4],ariaDescribedby:[1,"aria-describedby"]}]]],["va-select",[[1,"va-select",{required:[4],label:[1],name:[1],value:[1537],error:[1],enableAnalytics:[4,"enable-analytics"],options:[32]}]]],["va-text-input",[[1,"va-text-input",{label:[1],error:[1],required:[4],placeholder:[1],maxlength:[2],autocomplete:[1],enableAnalytics:[4,"enable-analytics"],name:[1],ariaDescribedby:[1,"aria-describedby"],value:[1025]}]]]],T)}))},"L/Ir":function(e,t,n){},g3DH:function(e,t,n){var r={"./my-component.entry.js":["4CR5",98],"./va-accordion-item.entry.js":["Vk9U",103],"./va-accordion.entry.js":["k3nL",99],"./va-alert.entry.js":["6SWj",104],"./va-checkbox.entry.js":["KyYT",105],"./va-on-this-page.entry.js":["uYEX",106],"./va-radio-option.entry.js":["m2/n",107],"./va-radio.entry.js":["2e6V",100],"./va-select.entry.js":["q1ZH",101],"./va-text-input.entry.js":["attr",108]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="g3DH",e.exports=o},js7b:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("q1tI")),a=i(n("TSYQ"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=$(e);if(t){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(d,e);var t,n,r,i=u(d);function d(){var e;l(this,d);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(f(e=i.call.apply(i,[this].concat(n))),"handleDocumentClick",(function(t){e.props.isOpen&&!e.dropdownDiv.contains(t.target)&&e.toggleDropDown()})),p(f(e),"toggleDropDown",(function(){e.props.clickHandler()})),e}return t=d,(n=[{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleDocumentClick,!1)}},{key:"render",value:function(){var e=this,t=(0,a.default)(this.props.cssClass,{"va-btn-withicon":this.props.icon},"va-dropdown-trigger");return o.default.createElement("div",{className:"va-dropdown",ref:function(t){e.dropdownDiv=t}},o.default.createElement("button",{className:t,"aria-controls":this.props.id,"aria-expanded":this.props.isOpen,disabled:this.props.disabled,onClick:this.toggleDropDown},o.default.createElement("span",null,this.props.icon,this.props.buttonText)),o.default.createElement("div",{className:"va-dropdown-panel ".concat(this.props.dropdownPanelClassNames),id:this.props.id,hidden:!this.props.isOpen},this.props.children))}}])&&s(t.prototype,n),r&&s(t,r),d}(o.default.Component);t.default=m,m.defaultProps={dropdownPanelClassNames:"",disabled:!1}},zc2C:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return L})),n.d(t,"c",(function(){return w})),n.d(t,"d",(function(){return ge})),n.d(t,"e",(function(){return ne})),n.d(t,"f",(function(){return te})),n.d(t,"g",(function(){return D})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return xe})),n.d(t,"j",(function(){return v}));var r,o,a,i,l,s,c=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),u=function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function l(e){try{s(r.throw(e))}catch(t){a(t)}}function s(e){e.done?n(e.value):o(e.value).then(i,l)}s((r=r.apply(e,t||[])).next())}))},d=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},f=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r},$=!1,p=!1,m=!1,h=!1,v="undefined"!=typeof window?window:{},g=v.CSS,b=v.document||{head:{}},y={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},x=(b.head.attachShadow+"").indexOf("[native")>-1,w=function(e){return Promise.resolve(e)},T=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(l){}return!1}(),E=function(e,t,n,r){n&&n.map((function(n){var r=n[0],o=n[1],a=n[2],i=e,l=B(t,a),s=S(r);y.ael(i,o,l,s),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return y.rel(i,o,l,s)}))}))},B=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){Ee(r)}}},S=function(e){return 0!=(2&e)},N=function(e,t){return void 0===t&&(t=""),function(){}},k=new WeakMap,j=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=N(0,t.$tagName$),a=function(e,t,n,r){var o=O(t),a=Ne.get(o);if(e=11===e.nodeType?e:b,a)if("string"==typeof a){e=e.head||e;var i=k.get(e),l=void 0;if(i||k.set(e,i=new Set),!i.has(o)){if(y.$cssShim$){var s=(l=y.$cssShim$.createHostStyle(r,o,a,!!(10&t.$flags$)))["s-sc"];s&&(o=s,i=null)}else(l=b.createElement("style")).innerHTML=a;e.insertBefore(l,e.querySelector("link")),i&&i.add(o)}}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=f(e.adoptedStyleSheets,[a]));return o}(x&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);10&r&&(n["s-sc"]=a,n.classList.add(a+"-h")),o()},O=function(e,t){return"sc-"+e.$tagName$},R={},P=function(e){return"object"===(e=typeof e)||"function"===e},D=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=null,a=null,i=!1,l=!1,s=[],c=function t(n){for(var r=0;r<n.length;r++)o=n[r],Array.isArray(o)?t(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof e&&!P(o))&&(o=String(o)),i&&l?s[s.length-1].$text$+=o:s.push(i?C(null,o):o),l=i)};if(c(n),t){t.name&&(a=t.name);var u=t.className||t.class;u&&(t.class="object"!=typeof u?u:Object.keys(u).filter((function(e){return u[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,s,_);var d=C(e,null);return d.$attrs$=t,s.length>0&&(d.$children$=s),d.$name$=a,d},C=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$name$:null};return n},L={},_={forEach:function(e,t){return e.map(M).forEach(t)},map:function(e,t){return e.map(M).map(t).map(A)}},M=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},A=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),D.apply(void 0,f([e.vtag,t],e.vchildren||[]))}var n=C(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},I=function(e,t,n,r,o,a){if(n!==r){var i=Te(e,t),l=t.toLowerCase();if("class"===t){var s=e.classList,c=U(n),u=U(r);s.remove.apply(s,c.filter((function(e){return e&&!u.includes(e)}))),s.add.apply(s,u.filter((function(e){return e&&!c.includes(e)})))}else if(i||"o"!==t[0]||"n"!==t[1]){var d=P(r);if((i||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var f=null==r?"":r;"list"===t?i=!1:null!=n&&e[t]==f||(e[t]=f)}}catch($){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&a||o)&&!d&&(r=!0===r?"":r,e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Te(v,l)?l.slice(2):l[2]+t.slice(3),n&&y.rel(e,t,n,!1),r&&y.ael(e,t,r,!1)}},H=/\s/,U=function(e){return e?e.split(H):[]},q=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,a=e&&e.$attrs$||R,i=t.$attrs$||R;for(r in a)r in i||I(o,r,a[r],void 0,n,t.$flags$);for(r in i)I(o,r,a[r],i[r],n,t.$flags$)},z=function e(t,n,r,l){var s,c,u,d=n.$children$[r],f=0;if($||(m=!0,"slot"===d.$tag$&&(o&&l.classList.add(o+"-s"),d.$flags$|=d.$children$?2:1)),null!==d.$text$)s=d.$elm$=b.createTextNode(d.$text$);else if(1&d.$flags$)s=d.$elm$=b.createTextNode("");else if(s=d.$elm$=b.createElement(2&d.$flags$?"slot-fb":d.$tag$),q(null,d,!1),function(e){return null!=e}(o)&&s["s-si"]!==o&&s.classList.add(s["s-si"]=o),d.$children$)for(f=0;f<d.$children$.length;++f)(c=e(t,d,f,s))&&s.appendChild(c);return s["s-hn"]=i,3&d.$flags$&&(s["s-sr"]=!0,s["s-cr"]=a,s["s-sn"]=d.$name$||"",(u=t&&t.$children$&&t.$children$[r])&&u.$tag$===d.$tag$&&t.$elm$&&F(t.$elm$,!1)),s},F=function e(t,n){y.$flags$|=1;for(var r=t.childNodes,o=r.length-1;o>=0;o--){var a=r[o];a["s-hn"]!==i&&a["s-ol"]&&(K(a).insertBefore(a,J(a)),a["s-ol"].remove(),a["s-ol"]=void 0,m=!0),n&&e(a,n)}y.$flags$&=-2},V=function(e,t,n,r,o,a){var l,s=e["s-cr"]&&e["s-cr"].parentNode||e;for(s.shadowRoot&&s.tagName===i&&(s=s.shadowRoot);o<=a;++o)r[o]&&(l=z(null,n,o,e))&&(r[o].$elm$=l,s.insertBefore(l,J(t)))},W=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,p=!0,o["s-ol"]?o["s-ol"].remove():F(o,!0),o.remove())},G=function(e,t,n,r){for(var o,a=0,i=0,l=t.length-1,s=t[0],c=t[l],u=r.length-1,d=r[0],f=r[u];a<=l&&i<=u;)null==s?s=t[++a]:null==c?c=t[--l]:null==d?d=r[++i]:null==f?f=r[--u]:Y(s,d)?(Q(s,d),s=t[++a],d=r[++i]):Y(c,f)?(Q(c,f),c=t[--l],f=r[--u]):Y(s,f)?("slot"!==s.$tag$&&"slot"!==f.$tag$||F(s.$elm$.parentNode,!1),Q(s,f),e.insertBefore(s.$elm$,c.$elm$.nextSibling),s=t[++a],f=r[--u]):Y(c,d)?("slot"!==s.$tag$&&"slot"!==f.$tag$||F(c.$elm$.parentNode,!1),Q(c,d),e.insertBefore(c.$elm$,s.$elm$),c=t[--l],d=r[++i]):(o=z(t&&t[i],n,i,e),d=r[++i],o&&K(s.$elm$).insertBefore(o,J(s.$elm$)));a>l?V(e,null==r[u+1]?null:r[u+1].$elm$,n,r,i,u):i>u&&W(t,a,l)},Y=function(e,t){return e.$tag$===t.$tag$&&("slot"!==e.$tag$||e.$name$===t.$name$)},J=function(e){return e&&e["s-ol"]||e},K=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode},Q=function(e,t){var n,r=t.$elm$=e.$elm$,o=e.$children$,a=t.$children$,i=t.$tag$,l=t.$text$;null===l?("slot"===i||q(e,t,!1),null!==o&&null!==a?G(r,o,t,a):null!==a?(null!==e.$text$&&(r.textContent=""),V(r,null,t,a,0,a.length-1)):null!==o&&W(o,0,o.length-1)):(n=r["s-cr"])?n.parentNode.textContent=l:e.$text$!==l&&(r.data=l)},X=[],Z=function(e,t){return 1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t},ee=function(e,t){var n=e.$hostElement$,r=e.$cmpMeta$,l=e.$vnode$||C(null,null),s=function(e){return e&&e.$tag$===L}(t)?t:D(null,null,t);if(i=n.tagName,r.$attrsToReflect$&&(s.$attrs$=s.$attrs$||{},r.$attrsToReflect$.map((function(e){var t=e[0],r=e[1];return s.$attrs$[r]=n[t]}))),s.$tag$=null,s.$flags$|=4,e.$vnode$=s,s.$elm$=l.$elm$=n.shadowRoot||n,o=n["s-sc"],a=n["s-cr"],$=x&&0!=(1&r.$flags$),p=!1,Q(l,s),y.$flags$|=1,m){!function e(t){for(var n,r,o,a,i,l,s=0,c=t.childNodes,u=c.length;s<u;s++){if((n=c[s])["s-sr"]&&(r=n["s-cr"])&&r.parentNode)for(o=r.parentNode.childNodes,a=n["s-sn"],l=o.length-1;l>=0;l--)(r=o[l])["s-cn"]||r["s-nr"]||r["s-hn"]===n["s-hn"]||(Z(r,a)?(i=X.find((function(e){return e.$nodeToRelocate$===r})),p=!0,r["s-sn"]=r["s-sn"]||a,i?i.$slotRefNode$=n:X.push({$slotRefNode$:n,$nodeToRelocate$:r}),r["s-sr"]&&X.map((function(e){Z(e.$nodeToRelocate$,r["s-sn"])&&(i=X.find((function(e){return e.$nodeToRelocate$===r})))&&!e.$slotRefNode$&&(e.$slotRefNode$=i.$slotRefNode$)}))):X.some((function(e){return e.$nodeToRelocate$===r}))||X.push({$nodeToRelocate$:r}));1===n.nodeType&&e(n)}}(s.$elm$);for(var c=void 0,u=void 0,d=void 0,f=void 0,h=void 0,v=void 0,g=0;g<X.length;g++)(u=(c=X[g]).$nodeToRelocate$)["s-ol"]||((d=b.createTextNode(""))["s-nr"]=u,u.parentNode.insertBefore(u["s-ol"]=d,u));for(g=0;g<X.length;g++)if(u=(c=X[g]).$nodeToRelocate$,c.$slotRefNode$){for(f=c.$slotRefNode$.parentNode,h=c.$slotRefNode$.nextSibling,d=u["s-ol"];d=d.previousSibling;)if((v=d["s-nr"])&&v["s-sn"]===u["s-sn"]&&f===v.parentNode&&(!(v=v.nextSibling)||!v["s-nr"])){h=v;break}(!h&&f!==u.parentNode||u.nextSibling!==h)&&u!==h&&(!u["s-hn"]&&u["s-ol"]&&(u["s-hn"]=u["s-ol"].parentNode.nodeName),f.insertBefore(u,h))}else 1===u.nodeType&&(u.hidden=!0)}p&&function e(t){var n,r,o,a,i,l,s=t.childNodes;for(r=0,o=s.length;r<o;r++)if(1===(n=s[r]).nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,a=0;a<o;a++)if(l=s[a].nodeType,s[a]["s-hn"]!==n["s-hn"]||""!==i){if(1===l&&i===s[a].getAttribute("slot")){n.hidden=!0;break}}else if(1===l||3===l&&""!==s[a].textContent.trim()){n.hidden=!0;break}e(n)}}(s.$elm$),y.$flags$&=-2,X.length=0},te=function(e){return ye(e).$hostElement$},ne=function(e,t,n){var r=te(e);return{emit:function(e){return re(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},re=function(e,t,n){var r=y.ce(t,n);return e.dispatchEvent(r),r},oe=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ae=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){oe(e,e.$ancestorComponent$);return De((function(){return ie(e,t)}))}e.$flags$|=512},ie=function(e,t){var n=N(0,e.$cmpMeta$.$tagName$),r=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return de(r,t,n)})),e.$queuedListeners$=null)),n(),fe(void 0,(function(){return le(e,r,t)}))},le=function(e,t,n){return u(void 0,void 0,void 0,(function(){var r,o,a,i,l,s;return d(this,(function(c){return r=e.$hostElement$,o=N(0,e.$cmpMeta$.$tagName$),a=r["s-rc"],n&&j(e),i=N(0,e.$cmpMeta$.$tagName$),se(e,t),y.$cssShim$&&y.$cssShim$.updateHost(r),a&&(a.map((function(e){return e()})),r["s-rc"]=void 0),i(),o(),l=r["s-p"],s=function(){return ce(e)},0===l.length?s():(Promise.all(l).then(s),e.$flags$|=4,l.length=0),[2]}))}))},se=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,ee(e,t)}catch(r){Ee(r,e.$hostElement$)}return null},ce=function(e){var t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=N(0,t),o=e.$ancestorComponent$;64&e.$flags$?r():(e.$flags$|=64,$e(n),r(),e.$onReadyResolve$(n),o||ue()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Pe((function(){return ae(e,!1)})),e.$flags$&=-517},ue=function(e){$e(b.documentElement),Pe((function(){return re(v,"appload",{detail:{namespace:"component-library"}})}))},de=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Ee(r)}},fe=function(e,t){return e&&e.then?e.then(t):t()},$e=function(e){return e.classList.add("hydrated")},pe=function(e,t,n,r){var o=ye(e),a=o.$instanceValues$.get(t),i=o.$flags$,l=o.$lazyInstance$;n=function(e,t){return null==e||P(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e}(n,r.$members$[t][0]),8&i&&void 0!==a||n===a||(o.$instanceValues$.set(t,n),l&&2==(18&i)&&ae(o,!1))},me=function(e,t,n){if(t.$members$){var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=e[0],a=e[1][0];(31&a||2&n&&32&a)&&Object.defineProperty(o,r,{get:function(){return function(e,t){return ye(e).$instanceValues$.get(t)}(this,r)},set:function(e){pe(this,r,e,t)},configurable:!0,enumerable:!0})})),1&n){var a=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;y.jmp((function(){var t=a.get(e);r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var n=e[0],r=e[1],o=r[1]||n;return a.set(o,n),512&r[0]&&t.$attrsToReflect$.push([n,o]),o}))}}return e},he=function(e,t,r,o,a){return u(void 0,void 0,void 0,(function(){var e,o,i,l,s,c,u;return d(this,(function(d){switch(d.label){case 0:return 0!=(32&t.$flags$)?[3,5]:(t.$flags$|=32,(a=Se(r)).then?(e=function(){},[4,a]):[3,2]);case 1:a=d.sent(),e(),d.label=2;case 2:a.isProxied||(me(a,r,2),a.isProxied=!0),o=N(0,r.$tagName$),t.$flags$|=8;try{new a(t)}catch(f){Ee(f)}return t.$flags$&=-9,o(),a.style?(i=a.style,l=O(r),Ne.has(l)?[3,5]:(s=N(0,r.$tagName$),8&r.$flags$?[4,n.e(97).then(n.bind(null,"w6h+")).then((function(e){return e.scopeCss(i,l,!1)}))]:[3,4])):[3,5];case 3:i=d.sent(),d.label=4;case 4:!function(e,t,n){var r=Ne.get(e);T&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Ne.set(e,r)}(l,i,!!(1&r.$flags$)),s(),d.label=5;case 5:return c=t.$ancestorComponent$,u=function(){return ae(t,!0)},c&&c["s-rc"]?c["s-rc"].push(u):u(),[2]}}))}))},ve=function(e){var t=e["s-cr"]=b.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ge=function(e,t){void 0===t&&(t={});var n,r=N(),o=[],a=t.exclude||[],i=v.customElements,l=b.head,s=l.querySelector("meta[charset]"),u=b.createElement("style"),d=[],f=!0;Object.assign(y,t),y.$resourcesUrl$=new URL(t.resourcesUrl||"./",b.baseURI).href,e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2],r.$listeners$=t[3],r.$attrsToReflect$=[],!x&&1&r.$flags$&&(r.$flags$|=8);var l=r.$tagName$,s=function(e){function t(t){var n=e.call(this,t)||this;return we(t=n,r),1&r.$flags$&&(x?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),function(e,t){var n=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.item=function(e){return this[e]},t}(Array);if(8&t.$flags$){var r=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return 1===e.nodeType}))}}),Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}}),Object.defineProperty(e,"childNodes",{get:function(){var e=r.call(this);if(0==(1&y.$flags$)&&2&ye(this).$flags$){for(var t=new n,o=0;o<e.length;o++){var a=e[o]["s-nr"];a&&t.push(a)}return t}return n.from(e)}})}}(t,r),n}return c(t,e),t.prototype.connectedCallback=function(){var e=this;n&&(clearTimeout(n),n=null),f?d.push(this):y.jmp((function(){return function(e){if(0==(1&y.$flags$)){var t=ye(e),n=t.$cmpMeta$,r=N(0,n.$tagName$);if(1&t.$flags$)E(e,t,n.$listeners$);else{t.$flags$|=1,12&n.$flags$&&ve(e);for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){oe(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}})),he(0,t,n)}r()}}(e)}))},t.prototype.disconnectedCallback=function(){var e=this;y.jmp((function(){return function(e){if(0==(1&y.$flags$)){var t=ye(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0),y.$cssShim$&&y.$cssShim$.removeHost(e)}}(e)}))},t.prototype.componentOnReady=function(){return ye(this).$onReadyPromise$},t}(HTMLElement);r.$lazyBundleId$=e[0],a.includes(l)||i.get(l)||(o.push(l),i.define(l,me(s,r,1)))}))})),u.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),l.insertBefore(u,s?s.nextSibling:l.firstChild),f=!1,d.length?d.map((function(e){return e.connectedCallback()})):y.jmp((function(){return n=setTimeout(ue,30)})),r()},be=new WeakMap,ye=function(e){return be.get(e)},xe=function(e,t){return be.set(t.$lazyInstance$=e,t)},we=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],E(e,n,t.$listeners$),be.set(e,n)},Te=function(e,t){return t in e},Ee=function(e,t){return(0,console.error)(e,t)},Be=new Map,Se=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,i=Be.get(a);return i?i[o]:n("g3DH")("./"+a+".entry.js").then((function(e){return Be.set(a,e),e[o]}),Ee)},Ne=new Map,ke=[],je=[],Oe=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Ee(n)}e.length=0},Re=function e(){Oe(ke),Oe(je),(h=ke.length>0)&&y.raf(e)},Pe=function(e){return w().then(e)},De=(l=je,s=!0,function(e){l.push(e),h||(h=!0,s&&4&y.$flags$?Pe(Re):y.raf(Re))})}}]);
//# sourceMappingURL=component---src-pages-frontend-support-dashboard-app-jsx-5b6eef33d039dd9cb541.js.map