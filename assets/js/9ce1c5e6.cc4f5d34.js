"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[1286],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=s,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:9},i="Zaps",o={unversionedId:"reference-designs/zaps",id:"reference-designs/zaps",title:"Zaps",description:"Zaps are the magic of nostr. With zaps, users can exchange value instantly. In this section we will highlight some common places for zaps and provide some example components of how to display zaps and their relevant views. If you have any unique design use cases for your specific client, please don't hestiate to reach out.",source:"@site/docs/reference-designs/zaps.md",sourceDirName:"reference-designs",slug:"/reference-designs/zaps",permalink:"/docs/reference-designs/zaps",draft:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/reference-designs/zaps.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/reference-designs/settings"},next:{title:"Threads",permalink:"/docs/reference-designs/threads"}},l={},c=[{value:"Music Player Bar",id:"music-player-bar",level:3},{value:"Streaming Modal Settings",id:"streaming-modal-settings",level:3},{value:"Soundtrack Slideout Info",id:"soundtrack-slideout-info",level:3},{value:"Music Playlists",id:"music-playlists",level:3},{value:"Mobile App Zap Type Selection",id:"mobile-app-zap-type-selection",level:3},{value:"Mobile Zap Amount Selection",id:"mobile-zap-amount-selection",level:3},{value:"Desktop Zap Modal (Unselected)",id:"desktop-zap-modal-unselected",level:3},{value:"Desktop Zap Modal (Selected)",id:"desktop-zap-modal-selected",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"zaps"},"Zaps"),(0,s.kt)("p",null,"Zaps are the magic of nostr. With zaps, users can exchange value instantly. In this section we will highlight some common places for zaps and provide some example components of how to display zaps and their relevant views. If you have any unique design use cases for your specific client, please don't hestiate to reach out."),(0,s.kt)("h3",{id:"music-player-bar"},"Music Player Bar"),(0,s.kt)("img",{src:a(8806).Z}),(0,s.kt)("figure",null,(0,s.kt)("figcaption",null,'Music player UI. Listeners can zap the artist right from the play overlay. Here we are also combining zaps with "streaming" which is basically a periodic automated zap. ')),(0,s.kt)("h3",{id:"streaming-modal-settings"},"Streaming Modal Settings"),(0,s.kt)("img",{src:a(3574).Z}),(0,s.kt)("figure",null,(0,s.kt)("figcaption",null,"Mock streaming configuration modal. Here, the user specifies the streaming per minute amount. In reality, this would probably be implemented with automated zaps that trigger every x number of seconds.  ")),(0,s.kt)("h3",{id:"soundtrack-slideout-info"},"Soundtrack Slideout Info"),(0,s.kt)("img",{src:a(9828).Z}),(0,s.kt)("figure",null,(0,s.kt)("figcaption",null,"Soundtrack details panel on desktop. This screen would slide out from the right when people click on track thumbnail. From here, people can zap the track or zap comments. ")),(0,s.kt)("h3",{id:"music-playlists"},"Music Playlists"),(0,s.kt)("img",{src:a(4354).Z}),(0,s.kt)("h3",{id:"mobile-app-zap-type-selection"},"Mobile App Zap Type Selection"),(0,s.kt)("img",{src:a(2748).Z}),(0,s.kt)("h3",{id:"mobile-zap-amount-selection"},"Mobile Zap Amount Selection"),(0,s.kt)("img",{src:a(8701).Z}),(0,s.kt)("h3",{id:"desktop-zap-modal-unselected"},"Desktop Zap Modal (Unselected)"),(0,s.kt)("p",null,"If user sets a default zap amount, the UI could reflect this by automatically selecing their default zap. This way they only need to click once to zap the user."),(0,s.kt)("img",{src:a(9744).Z}),(0,s.kt)("h3",{id:"desktop-zap-modal-selected"},"Desktop Zap Modal (Selected)"),(0,s.kt)("img",{src:a(4354).Z}),(0,s.kt)("img",{src:a(2748).Z}),(0,s.kt)("img",{src:a(8701).Z}),(0,s.kt)("img",{src:a(9744).Z}),(0,s.kt)("img",{src:a(5938).Z}))}u.isMDXComponent=!0},8806:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps1-237118992020720cfec818cd464f039f.png"},3574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps2-8246007e47e07b9daa9ac0c99207c014.png"},9828:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps3-90edb2f33b31c2570910f58102beebed.png"},4354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps4-1d3eebd1975ec4bd8a9b8691cb280af8.png"},2748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps5-59cd81cd90b7f927a46a8d7ddbbdd6b9.png"},8701:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps6-03a9c7736fe4a0af9113ff05f827b329.png"},9744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps7-3d897e9f992b1d11dbf4a287b105e895.png"},5938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/zaps8-57c7846fa9b71f5f62b800d1430a6206.png"}}]);