"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[608],{895:function(e,t,r){r.d(t,{dK:function(){return a},_k:function(){return n},vc:function(){return l},rx:function(){return o},qo:function(){return c},Hk:function(){return s},Iz:function(){return i}});r(1336);var a=["en"],n=!1,l=null,o=null,c=8,s=50,i={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},3012:function(e,t,r){r.r(t),r.d(t,{default:function(){return i}});var a=r(7294),n=r(4260),l=r(6742),o=r(4973);function c(e){var t=e.year,r=e.posts;return a.createElement(a.Fragment,null,a.createElement("h3",null,t),a.createElement("ul",null,r.map((function(e){return a.createElement("li",{key:e.metadata.date},a.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return a.createElement("section",{className:"margin-vert--lg"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((function(e,t){return a.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},a.createElement(c,e))})))))}function i(e){var t,r,l=e.archive,c=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),i=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),m=(t=l.blogPosts,r=t.reduceRight((function(e,t){var r=t.metadata.date.split("-")[0],a=e.get(r)||[];return e.set(r,[t].concat(a))}),new Map),Array.from(r,(function(e){return{year:e[0],posts:e[1]}})));return a.createElement(n.Z,{title:c,description:i},a.createElement("header",{className:"hero hero--primary"},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},c),a.createElement("p",{className:"hero__subtitle"},i))),a.createElement("main",null,m.length>0&&a.createElement(s,{years:m})))}},546:function(e,t,r){r.d(t,{Z:function(){return E}});var a=r(7462),n=r(3366),l=r(7294),o=r(6010),c=r(6742),s=r(941),i=r(4996),m=r(3919),u="footerLogoLink_qW4Z",f=(r(8465),r(8617)),d=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,r=e.href,o=e.label,s=e.prependBaseUrlToHref,u=(0,n.Z)(e,d),h=(0,i.Z)(t),_=(0,i.Z)(r,{forcePrependBaseUrl:!0});return l.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},r?{href:s?_:r}:{to:h},u),r&&!(0,m.Z)(r)?l.createElement("span",null,o,l.createElement(f.Z,null)):o)}var _=function(e){var t=e.url,r=e.alt;return l.createElement("img",{loading:"lazy",className:"footer__logo",alt:r,src:t})};var E=function(){var e=(0,s.LU)().footer,t=e||{},r=t.copyright,a=t.links,n=void 0===a?[]:a,c=t.logo,m=void 0===c?{}:c,f=(0,i.Z)(m.src);return(0,i.Z)(m.src),(0,i.Z)(m.srcDark||m.src),e?l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--3"},l.createElement("span",{className:"footer__logo-tagline"},"Made with </> by"),m.href?l.createElement("a",{href:m.href,target:"_blank",rel:"noopener",className:u},l.createElement(_,{alt:m.alt,url:f})):l.createElement(_,{alt:m.alt,url:f})),l.createElement("div",{className:"col col--9"},n&&n.length>0&&l.createElement("div",{className:"row footer__links"},n.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(h,e))}))):null)}))))),r?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null)):null}}}]);