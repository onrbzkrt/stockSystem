/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

try {
  __webpack_require__(/*! bootstrap-table */ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js");

  __webpack_require__(/*! bootstrap-table/src/bootstrap-table.js */ "./node_modules/bootstrap-table/src/bootstrap-table.js");

  __webpack_require__(/*! bootstrap-table/src/extensions/filter-control/bootstrap-table-filter-control.js */ "./node_modules/bootstrap-table/src/extensions/filter-control/bootstrap-table-filter-control.js");
} catch (e) {}

/***/ }),

/***/ "./node_modules/bootstrap-table/dist/bootstrap-table.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-table/dist/bootstrap-table.min.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
  * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
  *
  * @version v1.18.3
  * @homepage https://bootstrap-table.com
  * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
  * @license MIT
  */

!function(t,e){ true?module.exports=e(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")):0}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=e(t);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,o=!1,a=void 0;try{for(var s,r=t[Symbol.iterator]();!(n=(s=r.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}return i}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return h(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function u(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=c(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}var d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function f(t,e){return t(e={exports:{}},e.exports),e.exports}var p=function(t){return t&&t.Math==Math&&t},g=p("object"==typeof globalThis&&globalThis)||p("object"==typeof window&&window)||p("object"==typeof self&&self)||p("object"==typeof d&&d)||function(){return this}()||Function("return this")(),v=function(t){try{return!!t()}catch(t){return!0}},b=!v((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),m={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,w={f:y&&!m.call({1:2},1)?function(t){var e=y(this,t);return!!e&&e.enumerable}:m},S=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},x={}.toString,k=function(t){return x.call(t).slice(8,-1)},O="".split,C=v((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==k(t)?O.call(t,""):Object(t)}:Object,T=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},P=function(t){return C(T(t))},I=function(t){return"object"==typeof t?null!==t:"function"==typeof t},A=function(t,e){if(!I(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!I(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!I(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!I(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")},$={}.hasOwnProperty,E=function(t,e){return $.call(t,e)},R=g.document,j=I(R)&&I(R.createElement),_=function(t){return j?R.createElement(t):{}},N=!b&&!v((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),F=Object.getOwnPropertyDescriptor,D={f:b?F:function(t,e){if(t=P(t),e=A(e,!0),N)try{return F(t,e)}catch(t){}if(E(t,e))return S(!w.f.call(t,e),t[e])}},V=function(t){if(!I(t))throw TypeError(String(t)+" is not an object");return t},B=Object.defineProperty,L={f:b?B:function(t,e,i){if(V(t),e=A(e,!0),V(i),N)try{return B(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},H=b?function(t,e,i){return L.f(t,e,S(1,i))}:function(t,e,i){return t[e]=i,t},M=function(t,e){try{H(g,t,e)}catch(i){g[t]=e}return e},U="__core-js_shared__",z=g[U]||M(U,{}),q=Function.toString;"function"!=typeof z.inspectSource&&(z.inspectSource=function(t){return q.call(t)});var W,G,K,Y=z.inspectSource,X=g.WeakMap,J="function"==typeof X&&/native code/.test(Y(X)),Q=f((function(t){(t.exports=function(t,e){return z[t]||(z[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),Z=0,tt=Math.random(),et=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++Z+tt).toString(36)},it=Q("keys"),nt=function(t){return it[t]||(it[t]=et(t))},ot={},at=g.WeakMap;if(J){var st=z.state||(z.state=new at),rt=st.get,lt=st.has,ct=st.set;W=function(t,e){return e.facade=t,ct.call(st,t,e),e},G=function(t){return rt.call(st,t)||{}},K=function(t){return lt.call(st,t)}}else{var ht=nt("state");ot[ht]=!0,W=function(t,e){return e.facade=t,H(t,ht,e),e},G=function(t){return E(t,ht)?t[ht]:{}},K=function(t){return E(t,ht)}}var ut={set:W,get:G,has:K,enforce:function(t){return K(t)?G(t):W(t,{})},getterFor:function(t){return function(e){var i;if(!I(e)||(i=G(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}},dt=f((function(t){var e=ut.get,i=ut.enforce,n=String(String).split("String");(t.exports=function(t,e,o,a){var s,r=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,c=!!a&&!!a.noTargetGet;"function"==typeof o&&("string"!=typeof e||E(o,"name")||H(o,"name",e),(s=i(o)).source||(s.source=n.join("string"==typeof e?e:""))),t!==g?(r?!c&&t[e]&&(l=!0):delete t[e],l?t[e]=o:H(t,e,o)):l?t[e]=o:M(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||Y(this)}))})),ft=g,pt=function(t){return"function"==typeof t?t:void 0},gt=function(t,e){return arguments.length<2?pt(ft[t])||pt(g[t]):ft[t]&&ft[t][e]||g[t]&&g[t][e]},vt=Math.ceil,bt=Math.floor,mt=function(t){return isNaN(t=+t)?0:(t>0?bt:vt)(t)},yt=Math.min,wt=function(t){return t>0?yt(mt(t),9007199254740991):0},St=Math.max,xt=Math.min,kt=function(t,e){var i=mt(t);return i<0?St(i+e,0):xt(i,e)},Ot=function(t){return function(e,i,n){var o,a=P(e),s=wt(a.length),r=kt(n,s);if(t&&i!=i){for(;s>r;)if((o=a[r++])!=o)return!0}else for(;s>r;r++)if((t||r in a)&&a[r]===i)return t||r||0;return!t&&-1}},Ct={includes:Ot(!0),indexOf:Ot(!1)},Tt=Ct.indexOf,Pt=function(t,e){var i,n=P(t),o=0,a=[];for(i in n)!E(ot,i)&&E(n,i)&&a.push(i);for(;e.length>o;)E(n,i=e[o++])&&(~Tt(a,i)||a.push(i));return a},It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],At=It.concat("length","prototype"),$t={f:Object.getOwnPropertyNames||function(t){return Pt(t,At)}},Et={f:Object.getOwnPropertySymbols},Rt=gt("Reflect","ownKeys")||function(t){var e=$t.f(V(t)),i=Et.f;return i?e.concat(i(t)):e},jt=function(t,e){for(var i=Rt(e),n=L.f,o=D.f,a=0;a<i.length;a++){var s=i[a];E(t,s)||n(t,s,o(e,s))}},_t=/#|\.prototype\./,Nt=function(t,e){var i=Dt[Ft(t)];return i==Bt||i!=Vt&&("function"==typeof e?v(e):!!e)},Ft=Nt.normalize=function(t){return String(t).replace(_t,".").toLowerCase()},Dt=Nt.data={},Vt=Nt.NATIVE="N",Bt=Nt.POLYFILL="P",Lt=Nt,Ht=D.f,Mt=function(t,e){var i,n,o,a,s,r=t.target,l=t.global,c=t.stat;if(i=l?g:c?g[r]||M(r,{}):(g[r]||{}).prototype)for(n in e){if(a=e[n],o=t.noTargetGet?(s=Ht(i,n))&&s.value:i[n],!Lt(l?n:r+(c?".":"#")+n,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;jt(a,o)}(t.sham||o&&o.sham)&&H(a,"sham",!0),dt(i,n,a,t)}},Ut="\t\n\v\f\r                　\u2028\u2029\ufeff",zt="["+Ut+"]",qt=RegExp("^"+zt+zt+"*"),Wt=RegExp(zt+zt+"*$"),Gt=function(t){return function(e){var i=String(T(e));return 1&t&&(i=i.replace(qt,"")),2&t&&(i=i.replace(Wt,"")),i}},Kt={start:Gt(1),end:Gt(2),trim:Gt(3)},Yt=Kt.trim;Mt({target:"String",proto:!0,forced:function(t){return v((function(){return!!Ut[t]()||"​᠎"!="​᠎"[t]()||Ut[t].name!==t}))}("trim")},{trim:function(){return Yt(this)}});var Xt=function(t,e){var i=[][t];return!!i&&v((function(){i.call(null,e||function(){throw 1},1)}))},Jt=[].join,Qt=C!=Object,Zt=Xt("join",",");Mt({target:"Array",proto:!0,forced:Qt||!Zt},{join:function(t){return Jt.call(P(this),void 0===t?",":t)}});var te=function(){var t=V(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function ee(t,e){return RegExp(t,e)}var ie={UNSUPPORTED_Y:v((function(){var t=ee("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:v((function(){var t=ee("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ne=RegExp.prototype.exec,oe=String.prototype.replace,ae=ne,se=function(){var t=/a/,e=/b*/g;return ne.call(t,"a"),ne.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),re=ie.UNSUPPORTED_Y||ie.BROKEN_CARET,le=void 0!==/()??/.exec("")[1];(se||le||re)&&(ae=function(t){var e,i,n,o,a=this,s=re&&a.sticky,r=te.call(a),l=a.source,c=0,h=t;return s&&(-1===(r=r.replace("y","")).indexOf("g")&&(r+="g"),h=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(l="(?: "+l+")",h=" "+h,c++),i=new RegExp("^(?:"+l+")",r)),le&&(i=new RegExp("^"+l+"$(?!\\s)",r)),se&&(e=a.lastIndex),n=ne.call(s?i:a,h),s?n?(n.input=n.input.slice(c),n[0]=n[0].slice(c),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:se&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),le&&n&&n.length>1&&oe.call(n[0],i,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n});var ce=ae;Mt({target:"RegExp",proto:!0,forced:/./.exec!==ce},{exec:ce});var he,ue,de="process"==k(g.process),fe=gt("navigator","userAgent")||"",pe=g.process,ge=pe&&pe.versions,ve=ge&&ge.v8;ve?ue=(he=ve.split("."))[0]+he[1]:fe&&(!(he=fe.match(/Edge\/(\d+)/))||he[1]>=74)&&(he=fe.match(/Chrome\/(\d+)/))&&(ue=he[1]);var be=ue&&+ue,me=!!Object.getOwnPropertySymbols&&!v((function(){return!Symbol.sham&&(de?38===be:be>37&&be<41)})),ye=me&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,we=Q("wks"),Se=g.Symbol,xe=ye?Se:Se&&Se.withoutSetter||et,ke=function(t){return E(we,t)&&(me||"string"==typeof we[t])||(me&&E(Se,t)?we[t]=Se[t]:we[t]=xe("Symbol."+t)),we[t]},Oe=ke("species"),Ce=!v((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Te="$0"==="a".replace(/./,"$0"),Pe=ke("replace"),Ie=!!/./[Pe]&&""===/./[Pe]("a","$0"),Ae=!v((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]})),$e=function(t,e,i,n){var o=ke(t),a=!v((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),s=a&&!v((function(){var e=!1,i=/a/;return"split"===t&&((i={}).constructor={},i.constructor[Oe]=function(){return i},i.flags="",i[o]=/./[o]),i.exec=function(){return e=!0,null},i[o](""),!e}));if(!a||!s||"replace"===t&&(!Ce||!Te||Ie)||"split"===t&&!Ae){var r=/./[o],l=i(o,""[t],(function(t,e,i,n,o){return e.exec===ce?a&&!o?{done:!0,value:r.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:Te,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ie}),c=l[0],h=l[1];dt(String.prototype,t,c),dt(RegExp.prototype,o,2==e?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)})}n&&H(RegExp.prototype[o],"sham",!0)},Ee=ke("match"),Re=function(t){var e;return I(t)&&(void 0!==(e=t[Ee])?!!e:"RegExp"==k(t))},je=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},_e=ke("species"),Ne=function(t){return function(e,i){var n,o,a=String(T(e)),s=mt(i),r=a.length;return s<0||s>=r?t?"":void 0:(n=a.charCodeAt(s))<55296||n>56319||s+1===r||(o=a.charCodeAt(s+1))<56320||o>57343?t?a.charAt(s):n:t?a.slice(s,s+2):o-56320+(n-55296<<10)+65536}},Fe={codeAt:Ne(!1),charAt:Ne(!0)}.charAt,De=function(t,e,i){return e+(i?Fe(t,e).length:1)},Ve=function(t,e){var i=t.exec;if("function"==typeof i){var n=i.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==k(t))throw TypeError("RegExp#exec called on incompatible receiver");return ce.call(t,e)},Be=[].push,Le=Math.min,He=4294967295,Me=!v((function(){return!RegExp(He,"y")}));$e("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(T(this)),o=void 0===i?He:i>>>0;if(0===o)return[];if(void 0===t)return[n];if(!Re(t))return e.call(n,t,o);for(var a,s,r,l=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,u=new RegExp(t.source,c+"g");(a=ce.call(u,n))&&!((s=u.lastIndex)>h&&(l.push(n.slice(h,a.index)),a.length>1&&a.index<n.length&&Be.apply(l,a.slice(1)),r=a[0].length,h=s,l.length>=o));)u.lastIndex===a.index&&u.lastIndex++;return h===n.length?!r&&u.test("")||l.push(""):l.push(n.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var o=T(this),a=null==e?void 0:e[t];return void 0!==a?a.call(e,o,i):n.call(String(o),e,i)},function(t,o){var a=i(n,t,this,o,n!==e);if(a.done)return a.value;var s=V(t),r=String(this),l=function(t,e){var i,n=V(t).constructor;return void 0===n||null==(i=V(n)[_e])?e:je(i)}(s,RegExp),c=s.unicode,h=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(Me?"y":"g"),u=new l(Me?s:"^(?:"+s.source+")",h),d=void 0===o?He:o>>>0;if(0===d)return[];if(0===r.length)return null===Ve(u,r)?[r]:[];for(var f=0,p=0,g=[];p<r.length;){u.lastIndex=Me?p:0;var v,b=Ve(u,Me?r:r.slice(p));if(null===b||(v=Le(wt(u.lastIndex+(Me?0:p)),r.length))===f)p=De(r,p,c);else{if(g.push(r.slice(f,p)),g.length===d)return g;for(var m=1;m<=b.length-1;m++)if(g.push(b[m]),g.length===d)return g;p=f=v}}return g.push(r.slice(f)),g}]}),!Me);var Ue,ze=Object.keys||function(t){return Pt(t,It)},qe=b?Object.defineProperties:function(t,e){V(t);for(var i,n=ze(e),o=n.length,a=0;o>a;)L.f(t,i=n[a++],e[i]);return t},We=gt("document","documentElement"),Ge=nt("IE_PROTO"),Ke=function(){},Ye=function(t){return"<script>"+t+"</"+"script>"},Xe=function(){try{Ue=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Xe=Ue?function(t){t.write(Ye("")),t.close();var e=t.parentWindow.Object;return t=null,e}(Ue):((e=_("iframe")).style.display="none",We.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(Ye("document.F=Object")),t.close(),t.F);for(var i=It.length;i--;)delete Xe.prototype[It[i]];return Xe()};ot[Ge]=!0;var Je=Object.create||function(t,e){var i;return null!==t?(Ke.prototype=V(t),i=new Ke,Ke.prototype=null,i[Ge]=t):i=Xe(),void 0===e?i:qe(i,e)},Qe=ke("unscopables"),Ze=Array.prototype;null==Ze[Qe]&&L.f(Ze,Qe,{configurable:!0,value:Je(null)});var ti=function(t){Ze[Qe][t]=!0},ei=Ct.includes;Mt({target:"Array",proto:!0},{includes:function(t){return ei(this,t,arguments.length>1?arguments[1]:void 0)}}),ti("includes");var ii=Array.isArray||function(t){return"Array"==k(t)},ni=function(t){return Object(T(t))},oi=function(t,e,i){var n=A(e);n in t?L.f(t,n,S(0,i)):t[n]=i},ai=ke("species"),si=function(t,e){var i;return ii(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!ii(i.prototype)?I(i)&&null===(i=i[ai])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===e?0:e)},ri=ke("species"),li=function(t){return be>=51||!v((function(){var e=[];return(e.constructor={})[ri]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ci=ke("isConcatSpreadable"),hi=9007199254740991,ui="Maximum allowed index exceeded",di=be>=51||!v((function(){var t=[];return t[ci]=!1,t.concat()[0]!==t})),fi=li("concat"),pi=function(t){if(!I(t))return!1;var e=t[ci];return void 0!==e?!!e:ii(t)};Mt({target:"Array",proto:!0,forced:!di||!fi},{concat:function(t){var e,i,n,o,a,s=ni(this),r=si(s,0),l=0;for(e=-1,n=arguments.length;e<n;e++)if(pi(a=-1===e?s:arguments[e])){if(l+(o=wt(a.length))>hi)throw TypeError(ui);for(i=0;i<o;i++,l++)i in a&&oi(r,l,a[i])}else{if(l>=hi)throw TypeError(ui);oi(r,l++,a)}return r.length=l,r}});var gi=[].push,vi=function(t){var e=1==t,i=2==t,n=3==t,o=4==t,a=6==t,s=7==t,r=5==t||a;return function(l,c,h,u){for(var d,f,p=ni(l),g=C(p),v=function(t,e,i){if(je(t),void 0===e)return t;switch(i){case 0:return function(){return t.call(e)};case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)}}return function(){return t.apply(e,arguments)}}(c,h,3),b=wt(g.length),m=0,y=u||si,w=e?y(l,b):i||s?y(l,0):void 0;b>m;m++)if((r||m in g)&&(f=v(d=g[m],m,p),t))if(e)w[m]=f;else if(f)switch(t){case 3:return!0;case 5:return d;case 6:return m;case 2:gi.call(w,d)}else switch(t){case 4:return!1;case 7:gi.call(w,d)}return a?-1:n||o?o:w}},bi={forEach:vi(0),map:vi(1),filter:vi(2),some:vi(3),every:vi(4),find:vi(5),findIndex:vi(6),filterOut:vi(7)},mi=bi.find,yi="find",wi=!0;yi in[]&&Array(1).find((function(){wi=!1})),Mt({target:"Array",proto:!0,forced:wi},{find:function(t){return mi(this,t,arguments.length>1?arguments[1]:void 0)}}),ti(yi);var Si=function(t){if(Re(t))throw TypeError("The method doesn't accept regular expressions");return t},xi=ke("match"),ki=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[xi]=!1,"/./"[t](e)}catch(t){}}return!1};Mt({target:"String",proto:!0,forced:!ki("includes")},{includes:function(t){return!!~String(T(this)).indexOf(Si(t),arguments.length>1?arguments[1]:void 0)}});var Oi={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},Ci=bi.forEach,Ti=Xt("forEach")?[].forEach:function(t){return Ci(this,t,arguments.length>1?arguments[1]:void 0)};for(var Pi in Oi){var Ii=g[Pi],Ai=Ii&&Ii.prototype;if(Ai&&Ai.forEach!==Ti)try{H(Ai,"forEach",Ti)}catch(t){Ai.forEach=Ti}}var $i=Kt.trim,Ei=g.parseFloat,Ri=1/Ei(Ut+"-0")!=-1/0?function(t){var e=$i(String(t)),i=Ei(e);return 0===i&&"-"==e.charAt(0)?-0:i}:Ei;Mt({global:!0,forced:parseFloat!=Ri},{parseFloat:Ri});var ji=w.f,_i=function(t){return function(e){for(var i,n=P(e),o=ze(n),a=o.length,s=0,r=[];a>s;)i=o[s++],b&&!ji.call(n,i)||r.push(t?[i,n[i]]:n[i]);return r}},Ni={entries:_i(!0),values:_i(!1)}.entries;Mt({target:"Object",stat:!0},{entries:function(t){return Ni(t)}});var Fi=Ct.indexOf,Di=[].indexOf,Vi=!!Di&&1/[1].indexOf(1,-0)<0,Bi=Xt("indexOf");Mt({target:"Array",proto:!0,forced:Vi||!Bi},{indexOf:function(t){return Vi?Di.apply(this,arguments)||0:Fi(this,t,arguments.length>1?arguments[1]:void 0)}});var Li=[],Hi=Li.sort,Mi=v((function(){Li.sort(void 0)})),Ui=v((function(){Li.sort(null)})),zi=Xt("sort");Mt({target:"Array",proto:!0,forced:Mi||!Ui||!zi},{sort:function(t){return void 0===t?Hi.call(ni(this)):Hi.call(ni(this),je(t))}});var qi=Math.floor,Wi="".replace,Gi=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Ki=/\$([$&'`]|\d{1,2})/g,Yi=function(t,e,i,n,o,a){var s=i+t.length,r=n.length,l=Ki;return void 0!==o&&(o=ni(o),l=Gi),Wi.call(a,l,(function(a,l){var c;switch(l.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(s);case"<":c=o[l.slice(1,-1)];break;default:var h=+l;if(0===h)return a;if(h>r){var u=qi(h/10);return 0===u?a:u<=r?void 0===n[u-1]?l.charAt(1):n[u-1]+l.charAt(1):a}c=n[h-1]}return void 0===c?"":c}))},Xi=Math.max,Ji=Math.min;$e("replace",2,(function(t,e,i,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,a=n.REPLACE_KEEPS_$0,s=o?"$":"$0";return[function(i,n){var o=T(this),a=null==i?void 0:i[t];return void 0!==a?a.call(i,o,n):e.call(String(o),i,n)},function(t,n){if(!o&&a||"string"==typeof n&&-1===n.indexOf(s)){var r=i(e,t,this,n);if(r.done)return r.value}var l=V(t),c=String(this),h="function"==typeof n;h||(n=String(n));var u=l.global;if(u){var d=l.unicode;l.lastIndex=0}for(var f=[];;){var p=Ve(l,c);if(null===p)break;if(f.push(p),!u)break;""===String(p[0])&&(l.lastIndex=De(c,wt(l.lastIndex),d))}for(var g,v="",b=0,m=0;m<f.length;m++){p=f[m];for(var y=String(p[0]),w=Xi(Ji(mt(p.index),c.length),0),S=[],x=1;x<p.length;x++)S.push(void 0===(g=p[x])?g:String(g));var k=p.groups;if(h){var O=[y].concat(S,w,c);void 0!==k&&O.push(k);var C=String(n.apply(void 0,O))}else C=Yi(y,c,w,S,k,n);w>=b&&(v+=c.slice(b,w)+C,b=w+y.length)}return v+c.slice(b)}]}));var Qi=Object.assign,Zi=Object.defineProperty,tn=!Qi||v((function(){if(b&&1!==Qi({b:1},Qi(Zi({},"a",{enumerable:!0,get:function(){Zi(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},i=Symbol(),n="abcdefghijklmnopqrst";return t[i]=7,n.split("").forEach((function(t){e[t]=t})),7!=Qi({},t)[i]||ze(Qi({},e)).join("")!=n}))?function(t,e){for(var i=ni(t),n=arguments.length,o=1,a=Et.f,s=w.f;n>o;)for(var r,l=C(arguments[o++]),c=a?ze(l).concat(a(l)):ze(l),h=c.length,u=0;h>u;)r=c[u++],b&&!s.call(l,r)||(i[r]=l[r]);return i}:Qi;Mt({target:"Object",stat:!0,forced:Object.assign!==tn},{assign:tn});var en=bi.filter,nn=li("filter");Mt({target:"Array",proto:!0,forced:!nn},{filter:function(t){return en(this,t,arguments.length>1?arguments[1]:void 0)}});var on=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};$e("search",1,(function(t,e,i){return[function(e){var i=T(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var o=V(t),a=String(this),s=o.lastIndex;on(s,0)||(o.lastIndex=0);var r=Ve(o,a);return on(o.lastIndex,s)||(o.lastIndex=s),null===r?-1:r.index}]}));var an=Kt.trim,sn=g.parseInt,rn=/^[+-]?0[Xx]/,ln=8!==sn(Ut+"08")||22!==sn(Ut+"0x16")?function(t,e){var i=an(String(t));return sn(i,e>>>0||(rn.test(i)?16:10))}:sn;Mt({global:!0,forced:parseInt!=ln},{parseInt:ln});var cn=bi.map,hn=li("map");Mt({target:"Array",proto:!0,forced:!hn},{map:function(t){return cn(this,t,arguments.length>1?arguments[1]:void 0)}});var un=bi.findIndex,dn="findIndex",fn=!0;dn in[]&&Array(1).findIndex((function(){fn=!1})),Mt({target:"Array",proto:!0,forced:fn},{findIndex:function(t){return un(this,t,arguments.length>1?arguments[1]:void 0)}}),ti(dn);var pn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,n){return V(i),function(t){if(!I(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(i,n):i.__proto__=n,i}}():void 0),gn=function(t,e,i){var n,o;return pn&&"function"==typeof(n=e.constructor)&&n!==i&&I(o=n.prototype)&&o!==i.prototype&&pn(t,o),t},vn=ke("species"),bn=L.f,mn=$t.f,yn=ut.set,wn=ke("match"),Sn=g.RegExp,xn=Sn.prototype,kn=/a/g,On=/a/g,Cn=new Sn(kn)!==kn,Tn=ie.UNSUPPORTED_Y;if(b&&Lt("RegExp",!Cn||Tn||v((function(){return On[wn]=!1,Sn(kn)!=kn||Sn(On)==On||"/a/i"!=Sn(kn,"i")})))){for(var Pn=function(t,e){var i,n=this instanceof Pn,o=Re(t),a=void 0===e;if(!n&&o&&t.constructor===Pn&&a)return t;Cn?o&&!a&&(t=t.source):t instanceof Pn&&(a&&(e=te.call(t)),t=t.source),Tn&&(i=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var s=gn(Cn?new Sn(t,e):Sn(t,e),n?this:xn,Pn);return Tn&&i&&yn(s,{sticky:i}),s},In=function(t){t in Pn||bn(Pn,t,{configurable:!0,get:function(){return Sn[t]},set:function(e){Sn[t]=e}})},An=mn(Sn),$n=0;An.length>$n;)In(An[$n++]);xn.constructor=Pn,Pn.prototype=xn,dt(g,"RegExp",Pn)}!function(t){var e=gt(t),i=L.f;b&&e&&!e[vn]&&i(e,vn,{configurable:!0,get:function(){return this}})}("RegExp");var En="toString",Rn=RegExp.prototype,jn=Rn.toString,_n=v((function(){return"/a/b"!=jn.call({source:"a",flags:"b"})})),Nn=jn.name!=En;(_n||Nn)&&dt(RegExp.prototype,En,(function(){var t=V(this),e=String(t.source),i=t.flags;return"/"+e+"/"+String(void 0===i&&t instanceof RegExp&&!("flags"in Rn)?te.call(t):i)}),{unsafe:!0});var Fn={};Fn[ke("toStringTag")]="z";var Dn="[object z]"===String(Fn),Vn=ke("toStringTag"),Bn="Arguments"==k(function(){return arguments}()),Ln=Dn?k:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Vn))?i:Bn?k(e):"Object"==(n=k(e))&&"function"==typeof e.callee?"Arguments":n},Hn=Dn?{}.toString:function(){return"[object "+Ln(this)+"]"};Dn||dt(Object.prototype,"toString",Hn,{unsafe:!0});var Mn=li("slice"),Un=ke("species"),zn=[].slice,qn=Math.max;Mt({target:"Array",proto:!0,forced:!Mn},{slice:function(t,e){var i,n,o,a=P(this),s=wt(a.length),r=kt(t,s),l=kt(void 0===e?s:e,s);if(ii(a)&&("function"!=typeof(i=a.constructor)||i!==Array&&!ii(i.prototype)?I(i)&&null===(i=i[Un])&&(i=void 0):i=void 0,i===Array||void 0===i))return zn.call(a,r,l);for(n=new(void 0===i?Array:i)(qn(l-r,0)),o=0;r<l;r++,o++)r in a&&oi(n,o,a[r]);return n.length=o,n}});var Wn,Gn,Kn,Yn=!v((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),Xn=nt("IE_PROTO"),Jn=Object.prototype,Qn=Yn?Object.getPrototypeOf:function(t){return t=ni(t),E(t,Xn)?t[Xn]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?Jn:null},Zn=ke("iterator"),to=!1;[].keys&&("next"in(Kn=[].keys())?(Gn=Qn(Qn(Kn)))!==Object.prototype&&(Wn=Gn):to=!0),(null==Wn||v((function(){var t={};return Wn[Zn].call(t)!==t})))&&(Wn={}),E(Wn,Zn)||H(Wn,Zn,(function(){return this}));var eo={IteratorPrototype:Wn,BUGGY_SAFARI_ITERATORS:to},io=L.f,no=ke("toStringTag"),oo=function(t,e,i){t&&!E(t=i?t:t.prototype,no)&&io(t,no,{configurable:!0,value:e})},ao=eo.IteratorPrototype,so=eo.IteratorPrototype,ro=eo.BUGGY_SAFARI_ITERATORS,lo=ke("iterator"),co="keys",ho="values",uo="entries",fo=function(){return this},po="Array Iterator",go=ut.set,vo=ut.getterFor(po),bo=function(t,e,i,n,o,a,s){!function(t,e,i){var n=e+" Iterator";t.prototype=Je(ao,{next:S(1,i)}),oo(t,n,!1)}(i,e,n);var r,l,c,h=function(t){if(t===o&&g)return g;if(!ro&&t in f)return f[t];switch(t){case co:case ho:case uo:return function(){return new i(this,t)}}return function(){return new i(this)}},u=e+" Iterator",d=!1,f=t.prototype,p=f[lo]||f["@@iterator"]||o&&f[o],g=!ro&&p||h(o),v="Array"==e&&f.entries||p;if(v&&(r=Qn(v.call(new t)),so!==Object.prototype&&r.next&&(Qn(r)!==so&&(pn?pn(r,so):"function"!=typeof r[lo]&&H(r,lo,fo)),oo(r,u,!0))),o==ho&&p&&p.name!==ho&&(d=!0,g=function(){return p.call(this)}),f[lo]!==g&&H(f,lo,g),o)if(l={values:h(ho),keys:a?g:h(co),entries:h(uo)},s)for(c in l)(ro||d||!(c in f))&&dt(f,c,l[c]);else Mt({target:e,proto:!0,forced:ro||d},l);return l}(Array,"Array",(function(t,e){go(this,{type:po,target:P(t),index:0,kind:e})}),(function(){var t=vo(this),e=t.target,i=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values");ti("keys"),ti("values"),ti("entries");var mo=ke("iterator"),yo=ke("toStringTag"),wo=bo.values;for(var So in Oi){var xo=g[So],ko=xo&&xo.prototype;if(ko){if(ko[mo]!==wo)try{H(ko,mo,wo)}catch(t){ko[mo]=wo}if(ko[yo]||H(ko,yo,So),Oi[So])for(var Oo in bo)if(ko[Oo]!==bo[Oo])try{H(ko,Oo,bo[Oo])}catch(t){ko[Oo]=bo[Oo]}}}var Co=li("splice"),To=Math.max,Po=Math.min,Io=9007199254740991,Ao="Maximum allowed length exceeded";Mt({target:"Array",proto:!0,forced:!Co},{splice:function(t,e){var i,n,o,a,s,r,l=ni(this),c=wt(l.length),h=kt(t,c),u=arguments.length;if(0===u?i=n=0:1===u?(i=0,n=c-h):(i=u-2,n=Po(To(mt(e),0),c-h)),c+i-n>Io)throw TypeError(Ao);for(o=si(l,n),a=0;a<n;a++)(s=h+a)in l&&oi(o,a,l[s]);if(o.length=n,i<n){for(a=h;a<c-n;a++)r=a+i,(s=a+n)in l?l[r]=l[s]:delete l[r];for(a=c;a>c-n+i;a--)delete l[a-1]}else if(i>n)for(a=c-n;a>h;a--)r=a+i-1,(s=a+n-1)in l?l[r]=l[s]:delete l[r];for(a=0;a<i;a++)l[a+h]=arguments[a+2];return l.length=c-n+i,o}});var $o=$t.f,Eo=D.f,Ro=L.f,jo=Kt.trim,_o="Number",No=g.Number,Fo=No.prototype,Do=k(Je(Fo))==_o,Vo=function(t){var e,i,n,o,a,s,r,l,c=A(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=jo(c)).charCodeAt(0))||45===e){if(88===(i=c.charCodeAt(2))||120===i)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(s=(a=c.slice(2)).length,r=0;r<s;r++)if((l=a.charCodeAt(r))<48||l>o)return NaN;return parseInt(a,n)}return+c};if(Lt(_o,!No(" 0o1")||!No("0b1")||No("+0x1"))){for(var Bo,Lo=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof Lo&&(Do?v((function(){Fo.valueOf.call(i)})):k(i)!=_o)?gn(new No(Vo(e)),i,Lo):Vo(e)},Ho=b?$o(No):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),Mo=0;Ho.length>Mo;Mo++)E(No,Bo=Ho[Mo])&&!E(Lo,Bo)&&Ro(Lo,Bo,Eo(No,Bo));Lo.prototype=Fo,Fo.constructor=Lo,dt(g,_o,Lo)}var Uo=[].reverse,zo=[1,2];Mt({target:"Array",proto:!0,forced:String(zo)===String(zo.reverse())},{reverse:function(){return ii(this)&&(this.length=this.length),Uo.call(this)}});var qo=4;try{var Wo=i.default.fn.dropdown.Constructor.VERSION;void 0!==Wo&&(qo=parseInt(Wo,10))}catch(t){}try{var Go=bootstrap.Tooltip.VERSION;void 0!==Go&&(qo=parseInt(Go,10))}catch(t){}var Ko={3:{iconsPrefix:"glyphicon",icons:{paginationSwitchDown:"glyphicon-collapse-down icon-chevron-down",paginationSwitchUp:"glyphicon-collapse-up icon-chevron-up",refresh:"glyphicon-refresh icon-refresh",toggleOff:"glyphicon-list-alt icon-list-alt",toggleOn:"glyphicon-list-alt icon-list-alt",columns:"glyphicon-th icon-th",detailOpen:"glyphicon-plus icon-plus",detailClose:"glyphicon-minus icon-minus",fullscreen:"glyphicon-fullscreen",search:"glyphicon-search",clearSearch:"glyphicon-trash"},classes:{buttonsPrefix:"btn",buttons:"default",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"pull",inputGroup:"input-group",inputPrefix:"input-",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{toolbarDropdown:['<ul class="dropdown-menu" role="menu">',"</ul>"],toolbarDropdownItem:'<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',toolbarDropdownSeparator:'<li class="divider"></li>',pageDropdown:['<ul class="dropdown-menu" role="menu">',"</ul>"],pageDropdownItem:'<li role="menuitem" class="%s"><a href="#">%s</a></li>',dropdownCaret:'<span class="caret"></span>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<span class="input-group-btn">%s</span></div>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'}},4:{iconsPrefix:"fa",icons:{paginationSwitchDown:"fa-caret-square-down",paginationSwitchUp:"fa-caret-square-up",refresh:"fa-sync",toggleOff:"fa-toggle-off",toggleOn:"fa-toggle-on",columns:"fa-th-list",detailOpen:"fa-plus",detailClose:"fa-minus",fullscreen:"fa-arrows-alt",search:"fa-search",clearSearch:"fa-trash"},classes:{buttonsPrefix:"btn",buttons:"secondary",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"float",inputGroup:"btn-group",inputPrefix:"form-control-",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{toolbarDropdown:['<div class="dropdown-menu dropdown-menu-right">',"</div>"],toolbarDropdownItem:'<label class="dropdown-item dropdown-item-marker">%s</label>',pageDropdown:['<div class="dropdown-menu">',"</div>"],pageDropdownItem:'<a class="dropdown-item %s" href="#">%s</a>',toolbarDropdownSeparator:'<div class="dropdown-divider"></div>',dropdownCaret:'<span class="caret"></span>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<div class="input-group-append">%s</div></div>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'}},5:{iconsPrefix:"fa",icons:{paginationSwitchDown:"fa-caret-square-down",paginationSwitchUp:"fa-caret-square-up",refresh:"fa-sync",toggleOff:"fa-toggle-off",toggleOn:"fa-toggle-on",columns:"fa-th-list",detailOpen:"fa-plus",detailClose:"fa-minus",fullscreen:"fa-arrows-alt",search:"fa-search",clearSearch:"fa-trash"},classes:{buttonsPrefix:"btn",buttons:"secondary",buttonsGroup:"btn-group",buttonsDropdown:"btn-group",pull:"float",inputGroup:"btn-group",inputPrefix:"form-control-",input:"form-control",paginationDropdown:"btn-group dropdown",dropup:"dropup",dropdownActive:"active",paginationActive:"active",buttonActive:"active"},html:{dataToggle:"data-bs-toggle",toolbarDropdown:['<div class="dropdown-menu dropdown-menu-right">',"</div>"],toolbarDropdownItem:'<label class="dropdown-item dropdown-item-marker">%s</label>',pageDropdown:['<div class="dropdown-menu">',"</div>"],pageDropdownItem:'<a class="dropdown-item %s" href="#">%s</a>',toolbarDropdownSeparator:'<div class="dropdown-divider"></div>',dropdownCaret:'<span class="caret"></span>',pagination:['<ul class="pagination%s">',"</ul>"],paginationItem:'<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',icon:'<i class="%s %s"></i>',inputGroup:'<div class="input-group">%s<div class="input-group-append">%s</div></div>',searchInput:'<input class="%s%s" type="text" placeholder="%s">',searchButton:'<button class="%s" type="button" name="search" title="%s">%s %s</button>',searchClearButton:'<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'}}}[qo],Yo={height:void 0,classes:"table table-bordered table-hover",buttons:{},theadClasses:"",headerStyle:function(t){return{}},rowStyle:function(t,e){return{}},rowAttributes:function(t,e){return{}},undefinedText:"-",locale:void 0,virtualScroll:!1,virtualScrollItemHeight:void 0,sortable:!0,sortClass:void 0,silentSort:!0,sortName:void 0,sortOrder:void 0,sortReset:!1,sortStable:!1,rememberOrder:!1,serverSort:!0,customSort:void 0,columns:[[]],data:[],url:void 0,method:"get",cache:!0,contentType:"application/json",dataType:"json",ajax:void 0,ajaxOptions:{},queryParams:function(t){return t},queryParamsType:"limit",responseHandler:function(t){return t},totalField:"total",totalNotFilteredField:"totalNotFiltered",dataField:"rows",footerField:"footer",pagination:!1,paginationParts:["pageInfo","pageSize","pageList"],showExtendedPagination:!1,paginationLoop:!0,sidePagination:"client",totalRows:0,totalNotFiltered:0,pageNumber:1,pageSize:10,pageList:[10,25,50,100],paginationHAlign:"right",paginationVAlign:"bottom",paginationDetailHAlign:"left",paginationPreText:"&lsaquo;",paginationNextText:"&rsaquo;",paginationSuccessivelySize:5,paginationPagesBySide:1,paginationUseIntermediate:!1,search:!1,searchHighlight:!1,searchOnEnterKey:!1,strictSearch:!1,searchSelector:!1,visibleSearch:!1,showButtonIcons:!0,showButtonText:!1,showSearchButton:!1,showSearchClearButton:!1,trimOnSearch:!0,searchAlign:"right",searchTimeOut:500,searchText:"",customSearch:void 0,showHeader:!0,showFooter:!1,footerStyle:function(t){return{}},searchAccentNeutralise:!1,showColumns:!1,showColumnsToggleAll:!1,showColumnsSearch:!1,minimumCountColumns:1,showPaginationSwitch:!1,showRefresh:!1,showToggle:!1,showFullscreen:!1,smartDisplay:!0,escape:!1,filterOptions:{filterAlgorithm:"and"},idField:void 0,selectItemName:"btSelectItem",clickToSelect:!1,ignoreClickToSelectOn:function(t){var e=t.tagName;return["A","BUTTON"].includes(e)},singleSelect:!1,checkboxHeader:!0,maintainMetaData:!1,multipleSelectRow:!1,uniqueId:void 0,cardView:!1,detailView:!1,detailViewIcon:!0,detailViewByClick:!1,detailViewAlign:"left",detailFormatter:function(t,e){return""},detailFilter:function(t,e){return!0},toolbar:void 0,toolbarAlign:"left",buttonsToolbar:void 0,buttonsAlign:"right",buttonsOrder:["paginationSwitch","refresh","toggle","fullscreen","columns"],buttonsPrefix:Ko.classes.buttonsPrefix,buttonsClass:Ko.classes.buttons,icons:Ko.icons,iconSize:void 0,iconsPrefix:Ko.iconsPrefix,loadingFontSize:"auto",loadingTemplate:function(t){return'<span class="loading-wrap">\n      <span class="loading-text">'.concat(t,'</span>\n      <span class="animation-wrap"><span class="animation-dot"></span></span>\n      </span>\n    ')},onAll:function(t,e){return!1},onClickCell:function(t,e,i,n){return!1},onDblClickCell:function(t,e,i,n){return!1},onClickRow:function(t,e){return!1},onDblClickRow:function(t,e){return!1},onSort:function(t,e){return!1},onCheck:function(t){return!1},onUncheck:function(t){return!1},onCheckAll:function(t){return!1},onUncheckAll:function(t){return!1},onCheckSome:function(t){return!1},onUncheckSome:function(t){return!1},onLoadSuccess:function(t){return!1},onLoadError:function(t){return!1},onColumnSwitch:function(t,e){return!1},onPageChange:function(t,e){return!1},onSearch:function(t){return!1},onToggle:function(t){return!1},onPreBody:function(t){return!1},onPostBody:function(){return!1},onPostHeader:function(){return!1},onPostFooter:function(){return!1},onExpandRow:function(t,e,i){return!1},onCollapseRow:function(t,e){return!1},onRefreshOptions:function(t){return!1},onRefresh:function(t){return!1},onResetView:function(){return!1},onScrollBody:function(){return!1}},Xo={formatLoadingMessage:function(){return"Loading, please wait"},formatRecordsPerPage:function(t){return"".concat(t," rows per page")},formatShowingRows:function(t,e,i,n){return void 0!==n&&n>0&&n>i?"Showing ".concat(t," to ").concat(e," of ").concat(i," rows (filtered from ").concat(n," total rows)"):"Showing ".concat(t," to ").concat(e," of ").concat(i," rows")},formatSRPaginationPreText:function(){return"previous page"},formatSRPaginationPageText:function(t){return"to page ".concat(t)},formatSRPaginationNextText:function(){return"next page"},formatDetailPagination:function(t){return"Showing ".concat(t," rows")},formatSearch:function(){return"Search"},formatClearSearch:function(){return"Clear Search"},formatNoMatches:function(){return"No matching records found"},formatPaginationSwitch:function(){return"Hide/Show pagination"},formatPaginationSwitchDown:function(){return"Show pagination"},formatPaginationSwitchUp:function(){return"Hide pagination"},formatRefresh:function(){return"Refresh"},formatToggle:function(){return"Toggle"},formatToggleOn:function(){return"Show card view"},formatToggleOff:function(){return"Hide card view"},formatColumns:function(){return"Columns"},formatColumnsToggleAll:function(){return"Toggle all"},formatFullscreen:function(){return"Fullscreen"},formatAllRows:function(){return"All"}},Jo={field:void 0,title:void 0,titleTooltip:void 0,class:void 0,width:void 0,widthUnit:"px",rowspan:void 0,colspan:void 0,align:void 0,halign:void 0,falign:void 0,valign:void 0,cellStyle:void 0,radio:!1,checkbox:!1,checkboxEnabled:!0,clickToSelect:!0,showSelectTitle:!1,sortable:!1,sortName:void 0,order:"asc",sorter:void 0,visible:!0,switchable:!0,cardVisible:!0,searchable:!0,formatter:void 0,footerFormatter:void 0,detailFormatter:void 0,searchFormatter:!0,searchHighlightFormatter:!1,escape:!1,events:void 0};Object.assign(Yo,Xo);var Qo={VERSION:"1.18.3",THEME:"bootstrap".concat(qo),CONSTANTS:Ko,DEFAULTS:Yo,COLUMN_DEFAULTS:Jo,METHODS:["getOptions","refreshOptions","getData","getSelections","load","append","prepend","remove","removeAll","insertRow","updateRow","getRowByUniqueId","updateByUniqueId","removeByUniqueId","updateCell","updateCellByUniqueId","showRow","hideRow","getHiddenRows","showColumn","hideColumn","getVisibleColumns","getHiddenColumns","showAllColumns","hideAllColumns","mergeCells","checkAll","uncheckAll","checkInvert","check","uncheck","checkBy","uncheckBy","refresh","destroy","resetView","showLoading","hideLoading","togglePagination","toggleFullscreen","toggleView","resetSearch","filterBy","scrollTo","getScrollPosition","selectPage","prevPage","nextPage","toggleDetailView","expandRow","collapseRow","expandRowByUniqueId","collapseRowByUniqueId","expandAllRows","collapseAllRows","updateColumnTitle","updateFormatText"],EVENTS:{"all.bs.table":"onAll","click-row.bs.table":"onClickRow","dbl-click-row.bs.table":"onDblClickRow","click-cell.bs.table":"onClickCell","dbl-click-cell.bs.table":"onDblClickCell","sort.bs.table":"onSort","check.bs.table":"onCheck","uncheck.bs.table":"onUncheck","check-all.bs.table":"onCheckAll","uncheck-all.bs.table":"onUncheckAll","check-some.bs.table":"onCheckSome","uncheck-some.bs.table":"onUncheckSome","load-success.bs.table":"onLoadSuccess","load-error.bs.table":"onLoadError","column-switch.bs.table":"onColumnSwitch","page-change.bs.table":"onPageChange","search.bs.table":"onSearch","toggle.bs.table":"onToggle","pre-body.bs.table":"onPreBody","post-body.bs.table":"onPostBody","post-header.bs.table":"onPostHeader","post-footer.bs.table":"onPostFooter","expand-row.bs.table":"onExpandRow","collapse-row.bs.table":"onCollapseRow","refresh-options.bs.table":"onRefreshOptions","reset-view.bs.table":"onResetView","refresh.bs.table":"onRefresh","scroll-body.bs.table":"onScrollBody"},LOCALES:{en:Xo,"en-US":Xo}},Zo=v((function(){ze(1)}));Mt({target:"Object",stat:!0,forced:Zo},{keys:function(t){return ze(ni(t))}});var ta,ea=D.f,ia="".startsWith,na=Math.min,oa=ki("startsWith"),aa=!(oa||(ta=ea(String.prototype,"startsWith"),!ta||ta.writable));Mt({target:"String",proto:!0,forced:!aa&&!oa},{startsWith:function(t){var e=String(T(this));Si(t);var i=wt(na(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return ia?ia.call(e,n,i):e.slice(i,i+n.length)===n}});var sa=D.f,ra="".endsWith,la=Math.min,ca=ki("endsWith"),ha=!ca&&!!function(){var t=sa(String.prototype,"endsWith");return t&&!t.writable}();Mt({target:"String",proto:!0,forced:!ha&&!ca},{endsWith:function(t){var e=String(T(this));Si(t);var i=arguments.length>1?arguments[1]:void 0,n=wt(e.length),o=void 0===i?n:la(wt(i),n),a=String(t);return ra?ra.call(e,a,o):e.slice(o-a.length,o)===a}});var ua={getSearchInput:function(t){return"string"==typeof t.options.searchSelector?i.default(t.options.searchSelector):t.$toolbar.find(".search input")},sprintf:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o=!0,a=0,s=t.replace(/%s/g,(function(){var t=i[a++];return void 0===t?(o=!1,""):t}));return o?s:""},isObject:function(t){return t instanceof Object&&!Array.isArray(t)},isEmptyObject:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.entries(t).length&&t.constructor===Object},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},getFieldTitle:function(t,e){var i,n=u(t);try{for(n.s();!(i=n.n()).done;){var o=i.value;if(o.field===e)return o.title}}catch(t){n.e(t)}finally{n.f()}return""},setFieldIndex:function(t){var e,i=0,n=[],o=u(t[0]);try{for(o.s();!(e=o.n()).done;){i+=e.value.colspan||1}}catch(t){o.e(t)}finally{o.f()}for(var a=0;a<t.length;a++){n[a]=[];for(var s=0;s<i;s++)n[a][s]=!1}for(var r=0;r<t.length;r++){var l,c=u(t[r]);try{for(c.s();!(l=c.n()).done;){var h=l.value,d=h.rowspan||1,f=h.colspan||1,p=n[r].indexOf(!1);h.colspanIndex=p,1===f?(h.fieldIndex=p,void 0===h.field&&(h.field=p)):h.colspanGroup=h.colspan;for(var g=0;g<d;g++)for(var v=0;v<f;v++)n[r+g][p+v]=!0}}catch(t){c.e(t)}finally{c.f()}}},normalizeAccent:function(t){return"string"!=typeof t?t:t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},updateFieldGroup:function(t){var e,i,n=(e=[]).concat.apply(e,l(t)),o=u(t);try{for(o.s();!(i=o.n()).done;){var a,s=u(i.value);try{for(s.s();!(a=s.n()).done;){var r=a.value;if(r.colspanGroup>1){for(var c=0,h=function(t){n.find((function(e){return e.fieldIndex===t})).visible&&c++},d=r.colspanIndex;d<r.colspanIndex+r.colspanGroup;d++)h(d);r.colspan=c,r.visible=c>0}}}catch(t){s.e(t)}finally{s.f()}}}catch(t){o.e(t)}finally{o.f()}},getScrollBarWidth:function(){if(void 0===this.cachedWidth){var t=i.default("<div/>").addClass("fixed-table-scroll-inner"),e=i.default("<div/>").addClass("fixed-table-scroll-outer");e.append(t),i.default("body").append(e);var n=t[0].offsetWidth;e.css("overflow","scroll");var o=t[0].offsetWidth;n===o&&(o=e[0].clientWidth),e.remove(),this.cachedWidth=n-o}return this.cachedWidth},calculateObjectValue:function(t,e,i,o){var a=e;if("string"==typeof e){var s=e.split(".");if(s.length>1){a=window;var r,c=u(s);try{for(c.s();!(r=c.n()).done;){a=a[r.value]}}catch(t){c.e(t)}finally{c.f()}}else a=window[e]}return null!==a&&"object"===n(a)?a:"function"==typeof a?a.apply(t,i||[]):!a&&"string"==typeof e&&this.sprintf.apply(this,[e].concat(l(i)))?this.sprintf.apply(this,[e].concat(l(i))):o},compareObjects:function(t,e,i){var n=Object.keys(t),o=Object.keys(e);if(i&&n.length!==o.length)return!1;for(var a=0,s=n;a<s.length;a++){var r=s[a];if(o.includes(r)&&t[r]!==e[r])return!1}return!0},escapeHTML:function(t){return"string"==typeof t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/`/g,"&#x60;"):t},unescapeHTML:function(t){return"string"==typeof t?t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&#x60;/g,"`"):t},getRealDataAttr:function(t){for(var e=0,i=Object.entries(t);e<i.length;e++){var n=r(i[e],2),o=n[0],a=n[1],s=o.split(/(?=[A-Z])/).join("-").toLowerCase();s!==o&&(t[s]=a,delete t[o])}return t},getItemField:function(t,e,i){var n=t;if("string"!=typeof e||t.hasOwnProperty(e))return i?this.escapeHTML(t[e]):t[e];var o,a=u(e.split("."));try{for(a.s();!(o=a.n()).done;){var s=o.value;n=n&&n[s]}}catch(t){a.e(t)}finally{a.f()}return i?this.escapeHTML(n):n},isIEBrowser:function(){return navigator.userAgent.includes("MSIE ")||/Trident.*rv:11\./.test(navigator.userAgent)},findIndex:function(t,e){var i,n=u(t);try{for(n.s();!(i=n.n()).done;){var o=i.value;if(JSON.stringify(o)===JSON.stringify(e))return t.indexOf(o)}}catch(t){n.e(t)}finally{n.f()}return-1},trToData:function(t,e){var n=this,o=[],a=[];return e.each((function(e,s){var r=i.default(s),l={};l._id=r.attr("id"),l._class=r.attr("class"),l._data=n.getRealDataAttr(r.data()),l._style=r.attr("style"),r.find(">td,>th").each((function(o,s){for(var r=i.default(s),c=+r.attr("colspan")||1,h=+r.attr("rowspan")||1,u=o;a[e]&&a[e][u];u++);for(var d=u;d<u+c;d++)for(var f=e;f<e+h;f++)a[f]||(a[f]=[]),a[f][d]=!0;var p=t[u].field;l[p]=r.html().trim(),l["_".concat(p,"_id")]=r.attr("id"),l["_".concat(p,"_class")]=r.attr("class"),l["_".concat(p,"_rowspan")]=r.attr("rowspan"),l["_".concat(p,"_colspan")]=r.attr("colspan"),l["_".concat(p,"_title")]=r.attr("title"),l["_".concat(p,"_data")]=n.getRealDataAttr(r.data()),l["_".concat(p,"_style")]=r.attr("style")})),o.push(l)})),o},sort:function(t,e,i,n,o,a){return null==t&&(t=""),null==e&&(e=""),n&&t===e&&(t=o,e=a),this.isNumeric(t)&&this.isNumeric(e)?(t=parseFloat(t))<(e=parseFloat(e))?-1*i:t>e?i:0:t===e?0:("string"!=typeof t&&(t=t.toString()),-1===t.localeCompare(e)?-1*i:i)},getEventName:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e=e||"".concat(+new Date).concat(~~(1e6*Math.random())),"".concat(t,"-").concat(e)},hasDetailViewIcon:function(t){return t.detailView&&t.detailViewIcon&&!t.cardView},getDetailViewIndexOffset:function(t){return this.hasDetailViewIcon(t)&&"right"!==t.detailViewAlign?1:0},checkAutoMergeCells:function(t){var e,i=u(t);try{for(i.s();!(e=i.n()).done;)for(var n=e.value,o=0,a=Object.keys(n);o<a.length;o++){var s=a[o];if(s.startsWith("_")&&(s.endsWith("_rowspan")||s.endsWith("_colspan")))return!0}}catch(t){i.e(t)}finally{i.f()}return!1},deepCopy:function(t){return void 0===t?t:i.default.extend(!0,Array.isArray(t)?[]:{},t)}},da=function(){function t(e){var i=this;o(this,t),this.rows=e.rows,this.scrollEl=e.scrollEl,this.contentEl=e.contentEl,this.callback=e.callback,this.itemHeight=e.itemHeight,this.cache={},this.scrollTop=this.scrollEl.scrollTop,this.initDOM(this.rows,e.fixedScroll),this.scrollEl.scrollTop=this.scrollTop,this.lastCluster=0;var n=function(){i.lastCluster!==(i.lastCluster=i.getNum())&&(i.initDOM(i.rows),i.callback())};this.scrollEl.addEventListener("scroll",n,!1),this.destroy=function(){i.contentEl.innerHtml="",i.scrollEl.removeEventListener("scroll",n,!1)}}return s(t,[{key:"initDOM",value:function(t,e){void 0===this.clusterHeight&&(this.cache.scrollTop=this.scrollEl.scrollTop,this.cache.data=this.contentEl.innerHTML=t[0]+t[0]+t[0],this.getRowsHeight(t));var i=this.initData(t,this.getNum(e)),n=i.rows.join(""),o=this.checkChanges("data",n),a=this.checkChanges("top",i.topOffset),s=this.checkChanges("bottom",i.bottomOffset),r=[];o&&a?(i.topOffset&&r.push(this.getExtra("top",i.topOffset)),r.push(n),i.bottomOffset&&r.push(this.getExtra("bottom",i.bottomOffset)),this.contentEl.innerHTML=r.join(""),e&&(this.contentEl.scrollTop=this.cache.scrollTop)):s&&(this.contentEl.lastChild.style.height="".concat(i.bottomOffset,"px"))}},{key:"getRowsHeight",value:function(){if(void 0===this.itemHeight){var t=this.contentEl.children,e=t[Math.floor(t.length/2)];this.itemHeight=e.offsetHeight}this.blockHeight=50*this.itemHeight,this.clusterRows=200,this.clusterHeight=4*this.blockHeight}},{key:"getNum",value:function(t){return this.scrollTop=t?this.cache.scrollTop:this.scrollEl.scrollTop,Math.floor(this.scrollTop/(this.clusterHeight-this.blockHeight))||0}},{key:"initData",value:function(t,e){if(t.length<50)return{topOffset:0,bottomOffset:0,rowsAbove:0,rows:t};var i=Math.max((this.clusterRows-50)*e,0),n=i+this.clusterRows,o=Math.max(i*this.itemHeight,0),a=Math.max((t.length-n)*this.itemHeight,0),s=[],r=i;o<1&&r++;for(var l=i;l<n;l++)t[l]&&s.push(t[l]);return{topOffset:o,bottomOffset:a,rowsAbove:r,rows:s}}},{key:"checkChanges",value:function(t,e){var i=e!==this.cache[t];return this.cache[t]=e,i}},{key:"getExtra",value:function(t,e){var i=document.createElement("tr");return i.className="virtual-scroll-".concat(t),e&&(i.style.height="".concat(e,"px")),i.outerHTML}}]),t}(),fa=function(){function t(e,n){o(this,t),this.options=n,this.$el=i.default(e),this.$el_=this.$el.clone(),this.timeoutId_=0,this.timeoutFooter_=0}return s(t,[{key:"init",value:function(){this.initConstants(),this.initLocale(),this.initContainer(),this.initTable(),this.initHeader(),this.initData(),this.initHiddenRows(),this.initToolbar(),this.initPagination(),this.initBody(),this.initSearchText(),this.initServer()}},{key:"initConstants",value:function(){var t=this.options;this.constants=Qo.CONSTANTS,this.constants.theme=i.default.fn.bootstrapTable.theme,this.constants.dataToggle=this.constants.html.dataToggle||"data-toggle";var e=t.buttonsPrefix?"".concat(t.buttonsPrefix,"-"):"";this.constants.buttonsClass=[t.buttonsPrefix,e+t.buttonsClass,ua.sprintf("".concat(e,"%s"),t.iconSize)].join(" ").trim(),this.buttons=ua.calculateObjectValue(this,t.buttons,[],{}),"object"!==n(this.buttons)&&(this.buttons={}),"string"==typeof t.icons&&(t.icons=ua.calculateObjectValue(null,t.icons))}},{key:"initLocale",value:function(){if(this.options.locale){var t=i.default.fn.bootstrapTable.locales,e=this.options.locale.split(/-|_/);e[0]=e[0].toLowerCase(),e[1]&&(e[1]=e[1].toUpperCase()),t[this.options.locale]?i.default.extend(this.options,t[this.options.locale]):t[e.join("-")]?i.default.extend(this.options,t[e.join("-")]):t[e[0]]&&i.default.extend(this.options,t[e[0]])}}},{key:"initContainer",value:function(){var t=["top","both"].includes(this.options.paginationVAlign)?'<div class="fixed-table-pagination clearfix"></div>':"",e=["bottom","both"].includes(this.options.paginationVAlign)?'<div class="fixed-table-pagination"></div>':"",n=ua.calculateObjectValue(this.options,this.options.loadingTemplate,[this.options.formatLoadingMessage()]);this.$container=i.default('\n      <div class="bootstrap-table '.concat(this.constants.theme,'">\n      <div class="fixed-table-toolbar"></div>\n      ').concat(t,'\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      ').concat(n,'\n      </div>\n      </div>\n      <div class="fixed-table-footer"></div>\n      </div>\n      ').concat(e,"\n      </div>\n    ")),this.$container.insertAfter(this.$el),this.$tableContainer=this.$container.find(".fixed-table-container"),this.$tableHeader=this.$container.find(".fixed-table-header"),this.$tableBody=this.$container.find(".fixed-table-body"),this.$tableLoading=this.$container.find(".fixed-table-loading"),this.$tableFooter=this.$el.find("tfoot"),this.options.buttonsToolbar?this.$toolbar=i.default("body").find(this.options.buttonsToolbar):this.$toolbar=this.$container.find(".fixed-table-toolbar"),this.$pagination=this.$container.find(".fixed-table-pagination"),this.$tableBody.append(this.$el),this.$container.after('<div class="clearfix"></div>'),this.$el.addClass(this.options.classes),this.$tableLoading.addClass(this.options.classes),this.options.height&&(this.$tableContainer.addClass("fixed-height"),this.options.showFooter&&this.$tableContainer.addClass("has-footer"),this.options.classes.split(" ").includes("table-bordered")&&(this.$tableBody.append('<div class="fixed-table-border"></div>'),this.$tableBorder=this.$tableBody.find(".fixed-table-border"),this.$tableLoading.addClass("fixed-table-border")),this.$tableFooter=this.$container.find(".fixed-table-footer"))}},{key:"initTable",value:function(){var e=this,n=[];if(this.$header=this.$el.find(">thead"),this.$header.length?this.options.theadClasses&&this.$header.addClass(this.options.theadClasses):this.$header=i.default('<thead class="'.concat(this.options.theadClasses,'"></thead>')).appendTo(this.$el),this._headerTrClasses=[],this._headerTrStyles=[],this.$header.find("tr").each((function(t,o){var a=i.default(o),s=[];a.find("th").each((function(t,e){var n=i.default(e);void 0!==n.data("field")&&n.data("field","".concat(n.data("field"))),s.push(i.default.extend({},{title:n.html(),class:n.attr("class"),titleTooltip:n.attr("title"),rowspan:n.attr("rowspan")?+n.attr("rowspan"):void 0,colspan:n.attr("colspan")?+n.attr("colspan"):void 0},n.data()))})),n.push(s),a.attr("class")&&e._headerTrClasses.push(a.attr("class")),a.attr("style")&&e._headerTrStyles.push(a.attr("style"))})),Array.isArray(this.options.columns[0])||(this.options.columns=[this.options.columns]),this.options.columns=i.default.extend(!0,[],n,this.options.columns),this.columns=[],this.fieldsColumnsIndex=[],ua.setFieldIndex(this.options.columns),this.options.columns.forEach((function(n,o){n.forEach((function(n,a){var s=i.default.extend({},t.COLUMN_DEFAULTS,n);void 0!==s.fieldIndex&&(e.columns[s.fieldIndex]=s,e.fieldsColumnsIndex[s.field]=s.fieldIndex),e.options.columns[o][a]=s}))})),!this.options.data.length){var o=ua.trToData(this.columns,this.$el.find(">tbody>tr"));o.length&&(this.options.data=o,this.fromHtml=!0)}this.options.pagination&&"server"!==this.options.sidePagination||(this.footerData=ua.trToData(this.columns,this.$el.find(">tfoot>tr"))),this.footerData&&this.$el.find("tfoot").html("<tr></tr>"),!this.options.showFooter||this.options.cardView?this.$tableFooter.hide():this.$tableFooter.show()}},{key:"initHeader",value:function(){var t=this,e={},n=[];this.header={fields:[],styles:[],classes:[],formatters:[],detailFormatters:[],events:[],sorters:[],sortNames:[],cellStyles:[],searchables:[]},ua.updateFieldGroup(this.options.columns),this.options.columns.forEach((function(i,o){var a=[];a.push("<tr".concat(ua.sprintf(' class="%s"',t._headerTrClasses[o])," ").concat(ua.sprintf(' style="%s"',t._headerTrStyles[o]),">"));var s="";if(0===o&&ua.hasDetailViewIcon(t.options)){var l=t.options.columns.length>1?' rowspan="'.concat(t.options.columns.length,'"'):"";s='<th class="detail"'.concat(l,'>\n          <div class="fht-cell"></div>\n          </th>')}s&&"right"!==t.options.detailViewAlign&&a.push(s),i.forEach((function(i,n){var s=ua.sprintf(' class="%s"',i.class),l=i.widthUnit,c=parseFloat(i.width),h=ua.sprintf("text-align: %s; ",i.halign?i.halign:i.align),u=ua.sprintf("text-align: %s; ",i.align),d=ua.sprintf("vertical-align: %s; ",i.valign);if(d+=ua.sprintf("width: %s; ",!i.checkbox&&!i.radio||c?c?c+l:void 0:i.showSelectTitle?void 0:"36px"),void 0!==i.fieldIndex||i.visible){var f=ua.calculateObjectValue(null,t.options.headerStyle,[i]),p=[],g="";if(f&&f.css)for(var v=0,b=Object.entries(f.css);v<b.length;v++){var m=r(b[v],2),y=m[0],w=m[1];p.push("".concat(y,": ").concat(w))}if(f&&f.classes&&(g=ua.sprintf(' class="%s"',i.class?[i.class,f.classes].join(" "):f.classes)),void 0!==i.fieldIndex){if(t.header.fields[i.fieldIndex]=i.field,t.header.styles[i.fieldIndex]=u+d,t.header.classes[i.fieldIndex]=s,t.header.formatters[i.fieldIndex]=i.formatter,t.header.detailFormatters[i.fieldIndex]=i.detailFormatter,t.header.events[i.fieldIndex]=i.events,t.header.sorters[i.fieldIndex]=i.sorter,t.header.sortNames[i.fieldIndex]=i.sortName,t.header.cellStyles[i.fieldIndex]=i.cellStyle,t.header.searchables[i.fieldIndex]=i.searchable,!i.visible)return;if(t.options.cardView&&!i.cardVisible)return;e[i.field]=i}a.push("<th".concat(ua.sprintf(' title="%s"',i.titleTooltip)),i.checkbox||i.radio?ua.sprintf(' class="bs-checkbox %s"',i.class||""):g||s,ua.sprintf(' style="%s"',h+d+p.join("; ")),ua.sprintf(' rowspan="%s"',i.rowspan),ua.sprintf(' colspan="%s"',i.colspan),ua.sprintf(' data-field="%s"',i.field),0===n&&o>0?" data-not-first-th":"",">"),a.push(ua.sprintf('<div class="th-inner %s">',t.options.sortable&&i.sortable?"sortable both":""));var S=t.options.escape?ua.escapeHTML(i.title):i.title,x=S;i.checkbox&&(S="",!t.options.singleSelect&&t.options.checkboxHeader&&(S='<label><input name="btSelectAll" type="checkbox" /><span></span></label>'),t.header.stateField=i.field),i.radio&&(S="",t.header.stateField=i.field),!S&&i.showSelectTitle&&(S+=x),a.push(S),a.push("</div>"),a.push('<div class="fht-cell"></div>'),a.push("</div>"),a.push("</th>")}})),s&&"right"===t.options.detailViewAlign&&a.push(s),a.push("</tr>"),a.length>3&&n.push(a.join(""))})),this.$header.html(n.join("")),this.$header.find("th[data-field]").each((function(t,n){i.default(n).data(e[i.default(n).data("field")])})),this.$container.off("click",".th-inner").on("click",".th-inner",(function(e){var n=i.default(e.currentTarget);if(t.options.detailView&&!n.parent().hasClass("bs-checkbox")&&n.closest(".bootstrap-table")[0]!==t.$container[0])return!1;t.options.sortable&&n.parent().data().sortable&&t.onSort(e)})),this.$header.children().children().off("keypress").on("keypress",(function(e){t.options.sortable&&i.default(e.currentTarget).data().sortable&&(13===(e.keyCode||e.which)&&t.onSort(e))}));var o=ua.getEventName("resize.bootstrap-table",this.$el.attr("id"));i.default(window).off(o),!this.options.showHeader||this.options.cardView?(this.$header.hide(),this.$tableHeader.hide(),this.$tableLoading.css("top",0)):(this.$header.show(),this.$tableHeader.show(),this.$tableLoading.css("top",this.$header.outerHeight()+1),this.getCaret(),i.default(window).on(o,(function(){return t.resetView()}))),this.$selectAll=this.$header.find('[name="btSelectAll"]'),this.$selectAll.off("click").on("click",(function(e){e.stopPropagation();var n=i.default(e.currentTarget).prop("checked");t[n?"checkAll":"uncheckAll"](),t.updateSelected()}))}},{key:"initData",value:function(t,e){"append"===e?this.options.data=this.options.data.concat(t):"prepend"===e?this.options.data=[].concat(t).concat(this.options.data):(t=t||ua.deepCopy(this.options.data),this.options.data=Array.isArray(t)?t:t[this.options.dataField]),this.data=l(this.options.data),this.options.sortReset&&(this.unsortedData=l(this.data)),"server"!==this.options.sidePagination&&this.initSort()}},{key:"initSort",value:function(){var t=this,e=this.options.sortName,i="desc"===this.options.sortOrder?-1:1,n=this.header.fields.indexOf(this.options.sortName),o=0;-1!==n?(this.options.sortStable&&this.data.forEach((function(t,e){t.hasOwnProperty("_position")||(t._position=e)})),this.options.customSort?ua.calculateObjectValue(this.options,this.options.customSort,[this.options.sortName,this.options.sortOrder,this.data]):this.data.sort((function(o,a){t.header.sortNames[n]&&(e=t.header.sortNames[n]);var s=ua.getItemField(o,e,t.options.escape),r=ua.getItemField(a,e,t.options.escape),l=ua.calculateObjectValue(t.header,t.header.sorters[n],[s,r,o,a]);return void 0!==l?t.options.sortStable&&0===l?i*(o._position-a._position):i*l:ua.sort(s,r,i,t.options.sortStable,o._position,a._position)})),void 0!==this.options.sortClass&&(clearTimeout(o),o=setTimeout((function(){t.$el.removeClass(t.options.sortClass);var e=t.$header.find('[data-field="'.concat(t.options.sortName,'"]')).index();t.$el.find("tr td:nth-child(".concat(e+1,")")).addClass(t.options.sortClass)}),250))):this.options.sortReset&&(this.data=l(this.unsortedData))}},{key:"onSort",value:function(t){var e=t.type,n=t.currentTarget,o="keypress"===e?i.default(n):i.default(n).parent(),a=this.$header.find("th").eq(o.index());if(this.$header.add(this.$header_).find("span.order").remove(),this.options.sortName===o.data("field")){var s=this.options.sortOrder;void 0===s?this.options.sortOrder="asc":"asc"===s?this.options.sortOrder="desc":"desc"===this.options.sortOrder&&(this.options.sortOrder=this.options.sortReset?void 0:"asc"),void 0===this.options.sortOrder&&(this.options.sortName=void 0)}else this.options.sortName=o.data("field"),this.options.rememberOrder?this.options.sortOrder="asc"===o.data("order")?"desc":"asc":this.options.sortOrder=this.columns[this.fieldsColumnsIndex[o.data("field")]].sortOrder||this.columns[this.fieldsColumnsIndex[o.data("field")]].order;if(this.trigger("sort",this.options.sortName,this.options.sortOrder),o.add(a).data("order",this.options.sortOrder),this.getCaret(),"server"===this.options.sidePagination&&this.options.serverSort)return this.options.pageNumber=1,void this.initServer(this.options.silentSort);this.initSort(),this.initBody()}},{key:"initToolbar",value:function(){var t,e=this,o=this.options,a=[],s=0,l=0;this.$toolbar.find(".bs-bars").children().length&&i.default("body").append(i.default(o.toolbar)),this.$toolbar.html(""),"string"!=typeof o.toolbar&&"object"!==n(o.toolbar)||i.default(ua.sprintf('<div class="bs-bars %s-%s"></div>',this.constants.classes.pull,o.toolbarAlign)).appendTo(this.$toolbar).append(i.default(o.toolbar)),a=['<div class="'.concat(["columns","columns-".concat(o.buttonsAlign),this.constants.classes.buttonsGroup,"".concat(this.constants.classes.pull,"-").concat(o.buttonsAlign)].join(" "),'">')],"string"==typeof o.buttonsOrder&&(o.buttonsOrder=o.buttonsOrder.replace(/\[|\]| |'/g,"").split(",")),this.buttons=Object.assign(this.buttons,{paginationSwitch:{text:o.pagination?o.formatPaginationSwitchUp():o.formatPaginationSwitchDown(),icon:o.pagination?o.icons.paginationSwitchDown:o.icons.paginationSwitchUp,render:!1,event:this.togglePagination,attributes:{"aria-label":o.formatPaginationSwitch(),title:o.formatPaginationSwitch()}},refresh:{text:o.formatRefresh(),icon:o.icons.refresh,render:!1,event:this.refresh,attributes:{"aria-label":o.formatRefresh(),title:o.formatRefresh()}},toggle:{text:o.formatToggle(),icon:o.icons.toggleOff,render:!1,event:this.toggleView,attributes:{"aria-label":o.formatToggleOn(),title:o.formatToggleOn()}},fullscreen:{text:o.formatFullscreen(),icon:o.icons.fullscreen,render:!1,event:this.toggleFullscreen,attributes:{"aria-label":o.formatFullscreen(),title:o.formatFullscreen()}},columns:{render:!1,html:function(){var t=[];if(t.push('<div class="keep-open '.concat(e.constants.classes.buttonsDropdown,'" title="').concat(o.formatColumns(),'">\n            <button class="').concat(e.constants.buttonsClass,' dropdown-toggle" type="button" ').concat(e.constants.dataToggle,'="dropdown"\n            aria-label="Columns" title="').concat(o.formatColumns(),'">\n            ').concat(o.showButtonIcons?ua.sprintf(e.constants.html.icon,o.iconsPrefix,o.icons.columns):"","\n            ").concat(o.showButtonText?o.formatColumns():"","\n            ").concat(e.constants.html.dropdownCaret,"\n            </button>\n            ").concat(e.constants.html.toolbarDropdown[0])),o.showColumnsSearch&&(t.push(ua.sprintf(e.constants.html.toolbarDropdownItem,ua.sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">',e.constants.classes.input,o.formatSearch()))),t.push(e.constants.html.toolbarDropdownSeparator)),o.showColumnsToggleAll){var i=e.getVisibleColumns().length===e.columns.filter((function(t){return!e.isSelectionColumn(t)})).length;t.push(ua.sprintf(e.constants.html.toolbarDropdownItem,ua.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>',i?'checked="checked"':"",o.formatColumnsToggleAll()))),t.push(e.constants.html.toolbarDropdownSeparator)}var n=0;return e.columns.forEach((function(t){t.visible&&n++})),e.columns.forEach((function(i,a){if(!e.isSelectionColumn(i)&&(!o.cardView||i.cardVisible)){var s=i.visible?' checked="checked"':"",r=n<=o.minimumCountColumns&&s?' disabled="disabled"':"";i.switchable&&(t.push(ua.sprintf(e.constants.html.toolbarDropdownItem,ua.sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>',i.field,a,s,r,i.title))),l++)}})),t.push(e.constants.html.toolbarDropdown[1],"</div>"),t.join("")}}});for(var c={},h=0,d=Object.entries(this.buttons);h<d.length;h++){var f=r(d[h],2),p=f[0],g=f[1],v=void 0;if(g.hasOwnProperty("html"))"function"==typeof g.html?v=g.html():"string"==typeof g.html&&(v=g.html);else{if(v='<button class="'.concat(this.constants.buttonsClass,'" type="button" name="').concat(p,'"'),g.hasOwnProperty("attributes"))for(var b=0,m=Object.entries(g.attributes);b<m.length;b++){var y=r(m[b],2),w=y[0],S=y[1];v+=" ".concat(w,'="').concat(S,'"')}v+=">",o.showButtonIcons&&g.hasOwnProperty("icon")&&(v+="".concat(ua.sprintf(this.constants.html.icon,o.iconsPrefix,g.icon)," ")),o.showButtonText&&g.hasOwnProperty("text")&&(v+=g.text),v+="</button>"}c[p]=v;var x="show".concat(p.charAt(0).toUpperCase()).concat(p.substring(1)),k=o[x];!(!g.hasOwnProperty("render")||g.hasOwnProperty("render")&&g.render)||void 0!==k&&!0!==k||(o[x]=!0),o.buttonsOrder.includes(p)||o.buttonsOrder.push(p)}var O,C=u(o.buttonsOrder);try{for(C.s();!(O=C.n()).done;){var T=O.value;o["show".concat(T.charAt(0).toUpperCase()).concat(T.substring(1))]&&a.push(c[T])}}catch(t){C.e(t)}finally{C.f()}a.push("</div>"),(this.showToolbar||a.length>2)&&this.$toolbar.append(a.join(""));for(var P=0,I=Object.entries(this.buttons);P<I.length;P++){var A=r(I[P],2),$=A[0],E=A[1];if(E.hasOwnProperty("event")){if("function"==typeof E.event||"string"==typeof E.event)if("continue"===function(){var t="string"==typeof E.event?window[E.event]:E.event;return e.$toolbar.find('button[name="'.concat($,'"]')).off("click").on("click",(function(){return t.call(e)})),"continue"}())continue;for(var R=function(){var t=r(_[j],2),i=t[0],n=t[1],o="string"==typeof n?window[n]:n;e.$toolbar.find('button[name="'.concat($,'"]')).off(i).on(i,(function(){return o.call(e)}))},j=0,_=Object.entries(E.event);j<_.length;j++)R()}}if(o.showColumns){var N=(t=this.$toolbar.find(".keep-open")).find('input[type="checkbox"]:not(".toggle-all")'),F=t.find('input[type="checkbox"].toggle-all');if(l<=o.minimumCountColumns&&t.find("input").prop("disabled",!0),t.find("li, label").off("click").on("click",(function(t){t.stopImmediatePropagation()})),N.off("click").on("click",(function(t){var n=t.currentTarget,o=i.default(n);e._toggleColumn(o.val(),o.prop("checked"),!1),e.trigger("column-switch",o.data("field"),o.prop("checked")),F.prop("checked",N.filter(":checked").length===e.columns.filter((function(t){return!e.isSelectionColumn(t)})).length)})),F.off("click").on("click",(function(t){var n=t.currentTarget;e._toggleAllColumns(i.default(n).prop("checked"))})),o.showColumnsSearch){var D=t.find('[name="columnsSearch"]'),V=t.find(".dropdown-item-marker");D.on("keyup paste change",(function(t){var e=t.currentTarget,n=i.default(e).val().toLowerCase();V.show(),N.each((function(t,e){var o=i.default(e).parents(".dropdown-item-marker");o.text().toLowerCase().includes(n)||o.hide()}))}))}}var B=function(t){var i="keyup drop blur mouseup";t.off(i).on(i,(function(t){o.searchOnEnterKey&&13!==t.keyCode||[37,38,39,40].includes(t.keyCode)||(clearTimeout(s),s=setTimeout((function(){e.onSearch({currentTarget:t.currentTarget})}),o.searchTimeOut))}))};if((o.search||this.showSearchClearButton)&&"string"!=typeof o.searchSelector){a=[];var L=ua.sprintf(this.constants.html.searchButton,this.constants.buttonsClass,o.formatSearch(),o.showButtonIcons?ua.sprintf(this.constants.html.icon,o.iconsPrefix,o.icons.search):"",o.showButtonText?o.formatSearch():""),H=ua.sprintf(this.constants.html.searchClearButton,this.constants.buttonsClass,o.formatClearSearch(),o.showButtonIcons?ua.sprintf(this.constants.html.icon,o.iconsPrefix,o.icons.clearSearch):"",o.showButtonText?o.formatClearSearch():""),M='<input class="'.concat(this.constants.classes.input,"\n        ").concat(ua.sprintf(" %s%s",this.constants.classes.inputPrefix,o.iconSize),'\n        search-input" type="search" placeholder="').concat(o.formatSearch(),'" autocomplete="off">'),U=M;if(o.showSearchButton||o.showSearchClearButton){var z=(o.showSearchButton?L:"")+(o.showSearchClearButton?H:"");U=o.search?ua.sprintf(this.constants.html.inputGroup,M,z):z}a.push(ua.sprintf('\n        <div class="'.concat(this.constants.classes.pull,"-").concat(o.searchAlign," search ").concat(this.constants.classes.inputGroup,'">\n          %s\n        </div>\n      '),U)),this.$toolbar.append(a.join(""));var q=ua.getSearchInput(this);o.showSearchButton?(this.$toolbar.find(".search button[name=search]").off("click").on("click",(function(){clearTimeout(s),s=setTimeout((function(){e.onSearch({currentTarget:q})}),o.searchTimeOut)})),o.searchOnEnterKey&&B(q)):B(q),o.showSearchClearButton&&this.$toolbar.find(".search button[name=clearSearch]").click((function(){e.resetSearch()}))}else if("string"==typeof o.searchSelector){B(ua.getSearchInput(this))}}},{key:"onSearch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.currentTarget,n=t.firedByInitSearchText,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(void 0!==e&&i.default(e).length&&o){var a=i.default(e).val().trim();if(this.options.trimOnSearch&&i.default(e).val()!==a&&i.default(e).val(a),this.searchText===a)return;(e===ua.getSearchInput(this)[0]||i.default(e).hasClass("search-input"))&&(this.searchText=a,this.options.searchText=a)}n||(this.options.pageNumber=1),this.initSearch(),n?"client"===this.options.sidePagination&&this.updatePagination():this.updatePagination(),this.trigger("search",this.searchText)}},{key:"initSearch",value:function(){var t=this;if(this.filterOptions=this.filterOptions||this.options.filterOptions,"server"!==this.options.sidePagination){if(this.options.customSearch)return this.data=ua.calculateObjectValue(this.options,this.options.customSearch,[this.options.data,this.searchText,this.filterColumns]),void(this.options.sortReset&&(this.unsortedData=l(this.data)));var e=this.searchText&&(this.fromHtml?ua.escapeHTML(this.searchText):this.searchText).toLowerCase(),i=ua.isEmptyObject(this.filterColumns)?null:this.filterColumns;this.options.searchAccentNeutralise&&(e=ua.normalizeAccent(e)),"function"==typeof this.filterOptions.filterAlgorithm?this.data=this.options.data.filter((function(e){return t.filterOptions.filterAlgorithm.apply(null,[e,i])})):"string"==typeof this.filterOptions.filterAlgorithm&&(this.data=i?this.options.data.filter((function(e){var n=t.filterOptions.filterAlgorithm;if("and"===n){for(var o in i)if(Array.isArray(i[o])&&!i[o].includes(e[o])||!Array.isArray(i[o])&&e[o]!==i[o])return!1}else if("or"===n){var a=!1;for(var s in i)(Array.isArray(i[s])&&i[s].includes(e[s])||!Array.isArray(i[s])&&e[s]===i[s])&&(a=!0);return a}return!0})):l(this.options.data));var n=this.getVisibleFields();this.data=e?this.data.filter((function(i,o){for(var a=0;a<t.header.fields.length;a++)if(t.header.searchables[a]&&(!t.options.visibleSearch||-1!==n.indexOf(t.header.fields[a]))){var s=ua.isNumeric(t.header.fields[a])?parseInt(t.header.fields[a],10):t.header.fields[a],r=t.columns[t.fieldsColumnsIndex[s]],l=void 0;if("string"==typeof s){l=i;for(var c=s.split("."),h=0;h<c.length;h++)null!==l[c[h]]&&(l=l[c[h]])}else l=i[s];if(t.options.searchAccentNeutralise&&(l=ua.normalizeAccent(l)),r&&r.searchFormatter&&(l=ua.calculateObjectValue(r,t.header.formatters[a],[l,i,o,r.field],l)),"string"==typeof l||"number"==typeof l)if(t.options.strictSearch){if("".concat(l).toLowerCase()===e)return!0}else{var u=/(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(t.searchText),d=!1;if(u){var f=u[1]||"".concat(u[5],"l"),p=u[2]||u[3],g=parseInt(l,10),v=parseInt(p,10);switch(f){case">":case"<l":d=g>v;break;case"<":case">l":d=g<v;break;case"<=":case"=<":case">=l":case"=>l":d=g<=v;break;case">=":case"=>":case"<=l":case"=<l":d=g>=v}}if(d||"".concat(l).toLowerCase().includes(e))return!0}}return!1})):this.data,this.options.sortReset&&(this.unsortedData=l(this.data)),this.initSort()}}},{key:"initPagination",value:function(){var t=this,e=this.options;if(e.pagination){this.$pagination.show();var i,n,o,a,s,r,l,c=[],h=!1,u=this.getData({includeHiddenRows:!1}),d=e.pageList;if("string"==typeof d&&(d=d.replace(/\[|\]| /g,"").toLowerCase().split(",")),d=d.map((function(t){return"string"==typeof t?t.toLowerCase()===e.formatAllRows().toLowerCase()||["all","unlimited"].includes(t.toLowerCase())?e.formatAllRows():+t:t})),this.paginationParts=e.paginationParts,"string"==typeof this.paginationParts&&(this.paginationParts=this.paginationParts.replace(/\[|\]| |'/g,"").split(",")),"server"!==e.sidePagination&&(e.totalRows=u.length),this.totalPages=0,e.totalRows&&(e.pageSize===e.formatAllRows()&&(e.pageSize=e.totalRows,h=!0),this.totalPages=1+~~((e.totalRows-1)/e.pageSize),e.totalPages=this.totalPages),this.totalPages>0&&e.pageNumber>this.totalPages&&(e.pageNumber=this.totalPages),this.pageFrom=(e.pageNumber-1)*e.pageSize+1,this.pageTo=e.pageNumber*e.pageSize,this.pageTo>e.totalRows&&(this.pageTo=e.totalRows),this.options.pagination&&"server"!==this.options.sidePagination&&(this.options.totalNotFiltered=this.options.data.length),this.options.showExtendedPagination||(this.options.totalNotFiltered=void 0),(this.paginationParts.includes("pageInfo")||this.paginationParts.includes("pageInfoShort")||this.paginationParts.includes("pageSize"))&&c.push('<div class="'.concat(this.constants.classes.pull,"-").concat(e.paginationDetailHAlign,' pagination-detail">')),this.paginationParts.includes("pageInfo")||this.paginationParts.includes("pageInfoShort")){var f=this.paginationParts.includes("pageInfoShort")?e.formatDetailPagination(e.totalRows):e.formatShowingRows(this.pageFrom,this.pageTo,e.totalRows,e.totalNotFiltered);c.push('<span class="pagination-info">\n      '.concat(f,"\n      </span>"))}if(this.paginationParts.includes("pageSize")){c.push('<div class="page-list">');var p=['<div class="'.concat(this.constants.classes.paginationDropdown,'">\n        <button class="').concat(this.constants.buttonsClass,' dropdown-toggle" type="button" ').concat(this.constants.dataToggle,'="dropdown">\n        <span class="page-size">\n        ').concat(h?e.formatAllRows():e.pageSize,"\n        </span>\n        ").concat(this.constants.html.dropdownCaret,"\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];d.forEach((function(i,n){var o;(!e.smartDisplay||0===n||d[n-1]<e.totalRows||i===e.formatAllRows())&&(o=h?i===e.formatAllRows()?t.constants.classes.dropdownActive:"":i===e.pageSize?t.constants.classes.dropdownActive:"",p.push(ua.sprintf(t.constants.html.pageDropdownItem,o,i)))})),p.push("".concat(this.constants.html.pageDropdown[1],"</div>")),c.push(e.formatRecordsPerPage(p.join("")))}if((this.paginationParts.includes("pageInfo")||this.paginationParts.includes("pageInfoShort")||this.paginationParts.includes("pageSize"))&&c.push("</div></div>"),this.paginationParts.includes("pageList")){c.push('<div class="'.concat(this.constants.classes.pull,"-").concat(e.paginationHAlign,' pagination">'),ua.sprintf(this.constants.html.pagination[0],ua.sprintf(" pagination-%s",e.iconSize)),ua.sprintf(this.constants.html.paginationItem," page-pre",e.formatSRPaginationPreText(),e.paginationPreText)),this.totalPages<e.paginationSuccessivelySize?(n=1,o=this.totalPages):o=(n=e.pageNumber-e.paginationPagesBySide)+2*e.paginationPagesBySide,e.pageNumber<e.paginationSuccessivelySize-1&&(o=e.paginationSuccessivelySize),e.paginationSuccessivelySize>this.totalPages-n&&(n=n-(e.paginationSuccessivelySize-(this.totalPages-n))+1),n<1&&(n=1),o>this.totalPages&&(o=this.totalPages);var g=Math.round(e.paginationPagesBySide/2),v=function(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return ua.sprintf(t.constants.html.paginationItem,n+(i===e.pageNumber?" ".concat(t.constants.classes.paginationActive):""),e.formatSRPaginationPageText(i),i)};if(n>1){var b=e.paginationPagesBySide;for(b>=n&&(b=n-1),i=1;i<=b;i++)c.push(v(i));n-1===b+1?(i=n-1,c.push(v(i))):n-1>b&&(n-2*e.paginationPagesBySide>e.paginationPagesBySide&&e.paginationUseIntermediate?(i=Math.round((n-g)/2+g),c.push(v(i," page-intermediate"))):c.push(ua.sprintf(this.constants.html.paginationItem," page-first-separator disabled","","...")))}for(i=n;i<=o;i++)c.push(v(i));if(this.totalPages>o){var m=this.totalPages-(e.paginationPagesBySide-1);for(o>=m&&(m=o+1),o+1===m-1?(i=o+1,c.push(v(i))):m>o+1&&(this.totalPages-o>2*e.paginationPagesBySide&&e.paginationUseIntermediate?(i=Math.round((this.totalPages-g-o)/2+o),c.push(v(i," page-intermediate"))):c.push(ua.sprintf(this.constants.html.paginationItem," page-last-separator disabled","","..."))),i=m;i<=this.totalPages;i++)c.push(v(i))}c.push(ua.sprintf(this.constants.html.paginationItem," page-next",e.formatSRPaginationNextText(),e.paginationNextText)),c.push(this.constants.html.pagination[1],"</div>")}this.$pagination.html(c.join(""));var y=["bottom","both"].includes(e.paginationVAlign)?" ".concat(this.constants.classes.dropup):"";this.$pagination.last().find(".page-list > div").addClass(y),e.onlyInfoPagination||(a=this.$pagination.find(".page-list a"),s=this.$pagination.find(".page-pre"),r=this.$pagination.find(".page-next"),l=this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator"),this.totalPages<=1&&this.$pagination.find("div.pagination").hide(),e.smartDisplay&&(d.length<2||e.totalRows<=d[0])&&this.$pagination.find("span.page-list").hide(),this.$pagination[this.getData().length?"show":"hide"](),e.paginationLoop||(1===e.pageNumber&&s.addClass("disabled"),e.pageNumber===this.totalPages&&r.addClass("disabled")),h&&(e.pageSize=e.formatAllRows()),a.off("click").on("click",(function(e){return t.onPageListChange(e)})),s.off("click").on("click",(function(e){return t.onPagePre(e)})),r.off("click").on("click",(function(e){return t.onPageNext(e)})),l.off("click").on("click",(function(e){return t.onPageNumber(e)})))}else this.$pagination.hide()}},{key:"updatePagination",value:function(t){t&&i.default(t.currentTarget).hasClass("disabled")||(this.options.maintainMetaData||this.resetRows(),this.initPagination(),this.trigger("page-change",this.options.pageNumber,this.options.pageSize),"server"===this.options.sidePagination?this.initServer():this.initBody())}},{key:"onPageListChange",value:function(t){t.preventDefault();var e=i.default(t.currentTarget);return e.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive),this.options.pageSize=e.text().toUpperCase()===this.options.formatAllRows().toUpperCase()?this.options.formatAllRows():+e.text(),this.$toolbar.find(".page-size").text(this.options.pageSize),this.updatePagination(t),!1}},{key:"onPagePre",value:function(t){return t.preventDefault(),this.options.pageNumber-1==0?this.options.pageNumber=this.options.totalPages:this.options.pageNumber--,this.updatePagination(t),!1}},{key:"onPageNext",value:function(t){return t.preventDefault(),this.options.pageNumber+1>this.options.totalPages?this.options.pageNumber=1:this.options.pageNumber++,this.updatePagination(t),!1}},{key:"onPageNumber",value:function(t){if(t.preventDefault(),this.options.pageNumber!==+i.default(t.currentTarget).text())return this.options.pageNumber=+i.default(t.currentTarget).text(),this.updatePagination(t),!1}},{key:"initRow",value:function(t,e,i,o){var a=this,s=[],l={},c=[],h="",u={},d=[];if(!(ua.findIndex(this.hiddenRows,t)>-1)){if((l=ua.calculateObjectValue(this.options,this.options.rowStyle,[t,e],l))&&l.css)for(var f=0,p=Object.entries(l.css);f<p.length;f++){var g=r(p[f],2),v=g[0],b=g[1];c.push("".concat(v,": ").concat(b))}if(u=ua.calculateObjectValue(this.options,this.options.rowAttributes,[t,e],u))for(var m=0,y=Object.entries(u);m<y.length;m++){var w=r(y[m],2),S=w[0],x=w[1];d.push("".concat(S,'="').concat(ua.escapeHTML(x),'"'))}if(t._data&&!ua.isEmptyObject(t._data))for(var k=0,O=Object.entries(t._data);k<O.length;k++){var C=r(O[k],2),T=C[0],P=C[1];if("index"===T)return;h+=" data-".concat(T,"='").concat("object"===n(P)?JSON.stringify(P):P,"'")}s.push("<tr",ua.sprintf(" %s",d.length?d.join(" "):void 0),ua.sprintf(' id="%s"',Array.isArray(t)?void 0:t._id),ua.sprintf(' class="%s"',l.classes||(Array.isArray(t)?void 0:t._class)),ua.sprintf(' style="%s"',Array.isArray(t)?void 0:t._style),' data-index="'.concat(e,'"'),ua.sprintf(' data-uniqueid="%s"',ua.getItemField(t,this.options.uniqueId,!1)),ua.sprintf(' data-has-detail-view="%s"',this.options.detailView&&ua.calculateObjectValue(null,this.options.detailFilter,[e,t])?"true":void 0),ua.sprintf("%s",h),">"),this.options.cardView&&s.push('<td colspan="'.concat(this.header.fields.length,'"><div class="card-views">'));var I="";return ua.hasDetailViewIcon(this.options)&&(I="<td>",ua.calculateObjectValue(null,this.options.detailFilter,[e,t])&&(I+='\n          <a class="detail-icon" href="#">\n          '.concat(ua.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen),"\n          </a>\n        ")),I+="</td>"),I&&"right"!==this.options.detailViewAlign&&s.push(I),this.header.fields.forEach((function(i,n){var o="",l=ua.getItemField(t,i,a.options.escape),h="",u="",d={},f="",p=a.header.classes[n],g="",v="",b="",m="",y="",w="",S=a.columns[n];if((!a.fromHtml&&!a.autoMergeCells||void 0!==l||S.checkbox||S.radio)&&S.visible&&(!a.options.cardView||S.cardVisible)){if(S.escape&&(l=ua.escapeHTML(l)),c.concat([a.header.styles[n]]).length&&(v+="".concat(c.concat([a.header.styles[n]]).join("; "))),t["_".concat(i,"_style")]&&(v+="".concat(t["_".concat(i,"_style")])),v&&(g=' style="'.concat(v,'"')),t["_".concat(i,"_id")]&&(f=ua.sprintf(' id="%s"',t["_".concat(i,"_id")])),t["_".concat(i,"_class")]&&(p=ua.sprintf(' class="%s"',t["_".concat(i,"_class")])),t["_".concat(i,"_rowspan")]&&(m=ua.sprintf(' rowspan="%s"',t["_".concat(i,"_rowspan")])),t["_".concat(i,"_colspan")]&&(y=ua.sprintf(' colspan="%s"',t["_".concat(i,"_colspan")])),t["_".concat(i,"_title")]&&(w=ua.sprintf(' title="%s"',t["_".concat(i,"_title")])),(d=ua.calculateObjectValue(a.header,a.header.cellStyles[n],[l,t,e,i],d)).classes&&(p=' class="'.concat(d.classes,'"')),d.css){for(var x=[],k=0,O=Object.entries(d.css);k<O.length;k++){var C=r(O[k],2),T=C[0],P=C[1];x.push("".concat(T,": ").concat(P))}g=' style="'.concat(x.concat(a.header.styles[n]).join("; "),'"')}if(h=ua.calculateObjectValue(S,a.header.formatters[n],[l,t,e,i],l),S.checkbox||S.radio||(h=null==h?a.options.undefinedText:h),S.searchable&&a.searchText&&a.options.searchHighlight){var I="",A=new RegExp("(".concat(a.searchText.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),")"),"gim"),$="<mark>$1</mark>";if(h&&/<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(h)){var E=(new DOMParser).parseFromString(h.toString(),"text/html").documentElement.textContent,R=E.replace(A,$);I=h.replace(new RegExp("(>\\s*)(".concat(E,")(\\s*)"),"gm"),"$1".concat(R,"$3"))}else I=h.toString().replace(A,$);h=ua.calculateObjectValue(S,S.searchHighlightFormatter,[h,a.searchText],I)}if(t["_".concat(i,"_data")]&&!ua.isEmptyObject(t["_".concat(i,"_data")]))for(var j=0,_=Object.entries(t["_".concat(i,"_data")]);j<_.length;j++){var N=r(_[j],2),F=N[0],D=N[1];if("index"===F)return;b+=" data-".concat(F,'="').concat(D,'"')}if(S.checkbox||S.radio){u=S.checkbox?"checkbox":u,u=S.radio?"radio":u;var V=S.class||"",B=ua.isObject(h)&&h.hasOwnProperty("checked")?h.checked:(!0===h||l)&&!1!==h,L=!S.checkboxEnabled||h&&h.disabled;o=[a.options.cardView?'<div class="card-view '.concat(V,'">'):'<td class="bs-checkbox '.concat(V,'"').concat(p).concat(g,">"),'<label>\n            <input\n            data-index="'.concat(e,'"\n            name="').concat(a.options.selectItemName,'"\n            type="').concat(u,'"\n            ').concat(ua.sprintf('value="%s"',t[a.options.idField]),"\n            ").concat(ua.sprintf('checked="%s"',B?"checked":void 0),"\n            ").concat(ua.sprintf('disabled="%s"',L?"disabled":void 0)," />\n            <span></span>\n            </label>"),a.header.formatters[n]&&"string"==typeof h?h:"",a.options.cardView?"</div>":"</td>"].join(""),t[a.header.stateField]=!0===h||!!l||h&&h.checked}else if(a.options.cardView){var H=a.options.showHeader?'<span class="card-view-title '.concat(d.classes,'"').concat(g,">").concat(ua.getFieldTitle(a.columns,i),"</span>"):"";o='<div class="card-view">'.concat(H,'<span class="card-view-value ').concat(d.classes,'"').concat(g,">").concat(h,"</span></div>"),a.options.smartDisplay&&""===h&&(o='<div class="card-view"></div>')}else o="<td".concat(f).concat(p).concat(g).concat(b).concat(m).concat(y).concat(w,">").concat(h,"</td>");s.push(o)}})),I&&"right"===this.options.detailViewAlign&&s.push(I),this.options.cardView&&s.push("</div></td>"),s.push("</tr>"),s.join("")}}},{key:"initBody",value:function(t){var e=this,n=this.getData();this.trigger("pre-body",n),this.$body=this.$el.find(">tbody"),this.$body.length||(this.$body=i.default("<tbody></tbody>").appendTo(this.$el)),this.options.pagination&&"server"!==this.options.sidePagination||(this.pageFrom=1,this.pageTo=n.length);var o=[],a=i.default(document.createDocumentFragment()),s=!1;this.autoMergeCells=ua.checkAutoMergeCells(n.slice(this.pageFrom-1,this.pageTo));for(var r=this.pageFrom-1;r<this.pageTo;r++){var l=n[r],c=this.initRow(l,r,n,a);s=s||!!c,c&&"string"==typeof c&&(this.options.virtualScroll?o.push(c):a.append(c))}s?this.options.virtualScroll?(this.virtualScroll&&this.virtualScroll.destroy(),this.virtualScroll=new da({rows:o,fixedScroll:t,scrollEl:this.$tableBody[0],contentEl:this.$body[0],itemHeight:this.options.virtualScrollItemHeight,callback:function(){e.fitHeader(),e.initBodyEvent()}})):this.$body.html(a):this.$body.html('<tr class="no-records-found">'.concat(ua.sprintf('<td colspan="%s">%s</td>',this.getVisibleFields().length+ua.getDetailViewIndexOffset(this.options),this.options.formatNoMatches()),"</tr>")),t||this.scrollTo(0),this.initBodyEvent(),this.updateSelected(),this.initFooter(),this.resetView(),"server"!==this.options.sidePagination&&(this.options.totalRows=n.length),this.trigger("post-body",n)}},{key:"initBodyEvent",value:function(){var t=this;this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick",(function(e){var n=i.default(e.currentTarget),o=n.parent(),a=i.default(e.target).parents(".card-views").children(),s=i.default(e.target).parents(".card-view"),r=o.data("index"),l=t.data[r],c=t.options.cardView?a.index(s):n[0].cellIndex,h=t.getVisibleFields()[c-ua.getDetailViewIndexOffset(t.options)],u=t.columns[t.fieldsColumnsIndex[h]],d=ua.getItemField(l,h,t.options.escape);if(!n.find(".detail-icon").length){if(t.trigger("click"===e.type?"click-cell":"dbl-click-cell",h,d,l,n),t.trigger("click"===e.type?"click-row":"dbl-click-row",l,o,h),"click"===e.type&&t.options.clickToSelect&&u.clickToSelect&&!ua.calculateObjectValue(t.options,t.options.ignoreClickToSelectOn,[e.target])){var f=o.find(ua.sprintf('[name="%s"]',t.options.selectItemName));f.length&&f[0].click()}"click"===e.type&&t.options.detailViewByClick&&t.toggleDetailView(r,t.header.detailFormatters[t.fieldsColumnsIndex[h]])}})).off("mousedown").on("mousedown",(function(e){t.multipleSelectRowCtrlKey=e.ctrlKey||e.metaKey,t.multipleSelectRowShiftKey=e.shiftKey})),this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click",(function(e){return e.preventDefault(),t.toggleDetailView(i.default(e.currentTarget).parent().parent().data("index")),!1})),this.$selectItem=this.$body.find(ua.sprintf('[name="%s"]',this.options.selectItemName)),this.$selectItem.off("click").on("click",(function(e){e.stopImmediatePropagation();var n=i.default(e.currentTarget);t._toggleCheck(n.prop("checked"),n.data("index"))})),this.header.events.forEach((function(e,n){var o=e;if(o){"string"==typeof o&&(o=ua.calculateObjectValue(null,o));var a=t.header.fields[n],s=t.getVisibleFields().indexOf(a);if(-1!==s){s+=ua.getDetailViewIndexOffset(t.options);var r=function(e){if(!o.hasOwnProperty(e))return"continue";var n=o[e];t.$body.find(">tr:not(.no-records-found)").each((function(o,r){var l=i.default(r),c=l.find(t.options.cardView?".card-views>.card-view":">td").eq(s),h=e.indexOf(" "),u=e.substring(0,h),d=e.substring(h+1);c.find(d).off(u).on(u,(function(e){var i=l.data("index"),o=t.data[i],s=o[a];n.apply(t,[e,s,o,i])}))}))};for(var l in o)r(l)}}}))}},{key:"initServer",value:function(t,e,n){var o=this,a={},s=this.header.fields.indexOf(this.options.sortName),r={searchText:this.searchText,sortName:this.options.sortName,sortOrder:this.options.sortOrder};if(this.header.sortNames[s]&&(r.sortName=this.header.sortNames[s]),this.options.pagination&&"server"===this.options.sidePagination&&(r.pageSize=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,r.pageNumber=this.options.pageNumber),n||this.options.url||this.options.ajax){if("limit"===this.options.queryParamsType&&(r={search:r.searchText,sort:r.sortName,order:r.sortOrder},this.options.pagination&&"server"===this.options.sidePagination&&(r.offset=this.options.pageSize===this.options.formatAllRows()?0:this.options.pageSize*(this.options.pageNumber-1),r.limit=this.options.pageSize===this.options.formatAllRows()?this.options.totalRows:this.options.pageSize,0===r.limit&&delete r.limit)),this.options.search&&"server"===this.options.sidePagination&&this.columns.filter((function(t){return!t.searchable})).length){r.searchable=[];var l,c=u(this.columns);try{for(c.s();!(l=c.n()).done;){var h=l.value;!h.checkbox&&h.searchable&&(this.options.visibleSearch&&h.visible||!this.options.visibleSearch)&&r.searchable.push(h.field)}}catch(t){c.e(t)}finally{c.f()}}if(ua.isEmptyObject(this.filterColumnsPartial)||(r.filter=JSON.stringify(this.filterColumnsPartial,null)),i.default.extend(r,e||{}),!1!==(a=ua.calculateObjectValue(this.options,this.options.queryParams,[r],a))){t||this.showLoading();var d=i.default.extend({},ua.calculateObjectValue(null,this.options.ajaxOptions),{type:this.options.method,url:n||this.options.url,data:"application/json"===this.options.contentType&&"post"===this.options.method?JSON.stringify(a):a,cache:this.options.cache,contentType:this.options.contentType,dataType:this.options.dataType,success:function(e,i,n){var a=ua.calculateObjectValue(o.options,o.options.responseHandler,[e,n],e);o.load(a),o.trigger("load-success",a,n&&n.status,n),t||o.hideLoading(),"server"===o.options.sidePagination&&a[o.options.totalField]>0&&!a[o.options.dataField].length&&o.updatePagination()},error:function(e){var i=[];"server"===o.options.sidePagination&&((i={})[o.options.totalField]=0,i[o.options.dataField]=[]),o.load(i),o.trigger("load-error",e&&e.status,e),t||o.$tableLoading.hide()}});return this.options.ajax?ua.calculateObjectValue(this,this.options.ajax,[d],null):(this._xhr&&4!==this._xhr.readyState&&this._xhr.abort(),this._xhr=i.default.ajax(d)),a}}}},{key:"initSearchText",value:function(){if(this.options.search&&(this.searchText="",""!==this.options.searchText)){var t=ua.getSearchInput(this);t.val(this.options.searchText),this.onSearch({currentTarget:t,firedByInitSearchText:!0})}}},{key:"getCaret",value:function(){var t=this;this.$header.find("th").each((function(e,n){i.default(n).find(".sortable").removeClass("desc asc").addClass(i.default(n).data("field")===t.options.sortName?t.options.sortOrder:"both")}))}},{key:"updateSelected",value:function(){var t=this.$selectItem.filter(":enabled").length&&this.$selectItem.filter(":enabled").length===this.$selectItem.filter(":enabled").filter(":checked").length;this.$selectAll.add(this.$selectAll_).prop("checked",t),this.$selectItem.each((function(t,e){i.default(e).closest("tr")[i.default(e).prop("checked")?"addClass":"removeClass"]("selected")}))}},{key:"updateRows",value:function(){var t=this;this.$selectItem.each((function(e,n){t.data[i.default(n).data("index")][t.header.stateField]=i.default(n).prop("checked")}))}},{key:"resetRows",value:function(){var t,e=u(this.data);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.$selectAll.prop("checked",!1),this.$selectItem.prop("checked",!1),this.header.stateField&&(i[this.header.stateField]=!1)}}catch(t){e.e(t)}finally{e.f()}this.initHiddenRows()}},{key:"trigger",value:function(e){for(var n,o,a="".concat(e,".bs.table"),s=arguments.length,r=new Array(s>1?s-1:0),l=1;l<s;l++)r[l-1]=arguments[l];(n=this.options)[t.EVENTS[a]].apply(n,[].concat(r,[this])),this.$el.trigger(i.default.Event(a,{sender:this}),r),(o=this.options).onAll.apply(o,[a].concat([].concat(r,[this]))),this.$el.trigger(i.default.Event("all.bs.table",{sender:this}),[a,r])}},{key:"resetHeader",value:function(){var t=this;clearTimeout(this.timeoutId_),this.timeoutId_=setTimeout((function(){return t.fitHeader()}),this.$el.is(":hidden")?100:0)}},{key:"fitHeader",value:function(){var t=this;if(this.$el.is(":hidden"))this.timeoutId_=setTimeout((function(){return t.fitHeader()}),100);else{var e=this.$tableBody.get(0),n=e.scrollWidth>e.clientWidth&&e.scrollHeight>e.clientHeight+this.$header.outerHeight()?ua.getScrollBarWidth():0;this.$el.css("margin-top",-this.$header.outerHeight());var o=i.default(":focus");if(o.length>0){var a=o.parents("th");if(a.length>0){var s=a.attr("data-field");if(void 0!==s){var r=this.$header.find("[data-field='".concat(s,"']"));r.length>0&&r.find(":input").addClass("focus-temp")}}}this.$header_=this.$header.clone(!0,!0),this.$selectAll_=this.$header_.find('[name="btSelectAll"]'),this.$tableHeader.css("margin-right",n).find("table").css("width",this.$el.outerWidth()).html("").attr("class",this.$el.attr("class")).append(this.$header_),this.$tableLoading.css("width",this.$el.outerWidth());var l=i.default(".focus-temp:visible:eq(0)");l.length>0&&(l.focus(),this.$header.find(".focus-temp").removeClass("focus-temp")),this.$header.find("th[data-field]").each((function(e,n){t.$header_.find(ua.sprintf('th[data-field="%s"]',i.default(n).data("field"))).data(i.default(n).data())}));for(var c=this.getVisibleFields(),h=this.$header_.find("th"),u=this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0);u.length&&u.find('>td[colspan]:not([colspan="1"])').length;)u=u.next();var d=u.find("> *").length;u.find("> *").each((function(e,n){var o=i.default(n);if(ua.hasDetailViewIcon(t.options)&&(0===e&&"right"!==t.options.detailViewAlign||e===d-1&&"right"===t.options.detailViewAlign)){var a=h.filter(".detail"),s=a.innerWidth()-a.find(".fht-cell").width();a.find(".fht-cell").width(o.innerWidth()-s)}else{var r=e-ua.getDetailViewIndexOffset(t.options),l=t.$header_.find(ua.sprintf('th[data-field="%s"]',c[r]));l.length>1&&(l=i.default(h[o[0].cellIndex]));var u=l.innerWidth()-l.find(".fht-cell").width();l.find(".fht-cell").width(o.innerWidth()-u)}})),this.horizontalScroll(),this.trigger("post-header")}}},{key:"initFooter",value:function(){if(this.options.showFooter&&!this.options.cardView){var t=this.getData(),e=[],i="";ua.hasDetailViewIcon(this.options)&&(i='<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>'),i&&"right"!==this.options.detailViewAlign&&e.push(i);var n,o=u(this.columns);try{for(o.s();!(n=o.n()).done;){var a,s,l=n.value,c=[],h={},d=ua.sprintf(' class="%s"',l.class);if(!(!l.visible||this.footerData&&this.footerData.length>0&&!(l.field in this.footerData[0]))){if(this.options.cardView&&!l.cardVisible)return;if(a=ua.sprintf("text-align: %s; ",l.falign?l.falign:l.align),s=ua.sprintf("vertical-align: %s; ",l.valign),(h=ua.calculateObjectValue(null,this.options.footerStyle,[l]))&&h.css)for(var f=0,p=Object.entries(h.css);f<p.length;f++){var g=r(p[f],2),v=g[0],b=g[1];c.push("".concat(v,": ").concat(b))}h&&h.classes&&(d=ua.sprintf(' class="%s"',l.class?[l.class,h.classes].join(" "):h.classes)),e.push("<th",d,ua.sprintf(' style="%s"',a+s+c.concat().join("; ")));var m=0;this.footerData&&this.footerData.length>0&&(m=this.footerData[0]["_".concat(l.field,"_colspan")]||0),m&&e.push(' colspan="'.concat(m,'" ')),e.push(">"),e.push('<div class="th-inner">');var y="";this.footerData&&this.footerData.length>0&&(y=this.footerData[0][l.field]||""),e.push(ua.calculateObjectValue(l,l.footerFormatter,[t,y],y)),e.push("</div>"),e.push('<div class="fht-cell"></div>'),e.push("</div>"),e.push("</th>")}}}catch(t){o.e(t)}finally{o.f()}i&&"right"===this.options.detailViewAlign&&e.push(i),this.options.height||this.$tableFooter.length||(this.$el.append("<tfoot><tr></tr></tfoot>"),this.$tableFooter=this.$el.find("tfoot")),this.$tableFooter.find("tr").length||this.$tableFooter.html("<table><thead><tr></tr></thead></table>"),this.$tableFooter.find("tr").html(e.join("")),this.trigger("post-footer",this.$tableFooter)}}},{key:"fitFooter",value:function(){var t=this;if(this.$el.is(":hidden"))setTimeout((function(){return t.fitFooter()}),100);else{var e=this.$tableBody.get(0),n=e.scrollWidth>e.clientWidth&&e.scrollHeight>e.clientHeight+this.$header.outerHeight()?ua.getScrollBarWidth():0;this.$tableFooter.css("margin-right",n).find("table").css("width",this.$el.outerWidth()).attr("class",this.$el.attr("class"));var o=this.$tableFooter.find("th"),a=this.$body.find(">tr:first-child:not(.no-records-found)");for(o.find(".fht-cell").width("auto");a.length&&a.find('>td[colspan]:not([colspan="1"])').length;)a=a.next();var s=a.find("> *").length;a.find("> *").each((function(e,n){var a=i.default(n);if(ua.hasDetailViewIcon(t.options)&&(0===e&&"left"===t.options.detailViewAlign||e===s-1&&"right"===t.options.detailViewAlign)){var r=o.filter(".detail"),l=r.innerWidth()-r.find(".fht-cell").width();r.find(".fht-cell").width(a.innerWidth()-l)}else{var c=o.eq(e),h=c.innerWidth()-c.find(".fht-cell").width();c.find(".fht-cell").width(a.innerWidth()-h)}})),this.horizontalScroll()}}},{key:"horizontalScroll",value:function(){var t=this;this.$tableBody.off("scroll").on("scroll",(function(){var e=t.$tableBody.scrollLeft();t.options.showHeader&&t.options.height&&t.$tableHeader.scrollLeft(e),t.options.showFooter&&!t.options.cardView&&t.$tableFooter.scrollLeft(e),t.trigger("scroll-body",t.$tableBody)}))}},{key:"getVisibleFields",value:function(){var t,e=[],i=u(this.header.fields);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=this.columns[this.fieldsColumnsIndex[n]];o&&o.visible&&e.push(n)}}catch(t){i.e(t)}finally{i.f()}return e}},{key:"initHiddenRows",value:function(){this.hiddenRows=[]}},{key:"getOptions",value:function(){var t=i.default.extend({},this.options);return delete t.data,i.default.extend(!0,{},t)}},{key:"refreshOptions",value:function(t){ua.compareObjects(this.options,t,!0)||(this.options=i.default.extend(this.options,t),this.trigger("refresh-options",this.options),this.destroy(),this.init())}},{key:"getData",value:function(t){var e=this,i=this.options.data;if(!(this.searchText||this.options.customSearch||void 0!==this.options.sortName||this.enableCustomSort)&&ua.isEmptyObject(this.filterColumns)&&ua.isEmptyObject(this.filterColumnsPartial)||t&&t.unfiltered||(i=this.data),t&&t.useCurrentPage&&(i=i.slice(this.pageFrom-1,this.pageTo)),t&&!t.includeHiddenRows){var n=this.getHiddenRows();i=i.filter((function(t){return-1===ua.findIndex(n,t)}))}return t&&t.formatted&&i.forEach((function(t){for(var i=0,n=Object.entries(t);i<n.length;i++){var o=r(n[i],2),a=o[0],s=o[1],l=e.columns[e.fieldsColumnsIndex[a]];if(!l)return;t[a]=ua.calculateObjectValue(l,e.header.formatters[l.fieldIndex],[s,t,t.index,l.field],s)}})),i}},{key:"getSelections",value:function(){var t=this;return(this.options.maintainMetaData?this.options.data:this.data).filter((function(e){return!0===e[t.header.stateField]}))}},{key:"load",value:function(t){var e,i=t;this.options.pagination&&"server"===this.options.sidePagination&&(this.options.totalRows=i[this.options.totalField],this.options.totalNotFiltered=i[this.options.totalNotFilteredField],this.footerData=i[this.options.footerField]?[i[this.options.footerField]]:void 0),e=i.fixedScroll,i=Array.isArray(i)?i:i[this.options.dataField],this.initData(i),this.initSearch(),this.initPagination(),this.initBody(e)}},{key:"append",value:function(t){this.initData(t,"append"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"prepend",value:function(t){this.initData(t,"prepend"),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"remove",value:function(t){for(var e=0,i=this.options.data.length-1;i>=0;i--){var n=this.options.data[i];(n.hasOwnProperty(t.field)||"$index"===t.field)&&((!n.hasOwnProperty(t.field)&&"$index"===t.field&&t.values.includes(i)||t.values.includes(n[t.field]))&&(e++,this.options.data.splice(i,1)))}e&&("server"===this.options.sidePagination&&(this.options.totalRows-=e,this.data=l(this.options.data)),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}},{key:"removeAll",value:function(){this.options.data.length>0&&(this.options.data.splice(0,this.options.data.length),this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"insertRow",value:function(t){t.hasOwnProperty("index")&&t.hasOwnProperty("row")&&(this.options.data.splice(t.index,0,t.row),this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0))}},{key:"updateRow",value:function(t){var e,n=u(Array.isArray(t)?t:[t]);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.hasOwnProperty("index")&&o.hasOwnProperty("row")&&(o.hasOwnProperty("replace")&&o.replace?this.options.data[o.index]=o.row:i.default.extend(this.options.data[o.index],o.row))}}catch(t){n.e(t)}finally{n.f()}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"getRowByUniqueId",value:function(t){var e,i,n,o=this.options.uniqueId,a=t,s=null;for(e=this.options.data.length-1;e>=0;e--){if((i=this.options.data[e]).hasOwnProperty(o))n=i[o];else{if(!i._data||!i._data.hasOwnProperty(o))continue;n=i._data[o]}if("string"==typeof n?a=a.toString():"number"==typeof n&&(Number(n)===n&&n%1==0?a=parseInt(a):n===Number(n)&&0!==n&&(a=parseFloat(a))),n===a){s=i;break}}return s}},{key:"updateByUniqueId",value:function(t){var e,n=u(Array.isArray(t)?t:[t]);try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.hasOwnProperty("id")&&o.hasOwnProperty("row")){var a=this.options.data.indexOf(this.getRowByUniqueId(o.id));-1!==a&&(o.hasOwnProperty("replace")&&o.replace?this.options.data[a]=o.row:i.default.extend(this.options.data[a],o.row))}}}catch(t){n.e(t)}finally{n.f()}this.initSearch(),this.initPagination(),this.initSort(),this.initBody(!0)}},{key:"removeByUniqueId",value:function(t){var e=this.options.data.length,i=this.getRowByUniqueId(t);i&&this.options.data.splice(this.options.data.indexOf(i),1),e!==this.options.data.length&&("server"===this.options.sidePagination&&(this.options.totalRows-=1,this.data=l(this.options.data)),this.initSearch(),this.initPagination(),this.initBody(!0))}},{key:"updateCell",value:function(t){t.hasOwnProperty("index")&&t.hasOwnProperty("field")&&t.hasOwnProperty("value")&&(this.data[t.index][t.field]=t.value,!1!==t.reinit&&(this.initSort(),this.initBody(!0)))}},{key:"updateCellByUniqueId",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){var i=t.id,n=t.field,o=t.value,a=e.options.data.indexOf(e.getRowByUniqueId(i));-1!==a&&(e.options.data[a][n]=o)})),!1!==t.reinit&&(this.initSort(),this.initBody(!0))}},{key:"showRow",value:function(t){this._toggleRow(t,!0)}},{key:"hideRow",value:function(t){this._toggleRow(t,!1)}},{key:"_toggleRow",value:function(t,e){var i;if(t.hasOwnProperty("index")?i=this.getData()[t.index]:t.hasOwnProperty("uniqueId")&&(i=this.getRowByUniqueId(t.uniqueId)),i){var n=ua.findIndex(this.hiddenRows,i);e||-1!==n?e&&n>-1&&this.hiddenRows.splice(n,1):this.hiddenRows.push(i),this.initBody(!0),this.initPagination()}}},{key:"getHiddenRows",value:function(t){if(t)return this.initHiddenRows(),this.initBody(!0),void this.initPagination();var e,i=[],n=u(this.getData());try{for(n.s();!(e=n.n()).done;){var o=e.value;this.hiddenRows.includes(o)&&i.push(o)}}catch(t){n.e(t)}finally{n.f()}return this.hiddenRows=i,i}},{key:"showColumn",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){e._toggleColumn(e.fieldsColumnsIndex[t],!0,!0)}))}},{key:"hideColumn",value:function(t){var e=this;(Array.isArray(t)?t:[t]).forEach((function(t){e._toggleColumn(e.fieldsColumnsIndex[t],!1,!0)}))}},{key:"_toggleColumn",value:function(t,e,i){if(-1!==t&&this.columns[t].visible!==e&&(this.columns[t].visible=e,this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns)){var n=this.$toolbar.find('.keep-open input:not(".toggle-all")').prop("disabled",!1);i&&n.filter(ua.sprintf('[value="%s"]',t)).prop("checked",e),n.filter(":checked").length<=this.options.minimumCountColumns&&n.filter(":checked").prop("disabled",!0)}}},{key:"getVisibleColumns",value:function(){var t=this;return this.columns.filter((function(e){return e.visible&&!t.isSelectionColumn(e)}))}},{key:"getHiddenColumns",value:function(){return this.columns.filter((function(t){return!t.visible}))}},{key:"isSelectionColumn",value:function(t){return t.radio||t.checkbox}},{key:"showAllColumns",value:function(){this._toggleAllColumns(!0)}},{key:"hideAllColumns",value:function(){this._toggleAllColumns(!1)}},{key:"_toggleAllColumns",value:function(t){var e,n=this,o=u(this.columns.slice().reverse());try{for(o.s();!(e=o.n()).done;){var a=e.value;if(a.switchable){if(!t&&this.options.showColumns&&this.getVisibleColumns().length===this.options.minimumCountColumns)continue;a.visible=t}}}catch(t){o.e(t)}finally{o.f()}if(this.initHeader(),this.initSearch(),this.initPagination(),this.initBody(),this.options.showColumns){var s=this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop("disabled",!1);t?s.prop("checked",t):s.get().reverse().forEach((function(e){s.filter(":checked").length>n.options.minimumCountColumns&&i.default(e).prop("checked",t)})),s.filter(":checked").length<=this.options.minimumCountColumns&&s.filter(":checked").prop("disabled",!0)}}},{key:"mergeCells",value:function(t){var e,i,n=t.index,o=this.getVisibleFields().indexOf(t.field),a=t.rowspan||1,s=t.colspan||1,r=this.$body.find(">tr");o+=ua.getDetailViewIndexOffset(this.options);var l=r.eq(n).find(">td").eq(o);if(!(n<0||o<0||n>=this.data.length)){for(e=n;e<n+a;e++)for(i=o;i<o+s;i++)r.eq(e).find(">td").eq(i).hide();l.attr("rowspan",a).attr("colspan",s).show()}}},{key:"checkAll",value:function(){this._toggleCheckAll(!0)}},{key:"uncheckAll",value:function(){this._toggleCheckAll(!1)}},{key:"_toggleCheckAll",value:function(t){var e=this.getSelections();this.$selectAll.add(this.$selectAll_).prop("checked",t),this.$selectItem.filter(":enabled").prop("checked",t),this.updateRows(),this.updateSelected();var i=this.getSelections();t?this.trigger("check-all",i,e):this.trigger("uncheck-all",i,e)}},{key:"checkInvert",value:function(){var t=this.$selectItem.filter(":enabled"),e=t.filter(":checked");t.each((function(t,e){i.default(e).prop("checked",!i.default(e).prop("checked"))})),this.updateRows(),this.updateSelected(),this.trigger("uncheck-some",e),e=this.getSelections(),this.trigger("check-some",e)}},{key:"check",value:function(t){this._toggleCheck(!0,t)}},{key:"uncheck",value:function(t){this._toggleCheck(!1,t)}},{key:"_toggleCheck",value:function(t,e){var i=this.$selectItem.filter('[data-index="'.concat(e,'"]')),n=this.data[e];if(i.is(":radio")||this.options.singleSelect||this.options.multipleSelectRow&&!this.multipleSelectRowCtrlKey&&!this.multipleSelectRowShiftKey){var o,a=u(this.options.data);try{for(a.s();!(o=a.n()).done;){o.value[this.header.stateField]=!1}}catch(t){a.e(t)}finally{a.f()}this.$selectItem.filter(":checked").not(i).prop("checked",!1)}if(n[this.header.stateField]=t,this.options.multipleSelectRow){if(this.multipleSelectRowShiftKey&&this.multipleSelectRowLastSelectedIndex>=0)for(var s=r(this.multipleSelectRowLastSelectedIndex<e?[this.multipleSelectRowLastSelectedIndex,e]:[e,this.multipleSelectRowLastSelectedIndex],2),l=s[0],c=s[1],h=l+1;h<c;h++)this.data[h][this.header.stateField]=!0,this.$selectItem.filter('[data-index="'.concat(h,'"]')).prop("checked",!0);this.multipleSelectRowCtrlKey=!1,this.multipleSelectRowShiftKey=!1,this.multipleSelectRowLastSelectedIndex=t?e:-1}i.prop("checked",t),this.updateSelected(),this.trigger(t?"check":"uncheck",this.data[e],i)}},{key:"checkBy",value:function(t){this._toggleCheckBy(!0,t)}},{key:"uncheckBy",value:function(t){this._toggleCheckBy(!1,t)}},{key:"_toggleCheckBy",value:function(t,e){var i=this;if(e.hasOwnProperty("field")&&e.hasOwnProperty("values")){var n=[];this.data.forEach((function(o,a){if(!o.hasOwnProperty(e.field))return!1;if(e.values.includes(o[e.field])){var s=i.$selectItem.filter(":enabled").filter(ua.sprintf('[data-index="%s"]',a));if(!(s=t?s.not(":checked"):s.filter(":checked")).length)return;s.prop("checked",t),o[i.header.stateField]=t,n.push(o),i.trigger(t?"check":"uncheck",o,s)}})),this.updateSelected(),this.trigger(t?"check-some":"uncheck-some",n)}}},{key:"refresh",value:function(t){t&&t.url&&(this.options.url=t.url),t&&t.pageNumber&&(this.options.pageNumber=t.pageNumber),t&&t.pageSize&&(this.options.pageSize=t.pageSize),this.trigger("refresh",this.initServer(t&&t.silent,t&&t.query,t&&t.url))}},{key:"destroy",value:function(){this.$el.insertBefore(this.$container),i.default(this.options.toolbar).insertBefore(this.$el),this.$container.next().remove(),this.$container.remove(),this.$el.html(this.$el_.html()).css("margin-top","0").attr("class",this.$el_.attr("class")||"")}},{key:"resetView",value:function(t){var e=0;if(t&&t.height&&(this.options.height=t.height),this.$selectAll.prop("checked",this.$selectItem.length>0&&this.$selectItem.length===this.$selectItem.filter(":checked").length),this.$tableContainer.toggleClass("has-card-view",this.options.cardView),!this.options.cardView&&this.options.showHeader&&this.options.height?(this.$tableHeader.show(),this.resetHeader(),e+=this.$header.outerHeight(!0)+1):(this.$tableHeader.hide(),this.trigger("post-header")),!this.options.cardView&&this.options.showFooter&&(this.$tableFooter.show(),this.fitFooter(),this.options.height&&(e+=this.$tableFooter.outerHeight(!0))),this.$container.hasClass("fullscreen"))this.$tableContainer.css("height",""),this.$tableContainer.css("width","");else if(this.options.height){this.$tableBorder&&(this.$tableBorder.css("width",""),this.$tableBorder.css("height",""));var i=this.$toolbar.outerHeight(!0),n=this.$pagination.outerHeight(!0),o=this.options.height-i-n,a=this.$tableBody.find(">table"),s=a.outerHeight();if(this.$tableContainer.css("height","".concat(o,"px")),this.$tableBorder&&a.is(":visible")){var r=o-s-2;this.$tableBody[0].scrollWidth-this.$tableBody.innerWidth()&&(r-=ua.getScrollBarWidth()),this.$tableBorder.css("width","".concat(a.outerWidth(),"px")),this.$tableBorder.css("height","".concat(r,"px"))}}this.options.cardView?(this.$el.css("margin-top","0"),this.$tableContainer.css("padding-bottom","0"),this.$tableFooter.hide()):(this.getCaret(),this.$tableContainer.css("padding-bottom","".concat(e,"px"))),this.trigger("reset-view")}},{key:"showLoading",value:function(){this.$tableLoading.toggleClass("open",!0);var t=this.options.loadingFontSize;"auto"===this.options.loadingFontSize&&(t=.04*this.$tableLoading.width(),t=Math.max(12,t),t=Math.min(32,t),t="".concat(t,"px")),this.$tableLoading.find(".loading-text").css("font-size",t)}},{key:"hideLoading",value:function(){this.$tableLoading.toggleClass("open",!1)}},{key:"togglePagination",value:function(){this.options.pagination=!this.options.pagination;var t=this.options.showButtonIcons?this.options.pagination?this.options.icons.paginationSwitchDown:this.options.icons.paginationSwitchUp:"",e=this.options.showButtonText?this.options.pagination?this.options.formatPaginationSwitchUp():this.options.formatPaginationSwitchDown():"";this.$toolbar.find('button[name="paginationSwitch"]').html("".concat(ua.sprintf(this.constants.html.icon,this.options.iconsPrefix,t)," ").concat(e)),this.updatePagination()}},{key:"toggleFullscreen",value:function(){this.$el.closest(".bootstrap-table").toggleClass("fullscreen"),this.resetView()}},{key:"toggleView",value:function(){this.options.cardView=!this.options.cardView,this.initHeader();var t=this.options.showButtonIcons?this.options.cardView?this.options.icons.toggleOn:this.options.icons.toggleOff:"",e=this.options.showButtonText?this.options.cardView?this.options.formatToggleOff():this.options.formatToggleOn():"";this.$toolbar.find('button[name="toggle"]').html("".concat(ua.sprintf(this.constants.html.icon,this.options.iconsPrefix,t)," ").concat(e)),this.initBody(),this.trigger("toggle",this.options.cardView)}},{key:"resetSearch",value:function(t){var e=ua.getSearchInput(this);e.val(t||""),this.onSearch({currentTarget:e})}},{key:"filterBy",value:function(t,e){this.filterOptions=ua.isEmptyObject(e)?this.options.filterOptions:i.default.extend(this.options.filterOptions,e),this.filterColumns=ua.isEmptyObject(t)?{}:t,this.options.pageNumber=1,this.initSearch(),this.updatePagination()}},{key:"scrollTo",value:function(t){var e={unit:"px",value:0};"object"===n(t)?e=Object.assign(e,t):"string"==typeof t&&"bottom"===t?e.value=this.$tableBody[0].scrollHeight:"string"!=typeof t&&"number"!=typeof t||(e.value=t);var o=e.value;"rows"===e.unit&&(o=0,this.$body.find("> tr:lt(".concat(e.value,")")).each((function(t,e){o+=i.default(e).outerHeight(!0)}))),this.$tableBody.scrollTop(o)}},{key:"getScrollPosition",value:function(){return this.$tableBody.scrollTop()}},{key:"selectPage",value:function(t){t>0&&t<=this.options.totalPages&&(this.options.pageNumber=t,this.updatePagination())}},{key:"prevPage",value:function(){this.options.pageNumber>1&&(this.options.pageNumber--,this.updatePagination())}},{key:"nextPage",value:function(){this.options.pageNumber<this.options.totalPages&&(this.options.pageNumber++,this.updatePagination())}},{key:"toggleDetailView",value:function(t,e){this.$body.find(ua.sprintf('> tr[data-index="%s"]',t)).next().is("tr.detail-view")?this.collapseRow(t):this.expandRow(t,e),this.resetView()}},{key:"expandRow",value:function(t,e){var i=this.data[t],n=this.$body.find(ua.sprintf('> tr[data-index="%s"][data-has-detail-view]',t));if(!n.next().is("tr.detail-view")){this.options.detailViewIcon&&n.find("a.detail-icon").html(ua.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailClose)),n.after(ua.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>',n.children("td").length));var o=n.next().find("td"),a=e||this.options.detailFormatter,s=ua.calculateObjectValue(this.options,a,[t,i,o],"");1===o.length&&o.append(s),this.trigger("expand-row",t,i,o)}}},{key:"expandRowByUniqueId",value:function(t){var e=this.getRowByUniqueId(t);e&&this.expandRow(this.data.indexOf(e))}},{key:"collapseRow",value:function(t){var e=this.data[t],i=this.$body.find(ua.sprintf('> tr[data-index="%s"][data-has-detail-view]',t));i.next().is("tr.detail-view")&&(this.options.detailViewIcon&&i.find("a.detail-icon").html(ua.sprintf(this.constants.html.icon,this.options.iconsPrefix,this.options.icons.detailOpen)),this.trigger("collapse-row",t,e,i.next()),i.next().remove())}},{key:"collapseRowByUniqueId",value:function(t){var e=this.getRowByUniqueId(t);e&&this.collapseRow(this.data.indexOf(e))}},{key:"expandAllRows",value:function(){for(var t=this.$body.find("> tr[data-index][data-has-detail-view]"),e=0;e<t.length;e++)this.expandRow(i.default(t[e]).data("index"))}},{key:"collapseAllRows",value:function(){for(var t=this.$body.find("> tr[data-index][data-has-detail-view]"),e=0;e<t.length;e++)this.collapseRow(i.default(t[e]).data("index"))}},{key:"updateColumnTitle",value:function(t){t.hasOwnProperty("field")&&t.hasOwnProperty("title")&&(this.columns[this.fieldsColumnsIndex[t.field]].title=this.options.escape?ua.escapeHTML(t.title):t.title,this.columns[this.fieldsColumnsIndex[t.field]].visible&&(this.$header.find("th[data-field]").each((function(e,n){if(i.default(n).data("field")===t.field)return i.default(i.default(n).find(".th-inner")[0]).text(t.title),!1})),this.resetView()))}},{key:"updateFormatText",value:function(t,e){/^format/.test(t)&&this.options[t]&&("string"==typeof e?this.options[t]=function(){return e}:"function"==typeof e&&(this.options[t]=e),this.initToolbar(),this.initPagination(),this.initBody())}}]),t}();return fa.VERSION=Qo.VERSION,fa.DEFAULTS=Qo.DEFAULTS,fa.LOCALES=Qo.LOCALES,fa.COLUMN_DEFAULTS=Qo.COLUMN_DEFAULTS,fa.METHODS=Qo.METHODS,fa.EVENTS=Qo.EVENTS,i.default.BootstrapTable=fa,i.default.fn.bootstrapTable=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),a=1;a<e;a++)o[a-1]=arguments[a];var s;return this.each((function(e,a){var r=i.default(a).data("bootstrap.table"),l=i.default.extend({},fa.DEFAULTS,i.default(a).data(),"object"===n(t)&&t);if("string"==typeof t){var c;if(!Qo.METHODS.includes(t))throw new Error("Unknown method: ".concat(t));if(!r)return;s=(c=r)[t].apply(c,o),"destroy"===t&&i.default(a).removeData("bootstrap.table")}r||(r=new i.default.BootstrapTable(a,l),i.default(a).data("bootstrap.table",r),r.init())})),void 0===s?this:s},i.default.fn.bootstrapTable.Constructor=fa,i.default.fn.bootstrapTable.theme=Qo.THEME,i.default.fn.bootstrapTable.VERSION=Qo.VERSION,i.default.fn.bootstrapTable.defaults=fa.DEFAULTS,i.default.fn.bootstrapTable.columnDefaults=fa.COLUMN_DEFAULTS,i.default.fn.bootstrapTable.events=fa.EVENTS,i.default.fn.bootstrapTable.locales=fa.LOCALES,i.default.fn.bootstrapTable.methods=fa.METHODS,i.default.fn.bootstrapTable.utils=ua,i.default((function(){i.default('[data-toggle="table"]').bootstrapTable()})),fa}));


/***/ }),

/***/ "./node_modules/bootstrap-table/src/bootstrap-table.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/bootstrap-table.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/index.js */ "./node_modules/bootstrap-table/src/constants/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index.js */ "./node_modules/bootstrap-table/src/utils/index.js");
/* harmony import */ var _virtual_scroll_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-scroll/index.js */ "./node_modules/bootstrap-table/src/virtual-scroll/index.js");
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * version: 1.18.3
 * https://github.com/wenzhixin/bootstrap-table/
 */





class BootstrapTable {
  constructor (el, options) {
    this.options = options
    this.$el = $(el)
    this.$el_ = this.$el.clone()
    this.timeoutId_ = 0
    this.timeoutFooter_ = 0
  }

  init () {
    this.initConstants()
    this.initLocale()
    this.initContainer()
    this.initTable()
    this.initHeader()
    this.initData()
    this.initHiddenRows()
    this.initToolbar()
    this.initPagination()
    this.initBody()
    this.initSearchText()
    this.initServer()
  }

  initConstants () {
    const opts = this.options

    this.constants = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].CONSTANTS
    this.constants.theme = $.fn.bootstrapTable.theme
    this.constants.dataToggle = this.constants.html.dataToggle || 'data-toggle'

    const buttonsPrefix = opts.buttonsPrefix ? `${opts.buttonsPrefix}-` : ''

    this.constants.buttonsClass = [
      opts.buttonsPrefix,
      buttonsPrefix + opts.buttonsClass,
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(`${buttonsPrefix}%s`, opts.iconSize)
    ].join(' ').trim()

    this.buttons = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this, opts.buttons, [], {})
    if (typeof this.buttons !== 'object') {
      this.buttons = {}
    }

    if (typeof opts.icons === 'string') {
      opts.icons = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, opts.icons)
    }
  }

  initLocale () {
    if (this.options.locale) {
      const locales = $.fn.bootstrapTable.locales
      const parts = this.options.locale.split(/-|_/)

      parts[0] = parts[0].toLowerCase()
      if (parts[1]) {
        parts[1] = parts[1].toUpperCase()
      }

      if (locales[this.options.locale]) {
        $.extend(this.options, locales[this.options.locale])
      } else if (locales[parts.join('-')]) {
        $.extend(this.options, locales[parts.join('-')])
      } else if (locales[parts[0]]) {
        $.extend(this.options, locales[parts[0]])
      }
    }
  }

  initContainer () {
    const topPagination = ['top', 'both'].includes(this.options.paginationVAlign) ?
      '<div class="fixed-table-pagination clearfix"></div>' : ''
    const bottomPagination = ['bottom', 'both'].includes(this.options.paginationVAlign) ?
      '<div class="fixed-table-pagination"></div>' : ''
    const loadingTemplate = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options,
      this.options.loadingTemplate, [this.options.formatLoadingMessage()])

    this.$container = $(`
      <div class="bootstrap-table ${this.constants.theme}">
      <div class="fixed-table-toolbar"></div>
      ${topPagination}
      <div class="fixed-table-container">
      <div class="fixed-table-header"><table></table></div>
      <div class="fixed-table-body">
      <div class="fixed-table-loading">
      ${loadingTemplate}
      </div>
      </div>
      <div class="fixed-table-footer"></div>
      </div>
      ${bottomPagination}
      </div>
    `)

    this.$container.insertAfter(this.$el)
    this.$tableContainer = this.$container.find('.fixed-table-container')
    this.$tableHeader = this.$container.find('.fixed-table-header')
    this.$tableBody = this.$container.find('.fixed-table-body')
    this.$tableLoading = this.$container.find('.fixed-table-loading')
    this.$tableFooter = this.$el.find('tfoot')
    // checking if custom table-toolbar exists or not
    if (this.options.buttonsToolbar) {
      this.$toolbar = $('body').find(this.options.buttonsToolbar)
    } else {
      this.$toolbar = this.$container.find('.fixed-table-toolbar')
    }
    this.$pagination = this.$container.find('.fixed-table-pagination')

    this.$tableBody.append(this.$el)
    this.$container.after('<div class="clearfix"></div>')

    this.$el.addClass(this.options.classes)
    this.$tableLoading.addClass(this.options.classes)

    if (this.options.height) {
      this.$tableContainer.addClass('fixed-height')

      if (this.options.showFooter) {
        this.$tableContainer.addClass('has-footer')
      }

      if (this.options.classes.split(' ').includes('table-bordered')) {
        this.$tableBody.append('<div class="fixed-table-border"></div>')
        this.$tableBorder = this.$tableBody.find('.fixed-table-border')
        this.$tableLoading.addClass('fixed-table-border')
      }

      this.$tableFooter = this.$container.find('.fixed-table-footer')
    }
  }

  initTable () {
    const columns = []

    this.$header = this.$el.find('>thead')
    if (!this.$header.length) {
      this.$header = $(`<thead class="${this.options.theadClasses}"></thead>`).appendTo(this.$el)
    } else if (this.options.theadClasses) {
      this.$header.addClass(this.options.theadClasses)
    }

    this._headerTrClasses = []
    this._headerTrStyles = []
    this.$header.find('tr').each((i, el) => {
      const $tr = $(el)
      const column = []

      $tr.find('th').each((i, el) => {
        const $th = $(el)

        // #2014: getFieldIndex and elsewhere assume this is string, causes issues if not
        if (typeof $th.data('field') !== 'undefined') {
          $th.data('field', `${$th.data('field')}`)
        }
        column.push($.extend({}, {
          title: $th.html(),
          class: $th.attr('class'),
          titleTooltip: $th.attr('title'),
          rowspan: $th.attr('rowspan') ? +$th.attr('rowspan') : undefined,
          colspan: $th.attr('colspan') ? +$th.attr('colspan') : undefined
        }, $th.data()))
      })
      columns.push(column)

      if ($tr.attr('class')) {
        this._headerTrClasses.push($tr.attr('class'))
      }
      if ($tr.attr('style')) {
        this._headerTrStyles.push($tr.attr('style'))
      }
    })

    if (!Array.isArray(this.options.columns[0])) {
      this.options.columns = [this.options.columns]
    }

    this.options.columns = $.extend(true, [], columns, this.options.columns)
    this.columns = []
    this.fieldsColumnsIndex = []

    _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].setFieldIndex(this.options.columns)

    this.options.columns.forEach((columns, i) => {
      columns.forEach((_column, j) => {
        const column = $.extend({}, BootstrapTable.COLUMN_DEFAULTS, _column)

        if (typeof column.fieldIndex !== 'undefined') {
          this.columns[column.fieldIndex] = column
          this.fieldsColumnsIndex[column.field] = column.fieldIndex
        }

        this.options.columns[i][j] = column
      })
    })

    // if options.data is setting, do not process tbody and tfoot data
    if (!this.options.data.length) {
      const htmlData = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].trToData(this.columns, this.$el.find('>tbody>tr'))

      if (htmlData.length) {
        this.options.data = htmlData
        this.fromHtml = true
      }
    }

    if (!(this.options.pagination && this.options.sidePagination !== 'server')) {
      this.footerData = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].trToData(this.columns, this.$el.find('>tfoot>tr'))
    }

    if (this.footerData) {
      this.$el.find('tfoot').html('<tr></tr>')
    }

    if (!this.options.showFooter || this.options.cardView) {
      this.$tableFooter.hide()
    } else {
      this.$tableFooter.show()
    }
  }

  initHeader () {
    const visibleColumns = {}
    const headerHtml = []

    this.header = {
      fields: [],
      styles: [],
      classes: [],
      formatters: [],
      detailFormatters: [],
      events: [],
      sorters: [],
      sortNames: [],
      cellStyles: [],
      searchables: []
    }

    _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateFieldGroup(this.options.columns)

    this.options.columns.forEach((columns, i) => {
      const html = []

      html.push(`<tr${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', this._headerTrClasses[i])} ${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' style="%s"', this._headerTrStyles[i])}>`)

      let detailViewTemplate = ''

      if (i === 0 && _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasDetailViewIcon(this.options)) {
        const rowspan = this.options.columns.length > 1 ?
          ` rowspan="${this.options.columns.length}"` : ''

        detailViewTemplate = `<th class="detail"${rowspan}>
          <div class="fht-cell"></div>
          </th>`
      }

      if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
        html.push(detailViewTemplate)
      }

      columns.forEach((column, j) => {
        const class_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', column['class'])
        const unitWidth = column.widthUnit
        const width = parseFloat(column.width)

        const halign = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('text-align: %s; ', column.halign ? column.halign : column.align)
        const align = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('text-align: %s; ', column.align)
        let style = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('vertical-align: %s; ', column.valign)

        style += _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('width: %s; ', (column.checkbox || column.radio) && !width ?
          (!column.showSelectTitle ? '36px' : undefined) :
          (width ? width + unitWidth : undefined))

        if (typeof column.fieldIndex === 'undefined' && !column.visible) {
          return
        }

        const headerStyle = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, this.options.headerStyle, [column])
        const csses = []
        let classes = ''

        if (headerStyle && headerStyle.css) {
          for (const [key, value] of Object.entries(headerStyle.css)) {
            csses.push(`${key}: ${value}`)
          }
        }
        if (headerStyle && headerStyle.classes) {
          classes = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', column['class'] ?
            [column['class'], headerStyle.classes].join(' ') : headerStyle.classes)
        }

        if (typeof column.fieldIndex !== 'undefined') {
          this.header.fields[column.fieldIndex] = column.field
          this.header.styles[column.fieldIndex] = align + style
          this.header.classes[column.fieldIndex] = class_
          this.header.formatters[column.fieldIndex] = column.formatter
          this.header.detailFormatters[column.fieldIndex] = column.detailFormatter
          this.header.events[column.fieldIndex] = column.events
          this.header.sorters[column.fieldIndex] = column.sorter
          this.header.sortNames[column.fieldIndex] = column.sortName
          this.header.cellStyles[column.fieldIndex] = column.cellStyle
          this.header.searchables[column.fieldIndex] = column.searchable

          if (!column.visible) {
            return
          }

          if (this.options.cardView && (!column.cardVisible)) {
            return
          }

          visibleColumns[column.field] = column
        }

        html.push(`<th${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' title="%s"', column.titleTooltip)}`,
          column.checkbox || column.radio ?
            _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="bs-checkbox %s"', column['class'] || '') :
            classes || class_,
          _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' style="%s"', halign + style + csses.join('; ')),
          _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' rowspan="%s"', column.rowspan),
          _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' colspan="%s"', column.colspan),
          _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' data-field="%s"', column.field),
          // If `column` is not the first element of `this.options.columns[0]`, then className 'data-not-first-th' should be added.
          j === 0 && i > 0 ? ' data-not-first-th' : '',
          '>')

        html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<div class="th-inner %s">', this.options.sortable && column.sortable ?
          'sortable both' : ''))

        let text = this.options.escape ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].escapeHTML(column.title) : column.title

        const title = text

        if (column.checkbox) {
          text = ''
          if (!this.options.singleSelect && this.options.checkboxHeader) {
            text = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>'
          }
          this.header.stateField = column.field
        }
        if (column.radio) {
          text = ''
          this.header.stateField = column.field
        }
        if (!text && column.showSelectTitle) {
          text += title
        }

        html.push(text)
        html.push('</div>')
        html.push('<div class="fht-cell"></div>')
        html.push('</div>')
        html.push('</th>')
      })

      if (detailViewTemplate && this.options.detailViewAlign === 'right') {
        html.push(detailViewTemplate)
      }

      html.push('</tr>')

      if (html.length > 3) {
        headerHtml.push(html.join(''))
      }
    })

    this.$header.html(headerHtml.join(''))
    this.$header.find('th[data-field]').each((i, el) => {
      $(el).data(visibleColumns[$(el).data('field')])
    })
    this.$container.off('click', '.th-inner').on('click', '.th-inner', e => {
      const $this = $(e.currentTarget)

      if (this.options.detailView && !$this.parent().hasClass('bs-checkbox')) {
        if ($this.closest('.bootstrap-table')[0] !== this.$container[0]) {
          return false
        }
      }

      if (this.options.sortable && $this.parent().data().sortable) {
        this.onSort(e)
      }
    })

    this.$header.children().children().off('keypress').on('keypress', e => {
      if (this.options.sortable && $(e.currentTarget).data().sortable) {
        const code = e.keyCode || e.which

        if (code === 13) { // Enter keycode
          this.onSort(e)
        }
      }
    })

    const resizeEvent = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getEventName('resize.bootstrap-table', this.$el.attr('id'))

    $(window).off(resizeEvent)
    if (!this.options.showHeader || this.options.cardView) {
      this.$header.hide()
      this.$tableHeader.hide()
      this.$tableLoading.css('top', 0)
    } else {
      this.$header.show()
      this.$tableHeader.show()
      this.$tableLoading.css('top', this.$header.outerHeight() + 1)
      // Assign the correct sortable arrow
      this.getCaret()
      $(window).on(resizeEvent, () => this.resetView())
    }

    this.$selectAll = this.$header.find('[name="btSelectAll"]')
    this.$selectAll.off('click').on('click', e => {
      e.stopPropagation()
      const checked = $(e.currentTarget).prop('checked')

      this[checked ? 'checkAll' : 'uncheckAll']()
      this.updateSelected()
    })
  }

  initData (data, type) {
    if (type === 'append') {
      this.options.data = this.options.data.concat(data)
    } else if (type === 'prepend') {
      this.options.data = [].concat(data).concat(this.options.data)
    } else {
      data = data || _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].deepCopy(this.options.data)
      this.options.data = Array.isArray(data) ? data : data[this.options.dataField]
    }

    this.data = [...this.options.data]

    if (this.options.sortReset) {
      this.unsortedData = [...this.data]
    }

    if (this.options.sidePagination === 'server') {
      return
    }
    this.initSort()
  }

  initSort () {
    let name = this.options.sortName
    const order = this.options.sortOrder === 'desc' ? -1 : 1
    const index = this.header.fields.indexOf(this.options.sortName)
    let timeoutId = 0

    if (index !== -1) {
      if (this.options.sortStable) {
        this.data.forEach((row, i) => {
          if (!row.hasOwnProperty('_position')) {
            row._position = i
          }
        })
      }

      if (this.options.customSort) {
        _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options, this.options.customSort, [
          this.options.sortName,
          this.options.sortOrder,
          this.data
        ])
      } else {
        this.data.sort((a, b) => {
          if (this.header.sortNames[index]) {
            name = this.header.sortNames[index]
          }
          const aa = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItemField(a, name, this.options.escape)
          const bb = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItemField(b, name, this.options.escape)
          const value = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.header, this.header.sorters[index], [aa, bb, a, b])

          if (value !== undefined) {
            if (this.options.sortStable && value === 0) {
              return order * (a._position - b._position)
            }
            return order * value
          }

          return _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sort(aa, bb, order, this.options.sortStable,
            a._position, b._position)
        })
      }

      if (this.options.sortClass !== undefined) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          this.$el.removeClass(this.options.sortClass)
          const index = this.$header.find(`[data-field="${this.options.sortName}"]`).index()

          this.$el.find(`tr td:nth-child(${index + 1})`).addClass(this.options.sortClass)
        }, 250)
      }
    } else if (this.options.sortReset) {
      this.data = [...this.unsortedData]
    }
  }

  onSort ({ type, currentTarget }) {
    const $this = type === 'keypress' ? $(currentTarget) : $(currentTarget).parent()
    const $this_ = this.$header.find('th').eq($this.index())

    this.$header.add(this.$header_).find('span.order').remove()

    if (this.options.sortName === $this.data('field')) {
      const currentSortOrder = this.options.sortOrder

      if (currentSortOrder === undefined) {
        this.options.sortOrder = 'asc'
      } else if (currentSortOrder === 'asc') {
        this.options.sortOrder = 'desc'
      } else if (this.options.sortOrder === 'desc') {
        this.options.sortOrder = this.options.sortReset ? undefined : 'asc'
      }

      if (this.options.sortOrder === undefined) {
        this.options.sortName = undefined
      }
    } else {
      this.options.sortName = $this.data('field')
      if (this.options.rememberOrder) {
        this.options.sortOrder = $this.data('order') === 'asc' ? 'desc' : 'asc'
      } else {
        this.options.sortOrder = this.columns[this.fieldsColumnsIndex[$this.data('field')]].sortOrder ||
          this.columns[this.fieldsColumnsIndex[$this.data('field')]].order
      }
    }
    this.trigger('sort', this.options.sortName, this.options.sortOrder)

    $this.add($this_).data('order', this.options.sortOrder)

    // Assign the correct sortable arrow
    this.getCaret()

    if (this.options.sidePagination === 'server' && this.options.serverSort) {
      this.options.pageNumber = 1
      this.initServer(this.options.silentSort)
      return
    }

    this.initSort()
    this.initBody()
  }

  initToolbar () {
    const opts = this.options
    let html = []
    let timeoutId = 0
    let $keepOpen
    let switchableCount = 0

    if (this.$toolbar.find('.bs-bars').children().length) {
      $('body').append($(opts.toolbar))
    }
    this.$toolbar.html('')

    if (typeof opts.toolbar === 'string' || typeof opts.toolbar === 'object') {
      $(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, opts.toolbarAlign))
        .appendTo(this.$toolbar)
        .append($(opts.toolbar))
    }

    // showColumns, showToggle, showRefresh
    html = [`<div class="${[
      'columns',
      `columns-${opts.buttonsAlign}`,
      this.constants.classes.buttonsGroup,
      `${this.constants.classes.pull}-${opts.buttonsAlign}`
    ].join(' ')}">`]

    if (typeof opts.buttonsOrder === 'string') {
      opts.buttonsOrder = opts.buttonsOrder.replace(/\[|\]| |'/g, '').split(',')
    }

    this.buttons = Object.assign(this.buttons, {
      paginationSwitch: {
        text: opts.pagination ? opts.formatPaginationSwitchUp() : opts.formatPaginationSwitchDown(),
        icon: opts.pagination ? opts.icons.paginationSwitchDown : opts.icons.paginationSwitchUp,
        render: false,
        event: this.togglePagination,
        attributes: {
          'aria-label': opts.formatPaginationSwitch(),
          title: opts.formatPaginationSwitch()
        }
      },
      refresh: {
        text: opts.formatRefresh(),
        icon: opts.icons.refresh,
        render: false,
        event: this.refresh,
        attributes: {
          'aria-label': opts.formatRefresh(),
          title: opts.formatRefresh()
        }
      },
      toggle: {
        text: opts.formatToggle(),
        icon: opts.icons.toggleOff,
        render: false,
        event: this.toggleView,
        attributes: {
          'aria-label': opts.formatToggleOn(),
          title: opts.formatToggleOn()
        }
      },
      fullscreen: {
        text: opts.formatFullscreen(),
        icon: opts.icons.fullscreen,
        render: false,
        event: this.toggleFullscreen,
        attributes: {
          'aria-label': opts.formatFullscreen(),
          title: opts.formatFullscreen()
        }
      },
      columns: {
        render: false,
        html: (() => {
          const html = []

          html.push(`<div class="keep-open ${this.constants.classes.buttonsDropdown}" title="${opts.formatColumns()}">
            <button class="${this.constants.buttonsClass} dropdown-toggle" type="button" ${this.constants.dataToggle}="dropdown"
            aria-label="Columns" title="${opts.formatColumns()}">
            ${opts.showButtonIcons ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.columns) : ''}
            ${opts.showButtonText ? opts.formatColumns() : ''}
            ${this.constants.html.dropdownCaret}
            </button>
            ${this.constants.html.toolbarDropdown[0]}`)

          if (opts.showColumnsSearch) {
            html.push(
              _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.toolbarDropdownItem,
                _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<input type="text" class="%s" name="columnsSearch" placeholder="%s" autocomplete="off">', this.constants.classes.input, opts.formatSearch())
              )
            )
            html.push(this.constants.html.toolbarDropdownSeparator)
          }

          if (opts.showColumnsToggleAll) {
            const allFieldsVisible = this.getVisibleColumns().length === this.columns.filter(column => !this.isSelectionColumn(column)).length

            html.push(
              _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.toolbarDropdownItem,
                _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>',
                  allFieldsVisible ? 'checked="checked"' : '', opts.formatColumnsToggleAll())
              )
            )

            html.push(this.constants.html.toolbarDropdownSeparator)
          }

          let visibleColumns = 0

          this.columns.forEach(column => {
            if (column.visible) {
              visibleColumns++
            }
          })

          this.columns.forEach((column, i) => {
            if (this.isSelectionColumn(column)) {
              return
            }

            if (opts.cardView && !column.cardVisible) {
              return
            }

            const checked = column.visible ? ' checked="checked"' : ''
            const disabled = (visibleColumns <= opts.minimumCountColumns) && checked ? ' disabled="disabled"' : ''

            if (column.switchable) {
              html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.toolbarDropdownItem,
                _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<input type="checkbox" data-field="%s" value="%s"%s%s> <span>%s</span>',
                  column.field, i, checked, disabled, column.title)))
              switchableCount++
            }
          })
          html.push(this.constants.html.toolbarDropdown[1], '</div>')
          return html.join('')
        })
      }
    })

    const buttonsHtml = {}

    for (const [buttonName, buttonConfig] of Object.entries(this.buttons)) {
      let buttonHtml

      if (buttonConfig.hasOwnProperty('html')) {
        if (typeof buttonConfig.html === 'function') {
          buttonHtml = buttonConfig.html()
        } else if (typeof buttonConfig.html === 'string') {
          buttonHtml = buttonConfig.html
        }
      } else {
        buttonHtml = `<button class="${this.constants.buttonsClass}" type="button" name="${buttonName}"`

        if (buttonConfig.hasOwnProperty('attributes')) {
          for (const [attributeName, value] of Object.entries(buttonConfig.attributes)) {
            buttonHtml += ` ${attributeName}="${value}"`
          }
        }

        buttonHtml += '>'

        if (opts.showButtonIcons && buttonConfig.hasOwnProperty('icon')) {
          buttonHtml += `${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, opts.iconsPrefix, buttonConfig.icon) } `
        }

        if (opts.showButtonText && buttonConfig.hasOwnProperty('text')) {
          buttonHtml += buttonConfig.text
        }

        buttonHtml += '</button>'
      }

      buttonsHtml[buttonName] = buttonHtml
      const optionName = `show${buttonName.charAt(0).toUpperCase()}${buttonName.substring(1)}`
      const showOption = opts[optionName]

      if ((
        !buttonConfig.hasOwnProperty('render') ||
        buttonConfig.hasOwnProperty('render') &&
        buttonConfig.render) &&
        (showOption === undefined || showOption === true)
      ) {
        opts[optionName] = true
      }

      if (!opts.buttonsOrder.includes(buttonName)) {
        opts.buttonsOrder.push(buttonName)
      }
    }

    // Adding the button html to the final toolbar html when the showOption is true
    for (const button of opts.buttonsOrder) {
      const showOption = opts[`show${button.charAt(0).toUpperCase()}${button.substring(1)}`]

      if (showOption) {
        html.push(buttonsHtml[button])
      }
    }

    html.push('</div>')

    // Fix #188: this.showToolbar is for extensions
    if (this.showToolbar || html.length > 2) {
      this.$toolbar.append(html.join(''))
    }

    for (const [buttonName, buttonConfig] of Object.entries(this.buttons)) {
      if (buttonConfig.hasOwnProperty('event')) {
        if (typeof buttonConfig.event === 'function' || typeof buttonConfig.event === 'string') {
          const event = typeof buttonConfig.event === 'string' ? window[buttonConfig.event] : buttonConfig.event

          this.$toolbar.find(`button[name="${buttonName}"]`)
            .off('click')
            .on('click', () => event.call(this))
          continue
        }

        for (const [eventType, eventFunction] of Object.entries(buttonConfig.event)) {
          const event = typeof eventFunction === 'string' ? window[eventFunction] : eventFunction

          this.$toolbar.find(`button[name="${buttonName}"]`)
            .off(eventType)
            .on(eventType, () => event.call(this))
        }
      }
    }

    if (opts.showColumns) {
      $keepOpen = this.$toolbar.find('.keep-open')
      const $checkboxes = $keepOpen.find('input[type="checkbox"]:not(".toggle-all")')
      const $toggleAll = $keepOpen.find('input[type="checkbox"].toggle-all')

      if (switchableCount <= opts.minimumCountColumns) {
        $keepOpen.find('input').prop('disabled', true)
      }

      $keepOpen.find('li, label').off('click').on('click', e => {
        e.stopImmediatePropagation()
      })

      $checkboxes.off('click').on('click', ({ currentTarget }) => {
        const $this = $(currentTarget)

        this._toggleColumn($this.val(), $this.prop('checked'), false)
        this.trigger('column-switch', $this.data('field'), $this.prop('checked'))
        $toggleAll.prop('checked', $checkboxes.filter(':checked').length === this.columns.filter(column => !this.isSelectionColumn(column)).length)
      })

      $toggleAll.off('click').on('click', ({ currentTarget }) => {
        this._toggleAllColumns($(currentTarget).prop('checked'))
      })

      if (opts.showColumnsSearch) {
        const $columnsSearch = $keepOpen.find('[name="columnsSearch"]')
        const $listItems = $keepOpen.find('.dropdown-item-marker')

        $columnsSearch.on('keyup paste change', ({ currentTarget }) => {
          const $this = $(currentTarget)
          const searchValue = $this.val().toLowerCase()

          $listItems.show()
          $checkboxes.each((i, el) => {
            const $checkbox = $(el)
            const $listItem = $checkbox.parents('.dropdown-item-marker')
            const text = $listItem.text().toLowerCase()

            if (!text.includes(searchValue)) {
              $listItem.hide()
            }
          })
        })
      }
    }
    const handleInputEvent = $searchInput => {
      const eventTriggers = 'keyup drop blur mouseup'

      $searchInput.off(eventTriggers).on(eventTriggers, event => {
        if (opts.searchOnEnterKey && event.keyCode !== 13) {
          return
        }

        if ([37, 38, 39, 40].includes(event.keyCode)) {
          return
        }

        clearTimeout(timeoutId) // doesn't matter if it's 0
        timeoutId = setTimeout(() => {
          this.onSearch({ currentTarget: event.currentTarget })
        }, opts.searchTimeOut)
      })
    }

    // Fix #4516: this.showSearchClearButton is for extensions
    if (
      (opts.search || this.showSearchClearButton) &&
      typeof opts.searchSelector !== 'string'
    ) {
      html = []
      const showSearchButton = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.searchButton,
        this.constants.buttonsClass,
        opts.formatSearch(),
        opts.showButtonIcons ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.search) : '',
        opts.showButtonText ? opts.formatSearch() : ''
      )
      const showSearchClearButton = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.searchClearButton,
        this.constants.buttonsClass,
        opts.formatClearSearch(),
        opts.showButtonIcons ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, opts.iconsPrefix, opts.icons.clearSearch) : '',
        opts.showButtonText ? opts.formatClearSearch() : ''
      )
      const searchInputHtml = `<input class="${this.constants.classes.input}
        ${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' %s%s', this.constants.classes.inputPrefix, opts.iconSize)}
        search-input" type="search" placeholder="${opts.formatSearch()}" autocomplete="off">`
      let searchInputFinalHtml = searchInputHtml

      if (opts.showSearchButton || opts.showSearchClearButton) {
        const buttonsHtml = (opts.showSearchButton ? showSearchButton : '') +
          (opts.showSearchClearButton ? showSearchClearButton : '')

        searchInputFinalHtml = opts.search ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.inputGroup,
          searchInputHtml, buttonsHtml) : buttonsHtml
      }

      html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(`
        <div class="${this.constants.classes.pull}-${opts.searchAlign} search ${this.constants.classes.inputGroup}">
          %s
        </div>
      `, searchInputFinalHtml))

      this.$toolbar.append(html.join(''))
      const $searchInput = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchInput(this)

      if (opts.showSearchButton) {
        this.$toolbar.find('.search button[name=search]').off('click').on('click', () => {
          clearTimeout(timeoutId) // doesn't matter if it's 0
          timeoutId = setTimeout(() => {
            this.onSearch({ currentTarget: $searchInput })
          }, opts.searchTimeOut)
        })

        if (opts.searchOnEnterKey) {
          handleInputEvent($searchInput)
        }
      } else {
        handleInputEvent($searchInput)
      }

      if (opts.showSearchClearButton) {
        this.$toolbar.find('.search button[name=clearSearch]').click(() => {
          this.resetSearch()
        })
      }
    } else if (typeof opts.searchSelector === 'string') {
      const $searchInput = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchInput(this)

      handleInputEvent($searchInput)
    }
  }

  onSearch ({ currentTarget, firedByInitSearchText } = {}, overwriteSearchText = true) {
    if (currentTarget !== undefined && $(currentTarget).length && overwriteSearchText) {
      const text = $(currentTarget).val().trim()

      if (this.options.trimOnSearch && $(currentTarget).val() !== text) {
        $(currentTarget).val(text)
      }

      if (this.searchText === text) {
        return
      }

      if (currentTarget === _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchInput(this)[0] || $(currentTarget).hasClass('search-input')) {
        this.searchText = text
        this.options.searchText = text
      }
    }

    if (!firedByInitSearchText) {
      this.options.pageNumber = 1
    }
    this.initSearch()
    if (firedByInitSearchText) {
      if (this.options.sidePagination === 'client') {
        this.updatePagination()
      }
    } else {
      this.updatePagination()
    }
    this.trigger('search', this.searchText)
  }

  initSearch () {
    this.filterOptions = this.filterOptions || this.options.filterOptions
    if (this.options.sidePagination !== 'server') {
      if (this.options.customSearch) {
        this.data = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options, this.options.customSearch,
          [this.options.data, this.searchText, this.filterColumns])

        if (this.options.sortReset) {
          this.unsortedData = [...this.data]
        }
        return
      }

      let s = this.searchText && (this.fromHtml ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].escapeHTML(this.searchText) : this.searchText).toLowerCase()
      const f = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(this.filterColumns) ? null : this.filterColumns

      if (this.options.searchAccentNeutralise) {
        s = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeAccent(s)
      }

      // Check filter
      if (typeof this.filterOptions.filterAlgorithm === 'function') {
        this.data = this.options.data.filter(item => this.filterOptions.filterAlgorithm.apply(null, [item, f]))
      } else if (typeof this.filterOptions.filterAlgorithm === 'string') {
        this.data = f ? this.options.data.filter(item => {
          const filterAlgorithm = this.filterOptions.filterAlgorithm

          if (filterAlgorithm === 'and') {
            for (const key in f) {
              if (
                (Array.isArray(f[key]) &&
                  !f[key].includes(item[key])) ||
                (!Array.isArray(f[key]) &&
                  item[key] !== f[key])
              ) {
                return false
              }
            }
          } else if (filterAlgorithm === 'or') {
            let match = false

            for (const key in f) {
              if (
                (Array.isArray(f[key]) &&
                  f[key].includes(item[key])) ||
                (!Array.isArray(f[key]) &&
                  item[key] === f[key])
              ) {
                match = true
              }
            }

            return match
          }

          return true
        }) : [...this.options.data]
      }

      const visibleFields = this.getVisibleFields()

      this.data = s ? this.data.filter((item, i) => {
        for (let j = 0; j < this.header.fields.length; j++) {
          if (!this.header.searchables[j] || (this.options.visibleSearch && visibleFields.indexOf(this.header.fields[j]) === -1)) {
            continue
          }

          const key = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumeric(this.header.fields[j]) ? parseInt(this.header.fields[j], 10) : this.header.fields[j]
          const column = this.columns[this.fieldsColumnsIndex[key]]
          let value

          if (typeof key === 'string') {
            value = item
            const props = key.split('.')

            for (let i = 0; i < props.length; i++) {
              if (value[props[i]] !== null) {
                value = value[props[i]]
              }
            }
          } else {
            value = item[key]
          }

          if (this.options.searchAccentNeutralise) {
            value = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].normalizeAccent(value)
          }

          // Fix #142: respect searchFormatter boolean
          if (column && column.searchFormatter) {
            value = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(column,
              this.header.formatters[j], [value, item, i, column.field], value)
          }

          if (typeof value === 'string' || typeof value === 'number') {
            if (this.options.strictSearch) {
              if ((`${value}`).toLowerCase() === s) {
                return true
              }
            } else {
              const largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(-?\d+)?|(-?\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm
              const matches = largerSmallerEqualsRegex.exec(this.searchText)
              let comparisonCheck = false

              if (matches) {
                const operator = matches[1] || `${matches[5]}l`
                const comparisonValue = matches[2] || matches[3]
                const int = parseInt(value, 10)
                const comparisonInt = parseInt(comparisonValue, 10)

                switch (operator) {
                  case '>':
                  case '<l':
                    comparisonCheck = int > comparisonInt
                    break
                  case '<':
                  case '>l':
                    comparisonCheck = int < comparisonInt
                    break
                  case '<=':
                  case '=<':
                  case '>=l':
                  case '=>l':
                    comparisonCheck = int <= comparisonInt
                    break
                  case '>=':
                  case '=>':
                  case '<=l':
                  case '=<l':
                    comparisonCheck = int >= comparisonInt
                    break
                  default:
                    break
                }
              }

              if (comparisonCheck || (`${value}`).toLowerCase().includes(s)) {
                return true
              }
            }
          }
        }
        return false
      }) : this.data

      if (this.options.sortReset) {
        this.unsortedData = [...this.data]
      }

      this.initSort()
    }
  }

  initPagination () {
    const opts = this.options

    if (!opts.pagination) {
      this.$pagination.hide()
      return
    }
    this.$pagination.show()

    const html = []
    let allSelected = false
    let i
    let from
    let to
    let $pageList
    let $pre
    let $next
    let $number
    const data = this.getData({ includeHiddenRows: false })
    let pageList = opts.pageList

    if (typeof pageList === 'string') {
      pageList = pageList.replace(/\[|\]| /g, '').toLowerCase().split(',')
    }

    pageList = pageList.map(value => {
      if (typeof value === 'string') {
        return (value.toLowerCase() === opts.formatAllRows().toLowerCase() ||
          ['all', 'unlimited'].includes(value.toLowerCase())) ? opts.formatAllRows() : +value
      }
      return value
    })

    this.paginationParts = opts.paginationParts
    if (typeof this.paginationParts === 'string') {
      this.paginationParts = this.paginationParts.replace(/\[|\]| |'/g, '').split(',')
    }

    if (opts.sidePagination !== 'server') {
      opts.totalRows = data.length
    }

    this.totalPages = 0
    if (opts.totalRows) {
      if (opts.pageSize === opts.formatAllRows()) {
        opts.pageSize = opts.totalRows
        allSelected = true
      }

      this.totalPages = ~~((opts.totalRows - 1) / opts.pageSize) + 1

      opts.totalPages = this.totalPages
    }
    if (this.totalPages > 0 && opts.pageNumber > this.totalPages) {
      opts.pageNumber = this.totalPages
    }

    this.pageFrom = (opts.pageNumber - 1) * opts.pageSize + 1
    this.pageTo = opts.pageNumber * opts.pageSize
    if (this.pageTo > opts.totalRows) {
      this.pageTo = opts.totalRows
    }

    if (this.options.pagination && this.options.sidePagination !== 'server') {
      this.options.totalNotFiltered = this.options.data.length
    }

    if (!this.options.showExtendedPagination) {
      this.options.totalNotFiltered = undefined
    }

    if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
      html.push(`<div class="${this.constants.classes.pull}-${opts.paginationDetailHAlign} pagination-detail">`)
    }

    if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort')) {
      const paginationInfo = this.paginationParts.includes('pageInfoShort') ? opts.formatDetailPagination(opts.totalRows) : opts.formatShowingRows(this.pageFrom, this.pageTo, opts.totalRows, opts.totalNotFiltered)

      html.push(`<span class="pagination-info">
      ${paginationInfo}
      </span>`)
    }

    if (this.paginationParts.includes('pageSize')) {
      html.push('<div class="page-list">')

      const pageNumber = [
        `<div class="${this.constants.classes.paginationDropdown}">
        <button class="${this.constants.buttonsClass} dropdown-toggle" type="button" ${this.constants.dataToggle}="dropdown">
        <span class="page-size">
        ${allSelected ? opts.formatAllRows() : opts.pageSize}
        </span>
        ${this.constants.html.dropdownCaret}
        </button>
        ${this.constants.html.pageDropdown[0]}`
      ]

      pageList.forEach((page, i) => {
        if (!opts.smartDisplay || i === 0 || pageList[i - 1] < opts.totalRows || page === opts.formatAllRows()) {
          let active

          if (allSelected) {
            active = page === opts.formatAllRows() ? this.constants.classes.dropdownActive : ''
          } else {
            active = page === opts.pageSize ? this.constants.classes.dropdownActive : ''
          }
          pageNumber.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.pageDropdownItem, active, page))
        }
      })
      pageNumber.push(`${this.constants.html.pageDropdown[1]}</div>`)

      html.push(opts.formatRecordsPerPage(pageNumber.join('')))
    }

    if (this.paginationParts.includes('pageInfo') || this.paginationParts.includes('pageInfoShort') || this.paginationParts.includes('pageSize')) {
      html.push('</div></div>')
    }

    if (this.paginationParts.includes('pageList')) {
      html.push(`<div class="${this.constants.classes.pull}-${opts.paginationHAlign} pagination">`,
        _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.pagination[0], _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' pagination-%s', opts.iconSize)),
        _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.paginationItem, ' page-pre', opts.formatSRPaginationPreText(), opts.paginationPreText))

      if (this.totalPages < opts.paginationSuccessivelySize) {
        from = 1
        to = this.totalPages
      } else {
        from = opts.pageNumber - opts.paginationPagesBySide
        to = from + (opts.paginationPagesBySide * 2)
      }

      if (opts.pageNumber < (opts.paginationSuccessivelySize - 1)) {
        to = opts.paginationSuccessivelySize
      }

      if (opts.paginationSuccessivelySize > this.totalPages - from) {
        from = from - (opts.paginationSuccessivelySize - (this.totalPages - from)) + 1
      }

      if (from < 1) {
        from = 1
      }

      if (to > this.totalPages) {
        to = this.totalPages
      }

      const middleSize = Math.round(opts.paginationPagesBySide / 2)
      const pageItem = (i, classes = '') => _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.paginationItem,
        classes + (i === opts.pageNumber ? ` ${this.constants.classes.paginationActive}` : ''), opts.formatSRPaginationPageText(i), i)

      if (from > 1) {
        let max = opts.paginationPagesBySide

        if (max >= from) max = from - 1
        for (i = 1; i <= max; i++) {
          html.push(pageItem(i))
        }
        if ((from - 1) === max + 1) {
          i = from - 1
          html.push(pageItem(i))
        } else if ((from - 1) > max) {
          if (
            (from - opts.paginationPagesBySide * 2) > opts.paginationPagesBySide &&
              opts.paginationUseIntermediate
          ) {
            i = Math.round(((from - middleSize) / 2) + middleSize)
            html.push(pageItem(i, ' page-intermediate'))
          } else {
            html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.paginationItem,
              ' page-first-separator disabled', '', '...'))
          }
        }
      }

      for (i = from; i <= to; i++) {
        html.push(pageItem(i))
      }

      if (this.totalPages > to) {
        let min = this.totalPages - (opts.paginationPagesBySide - 1)

        if (to >= min) min = to + 1
        if ((to + 1) === min - 1) {
          i = to + 1
          html.push(pageItem(i))
        } else if (min > (to + 1)) {
          if (
            (this.totalPages - to) > opts.paginationPagesBySide * 2 &&
              opts.paginationUseIntermediate
          ) {
            i = Math.round(((this.totalPages - middleSize - to) / 2) + to)
            html.push(pageItem(i, ' page-intermediate'))
          } else {
            html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.paginationItem,
              ' page-last-separator disabled', '', '...'))
          }
        }

        for (i = min; i <= this.totalPages; i++) {
          html.push(pageItem(i))
        }
      }

      html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.paginationItem, ' page-next', opts.formatSRPaginationNextText(), opts.paginationNextText))
      html.push(this.constants.html.pagination[1], '</div>')
    }
    this.$pagination.html(html.join(''))

    const dropupClass = ['bottom', 'both'].includes(opts.paginationVAlign) ?
      ` ${this.constants.classes.dropup}` : ''

    this.$pagination.last().find('.page-list > div').addClass(dropupClass)

    if (!opts.onlyInfoPagination) {
      $pageList = this.$pagination.find('.page-list a')
      $pre = this.$pagination.find('.page-pre')
      $next = this.$pagination.find('.page-next')
      $number = this.$pagination.find('.page-item').not('.page-next, .page-pre, .page-last-separator, .page-first-separator')

      if (this.totalPages <= 1) {
        this.$pagination.find('div.pagination').hide()
      }

      if (opts.smartDisplay) {
        if (pageList.length < 2 || opts.totalRows <= pageList[0]) {
          this.$pagination.find('span.page-list').hide()
        }
      }

      // when data is empty, hide the pagination
      this.$pagination[this.getData().length ? 'show' : 'hide']()

      if (!opts.paginationLoop) {
        if (opts.pageNumber === 1) {
          $pre.addClass('disabled')
        }
        if (opts.pageNumber === this.totalPages) {
          $next.addClass('disabled')
        }
      }

      if (allSelected) {
        opts.pageSize = opts.formatAllRows()
      }
      // removed the events for last and first, onPageNumber executeds the same logic
      $pageList.off('click').on('click', e => this.onPageListChange(e))
      $pre.off('click').on('click', e => this.onPagePre(e))
      $next.off('click').on('click', e => this.onPageNext(e))
      $number.off('click').on('click', e => this.onPageNumber(e))
    }
  }

  updatePagination (event) {
    // Fix #171: IE disabled button can be clicked bug.
    if (event && $(event.currentTarget).hasClass('disabled')) {
      return
    }

    if (!this.options.maintainMetaData) {
      this.resetRows()
    }

    this.initPagination()

    this.trigger('page-change', this.options.pageNumber, this.options.pageSize)

    if (this.options.sidePagination === 'server') {
      this.initServer()
    } else {
      this.initBody()
    }
  }

  onPageListChange (event) {
    event.preventDefault()
    const $this = $(event.currentTarget)

    $this.parent().addClass(this.constants.classes.dropdownActive)
      .siblings().removeClass(this.constants.classes.dropdownActive)
    this.options.pageSize = $this.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ?
      this.options.formatAllRows() : +$this.text()
    this.$toolbar.find('.page-size').text(this.options.pageSize)

    this.updatePagination(event)
    return false
  }

  onPagePre (event) {
    event.preventDefault()
    if ((this.options.pageNumber - 1) === 0) {
      this.options.pageNumber = this.options.totalPages
    } else {
      this.options.pageNumber--
    }
    this.updatePagination(event)
    return false
  }

  onPageNext (event) {
    event.preventDefault()
    if ((this.options.pageNumber + 1) > this.options.totalPages) {
      this.options.pageNumber = 1
    } else {
      this.options.pageNumber++
    }
    this.updatePagination(event)
    return false
  }

  onPageNumber (event) {
    event.preventDefault()
    if (this.options.pageNumber === +$(event.currentTarget).text()) {
      return
    }
    this.options.pageNumber = +$(event.currentTarget).text()
    this.updatePagination(event)
    return false
  }

  // eslint-disable-next-line no-unused-vars
  initRow (item, i, data, trFragments) {
    const html = []
    let style = {}
    const csses = []
    let data_ = ''
    let attributes = {}
    const htmlAttributes = []

    if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].findIndex(this.hiddenRows, item) > -1) {
      return
    }

    style = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options, this.options.rowStyle, [item, i], style)

    if (style && style.css) {
      for (const [key, value] of Object.entries(style.css)) {
        csses.push(`${key}: ${value}`)
      }
    }

    attributes = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options,
      this.options.rowAttributes, [item, i], attributes)

    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        htmlAttributes.push(`${key}="${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].escapeHTML(value)}"`)
      }
    }

    if (item._data && !_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(item._data)) {
      for (const [k, v] of Object.entries(item._data)) {
        // ignore data-index
        if (k === 'index') {
          return
        }
        data_ += ` data-${k}='${typeof v === 'object' ? JSON.stringify(v) : v}'`
      }
    }

    html.push('<tr',
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' %s', htmlAttributes.length ? htmlAttributes.join(' ') : undefined),
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' id="%s"', Array.isArray(item) ? undefined : item._id),
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', style.classes || (Array.isArray(item) ? undefined : item._class)),
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' style="%s"', Array.isArray(item) ? undefined : item._style),
      ` data-index="${i}"`,
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' data-uniqueid="%s"', _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItemField(item, this.options.uniqueId, false)),
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' data-has-detail-view="%s"', (this.options.detailView && _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, this.options.detailFilter, [i, item])) ? 'true' : undefined),
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('%s', data_),
      '>'
    )

    if (this.options.cardView) {
      html.push(`<td colspan="${this.header.fields.length}"><div class="card-views">`)
    }

    let detailViewTemplate = ''

    if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasDetailViewIcon(this.options)) {
      detailViewTemplate = '<td>'

      if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, this.options.detailFilter, [i, item])) {
        detailViewTemplate += `
          <a class="detail-icon" href="#">
          ${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)}
          </a>
        `
      }

      detailViewTemplate += '</td>'
    }

    if (detailViewTemplate && this.options.detailViewAlign !== 'right') {
      html.push(detailViewTemplate)
    }

    this.header.fields.forEach((field, j) => {
      let text = ''
      let value_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItemField(item, field, this.options.escape)
      let value = ''
      let type = ''
      let cellStyle = {}
      let id_ = ''
      let class_ = this.header.classes[j]
      let style_ = ''
      let styleToAdd_ = ''
      let data_ = ''
      let rowspan_ = ''
      let colspan_ = ''
      let title_ = ''
      const column = this.columns[j]

      if ((this.fromHtml || this.autoMergeCells) && typeof value_ === 'undefined') {
        if ((!column.checkbox) && (!column.radio)) {
          return
        }
      }

      if (!column.visible) {
        return
      }

      if (this.options.cardView && (!column.cardVisible)) {
        return
      }

      if (column.escape) {
        value_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].escapeHTML(value_)
      }

      // Style concat
      if (csses.concat([this.header.styles[j]]).length) {
        styleToAdd_ += `${csses.concat([this.header.styles[j]]).join('; ')}`
      }
      if (item[`_${field}_style`]) {
        styleToAdd_ += `${item[`_${field}_style`]}`
      }

      if (styleToAdd_) {
        style_ = ` style="${styleToAdd_}"`
      }
      // Style concat

      // handle id and class of td
      if (item[`_${field}_id`]) {
        id_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' id="%s"', item[`_${field}_id`])
      }
      if (item[`_${field}_class`]) {
        class_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', item[`_${field}_class`])
      }
      if (item[`_${field}_rowspan`]) {
        rowspan_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' rowspan="%s"', item[`_${field}_rowspan`])
      }
      if (item[`_${field}_colspan`]) {
        colspan_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' colspan="%s"', item[`_${field}_colspan`])
      }
      if (item[`_${field}_title`]) {
        title_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' title="%s"', item[`_${field}_title`])
      }
      cellStyle = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.header,
        this.header.cellStyles[j], [value_, item, i, field], cellStyle)
      if (cellStyle.classes) {
        class_ = ` class="${cellStyle.classes}"`
      }
      if (cellStyle.css) {
        const csses_ = []

        for (const [key, value] of Object.entries(cellStyle.css)) {
          csses_.push(`${key}: ${value}`)
        }
        style_ = ` style="${csses_.concat(this.header.styles[j]).join('; ')}"`
      }

      value = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(column,
        this.header.formatters[j], [value_, item, i, field], value_)

      if (!(column.checkbox || column.radio)) {
        value = typeof value === 'undefined' || value === null ?
          this.options.undefinedText : value
      }

      if (column.searchable && this.searchText && this.options.searchHighlight) {
        let defValue = ''
        const regExp = new RegExp(`(${ this.searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') })`, 'gim')
        const marker = '<mark>$1</mark>'
        const isHTML = value && /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(value)

        if (isHTML) {
          // value can contains a HTML tags
          const textContent = new DOMParser().parseFromString(value.toString(), 'text/html').documentElement.textContent
          const textReplaced = textContent.replace(regExp, marker)

          defValue = value.replace(new RegExp(`(>\\s*)(${textContent})(\\s*)`, 'gm'), `$1${textReplaced}$3`)
        } else {
          // but usually not
          defValue = value.toString().replace(regExp, marker)
        }
        value = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(column, column.searchHighlightFormatter, [value, this.searchText], defValue)
      }

      if (item[`_${field}_data`] && !_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(item[`_${field}_data`])) {
        for (const [k, v] of Object.entries(item[`_${field}_data`])) {
          // ignore data-index
          if (k === 'index') {
            return
          }
          data_ += ` data-${k}="${v}"`
        }
      }

      if (column.checkbox || column.radio) {
        type = column.checkbox ? 'checkbox' : type
        type = column.radio ? 'radio' : type

        const c = column['class'] || ''
        const isChecked = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isObject(value) && value.hasOwnProperty('checked') ?
          value.checked : (value === true || value_) && value !== false
        const isDisabled = !column.checkboxEnabled || (value && value.disabled)

        text = [
          this.options.cardView ?
            `<div class="card-view ${c}">` :
            `<td class="bs-checkbox ${c}"${class_}${style_}>`,
          `<label>
            <input
            data-index="${i}"
            name="${this.options.selectItemName}"
            type="${type}"
            ${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('value="%s"', item[this.options.idField])}
            ${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('checked="%s"', isChecked ? 'checked' : undefined)}
            ${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('disabled="%s"', isDisabled ? 'disabled' : undefined)} />
            <span></span>
            </label>`,
          this.header.formatters[j] && typeof value === 'string' ? value : '',
          this.options.cardView ? '</div>' : '</td>'
        ].join('')

        item[this.header.stateField] = value === true || (!!value_ || (value && value.checked))
      } else if (this.options.cardView) {
        const cardTitle = this.options.showHeader ?
          `<span class="card-view-title ${cellStyle.classes}"${style_}>${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getFieldTitle(this.columns, field)}</span>` : ''

        text = `<div class="card-view">${cardTitle}<span class="card-view-value ${cellStyle.classes}"${style_}>${value}</span></div>`

        if (this.options.smartDisplay && value === '') {
          text = '<div class="card-view"></div>'
        }
      } else {
        text = `<td${id_}${class_}${style_}${data_}${rowspan_}${colspan_}${title_}>${value}</td>`
      }

      html.push(text)
    })

    if (detailViewTemplate && this.options.detailViewAlign === 'right') {
      html.push(detailViewTemplate)
    }

    if (this.options.cardView) {
      html.push('</div></td>')
    }
    html.push('</tr>')

    return html.join('')
  }

  initBody (fixedScroll) {
    const data = this.getData()

    this.trigger('pre-body', data)

    this.$body = this.$el.find('>tbody')
    if (!this.$body.length) {
      this.$body = $('<tbody></tbody>').appendTo(this.$el)
    }

    // Fix #389 Bootstrap-table-flatJSON is not working
    if (!this.options.pagination || this.options.sidePagination === 'server') {
      this.pageFrom = 1
      this.pageTo = data.length
    }

    const rows = []
    const trFragments = $(document.createDocumentFragment())
    let hasTr = false

    this.autoMergeCells = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].checkAutoMergeCells(data.slice(this.pageFrom - 1, this.pageTo))

    for (let i = this.pageFrom - 1; i < this.pageTo; i++) {
      const item = data[i]
      const tr = this.initRow(item, i, data, trFragments)

      hasTr = hasTr || !!tr
      if (tr && typeof tr === 'string') {
        if (!this.options.virtualScroll) {
          trFragments.append(tr)
        } else {
          rows.push(tr)
        }
      }
    }

    // show no records
    if (!hasTr) {
      this.$body.html(`<tr class="no-records-found">${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<td colspan="%s">%s</td>',
        this.getVisibleFields().length + _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetailViewIndexOffset(this.options),
        this.options.formatNoMatches())}</tr>`)
    } else if (!this.options.virtualScroll) {
      this.$body.html(trFragments)
    } else {
      if (this.virtualScroll) {
        this.virtualScroll.destroy()
      }
      this.virtualScroll = new _virtual_scroll_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        rows,
        fixedScroll,
        scrollEl: this.$tableBody[0],
        contentEl: this.$body[0],
        itemHeight: this.options.virtualScrollItemHeight,
        callback: () => {
          this.fitHeader()
          this.initBodyEvent()
        }
      })
    }

    if (!fixedScroll) {
      this.scrollTo(0)
    }

    this.initBodyEvent()
    this.updateSelected()
    this.initFooter()
    this.resetView()

    if (this.options.sidePagination !== 'server') {
      this.options.totalRows = data.length
    }

    this.trigger('post-body', data)
  }

  initBodyEvent () {
    // click to select by column
    this.$body.find('> tr[data-index] > td').off('click dblclick').on('click dblclick', e => {
      const $td = $(e.currentTarget)
      const $tr = $td.parent()
      const $cardViewArr = $(e.target).parents('.card-views').children()
      const $cardViewTarget = $(e.target).parents('.card-view')
      const rowIndex = $tr.data('index')
      const item = this.data[rowIndex]
      const index = this.options.cardView ? $cardViewArr.index($cardViewTarget) : $td[0].cellIndex
      const fields = this.getVisibleFields()
      const field = fields[index - _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetailViewIndexOffset(this.options)]
      const column = this.columns[this.fieldsColumnsIndex[field]]
      const value = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getItemField(item, field, this.options.escape)

      if ($td.find('.detail-icon').length) {
        return
      }

      this.trigger(e.type === 'click' ? 'click-cell' : 'dbl-click-cell', field, value, item, $td)
      this.trigger(e.type === 'click' ? 'click-row' : 'dbl-click-row', item, $tr, field)

      // if click to select - then trigger the checkbox/radio click
      if (
        e.type === 'click' &&
        this.options.clickToSelect &&
        column.clickToSelect &&
        !_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options, this.options.ignoreClickToSelectOn, [e.target])
      ) {
        const $selectItem = $tr.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('[name="%s"]', this.options.selectItemName))

        if ($selectItem.length) {
          $selectItem[0].click()
        }
      }

      if (e.type === 'click' && this.options.detailViewByClick) {
        this.toggleDetailView(rowIndex, this.header.detailFormatters[this.fieldsColumnsIndex[field]])
      }
    }).off('mousedown').on('mousedown', e => {
      // https://github.com/jquery/jquery/issues/1741
      this.multipleSelectRowCtrlKey = e.ctrlKey || e.metaKey
      this.multipleSelectRowShiftKey = e.shiftKey
    })

    this.$body.find('> tr[data-index] > td > .detail-icon').off('click').on('click', e => {
      e.preventDefault()
      this.toggleDetailView($(e.currentTarget).parent().parent().data('index'))
      return false
    })

    this.$selectItem = this.$body.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('[name="%s"]', this.options.selectItemName))
    this.$selectItem.off('click').on('click', e => {
      e.stopImmediatePropagation()

      const $this = $(e.currentTarget)

      this._toggleCheck($this.prop('checked'), $this.data('index'))
    })

    this.header.events.forEach((_events, i) => {
      let events = _events

      if (!events) {
        return
      }
      // fix bug, if events is defined with namespace
      if (typeof events === 'string') {
        events = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, events)
      }

      const field = this.header.fields[i]
      let fieldIndex = this.getVisibleFields().indexOf(field)

      if (fieldIndex === -1) {
        return
      }

      fieldIndex += _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetailViewIndexOffset(this.options)

      for (const key in events) {
        if (!events.hasOwnProperty(key)) {
          continue
        }
        const event = events[key]

        this.$body.find('>tr:not(.no-records-found)').each((i, tr) => {
          const $tr = $(tr)
          const $td = $tr.find(this.options.cardView ? '.card-views>.card-view' : '>td').eq(fieldIndex)
          const index = key.indexOf(' ')
          const name = key.substring(0, index)
          const el = key.substring(index + 1)

          $td.find(el).off(name).on(name, e => {
            const index = $tr.data('index')
            const row = this.data[index]
            const value = row[field]

            event.apply(this, [e, value, row, index])
          })
        })
      }
    })
  }

  initServer (silent, query, url) {
    let data = {}
    const index = this.header.fields.indexOf(this.options.sortName)

    let params = {
      searchText: this.searchText,
      sortName: this.options.sortName,
      sortOrder: this.options.sortOrder
    }

    if (this.header.sortNames[index]) {
      params.sortName = this.header.sortNames[index]
    }

    if (this.options.pagination && this.options.sidePagination === 'server') {
      params.pageSize = this.options.pageSize === this.options.formatAllRows() ?
        this.options.totalRows : this.options.pageSize
      params.pageNumber = this.options.pageNumber
    }

    if (!(url || this.options.url) && !this.options.ajax) {
      return
    }

    if (this.options.queryParamsType === 'limit') {
      params = {
        search: params.searchText,
        sort: params.sortName,
        order: params.sortOrder
      }

      if (this.options.pagination && this.options.sidePagination === 'server') {
        params.offset = this.options.pageSize === this.options.formatAllRows() ?
          0 : this.options.pageSize * (this.options.pageNumber - 1)
        params.limit = this.options.pageSize === this.options.formatAllRows() ?
          this.options.totalRows : this.options.pageSize
        if (params.limit === 0) {
          delete params.limit
        }
      }
    }

    if (
      this.options.search &&
      this.options.sidePagination === 'server' &&
      this.columns.filter(column => !column.searchable).length
    ) {
      params.searchable = []

      for (const column of this.columns) {
        if (
          !column.checkbox &&
          column.searchable &&
          (
            this.options.visibleSearch &&
            column.visible ||
            !this.options.visibleSearch
          )
        ) {
          params.searchable.push(column.field)
        }
      }
    }

    if (!(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(this.filterColumnsPartial))) {
      params.filter = JSON.stringify(this.filterColumnsPartial, null)
    }

    $.extend(params, query || {})

    data = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options, this.options.queryParams, [params], data)

    // false to stop request
    if (data === false) {
      return
    }

    if (!silent) {
      this.showLoading()
    }
    const request = $.extend({}, _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, this.options.ajaxOptions), {
      type: this.options.method,
      url: url || this.options.url,
      data: this.options.contentType === 'application/json' && this.options.method === 'post' ?
        JSON.stringify(data) : data,
      cache: this.options.cache,
      contentType: this.options.contentType,
      dataType: this.options.dataType,
      success: (_res, textStatus, jqXHR) => {
        const res = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options,
          this.options.responseHandler, [_res, jqXHR], _res)

        this.load(res)
        this.trigger('load-success', res, jqXHR && jqXHR.status, jqXHR)
        if (!silent) {
          this.hideLoading()
        }

        if (
          this.options.sidePagination === 'server' &&
          res[this.options.totalField] > 0 &&
          !res[this.options.dataField].length
        ) {
          this.updatePagination()
        }
      },
      error: jqXHR => {
        let data = []

        if (this.options.sidePagination === 'server') {
          data = {}
          data[this.options.totalField] = 0
          data[this.options.dataField] = []
        }
        this.load(data)
        this.trigger('load-error', jqXHR && jqXHR.status, jqXHR)
        if (!silent) this.$tableLoading.hide()
      }
    })

    if (this.options.ajax) {
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this, this.options.ajax, [request], null)
    } else {
      if (this._xhr && this._xhr.readyState !== 4) {
        this._xhr.abort()
      }
      this._xhr = $.ajax(request)
    }

    return data
  }

  initSearchText () {
    if (this.options.search) {
      this.searchText = ''
      if (this.options.searchText !== '') {
        const $search = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchInput(this)

        $search.val(this.options.searchText)
        this.onSearch({ currentTarget: $search, firedByInitSearchText: true })
      }
    }
  }

  getCaret () {
    this.$header.find('th').each((i, th) => {
      $(th).find('.sortable').removeClass('desc asc')
        .addClass($(th).data('field') === this.options.sortName ?
          this.options.sortOrder : 'both')
    })
  }

  updateSelected () {
    const checkAll = this.$selectItem.filter(':enabled').length &&
      this.$selectItem.filter(':enabled').length ===
      this.$selectItem.filter(':enabled').filter(':checked').length

    this.$selectAll.add(this.$selectAll_).prop('checked', checkAll)

    this.$selectItem.each((i, el) => {
      $(el).closest('tr')[$(el).prop('checked') ? 'addClass' : 'removeClass']('selected')
    })
  }

  updateRows () {
    this.$selectItem.each((i, el) => {
      this.data[$(el).data('index')][this.header.stateField] = $(el).prop('checked')
    })
  }

  resetRows () {
    for (const row of this.data) {
      this.$selectAll.prop('checked', false)
      this.$selectItem.prop('checked', false)
      if (this.header.stateField) {
        row[this.header.stateField] = false
      }
    }
    this.initHiddenRows()
  }

  trigger (_name, ...args) {
    const name = `${_name}.bs.table`

    this.options[BootstrapTable.EVENTS[name]](...[...args, this])
    this.$el.trigger($.Event(name, { sender: this }), args)

    this.options.onAll(name, ...[...args, this])
    this.$el.trigger($.Event('all.bs.table', { sender: this }), [name, args])
  }

  resetHeader () {
    // fix #61: the hidden table reset header bug.
    // fix bug: get $el.css('width') error sometime (height = 500)
    clearTimeout(this.timeoutId_)
    this.timeoutId_ = setTimeout(() => this.fitHeader(), this.$el.is(':hidden') ? 100 : 0)
  }

  fitHeader () {
    if (this.$el.is(':hidden')) {
      this.timeoutId_ = setTimeout(() => this.fitHeader(), 100)
      return
    }

    const fixedBody = this.$tableBody.get(0)
    const scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth &&
    fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ?
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getScrollBarWidth() : 0

    this.$el.css('margin-top', -this.$header.outerHeight())

    const focused = $(':focus')

    if (focused.length > 0) {
      const $th = focused.parents('th')

      if ($th.length > 0) {
        const dataField = $th.attr('data-field')

        if (dataField !== undefined) {
          const $headerTh = this.$header.find(`[data-field='${dataField}']`)

          if ($headerTh.length > 0) {
            $headerTh.find(':input').addClass('focus-temp')
          }
        }
      }
    }

    this.$header_ = this.$header.clone(true, true)
    this.$selectAll_ = this.$header_.find('[name="btSelectAll"]')
    this.$tableHeader
      .css('margin-right', scrollWidth)
      .find('table').css('width', this.$el.outerWidth())
      .html('').attr('class', this.$el.attr('class'))
      .append(this.$header_)

    this.$tableLoading.css('width', this.$el.outerWidth())

    const focusedTemp = $('.focus-temp:visible:eq(0)')

    if (focusedTemp.length > 0) {
      focusedTemp.focus()
      this.$header.find('.focus-temp').removeClass('focus-temp')
    }

    // fix bug: $.data() is not working as expected after $.append()
    this.$header.find('th[data-field]').each((i, el) => {
      this.$header_.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('th[data-field="%s"]', $(el).data('field'))).data($(el).data())
    })

    const visibleFields = this.getVisibleFields()
    const $ths = this.$header_.find('th')
    let $tr = this.$body.find('>tr:not(.no-records-found,.virtual-scroll-top)').eq(0)

    while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
      $tr = $tr.next()
    }

    const trLength = $tr.find('> *').length

    $tr.find('> *').each((i, el) => {
      const $this = $(el)

      if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasDetailViewIcon(this.options)) {
        if (
          i === 0 && this.options.detailViewAlign !== 'right' ||
          i === trLength - 1 && this.options.detailViewAlign === 'right'
        ) {
          const $thDetail = $ths.filter('.detail')
          const zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width()

          $thDetail.find('.fht-cell').width($this.innerWidth() - zoomWidth)
          return
        }
      }

      const index = i - _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetailViewIndexOffset(this.options)
      let $th = this.$header_.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('th[data-field="%s"]', visibleFields[index]))

      if ($th.length > 1) {
        $th = $($ths[$this[0].cellIndex])
      }

      const zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width()

      $th.find('.fht-cell').width($this.innerWidth() - zoomWidth)
    })

    this.horizontalScroll()
    this.trigger('post-header')
  }

  initFooter () {
    if (!this.options.showFooter || this.options.cardView) { // do nothing
      return
    }

    const data = this.getData()
    const html = []
    let detailTemplate = ''

    if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasDetailViewIcon(this.options)) {
      detailTemplate = '<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>'
    }

    if (detailTemplate && this.options.detailViewAlign !== 'right') {
      html.push(detailTemplate)
    }

    for (const column of this.columns) {
      let falign = ''
      let valign = ''
      const csses = []
      let style = {}
      let class_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', column['class'])

      if (
        !column.visible ||
        (this.footerData && this.footerData.length > 0 && !(column.field in this.footerData[0]))
      ) {
        continue
      }

      if (this.options.cardView && (!column.cardVisible)) {
        return
      }

      falign = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('text-align: %s; ', column.falign ? column.falign : column.align)
      valign = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('vertical-align: %s; ', column.valign)

      style = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(null, this.options.footerStyle, [column])

      if (style && style.css) {
        for (const [key, value] of Object.entries(style.css)) {
          csses.push(`${key}: ${value}`)
        }
      }
      if (style && style.classes) {
        class_ = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' class="%s"', column['class'] ?
          [column['class'], style.classes].join(' ') : style.classes)
      }

      html.push('<th', class_, _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(' style="%s"', falign + valign + csses.concat().join('; ')))
      let colspan = 0

      if (this.footerData && this.footerData.length > 0) {
        colspan = this.footerData[0][`_${ column.field }_colspan`] || 0
      }
      if (colspan) {
        html.push(` colspan="${colspan}" `)
      }

      html.push('>')
      html.push('<div class="th-inner">')

      let value = ''

      if (this.footerData && this.footerData.length > 0) {
        value = this.footerData[0][column.field] || ''
      }
      html.push(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(column, column.footerFormatter,
        [data, value], value))

      html.push('</div>')
      html.push('<div class="fht-cell"></div>')
      html.push('</div>')
      html.push('</th>')
    }

    if (detailTemplate && this.options.detailViewAlign === 'right') {
      html.push(detailTemplate)
    }

    if (!this.options.height && !this.$tableFooter.length) {
      this.$el.append('<tfoot><tr></tr></tfoot>')
      this.$tableFooter = this.$el.find('tfoot')
    }

    if (!this.$tableFooter.find('tr').length) {
      this.$tableFooter.html('<table><thead><tr></tr></thead></table>')
    }

    this.$tableFooter.find('tr').html(html.join(''))

    this.trigger('post-footer', this.$tableFooter)
  }

  fitFooter () {
    if (this.$el.is(':hidden')) {
      setTimeout(() => this.fitFooter(), 100)
      return
    }

    const fixedBody = this.$tableBody.get(0)
    const scrollWidth = fixedBody.scrollWidth > fixedBody.clientWidth &&
    fixedBody.scrollHeight > fixedBody.clientHeight + this.$header.outerHeight() ?
      _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getScrollBarWidth() : 0

    this.$tableFooter
      .css('margin-right', scrollWidth)
      .find('table').css('width', this.$el.outerWidth())
      .attr('class', this.$el.attr('class'))

    const $ths = this.$tableFooter.find('th')
    let $tr = this.$body.find('>tr:first-child:not(.no-records-found)')

    $ths.find('.fht-cell').width('auto')

    while ($tr.length && $tr.find('>td[colspan]:not([colspan="1"])').length) {
      $tr = $tr.next()
    }

    const trLength = $tr.find('> *').length

    $tr.find('> *').each((i, el) => {
      const $this = $(el)

      if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].hasDetailViewIcon(this.options)) {
        if (
          i === 0 && this.options.detailViewAlign === 'left' ||
          i === trLength - 1 && this.options.detailViewAlign === 'right'
        ) {
          const $thDetail = $ths.filter('.detail')
          const zoomWidth = $thDetail.innerWidth() - $thDetail.find('.fht-cell').width()

          $thDetail.find('.fht-cell').width($this.innerWidth() - zoomWidth)
          return
        }
      }

      const $th = $ths.eq(i)
      const zoomWidth = $th.innerWidth() - $th.find('.fht-cell').width()

      $th.find('.fht-cell').width($this.innerWidth() - zoomWidth)
    })

    this.horizontalScroll()
  }

  horizontalScroll () {
    // horizontal scroll event
    // TODO: it's probably better improving the layout than binding to scroll event
    this.$tableBody.off('scroll').on('scroll', () => {
      const scrollLeft = this.$tableBody.scrollLeft()

      if (this.options.showHeader && this.options.height) {
        this.$tableHeader.scrollLeft(scrollLeft)
      }

      if (this.options.showFooter && !this.options.cardView) {
        this.$tableFooter.scrollLeft(scrollLeft)
      }

      this.trigger('scroll-body', this.$tableBody)
    })
  }

  getVisibleFields () {
    const visibleFields = []

    for (const field of this.header.fields) {
      const column = this.columns[this.fieldsColumnsIndex[field]]

      if (!column || !column.visible) {
        continue
      }
      visibleFields.push(field)
    }
    return visibleFields
  }

  initHiddenRows () {
    this.hiddenRows = []
  }

  // PUBLIC FUNCTION DEFINITION
  // =======================

  getOptions () {
    // deep copy and remove data
    const options = $.extend({}, this.options)

    delete options.data
    return $.extend(true, {}, options)
  }

  refreshOptions (options) {
    // If the objects are equivalent then avoid the call of destroy / init methods
    if (_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].compareObjects(this.options, options, true)) {
      return
    }
    this.options = $.extend(this.options, options)
    this.trigger('refresh-options', this.options)
    this.destroy()
    this.init()
  }

  getData (params) {
    let data = this.options.data

    if (
      (
        this.searchText ||
        this.options.customSearch ||
        this.options.sortName !== undefined ||
        this.enableCustomSort || // Fix #4616: this.enableCustomSort is for extensions
        !_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(this.filterColumns) ||
        !_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(this.filterColumnsPartial)
      ) && (!params || !params.unfiltered)
    ) {
      data = this.data
    }

    if (params && params.useCurrentPage) {
      data = data.slice(this.pageFrom - 1, this.pageTo)
    }

    if (params && !params.includeHiddenRows) {
      const hiddenRows = this.getHiddenRows()

      data = data.filter(row => _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].findIndex(hiddenRows, row) === -1)
    }

    if (params && params.formatted) {
      data.forEach(row => {
        for (const [key, value] of Object.entries(row)) {
          const column = this.columns[this.fieldsColumnsIndex[key]]

          if (!column) {
            return
          }

          row[key] = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(column, this.header.formatters[column.fieldIndex], [value, row, row.index, column.field], value)
        }
      })
    }

    return data
  }

  getSelections () {
    return (this.options.maintainMetaData ? this.options.data : this.data)
      .filter(row => row[this.header.stateField] === true)
  }

  load (_data) {
    let fixedScroll = false
    let data = _data

    // #431: support pagination
    if (this.options.pagination && this.options.sidePagination === 'server') {
      this.options.totalRows = data[this.options.totalField]
      this.options.totalNotFiltered = data[this.options.totalNotFilteredField]
      this.footerData = data[this.options.footerField] ? [data[this.options.footerField]] : undefined
    }

    fixedScroll = data.fixedScroll
    data = Array.isArray(data) ? data : data[this.options.dataField]

    this.initData(data)
    this.initSearch()
    this.initPagination()
    this.initBody(fixedScroll)
  }

  append (data) {
    this.initData(data, 'append')
    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  }

  prepend (data) {
    this.initData(data, 'prepend')
    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  }

  remove (params) {
    let removed = 0

    for (let i = this.options.data.length - 1; i >= 0; i--) {

      const row = this.options.data[i]

      if (!row.hasOwnProperty(params.field) && params.field !== '$index') {
        continue
      }

      if (
        !row.hasOwnProperty(params.field) &&
        params.field === '$index' &&
        params.values.includes(i) ||
        params.values.includes(row[params.field])
      ) {
        removed++

        this.options.data.splice(i, 1)
      }
    }

    if (!removed) {
      return
    }

    if (this.options.sidePagination === 'server') {
      this.options.totalRows -= removed
      this.data = [...this.options.data]
    }

    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  }

  removeAll () {
    if (this.options.data.length > 0) {
      this.options.data.splice(0, this.options.data.length)
      this.initSearch()
      this.initPagination()
      this.initBody(true)
    }
  }

  insertRow (params) {
    if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
      return
    }
    this.options.data.splice(params.index, 0, params.row)
    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  }

  updateRow (params) {
    const allParams = Array.isArray(params) ? params : [params]

    for (const params of allParams) {
      if (!params.hasOwnProperty('index') || !params.hasOwnProperty('row')) {
        continue
      }

      if (params.hasOwnProperty('replace') && params.replace) {
        this.options.data[params.index] = params.row
      } else {
        $.extend(this.options.data[params.index], params.row)
      }
    }

    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  }

  getRowByUniqueId (_id) {
    const uniqueId = this.options.uniqueId
    const len = this.options.data.length
    let id = _id
    let dataRow = null
    let i
    let row
    let rowUniqueId

    for (i = len - 1; i >= 0; i--) {
      row = this.options.data[i]

      if (row.hasOwnProperty(uniqueId)) { // uniqueId is a column
        rowUniqueId = row[uniqueId]
      } else if (row._data && row._data.hasOwnProperty(uniqueId)) { // uniqueId is a row data property
        rowUniqueId = row._data[uniqueId]
      } else {
        continue
      }

      if (typeof rowUniqueId === 'string') {
        id = id.toString()
      } else if (typeof rowUniqueId === 'number') {
        if ((Number(rowUniqueId) === rowUniqueId) && (rowUniqueId % 1 === 0)) {
          id = parseInt(id)
        } else if ((rowUniqueId === Number(rowUniqueId)) && (rowUniqueId !== 0)) {
          id = parseFloat(id)
        }
      }

      if (rowUniqueId === id) {
        dataRow = row
        break
      }
    }

    return dataRow
  }

  updateByUniqueId (params) {
    const allParams = Array.isArray(params) ? params : [params]

    for (const params of allParams) {
      if (!params.hasOwnProperty('id') || !params.hasOwnProperty('row')) {
        continue
      }

      const rowId = this.options.data.indexOf(this.getRowByUniqueId(params.id))

      if (rowId === -1) {
        continue
      }

      if (params.hasOwnProperty('replace') && params.replace) {
        this.options.data[rowId] = params.row
      } else {
        $.extend(this.options.data[rowId], params.row)
      }
    }

    this.initSearch()
    this.initPagination()
    this.initSort()
    this.initBody(true)
  }

  removeByUniqueId (id) {
    const len = this.options.data.length
    const row = this.getRowByUniqueId(id)

    if (row) {
      this.options.data.splice(this.options.data.indexOf(row), 1)
    }

    if (len === this.options.data.length) {
      return
    }

    if (this.options.sidePagination === 'server') {
      this.options.totalRows -= 1
      this.data = [...this.options.data]
    }

    this.initSearch()
    this.initPagination()
    this.initBody(true)
  }

  updateCell (params) {
    if (!params.hasOwnProperty('index') ||
      !params.hasOwnProperty('field') ||
      !params.hasOwnProperty('value')) {
      return
    }
    this.data[params.index][params.field] = params.value

    if (params.reinit === false) {
      return
    }
    this.initSort()
    this.initBody(true)
  }

  updateCellByUniqueId (params) {
    const allParams = Array.isArray(params) ? params : [params]

    allParams.forEach(({ id, field, value }) => {
      const rowId = this.options.data.indexOf(this.getRowByUniqueId(id))

      if (rowId === -1) {
        return
      }
      this.options.data[rowId][field] = value
    })

    if (params.reinit === false) {
      return
    }
    this.initSort()
    this.initBody(true)
  }

  showRow (params) {
    this._toggleRow(params, true)
  }

  hideRow (params) {
    this._toggleRow(params, false)
  }

  _toggleRow (params, visible) {
    let row

    if (params.hasOwnProperty('index')) {
      row = this.getData()[params.index]
    } else if (params.hasOwnProperty('uniqueId')) {
      row = this.getRowByUniqueId(params.uniqueId)
    }

    if (!row) {
      return
    }

    const index = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].findIndex(this.hiddenRows, row)

    if (!visible && index === -1) {
      this.hiddenRows.push(row)
    } else if (visible && index > -1) {
      this.hiddenRows.splice(index, 1)
    }

    this.initBody(true)
    this.initPagination()
  }

  getHiddenRows (show) {
    if (show) {
      this.initHiddenRows()
      this.initBody(true)
      this.initPagination()
      return
    }
    const data = this.getData()
    const rows = []

    for (const row of data) {
      if (this.hiddenRows.includes(row)) {
        rows.push(row)
      }
    }
    this.hiddenRows = rows
    return rows
  }

  showColumn (field) {
    const fields = Array.isArray(field) ? field : [field]

    fields.forEach(field => {
      this._toggleColumn(this.fieldsColumnsIndex[field], true, true)
    })
  }

  hideColumn (field) {
    const fields = Array.isArray(field) ? field : [field]

    fields.forEach(field => {
      this._toggleColumn(this.fieldsColumnsIndex[field], false, true)
    })
  }

  _toggleColumn (index, checked, needUpdate) {
    if (index === -1 || this.columns[index].visible === checked) {
      return
    }
    this.columns[index].visible = checked
    this.initHeader()
    this.initSearch()
    this.initPagination()
    this.initBody()

    if (this.options.showColumns) {
      const $items = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop('disabled', false)

      if (needUpdate) {
        $items.filter(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('[value="%s"]', index)).prop('checked', checked)
      }

      if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
        $items.filter(':checked').prop('disabled', true)
      }
    }
  }

  getVisibleColumns () {
    return this.columns.filter(column => column.visible && !this.isSelectionColumn(column))
  }

  getHiddenColumns () {
    return this.columns.filter(({ visible }) => !visible)
  }

  isSelectionColumn (column) {
    return column.radio || column.checkbox
  }

  showAllColumns () {
    this._toggleAllColumns(true)
  }

  hideAllColumns () {
    this._toggleAllColumns(false)
  }

  _toggleAllColumns (visible) {
    for (const column of this.columns.slice().reverse()) {
      if (column.switchable) {
        if (!visible && this.options.showColumns && this.getVisibleColumns().length === this.options.minimumCountColumns) {
          continue
        }
        column.visible = visible
      }
    }

    this.initHeader()
    this.initSearch()
    this.initPagination()
    this.initBody()
    if (this.options.showColumns) {
      const $items = this.$toolbar.find('.keep-open input[type="checkbox"]:not(".toggle-all")').prop('disabled', false)

      if (visible) {
        $items.prop('checked', visible)
      } else {
        $items.get().reverse().forEach(item => {
          if ($items.filter(':checked').length > this.options.minimumCountColumns) {
            $(item).prop('checked', visible)
          }
        })
      }

      if ($items.filter(':checked').length <= this.options.minimumCountColumns) {
        $items.filter(':checked').prop('disabled', true)
      }
    }
  }

  mergeCells (options) {
    const row = options.index
    let col = this.getVisibleFields().indexOf(options.field)
    const rowspan = options.rowspan || 1
    const colspan = options.colspan || 1
    let i
    let j
    const $tr = this.$body.find('>tr')

    col += _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDetailViewIndexOffset(this.options)

    const $td = $tr.eq(row).find('>td').eq(col)

    if (row < 0 || col < 0 || row >= this.data.length) {
      return
    }

    for (i = row; i < row + rowspan; i++) {
      for (j = col; j < col + colspan; j++) {
        $tr.eq(i).find('>td').eq(j).hide()
      }
    }

    $td.attr('rowspan', rowspan).attr('colspan', colspan).show()
  }

  checkAll () {
    this._toggleCheckAll(true)
  }

  uncheckAll () {
    this._toggleCheckAll(false)
  }

  _toggleCheckAll (checked) {
    const rowsBefore = this.getSelections()

    this.$selectAll.add(this.$selectAll_).prop('checked', checked)
    this.$selectItem.filter(':enabled').prop('checked', checked)
    this.updateRows()
    this.updateSelected()

    const rowsAfter = this.getSelections()

    if (checked) {
      this.trigger('check-all', rowsAfter, rowsBefore)
      return
    }

    this.trigger('uncheck-all', rowsAfter, rowsBefore)
  }

  checkInvert () {
    const $items = this.$selectItem.filter(':enabled')
    let checked = $items.filter(':checked')

    $items.each((i, el) => {
      $(el).prop('checked', !$(el).prop('checked'))
    })
    this.updateRows()
    this.updateSelected()
    this.trigger('uncheck-some', checked)
    checked = this.getSelections()
    this.trigger('check-some', checked)
  }

  check (index) {
    this._toggleCheck(true, index)
  }

  uncheck (index) {
    this._toggleCheck(false, index)
  }

  _toggleCheck (checked, index) {
    const $el = this.$selectItem.filter(`[data-index="${index}"]`)
    const row = this.data[index]

    if (
      $el.is(':radio') ||
      this.options.singleSelect ||
      this.options.multipleSelectRow &&
      !this.multipleSelectRowCtrlKey &&
      !this.multipleSelectRowShiftKey
    ) {
      for (const r of this.options.data) {
        r[this.header.stateField] = false
      }
      this.$selectItem.filter(':checked').not($el).prop('checked', false)
    }

    row[this.header.stateField] = checked

    if (this.options.multipleSelectRow) {
      if (this.multipleSelectRowShiftKey && this.multipleSelectRowLastSelectedIndex >= 0) {
        const [fromIndex, toIndex] = this.multipleSelectRowLastSelectedIndex < index ?
          [this.multipleSelectRowLastSelectedIndex, index] : [index, this.multipleSelectRowLastSelectedIndex]

        for (let i = fromIndex + 1; i < toIndex; i++) {
          this.data[i][this.header.stateField] = true
          this.$selectItem.filter(`[data-index="${i}"]`).prop('checked', true)
        }
      }

      this.multipleSelectRowCtrlKey = false
      this.multipleSelectRowShiftKey = false
      this.multipleSelectRowLastSelectedIndex = checked ? index : -1
    }

    $el.prop('checked', checked)
    this.updateSelected()
    this.trigger(checked ? 'check' : 'uncheck', this.data[index], $el)
  }

  checkBy (obj) {
    this._toggleCheckBy(true, obj)
  }

  uncheckBy (obj) {
    this._toggleCheckBy(false, obj)
  }

  _toggleCheckBy (checked, obj) {
    if (!obj.hasOwnProperty('field') || !obj.hasOwnProperty('values')) {
      return
    }

    const rows = []

    this.data.forEach((row, i) => {
      if (!row.hasOwnProperty(obj.field)) {
        return false
      }
      if (obj.values.includes(row[obj.field])) {
        let $el = this.$selectItem.filter(':enabled')
          .filter(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('[data-index="%s"]', i))

        $el = checked ? $el.not(':checked') : $el.filter(':checked')

        if (!$el.length) {
          return
        }

        $el.prop('checked', checked)
        row[this.header.stateField] = checked
        rows.push(row)
        this.trigger(checked ? 'check' : 'uncheck', row, $el)
      }
    })
    this.updateSelected()
    this.trigger(checked ? 'check-some' : 'uncheck-some', rows)
  }

  refresh (params) {
    if (params && params.url) {
      this.options.url = params.url
    }
    if (params && params.pageNumber) {
      this.options.pageNumber = params.pageNumber
    }
    if (params && params.pageSize) {
      this.options.pageSize = params.pageSize
    }
    this.trigger('refresh', this.initServer(params && params.silent,
      params && params.query, params && params.url))
  }

  destroy () {
    this.$el.insertBefore(this.$container)
    $(this.options.toolbar).insertBefore(this.$el)
    this.$container.next().remove()
    this.$container.remove()
    this.$el.html(this.$el_.html())
      .css('margin-top', '0')
      .attr('class', this.$el_.attr('class') || '') // reset the class
  }

  resetView (params) {
    let padding = 0

    if (params && params.height) {
      this.options.height = params.height
    }

    this.$selectAll.prop('checked', this.$selectItem.length > 0 &&
      this.$selectItem.length === this.$selectItem.filter(':checked').length)

    this.$tableContainer.toggleClass('has-card-view', this.options.cardView)

    if (!this.options.cardView && this.options.showHeader && this.options.height) {
      this.$tableHeader.show()
      this.resetHeader()
      padding += this.$header.outerHeight(true) + 1
    } else {
      this.$tableHeader.hide()
      this.trigger('post-header')
    }

    if (!this.options.cardView && this.options.showFooter) {
      this.$tableFooter.show()
      this.fitFooter()
      if (this.options.height) {
        padding += this.$tableFooter.outerHeight(true)
      }
    }

    if (this.$container.hasClass('fullscreen')) {
      this.$tableContainer.css('height', '')
      this.$tableContainer.css('width', '')
    } else if (this.options.height) {
      if (this.$tableBorder) {
        this.$tableBorder.css('width', '')
        this.$tableBorder.css('height', '')
      }

      const toolbarHeight = this.$toolbar.outerHeight(true)
      const paginationHeight = this.$pagination.outerHeight(true)
      const height = this.options.height - toolbarHeight - paginationHeight
      const $bodyTable = this.$tableBody.find('>table')
      const tableHeight = $bodyTable.outerHeight()

      this.$tableContainer.css('height', `${height}px`)

      if (this.$tableBorder && $bodyTable.is(':visible')) {
        let tableBorderHeight = height - tableHeight - 2

        if (this.$tableBody[0].scrollWidth - this.$tableBody.innerWidth()) {
          tableBorderHeight -= _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getScrollBarWidth()
        }
        this.$tableBorder.css('width', `${$bodyTable.outerWidth()}px`)
        this.$tableBorder.css('height', `${tableBorderHeight}px`)
      }
    }

    if (this.options.cardView) {
      // remove the element css
      this.$el.css('margin-top', '0')
      this.$tableContainer.css('padding-bottom', '0')
      this.$tableFooter.hide()
    } else {
      // Assign the correct sortable arrow
      this.getCaret()
      this.$tableContainer.css('padding-bottom', `${padding}px`)
    }

    this.trigger('reset-view')
  }

  showLoading () {
    this.$tableLoading.toggleClass('open', true)

    let fontSize = this.options.loadingFontSize

    if (this.options.loadingFontSize === 'auto') {
      fontSize = this.$tableLoading.width() * 0.04
      fontSize = Math.max(12, fontSize)
      fontSize = Math.min(32, fontSize)
      fontSize = `${fontSize}px`
    }

    this.$tableLoading.find('.loading-text').css('font-size', fontSize)
  }

  hideLoading () {
    this.$tableLoading.toggleClass('open', false)
  }

  togglePagination () {
    this.options.pagination = !this.options.pagination

    const icon = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : ''
    const text = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : ''

    this.$toolbar.find('button[name="paginationSwitch"]')
      .html(`${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) } ${ text}`)
    this.updatePagination()
  }

  toggleFullscreen () {
    this.$el.closest('.bootstrap-table').toggleClass('fullscreen')
    this.resetView()
  }

  toggleView () {
    this.options.cardView = !this.options.cardView
    this.initHeader()

    const icon = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : ''
    const text = this.options.showButtonText ? this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn() : ''

    this.$toolbar.find('button[name="toggle"]')
      .html(`${_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) } ${ text}`)
    this.initBody()
    this.trigger('toggle', this.options.cardView)
  }

  resetSearch (text) {
    const $search = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchInput(this)

    $search.val(text || '')
    this.onSearch({ currentTarget: $search })
  }

  filterBy (columns, options) {
    this.filterOptions = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(options) ? this.options.filterOptions : $.extend(this.options.filterOptions, options)
    this.filterColumns = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isEmptyObject(columns) ? {} : columns
    this.options.pageNumber = 1
    this.initSearch()
    this.updatePagination()
  }

  scrollTo (params) {
    let options = { unit: 'px', value: 0 }

    if (typeof params === 'object') {
      options = Object.assign(options, params)
    } else if (typeof params === 'string' && params === 'bottom') {
      options.value = this.$tableBody[0].scrollHeight
    } else if (typeof params === 'string' || typeof params === 'number') {
      options.value = params
    }

    let scrollTo = options.value

    if (options.unit === 'rows') {
      scrollTo = 0
      this.$body.find(`> tr:lt(${options.value})`).each((i, el) => {
        scrollTo += $(el).outerHeight(true)
      })
    }

    this.$tableBody.scrollTop(scrollTo)
  }

  getScrollPosition () {
    return this.$tableBody.scrollTop()
  }

  selectPage (page) {
    if (page > 0 && page <= this.options.totalPages) {
      this.options.pageNumber = page
      this.updatePagination()
    }
  }

  prevPage () {
    if (this.options.pageNumber > 1) {
      this.options.pageNumber--
      this.updatePagination()
    }
  }

  nextPage () {
    if (this.options.pageNumber < this.options.totalPages) {
      this.options.pageNumber++
      this.updatePagination()
    }
  }

  toggleDetailView (index, _columnDetailFormatter) {
    const $tr = this.$body.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('> tr[data-index="%s"]', index))

    if ($tr.next().is('tr.detail-view')) {
      this.collapseRow(index)
    } else {
      this.expandRow(index, _columnDetailFormatter)
    }

    this.resetView()
  }

  expandRow (index, _columnDetailFormatter) {
    const row = this.data[index]
    const $tr = this.$body.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('> tr[data-index="%s"][data-has-detail-view]', index))

    if ($tr.next().is('tr.detail-view')) {
      return
    }

    if (this.options.detailViewIcon) {
      $tr.find('a.detail-icon').html(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose))
    }

    $tr.after(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', $tr.children('td').length))

    const $element = $tr.next().find('td')

    const detailFormatter = _columnDetailFormatter || this.options.detailFormatter
    const content = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].calculateObjectValue(this.options, detailFormatter, [index, row, $element], '')

    if ($element.length === 1) {
      $element.append(content)
    }

    this.trigger('expand-row', index, row, $element)
  }

  expandRowByUniqueId (uniqueId) {
    const row = this.getRowByUniqueId(uniqueId)

    if (!row) {
      return
    }

    this.expandRow(this.data.indexOf(row))
  }

  collapseRow (index) {
    const row = this.data[index]
    const $tr = this.$body.find(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf('> tr[data-index="%s"][data-has-detail-view]', index))

    if (!$tr.next().is('tr.detail-view')) {
      return
    }

    if (this.options.detailViewIcon) {
      $tr.find('a.detail-icon').html(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen))
    }

    this.trigger('collapse-row', index, row, $tr.next())
    $tr.next().remove()
  }

  collapseRowByUniqueId (uniqueId) {
    const row = this.getRowByUniqueId(uniqueId)

    if (!row) {
      return
    }

    this.collapseRow(this.data.indexOf(row))
  }

  expandAllRows () {
    const trs = this.$body.find('> tr[data-index][data-has-detail-view]')

    for (let i = 0; i < trs.length; i++) {
      this.expandRow($(trs[i]).data('index'))
    }
  }

  collapseAllRows () {
    const trs = this.$body.find('> tr[data-index][data-has-detail-view]')

    for (let i = 0; i < trs.length; i++) {
      this.collapseRow($(trs[i]).data('index'))
    }
  }

  updateColumnTitle (params) {
    if (!params.hasOwnProperty('field') || !params.hasOwnProperty('title')) {
      return
    }

    this.columns[this.fieldsColumnsIndex[params.field]].title =
      this.options.escape ? _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].escapeHTML(params.title) : params.title

    if (this.columns[this.fieldsColumnsIndex[params.field]].visible) {
      this.$header.find('th[data-field]').each((i, el) => {
        if ($(el).data('field') === params.field) {
          $($(el).find('.th-inner')[0]).text(params.title)
          return false
        }
      })

      this.resetView()
    }
  }

  updateFormatText (formatName, text) {
    if (!/^format/.test(formatName) || !this.options[formatName]) {
      return
    }
    if (typeof text === 'string') {
      this.options[formatName] = () => text
    } else if (typeof text === 'function') {
      this.options[formatName] = text
    }
    this.initToolbar()
    this.initPagination()
    this.initBody()
  }
}

