"use strict";(self.webpackChunkheifetz=self.webpackChunkheifetz||[]).push([[6670],{65771:function(e,t,n){var i=n(20857),o=n(9338),r=n(22107),a=n(94707),s=n(87320),d=n(86325),l=n(55164),u=n(57477),c=n(94009),h=n(79065),p=n(49899),f=n(85626),m=n(30971),v=n(85879),g=n(47631),w=n(82806),b=n.n(w),S=n(67814),_=n.n(S),C=n(72280),y=n(14914),A=n(14168),E=n.n(A),Z=n(87363),R=n(36695),k=n(19076),P=n(87641),I=n(93206),D=n(69383),T=n(43384),M=n(2979),V=n(74128),U=n(99447),q=n(57730),F=n(22701),x=n(21060),L=n(67516),B=n.n(L),N=n(44169),z=n(92120),H=n(38889),G=n(53307),O=n(20826),W=n(25069),K=n(28435),X=n(86385),Q=n(66268),j=n(3681),Y=n(48710),$=n(617),J=n(77234),ee=n(35102),et=n(23113),en=n(6148),ei=n(38765),eo=n(93547),er=n(85576),ea=n(65277),es=n(26921),ed=n(64512),el=n(65379),eu=n(8866),ec=n(26267),eh=n(58909),ep=n(7407),ef=n(50605),em=n(10416),ev=n(71240),eg=n(67927),ew=n(9435),eb=n(96354),eS=n(19295),e_=n(85703),eC=n(84469),ey=n(86341),eA=n(20511),eE=n(99616),eZ=n(41766),eR=n(62102),ek=n(64875),eP=n(60908),eI=n(48933),eD=n(38814),eT=n(20303),eM=n(41234),eV=n(35367),eU=n(33550),eq=n(75724),eF=n(66766),ex=n(19282),eL=n(19089),eB=n(65233),eN=n(88782),ez=n(94049),eH=n(75334),eG=n(53741);function eO(){var e=(0,h._)(["字数：",""]);return eO=function(){return e},e}function eW(){var e=(0,h._)(["草稿保存于",""]);return eW=function(){return e},e}var eK={questionDetail:"questionDetail"},eX=function(e){(0,d._)(n,e);var t=(0,f._)(n);function n(e,a){(0,r._)(this,n),d=t.call(this,e,a),(0,s._)((0,i._)(d),"toolbarWrapperRef",(0,Z.createRef)()),(0,s._)((0,i._)(d),"helpDocMilestoneRef",(0,Z.createRef)()),(0,s._)((0,i._)(d),"zaRef",(0,Z.createRef)()),(0,s._)((0,i._)(d),"editableReady",function(){var e=d.props,t=e.reporter,n=e.draft;t.reportSuccess(ex.Z.editableInit),n&&t.reportSuccess(ex.Z.draftLoad)}),(0,s._)((0,i._)(d),"resetCompositionStatus",function(){d.resetCompositionStatus.timerId=setTimeout(function(){(0,eP.Z)()},3e4)}),(0,s._)((0,i._)(d),"cancelResetCompositionStatus",function(){void 0!==d.resetCompositionStatus.timerId&&(d.resetCompositionStatus.timerId=clearTimeout(d.resetCompositionStatus.timerId))}),(0,s._)((0,i._)(d),"compositionReporter",(0,eD.Z)("AnswerEditor")),(0,s._)((0,i._)(d),"onCompositionStart",function(){d.props.reporter.reportRequest(ex.Z.composition),d.compositionReporter.cancel(),d.cancelResetCompositionStatus(),d.compositionReporter(),d.resetCompositionStatus(),d.composition=!0,d.syncDraft.cancel()}),(0,s._)((0,i._)(d),"onCompositionEnd",function(){d.props.reporter.reportSuccess(ex.Z.composition),d.compositionReporter.cancel(),d.cancelResetCompositionStatus(),d.composition=!1,d.prevValue&&d.syncDraft(d.prevValue),d.prevValue=null}),(0,s._)((0,i._)(d),"onChangeContent",function(e){d.loggingDeltaTime||(d.loggingDeltaTime=!0,d.startCompositionTime=Math.floor(new Date().getTime()/1e3)),d.hasEdited=!0,d.setState({content:e,isEmpty:e.isEmpty,isTyping:!0}),d.composition?d.prevValue=e:d.syncDraft(e)}),(0,s._)((0,i._)(d),"onAfterChangeContent",function(e){requestAnimationFrame(function(){var t=e.getSelection().getIsBackward(),n=document.getSelection();if(n.rangeCount){var i=n.getRangeAt(0).cloneRange();i.collapse(t);var o=i.getBoundingClientRect();if(0===o.height){var r=i.commonAncestorContainer;if(1===r.nodeType&&(o=r.getBoundingClientRect()).height>30)return}if(0!==o.height){var a=o.bottom-(window.innerHeight-117);a>0&&window.scrollBy(0,a)}}})}),(0,s._)((0,i._)(d),"onDeleteDraftModalShow",function(){d.setState({deleteDraftModalShown:!0})}),(0,s._)((0,i._)(d),"onDeleteDraft",function(){var e=d.props,t=e.isReediting,n=e.activeTabKey;t||(n===z.Y.videoAnswer?d.editable.clearAllContent():d.editable.reset(),d.setState({draft:"",content:{toHTML:function(){return""}},isEmpty:!0})),d.deleteDraft();var i=d.props.onDeleteDraft;i&&i()}),(0,s._)((0,i._)(d),"onDeleteDraftModalHide",function(){d.setState({deleteDraftModalShown:!1})}),(0,s._)((0,i._)(d),"checkVideoSectionReady",function(e){if(!e)return q.Z.alert("没有上传视频，请上传后提交",{title:"无视频"}),!1;var t=e.videoId,n=e.isOriginal;if(t){if("zvideo"===e.type&&null==n)return q.Z.alert("没有视频类型，请选择视频为原创或转载后提交",{title:"无视频类型"}),!1}else{var i=d.editable.checkVideoStatus();if(i.isUploading)return q.Z.alert("视频上传中，请上传完成后提交",{title:"视频上传中"}),!1;if(i.hasError)return q.Z.alert("视频上传失败，请重新上传后提交",{title:"上传失败"}),!1}return!0}),(0,s._)((0,i._)(d),"checkEditorContentReady",function(){return d.editable.hasVideo("upload")?(d.handleError("video-uploading"),!1):d.editable.hasImage("upload")?(d.handleError("image-uploading"),!1):d.editable.hasImage("error")||d.editable.hasVideo("error")&&!d.editable.hasVideo("error-review")?(q.Z.alert("草稿中含有上传失败的内容，请更改后重新提交",{title:"上传失败"}),!1):!(d.editable.hasVideo("error-review")||d.editable.hasVideo("censor"))||(q.Z.alert("视频中包含未通过审核的信息，请更改后重新提交",{title:"视频未通过审核"}),!1)}),(0,s._)((0,i._)(d),"getSubmitData",function(e,t,n){var o=d.state.scheduledPublishAt,r=d.props,a=r.answer,s=r.disclaimers,l=r.settings,u=r.isReediting,c=r.getFormData,h={content:t},p=c(),f=p.isDisclaimerChecked,m=p.disclaimerType,g=p.rewardTagline,w=p.pushActivity,b=p.commentPermission,S=p.reshipmentSettings,_=p.isReport,A=p.commercialZhitaskBindInfo,E=p.thankInviterInfo;if(!u){var Z=d.props.currentUser.caEnabled?"need_payment":"allowed";h.reshipmentSettings=S||Z,h.commentPermission=b||"all"}if(h.rewardSetting={canReward:!!g,tagline:g},e)return{content:t,attachment:n,rewardSetting:h.rewardSetting,reshipmentSettings:h.reshipmentSettings,commentPermission:h.commentPermission};if(s&&s.length&&(!a||l)&&(h.disclaimerStatus=f?"open":"close",h.disclaimerType=m||"none"),h.commercialReportInfo={isReport:!!_},h.commercialZhitaskBindInfo=(0,Q.at)(A),h.isReport=!!_,o){if(D.Z.trackEvent((0,i._)(d),{action:"Click",id:5733,name:"回答"}),C.Z(o,y.Z(new Date,30))){q.Z.alert((0,v.tZ)("div",{style:{textAlign:"center"},children:"只能设置 30 分钟后的定时时间"}),{title:"定时发布"});return}h.publishAt=Math.floor(o/1e3)+0}return void 0!==w&&(h.pushActivity=w),(null==n?void 0:n.bizExt)&&(h.bizExt=(0,en.dj)(n.bizExt)),h.tableOfContentsEnabled=d.editable.hasCatalog(),Object.assign(h,(0,eN.jd)(E,"answer")),h}),(0,s._)((0,i._)(d),"canSubmit",function(){var e,t,n=null===(e=d.editable)||void 0===e?void 0:e.toHTML(),i=d.isVideoAnswer?null===(t=d.editable)||void 0===t?void 0:t.getAttachment():null;return d.isVideoAnswer?!!(i||n):!!n});var d,c=(0,i._)(d);(0,s._)((0,i._)(d),"handleSubmit",(0,o._)(function(){var e,t,n,i,o,r,a,s,d,u,h,p,f,v,g,w,b,S,_,C,y,A,E,Z,R,k,P,I,T,M,V,U;return(0,m.__generator)(this,function(m){switch(m.label){case 0:return[4,new Promise(function(e,t){c.props.authRequired([e,t])()})];case 1:m.sent(),o=c.props.reporter,null==(r=c.props.publishErrorReporter)||r.startFreshReport("answer",c.props.scene||"AnswerFormV2"),o.reportRequest(ex.Z.addAnswer),(null===(e=c.editable)||void 0===e?void 0:null===(t=e.hasFormula)||void 0===t?void 0:t.call(e))&&o.reportRequest(ex.Z.hasFormula),null==r||r.safeRecordParamCollected("hasFormula",null===(n=c.editable)||void 0===n?void 0:null===(i=n.hasFormula)||void 0===i?void 0:i.call(n));try{if(p=(h=c.props).answer,f=h.draft,v=h.isReediting,g=h.onSubmit,w=h.showNotification,S=(b=h.question).id,_=b.questionType,C=b.brand,y=h.currentUser,A=h.updateSettingsDisclaimer,E=h.loadLabel,Z=h.onCancel,R=h.useMediumEditor,!c.editable)return Z(),o.reportSuccess(ex.Z.addAnswer),[2];if(!c.canSubmit()||(k=c.editable.toHTML(),null==r||r.safeRecordParamCollected("html",null==k?void 0:k.length),(0,eT.Z)(c.props.reporter,k,".AnswerForm",c.editable),P=c.isVideoAnswer?c.editable.getAttachment():null==f?void 0:f.attachment,null==r||r.safeRecordParamCollected("attachment"),c.isVideoAnswer&&!c.checkVideoSectionReady(P))||(null==r||r.safeRecordParamCollected("video"),!c.checkEditorContentReady()))return o.reportSuccess(ex.Z.addAnswer),[2];if(null==r||r.safeRecordParamCollected("content"),I=c.getSubmitData(c.isVideoAnswer,k,(0,l._)({},P)),null==r||r.safeRecordParamCollected(),!I)return[2];return T=function(){D.Z.trackCardShow(null,{id:7879}),v||D.Z.trackEvent(null,{id:4931,action:"StatusReport"},{module:[{card:{content:[{type:"Answer",parent_token:String(S),author_member_hash_id:y.id}]}}],status:{result:"Success",event:{action:"Submit"}}})},c.props.editorEventPublisher.fire({type:"pre-publish",context:{content:I.content,imageCount:(null===(a=null===(s=c.editable)||void 0===s?void 0:s.getImages())||void 0===a?void 0:a.size)||0,videoCount:(null===(d=null===(u=c.editable)||void 0===u?void 0:u.getVideos())||void 0===d?void 0:d.size)||0}}),M=c.zaRef.current.trackEvent,V=Promise.resolve(g(I)).then(function(e){var t,n;if(c.props.editorEventPublisher.fire({type:"post-publish",context:{data:{publishAt:null==I?void 0:I.publishAt,content:null==e?void 0:null===(t=e.payload)||void 0===t?void 0:t.content}}}),null==r||r.safeRecordStageStart("post-publish"),M({action:"Answer",eventType:"Click",elementLocation:{type:"Button",moduleId:"published_successful",content:{type:"Answer",token:String(null==e?void 0:null===(n=e.payload)||void 0===n?void 0:n.id)}}},{configMap:{traceId:c.props.traceId}}),o.reportSuccess(ex.Z.addAnswer),R&&(p&&I.disclaimerStatus&&A(p.id,I.disclaimerStatus,I.disclaimerType),p&&E("answer",p.id),"commercial"===_)){var i=(null==C?void 0:C.toastAnswerDescription)||"已发布！由品牌筛选后进入推荐区。";w(i)}}).then(T).catch(function(e){var t;e.status&&(null===(t=e.status)||void 0===t?void 0:t.toString()[0])!=="5"||o.reportFail(ex.Z.addAnswer,e),v||D.Z.trackEvent(c,{id:4931,action:"StatusReport"},{status:{result:"Fail",event:{action:"Submit"}}}),null==r||r.safeReport(e,"catch in onSubmit promise"),c.props.editorEventPublisher.fire({type:"post-publish",context:{error:e}})}),U=v?"Edit":"Answer","Answer"===U&&D.Z.trackEvent(c,{id:4930}),D.Z.trackEvent(c,{action:U,is_intent:!1}),[2,V]}catch(e){throw o.reportFail(ex.Z.addAnswer,e),null==r||r.safeReport(e,"catch in handleSubmit"),e}return[2]}})})),(0,s._)((0,i._)(d),"validateBeforeCancel",function(){return d.editable.hasVideo("upload")?(d.handleError("video-uploading-draft"),!1):!d.editable.hasImage("upload")||(d.handleError("image-uploading-draft"),!1)}),(0,s._)((0,i._)(d),"onCancel",function(){var e=d.props.onCancel;d.validateBeforeCancel()&&(d.hasEdited&&d.syncDraftImmediately(),e&&e())}),(0,s._)((0,i._)(d),"onFocus",function(){"org"===d.props.question.questionType&&d.shouldAnswerOrgQuestionModalShow&&d.handleAnswerOrgQuestionModalShow(),d.setState({focusing:!0})}),(0,s._)((0,i._)(d),"onFocusWithAuth",function(){return d.onFocusAuthChecked?d.onFocus():(d.onFocusAuthChecked=!0,d.props.authRequired(d.onFocus)())}),(0,s._)((0,i._)(d),"onSelectText",function(e){d.setState({selectedText:e.replace(/\s/g,"")})}),(0,s._)((0,i._)(d),"onLoadStart",function(){d.setState({loadingShown:!0})}),(0,s._)((0,i._)(d),"onLoadEnd",function(){d.setState({loadingShown:!1})}),(0,s._)((0,i._)(d),"handleInsertZVideo",function(){d.setState({showInsertableVideoUploader:!0})}),(0,s._)((0,i._)(d),"getAllInviters",function(){var e=d.props,t=e.question;return(0,e.fetchAllInviters)(t.id)}),(0,s._)((0,i._)(d),"getToolbarSidePlugins",function(){return null}),(0,s._)((0,i._)(d),"getToolbarMenuPlugins",function(){var e=d.state.scheduledPublishAt;return(0,v.tZ)(Z.Fragment,{children:d.canUseScheduledPublish&&(0,v.BX)(F.uh,{onClick:function(){d.setUseScheduledPublish(!e),D.Z.trackEvent((0,i._)(d),{action:"Click",id:5730,name:"回答"})},children:[(0,v.tZ)(g.a,{text:!0}),e?"取消定时发布":"定时发布"]})})}),(0,s._)((0,i._)(d),"setUseScheduledPublish",function(e,t){if(e){if(t)d.setState({scheduledPublishAt:t});else{var n=y.Z(new Date,30);d.setState({initialScheduledPublishAt:n,scheduledPublishAt:n})}}else q.Z.confirm("取消后，当前设定的定时发布将不会生效，确定要取消发布吗？",{title:"取消定时发布",text:{cancel:"我再想想"}}).then(function(){d.setState({scheduledPublishAt:void 0}),D.Z.trackEvent(d,{action:"Click",id:5737,name:"回答"})}).catch(function(){D.Z.trackEvent((0,i._)(d),{action:"Click",id:5736,name:"回答"})}),D.Z.trackCardShow((0,i._)(d),{id:5735,name:"回答"})}),(0,s._)((0,i._)(d),"getEditorState",function(){return d.editable.state.editorState?d.editable.state.editorState:d.editable.getEditorState()}),(0,s._)((0,i._)(d),"toggleFullscreen",function(){var e,t,n;if(d.validateBeforeCancel()){if(d.hasEdited){d.syncDraftImmediately().finally(function(){var e,t,n;(0,eN.aH)(d.props.question.id,null===(e=d.props.answer)||void 0===e?void 0:e.id),null===(n=(t=d.props).onCancel)||void 0===n||n.call(t)});return}(0,eN.aH)(d.props.question.id,null===(e=d.props.answer)||void 0===e?void 0:e.id),null===(n=(t=d.props).onCancel)||void 0===n||n.call(t)}}),(0,s._)((0,i._)(d),"handleUploadStart",function(){d.setState({isUploading:!0})}),(0,s._)((0,i._)(d),"handleUploadEnd",function(){d.setState({isUploading:!1})}),(0,s._)((0,i._)(d),"handleUploadError",function(e,t){var n,i;switch(d.props.editorEventPublisher.fire({type:"post-upload",context:{type:t,error:e,imageCount:(null===(n=d.editable.getImages())||void 0===n?void 0:n.size)||0,videoCount:(null===(i=d.editable.getVideos())||void 0===i?void 0:i.size)||0}}),t){case"video":d.handleError("video-upload-error");break;case"image":d.handleError("image-upload-error",e)}}),(0,s._)((0,i._)(d),"handleAnswerOrgQuestionModalShow",function(){d.setState({answerModalShown:!0}),d.shouldAnswerOrgQuestionModalShow=!1}),(0,s._)((0,i._)(d),"handleAnswerModalHide",function(){d.setState({answerModalShown:!1})}),(0,s._)((0,i._)(d),"updateDraftSettings",function(){d.hasSettingsChange=!0,d.syncDraft()}),(0,s._)((0,i._)(d),"syncDraftImmediately",d.props.reporter.recordError(ex.Z.draftSave,function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.state.content;if(d.editable){var i=d.props,o=i.reporter,r=i.draft,a=d.state.lastUpdatedTime,s=n.toHTML();d.props.editorEventPublisher.fire({type:"saveDraft",context:{content:s}});var l=Math.floor(Date.now()/1e3);e=!a||d.startCompositionTime-a>180?l-d.startCompositionTime:l-a,d.setState({isTyping:!1});var u=d.props.answer,c=(void 0===u?{}:u).attachment;t=d.videoAnswerEditable||(null==c?void 0:c.type)==="zvideo"?"video_answer":(null==c?void 0:c.type)==="video"?"video_answer_v2":"normal";var h=d.isVideoAnswer?n.getAttachment():null==r?void 0:r.attachment,p=d.hasSettingsChange||(d.isVideoAnswer?!!(h||s):!!s);d.hasSettingsChange=!1;var f=d.getDraftSettings(d.isVideoAnswer);return p?d.updateDraft(s,e,t,h,f).then(function(e){var t;(null==e?void 0:null===(t=e.payload)||void 0===t?void 0:t.updatedTime)&&d.setState({lastUpdatedTime:e.payload.updatedTime}),d.loggingDeltaTime=!1,o.reportSuccess(ex.Z.draftSave),D.Z.trackEvent(d,{action:"AutoSave"})},function(e){throw o.reportFail(ex.Z.draftSave,e),e}).finally(function(){delete d.startCompositionTime}):(o.reportSuccess(ex.Z.draftSave),Promise.resolve(d.deleteDraft()))}})),(0,s._)((0,i._)(d),"syncDraft",(0,el.Z)(d.syncDraftImmediately,2e3)),(0,s._)((0,i._)(d),"getDraftSettings",function(e){var t=d.props,n=t.answer,i=t.disclaimers,o=t.settings,r=t.isReediting,a=t.getFormData,s={},l=a(),u=l.isDisclaimerChecked,c=l.disclaimerType,h=l.rewardTagline,p=l.pushActivity,f=l.commentPermission,m=l.reshipmentSettings,v=l.isReport,g=l.thankInviterInfo,w=void 0===g?"":g;if(!r){var b=d.props.currentUser.caEnabled?"need_payment":"allowed";s.reshipmentSettings=m||b}if(s.commentPermission=f||"all",s.canReward=!!h,s.tagline=h,e)return s;i&&i.length&&(!n||o)&&(s.disclaimerStatus=u?"open":"close",s.disclaimerType=c||"none"),s.commercialReportInfo={is_report:!!v},void 0!==p&&(s.pushActivity=p),s.tableOfContentsEnabled=d.editable.hasCatalog();var S=(0,eN.jd)(w);return s.thankInviterStatus=S.thankInviterStatus,s.thankInviter=S.thankInviter,s}),(0,s._)((0,i._)(d),"updateDraft",function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=d.props,o=i.question.id,r=i.draft,a=i.addDraft,s=i.updateDraft;return r?s.apply(void 0,[o].concat((0,p._)(t))):a.apply(void 0,[o].concat((0,p._)(t)))}),(0,s._)((0,i._)(d),"focus",function(){d.editable&&d.editable.focus()}),(0,s._)((0,i._)(d),"hasVideo",function(){return!!d.editable&&d.editable.hasVideo()}),(0,s._)((0,i._)(d),"hasADLinkCard",function(){return!!d.editable&&d.editable.hasADLinkCard()}),(0,s._)((0,i._)(d),"hasFeeConsultCard",function(){return!!d.editable&&d.editable.hasFeeConsultCard()}),(0,s._)((0,i._)(d),"hasMCNLinkCard",function(){return!!d.editable&&d.editable.hasMCNLinkCard()}),(0,s._)((0,i._)(d),"hasCommercialReport",function(){var e=d.props.getFormData().commercialReportInfo;return null==e?void 0:e.isReport}),(0,s._)((0,i._)(d),"handleChangeCommentPermission",function(e,t){d.setState({commentPermission:void 0===t?e:t})}),(0,s._)((0,i._)(d),"handleReshipmentSettings",function(e){"need_payment"!==e||d.props.currentUser.caEnabled||window.open("/copyright/invite"),d.setState({reshipmentSettings:e})}),(0,s._)((0,i._)(d),"handleError",function(e,t){(0,ee.Xc)(e,t,d.props.showNotification)}),(0,s._)((0,i._)(d),"handleBeforeVideoUpload",function(){var e=d.props.question;return!e.relationship||!e.relationship.isAnonymous}),(0,s._)((0,i._)(d),"handleReverted",function(e){d.editable.resetWithValue(e.draft.content)}),(0,s._)((0,i._)(d),"toggleMarkdownEnabled",function(){var e=d.state.markdownEnabled;d.setState({markdownEnabled:!e}),d.props.updateMarkdownSettings({markdownEnabled:!e})}),(0,s._)((0,i._)(d),"getDraftStatus",function(){var e=d.props.draft,t=d.state,n=t.isTyping,i=t.dateNow;return e?e.updating||n?"草稿保存中…":e.updated&&i<1e3*e.updatedTime+6e4?"草稿已保存":e.updateFailed?(0,v.tZ)("span",{className:"AnswerForm-draftStatus--failed",children:"草稿保存失败"}):b()(eW(),(0,N.rL)(e.updatedTime)):""}),(0,s._)((0,i._)(d),"handleEditGGRCard",function(e){var t=e.type,n=e.payload,i=d.state.mcnEditingGood,o=d.props.updateLinkCard;if("goodsEditor/submitNewGoodsInfo"===t){o((0,u._)((0,l._)({},i),{title:null==n?void 0:n.title})).finally(function(){d.setState({mcnEditingGood:null}),d.editable.handleCommand("edit-mcn-link-card:".concat(i.id))});return}if("goodsEditor/closeGoodsEditor"===t){d.setState({mcnEditingGood:null});return}}),(0,s._)((0,i._)(d),"shouldShowProfit",function(){return d.props.showUserProfitButton&&!d.isVideoAnswer}),(0,s._)((0,i._)(d),"getSentences",function(){var e;return d.props.isReediting&&(null===(e=d.props.answer)||void 0===e?void 0:e.id)?d.props.getInteractText("answers",d.props.answer.id).then(function(e){var t;return null==e?void 0:null===(t=e.payload)||void 0===t?void 0:t.data}):null}),(0,s._)((0,i._)(d),"createEditorPlugins",function(){var e,t,n,o=(0,ey.Z)({type:"question",id:d.props.question.id,draftType:(null===(e=d.props.answer)||void 0===e?void 0:e.id)?"answer":void 0,draftId:null===(t=d.props.answer)||void 0===t?void 0:t.id,syncDraft:d.syncDraft}),r=(0,eR.ZP)({getShouldShowToolbarButton:function(){return!d.isVideoAnswer},getAllInviters:d.getAllInviters,inviterQuery:d.props.inviterQuery,getInitialThankInviterInfo:function(){return d.props.thankInviterInfo},syncDraftImmediately:d.syncDraftImmediately}),a=(0,ek.Z)({shouldDisabled:function(){return d.props.question.relationship.isAnonymous},shouldShow:function(){return d.shouldShowProfit()},getContentInfo:function(){var e;return{type:"answer",id:null===(e=d.props.answer)||void 0===e?void 0:e.id}}}),s=(0,eC.Z)(),l=(0,eZ.Z)({sourceType:"answer",sourceId:null===(n=d.props.question)||void 0===n?void 0:n.id});d.helpDocPlugin=(0,eA.Z)({getInitialOffset:d.getHelpDocInitialOffset,getShouldHide:d.getShouldHideHelpDoc,forceUpdate:d.forceUpdate.bind((0,i._)(d))});var u=(0,eE.Z)({onToggle:d.toggleMarkdownEnabled});return[(0,G.Z)({getSentences:d.getSentences}),o,r,a,s,l,d.helpDocPlugin,u]}),(0,s._)((0,i._)(d),"renderRichInput",function(){var e,t,n,i=d.props,o=i.answer,r=(void 0===o?{}:o).attachment,a=i.answer,s=i.question,c=i.isReediting,h=i.draft,p=i.defaultValue,f=d.state,m=f.toolbarMenuAttention,g=f.scheduledPublishAt,w=f.initialScheduledPublishAt,b=d.props.getFormData().tableOfContentsEnabled,S="".concat(c?"修改":"写","回答...");"commercial"===s.questionType&&(S=null===(e=s.brand)||void 0===e?void 0:e.editorDescription),d.isVideoAnswer&&(S="详细介绍下视频（选填）");var _=d.videoAnswerEditable||(null==h?void 0:h.type)==="video_answer"||(null==r?void 0:r.type)==="zvideo";h?t=null==h?void 0:h.attachment:(null==r?void 0:r.type)==="zvideo"?t=r.zvideo:(null==r?void 0:r.type)==="video"&&(t=(0,u._)((0,l._)({},null===(n=r.video)||void 0===n?void 0:n.videoInfo),{videoId:r.attachmentId}));var C={ref:function(e){return d.editable=e},answer:a,question:s,toolbarMenuAttention:m,scheduledPublishAt:g,initialScheduledPublishAt:w,placeholder:S,draft:h,defaultValue:p,isLegacyVideoAnswer:_,defaultVideo:t,videoAnswerEditable:d.videoAnswerEditable,videoAnswerPublished:d.videoAnswerPublished,editableReady:d.editableReady,handleChangeContent:d.onChangeContent,handleAfterChangeContent:d.onAfterChangeContent,handleFocusWithAuth:d.onFocusWithAuth,handleSelectText:d.onSelectText,handleSubmit:d.handleSubmit,handleError:d.handleError,handleLoadStart:d.onLoadStart,handleLoadEnd:d.handleLoadEnd,handleUploadStart:d.handleUploadStart,handleUploadEnd:d.handleUploadEnd,handleUploadError:d.handleUploadError,handleBeforeVideoUpload:d.handleBeforeVideoUpload,handleMCNLinkCardEdit:function(e,t){d.setState({mcnEditingGood:t})},isVideoAnswer:d.isVideoAnswer,handleInsertZVideo:d.handleInsertZVideo,getToolbarSidePlugins:d.getToolbarSidePlugins,createEditorPlugins:d.createEditorPlugins,getToolbarMenuPlugins:d.getToolbarMenuPlugins,getEditorBeforePlugins:d.getEditorBeforePlugins,setUseScheduledPublish:d.setUseScheduledPublish,allowToolbar:!1,onAnyChange:d.handleAnyChange,docPluginProps:(0,eB.Z)(d.props.creatorRightStatus),tableOfContentsEnabled:b,getMarkdownEnabled:function(){return d.state.markdownEnabled},videoSource:"answer"};return(0,v.tZ)(eU.Z,(0,l._)({},C))}),(0,s._)((0,i._)(d),"handleAnyChange",function(e){var t=e.editorState;d.setState({editorState:t})}),(0,s._)((0,i._)(d),"handleKeyCommand",function(e){if(!d.editable)return"not-handled";var t=d.editable.handleKeyCommand(e);return"toggle-catalog"===e&&requestAnimationFrame(function(){d.forceUpdate(),d.syncDraftImmediately()}),t}),(0,s._)((0,i._)(d),"queryCommandEnable",function(e,t){return!!d.editable&&d.editable.queryCommandEnable(e,t)}),(0,s._)((0,i._)(d),"queryCommandState",function(e,t){return!!d.editable&&d.editable.queryCommandState(e,t)}),(0,s._)((0,i._)(d),"getHelpDocInitialOffset",function(){var e=d.toolbarWrapperRef.current;if(e){var t=e.getBoundingClientRect(),n=d.props.useMediumEditor?t.bottom-50:t.bottom+20;return document.documentElement.clientWidth-t.right>328?{top:n,left:t.right+18}:{top:n,right:0}}}),(0,s._)((0,i._)(d),"getShouldHideHelpDoc",function(){if(!d.props.useMediumEditor)return!1;var e=d.helpDocMilestoneRef.current;return!!e&&e.getBoundingClientRect().top<117}),(0,s._)((0,i._)(d),"getAnswerFormRef",function(){return d.props.imperativeRef}),(0,s._)((0,i._)(d),"handleCloseWriteShieldModal",function(){if(d.props.useMediumEditor){var e,t;null===(t=(e=d.props).onCancel)||void 0===t||t.call(e);return}window.close(),requestAnimationFrame(function(){window.location.href="https://www.zhihu.com"})});var h=d.props,f=h.defaultValue,w=h.draft,S=w?w.editableContent:f,_=w?w.updatedTime:0;return d.state={draft:S,content:{toHTML:function(){return S}},isEmpty:!S,isTyping:!1,reshipmentSettings:null,commentPermission:null,answerModalShown:!1,focusing:!1,selectedText:null,loadingShown:!1,isUploading:!1,rewardNotication:!0,toolbarMenuAttention:null,dateNow:0,rewardModalShown:!1,lastUpdatedTime:_,showInsertableVideoUploader:!1,mcnEditingGood:null,initialScheduledPublishAt:void 0,scheduledPublishAt:void 0,thankInviterInfo:e.thankInviterInfo||e.inviterFromNotification,editorState:null,rightArea:null,markdownEnabled:!1},d.hasEdited=!1,d}return(0,a._)(n,[{key:"canUseScheduledPublish",get:function(){var e=this.props,t=e.currentUser,n=e.isReediting,i=e.activeTabKey;return t&&t.autoSendingCreations&&i===z.Y.textAnswer&&!n}},{key:"componentDidMount",value:function(){var e,t,n,i=this;this.props.editorEventPublisher.setCommonMessage({traceId:this.props.traceId}),(0,W.$)(this.props.editorEventPublisher),this.props.editorEventPublisher.fire({type:"mount",context:{currentUserId:null===(e=this.props.currentUser)||void 0===e?void 0:e.id,href:window.location.href,browserContentScripts:(0,ea.l)(),content:this.props.defaultValue}}),null===(t=this.props.writeShield)||void 0===t||null===(n=t.setOnModalClose)||void 0===n||n.call(t,this.handleCloseWriteShieldModal);var o=this.props,r=o.reporter,a=o.draft,s=o.question.id,d=o.getBio,l=o.loadCreatorRightStatus;d(s),l(),r.reportRequest(ex.Z.editableInit),a&&(r.reportRequest(ex.Z.draftLoad),this.props.editorEventPublisher.fire({type:"loadDraftSuccess",context:{content:a.editableContent}})),this.shouldAnswerOrgQuestionModalShow=!eF.Z.getKnown(),this.onFocusAuthChecked=!1;var u=this.props,h=u.fillCurrentUserIfNeeded,p=u.getUserProfitPermission,f=h(["lastCommentPermission","caEnabled","autoSendingCreations","mcn_user_info"]);p(),Promise.resolve(f).then(function(){et.Z.getActionsByNames(["a_draft_history",i.canUseScheduledPublish&&"auto_pub_answer"].filter(Boolean)).then(function(e){var t=(0,c._)(e,1)[0];t&&(i.setState({toolbarMenuAttention:t.description}),et.Z.markAsShown(t),"auto_pub_answer"===t.guide_name&&D.Z.trackCardShow(i,{id:5738}))}),D.Z.trackCardShow(i,{id:5729,name:"回答"})}),document.addEventListener("compositionstart",this.onCompositionStart),document.addEventListener("compositionend",this.onCompositionEnd),window.onbeforeunload=function(){return window.name="",i.state.isUploading||i.composition||i.syncDraft.pending()||i.props.draft&&i.props.draft.updating?"草稿尚未保存完毕，确定离开此页？":void 0},this.setState({dateNow:Date.now()}),this.reRenderTimer=setInterval(function(){return i.setState({dateNow:Date.now()})},6e4),this.props.imperativeRef&&(this.props.imperativeRef.current={focus:this.focus,hasVideo:this.hasVideo,hasADLinkCard:this.hasADLinkCard,hasMCNLinkCard:this.hasMCNLinkCard,hasFeeConsultCard:this.hasFeeConsultCard,toggleFullscreen:this.toggleFullscreen,hasCommercialReport:this.hasCommercialReport,hasEditorContent:function(){return!i.state.isEmpty}}),(0,J.a)(["r","t","e"])}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this,n=this.props.reporter,i=this.state,o=e.currentUser,r={};i.reshipmentSettings||void 0===o.caEnabled||(r.reshipmentSettings=o.caEnabled?"need_payment":"allowed"),i.commentPermission||void 0===o.lastCommentPermission||(r.commentPermission=o.lastCommentPermission),Object.keys(r).length&&this.setState(r),this.draftLoaded||this.state.draft||this.props.draft||!e.draft||(n.wrapAutoRecord(ex.Z.draftLoad,function(){var n=e.draft.editableContent;t.props.editorEventPublisher.fire({type:"loadDraftSuccess",context:{content:n||""}}),n&&(t.setState({draft:n,isEmpty:!n,content:{toHTML:function(){return n}}}),t.editable&&!t.editable.toHTML()&&t.editable.resetWithValue(n))})(),this.draftLoaded=!0)}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.state,i=n.focusing,o=n.thankInviterInfo,r=this.props,a=r.tagline,s=r.inviterFromNotification;if(a){var d=B().get("rewardNotication");i&&!d&&(this.setState({rewardNotication:!1}),B().set("rewardNotication",!0),this.timeout=setTimeout(function(){t.setState({rewardNotication:!0})},2e3))}o||!s||e.inviterFromNotification||this.setState({thankInviterInfo:s})}},{key:"componentWillUnmount",value:function(){this.props.editorEventPublisher.fire({type:"unmount"});var e=this.props.editorEventPublisher;setTimeout(function(){e.unsubscribe()},4e4),this.syncDraft.cancel(),this.compositionReporter.cancel(),this.cancelResetCompositionStatus(),document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd),window.onbeforeunload=null,this.timeout&&clearTimeout(this.timeout),this.reRenderTimer&&clearInterval(this.reRenderTimer),this.props.imperativeRef&&(this.props.imperativeRef.current=null),(0,J.n)()}},{key:"getCloneContent",value:function(){return this.getEditorState().getCurrentContent()}},{key:"deleteDraft",value:function(){var e=this.props,t=e.question,n=e.draft,i=e.deleteDraft;if(n)return i(t.id)}},{key:"renderFooter",value:function(){var e=this,t=this.props,n=t.isReediting,i=t.useMediumEditor,o=t.draft,r=this.state,a=r.content,s=r.scheduledPublishAt,d=r.markdownEnabled,l=n&&this.isVideoAnswer,u=a.toHTML()||"",c=i?j.vQ:j.$_;return(0,v.BX)(c,{hideScrollButton:l,getContaner:function(){return e.form},isAnswer:!0,children:[(0,v.BX)(P.Flex,{children:[(0,v.tZ)(P.Text,{color:"GBL05A",fontSize:"14px",ml:l?"0":"24px",children:b()(eO(),(0,eo.Xs)(u,!0))}),d&&(0,v.tZ)(X.Z,{})]}),(0,v.tZ)(P.Text,{color:"GBL05A",fontSize:"14px",ml:"auto",children:this.getDraftStatus()}),i&&n&&(0,v.tZ)(H.ZP,{zaType:"Button",zaText:!0,color:"grey",preset:"secondary",css:{marginLeft:"24px"},onClick:this.onCancel,children:o?"保存草稿并离开":"取消"}),(0,v.tZ)(eM.M,{canSubmit:this.canSubmit(),handleSubmit:this.handleSubmit,isReediting:n,scheduledPublishAt:s,type:"answer",css:{marginLeft:"24px"}})]})}},{key:"videoAnswerPublished",get:function(){var e=this.props.answer,t=(void 0===e?{}:e).attachment;return["zvideo","video"].includes(null==t?void 0:t.type)}},{key:"videoAnswerEditable",get:function(){return this.props.activeTabKey===z.Y.videoAnswer}},{key:"isVideoAnswer",get:function(){return this.videoAnswerPublished||this.videoAnswerEditable}},{key:"render",value:function(){var e,t,n=this,i=this.props,o=i.className,r=i.isReediting,a=i.answer,s=(void 0===a?{}:a).answerType,d=i.question,c=i.currentUser,h=i.answer,p=i.draft,f=i.activeTabKey,m=i.useMediumEditor,g=i.showUserProfitButton,w=this.state,b=w.deleteDraftModalShown,S=w.showInsertableVideoUploader,C=w.mcnEditingGood,y=w.editorState,A=w.initialScheduledPublishAt,E=w.scheduledPublishAt,Z=w.rightArea,R=m?{offset:52,container:function(){return n.form}}:{getStyle:function(){return{width:"100%",top:0,left:0}}};return(0,v.BX)(U.r,{module:"AnswerEditView",content:{type:"Answer",parent_token:String(d.id),author_member_hash_id:c.id},children:[(0,v.BX)("form",{ref:function(e){n.form=e},className:_()("AnswerForm",o),onSubmit:function(e){return e.preventDefault()},noValidate:!0,css:[{borderBottom:"none"},m?{".AnswerForm-editor .Editable_CatalogV2":{width:"140px",left:"-164px"}}:{".AnswerForm-editor .Editable_CatalogV2":{width:"180px",left:"-260px"}}],children:[(0,v.tZ)(T.pS,{ref:this.zaRef}),!!(this.isVideoAnswer&&(null===(e=this.props.writeShield)||void 0===e?void 0:null===(t=e.commands)||void 0===t?void 0:t.write)&&!this.props.writeShield.commands.write.instruction&&!this.props.writeShield.isLoading)&&(0,v.tZ)(es.H2,{writeScene:{type:"zvideo"},onClose:this.handleCloseWriteShieldModal}),(0,v.BX)("div",{children:[(0,v.tZ)(eL.Z,{editorFrom:m?"answer-pc-editor-modified":"answer-pc-editor-full"}),this.editable&&(0,v.tZ)(x.Z,(0,u._)((0,l._)({},R),{children:(0,v.tZ)("div",{ref:this.toolbarWrapperRef,css:function(e){return{display:"flex",justifyContent:"center",margin:"0px auto",background:e.colors.GBK99A}},children:(0,v.tZ)(eq.Z,{editorState:y,onCommand:this.handleKeyCommand,queryCommandEnable:this.queryCommandEnable,queryCommandState:this.queryCommandState,showUserProfitButton:g,isVideoAnswer:this.isVideoAnswer,onInsertVideoClick:this.handleInsertZVideo,useMediumEditor:m,getMarkdownEnabled:function(){return n.state.markdownEnabled}},f)})})),(0,v.BX)("div",{css:function(e){return[{position:"relative",".Editable":{paddingTop:"1px",minHeight:"calc(100vh - 120px)"}},m?{width:"694px",margin:"0 auto",background:e.colorMod(e.colors.GBK10C).alpha(.45),".Editable-content":{paddingBottom:"62px"}}:{width:"782px",margin:"20px auto",".AnswerForm-editor .RichText--editable":{paddingLeft:64,paddingRight:64}}]},children:[Z===eK.questionDetail&&(0,v.tZ)(ez.G,{question:d,onClose:function(){n.setState({rightArea:null})}}),!m&&(0,v.tZ)(ez.Z,{question:d,onClick:function(){return n.setState({rightArea:eK.questionDetail})}}),(0,v.tZ)("div",{css:{minHeight:"calc(100vh - 120px)"},children:this.renderRichInput()}),(0,v.tZ)("div",{ref:this.helpDocMilestoneRef}),(0,v.tZ)(eV.Z,{question:d,answer:h,isVideoAnswer:this.isVideoAnswer,isReediting:r,setUseScheduledPublish:this.setUseScheduledPublish,canScheduledPublish:this.canUseScheduledPublish,initialScheduledPublishAt:A,scheduledPublishAt:E,draft:p,getAnswerFormRef:this.getAnswerFormRef,css:!m&&{paddingLeft:"54px",paddingRight:"64px"},updateDraftSettings:this.updateDraftSettings,getInitialEnableMarkdown:function(e){return n.setState({markdownEnabled:e})}})]})]}),"org"===d.questionType&&(0,v.tZ)(eF.Z,{shown:this.state.answerModalShown,onClose:this.handleAnswerModalHide}),(0,v.tZ)(e_.Z,{title:"清除草稿",subtitle:r?"你确定要清除保存的草稿并取消编辑吗？":"你确定要清除保存的草稿吗？",shown:b,onCancel:this.onDeleteDraftModalHide,onSubmit:this.onDeleteDraft}),S&&(0,v.tZ)($.Z,{show:S,onClose:function(){return n.setState({showInsertableVideoUploader:!1})},onZVideoSubmit:function(e){n.setState({showInsertableVideoUploader:!1}),n.editable.handleCommand("insert-zvideo-card:".concat(JSON.stringify(e)))},onVideoSubmit:function(e){n.setState({showInsertableVideoUploader:!1}),n.editable.handleCommand("insert-video-card",e)}}),(0,v.tZ)(V.Z,{className:"AnswerForm-MCNEditor",title:"编辑商品",onClose:function(){n.setState({mcnEditingGood:null})},children:!!C&&(0,v.tZ)(M.Z,{className:"AnswerForm-MCNEditorIframe",src:(0,ei.l6)({title:C.title,originTitle:C.originTitle,source:C.source,sourceId:C.sourceId,productTypeName:C.productTypeName}),onMessage:this.handleEditGGRCard})}),(0,v.tZ)(eS.Z,{onClose:function(){window.location.href="https://www.zhihu.com/question/".concat(d.id,"/answer/").concat(h.id)},shown:"slideshow"===s})]}),this.renderFooter()]})}}]),n}(Z.Component);(0,s._)(eX,"propTypes",{activeTabKey:E().string,question:E().object,isReediting:E().bool,defaultValue:E().string,getFormData:E().func,reporter:E().object,scene:E().string}),(0,s._)(eX,"defaultProps",{isReediting:!1});var eQ={addDraft:ew.uN,updateDraft:ew._u,deleteDraft:ew.R5,showNotification:eg.c0,fillCurrentUserIfNeeded:eh.sF,updateSettingsDisclaimer:eu.Md,loadLabel:em.T$,getUserProfitPermission:eb.Yr,updateLinkCard:ev.ko,fetchAllInviters:ew.qX,getBio:ew.IF,loadCreatorRightStatus:ec.Xd,updateMarkdownSettings:ew.zp,getInteractText:ef.k};t.Z=(0,I.compose)((0,es.ZP)({init:!0,getScene:function(e){return{type:"answer",token:String(e.question.id)}}}),K.g,Y.SS,O.eU,eG.Z,k.withRouter,er.Z,(0,R.connect)(function(e,t){var n,i,o=e.entities,r=o.questions,a=o.drafts,s=e.question,d=t.location.query.inviter,l=(0,eh.ib)(e),u=(0,ew.em)(e,t.question.id),c=d&&(null==u?void 0:null===(n=u.find)||void 0===n?void 0:n.call(u,function(e){return e.id===d})),h=(void 0===a?{}:a)["question_".concat(t.question.id)];return{question:r[t.question.id]||t.question,draft:h,currentUser:l,isPuQuestion:!!(s&&s.brand&&s.brand.isPuQuestion),disclaimers:s.disclaimers[t.question.id],settings:t.answer?e.answers.settings[t.answer.id]:null,showUserProfitButton:e.userProfit.permission.visible,thankInviterInfo:null===(i=(0,em.yM)(e,t.answer))||void 0===i?void 0:i.thankInviterInfo,allInviters:u,inviterQuery:d,inviterFromNotification:c,isOffice:(0,ep.Xj)(e),creatorRightStatus:(0,ec.Sy)(e)}},eQ),eH.Z,eI.l0,ea.ZP,ed.FK)(eX)}}]);
//# sourceMappingURL=lib-9b20c40c.fb0b5d64b1187e2a7376.js.map