(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[4272],{10953:function(t,e,n){"use strict";n(81129),n(58757),n(95311),n(84057)},38803:function(t,e,n){"use strict";n(81129),n(58757),n(16312)},49524:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(58757);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}var o=function(t){return r.createElement("span",i({className:"dumi-default-badge"},t))}},16312:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(14978),i=n.n(r),o=n(58757),u=["children"];function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,u,a=[],f=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;f=!1}else for(;!(f=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);f=!0);}catch(t){c=!0,i=t}finally{try{if(!f&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=function(t){var e=t.children,n=c(t,u),r=(0,o.useRef)(null),f=a((0,o.useState)(!1),2),l=f[0],s=f[1],d=a((0,o.useState)(!1),2),v=d[0],p=d[1];return(0,o.useEffect)((function(){var t=r.current;if(t){var e=i()((function(){s(t.scrollLeft>0),p(t.scrollLeft<t.scrollWidth-t.offsetWidth)}),100);return e(),t.addEventListener("scroll",e),window.addEventListener("resize",e),function(){t.removeEventListener("scroll",e),window.removeEventListener("resize",e)}}}),[]),o.createElement("div",{className:"dumi-default-table"},o.createElement("div",{className:"dumi-default-table-content",ref:r,"data-left-folded":l||void 0,"data-right-folded":v||void 0},o.createElement("table",n,e)))}},81280:function(t,e,n){"use strict";n(25462),n(58757)},14978:function(t,e,n){var r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(t,e,n){var i,o,u,a,f,c,l=0,s=!1,d=!1,b=!0;if("function"!=typeof t)throw new TypeError(r);function h(e){var n=i,r=o;return i=o=void 0,l=e,a=t.apply(r,n)}function O(t){return l=t,f=setTimeout(w,e),s?h(t):a}function j(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function w(){var t=y();if(j(t))return E(t);f=setTimeout(w,function(t){var n=e-(t-c);return d?p(n,u-(t-l)):n}(t))}function E(t){return f=void 0,b&&i?h(t):(i=o=void 0,a)}function S(){var t=y(),n=j(t);if(i=arguments,o=this,c=t,n){if(void 0===f)return O(c);if(d)return f=setTimeout(w,e),h(c)}return void 0===f&&(f=setTimeout(w,e)),a}return e=g(e)||0,m(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(g(n.maxWait)||0,e):u,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},S.flush=function(){return void 0===f?a:E(y())},S}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=u.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(r);return m(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(t,e,{leading:i,maxWait:e,trailing:o})}}}]);