BootstrapTable.VERSION = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].VERSION
BootstrapTable.DEFAULTS = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].DEFAULTS
BootstrapTable.LOCALES = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].LOCALES
BootstrapTable.COLUMN_DEFAULTS = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].COLUMN_DEFAULTS
BootstrapTable.METHODS = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].METHODS
BootstrapTable.EVENTS = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].EVENTS

// BOOTSTRAP TABLE PLUGIN DEFINITION
// =======================

$.BootstrapTable = BootstrapTable
$.fn.bootstrapTable = function (option, ...args) {
  let value

  this.each((i, el) => {
    let data = $(el).data('bootstrap.table')
    const options = $.extend({}, BootstrapTable.DEFAULTS, $(el).data(),
      typeof option === 'object' && option)

    if (typeof option === 'string') {
      if (!_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].METHODS.includes(option)) {
        throw new Error(`Unknown method: ${option}`)
      }

      if (!data) {
        return
      }

      value = data[option](...args)

      if (option === 'destroy') {
        $(el).removeData('bootstrap.table')
      }
    }

    if (!data) {
      data = new $.BootstrapTable(el, options)
      $(el).data('bootstrap.table', data)
      data.init()
    }
  })

  return typeof value === 'undefined' ? this : value
}

$.fn.bootstrapTable.Constructor = BootstrapTable
$.fn.bootstrapTable.theme = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].THEME
$.fn.bootstrapTable.VERSION = _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].VERSION
$.fn.bootstrapTable.defaults = BootstrapTable.DEFAULTS
$.fn.bootstrapTable.columnDefaults = BootstrapTable.COLUMN_DEFAULTS
$.fn.bootstrapTable.events = BootstrapTable.EVENTS
$.fn.bootstrapTable.locales = BootstrapTable.LOCALES
$.fn.bootstrapTable.methods = BootstrapTable.METHODS
$.fn.bootstrapTable.utils = _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]

