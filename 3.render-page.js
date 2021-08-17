exports.ids = [3];
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

/***/ "./node_modules/web-components/dist/esm-es5/va-select.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-select.entry.js ***!
  \*********************************************************************/
/*! exports provided: va_select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_select", function() { return VaSelect; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
/* harmony import */ var _utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-daf9ffbd.js */ "./node_modules/web-components/dist/esm-es5/utils-daf9ffbd.js");
var vaSelectCss='button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}.sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}:host{display:block}:host([required]) label>span{color:var(--color-secondary-dark);margin:0 0.35em}:host([error]){border-left:4px solid var(--color-secondary-dark);margin-top:3rem;padding-bottom:0.8rem;padding-left:1.5rem;padding-top:0.8rem;position:relative;right:1.9rem}:host([error]) label{margin-top:0}:host([error]) label,:host([error])>span{display:block;font-size:1.6rem;font-weight:700}:host([error])>span{color:var(--color-secondary-dark);padding-bottom:3px;padding-top:3px}:host([error]) select{border:3px solid var(--color-secondary-dark)}::slotted(option){display:none}label{margin-top:3rem;max-width:46rem;display:block}select{background-color:var(--color-white);background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 10 14%22%3E%3Cg fill%3D%22%23323a45%22 fill-rule%3D%22evenodd%22%3E%3Cpath d%3D%22M.62639628 5.99993896H9.3727389c.25339173.00130856.482416-.15074264.57956202-.38477624.09714598-.2340336.04312294-.50357616-.13670922-.6820964L5.4401815.1835435C5.32475606.06613116 5.1670083 0 5.00236114 0c-.16464716 0-.3223949.06613117-.43782037.1835435L.1835435 4.93306632C.06613116 5.0484918 0 5.20623953 0 5.3708867s.06613117.32239492.1835435.43782038c.1146444.1224934.27508006.19177244.44285278.19123188zM9.3727389 7.9999685H.6263963c-.1662653-.00316183-.32647608.06237894-.4428528.18116705C.0661312 8.296561 0 8.45430875 0 8.61895592s.06613117.32239492.1835435.43782037l4.38099726 4.7596802C4.67996622 13.9338688 4.83771396 14 5.00236113 14s.32239492-.0661312.43782038-.1835435l4.3754102-4.74961537c.17983216-.17852023.2338552-.44806278.13670922-.68209638-.09714602-.2340336-.3261703-.3860848-.579562-.38477625z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");background-position:right 1.3rem center;background-repeat:no-repeat;background-size:1rem;padding-right:3rem}';var VaSelect=function(){function e(e){Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.vaKeyDown=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"vaKeyDown",7);this.vaSelect=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"vaSelect",7);this.componentLibraryAnalytics=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"component-library-analytics",7)}e.prototype.handleKeyDown=function(){this.vaKeyDown.emit()};e.prototype.handleChange=function(e){var t=e.target;this.value=t.value;if(this.enableAnalytics){var o={componentName:"va-select",action:"change",details:{label:this.label,selectLabel:this.value}};this.componentLibraryAnalytics.emit(o)}this.vaSelect.emit({value:this.value})};e.prototype.populateOptions=function(){var e=this.value;this.options=Object(_utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el,"option").map((function(t){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("option",{value:t.value,selected:e===t.value},t.text)}))};e.prototype.render=function(){var e=this;var t=this,o=t.error,r=t.label,a=t.required,n=t.name;var i=o?"error":undefined;return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label",{htmlFor:"select"},r,a&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",null,"(*Required)")),o&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{id:i,role:"alert"},o),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",{onSlotchange:function(){return e.populateOptions()}}),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("select",{"aria-describedby":i,id:"select",name:n,onKeyDown:function(){return e.handleKeyDown()},onChange:function(t){return e.handleChange(t)}},this.options))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this)},enumerable:false,configurable:true});return e}();VaSelect.style=vaSelectCss;

/***/ })

};;
//# sourceMappingURL=3.render-page.js.map