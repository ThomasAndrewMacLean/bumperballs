if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"4_iEdBwutQF4haTSM9PPy"},{url:"/_next/static/4_iEdBwutQF4haTSM9PPy/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/4_iEdBwutQF4haTSM9PPy/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/4_iEdBwutQF4haTSM9PPy/pages/_app.js",revision:"bee44b8e9aa601ab879c33491a622716"},{url:"/_next/static/4_iEdBwutQF4haTSM9PPy/pages/_error.js",revision:"95225d148d9c8d9e14f1401d4fee3804"},{url:"/_next/static/4_iEdBwutQF4haTSM9PPy/pages/index.js",revision:"1267300d12c3e3354f3417df07afbe3a"},{url:"/_next/static/chunks/17e325addf74fda8dd6f7efa5510bb95710a9f5a.7a158e3448b70a3228b1.js",revision:"62182e4374697261efb38f44fadf3d20"},{url:"/_next/static/chunks/commons.2a083d3bfa2915a91d0e.js",revision:"bea9c232ab7f5b2123a3bdf92030d397"},{url:"/_next/static/chunks/framework.e84fa698c7ee940652bd.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/a7f52e1041a58f613549.css",revision:"42d65ff7e84f5138cfdd1c0e29075c79"},{url:"/_next/static/runtime/main-c744fc4993311e1f45f8.js",revision:"99e195a17c0a47edd80a49f401b15c68"},{url:"/_next/static/runtime/polyfills-f1a72475392243fcf9b5.js",revision:"e472d47f8ab63cc45bae6a9ea4eec0c5"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/android-chrome-192x192.png",revision:"c87b3ef459c3d9e2ca89a7ce214ea64d"},{url:"/android-chrome-512x512.png",revision:"efa98c7406efc5721bade2c73ffb7ec5"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/icon-facebook.svg",revision:"92d5f71d16314943ef8a2fa2c5f4c8bb"},{url:"/icon-instagram.svg",revision:"76bfd699a7a877c1aa83827ae35ba8ae"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
