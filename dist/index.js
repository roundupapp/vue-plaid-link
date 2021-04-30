!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.PlaidLink=n():t.PlaidLink=n()}(window,function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="dist/",e(e.s=4)}([function(t,n,e){"use strict";e.r(n);var i=e(1),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n.default=o.a},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"PlaidLink",props:{plaidUrl:{type:String,default:"https://cdn.plaid.com/link/v2/stable/link-initialize.js"},env:{type:String,default:"sandbox"},institution:String,selectAccount:Boolean,token:String,product:{type:[String,Array],default:function(){return["transactions"]}},language:String,countryCodes:Array,isWebView:Boolean,clientName:String,publicKey:String,webhook:String,onLoad:Function,onSuccess:Function,onExit:Function,onEvent:Function},created:function(){this.loadScript(this.plaidUrl).then(this.onScriptLoaded).catch(this.onScriptError)},beforeDestroy:function(){window.linkHandler&&window.linkHandler.exit()},methods:{onScriptError:function(t){console.error("There was an issue loading the link-initialize.js script")},onScriptLoaded:function(){window.linkHandler=window.Plaid.create({clientName:this.clientName,env:this.env,key:this.publicKey,onExit:this.onExit,onEvent:this.onEvent,onSuccess:this.onSuccess,product:this.product,selectAccount:this.selectAccount,token:this.token,webhook:this.webhook})},handleOnClick:function(){var t=this.institution||null;window.linkHandler&&window.linkHandler.open(t)},loadScript:function(t){return new Promise(function(n,e){if(document.querySelector('script[src="'+t+'"]'))n();else{var i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.addEventListener("load",n),i.addEventListener("error",e),i.addEventListener("abort",e),document.head.appendChild(i)}})}},watch:{$props:{handler:function(){this.onScriptLoaded()},deep:!0}}}},function(t,n,e){"use strict";var i=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"plaid-link-wrapper"},[this._t("button",[n("button",{staticClass:"plaid-link-button",on:{click:this.handleOnClick}},[this._t("default")],2)],{onClick:this.handleOnClick})],2)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},function(t,n,e){"use strict";function i(t,n,e,i,o,r,c,u){var a,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),i&&(s.functional=!0),r&&(s._scopeId="data-v-"+r),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=a):o&&(a=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var l=s.render;s.render=function(t,n){return a.call(n),l(t,n)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,a):[a]}return{exports:t,options:s}}e.d(n,"a",function(){return i})},function(t,n,e){"use strict";var i,o=e(5),r=(i=o)&&i.__esModule?i:{default:i};t.exports=r.default},function(t,n,e){"use strict";e.r(n);var i=e(2),o=e(0);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);var c=e(3),u=Object(c.a)(o.default,i.a,i.b,!1,null,null,null);n.default=u.exports}])});