(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{attr:function(e,r,t){"use strict";t.r(r),t.d(r,"va_text_input",(function(){return i}));var a=t("zc2C"),i=function(){function e(e){var r=this;Object(a.i)(this,e),this.vaBlur=Object(a.e)(this,"vaBlur",7),this.vaChange=Object(a.e)(this,"vaChange",7),this.componentLibraryAnalytics=Object(a.e)(this,"component-library-analytics",7),this.ariaDescribedby="",this.value="",this.handleChange=function(e){var t=e.target;r.value=t.value,r.vaChange.emit({value:r.value})},this.handleBlur=function(){r.vaBlur.emit(),r.enableAnalytics&&r.componentLibraryAnalytics.emit({componentName:"va-text-input",action:"blur",details:{label:r.label,value:r.value}})}}return e.prototype.render=function(){var e=(this.ariaDescribedby+" "+(this.error?"error-message":"")).trim()||null;return Object(a.g)(a.b,null,this.label&&Object(a.g)("label",{htmlFor:"inputField"},this.label," ",this.required&&Object(a.g)("span",{class:"required"},"(*Required)")),this.error&&Object(a.g)("span",{id:"error-message"},this.error),Object(a.g)("input",{id:"inputField",type:"text",value:this.value,onInput:this.handleChange,onBlur:this.handleBlur,"aria-describedby":e,placeholder:this.placeholder,maxlength:this.maxlength}),this.maxlength&&this.value.length>=this.maxlength&&Object(a.g)("small",null,"(Max. ",this.maxlength," characters)"))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(a.f)(this)},enumerable:!1,configurable:!0}),e}();i.style=":host{display:block;font-family:var(--font-source-sans);margin-top:3rem}label{display:block;max-width:46rem}span.required{color:var(--color-secondary-dark)}input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:.1rem solid var(--color-gray);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--color-base);display:block;font-size:1.6rem;height:4.2rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}input:not([disabled]):focus{outline:2px solid var(--color-gold-light);outline-offset:2px}#error-message{color:var(--color-secondary-dark);display:block}:host([error]){border-left:4px solid var(--color-secondary-dark);margin-top:3rem;padding-bottom:.8rem;padding-left:1.5rem;padding-top:.8rem;position:relative;right:1.9rem}:host([error]) label,:host([error]) span{font-weight:700}:host([error]) input{border:3px solid var(--color-secondary-dark)}"}}]);
//# sourceMappingURL=94-4c5e4bea362b5ad270e5.js.map