(function(){var h={},mt={},c={id:"866c9be12d4a814454792b1fd0fed295",dm:["cnblogs.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:[],vdur:1800000,age:31536000000,qiao:0,pt:0,spa:0,aet:'',hca:'7F5CC6F3DA75C311',ab:'0',v:1,apps:''};var r=void 0,s=!0,u=null,v=!1;mt.cookie={};mt.cookie.set=function(f,a,b){var e;b.D&&(e=new Date,e.setTime(e.getTime()+b.D));document.cookie=f+"="+a+(b.domain?"; domain="+b.domain:"")+(b.path?"; path="+b.path:"")+(e?"; expires="+e.toGMTString():"")+(b.ec?"; secure":"")};mt.cookie.get=function(f){return(f=RegExp("(^| )"+f+"=([^;]*)(;|$)").exec(document.cookie))?f[2]:u};
mt.cookie.tb=function(f,a){try{var b="Hm_ck_"+ +new Date;mt.cookie.set(b,"42",{domain:f,path:a,D:r});var e="42"===mt.cookie.get(b)?"1":"0";mt.cookie.set(b,"",{domain:f,path:a,D:-1});return e}catch(d){return"0"}};
(function(){var f=mt.event;mt.lang={};mt.lang.j=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.k=function(a){return mt.lang.j(a,"Function")};mt.lang.K=function(a){return mt.lang.j(a,"Object")};mt.lang.Yb=function(a){return mt.lang.j(a,"Number")&&isFinite(a)};mt.lang.$=function(a){return mt.lang.j(a,"String")};mt.lang.isArray=function(a){return mt.lang.j(a,"Array")};mt.lang.g=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=
function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.find=function(a,b,e){if(mt.lang.isArray(a)&&mt.lang.k(b))for(var d=a.length,g=0;g<d;g++)if(g in a&&b.call(e||a,a[g],g))return a[g];return u};mt.lang.Y=function(a,b){return mt.lang.find(a,function(e){return e===b})!=u};mt.lang.filter=function(a,b){var e=-1,d=0,g=a==u?0:a.length,k=[];if(mt.lang.k(b))for(;++e<g;){var l=a[e];b(l,e,a)&&(k[d++]=l)}return k};mt.lang.unique=function(a,b){var e=a.length,d=a.slice(0),g,k;for(mt.lang.k(b)||(b=function(b,
e){return b===e});0<--e;){k=d[e];for(g=e;g--;)if(b(k,d[g])){d.splice(e,1);break}}return d};mt.lang.$b=function(a,b){function e(b){b=(d+d+Number(b).toString(2)).slice(-64);return[parseInt(b.slice(0,32),2),parseInt(b.slice(-32),2)]}var d="00000000000000000000000000000000",g=e(a),k=e(b);return parseInt((d+((g[0]|k[0])>>>0).toString(2)).slice(-32)+(d+((g[1]|k[1])>>>0).toString(2)).slice(-32),2)};mt.lang.extend=function(a){for(var b=Array.prototype.slice.call(arguments,1),e=0;e<b.length;e++){var d=b[e],
g;for(g in d)Object.prototype.hasOwnProperty.call(d,g)&&d[g]&&(a[g]=d[g])}return a};mt.lang.Qb=function(a){function b(b,d){var a=window.history,k=a[b];a[b]=function(){k.apply(a,arguments);mt.lang.k(d)&&d()}}b("pushState",function(){a()});b("replaceState",function(){a()});f.c(window,window.history.pushState?"popstate":"hashchange",function(){a()})};return mt.lang})();mt.url={};mt.url.f=function(f,a){var b=f.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return b?b[3]:u};
mt.url.Ua=function(f){return(f=f.match(/^(https?:\/\/)?([^\/\?#]*)/))?f[2].replace(/.*@/,""):u};mt.url.W=function(f){return(f=mt.url.Ua(f))?f.replace(/:\d+$/,""):f};mt.url.rb=function(f){var a=document.location.href,a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(f)};mt.url.sb=function(f,a){f="."+f.replace(/:\d+/,"");a="."+a.replace(/:\d+/,"");var b=f.indexOf(a);return-1<b&&b+a.length===f.length};
(function(){var f=mt.lang,a=mt.url;mt.d={};mt.d.Na=function(b){return document.getElementById(b)};mt.d.Xb=function(b){if(!b)return u;try{b=String(b);if(0===b.indexOf("!HMCQ!"))return b;if(0===b.indexOf("!HMCC!"))return document.querySelector(b.substring(6,b.length));for(var e=b.split(">"),d=document.body,a=e.length-1;0<=a;a--)if(-1<e[a].indexOf("#")){var k=e[a].split("#")[1];(d=document.getElementById(k))||(d=document.getElementById(decodeURIComponent(k)));e=e.splice(a+1,e.length-(a+1));break}for(b=
0;d&&b<e.length;){var l=String(e[b]).toLowerCase();if(!("html"===l||"body"===l)){var a=0,f=e[b].match(/\[(\d+)\]/i),k=[];if(f)a=f[1]-1,l=l.split("[")[0];else if(1!==d.childNodes.length){for(var n=0,t=0,m=d.childNodes.length;t<m;t++){var p=d.childNodes[t];1===p.nodeType&&p.nodeName.toLowerCase()===l&&n++;if(1<n)return u}if(1!==n)return u}for(n=0;n<d.childNodes.length;n++)1===d.childNodes[n].nodeType&&d.childNodes[n].nodeName.toLowerCase()===l&&k.push(d.childNodes[n]);if(!k[a])return u;d=k[a]}b++}return d}catch(w){return u}};
mt.d.ha=function(b,e){var a=[],g=[];if(!b)return g;for(;b.parentNode!=u;){for(var k=0,l=0,f=b.parentNode.childNodes.length,n=0;n<f;n++){var t=b.parentNode.childNodes[n];if(t.nodeName===b.nodeName&&(k++,t===b&&(l=k),0<l&&1<k))break}if((f=""!==b.id)&&e){a.unshift("#"+encodeURIComponent(b.id));break}else f&&(f="#"+encodeURIComponent(b.id),f=0<a.length?f+">"+a.join(">"):f,g.push(f)),a.unshift(encodeURIComponent(String(b.nodeName).toLowerCase())+(1<k?"["+l+"]":""));b=b.parentNode}g.push(a.join(">"));return g};
mt.d.Za=function(b){return(b=mt.d.ha(b,s))&&b.length?String(b[0]):""};mt.d.Ya=function(b){return mt.d.ha(b,v)};mt.d.Oa=function(b){var e;for(e="A";(b=b.parentNode)&&1==b.nodeType;)if(b.tagName==e)return b;return u};mt.d.Ra=function(b){return 9===b.nodeType?b:b.ownerDocument||b.document};mt.d.Wa=function(b){var e={top:0,left:0};if(!b)return e;var a=mt.d.Ra(b).documentElement;"undefined"!==typeof b.getBoundingClientRect&&(e=b.getBoundingClientRect());return{top:e.top+(window.pageYOffset||a.scrollTop)-
(a.clientTop||0),left:e.left+(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}};mt.d.hc=function(b,e){if(b)for(var a=b.childNodes,g=0,k=a.length;g<k;g++){var l=a[g];if(l&&3===l.nodeType)return a=l.textContent||l.innerText||l.nodeValue||"",l.textContent?l.textContent=e:l.innerText?l.innerText=e:l.nodeValue=e,a}};mt.d.gc=function(b,a){if(!b)return{};var d={};a=a||{};for(var g in a)a.hasOwnProperty(g)&&a[g]!==r&&(d[g]=b.getAttribute(g)||"",b.setAttribute(g,a[g]));return d};mt.d.getAttribute=function(b,
a){var d=b.getAttribute&&b.getAttribute(a)||u;if(!d&&b.attributes&&b.attributes.length)for(var g=b.attributes,k=g.length,l=0;l<k;l++)g[l].nodeName===a&&(d=g[l].nodeValue);return d};mt.d.Sa=function(b){var a="document";b.tagName!==r&&(a=b.tagName);return a.toLowerCase()};mt.d.bb=function(b){var a="";b.textContent?a=f.trim(b.textContent):b.innerText&&(a=f.trim(b.innerText));a&&(a=a.replace(/\s+/g," ").substring(0,255));return a};mt.d.Wb=function(b,e){var d;f.$(b)&&0===String(b).indexOf("!HMCQ!")?(d=
String(b),d=a.f(document.location.href,d.substring(6,d.length))):f.$(b)||(d=mt.d.Sa(b),"input"===d&&e&&("button"===b.type||"submit"===b.type)?d=f.trim(b.value)||"":"input"===d&&!e&&"password"!==b.type?d=f.trim(b.value)||"":"img"===d?(d=mt.d.getAttribute,d=d(b,"alt")||d(b,"title")||d(b,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.d.bb(b));return String(d||"").substring(0,255)};(function(){(mt.d.bc=function(){function a(){if(!a.L){a.L=s;for(var e=0,d=g.length;e<d;e++)g[e]()}}
function e(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(e,1);return}a()}var d=v,g=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,v);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!d)if(d=s,"complete"===document.readyState)a.L=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",k,v),window.addEventListener("load",
a,v);else if(document.attachEvent){document.attachEvent("onreadystatechange",k);window.attachEvent("onload",a);var g=v;try{g=window.frameElement==u}catch(f){}document.documentElement.doScroll&&g&&e()}})();return function(e){a.L?e():g.push(e)}}()).L=v})();return mt.d})();mt.event={};mt.event.c=function(f,a,b){f.attachEvent?f.attachEvent("on"+a,function(a){b.call(f,a)}):f.addEventListener&&f.addEventListener(a,b,v)};
(function(){var f=mt.event;mt.e={};mt.e.ob=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.e.cookieEnabled=navigator.cookieEnabled;mt.e.javaEnabled=navigator.javaEnabled();mt.e.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.e.Cb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.e.colorDepth=window.screen.colorDepth||0;mt.e.$a=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&
a.body.scrollTop||0,10)};mt.e.cb=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.e.X=function(){return mt.e.$a()+mt.e.cb()};mt.e.ua=0;mt.e.eb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.e.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==
r)&&(a=screen.orientation.angle);mt.e.orientation=a;mt.e.ua=mt.e.eb()}a();f.c(window,"orientationchange",a)})();return mt.e})();mt.z={};mt.z.parse=function(f){return(new Function("return ("+f+")"))()};
mt.z.stringify=function(){function f(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=b[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var b={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(b){switch(typeof b){case "undefined":return"undefined";case "number":return isFinite(b)?String(b):"null";case "string":return f(b);case "boolean":return String(b);
default:if(b===u)return"null";if(b instanceof Array){var d=["["],g=b.length,k,l,q;for(l=0;l<g;l++)switch(q=b[l],typeof q){case "undefined":case "function":case "unknown":break;default:k&&d.push(","),d.push(mt.z.stringify(q)),k=1}d.push("]");return d.join("")}if(b instanceof Date)return'"'+b.getFullYear()+"-"+a(b.getMonth()+1)+"-"+a(b.getDate())+"T"+a(b.getHours())+":"+a(b.getMinutes())+":"+a(b.getSeconds())+'"';k=["{"];l=mt.z.stringify;for(g in b)if(Object.prototype.hasOwnProperty.call(b,g))switch(q=
b[g],typeof q){case "undefined":case "unknown":case "function":break;default:d&&k.push(","),d=1,k.push(l(g)+":"+l(q))}k.push("}");return k.join("")}}}();mt.localStorage={};mt.localStorage.R=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(f){return v}return s};
mt.localStorage.set=function(f,a,b){var e=new Date;e.setTime(e.getTime()+(b||31536E6));try{window.localStorage?(a=e.getTime()+"|"+a,window.localStorage.setItem(f,a)):mt.localStorage.R()&&(mt.localStorage.h.expires=e.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(f,a),mt.localStorage.h.save(document.location.hostname))}catch(d){}};
mt.localStorage.get=function(f){if(window.localStorage){if(f=window.localStorage.getItem(f)){var a=f.indexOf("|"),b=f.substring(0,a)-0;if(b&&b>(new Date).getTime())return f.substring(a+1)}}else if(mt.localStorage.R())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(f)}catch(e){}return u};
mt.localStorage.remove=function(f){if(window.localStorage)window.localStorage.removeItem(f);else if(mt.localStorage.R())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(f),mt.localStorage.h.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(f,a){try{window.sessionStorage&&window.sessionStorage.setItem(f,a)}catch(b){}};
mt.sessionStorage.get=function(f){try{return window.sessionStorage?window.sessionStorage.getItem(f):u}catch(a){return u}};mt.sessionStorage.remove=function(f){try{window.sessionStorage&&window.sessionStorage.removeItem(f)}catch(a){}};
(function(){var f=mt.z;mt.B={};mt.B.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=function(){e.onload=u;e=window[d]=u;b&&b(a)};e.src=a};mt.B.get=function(a,b){return mt.B.ya({url:a,method:"GET",data:b.data,timeout:b.timeout,noCache:s,success:b.success,fail:b.fail})};mt.B.ya=function(a){function b(b){var p=a[b];if(p)if(t&&clearTimeout(t),"success"!==b)p&&p(n);else{var d;try{d=f.parse(n.responseText)}catch(e){p&&p(n);return}p&&
p(n,d)}}a=a||{};var e=function(a){var b=[],p;for(p in a)a.hasOwnProperty(p)&&b.push(encodeURIComponent(p)+"="+encodeURIComponent(a[p]));return b.join("&")}(a.data||{}),d=a.url,g=(a.method||"GET").toUpperCase(),k=a.headers||{},l=a.timeout||0,q=a.noCache||v,n,t;try{a:if(window.XMLHttpRequest)n=new XMLHttpRequest;else{try{n=new ActiveXObject("Microsoft.XMLHTTP");break a}catch(m){}n=r}"GET"===g&&(e&&(d+=(0<=d.indexOf("?")?"&":"?")+e,e=u),q&&(d+=(0<=d.indexOf("?")?"&":"?")+"b"+ +new Date+"=1"));n.open(g,
d,s);n.onreadystatechange=function(){if(4===n.readyState){var a=0;try{a=n.status}catch(p){b("fail");return}200<=a&&300>a||304===a||1223===a?b("success"):b("fail")}};for(var p in k)k.hasOwnProperty(p)&&n.setRequestHeader(p,k[p]);l&&(t=setTimeout(function(){n.onreadystatechange=function(){};n.abort();b("fail")},l));n.send(e)}catch(w){b("fail")}return n};return mt.B})();
h.s={mb:"http://tongji.baidu.com/hm-web/welcome/ico",ba:"hm.baidu.com/hm.gif",za:/^(tongji|hmcdn).baidu.com$/,Ib:"tongji.baidu.com",jb:"hmmd",kb:"hmpl",Lb:"utm_medium",ib:"hmkw",Nb:"utm_term",gb:"hmci",Kb:"utm_content",lb:"hmsr",Mb:"utm_source",hb:"hmcu",Jb:"utm_campaign",ma:0,C:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",M:"https:",Fa:6E5,dc:5E3,Ga:5,ea:1024,H:2147483647,ta:"hca cc cf ci ck cl cm cp cu cw ds vl ep et ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
ia:s,Rb:{id:"data-hm-id",Vb:"data-hm-class",kc:"data-hm-xpath",content:"data-hm-content",ic:"data-hm-tag",link:"data-hm-link"},Tb:"data-hm-enabled",Sb:"data-hm-disabled",zb:"https://hmcdn.baidu.com/static/tongji/plugins/",pa:["UrlChangeTracker"],Pb:{ac:0,jc:1,Zb:2}};(function(){var f={w:{},c:function(a,b){this.w[a]=this.w[a]||[];this.w[a].push(b)},l:function(a,b){this.w[a]=this.w[a]||[];for(var e=this.w[a].length,d=0;d<e;d++)this.w[a][d](b)}};return h.t=f})();
(function(){var f=mt.lang,a=/^https?:\/\//,b={Qa:function(a){var b;try{b=JSON.parse(decodeURIComponent(a[0]))}catch(g){}return b},na:function(a,d){return b.oa(h.b&&h.b.a&&h.b.a.u,a,d)||b.oa(document.location.href,a,d)},oa:function(b,d,g){if(b===r)return v;a.test(d)||(b=b.replace(a,""));d=d.replace(/\/$/,"");b=b.replace(/\/$/,"");g&&(b=b.replace(/^(https?:\/\/)?www\./,"$1"));return RegExp("^"+d.replace(/[?.+^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*")+"$").test(b)},I:function(a,d){var g=b.Qa(a);if(!f.j(g,
"Undefined")){if(f.isArray(g)){for(var k=0;k<g.length;k++)if(b.na(g[k],d))return s;return v}if(f.K(g)){var k=[],l;for(l in g)g.hasOwnProperty(l)&&b.na(l,d)&&(k=k.concat(g[l]));return k}}}};return h.T=b})();
(function(){function f(b,e){var d=document.createElement("script");d.charset="utf-8";a.k(e)&&(d.readyState?d.onreadystatechange=function(){if("loaded"===d.readyState||"complete"===d.readyState)d.onreadystatechange=u,e()}:d.onload=function(){e()});d.src=b;var g=document.getElementsByTagName("script")[0];g.parentNode.insertBefore(d,g)}var a=mt.lang;return h.load=f})();
(function(){var f=h.s,a={F:function(){if(""!==c.icon){var a=c.icon.split("|"),e=f.mb+"?s="+c.id,d="https://hmcdn.baidu.com/static"+a[0]+".gif";document.write("swf"===a[1]||"gif"===a[1]?'<a href="'+e+'" target="_blank"><img border="0" src="'+d+'" width="'+a[2]+'" height="'+a[3]+'"></a>':'<a href="'+e+'" target="_blank">'+a[0]+"</a>")}}};h.t.c("pv-b",a.F);return a})();
(function(){var f=mt.url,a=mt.cookie,b=mt.localStorage,e=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||e.get(d)||b.get(d)}catch(f){}},setData:function(g,f,l){try{a.set(g,f,{domain:d.J(),path:d.V(),D:l}),l?b.set(g,f,l):e.set(g,f)}catch(q){}},removeData:function(g){try{a.set(g,"",{domain:d.J(),path:d.V(),D:-1}),e.remove(g),b.remove(g)}catch(f){}},J:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(f.sb(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");
return a},V:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&f.rb(d))return d.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.S=d})();
(function(){var f=mt.lang,a=mt.d,b=h.T,e={Ja:function(d,f){return function(k){var l=k.target||k.srcElement;if(l){var q=b.I(f)||[],n=l.getAttribute(d.Q);k=k.clientX+":"+k.clientY;if(n&&n===k)l.removeAttribute(d.Q);else if(0<q.length&&(l=a.Ya(l))&&l.length)if(q=l.length,n=l[l.length-1],1E4>q*n.split(">").length)for(n=0;n<q;n++)e.sa(d,l[n]);else e.sa(d,n)}}},sa:function(a,b){for(var e={},l=String(b).split(">").length,q=0;q<l;q++)e[b]="",b=b.substring(0,b.lastIndexOf(">"));a&&(f.K(a)&&a.da)&&a.da(e)},
Bb:function(a,b){return function(e){(e.target||e.srcElement).setAttribute(a.Q,e.clientX+":"+e.clientY);a&&a.O&&(b?a.O(b):a.O("#"+encodeURIComponent(this.id),e.type))}}};return h.Ka=e})();
(function(){var f=mt.d,a=mt.event,b=h.T,e=h.Ka,d={Q:"HM_fix",wa:function(){a.c(document,"click",e.Ja(d,c.etrk));for(var g=b.I(c.etrk)||[],k=0;k<g.length;k++){var l=g[k];-1===l.indexOf(">")&&(0===l.indexOf("#")&&(l=l.substring(1)),(l=f.Na(l))&&a.c(l,"click",e.Bb(d)))}},da:function(a){for(var e=b.I(c.etrk)||[],f=0;f<e.length;f++){var q=e[f];a.hasOwnProperty(q)&&d.O(q)}},O:function(a,b){h.b.a.et=1;h.b.a.ep="{id:"+a+",eventType:"+(b||"click")+"}";h.b.n()}};h.t.c("pv-b",d.wa);return d})();
(function(){var f=mt.d,a=mt.lang,b=mt.event,e=mt.e,d=h.s,g=h.T,k=[],l={va:function(){c.ctrk&&0<c.ctrk.length&&(b.c(document,"mouseup",l.Ea()),b.c(window,"unload",function(){l.N()}),setInterval(function(){l.N()},d.Fa))},Ea:function(){return function(a){if(g.I(c.ctrk,s)&&(a=l.Pa(a),""!==a)){var b=(d.M+"//"+d.ba+"?"+h.b.ra().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(d.H+"").length>d.ea||(b+encodeURIComponent(k.join("!")+(k.length?"!":"")).length+(d.H+"").length>d.ea&&l.N(),k.push(a),
(k.length>=d.Ga||/\*a\*/.test(a))&&l.N())}}},Pa:function(b){var d=b.target||b.srcElement,g,m;e.ob?(m=Math.max(document.documentElement.scrollTop,document.body.scrollTop),g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),g=b.clientX+g,m=b.clientY+m):(g=b.pageX,m=b.pageY);b=l.Va(b,d,g,m);var p=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:g-=p/2;break;case 2:g-=p}p=[];p.push(g);p.push(m);p.push(b.wb);p.push(b.xb);p.push(b.Ab);
p.push(a.g(b.yb));p.push(b.Ob);p.push(b.fb);(d="a"===(d.tagName||"").toLowerCase()?d:f.Oa(d))?(p.push("a"),p.push(a.g(encodeURIComponent(d.href)))):p.push("b");return p.join("*")},Va:function(b,d,g,l){b=f.Za(d);var p=0,k=0,y=0,x=0;if(d&&(p=d.offsetWidth||d.clientWidth,k=d.offsetHeight||d.clientHeight,x=f.Wa(d),y=x.left,x=x.top,a.k(d.getBBox)&&(k=d.getBBox(),p=k.width,k=k.height),"html"===(d.tagName||"").toLowerCase()))p=Math.max(p,d.clientWidth),k=Math.max(k,d.clientHeight);return{wb:Math.round(100*
((g-y)/p)),xb:Math.round(100*((l-x)/k)),Ab:e.orientation,yb:b,Ob:p,fb:k}},N:function(){0!==k.length&&(h.b.a.et=2,h.b.a.ep=k.join("!"),h.b.n(),k=[])}};h.t.c("pv-b",l.va);return l})();
(function(){function f(){return function(){h.b.a.et=3;h.b.a.ep=h.U.Xa()+","+h.U.Ta();h.b.a.hca=c.hca;h.b.n()}}function a(){clearTimeout(C);var b;y&&(b="visible"==document[y]);x&&(b=!document[x]);l="undefined"==typeof b?s:b;if((!k||!q)&&l&&n)w=s,m=+new Date;else if(k&&q&&(!l||!n))w=v,p+=+new Date-m;k=l;q=n;C=setTimeout(a,100)}function b(a){var b=document,p="";if(a in b)p=a;else for(var d=["webkit","ms","moz","o"],e=0;e<d.length;e++){var f=d[e]+a.charAt(0).toUpperCase()+a.slice(1);if(f in b){p=f;break}}return p}
function e(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))n="focus"==b.type||"focusin"==b.type?s:v,a()}var d=mt.event,g=h.t,k=s,l=s,q=s,n=s,t=+new Date,m=t,p=0,w=s,y=b("visibilityState"),x=b("hidden"),C;a();(function(){var b=y.replace(/[vV]isibilityState/,"visibilitychange");d.c(document,b,a);d.c(window,"pageshow",a);d.c(window,"pagehide",a);"object"==typeof document.onfocusin?(d.c(document,"focusin",e),d.c(document,"focusout",e)):(d.c(window,"focus",e),d.c(window,"blur",
e))})();h.U={Xa:function(){return+new Date-t},Ta:function(){return w?+new Date-m+p:p}};g.c("pv-b",function(){d.c(window,"unload",f())});g.c("duration-send",f());g.c("duration-done",function(){m=t=+new Date;p=0});return h.U})();
(function(){var f=mt.lang,a=h.s,b=h.load,e=h.S,d={nb:function(d){if((window._dxt===r||f.j(window._dxt,"Array"))&&"undefined"!==typeof h.b){var k=e.J();b([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(k)].join(""),d)}},Hb:function(a){if(f.j(a,"String")||f.j(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ha=d})();
(function(){function f(a,b,d,e){if(!(a===r||b===r||e===r)){if(""===a)return[b,d,e].join("*");a=String(a).split("!");for(var f,g=v,k=0;k<a.length;k++)if(f=a[k].split("*"),String(b)===f[0]){f[1]=d;f[2]=e;a[k]=f.join("*");g=s;break}g||a.push([b,d,e].join("*"));return a.join("!")}}function a(b){for(var d in b)if({}.hasOwnProperty.call(b,d)){var f=b[d];e.K(f)||e.isArray(f)?a(f):b[d]=String(f)}}var b=mt.url,e=mt.lang,d=mt.z,g=mt.e,k=h.s,l=h.t,q=h.Ha,n=h.load,t=h.S,m={G:[],P:0,Z:v,o:{ca:"",page:""},F:function(){m.i=
0;l.c("pv-b",function(){m.Ia();m.La()});l.c("pv-d",function(){m.Ma();m.o.page=""});l.c("stag-b",function(){h.b.a.api=m.i||m.P?m.i+"_"+m.P:"";h.b.a.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),m.o.ca,m.o.page].join("!")});l.c("stag-d",function(){h.b.a.api=0;m.i=0;m.P=0})},Ia:function(){var a=window._hmt||[];if(!a||e.j(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var d=arguments[b];e.j(d,"Array")&&(a.cmd[a.id].push(d),"_setAccount"===
d[0]&&(1<d.length&&/^[0-9a-f]{31,32}$/.test(d[1]))&&(d=d[1],a.id=d,a.cmd[d]=a.cmd[d]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},La:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|Order)$/,e=0,f=b.length;e<f;e++){var g=b[e];d.test(g[0])?m.G.push(g):m.aa(g)}a.cmd[c.id]={push:m.aa}},Ma:function(){if(0<m.G.length)for(var a=0,b=m.G.length;a<b;a++)m.aa(m.G[a]);m.G=u},aa:function(a){var b=a[0];if(m.hasOwnProperty(b)&&e.k(m[b]))m[b](a)},
_setAccount:function(a){1<a.length&&/^[0-9a-f]{31,32}$/.test(a[1])&&(m.i|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],v===a||s===a))m.i|=2,h.b.ka=a},_trackPageview:function(a){1<a.length&&(a[1].charAt&&"/"===a[1].charAt(0))&&(m.i|=4,h.b.a.sn=h.b.ga(),h.b.a.et=0,h.b.a.ep="",h.b.a.vl=g.X(),m.Z||(h.b.a.su=h.b.a.u||document.location.href),h.b.a.u=k.protocol+"//"+document.location.host+a[1],h.b.n(),h.b.ub=+new Date)},_trackEvent:function(a){2<a.length&&(m.i|=8,h.b.a.et=4,h.b.a.ep=e.g(a[1])+
"*"+e.g(a[2])+(a[3]?"*"+e.g(a[3]):"")+(a[4]?"*"+e.g(a[4]):""),h.b.n())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){m.P++;for(var f=(h.b.a.cv||"*").split("!"),g=f.length;g<b-1;g++)f.push("*");f[b-1]=d+"*"+e.g(a[2])+"*"+e.g(a[3]);h.b.a.cv=f.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var b=
e.g(a[1]);a=e.g(a[2]);if(b!==r&&a!==r){var d=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),d=f(d,b,1,a);t.setData("Hm_ct_"+c.id,encodeURIComponent(d),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var b=e.g(a[1]);a=e.g(a[2]);if(b!==r&&a!==r){var d=m.o.ca,d=f(d,b,2,a);m.o.ca=d}}},_setPageTag:function(a){if(!(3>a.length)){var b=e.g(a[1]);a=e.g(a[2]);if(b!==r&&a!==r){var d=m.o.page,d=f(d,b,3,a);m.o.page=d}}},_setReferrerOverride:function(a){1<a.length&&(a=a[1],e.j(a,"String")?(h.b.a.su="/"===
a.charAt(0)?k.protocol+"//"+window.location.host+a:a,m.Z=s):m.Z=v)},_trackOrder:function(b){b=b[1];e.K(b)&&(a(b),m.i|=16,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.n())},_setDataxId:function(a){a=a[1];q.nb();q.Hb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],v===a||s===a))h.b.la=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.b.a.et=3,h.b.a.ep=a,h.b.n())):l.l("duration-send");l.l("duration-done")},_require:function(a){1<a.length&&(a=a[1],k.za.test(b.W(a))&&
n(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1];a=a[2];if(e.Y(k.pa,d)&&e.k(a)&&(b.plugins=b.plugins||{},b.A=b.A||{},b.plugins[d]=a,b.m=b.m||[],a=b.m.slice(),d&&a.length&&a[0][1]===d))for(var f=0,g=a.length;f<g;f++){var l=a[f][2]||{};if(b.plugins[d]&&!b.A[d])b.A[d]=new b.plugins[d](l),b.m.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],f=a[2]||{};if(e.Y(k.pa,d))if(b.plugins=b.plugins||{},b.A=b.A||{},b.plugins[d]&&!b.A[d])b.A[d]=new b.plugins[d](f);
else{b.m=b.m||[];for(var f=0,g=b.m.length;f<g;f++)if(b.m[f][1]===d)return;b.m.push(a);m._require([u,k.zb+d+".js"])}}}};m.F();h.Aa=m;return h.Aa})();(function(){var f=h.t;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),f.c("pv-b",function(){""!==window.location.hash&&(h.b.a.u=window.location.href)}))})();
(function(){function f(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.qb=this.la=this.ka=s,this.ia=m.ia,this.Ub=e.$(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.F())}var a=mt.url,b=mt.B,e=mt.lang,d=mt.cookie,g=mt.e,k=mt.sessionStorage,l=mt.z,q=mt.event,n=h.S,t=mt.localStorage,m=h.s,p=h.load,w=h.t;f.prototype={Fb:function(){var a,b,e,f;m.ma=n.getData("Hm_lpvt_"+c.id)||0;if(f=n.getData("Hm_lvt_"+c.id)){for(b=f.split(",");2592E3<m.C-b[0];)b.shift();
e=4>b.length?2:3;for(m.C-m.ma>c.vdur&&b.push(m.C);4<b.length;)b.shift();f=b.join(",");b=b[b.length-1]}else f=m.C,b="",e=1;this.pb()?(n.setData("Hm_lvt_"+c.id,f,c.age),n.setData("Hm_lpvt_"+c.id,m.C),a=d.tb(n.J(),n.V())):this.fa();this.a.cc=a;this.a.lt=b;this.a.lv=e},pb:function(){var b=a.W(document.location.href);return!e.Y("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),b)},Ca:function(){var a="Hm_clear_cookie_"+
c.id,b=t.get(a)||0;c.fc&&Number(c.fc)>Number(b)&&(this.fa(),t.set(a,c.fc))},fa:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&n.removeData(e.trim(d[0]));d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&n.removeData(e.trim(d[0]))}},ra:function(){for(var a=[],b=this.a.et,d=0,e=m.ta.length;d<e;d++){var f=m.ta[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||
"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}return a.join("&")},Gb:function(){this.Fb();this.a.si=c.id;this.a.sn=this.ga();this.a.su=document.referrer;this.a.ds=g.Cb;this.a.cl=g.colorDepth+"-bit";this.a.ln=String(g.language).toLowerCase();this.a.ja=g.javaEnabled?1:0;this.a.ck=g.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.v="1.2.96";this.a.cv=decodeURIComponent(n.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=g.X();var b=document.location.href;this.a.cm=
a.f(b,m.jb)||"";this.a.cp=a.f(b,m.kb)||a.f(b,m.Lb)||"";this.a.cw=a.f(b,m.ib)||a.f(b,m.Nb)||"";this.a.ci=a.f(b,m.gb)||a.f(b,m.Kb)||"";this.a.cf=a.f(b,m.lb)||a.f(b,m.Mb)||"";this.a.cu=a.f(b,m.hb)||a.f(b,m.Jb)||"";/https?:/.test(document.location.protocol)&&(this.a.u=b)},F:function(){try{this.Ca(),this.Gb(),this.Eb(),h.b=this,this.Ba(),this.vb(),w.l("pv-b"),this.qb&&this.Db()}catch(a){var d=[];d.push("si="+c.id);d.push("n="+encodeURIComponent(a.name));d.push("m="+encodeURIComponent(a.message));d.push("r="+
encodeURIComponent(document.referrer));b.log(m.M+"//"+m.ba+"?"+d.join("&"))}},Db:function(){function a(){w.l("pv-d")}this.ka?(this.a.et=0,this.a.ep="",w.l("setPageviewProp"),this.a.vl=g.X(),this.n(a),this.a.p=""):a();this.ub=+new Date;w.l("clearPageviewProp")},n:function(a){if(this.la){var d=this;d.a.rnd=Math.round(Math.random()*m.H);d.a.r=g.orientation;d.a.ww=g.ua;w.l("stag-b");var f=m.M+"//"+m.ba+"?"+d.ra();w.l("stag-d");d.xa(f);b.log(f,function(b){d.qa(b);e.k(a)&&a.call(d)})}},Ba:function(){try{if(window.postMessage&&
window.self!==window.parent){var b=this;q.c(window,"message",function(d){if(a.W(d.origin)===m.Ib){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$|^pageclick$|^select$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)b.a.rnd=Math.round(Math.random()*m.H),p(m.protocol+"//"+c.js+e+".js?"+b.a.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}}catch(d){}},vb:function(){try{if(window.self===window.parent){var b=document.location.href,d=a.f(b,"baidu-analytics-token"),
e=a.f(b,"baidu-analytics-jn");/^[a-f0-9]{32}\/?$/.test(d)&&/^(overlay|vabtest)\/?$/.test(e)&&p(m.protocol+"//"+c.js+e+".js?"+Math.round(Math.random()*m.H))}}catch(f){}},xa:function(a){var b;try{b=l.parse(k.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.a.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);k.set("Hm_unsent_"+c.id,l.stringify(b))},qa:function(a){var b;try{b=l.parse(k.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,
"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?k.set("Hm_unsent_"+c.id,l.stringify(b)):this.Da()}},Da:function(){k.remove("Hm_unsent_"+c.id)},Eb:function(){var a=this,d;try{d=l.parse(k.get("Hm_unsent_"+c.id)||"[]")}catch(e){d=[]}if(d.length)for(var f=function(d){b.log(m.M+"//"+d,function(b){a.qa(b)})},g=0;g<d.length;g++)f(d[g])},ga:function(){return Math.round(+new Date/1E3)%65535}};return new f})();var z=h.s,A=h.load;
if(c.apps){var B=[z.protocol,"//ers.baidu.com/app/s.js?"];B.push(c.apps);A(B.join(""))}var D=h.s,E=h.load;c.pt&&E([D.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var F=h.load;if(c.qiao){for(var G=["https://goutong.baidu.com/site/"],H=c.id,I=5381,J=H.length,K=0;K<J;K++)I=(33*I+Number(H.charCodeAt(K)))%4294967296;2147483648<I&&(I-=2147483648);G.push(I%1E3+"/");G.push(c.id+"/b.js");G.push("?siteId="+c.qiao);F(G.join(""))};})();
