import*as e from"./edge-error-reporting.js";var t,i,n,r,o={266:()=>{function e(e,t){"hidden"===document.visibilityState?window.addEventListener("visibilitychange",(()=>{chrome.embeddedSearch.newTabPage.logEventWithTimestamp(e,performance.now(),!0)}),{once:!0}):chrome.embeddedSearch.newTabPage.logEventWithTimestamp(e,t,!1)}const t=new PerformanceObserver((t=>{for(const i of t.getEntries())"quicklinks-paint"===i.name?(e(11,i.startTime),performance.measure("most-visited-ttvr","navigationStart",i.name)):"shell-interactive"===i.name?(e(62,i.startTime),performance.measure("shell-interactive","navigationStart",i.name)):"image-paint"==i.name&&"wallpaper"==i.identifier&&(e(60,i.startTime),performance.measure("background-image-ttvr",{start:"navigationStart",end:i.startTime}))}));t.observe({type:"mark",buffered:!0}),t.observe({type:"element",buffered:!0})},135:()=>{class e extends HTMLElement{constructor(){super(),this.ttvrLogged=!1,this.newTabPageApi=chrome.embeddedSearch.newTabPage,this.searchBoxApi=chrome.embeddedSearch.searchBox,this.fakebox=this.querySelector("#fakebox"),this.makeInteractive(),performance.mark("shell-interactive")}makeInteractive(){document.addEventListener("pointerdown",(e=>this.onDocumentPointerDown(e))),document.addEventListener("paste",(e=>this.onDocumentPaste(e))),document.addEventListener("keydown",(e=>this.onDocumentKeyDown(e))),chrome.ntpSettingsPrivate.onPrefsChanged.addListener((e=>this.onPrefsChanged(e)))}onDocumentPointerDown(e){this.searchBoxApi.isKeyCaptureEnabled&&this.searchBoxApi.stopCapturingKeyStrokes()}onDocumentPaste(e){e.preventDefault();const t=e.clipboardData?.getData("text/plain");this.searchBoxApi.startCapturingKeyStrokes(t)}onDocumentKeyDown(e){(e.ctrlKey||e.metaKey)&&"v"===e.key.toLowerCase()||e.ctrlKey||e.metaKey||e.altKey||1!==e.key.length||""===e.key.trim()||(e.preventDefault(),this.searchBoxApi.isKeyCaptureEnabled||this.searchBoxApi.startCapturingKeyStrokes(e.key))}onPrefsChanged(e){const t=e.find((e=>"ntp.layout_mode"===e.key));t&&document.body.setAttribute("data-layout",0===t.value?"focused":"inspirational")}}customElements.define("ntp-shell",e)}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return o[e](i,i.exports,a),i.exports}a.m=o,i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);a.r(r);var o={};t=t||[null,i({}),i([]),i(i)];for(var s=2&n&&e;"object"==typeof s&&!~t.indexOf(s);s=i(s))Object.getOwnPropertyNames(s).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,a.d(r,o),r},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[])),a.u=e=>({442:"rewards-partial",552:"settings-partial",853:"quicklinks-partial"}[e]+".js"),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n={826:0},r=e=>{var t,i,{ids:r,modules:o,runtime:s}=e,h=0;for(t in o)a.o(o,t)&&(a.m[t]=o[t]);for(s&&s(a);h<r.length;h++)i=r[h],a.o(n,i)&&n[i]&&n[i][0](),n[r[h]]=0},a.f.j=(e,t)=>{var i=a.o(n,e)?n[e]:void 0;if(0!==i)if(i)t.push(i[1]);else{var o=import("./"+a.u(e)).then(r,(t=>{throw 0!==n[e]&&(n[e]=void 0),t}));o=Promise.race([o,new Promise((t=>i=n[e]=[t]))]),t.push(i[1]=o)}},(()=>{const t=(i={hookErrorReporting:()=>e.hookErrorReporting},n={},a.d(n,i),n);var i,n;a(266),a(135);const r=window.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});function o(e){return new Promise(((t,i)=>{const n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&(200===this.status?t(r.createHTML(n.responseText)):i(this.status))},n.onerror=function(){i(n.statusText)},n.open("GET",e,!0),n.send()}))}class s extends HTMLElement{constructor(e=o){super(),e("./quicklinks-partial.html").then((e=>{this.innerHTML=e,this.importPartial()}))}importPartial(){a.e(853).then(a.bind(a,87))}}customElements.define("ntp-quicklinks",s);class h extends HTMLElement{constructor(){super(),this.initialized=!1,this.rect=new DOMRect,this.direction="ltr",this.addEventListener("toggle",(e=>this.onToggle(e)))}static get observedAttributes(){return["anchor","popover-endpoint"]}onToggle(e){"open"===e.newState?(this.anchor&&(this.rect=this.anchor.getBoundingClientRect(),this.direction=getComputedStyle(this).direction),this.load().then((()=>{this.onVisible(),this.initialized?this.dispatchEvent(new CustomEvent("shown")):this.initialized=!0}))):this.dispatchEvent(new CustomEvent("hidden"))}async load(){if(!this.initialized&&this.popoverEndpoint)return o(this.popoverEndpoint).then((e=>{this.innerHTML=e}))}attributeChangedCallback(e,t,i){"anchor"===e&&(this.anchor=document.querySelector(`#${i}`)),"popover-endpoint"===e&&(this.popoverEndpoint=i)}}customElements.define("ntp-waffle",class extends h{onVisible(){this.style.top=`${this.rect.bottom}px`,"ltr"===this.direction?this.style.left=`${this.rect.left}px`:this.style.right=window.innerWidth-this.rect.right+"px"}}),customElements.define("ntp-settings",class extends h{onVisible(){this.style.top=`${this.rect.bottom}px`,"ltr"===this.direction?this.style.right=window.innerWidth-this.rect.right+"px":this.style.left=`${this.rect.left}px`,this.initialized||this.importPartial()}importPartial(){a.e(552).then(a.bind(a,303))}}),customElements.define("ntp-rewards",class extends h{onVisible(){this.style.top=`${this.rect.bottom}px`,"ltr"===this.direction?this.style.right=window.innerWidth-this.rect.right+"px":this.style.left=`${this.rect.left}px`,this.initialized||this.importPartial()}importPartial(){a.e(442).then(a.t.bind(a,848,23))}}),(0,t.hookErrorReporting)("webui-new-tab")})();