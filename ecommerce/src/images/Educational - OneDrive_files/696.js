(window.odspNextWebpackJsonp=window.odspNextWebpackJsonp||[]).push([[696],{2011:function(e,t,n){"use strict";n.r(t),n.d(t,"createItemsScopeActionFromKnockout",function(){return l});var a=n(0),i=(n(2250),n("react-lib")),r=n(22),o=n(71),s=n(2230),c=n(2453),d=n(1278);function l(e,t){return void 0===t&&(t={}),function(n){var a=n.itemKey;return i.createElement(c.e,{itemKey:a},i.createElement(u,{createKnockoutAction:e,options:t,actionProps:n}))}}function u(e){var t=this,n=e.createKnockoutAction,c=e.options,l=e.actionProps,u=c.isToggleable,f=void 0!==u&&u,p=c.isExecutorOnly,m=void 0!==p&&p,_=Object(o.n)(),h=Object(d.e)(function(){return n(_,l)},[]),b=Object(s.t)(!!m||h.isAvailable),g=Object(s.t)(f?h.isToggled:void 0);return i.createElement(r.e,{isAvailable:b,onExecute:function(e){return Object(a.__awaiter)(t,void 0,void 0,function(){return Object(a.__generator)(this,function(t){switch(t.label){case 0:return[4,h.execute(e.event)];case 1:return t.sent(),[2]}})})},isToggled:g})}},2213:function(e,t,n){"use strict";n.d(t,"t",function(){return u}),n.d(t,"i",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"e",function(){return _});var a=n(0),i=n(10),r=n(172),o=n(190),s=n(218),c=n(1406),d=n(328),l="@ms/odsp-shared/lib/base/BaseModel",u=new i.t({name:"".concat(l,".asyncType"),factory:new i.e(s.e)}),f=new i.t({name:"".concat(l,".observablesFactoryType"),factory:new r.a(c.e,{asyncType:u.optional})}),p=new i.t({name:"".concat(l,".eventGroupType"),factory:new i.e(o.t)}),m=new i.t({name:"".concat(l,".errorHandler")}),_=function(e){function t(t,n){void 0===t&&(t={}),void 0===n&&(n={});var a=e.call(this,t,n)||this,i=t.id,r=void 0===i?"":i;return a.id=r,a._BaseModel_dependencies=n,a}return Object(a.__extends)(t,e),Object.defineProperty(t.prototype,"async",{get:function(){return this._BaseModel_getAsync()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"events",{get:function(){return this._BaseModel_getEvents()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"observables",{get:function(){return this._BaseModel_getObservables()},enumerable:!1,configurable:!0}),t.prototype.subscribe=function(e,t,n){return this.observables.subscribe(e,t,{isBeforeChange:n})},t.prototype.createComputed=function(e,t){return this.observables.compute(e,t)},t.prototype.createPureComputed=function(e,t){return this.observables.pureCompute(e,t)},t.prototype.createBackgroundComputed=function(e,t){return this.observables.backgroundCompute(e,t)},t.prototype.addDisposable=function(e){return this.scope.attach(e)},t.prototype.trackPromise=function(e){var t=!1,n=this.scope.attach({dispose:function(){!t&&e.cancel&&e.cancel()}}),a=function(){t=!0,n.dispose()};return e.done(a,a),e},t.prototype.wrapObservable=function(e){return this.observables.wrap(e)},t.prototype.peekUnwrapObservable=function(e){return Object(c.a)(e)},t.prototype.createObservable=function(e){return this.observables.create(e)},t.prototype.unwrapObservable=function(e){return Object(c.i)(e)},t.prototype.isObservable=function(e){return Object(c.n)(e)},t.prototype._BaseModel_getAsync=function(){var e=new(this.scope.attached(this._BaseModel_getAsyncType()))(this,this._BaseModel_getErrorHandler());return this._BaseModel_getAsync=function(){return e},e},t.prototype._BaseModel_getEvents=function(){var e=new(this.scope.attached(this._BaseModel_getEventGroupType()))(this,this._BaseModel_getErrorHandler());return this._BaseModel_getEvents=function(){return e},e},t.prototype._BaseModel_getObservables=function(){var e=new(this.scope.attached(this._BaseModel_getObservablesFactoryType()))({owner:this});return this._BaseModel_getObservables=function(){return e},e},t.prototype._BaseModel_getAsyncType=function(){return this._BaseModel_dependencies.asyncType||this.resources&&this.resources.consume(u.optional)||s.e},t.prototype._BaseModel_getEventGroupType=function(){return this._BaseModel_dependencies.eventGroupType||this.resources&&this.resources.consume(p.optional)||o.t},t.prototype._BaseModel_getObservablesFactoryType=function(){return this._BaseModel_dependencies.observablesFactoryType||this.resources&&(this.resources.consume(f.optional)||Object(i.i)(c.e,{asyncType:this._BaseModel_getAsyncType()}))||c.e},t.prototype._BaseModel_getErrorHandler=function(){return this._BaseModel_dependencies.errorHandler||this.resources&&this.resources.consume(m.optional)},t.dependencies=Object(a.__assign)(Object(a.__assign)({},d.e.dependencies),{asyncType:u.optional,observablesFactoryType:f.optional,eventGroupType:p.optional,errorHandler:m.optional}),t}(d.e);t.n=_},2230:function(e,t,n){"use strict";n.d(t,"t",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"n",function(){return u}),n(0);var a=n("react-lib"),i=n(71),r=n(1406),o=n(2213),s=n(204),c=n(329);function d(e){var t=u(),n=t.peekUnwrap(e),i=a.useState(function(){return n})[1];return a.useEffect(function(){if(t.isObservable(e)){i(function(){return e.peek()});var n=t.subscribe(e,function(e){i(function(){return e})});return function(){n.dispose()}}},[e]),n}function l(e,t){var n,i=null!==(n=null==t?void 0:t.inline)&&void 0!==n&&n,r=u(),o=a.useRef(),d=o.current||(o.current=Object(s.e)(r.create(e),{equalityComparer:c.e}));return(i?a.useMemo:a.useEffect)(function(){d(e)},[e]),d}function u(){var e=Object(i.n)(),t=a.useRef(),n=t.current||(t.current=new(e.consume(o.i.optional)||r.e));return a.useLayoutEffect(function(){return function(){n.dispose()}},[]),n}},2246:function(e,t,n){"use strict";n.d(t,"e",function(){return c});var a=n(0),i=n("knockout-lib");"boolean"==typeof i.options.preferJQueryEvents?i.options.preferJQueryEvents=!1:"boolean"==typeof i.options.useOnlyNativeEvents&&(i.options.useOnlyNativeEvents=!0);var r=n(10),o=n(713),s=n(2264);function c(e){var t,n;if(e&&e.$data&&e.$data.resources)return e.$data.resources;for(;(!(n=e.$data)||"object"!=typeof n||!(t=n.resources))&&e.$parentContext;)e=e.$parentContext;return t}var d={loadViewModel:function(e,t,n){n(function(n,d){void 0===n&&(n={});var l,u=i.contextFor(d.element),f=i.utils.unwrapObservable(n.resources)||c(u),p={owner:e,useFactoriesOnKeys:!0},m=f?new r.n(f,p):new r.n(p);n=Object(a.__assign)(Object(a.__assign)({},n),{resources:m}),l=function(e){return"function"==typeof e.createViewModel}(t)?t.createViewModel(n,d):new(m.injected(t))(n);var _=new s.e({name:e,viewModel:l,element:d.element,bindingContext:u});return Object(o.e)(l,function(){_.dispose(),m.dispose()})})}};i.components.loaders.unshift(d)},2249:function(e,t,n){"use strict";var a=n("knockout-lib"),i=function(){function e(){this._originalProvider=new a.bindingProvider,this._bindingHandlers={},this._bindingContexts=[]}return e.getInstance=function(){return e._instance},e.prototype.nodeHasBindings=function(e){return this._originalProvider.nodeHasBindings(e)},e.prototype.getBindings=function(e,t){try{this._bindingContexts.push(t);var n=this._originalProvider.getBindings(e,t);return n&&this._remapKeys(n,t)}finally{this._bindingContexts.pop()}},e.prototype.getBindingAccessors=function(e,t){try{this._bindingContexts.push(t);var n=this._originalProvider.getBindingAccessors(e,t);return n&&this._remapKeys(n,t)}finally{this._bindingContexts.pop()}},e.prototype.getBindingHandler=function(e){var t=this._bindingContexts.slice(-1)[0];if(t){var n=this._getLocalBindingHandlers(t);if(n){var i=n[e];e=i&&this.getUniqueKeyForBindingHandler(i,e)||e}}return this._bindingHandlers[e]||a.bindingHandlers[e]},e.prototype.getUniqueKeyForBindingHandler=function(t,n){var i=e._BINDING_PROVIDER_UNIQUE_KEY,r=t[i]=t[i]||n+"-local-"+ ++e._lastUniqueKeyOrdinal;return this._bindingHandlers[r]={init:t.init&&t.init.bind(t),update:t.update&&t.update.bind(t),options:t.options,preprocess:t.preprocess&&t.preprocess.bind(t)},this._bindingHandlers[r].after=t.after,t.supportsVirtualElements&&(a.virtualElements.allowedBindings[r]=!0),r},e.prototype._remapKeys=function(e,t){var n=e,a=this._getLocalBindingHandlers(t);if(a)for(var i in n={},e){var r=a[i];n[r&&this.getUniqueKeyForBindingHandler(r,i)||i]=e[i]}return n},e.prototype._getLocalBindingHandlers=function(e){for(var t;!(t="object"==typeof e.$data&&e.$data.bindingHandlers)&&e.$parentContext;)e=e.$parentContext;return t},e._instance=new e,e._BINDING_PROVIDER_UNIQUE_KEY="__localBindingProvider__uniqueKey",e._lastUniqueKeyOrdinal=0,e}().getInstance();a.getBindingHandler=i.getBindingHandler.bind(i),a.bindingProvider.instance=i},2250:function(e,t,n){"use strict";var a=n("knockout-lib");n(2246),n(2249),window.__ko=a},2264:function(e,t,n){"use strict";var a="__ResourceComponentLoader$componentName",i="__ResourceComponentLoader$componentId",r="__ResourceComponentLoader$childComponents",o="__ResourceComponentLoader$parentComponentViewModel",s="__ResourceComponentLoader$componentBindingElement",c=0,d=function(){function e(e){var t=this._viewModel=e.viewModel,n=t[i]="".concat(++c);t[s]=e.element,t[r]={},t[a]=e.name;for(var d=e.bindingContext;d&&(!d.$data||d.$data===t||!d.$data[r]);)d=d.$parentContext;if(d){var l=this._parentViewModel=d.$data;l[r][n]=t,t[o]=l}}return e.prototype.dispose=function(){var e=this._viewModel,t=this._parentViewModel,n=e[i],c=t&&t[r];n&&c&&delete c[n],e&&(delete e[o],delete e[r],delete e[s],delete e[a])},e}();t.e=d},2453:function(e,t,n){"use strict";n.d(t,"e",function(){return r});var a=n(0),i=n(157),r=Object(i.e)(function(){return Object(a.__awaiter)(void 0,void 0,void 0,function(){return Object(a.__generator)(this,function(e){switch(e.label){case 0:return[4,Promise.all([n.e("ondemand.resx-ondemand"),n.e(654)]).then(n.bind(null,2652))];case 1:return[2,e.sent().WithKnockoutResourcesAndItemCacheData]}})})})},3122:function(e,t,n){"use strict";n.d(t,"e",function(){return d});var a=n(2011),i=n(0),r=n("react-lib"),o=n(56),s=n(2230),c=n(1424);function d(e,t){void 0===t&&(t={});var n,d=Object(a.createItemsScopeActionFromKnockout)(e,t);return(n=function(e){return{item:e}},function(e){var t=e;return Object(o.e)(function(e,t){return{storeItem:e.demandItemFacet(c.t,t.itemKey)}})(function(e){var a=e.storeItem,o=Object(s.t)(a),c=Object(s.e)(o);return r.createElement(t,Object(i.__assign)({},e,n(c)))})})(d)}},5079:function(e,t,n){"use strict";n.r(t),n.d(t,"ShowItemAnalyticsAction",function(){return r});var a=n(358),i=n(3122),r=Object(i.e)(function(e,t){var n=e.consume(a.e);return new(e.injected(n.ShowItemAnalyticsAction))({item:t.item})})}}]);