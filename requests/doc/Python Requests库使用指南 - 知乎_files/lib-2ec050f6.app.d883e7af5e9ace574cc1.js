"use strict";(self.webpackChunkheifetz=self.webpackChunkheifetz||[]).push([[620],{66392:function(e,t,n){var o=n(20857),i=n(22107),a=n(94707),r=n(87320),s=n(86325),d=n(55164),l=n(57477),c=n(94009),u=n(49899),h=n(85626),p=n(85879),m=n(41402),w=n(30037),f=n(10087),v=n(6779),A=n(58216),g=n(48725),C=n(84220),S=n(60811),_=n(25628),b=n.n(_),y=n(4667),k=n.n(y),Z=n(14168),I=n.n(Z),E=n(87363),x=n(36695),R=n(19076),M=n(87641),T=n(93206),B=n(31824),P=n(69383),N=n(43384),z=n(69725),O=n(65423),D=n(31252),q=n(99447),V=n(57730),U=n(19821),H=n(1733),L=n(67516),F=n.n(L),W=n(14214),G=n(88782),Q=n(84069),X=n(38889),K=n(66223),j=n(8858),$=n(61255),J=n(50436),Y=n(66238),ee=n(70400),et=n(258),en=n(28209),eo=n(49906),ei=n(80714),ea=n(66263),er=n(5469),es=n(60736),ed=n(57138),el=n(12421),ec=n(56828),eu=n(85576),eh=n(81552),ep=n(8866),em=n(82335),ew=n(19958),ef=n(40382),ev=n(58909),eA=n(7407),eg=n(67927),eC=n(40195),eS=n(67036),e_=n(37209),eb=n(71981),ey=n(1606),ek=n(98731),eZ=n(99158),eI=n(11264),eE=n(4059),ex=n(64885),eR=n(86193),eM=n(77683),eT=n(7453),eB=n(84344),eP=n(19495),eN=n(99830),ez=n(43006),eO=n(85703),eD=n(30361),eq=n(69661),eV=n(63362),eU=n(102),eH=n(63573),eL=n(71364),eF=n(25744),eW=n(99446),eG=n(65101),eQ=n(86164),eX=n(47163),eK=n(8231),ej=n(24794),e$=n(82022),eJ=n(8618),eY=n(79100),e0=n(14742),e1=n(9651),e6=n(72638),e8=n(7236),e2=n(59525),e3=function(e){return"plain"===e||"special-plain"===e},e4=function(e){return"special-plain"===e},e7={allowed:"允许规范转载",need_payment:"允许付费转载",disallowed:"禁止转载"},e5=function(e){var t=e.thumbnail,n=e.voteupCount,o=e.question.id,i=e.id,a=e.createdTime,r=e.updatedTime,s=e.commentCount;return{image:t,upvoteCount:n,url:"https://www.zhihu.com/question/".concat(o,"/answer/").concat(i),dateCreated:new Date(1e3*a).toISOString(),dateModified:new Date(1e3*r).toISOString(),commentCount:s}},e9=function(e){var t;if(e.videoAnswerData)return e;if(null===(t=e.attachment)||void 0===t?void 0:t.video){var n=e.attachment.video,o=n.title,i=n.subVideoId,a=n.parentVideoId,r=n.zvideoId,s=n.playCount,c=n.voteupCount,u=n.startTime,h=n.creationReferences;return(0,l._)((0,d._)({},e),{videoAnswerData:{videoId:i,zvideoId:r,title:o,playCount:s,voteupCount:c,isComplete:!r||a===i,startTime:u,creationReferences:h}})}return e};function te(e){var t=(0,es.AU)(e);return t?e.videoAnswerData&&"object"==typeof e.videoAnswerData?(0,l._)((0,d._)({},e),{creationRelationship:t,videoAnswerData:(0,l._)((0,d._)({},e.videoAnswerData),{creationRelationship:t})}):(0,l._)((0,d._)({},e),{creationRelationship:t}):e}var tt=["zhi-hu-ri-bao-51-41"],tn=(0,B.P1)(function(e,t){return(0,l._)((0,d._)({},t.answerFromProps?t.answer:e.entities.answers[t.answer.id]||t.answer),{videoAnswerData:t.answer.videoAnswerData})},function(e,t){return e.entities.questions[t.answer.question.id]},function(e,t){return t?(0,l._)((0,d._)({},e),{question:(0,d._)({},e.question,t)}):e}),to=function(e){(0,s._)(n,e);var t=(0,h._)(n);function n(){var e,a,s,c,h,m,w,f;return(0,i._)(this,n),e=t.apply(this,arguments),(0,r._)((0,o._)(e),"state",{commentsShown:!1,commentsAutoFocus:!0,reportModalShown:!1,deleteModalShown:!1,collapseModalShown:!1,favlistsShown:!1,editing:!1,commentPattern:"fixed",addAnnotationModalShown:!1,cancelAnnotationModalShown:!1,guideShown:!1,shareVideoQuery:e.getShareVideoId(),shouldShowVideoDetails:!1,contentExpanded:e.props.expanded,hasFetchedLabels:!1,showWechatExpand:!1,skipModalShow:!1,autoExpand:!1,shownLoadingBar:!1,wxIsReady:!1}),(0,r._)((0,o._)(e),"answerFormRef",(0,E.createRef)()),(0,r._)((0,o._)(e),"rewardContainerRef",(0,E.createRef)()),(0,r._)((0,o._)(e),"richContentRef",(0,E.createRef)()),(0,r._)((0,o._)(e),"zaRef",(0,E.createRef)()),(0,r._)((0,o._)(e),"loadEntityWords",k()(function(){var t=e.props,n=t.answer,o=(void 0===n?{}:n).id;(0,t.loadAnswerEntityWords)(o)})),(0,r._)((0,o._)(e),"handleLoadedNext",function(){e.setState({wxIsReady:!0}),e.state.shownLoadingBar&&e.createOpenInAppHandler(e.state.autoExpand?"expand_answer2":"expand_answer1")(),e.setState({shownLoadingBar:!1})}),(0,r._)((0,o._)(e),"showOiaModal",function(){var t=e.props,n=t.blockReading,o=t.itemProp,i=t.isBaidu;("mainEntityOfPage"===o||"acceptedAnswer"===o)&&!(i||document.referrer.includes("sm.cn"))&&n&&e.setState({showWechatExpand:!0,autoExpand:!0})}),(0,r._)((0,o._)(e),"onCloseReward",function(){var t=e.props.answer.id;F().set("isRewardable",!1),e.props.updateAnswerReward(t,"")}),(0,r._)((0,o._)(e),"openModal",function(t,n){e.setState((0,d._)({},n)),n.commentsShown?e.props.trackOpenCommentAdPromotion():e.props.trackCloseCommentAdPromotion()}),(0,r._)((0,o._)(e),"openDeleteModal",function(){setTimeout(function(){e.setState({deleteModalShown:!0})})}),(0,r._)((0,o._)(e),"closeModal",function(){e.setState({commentsShown:!1});var t=e.props.onCloseComment;"function"==typeof t&&t(),e.props.trackOpenCommentAdPromotion()}),(0,r._)((0,o._)(e),"closeDeleteModal",function(){e.setState({deleteModalShown:!1})}),(0,r._)((0,o._)(e),"disableAuth",(h=(void 0===(c=(void 0===(s=(a=e.props).router)?{}:s).location)?{}:c).pathname,m=a.isBaidu,w=a.isMobile,f=a.currentUser,w&&!f&&!m&&!h.startsWith("/topic"))),(0,r._)((0,o._)(e),"loadAnswerRelationEndorsement",function(){var t=e.props,n=t.answer,o=t.relationEndorsement,i=t.loadAnswerRelationEndorsement;o||i(n.id)}),(0,r._)((0,o._)(e),"handleExpand",function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.trackUserAction,i=e.props,a=i.onToggleExpand,r=i.trackPromotionClick;a&&a(t),t&&e.loadAnswerRelationEndorsement(),(void 0===o||o)&&t&&r&&r(),e.setState({contentExpanded:t})}),(0,r._)((0,o._)(e),"handleReshipmentSettings",function(t){var n=e.props,o=n.answer.id,i=n.updateAnswerReshipmentSettings,a=n.fillCurrentUserIfNeeded;"need_payment"===t?Promise.resolve(a(["caEnabled"])).then(function(){e.props.currentUser.caEnabled?i(o,t):window.open("/copyright/invite")}):i(o,t)}),(0,r._)((0,o._)(e),"handleLoadAnswerForSettings",function(){var t=e.props,n=t.answer.id;(0,t.loadAnswerForSettings)(n)}),(0,r._)((0,o._)(e),"handleDeleteAnswer",function(){var t=e.props,n=t.answer.id;(0,t.deleteAnswer)(n)}),(0,r._)((0,o._)(e),"handlePositionStatusChange",function(t){e.setState({positionStatus:t})}),(0,r._)((0,o._)(e),"handleCollapseModalShow",function(){e.setState({collapseModalShown:!0})}),(0,r._)((0,o._)(e),"handleCollapseModalHide",function(){e.setState({collapseModalShown:!1})}),(0,r._)((0,o._)(e),"handleUpdateAnswerCollapsed",function(){var t=e.props,n=t.answer,o=n.id,i=n.collapsedBy,a=t.updateAnswerCollapsed,r=t.showNotification;return"community"===i?r("该回答因违反社区规范已被管理员折叠，暂无法公开","red"):a(o)}),(0,r._)((0,o._)(e),"handleUpdateAnswerStick",function(){var t=e.props,n=t.answer.id;return(0,t.updateAnswerStick)(n)}),(0,r._)((0,o._)(e),"handleRestoreAnswer",function(){var t=e.props,n=t.answer,o=n.id,i=n.question;(0,t.restoreAnswer)(i.id,o)}),(0,r._)((0,o._)(e),"handleClickCommentsPreview",function(t){var n=e.props,o=n.isMobile,i=n.relatedTo;o&&"answer"===i&&(t.stopPropagation(),e.setState({commentsShown:!0}))}),(0,r._)((0,o._)(e),"openInApp",function(){(0,et.Z)({trackEvent:e.zaRef.current.trackEvent,zaV3Text:"评论弹层",noEnteringSignin:!!e.props.currentUser})}),(0,r._)((0,o._)(e),"setEditingState",function(t,n){"function"==typeof e.props.onEditingStateChange&&e.props.onEditingStateChange(t),e.setState({editing:t},n)}),(0,r._)((0,o._)(e),"handleStartEditAnswer",function(){var t=e.props,n=t.draftStatus,o=t.hasPublishingDraft,i=t.isMobile,a=t.isAnswerPage,r=t.showNotification,s=t.answer,d=s.author,l=s.id,c=s.question.id,u=s.question,h=(0,Q.i)(u);if((0,Q.S)(d)&&""!==h){r(h,"red");return}if(n&&n.loading){V.Z.alert("草稿正在加载中……");return}if(o){V.Z.alert("你有一份对该回答的修改正在发布中，请等待发布完成后再次修改。");return}if(i){e.context.startAddAnswer(e.props.answer.id);return}if(!a||(0,G.$$)()){(0,G.aH)(c,l);return}e.setEditingState(!0,function(){var t,n;null===(t=e.answerFormRef.current)||void 0===t||null===(n=t.focus)||void 0===n||n.call(t)})}),(0,r._)((0,o._)(e),"handleCancelEditAnswer",function(){e.setEditingState(!1);var t=e.props,n=t.onCloseEditing,o=t.onCloseComment;"function"==typeof o&&o(),"function"==typeof n&&n()}),(0,r._)((0,o._)(e),"handleSubmitAnswer",function(t){var n=e.props,o=n.answer.id,i=n.updateAnswer,a=n.answerContentPublish,r=n.hitContentPublish;return e.handleCancelEditAnswer(),(r?a.update(o,t):i(o,t)).then(function(t){return P.Z.trackEvent(e.contentItem,{action:"StatusReport"},{status:{result:"Success",event:{action:"Edit"}}}),t})}),(0,r._)((0,o._)(e),"handleReportOpen",function(){var t=e.props.zaInfos.report;P.Z.trackEvent(e.contentItem,(0,d._)({action:"Report",element:"Button",is_intent:!0},t&&{id:t})),e.props.authRequired(function(){return e.setState({reportModalShown:!0})},ea.q0.report)()}),(0,r._)((0,o._)(e),"handleReportHide",function(){e.setState({reportModalShown:!1})}),(0,r._)((0,o._)(e),"handleFavlistsShown",function(t){var n=e.props,o=n.shouldOia,i=n.zaInfos.favlists;if(P.Z.trackEvent(e.favButtonRef,(0,d._)({action:"Collect",element:"Button",is_intent:!0},i&&{id:i})),o){e.createOpenInAppHandler("collect_answer")(t);return}if(e.disableAuth){e.handleToggleGuide();return}e.props.authRequired(function(){return e.setState({favlistsShown:!0})},ea.q0.favlists)()}),(0,r._)((0,o._)(e),"handleFavlistHide",function(){e.setState({favlistsShown:!1})}),(0,r._)((0,o._)(e),"handleLogMoreClick",function(){var t=e.props.zaInfos.options;P.Z.trackEvent(e.contentItem,(0,d._)({action:"Click",element_name:"MoreAction"},t&&{id:t}))}),(0,r._)((0,o._)(e),"handleShowAddAnnotationModal",function(){return e.setState({addAnnotationModalShown:!0})}),(0,r._)((0,o._)(e),"handleCloseAddAnnotationModal",function(){return e.setState({addAnnotationModalShown:!1})}),(0,r._)((0,o._)(e),"handleShowCancelAnnotationModal",function(){return e.setState({cancelAnnotationModalShown:!0})}),(0,r._)((0,o._)(e),"handleCloseCancelAnnotationModal",function(){return e.setState({cancelAnnotationModalShown:!1})}),(0,r._)((0,o._)(e),"handleToggleGuide",function(){e.setState({guideShown:!e.state.guideShown})}),(0,r._)((0,o._)(e),"handleClickVideoMoreButton",function(){e.setState({shouldShowVideoDetails:!1})}),(0,r._)((0,o._)(e),"handleClickTitle",function(t){var n=e.props,o=n.onClickTitle,i=n.trackPromotionClick,a=n.answer.id;t.preventDefault(),null==o||o(a),window.open(e.href),null==i||i()}),(0,r._)((0,o._)(e),"startEditing",function(){var t=e.props,n=t.isAuthor,o=t.editable;t.currentUser&&n&&o&&e.handleStartEditAnswer()}),(0,r._)((0,o._)(e),"addRewardTagline",function(t){var n=e.props.answer.id;(0,eS.OC)(t,n)}),(0,r._)((0,o._)(e),"createOpenInAppHandler",function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.props,a=i.answer,r=a.type,s=a.id,c=i.blockReading,u=i.isSpecialQuestionOrAnswer,h=i.currentUser,p=i.relatedTo;return function(i,a){if(i&&i.preventDefault(),"answer"===p){if(c&&P.Z.trackEvent((0,o._)(e),{id:5550,action:"Click"},{button:{text:"openapp"}}),u)location.href="zhihu://".concat(r,"/").concat(s,"?utm_app_name=zhihu_check");else{var m=ea.t6[a]||ea.t6[t],w=(0,l._)((0,d._)({},c&&{yyb_ckey:"CK1430255776739"}),{preventToOIA:n});ea.dN[m]&&(w.launch_button=ea.dN[m]);var f=ea.ov[a]||ea.ov[t];(0,et.Z)({trackEvent:e.zaRef.current.trackEvent,zaV3Text:f,noEnteringSignin:!!h},w)}}}}),(0,r._)((0,o._)(e),"renderLabels",function(){var t=e.props.answer,n=t.isNormal;if((void 0===n||n)&&e.isPaidAnswer)return{labels:[],editingLabels:[]};var o=e.props,i=o.canCollapse,a=o.relatedTo,r=o.showReviewingLabel,s=o.hideCommercialInviteLabel,l=e.state,c=l.contentExpanded,u=l.editing,h=(0,e0.gh)({answer:t,canCollapse:i,showReviewingLabel:r}),m=(0,e0.xx)(t),w=(0,e0.Dm)({answer:t,canCollapse:i,hideCommercialInviteLabel:s}),f=(0,e0.fb)(t);if(h||m)return{labels:[h,(0,p.tZ)(eH.Z,(0,d._)({item:{isLabeled:!0}},m),"labels")],editingLabels:[]};var v=[(0,p.tZ)(eH.Z,{item:t,commercialProps:w,annotationProps:f,editing:u},"labels")];return{labels:c||a?v:[],editingLabels:v}}),(0,r._)((0,o._)(e),"renderPrefix",function(){var t=e.props,n=t.answer,o=t.relatedTo,i=e.state.contentExpanded;return e.isVideoAnswer&&!e.contentDisplayed&&e.coCreate?(0,p.tZ)($.xJ,{mb:"4px"}):(0,e6.Z)(n,{contentExpanded:i,unescapable:!!o})}),(0,r._)((0,o._)(e),"renderVoteButton",function(){var t=e.props,n=t.answer,o=t.shouldOia,i=t.zaInfos,a=i.voteUp,r=i.voteDown,s=t.isMuteSpecial,c=t.isMuteFreeze,u=t.isAuthor,h=t.currentUser,m=e.state.positionStatus,w=n.question,f=w.questionType,v=w.isMuted,A=n.relationship,g=(void 0===A?{}:A).voting,C=n.attachment,S=n.voteupCount,_="commercial"===f&&v||s||c;return e.isLegacyVideoAnswer?(0,p.tZ)(e2.Z,{answer:n,id:C.attachmentId,voteupCount:S,voting:g,isOwner:u,disabled:_,currentUser:h}):(0,p.tZ)(eY.Z,(0,l._)((0,d._)({answer:n,disabled:_,isOwner:u},o&&{onClick:e.createOpenInAppHandler("vote_answer")}),{disableAuth:e.disableAuth,handleToggleGuide:e.handleToggleGuide,positionStatus:m,zaIds:{voteUp:a,voteDown:r}}),"vote")}),(0,r._)((0,o._)(e),"renderAuthorInfo",function(){var t=e.props,n=t.preset,o=t.relatedTo,i=t.answer,a=i.id,r=i.author,s=i.creationRelationship,d=t.trackToggleFollowAdPromotion;if(!e.coCreate)return!e4(n)&&(0,p.tZ)(eM.Z,{className:b()("AnswerItem-authorInfo",{"AnswerItem-authorInfo--related":o}),preset:e3(n)?"plain":"default",author:r,relatedTo:o,id:a,userLinkV2:!0,onToggleFollow:d},"authorInfo");var l=!e4(n);return(0,$.SF)(n,r,s,l)}),(0,r._)((0,o._)(e),"renderMetaAndBeforeContent",function(){var t,n,o=e.props,i=o.preset,a=o.answer.creationRelationship,r=e.renderAuthorInfo(),s=e.renderAnswerExtraInfo(),d=e.renderLabels().labels,l=null==a?void 0:null===(t=a.coCreation)||void 0===t?void 0:t.refBy,c=null==a?void 0:null===(n=a.reference)||void 0===n?void 0:n.refBy,h=e.contentDisplayed&&(l||c)&&(0,p.tZ)(M.Box,{my:"16px",children:(0,p.tZ)($.j7,{type:"answer",coCreationRefBy:l,referenceRefBy:c})});return e3(i)?[[r].concat((0,u._)(d),[h]),s]:[[r].concat((0,u._)(d),[h,s]),null]}),e}return(0,a._)(n,[{key:"isPaidAnswer",get:function(){return"paid"===this.props.answer.answerType}},{key:"isVideoAnswer",get:function(){var e=this.props.answer.attachment;return(null==e?void 0:e.type)===2||(null==e?void 0:e.type)==="zvideo"||(null==e?void 0:e.type)==="video"}},{key:"isLegacyVideoAnswer",get:function(){var e=this.props.answer.attachment;return(null==e?void 0:e.type)==="zvideo"}},{key:"isAuthorInGeneral",get:function(){var e=this.props,t=e.isAuthor,n=e.isSubAuthor,o=e.hideCoCreationFeature;return t||n&&!o}},{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.expanded,o=t.byComment,i=t.editing,a=t.loadVideoDetails,r=t.isSearchSpecialSource,s=t.isMobile,d=t.isWechat,l=this.state.shareVideoQuery;if(l&&a(l).then(function(){e.setState({shouldShowVideoDetails:!0})}),n&&(this.loadAnswerRelationEndorsement(),this.loadEntityWords()),o&&setTimeout(function(){return e.setState({commentsShown:!!o})}),i&&this.startEditing(),s&&!r&&this.showOiaModal(),s&&d){if(document.addEventListener("WeixinJSBridgeReady",function(){e.handleLoadedNext()}),"complete"===document.readyState)this.handleLoadedNext();else{var c=function(){window.removeEventListener("load",c),e.handleLoadedNext()};window.addEventListener("load",c)}}}},{key:"componentDidUpdate",value:function(e,t){!t.contentExpanded&&this.state.contentExpanded&&this.loadEntityWords(),!this.props.editing||e.editing||this.state.editing||this.startEditing()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this,n=this.props.answer,o=n.reshipmentSettings,i=n.commentPermission,a=e.answer,r=a.reshipmentSettings,s=a.commentPermission;!o&&r&&!i&&s&&setTimeout(function(){return t.settingsTogglerEl.click()})}},{key:"getShareVideoId",value:function(){var e=this.props,t=e.location;return e.isMobile?t.query.preview_video_id:null}},{key:"renderReshipmentSettings",value:function(e){var t=this,n=this.props.currentUser;return Object.keys(e7).map(function(o){return"need_payment"===o&&(null==n?void 0:n.isOrg)?null:(0,p.tZ)(eb.Z,{onClick:function(){return t.handleReshipmentSettings(o)},checked:o===e,children:e7[o]},o)})}},{key:"renderAnswerExtraInfo",value:function(){var e=this.props,t=e.answer,n=e.isHuman,o=e.isMobile,i=e.relationEndorsement,a=t.id,r=t.voteupCount,s=t.isNormal;return(!n||!o)&&(void 0===s||s)&&(null==i?void 0:i.text)?(0,p.tZ)(e$.Z,{id:a,relationEndorsement:i,voteupCount:r},"AnswerItemExtraInfo"):null}},{key:"renderSettings",value:function(){var e=this,t=this.props,n=t.answer,o=n.id,i=n.collapsedBy,a=n.reshipmentSettings,r=n.commentPermission,s=n.question.questionType,d=n.rewardInfo,l=(void 0===d?{}:d).isRewardable,c=n.relevantInfo,u=n.creationRelationship,h=t.answer,m=t.canCollapse,w=t.isMobile;if(!t.currentUser||!this.isAuthorInGeneral)return null;var f=(0,p.BX)(p.HY,{children:[this.renderReshipmentSettings(a),(0,p.tZ)(H.R,{}),(0,p.tZ)(er.rt,{className:"AnswerItem-selectMenuItem",target:h,onChange:this.props.updateAnswerCommentPermission,current:r}),(0,p.tZ)(H.R,{}),void 0!==l&&l&&(0,p.tZ)(H.sN,{onClick:this.onCloseReward,children:"关闭赞赏"}),(0,p.tZ)(H.sN,{onClick:this.openDeleteModal,children:"删除"}),"commercial"===s&&m&&"nobody"===i&&(!c||"brand_special"!==c.relevantType)&&[(0,p.tZ)(H.R,{},"MenuDivider"),(0,p.tZ)(H.sN,{onClick:this.handleUpdateAnswerCollapsed,children:"隐藏"},"MenuItem")]]});if(a&&r){var A,g,C=null==u?void 0:null===(A=u.coCreation)||void 0===A?void 0:null===(g=A.bizInfo)||void 0===g?void 0:g.canCancelPermission;return(0,p.tZ)(H.ZP,{arrowed:!!C,toggler:(0,p.tZ)(X.ZP,{preset:"plain",onRef:function(t){e.settingsTogglerEl=t},icon:v.T,label:!w&&"设置"}),reversed:!0,menuClassName:"AnswerItem-selfMenu",itemClassName:"AnswerItem-selectMenuItem",children:C?(0,p.tZ)(H.sN,{children:(0,p.tZ)($.ZY,{contentType:"answer",contentId:o})}):f},"settings")}return(0,p.tZ)(X.ZP,{preset:"plain",onClick:this.handleLoadAnswerForSettings,icon:v.T,label:!w&&"设置"},"settings")}},{key:"renderReshipment",value:function(e,t){var n=this;return"need_payment"===t?(0,p.tZ)(H.sN,{onClick:function(){P.Z.trackEvent(n.contentItem,{action:"Authorize",element:"Button",is_intent:!0})},tag:"a",href:"/copyright/apply?answer=".concat(e),target:"_blank",children:"申请授权"}):"disallowed"===t?(0,p.tZ)(H.sN,{tag:"a",target:"_blank",href:"/term/zhihu-terms#sec-licence-6",children:"禁止转载"}):null}},{key:"renderOptions",value:function(){var e=this;if(!this.props.currentUser||this.isAuthorInGeneral)return null;var t=this.props,n=t.answer,o=t.canCollapse,i=t.renderExtraOptions,a=t.permission.canBrandAdminEdit,r=t.isMobile,s=t.isAuthor,c=n.id,u=n.reshipmentSettings,h=n.collapsedBy,w=n.question,f=w.questionType,v=w.brand,g=(void 0===v?{}:v).isPuQuestion,C=n.annotationAction,S=void 0===C?[]:C,_=n.annotationDetail,b={toggler:(0,p.tZ)(X.ZP,{preset:"plain",className:"OptionsButton",icon:A.AZ,"aria-label":"更多"}),reversed:!0,onOpen:this.handleLogMoreClick,menuClassName:"AnswerItem-selfMenu",itemClassName:"AnswerItem-selfMenuItem"},y="commercial"===f,k="nobody"!==h;return s?null:(0,m.az)(H.ZP,(0,l._)((0,d._)({},b),{key:"options",children:[r&&(0,p.tZ)(ek.HS,{answer:n}),o&&!y&&(0,p.tZ)(H.sN,{onClick:k?this.handleUpdateAnswerCollapsed:this.handleCollapseModalShow,children:k?"取消隐藏":"隐藏"}),a&&y&&!k&&!g&&(0,p.tZ)(H.sN,{onClick:this.handleUpdateAnswerCollapsed,children:"隐藏"}),S&&S.some(function(e){return ea.jB.add===e})&&!_&&(0,p.tZ)(H.sN,{onClick:this.handleShowAddAnnotationModal,children:"标记内容"}),S&&S.some(function(e){return ea.jB.cancel===e})&&_&&(0,p.tZ)(H.sN,{onClick:this.handleShowCancelAnnotationModal,children:"撤销标记"}),(0,p.tZ)(N.$U,{zaAction:"Report",zaType:"Button",zaModuleId:"click_report",as:H.sN,onClick:this.handleReportOpen,children:"举报"}),this.renderReshipment(c,u),i&&i({itemClassName:"AnswerItem-selfMenuItem",getContainer:function(){return e.contentItem}})]}))}},{key:"renderMeta",value:function(){var e=e5(this.props.answer);return Object.keys(e).map(function(t){return(0,p.tZ)("meta",{itemProp:t,content:e[t]},t)})}},{key:"renderBrandQuestionPrizeTip",value:function(){var e=this.props.answer,t=e.id,n=e.question.prize,o=void 0===n?{}:n,i=o.winnersAnswerTokens,a=o.prizes;if(!o.status)return null;var r=["一","二","三"],s=null;return a&&i&&i.forEach(function(e,n){e.includes(t)&&null===s&&(s=a&&a[1]&&a[1].name?"得".concat(r[n],"等奖"):"奖")}),s&&(0,p.BX)("div",{className:"AnswerItem-brandQuestionPrizeTip",children:["该回答在有奖问答中获",s]})}},{key:"renderBrandEntityTrack",value:function(){var e=this.state.contentExpanded,t=this.props,n=t.answer,o=t.expanded,i=t.isBrandAnswer,a=n.question;return(o||e)&&(a&&"commercial"===a.questionType||i)?(0,p.tZ)(eT.Z,{type:n.type,id:n.id}):null}},{key:"renderEditTime",value:function(){var e,t,n,o=this.props,i=o.shouldOia,a=o.answer,r=a.createdTime,s=a.updatedTime,c=a.playCount,u=a.attachment,h=a.ipInfo,m=c||(null==u?void 0:null===(e=u.zvideo)||void 0===e?void 0:e.playCount)||(null==u?void 0:null===(t=u.video)||void 0===t?void 0:null===(n=t.videoInfo)||void 0===n?void 0:n.playCount)||0;return(0,p.tZ)(eK.O,(0,l._)((0,d._)({created:r,updated:s,href:this.href},this.isVideoAnswer&&m>0&&{videoPlayCount:Number(m)},i&&{onClick:this.createOpenInAppHandler("click_answer")}),{ipInfo:h}))}},{key:"contentDisplayed",get:function(){var e=this.props.relatedTo,t=this.state.contentExpanded;return!!(e||t)}},{key:"coCreate",get:function(){var e=this.props,t=e.answer.creationRelationship;return!!(!e.hideCoCreationFeature&&(0,$.HE)(t))}},{key:"href",get:function(){var e=this.props.answer,t=e.id,n=e.question.id;return"//".concat(ei.Z.wwwHost,"/question/").concat(n,"/answer/").concat(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.answer,o=t.reward,i=t.answer,a=i.id,r=i.isNormal,s=void 0===r||r,u=i.isDelete,h=i.question,m=i.rewardInfo,w=void 0===m?{}:m,v=i.question,A=v.title,_=v.id,y=v.questionType,k=v.commercial,Z=v.brand,I=(void 0===Z?{}:Z).isPuQuestion,E=i.author,x=i.excerpt,R=i.content,T=i.editableContent,B=i.commentCount,P=i.adminClosedComment,D=i.collapsedBy,q=i.isSticky,H=i.thumbnail,L=i.thumbnailExtraInfo,F=i.reviewInfo,G=void 0===F?{}:F,Q=G.isReviewing,$=G.editType,J=i.relevantInfo,et=(void 0===J?{}:J).relevantType,ei=i.annotationDetail,er=i.paidInfo,es=void 0===er?{}:er,ec=i.creatorRightsNotification,eu=i.attachment,eh=i.videoAnswerData,ep=t.relatedTo,em=t.editable,ew=t.byComment,ef=t.draft,ev=t.expanded,eA=t.lastreadTouchable,eg=t.canCollapse,eC=t.canStick,eS=t.itemProp,e_=void 0===eS?"answer":eS,eb=t.addAnnotation,ey=t.cancelAnnotation,eI=t.showNotification,eM=t.dataZaIndex,eT=t.blockReading,eH=t.isWechat,e$=t.isHuaweiBrowser,eY=t.isHonor,e0=t.lessExcerpt,e6=t.isHuman,e2=t.ua,e3=t.shouldSpecialOia,e4=t.shareVideoDetail,e7=t.formatContent,e5=t.zaInfos,e9=e5.expand,te=e5.title,tt=e5.thank,tn=e5.toggleComment,to=e5.share,ti=e5.getCommentAction,ta=t.handleToggleSticky,tr=t.renderActionButtons,ts=t.permission.canBrandAdminEdit,td=t.readContentRightsNotification,tl=t.ecommerce,tc=t.isMobile,tu=t.canAbstract,th=t.isBaidu,tp=t.isMuteSpecial,tm=t.isMuteFreeze,tw=t.isAuthor,tf=t.shouldHidePaidIntroWhenCollapsed,tv=t.xiaomi,tA=t.showCommentForOia,tg=t.pathname,tC=t.richContentKey,tS=t.shouldAlwaysShowPlayer,t_=t.isShenma,tb=t.isRecommend,ty=t.videoRef,tk=t.alwaysShowVolumeButton,tZ=t.showHeightLight,tI=void 0!==tZ&&tZ,tE=t.truncateDisabled,tx=t.forceCommentOia,tR=void 0!==tx&&tx,tM=t.hideCoCreationFeature,tT=t.entityWords,tB=t.isAnswerPage,tP=t.currentUser,tN=t.blockStrategies,tz=t.trackShareAdPromotion,tO=t.trackPublishCommentAdPromotion,tD=t.adHint,tq=(0,eZ.Z)([(0,eZ.m)(tN)],tr),tV="function"==typeof ta,tU=this.state,tH=tU.reportModalShown,tL=tU.deleteModalShown,tF=tU.collapseModalShown,tW=tU.favlistsShown,tG=tU.editing,tQ=tU.commentsShown,tX=tU.commentsAutoFocus,tK=tU.commentPattern,tj=tU.addAnnotationModalShown,t$=tU.cancelAnnotationModalShown,tJ=tU.positionStatus,tY=tU.shareVideoQuery,t0=tU.shouldShowVideoDetails,t1=tU.contentExpanded,t6=tU.showWechatExpand,t8=tU.skipModalShow,t2=tU.autoExpand,t3=tU.shownLoadingBar,t4=tU.wxIsReady,t7=null==eu?void 0:null===(no=eu.video)||void 0===no?void 0:no.campaign,t5=tY&&t0?{title:e4.title,thumbnail:e4.coverUrl,isLens:!0,id:tY,isPlayable:!0,url:"https://www.zhihu.com/video/".concat(tY)}:null;if(u)return(0,p.BX)("div",{className:"AnswerItem-deleted",children:["你已经删除了该问题的回答，如果需要修改，请先 \xa0",(0,p.tZ)("a",{role:"button",tabIndex:0,onClick:this.handleRestoreAnswer,children:"撤销删除"})]});var t9=!this.isVideoAnswer||!(Q&&"create"===$),ne="commercial"===y,nt="nobody"!==D,nn=H||(null==eu?void 0:null===(ni=eu.video)||void 0===ni?void 0:null===(na=ni.videoInfo)||void 0===na?void 0:na.thumbnail);if(tG){var no,ni,na,nr,ns=ex.Z,nd=(0,p.BX)("div",{children:[(0,p.BX)(M.Flex,{alignItems:"center",justifyContent:"space-between",css:function(e){return[{borderBottom:"1px solid ".concat(e.colors.GBK09A),".Tabs":{border:"none"}},{background:e.colors.GBK99A}]},children:[(0,p.tZ)("div",{css:function(e){return[{fontWeight:"bold",fontSize:15,color:e.colors.GBK03A,borderBottom:"1px solid ".concat(e.colors.GBK10A)},{borderBottom:"none",paddingLeft:20}]},children:this.isVideoAnswer?"本回答为视频回答":"本回答为图文回答"}),(0,p.tZ)(eR.Z,{handleClick:null===(nr=this.answerFormRef.current)||void 0===nr?void 0:nr.toggleFullscreen})]}),(0,p.tZ)(ns,{className:"AnswerItem-form",isReediting:!0,imperativeRef:this.answerFormRef,question:h,answer:n,defaultValue:T,onDeleteDraft:this.handleCancelEditAnswer,onCancel:this.handleCancelEditAnswer,onSubmit:this.handleSubmitAnswer,isRewardable:w.isRewardable,addRewardTagline:this.addRewardTagline,useMediumEditor:!0})]});return tB?(0,p.tZ)(W.Z,{children:(0,p.tZ)(U.ZP,{css:{overflow:"visible"},children:(0,p.BX)("div",{css:function(e){return{background:e.colorMod(e.colors.GBK10C).alpha(.45)}},children:[(0,p.tZ)(en.Z,{}),nd]})})}):nd}var nl=(0,c._)(this.renderMetaAndBeforeContent(),2),nc=nl[0],nu=nl[1],nh="mainEntityOfPage"===e_||"acceptedAnswer"===e_,np=e3&&!nh,nm=!t5&&this.renderEditTime(),nw=es.type,nf=es.content,nv=this.isPaidAnswer,nA=nv?nf:R,ng=!ep&&(0,p.tZ)(e1.Z,{questionId:_,title:A,href:this.href,zaTitleId:te,showStickyMark:tV&&this.props.isSticky,showHeightLight:tI,onClick:this.handleClickTitle}),nC=s||tw,nS=tv&&tg.match(/\/question\/\d+$/g),n_=e7?e7(nA||x,n):nA||x||"",nb=eh&&(tS||this.contentDisplayed),ny=tb&&this.isVideoAnswer,nk=tc&&"answer"===ep;return(0,p.BX)(eD.ZP,{onRef:function(t){return e.contentItem=t},className:"AnswerItem","data-za-index":eM,"data-zop":JSON.stringify({authorName:null==E?void 0:E.name,itemId:a,title:A,type:"answer"}),data:n,link:this.href,meta:ny?null:nc,title:ng,lastreadTouchable:eA,name:a,itemProp:e_,itemType:"http://schema.org/Answer",itemScope:!0,children:[s&&(!tf||t1)&&(0,p.tZ)(eJ.m,{answer:n}),this.renderMeta(),ne&&this.renderBrandQuestionPrizeTip(),this.renderBrandEntityTrack(),nC?(0,p.BX)(p.HY,{children:[this.isVideoAnswer&&(0,p.tZ)(f.eb,{data:L,children:(0,p.tZ)(e8.Z,(0,l._)((0,d._)({shouldExpand:this.contentDisplayed,showPlayer:nb,campaign:t7,answer:n,videoAnswerData:eh,videoRef:ty,alwaysShowVolumeButton:tk},ny?{meta:nc}:{}),{hideCoCreationFeature:tM,isRecommend:tb}))}),(0,p.BX)(eK.Z,(0,l._)((0,d._)((0,l._)((0,d._)({entityWords:tT,richContentKey:tC,className:b()({"RichContent-mobileBaidu":th,"RichContent-hasCatalog":(0,j.Z)(n,"answer"),"AnswerItem-highlight":tI}),truncateDisabled:void 0!==tE&&tE,imperativeRef:this.richContentRef,canAbstract:tu,onToggleExpend:this.handleExpand},np&&{expandText:"阅读全文"},eT&&nh&&{expandText:"展开阅读全文"},tc&&e6&&!nh&&{collapsedHeight:180}),{cover:this.isVideoAnswer&&tS?null:nn,hasVideo:!tS&&!!(L&&"video"===L.type)||this.isVideoAnswer,videoData:t5,handleClickVideoMoreButton:this.handleClickVideoMoreButton,unescapable:!!ep,expanded:ev,onPositionStatusChange:this.handlePositionStatusChange,before:nu,excerpt:e7?e7(x,n):x,html:n_,prefix:this.renderPrefix(),isNovel:"interactive_novel"===nw,ecommerce:tl,forceSticky:nk,isVideoAnswer:this.isVideoAnswer,after:(0,p.BX)("div",{children:[nv&&(0,p.tZ)("div",{className:"Copyright-TxtBottom",children:"\xa9 本内容版权为知乎及版权方所有，侵权必究"}),(0,p.tZ)(eJ.v,{answer:n,ua:e2,isAnswerPage:tB}),(0,p.tZ)(ez.Z,{className:"AnswerItem-CommercialQuestionTail",commercial:k}),!tc&&t1&&(0,p.tZ)(eG.Z,{contentType:"answer",contentToken:a,author:E}),nm,tP&&tw&&em&&(0,p.tZ)(ee.SV,{children:(0,p.BX)("a",{className:"AnswerItem-editButton",role:"button",tabIndex:0,onClick:this.handleStartEditAnswer,children:[(0,p.tZ)(g.E,{text:!0,center:!0})," ",(0,p.BX)("span",{className:"AnswerItem-editButtonText",children:["修改",ef&&ef.editableContent&&"（有未发布的编辑草稿）"]})]})}),!tc&&tP&&(0,p.tZ)(eX.Z,{imperativeRef:this.rewardContainerRef,reward:o,currentUser:tP,rewardInfo:w,isAuthor:tw,id:a,author:E,ua:e2,balanceEnable:!1})]}),data:n,onClick:eT&&nh?function(){(nS||eH||t_)&&tc?(e.setState({autoExpand:!1}),e.richContentRef.current.handleExpand()):tc?ea.dd?(e.setState({autoExpand:!1}),e.richContentRef.current.handleExpand()):e.setState({skipModalShow:!0,autoExpand:!1}):e.setState({showWechatExpand:!0,autoExpand:!1})}:np?ea.dd&&tc?function(){e.richContentRef.current.handleExpand()}:e.createOpenInAppHandler("expand_answer"):e.disableAuth&&eT&&e.handleToggleGuide}),e0?{limit:74}:{},this.coCreate?{limitWithImage:74}:{}),{zaIds:{expand:e9},children:[t9&&ts&&ne&&nt&&!I&&(0,p.tZ)(X.ZP,{className:b()("ContentItem-rightButton AnswerItem-mainAction AnswerItem-open",{"AnswerItem-mainAction--disabled":"community"===D}),onClick:this.handleUpdateAnswerCollapsed,children:"公开回答"}),t9&&eC&&!nt&&"brand_special"!==et&&(0,p.tZ)(X.ZP,{className:"ContentItem-rightButton AnswerItem-mainAction AnswerItem-brandQuestionButton",onClick:this.handleUpdateAnswerStick,children:q?"取消精选":"设为精选"}),!this.props.isBaidu&&tq({componentList:[{name:"vote",component:t9&&this.renderVoteButton()},{name:"comment",component:t9&&!(tc&&"answer"!==ep)&&(0,p.tZ)(eP.Z,(0,l._)((0,d._)({onInstance:function(t){return e.commentButton=t},onClick:this.openModal},(tc&&e6&&e3||tR)&&{onClick:function(t){if(nk){e.openModal(t,{commentsShown:!0});return}e.createOpenInAppHandler("comment_answer")}}),{commentsShown:tQ,commentClosed:P,count:B,positionStatus:tJ,zaInfos:{toggleComment:tn,getCommentAction:ti}}),"comment")},{name:"share",component:t9&&!tc&&(0,p.tZ)(ej.Z,{disabled:tp||tm,id:a,type:"answer",title:A,authorName:E&&E.name,href:this.href,positionStatus:tJ,zaShareId:to,onShare:tz},"share")},{name:"favlist",component:t9&&!(tc&&"answer"!==ep)&&(!tP||!tP.isOrg)&&(0,p.tZ)(eV.Z,{onRef:function(t){return e.favButtonRef=t},onClick:this.handleFavlistsShown,label:tc?"":"收藏",disabled:tp||tm},"favlist")},!tc&&{name:"thank",component:t9&&!tw&&(0,p.tZ)(ek.HS,(0,d._)({zaInfo:tt,answer:n,disabled:tp||tm},this.isLegacyVideoAnswer&&{zVideoId:eu.attachmentId}),"thank")},{name:"sticky",component:!tc&&tV&&tw&&(0,el.U)(tP)&&(0,p.tZ)(X.ZP,{preset:"plain",onClick:ta,icon:this.props.isSticky?C.TX:S.rh,label:this.props.isSticky?"取消置顶":"置顶"},"sticky")},{name:"options",component:tc&&e6||t9&&this.renderOptions()},{name:"settings",component:tc&&e6||this.renderSettings()},{name:"annotation",component:!t1&&(0,p.tZ)(eE.Z,{annotationDetail:ei},"annotation")}]}),tD&&(0,p.tZ)(K.Z,{tag:tD})]}))]}):nm,nC&&!nv&&(0,p.tZ)(eB.Z,{content:nA,type:"answer",urlToken:String(a)}),tA&&tg.startsWith("/question")&&nk&&(0,p.tZ)("div",{role:"tablist",tabIndex:0,onClick:this.handleClickCommentsPreview,onKeyDown:function(t){"Enter"===t.key&&e.handleClickCommentsPreview(t)},children:(0,p.tZ)(Y.Z,{parent:n})}),(0,p.tZ)(N.pS,{ref:this.zaRef}),(0,p.tZ)(eN.Z,{shown:tQ,parent:n,byComment:ew,commentPattern:tK,autoFocus:tX,onClose:this.closeModal,onComment:tO}),(0,p.tZ)(eQ.y,{type:"answer",urlToken:a,shown:tH,onClose:this.handleReportHide,zaEnabled:!0}),(0,p.tZ)(z.Z,{addAnnotation:eb,onClose:this.handleCloseAddAnnotationModal,shown:tj,type:ea.R8,urlToken:a,showNotification:eI}),(0,p.tZ)(O.Z,{cancelAnnotation:ey,onClose:this.handleCloseCancelAnnotationModal,shown:t$,type:ea.R8,urlToken:a,showNotification:eI}),tP&&tw&&(0,p.tZ)(eO.Z,{title:"你确定要删除自己的答案吗？",subtitle:"答案内容不会被永久删除，你还可以撤消本次删除操作。",shown:tL,onCancel:this.closeDeleteModal,onSubmit:this.handleDeleteAnswer}),eg&&(0,p.tZ)(eO.Z,{title:"隐藏答案",subtitle:"隐藏后该回答将不展示也不流通，是否确定隐藏？",shown:tF,onCancel:this.handleCollapseModalHide,onSubmit:this.handleUpdateAnswerCollapsed}),(0,p.tZ)(eU.E,{id:a,type:"answer",shown:tW,onClose:this.handleFavlistHide,zaEnabled:!0}),tc&&this.state.guideShown&&(0,p.tZ)(eo.Z,{redirectUrl:this.href,buttons:[eH?{name:"wechat",text:"快速登录",fill:"#fff"}:"zhihu"],urlScheme:(0,ed.MN)({type:"answer",id:a}),onClose:this.handleToggleGuide}),(0,p.tZ)(eq.Z,{notification:ec,onRead:function(e){td("answer",a,e)},onUseAdmire:function(){e.rewardContainerRef.current.activateReward()},onUseRecommend:function(){var t=e.props.postToolsRecommend;V.Z.confirm((0,p.tZ)("div",{style:{textAlign:"center"},children:"该推荐将使用本月的 1 次推荐次数。"}),{title:"确定是否推荐？"}).then(function(){return t("answer",String(a))},function(){})}}),(0,p.tZ)(eW.Z,{show:t6&&!nS&&tc&&!eH&&!ea.dd,id:n.id,type:n.type,onCancel:function(){e.setState({showWechatExpand:!1},function(){t2||e.richContentRef.current.handleExpand()})},onSubmit:function(){e.setState({showWechatExpand:!1}),eH?t4?e.createOpenInAppHandler(t2?"expand_answer2":"expand_answer1")():e.setState({shownLoadingBar:!0}):e.createOpenInAppHandler(t2?"expand_answer2":"expand_answer1")()}}),(0,p.tZ)(eL.Z,{show:t8&&!ea.dd,id:n.id,type:n.type,onCancel:function(){e.setState({skipModalShow:!1},function(){e.richContentRef.current.handleExpand()})},onSubmit:function(){e.createOpenInAppHandler("expand_answer",e$||eY)()}}),(0,p.tZ)(eF.Z,{show:t3&&tc})]})}}]),n}(E.PureComponent);(0,r._)(to,"contextTypes",{startAddAnswer:I().func}),(0,r._)(to,"propTypes",{relatedTo:I().oneOf(["question","answer"]),editable:I().bool,preset:I().oneOf(["special-plain","plain","primary"]),lessExcerpt:I().bool,shareVideoDetail:I().object,formatContent:I().func,renderExtraOptions:I().func,zaInfos:I().object,onToggleExpand:I().func,renderActionButtons:I().func,canAbstract:I().bool,trackPromotionClick:I().func,isSearchSpecialSource:I().bool,hideCommercialInviteLabel:I().bool,hideCoCreationFeature:I().bool}),(0,r._)(to,"defaultProps",{editable:!1,canAbstract:!1,isSearchSpecialSource:!1,preset:"primary",zaInfos:{},renderActionButtons:ek.W9,shouldAlwaysShowPlayer:!1,hideCoCreationFeature:!1}),t.Z=(0,T.compose)((0,ey.Ib)(function(e){var t=e.answer,n=e.index;return(0,d._)({content:{type:"Answer",token:String(t.id)}},void 0!==n&&{moduleIndex:n})}),(0,q.a)(function(e){var t=e.answer,n=e.trackCardShow,o=e.zaInfos,i=void 0===o?{}:o;return(0,l._)((0,d._)({module:"AnswerItem",card:{has_image:!!(t.thumbnailExtraInfo&&"image"===t.thumbnailExtraInfo.type),has_video:!!(t.thumbnailExtraInfo&&"video"===t.thumbnailExtraInfo.type),content:{type:"Answer",token:t.id&&t.id.toString(),upvote_num:t.voteupCount,comment_num:t.commentCount,publish_timestamp:new Date(t.createTime).getTime(),parent_token:t.question&&t.question.id.toString(),author_member_hash_id:t.author&&t.author.id,video_id:t.thumbnailExtraInfo&&t.thumbnailExtraInfo.videoId}},content:{type:"Answer",token:t.id}},i.index&&{index:i.index},i.cardShow&&{view:{id:i.cardShow}}),{trackCardShow:void 0===n||n})}),R.withRouter,eu.Z,(0,w.$_)({dataPath:"answer"}),w.OW,(0,x.connect)(function(e,t){var n,o,i=e.entities.drafts,a=e.question,r=(void 0===a?{}:a).draftStatus,s=e.answers,d=void 0===s?{}:s,l=d.paidContent,c=d.entityWords,u=d.relationEndorsement,h=e.reward,p=e.switches,m=e.video,w=(void 0===m?{}:m).shareVideoDetail,f=e.env,v=f.edition,A=f.userAgent,g=t.answer,C=t.relatedTo,S=t.location.pathname,_=S.split("/"),b=!1,y=!0;_[1]&&("org"===_[1]||"people"===_[1])&&(b=_[2]&&-1!==tt.indexOf(_[2]),y=!1);var k=(0,T.compose)(te,e9)(tn(e,t)),Z=(0,ev.ib)(e),I=["question","answer"].includes(C),E=(0,eA.H8)(e)&&I,x=(0,eA.cq)(e),R=A.Mobile,M=A.Qzone,B=(0,J.YJ)(k.creationRelationship),P=(0,ev.pG)(e,B),N=null!==(o=null===(n=g.relationship)||void 0===n?void 0:n.isAuthor)&&void 0!==o?o:(0,ev.pG)(e,g.author);return{relationEndorsement:(void 0===u?{}:u)[g.id],entityWords:(void 0===c?{}:c)[g.id],draft:g&&(void 0===i?{}:i)["question_".concat(g.question.id)],draftStatus:null==r?void 0:r[g.question.id],answer:k,ua:(0,eA.Uh)(e),pathname:S,xiaomi:v.xiaomi,isShenma:v.shenma||/quark/gi.test(e.env.userAgent.origin)||A.UC,reward:h,switches:p,isHuman:E,shouldOia:(0,eA.XE)(e)&&!b,shouldSpecialOia:(0,eA.cq)(e)&&!b,isSpecialQuestionOrAnswer:(0,eA.hV)(e,{type:I&&C,id:I?"answer"===C?g.id:g.question.id:""}),isMobile:(0,eA.Hu)(e),isWechat:e.env.userAgent.Wechat,isHuaweiBrowser:/huaweibrowser/gi.test(e.env.userAgent.origin)||/huawei/gi.test(e.env.userAgent.origin)&&!e.env.userAgent.UC&&!e.env.userAgent.Wechat&&!e.env.userAgent.MQQBrowser&&!/quark/gi.test(e.env.userAgent.origin)&&!/baidu/gi.test(e.env.userAgent.origin),isHonor:/honor/gi.test(e.env.userAgent.origin)&&/MQQBrowser/gi.test(e.env.userAgent.origin),currentUser:Z,shareVideoDetail:w,isBrandAnswer:(0,ep.eP)(g),permission:(0,eC.hh)(e),ecommerce:(0,D.G_)(e,{type:"answer",urlToken:String(g.id)}),isBaidu:(0,eA.XE)(e)&&v.baidu,showCommentForOia:(0,eA.XE)(e),blockReading:R&&x&&!M,paidContent:void 0===l?{}:l,isMuteSpecial:(0,eC.gW)(k.question),isMuteFreeze:(0,eC.SZ)(k.question),isAuthor:N&&!P,isSubAuthor:P,isQuestionPage:y}},{updateAnswerReshipmentSettings:ep.eu,updateAnswerCommentPermission:ep.iM,updateAnswerCollapsed:ep.ON,updateAnswerStick:ep.Vc,deleteAnswer:ep.G,restoreAnswer:ep.f0,updateAnswer:ep.p3,loadAnswerForSettings:ep.Hh,showNotification:eg.c0,addAnnotation:em.u,cancelAnnotation:em.e,addRewardTagline:eS.OC,updateAnswerReward:ep.fT,loadAnswerRelationEndorsement:ep.Uk,fillCurrentUserIfNeeded:ev.sF,loadVideoDetails:e_.hK,readContentRightsNotification:ew.Uq,postToolsRecommend:ef.XX4,showMobileSignInModal:eC.Ky,loadAnswerEntityWords:ep.Pe}),(0,eI._)({dataPath:"answer"}),(0,eh.w)("AnswerItem"),(0,ec.O)(function(e){return{hitContentPublish:"1"===e&&"1"===ei.Z.apollo.content_publish_answer}},"ws_publish_answer",{mock:"1"}))(to)}}]);
//# sourceMappingURL=lib-2ec050f6.app.d883e7af5e9ace574cc1.js.map