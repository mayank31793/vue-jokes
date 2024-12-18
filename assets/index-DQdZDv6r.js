(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ml(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},es=[],sn=()=>{},H_=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_l=t=>t.startsWith("onUpdate:"),Ze=Object.assign,yl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z_=Object.prototype.hasOwnProperty,Se=(t,e)=>z_.call(t,e),oe=Array.isArray,ts=t=>Ci(t)==="[object Map]",ws=t=>Ci(t)==="[object Set]",Th=t=>Ci(t)==="[object Date]",he=t=>typeof t=="function",Ge=t=>typeof t=="string",un=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",Vf=t=>(Ne(t)||he(t))&&he(t.then)&&he(t.catch),Nf=Object.prototype.toString,Ci=t=>Nf.call(t),K_=t=>Ci(t).slice(8,-1),xf=t=>Ci(t)==="[object Object]",vl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},G_=/-(\w)/g,$t=aa(t=>t.replace(G_,(e,n)=>n?n.toUpperCase():"")),W_=/\B([A-Z])/g,Vr=aa(t=>t.replace(W_,"-$1").toLowerCase()),ca=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),nc=aa(t=>t?`on${ca(t)}`:""),Qn=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Do=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wh;const la=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function El(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?X_(r):El(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Ne(t))return t}const Q_=/;(?![^(]*\))/g,J_=/:([^]+)/,Y_=/\/\*[^]*?\*\//g;function X_(t){const e={};return t.replace(Y_,"").split(Q_).forEach(n=>{if(n){const r=n.split(J_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tl(t){let e="";if(Ge(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Tl(t[n]);r&&(e+=r+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ey=ml(Z_);function Lf(t){return!!t||t===""}function ty(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=br(t[r],e[r]);return n}function br(t,e){if(t===e)return!0;let n=Th(t),r=Th(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=un(t),r=un(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?ty(t,e):!1;if(n=Ne(t),r=Ne(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!br(t[o],e[o]))return!1}}return String(t)===String(e)}function wl(t,e){return t.findIndex(n=>br(n,e))}const Uf=t=>!!(t&&t.__v_isRef===!0),vn=t=>Ge(t)?t:t==null?"":oe(t)||Ne(t)&&(t.toString===Nf||!he(t.toString))?Uf(t)?vn(t.value):JSON.stringify(t,Ff,2):String(t),Ff=(t,e)=>Uf(e)?Ff(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[rc(r,i)+" =>"]=s,n),{})}:ws(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>rc(n))}:un(e)?rc(e):Ne(e)&&!oe(e)&&!xf(e)?String(e):e,rc=(t,e="")=>{var n;return un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class ny{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ry(){return Ot}let De;const sc=new WeakSet;class jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sc.has(this)&&(sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ih(this),qf(this);const e=De,n=Gt;De=this,Gt=!0;try{return this.fn()}finally{Hf(this),De=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bl(e);this.deps=this.depsTail=void 0,Ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sc(this)&&this.run()}get dirty(){return Sc(this)}}let Bf=0,Xs,Zs;function $f(t,e=!1){if(t.flags|=8,e){t.next=Zs,Zs=t;return}t.next=Xs,Xs=t}function Il(){Bf++}function Al(){if(--Bf>0)return;if(Zs){let e=Zs;for(Zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Hf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),bl(r),sy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===di))return;t.globalVersion=di;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sc(t)){t.flags&=-3;return}const n=De,r=Gt;De=t,Gt=!0;try{qf(t);const s=t.fn(t._value);(e.version===0||Qn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Gt=r,Hf(t),t.flags&=-3}}function bl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)bl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function sy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const Kf=[];function ar(){Kf.push(Gt),Gt=!1}function cr(){const t=Kf.pop();Gt=t===void 0?!0:t}function Ih(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let di=0;class iy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Gt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new iy(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,Gf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,di++,this.notify(e)}notify(e){Il();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Al()}}}function Gf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Cc=new WeakMap,wr=Symbol(""),Pc=Symbol(""),fi=Symbol("");function dt(t,e,n){if(Gt&&De){let r=Cc.get(t);r||Cc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Rl),s.map=r,s.key=n),s.track()}}function En(t,e,n,r,s,i){const o=Cc.get(t);if(!o){di++;return}const c=l=>{l&&l.trigger()};if(Il(),e==="clear")o.forEach(c);else{const l=oe(t),h=l&&vl(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===fi||!un(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(fi)),e){case"add":l?h&&c(o.get("length")):(c(o.get(wr)),ts(t)&&c(o.get(Pc)));break;case"delete":l||(c(o.get(wr)),ts(t)&&c(o.get(Pc)));break;case"set":ts(t)&&c(o.get(wr));break}}Al()}function Hr(t){const e=Re(t);return e===t?e:(dt(e,"iterate",fi),Ft(t)?e:e.map(ft))}function ua(t){return dt(t=Re(t),"iterate",fi),t}const oy={__proto__:null,[Symbol.iterator](){return ic(this,Symbol.iterator,ft)},concat(...t){return Hr(this).concat(...t.map(e=>oe(e)?Hr(e):e))},entries(){return ic(this,"entries",t=>(t[1]=ft(t[1]),t))},every(t,e){return mn(this,"every",t,e,void 0,arguments)},filter(t,e){return mn(this,"filter",t,e,n=>n.map(ft),arguments)},find(t,e){return mn(this,"find",t,e,ft,arguments)},findIndex(t,e){return mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return mn(this,"findLast",t,e,ft,arguments)},findLastIndex(t,e){return mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return oc(this,"includes",t)},indexOf(...t){return oc(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return oc(this,"lastIndexOf",t)},map(t,e){return mn(this,"map",t,e,void 0,arguments)},pop(){return $s(this,"pop")},push(...t){return $s(this,"push",t)},reduce(t,...e){return Ah(this,"reduce",t,e)},reduceRight(t,...e){return Ah(this,"reduceRight",t,e)},shift(){return $s(this,"shift")},some(t,e){return mn(this,"some",t,e,void 0,arguments)},splice(...t){return $s(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return $s(this,"unshift",t)},values(){return ic(this,"values",ft)}};function ic(t,e,n){const r=ua(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ay=Array.prototype;function mn(t,e,n,r,s,i){const o=ua(t),c=o!==t&&!Ft(t),l=o[e];if(l!==ay[e]){const p=l.apply(t,i);return c?ft(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,ft(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,h,r);return c&&s?s(d):d}function Ah(t,e,n,r){const s=ua(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ft(c),l,t)}),s[e](i,...r)}function oc(t,e,n){const r=Re(t);dt(r,"iterate",fi);const s=r[e](...n);return(s===-1||s===!1)&&Pl(n[0])?(n[0]=Re(n[0]),r[e](...n)):s}function $s(t,e,n=[]){ar(),Il();const r=Re(t)[e].apply(t,n);return Al(),cr(),r}const cy=ml("__proto__,__v_isRef,__isVue"),Wf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(un));function ly(t){un(t)||(t=String(t));const e=Re(this);return dt(e,"has",t),e.hasOwnProperty(t)}class Qf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vy:Zf:i?Xf:Yf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=oy[n]))return l;if(n==="hasOwnProperty")return ly}const c=Reflect.get(e,n,Le(e)?e:r);return(un(n)?Wf.has(n):cy(n))||(s||dt(e,"get",n),i)?c:Le(c)?o&&vl(n)?c:c.value:Ne(c)?s?tp(c):Pi(c):c}}class Jf extends Qf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Rr(i);if(!Ft(r)&&!Rr(r)&&(i=Re(i),r=Re(r)),!oe(e)&&Le(i)&&!Le(r))return l?!1:(i.value=r,!0)}const o=oe(e)&&vl(n)?Number(n)<e.length:Se(e,n),c=Reflect.set(e,n,r,Le(e)?e:s);return e===Re(s)&&(o?Qn(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),c}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!un(n)||!Wf.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",oe(e)?"length":wr),Reflect.ownKeys(e)}}class uy extends Qf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hy=new Jf,dy=new uy,fy=new Jf(!0);const kc=t=>t,io=t=>Reflect.getPrototypeOf(t);function py(t,e,n){return function(...r){const s=this.__v_raw,i=Re(s),o=ts(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),d=n?kc:e?Oc:ft;return!e&&dt(i,"iterate",l?Pc:wr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gy(t,e){const n={get(s){const i=this.__v_raw,o=Re(i),c=Re(s);t||(Qn(s,c)&&dt(o,"get",s),dt(o,"get",c));const{has:l}=io(o),h=e?kc:t?Oc:ft;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&dt(Re(s),"iterate",wr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Re(i),c=Re(s);return t||(Qn(s,c)&&dt(o,"has",s),dt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Re(c),h=e?kc:t?Oc:ft;return!t&&dt(l,"iterate",wr),c.forEach((d,p)=>s.call(i,h(d),h(p),o))}};return Ze(n,t?{add:oo("add"),set:oo("set"),delete:oo("delete"),clear:oo("clear")}:{add(s){!e&&!Ft(s)&&!Rr(s)&&(s=Re(s));const i=Re(this);return io(i).has.call(i,s)||(i.add(s),En(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!Rr(i)&&(i=Re(i));const o=Re(this),{has:c,get:l}=io(o);let h=c.call(o,s);h||(s=Re(s),h=c.call(o,s));const d=l.call(o,s);return o.set(s,i),h?Qn(i,d)&&En(o,"set",s,i):En(o,"add",s,i),this},delete(s){const i=Re(this),{has:o,get:c}=io(i);let l=o.call(i,s);l||(s=Re(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&En(i,"delete",s,void 0),h},clear(){const s=Re(this),i=s.size!==0,o=s.clear();return i&&En(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=py(s,t,e)}),n}function Sl(t,e){const n=gy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const my={get:Sl(!1,!1)},_y={get:Sl(!1,!0)},yy={get:Sl(!0,!1)};const Yf=new WeakMap,Xf=new WeakMap,Zf=new WeakMap,vy=new WeakMap;function Ey(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ty(t){return t.__v_skip||!Object.isExtensible(t)?0:Ey(K_(t))}function Pi(t){return Rr(t)?t:Cl(t,!1,hy,my,Yf)}function ep(t){return Cl(t,!1,fy,_y,Xf)}function tp(t){return Cl(t,!0,dy,yy,Zf)}function Cl(t,e,n,r,s){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ty(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ns(t){return Rr(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Rr(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Pl(t){return t?!!t.__v_raw:!1}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function wy(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&Mf(t,"__v_skip",!0),t}const ft=t=>Ne(t)?Pi(t):t,Oc=t=>Ne(t)?tp(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function pt(t){return np(t,!1)}function Iy(t){return np(t,!0)}function np(t,e){return Le(t)?t:new Ay(t,e)}class Ay{constructor(e,n){this.dep=new Rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Re(e),this._value=n?e:ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||Rr(e);e=r?e:Re(e),Qn(e,n)&&(this._rawValue=e,this._value=r?e:ft(e),this.dep.trigger())}}function _e(t){return Le(t)?t.value:t}const by={get:(t,e,n)=>e==="__v_raw"?t:_e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Le(s)&&!Le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function rp(t){return ns(t)?t:new Proxy(t,by)}class Ry{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return $f(this,!0),!0}get value(){const e=this.dep.track();return zf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new Ry(r,s,n)}const ao={},Vo=new WeakMap;let vr;function Cy(t,e=!1,n=vr){if(n){let r=Vo.get(n);r||Vo.set(n,r=[]),r.push(t)}}function Py(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=K=>s?K:Ft(K)||s===!1||s===0?Tn(K,1):Tn(K);let d,p,m,_,b=!1,P=!1;if(Le(t)?(p=()=>t.value,b=Ft(t)):ns(t)?(p=()=>h(t),b=!0):oe(t)?(P=!0,b=t.some(K=>ns(K)||Ft(K)),p=()=>t.map(K=>{if(Le(K))return K.value;if(ns(K))return h(K);if(he(K))return l?l(K,2):K()})):he(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){ar();try{m()}finally{cr()}}const K=vr;vr=d;try{return l?l(t,3,[_]):t(_)}finally{vr=K}}:p=sn,e&&s){const K=p,de=s===!0?1/0:s;p=()=>Tn(K(),de)}const k=ry(),B=()=>{d.stop(),k&&k.active&&yl(k.effects,d)};if(i&&e){const K=e;e=(...de)=>{K(...de),B()}}let M=P?new Array(t.length).fill(ao):ao;const $=K=>{if(!(!(d.flags&1)||!d.dirty&&!K))if(e){const de=d.run();if(s||b||(P?de.some((fe,I)=>Qn(fe,M[I])):Qn(de,M))){m&&m();const fe=vr;vr=d;try{const I=[de,M===ao?void 0:P&&M[0]===ao?[]:M,_];l?l(e,3,I):e(...I),M=de}finally{vr=fe}}}else d.run()};return c&&c($),d=new jf(p),d.scheduler=o?()=>o($,!1):$,_=K=>Cy(K,!1,d),m=d.onStop=()=>{const K=Vo.get(d);if(K){if(l)l(K,4);else for(const de of K)de();Vo.delete(d)}},e?r?$(!0):M=d.run():o?o($.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Tn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Le(t))Tn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(ws(t)||ts(t))t.forEach(r=>{Tn(r,e,n)});else if(xf(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ki(t,e,n,r){try{return r?t(...r):t()}catch(s){ha(s,e,n)}}function hn(t,e,n,r){if(he(t)){const s=ki(t,e,n,r);return s&&Vf(s)&&s.catch(i=>{ha(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(hn(t[i],e,n,r));return s}}function ha(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,h)===!1)return}c=c.parent}if(i){ar(),ki(i,null,10,[t,l,h]),cr();return}}ky(t,n,s,r,o)}function ky(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let tn=-1;const rs=[];let jn=null,Gr=0;const sp=Promise.resolve();let No=null;function kl(t){const e=No||sp;return t?e.then(this?t.bind(this):t):e}function Oy(t){let e=tn+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=pi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ol(t){if(!(t.flags&1)){const e=pi(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=pi(n)?wt.push(t):wt.splice(Oy(e),0,t),t.flags|=1,ip()}}function ip(){No||(No=sp.then(ap))}function Dy(t){oe(t)?rs.push(...t):jn&&t.id===-1?jn.splice(Gr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),ip()}function bh(t,e,n=tn+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function op(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>pi(n)-pi(r));if(rs.length=0,jn){jn.push(...e);return}for(jn=e,Gr=0;Gr<jn.length;Gr++){const n=jn[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}jn=null,Gr=0}}const pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ap(t){try{for(tn=0;tn<wt.length;tn++){const e=wt[tn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ki(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;tn<wt.length;tn++){const e=wt[tn];e&&(e.flags&=-2)}tn=-1,wt.length=0,op(),No=null,(wt.length||rs.length)&&ap()}}let Dt=null,cp=null;function xo(t){const e=Dt;return Dt=t,cp=t&&t.type.__scopeId||null,e}function ei(t,e=Dt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Nh(-1);const i=xo(e);let o;try{o=t(...s)}finally{xo(i),r._d&&Nh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Bn(t,e){if(Dt===null)return t;const n=ma(Dt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function _r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(ar(),hn(l,n,8,[t.el,c,t,e]),cr())}}const Vy=Symbol("_vte"),Ny=t=>t.__isTeleport;function Dl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Dl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function lp(t,e){return he(t)?Ze({name:t.name},e,{setup:t}):t}function up(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mo(t,e,n,r,s=!1){if(oe(t)){t.forEach((b,P)=>Mo(b,e&&(oe(e)?e[P]:e),n,r,s));return}if(ti(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Mo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Oe?c.refs={}:c.refs,p=c.setupState,m=Re(p),_=p===Oe?()=>!1:b=>Se(m,b);if(h!=null&&h!==l&&(Ge(h)?(d[h]=null,_(h)&&(p[h]=null)):Le(h)&&(h.value=null)),he(l))ki(l,c,12,[o,d]);else{const b=Ge(l),P=Le(l);if(b||P){const k=()=>{if(t.f){const B=b?_(l)?p[l]:d[l]:l.value;s?oe(B)&&yl(B,i):oe(B)?B.includes(i)||B.push(i):b?(d[l]=[i],_(l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else b?(d[l]=o,_(l)&&(p[l]=o)):P&&(l.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,kt(k,n)):k()}}}la().requestIdleCallback;la().cancelIdleCallback;const ti=t=>!!t.type.__asyncLoader,hp=t=>t.type.__isKeepAlive;function xy(t,e){dp(t,"a",e)}function My(t,e){dp(t,"da",e)}function dp(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hp(s.parent.vnode)&&Ly(r,e,n,s),s=s.parent}}function Ly(t,e,n,r){const s=da(e,t,r,!0);fp(()=>{yl(r[e],s)},n)}function da(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ar();const c=Oi(n),l=hn(e,n,t,o);return c(),cr(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=mt)=>{(!mi||t==="sp")&&da(t,(...r)=>e(...r),n)},Uy=On("bm"),fa=On("m"),Fy=On("bu"),jy=On("u"),By=On("bum"),fp=On("um"),$y=On("sp"),qy=On("rtg"),Hy=On("rtc");function zy(t,e=mt){da("ec",t,e)}const Ky="components";function Vl(t,e){return Wy(Ky,t,!0,e)||t}const Gy=Symbol.for("v-ndc");function Wy(t,e,n=!0,r=!1){const s=Dt||mt;if(s){const i=s.type;{const c=Mv(i,!1);if(c&&(c===e||c===$t(e)||c===ca($t(e))))return i}const o=Rh(s[t]||i[t],e)||Rh(s.appContext[t],e);return!o&&r?i:o}}function Rh(t,e){return t&&(t[e]||t[$t(e)]||t[ca($t(e))])}function Qy(t,e,n,r){let s;const i=n,o=oe(t);if(o||Ge(t)){const c=o&&ns(t);let l=!1;c&&(l=!Ft(t),t=ua(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?ft(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ne(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Dc=t=>t?Np(t)?ma(t):Dc(t.parent):null,ni=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nl(t),$forceUpdate:t=>t.f||(t.f=()=>{Ol(t.update)}),$nextTick:t=>t.n||(t.n=kl.bind(t.proxy)),$watch:t=>mv.bind(t)}),ac=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Se(t,e),Jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ac(r,e))return o[e]=1,r[e];if(s!==Oe&&Se(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Se(h,e))return o[e]=3,i[e];if(n!==Oe&&Se(n,e))return o[e]=4,n[e];Vc&&(o[e]=0)}}const d=ni[e];let p,m;if(d)return e==="$attrs"&&dt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Se(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,Se(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ac(s,e)?(s[e]=n,!0):r!==Oe&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Oe&&Se(t,o)||ac(e,o)||(c=i[0])&&Se(c,o)||Se(r,o)||Se(ni,o)||Se(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vc=!0;function Yy(t){const e=Nl(t),n=t.proxy,r=t.ctx;Vc=!1,e.beforeCreate&&Ch(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:b,activated:P,deactivated:k,beforeDestroy:B,beforeUnmount:M,destroyed:$,unmounted:K,render:de,renderTracked:fe,renderTriggered:I,errorCaptured:v,serverPrefetch:w,expose:A,inheritAttrs:R,components:S,directives:T,filters:yt}=e;if(h&&Xy(h,r,null),o)for(const ve in o){const pe=o[ve];he(pe)&&(r[ve]=pe.bind(n))}if(s){const ve=s.call(n,n);Ne(ve)&&(t.data=Pi(ve))}if(Vc=!0,i)for(const ve in i){const pe=i[ve],Ct=he(pe)?pe.bind(n,n):he(pe.get)?pe.get.bind(n,n):sn,qt=!he(pe)&&he(pe.set)?pe.set.bind(n):sn,Mt=Kt({get:Ct,set:qt});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Fe=>Mt.value=Fe})}if(c)for(const ve in c)pp(c[ve],r,n,ve);if(l){const ve=he(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(pe=>{yo(pe,ve[pe])})}d&&Ch(d,t,"c");function He(ve,pe){oe(pe)?pe.forEach(Ct=>ve(Ct.bind(n))):pe&&ve(pe.bind(n))}if(He(Uy,p),He(fa,m),He(Fy,_),He(jy,b),He(xy,P),He(My,k),He(zy,v),He(Hy,fe),He(qy,I),He(By,M),He(fp,K),He($y,w),oe(A))if(A.length){const ve=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(ve,pe,{get:()=>n[pe],set:Ct=>n[pe]=Ct})})}else t.exposed||(t.exposed={});de&&t.render===sn&&(t.render=de),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),T&&(t.directives=T),w&&up(t)}function Xy(t,e,n=sn){oe(t)&&(t=Nc(t));for(const r in t){const s=t[r];let i;Ne(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),Le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ch(t,e,n){hn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pp(t,e,n,r){let s=r.includes(".")?Cp(n,r):()=>n[r];if(Ge(t)){const i=e[t];he(i)&&is(s,i)}else if(he(t))is(s,t.bind(n));else if(Ne(t))if(oe(t))t.forEach(i=>pp(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&is(s,i,t)}}function Nl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Lo(l,h,o,!0)),Lo(l,e,o)),Ne(e)&&i.set(e,l),l}function Lo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Lo(t,i,n,!0),s&&s.forEach(o=>Lo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Zy[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Zy={data:Ph,props:kh,emits:kh,methods:zs,computed:zs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:zs,directives:zs,watch:tv,provide:Ph,inject:ev};function Ph(t,e){return e?t?function(){return Ze(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function ev(t,e){return zs(Nc(t),Nc(e))}function Nc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function zs(t,e){return t?Ze(Object.create(null),t,e):e}function kh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Sh(t),Sh(e??{})):e}function tv(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function gp(){return{app:null,config:{isNativeTag:H_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function rv(t,e){return function(r,s=null){he(r)||(r=Ze({},r)),s!=null&&!Ne(s)&&(s=null);const i=gp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uv,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(h,...p)):he(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!l){const _=h._ceVNode||Ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),l=!0,h._container=d,d.__vue_app__=h,ma(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(hn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ss;ss=h;try{return d()}finally{ss=p}}};return h}}let ss=null;function yo(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=mt||Dt;if(r||ss){const s=ss?ss._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const mp={},_p=()=>Object.create(mp),yp=t=>Object.getPrototypeOf(t)===mp;function sv(t,e,n,r=!1){const s={},i=_p();t.propsDefaults=Object.create(null),vp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ep(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Re(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(pa(t.emitsOptions,m))continue;const _=e[m];if(l)if(Se(i,m))_!==i[m]&&(i[m]=_,h=!0);else{const b=$t(m);s[b]=xc(l,c,b,_,t,!1)}else _!==i[m]&&(i[m]=_,h=!0)}}}else{vp(t,e,s,i)&&(h=!0);let d;for(const p in c)(!e||!Se(e,p)&&((d=Vr(p))===p||!Se(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=xc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Se(e,p))&&(delete i[p],h=!0)}h&&En(t.attrs,"set","")}function vp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ys(l))continue;const h=e[l];let d;s&&Se(s,d=$t(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:pa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Re(n),h=c||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=xc(s,l,p,h[p],t,!Se(h,p))}}return o}function xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Se(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Oi(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Vr(n))&&(r=!0))}return r}const ov=new WeakMap;function Ep(t,e,n=!1){const r=n?ov:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const d=p=>{l=!0;const[m,_]=Ep(p,e,!0);Ze(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ne(t)&&r.set(t,es),es;if(oe(i))for(let d=0;d<i.length;d++){const p=$t(i[d]);Oh(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=$t(d);if(Oh(p)){const m=i[d],_=o[p]=oe(m)||he(m)?{type:m}:Ze({},m),b=_.type;let P=!1,k=!0;if(oe(b))for(let B=0;B<b.length;++B){const M=b[B],$=he(M)&&M.name;if($==="Boolean"){P=!0;break}else $==="String"&&(k=!1)}else P=he(b)&&b.name==="Boolean";_[0]=P,_[1]=k,(P||Se(_,"default"))&&c.push(p)}}const h=[o,c];return Ne(t)&&r.set(t,h),h}function Oh(t){return t[0]!=="$"&&!Ys(t)}const Tp=t=>t[0]==="_"||t==="$stable",xl=t=>oe(t)?t.map(nn):[nn(t)],av=(t,e,n)=>{if(e._n)return e;const r=ei((...s)=>xl(e(...s)),n);return r._c=!1,r},wp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Tp(s))continue;const i=t[s];if(he(i))e[s]=av(s,i,r);else if(i!=null){const o=xl(i);e[s]=()=>o}}},Ip=(t,e)=>{const n=xl(e);t.slots.default=()=>n},Ap=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},cv=(t,e,n)=>{const r=t.slots=_p();if(t.vnode.shapeFlag&32){const s=e._;s?(Ap(r,e,n),n&&Mf(r,"_",s,!0)):wp(e,r)}else e&&Ip(t,e)},lv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ap(s,e,n):(i=!e.$stable,wp(e,s)),o=e}else e&&(Ip(t,e),o={default:1});if(i)for(const c in s)!Tp(c)&&o[c]==null&&delete s[c]},kt=Iv;function uv(t){return hv(t)}function hv(t,e){const n=la();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=sn,insertStaticContent:b}=t,P=(y,E,O,L=null,V=null,F=null,G=void 0,H=null,q=!!E.dynamicChildren)=>{if(y===E)return;y&&!qs(y,E)&&(L=N(y),Fe(y,V,F,!0),y=null),E.patchFlag===-2&&(q=!1,E.dynamicChildren=null);const{type:j,ref:re,shapeFlag:Q}=E;switch(j){case ga:k(y,E,O,L);break;case Sr:B(y,E,O,L);break;case vo:y==null&&M(E,O,L,G);break;case zt:S(y,E,O,L,V,F,G,H,q);break;default:Q&1?de(y,E,O,L,V,F,G,H,q):Q&6?T(y,E,O,L,V,F,G,H,q):(Q&64||Q&128)&&j.process(y,E,O,L,V,F,G,H,q,Z)}re!=null&&V&&Mo(re,y&&y.ref,F,E||y,!E)},k=(y,E,O,L)=>{if(y==null)r(E.el=c(E.children),O,L);else{const V=E.el=y.el;E.children!==y.children&&h(V,E.children)}},B=(y,E,O,L)=>{y==null?r(E.el=l(E.children||""),O,L):E.el=y.el},M=(y,E,O,L)=>{[y.el,y.anchor]=b(y.children,E,O,L,y.el,y.anchor)},$=({el:y,anchor:E},O,L)=>{let V;for(;y&&y!==E;)V=m(y),r(y,O,L),y=V;r(E,O,L)},K=({el:y,anchor:E})=>{let O;for(;y&&y!==E;)O=m(y),s(y),y=O;s(E)},de=(y,E,O,L,V,F,G,H,q)=>{E.type==="svg"?G="svg":E.type==="math"&&(G="mathml"),y==null?fe(E,O,L,V,F,G,H,q):w(y,E,V,F,G,H,q)},fe=(y,E,O,L,V,F,G,H)=>{let q,j;const{props:re,shapeFlag:Q,transition:te,dirs:ee}=y;if(q=y.el=o(y.type,F,re&&re.is,re),Q&8?d(q,y.children):Q&16&&v(y.children,q,null,L,V,cc(y,F),G,H),ee&&_r(y,null,L,"created"),I(q,y,y.scopeId,G,L),re){for(const Ae in re)Ae!=="value"&&!Ys(Ae)&&i(q,Ae,null,re[Ae],F,L);"value"in re&&i(q,"value",null,re.value,F),(j=re.onVnodeBeforeMount)&&en(j,L,y)}ee&&_r(y,null,L,"beforeMount");const ie=dv(V,te);ie&&te.beforeEnter(q),r(q,E,O),((j=re&&re.onVnodeMounted)||ie||ee)&&kt(()=>{j&&en(j,L,y),ie&&te.enter(q),ee&&_r(y,null,L,"mounted")},V)},I=(y,E,O,L,V)=>{if(O&&_(y,O),L)for(let F=0;F<L.length;F++)_(y,L[F]);if(V){let F=V.subTree;if(E===F||kp(F.type)&&(F.ssContent===E||F.ssFallback===E)){const G=V.vnode;I(y,G,G.scopeId,G.slotScopeIds,V.parent)}}},v=(y,E,O,L,V,F,G,H,q=0)=>{for(let j=q;j<y.length;j++){const re=y[j]=H?$n(y[j]):nn(y[j]);P(null,re,E,O,L,V,F,G,H)}},w=(y,E,O,L,V,F,G)=>{const H=E.el=y.el;let{patchFlag:q,dynamicChildren:j,dirs:re}=E;q|=y.patchFlag&16;const Q=y.props||Oe,te=E.props||Oe;let ee;if(O&&yr(O,!1),(ee=te.onVnodeBeforeUpdate)&&en(ee,O,E,y),re&&_r(E,y,O,"beforeUpdate"),O&&yr(O,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&d(H,""),j?A(y.dynamicChildren,j,H,O,L,cc(E,V),F):G||pe(y,E,H,null,O,L,cc(E,V),F,!1),q>0){if(q&16)R(H,Q,te,O,V);else if(q&2&&Q.class!==te.class&&i(H,"class",null,te.class,V),q&4&&i(H,"style",Q.style,te.style,V),q&8){const ie=E.dynamicProps;for(let Ae=0;Ae<ie.length;Ae++){const we=ie[Ae],ot=Q[we],Ye=te[we];(Ye!==ot||we==="value")&&i(H,we,ot,Ye,V,O)}}q&1&&y.children!==E.children&&d(H,E.children)}else!G&&j==null&&R(H,Q,te,O,V);((ee=te.onVnodeUpdated)||re)&&kt(()=>{ee&&en(ee,O,E,y),re&&_r(E,y,O,"updated")},L)},A=(y,E,O,L,V,F,G)=>{for(let H=0;H<E.length;H++){const q=y[H],j=E[H],re=q.el&&(q.type===zt||!qs(q,j)||q.shapeFlag&70)?p(q.el):O;P(q,j,re,null,L,V,F,G,!0)}},R=(y,E,O,L,V)=>{if(E!==O){if(E!==Oe)for(const F in E)!Ys(F)&&!(F in O)&&i(y,F,E[F],null,V,L);for(const F in O){if(Ys(F))continue;const G=O[F],H=E[F];G!==H&&F!=="value"&&i(y,F,H,G,V,L)}"value"in O&&i(y,"value",E.value,O.value,V)}},S=(y,E,O,L,V,F,G,H,q)=>{const j=E.el=y?y.el:c(""),re=E.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ee}=E;ee&&(H=H?H.concat(ee):ee),y==null?(r(j,O,L),r(re,O,L),v(E.children||[],O,re,V,F,G,H,q)):Q>0&&Q&64&&te&&y.dynamicChildren?(A(y.dynamicChildren,te,O,V,F,G,H),(E.key!=null||V&&E===V.subTree)&&bp(y,E,!0)):pe(y,E,O,re,V,F,G,H,q)},T=(y,E,O,L,V,F,G,H,q)=>{E.slotScopeIds=H,y==null?E.shapeFlag&512?V.ctx.activate(E,O,L,G,q):yt(E,O,L,V,F,G,q):xt(y,E,q)},yt=(y,E,O,L,V,F,G)=>{const H=y.component=Ov(y,L,V);if(hp(y)&&(H.ctx.renderer=Z),Dv(H,!1,G),H.asyncDep){if(V&&V.registerDep(H,He,G),!y.el){const q=H.subTree=Ke(Sr);B(null,q,E,O)}}else He(H,y,E,O,V,F,G)},xt=(y,E,O)=>{const L=E.component=y.component;if(Tv(y,E,O))if(L.asyncDep&&!L.asyncResolved){ve(L,E,O);return}else L.next=E,L.update();else E.el=y.el,L.vnode=E},He=(y,E,O,L,V,F,G)=>{const H=()=>{if(y.isMounted){let{next:Q,bu:te,u:ee,parent:ie,vnode:Ae}=y;{const at=Rp(y);if(at){Q&&(Q.el=Ae.el,ve(y,Q,G)),at.asyncDep.then(()=>{y.isUnmounted||H()});return}}let we=Q,ot;yr(y,!1),Q?(Q.el=Ae.el,ve(y,Q,G)):Q=Ae,te&&_o(te),(ot=Q.props&&Q.props.onVnodeBeforeUpdate)&&en(ot,ie,Q,Ae),yr(y,!0);const Ye=lc(y),et=y.subTree;y.subTree=Ye,P(et,Ye,p(et.el),N(et),y,V,F),Q.el=Ye.el,we===null&&wv(y,Ye.el),ee&&kt(ee,V),(ot=Q.props&&Q.props.onVnodeUpdated)&&kt(()=>en(ot,ie,Q,Ae),V)}else{let Q;const{el:te,props:ee}=E,{bm:ie,m:Ae,parent:we,root:ot,type:Ye}=y,et=ti(E);if(yr(y,!1),ie&&_o(ie),!et&&(Q=ee&&ee.onVnodeBeforeMount)&&en(Q,we,E),yr(y,!0),te&&Pe){const at=()=>{y.subTree=lc(y),Pe(te,y.subTree,y,V,null)};et&&Ye.__asyncHydrate?Ye.__asyncHydrate(te,y,at):at()}else{ot.ce&&ot.ce._injectChildStyle(Ye);const at=y.subTree=lc(y);P(null,at,O,L,y,V,F),E.el=at.el}if(Ae&&kt(Ae,V),!et&&(Q=ee&&ee.onVnodeMounted)){const at=E;kt(()=>en(Q,we,at),V)}(E.shapeFlag&256||we&&ti(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&kt(y.a,V),y.isMounted=!0,E=O=L=null}};y.scope.on();const q=y.effect=new jf(H);y.scope.off();const j=y.update=q.run.bind(q),re=y.job=q.runIfDirty.bind(q);re.i=y,re.id=y.uid,q.scheduler=()=>Ol(re),yr(y,!0),j()},ve=(y,E,O)=>{E.component=y;const L=y.vnode.props;y.vnode=E,y.next=null,iv(y,E.props,L,O),lv(y,E.children,O),ar(),bh(y),cr()},pe=(y,E,O,L,V,F,G,H,q=!1)=>{const j=y&&y.children,re=y?y.shapeFlag:0,Q=E.children,{patchFlag:te,shapeFlag:ee}=E;if(te>0){if(te&128){qt(j,Q,O,L,V,F,G,H,q);return}else if(te&256){Ct(j,Q,O,L,V,F,G,H,q);return}}ee&8?(re&16&&At(j,V,F),Q!==j&&d(O,Q)):re&16?ee&16?qt(j,Q,O,L,V,F,G,H,q):At(j,V,F,!0):(re&8&&d(O,""),ee&16&&v(Q,O,L,V,F,G,H,q))},Ct=(y,E,O,L,V,F,G,H,q)=>{y=y||es,E=E||es;const j=y.length,re=E.length,Q=Math.min(j,re);let te;for(te=0;te<Q;te++){const ee=E[te]=q?$n(E[te]):nn(E[te]);P(y[te],ee,O,null,V,F,G,H,q)}j>re?At(y,V,F,!0,!1,Q):v(E,O,L,V,F,G,H,q,Q)},qt=(y,E,O,L,V,F,G,H,q)=>{let j=0;const re=E.length;let Q=y.length-1,te=re-1;for(;j<=Q&&j<=te;){const ee=y[j],ie=E[j]=q?$n(E[j]):nn(E[j]);if(qs(ee,ie))P(ee,ie,O,null,V,F,G,H,q);else break;j++}for(;j<=Q&&j<=te;){const ee=y[Q],ie=E[te]=q?$n(E[te]):nn(E[te]);if(qs(ee,ie))P(ee,ie,O,null,V,F,G,H,q);else break;Q--,te--}if(j>Q){if(j<=te){const ee=te+1,ie=ee<re?E[ee].el:L;for(;j<=te;)P(null,E[j]=q?$n(E[j]):nn(E[j]),O,ie,V,F,G,H,q),j++}}else if(j>te)for(;j<=Q;)Fe(y[j],V,F,!0),j++;else{const ee=j,ie=j,Ae=new Map;for(j=ie;j<=te;j++){const vt=E[j]=q?$n(E[j]):nn(E[j]);vt.key!=null&&Ae.set(vt.key,j)}let we,ot=0;const Ye=te-ie+1;let et=!1,at=0;const Nn=new Array(Ye);for(j=0;j<Ye;j++)Nn[j]=0;for(j=ee;j<=Q;j++){const vt=y[j];if(ot>=Ye){Fe(vt,V,F,!0);continue}let Lt;if(vt.key!=null)Lt=Ae.get(vt.key);else for(we=ie;we<=te;we++)if(Nn[we-ie]===0&&qs(vt,E[we])){Lt=we;break}Lt===void 0?Fe(vt,V,F,!0):(Nn[Lt-ie]=j+1,Lt>=at?at=Lt:et=!0,P(vt,E[Lt],O,null,V,F,G,H,q),ot++)}const Ur=et?fv(Nn):es;for(we=Ur.length-1,j=Ye-1;j>=0;j--){const vt=ie+j,Lt=E[vt],Fr=vt+1<re?E[vt+1].el:L;Nn[j]===0?P(null,Lt,O,Fr,V,F,G,H,q):et&&(we<0||j!==Ur[we]?Mt(Lt,O,Fr,2):we--)}}},Mt=(y,E,O,L,V=null)=>{const{el:F,type:G,transition:H,children:q,shapeFlag:j}=y;if(j&6){Mt(y.component.subTree,E,O,L);return}if(j&128){y.suspense.move(E,O,L);return}if(j&64){G.move(y,E,O,Z);return}if(G===zt){r(F,E,O);for(let Q=0;Q<q.length;Q++)Mt(q[Q],E,O,L);r(y.anchor,E,O);return}if(G===vo){$(y,E,O);return}if(L!==2&&j&1&&H)if(L===0)H.beforeEnter(F),r(F,E,O),kt(()=>H.enter(F),V);else{const{leave:Q,delayLeave:te,afterLeave:ee}=H,ie=()=>r(F,E,O),Ae=()=>{Q(F,()=>{ie(),ee&&ee()})};te?te(F,ie,Ae):Ae()}else r(F,E,O)},Fe=(y,E,O,L=!1,V=!1)=>{const{type:F,props:G,ref:H,children:q,dynamicChildren:j,shapeFlag:re,patchFlag:Q,dirs:te,cacheIndex:ee}=y;if(Q===-2&&(V=!1),H!=null&&Mo(H,null,O,y,!0),ee!=null&&(E.renderCache[ee]=void 0),re&256){E.ctx.deactivate(y);return}const ie=re&1&&te,Ae=!ti(y);let we;if(Ae&&(we=G&&G.onVnodeBeforeUnmount)&&en(we,E,y),re&6)Zt(y.component,O,L);else{if(re&128){y.suspense.unmount(O,L);return}ie&&_r(y,null,E,"beforeUnmount"),re&64?y.type.remove(y,E,O,Z,L):j&&!j.hasOnce&&(F!==zt||Q>0&&Q&64)?At(j,E,O,!1,!0):(F===zt&&Q&384||!V&&re&16)&&At(q,E,O),L&&je(y)}(Ae&&(we=G&&G.onVnodeUnmounted)||ie)&&kt(()=>{we&&en(we,E,y),ie&&_r(y,null,E,"unmounted")},O)},je=y=>{const{type:E,el:O,anchor:L,transition:V}=y;if(E===zt){Vn(O,L);return}if(E===vo){K(y);return}const F=()=>{s(O),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(y.shapeFlag&1&&V&&!V.persisted){const{leave:G,delayLeave:H}=V,q=()=>G(O,F);H?H(y.el,F,q):q()}else F()},Vn=(y,E)=>{let O;for(;y!==E;)O=m(y),s(y),y=O;s(E)},Zt=(y,E,O)=>{const{bum:L,scope:V,job:F,subTree:G,um:H,m:q,a:j}=y;Dh(q),Dh(j),L&&_o(L),V.stop(),F&&(F.flags|=8,Fe(G,y,E,O)),H&&kt(H,E),kt(()=>{y.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},At=(y,E,O,L=!1,V=!1,F=0)=>{for(let G=F;G<y.length;G++)Fe(y[G],E,O,L,V)},N=y=>{if(y.shapeFlag&6)return N(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const E=m(y.anchor||y.el),O=E&&E[Vy];return O?m(O):E};let J=!1;const W=(y,E,O)=>{y==null?E._vnode&&Fe(E._vnode,null,null,!0):P(E._vnode||null,y,E,null,null,null,O),E._vnode=y,J||(J=!0,bh(),op(),J=!1)},Z={p:P,um:Fe,m:Mt,r:je,mt:yt,mc:v,pc:pe,pbc:A,n:N,o:t};let Ee,Pe;return{render:W,hydrate:Ee,createApp:rv(W,Ee)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function dv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function bp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=$n(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&bp(o,c)),c.type===ga&&(c.el=o.el)}}function fv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Rp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Rp(e)}function Dh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const pv=Symbol.for("v-scx"),gv=()=>Wt(pv);function is(t,e,n){return Sp(t,e,n)}function Sp(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=Ze({},n),l=e&&r||!e&&i!=="post";let h;if(mi){if(i==="sync"){const _=gv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=sn,_.resume=sn,_.pause=sn,_}}const d=mt;c.call=(_,b,P)=>hn(_,d,b,P);let p=!1;i==="post"?c.scheduler=_=>{kt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,b)=>{b?_():Ol(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=Py(t,e,c);return mi&&(h?h.push(m):l&&m()),m}function mv(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?Cp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=Oi(this),c=Sp(s,i.bind(r),n);return o(),c}function Cp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const _v=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${$t(e)}Modifiers`]||t[`${Vr(e)}Modifiers`];function yv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&_v(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ge(d)?d.trim():d)),o.number&&(s=n.map(Do)));let c,l=r[c=nc(e)]||r[c=nc($t(e))];!l&&i&&(l=r[c=nc(Vr(e))]),l&&hn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,hn(h,t,6,s)}}function Pp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const d=Pp(h,e,!0);d&&(c=!0,Ze(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ne(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):Ze(o,i),Ne(t)&&r.set(t,o),o)}function pa(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Vr(e))||Se(t,e))}function lc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:d,props:p,data:m,setupState:_,ctx:b,inheritAttrs:P}=t,k=xo(t);let B,M;try{if(n.shapeFlag&4){const K=s||r,de=K;B=nn(h.call(de,K,d,p,_,m,b)),M=c}else{const K=e;B=nn(K.length>1?K(p,{attrs:c,slots:o,emit:l}):K(p,null)),M=e.props?c:vv(c)}}catch(K){ri.length=0,ha(K,t,1),B=Ke(Sr)}let $=B;if(M&&P!==!1){const K=Object.keys(M),{shapeFlag:de}=$;K.length&&de&7&&(i&&K.some(_l)&&(M=Ev(M,i)),$=us($,M,!1,!0))}return n.dirs&&($=us($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Dl($,n.transition),B=$,xo(k),B}const vv=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},Ev=(t,e)=>{const n={};for(const r in t)(!_l(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Vh(r,o,h):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!pa(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Vh(r,o,h):!0:!!o;return!1}function Vh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function wv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const kp=t=>t.__isSuspense;function Iv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Dy(t)}const zt=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),ri=[];let Vt=null;function Ve(t=!1){ri.push(Vt=t?null:[])}function Av(){ri.pop(),Vt=ri[ri.length-1]||null}let gi=1;function Nh(t,e=!1){gi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function Op(t){return t.dynamicChildren=gi>0?Vt||es:null,Av(),gi>0&&Vt&&Vt.push(t),t}function Me(t,e,n,r,s,i){return Op(X(t,e,n,r,s,i,!0))}function Dp(t,e,n,r,s){return Op(Ke(t,e,n,r,s,!0))}function Uo(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const Vp=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Le(t)||he(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===zt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vp(e),ref:e&&Eo(e),scopeId:cp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Dt};return c?(Ml(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),gi>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Ke=bv;function bv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Gy)&&(t=Sr),Uo(t)){const c=us(t,e,!0);return n&&Ml(c,n),gi>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(Lv(t)&&(t=t.__vccOpts),e){e=Rv(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=Tl(c)),Ne(l)&&(Pl(l)&&!oe(l)&&(l=Ze({},l)),e.style=El(l))}const o=Ge(t)?1:kp(t)?128:Ny(t)?64:Ne(t)?4:he(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function Rv(t){return t?Pl(t)||yp(t)?Ze({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Cv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Vp(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(Eo(e)):[i,Eo(e)]:Eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Dl(d,l.clone(d)),d}function Ut(t=" ",e=0){return Ke(ga,null,t,e)}function Sv(t,e){const n=Ke(vo,null,t);return n.staticCount=e,n}function It(t="",e=!1){return e?(Ve(),Dp(Sr,null,t)):Ke(Sr,null,t)}function nn(t){return t==null||typeof t=="boolean"?Ke(Sr):oe(t)?Ke(zt,null,t.slice()):Uo(t)?$n(t):Ke(ga,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Ml(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ml(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!yp(e)?e._ctx=Dt:s===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),r&64?(n=16,e=[Ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tl([e.class,r.class]));else if(s==="style")e.style=El([e.style,r.style]);else if(oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function en(t,e,n,r=null){hn(t,e,7,[n,r])}const Pv=gp();let kv=0;function Ov(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Pv,i={uid:kv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ep(r,s),emitsOptions:Pp(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yv.bind(null,i),t.ce&&t.ce(i),i}let mt=null,Fo,Mc;{const t=la(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Fo=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),Mc=e("__VUE_SSR_SETTERS__",n=>mi=n)}const Oi=t=>{const e=mt;return Fo(t),t.scope.on(),()=>{t.scope.off(),Fo(e)}},xh=()=>{mt&&mt.scope.off(),Fo(null)};function Np(t){return t.vnode.shapeFlag&4}let mi=!1;function Dv(t,e=!1,n=!1){e&&Mc(e);const{props:r,children:s}=t.vnode,i=Np(t);sv(t,r,i,e),cv(t,s,n);const o=i?Vv(t,e):void 0;return e&&Mc(!1),o}function Vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jy);const{setup:r}=n;if(r){ar();const s=t.setupContext=r.length>1?xv(t):null,i=Oi(t),o=ki(r,t,0,[t.props,s]),c=Vf(o);if(cr(),i(),(c||t.sp)&&!ti(t)&&up(t),c){if(o.then(xh,xh),e)return o.then(l=>{Mh(t,l,e)}).catch(l=>{ha(l,t,0)});t.asyncDep=o}else Mh(t,o,e)}else xp(t,e)}function Mh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=rp(e)),xp(t,n)}let Lh;function xp(t,e,n){const r=t.type;if(!t.render){if(!e&&Lh&&!r.render){const s=r.template||Nl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=Ze(Ze({isCustomElement:i,delimiters:c},o),l);r.render=Lh(s,h)}}t.render=r.render||sn}{const s=Oi(t);ar();try{Yy(t)}finally{cr(),s()}}}const Nv={get(t,e){return dt(t,"get",""),t[e]}};function xv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Nv),slots:t.slots,emit:t.emit,expose:e}}function ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(rp(wy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ni)return ni[n](t)},has(e,n){return n in e||n in ni}})):t.proxy}function Mv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function Lv(t){return he(t)&&"__vccOpts"in t}const Kt=(t,e)=>Sy(t,e,mi);function Mp(t,e,n){const r=arguments.length;return r===2?Ne(e)&&!oe(e)?Uo(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Uo(n)&&(n=[n]),Ke(t,e,n))}const Uv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lc;const Uh=typeof window<"u"&&window.trustedTypes;if(Uh)try{Lc=Uh.createPolicy("vue",{createHTML:t=>t})}catch{}const Lp=Lc?t=>Lc.createHTML(t):t=>t,Fv="http://www.w3.org/2000/svg",jv="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Fh=yn&&yn.createElement("template"),Bv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(Fv,t):e==="mathml"?yn.createElementNS(jv,t):n?yn.createElement(t,{is:n}):yn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fh.innerHTML=Lp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Fh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$v=Symbol("_vtc");function qv(t,e,n){const r=t[$v];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jh=Symbol("_vod"),Hv=Symbol("_vsh"),zv=Symbol(""),Kv=/(^|;)\s*display\s*:/;function Gv(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&To(r,c,"")}else for(const o in e)n[o]==null&&To(r,o,"");for(const o in n)o==="display"&&(i=!0),To(r,o,n[o])}else if(s){if(e!==n){const o=r[zv];o&&(n+=";"+o),r.cssText=n,i=Kv.test(n)}}else e&&t.removeAttribute("style");jh in t&&(t[jh]=i?r.display:"",t[Hv]&&(r.display="none"))}const Bh=/\s*!important$/;function To(t,e,n){if(oe(n))n.forEach(r=>To(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Wv(t,e);Bh.test(n)?t.setProperty(Vr(r),n.replace(Bh,""),"important"):t[r]=n}}const $h=["Webkit","Moz","ms"],uc={};function Wv(t,e){const n=uc[e];if(n)return n;let r=$t(e);if(r!=="filter"&&r in t)return uc[e]=r;r=ca(r);for(let s=0;s<$h.length;s++){const i=$h[s]+r;if(i in t)return uc[e]=i}return e}const qh="http://www.w3.org/1999/xlink";function Hh(t,e,n,r,s,i=ey(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qh,e.slice(6,e.length)):t.setAttributeNS(qh,e,n):n==null||i&&!Lf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":un(n)?String(n):n)}function zh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Lp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Lf(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function wn(t,e,n,r){t.addEventListener(e,n,r)}function Qv(t,e,n,r){t.removeEventListener(e,n,r)}const Kh=Symbol("_vei");function Jv(t,e,n,r,s=null){const i=t[Kh]||(t[Kh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Yv(e);if(r){const h=i[e]=eE(r,s);wn(t,c,h,l)}else o&&(Qv(t,c,o,l),i[e]=void 0)}}const Gh=/(?:Once|Passive|Capture)$/;function Yv(t){let e;if(Gh.test(t)){e={};let r;for(;r=t.match(Gh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vr(t.slice(2)),e]}let hc=0;const Xv=Promise.resolve(),Zv=()=>hc||(Xv.then(()=>hc=0),hc=Date.now());function eE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;hn(tE(r,n.value),e,5,[r])};return n.value=t,n.attached=Zv(),n}function tE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?qv(t,r,o):e==="style"?Gv(t,n,r):oa(e)?_l(e)||Jv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rE(t,e,r,o))?(zh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?zh(t,$t(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hh(t,e,r,o))};function rE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wh(e)&&Ge(n)?!1:e in t}const tr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>_o(e,n):e};function sE(t){t.target.composing=!0}function Qh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jt=Symbol("_assign"),Ir={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jt]=tr(s);const i=r||s.props&&s.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Do(c)),t[jt](c)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",sE),wn(t,"compositionend",Qh),wn(t,"change",Qh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[jt]=tr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Do(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Uc={deep:!0,created(t,e,n){t[jt]=tr(n),wn(t,"change",()=>{const r=t._modelValue,s=hs(t),i=t.checked,o=t[jt];if(oe(r)){const c=wl(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(ws(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Up(t,i))})},mounted:Jh,beforeUpdate(t,e,n){t[jt]=tr(n),Jh(t,e,n)}};function Jh(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=wl(e,r.props.value)>-1;else if(ws(e))s=e.has(r.props.value);else{if(e===n)return;s=br(e,Up(t,!0))}t.checked!==s&&(t.checked=s)}const iE={created(t,{value:e},n){t.checked=br(e,n.props.value),t[jt]=tr(n),wn(t,"change",()=>{t[jt](hs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[jt]=tr(r),e!==n&&(t.checked=br(e,r.props.value))}},oE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ws(e);wn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Do(hs(o)):hs(o));t[jt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,kl(()=>{t._assigning=!1})}),t[jt]=tr(r)},mounted(t,{value:e}){Yh(t,e)},beforeUpdate(t,e,n){t[jt]=tr(n)},updated(t,{value:e}){t._assigning||Yh(t,e)}};function Yh(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!ws(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=hs(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=wl(e,c)>-1}else o.selected=e.has(c);else if(br(hs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function hs(t){return"_value"in t?t._value:t.value}function Up(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const aE={created(t,e,n){co(t,e,n,null,"created")},mounted(t,e,n){co(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){co(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){co(t,e,n,r,"updated")}};function cE(t,e){switch(t){case"SELECT":return oE;case"TEXTAREA":return Ir;default:switch(e){case"checkbox":return Uc;case"radio":return iE;default:return Ir}}}function co(t,e,n,r,s){const o=cE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const lE=Ze({patchProp:nE},Bv);let Xh;function uE(){return Xh||(Xh=uv(lE))}const hE=(...t)=>{const e=uE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,dE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function dE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fE(t){return Ge(t)?document.querySelector(t):t}var Zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new gE;const m=i<<2|c>>4;if(r.push(m),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const b=h<<6&192|p;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mE=function(t){const e=Fp(t);return jp.encodeByteArray(e,!0)},jo=function(t){return mE(t).replace(/\./g,"")},Bp=function(t){try{return jp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=()=>_E().__FIREBASE_DEFAULTS__,vE=()=>{if(typeof process>"u"||typeof Zh>"u")return;const t=Zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},EE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bp(t[1]);return e&&JSON.parse(e)},_a=()=>{try{return yE()||vE()||EE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$p=t=>{var e,n;return(n=(e=_a())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},TE=t=>{const e=$p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qp=()=>{var t;return(t=_a())===null||t===void 0?void 0:t.config},Hp=t=>{var e;return(e=_a())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[jo(JSON.stringify(n)),jo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function bE(){var t;const e=(t=_a())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function CE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PE(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kE(){return!bE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OE(){try{return typeof indexedDB=="object"}catch{return!1}}function DE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VE,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?NE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Dn(s,c,r)}}function NE(t,e){return t.replace(xE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xE=/\{\$([^}]+)}/g;function ME(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ed(i)&&ed(o)){if(!Bo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ed(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LE(t,e){const n=new UE(t,e);return n.subscribe.bind(n)}class UE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=dc),s.error===void 0&&(s.error=dc),s.complete===void 0&&(s.complete=dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($E(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BE(t){return t===Er?void 0:t}function $E(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const HE={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},zE=ge.INFO,KE={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},GE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ll{constructor(e){this.name=e,this._logLevel=zE,this._logHandler=GE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const WE=(t,e)=>e.some(n=>t instanceof n);let td,nd;function QE(){return td||(td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JE(){return nd||(nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zp=new WeakMap,Fc=new WeakMap,Kp=new WeakMap,fc=new WeakMap,Ul=new WeakMap;function YE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Jn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zp.set(n,t)}).catch(()=>{}),Ul.set(e,t),e}function XE(t){if(Fc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZE(t){jc=t(jc)}function eT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pc(this),e,...n);return Kp.set(r,e.sort?e.sort():[e]),Jn(r)}:JE().includes(t)?function(...e){return t.apply(pc(this),e),Jn(zp.get(this))}:function(...e){return Jn(t.apply(pc(this),e))}}function tT(t){return typeof t=="function"?eT(t):(t instanceof IDBTransaction&&XE(t),WE(t,QE())?new Proxy(t,jc):t)}function Jn(t){if(t instanceof IDBRequest)return YE(t);if(fc.has(t))return fc.get(t);const e=tT(t);return e!==t&&(fc.set(t,e),Ul.set(e,t)),e}const pc=t=>Ul.get(t);function nT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Jn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Jn(o.result),l.oldVersion,l.newVersion,Jn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const rT=["get","getKey","getAll","getAllKeys","count"],sT=["put","add","delete","clear"],gc=new Map;function rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return gc.set(e,i),i}ZE(t=>({...t,get:(e,n,r)=>rd(e,n)||t.get(e,n,r),has:(e,n)=>!!rd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",sd="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Ll("@firebase/app"),aT="@firebase/app-compat",cT="@firebase/analytics-compat",lT="@firebase/analytics",uT="@firebase/app-check-compat",hT="@firebase/app-check",dT="@firebase/auth",fT="@firebase/auth-compat",pT="@firebase/database",gT="@firebase/data-connect",mT="@firebase/database-compat",_T="@firebase/functions",yT="@firebase/functions-compat",vT="@firebase/installations",ET="@firebase/installations-compat",TT="@firebase/messaging",wT="@firebase/messaging-compat",IT="@firebase/performance",AT="@firebase/performance-compat",bT="@firebase/remote-config",RT="@firebase/remote-config-compat",ST="@firebase/storage",CT="@firebase/storage-compat",PT="@firebase/firestore",kT="@firebase/vertexai",OT="@firebase/firestore-compat",DT="firebase",VT="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="[DEFAULT]",NT={[Bc]:"fire-core",[aT]:"fire-core-compat",[lT]:"fire-analytics",[cT]:"fire-analytics-compat",[hT]:"fire-app-check",[uT]:"fire-app-check-compat",[dT]:"fire-auth",[fT]:"fire-auth-compat",[pT]:"fire-rtdb",[gT]:"fire-data-connect",[mT]:"fire-rtdb-compat",[_T]:"fire-fn",[yT]:"fire-fn-compat",[vT]:"fire-iid",[ET]:"fire-iid-compat",[TT]:"fire-fcm",[wT]:"fire-fcm-compat",[IT]:"fire-perf",[AT]:"fire-perf-compat",[bT]:"fire-rc",[RT]:"fire-rc-compat",[ST]:"fire-gcs",[CT]:"fire-gcs-compat",[PT]:"fire-fst",[OT]:"fire-fst-compat",[kT]:"fire-vertex","fire-js":"fire-js",[DT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map,xT=new Map,qc=new Map;function id(t,e){try{t.container.addComponent(e)}catch(n){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(qc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;qc.set(e,t);for(const n of $o.values())id(n,t);for(const n of xT.values())id(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Di("app","Firebase",MT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=VT;function Gp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$c,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yn.create("bad-app-name",{appName:String(s)});if(n||(n=qp()),!n)throw Yn.create("no-options");const i=$o.get(s);if(i){if(Bo(n,i.options)&&Bo(r,i.config))return i;throw Yn.create("duplicate-app",{appName:s})}const o=new qE(s);for(const l of qc.values())o.addComponent(l);const c=new LT(n,r,o);return $o.set(s,c),c}function Wp(t=$c){const e=$o.get(t);if(!e&&t===$c&&qp())return Gp();if(!e)throw Yn.create("no-app",{appName:t});return e}function Xn(t,e,n){var r;let s=(r=NT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(c.join(" "));return}ds(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebase-heartbeat-database",FT=1,_i="firebase-heartbeat-store";let mc=null;function Qp(){return mc||(mc=nT(UT,FT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),mc}async function jT(t){try{const n=(await Qp()).transaction(_i),r=await n.objectStore(_i).get(Jp(t));return await n.done,r}catch(e){if(e instanceof Dn)Sn.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(n.message)}}}async function od(t,e){try{const r=(await Qp()).transaction(_i,"readwrite");await r.objectStore(_i).put(e,Jp(t)),await r.done}catch(n){if(n instanceof Dn)Sn.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sn.warn(r.message)}}}function Jp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=1024,$T=30*24*60*60*1e3;class qT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ad();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=$T}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ad(),{heartbeatsToSend:r,unsentEntries:s}=HT(this._heartbeatsCache.heartbeats),i=jo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sn.warn(n),""}}}function ad(){return new Date().toISOString().substring(0,10)}function HT(t,e=BT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OE()?DE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return od(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cd(t){return jo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){ds(new Cr("platform-logger",e=>new iT(e),"PRIVATE")),ds(new Cr("heartbeat",e=>new qT(e),"PRIVATE")),Xn(Bc,sd,t),Xn(Bc,sd,"esm2017"),Xn("fire-js","")}KT("");function jl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GT=Yp,Xp=new Di("auth","Firebase",Yp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=new Ll("@firebase/auth");function WT(t,...e){qo.logLevel<=ge.WARN&&qo.warn(`Auth (${Is}): ${t}`,...e)}function wo(t,...e){qo.logLevel<=ge.ERROR&&qo.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw Bl(t,...e)}function on(t,...e){return Bl(t,...e)}function Zp(t,e,n){const r=Object.assign(Object.assign({},GT()),{[e]:n});return new Di("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return Zp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xp.create(t,...e)}function ae(t,e,...n){if(!t)throw Bl(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Cn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QT(){return ld()==="http:"||ld()==="https:"}function ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QT()||SE()||"connection"in navigator)?navigator.onLine:!0}function YT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=AE()||CE()}get(){return JT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=new Ni(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ur(t,e,n,r,s={}){return tg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return RE()||(h.referrerPolicy="no-referrer"),eg.fetch()(ng(t,t.config.apiHost,n,c),h)})}async function tg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XT),e);try{const s=new tw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw lo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw lo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw lo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zp(t,d,h);Jt(t,d)}}catch(s){if(s instanceof Dn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function xi(t,e,n,r,s={}){const i=await ur(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ng(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?$l(t.config,s):`${t.config.apiScheme}://${s}`}function ew(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),ZT.get())})}}function lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function ud(t){return t!==void 0&&t.enterprise!==void 0}class nw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ew(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rw(t,e){return ur(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return ur(t,"POST","/v1/accounts:delete",e)}async function rg(t,e){return ur(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iw(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=ql(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(_c(s.auth_time)),issuedAtTime:si(_c(s.iat)),expirationTime:si(_c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _c(t){return Number(t)*1e3}function ql(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bp(n);return s?JSON.parse(s):(wo("Failed to decode base64 JWT payload"),null)}catch(s){return wo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hd(t){const e=ql(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&ow(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ow({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(t){var e;const n=t.auth,r=await t.getIdToken(),s=await yi(t,rg(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sg(i.providerUserInfo):[],c=lw(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new zc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function cw(t){const e=st(t);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sg(t){return t.map(e=>{var{providerId:n}=e,r=jl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e){const n=await tg(t,{},async()=>{const r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ng(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",eg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hw(t,e){return ur(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=hd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new os;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await yi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iw(this,e)}reload(){return cw(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await yi(this,sw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:K,isAnonymous:de,providerData:fe,stsTokenManager:I}=n;ae($&&I,e,"internal-error");const v=os.fromJSON(this.name,I);ae(typeof $=="string",e,"internal-error"),Un(p,e.name),Un(m,e.name),ae(typeof K=="boolean",e,"internal-error"),ae(typeof de=="boolean",e,"internal-error"),Un(_,e.name),Un(b,e.name),Un(P,e.name),Un(k,e.name),Un(B,e.name),Un(M,e.name);const w=new An({uid:$,auth:e,email:m,emailVerified:K,displayName:p,isAnonymous:de,photoURL:b,phoneNumber:_,tenantId:P,stsTokenManager:v,createdAt:B,lastLoginAt:M});return fe&&Array.isArray(fe)&&(w.providerData=fe.map(A=>Object.assign({},A))),k&&(w._redirectEventId=k),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new os;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new os;c.updateFromIdToken(r);const l=new An({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Map;function bn(t){Cn(t instanceof Function,"Expected a class definition");let e=dd.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ig.type="NONE";const fd=ig;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new as(bn(fd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(fd);const o=Io(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(o);if(d){const p=An._fromJSON(e,d);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new as(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new as(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hg(e))return"Blackberry";if(dg(e))return"Webos";if(ag(e))return"Safari";if((e.includes("chrome/")||cg(e))&&!e.includes("edge/"))return"Chrome";if(ug(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function og(t=_t()){return/firefox\//i.test(t)}function ag(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cg(t=_t()){return/crios\//i.test(t)}function lg(t=_t()){return/iemobile/i.test(t)}function ug(t=_t()){return/android/i.test(t)}function hg(t=_t()){return/blackberry/i.test(t)}function dg(t=_t()){return/webos/i.test(t)}function Hl(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dw(t=_t()){var e;return Hl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fw(){return PE()&&document.documentMode===10}function fg(t=_t()){return Hl(t)||ug(t)||dg(t)||hg(t)||/windows phone/i.test(t)||lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e=[]){let n;switch(t){case"Browser":n=pd(_t());break;case"Worker":n=`${pd(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e={}){return ur(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=6;class _w{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gd(this),this.idTokenSubscription=new gd(this),this.beforeStateQueue=new pw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rg(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Rn(this));const n=e?st(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gw(this),n=new _w(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nr(t){return st(t)}class gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=LE(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vw(t){ya=t}function gg(t){return ya.loadJS(t)}function Ew(){return ya.recaptchaEnterpriseScript}function Tw(){return ya.gapiScript}function ww(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Iw{constructor(){this.enterprise=new Aw}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Aw{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bw="recaptcha-enterprise",mg="NO_RECAPTCHA";class Rw{constructor(e){this.type=bw,this.auth=Nr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{rw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new nw(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;ud(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(mg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Iw().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&ud(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ew();l.length!==0&&(l+=c),gg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function md(t,e,n,r=!1,s=!1){const i=new Rw(t);let o;if(s)o=mg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Kc(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await md(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await md(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Bo(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function Cw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pw(t,e,n){const r=Nr(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=_g(e),{host:o,port:c}=kw(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ow()}function _g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kw(t){const e=_g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:_d(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:_d(o)}}}function _d(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ow(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function Dw(t,e){return ur(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(t,e){return xi(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(t,e){return xi(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function xw(t,e){return xi(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends zl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kc(e,n,"signInWithPassword",Vw);case"emailLink":return Nw(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kc(e,r,"signUpPassword",Dw);case"emailLink":return xw(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e){return xi(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="http://localhost";class Pr extends zl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cs(e,n)}buildRequest(){const e={requestUri:Mw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uw(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class Kl{constructor(e){var n,r,s,i,o,c;const l=Ks(Gs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=Lw((s=l.mode)!==null&&s!==void 0?s:null);ae(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Uw(e);try{return new Kl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kl.parseLink(n);return ae(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Mi{constructor(){super("facebook.com")}static credential(e){return Pr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Mi{constructor(){super("github.com")}static credential(e){return Pr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Pr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e){return xi(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=yd(r);return new kr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yd(r);return new kr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends Dn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new zo(e,n,r,s)}}function vg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,i,e,r):i})}async function jw(t,e,n=!1){const r=await yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await yi(t,vg(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=ql(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),kr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg(t,e,n=!1){if(rn(t.app))return Promise.reject(Rn(t));const r="signIn",s=await vg(t,r,e),i=await kr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $w(t,e){return Eg(Nr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t){const e=Nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qw(t,e,n){if(rn(t.app))return Promise.reject(Rn(t));const r=Nr(t),o=await Kc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Tg(t),l}),c=await kr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Hw(t,e,n){return rn(t.app)?Promise.reject(Rn(t)):$w(st(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tg(t),r})}function zw(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function Kw(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function Gw(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function Ww(t){return st(t).signOut()}const Ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=1e3,Jw=10;class Ig extends wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ig.type="LOCAL";const Yw=Ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ag.type="SESSION";const bg=Ag;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await Xw(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=Gl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function eI(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function tI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rI(){return Rg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="firebaseLocalStorageDb",sI=1,Go="firebaseLocalStorage",Cg="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ea(t,e){return t.transaction([Go],e?"readwrite":"readonly").objectStore(Go)}function iI(){const t=indexedDB.deleteDatabase(Sg);return new Li(t).toPromise()}function Gc(){const t=indexedDB.open(Sg,sI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Go,{keyPath:Cg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Go)?e(r):(r.close(),await iI(),e(await Gc()))})})}async function vd(t,e,n){const r=Ea(t,!0).put({[Cg]:e,value:n});return new Li(r).toPromise()}async function oI(t,e){const n=Ea(t,!1).get(e),r=await new Li(n).toPromise();return r===void 0?null:r.value}function Ed(t,e){const n=Ea(t,!0).delete(e);return new Li(n).toPromise()}const aI=800,cI=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(rI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tI(),!this.activeServiceWorker)return;this.sender=new Zw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gc();return await vd(e,Ko,"1"),await Ed(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ed(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ea(s,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const lI=Pg;new Ni(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t,e){return e?bn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends zl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hI(t){return Eg(t.auth,new Wl(t),t.bypassAuthState)}function dI(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Bw(n,new Wl(t),t.bypassAuthState)}async function fI(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),jw(n,new Wl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return dI;default:Jt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Ni(2e3,1e4);class Zr extends kg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pI.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="pendingRedirect",Ao=new Map;class mI extends kg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(t,e){const n=EI(e),r=vI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yI(t,e){Ao.set(t._key(),e)}function vI(t){return bn(t._redirectPersistence)}function EI(t){return Io(gI,t.config.apiKey,t.name)}async function TI(t,e,n=!1){if(rn(t.app))return Promise.reject(Rn(t));const r=Nr(t),s=uI(r,e),o=await new mI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=10*60*1e3;class II{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Og(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Og({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Og(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e={}){return ur(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SI=/^https?/;async function CI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bI(t);for(const n of e)try{if(PI(n))return}catch{}Jt(t,"unauthorized-domain")}function PI(t){const e=Hc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SI.test(n))return!1;if(RI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new Ni(3e4,6e4);function wd(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OI(t){return new Promise((e,n)=>{var r,s,i;function o(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),n(on(t,"network-request-failed"))},timeout:kI.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const c=ww("iframefcb");return an()[c]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},gg(`${Tw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw bo=null,e})}let bo=null;function DI(t){return bo=bo||OI(t),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new Ni(5e3,15e3),NI="__/auth/iframe",xI="emulator/auth/iframe",MI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UI(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$l(e,xI):`https://${t.config.authDomain}/${NI}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=LI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vi(r).slice(1)}`}async function FI(t){const e=await DI(t),n=an().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:UI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},VI.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BI=500,$I=600,qI="_blank",HI="http://localhost";class Id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(t,e,n,r=BI,s=$I){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},jI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=_t().toLowerCase();n&&(c=cg(h)?qI:n),og(h)&&(e=e||HI,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,b])=>`${m}${_}=${b},`,"");if(dw(h)&&c!=="_self")return KI(e||"",c),new Id(null);const p=window.open(e||"",c,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Id(p)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="__/auth/handler",WI="emulator/auth/handler",QI=encodeURIComponent("fac");async function Ad(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof yg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ME(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Mi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${QI}=${encodeURIComponent(l)}`:"";return`${JI(t)}?${Vi(c).slice(1)}${h}`}function JI({config:t}){return t.emulator?$l(t,WI):`https://${t.authDomain}/${GI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="webStorageSupport";class YI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bg,this._completeRedirectFn=TI,this._overrideRedirectResult=yI}async _openPopup(e,n,r,s){var i;Cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ad(e,n,r,Hc(),s);return zI(e,o,Gl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ad(e,n,r,Hc(),s);return eI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FI(e),r=new II(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yc,{type:yc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[yc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fg()||ag()||Hl()}}const XI=YI;var bd="@firebase/auth",Rd="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tA(t){ds(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pg(t)},h=new yw(r,s,i,l);return Cw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new Cr("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new ZI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(bd,Rd,eA(t)),Xn(bd,Rd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=5*60,rA=Hp("authIdTokenMaxAge")||nA;let Sd=null;const sA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rA)return;const s=n==null?void 0:n.token;Sd!==s&&(Sd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wc(t=Wp()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Sw(t,{popupRedirectResolver:XI,persistence:[lI,Yw,bg]}),r=Hp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sA(i.toString());Kw(n,o,()=>o(n.currentUser)),zw(n,c=>o(c))}}const s=$p("auth");return s&&Pw(n,`http://${s}`),n}function iA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tA("Browser");function oA(){return Dg().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Dg(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const aA=typeof Proxy=="function",cA="devtools-plugin:setup",lA="plugin:settings:set";let zr,Qc;function uA(){var t;return zr!==void 0||(typeof window<"u"&&window.performance?(zr=!0,Qc=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(zr=!0,Qc=globalThis.perf_hooks.performance):zr=!1),zr}function hA(){return uA()?Qc.now():Date.now()}class dA{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const c=e.settings[o];r[o]=c.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),c=JSON.parse(o);Object.assign(i,c)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return hA()}},n&&n.on(lA,(o,c)=>{o===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(o,c)=>this.target?this.target.on[c]:(...l)=>{this.onQueue.push({method:c,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...l)=>(this.targetQueue.push({method:c,args:l,resolve:()=>{}}),this.fallbacks[c](...l)):(...l)=>new Promise(h=>{this.targetQueue.push({method:c,args:l,resolve:h})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function fA(t,e){const n=t,r=Dg(),s=oA(),i=aA&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(cA,t,e);else{const o=i?new dA(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function Vg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Vg(t.default)}const be=Object.assign;function vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const ii=()=>{},Yt=Array.isArray,Ng=/#/g,gA=/&/g,mA=/\//g,_A=/=/g,yA=/\?/g,xg=/\+/g,vA=/%5B/g,EA=/%5D/g,Mg=/%5E/g,TA=/%60/g,Lg=/%7B/g,wA=/%7C/g,Ug=/%7D/g,IA=/%20/g;function Ql(t){return encodeURI(""+t).replace(wA,"|").replace(vA,"[").replace(EA,"]")}function AA(t){return Ql(t).replace(Lg,"{").replace(Ug,"}").replace(Mg,"^")}function Jc(t){return Ql(t).replace(xg,"%2B").replace(IA,"+").replace(Ng,"%23").replace(gA,"%26").replace(TA,"`").replace(Lg,"{").replace(Ug,"}").replace(Mg,"^")}function bA(t){return Jc(t).replace(_A,"%3D")}function RA(t){return Ql(t).replace(Ng,"%23").replace(yA,"%3F")}function SA(t){return t==null?"":RA(t).replace(mA,"%2F")}function Ei(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const CA=/\/$/,PA=t=>t.replace(CA,"");function Ec(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=VA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ei(o)}}function kA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&Fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!DA(t[n],e[n]))return!1;return!0}function DA(t,e){return Yt(t)?Pd(t,e):Yt(e)?Pd(e,t):t===e}function Pd(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function VA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ti;(function(t){t.pop="pop",t.push="push"})(Ti||(Ti={}));var oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oi||(oi={}));function NA(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),PA(t)}const xA=/^[^#]+#/;function MA(t,e){return t.replace(xA,"#")+e}function LA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ta=()=>({left:window.scrollX,top:window.scrollY});function UA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=LA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kd(t,e){return(history.state?history.state.position-e:-1)+t}const Yc=new Map;function FA(t,e){Yc.set(t,e)}function jA(t){const e=Yc.get(t);return Yc.delete(t),e}let BA=()=>location.protocol+"//"+location.host;function jg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Cd(l,"")}return Cd(n,t)+r+s}function $A(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=jg(t,location),b=n.value,P=e.value;let k=0;if(m){if(n.value=_,e.value=m,o&&o===b){o=null;return}k=P?m.position-P.position:0}else r(_);s.forEach(B=>{B(n.value,b,{delta:k,type:Ti.pop,direction:k?k>0?oi.forward:oi.back:oi.unknown})})};function l(){o=n.value}function h(m){s.push(m);const _=()=>{const b=s.indexOf(m);b>-1&&s.splice(b,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:Ta()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Od(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ta():null}}function qA(t){const{history:e,location:n}=window,r={value:jg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:BA()+t+l;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,h){const d=be({},e.state,Od(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,h){const d=be({},s.value,e.state,{forward:l,scroll:Ta()});i(d.current,d,!0);const p=be({},Od(r.value,l,null),{position:d.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function HA(t){t=NA(t);const e=qA(t),n=$A(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:MA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function zA(t){return typeof t=="string"||t&&typeof t=="object"}function Bg(t){return typeof t=="string"||typeof t=="symbol"}const $g=Symbol("");var Dd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dd||(Dd={}));function ps(t,e){return be(new Error,{type:t,[$g]:!0},e)}function _n(t,e){return t instanceof Error&&$g in t&&(e==null||!!(t.type&e))}const Vd="[^/]+?",KA={sensitive:!1,strict:!1,start:!0,end:!0},GA=/[.+*?^${}()[\]/\\]/g;function WA(t,e){const n=be({},KA,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(GA,"\\$&"),_+=40;else if(m.type===1){const{value:b,repeatable:P,optional:k,regexp:B}=m;i.push({name:b,repeatable:P,optional:k});const M=B||Vd;if(M!==Vd){_+=10;try{new RegExp(`(${M})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${b}" (${M}): `+K.message)}}let $=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||($=k&&h.length<2?`(?:/${$})`:"/"+$),k&&($+="?"),s+=$,_+=20,k&&(_+=-8),P&&(_+=-20),M===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const d=h.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",b=i[m-1];p[b.name]=_&&b.repeatable?_.split("/"):_}return p}function l(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:b,repeatable:P,optional:k}=_,B=b in h?h[b]:"";if(Yt(B)&&!P)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const M=Yt(B)?B.join("/"):B;if(!M)if(k)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function QA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=QA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Nd(r))return 1;if(Nd(s))return-1}return s.length-r.length}function Nd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const JA={type:0,value:""},YA=/[a-zA-Z0-9_]/;function XA(t){if(!t)return[[]];if(t==="/")return[[JA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:YA.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function ZA(t,e,n){const r=WA(XA(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function e0(t,e){const n=[],r=new Map;e=Ud({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const b=!_,P=Md(p);P.aliasOf=_&&_.record;const k=Ud(e,p),B=[P];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of K)B.push(Md(be({},P,{components:_?_.record.components:P.components,path:de,aliasOf:_?_.record:P})))}let M,$;for(const K of B){const{path:de}=K;if(m&&de[0]!=="/"){const fe=m.record.path,I=fe[fe.length-1]==="/"?"":"/";K.path=m.record.path+(de&&I+de)}if(M=ZA(K,m,k),_?_.alias.push(M):($=$||M,$!==M&&$.alias.push(M),b&&p.name&&!Ld(M)&&o(p.name)),Hg(M)&&l(M),P.children){const fe=P.children;for(let I=0;I<fe.length;I++)i(fe[I],M,_&&_.children[I])}_=_||M}return $?()=>{o($)}:ii}function o(p){if(Bg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=r0(p,n);n.splice(m,0,p),p.record.name&&!Ld(p)&&r.set(p.record.name,p)}function h(p,m){let _,b={},P,k;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ps(1,{location:p});k=_.record.name,b=be(xd(m.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&xd(p.params,_.keys.map($=>$.name))),P=_.stringify(b)}else if(p.path!=null)P=p.path,_=n.find($=>$.re.test(P)),_&&(b=_.parse(P),k=_.record.name);else{if(_=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!_)throw ps(1,{location:p,currentLocation:m});k=_.record.name,b=be({},m.params,p.params),P=_.stringify(b)}const B=[];let M=_;for(;M;)B.unshift(M.record),M=M.parent;return{name:k,path:P,params:b,matched:B,meta:n0(B)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function xd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:t0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function t0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ld(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function n0(t){return t.reduce((e,n)=>be(e,n.meta),{})}function Ud(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function r0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;qg(t,e[i])<0?r=i:n=i+1}const s=s0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function s0(t){let e=t;for(;e=e.parent;)if(Hg(e)&&qg(t,e)===0)return e}function Hg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function i0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xg," "),o=i.indexOf("="),c=Ei(o<0?i:i.slice(0,o)),l=o<0?null:Ei(i.slice(o+1));if(c in e){let h=e[c];Yt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Fd(t){let e="";for(let n in t){const r=t[n];if(n=bA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&Jc(i)):[r&&Jc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function o0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const a0=Symbol(""),jd=Symbol(""),wa=Symbol(""),zg=Symbol(""),Xc=Symbol("");function Hs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(ps(4,{from:n,to:e})):m instanceof Error?l(m):zA(m)?l(ps(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Tc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Vg(l)){const d=(l.__vccOpts||l)[e];d&&i.push(qn(d,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=pA(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&qn(_,n,r,o,c,s)()}))}}return i}function Bd(t){const e=Wt(wa),n=Wt(zg),r=Kt(()=>{const l=_e(t.to);return e.resolve(l)}),s=Kt(()=>{const{matched:l}=r.value,{length:h}=l,d=l[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(fs.bind(null,d));if(m>-1)return m;const _=$d(l[h-2]);return h>1&&$d(d)===_&&p[p.length-1].path!==_?p.findIndex(fs.bind(null,l[h-2])):m}),i=Kt(()=>s.value>-1&&d0(n.params,r.value.params)),o=Kt(()=>s.value>-1&&s.value===n.matched.length-1&&Fg(n.params,r.value.params));function c(l={}){if(h0(l)){const h=e[_e(t.replace)?"replace":"push"](_e(t.to)).catch(ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Kt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function c0(t){return t.length===1?t[0]:t}const l0=lp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bd,setup(t,{slots:e}){const n=Pi(Bd(t)),{options:r}=Wt(wa),s=Kt(()=>({[qd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&c0(e.default(n));return t.custom?i:Mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),u0=l0;function h0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function d0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function $d(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qd=(t,e,n)=>t??e??n,f0=lp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(Xc),s=Kt(()=>t.route||r.value),i=Wt(jd,0),o=Kt(()=>{let h=_e(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),c=Kt(()=>s.value.matched[o.value]);yo(jd,Kt(()=>o.value+1)),yo(a0,c),yo(Xc,s);const l=pt();return is(()=>[l.value,c.value,t.name],([h,d,p],[m,_,b])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!fs(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return Hd(n.default,{Component:m,route:h});const _=p.props[d],b=_?_===!0?h.params:typeof _=="function"?_(h):_:null,k=Mp(m,be({},b,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Hd(n.default,{Component:k,route:h})||k}}});function Hd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const p0=f0;function g0(t){const e=e0(t.routes,t),n=t.parseQuery||i0,r=t.stringifyQuery||Fd,s=t.history,i=Hs(),o=Hs(),c=Hs(),l=Iy(Fn);let h=Fn;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=vc.bind(null,N=>""+N),p=vc.bind(null,SA),m=vc.bind(null,Ei);function _(N,J){let W,Z;return Bg(N)?(W=e.getRecordMatcher(N),Z=J):Z=N,e.addRoute(Z,W)}function b(N){const J=e.getRecordMatcher(N);J&&e.removeRoute(J)}function P(){return e.getRoutes().map(N=>N.record)}function k(N){return!!e.getRecordMatcher(N)}function B(N,J){if(J=be({},J||l.value),typeof N=="string"){const E=Ec(n,N,J.path),O=e.resolve({path:E.path},J),L=s.createHref(E.fullPath);return be(E,O,{params:m(O.params),hash:Ei(E.hash),redirectedFrom:void 0,href:L})}let W;if(N.path!=null)W=be({},N,{path:Ec(n,N.path,J.path).path});else{const E=be({},N.params);for(const O in E)E[O]==null&&delete E[O];W=be({},N,{params:p(E)}),J.params=p(J.params)}const Z=e.resolve(W,J),Ee=N.hash||"";Z.params=d(m(Z.params));const Pe=kA(r,be({},N,{hash:AA(Ee),path:Z.path})),y=s.createHref(Pe);return be({fullPath:Pe,hash:Ee,query:r===Fd?o0(N.query):N.query||{}},Z,{redirectedFrom:void 0,href:y})}function M(N){return typeof N=="string"?Ec(n,N,l.value.path):be({},N)}function $(N,J){if(h!==N)return ps(8,{from:J,to:N})}function K(N){return I(N)}function de(N){return K(be(M(N),{replace:!0}))}function fe(N){const J=N.matched[N.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let Z=typeof W=="function"?W(N):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=M(Z):{path:Z},Z.params={}),be({query:N.query,hash:N.hash,params:Z.path!=null?{}:N.params},Z)}}function I(N,J){const W=h=B(N),Z=l.value,Ee=N.state,Pe=N.force,y=N.replace===!0,E=fe(W);if(E)return I(be(M(E),{state:typeof E=="object"?be({},Ee,E.state):Ee,force:Pe,replace:y}),J||W);const O=W;O.redirectedFrom=J;let L;return!Pe&&OA(r,Z,W)&&(L=ps(16,{to:O,from:Z}),Mt(Z,Z,!0,!1)),(L?Promise.resolve(L):A(O,Z)).catch(V=>_n(V)?_n(V,2)?V:qt(V):pe(V,O,Z)).then(V=>{if(V){if(_n(V,2))return I(be({replace:y},M(V.to),{state:typeof V.to=="object"?be({},Ee,V.to.state):Ee,force:Pe}),J||O)}else V=S(O,Z,!0,y,Ee);return R(O,Z,V),V})}function v(N,J){const W=$(N,J);return W?Promise.reject(W):Promise.resolve()}function w(N){const J=Vn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(N):N()}function A(N,J){let W;const[Z,Ee,Pe]=m0(N,J);W=Tc(Z.reverse(),"beforeRouteLeave",N,J);for(const E of Z)E.leaveGuards.forEach(O=>{W.push(qn(O,N,J))});const y=v.bind(null,N,J);return W.push(y),At(W).then(()=>{W=[];for(const E of i.list())W.push(qn(E,N,J));return W.push(y),At(W)}).then(()=>{W=Tc(Ee,"beforeRouteUpdate",N,J);for(const E of Ee)E.updateGuards.forEach(O=>{W.push(qn(O,N,J))});return W.push(y),At(W)}).then(()=>{W=[];for(const E of Pe)if(E.beforeEnter)if(Yt(E.beforeEnter))for(const O of E.beforeEnter)W.push(qn(O,N,J));else W.push(qn(E.beforeEnter,N,J));return W.push(y),At(W)}).then(()=>(N.matched.forEach(E=>E.enterCallbacks={}),W=Tc(Pe,"beforeRouteEnter",N,J,w),W.push(y),At(W))).then(()=>{W=[];for(const E of o.list())W.push(qn(E,N,J));return W.push(y),At(W)}).catch(E=>_n(E,8)?E:Promise.reject(E))}function R(N,J,W){c.list().forEach(Z=>w(()=>Z(N,J,W)))}function S(N,J,W,Z,Ee){const Pe=$(N,J);if(Pe)return Pe;const y=J===Fn,E=Wr?history.state:{};W&&(Z||y?s.replace(N.fullPath,be({scroll:y&&E&&E.scroll},Ee)):s.push(N.fullPath,Ee)),l.value=N,Mt(N,J,W,y),qt()}let T;function yt(){T||(T=s.listen((N,J,W)=>{if(!Zt.listening)return;const Z=B(N),Ee=fe(Z);if(Ee){I(be(Ee,{replace:!0,force:!0}),Z).catch(ii);return}h=Z;const Pe=l.value;Wr&&FA(kd(Pe.fullPath,W.delta),Ta()),A(Z,Pe).catch(y=>_n(y,12)?y:_n(y,2)?(I(be(M(y.to),{force:!0}),Z).then(E=>{_n(E,20)&&!W.delta&&W.type===Ti.pop&&s.go(-1,!1)}).catch(ii),Promise.reject()):(W.delta&&s.go(-W.delta,!1),pe(y,Z,Pe))).then(y=>{y=y||S(Z,Pe,!1),y&&(W.delta&&!_n(y,8)?s.go(-W.delta,!1):W.type===Ti.pop&&_n(y,20)&&s.go(-1,!1)),R(Z,Pe,y)}).catch(ii)}))}let xt=Hs(),He=Hs(),ve;function pe(N,J,W){qt(N);const Z=He.list();return Z.length?Z.forEach(Ee=>Ee(N,J,W)):console.error(N),Promise.reject(N)}function Ct(){return ve&&l.value!==Fn?Promise.resolve():new Promise((N,J)=>{xt.add([N,J])})}function qt(N){return ve||(ve=!N,yt(),xt.list().forEach(([J,W])=>N?W(N):J()),xt.reset()),N}function Mt(N,J,W,Z){const{scrollBehavior:Ee}=t;if(!Wr||!Ee)return Promise.resolve();const Pe=!W&&jA(kd(N.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return kl().then(()=>Ee(N,J,Pe)).then(y=>y&&UA(y)).catch(y=>pe(y,N,J))}const Fe=N=>s.go(N);let je;const Vn=new Set,Zt={currentRoute:l,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:P,resolve:B,options:t,push:K,replace:de,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:He.add,isReady:Ct,install(N){const J=this;N.component("RouterLink",u0),N.component("RouterView",p0),N.config.globalProperties.$router=J,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(l)}),Wr&&!je&&l.value===Fn&&(je=!0,K(s.location).catch(Ee=>{}));const W={};for(const Ee in Fn)Object.defineProperty(W,Ee,{get:()=>l.value[Ee],enumerable:!0});N.provide(wa,J),N.provide(zg,ep(W)),N.provide(Xc,l);const Z=N.unmount;Vn.add(N),N.unmount=function(){Vn.delete(N),Vn.size<1&&(h=Fn,T&&T(),T=null,l.value=Fn,je=!1,ve=!1),Z()}}};function At(N){return N.reduce((J,W)=>J.then(()=>w(W)),Promise.resolve())}return Zt}function m0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>fs(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>fs(h,l))||s.push(l))}return[n,r,s]}function Jl(){return Wt(wa)}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Kg="store";function Ia(t){return t===void 0&&(t=null),Wt(t!==null?t:Kg)}function bs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function _0(t){return t!==null&&typeof t=="object"}function y0(t){return t&&typeof t.then=="function"}function v0(t,e){return function(){return t(e)}}function Gg(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Wg(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Aa(t,n,[],t._modules.root,!0),Yl(t,n,e)}function Yl(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,i={};bs(s,function(o,c){i[c]=v0(o,t),Object.defineProperty(t.getters,c,{get:function(){return i[c]()},enumerable:!0})}),t._state=Pi({data:e}),t.strict&&A0(t),r&&n&&t._withCommit(function(){r.data=null})}function Aa(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var c=Xl(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){c[l]=r.state})}var h=r.context=E0(t,o,n);r.forEachMutation(function(d,p){var m=o+p;T0(t,m,d,h)}),r.forEachAction(function(d,p){var m=d.root?p:o+p,_=d.handler||d;w0(t,m,_,h)}),r.forEachGetter(function(d,p){var m=o+p;I0(t,m,d,h)}),r.forEachChild(function(d,p){Aa(t,e,n.concat(p),d,s)})}function E0(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,c){var l=Wo(i,o,c),h=l.payload,d=l.options,p=l.type;return(!d||!d.root)&&(p=e+p),t.dispatch(p,h)},commit:r?t.commit:function(i,o,c){var l=Wo(i,o,c),h=l.payload,d=l.options,p=l.type;(!d||!d.root)&&(p=e+p),t.commit(p,h,d)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Qg(t,e)}},state:{get:function(){return Xl(t.state,n)}}}),s}function Qg(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function T0(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function w0(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var c=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return y0(c)||(c=Promise.resolve(c)),t._devtoolHook?c.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):c})}function I0(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function A0(t){is(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Xl(t,e){return e.reduce(function(n,r){return n[r]},t)}function Wo(t,e,n){return _0(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var b0="vuex bindings",zd="vuex:mutations",wc="vuex:actions",Kr="vuex",R0=0;function S0(t,e){fA({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[b0]},function(n){n.addTimelineLayer({id:zd,label:"Vuex Mutations",color:Kd}),n.addTimelineLayer({id:wc,label:"Vuex Actions",color:Kd}),n.addInspector({id:Kr,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===Kr)if(r.filter){var s=[];Zg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[Xg(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===Kr){var s=r.nodeId;Qg(e,s),r.state=k0(D0(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===Kr){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(Kr),n.sendInspectorState(Kr),n.addTimelineEvent({layerId:zd,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=R0++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:wc,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:wc,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var Kd=8702998,C0=6710886,P0=16777215,Jg={label:"namespaced",textColor:P0,backgroundColor:C0};function Yg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Xg(t,e){return{id:e||"root",label:Yg(e),tags:t.namespaced?[Jg]:[],children:Object.keys(t._children).map(function(n){return Xg(t._children[n],e+n+"/")})}}function Zg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Jg]:[]}),Object.keys(e._children).forEach(function(s){Zg(t,e._children[s],n,r+s+"/")})}function k0(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=O0(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?Yg(o):o,editable:!1,value:Zc(function(){return i[o]})}})}return s}function O0(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=Zc(function(){return t[n]})}else e[n]=Zc(function(){return t[n]})}),e}function D0(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Zc(t){try{return t()}catch(e){return e}}var Xt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},em={namespaced:{configurable:!0}};em.namespaced.get=function(){return!!this._rawModule.namespaced};Xt.prototype.addChild=function(e,n){this._children[e]=n};Xt.prototype.removeChild=function(e){delete this._children[e]};Xt.prototype.getChild=function(e){return this._children[e]};Xt.prototype.hasChild=function(e){return e in this._children};Xt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Xt.prototype.forEachChild=function(e){bs(this._children,e)};Xt.prototype.forEachGetter=function(e){this._rawModule.getters&&bs(this._rawModule.getters,e)};Xt.prototype.forEachAction=function(e){this._rawModule.actions&&bs(this._rawModule.actions,e)};Xt.prototype.forEachMutation=function(e){this._rawModule.mutations&&bs(this._rawModule.mutations,e)};Object.defineProperties(Xt.prototype,em);var xr=function(e){this.register([],e,!1)};xr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};xr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};xr.prototype.update=function(e){tm([],this.root,e)};xr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Xt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&bs(n.modules,function(c,l){s.register(e.concat(l),c,r)})};xr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};xr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function tm(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;tm(t.concat(r),e.getChild(r),n.modules[r])}}function V0(t){return new St(t)}var St=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new xr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,c=this,l=c.dispatch,h=c.commit;this.dispatch=function(m,_){return l.call(o,m,_)},this.commit=function(m,_,b){return h.call(o,m,_,b)},this.strict=s;var d=this._modules.root.state;Aa(this,d,[],this._modules.root),Yl(this,d),r.forEach(function(p){return p(n)})},Zl={state:{configurable:!0}};St.prototype.install=function(e,n){e.provide(n||Kg,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&S0(e,this)};Zl.state.get=function(){return this._state.data};Zl.state.set=function(t){};St.prototype.commit=function(e,n,r){var s=this,i=Wo(e,n,r),o=i.type,c=i.payload,l={type:o,payload:c},h=this._mutations[o];h&&(this._withCommit(function(){h.forEach(function(p){p(c)})}),this._subscribers.slice().forEach(function(d){return d(l,s.state)}))};St.prototype.dispatch=function(e,n){var r=this,s=Wo(e,n),i=s.type,o=s.payload,c={type:i,payload:o},l=this._actions[i];if(l){try{this._actionSubscribers.slice().filter(function(d){return d.before}).forEach(function(d){return d.before(c,r.state)})}catch{}var h=l.length>1?Promise.all(l.map(function(d){return d(o)})):l[0](o);return new Promise(function(d,p){h.then(function(m){try{r._actionSubscribers.filter(function(_){return _.after}).forEach(function(_){return _.after(c,r.state)})}catch{}d(m)},function(m){try{r._actionSubscribers.filter(function(_){return _.error}).forEach(function(_){return _.error(c,r.state,m)})}catch{}p(m)})})}};St.prototype.subscribe=function(e,n){return Gg(e,this._subscribers,n)};St.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Gg(r,this._actionSubscribers,n)};St.prototype.watch=function(e,n,r){var s=this;return is(function(){return e(s.state,s.getters)},n,Object.assign({},r))};St.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};St.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Aa(this,this.state,e,this._modules.get(e),r.preserveState),Yl(this,this.state)};St.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Xl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Wg(this)};St.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};St.prototype.hotUpdate=function(e){this._modules.update(e),Wg(this,!0)};St.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(St.prototype,Zl);const Ui=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},N0={class:"wrapper"},x0={__name:"main-header",setup(t){let e=pt(!1);const n=Jl(),r=Ia();let s;fa(()=>{s=Wc(),Gw(s,c=>{console.log("user status > ",c),c?(r.commit("authenticateUser",!0),n.push("/jokes")):r.commit("authenticateUser",!1)})});function i(){e.value=!e.value}function o(){Ww(s).then(()=>{r.commit("authenticateUser",!1),n.push("/register"),e.value=!e.value})}return(c,l)=>{const h=Vl("RouterLink");return Ve(),Me("header",null,[X("div",N0,[l[4]||(l[4]=X("div",null,[X("h2",null,"Jokes For Fun")],-1)),X("nav",null,[Ke(h,{to:"/"},{default:ei(()=>l[0]||(l[0]=[Ut("Home")])),_:1}),Ke(h,{to:"/jokes"},{default:ei(()=>l[1]||(l[1]=[Ut("Jokes")])),_:1}),_e(r).state.userEmailAfterSuccessfulLogin==null?(Ve(),Dp(h,{key:0,to:"/register"},{default:ei(()=>l[2]||(l[2]=[Ut("Register ")])),_:1})):It("",!0),_e(r).state.userEmailAfterSuccessfulLogin!=null?(Ve(),Me("button",{key:1,onClick:i,class:"logout-button"},[Ut(vn(_e(r).state.userEmailAfterSuccessfulLogin)+" ",1),l[3]||(l[3]=X("span",null,"🢓",-1))])):It("",!0),_e(e)?(Ve(),Me("button",{key:2,onClick:o,class:"logout-button-visible"}," Logout ")):It("",!0)])])])}}},M0=Ui(x0,[["__scopeId","data-v-4eec0bde"]]),L0={__name:"App",setup(t){return(e,n)=>{const r=Vl("RouterView");return Ve(),Me(zt,null,[Ke(M0),Ke(r)],64)}}},U0={},F0={class:"container"};function j0(t,e){return Ve(),Me("div",F0,e[0]||(e[0]=[Sv('<div class="content" data-v-fa51313c><div class="square twitch" style="margin-bottom:50px;" data-v-fa51313c><span class="one" data-v-fa51313c></span><span class="two" data-v-fa51313c></span><span class="three" data-v-fa51313c></span><div class="circle" data-v-fa51313c><h2 class="DrugRadar" data-v-fa51313c>Humour Club</h2><p data-v-fa51313c>Spread joy and rate people&#39;s homour</p></div></div><a href="{{route(&#39;dashboard.index&#39;)}}" class="button" target="_parent" data-v-fa51313c><span class="actual-text" data-v-fa51313c> Humour Detector</span><span class="hover-text" aria-hidden="true" data-v-fa51313c> Humour Detector</span></a></div>',1)]))}const B0=Ui(U0,[["render",j0],["__scopeId","data-v-fa51313c"]]);var Gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ar,nm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,R,S){for(var T=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)T[yt-2]=arguments[yt];return v.prototype[R].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(R=0;16>R;++R)A[R]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],R=I.g[2];var S=I.g[3],T=v+(S^w&(R^S))+A[0]+3614090360&4294967295;v=w+(T<<7&4294967295|T>>>25),T=S+(R^v&(w^R))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(w^S&(v^w))+A[2]+606105819&4294967295,R=S+(T<<17&4294967295|T>>>15),T=w+(v^R&(S^v))+A[3]+3250441966&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(S^w&(R^S))+A[4]+4118548399&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(R^v&(w^R))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(w^S&(v^w))+A[6]+2821735955&4294967295,R=S+(T<<17&4294967295|T>>>15),T=w+(v^R&(S^v))+A[7]+4249261313&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(S^w&(R^S))+A[8]+1770035416&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(R^v&(w^R))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(w^S&(v^w))+A[10]+4294925233&4294967295,R=S+(T<<17&4294967295|T>>>15),T=w+(v^R&(S^v))+A[11]+2304563134&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(S^w&(R^S))+A[12]+1804603682&4294967295,v=w+(T<<7&4294967295|T>>>25),T=S+(R^v&(w^R))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=R+(w^S&(v^w))+A[14]+2792965006&4294967295,R=S+(T<<17&4294967295|T>>>15),T=w+(v^R&(S^v))+A[15]+1236535329&4294967295,w=R+(T<<22&4294967295|T>>>10),T=v+(R^S&(w^R))+A[1]+4129170786&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^R&(v^w))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(S^v))+A[11]+643717713&4294967295,R=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(R^S))+A[0]+3921069994&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(w^R))+A[5]+3593408605&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^R&(v^w))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(S^v))+A[15]+3634488961&4294967295,R=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(R^S))+A[4]+3889429448&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(w^R))+A[9]+568446438&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^R&(v^w))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(S^v))+A[3]+4107603335&4294967295,R=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(R^S))+A[8]+1163531501&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(R^S&(w^R))+A[13]+2850285829&4294967295,v=w+(T<<5&4294967295|T>>>27),T=S+(w^R&(v^w))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=R+(v^w&(S^v))+A[7]+1735328473&4294967295,R=S+(T<<14&4294967295|T>>>18),T=w+(S^v&(R^S))+A[12]+2368359562&4294967295,w=R+(T<<20&4294967295|T>>>12),T=v+(w^R^S)+A[5]+4294588738&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^R)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^w)+A[11]+1839030562&4294967295,R=S+(T<<16&4294967295|T>>>16),T=w+(R^S^v)+A[14]+4259657740&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(w^R^S)+A[1]+2763975236&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^R)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^w)+A[7]+4139469664&4294967295,R=S+(T<<16&4294967295|T>>>16),T=w+(R^S^v)+A[10]+3200236656&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(w^R^S)+A[13]+681279174&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^R)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^w)+A[3]+3572445317&4294967295,R=S+(T<<16&4294967295|T>>>16),T=w+(R^S^v)+A[6]+76029189&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(w^R^S)+A[9]+3654602809&4294967295,v=w+(T<<4&4294967295|T>>>28),T=S+(v^w^R)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=R+(S^v^w)+A[15]+530742520&4294967295,R=S+(T<<16&4294967295|T>>>16),T=w+(R^S^v)+A[2]+3299628645&4294967295,w=R+(T<<23&4294967295|T>>>9),T=v+(R^(w|~S))+A[0]+4096336452&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~R))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~w))+A[14]+2878612391&4294967295,R=S+(T<<15&4294967295|T>>>17),T=w+(S^(R|~v))+A[5]+4237533241&4294967295,w=R+(T<<21&4294967295|T>>>11),T=v+(R^(w|~S))+A[12]+1700485571&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~R))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~w))+A[10]+4293915773&4294967295,R=S+(T<<15&4294967295|T>>>17),T=w+(S^(R|~v))+A[1]+2240044497&4294967295,w=R+(T<<21&4294967295|T>>>11),T=v+(R^(w|~S))+A[8]+1873313359&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~R))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~w))+A[6]+2734768916&4294967295,R=S+(T<<15&4294967295|T>>>17),T=w+(S^(R|~v))+A[13]+1309151649&4294967295,w=R+(T<<21&4294967295|T>>>11),T=v+(R^(w|~S))+A[4]+4149444226&4294967295,v=w+(T<<6&4294967295|T>>>26),T=S+(w^(v|~R))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=R+(v^(S|~w))+A[2]+718787259&4294967295,R=S+(T<<15&4294967295|T>>>17),T=w+(S^(R|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,A=this.B,R=this.h,S=0;S<v;){if(R==0)for(;S<=w;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<v;)if(A[R++]=I.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<v;)if(A[R++]=I[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var A=0;32>A;A+=8)I[w++]=this.g[v]>>>A&255;return I};function i(I,v){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],A=!0,R=I.length-1;0<=R;R--){var S=I[R]|0;A&&S==v||(w[R]=S,A=!1)}this.g=w}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(h(-I));for(var v=[],w=1,A=0;I>=w;A++)v[A]=I/w|0,w*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return k(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(v,8)),A=p,R=0;R<I.length;R+=8){var S=Math.min(8,I.length-R),T=parseInt(I.substring(R,R+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(T))):(A=A.j(w),A=A.add(h(T)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-k(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(b(this))return"0";if(P(this))return"-"+k(this).toString(I);for(var v=h(Math.pow(I,6)),w=this,A="";;){var R=K(w,v).g;w=B(w,R.j(v));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=R,b(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function b(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=B(this,I),P(I)?-1:b(I)?0:1};function k(I){for(var v=I.g.length,w=[],A=0;A<v;A++)w[A]=~I.g[A];return new o(w,~I.h).add(m)}t.abs=function(){return P(this)?k(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0,R=0;R<=v;R++){var S=A+(this.i(R)&65535)+(I.i(R)&65535),T=(S>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);A=T>>>16,S&=65535,T&=65535,w[R]=T<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function B(I,v){return I.add(k(v))}t.j=function(I){if(b(this)||b(I))return p;if(P(this))return P(I)?k(this).j(k(I)):k(k(this).j(I));if(P(I))return k(this.j(k(I)));if(0>this.l(_)&&0>I.l(_))return h(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],A=0;A<2*v;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<I.g.length;R++){var S=this.i(A)>>>16,T=this.i(A)&65535,yt=I.i(R)>>>16,xt=I.i(R)&65535;w[2*A+2*R]+=T*xt,M(w,2*A+2*R),w[2*A+2*R+1]+=S*xt,M(w,2*A+2*R+1),w[2*A+2*R+1]+=T*yt,M(w,2*A+2*R+1),w[2*A+2*R+2]+=S*yt,M(w,2*A+2*R+2)}for(A=0;A<v;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=v;A<2*v;A++)w[A]=0;return new o(w,0)};function M(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function $(I,v){this.g=I,this.h=v}function K(I,v){if(b(v))throw Error("division by zero");if(b(I))return new $(p,p);if(P(I))return v=K(k(I),v),new $(k(v.g),k(v.h));if(P(v))return v=K(I,k(v)),new $(k(v.g),v.h);if(30<I.g.length){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=v;0>=A.l(I);)w=de(w),A=de(A);var R=fe(w,1),S=fe(A,1);for(A=fe(A,2),w=fe(w,2);!b(A);){var T=S.add(A);0>=T.l(I)&&(R=R.add(w),S=T),A=fe(A,1),w=fe(w,1)}return v=B(I,R.j(v)),new $(R,v)}for(R=p;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(w),T=S.j(v);P(T)||0<T.l(I);)w-=A,S=h(w),T=S.j(v);b(S)&&(S=m),R=R.add(S),I=B(I,T)}return new $(R,I)}t.A=function(I){return K(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)&I.i(A);return new o(w,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)|I.i(A);return new o(w,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],A=0;A<v;A++)w[A]=this.i(A)^I.i(A);return new o(w,this.h^I.h)};function de(I){for(var v=I.g.length+1,w=[],A=0;A<v;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(w,I.h)}function fe(I,v){var w=v>>5;v%=32;for(var A=I.g.length-w,R=[],S=0;S<A;S++)R[S]=0<v?I.i(S+w)>>>v|I.i(S+w+1)<<32-v:I.i(S+w);return new o(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,Ar=o}).apply(typeof Gd<"u"?Gd:typeof self<"u"?self:typeof window<"u"?window:{});var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rm,Ws,sm,Ro,el,im,om,am;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof uo=="object"&&uo];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],u=u(g),u!=g&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var D=f++;return{value:u(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,D){for(var z=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)z[ke-2]=arguments[ke];return u.prototype[C].apply(g,z)}}function P(a){const u=a.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=a[g];return f}return[]}function k(a,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const C=a.length||0,D=g.length||0;a.length=C+D;for(let z=0;z<D;z++)a[C+z]=g[z]}else a.push(g)}}class B{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function K(a){return K[" "](a),a}K[" "]=function(){};var de=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function fe(a,u,f){for(const g in a)u.call(f,a[g],g,a)}function I(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function v(a){const u={};for(const f in a)u[f]=a[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Ct;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class yt{constructor(){this.h=this.g=null}add(u,f){const g=xt.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new B(()=>new He,a=>a.reset());class He{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,pe=!1,Ct=new yt,qt=()=>{const a=c.Promise.resolve(void 0);ve=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){S(f)}var u=xt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}pe=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Zt(a,u){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(de){e:{try{K(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Zt.aa.h.call(this)}}b(Zt,je);var At={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),J=0;function W(a,u,f,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,u,f,g,C){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=y(a,u,g,C);return-1<z?(u=a[z],f||(u.fa=!1)):(u=new W(u,this.src,D,!!g,C),u.fa=f,a.push(u)),u};function Pe(a,u){var f=u.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,u,void 0),D;(D=0<=C)&&Array.prototype.splice.call(g,C,1),D&&(Z(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function y(a,u,f,g){for(var C=0;C<a.length;++C){var D=a[C];if(!D.da&&D.listener==u&&D.capture==!!f&&D.ha==g)return C}return-1}var E="closure_lm_"+(1e6*Math.random()|0),O={};function L(a,u,f,g,C){if(Array.isArray(u)){for(var D=0;D<u.length;D++)L(a,u[D],f,g,C);return null}return f=te(f),a&&a[N]?a.K(u,f,h(g)?!!g.capture:!!g,C):V(a,u,f,!1,g,C)}function V(a,u,f,g,C,D){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,ke=re(a);if(ke||(a[E]=ke=new Ee(a)),f=ke.add(u,f,g,z,D),f.proxy)return f;if(g=F(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Vn||(C=z),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(q(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=j;return a}function G(a,u,f,g,C){if(Array.isArray(u))for(var D=0;D<u.length;D++)G(a,u[D],f,g,C);else g=h(g)?!!g.capture:!!g,f=te(f),a&&a[N]?(a=a.i,u=String(u).toString(),u in a.g&&(D=a.g[u],f=y(D,f,g,C),-1<f&&(Z(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[u],a.h--)))):a&&(a=re(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,f,g,C)),(f=-1<a?u[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[N])Pe(u.i,a);else{var f=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(f,g,a.capture):u.detachEvent?u.detachEvent(q(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=re(u))?(Pe(f,a),f.h==0&&(f.src=null,u[E]=null)):Z(a)}}}function q(a){return a in O?O[a]:O[a]="on"+a}function j(a,u){if(a.da)a=!0;else{u=new Zt(u,this);var f=a.listener,g=a.ha||a.src;a.fa&&H(a),a=f.call(g,u)}return a}function re(a){return a=a[E],a instanceof Ee?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function ee(){Fe.call(this),this.i=new Ee(this),this.M=this,this.F=null}b(ee,Fe),ee.prototype[N]=!0,ee.prototype.removeEventListener=function(a,u,f,g){G(this,a,u,f,g)};function ie(a,u){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new je(u,a);else if(u instanceof je)u.target=u.target||a;else{var C=u;u=new je(g,a),A(u,C)}if(C=!0,f)for(var D=f.length-1;0<=D;D--){var z=u.g=f[D];C=Ae(z,g,!0,u)&&C}if(z=u.g=a,C=Ae(z,g,!0,u)&&C,C=Ae(z,g,!1,u)&&C,f)for(D=0;D<f.length;D++)z=u.g=f[D],C=Ae(z,g,!1,u)&&C}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],g=0;g<f.length;g++)Z(f[g]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,g){return this.i.add(String(a),u,!1,f,g)},ee.prototype.L=function(a,u,f,g){return this.i.add(String(a),u,!0,f,g)};function Ae(a,u,f,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,D=0;D<u.length;++D){var z=u[D];if(z&&!z.da&&z.capture==f){var ke=z.listener,tt=z.ha||z.src;z.fa&&Pe(a.i,z),C=ke.call(tt,g)!==!1&&C}}return C&&!g.defaultPrevented}function we(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function ot(a){a.g=we(()=>{a.g=null,a.i&&(a.i=!1,ot(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ye extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(a){Fe.call(this),this.h=a,this.g={}}b(et,Fe);var at=[];function Nn(a){fe(a.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},a),a.g={}}et.prototype.N=function(){et.aa.N.call(this),Nn(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ur=c.JSON.stringify,vt=c.JSON.parse,Lt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Fr(){}Fr.prototype.h=null;function ku(a){return a.h||(a.h=a.i())}function Ou(){}var ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $a(){je.call(this,"d")}b($a,je);function qa(){je.call(this,"c")}b(qa,je);var fr={},Du=null;function Hi(){return Du=Du||new ee}fr.La="serverreachability";function Vu(a){je.call(this,fr.La,a)}b(Vu,je);function Os(a){const u=Hi();ie(u,new Vu(u))}fr.STAT_EVENT="statevent";function Nu(a,u){je.call(this,fr.STAT_EVENT,a),this.stat=u}b(Nu,je);function Et(a){const u=Hi();ie(u,new Nu(u,a))}fr.Ma="timingevent";function xu(a,u){je.call(this,fr.Ma,a),this.size=u}b(xu,je);function Ds(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function T_(a,u,f,g,C,D){a.info(function(){if(a.g)if(D)for(var z="",ke=D.split("&"),tt=0;tt<ke.length;tt++){var Ie=ke[tt].split("=");if(1<Ie.length){var ct=Ie[0];Ie=Ie[1];var lt=ct.split("_");z=2<=lt.length&&lt[1]=="type"?z+(ct+"="+Ie+"&"):z+(ct+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+z})}function w_(a,u,f,g,C,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+D+" "+z})}function jr(a,u,f,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+A_(a,f)+(g?" "+g:"")})}function I_(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function A_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var D=C[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return Ur(f)}catch{return u}}var zi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ha;function Ki(){}b(Ki,Fr),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},Ha=new Ki;function xn(a,u,f,g){this.j=a,this.i=u,this.l=f,this.R=g||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lu}function Lu(){this.i=null,this.g="",this.h=!1}var Uu={},za={};function Ka(a,u,f){a.L=1,a.v=Ji(pn(u)),a.m=f,a.P=!0,Fu(a,null)}function Fu(a,u){a.F=Date.now(),Gi(a),a.A=pn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Zu(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Lu,a.g=_h(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Ye(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(at[0]=C.toString()),C=at);for(var D=0;D<C.length;D++){var z=L(f,C[D],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Os(),T_(a.i,a.u,a.A,a.l,a.R,a.m)}xn.prototype.ca=function(a){a=a.target;const u=this.M;u&&gn(a)==3?u.j():this.Y(a)},xn.prototype.Y=function(a){try{if(a==this.g)e:{const lt=gn(this.g);var u=this.g.Ba();const qr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||oh(this.g)))){this.J||lt!=4||u==7||(u==8||0>=qr?Os(3):Os(2)),Ga(this);var f=this.g.Z();this.X=f;t:if(ju(this)){var g=oh(this.g);a="";var C=g.length,D=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Ns(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(D&&u==C-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,w_(this.i,this.u,this.A,this.l,this.R,lt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,tt=this.g;if((ke=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ke)){var Ie=ke;break t}}Ie=null}if(f=Ie)jr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wa(this,f);else{this.o=!1,this.s=3,Et(12),pr(this),Ns(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<z.length;)if(Ht=b_(this,z),Ht==za){lt==4&&(this.s=4,Et(14),f=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Uu){this.s=4,Et(15),jr(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else jr(this.i,this.l,Ht,null),Wa(this,Ht);if(ju(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||z.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)jr(this.i,this.l,z,"[Invalid Chunked Response]"),pr(this),Ns(this);else if(0<z.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ec(ct),ct.M=!0,Et(11))}}else jr(this.i,this.l,z,null),Wa(this,z);lt==4&&pr(this),this.o&&!this.J&&(lt==4?fh(this.j,this):(this.o=!1,Gi(this)))}else $_(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),pr(this),Ns(this)}}}catch{}finally{}};function ju(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function b_(a,u){var f=a.C,g=u.indexOf(`
`,f);return g==-1?za:(f=Number(u.substring(f,g)),isNaN(f)?Uu:(g+=1,g+f>u.length?za:(u=u.slice(g,g+f),a.C=g+f,u)))}xn.prototype.cancel=function(){this.J=!0,pr(this)};function Gi(a){a.S=Date.now()+a.I,Bu(a,a.I)}function Bu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ds(m(a.ba,a),u)}function Ga(a){a.B&&(c.clearTimeout(a.B),a.B=null)}xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(I_(this.i,this.A),this.L!=2&&(Os(),Et(17)),pr(this),this.s=2,Ns(this)):Bu(this,this.S-a)};function Ns(a){a.j.G==0||a.J||fh(a.j,a)}function pr(a){Ga(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Nn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Wa(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Qa(f.h,a))){if(!a.K&&Qa(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)no(f),eo(f);else break e;Za(f),Et(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ds(m(f.Za,f),6e3));if(1>=Hu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else mr(f,11)}else if((a.K||f.g==a)&&no(f),!M(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ie=C[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const ct=Ie[3];ct!=null&&(f.la=ct,f.j.info("VER="+f.la));const lt=Ie[4];lt!=null&&(f.Aa=lt,f.j.info("SVER="+f.Aa));const qr=Ie[5];qr!=null&&typeof qr=="number"&&0<qr&&(g=1.5*qr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ht=a.g;if(Ht){const so=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var D=g.h;D.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ja(D,D.h),D.h=null))}if(g.D){const tc=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(g.ya=tc,xe(g.I,g.D,tc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=mh(g,g.J?g.ia:null,g.W),z.K){zu(g.h,z);var ke=z,tt=g.L;tt&&(ke.I=tt),ke.B&&(Ga(ke),Gi(ke)),g.g=z}else hh(g);0<f.i.length&&to(f)}else Ie[0]!="stop"&&Ie[0]!="close"||mr(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?mr(f,7):Xa(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}Os(4)}catch{}}var R_=class{constructor(a,u){this.g=a,this.map=u}};function $u(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hu(a){return a.h?1:a.g?a.g.size:0}function Qa(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ja(a,u){a.g?a.g.add(u):a.h=u}function zu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}$u.prototype.cancel=function(){if(this.i=Ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ku(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return P(a.i)}function S_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,g=0;g<f;g++)u.push(a[g]);return u}u=[],f=0;for(g in a)u[f++]=a[g];return u}function C_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const g in a)u[f++]=g;return u}}}function Gu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=C_(a),g=S_(a),C=g.length,D=0;D<C;D++)u.call(void 0,g[D],f&&f[D],a)}var Wu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var D=a[f].substring(0,g);C=a[f].substring(g+1)}else D=a[f];u(D,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Wi(this,a.j),this.o=a.o,this.g=a.g,Qi(this,a.s),this.l=a.l;var u=a.i,f=new Ls;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Qu(this,f),this.m=a.m}else a&&(u=String(a).match(Wu))?(this.h=!1,Wi(this,u[1]||"",!0),this.o=xs(u[2]||""),this.g=xs(u[3]||"",!0),Qi(this,u[4]),this.l=xs(u[5]||"",!0),Qu(this,u[6]||"",!0),this.m=xs(u[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}gr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ms(u,Ju,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ms(u,Ju,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ms(f,f.charAt(0)=="/"?D_:O_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ms(f,N_)),a.join("")};function pn(a){return new gr(a)}function Wi(a,u,f){a.j=f?xs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Qi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Qu(a,u,f){u instanceof Ls?(a.i=u,x_(a.i,a.h)):(f||(u=Ms(u,V_)),a.i=new Ls(u,a.h))}function xe(a,u,f){a.i.set(u,f)}function Ji(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,k_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function k_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ju=/[#\/\?@]/g,O_=/[#\?:]/g,D_=/[#\?]/g,V_=/[#\?@]/g,N_=/#/g;function Ls(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&P_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ls.prototype,t.add=function(a,u){Mn(this),this.i=null,a=Br(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Yu(a,u){Mn(a),u=Br(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Xu(a,u){return Mn(a),u=Br(a,u),a.g.has(u)}t.forEach=function(a,u){Mn(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(u,C,g,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=a[g];for(let D=0;D<C.length;D++)f.push(u[g])}return f},t.V=function(a){Mn(this);let u=[];if(typeof a=="string")Xu(this,a)&&(u=u.concat(this.g.get(Br(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Mn(this),this.i=null,a=Br(this,a),Xu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Zu(a,u,f){Yu(a,u),0<f.length&&(a.i=null,a.g.set(Br(a,u),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=D;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),a.push(C)}}return this.i=a.join("&")};function Br(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function x_(a,u){u&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Yu(this,g),Zu(this,C,f))},a)),a.j=u}function M_(a,u){const f=new Vs;if(c.Image){const g=new Image;g.onload=_(Ln,f,"TestLoadImage: loaded",!0,u,g),g.onerror=_(Ln,f,"TestLoadImage: error",!1,u,g),g.onabort=_(Ln,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=_(Ln,f,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function L_(a,u){const f=new Vs,g=new AbortController,C=setTimeout(()=>{g.abort(),Ln(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(C),D.ok?Ln(f,"TestPingServer: ok",!0,u):Ln(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Ln(f,"TestPingServer: error",!1,u)})}function Ln(a,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function U_(){this.g=new Lt}function F_(a,u,f){const g=f||"";try{Gu(a,function(C,D){let z=C;h(C)&&(z=Ur(C)),u.push(g+D+"="+encodeURIComponent(z))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Yi(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Yi,Fr),Yi.prototype.g=function(){return new Xi(this.l,this.j)},Yi.prototype.i=function(a){return function(){return a}}({});function Xi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Xi,ee),t=Xi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;eh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function eh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Us(this):Fs(this),this.readyState==3&&eh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Us(this))},t.Qa=function(a){this.g&&(this.response=a,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function th(a){let u="";return fe(a,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ya(a,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=th(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,u,f))}function $e(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b($e,ee);var j_=/^https?$/i,B_=["POST","PUT"];t=$e.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ha.g(),this.v=this.o?ku(this.o):ku(Ha),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(D){nh(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(B_,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ih(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){nh(this,D)}};function nh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,rh(a),Zi(a)}function rh(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zi(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sh(this):this.bb())},t.bb=function(){sh(this)};function sh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||gn(a)!=4||a.Z()!=2)){if(a.u&&gn(a)==4)we(a.Ea,0,a);else if(ie(a,"readystatechange"),gn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=z===0){var C=String(a.D).match(Wu)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!j_.test(C?C.toLowerCase():"")}f=g}if(f)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var D=2<gn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",rh(a)}}finally{Zi(a)}}}}function Zi(a,u){if(a.g){ih(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{f.onreadystatechange=g}catch{}}}function ih(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function gn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),vt(u)}};function oh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(a){const u={};a=(a.g&&2<=gn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var f=R(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=u[C]||[];u[C]=D,D.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function ah(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=js("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=js("baseRetryDelayMs",5e3,a),this.cb=js("retryDelaySeedMs",1e4,a),this.Wa=js("forwardChannelMaxRetries",2,a),this.wa=js("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new $u(a&&a.concurrentRequestLimit),this.Da=new U_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ah.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,g){Et(0),this.W=a,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=mh(this,null,this.W),to(this)};function Xa(a){if(ch(a),a.G==3){var u=a.U++,f=pn(a.I);if(xe(f,"SID",a.K),xe(f,"RID",u),xe(f,"TYPE","terminate"),Bs(a,f),u=new xn(a,a.j,u),u.L=2,u.v=Ji(pn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=_h(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Gi(u)}gh(a)}function eo(a){a.g&&(ec(a),a.g.cancel(),a.g=null)}function ch(a){eo(a),a.u&&(c.clearTimeout(a.u),a.u=null),no(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function to(a){if(!qu(a.h)&&!a.s){a.s=!0;var u=a.Ga;ve||qt(),pe||(ve(),pe=!0),Ct.add(u,a),a.B=0}}function q_(a,u){return Hu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ds(m(a.Ga,a,u),ph(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new xn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=v(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(C.H=D,D=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=uh(this,C,u),f=pn(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),Bs(this,f),D&&(this.O?u="headers="+encodeURIComponent(String(th(D)))+"&"+u:this.m&&Ya(f,this.m,D)),Ja(this.h,C),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",u),xe(f,"SID","null"),C.T=!0,Ka(C,f,null)):Ka(C,f,u),this.G=2}}else this.G==3&&(a?lh(this,a):this.i.length==0||qu(this.h)||lh(this))};function lh(a,u){var f;u?f=u.l:f=a.U++;const g=pn(a.I);xe(g,"SID",a.K),xe(g,"RID",f),xe(g,"AID",a.T),Bs(a,g),a.m&&a.o&&Ya(g,a.m,a.o),f=new xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=uh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ja(a.h,f),Ka(f,g,u)}function Bs(a,u){a.H&&fe(a.H,function(f,g){xe(u,g,f)}),a.l&&Gu({},function(f,g){xe(u,g,f)})}function uh(a,u,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=C[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let ke=!0;for(let tt=0;tt<f;tt++){let Ie=C[tt].g;const ct=C[tt].map;if(Ie-=D,0>Ie)D=Math.max(0,C[tt].g-100),ke=!1;else try{F_(ct,z,"req"+Ie+"_")}catch{g&&g(ct)}}if(ke){g=z.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,g}function hh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ve||qt(),pe||(ve(),pe=!0),Ct.add(u,a),a.v=0}}function Za(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ds(m(a.Fa,a),ph(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ds(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),eo(this),dh(this))};function ec(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function dh(a){a.g=new xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=pn(a.qa);xe(u,"RID","rpc"),xe(u,"SID",a.K),xe(u,"AID",a.T),xe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(u,"TO",a.ja),xe(u,"TYPE","xmlhttp"),Bs(a,u),a.m&&a.o&&Ya(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ji(pn(u)),f.m=null,f.P=!0,Fu(f,a)}t.Za=function(){this.C!=null&&(this.C=null,eo(this),Za(this),Et(19))};function no(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function fh(a,u){var f=null;if(a.g==u){no(a),ec(a),a.g=null;var g=2}else if(Qa(a.h,u))f=u.D,zu(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;g=Hi(),ie(g,new xu(g,f)),to(a)}else hh(a);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&q_(a,u)||g==2&&Za(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),C){case 1:mr(a,5);break;case 4:mr(a,10);break;case 3:mr(a,6);break;default:mr(a,2)}}}function ph(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function mr(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new gr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Wi(g,"https"),Ji(g),C?M_(g.toString(),f):L_(g.toString(),f)}else Et(2);a.G=0,a.l&&a.l.sa(u),gh(a),ch(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function gh(a){if(a.G=0,a.ka=[],a.l){const u=Ku(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function mh(a,u,f){var g=f instanceof gr?pn(f):new gr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Qi(g,g.s);else{var C=c.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var D=new gr(null);g&&Wi(D,g),u&&(D.g=u),C&&Qi(D,C),f&&(D.l=f),g=D}return f=a.D,u=a.ya,f&&u&&xe(g,f,u),xe(g,"VER",a.la),Bs(a,g),g}function _h(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new $e(new Yi({eb:f})):new $e(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yh(){}t=yh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ro(){}ro.prototype.g=function(a,u){return new Pt(a,u)};function Pt(a,u){ee.call(this),this.g=new ah(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!M(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new $r(this)}b(Pt,ee),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Xa(this.g)},Pt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ur(a),a=f);u.i.push(new R_(u.Ya++,a)),u.G==3&&to(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Xa(this.g),delete this.g,Pt.aa.N.call(this)};function vh(a){$a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}b(vh,$a);function Eh(){qa.call(this),this.status=1}b(Eh,qa);function $r(a){this.g=a}b($r,yh),$r.prototype.ua=function(){ie(this.g,"a")},$r.prototype.ta=function(a){ie(this.g,new vh(a))},$r.prototype.sa=function(a){ie(this.g,new Eh)},$r.prototype.ra=function(){ie(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,am=function(){return new ro},om=function(){return Hi()},im=fr,el={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zi.NO_ERROR=0,zi.TIMEOUT=8,zi.HTTP_ERROR=6,Ro=zi,Mu.COMPLETE="complete",sm=Mu,Ou.EventType=ks,ks.OPEN="a",ks.CLOSE="b",ks.ERROR="c",ks.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ws=Ou,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,rm=$e}).apply(typeof uo<"u"?uo:typeof self<"u"?self:typeof window<"u"?window:{});const Wd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Ll("@firebase/firestore");function Qr(){return Or.logLevel}function Y(t,...e){if(Or.logLevel<=ge.DEBUG){const n=e.map(eu);Or.debug(`Firestore (${Rs}): ${t}`,...n)}}function Pn(t,...e){if(Or.logLevel<=ge.ERROR){const n=e.map(eu);Or.error(`Firestore (${Rs}): ${t}`,...n)}}function gs(t,...e){if(Or.logLevel<=ge.WARN){const n=e.map(eu);Or.warn(`Firestore (${Rs}): ${t}`,...n)}}function eu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw Pn(e),new Error(e)}function Ce(t,e){t||ce()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class q0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class H0{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new ht(e)}}class z0{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class K0{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new z0(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new G0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Q0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Qe(0,0))}static max(){return new le(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends wi{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const J0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends wi{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return J0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ue.fromString(e))}static fromName(e){return new se(Ue.fromString(e).popFirst(5))}static empty(){return new se(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ue(e.slice()))}}function Y0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new nr(s,se.empty(),e)}function X0(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(le.min(),se.empty(),-1)}static max(){return new nr(le.max(),se.empty(),-1)}}function Z0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==eb)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(s=>s?x.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new x((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(d=>{o[h]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new x((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function nb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Cs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ba.oe=-1;function Ra(t){return t==null}function Qo(t){return t===0&&1/t==-1/0}function rb(t){return typeof t=="number"&&Number.isInteger(t)&&!Qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qd(e)),e=ib(t.get(n),e);return Qd(e)}function ib(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Qd(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ho(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ho(this.root,e,this.comparator,!1)}getReverseIterator(){return new ho(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ho(this.root,e,this.comparator,!0)}}class ho{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yd(this.data.getIterator())}getIteratorFrom(e){return new Yd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Yd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Je(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new hm("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=ob.exec(t);if(Ce(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Sa(t){const e=t.mapValue.fields.__previous_value__;return tu(e)?Sa(e):e}function Ii(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tu(t)?4:lb(t)?9007199254740991:cb(t)?10:11:ce()}function dn(t,e){if(t===e)return!0;const n=ir(t);if(n!==ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ii(t).isEqual(Ii(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rr(s.timestampValue),c=rr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),c=qe(i.doubleValue);return o===c?Qo(o)===Qo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Jd(o)!==Jd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!dn(o[l],c[l])))return!1;return!0}(t,e);default:return ce()}}function bi(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=ir(t),r=ir(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Xd(t.timestampValue,e.timestampValue);case 4:return Xd(Ii(t),Ii(e));case 5:return ye(t.stringValue,e.stringValue);case 6:return function(i,o){const c=sr(i),l=sr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ye(c[h],l[h]);if(d!==0)return d}return ye(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ye(qe(i.latitude),qe(o.latitude));return c!==0?c:ye(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,d;const p=i.fields||{},m=o.fields||{},_=(c=p.value)===null||c===void 0?void 0:c.arrayValue,b=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=ye(((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:Zd(_,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===fo.mapValue&&o===fo.mapValue)return 0;if(i===fo.mapValue)return 1;if(o===fo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=ye(l[p],d[p]);if(m!==0)return m;const _=_s(c[l[p]],h[d[p]]);if(_!==0)return _}return ye(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ce()}}function Xd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=rr(t),r=rr(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function Zd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function ys(t){return tl(t)}function tl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=tl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${tl(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function So(t){switch(ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Sa(t);return e?16+So(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+So(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return hr(r.fields,(i,o)=>{s+=i.length+So(o)}),s}(t.mapValue);default:throw ce()}}function nl(t){return!!t&&"integerValue"in t}function nu(t){return!!t&&"arrayValue"in t}function ef(t){return!!t&&"nullValue"in t}function tf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Co(t){return!!t&&"mapValue"in t}function cb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ai(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Co(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){hr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Rt(ai(this.value))}}function dm(t){const e=[];return hr(t.fields,(n,r)=>{const s=new rt([n]);if(Co(r)){const i=dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,le.min(),le.min(),le.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,le.min(),le.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,le.min(),le.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.position=e,this.inclusive=n}}function nf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ub(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{}class We extends fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new db(e,n,r):n==="array-contains"?new gb(e,r):n==="in"?new mb(e,r):n==="not-in"?new _b(e,r):n==="array-contains-any"?new yb(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fb(e,r):new pb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&ir(this.value)===ir(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends fm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new fn(e,n)}matches(e){return pm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function pm(t){return t.op==="and"}function gm(t){return hb(t)&&pm(t)}function hb(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function rl(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(gm(t))return t.filters.map(e=>rl(e)).join(",");{const e=t.filters.map(n=>rl(n)).join(",");return`${t.op}(${e})`}}function mm(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof fn?function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&mm(o,s.filters[c]),!0):!1}(t,e):void ce()}function _m(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(_m).join(" ,")+"}"}(t):"Filter"}class db extends We{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class fb extends We{constructor(e,n){super(e,"in",n),this.keys=ym("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pb extends We{constructor(e,n){super(e,"not-in",n),this.keys=ym("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ym(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class gb extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nu(n)&&bi(n.arrayValue,this.value)}}class mb extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&bi(this.value.arrayValue,n)}}class _b extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!bi(this.value.arrayValue,n)}}class yb extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>bi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function sf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new vb(t,e,n,r,s,i,o)}function ru(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ub(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rf(t.startAt,e.startAt)&&rf(t.endAt,e.endAt)}function sl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Eb(t,e,n,r,s,i,o,c){return new Ca(t,e,n,r,s,i,o,c)}function vm(t){return new Ca(t)}function of(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tb(t){return t.collectionGroup!==null}function ci(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Je(rt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Yo(i,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Yo(rt.keyField(),r))}return e.ce}function cn(t){const e=ue(t);return e.le||(e.le=wb(e,ci(t))),e.le}function wb(t,e){if(t.limitType==="F")return sf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yo(s.field,i)});const n=t.endAt?new Jo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jo(t.startAt.position,t.startAt.inclusive):null;return sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function il(t,e,n){return new Ca(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pa(t,e){return su(cn(t),cn(e))&&t.limitType===e.limitType}function Em(t){return`${ru(cn(t))}|lt:${t.limitType}`}function Jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>_m(s)).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=nf(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,ci(r),s)||r.endAt&&!function(o,c,l){const h=nf(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,ci(r),s))}(t,e)}function Ib(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tm(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=Ab(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ab(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?_s(l,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return um(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new Be(se.comparator);function kn(){return bb}const wm=new Be(se.comparator);function Qs(...t){let e=wm;for(const n of t)e=e.insert(n.key,n);return e}function Im(t){let e=wm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return li()}function Am(){return li()}function li(){return new Mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rb=new Be(se.comparator),Sb=new Je(se.comparator);function me(...t){let e=Sb;for(const n of t)e=e.add(n);return e}const Cb=new Je(ye);function Pb(){return Cb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qo(e)?"-0":e}}function bm(t){return{integerValue:""+t}}function kb(t,e){return rb(e)?bm(e):iu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this._=void 0}}function Ob(t,e,n){return t instanceof Xo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tu(i)&&(i=Sa(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ri?Sm(t,e):t instanceof Si?Cm(t,e):function(s,i){const o=Rm(s,i),c=af(o)+af(s.Pe);return nl(o)&&nl(s.Pe)?bm(c):iu(s.serializer,c)}(t,e)}function Db(t,e,n){return t instanceof Ri?Sm(t,e):t instanceof Si?Cm(t,e):n}function Rm(t,e){return t instanceof Zo?function(r){return nl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xo extends Oa{}class Ri extends Oa{constructor(e){super(),this.elements=e}}function Sm(t,e){const n=Pm(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Oa{constructor(e){super(),this.elements=e}}function Cm(t,e){let n=Pm(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Zo extends Oa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function af(t){return qe(t.integerValue||t.doubleValue)}function Pm(t){return nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Vb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Si&&s instanceof Si?ms(r.elements,s.elements,dn):r instanceof Zo&&s instanceof Zo?dn(r.Pe,s.Pe):r instanceof Xo&&s instanceof Xo}(t.transform,e.transform)}class Nb{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Da{}function km(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ou(t.key,Qt.none()):new Fi(t.key,t.data,Qt.none());{const n=t.data,r=Rt.empty();let s=new Je(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new dr(t.key,r,new Nt(s.toArray()),Qt.none())}}function xb(t,e,n){t instanceof Fi?function(s,i,o){const c=s.value.clone(),l=lf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(s,i,o){if(!Po(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=lf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Om(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,r){return t instanceof Fi?function(i,o,c,l){if(!Po(i.precondition,o))return c;const h=i.value.clone(),d=uf(i.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(i,o,c,l){if(!Po(i.precondition,o))return c;const h=uf(i.fieldTransforms,l,o),d=o.data;return d.setAll(Om(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Po(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Mb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rm(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function cf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,o)=>Vb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fi extends Da{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends Da{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Om(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function lf(t,e,n){const r=new Map;Ce(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Db(o,c,n[s]))}return r}function uf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Ob(i,o,e))}return r}class ou extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lb extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Am();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=km(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>cf(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>cf(n,r))}}class au{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ce(e.mutations.length===r.length);let s=function(){return Rb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new au(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Te;function Bb(t){switch(t){default:return ce();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Dm(t){if(t===void 0)return Pn("GRPC error has no .code"),U.UNKNOWN;switch(t){case ze.OK:return U.OK;case ze.CANCELLED:return U.CANCELLED;case ze.UNKNOWN:return U.UNKNOWN;case ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case ze.INTERNAL:return U.INTERNAL;case ze.UNAVAILABLE:return U.UNAVAILABLE;case ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case ze.NOT_FOUND:return U.NOT_FOUND;case ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case ze.ABORTED:return U.ABORTED;case ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case ze.DATA_LOSS:return U.DATA_LOSS;default:return ce()}}(Te=ze||(ze={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=new Ar([4294967295,4294967295],0);function hf(t){const e=$b().encode(t),n=new nm;return n.update(e),new Uint8Array(n.digest())}function df(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ar([n,r],0),new Ar([s,i],0)]}class cu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Ar.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Ar.fromNumber(r)));return s.compare(qb)===1&&(s=new Ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=hf(e),[r,s]=df(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Te===0)return;const n=hf(e),[r,s]=df(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Va(le.min(),s,new Be(ye),kn(),me())}}class ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ji(r,n,me(),me(),me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vm{constructor(e,n){this.targetId=e,this.me=n}}class Nm{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ff{constructor(){this.fe=0,this.ge=pf(),this.pe=it.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new ji(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=pf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Hb{constructor(e){this.Le=e,this.Be=new Map,this.ke=kn(),this.qe=po(),this.Qe=po(),this.Ke=new Be(ye)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(sl(i))if(r===0){const o=new se(i.path);this.We(n,o,gt.newNoDocument(o,le.min()))}else Ce(r===1);else{const o=this.Ze(n);if(o!==r){const c=this.Xe(e),l=c?this.et(c,e,o):1;if(l!==0){this.He(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=sr(r).toUint8Array()}catch(l){if(l instanceof hm)return gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new cu(o,s,i)}catch(l){return gs(l instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Ye(o);if(c){if(i.current&&sl(c.target)){const l=new se(c.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,gt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=me();this.Qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Ye(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Va(e,n,this.Ke,this.ke,r);return this.ke=kn(),this.qe=po(),this.Qe=po(),this.Ke=new Be(ye),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new ff,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Je(ye),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ye),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new ff),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function po(){return new Be(se.comparator)}function pf(){return new Be(se.comparator)}const zb={asc:"ASCENDING",desc:"DESCENDING"},Kb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gb={and:"AND",or:"OR"};class Wb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ol(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qb(t,e){return ea(t,e.toTimestamp())}function ln(t){return Ce(!!t),le.fromTimestamp(function(n){const r=rr(n);return new Qe(r.seconds,r.nanos)}(t))}function lu(t,e){return al(t,e).canonicalString()}function al(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Mm(t){const e=Ue.fromString(t);return Ce(Bm(e)),e}function cl(t,e){return lu(t.databaseId,e.path)}function Ic(t,e){const n=Mm(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Um(n))}function Lm(t,e){return lu(t.databaseId,e)}function Jb(t){const e=Mm(t);return e.length===4?Ue.emptyPath():Um(e)}function ll(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Um(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gf(t,e,n){return{name:cl(t,e),fields:n.value.mapValue.fields}}function Yb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ce(d===void 0||typeof d=="string"),it.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),it.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const d=h.code===void 0?U.UNKNOWN:Dm(h.code);return new ne(d,h.message||"")}(o);n=new Nm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ic(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):le.min(),c=new Rt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new ko(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ic(t,r.document),i=r.readTime?ln(r.readTime):le.min(),o=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ko([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ic(t,r.document),i=r.removedTargetIds||[];n=new ko([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jb(s,i),c=r.targetId;n=new Vm(c,o)}}return n}function Xb(t,e){let n;if(e instanceof Fi)n={update:gf(t,e.key,e.value)};else if(e instanceof ou)n={delete:cl(t,e.key)};else if(e instanceof dr)n={update:gf(t,e.key,e.data),updateMask:aR(e.fieldMask)};else{if(!(e instanceof Lb))return ce();n={verify:cl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Qb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function Zb(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(le.min())&&(o=ln(i)),new Nb(o,s.transformResults||[])}(n,e))):[]}function eR(t,e){return{documents:[Lm(t,e.path)]}}function tR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Lm(t,s);const i=function(h){if(h.length!==0)return jm(fn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Yr(m.field),direction:sR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ol(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function nR(t){let e=Jb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ce(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Fm(p);return m instanceof fn&&gm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new Yo(Xr(b.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Ra(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new Jo(_,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,_=p.values||[];return new Jo(_,m)}(n.endAt)),Eb(e,s,o,i,c,"F",l,h)}function rR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Fm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function sR(t){return zb[t]}function iR(t){return Kb[t]}function oR(t){return Gb[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return rt.fromServerFormat(t.fieldPath)}function jm(t){return t instanceof We?function(n){if(n.op==="=="){if(tf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(ef(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(ef(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:iR(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(s=>jm(s));return r.length===1?r[0]:{compositeFilter:{op:oR(n.op),filters:r}}}(t):ce()}function aR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,s,i=le.min(),o=le.min(),c=it.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.ht=e}}function lR(t){const e=nR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?il(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(){this.ln=new hR}addToCollectionParentIndex(e,n){return this.ln.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(nr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class hR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(41943040,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new vs(0)}static Qn(){return new vs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class dR{constructor(e){this.Gn=e,this.buffer=new Je(_f),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();_f(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Cs(n)?Y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ss(n)}await this.Yn(3e5)})}}class pR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(ba.oe);const r=new dR(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(mf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mf):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Qr()<=ge.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function gR(t,e){return new pR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(){this.changes=new Mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ui(r.mutation,s,Nt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=kn();const o=li(),c=function(){return li()}();return n.forEach((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof dr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ui(d.mutation,h,d.mutation.getFieldMask(),Qe.now())):o.set(h.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return c.set(h,new _R(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=li();let s=new Be((o,c)=>o-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Nt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,p=Am();d.forEach(m=>{if(!i.has(m)){const _=km(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):x.resolve(Tr());let c=-1,l=i;return o.next(h=>x.forEach(h,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?x.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(d=>({batchId:c,changes:Im(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qs();return this.indexManager.getCollectionParents(e,i).next(c=>x.forEach(c,l=>{const h=function(p,m){return new Ca(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let c=Qs();return o.forEach((l,h)=>{const d=i.get(l);d!==void 0&&ui(d.mutation,h,Nt.empty(),Qe.now()),ka(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return x.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:lR(s.bundledQuery),readTime:ln(s.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.overlays=new Be(se.comparator),this.Er=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return x.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=Tr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=Tr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>c.set(h,d)),!(c.size()>=s)););return x.resolve(c)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fb(n,r));let i=this.Er.get(n);i===void 0&&(i=me(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.sessionToken=it.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(){this.dr=new Je(Xe.Ar),this.Rr=new Je(Xe.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Xe(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new se(new Ue([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new se(new Ue([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=me();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return se.comparator(e.key,n.key)||ye(e.br,n.br)}static Vr(e,n){return ye(e.br,n.br)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Je(Xe.Ar)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ub(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.vr=this.vr.add(new Xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const c=this.Cr(o.br);i.push(c)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ye);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],c=>{r=r.add(c.br)})}),x.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new se(i),0);let c=new Je(ye);return this.vr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.br)),!0)},o),x.resolve(this.Mr(c))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ce(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return x.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Xe(n,0),s=this.vr.firstAfterOrEqual(r);return x.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.Nr=e,this.docs=function(){return new Be(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=kn();const o=n.path,c=new se(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Z0(X0(d),r)<=0||(s.has(d.key)||ka(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Lr(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AR(this)}getSize(e){return x.resolve(this.size)}}class AR extends mR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.persistence=e,this.Br=new Mr(n=>ru(n),su),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.kr=0,this.qr=new uu,this.targetCount=0,this.Qr=vs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),x.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Un(n),x.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n){this.Kr={},this.overlays={},this.$r=new ba(0),this.Ur=!1,this.Ur=!0,this.Wr=new TR,this.referenceDelegate=e(this),this.Gr=new bR(this),this.indexManager=new uR,this.remoteDocumentCache=function(s){return new IR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new cR(n),this.jr=new vR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ER,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new wR(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new RR(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return x.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class RR extends tb{constructor(e){super(),this.currentSequenceNumber=e}}class hu{constructor(e){this.persistence=e,this.Zr=new uu,this.Xr=null}static ei(e){return new hu(e)}get ti(){if(this.Xr)return this.Xr;throw ce()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),x.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.ti,r=>{const s=se.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return x.or([()=>x.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class ta{constructor(e,n){this.persistence=e,this.ri=new Mr(r=>sb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=gR(this,n)}static ei(e,n){return new ta(e,n)}Hr(){}Jr(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return x.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?x.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(c=>{c||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),x.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=So(e.data.value)),n}ir(e,n,r){return x.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return x.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new du(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return kE()?8:nb(_t())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SR;return this.ts(e,n,o).next(c=>{if(i.result=c,this.Hi)return this.ns(e,n,o,c.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Qr()<=ge.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),x.resolve()):(Qr()<=ge.DEBUG&&Y("QueryEngine","Query:",Jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Qr()<=ge.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):x.resolve())}Xi(e,n){if(of(n))return x.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=il(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=me(...i);return this.Zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.rs(n,c);return this.ss(n,h,o,l.readTime)?this.Xi(e,il(n,null,"F")):this.os(e,h,n,l)}))})))}es(e,n,r,s){return of(n)||s.isEqual(le.min())?x.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?x.resolve(null):(Qr()<=ge.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jr(n)),this.os(e,o,n,Y0(s,-1)).next(c=>c))})}rs(e,n){let r=new Je(Tm(e));return n.forEach((s,i)=>{ka(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Qr()<=ge.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Jr(n)),this.Zi.getDocumentsMatchingQuery(e,n,nr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Be(ye),this.cs=new Mr(i=>ru(i),su),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function kR(t,e,n,r){return new PR(t,e,n,r)}async function qm(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=me();for(const h of s){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ts:h,removedBatchIds:o,addedBatchIds:c}))})})}function OR(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,d){const p=h.batch,m=p.keys();let _=x.resolve();return m.forEach(b=>{_=_.next(()=>d.getEntry(l,b)).next(P=>{const k=h.docVersions.get(b);Ce(k!==null),P.version.compareTo(k)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),d.addEntry(P)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hm(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function DR(t,e){const n=ue(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(it.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(P,k,B){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(m,_,d)&&c.push(n.Gr.updateTargetData(i,_))});let l=kn(),h=me();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(VR(i,o,e.documentUpdates).next(d=>{l=d.Is,h=d.Es})),!r.isEqual(le.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return x.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.us=s,i))}function VR(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=kn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Is:o,Es:s}})}function NR(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xR(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,x.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function ul(t,e,n){const r=ue(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Cs(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function yf(t,e,n){const r=ue(t);let s=le.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const p=ue(l),m=p.cs.get(d);return m!==void 0?x.resolve(p.us.get(m)):p.Gr.getTargetData(h,d)}(r,o,cn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:me())).next(c=>(MR(r,Ib(e),c),{documents:c,ds:i})))}function MR(t,e,n){let r=t.ls.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class vf{constructor(){this.activeTargetIds=Pb()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LR{constructor(){this._o=new vf,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new vf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go=null;function Ac(){return go===null?go=function(){return 268435456+Math.round(2147483648*Math.random())}():go++,"0x"+go.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class BR extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const c=Ac(),l=this.No(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,o),this.Bo(n,l,h,s).then(d=>(Y("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw gs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}ko(n,r,s,i,o,c){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=FR[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Ac();return new Promise((o,c)=>{const l=new rm;l.setWithCredentials(!0),l.listenOnce(sm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ro.NO_ERROR:const d=l.getResponseJson();Y(ut,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ro.TIMEOUT:Y(ut,`RPC '${e}' ${i} timed out`),c(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ro.HTTP_ERROR:const p=l.getStatus();if(Y(ut,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const b=function(k){const B=k.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(B)>=0?B:U.UNKNOWN}(_.status);c(new ne(b,_.message))}else c(new ne(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne(U.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{Y(ut,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Y(ut,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}qo(e,n,r){const s=Ac(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=am(),c=om(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Y(ut,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let m=!1,_=!1;const b=new jR({Eo:k=>{_?Y(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(Y(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(ut,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Ao:()=>p.close()}),P=(k,B,M)=>{k.listen(B,$=>{try{M($)}catch(K){setTimeout(()=>{throw K},0)}})};return P(p,Ws.EventType.OPEN,()=>{_||(Y(ut,`RPC '${e}' stream ${s} transport opened.`),b.So())}),P(p,Ws.EventType.CLOSE,()=>{_||(_=!0,Y(ut,`RPC '${e}' stream ${s} transport closed`),b.Do())}),P(p,Ws.EventType.ERROR,k=>{_||(_=!0,gs(ut,`RPC '${e}' stream ${s} transport errored:`,k),b.Do(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ws.EventType.MESSAGE,k=>{var B;if(!_){const M=k.data[0];Ce(!!M);const $=M,K=($==null?void 0:$.error)||((B=$[0])===null||B===void 0?void 0:B.error);if(K){Y(ut,`RPC '${e}' stream ${s} received error:`,K);const de=K.status;let fe=function(w){const A=ze[w];if(A!==void 0)return Dm(A)}(de),I=K.message;fe===void 0&&(fe=U.INTERNAL,I="Unknown error status: "+de+" with message "+K.message),_=!0,b.Do(new ne(fe,I)),p.close()}else Y(ut,`RPC '${e}' stream ${s} received:`,M),b.vo(M)}}),P(c,im.STAT_EVENT,k=>{k.stat===el.PROXY?Y(ut,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===el.NOPROXY&&Y(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.bo()},0),b}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){return new Wb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,s,i,o,c,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new zm(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $R extends Km{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=Yb(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?ln(o.readTime):le.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=ll(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=sl(l)?{documents:eR(i,l)}:{query:tR(i,l).ct},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=xm(i,o.resumeToken);const h=ol(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=ea(i,o.snapshotVersion.toTimestamp());const h=ol(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=rR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=ll(this.serializer),n.removeTarget=e,this.c_(n)}}class qR extends Km{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=Zb(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=ll(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xb(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,al(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.ko(e,al(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class zR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Pn(n),this.C_=!1):Y("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ue(l);h.k_.add(4),await Bi(h),h.K_.set("Unknown"),h.k_.delete(4),await xa(h)}(this))})}),this.K_=new zR(r,s)}}async function xa(t){if(Lr(t))for(const e of t.q_)await e(!0)}async function Bi(t){for(const e of t.q_)await e(!1)}function Gm(t,e){const n=ue(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),mu(n)?gu(n):Ps(n).s_()&&pu(n,e))}function fu(t,e){const n=ue(t),r=Ps(n);n.B_.delete(e),r.s_()&&Wm(n,e),n.B_.size===0&&(r.s_()?r.a_():Lr(n)&&n.K_.set("Unknown"))}function pu(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).V_(e)}function Wm(t,e){t.U_.xe(e),Ps(t).m_(e)}function gu(t){t.U_=new Hb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.K_.F_()}function mu(t){return Lr(t)&&!Ps(t).i_()&&t.B_.size>0}function Lr(t){return ue(t).k_.size===0}function Qm(t){t.U_=void 0}async function GR(t){t.K_.set("Online")}async function WR(t){t.B_.forEach((e,n)=>{pu(t,e)})}async function QR(t,e){Qm(t),mu(t)?(t.K_.O_(e),gu(t)):t.K_.set("Unknown")}async function JR(t,e,n){if(t.K_.set("Online"),e instanceof Nm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.B_.delete(c),s.U_.removeTarget(c))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await na(t,r)}else if(e instanceof ko?t.U_.$e(e):e instanceof Vm?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(le.min()))try{const r=await Hm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.U_.it(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const d=i.B_.get(l);if(!d)return;i.B_.set(l,d.withResumeToken(it.EMPTY_BYTE_STRING,d.snapshotVersion)),Wm(i,l);const p=new Wn(d.target,l,h,d.sequenceNumber);pu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await na(t,r)}}async function na(t,e,n){if(!Cs(e))throw e;t.k_.add(1),await Bi(t),t.K_.set("Offline"),n||(n=()=>Hm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await xa(t)})}function Jm(t,e){return e().catch(n=>na(t,n,e))}async function Ma(t){const e=ue(t),n=or(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;YR(e);)try{const s=await NR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,XR(e,s)}catch(s){await na(e,s)}Ym(e)&&Xm(e)}function YR(t){return Lr(t)&&t.L_.length<10}function XR(t,e){t.L_.push(e);const n=or(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Ym(t){return Lr(t)&&!or(t).i_()&&t.L_.length>0}function Xm(t){or(t).start()}async function ZR(t){or(t).w_()}async function eS(t){const e=or(t);for(const n of t.L_)e.g_(n.mutations)}async function tS(t,e,n){const r=t.L_.shift(),s=au.from(r,e,n);await Jm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ma(t)}async function nS(t,e){e&&or(t).f_&&await async function(r,s){if(function(o){return Bb(o)&&o!==U.ABORTED}(s.code)){const i=r.L_.shift();or(r).__(),await Jm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ma(r)}}(t,e),Ym(t)&&Xm(t)}async function Tf(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Lr(n);n.k_.add(3),await Bi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await xa(n)}async function rS(t,e){const n=ue(t);e?(n.k_.delete(2),await xa(n)):e||(n.k_.add(2),await Bi(n),n.K_.set("Unknown"))}function Ps(t){return t.W_||(t.W_=function(n,r,s){const i=ue(n);return i.b_(),new $R(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:GR.bind(null,t),mo:WR.bind(null,t),po:QR.bind(null,t),R_:JR.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),mu(t)?gu(t):t.K_.set("Unknown")):(await t.W_.stop(),Qm(t))})),t.W_}function or(t){return t.G_||(t.G_=function(n,r,s){const i=ue(n);return i.b_(),new qR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:ZR.bind(null,t),po:nS.bind(null,t),p_:eS.bind(null,t),y_:tS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ma(t)):(await t.G_.stop(),t.L_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new _u(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yu(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),Cs(t))return new ne(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{static emptySet(e){return new ls(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Qs(),this.sortedSet=new Be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.z_=new Be(se.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ce():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Es(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class iS{constructor(){this.queries=If(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ue(n),i=s.queries;s.queries=If(),i.forEach((o,c)=>{for(const l of c.J_)l.onError(r)})})(this,new ne(U.ABORTED,"Firestore shutting down"))}}function If(){return new Mr(t=>Em(t),Pa)}async function oS(t,e){const n=ue(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new sS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=yu(o,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&vu(n)}async function aS(t,e){const n=ue(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cS(t,e){const n=ue(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.J_)c.ta(s)&&(r=!0);o.H_=s}}r&&vu(n)}function lS(t,e,n){const r=ue(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function vu(t){t.X_.forEach(e=>{e.next()})}var hl,Af;(Af=hl||(hl={})).na="default",Af.Cache="cache";class uS{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==hl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.key=e}}class e_{constructor(e){this.key=e}}class hS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=me(),this.mutatedKeys=me(),this.Va=Tm(e),this.ma=new ls(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new wf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=ka(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;m&&_?m.data.isEqual(_.data)?b!==P&&(r.track({type:3,doc:_}),k=!0):this.ya(m,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.Va(_,l)>0||h&&this.Va(_,h)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),k=!0):m&&!_&&(r.track({type:1,doc:m}),k=!0,(l||h)&&(c=!0)),k&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:c,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,b){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return P(_)-P(b)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const c=n&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,h=l!==this.Aa;return this.Aa=l,o.length!==0||h?{snapshot:new Es(this.query,e.ma,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new wf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=me(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new e_(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new Zm(r))}),n}va(e){this.da=e.ds,this.Ra=me();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Es.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class dS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fS{constructor(e){this.key=e,this.Fa=!1}}class pS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Mr(c=>Em(c),Pa),this.Oa=new Map,this.Na=new Set,this.La=new Be(se.comparator),this.Ba=new Map,this.ka=new uu,this.qa={},this.Qa=new Map,this.Ka=vs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function gS(t,e,n=!0){const r=o_(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await t_(r,e,n,!0),s}async function mS(t,e){const n=o_(t);await t_(n,e,!0,!1)}async function t_(t,e,n,r){const s=await xR(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await _S(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Gm(t.remoteStore,s),c}async function _S(t,e,n,r,s){t.Ua=(p,m,_)=>async function(P,k,B,M){let $=k.view.ga(B);$.ss&&($=await yf(P.localStore,k.query,!1).then(({documents:I})=>k.view.ga(I,$)));const K=M&&M.targetChanges.get(k.targetId),de=M&&M.targetMismatches.get(k.targetId)!=null,fe=k.view.applyChanges($,P.isPrimaryClient,K,de);return Rf(P,k.targetId,fe.ba),fe.snapshot}(t,p,m,_);const i=await yf(t.localStore,e,!0),o=new hS(e,i.ds),c=o.ga(i.documents),l=ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Rf(t,n,h.ba);const d=new dS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function yS(t,e,n){const r=ue(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!Pa(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ul(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fu(r.remoteStore,s.targetId),dl(r,s.targetId)}).catch(Ss)):(dl(r,s.targetId),await ul(r.localStore,s.targetId,!0))}async function vS(t,e){const n=ue(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fu(n.remoteStore,r.targetId))}async function ES(t,e,n){const r=SS(t);try{const s=await function(o,c){const l=ue(o),h=Qe.now(),d=c.reduce((_,b)=>_.add(b.key),me());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let b=kn(),P=me();return l.hs.getEntries(_,d).next(k=>{b=k,b.forEach((B,M)=>{M.isValidDocument()||(P=P.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,b)).next(k=>{p=k;const B=[];for(const M of c){const $=Mb(M,p.get(M.key).overlayedDocument);$!=null&&B.push(new dr(M.key,$,dm($.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,h,B,c)}).next(k=>{m=k;const B=k.applyToLocalDocumentSet(p,P);return l.documentOverlayCache.saveOverlays(_,k.batchId,B)})}).then(()=>({batchId:m.batchId,changes:Im(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.qa[o.currentUser.toKey()];h||(h=new Be(ye)),h=h.insert(c,l),o.qa[o.currentUser.toKey()]=h}(r,s.batchId,n),await $i(r,s.changes),await Ma(r.remoteStore)}catch(s){const i=yu(s,"Failed to persist write");n.reject(i)}}async function n_(t,e){const n=ue(t);try{const r=await DR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ce(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ce(o.Fa):s.removedDocuments.size>0&&(Ce(o.Fa),o.Fa=!1))}),await $i(n,r,e)}catch(r){await Ss(r)}}function bf(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const c=o.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=ue(o);l.onlineState=c;let h=!1;l.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(c)&&(h=!0)}),h&&vu(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TS(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Be(se.comparator);o=o.insert(i,gt.newNoDocument(i,le.min()));const c=me().add(i),l=new Va(le.min(),new Map,new Be(ye),o,c);await n_(r,l),r.La=r.La.remove(i),r.Ba.delete(e),Eu(r)}else await ul(r.localStore,e,!1).then(()=>dl(r,e,n)).catch(Ss)}async function wS(t,e){const n=ue(t),r=e.batch.batchId;try{const s=await OR(n.localStore,e);s_(n,r,null),r_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $i(n,s)}catch(s){await Ss(s)}}async function IS(t,e,n){const r=ue(t);try{const s=await function(o,c){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(Ce(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>l.localDocuments.getDocuments(h,d))})}(r.localStore,e);s_(r,e,n),r_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $i(r,s)}catch(s){await Ss(s)}}function r_(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function s_(t,e,n){const r=ue(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||i_(t,r)})}function i_(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(fu(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Eu(t))}function Rf(t,e,n){for(const r of n)r instanceof Zm?(t.ka.addReference(r.key,e),AS(t,r)):r instanceof e_?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||i_(t,r.key)):ce()}function AS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.Na.add(r),Eu(t))}function Eu(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new se(Ue.fromString(e)),r=t.Ka.next();t.Ba.set(r,new fS(n)),t.La=t.La.insert(n,r),Gm(t.remoteStore,new Wn(cn(vm(n.path)),r,"TargetPurposeLimboResolution",ba.oe))}}async function $i(t,e,n){const r=ue(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((c,l)=>{o.push(r.Ua(l,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=du.zi(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(l,h){const d=ue(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(h,m=>x.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>x.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Cs(p))throw p;Y("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),b=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(b);d.us=d.us.insert(m,P)}}}(r.localStore,i))}async function bS(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await qm(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new ne(U.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $i(n,r.Ts)}}function RS(t,e){const n=ue(t),r=n.Ba.get(e);if(r&&r.Fa)return me().add(r.key);{let s=me();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const c=n.xa.get(o);s=s.unionWith(c.view.fa)}return s}}function o_(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=n_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TS.bind(null,e),e.Ma.R_=cS.bind(null,e.eventManager),e.Ma.Wa=lS.bind(null,e.eventManager),e}function SS(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IS.bind(null,e),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Na(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return kR(this.persistence,new CR,e.initialUser,this.serializer)}ja(e){return new $m(hu.ei,this.serializer)}za(e){return new LR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class CS extends ra{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ce(this.persistence.referenceDelegate instanceof ta);const r=this.persistence.referenceDelegate.garbageCollector;return new fR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new $m(r=>ta.ei(r,n),this.serializer)}}class fl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bS.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iS}()}createDatastore(e){const n=Na(e.databaseInfo.databaseId),r=function(i){return new BR(i)}(e.databaseInfo);return function(i,o,c,l){return new HR(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new KR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>bf(this.syncEngine,n,0),function(){return Ef.p()?new Ef:new UR}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,d){const p=new pS(s,i,o,c,l,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ue(s);Y("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Bi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}fl.provider={build:()=>new fl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=lm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OS(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Tf(e.remoteStore,s)),t._onlineComponents=e}async function OS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new ra)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new CS(void 0));return t._offlineComponents}async function a_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await Sf(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await Sf(t,new fl))),t._onlineComponents}function DS(t){return a_(t).then(e=>e.syncEngine)}async function VS(t){const e=await a_(t),n=e.eventManager;return n.onListen=gS.bind(null,e.syncEngine),n.onUnlisten=yS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=mS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vS.bind(null,e.syncEngine),n}function NS(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const d=new PS({next:m=>{d.eu(),o.enqueueAndForget(()=>aS(i,p)),m.fromCache&&l.source==="server"?h.reject(new ne(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new uS(c,d,{includeMetadataChanges:!0,ua:!0});return oS(i,p)}(await VS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e,n){if(!n)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xS(t,e,n,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pf(t){if(!se.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kf(t){if(se.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Dr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tu(t);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=c_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class La{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Of({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Of(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $0;switch(r.type){case"firstParty":return new K0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cf.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Cf.delete(n),r.terminate())}(this),Promise.resolve()}}function MS(t,e,n,r={}){var s;const i=(t=Dr(t,La))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ht.MOCK_USER;else{c=IE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ne(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ht(h)}t._authCredentials=new q0(new cm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ua(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class er extends Ua{constructor(e,n,r){super(e,n,vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new se(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function u_(t,e,...n){if(t=st(t),l_("collection","path",e),t instanceof La){const r=Ue.fromString(e,...n);return kf(r),new er(t,null,r)}{if(!(t instanceof Bt||t instanceof er))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return kf(r),new er(t.firestore,null,r)}}function sa(t,e,...n){if(t=st(t),arguments.length===1&&(e=lm.newId()),l_("doc","path",e),t instanceof La){const r=Ue.fromString(e,...n);return Pf(r),new Bt(t,null,new se(r))}{if(!(t instanceof Bt||t instanceof er))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Pf(r),new Bt(t.firestore,t instanceof er?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new zm(this,"async_queue_retry"),this.fu=()=>{const r=bc();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Zn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Cs(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=_u.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ce()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class qi extends La{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Df,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Df(e),this._firestoreClient=void 0,await e}}}function LS(t,e){const n=typeof t=="object"?t:Wp(),r=typeof t=="string"?t:"(default)",s=Fl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=TE("firestore");i&&MS(s,...i)}return s}function h_(t){if(t._terminated)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||US(t),t._firestoreClient}function US(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,d){return new ab(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,c_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new kS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(it.fromBase64String(e))}catch(n){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=/^__.*__$/;class jS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fi(e,this.data,n,this.fieldTransforms)}}class d_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function f_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class bu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ia(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(f_(this.Mu)&&FS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class BS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Na(e)}$u(e,n,r,s=!1){return new bu({Mu:e,methodName:n,Ku:r,path:rt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function p_(t){const e=t._freezeSettings(),n=Na(t._databaseId);return new BS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $S(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Ru("Data must be an object, but it was:",o,r);const c=g_(r,o);let l,h;if(i.merge)l=new Nt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=pl(e,p,n);if(!o.contains(m))throw new ne(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);__(d,m)||d.push(m)}l=new Nt(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new jS(new Rt(c),l,h)}class ja extends wu{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ja}}function qS(t,e,n,r){const s=t.$u(1,e,n);Ru("Data must be an object, but it was:",s,r);const i=[],o=Rt.empty();hr(r,(l,h)=>{const d=Su(e,l,n);h=st(h);const p=s.Bu(d);if(h instanceof ja)i.push(d);else{const m=Ba(h,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Nt(i);return new d_(o,c,s.fieldTransforms)}function HS(t,e,n,r,s,i){const o=t.$u(1,e,n),c=[pl(e,r,n)],l=[s];if(i.length%2!=0)throw new ne(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(pl(e,i[m])),l.push(i[m+1]);const h=[],d=Rt.empty();for(let m=c.length-1;m>=0;--m)if(!__(h,c[m])){const _=c[m];let b=l[m];b=st(b);const P=o.Bu(_);if(b instanceof ja)h.push(_);else{const k=Ba(b,P);k!=null&&(h.push(_),d.set(_,k))}}const p=new Nt(h);return new d_(d,p,o.fieldTransforms)}function Ba(t,e){if(m_(t=st(t)))return Ru("Unsupported field value:",e,t),g_(t,e);if(t instanceof wu)return function(r,s){if(!f_(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ba(c,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof Iu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:xm(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Au)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return iu(c.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Tu(r)}`)}(t,e)}function g_(t,e){const n={};return um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(t,(r,s)=>{const i=Ba(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function m_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof Iu||t instanceof Ts||t instanceof Bt||t instanceof wu||t instanceof Au)}function Ru(t,e,n){if(!m_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Tu(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function pl(t,e,n){if((e=st(e))instanceof Fa)return e._internalPath;if(typeof e=="string")return Su(t,e);throw ia("Field path arguments must be of type string or ",t,!1,void 0,n)}const zS=new RegExp("[~\\*/\\[\\]]");function Su(t,e,n){if(e.search(zS)>=0)throw ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fa(...e.split("."))._internalPath}catch{throw ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ia(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne(U.INVALID_ARGUMENT,c+t+l)}function __(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(v_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KS extends y_{data(){return super.data()}}function v_(t,e){return typeof e=="string"?Su(t,e):e instanceof Fa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class WS{convertValue(e,n="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>qe(o.doubleValue));return new Au(i)}convertGeoPoint(e){return new Iu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Sa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ii(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Ce(Bm(r));const s=new Ai(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Pn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JS extends y_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(v_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oo extends JS{data(e={}){return super.data(e)}}class YS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new mo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oo(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Oo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Oo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new mo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:XS(c.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class ZS extends WS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function eC(t){t=Dr(t,Ua);const e=Dr(t.firestore,qi),n=h_(e),r=new ZS(e);return GS(t._query),NS(n,t._query).then(s=>new YS(e,r,t,s))}function E_(t,e,n,...r){t=Dr(t,Bt);const s=Dr(t.firestore,qi),i=p_(s);let o;return o=typeof(e=st(e))=="string"||e instanceof Fa?HS(i,"updateDoc",t._key,e,n,r):qS(i,"updateDoc",t._key,e),Cu(s,[o.toMutation(t._key,Qt.exists(!0))])}function tC(t){return Cu(Dr(t.firestore,qi),[new ou(t._key,Qt.none())])}function nC(t,e){const n=Dr(t.firestore,qi),r=sa(t),s=QS(t.converter,e);return Cu(n,[$S(p_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then(()=>r)}function Cu(t,e){return function(r,s){const i=new Zn;return r.asyncQueue.enqueueAndForget(async()=>ES(await DS(r),s,i)),i.promise}(h_(t),e)}(function(e,n=!0){(function(s){Rs=s})(Is),ds(new Cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new qi(new H0(r.getProvider("auth-internal")),new W0(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ai(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Xn(Wd,"4.7.5",e),Xn(Wd,"4.7.5","esm2017")})();var rC="firebase",sC="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(rC,sC,"app");const iC={apiKey:"AIzaSyAiJUrA-88UgIeuZvrGIFvTwAopcNyHMTU",authDomain:"vue-blogs-49aae.firebaseapp.com",projectId:"vue-blogs-49aae",storageBucket:"vue-blogs-49aae.firebasestorage.app",messagingSenderId:"345118009117",appId:"1:345118009117:web:96e9cf58cc33734b81a3f4"},oC=Gp(iC),hi=LS(oC),aC={class:"add-joke-component-container"},cC={key:0},lC={key:1},uC={class:"joke-title"},hC={class:"joke-description"},dC={__name:"AddJoke",props:{type:{type:String,required:!0},jokeTitle:{type:String,required:!0},jokeDescription:{type:String,required:!0},jokeId:{type:Number,required:!0}},emits:["closeAddJoke"],setup(t,{emit:e}){let n=pt(""),r=pt(""),s=pt(null);const i=e,o=Ia(),c=t;fa(()=>{n.value=c.jokeTitle,r.value=c.jokeDescription,s.value=c.jokeId,console.log(o,o.state.userEmailAfterSuccessfulLogin,s.value,r.value,n.value)});function l(){console.log("jokeDescription >",r.value)}function h(){i("getJokesListAfterNewJokeAdded",!1),n.value="",r.value="",s.value=null}async function d(){await nC(u_(hi,"Jokes"),{title:n.value,body:r.value.replaceAll(`
`,"<br />"),dadJoke:0,badJoke:0,goodJoke:0,isEdited:!1,createdBy:o.state.userEmailAfterSuccessfulLogin}),h()}async function p(){await E_(sa(hi,"Jokes",s.value),{title:n.value,body:r.value.replaceAll(`
`,"<br />"),dadJoke:0,badJoke:0,goodJoke:0,isEdited:!1,createdBy:o.state.userEmailAfterSuccessfulLogin}),h()}return(m,_)=>(Ve(),Me("div",aC,[t.type=="add"?(Ve(),Me("h2",cC,"Add Joke")):It("",!0),t.type=="update"?(Ve(),Me("h2",lC,"Update Joke")):It("",!0),X("span",{class:"cancel-add-joke",onClick:h},"×"),X("div",uC,[_[2]||(_[2]=X("label",{for:"joke-title"},"Title",-1)),_[3]||(_[3]=X("br",null,null,-1)),Bn(X("input",{type:"text",id:"joke-title","onUpdate:modelValue":_[0]||(_[0]=b=>Le(n)?n.value=b:n=b)},null,512),[[Ir,_e(n)]])]),X("div",hC,[_[4]||(_[4]=X("label",{for:"joke-description"},"Joke Description",-1)),_[5]||(_[5]=X("br",null,null,-1)),Bn(X("textarea",{id:"joke-description","onUpdate:modelValue":_[1]||(_[1]=b=>Le(r)?r.value=b:r=b),onKeyup:l},null,544),[[Ir,_e(r)]])]),t.type=="add"?(Ve(),Me("button",{key:2,onClick:d},"Add Joke")):It("",!0),t.type=="update"?(Ve(),Me("button",{key:3,onClick:p},"Update Joke")):It("",!0)]))}},fC=Ui(dC,[["__scopeId","data-v-243c9406"]]),pC={class:"container"},gC={class:"jokke-heading-button-container"},mC={key:0,class:"no-joke-container"},_C={key:0},yC={key:1},vC={class:"joke-title"},EC=["innerHTML"],TC=["onClick"],wC={class:"joke-response"},IC={class:"joke-createdby"},AC={class:"reaction-container"},bC=["onClick"],RC=["onClick"],SC=["onClick"],CC=["onClick"],PC={key:2,class:"add-joke-container"},kC={class:"add-joke-container-inner"},OC={__name:"JokesList",setup(t){let e=pt([]),n=pt(!1),r=pt(""),s=pt(""),i=pt(""),o=pt(null);const c=Ia(),l=Jl();async function h(P,k){let B={};B[k]=JSON.parse(JSON.stringify(e.value)).find(M=>M.id==P)[k]+1,c.state.userEmailAfterSuccessfulLogin?(await E_(sa(hi,"Jokes",P),B),m()):l.push("/register")}function d(){c.state.userEmailAfterSuccessfulLogin?(n.value=!0,r.value="add"):l.push("/register")}function p(P){console.log("data > ",P),n.value=!1,m()}async function m(){e.value=[],(await eC(u_(hi,"Jokes"))).forEach(k=>{e.value.push({id:k.id,title:k.data().title,body:k.data().body,dadJoke:k.data().dadJoke,badJoke:k.data().badJoke,goodJoke:k.data().goodJoke,isEdited:k.data().isEdited,createdBy:k.data().createdBy})})}function _(P){confirm("Are you sure you want to delete this ?")==!0&&(tC(sa(hi,"Jokes",P)),m())}function b(P,k,B){c.state.userEmailAfterSuccessfulLogin?(n.value=!0,r.value="update",o.value=P,i.value=k,s.value=B):l.push("/register")}return fa(()=>{m()}),(P,k)=>{const B=Vl("RouterLink");return Ve(),Me("div",pC,[X("div",gC,[k[0]||(k[0]=X("h2",null,"Jokes List",-1)),_e(c).state.userEmailAfterSuccessfulLogin!=null?(Ve(),Me("button",{key:0,onClick:d,class:"add-joke-button"}," Add Joke ")):It("",!0)]),_e(e).length==0?(Ve(),Me("div",mC,[k[3]||(k[3]=X("p",null,"No Joke added",-1)),k[4]||(k[4]=X("p",null,"Make people laugh with your humour",-1)),_e(c).state.userEmailAfterSuccessfulLogin==null?(Ve(),Me("p",_C,[Ke(B,{to:"/register"},{default:ei(()=>k[1]||(k[1]=[Ut("Register/Login")])),_:1}),k[2]||(k[2]=Ut(" here and continue "))])):It("",!0),k[5]||(k[5]=X("div",{class:"svg-icon"},"😊",-1))])):(Ve(),Me("div",yC,[(Ve(!0),Me(zt,null,Qy(_e(e),M=>(Ve(),Me("div",{key:M.id,class:"joke-list"},[X("h4",vC,vn(M.title),1),X("p",{class:"joke-body",innerHTML:M.body},null,8,EC),X("span",{onClick:$=>_(M.id),class:"joke-delete"},"×",8,TC),X("div",wC,[X("div",IC,[X("p",null,vn("by - "+M.createdBy),1)]),X("div",AC,[X("p",{class:"dad-joke reactions",onClick:$=>h(M.id,"dadJoke"),title:"Dad Joke"},[k[6]||(k[6]=Ut(" 😎")),X("span",null,vn(M.dadJoke),1)],8,bC),X("p",{class:"bad-joke reactions",onClick:$=>h(M.id,"badJoke"),title:"Bad Joke"},[k[7]||(k[7]=Ut(" 😒")),X("span",null,vn(M.badJoke),1)],8,RC),X("p",{class:"good-joke reactions",onClick:$=>h(M.id,"goodJoke"),title:"Good Joke"},[k[8]||(k[8]=Ut(" 😆")),X("span",null,vn(" "+M.goodJoke),1)],8,SC),_e(c).state.userEmailAfterSuccessfulLogin==M.createdBy?(Ve(),Me("p",{key:0,class:"joke edit-icon",title:"Edit",onClick:$=>b(M.id,M.body,M.title)},k[9]||(k[9]=[X("span",null,"✎",-1)]),8,CC)):It("",!0)])])]))),128))])),_e(n)?(Ve(),Me("div",PC,[X("div",kC,[Ke(fC,{onGetJokesListAfterNewJokeAdded:p,type:_e(r),"joke-description":_e(i),"joke-title":_e(s),"joke-id":_e(o)},null,8,["type","joke-description","joke-title","joke-id"])])])):It("",!0)])}}},DC=Ui(OC,[["__scopeId","data-v-8a418540"]]),VC={class:"container"},NC={class:"cred-container"},xC={key:0,class:"login-container"},MC={key:0,class:"error-fields"},LC=["type"],UC={key:1,class:"register-container"},FC={key:0,class:"error-fields"},jC={__name:"RegisterUser",setup(t){const e=Jl(),n=Ia();let r=pt(!1),s=pt(!0),i=pt(""),o=pt(""),c=pt(!1);function l(){console.log("login"),s.value=!1,r.value=!0,c.value=!1}function h(){console.log("register"),r.value=!1,s.value=!0,c.value=!1}function d(){let _={email:i.value,password:o.value};n.dispatch("registerUser",_),n.state.errorMsg==null&&n.state.userEmailAfterSuccessfulLogin!=null&&e.push("/jokes")}function p(){let _={email:i.value,password:o.value};n.dispatch("loginUser",_),n.state.errorMsg==null&&n.state.userEmailAfterSuccessfulLogin!=null&&e.push("/jokes")}function m(){c.value=!c.value}return(_,b)=>(Ve(),Me("div",VC,[X("div",NC,[_e(r)?(Ve(),Me("div",xC,[b[14]||(b[14]=X("h2",null,"Login User",-1)),X("div",null,[b[8]||(b[8]=X("label",{for:"email"},"Email",-1)),b[9]||(b[9]=X("br",null,null,-1)),Bn(X("input",{type:"email",id:"email",placeholder:"Email","onUpdate:modelValue":b[0]||(b[0]=P=>Le(i)?i.value=P:i=P)},null,512),[[Ir,_e(i)]]),_e(n).state.errorMsg?(Ve(),Me("p",MC,"* "+vn(_e(n).state.errorMsg),1)):It("",!0)]),X("div",null,[b[10]||(b[10]=X("label",{for:"password"},"Password",-1)),b[11]||(b[11]=X("br",null,null,-1)),Bn(X("input",{type:_e(c)?"text":"password",id:"password",placeholder:"Password","onUpdate:modelValue":b[1]||(b[1]=P=>Le(o)?o.value=P:o=P)},null,8,LC),[[aE,_e(o)]]),Bn(X("input",{type:"checkbox",id:"checkbox-showpassword","onUpdate:modelValue":b[2]||(b[2]=P=>Le(c)?c.value=P:c=P),onClick:m},null,512),[[Uc,_e(c)]]),b[12]||(b[12]=X("label",{for:"checkbox-showpassword"},"Show Password",-1))]),X("button",{onClick:b[3]||(b[3]=P=>p())},"Login"),X("p",{class:"register-text"},[b[13]||(b[13]=Ut("First time User ")),X("span",{onClick:h},"Register")])])):It("",!0),_e(s)?(Ve(),Me("div",UC,[b[21]||(b[21]=X("h2",null,"Register User",-1)),X("div",null,[b[15]||(b[15]=X("label",{for:"email"},"Email",-1)),b[16]||(b[16]=X("br",null,null,-1)),Bn(X("input",{type:"email",id:"email",placeholder:"Email","onUpdate:modelValue":b[4]||(b[4]=P=>Le(i)?i.value=P:i=P)},null,512),[[Ir,_e(i)]]),_e(n).state.errorMsg?(Ve(),Me("p",FC,"* "+vn(_e(n).state.errorMsg),1)):It("",!0)]),X("div",null,[b[17]||(b[17]=X("label",{for:"password"},"Password",-1)),b[18]||(b[18]=X("br",null,null,-1)),Bn(X("input",{type:"password",id:"password",placeholder:"Password","onUpdate:modelValue":b[5]||(b[5]=P=>Le(o)?o.value=P:o=P)},null,512),[[Ir,_e(o)]]),Bn(X("input",{type:"checkbox",id:"checkbox-showpassword","onUpdate:modelValue":b[6]||(b[6]=P=>Le(c)?c.value=P:c=P),onClick:m},null,512),[[Uc,_e(c)]]),b[19]||(b[19]=X("label",{for:"checkbox-showpassword"},"Show Password",-1))]),X("button",{onClick:b[7]||(b[7]=P=>d())},"Register"),X("p",{class:"login-text"},[b[20]||(b[20]=Ut("Already a user ")),X("span",{onClick:l},"Login ")])])):It("",!0)])]))}},BC=Ui(jC,[["__scopeId","data-v-f8f6e5b4"]]),$C=g0({history:HA("/vue-jokes"),routes:[{path:"/",name:"home",component:B0},{path:"/jokes",name:"jokesList",component:DC},{path:"/register",name:"RegisterUser",component:BC}]}),gl=V0({state(){return{count:0,userEmailAfterSuccessfulLogin:null,errorMsg:null}},mutations:{increment(t,e){t.count=t.count+e},authenticateUser:function(t,e){e==!1&&(t.userEmailAfterSuccessfulLogin=null)},registerFirstTimeUser(t,e){const n=Wc();t.errorMsg=null,qw(n,e.email,e.password).then(r=>{t.userEmailAfterSuccessfulLogin=r.user.email,gl.commit("authenticateUser",!0)}).catch(r=>{console.log(r),t.errorMsg=r.code;const s=r.code,i=r.message;console.log("errorCode > ",s),console.log("errorMessage > ",i)})},loginExistingUser(t,e){const n=Wc();t.errorMsg=null,Hw(n,e.email,e.password).then(r=>{t.userEmailAfterSuccessfulLogin=r.user.email,gl.commit("authenticateUser",!0)}).catch(r=>{t.errorMsg=r.code;const s=r.code,i=r.message;console.log("errorCode > ",s),console.log("errorMessage > ",i)})}},actions:{registerUser(t,e){t.commit("registerFirstTimeUser",e)},loginUser(t,e){t.commit("loginExistingUser",e)}}}),Pu=hE(L0);Pu.use($C);Pu.use(gl);Pu.mount("#app");