// BOOTSTRAP TABLE INIT
// =======================

$(() => {
  $('[data-toggle="table"]').bootstrapTable()
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BootstrapTable);


/***/ }),

/***/ "./node_modules/bootstrap-table/src/constants/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/constants/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-unused-vars */
const VERSION = '1.18.3'

let bootstrapVersion = 4

try {
  const rawVersion = $.fn.dropdown.Constructor.VERSION

  // Only try to parse VERSION if it is defined.
  // It is undefined in older versions of Bootstrap (tested with 3.1.1).
  if (rawVersion !== undefined) {
    bootstrapVersion = parseInt(rawVersion, 10)
  }
} catch (e) {
  // ignore
}

try {
  // eslint-disable-next-line no-undef
  const rawVersion = bootstrap.Tooltip.VERSION

  if (rawVersion !== undefined) {
    bootstrapVersion = parseInt(rawVersion, 10)
  }
} catch (e) {
  // ignore
}

const CONSTANTS = {
  3: {
    iconsPrefix: 'glyphicon',
    icons: {
      paginationSwitchDown: 'glyphicon-collapse-down icon-chevron-down',
      paginationSwitchUp: 'glyphicon-collapse-up icon-chevron-up',
      refresh: 'glyphicon-refresh icon-refresh',
      toggleOff: 'glyphicon-list-alt icon-list-alt',
      toggleOn: 'glyphicon-list-alt icon-list-alt',
      columns: 'glyphicon-th icon-th',
      detailOpen: 'glyphicon-plus icon-plus',
      detailClose: 'glyphicon-minus icon-minus',
      fullscreen: 'glyphicon-fullscreen',
      search: 'glyphicon-search',
      clearSearch: 'glyphicon-trash'
    },
    classes: {
      buttonsPrefix: 'btn',
      buttons: 'default',
      buttonsGroup: 'btn-group',
      buttonsDropdown: 'btn-group',
      pull: 'pull',
      inputGroup: 'input-group',
      inputPrefix: 'input-',
      input: 'form-control',
      paginationDropdown: 'btn-group dropdown',
      dropup: 'dropup',
      dropdownActive: 'active',
      paginationActive: 'active',
      buttonActive: 'active'
    },
    html: {
      toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      toolbarDropdownItem: '<li class="dropdown-item-marker" role="menuitem"><label>%s</label></li>',
      toolbarDropdownSeparator: '<li class="divider"></li>',
      pageDropdown: ['<ul class="dropdown-menu" role="menu">', '</ul>'],
      pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
      dropdownCaret: '<span class="caret"></span>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
    }
  },
  4: {
    iconsPrefix: 'fa',
    icons: {
      paginationSwitchDown: 'fa-caret-square-down',
      paginationSwitchUp: 'fa-caret-square-up',
      refresh: 'fa-sync',
      toggleOff: 'fa-toggle-off',
      toggleOn: 'fa-toggle-on',
      columns: 'fa-th-list',
      detailOpen: 'fa-plus',
      detailClose: 'fa-minus',
      fullscreen: 'fa-arrows-alt',
      search: 'fa-search',
      clearSearch: 'fa-trash'
    },
    classes: {
      buttonsPrefix: 'btn',
      buttons: 'secondary',
      buttonsGroup: 'btn-group',
      buttonsDropdown: 'btn-group',
      pull: 'float',
      inputGroup: 'btn-group',
      inputPrefix: 'form-control-',
      input: 'form-control',
      paginationDropdown: 'btn-group dropdown',
      dropup: 'dropup',
      dropdownActive: 'active',
      paginationActive: 'active',
      buttonActive: 'active'
    },
    html: {
      toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
      toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
      pageDropdown: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
      toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
      dropdownCaret: '<span class="caret"></span>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
    }
  },
  5: {
    iconsPrefix: 'fa',
    icons: {
      paginationSwitchDown: 'fa-caret-square-down',
      paginationSwitchUp: 'fa-caret-square-up',
      refresh: 'fa-sync',
      toggleOff: 'fa-toggle-off',
      toggleOn: 'fa-toggle-on',
      columns: 'fa-th-list',
      detailOpen: 'fa-plus',
      detailClose: 'fa-minus',
      fullscreen: 'fa-arrows-alt',
      search: 'fa-search',
      clearSearch: 'fa-trash'
    },
    classes: {
      buttonsPrefix: 'btn',
      buttons: 'secondary',
      buttonsGroup: 'btn-group',
      buttonsDropdown: 'btn-group',
      pull: 'float',
      inputGroup: 'btn-group',
      inputPrefix: 'form-control-',
      input: 'form-control',
      paginationDropdown: 'btn-group dropdown',
      dropup: 'dropup',
      dropdownActive: 'active',
      paginationActive: 'active',
      buttonActive: 'active'
    },
    html: {
      dataToggle: 'data-bs-toggle',
      toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', '</div>'],
      toolbarDropdownItem: '<label class="dropdown-item dropdown-item-marker">%s</label>',
      pageDropdown: ['<div class="dropdown-menu">', '</div>'],
      pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
      toolbarDropdownSeparator: '<div class="dropdown-divider"></div>',
      dropdownCaret: '<span class="caret"></span>',
      pagination: ['<ul class="pagination%s">', '</ul>'],
      paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
      icon: '<i class="%s %s"></i>',
      inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
      searchInput: '<input class="%s%s" type="text" placeholder="%s">',
      searchButton: '<button class="%s" type="button" name="search" title="%s">%s %s</button>',
      searchClearButton: '<button class="%s" type="button" name="clearSearch" title="%s">%s %s</button>'
    }
  }
}[bootstrapVersion]

