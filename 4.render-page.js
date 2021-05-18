exports.ids = [4];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/va-accordion.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-accordion.entry.js ***!
  \************************************************************************/
/*! exports provided: va_accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_accordion", function() { return VaAccordion; });
/* harmony import */ var _index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-cd20e666.js */ "./node_modules/web-components/dist/esm-es5/index-cd20e666.js");
var vaAccordionCss=":host{display:block;width:100%;color:var(--color-base);--item-border:none;}:host([bordered='true']),:host([bordered='']){--item-border:3px solid var(--color-gray-lightest)}";var VaAccordion=function(){function e(e){Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e)}e.prototype.itemToggledHandler=function(e){var t=e.detail.target.parentNode.parentNode.host||e.detail.target.parentNode.parentNode;if(!this.multi){this.getSlottedNodes(this.el,"va-accordion-item").filter((function(e){return e!==t})).forEach((function(e){return e.setAttribute("open","false")}))}var o=t.getAttribute("open")==="true"?true:false;t.setAttribute("open",!o)};e.prototype.getSlottedNodes=function(e,t){var o=Array.from(e.shadowRoot.childNodes).filter((function(e){return e.tagName==="SLOT"})).length>0;var r=o?e.shadowRoot.querySelector("slot").assignedNodes():e.shadowRoot.childNodes;return Array.from(r).filter((function(e){return e.nodeName.toLowerCase()===t}))};e.prototype.render=function(){return Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this)},enumerable:false,configurable:true});return e}();VaAccordion.style=vaAccordionCss;

/***/ })

};;
//# sourceMappingURL=4.render-page.js.map