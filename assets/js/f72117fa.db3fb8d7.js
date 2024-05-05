"use strict";(self.webpackChunkopbnb_docs=self.webpackChunkopbnb_docs||[]).push([[3428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},14148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Wallet Configuration",description:"Configure your wallet to work with opBNB",icon:"code",index:"yes",dir:{order:4}},i=void 0,l={unversionedId:"build-on-opbnb/wallet-configuration",id:"build-on-opbnb/wallet-configuration",title:"Wallet Configuration",description:"Configure your wallet to work with opBNB",source:"@site/docs/build-on-opbnb/wallet-configuration.md",sourceDirName:"build-on-opbnb",slug:"/build-on-opbnb/wallet-configuration",permalink:"/opbnb-docs/docs/build-on-opbnb/wallet-configuration",draft:!1,editUrl:"https://github.com/bnb-chain/opbnb-docs/blob/main/docs/build-on-opbnb/wallet-configuration.md",tags:[],version:"current",frontMatter:{title:"Wallet Configuration",description:"Configure your wallet to work with opBNB",icon:"code",index:"yes",dir:{order:4}},sidebar:"guideSidebar",previous:{title:"Developer Cheat Sheet",permalink:"/opbnb-docs/docs/build-on-opbnb/developer-cheat-sheet"},next:{title:"Set Gas Price",permalink:"/opbnb-docs/docs/build-on-opbnb/set-gas-price"}},p={},s=[{value:"References - How to configure Trustwallet or Metamask",id:"references---how-to-configure-trustwallet-or-metamask",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is a living document and is susceptible to changes.")),(0,r.kt)("h1",{id:"wallet-configuration"},"Wallet configuration"),(0,r.kt)("p",null,"You can use any Ethereum or BSC wallet with opBNB. For instance, I will show you how to set up Metamask and Trustwallet for opBNB."),(0,r.kt)("p",null,"To configure your wallet to work with opBNB, you will need to add both the BNB smart chain(Layer 1) and the opBNB network(Layer 2). Follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the BNB smart chain to your wallet. This is the Layer 1 blockchain that opBNB is built on top of."),(0,r.kt)("h4",{parentName:"li",id:"testnet"},"Testnet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: BSC Testnet"),(0,r.kt)("li",{parentName:"ul"},"RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://data-seed-prebsc-1-s3.bnbchain.org:8545/"},"https://data-seed-prebsc-1-s1.bnbchain.org:8545")),(0,r.kt)("li",{parentName:"ul"},"ChainID: 97"),(0,r.kt)("li",{parentName:"ul"},"Symbol: tBNB"),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/"))),(0,r.kt)("h4",{parentName:"li",id:"mainnet"},"Mainnet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: BSC Mainnet"),(0,r.kt)("li",{parentName:"ul"},"RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://bsc.nodereal.io"},"https://bsc.nodereal.io")),(0,r.kt)("li",{parentName:"ul"},"ChainID: 56"),(0,r.kt)("li",{parentName:"ul"},"Symbol: BNB"),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://bscscan.com/"},"https://bscscan.com/")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the opBNB network to your wallet."),(0,r.kt)("h4",{parentName:"li",id:"testnet-1"},"Testnet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: opBNB Testnet"),(0,r.kt)("li",{parentName:"ul"},"RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://opbnb-testnet-rpc.bnbchain.org"},"https://opbnb-testnet-rpc.bnbchain.org")),(0,r.kt)("li",{parentName:"ul"},"ChainID: 5611"),(0,r.kt)("li",{parentName:"ul"},"Symbol: tBNB"),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"http://testnet.opbnbscan.com/"},"http://testnet.opbnbscan.com/"))),(0,r.kt)("h4",{parentName:"li",id:"mainnet-1"},"Mainnet"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Network Name: opBNB Mainnet"),(0,r.kt)("li",{parentName:"ul"},"RPC URL: ",(0,r.kt)("a",{parentName:"li",href:"https://opbnb-mainnet-rpc.bnbchain.org"},"https://opbnb-mainnet-rpc.bnbchain.org ")),(0,r.kt)("li",{parentName:"ul"},"ChainID: 204"),(0,r.kt)("li",{parentName:"ul"},"Symbol: BNB"),(0,r.kt)("li",{parentName:"ul"},"Explorer: ",(0,r.kt)("a",{parentName:"li",href:"http://opbnbscan.com/"},"http://opbnbscan.com/"))))),(0,r.kt)("h2",{id:"references---how-to-configure-trustwallet-or-metamask"},"References - How to configure Trustwallet or Metamask"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph"},"Trustwallet")),(0,r.kt)("p",null,"After you install the Trustwallet in your browser, you can go to settings->network."),(0,r.kt)("img",{src:n(30101).Z,alt:"opBNB-bridge",style:{zoom:"48%"}}),(0,r.kt)("p",null,"Select add custom network and enter the network information I mentioned above."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"},"Metamask"))),(0,r.kt)("p",null,"After you install the metamask in your browser, you can go to settings -> networks -> add network page."),(0,r.kt)("p",null,"Select add manual network and enter the network information."),(0,r.kt)("img",{src:n(30146).Z,alt:"opBNB-bridge",style:{zoom:"48%"}}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Depending on your location and preference, you can choose from a variety of RPC endpoints for BSC and opBNB. For more information about the endpoints and their features, please refer to the network information document that we have prepared for you. To ensure the best performance and user experience, you can test the latency of each endpoint before you configure it with your wallet.")))}u.isMDXComponent=!0},30146:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-bsc-metamask-053c0819ca959d102e95ea17118443eb.png"},30101:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-bsc-trustwallet-536ff97e903d13a8296ebca41cf5cfb5.png"}}]);