const DEFAULTS = {
  height: undefined,
  classes: 'table table-bordered table-hover',
  buttons: {},
  theadClasses: '',
  headerStyle (column) {
    return {}
  },
  rowStyle (row, index) {
    return {}
  },
  rowAttributes (row, index) {
    return {}
  },
  undefinedText: '-',
  locale: undefined,
  virtualScroll: false,
  virtualScrollItemHeight: undefined,
  sortable: true,
  sortClass: undefined,
  silentSort: true,
  sortName: undefined,
  sortOrder: undefined,
  sortReset: false,
  sortStable: false,
  rememberOrder: false,
  serverSort: true,
  customSort: undefined,
  columns: [
    []
  ],
  data: [],
  url: undefined,
  method: 'get',
  cache: true,
  contentType: 'application/json',
  dataType: 'json',
  ajax: undefined,
  ajaxOptions: {},
  queryParams (params) {
    return params
  },
  queryParamsType: 'limit', // 'limit', undefined
  responseHandler (res) {
    return res
  },
  totalField: 'total',
  totalNotFilteredField: 'totalNotFiltered',
  dataField: 'rows',
  footerField: 'footer',
  pagination: false,
  paginationParts: ['pageInfo', 'pageSize', 'pageList'],
  showExtendedPagination: false,
  paginationLoop: true,
  sidePagination: 'client', // client or server
  totalRows: 0,
  totalNotFiltered: 0,
  pageNumber: 1,
  pageSize: 10,
  pageList: [10, 25, 50, 100],
  paginationHAlign: 'right', // right, left
  paginationVAlign: 'bottom', // bottom, top, both
  paginationDetailHAlign: 'left', // right, left
  paginationPreText: '&lsaquo;',
  paginationNextText: '&rsaquo;',
  paginationSuccessivelySize: 5, // Maximum successively number of pages in a row
  paginationPagesBySide: 1, // Number of pages on each side (right, left) of the current page.
  paginationUseIntermediate: false, // Calculate intermediate pages for quick access
  search: false,
  searchHighlight: false,
  searchOnEnterKey: false,
  strictSearch: false,
  searchSelector: false,
  visibleSearch: false,
  showButtonIcons: true,
  showButtonText: false,
  showSearchButton: false,
  showSearchClearButton: false,
  trimOnSearch: true,
  searchAlign: 'right',
  searchTimeOut: 500,
  searchText: '',
  customSearch: undefined,
  showHeader: true,
  showFooter: false,
  footerStyle (column) {
    return {}
  },
  searchAccentNeutralise: false,
  showColumns: false,
  showColumnsToggleAll: false,
  showColumnsSearch: false,
  minimumCountColumns: 1,
  showPaginationSwitch: false,
  showRefresh: false,
  showToggle: false,
  showFullscreen: false,
  smartDisplay: true,
  escape: false,
  filterOptions: {
    filterAlgorithm: 'and'
  },
  idField: undefined,
  selectItemName: 'btSelectItem',
  clickToSelect: false,
  ignoreClickToSelectOn ({ tagName }) {
    return ['A', 'BUTTON'].includes(tagName)
  },
  singleSelect: false,
  checkboxHeader: true,
  maintainMetaData: false,
  multipleSelectRow: false,
  uniqueId: undefined,
  cardView: false,
  detailView: false,
  detailViewIcon: true,
  detailViewByClick: false,
  detailViewAlign: 'left',
  detailFormatter (index, row) {
    return ''
  },
  detailFilter (index, row) {
    return true
  },
  toolbar: undefined,
  toolbarAlign: 'left',
  buttonsToolbar: undefined,
  buttonsAlign: 'right',
  buttonsOrder: ['paginationSwitch', 'refresh', 'toggle', 'fullscreen', 'columns'],
  buttonsPrefix: CONSTANTS.classes.buttonsPrefix,
  buttonsClass: CONSTANTS.classes.buttons,
  icons: CONSTANTS.icons,
  iconSize: undefined,
  iconsPrefix: CONSTANTS.iconsPrefix, // glyphicon or fa(font-awesome)
  loadingFontSize: 'auto',
  loadingTemplate (loadingMessage) {
    return `<span class="loading-wrap">
      <span class="loading-text">${loadingMessage}</span>
      <span class="animation-wrap"><span class="animation-dot"></span></span>
      </span>
    `
  },
  onAll (name, args) {
    return false
  },
  onClickCell (field, value, row, $element) {
    return false
  },
  onDblClickCell (field, value, row, $element) {
    return false
  },
  onClickRow (item, $element) {
    return false
  },
  onDblClickRow (item, $element) {
    return false
  },
  onSort (name, order) {
    return false
  },
  onCheck (row) {
    return false
  },
  onUncheck (row) {
    return false
  },
  onCheckAll (rows) {
    return false
  },
  onUncheckAll (rows) {
    return false
  },
  onCheckSome (rows) {
    return false
  },
  onUncheckSome (rows) {
    return false
  },
  onLoadSuccess (data) {
    return false
  },
  onLoadError (status) {
    return false
  },
  onColumnSwitch (field, checked) {
    return false
  },
  onPageChange (number, size) {
    return false
  },
  onSearch (text) {
    return false
  },
  onToggle (cardView) {
    return false
  },
  onPreBody (data) {
    return false
  },
  onPostBody () {
    return false
  },
  onPostHeader () {
    return false
  },
  onPostFooter () {
    return false
  },
  onExpandRow (index, row, $detail) {
    return false
  },
  onCollapseRow (index, row) {
    return false
  },
  onRefreshOptions (options) {
    return false
  },
  onRefresh (params) {
    return false
  },
  onResetView () {
    return false
  },
  onScrollBody () {
    return false
  }
}

