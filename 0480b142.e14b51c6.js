(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"faq",title:"FAQs"},l={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQs",description:"What are the requirements?",source:"@site/docs/faq.md",slug:"/faq",permalink:"/docs/faq",version:"current",sidebar:"someSidebar",previous:{title:"How it works",permalink:"/docs/howitworks"},next:{title:"Raspberry Pi",permalink:"/docs/rpi"}},s=[],c={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"what-are-the-requirements"},"What are the requirements?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Grafana 7.0.5+ is recommended. Grafana 6.x or newer is required."),Object(o.b)("li",{parentName:"ul"},"InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB.\nUniFi Poller has not been tested with InfluxDB 2.0 or newer")),Object(o.b)("h4",{id:"heres-a-great-idea---show-me-the-amount-of-wan-data-ive-used-this-month"},"Here's a great idea - show me the amount of WAN data I've used this month!"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Yes, it is a great idea. Sadly, this information is not produced by the UniFi controller. However, it should be possible to calculate it from the data already stored and work is on-going to produce something useful"),Object(o.b)("li",{parentName:"ul"},"If you have a method of doing this already then please share!")),Object(o.b)("h4",{id:"why-is-unifi-poller-showing-me-xxxx"},"Why is UniFi Poller showing me XXXX?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Almost all of the time this is because it is what the controller is telling it! Although the UniFi controller has many strengths, it is not flawless, and the data that UniFi Poller shows on Grafana is only what it is given")),Object(o.b)("h4",{id:"unifi-poller-is-showing-me-yyyy---what-does-this-actually-mean"},"UniFi Poller is showing me YYYY - what does this actually mean?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Because UniFi Poller just picks up data from the controller using the API, the only way of getting an accurate answer about what is shown is by asking UI themselves. Given that they don't officially support the API there may be little chance of an answer")))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,d=p["".concat(i,".").concat(h)]||p[h]||f[h]||o;return n?a.a.createElement(d,l(l({ref:t},c),{},{components:n})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);