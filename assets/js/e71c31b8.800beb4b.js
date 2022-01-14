"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[653],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1293:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),o=n(9960);var i=function(e){var t=e.cards;return r.createElement("div",{className:"container",style:{padding:0}},r.createElement("div",{className:"row is-multiline"},t.map((function(e,t){return r.createElement("div",{className:"col col--4",key:t},r.createElement(o.Z,{className:"card",to:e.route,style:{height:"100%"}},r.createElement("div",{className:"card__body"},r.createElement("h4",null,e.title),r.createElement("p",null,e.description))))}))))}},3624:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=n(1293),l=["components"],c={sidebar_position:1,slug:"/"},s="Introduction",u={unversionedId:"introduction/overview",id:"introduction/overview",title:"Introduction",description:"Sequence gives you a friendly, non-custodial wallet for your users with multi-chain support and seamless integration.",source:"@site/docs/introduction/1_overview.mdx",sourceDirName:"introduction",slug:"/",permalink:"/",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/introduction/1_overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Why Ethereum?",permalink:"/introduction/why_ethereum"}},p=[{title:"\ud83d\udc64 Social/email login"},{title:"\ud83c\udf10 Multi Network support"},{title:"\ud83d\udd11 On-Ramps Integration"},{title:"\u26d3\ufe0f Web3 compatible"},{title:"\ud83d\udcf1 Browser, app & extension"},{title:"\ud83d\udd11 Non-custodial"},{title:"\ud83d\udd11 NFT support"},{title:"\u26a1 No install"},{title:"\u26fd Fee Abstraction"}],d=[{value:"\ud83d\udc64 Social Login",id:"-social-login",children:[],level:3},{value:"\ud83d\udc64 Multi network Support",id:"-multi-network-support",children:[],level:3},{value:"\ud83d\udd11 On-Ramps Integration",id:"-on-ramps-integration",children:[],level:3},{value:"\u26d3\ufe0f Web3 compatible",id:"\ufe0f-web3-compatible",children:[],level:3},{value:"\ud83d\udcf1 Browser, app &amp; extension",id:"-browser-app--extension",children:[],level:3},{value:"\ud83d\udd11 Non-custodial",id:"-non-custodial",children:[],level:3},{value:"\ud83d\udd11 NFT support",id:"-nft-support",children:[],level:3},{value:"\u26a1 No install",id:"-no-install",children:[],level:3},{value:"&#39;\u26fd Fee Abstraction",id:"-fee-abstraction",children:[],level:3}],m={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Sequence gives you a friendly, non-custodial wallet for your users with multi-chain support and seamless integration."),(0,i.kt)("p",null,"TODO: Sequence screenshots here"),(0,i.kt)("p",null,"Most wallets for Ethereum have a single private key that has full control over a wallet, i.e. an Externally Owned Account (EOAs). However, a Sequence wallet is a Smart Contract that is deployed on the blockchain and which can be controlled by multiple private keys. These keys are meant to be controlled by the wallet owner and provide added security since more than one of these keys would need to be compromised for the wallet to be compromised."),(0,i.kt)(a.Z,{cards:p,mdxType:"Cards"}),"TODO: ^ Ordering & styling",(0,i.kt)("h3",{id:"-social-login"},"\ud83d\udc64 Social Login"),(0,i.kt)("p",null,"Easily sign in via email, Google, Facebook or other socials. No blockchain knowledge required."),(0,i.kt)("h3",{id:"-multi-network-support"},"\ud83d\udc64 Multi network Support"),(0,i.kt)("p",null,"Sequence can support all EVM compatible chains. Currently, it supports ",(0,i.kt)("strong",{parentName:"p"},"Ethereum")," and ",(0,i.kt)("strong",{parentName:"p"},"Polygon"),"."),(0,i.kt)("h3",{id:"-on-ramps-integration"},"\ud83d\udd11 On-Ramps Integration"),(0,i.kt)("p",null,"Sequence allows users to purchase cryptocurrencies directly from their wallet, using payment providers like Wyre, Moonpay and Ramp."),(0,i.kt)("h3",{id:"\ufe0f-web3-compatible"},"\u26d3\ufe0f Web3 compatible"),(0,i.kt)("p",null,"Sequence can be used with any dapp on the support networks."),(0,i.kt)("h3",{id:"-browser-app--extension"},"\ud83d\udcf1 Browser, app & extension"),(0,i.kt)("p",null,"Users can access their sequence wallet via ",(0,i.kt)("a",{parentName:"p",href:"https://sequence.app"},"https://sequence.app"),", the Sequence browser extension or the Sequence Mobile app (iOS and Android)."),(0,i.kt)("h3",{id:"-non-custodial"},"\ud83d\udd11 Non-custodial"),(0,i.kt)("p",null,"With Sequence, users are in full control of their wallet with no third party able to access these funds other than them."),(0,i.kt)("h3",{id:"-nft-support"},"\ud83d\udd11 NFT support"),(0,i.kt)("p",null,"In addition to ERC-20 tokens like USDC, Sequence has first class support for NFTs, for both ERC-721 and ERC-1155 tokens."),(0,i.kt)("h3",{id:"-no-install"},"\u26a1 No install"),(0,i.kt)("p",null,"Applications can integrate Sequence natively, allowing users to access their sequence wallet without any install required on their end. "),(0,i.kt)("h3",{id:"-fee-abstraction"},"'\u26fd Fee Abstraction"),(0,i.kt)("p",null,"Users can pay transaction fees in various currencies, not only the native currency of the network used. In addition, users don't need to worry about choosing and manage transaction gas prices."))}h.isMDXComponent=!0}}]);