exports.ids = [3];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/va-accordion-item.entry.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/va-accordion-item.entry.js ***!
  \*****************************************************************************/
/*! exports provided: va_accordion_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "va_accordion_item", function() { return VaAccordionItem; });
/* harmony import */ var _index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-cd20e666.js */ "./node_modules/web-components/dist/esm-es5/index-cd20e666.js");
var vaAccordionItemCss="button:not([disabled]):focus,a:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}:host{display:block;margin-bottom:0.5rem}:host(:not([open])) #content,:host([open='false']) #content{display:none}h1,h2,h3,h4,h5,h6{margin:0}button{cursor:pointer;width:100%;border:0;text-align:left;font-family:var(--font-source-sans);font-size:1.6rem;font-weight:700;line-height:1;padding:1.5rem 5.5rem 1.5rem 2rem;background-color:var(--color-gray-lightest);background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2264%22 height%3D%2216%22 viewBox%3D%220 0 64 16%22%3E%3Ctitle%3Eminus%3C%2Ftitle%3E%3Cpath fill%3D%22%23171717%22 fill-rule%3D%22evenodd%22 d%3D%22M62.726 1.167C61.878.389 60.846 0 59.636 0H4.362C3.151 0 2.12.388 1.272 1.166.422 1.944 0 2.888 0 4v8c0 1.112.424 2.056 1.272 2.833.849.778 1.88 1.167 3.091 1.167h55.272c1.211 0 2.242-.388 3.091-1.167.847-.777 1.272-1.72 1.272-2.832V4c0-1.111-.423-2.056-1.272-2.833z%22%2F%3E%3C%2Fsvg%3E\");background-position:right 2rem center;background-repeat:no-repeat;background-size:1.5rem;display:block;color:var(--color-base)}button:hover{background-color:var(--color-gray-lighter);color:var(--color-base)}#content{background-color:var(--color-white);overflow:auto;padding:1.5rem 2rem;border-left:var(--item-border);border-right:var(--item-border);border-bottom:var(--item-border)}button[aria-expanded='false']{background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2264%22 height%3D%2264%22 viewBox%3D%220 0 64 64%22%3E%3Ctitle%3Eplus%3C%2Ftitle%3E%3Cpath fill%3D%22%23171717%22 fill-rule%3D%22evenodd%22 d%3D%22M36 0c1.111 0 2.056.425 2.833 1.272.778.849 1.166 1.88 1.166 3.091V24h19.636c1.125 0 2.095.335 2.907 1.006l.184.16c.849.778 1.272 1.723 1.272 2.834v8c0 1.112-.425 2.057-1.272 2.834-.849.778-1.88 1.166-3.091 1.166H39.999v19.636c0 1.125-.335 2.094-1.006 2.906l-.16.185c-.778.848-1.722 1.272-2.833 1.272h-8.001c-1.111 0-2.056-.424-2.834-1.272-.778-.849-1.166-1.88-1.166-3.09V39.998H4.363c-1.125 0-2.094-.335-2.906-1.006l-.185-.16C.424 38.054 0 37.11 0 36v-8.001c0-1.111.424-2.056 1.272-2.834C2.121 24.387 3.152 24 4.363 24H24V4.363c0-1.125.335-2.094 1.006-2.906l.16-.185C25.944.423 26.889 0 28 0z%22%2F%3E%3C%2Fsvg%3E\")}p{font-weight:400;line-height:26px;margin:0}";var VaAccordionItem=function(){function e(e){Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this,e);this.accordionItemToggled=Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this,"accordionItemToggled",7);this.subheader=null;this.open=false;this.level=2}e.prototype.toggleOpen=function(e){this.accordionItemToggled.emit(e)};e.prototype.render=function(){var e=this;var o=function(){return Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h"+e.level,null,Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{onClick:e.toggleOpen.bind(e),"aria-expanded":e.open?"true":"false","aria-controls":"content"},e.header,e.subheader?Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p",null,e.subheader):false))};return Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["H"],null,Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])(o,null),Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{id:"content"},Object(_index_cd20e666_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null)))};return e}();VaAccordionItem.style=vaAccordionItemCss;

/***/ })

};;
//# sourceMappingURL=3.render-page.js.map