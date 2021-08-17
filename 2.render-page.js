exports.ids = [2];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/utils-daf9ffbd.js":
/*!********************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/utils-daf9ffbd.js ***!
  \********************************************************************/
/*! exports provided: f, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getSlottedNodes; });
function format(o,t,e){return(o||"")+(t?" "+t:"")+(e?" "+e:"")}function getSlottedNodes(o,t){var e=Array.from(o.shadowRoot.childNodes).filter((function(o){return o.tagName==="SLOT"})).length>0;var r=e?o.shadowRoot.querySelector("slot").assignedNodes():o.shadowRoot.childNodes;return Array.from(r).filter((function(o){return o.nodeName.toLowerCase()===t}))}

/***/ }),

/***/ "./node_modules/web-components/dist/esm-es5/va-radio.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-radio.entry.js ***!
  \********************************************************************/
/*! exports provided: va_radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_radio", function() { return VaRadio; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
/* harmony import */ var _utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-daf9ffbd.js */ "./node_modules/web-components/dist/esm-es5/utils-daf9ffbd.js");
var vaRadioCss=".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}:host{display:block;border:none;padding:0;margin-top:3rem}:host([error]){border-left:4px solid var(--color-secondary-dark);margin-top:3rem;padding-bottom:0.8rem;padding-left:1.5rem;padding-top:0.8rem;position:relative;right:1.9rem}.error-message{color:var(--color-secondary-dark);padding-bottom:3px;padding-top:3px;display:block;font-size:1.6rem;font-weight:700}.required-span{color:var(--color-secondary-dark);margin:0 0.35em}legend{display:block;max-width:46rem;font-weight:inherit;font-size:inherit;color:inherit;line-height:inherit}";var VaRadio=function(){function e(e){Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.componentLibraryAnalytics=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"component-library-analytics",7);this.vaValueChange=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"vaValueChange",7);this.required=false}e.prototype.radioOptionSelectedHandler=function(e){var r=e.target;Object(_utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el,"va-radio-option").filter((function(e){return e!==r})).forEach((function(e){return e.checked=false}));r.checked=true;if(this.enableAnalytics)this.fireAnalyticsEvent(r.label);this.vaValueChange.emit({value:r.value})};e.prototype.fireAnalyticsEvent=function(e){this.componentLibraryAnalytics.emit({componentName:"va-radio",action:"change",details:{label:this.label,optionLabel:e,required:this.required}})};e.prototype.render=function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["H"],{role:"radiogroup"},Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("legend",null,this.label,this.required&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"required-span"},"(*Required)")),this.error&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"error-message",role:"alert"},Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"sr-only"},"Error")," ",this.error),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this)},enumerable:false,configurable:true});return e}();VaRadio.style=vaRadioCss;

/***/ })

};;
//# sourceMappingURL=2.render-page.js.map