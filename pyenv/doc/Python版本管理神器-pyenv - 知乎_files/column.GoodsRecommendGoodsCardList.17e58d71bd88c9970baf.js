(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1894:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var n=a(17),c=a.n(n),o=a(1),i=a.n(o),r=a(139),s=a.n(r),l=a(6),d=a.n(l),u=a(33),g=a.n(u),b=a(3);var m=function(e){var t=e.width,a=void 0===t?"10":t,n=e.height,c=void 0===n?"10":n;return Object(b.g)("svg",g()({width:a,height:c,viewBox:"0 0 10 10",fill:"none"},e),Object(b.g)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0ZM5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1ZM5 2C5.27614 2 5.5 2.22386 5.5 2.5V4.21902C5.5 4.54533 5.65921 4.85112 5.92654 5.03825L7.37712 6.05365C7.60334 6.21201 7.65836 6.52378 7.5 6.75C7.34164 6.97622 7.02988 7.03124 6.80365 6.87288L4.92654 5.5589C4.65921 5.37178 4.5 5.06599 4.5 4.73967V2.5C4.5 2.22386 4.72386 2 5 2Z",fill:"white"}))},v=a(377);function O(e,t,a){if(t&&!Array.isArray(t)&&"number"==typeof t.length){var n=t.length;return function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}(t,void 0!==a&&a<n?a:n)}return e(t,a)}var f="GoodsItemCardPromo",j=function(e){var t=e.countdown,a=Object(o.useState)(t),n=O(c.a,a,2),r=n[0],s=n[1],l=Object(o.useRef)();Object(o.useEffect)((function(){return r<=0?(clearInterval(l.current),void s(0)):(l.current=setInterval((function(){s(r-1)}),1e3),function(){return clearInterval(l.current)})}),[r]);var d=Object(v.b)(r),u=d.d,g=d.h,j=d.m,p=d.s,h="".concat(u?u+"天":""," ").concat(g,":").concat(j,":").concat(p);return Object(b.g)("div",{className:f},Object(b.g)("div",{className:"".concat(f,"-left")},Object(b.g)(m,{className:"".concat(f,"-icon")}),Object(b.g)("span",null,"限时秒杀")),Object(b.g)("div",{className:"".concat(f,"-right")},r?Object(b.g)(i.a.Fragment,null,Object(b.g)("span",null,"距结束还剩 "),Object(b.g)("span",{className:"".concat(f,"-rightText")},h)):Object(b.g)("span",null,"活动已结束")))};var p=a(2),h=a.n(p),C=a(19),y=a(944),k=a(448),N=a(18),w=function(e){var t=e.className,a=e.style,n=e.id,c=e.skuId,i=e.imgUrl,r=e.title,s=e.price,l=void 0===s?0:s,u=e.source,g=e.productType,m=e.subtitle,v=e.tags,O=void 0===v?[]:v,f=e.promoInfo,p=void 0===f?{}:f,h=e.showBottomLine,w=void 0!==h&&h,I=e.zaData,S=void 0===I?{}:I,L=e.promoType,G=e.onClick,T=Number((null==p?void 0:p.countdown)||0)>0,F=T&&"tag"===L,R=T&&"tag"!==L;Object(o.useEffect)((function(){(null==S?void 0:S.showId)&&C.a.trackCardShow(null,{id:null==S?void 0:S.showId,path:[{module_name:"".concat(n,"_").concat(c,"_").concat(u,"_").concat(g)}]})}),[]);return Object(b.g)("div",{className:d()("GoodsItemCard",{"GoodsItemCard-promo":R},t),style:a,onClick:function(){(null==S?void 0:S.clickId)&&C.a.trackEvent(null,{id:null==S?void 0:S.clickId,action:"OpenUrl",path:[{module_name:"".concat(n,"_").concat(c,"_").concat(u,"_").concat(g)}]}),"function"==typeof G&&G()}},R&&Object(b.g)(j,{countdown:(null==p?void 0:p.countdown)||0}),Object(b.g)("div",{className:"GoodsItemCard-main"},Object(b.g)("div",{className:"GoodsItemCard-left"},Object(b.g)("div",{className:"GoodsItemCard-imgLayer"}),Object(b.g)("img",{className:"GoodsItemCard-imgUrl",src:i,alt:""})),Object(b.g)("div",{className:"GoodsItemCard-right"},Object(b.g)("div",{className:"GoodsItemCard-title"},r),Object(b.g)(k.a,{className:"GoodsItemCard-tags",isPromo:T,promoTagShow:F,countdown:(null==p?void 0:p.countdown)||0,tags:Object(N.camelizeKeys)(O||[])}),Object(b.g)("div",{className:"GoodsItemCard-footer"},Object(b.g)("div",{className:"GoodsItemCard-priceBox"},Object(b.g)("span",{className:"GoodsItemCard-price"},"¥".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.trimZero,n=void 0!==a&&a,c=String(e).padStart(2,"0").slice(-2);return n&&"00"===c?"".concat(Math.floor(e/100)):"".concat(Math.floor(e/100),".").concat(c)}(l)))),Object(b.g)("div",{className:"GoodsItemCard-source"},m,Object(b.g)(y.a,{size:20,center:!0})))),Object(b.g)("div",{className:"GoodsItemCard-bottomLine",style:{display:w?"block":"none"}})))};w.prototype={className:h.a.string,style:h.a.object,id:h.a.string,skuId:h.a.string,promoType:h.a.string,imgUrl:h.a.string.isRequired,title:h.a.string.isRequired,subtitle:h.a.string,price:h.a.number,source:h.a.string.isRequired,showBottomLine:h.a.bool,tags:h.a.array,zaData:h.a.object,promoInfo:h.a.object,onClick:h.a.func};var I=w;var S=function(){return Object(b.g)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(b.g)("circle",{opacity:"0.45",cx:"10.5",cy:"9.5",r:"9",stroke:"#444444"}),Object(b.g)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0902 5.40973L7.19188 8.30802C6.93425 8.56261 6.93422 8.96569 7.20772 9.23616C7.43803 9.46345 7.84338 9.54449 8.13586 9.25201L9.86195 7.52591C9.85274 9.20642 9.86308 12.9266 9.86308 12.9266C9.863 14.0797 11.2306 14.0789 11.2261 12.9257C11.2239 11.9915 11.2234 8.8631 11.2265 7.52354L12.9433 9.24029C13.1948 9.48879 13.6017 9.488 13.8699 9.2228C14.1055 8.99018 14.1056 8.5871 13.8874 8.29617L11.0009 5.40967C10.7494 5.15965 10.3425 5.16044 10.0902 5.40973V5.40973Z",fill:"#444444"}))},L=a(886),G=a(34),T=a.n(G),F=function(){return Object(b.g)(i.a.Fragment,null)},R={SkeletonH01:function(e){var t=e.lineClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}))},SkeletonP01:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:a}),Object(b.g)("div",null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonT01:function(e){var t=e.lineClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}))},SkeletonT02:function(e){var t=e.lineClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}))},SkeletonC01:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:a}),Object(b.g)("div",null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonC02:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})),Object(b.g)("div",{className:a}))},SkeletonC03:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:a}),Object(b.g)("div",{style:{width:"100%"}},Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonC04:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:"".concat(a,"-1")}),Object(b.g)("div",{className:a}),Object(b.g)("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonI01:function(e){var t=e.blockClass;return Object(b.g)(i.a.Fragment,null,Object(b.g)("div",{className:t}))},SkeletonSpacing:F,SkeletonFill:F},_=i.a.memo((function(e){var t,a=e.variant,n=void 0===a?"H01":a,c=e.height,o=e.width,i=void 0===o?"auto":o,r=e.animation,s=void 0===r?"ease-in":r,l="skeleton__line--".concat(n.toLowerCase()),u="skeleton--".concat(n.toLowerCase()),g=d()(T()({skeleton__block:!0},"skeleton__block--".concat(n.toLowerCase()),!0)),m=d()(T()({skeleton__line:!0},l,!0)),v=d()((t={skeleton:!0},T()(t,u,!0),T()(t,"skeleton--ease-in","ease-in"===s),t)),O={width:i};c&&["Spacing","Fill"].includes(n)&&(O.height="number"==typeof c?"".concat(c,"px"):c);var f=R["Skeleton".concat(n)];return Object(b.g)("section",{className:v,style:O},Object(b.g)(f,{variant:n,lineClass:m,blockClass:g}))}));_.propTypes={variant:h.a.string,height:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.oneOfType([h.a.string,h.a.number]),animation:h.a.oneOfType([h.a.bool,h.a.string])};var z=_;function D(e,t,a){if(t&&!Array.isArray(t)&&"number"==typeof t.length){var n=t.length;return function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}(t,void 0!==a&&a<n?a:n)}return e(t,a)}var A=i.a.memo((function(e){var t=e.content,a=function(e){return("string"==typeof e?e.split(","):e).map((function(e){var t=e.split("-"),a=D(c.a,t,2),n=a[0],o=a[1];return["Spacing","Fill"].includes(n)?{type:n,height:+o}:{type:n,count:+o||1}}))}(void 0===t?"T01":t);return Object(b.g)(i.a.Fragment,null,a.map((function(e,t){var a=e.type,n=e.count,c=e.height;return n?Array.from({length:n}).map((function(e,n){return Object(b.g)(z,{variant:a,key:"".concat(t,"-").concat(n)})})):Object(b.g)(z,{variant:a,height:c,key:"".concat(t,"-").concat(c)})})))}));A.prototype={content:Object(p.oneOfType)([Object(p.arrayOf)(p.string),p.string])};var B=A,M=a(9),x=a(880),E=a(376);function P(e,t,a){if(t&&!Array.isArray(t)&&"number"==typeof t.length){var n=t.length;return function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}(t,void 0!==a&&a<n?a:n)}return e(t,a)}var U={tabId:"",tabName:"",isGetDataDirect:!0,tabData:[]};var Z=function(e){var t=e.id,a=e.url,n=e.scenes,i=e.fetcherOptions,r=Object(o.useState)(0),s=P(c.a,r,2),l=s[0],d=s[1],u=Object(o.useState)(!1),g=P(c.a,u,2),b=g[0],m=g[1],v=Object(o.useState)([]),O=P(c.a,v,2),f=O[0],j=O[1],p=Object(o.useState)([]),h=P(c.a,p,2),C=h[0],y=h[1],k=Object(o.useState)([]),w=P(c.a,k,2),I=w[0],S=w[1],L=Object(o.useState)(!1),G=P(c.a,L,2),T=G[0],F=G[1],R=Object(o.useState)(U),_=P(c.a,R,2),z=_[0],D=_[1],A=Object(o.useState)(!1),B=P(c.a,A,2),M=B[0],x=B[1];Object(o.useEffect)((function(){m(!0);var e=a||"/api/v4/mcn/linkcard/".concat(t,"/goods?scenes=").concat(n);Object(E.a)(e,i).then((function(e){var t=Object(N.camelizeKeys)((null==e?void 0:e.data)||{}),a=t.goods,n=t.tabs,c=t.similarGoods,o=(null==n?void 0:n[0])||U;o.tabId&&Z(o),j(a||[]),y(c||[]),S(n||[]),F(!1)})).catch((function(){F(!0)})).finally((function(){setTimeout((function(){m(!1)}),500)}))}),[t,l]);var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D(Object.assign({},e)),e.isGetDataDirect||(x(!0),Object(E.a)(e.tabDataUrl).then((function(t){var a,n=Object(N.camelizeKeys)((null==t||null===(a=t.data)||void 0===a?void 0:a.goods)||[]);S((function(t){return t.map((function(t){return t.tabId===e.tabId?Object.assign({},t,{isGetDataDirect:!0,tabData:n||[]}):t}))})),D((function(e){return Object.assign({},e,{tabData:n||[],isGetDataDirect:!0})})),x(!1)})).catch((function(){return x(!1)})))};return{refresh:l,setRefresh:d,isFailure:T,sameList:f,similarList:C,activeTabMap:z,setActiveTabMap:D,loading:b,tabs:I,seckillLoading:M,setIsFailure:F,handleChangeTab:Z}};function K(e,t,a){if(t&&!Array.isArray(t)&&"number"==typeof t.length){var n=t.length;return function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}(t,void 0!==a&&a<n?a:n)}return e(t,a)}var q=function(e){var t=e.className,a=e.style,n=e.showModal,i=void 0===n||n,r=e.withModal,l=void 0===r||r,u=e.modalTitle,g=void 0===u?"":u,m=e.id,v=e.url,O=void 0===v?"":v,f=e.fetcherOptions,j=void 0===f?{}:f,p=e.scenes,h=void 0===p?0:p,y=e.onClose,k=Object(x.a)(),w=Z({url:O,id:m,fetcherOptions:j,scenes:h}),G=w.refresh,T=w.setRefresh,F=w.loading,R=w.sameList,_=w.similarList,z=w.tabs,D=w.isFailure,A=w.activeTabMap,E=w.handleChangeTab,P=w.seckillLoading,U=Object(o.useRef)(),q=Object(o.useRef)(),V=Object(o.useRef)(0),H=Object(o.useState)(!0),J=K(c.a,H,2),W=J[0],Q=J[1],X=s()((function(){var e=q.current.getClientRects()[0]||{top:0};e.top<V.current?Q(!0):Q(!1),setTimeout((function(){return V.current=e.top}))}),16);Object(o.useEffect)((function(){C.a.trackCardShow(null,{id:10331,path:[{module_name:m}]})}),[]),Object(o.useEffect)((function(){if(U.current=document.getElementsByClassName("ModalWindow-inner")[0],U.current&&q.current)return U.current.addEventListener("scroll",X),function(){return U.current.removeEventListener("scroll",X)}}),[X]);var Y=function(e,t){return(null==e?void 0:e.length)?Object(b.g)("div",{className:"PopupSelectList-list"},e.map((function(e){return(null==e?void 0:e.length)?e:[]})).map((function(e,a){return e.length?Object(b.g)(o.Fragment,{key:a},e.map((function(e,n){var c=e.id,i=e.goods,r=e.tags,s=e.promoInfo,l=e.attachedInfoBytes,u=i||{},g=u.skuId,m=u.title,v=u.subtitle,O=u.goodsImg,f=u.goodsUrl,j=u.price,p=u.source,C=u.productType,y=(j||{}).price,w=Number((null==s?void 0:s.countdown)||0)>0&&"tag"!==t;return Object(b.g)(o.Fragment,{key:"".concat(g,"-").concat(a,"-").concat(n)},1===a&&0===n&&Object(b.g)("div",{className:"PopupSelectList-similarTitle"},"相似商品"),Object(b.g)(M.b,{content:{type:"GoodsRecommend",id:String(g),token:String(c)},extra:{attachedInfoBytes:l,link:{url:null==f?void 0:f.url}}},Object(b.g)(M.f,{shouldTrackClick:!0,zaBlock:"goodsRecommend_polymericPopupCard",className:d()({"GoodsCardList-listItem":w}),zaType:"Card",zaAction:"OpenUrl",zaEventType:"Click"},Object(b.g)(I,{className:"GoodsPopupList-cardItem",id:c,skuId:g,title:m,imgUrl:null==O?void 0:O.imgUrl,price:y,source:p,subtitle:v,productType:C,showBottomLine:!1,zaData:{showId:10371,clickId:10372},tags:r,promoInfo:s,promoType:t,onClick:function(){return function(e){var t=Object(N.camelizeKeys)(e),a=t.id,n=t.goods||{},c=n.goodsUrl,o=n.source,i=c.url,r=c.iosSchema,s=c.androidSchema;k({id:a,url:i,source:o,scenes:h,appSchemaIos:r,appSchemaAndroid:s})}(e)}}))))}))):null}))):null},$=Object(b.g)(M.b,{content:{type:"GoodsRecommend",id:String(m),token:String(m)}},Object(b.g)(M.f,{zaBlock:"goodsRecommend_polymericPopupPage",zaType:"Page",as:"div",className:"GoodsCardList-container",ref:q},Object(b.g)("div",{className:"GoodsCardList-titleContainer"},Object(b.g)("div",{className:"GoodsCardList-title"},"当前商品购买渠道")),F&&!D?Object(b.g)(B,{content:"C03,Spacing-26,C03",height:72}):Y([R,_]),Boolean(null==z?void 0:z.length)&&Object(b.g)("div",{className:"GoodsCardList-tabs"},z.map((function(e){return Object(b.g)(M.f,{zaBlock:"goodsRecommend_tabButton",zaType:"Button",shouldTrackClick:!0,zaText:e.tabName,onClick:function(){return E(e)},className:d()("GoodsCardList-tab",{"GoodsCardList-tabAvtive":e.tabId===A.tabId}),key:e.tabId,content:{type:"GoodsRecommend",id:e.tabId}},e.tabName)}))),!D&&Object(b.g)("div",null,P?Object(b.g)("div",{style:{width:"100%"}},Object(b.g)(B,{content:"C03,Spacing-26,C03",height:72})):Y([A.tabData],"tag")),D&&Object(b.g)("div",{className:"GoodsCardList-error"},Object(b.g)("div",{className:"GoodsCardList-errorDesc"},"Oops~ 出错了"),Object(b.g)("div",{className:"GoodsCardList-errorBtn",onClick:function(){T(G+1)}},"刷新重试")),Object(b.g)("div",{className:d()("GoodsCardList-backContainer",{"GoodsCardList-backContainerShow":!W}),style:{display:(null==z?void 0:z.length)?"block":"none"},onClick:function(){U.current&&U.current.scrollTo({top:0,behavior:"smooth"})}},Object(b.g)("div",{className:"GoodsCardList-backContent"},Object(b.g)(S,null),Object(b.g)("span",{className:"GoodsCardList-backText"},"返回顶部购买商品")))));return l?Object(b.g)(L.a,{className:d()("GoodsCardList",t),style:a,size:"large",title:g,onClose:y},i&&$):$};q.prototype={className:h.a.string,style:h.a.object,showModal:h.a.bool,withModal:h.a.bool,modalTitle:h.a.string,id:h.a.string,url:h.a.string,fetcherOptions:h.a.object,scenes:h.a.number,onClose:h.a.func,onSelectCard:h.a.func};var V=q}}]);
//# sourceMappingURL=column.GoodsRecommendGoodsCardList.17e58d71bd88c9970baf.js.map