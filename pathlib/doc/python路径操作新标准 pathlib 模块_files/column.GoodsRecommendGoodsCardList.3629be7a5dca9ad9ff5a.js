(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1831:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(22),c=a.n(n),o=a(1),s=a.n(o),i=a(147),l=a.n(i),r=a(7),d=a.n(r),u=a(34),g=a.n(u),b=a(3);var m=function(e){var t=e.width,a=void 0===t?"10":t,n=e.height,c=void 0===n?"10":n;return Object(b.g)("svg",g()({width:a,height:c,viewBox:"0 0 10 10",fill:"none"},e),Object(b.g)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0ZM5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1ZM5 2C5.27614 2 5.5 2.22386 5.5 2.5V4.21902C5.5 4.54533 5.65921 4.85112 5.92654 5.03825L7.37712 6.05365C7.60334 6.21201 7.65836 6.52378 7.5 6.75C7.34164 6.97622 7.02988 7.03124 6.80365 6.87288L4.92654 5.5589C4.65921 5.37178 4.5 5.06599 4.5 4.73967V2.5C4.5 2.22386 4.72386 2 5 2Z",fill:"white"}))},v=a(366),O="GoodsItemCardPromo",j=function(e){var t=e.countdown,a=Object(o.useState)(t),n=c()(a,2),i=n[0],l=n[1],r=Object(o.useRef)();Object(o.useEffect)((function(){return i<=0?(clearInterval(r.current),void l(0)):(r.current=setInterval((function(){l(i-1)}),1e3),function(){return clearInterval(r.current)})}),[i]);var d=Object(v.b)(i),u=d.d,g=d.h,j=d.m,p=d.s,f="".concat(u?u+"天":""," ").concat(g,":").concat(j,":").concat(p);return Object(b.g)("div",{className:O},Object(b.g)("div",{className:"".concat(O,"-left")},Object(b.g)(m,{className:"".concat(O,"-icon")}),Object(b.g)("span",null,"限时秒杀")),Object(b.g)("div",{className:"".concat(O,"-right")},i?Object(b.g)(s.a.Fragment,null,Object(b.g)("span",null,"距结束还剩 "),Object(b.g)("span",{className:"".concat(O,"-rightText")},f)):Object(b.g)("span",null,"活动已结束")))};var p=a(2),f=a.n(p),C=a(17),h=a(895),k=a(430),N=a(19),y=function(e){var t=e.className,a=e.style,n=e.id,c=e.skuId,s=e.imgUrl,i=e.title,l=e.price,r=void 0===l?0:l,u=e.source,g=e.productType,m=e.subtitle,v=e.tags,O=void 0===v?[]:v,p=e.promoInfo,f=void 0===p?{}:p,y=e.showBottomLine,I=void 0!==y&&y,w=e.zaData,S=void 0===w?{}:w,L=e.promoType,G=e.onClick,T=Number((null==f?void 0:f.countdown)||0)>0,F=T&&"tag"===L,R=T&&"tag"!==L;Object(o.useEffect)((function(){(null==S?void 0:S.showId)&&C.a.trackCardShow(null,{id:null==S?void 0:S.showId,path:[{module_name:"".concat(n,"_").concat(c,"_").concat(u,"_").concat(g)}]})}),[]);return Object(b.g)("div",{className:d()("GoodsItemCard",{"GoodsItemCard-promo":R},t),style:a,onClick:function(){(null==S?void 0:S.clickId)&&C.a.trackEvent(null,{id:null==S?void 0:S.clickId,action:"OpenUrl",path:[{module_name:"".concat(n,"_").concat(c,"_").concat(u,"_").concat(g)}]}),"function"==typeof G&&G()}},R&&Object(b.g)(j,{countdown:(null==f?void 0:f.countdown)||0}),Object(b.g)("div",{className:"GoodsItemCard-main"},Object(b.g)("div",{className:"GoodsItemCard-left"},Object(b.g)("div",{className:"GoodsItemCard-imgLayer"}),Object(b.g)("img",{className:"GoodsItemCard-imgUrl",src:s,alt:""})),Object(b.g)("div",{className:"GoodsItemCard-right"},Object(b.g)("div",{className:"GoodsItemCard-title"},i),Object(b.g)(k.a,{className:"GoodsItemCard-tags",isPromo:T,promoTagShow:F,countdown:(null==f?void 0:f.countdown)||0,tags:Object(N.camelizeKeys)(O||[])}),Object(b.g)("div",{className:"GoodsItemCard-footer"},Object(b.g)("div",{className:"GoodsItemCard-priceBox"},Object(b.g)("span",{className:"GoodsItemCard-price"},"¥".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.trimZero,n=void 0!==a&&a,c=String(e).padStart(2,"0").slice(-2);return n&&"00"===c?"".concat(Math.floor(e/100)):"".concat(Math.floor(e/100),".").concat(c)}(r)))),Object(b.g)("div",{className:"GoodsItemCard-source"},m,Object(b.g)(h.a,{size:20,center:!0})))),Object(b.g)("div",{className:"GoodsItemCard-bottomLine",style:{display:I?"block":"none"}})))};y.prototype={className:f.a.string,style:f.a.object,id:f.a.string,skuId:f.a.string,promoType:f.a.string,imgUrl:f.a.string.isRequired,title:f.a.string.isRequired,subtitle:f.a.string,price:f.a.number,source:f.a.string.isRequired,showBottomLine:f.a.bool,tags:f.a.array,zaData:f.a.object,promoInfo:f.a.object,onClick:f.a.func};var I=y;var w=function(){return Object(b.g)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(b.g)("circle",{opacity:"0.45",cx:"10.5",cy:"9.5",r:"9",stroke:"#444444"}),Object(b.g)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0902 5.40973L7.19188 8.30802C6.93425 8.56261 6.93422 8.96569 7.20772 9.23616C7.43803 9.46345 7.84338 9.54449 8.13586 9.25201L9.86195 7.52591C9.85274 9.20642 9.86308 12.9266 9.86308 12.9266C9.863 14.0797 11.2306 14.0789 11.2261 12.9257C11.2239 11.9915 11.2234 8.8631 11.2265 7.52354L12.9433 9.24029C13.1948 9.48879 13.6017 9.488 13.8699 9.2228C14.1055 8.99018 14.1056 8.5871 13.8874 8.29617L11.0009 5.40967C10.7494 5.15965 10.3425 5.16044 10.0902 5.40973V5.40973Z",fill:"#444444"}))},S=a(839),L=a(39),G=a.n(L),T=function(){return Object(b.g)(s.a.Fragment,null)},F={SkeletonH01:function(e){var t=e.lineClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}))},SkeletonP01:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:a}),Object(b.g)("div",null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonT01:function(e){var t=e.lineClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}))},SkeletonT02:function(e){var t=e.lineClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t}))},SkeletonC01:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:a}),Object(b.g)("div",null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonC02:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",null,Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})),Object(b.g)("div",{className:a}))},SkeletonC03:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:a}),Object(b.g)("div",{style:{width:"100%"}},Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonC04:function(e){var t=e.lineClass,a=e.blockClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:"".concat(a,"-1")}),Object(b.g)("div",{className:a}),Object(b.g)("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},Object(b.g)("div",{className:t}),Object(b.g)("div",{className:t})))},SkeletonI01:function(e){var t=e.blockClass;return Object(b.g)(s.a.Fragment,null,Object(b.g)("div",{className:t}))},SkeletonSpacing:T,SkeletonFill:T},R=s.a.memo((function(e){var t,a=e.variant,n=void 0===a?"H01":a,c=e.height,o=e.width,s=void 0===o?"auto":o,i=e.animation,l=void 0===i?"ease-in":i,r="skeleton__line--".concat(n.toLowerCase()),u="skeleton--".concat(n.toLowerCase()),g=d()(G()({skeleton__block:!0},"skeleton__block--".concat(n.toLowerCase()),!0)),m=d()(G()({skeleton__line:!0},r,!0)),v=d()((t={skeleton:!0},G()(t,u,!0),G()(t,"skeleton--ease-in","ease-in"===l),t)),O={width:s};c&&["Spacing","Fill"].includes(n)&&(O.height="number"==typeof c?"".concat(c,"px"):c);var j=F["Skeleton".concat(n)];return Object(b.g)("section",{className:v,style:O},Object(b.g)(j,{variant:n,lineClass:m,blockClass:g}))}));R.propTypes={variant:f.a.string,height:f.a.oneOfType([f.a.string,f.a.number]),width:f.a.oneOfType([f.a.string,f.a.number]),animation:f.a.oneOfType([f.a.bool,f.a.string])};var _=R;var z=s.a.memo((function(e){var t=e.content,a=function(e){return("string"==typeof e?e.split(","):e).map((function(e){var t=e.split("-"),a=c()(t,2),n=a[0],o=a[1];return["Spacing","Fill"].includes(n)?{type:n,height:+o}:{type:n,count:+o||1}}))}(void 0===t?"T01":t);return Object(b.g)(s.a.Fragment,null,a.map((function(e,t){var a=e.type,n=e.count,c=e.height;return n?Array.from({length:n}).map((function(e,n){return Object(b.g)(_,{variant:a,key:"".concat(t,"-").concat(n)})})):Object(b.g)(_,{variant:a,height:c,key:"".concat(t,"-").concat(c)})})))}));z.prototype={content:Object(p.oneOfType)([Object(p.arrayOf)(p.string),p.string])};var D=z,B=a(9),M=a(833),x=a(365),E={tabId:"",tabName:"",isGetDataDirect:!0,tabData:[]};var P=function(e){var t=e.id,a=e.url,n=e.scenes,s=e.fetcherOptions,i=Object(o.useState)(0),l=c()(i,2),r=l[0],d=l[1],u=Object(o.useState)(!1),g=c()(u,2),b=g[0],m=g[1],v=Object(o.useState)([]),O=c()(v,2),j=O[0],p=O[1],f=Object(o.useState)([]),C=c()(f,2),h=C[0],k=C[1],y=Object(o.useState)([]),I=c()(y,2),w=I[0],S=I[1],L=Object(o.useState)(!1),G=c()(L,2),T=G[0],F=G[1],R=Object(o.useState)(E),_=c()(R,2),z=_[0],D=_[1],B=Object(o.useState)(!1),M=c()(B,2),P=M[0],U=M[1];Object(o.useEffect)((function(){m(!0);var e=a||"/api/v4/mcn/linkcard/".concat(t,"/goods?scenes=").concat(n);Object(x.a)(e,s).then((function(e){var t=Object(N.camelizeKeys)((null==e?void 0:e.data)||{}),a=t.goods,n=t.tabs,c=t.similarGoods,o=(null==n?void 0:n[0])||E;o.tabId&&A(o),p(a||[]),k(c||[]),S(n||[]),F(!1)})).catch((function(){F(!0)})).finally((function(){setTimeout((function(){m(!1)}),500)}))}),[t,r]);var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D(Object.assign({},e)),e.isGetDataDirect||(U(!0),Object(x.a)(e.tabDataUrl).then((function(t){var a,n=Object(N.camelizeKeys)((null==t||null===(a=t.data)||void 0===a?void 0:a.goods)||[]);S((function(t){return t.map((function(t){return t.tabId===e.tabId?Object.assign({},t,{isGetDataDirect:!0,tabData:n||[]}):t}))})),D((function(e){return Object.assign({},e,{tabData:n||[],isGetDataDirect:!0})})),U(!1)})).catch((function(){return U(!1)})))};return{refresh:r,setRefresh:d,isFailure:T,sameList:j,similarList:h,activeTabMap:z,setActiveTabMap:D,loading:b,tabs:w,seckillLoading:P,setIsFailure:F,handleChangeTab:A}},U=function(e){var t=e.className,a=e.style,n=e.showModal,s=void 0===n||n,i=e.withModal,r=void 0===i||i,u=e.modalTitle,g=void 0===u?"":u,m=e.id,v=e.url,O=void 0===v?"":v,j=e.fetcherOptions,p=void 0===j?{}:j,f=e.scenes,h=void 0===f?0:f,k=e.onClose,y=Object(M.a)(),L=P({url:O,id:m,fetcherOptions:p,scenes:h}),G=L.refresh,T=L.setRefresh,F=L.loading,R=L.sameList,_=L.similarList,z=L.tabs,x=L.isFailure,E=L.activeTabMap,U=L.handleChangeTab,A=L.seckillLoading,Z=Object(o.useRef)(),K=Object(o.useRef)(),q=Object(o.useRef)(0),V=Object(o.useState)(!0),H=c()(V,2),J=H[0],W=H[1],Q=l()((function(){var e=K.current.getClientRects()[0]||{top:0};e.top<q.current?W(!0):W(!1),setTimeout((function(){return q.current=e.top}))}),16);Object(o.useEffect)((function(){C.a.trackCardShow(null,{id:10331,path:[{module_name:m}]})}),[]),Object(o.useEffect)((function(){if(Z.current=document.getElementsByClassName("ModalWindow-inner")[0],Z.current&&K.current)return Z.current.addEventListener("scroll",Q),function(){return Z.current.removeEventListener("scroll",Q)}}),[Q]);var X=function(e,t){return(null==e?void 0:e.length)?Object(b.g)("div",{className:"PopupSelectList-list"},e.map((function(e){return(null==e?void 0:e.length)?e:[]})).map((function(e,a){return e.length?Object(b.g)(o.Fragment,{key:a},e.map((function(e,n){var c=e.id,s=e.goods,i=e.tags,l=e.promoInfo,r=e.attachedInfoBytes,u=s||{},g=u.skuId,m=u.title,v=u.subtitle,O=u.goodsImg,j=u.goodsUrl,p=u.price,f=u.source,C=u.productType,k=(p||{}).price,w=Number((null==l?void 0:l.countdown)||0)>0&&"tag"!==t;return Object(b.g)(o.Fragment,{key:"".concat(g,"-").concat(a,"-").concat(n)},1===a&&0===n&&Object(b.g)("div",{className:"PopupSelectList-similarTitle"},"相似商品"),Object(b.g)(B.b,{content:{type:"GoodsRecommend",id:String(g),token:String(c)},extra:{attachedInfoBytes:r,link:{url:null==j?void 0:j.url}}},Object(b.g)(B.f,{shouldTrackClick:!0,zaBlock:"goodsRecommend_polymericPopupCard",className:d()({"GoodsCardList-listItem":w}),zaType:"Card",zaAction:"OpenUrl",zaEventType:"Click"},Object(b.g)(I,{className:"GoodsPopupList-cardItem",id:c,skuId:g,title:m,imgUrl:null==O?void 0:O.imgUrl,price:k,source:f,subtitle:v,productType:C,showBottomLine:!1,zaData:{showId:10371,clickId:10372},tags:i,promoInfo:l,promoType:t,onClick:function(){return function(e){var t=Object(N.camelizeKeys)(e),a=t.id,n=t.goods||{},c=n.goodsUrl,o=n.source,s=c.url,i=c.iosSchema,l=c.androidSchema;y({id:a,url:s,source:o,scenes:h,appSchemaIos:i,appSchemaAndroid:l})}(e)}}))))}))):null}))):null},Y=Object(b.g)(B.b,{content:{type:"GoodsRecommend",id:String(m),token:String(m)}},Object(b.g)(B.f,{zaBlock:"goodsRecommend_polymericPopupPage",zaType:"Page",as:"div",className:"GoodsCardList-container",ref:K},Object(b.g)("div",{className:"GoodsCardList-titleContainer"},Object(b.g)("div",{className:"GoodsCardList-title"},"当前商品购买渠道")),F&&!x?Object(b.g)(D,{content:"C03,Spacing-26,C03",height:72}):X([R,_]),Boolean(null==z?void 0:z.length)&&Object(b.g)("div",{className:"GoodsCardList-tabs"},z.map((function(e){return Object(b.g)(B.f,{zaBlock:"goodsRecommend_tabButton",zaType:"Button",shouldTrackClick:!0,zaText:e.tabName,onClick:function(){return U(e)},className:d()("GoodsCardList-tab",{"GoodsCardList-tabAvtive":e.tabId===E.tabId}),key:e.tabId,content:{type:"GoodsRecommend",id:e.tabId}},e.tabName)}))),!x&&Object(b.g)("div",null,A?Object(b.g)("div",{style:{width:"100%"}},Object(b.g)(D,{content:"C03,Spacing-26,C03",height:72})):X([E.tabData],"tag")),x&&Object(b.g)("div",{className:"GoodsCardList-error"},Object(b.g)("div",{className:"GoodsCardList-errorDesc"},"Oops~ 出错了"),Object(b.g)("div",{className:"GoodsCardList-errorBtn",onClick:function(){T(G+1)}},"刷新重试")),Object(b.g)("div",{className:d()("GoodsCardList-backContainer",{"GoodsCardList-backContainerShow":!J}),style:{display:(null==z?void 0:z.length)?"block":"none"},onClick:function(){Z.current&&Z.current.scrollTo({top:0,behavior:"smooth"})}},Object(b.g)("div",{className:"GoodsCardList-backContent"},Object(b.g)(w,null),Object(b.g)("span",{className:"GoodsCardList-backText"},"返回顶部购买商品")))));return r?Object(b.g)(S.a,{className:d()("GoodsCardList",t),style:a,size:"large",title:g,onClose:k},s&&Y):Y};U.prototype={className:f.a.string,style:f.a.object,showModal:f.a.bool,withModal:f.a.bool,modalTitle:f.a.string,id:f.a.string,url:f.a.string,fetcherOptions:f.a.object,scenes:f.a.number,onClose:f.a.func,onSelectCard:f.a.func};var A=U}}]);
//# sourceMappingURL=column.GoodsRecommendGoodsCardList.3629be7a5dca9ad9ff5a.js.map