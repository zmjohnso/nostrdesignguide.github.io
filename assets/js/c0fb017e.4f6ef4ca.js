"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[5442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="Zaps",s={unversionedId:"how-to/zaps",id:"how-to/zaps",title:"Zaps",description:"What are they?",source:"@site/docs/how-to/zaps.md",sourceDirName:"how-to",slug:"/how-to/zaps",permalink:"/docs/how-to/zaps",draft:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/how-to/zaps.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Impostor Prevention",permalink:"/docs/how-to/impostor-prevention"},next:{title:"Private Key Safeguarding",permalink:"/docs/how-to/private-key-safeguarding"}},l={},p=[{value:"What are they?",id:"what-are-they",level:2},{value:"How should clients explain zaps?",id:"how-should-clients-explain-zaps",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zaps"},"Zaps"),(0,o.kt)("h2",{id:"what-are-they"},"What are they?"),(0,o.kt)("p",null,"Zaps are lightning network payments over nostr. They are not a core part of nostr, but were popular enough among users that were quickly integrated into the daily nostr experience."),(0,o.kt)("p",null,"As a nostr designer or developer you always have the option of which NIPs to implement and you do not have to add zaps to your client. However, there are some great benefits of integrating zaps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Zaps are fun!")," It feels awesome seeing some actual value from your content or media!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"There can be an incentive to come back")," to the platform (which can help built habits and increase the likelihood of new users sticking around)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Zaps are a gentle introduction")," to bitcoin and lightning (if you care about such things).")),(0,o.kt)("h2",{id:"how-should-clients-explain-zaps"},"How should clients explain zaps?"),(0,o.kt)("p",null,"Currently, clients are not doing much in terms of explaining zaps or wallets to users. This may be ok with bitcoin audiences who are already familiar with these things, but other users may need a better introduction to the concept. Here are some places to consider educating the user:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Via a help center")," that explains various concepts. Clients could have a dedicated learning resource that dives into a bit of detail behind zaps, how they work and how to get started. They could also recommend some simple wallets to get started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"In zap settings.")," Clients could add a simple explanation about zaps, what they are and how to get started. "),(0,o.kt)("li",{parentName:"ul"},"In-app guided onboarding - developers could implement")))}d.isMDXComponent=!0}}]);