const EN = {
  formatLoadingMessage () {
    return 'Loading, please wait'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} rows per page`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows (filtered from ${totalNotFiltered} total rows)`
    }

    return `Showing ${pageFrom} to ${pageTo} of ${totalRows} rows`
  },
  formatSRPaginationPreText () {
    return 'previous page'
  },
  formatSRPaginationPageText (page) {
    return `to page ${page}`
  },
  formatSRPaginationNextText () {
    return 'next page'
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatSearch () {
    return 'Search'
  },
  formatClearSearch () {
    return 'Clear Search'
  },
  formatNoMatches () {
    return 'No matching records found'
  },
  formatPaginationSwitch () {
    return 'Hide/Show pagination'
  },
  formatPaginationSwitchDown () {
    return 'Show pagination'
  },
  formatPaginationSwitchUp () {
    return 'Hide pagination'
  },
  formatRefresh () {
    return 'Refresh'
  },
  formatToggle () {
    return 'Toggle'
  },
  formatToggleOn () {
    return 'Show card view'
  },
  formatToggleOff () {
    return 'Hide card view'
  },
  formatColumns () {
    return 'Columns'
  },
  formatColumnsToggleAll () {
    return 'Toggle all'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  }
}

const COLUMN_DEFAULTS = {
  field: undefined,
  title: undefined,
  titleTooltip: undefined,
  class: undefined,
  width: undefined,
  widthUnit: 'px',
  rowspan: undefined,
  colspan: undefined,
  align: undefined, // left, right, center
  halign: undefined, // left, right, center
  falign: undefined, // left, right, center
  valign: undefined, // top, middle, bottom
  cellStyle: undefined,
  radio: false,
  checkbox: false,
  checkboxEnabled: true,
  clickToSelect: true,
  showSelectTitle: false,
  sortable: false,
  sortName: undefined,
  order: 'asc', // asc, desc
  sorter: undefined,
  visible: true,
  switchable: true,
  cardVisible: true,
  searchable: true,
  formatter: undefined,
  footerFormatter: undefined,
  detailFormatter: undefined,
  searchFormatter: true,
  searchHighlightFormatter: false,
  escape: false,
  events: undefined
}

