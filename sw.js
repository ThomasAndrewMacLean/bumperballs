if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,i)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"t7SJYsCJeW0KisL77Aehk"},{url:"/_next/static/chunks/862db20188376145121738d7b9653b36a895ad73.14408f8fca4864ded379.js",revision:"fbd7bb842fb2ad3f5015b2a5d97c6fb7"},{url:"/_next/static/chunks/c5d7acea0aa6eefdb95fee08772c206afa8c75f0.6a623ea602be9cdcbf8d.js",revision:"6502e3574c40cb7de95dc58513d1d5fd"},{url:"/_next/static/chunks/commons.0e6377a04c1a082135bd.js",revision:"462d49842664059b1fc2cb7f9d8feed8"},{url:"/_next/static/chunks/framework.98c1b221acb34aa9927b.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/9039ef53d8380c6e6cdb.css",revision:"c2338e42223e9c2ea5b40a8748d6c35f"},{url:"/_next/static/runtime/main-757e45a56d27d7692560.js",revision:"5d4d8bfcace7169104db0ce2351dab69"},{url:"/_next/static/runtime/polyfills-76608372eed6b2326e03.js",revision:"b49da79761d00dd4a626fe47c02708ce"},{url:"/_next/static/runtime/webpack-91b117697e716c22a78b.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/_next/static/t7SJYsCJeW0KisL77Aehk/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/t7SJYsCJeW0KisL77Aehk/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/t7SJYsCJeW0KisL77Aehk/pages/_app.js",revision:"7ce82fec0604a3a876f2206b9b329a3b"},{url:"/_next/static/t7SJYsCJeW0KisL77Aehk/pages/_error.js",revision:"9422e411109d8839351c0bec97fe3493"},{url:"/_next/static/t7SJYsCJeW0KisL77Aehk/pages/index.js",revision:"49c711efd50c6a665acd1e13a5872487"},{url:"/android-chrome-192x192.png",revision:"c87b3ef459c3d9e2ca89a7ce214ea64d"},{url:"/android-chrome-512x512.png",revision:"efa98c7406efc5721bade2c73ffb7ec5"},{url:"/apple-touch-icon.png",revision:"875608d0dc40d89e9b48b94e82489103"},{url:"/favicon-16x16.png",revision:"c86804fcb5629d4b5d5e8099439d9b7f"},{url:"/favicon-32x32.png",revision:"0cbcefe245f1bdfed30f1b48f8351ce6"},{url:"/favicon.ico",revision:"412192267449ea67eebabd3e62acfe51"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
