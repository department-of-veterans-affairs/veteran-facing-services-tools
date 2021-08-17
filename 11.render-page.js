exports.ids = [11];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/va-text-input.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-text-input.entry.js ***!
  \*************************************************************************/
/*! exports provided: va_text_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_text_input", function() { return VaTextInput; });
/* harmony import */ var _index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-5b03e586.js */ "./node_modules/web-components/dist/esm-es5/index-5b03e586.js");
var vaTextInputCss=":host{display:block;font-family:var(--font-source-sans);margin-top:3rem}label{display:block;max-width:46rem}span.required{color:var(--color-secondary-dark)}input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}input:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}#error-message{color:var(--color-secondary-dark);display:block}:host([error]){border-left:4px solid var(--color-secondary-dark);margin-top:3rem;padding-bottom:.8rem;padding-left:1.5rem;padding-top:.8rem;position:relative;right:1.9rem}:host([error]) label,:host([error]) span{font-weight:700}:host([error]) input{border:3px solid var(--color-secondary-dark)}";var VaTextInput=function(){function e(e){var r=this;Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.vaBlur=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"vaBlur",7);this.vaChange=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"vaChange",7);this.componentLibraryAnalytics=Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"component-library-analytics",7);this.ariaDescribedby="";this.value="";this.handleChange=function(e){var t=e.target;r.value=t.value;r.vaChange.emit({value:r.value})};this.handleBlur=function(){r.vaBlur.emit();if(r.enableAnalytics){r.componentLibraryAnalytics.emit({componentName:"va-text-input",action:"blur",details:{label:r.label,value:r.value}})}}}e.prototype.render=function(){var e=(this.ariaDescribedby+" "+(this.error?"error-message":"")).trim()||null;return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,this.label&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label",{htmlFor:"inputField"},this.label," ",this.required&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"required"},"(*Required)")),this.error&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{id:"error-message"},this.error),Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input",{id:"inputField",type:"text",value:this.value,onInput:this.handleChange,onBlur:this.handleBlur,"aria-describedby":e,placeholder:this.placeholder,maxlength:this.maxlength}),this.maxlength&&this.value.length>=this.maxlength&&Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["h"])("small",null,"(Max. ",this.maxlength," characters)"))};Object.defineProperty(e.prototype,"el",{get:function(){return Object(_index_5b03e586_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this)},enumerable:false,configurable:true});return e}();VaTextInput.style=vaTextInputCss;

/***/ })

};;
//# sourceMappingURL=11.render-page.js.map