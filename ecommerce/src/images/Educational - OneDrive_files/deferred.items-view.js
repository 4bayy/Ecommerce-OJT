(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([["deferred.items-view"],{2963:function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"n",function(){return s}),n.d(t,"t",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"i",function(){return l});var a=n(8),i=a.e.isActivated("7afcff20-1e17-485f-b4c3-cd152373050a","10/31/2022","Use regex to replace forms view link from parent url"),r=a.e.isActivated("48c4b3b1-6347-4a7e-a358-106d941a4bae","11/7/2022","Do not add curly braces"),o=a.e.isActivated("f5ce5bac-9b76-4614-9f5d-37e9e7c35b47","11/30/2022","always fix url regardless of file extension");function s(e){var t=e.path,n=e.parentLink,a=e.filename,i=e.isContainer,r=e.fileExtension,s=e.shouldAllowDisplayFormUrl;if(!n||!a)return t;var d=t,l=c(n),u=i&&!(o&&"one"===r)&&a&&t&&(t.indexOf(a)<0||t.indexOf(l)<0)&&-1===t.toLowerCase().indexOf("docsethome.aspx");return(!t||!s&&t.indexOf("/Forms/DispForm.aspx?ID=")>=0||u)&&(d="".concat(l,"/").concat(a)),d}function c(e){return e?i?e.replace("/Forms/All.aspx","").replace("/Forms/AllItems.aspx",""):e.replace(/\/Forms\/[^\/]*\.aspx$/i,"").replace(/\/[^\/]*\.aspx$/i,""):e}function d(e){var t=e.lastModifiedTime,n=e.modifierDates,a=e.lastModifiedTimeForRetention,i=t;return n?i=n.split(";")[0]:a&&(i=new Date(t).valueOf()-new Date(a).valueOf()>0?t:a),i}function l(e,t){return e&&t&&(r?"".concat(e,"/_layouts/15/viewer.aspx?sourcedoc={").concat(t,"}"):"".concat(e,"/_layouts/15/viewer.aspx?sourcedoc=").concat(t))||""}},3137:function(e,t,n){"use strict";n.d(t,"t",function(){return a}),n.d(t,"n",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"i",function(){return o}),n.d(t,"r",function(){return s}),n.d(t,"e",function(){return c});var a="socialBarList_968b2259",i="socialBarPanel_968b2259",r="socialBarPanelContent_968b2259",o="socialBarPanelPersona_968b2259",s="socialBarPanelPersonaDescription_968b2259",c="analyticsStatsLink_968b2259"},3271:function(e,t,n){"use strict";n.d(t,"e",function(){return h});var a=n(0),i=n("react-lib"),r=n(1999),o=n(3064),s=n(22),c=n(16),d=n(26),l=n(157),u=n(38),f=n(56),p=Object(l.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([n.e("ondemand.resx-ondemand"),n.e(563)]).then(n.bind(null,5091))];case 1:return[2,e.sent().default]}})})}),m=Object(f.t)(function(e,t){var n=t.itemKey,r=Object(s.o)(function(e){return i.createElement(p,Object(a.__assign)({},e,{itemKey:n}))},{scope:"global"});return i.createElement(d.e,Object(a.__assign)({onExecute:r},Object(u.t)(e,{itemKey:n,engagement:{name:"SocialBar",isIntentional:!0}})))}),_=(Object(c.i)()(m),n(3137)),h=function(e){function t(t){return e.call(this,t)||this}return Object(a.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.likeLabel,n=e.itemKey,a=i.createElement(o.e,{activityDescription:t,isCompact:!0});return i.createElement(s.n,{action:i.createElement(m,{itemKey:n})},function(e){var t=e.isAvailable,n=e.execute,o=t?function(){n().catch(function(){})}:void 0;return i.createElement(r.e,{disabled:!1,className:_.e,onClick:o},a)})},t}(i.Component)},4076:function(e,t,n){"use strict";var a,i;n.d(t,"e",function(){return i}),function(e){e[e.MalwareDetected=0]="MalwareDetected",e[e.ThisFileIsCheckedOut=1]="ThisFileIsCheckedOut",e[e.DLPBlocked=2]="DLPBlocked",e[e.MissingMetaData=3]="MissingMetaData",e[e.DLPWarning=4]="DLPWarning",e[e.AwaitingApproval=5]="AwaitingApproval",e[e.Trending=6]="Trending",e[e.New=7]="New",e[e.NeedsRepublishing=8]="NeedsRepublishing"}(a||(a={})),function(e){e[e.Mail=0]="Mail",e[e.CalendarEvent=1]="CalendarEvent",e[e.Teams=2]="Teams"}(i||(i={}))}}]);