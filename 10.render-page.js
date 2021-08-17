exports.ids = [10];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/va-radio-option.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-radio-option.entry.js ***!
  \***************************************************************************/
/*! exports provided: va_radio_option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_radio_option", function() { return VaRadioOption; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
var vaRadioOptionCss="button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}:host{display:block}input[type='radio']{height:0;margin-left:-2rem;opacity:0;position:absolute;left:auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}label{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;padding:6px 12px;display:inline-block;margin:0;width:100%}label::before{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;-webkit-box-shadow:0 0 0 2px var(--color-white), 0 0 0 3px var(--color-gray-medium);box-shadow:0 0 0 2px var(--color-white), 0 0 0 3px var(--color-gray-medium);height:1.4rem;line-height:1.4rem;margin-left:3px;margin-right:0.75em;width:1.4rem;background:var(--color-white);background-color:var(--color-white);content:'\\A0';display:inline-block;text-indent:0.15em}input[type='radio']:checked+label::before{-webkit-box-shadow:0 0 0 2px var(--color-white), 0 0 0 4px var(--color-primary);box-shadow:0 0 0 2px var(--color-white), 0 0 0 4px var(--color-primary);background-color:var(--color-primary)}";var VaRadioOption=function(){function e(e){Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.radioOptionSelected=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"radioOptionSelected",7)}e.prototype.handleChange=function(){this.radioOptionSelected.emit()};e.prototype.render=function(){var e=this;var o=this.checked&&this.ariaDescribedby||null;return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input",{checked:this.checked,id:"input",name:this.name,type:"radio",value:this.value,onChange:function(){return e.handleChange()},"aria-describedby":o}),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label",{htmlFor:"input"},this.label))};return e}();VaRadioOption.style=vaRadioOptionCss;

/***/ })

};;
//# sourceMappingURL=10.render-page.js.map