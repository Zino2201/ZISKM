"use strict";(self.webpackChunkziskm=self.webpackChunkziskm||[]).push([[75],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},3208:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"roadmap",sidebar_position:3},c="Roadmap",u={unversionedId:"roadmap",id:"roadmap",isDocsHomePage:!1,title:"Roadmap",description:"Animation sharing/crowd system",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/ZISKM/roadmap",editUrl:"https://github.com/Zino2201/ZISKM/edit/main/docs/roadmap.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"roadmap",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/ZISKM/FAQ"},next:{title:"Limitations",permalink:"/ZISKM/limitations"}},p=[{value:"Animation sharing/crowd system",id:"animation-sharingcrowd-system",children:[]},{value:"Compute shaders &amp; custom animation system",id:"compute-shaders--custom-animation-system",children:[]}],m={toc:p};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"roadmap"},"Roadmap"),(0,i.kt)("h2",{id:"animation-sharingcrowd-system"},"Animation sharing/crowd system"),(0,i.kt)("p",null,"For now, there is no support for Unreal's animation sharing system and no integrated animation sharing solution, but it is planned."),(0,i.kt)("h2",{id:"compute-shaders--custom-animation-system"},"Compute shaders & custom animation system"),(0,i.kt)("p",null,"We have plans to create a more complete solution, we have a working (through bugged) version of the plugin that have its own animation system, allowing insane amount of instances (10k+). For now we're going to continue to support the marketplace version of the plugin since it will meets the need of most people, but we are greatly interested of developing the other version! Feel free to contact us if you need special integrations."))}l.isMDXComponent=!0}}]);