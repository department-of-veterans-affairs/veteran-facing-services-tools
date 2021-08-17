exports.ids = [1];
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

/***/ "./node_modules/web-components/dist/esm-es5/va-accordion.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-accordion.entry.js ***!
  \************************************************************************/
/*! exports provided: va_accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_accordion", function() { return VaAccordion; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
/* harmony import */ var _utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-daf9ffbd.js */ "./node_modules/web-components/dist/esm-es5/utils-daf9ffbd.js");
var vaAccordionCss=":host{display:block;width:100%;color:var(--color-gray-dark);--item-border:none;}:host([bordered='true']),:host([bordered='']){--item-border:3px solid var(--color-gray-lightest)}";var VaAccordion=function(){function e(e){Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.componentLibraryAnalytics=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"component-library-analytics",7);this.disableAnalytics=false}e.prototype.itemToggledHandler=function(e){var t=e.detail.currentTarget.parentNode.parentNode.host||e.detail.currentTarget.parentNode.parentNode;if(this.openSingle){Object(_utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.el,"va-accordion-item").filter((function(e){return e!==t})).forEach((function(e){return e.setAttribute("open","false")}))}var r=t.getAttribute("open")==="true"?true:false;if(!this.disableAnalytics){var o={componentName:"Accordion",action:r?"collapse":"expand",details:{header:t.header,subheader:t.subheader,level:t.level}};this.componentLibraryAnalytics.emit(o)}t.setAttribute("open",!r)};e.prototype.render=function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this)},enumerable:false,configurable:true});return e}();VaAccordion.style=vaAccordionCss;

/***/ })

};;
//# sourceMappingURL=1.render-page.js.map