"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[81],{6871:function(e,t,n){n.d(t,{a:function(){return d},Y:function(){return f}});var r,i=n(807),o=n.n(i),a=n(2299),l=n.n(a),c=n(168),s=n(7691).ZP.div(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),u=n(184),d=function(e){var t=e.loading,n=e.color,r=e.size;return(0,u.jsx)(l(),{color:n,loading:t,cssOverride:{display:"block"},size:r,"aria-label":"Loading Spinner","data-testid":"loader"})},f=function(e){var t=e.loading,n=e.color;return(0,u.jsx)(s,{children:(0,u.jsx)(o(),{height:4,width:280,color:n,loading:t,cssOverride:{display:"block"},"aria-label":"Loading Spinner","data-testid":"loader"})})}},9081:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(9434),i=n(5218),o=n(2286),a=n(3634),l=n(6871),c=n(9541),s=n(3793),u=n(640),d=n(5953),f=n(6015),p=n(4565),h=n(803),v=n(4360),b=n(7012),m=n(184),g=(0,v.Z)();function y(){var e=(0,r.v9)(o.Af),t=(0,r.v9)(o.Uu),n=(0,r.I0)();return(0,m.jsx)(b.Z,{theme:g,children:(0,m.jsxs)(h.Z,{component:"main",maxWidth:"s",children:[(0,m.jsx)(s.ZP,{}),(0,m.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[(0,m.jsx)(p.Z,{component:"h1",variant:"30px",sx:{color:"#003b8e"},children:"New Contact"}),(0,m.jsxs)(f.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=t.target,o=r.name,l=r.number,c={name:o.value,number:l.value};if(e.some((function(e){return e.name.toLowerCase()===o.value.toLowerCase()})))return(0,i.ZP)("".concat(o.value," is already in contacts."),{duration:3e3});n((0,a.uK)(c)),r.reset()},sx:{mt:3,"& label.Mui-focused":{color:"#5e92f3"},"& .MuiOutlinedInput-root":{"&.Mui-focused fieldset":{borderColor:"#5e92f3"}}},children:[(0,m.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,m.jsx)(d.ZP,{item:!0,xs:12,children:(0,m.jsx)(u.Z,{required:!0,fullWidth:!0,id:"name",label:"Name contact",name:"name",type:"text",autoComplete:"name",autoFocus:!0})}),(0,m.jsx)(d.ZP,{item:!0,xs:12,children:(0,m.jsx)(u.Z,{required:!0,fullWidth:!0,id:"number",name:"number",label:"Number",type:"tel",autoComplete:"new-tel"})})]}),(0,m.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",disabled:t,sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",mt:3,mb:2,bgcolor:"#5e92f3"},children:t?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.a,{loading:t,color:"#ffffff",size:20}),(0,m.jsx)("span",{children:"Add ... "})]}):"Add contact"})]})]})]})})}var j=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(y,{})})}},807:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(2791)),s=n(8945),u=n(7074),d=n(779),f=(0,u.createAnimation)("BarLoader","0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}","long"),p=(0,u.createAnimation)("BarLoader","0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}","short");t.default=function(e){var t=e.loading,n=void 0===t||t,i=e.color,o=void 0===i?"#000000":i,a=e.speedMultiplier,u=void 0===a?1:a,h=e.cssOverride,v=void 0===h?{}:h,b=e.height,m=void 0===b?4:b,g=e.width,y=void 0===g?100:g,j=l(e,["loading","color","speedMultiplier","cssOverride","height","width"]),O=r({display:"inherit",position:"relative",width:(0,s.cssValue)(y),height:(0,s.cssValue)(m),overflow:"hidden",backgroundColor:(0,d.calculateRgba)(o,.2),backgroundClip:"padding-box"},v),x=function(e){return{position:"absolute",height:(0,s.cssValue)(m),overflow:"hidden",backgroundColor:o,backgroundClip:"padding-box",display:"block",borderRadius:2,willChange:"left, right",animationFillMode:"forwards",animation:"".concat(1===e?f:p," ").concat(2.1/u,"s ").concat(2===e?"".concat(1.15/u,"s"):""," ").concat(1===e?"cubic-bezier(0.65, 0.815, 0.735, 0.395)":"cubic-bezier(0.165, 0.84, 0.44, 1)"," infinite")}};return n?c.createElement("span",r({style:O},j),c.createElement("span",{style:x(1)}),c.createElement("span",{style:x(2)})):null}},2299:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},l=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(2791)),s=n(8945),u=(0,n(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,n=void 0===t||t,i=e.color,o=void 0===i?"#000000":i,a=e.speedMultiplier,d=void 0===a?1:a,f=e.cssOverride,p=void 0===f?{}:f,h=e.size,v=void 0===h?35:h,b=l(e,["loading","color","speedMultiplier","cssOverride","size"]),m=r({background:"transparent !important",width:(0,s.cssValue)(v),height:(0,s.cssValue)(v),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(u," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},p);return n?c.createElement("span",r({style:m},b)):null}},7074:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,a="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(a,0),r}},779:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.calculateRgba=void 0,function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"}(n||(n={}));t.calculateRgba=function(e,t){if(Object.keys(n).includes(e)&&(e=n[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var r="";e.split("").forEach((function(e){r+=e,r+=e})),e=r}var i=(e.match(/.{2}/g)||[]).map((function(e){return parseInt(e,16)})).join(", ");return"rgba(".concat(i,", ").concat(t,")")}},8945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return n[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=81.9f6d5d2b.chunk.js.map