const METHODS = [
  'getOptions',
  'refreshOptions',
  'getData',
  'getSelections',
  'load', 'append', 'prepend',
  'remove', 'removeAll',
  'insertRow', 'updateRow',
  'getRowByUniqueId', 'updateByUniqueId', 'removeByUniqueId',
  'updateCell', 'updateCellByUniqueId',
  'showRow', 'hideRow', 'getHiddenRows',
  'showColumn', 'hideColumn',
  'getVisibleColumns', 'getHiddenColumns',
  'showAllColumns', 'hideAllColumns',
  'mergeCells',
  'checkAll', 'uncheckAll', 'checkInvert',
  'check', 'uncheck',
  'checkBy', 'uncheckBy',
  'refresh',
  'destroy',
  'resetView',
  'showLoading', 'hideLoading',
  'togglePagination', 'toggleFullscreen', 'toggleView',
  'resetSearch',
  'filterBy',
  'scrollTo', 'getScrollPosition',
  'selectPage', 'prevPage', 'nextPage',
  'toggleDetailView',
  'expandRow', 'collapseRow', 'expandRowByUniqueId', 'collapseRowByUniqueId',
  'expandAllRows', 'collapseAllRows',
  'updateColumnTitle', 'updateFormatText'
]

const EVENTS = {
  'all.bs.table': 'onAll',
  'click-row.bs.table': 'onClickRow',
  'dbl-click-row.bs.table': 'onDblClickRow',
  'click-cell.bs.table': 'onClickCell',
  'dbl-click-cell.bs.table': 'onDblClickCell',
  'sort.bs.table': 'onSort',
  'check.bs.table': 'onCheck',
  'uncheck.bs.table': 'onUncheck',
  'check-all.bs.table': 'onCheckAll',
  'uncheck-all.bs.table': 'onUncheckAll',
  'check-some.bs.table': 'onCheckSome',
  'uncheck-some.bs.table': 'onUncheckSome',
  'load-success.bs.table': 'onLoadSuccess',
  'load-error.bs.table': 'onLoadError',
  'column-switch.bs.table': 'onColumnSwitch',
  'page-change.bs.table': 'onPageChange',
  'search.bs.table': 'onSearch',
  'toggle.bs.table': 'onToggle',
  'pre-body.bs.table': 'onPreBody',
  'post-body.bs.table': 'onPostBody',
  'post-header.bs.table': 'onPostHeader',
  'post-footer.bs.table': 'onPostFooter',
  'expand-row.bs.table': 'onExpandRow',
  'collapse-row.bs.table': 'onCollapseRow',
  'refresh-options.bs.table': 'onRefreshOptions',
  'reset-view.bs.table': 'onResetView',
  'refresh.bs.table': 'onRefresh',
  'scroll-body.bs.table': 'onScrollBody'
}

