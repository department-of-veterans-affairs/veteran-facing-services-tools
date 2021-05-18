exports.ids = [2];
exports.modules = {

/***/ "./node_modules/web-components/dist/esm-es5/shadow-css-23c95dd7.js":
/*!*************************************************************************!*\
  !*** ./node_modules/web-components/dist/esm-es5/shadow-css-23c95dd7.js ***!
  \*************************************************************************/
/*! exports provided: scopeCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scopeCss", function() { return scopeCss; });
var __spreadArrays=undefined&&undefined.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var o=Array(e),n=0,r=0;r<t;r++)for(var s=arguments[r],l=0,a=s.length;l<a;l++,n++)o[n]=s[l];return o};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */var safeSelector=function(e){var r=[];var t=0;var o;e=e.replace(/(\[[^\]]*\])/g,(function(e,o){var n="__ph-"+t+"__";r.push(o);t++;return n}));o=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(e,o,n){var s="__ph-"+t+"__";r.push(n);t++;return o+s}));var n={content:o,placeholders:r};return n};var restoreSafeSelector=function(e,r){return r.replace(/__ph-(\d+)__/g,(function(r,t){return e[+t]}))};var _polyfillHost="-shadowcsshost";var _polyfillSlotted="-shadowcssslotted";var _polyfillHostContext="-shadowcsscontext";var _parenSuffix=")(?:\\(("+"(?:\\([^)(]*\\)|[^)(]*)+?"+")\\))?([^,{]*)";var _cssColonHostRe=new RegExp("("+_polyfillHost+_parenSuffix,"gim");var _cssColonHostContextRe=new RegExp("("+_polyfillHostContext+_parenSuffix,"gim");var _cssColonSlottedRe=new RegExp("("+_polyfillSlotted+_parenSuffix,"gim");var _polyfillHostNoCombinator=_polyfillHost+"-no-combinator";var _polyfillHostNoCombinatorRe=/-shadowcsshost-no-combinator([^\s]*)/;var _shadowDOMSelectorsRe=[/::shadow/g,/::content/g];var _selectorReSuffix="([>\\s~+[.,{:][\\s\\S]*)?$";var _polyfillHostRe=/-shadowcsshost/gim;var _colonHostRe=/:host/gim;var _colonSlottedRe=/::slotted/gim;var _colonHostContextRe=/:host-context/gim;var _commentRe=/\/\*\s*[\s\S]*?\*\//g;var stripComments=function(e){return e.replace(_commentRe,"")};var _commentWithHashRe=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g;var extractCommentsWithHash=function(e){return e.match(_commentWithHashRe)||[]};var _ruleRe=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g;var _curlyRe=/([{}])/g;var OPEN_CURLY="{";var CLOSE_CURLY="}";var BLOCK_PLACEHOLDER="%BLOCK%";var processRules=function(e,r){var t=escapeBlocks(e);var o=0;return t.escapedString.replace(_ruleRe,(function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}var s=e[2];var l="";var a=e[4];var c="";if(a&&a.startsWith("{"+BLOCK_PLACEHOLDER)){l=t.blocks[o++];a=a.substring(BLOCK_PLACEHOLDER.length+1);c="{"}var i={selector:s,content:l};var v=r(i);return""+e[1]+v.selector+e[3]+c+v.content+a}))};var escapeBlocks=function(e){var r=e.split(_curlyRe);var t=[];var o=[];var n=0;var s=[];for(var l=0;l<r.length;l++){var a=r[l];if(a===CLOSE_CURLY){n--}if(n>0){s.push(a)}else{if(s.length>0){o.push(s.join(""));t.push(BLOCK_PLACEHOLDER);s=[]}t.push(a)}if(a===OPEN_CURLY){n++}}if(s.length>0){o.push(s.join(""));t.push(BLOCK_PLACEHOLDER)}var c={escapedString:t.join(""),blocks:o};return c};var insertPolyfillHostInCssText=function(e){e=e.replace(_colonHostContextRe,_polyfillHostContext).replace(_colonHostRe,_polyfillHost).replace(_colonSlottedRe,_polyfillSlotted);return e};var convertColonRule=function(e,r,t){return e.replace(r,(function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}if(e[2]){var o=e[2].split(",");var n=[];for(var s=0;s<o.length;s++){var l=o[s].trim();if(!l)break;n.push(t(_polyfillHostNoCombinator,l,e[3]))}return n.join(",")}else{return _polyfillHostNoCombinator+e[3]}}))};var colonHostPartReplacer=function(e,r,t){return e+r.replace(_polyfillHost,"")+t};var convertColonHost=function(e){return convertColonRule(e,_cssColonHostRe,colonHostPartReplacer)};var colonHostContextPartReplacer=function(e,r,t){if(r.indexOf(_polyfillHost)>-1){return colonHostPartReplacer(e,r,t)}else{return e+r+t+", "+r+" "+e+t}};var convertColonSlotted=function(e,r){var t="."+r+" > ";var o=[];e=e.replace(_cssColonSlottedRe,(function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}if(e[2]){var n=e[2].trim();var s=e[3];var l=t+n+s;var a="";for(var c=e[4]-1;c>=0;c--){var i=e[5][c];if(i==="}"||i===","){break}a=i+a}var v=a+l;var p=""+a.trimRight()+l.trim();if(v.trim()!==p.trim()){var f=p+", "+v;o.push({orgSelector:v,updatedSelector:f})}return l}else{return _polyfillHostNoCombinator+e[3]}}));return{selectors:o,cssText:e}};var convertColonHostContext=function(e){return convertColonRule(e,_cssColonHostContextRe,colonHostContextPartReplacer)};var convertShadowDOMSelectors=function(e){return _shadowDOMSelectorsRe.reduce((function(e,r){return e.replace(r," ")}),e)};var makeScopeMatcher=function(e){var r=/\[/g;var t=/\]/g;e=e.replace(r,"\\[").replace(t,"\\]");return new RegExp("^("+e+")"+_selectorReSuffix,"m")};var selectorNeedsScoping=function(e,r){var t=makeScopeMatcher(r);return!t.test(e)};var applySimpleSelectorScope=function(e,r,t){_polyfillHostRe.lastIndex=0;if(_polyfillHostRe.test(e)){var o="."+t;return e.replace(_polyfillHostNoCombinatorRe,(function(e,r){return r.replace(/([^:]*)(:*)(.*)/,(function(e,r,t,n){return r+o+t+n}))})).replace(_polyfillHostRe,o+" ")}return r+" "+e};var applyStrictSelectorScope=function(e,r,t){var o=/\[is=([^\]]*)\]/g;r=r.replace(o,(function(e){var r=[];for(var t=1;t<arguments.length;t++){r[t-1]=arguments[t]}return r[0]}));var n="."+r;var s=function(e){var o=e.trim();if(!o){return""}if(e.indexOf(_polyfillHostNoCombinator)>-1){o=applySimpleSelectorScope(e,r,t)}else{var s=e.replace(_polyfillHostRe,"");if(s.length>0){var l=s.match(/([^:]*)(:*)(.*)/);if(l){o=l[1]+n+l[2]+l[3]}}}return o};var l=safeSelector(e);e=l.content;var a="";var c=0;var i;var v=/( |>|\+|~(?!=))\s*/g;var p=e.indexOf(_polyfillHostNoCombinator)>-1;var f=!p;while((i=v.exec(e))!==null){var u=i[1];var _=e.slice(c,i.index).trim();f=f||_.indexOf(_polyfillHostNoCombinator)>-1;var h=f?s(_):_;a+=h+" "+u+" ";c=v.lastIndex}var m=e.substring(c);f=f||m.indexOf(_polyfillHostNoCombinator)>-1;a+=f?s(m):m;return restoreSafeSelector(l.placeholders,a)};var scopeSelector=function(e,r,t,o){return e.split(",").map((function(e){if(o&&e.indexOf("."+o)>-1){return e.trim()}if(selectorNeedsScoping(e,r)){return applyStrictSelectorScope(e,r,t).trim()}else{return e.trim()}})).join(", ")};var scopeSelectors=function(e,r,t,o,n){return processRules(e,(function(e){var n=e.selector;var s=e.content;if(e.selector[0]!=="@"){n=scopeSelector(e.selector,r,t,o)}else if(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")){s=scopeSelectors(e.content,r,t,o)}var l={selector:n.replace(/\s{2,}/g," ").trim(),content:s};return l}))};var scopeCssText=function(e,r,t,o,n){e=insertPolyfillHostInCssText(e);e=convertColonHost(e);e=convertColonHostContext(e);var s=convertColonSlotted(e,o);e=s.cssText;e=convertShadowDOMSelectors(e);if(r){e=scopeSelectors(e,r,t,o)}e=e.replace(/-shadowcsshost-no-combinator/g,"."+t);e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 ");return{cssText:e.trim(),slottedSelectors:s.selectors}};var scopeCss=function(e,r,t){var o=r+"-h";var n=r+"-s";var s=extractCommentsWithHash(e);e=stripComments(e);var l=[];if(t){var a=function(e){var r="/*!@___"+l.length+"___*/";var t="/*!@"+e.selector+"*/";l.push({placeholder:r,comment:t});e.selector=r+e.selector;return e};e=processRules(e,(function(e){if(e.selector[0]!=="@"){return a(e)}else if(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")){e.content=processRules(e.content,a);return e}return e}))}var c=scopeCssText(e,r,o,n);e=__spreadArrays([c.cssText],s).join("\n");if(t){l.forEach((function(r){var t=r.placeholder,o=r.comment;e=e.replace(t,o)}))}c.slottedSelectors.forEach((function(r){e=e.replace(r.orgSelector,r.updatedSelector)}));return e};

/***/ })

};;
//# sourceMappingURL=2.render-page.js.map