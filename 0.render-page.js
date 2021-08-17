exports.ids = [0];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/my-component.entry.js":
/*!************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/my-component.entry.js ***!
  \************************************************************************/
/*! exports provided: my_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
/* harmony import */ var _utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-daf9ffbd.js */ "./node_modules/web-components/dist/esm-es5/utils-daf9ffbd.js");
var myComponentCss=":host{display:block}";var MyComponent=function(){function t(t){Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,t)}t.prototype.getText=function(){return Object(_utils_daf9ffbd_js__WEBPACK_IMPORTED_MODULE_1__["f"])(this.first,this.middle,this.last)};t.prototype.render=function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",null,"Hello, World! I'm ",this.getText())};return t}();MyComponent.style=myComponentCss;

/***/ }),

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

/***/ })

};;
//# sourceMappingURL=0.render-page.js.map