_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"0Rl3":function(e,t,r){"use strict";var n=r("nKUr"),c=r("tiPL"),i=function(e){var t=e.children,r=e.className,i=e.description,o=e.headline,a=e.hideIcon;return Object(n.jsx)(c.a,{alt:"Empty illustration",className:r,description:i,headline:o,image:!a&&"/img/illustrations/undraw_tweetstorm.svg",height:120,width:130,children:t})};i.displayName="Empty",t.a=i},Ff2n:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}r.d(t,"a",(function(){return n}))},FwzE:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topics/[topic]/[level]",function(){return r("SQXn")}])},GNQX:function(e,t,r){"use strict";var n=r("rePB"),c=r("Ff2n"),i=r("nKUr");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.fill,o=e.size,s=void 0===o?24:o,l=Object(c.a)(e,["color","fill","size"]);return Object(i.jsx)("svg",a(a({xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:n?"currentColor":"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),{},{children:Object(i.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}))};s.displayName="StarIcon",t.a=s},NpuJ:function(e,t,r){"use strict";var n=r("nKUr"),c=r("iuhU"),i=r("q1tI"),o=r("Fdaq"),a=r("ehxT"),s=function(e){var t=e.children,r=e.className;return Object(n.jsx)("div",{className:Object(c.a)("card-body",r),children:t})},l=function(e){var t=e.children,r=e.className;return Object(n.jsx)(o.a,{className:Object(c.a)("mb-0",r),small:!0,children:t})},u=Object(i.forwardRef)((function(e,t){var r=e.children,i=e.className,o=e.href,a=e.onClick,s=o?"a":"div";return Object(n.jsx)(s,{className:Object(c.a)("card",i),href:o,onClick:a,ref:t,children:r})}));u.displayName="Card",s.displayName="CardBody",l.displayName="CardText",s.CardTitle="CardTitle",u.Body=s,u.Text=l,u.Title=function(e){var t=e.children,r=e.className,i=e.tag;return Object(n.jsx)(a.a,{className:Object(c.a)(r),variant:"h4",tag:i,children:t})},t.a=u},SQXn:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return P})),r.d(t,"default",(function(){return k}));var n=r("rePB"),c=r("nKUr"),i=r("iuhU"),o=r("8Kt/"),a=r.n(o),s=r("YFqc"),l=r.n(s),u=r("NpuJ"),b=function(e){var t=e.children,r=e.className,n=e.offset,o=e.size;return Object(c.jsx)("div",{className:Object(i.a)(o?"col-".concat(o):"col",n&&"offset-".concat(n),r),children:t})};b.displayName="Col";var j=b,O=r("ffXX"),d=r("0Rl3"),f=r("zMh8"),p=r("i6YY"),h=function(e){var t=e.children,r=e.className,n=e.reverse;return Object(c.jsx)("div",{className:Object(i.a)("row",n&&"reverse",r),children:t})};h.displayName="Row";var v=h,m=r("ehxT"),y=r("GNQX"),g=r("vPqw");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=e.favorites,r=e.questions,n=e.toggleFavorite,o=e.topic;return r&&0!==r.length?Object(c.jsx)(f.a,{children:r.map((function(e,r){var a=t.find((function(t){return t.slug===e.slug}));return Object(c.jsx)(f.a.Collapse,{bordered:!0,extra:Object(c.jsx)(y.a,{className:Object(i.a)("ml-2",a?"text-primary":"text-gray"),fill:a,onClick:n(x(x({},e),{},{topic:o.label}),a)}),title:"".concat(r+1,". ").concat(e.title),children:Object(c.jsx)("div",{className:"small mb-4",dangerouslySetInnerHTML:{__html:e.answer}})},e.slug)}))}):Object(c.jsx)(d.a,{hideIcon:!0,headline:"Coming soon!",description:"In the meantime discover another topic."})},P=!0;function k(e){var t=e.questions,r=e.topic,n=Object(g.c)(),i=Object(g.b)();return Object(c.jsxs)(O.a,{className:"py-4",children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)("meta",{name:"description",content:"List of ".concat(r.label," interview questions and answers.")}),Object(c.jsx)("title",{children:"".concat(r.label," questions \xb7 Tiqa")})]}),Object(c.jsxs)(v,{reverse:!0,children:[Object(c.jsxs)(j,{offset:1,size:4,children:[Object(c.jsxs)("div",{className:"text-center mb-4",children:[Object(c.jsx)("img",{className:"mb-3",src:r.image,height:"64",width:"64"}),Object(c.jsx)(m.a,{variant:"h3",children:r.label})]}),Object(c.jsx)(u.a,{className:"border-0 bg-light mb-5",children:Object(c.jsx)(u.a.Body,{children:Object(c.jsxs)(u.a.Text,{children:["Click on the star icon to add the question to your favorites. Found an issue?"," ",Object(c.jsx)("a",{href:"mailto:".concat("info.tiqa@gmail.com"),children:"Let us know."})]})})})]}),Object(c.jsx)(j,{size:7,children:Object(c.jsx)(N,{favorites:n,questions:t,toggleFavorite:function(e,t){return function(r){r.stopPropagation(),i(t?{type:"REMOVE_FAVORITE",payload:e}:{type:"ADD_FAVORITE",payload:e})}},topic:r})})]}),n&&n.length>0&&Object(c.jsxs)(p.a,{className:"fixed-bottom w-100 border-top bg-white",children:[Object(c.jsx)("span",{className:"bold",children:"Favorites: ".concat(n.length)}),Object(c.jsx)(l.a,{href:"/favorites",passHref:!0,children:Object(c.jsx)("a",{children:"See all"})})]})]})}},i6YY:function(e,t,r){"use strict";var n=r("nKUr"),c=r("iuhU"),i=r("ffXX"),o=function(e){var t=e.children,r=e.className;return Object(n.jsx)("nav",{className:Object(c.a)("navbar",r),children:Object(n.jsx)(i.a,{children:t})})};o.displayName="Navbar",t.a=o},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},tiPL:function(e,t,r){"use strict";var n=r("nKUr"),c=r("iuhU"),i=r("Fdaq"),o=r("ehxT"),a=function(e){var t=e.alt,r=e.children,a=e.className,s=e.description,l=e.headline,u=e.height,b=e.image,j=e.width;return Object(n.jsxs)("div",{className:Object(c.a)("text-center",a),children:[b&&Object(n.jsx)("img",{className:"mb-5",src:b,alt:t,height:u,width:j}),Object(n.jsx)(o.a,{className:"mb-0",variant:"h4",children:l}),Object(n.jsx)(i.a,{className:"mb-0 mt-2",small:!0,children:s}),r]})};a.displayName="Result",t.a=a},vPqw:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return j}));var i=r("nKUr"),o=r("q1tI"),a=Object(o.createContext)(),s=Object(o.createContext)(),l=function(e,t){switch(t.type){case"ADD_FAVORITE":return[].concat(c(e),[t.payload]);case"CLEAR_FAVORITES":return[];case"REMOVE_FAVORITE":return e.filter((function(e){return e.slug!==t.payload.slug}));default:throw new Error("Unknown action: ".concat(t.type))}},u=function(e){var t=e.children,r=Object(o.useReducer)(l,[]),n=r[0],c=r[1];return Object(i.jsx)(s.Provider,{value:c,children:Object(i.jsx)(a.Provider,{value:n,children:t})})},b=function(){return Object(o.useContext)(a)},j=function(){return Object(o.useContext)(s)}},zMh8:function(e,t,r){"use strict";var n=r("rePB"),c=r("Ff2n"),i=r("nKUr"),o=r("iuhU"),a=r("q1tI");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.size,o=void 0===n?24:n,a=Object(c.a)(e,["color","size"]);return Object(i.jsx)("svg",l(l({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),{},{children:Object(i.jsx)("polyline",{points:"6 9 12 15 18 9"})}))};u.displayName="ChevronDownIcon";var b=u;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.size,o=void 0===n?24:n,a=Object(c.a)(e,["color","size"]);return Object(i.jsx)("svg",O(O({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),{},{children:Object(i.jsx)("polyline",{points:"9 18 15 12 9 6"})}))};d.displayName="ChevronRightIcon";var f=d;function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){var t=e.color,r=void 0===t?"currentColor":t,n=e.size,o=void 0===n?24:n,a=Object(c.a)(e,["color","size"]);return Object(i.jsx)("svg",h(h({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),{},{children:Object(i.jsx)("polyline",{points:"18 15 12 9 6 15"})}))};v.displayName="ChevronUpIcon";var m=v,y=function(e){var t=e.children,r=e.className,n=e.open;return Object(i.jsx)("div",{className:Object(o.a)(r,n?"d-block":"d-none"),children:t})};y.displayName="Collapse";var g=y,w=r("ehxT"),x=r("Fdaq");function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){var t=e.children,r=e.className;return Object(i.jsx)("div",{className:Object(o.a)("list",r),children:t})}var C=Object(a.forwardRef)((function(e,t){var r=e.bordered,n=e.children,s=Object(c.a)(e,["bordered","children"]),l=Object(a.useState)(!1),u=l[0],j=l[1],O=u?m:b;return Object(i.jsxs)("div",{className:Object(o.a)(r&&"border-bottom"),ref:t,children:[Object(i.jsx)(E,P({chevron:O,hasChevron:!0,onClick:function(){j((function(e){return!e}))}},s)),Object(i.jsx)(g,{open:u,children:n})]})})),E=Object(a.forwardRef)((function(e,t){var r=e.bordered,n=e.chevron,c=void 0===n?f:n,a=e.extra,s=e.hasChevron,l=e.href,u=e.image,b=e.onClick,j=e.subtitle,O=e.title,d=l?"a":"div";return Object(i.jsxs)(d,{className:Object(o.a)("list-item",r&&"border-bottom"),href:l,onClick:b,ref:t,children:[Object(i.jsxs)("div",{className:"list-item-left",children:[u&&Object(i.jsx)("img",{className:"mr-2",src:u,height:"32",width:"32"}),Object(i.jsxs)("div",{children:[Object(i.jsx)(w.a,{className:"mb-0",variant:"h5",children:O}),Object(i.jsx)(x.a,{smaller:!0,tag:"span",children:j})]})]}),(a||s)&&Object(i.jsxs)("div",{className:"list-item-extra",children:[s&&Object(i.jsx)(c,{className:"text-gray ml-2"}),a]})]})}));C.displayName="ListCollapse",E.displayName="ListItem",k.Collapse=C,k.Item=E;t.a=k}},[["FwzE",0,1,2,3]]]);