Object.assign(DEFAULTS, EN)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  VERSION,

  THEME: `bootstrap${bootstrapVersion}`,

  CONSTANTS,

  DEFAULTS,

  COLUMN_DEFAULTS,

  METHODS,

  EVENTS,

  LOCALES: {
    en: EN,
    'en-US': EN
  }
});


/***/ }),

/***/ "./node_modules/bootstrap-table/src/extensions/filter-control/bootstrap-table-filter-control.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/extensions/filter-control/bootstrap-table-filter-control.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/bootstrap-table/src/extensions/filter-control/utils.js");
/**
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 * @version: v2.3.0
 */


const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  filterControl: false,
  filterControlVisible: true,
  // eslint-disable-next-line no-unused-vars
  onColumnSearch (field, text) {
    return false
  },
  onCreatedControls () {
    return false
  },
  alignmentSelectControlOptions: undefined,
  filterTemplate: {
    input (that, field, placeholder, value) {
      return Utils.sprintf(
        '<input type="search" class="form-control bootstrap-table-filter-control-%s search-input" style="width: 100%;" placeholder="%s" value="%s">',
        field,
        'undefined' === typeof placeholder ? '' : placeholder,
        'undefined' === typeof value ? '' : value
      )
    },

    select ({ options }, field) {
      return Utils.sprintf(
        '<select class="form-control bootstrap-table-filter-control-%s" style="width: 100%;" dir="%s"></select>',
        field,
        _utils_js__WEBPACK_IMPORTED_MODULE_0__.getDirectionOfSelectOptions(
          options.alignmentSelectControlOptions
        )
      )
    },
    datepicker (that, field, value) {
      return Utils.sprintf(
        '<input type="text" class="form-control date-filter-control bootstrap-table-filter-control-%s" style="width: 100%;" value="%s">',
        field,
        'undefined' === typeof value ? '' : value
      )
    }
  },
  disableControlWhenSearch: false,
  searchOnEnterKey: false,
  showFilterControlSwitch: false,
  // internal variables
  valuesFilterControl: []
})

$.extend($.fn.bootstrapTable.columnDefaults, {
  filterControl: undefined, // input, select, datepicker
  filterDataCollector: undefined,
  filterData: undefined,
  filterDatepickerOptions: {},
  filterStrictSearch: false,
  filterStartsWithSearch: false,
  filterControlPlaceholder: '',
  filterDefault: '',
  filterOrderBy: 'asc' // asc || desc
})

$.extend($.fn.bootstrapTable.Constructor.EVENTS, {
  'column-search.bs.table': 'onColumnSearch',
  'created-controls.bs.table': 'onCreatedControls'
})

$.extend($.fn.bootstrapTable.defaults.icons, {
  clear: {
    bootstrap3: 'glyphicon-trash icon-clear'
  }[$.fn.bootstrapTable.theme] || 'fa-trash',
  filterControlSwitchHide: {
    bootstrap3: 'glyphicon-zoom-out icon-zoom-out',
    materialize: 'zoom_out'
  }[$.fn.bootstrapTable.theme] || 'fa-search-minus',
  filterControlSwitchShow: {
    bootstrap3: 'glyphicon-zoom-in icon-zoom-in',
    materialize: 'zoom_in'
  }[$.fn.bootstrapTable.theme] || 'fa-search-plus'
})

$.extend($.fn.bootstrapTable.locales, {
  formatFilterControlSwitch () {
    return 'Hide/Show controls'
  },
  formatFilterControlSwitchHide () {
    return 'Hide controls'
  },
  formatFilterControlSwitchShow () {
    return 'Show controls'
  }
})
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales)

$.extend($.fn.bootstrapTable.defaults, {
  formatClearSearch () {
    return 'Clear filters'
  }
})

$.fn.bootstrapTable.methods.push('triggerSearch')
$.fn.bootstrapTable.methods.push('clearFilterControl')
$.fn.bootstrapTable.methods.push('toggleFilterControl')

$.BootstrapTable = class extends $.BootstrapTable {
  init () {
    // Make sure that the filterControl option is set
    if (this.options.filterControl) {
      // Make sure that the internal variables are set correctly
      this.options.valuesFilterControl = []

      this.$el
        .on('reset-view.bs.table', () => {
          // Create controls on $tableHeader if the height is set
          if (!this.options.height) {
            return
          }

          // Avoid recreate the controls
          const $controlContainer = _utils_js__WEBPACK_IMPORTED_MODULE_0__.getControlContainer(this)

          if (
            ($controlContainer.find('select').length > 0 || $controlContainer.find('input:not([type="checkbox"]):not([type="radio"])').length > 0) &&
            !this.options.filterControlContainer
          ) {
            return
          }

          _utils_js__WEBPACK_IMPORTED_MODULE_0__.createControls(this, $controlContainer)
        })
        .on('post-header.bs.table', () => {
          _utils_js__WEBPACK_IMPORTED_MODULE_0__.setValues(this)
        })
        .on('post-body.bs.table', () => {
          if (this.options.height && !this.options.filterControlContainer) {
            _utils_js__WEBPACK_IMPORTED_MODULE_0__.fixHeaderCSS(this)
          }
          this.$tableLoading.css('top', this.$header.outerHeight() + 1)
        })
        .on('column-switch.bs.table', () => {
          _utils_js__WEBPACK_IMPORTED_MODULE_0__.setValues(this)
        })
        .on('load-success.bs.table', () => {
          this.enableControls(true)
        })
        .on('load-error.bs.table', () => {
          this.enableControls(true)
        })
    }

    super.init()
  }

  initHeader () {
    super.initHeader()

    if (!this.options.filterControl || this.options.height) {
      return
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__.createControls(this, _utils_js__WEBPACK_IMPORTED_MODULE_0__.getControlContainer(this))
  }

  initBody () {
    super.initBody()
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.syncControls(this)
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.initFilterSelectControls(this)
  }

  initSearch () {
    const that = this
    const fp = $.isEmptyObject(that.filterColumnsPartial) ? null : that.filterColumnsPartial

    super.initSearch()

    if (this.options.sidePagination === 'server' || fp === null) {
      return
    }

    // Check partial column filter
    that.data = fp ?
      that.data.filter((item, i) => {
        const itemIsExpected = []
        const keys1 = Object.keys(item)
        const keys2 = Object.keys(fp)
        const keys = keys1.concat(keys2.filter(item => !keys1.includes(item)))

        keys.forEach(key => {
          const thisColumn = that.columns[that.fieldsColumnsIndex[key]]
          const fval = (fp[key] || '').toLowerCase()
          let value = Utils.unescapeHTML(Utils.getItemField(item, key, false))
          let tmpItemIsExpected

          if (fval === '') {
            tmpItemIsExpected = true
          } else {
            // Fix #142: search use formatted data
            if (thisColumn && thisColumn.searchFormatter) {
              value = $.fn.bootstrapTable.utils.calculateObjectValue(
                that.header,
                that.header.formatters[$.inArray(key, that.header.fields)],
                [value, item, i],
                value
              )
            }

            if ($.inArray(key, that.header.fields) !== -1) {
              if (value === undefined || value === null) {
                tmpItemIsExpected = false
              } else if (typeof value === 'object') {
                value.forEach(objectValue => {
                  if (tmpItemIsExpected) {
                    return
                  }

                  if (this.options.searchAccentNeutralise) {
                    objectValue = Utils.normalizeAccent(objectValue)
                  }

                  tmpItemIsExpected = that.isValueExpected(fval, objectValue, thisColumn, key)
                })
              } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                if (this.options.searchAccentNeutralise) {
                  value = Utils.normalizeAccent(value)
                }
                tmpItemIsExpected = that.isValueExpected(fval, value, thisColumn, key)
              }
            }
          }

          itemIsExpected.push(tmpItemIsExpected)
        })

        return !itemIsExpected.includes(false)
      }) :
      that.data

    that.unsortedData = [...that.data]
  }

  isValueExpected (searchValue, value, column, key) {
    let tmpItemIsExpected = false

    if (column.filterStrictSearch) {
      tmpItemIsExpected = value.toString().toLowerCase() === searchValue.toString().toLowerCase()
    } else if (column.filterStartsWithSearch) {
      tmpItemIsExpected = (`${value}`).toLowerCase().indexOf(searchValue) === 0
    } else {
      tmpItemIsExpected = (`${value}`).toLowerCase().includes(searchValue)
    }

    const largerSmallerEqualsRegex = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm
    const matches = largerSmallerEqualsRegex.exec(searchValue)

    if (matches) {
      const operator = matches[1] || `${matches[5]}l`
      const comparisonValue = matches[2] || matches[3]
      const int = parseInt(value, 10)
      const comparisonInt = parseInt(comparisonValue, 10)

      switch (operator) {
        case '>':
        case '<l':
          tmpItemIsExpected = int > comparisonInt
          break
        case '<':
        case '>l':
          tmpItemIsExpected = int < comparisonInt
          break
        case '<=':
        case '=<':
        case '>=l':
        case '=>l':
          tmpItemIsExpected = int <= comparisonInt
          break
        case '>=':
        case '=>':
        case '<=l':
        case '=<l':
          tmpItemIsExpected = int >= comparisonInt
          break
        default:
          break
      }
    }

    if (column.filterCustomSearch) {
      const customSearchResult = Utils.calculateObjectValue(this, column.filterCustomSearch, [searchValue, value, key, this.options.data], true)

      if (customSearchResult !== null) {
        tmpItemIsExpected = customSearchResult
      }
    }

    return tmpItemIsExpected
  }

  initColumnSearch (filterColumnsDefaults) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.copyValues(this)

    if (filterColumnsDefaults) {
      this.filterColumnsPartial = filterColumnsDefaults
      this.updatePagination()

      // eslint-disable-next-line guard-for-in
      for (const filter in filterColumnsDefaults) {
        this.trigger('column-search', filter, filterColumnsDefaults[filter])
      }
    }
  }

  onColumnSearch ({ currentTarget, keyCode }) {
    if ($.inArray(keyCode, [37, 38, 39, 40]) > -1) {
      return
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__.copyValues(this)
    const text = $.trim($(currentTarget).val())
    const $field = $(currentTarget).closest('[data-field]').data('field')

    this.trigger('column-search', $field, text)

    if ($.isEmptyObject(this.filterColumnsPartial)) {
      this.filterColumnsPartial = {}
    }
    if (text) {
      this.filterColumnsPartial[$field] = text
    } else {
      delete this.filterColumnsPartial[$field]
    }

    this.options.pageNumber = 1
    this.enableControls(false)
    this.onSearch({ currentTarget }, false)
  }

  initToolbar () {
    this.showToolbar = this.showToolbar || this.options.showFilterControlSwitch
    this.showSearchClearButton = this.options.filterControl && this.options.showSearchClearButton

    if (this.options.showFilterControlSwitch) {
      this.buttons = Object.assign(this.buttons, {
        filterControlSwitch: {
          text: this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow(),
          icon: this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow,
          event: this.toggleFilterControl,
          attributes: {
            'aria-label': this.options.formatFilterControlSwitch(),
            title: this.options.formatFilterControlSwitch()
          }
        }
      })
    }

    super.initToolbar()
  }

  resetSearch (text) {
    if (this.options.filterControl && this.options.showSearchClearButton) {
      this.clearFilterControl()
    }
    super.resetSearch(text)
  }

  clearFilterControl () {
    if (this.options.filterControl) {
      const that = this
      const cookies = _utils_js__WEBPACK_IMPORTED_MODULE_0__.collectBootstrapCookies()
      const table = this.$el.closest('table')
      const controls = _utils_js__WEBPACK_IMPORTED_MODULE_0__.getSearchControls(that)
      const search = Utils.getSearchInput(this)
      let hasValues = false
      let timeoutId = 0

      $.each(that.options.valuesFilterControl, (i, item) => {
        hasValues = hasValues ? true : item.value !== ''
        item.value = ''
      })

      $.each(that.options.filterControls, (i, item) => {
        item.text = ''
      })

      _utils_js__WEBPACK_IMPORTED_MODULE_0__.setValues(that)

      // clear cookies once the filters are clean
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        if (cookies && cookies.length > 0) {
          $.each(cookies, (i, item) => {
            if (that.deleteCookie !== undefined) {
              that.deleteCookie(item)
            }
          })
        }
      }, that.options.searchTimeOut)

      // If there is not any value in the controls exit this method
      if (!hasValues) {
        return
      }

      // Clear each type of filter if it exists.
      // Requires the body to reload each time a type of filter is found because we never know
      // which ones are going to be present.
      if (controls.length > 0) {
        this.filterColumnsPartial = {}
        $(controls[0]).trigger(
          controls[0].tagName === 'INPUT' ? 'keyup' : 'change', { keyCode: 13 }
        )
      } else {
        return
      }

      if (search.length > 0) {
        that.resetSearch()
      }

      // use the default sort order if it exists. do nothing if it does not
      if (that.options.sortName !== table.data('sortName') || that.options.sortOrder !== table.data('sortOrder')) {
        const sorter = this.$header.find(Utils.sprintf('[data-field="%s"]', $(controls[0]).closest('table').data('sortName')))

        if (sorter.length > 0) {
          that.onSort({ type: 'keypress', currentTarget: sorter })
          $(sorter).find('.sortable').trigger('click')
        }
      }
    }
  }

  triggerSearch () {
    const searchControls = _utils_js__WEBPACK_IMPORTED_MODULE_0__.getSearchControls(this)

    searchControls.each(function () {
      const el = $(this)

      if (el.is('select')) {
        el.change()
      } else {
        el.keyup()
      }
    })
  }

  enableControls (enable) {
    if (this.options.disableControlWhenSearch && this.options.sidePagination === 'server') {
      const searchControls = _utils_js__WEBPACK_IMPORTED_MODULE_0__.getSearchControls(this)

      if (!enable) {
        searchControls.prop('disabled', 'disabled')
      } else {
        searchControls.removeProp('disabled')
      }
    }
  }

  toggleFilterControl () {
    this.options.filterControlVisible = !this.options.filterControlVisible
    const $filterControls = _utils_js__WEBPACK_IMPORTED_MODULE_0__.getControlContainer(this).find('.filter-control, .no-filter-control')

    if (this.options.filterControlVisible) {
      $filterControls.show()
    } else {
      $filterControls.hide()
      this.clearFilterControl()
    }
    const icon = this.options.showButtonIcons ? this.options.filterControlVisible ? this.options.icons.filterControlSwitchHide : this.options.icons.filterControlSwitchShow : ''
    const text = this.options.showButtonText ? this.options.filterControlVisible ? this.options.formatFilterControlSwitchHide() : this.options.formatFilterControlSwitchShow() : ''

    this.$toolbar.find('>.columns').find('.filter-control-switch')
      .html(`${Utils.sprintf(this.constants.html.icon, this.options.iconsPrefix, icon) } ${ text}`)
  }
}


