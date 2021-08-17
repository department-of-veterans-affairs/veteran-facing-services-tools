exports.ids = [7];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/va-alert.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-alert.entry.js ***!
  \********************************************************************/
/*! exports provided: va_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_alert", function() { return VaAlert; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
var vaAlertCss=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}:host{display:block;background-color:var(--color-gray-lightest);position:relative}:host([background-only='true']),:host([background-only='']){background-color:unset}::slotted([slot='headline']){font-size:2rem !important;line-height:26px !important;padding:0 !important;margin:0 !important}div.alert{display:table;padding:3.2rem 6.4rem 3.2rem 2.4rem;width:100%;vertical-align:middle;border-left-style:solid;border-left-width:10px;-webkit-box-sizing:border-box;box-sizing:border-box}div.alert>i::before{display:-ms-flexbox;display:flex;margin-right:1.6rem}div.body{padding-left:0;padding-right:0;display:table-cell;vertical-align:middle;width:100%}::slotted(:not([slot])){margin-top:2rem}.bg-only ::slotted(*){margin-top:0}div.info>i::before{content:'\\F05A'}div.continue>i::before{content:'\\F023';color:var(--color-green)}div.success>i::before{content:'\\F00C';color:var(--color-green)}div.warning>i::before{content:'\\F071'}div.error>i::before{content:'\\F06A';color:var(--color-secondary-dark)}div.alert.bg-only>i::before{content:''}div.bg-only{border:none}.info{border-left-color:var(--color-primary-alt-dark)}.info.bg-only{background-color:var(--color-primary-alt-lightest)}.continue,.success{border-left-color:var(--color-green)}.continue.bg-only{background-color:var(--color-gray-lightest)}.success.bg-only{background-color:var(--color-green-lightest)}.warning{border-left-color:var(--color-gold)}.warning.bg-only{background-color:var(--color-gold-lightest)}.error{border-left-color:var(--color-secondary-dark)}.error.bg-only{background-color:var(--color-secondary-lightest)}.va-alert-close{margin:1.6rem;padding:0;width:auto;color:var(--color-primary);font-size:2.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;cursor:pointer;background:transparent;display:block;position:absolute;right:0;top:0}.va-alert-close:hover{color:var(--color-primary-darker)}i{font-family:'Font Awesome 5 Free';font-style:normal;font-weight:900}i.fa-times-circle::before{content:'\\F057';}";var VaAlert=function(){function e(e){Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.close=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"close",7);this.componentLibraryAnalytics=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"component-library-analytics",7);this.status="info";this.backgroundOnly=false;this.disableAnalytics=false;this.visible=true;this.closeBtnAriaLabel="Close notification";this.closeable=false}e.prototype.closeHandler=function(e){this.close.emit(e)};e.prototype.handleAlertBodyClick=function(e){var o=null;try{var r=this.el.shadowRoot.querySelector("slot").assignedNodes();o=r.length>0?r[0].textContent:null}catch(e){var r=this.el.shadowRoot.childNodes;var t=r.filter((function(e){return["h1","h2","h3","h4","h5","h6"].includes(e.tagName.toLowerCase())}));o=t.length>0?t[0].textContent:null}if(!this.disableAnalytics){var l=e.target;if((l===null||l===void 0?void 0:l.tagName)==="A"){var i={componentName:"AlertBox",action:"linkClick",details:{clickLabel:l.innerText,headline:o,status:this.status,backgroundOnly:this.backgroundOnly,closeable:this.closeable}};this.componentLibraryAnalytics.emit(i)}}};e.prototype.render=function(){var e=this,o=e.backgroundOnly,r=e.status,t=e.visible,l=e.closeable;var i="alert "+r+" "+(o?"bg-only":"");if(!t)return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{"aria-live":"polite"});return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:i},Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i",{"aria-hidden":"true",role:"img"}),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"sr-only"},"Alert: "),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"body",onClick:this.handleAlertBodyClick.bind(this)},!o&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{name:"headline"}),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null))),l&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{class:"va-alert-close","aria-label":this.closeBtnAriaLabel,onClick:this.closeHandler.bind(this)},Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i",{class:"fa-times-circle","aria-label":"Close icon"})))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this)},enumerable:false,configurable:true});return e}();VaAlert.style=vaAlertCss;

/***/ })

};;
//# sourceMappingURL=7.render-page.js.map