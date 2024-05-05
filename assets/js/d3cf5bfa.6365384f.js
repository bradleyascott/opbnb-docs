"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[1517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const i={title:"Set Gas Price",description:"How to set the base price and priority price for opBNB transactions",icon:"code",index:"yes",dir:{order:2}},a=void 0,s={unversionedId:"build-on-opbnb/set-gas-price",id:"build-on-opbnb/set-gas-price",title:"Set Gas Price",description:"How to set the base price and priority price for opBNB transactions",source:"@site/docs/build-on-opbnb/set-gas-price.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/set-gas-price",permalink:"/opbnb-docs/docs/build-on-opbnb/set-gas-price",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/set-gas-price.md",tags:[],version:"current",frontMatter:{title:"Set Gas Price",description:"How to set the base price and priority price for opBNB transactions",icon:"code",index:"yes",dir:{order:2}},sidebar:"guideSidebar",previous:{title:"Wallet Configuration",permalink:"/opbnb-docs/docs/build-on-opbnb/wallet-configuration"},next:{title:"Network Information",permalink:"/opbnb-docs/docs/build-on-opbnb/opbnb-network-info"}},c={},p=[],l={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes.")),(0,r.kt)("p",null,"This document shows you how to set the priority price and base price for opBNB transactions in wallet. These prices determine how much you are willing to pay for your transaction to be included in the next block (Priority Gas Price) and how much you are willing to pay for the gas used by your transaction. Setting these prices correctly can help you save money and avoid delays."),(0,r.kt)("p",null,"To set the priority price and base price, follow these steps:"),(0,r.kt)("p",null,"Metamask:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your metamask wallet and click on the opBNB network at the top right corner.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the send button and enter the recipient address and the amount of opBNB you want to send.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Before you confirm your transaction, click on the ",(0,r.kt)("strong",{parentName:"p"},"advanced->edit")," button next to the gas fee section."),(0,r.kt)("img",{src:n(19165).Z,alt:"opBNB-bridge",style:{zoom:"48%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see two sliders: one for the ",(0,r.kt)("strong",{parentName:"p"},"Max base fee(Gwei)")," price and one for the ",(0,r.kt)("strong",{parentName:"p"},"Priority Fee(Gwei)"),". The priority price is the amount of opBNB you are willing to pay per unit of gas for your transaction to be included in the next block. The base price is the amount of opBNB you are willing to pay per unit of gas for the gas used by your transaction. The total gas fee is the sum of these two prices multiplied by the gas consumed. The base fee for opBNB transactions is dynamic and depends on the demand for block space. The minimum possible base fee is 0.000000008 gwei. The priority fee, which is paid to the sequencer who includes the transaction in a block, can also be as low as 0.000000001 gwei. However, these fees may vary depending on the network congestion and the urgency of the transaction."),(0,r.kt)("img",{src:n(47007).Z,alt:"opBNB-bridge",style:{zoom:"48%"}})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can adjust the sliders according to your preferences. The higher the priority price, the faster your transaction will be confirmed, but the more expensive it will be. The lower the base price, the cheaper your transaction will be, but the more likely it will fail if the gas limit is too low.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you are satisfied with your settings, click on save and then confirm your transaction."))))}d.isMDXComponent=!0},47007:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/advanced-setting-979dc114cc0c4cc287ccfaf77b506c6b.png"},19165:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gas-price-setting-f7013ddb3e2cdfc088a7b4c6f1041e69.png"}}]);