/***/ }),

/***/ "./node_modules/bootstrap-table/src/extensions/filter-control/utils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/extensions/filter-control/utils.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOptionsFromSelectControl": () => (/* binding */ getOptionsFromSelectControl),
/* harmony export */   "getControlContainer": () => (/* binding */ getControlContainer),
/* harmony export */   "getSearchControls": () => (/* binding */ getSearchControls),
/* harmony export */   "hideUnusedSelectOptions": () => (/* binding */ hideUnusedSelectOptions),
/* harmony export */   "existOptionInSelectControl": () => (/* binding */ existOptionInSelectControl),
/* harmony export */   "addOptionToSelectControl": () => (/* binding */ addOptionToSelectControl),
/* harmony export */   "sortSelectControl": () => (/* binding */ sortSelectControl),
/* harmony export */   "fixHeaderCSS": () => (/* binding */ fixHeaderCSS),
/* harmony export */   "getElementClass": () => (/* binding */ getElementClass),
/* harmony export */   "getCursorPosition": () => (/* binding */ getCursorPosition),
/* harmony export */   "setCursorPosition": () => (/* binding */ setCursorPosition),
/* harmony export */   "copyValues": () => (/* binding */ copyValues),
/* harmony export */   "setValues": () => (/* binding */ setValues),
/* harmony export */   "collectBootstrapCookies": () => (/* binding */ collectBootstrapCookies),
/* harmony export */   "escapeID": () => (/* binding */ escapeID),
/* harmony export */   "isColumnSearchableViaSelect": () => (/* binding */ isColumnSearchableViaSelect),
/* harmony export */   "isFilterDataNotGiven": () => (/* binding */ isFilterDataNotGiven),
/* harmony export */   "hasSelectControlElement": () => (/* binding */ hasSelectControlElement),
/* harmony export */   "initFilterSelectControls": () => (/* binding */ initFilterSelectControls),
/* harmony export */   "getFilterDataMethod": () => (/* binding */ getFilterDataMethod),
/* harmony export */   "createControls": () => (/* binding */ createControls),
/* harmony export */   "getDirectionOfSelectOptions": () => (/* binding */ getDirectionOfSelectOptions),
/* harmony export */   "syncControls": () => (/* binding */ syncControls)
/* harmony export */ });
const Utils = $.fn.bootstrapTable.utils
const searchControls = 'select, input:not([type="checkbox"]):not([type="radio"])'

function getOptionsFromSelectControl (selectControl) {
  return selectControl.get(selectControl.length - 1).options
}

function getControlContainer (that) {
  if (that.options.filterControlContainer) {
    return $(`${that.options.filterControlContainer}`)
  }
  return that.$header
}

function getSearchControls (that) {
  return getControlContainer(that).find(searchControls)
}

function hideUnusedSelectOptions (selectControl, uniqueValues) {
  const options = getOptionsFromSelectControl(selectControl)

  for (let i = 0; i < options.length; i++) {
    if (options[i].value !== '') {
      if (!uniqueValues.hasOwnProperty(options[i].value)) {
        selectControl.find(Utils.sprintf('option[value=\'%s\']', options[i].value)).hide()
      } else {
        selectControl.find(Utils.sprintf('option[value=\'%s\']', options[i].value)).show()
      }
    }
  }
}

function existOptionInSelectControl (selectControl, value) {
  const options = getOptionsFromSelectControl(selectControl)

  for (let i = 0; i < options.length; i++) {
    if (options[i].value === Utils.unescapeHTML(value.toString())) {
      // The value is not valid to add
      return true
    }
  }

  // If we get here, the value is valid to add
  return false
}

function addOptionToSelectControl (selectControl, _value, text, selected) {
  const value = (_value === undefined || _value === null) ? '' : _value.toString().trim()
  const $selectControl = $(selectControl.get(selectControl.length - 1))

  if (!existOptionInSelectControl(selectControl, value)) {
    const option = $(`<option value="${value}">${text}</option>`)

    if (value === selected) {
      option.attr('selected', true)
    }

    $selectControl.append(option)
  }
}

function sortSelectControl (selectControl, orderBy) {
  const $selectControl = $(selectControl.get(selectControl.length - 1))
  const $opts = $selectControl.find('option:gt(0)')

  if (orderBy !== 'server') {
    $opts.sort((a, b) => {
      return Utils.sort(a.textContent, b.textContent, orderBy === 'desc' ? -1 : 1)
    })
  }

  $selectControl.find('option:gt(0)').remove()
  $selectControl.append($opts)
}

function fixHeaderCSS ({ $tableHeader }) {
  $tableHeader.css('height', '89px')
}

function getElementClass ($element) {
  return $element.attr('class').replace('form-control', '').replace('focus-temp', '').replace('search-input', '').trim()
}

function getCursorPosition (el) {
  if (Utils.isIEBrowser()) {
    if ($(el).is('input[type=text]')) {
      let pos = 0

      if ('selectionStart' in el) {
        pos = el.selectionStart
      } else if ('selection' in document) {
        el.focus()
        const Sel = document.selection.createRange()
        const SelLength = document.selection.createRange().text.length

        Sel.moveStart('character', -el.value.length)
        pos = Sel.text.length - SelLength
      }
      return pos
    }
    return -1

  }
  return -1
}

function setCursorPosition (el) {
  $(el).val(el.value)
}

function copyValues (that) {
  const searchControls = getSearchControls(that)

  that.options.valuesFilterControl = []

  searchControls.each(function () {
    let $field = $(this)

    if (that.options.height) {
      const fieldClass = getElementClass($field)

      $field = $(`.fixed-table-header .${fieldClass}`)
    }

    that.options.valuesFilterControl.push({
      field: $field.closest('[data-field]').data('field'),
      value: $field.val(),
      position: getCursorPosition($field.get(0)),
      hasFocus: $field.is(':focus')
    })
  })
}

function setValues (that) {
  let field = null
  let result = []
  const searchControls = getSearchControls(that)

  if (that.options.valuesFilterControl.length > 0) {
    //  Callback to apply after settings fields values
    let fieldToFocusCallback = null

    searchControls.each((i, el) => {
      const $this = $(el)

      field = $this.closest('[data-field]').data('field')
      result = that.options.valuesFilterControl.filter(valueObj => valueObj.field === field)

      if (result.length > 0) {
        if ($this.is('[type=radio]')) {
          return
        }

        $this.val(result[0].value)
        if (result[0].hasFocus && result[0].value !== '') {
          // set callback if the field had the focus.
          fieldToFocusCallback = ((fieldToFocus, carretPosition) => {
            // Closure here to capture the field and cursor position
            const closedCallback = () => {
              fieldToFocus.focus()
              setCursorPosition(fieldToFocus, carretPosition)
            }

            return closedCallback
          })($this.get(0), result[0].position)
        }
      }
    })

    // Callback call.
    if (fieldToFocusCallback !== null) {
      fieldToFocusCallback()
    }
  }
}

function collectBootstrapCookies () {
  const cookies = []
  const foundCookies = document.cookie.match(/(?:bs.table.)(\w*)/g)
  const foundLocalStorage = localStorage

  if (foundCookies) {
    $.each(foundCookies, (i, _cookie) => {
      let cookie = _cookie

      if (/./.test(cookie)) {
        cookie = cookie.split('.').pop()
      }

      if ($.inArray(cookie, cookies) === -1) {
        cookies.push(cookie)
      }
    })
  }
  if (foundLocalStorage) {
    for (let i = 0; i < foundLocalStorage.length; i++) {
      let cookie = foundLocalStorage.key(i)

      if (/./.test(cookie)) {
        cookie = cookie.split('.').pop()
      }

      if (!cookies.includes(cookie)) {
        cookies.push(cookie)
      }
    }
  }
  return cookies
}

function escapeID (id) {
  // eslint-disable-next-line no-useless-escape
  return String(id).replace(/([:.\[\],])/g, '\\$1')
}

function isColumnSearchableViaSelect ({ filterControl, searchable }) {
  return filterControl && filterControl.toLowerCase() === 'select' && searchable
}

function isFilterDataNotGiven ({ filterData }) {
  return filterData === undefined ||
        filterData.toLowerCase() === 'column'
}

function hasSelectControlElement (selectControl) {
  return selectControl && selectControl.length > 0
}

function initFilterSelectControls (that) {
  const data = that.data
  const z = that.options.pagination ?
    that.options.sidePagination === 'server' ?
      that.pageTo :
      that.options.totalRows :
    that.pageTo

  $.each(that.header.fields, (j, field) => {
    const column = that.columns[that.fieldsColumnsIndex[field]]
    const selectControl = getControlContainer(that).find(`select.bootstrap-table-filter-control-${escapeID(column.field)}`)

    if (isColumnSearchableViaSelect(column) && isFilterDataNotGiven(column) && hasSelectControlElement(selectControl)) {
      if (selectControl.get(selectControl.length - 1).options.length === 0) {
        // Added the default option, must use a non-breaking space(&nbsp;) to pass the W3C validator
        addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder || '&nbsp;', column.filterDefault)
      }

      const uniqueValues = {}

      for (let i = 0; i < z; i++) {
        // Added a new value
        let fieldValue = Utils.getItemField(data[i], field, false)
        const formatter = that.options.editable && column.editable ? column._formatter : that.header.formatters[j]
        let formattedValue = Utils.calculateObjectValue(that.header, formatter, [fieldValue, data[i], i], fieldValue)

        if (column.filterDataCollector) {
          formattedValue = Utils.calculateObjectValue(that.header, column.filterDataCollector, [fieldValue, data[i], formattedValue], formattedValue)
        }

        if (column.searchFormatter) {
          fieldValue = formattedValue
        }
        uniqueValues[formattedValue] = fieldValue

        if (typeof formattedValue === 'object' && formattedValue !== null) {
          formattedValue.forEach(value => {
            addOptionToSelectControl(selectControl, value, value, column.filterDefault)
          })
          continue
        }

        // eslint-disable-next-line guard-for-in
        for (const key in uniqueValues) {
          addOptionToSelectControl(selectControl, uniqueValues[key], key, column.filterDefault)
        }
      }

      sortSelectControl(selectControl, column.filterOrderBy)
      if (that.options.hideUnusedSelectOptions) {
        hideUnusedSelectOptions(selectControl, uniqueValues)
      }
    }
  })
}

function getFilterDataMethod (objFilterDataMethod, searchTerm) {
  const keys = Object.keys(objFilterDataMethod)

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === searchTerm) {
      return objFilterDataMethod[searchTerm]
    }
  }
  return null
}

function createControls (that, header) {
  let addedFilterControl = false
  let html

  $.each(that.columns, (_, column) => {
    html = []

    if (!column.visible) {
      return
    }

    if (!column.filterControl && !that.options.filterControlContainer) {
      html.push('<div class="no-filter-control"></div>')
    } else if (that.options.filterControlContainer) {
      const $filterControls = $(`.bootstrap-table-filter-control-${column.field}`)

      $.each($filterControls, (_, filterControl) => {
        const $filterControl = $(filterControl)

        if (!$filterControl.is('[type=radio]')) {
          const placeholder = column.filterControlPlaceholder ? column.filterControlPlaceholder : ''

          $filterControl.attr('placeholder', placeholder).val(column.filterDefault)
        }

        $filterControl.attr('data-field', column.field)
      })

      addedFilterControl = true
    } else {
      const nameControl = column.filterControl.toLowerCase()

      html.push('<div class="filter-control">')
      addedFilterControl = true

      if (column.searchable && that.options.filterTemplate[nameControl]) {
        html.push(
          that.options.filterTemplate[nameControl](
            that,
            column.field,
            column.filterControlPlaceholder ?
              column.filterControlPlaceholder :
              '',
            column.filterDefault
          )
        )
      }
    }

    if (!column.filterControl && '' !== column.filterDefault && 'undefined' !== typeof column.filterDefault) {
      if ($.isEmptyObject(that.filterColumnsPartial)) {
        that.filterColumnsPartial = {}
      }

      that.filterColumnsPartial[column.field] = column.filterDefault
    }

    $.each(header.find('th'), (i, th) => {
      const $th = $(th)

      if ($th.data('field') === column.field) {
        $th.find('.fht-cell').append(html.join(''))
        return false
      }
    })

    if (column.filterData && column.filterData.toLowerCase() !== 'column') {
      const filterDataType = getFilterDataMethod(
        /* eslint-disable no-use-before-define */
        filterDataMethods,
        column.filterData.substring(0, column.filterData.indexOf(':'))
      )
      let filterDataSource
      let selectControl

      if (filterDataType) {
        filterDataSource = column.filterData.substring(
          column.filterData.indexOf(':') + 1,
          column.filterData.length
        )
        selectControl = header.find(`.bootstrap-table-filter-control-${escapeID(column.field)}`)

        addOptionToSelectControl(selectControl, '', column.filterControlPlaceholder, column.filterDefault)
        filterDataType(filterDataSource, selectControl, that.options.filterOrderBy, column.filterDefault)
      } else {
        throw new SyntaxError(
          'Error. You should use any of these allowed filter data methods: var, obj, json, url, func.' +
                    ' Use like this: var: {key: "value"}'
        )
      }
    }
  })

  if (addedFilterControl) {
    header.off('keyup', 'input').on('keyup', 'input', ({ currentTarget, keyCode }, obj) => {
      syncControls(that)
      // Simulate enter key action from clear button
      keyCode = obj ? obj.keyCode : keyCode

      if (that.options.searchOnEnterKey && keyCode !== 13) {
        return
      }

      if ($.inArray(keyCode, [37, 38, 39, 40]) > -1) {
        return
      }

      const $currentTarget = $(currentTarget)

      if ($currentTarget.is(':checkbox') || $currentTarget.is(':radio')) {
        return
      }

      clearTimeout(currentTarget.timeoutId || 0)
      currentTarget.timeoutId = setTimeout(() => {
        that.onColumnSearch({ currentTarget, keyCode })
      }, that.options.searchTimeOut)
    })

    header.off('change', 'select:not(".ms-offscreen")').on('change', 'select:not(".ms-offscreen")', ({ currentTarget, keyCode }) => {
      syncControls(that)
      const $select = $(currentTarget)
      const value = $select.val()

      if (value && value.length > 0 && value.trim()) {
        $select.find('option[selected]').removeAttr('selected')
        $select.find(`option[value="${ value }"]`).attr('selected', true)
      } else {
        $select.find('option[selected]').removeAttr('selected')
      }

      clearTimeout(currentTarget.timeoutId || 0)
      currentTarget.timeoutId = setTimeout(() => {
        that.onColumnSearch({ currentTarget, keyCode })
      }, that.options.searchTimeOut)
    })

    header.off('mouseup', 'input:not([type=radio])').on('mouseup', 'input:not([type=radio])', ({ currentTarget, keyCode }) => {
      const $input = $(currentTarget)
      const oldValue = $input.val()

      if (oldValue === '') {
        return
      }

      setTimeout(() => {
        syncControls(that)
        const newValue = $input.val()

        if (newValue === '') {
          clearTimeout(currentTarget.timeoutId || 0)
          currentTarget.timeoutId = setTimeout(() => {
            that.onColumnSearch({ currentTarget, keyCode })
          }, that.options.searchTimeOut)
        }
      }, 1)
    })

    header.off('change', 'input[type=radio]').on('change', 'input[type=radio]', ({ currentTarget, keyCode }) => {
      clearTimeout(currentTarget.timeoutId || 0)
      currentTarget.timeoutId = setTimeout(() => {
        syncControls(that)
        that.onColumnSearch({ currentTarget, keyCode })
      }, that.options.searchTimeOut)
    })

    if (header.find('.date-filter-control').length > 0) {
      $.each(that.columns, (i, { filterDefault, filterControl, field, filterDatepickerOptions }) => {
        if (filterControl !== undefined && filterControl.toLowerCase() === 'datepicker') {
          const $datepicker = header.find(`.date-filter-control.bootstrap-table-filter-control-${field}`)

          $datepicker.datepicker(filterDatepickerOptions)

          if (filterDefault) {
            $datepicker.datepicker('setDate', filterDefault)
          }

          $datepicker.on('changeDate', ({ currentTarget, keyCode }) => {
            clearTimeout(currentTarget.timeoutId || 0)
            currentTarget.timeoutId = setTimeout(() => {
              syncControls(that)
              that.onColumnSearch({ currentTarget, keyCode })
            }, that.options.searchTimeOut)
          })
        }
      })
    }

    if (that.options.sidePagination !== 'server' && !that.options.height) {
      that.triggerSearch()
    }

    if (!that.options.filterControlVisible) {
      header.find('.filter-control, .no-filter-control').hide()
    }
  } else {
    header.find('.filter-control, .no-filter-control').hide()
  }

  that.trigger('created-controls')
}

function getDirectionOfSelectOptions (_alignment) {
  const alignment = _alignment === undefined ? 'left' : _alignment.toLowerCase()

  switch (alignment) {
    case 'left':
      return 'ltr'
    case 'right':
      return 'rtl'
    case 'auto':
      return 'auto'
    default:
      return 'ltr'
  }
}

function syncControls (that) {
  if (that.options.height) {
    const controlsTableHeader = that.$tableHeader.find(searchControls)

    that.$header.find(searchControls).each((_, control) => {
      const $control = $(control)
      const controlClass = getElementClass($control)
      const foundControl = controlsTableHeader.filter((_, ele) => {
        const eleClass = getElementClass($(ele))

        return controlClass === eleClass
      })

      if (foundControl.length === 0) {
        return
      }
      if ($control.is('select')) {
        $control.find('option:selected').removeAttr('selected')
        $control.find(`option[value='${foundControl.val()}']`).attr('selected', true)
      } else {
        $control.val(foundControl.val())
      }
    })
  }
}

const filterDataMethods = {
  func (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource].apply()

    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    sortSelectControl(selectControl, filterOrderBy)
  },
  obj (filterDataSource, selectControl, filterOrderBy, selected) {
    const objectKeys = filterDataSource.split('.')
    const variableName = objectKeys.shift()
    let variableValues = window[variableName]

    if (objectKeys.length > 0) {
      objectKeys.forEach(key => {
        variableValues = variableValues[key]
      })
    }

    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    sortSelectControl(selectControl, filterOrderBy)
  },
  var (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = window[filterDataSource]
    const isArray = Array.isArray(variableValues)

    for (const key in variableValues) {
      if (isArray) {
        addOptionToSelectControl(selectControl, variableValues[key], variableValues[key], selected)
      } else {
        addOptionToSelectControl(selectControl, key, variableValues[key], selected)
      }
    }
    sortSelectControl(selectControl, filterOrderBy)
  },
  url (filterDataSource, selectControl, filterOrderBy, selected) {
    $.ajax({
      url: filterDataSource,
      dataType: 'json',
      success (data) {
        // eslint-disable-next-line guard-for-in
        for (const key in data) {
          addOptionToSelectControl(selectControl, key, data[key], selected)
        }
        sortSelectControl(selectControl, filterOrderBy)
      }
    })
  },
  json (filterDataSource, selectControl, filterOrderBy, selected) {
    const variableValues = JSON.parse(filterDataSource)

    // eslint-disable-next-line guard-for-in
    for (const key in variableValues) {
      addOptionToSelectControl(selectControl, key, variableValues[key], selected)
    }
    sortSelectControl(selectControl, filterOrderBy)
  }
}


/***/ }),

/***/ "./node_modules/bootstrap-table/src/utils/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-table/src/utils/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({

  getSearchInput (that) {
    if (typeof that.options.searchSelector === 'string') {
      return $(that.options.searchSelector)
    }
    return that.$toolbar.find('.search input')
  },

  // it only does '%s', and return '' when arguments are undefined
  sprintf (_str, ...args) {
    let flag = true
    let i = 0

    const str = _str.replace(/%s/g, () => {
      const arg = args[i++]

      if (typeof arg === 'undefined') {
        flag = false
        return ''
      }
      return arg
    })

    return flag ? str : ''
  },

  isObject (val) {
    return val instanceof Object && !Array.isArray(val)
  },

  isEmptyObject (obj = {}) {
    return Object.entries(obj).length === 0 && obj.constructor === Object
  },

  isNumeric (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  },

  getFieldTitle (list, value) {
    for (const item of list) {
      if (item.field === value) {
        return item.title
      }
    }
    return ''
  },

  setFieldIndex (columns) {
    let totalCol = 0
    const flag = []

    for (const column of columns[0]) {
      totalCol += column.colspan || 1
    }

    for (let i = 0; i < columns.length; i++) {
      flag[i] = []
      for (let j = 0; j < totalCol; j++) {
        flag[i][j] = false
      }
    }

    for (let i = 0; i < columns.length; i++) {
      for (const r of columns[i]) {
        const rowspan = r.rowspan || 1
        const colspan = r.colspan || 1
        const index = flag[i].indexOf(false)

        r.colspanIndex = index

        if (colspan === 1) {
          r.fieldIndex = index
          // when field is undefined, use index instead
          if (typeof r.field === 'undefined') {
            r.field = index
          }
        } else {
          r.colspanGroup = r.colspan
        }

        for (let j = 0; j < rowspan; j++) {
          for (let k = 0; k < colspan; k++) {
            flag[i + j][index + k] = true
          }
        }
      }
    }
  },

  normalizeAccent (value) {
    if (typeof value !== 'string') {
      return value
    }
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  },

  updateFieldGroup (columns) {
    const allColumns = [].concat(...columns)

    for (const c of columns) {
      for (const r of c) {
        if (r.colspanGroup > 1) {
          let colspan = 0

          for (let i = r.colspanIndex; i < r.colspanIndex + r.colspanGroup; i++) {
            const column = allColumns.find(col => col.fieldIndex === i)

            if (column.visible) {
              colspan++
            }
          }
          r.colspan = colspan
          r.visible = colspan > 0
        }
      }
    }
  },

  getScrollBarWidth () {
    if (this.cachedWidth === undefined) {
      const $inner = $('<div/>').addClass('fixed-table-scroll-inner')
      const $outer = $('<div/>').addClass('fixed-table-scroll-outer')

      $outer.append($inner)
      $('body').append($outer)

      const w1 = $inner[0].offsetWidth

      $outer.css('overflow', 'scroll')
      let w2 = $inner[0].offsetWidth

      if (w1 === w2) {
        w2 = $outer[0].clientWidth
      }

      $outer.remove()
      this.cachedWidth = w1 - w2
    }
    return this.cachedWidth
  },

  calculateObjectValue (self, name, args, defaultValue) {
    let func = name

    if (typeof name === 'string') {
      // support obj.func1.func2
      const names = name.split('.')

      if (names.length > 1) {
        func = window
        for (const f of names) {
          func = func[f]
        }
      } else {
        func = window[name]
      }
    }

    if (func !== null && typeof func === 'object') {
      return func
    }

    if (typeof func === 'function') {
      return func.apply(self, args || [])
    }

    if (
      !func &&
      typeof name === 'string' &&
      this.sprintf(name, ...args)
    ) {
      return this.sprintf(name, ...args)
    }

    return defaultValue
  },

  compareObjects (objectA, objectB, compareLength) {
    const aKeys = Object.keys(objectA)
    const bKeys = Object.keys(objectB)

    if (compareLength && aKeys.length !== bKeys.length) {
      return false
    }

    for (const key of aKeys) {
      if (bKeys.includes(key) && objectA[key] !== objectB[key]) {
        return false
      }
    }

    return true
  },

  escapeHTML (text) {
    if (typeof text === 'string') {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/`/g, '&#x60;')
    }
    return text
  },

  unescapeHTML (text) {
    if (typeof text === 'string') {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, '\'')
        .replace(/&#x60;/g, '`')
    }
    return text
  },

  getRealDataAttr (dataAttr) {
    for (const [attr, value] of Object.entries(dataAttr)) {
      const auxAttr = attr.split(/(?=[A-Z])/).join('-').toLowerCase()

      if (auxAttr !== attr) {
        dataAttr[auxAttr] = value
        delete dataAttr[attr]
      }
    }
    return dataAttr
  },

  getItemField (item, field, escape) {
    let value = item

    if (typeof field !== 'string' || item.hasOwnProperty(field)) {
      return escape ? this.escapeHTML(item[field]) : item[field]
    }

    const props = field.split('.')

    for (const p of props) {
      value = value && value[p]
    }
    return escape ? this.escapeHTML(value) : value
  },

  isIEBrowser () {
    return navigator.userAgent.includes('MSIE ') ||
      /Trident.*rv:11\./.test(navigator.userAgent)
  },

  findIndex (items, item) {
    for (const it of items) {
      if (JSON.stringify(it) === JSON.stringify(item)) {
        return items.indexOf(it)
      }
    }
    return -1
  },

  trToData (columns, $els) {
    const data = []
    const m = []

    $els.each((y, el) => {
      const $el = $(el)
      const row = {}

      // save tr's id, class and data-* attributes
      row._id = $el.attr('id')
      row._class = $el.attr('class')
      row._data = this.getRealDataAttr($el.data())
      row._style = $el.attr('style')

      $el.find('>td,>th').each((_x, el) => {
        const $el = $(el)
        const cspan = +$el.attr('colspan') || 1
        const rspan = +$el.attr('rowspan') || 1
        let x = _x

        // skip already occupied cells in current row
        for (; m[y] && m[y][x]; x++) {
          // ignore
        }

        // mark matrix elements occupied by current cell with true
        for (let tx = x; tx < x + cspan; tx++) {
          for (let ty = y; ty < y + rspan; ty++) {
            if (!m[ty]) { // fill missing rows
              m[ty] = []
            }
            m[ty][tx] = true
          }
        }

        const field = columns[x].field

        row[field] = $el.html().trim()
        // save td's id, class and data-* attributes
        row[`_${field}_id`] = $el.attr('id')
        row[`_${field}_class`] = $el.attr('class')
        row[`_${field}_rowspan`] = $el.attr('rowspan')
        row[`_${field}_colspan`] = $el.attr('colspan')
        row[`_${field}_title`] = $el.attr('title')
        row[`_${field}_data`] = this.getRealDataAttr($el.data())
        row[`_${field}_style`] = $el.attr('style')
      })
      data.push(row)
    })
    return data
  },

  sort (a, b, order, sortStable, aPosition, bPosition) {
    if (a === undefined || a === null) {
      a = ''
    }
    if (b === undefined || b === null) {
      b = ''
    }

    if (sortStable && a === b) {
      a = aPosition
      b = bPosition
    }

    // If both values are numeric, do a numeric comparison
    if (this.isNumeric(a) && this.isNumeric(b)) {
      // Convert numerical values form string to float.
      a = parseFloat(a)
      b = parseFloat(b)
      if (a < b) {
        return order * -1
      }
      if (a > b) {
        return order
      }
      return 0
    }

    if (a === b) {
      return 0
    }

    // If value is not a string, convert to string
    if (typeof a !== 'string') {
      a = a.toString()
    }

    if (a.localeCompare(b) === -1) {
      return order * -1
    }

    return order
  },

  getEventName (eventPrefix, id = '') {
    id = id || `${+new Date()}${~~(Math.random() * 1000000)}`
    return `${eventPrefix}-${id}`
  },

  hasDetailViewIcon (options) {
    return options.detailView && options.detailViewIcon && !options.cardView
  },

  getDetailViewIndexOffset (options) {
    return this.hasDetailViewIcon(options) && options.detailViewAlign !== 'right' ? 1 : 0
  },

  checkAutoMergeCells (data) {
    for (const row of data) {
      for (const key of Object.keys(row)) {
        if (key.startsWith('_') && (key.endsWith('_rowspan') || key.endsWith('_colspan'))) {
          return true
        }
      }
    }
    return false
  },

  deepCopy (arg) {
    if (arg === undefined) {
      return arg
    }
    return $.extend(true, Array.isArray(arg) ? [] : {}, arg)
  }
});


/***/ }),

/***/ "./node_modules/bootstrap-table/src/virtual-scroll/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bootstrap-table/src/virtual-scroll/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const BLOCK_ROWS = 50
const CLUSTER_BLOCKS = 4

class VirtualScroll {

  constructor (options) {
    this.rows = options.rows
    this.scrollEl = options.scrollEl
    this.contentEl = options.contentEl
    this.callback = options.callback
    this.itemHeight = options.itemHeight

    this.cache = {}
    this.scrollTop = this.scrollEl.scrollTop

    this.initDOM(this.rows, options.fixedScroll)

    this.scrollEl.scrollTop = this.scrollTop
    this.lastCluster = 0

    const onScroll = () => {
      if (this.lastCluster !== (this.lastCluster = this.getNum())) {
        this.initDOM(this.rows)
        this.callback()
      }
    }

    this.scrollEl.addEventListener('scroll', onScroll, false)
    this.destroy = () => {
      this.contentEl.innerHtml = ''
      this.scrollEl.removeEventListener('scroll', onScroll, false)
    }
  }

  initDOM (rows, fixedScroll) {
    if (typeof this.clusterHeight === 'undefined') {
      this.cache.scrollTop = this.scrollEl.scrollTop
      this.cache.data = this.contentEl.innerHTML = rows[0] + rows[0] + rows[0]
      this.getRowsHeight(rows)
    }

    const data = this.initData(rows, this.getNum(fixedScroll))
    const thisRows = data.rows.join('')
    const dataChanged = this.checkChanges('data', thisRows)
    const topOffsetChanged = this.checkChanges('top', data.topOffset)
    const bottomOffsetChanged = this.checkChanges('bottom', data.bottomOffset)
    const html = []

    if (dataChanged && topOffsetChanged) {
      if (data.topOffset) {
        html.push(this.getExtra('top', data.topOffset))
      }
      html.push(thisRows)
      if (data.bottomOffset) {
        html.push(this.getExtra('bottom', data.bottomOffset))
      }
      this.contentEl.innerHTML = html.join('')

      if (fixedScroll) {
        this.contentEl.scrollTop = this.cache.scrollTop
      }
    } else if (bottomOffsetChanged) {
      this.contentEl.lastChild.style.height = `${data.bottomOffset}px`
    }
  }

  getRowsHeight () {
    if (typeof this.itemHeight === 'undefined') {
      const nodes = this.contentEl.children
      const node = nodes[Math.floor(nodes.length / 2)]

      this.itemHeight = node.offsetHeight
    }
    this.blockHeight = this.itemHeight * BLOCK_ROWS
    this.clusterRows = BLOCK_ROWS * CLUSTER_BLOCKS
    this.clusterHeight = this.blockHeight * CLUSTER_BLOCKS
  }

  getNum (fixedScroll) {
    this.scrollTop = fixedScroll ? this.cache.scrollTop : this.scrollEl.scrollTop
    return Math.floor(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0
  }

  initData (rows, num) {
    if (rows.length < BLOCK_ROWS) {
      return {
        topOffset: 0,
        bottomOffset: 0,
        rowsAbove: 0,
        rows
      }
    }
    const start = Math.max((this.clusterRows - BLOCK_ROWS) * num, 0)
    const end = start + this.clusterRows
    const topOffset = Math.max(start * this.itemHeight, 0)
    const bottomOffset = Math.max((rows.length - end) * this.itemHeight, 0)
    const thisRows = []
    let rowsAbove = start

    if (topOffset < 1) {
      rowsAbove++
    }
    for (let i = start; i < end; i++) {
      rows[i] && thisRows.push(rows[i])
    }
    return {
      topOffset,
      bottomOffset,
      rowsAbove,
      rows: thisRows
    }
  }

  checkChanges (type, value) {
    const changed = value !== this.cache[type]

    this.cache[type] = value
    return changed
  }

  getExtra (className, height) {
    const tag = document.createElement('tr')

    tag.className = `virtual-scroll-${className}`
    if (height) {
      tag.style.height = `${height}px`
    }
    return tag.outerHTML
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VirtualScroll);


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;