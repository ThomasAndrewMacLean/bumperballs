(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"1TCz":function(t,e,n){"use strict";n.r(e),n.d(e,"TranslationContext",(function(){return b})),n.d(e,"PictureContext",(function(){return y}));var r=n("o0o1"),o=n.n(r);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(s){return void n(s)}a.done?e(i):Promise.resolve(i).then(r,o)}var a=n("8Bbg"),i=n.n(a),s=n("q1tI"),p=n.n(s),f=n("LpSC"),l=n.n(f),h=(n("Y9py"),p.a.createElement);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=Object(s.createContext)([]),y=Object(s.createContext)([]);function P(t){var e=t.Component,n=t.pageProps,r=t.translations,o=t.pics;return h(y.Provider,{value:o},h(b.Provider,{value:r},h(e,n)))}P.getInitialProps=function(){var t,e=(t=o.a.mark((function t(e){var n,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,l()("https://europe-west1-thomasmaclean.cloudfunctions.net/getDataAirtable",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({airtableApp:"appK0ufjxyocbiTfV"})});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.next=9,i.a.getInitialProps(e);case 9:return u=t.sent,t.abrupt("return",d(d({},u),r));case 11:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var u=t.apply(e,n);function a(t){c(u,r,o,a,i,"next",t)}function i(t){c(u,r,o,a,i,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();e.default=P},"8Bbg":function(t,e,n){t.exports=n("B5Ud")},B5Ud:function(t,e,n){"use strict";var r=n("o0o1"),o=n("lwsE"),u=n("W8MJ"),c=n("7W2i"),a=n("a1gu"),i=n("Nsbk"),s=n("yXPU");function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var f=n("TqRt");e.__esModule=!0,e.Container=function(t){0;return t.children},e.createUrl=y,e.default=void 0;var l=f(n("q1tI")),h=n("g/15");function v(t){return d.apply(this,arguments)}function d(){return(d=s(r.mark((function t(e){var n,o,u;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.Component,o=e.ctx,t.next=3,(0,h.loadGetInitialProps)(n,o);case 3:return u=t.sent,t.abrupt("return",{pageProps:u});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.AppInitialProps=h.AppInitialProps;var b=function(t){c(n,t);var e=p(n);function n(){return o(this,n),e.apply(this,arguments)}return u(n,[{key:"componentDidCatch",value:function(t,e){throw t}},{key:"render",value:function(){var t=this.props,e=t.router,n=t.Component,r=t.pageProps,o=t.__N_SSG,u=t.__N_SSP;return(l.default.createElement(n,Object.assign({},r,o||u?{}:{url:y(e)})))}}]),n}(l.default.Component);function y(t){var e=t.pathname,n=t.asPath,r=t.query;return{get query(){return r},get pathname(){return e},get asPath(){return n},back:function(){t.back()},push:function(e,n){return t.push(e,n)},pushTo:function(e,n){var r=n?e:"",o=n||e;return t.push(r,o)},replace:function(e,n){return t.replace(e,n)},replaceTo:function(e,n){var r=n?e:"",o=n||e;return t.replace(r,o)}}}e.default=b,b.origGetInitialProps=v,b.getInitialProps=v},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},K64n:function(t,e,n){"use strict";e.Headers=self.Headers,e.Request=self.Request,e.Response=self.Response,e.fetch=self.fetch},LpSC:function(t,e,n){n("K64n"),t.exports=self.fetch.bind(self)},Y9py:function(t,e,n){}},[[1,0,2,1,3]]]);