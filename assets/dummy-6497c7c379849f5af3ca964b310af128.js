"use strict"
define("dummy/app",["exports","@ember/application","ember-resolver","ember-load-initializers","dummy/config/environment","ember-prism"],(function(e,t,n,o,r,i){function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,(0,i.setup)()
class u extends t.default{constructor(){super(...arguments),l(this,"modulePrefix",r.default.modulePrefix),l(this,"podModulePrefix",r.default.podModulePrefix),l(this,"Resolver",n.default)}}e.default=u,(0,o.default)(u,r.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-snippet",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"Ymhq7X1k",block:'[[[44,[[28,[37,1],[[30,1]],null]],[[[1,"  "],[8,[39,2],null,[["@language","@code"],[[30,2,["language"]],[30,2,["source"]]]],null],[1,"\\n"]],[2]]]],["@name","snippet"],false,["let","get-code-snippet","code-block"]]',moduleName:"dummy/components/code-snippet.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,(0,o.default)())
e.default=i})),define("dummy/components/first-sidebar",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"/8Fns7De",block:'[[[10,0],[12],[1,"\\n  This is the FirstSidebar component. It has acces to the model, which says "],[1,[30,1,["title"]]],[1,".\\n"],[13]],["@model"],false,[]]',moduleName:"dummy/components/first-sidebar.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,(0,o.default)())
e.default=i})),define("dummy/components/from-elsewhere",["exports","ember-elsewhere/components/from-elsewhere"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/illiquid-model",["exports","liquid-fire/components/illiquid-model"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/lf-get-outlet-state",["exports","liquid-fire/components/lf-get-outlet-state"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-bind",["exports","liquid-fire/components/liquid-bind"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-child",["exports","liquid-fire/components/liquid-child"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-container",["exports","liquid-fire/components/liquid-container"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-if",["exports","liquid-fire/components/liquid-if"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-measured",["exports","liquid-fire/components/liquid-measured"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"measure",{enumerable:!0,get:function(){return t.measure}})})),define("dummy/components/liquid-outlet",["exports","liquid-fire/components/liquid-outlet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-spacer",["exports","liquid-fire/components/liquid-spacer"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-sync",["exports","liquid-fire/components/liquid-sync"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-unless",["exports","liquid-fire/components/liquid-unless"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/liquid-versions",["exports","liquid-fire/components/liquid-versions"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/modal-target",["exports","@ember/component","@ember/template-factory","@glimmer/component"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"FnBCI3AG",block:'[[[8,[39,0],null,[["@name"],["modal"]],[["default"],[[[[1,"\\n"],[6,[39,1],[[30,1]],[["containerless","use"],[true,[30,0,["modalAnimation"]]]],[["default"],[[[[41,[30,2],[[[1,"      "],[10,0],[14,0,"modal-container"],[12],[1,"\\n"],[1,"        "],[11,0],[24,0,"modal-background"],[4,[38,3],["click",[30,2,["onOutsideClick"]]],null],[12],[13],[1,"\\n        "],[10,0],[14,0,"modal-dialog"],[12],[1,"\\n          "],[8,[30,2,["body"]],null,null,null],[1,"\\n        "],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null]],[2]]]]]],[1]]]]],[1,"\\n"]],["modal","currentModal"],false,["from-elsewhere","liquid-bind","if","on"]]',moduleName:"dummy/components/modal-target.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,class extends o.default{constructor(){var e,t,n
super(...arguments),n=l,(t="modalAnimation")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}})
function l(){return this.lookup("explode").call(this,{pick:".modal-background",use:["fade",{maxOpacity:.5}]},{pick:".modal-dialog",use:"to-left"})}e.default=i})),define("dummy/components/multiple-from-elsewhere",["exports","ember-elsewhere/components/multiple-from-elsewhere"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/second-tools",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"t/JOimI+",block:'[[[10,0],[14,0,"tools"],[12],[1,"\\n  This is the second tools component. "],[11,"button"],[24,4,"button"],[4,[38,0],["click",[30,1]],null],[12],[1,"Send an action out."],[13],[1,"\\n"],[13]],["@doIt"],false,["on"]]',moduleName:"dummy/components/second-tools.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,(0,o.default)())
e.default=i})),define("dummy/components/test-button",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"D70/sG2O",block:'[[[10,"button"],[14,4,"button"],[12],[1,[30,1]],[13],[1,"\\n"]],["@text"],false,[]]',moduleName:"dummy/components/test-button.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,(0,o.default)())
e.default=i})),define("dummy/components/third-tools",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"sLCWfZF3",block:'[[[10,0],[14,0,"tools"],[12],[1,"\\n  This is the third-tools component.\\n"],[13]],[],false,[]]',moduleName:"dummy/components/third-tools.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,(0,o.default)())
e.default=i})),define("dummy/components/to-elsewhere",["exports","ember-elsewhere/components/to-elsewhere"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/warning-modal",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const r=(0,n.createTemplateFactory)({id:"kWlwMqWH",block:'[[[10,2],[12],[1,"This is a sample warning message!"],[13],[1,"\\n"],[11,"button"],[24,4,"button"],[4,[38,0],["click",[30,1]],null],[12],[1,"Close It"],[13]],["@onCancel"],false,["on"]]',moduleName:"dummy/components/warning-modal.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(r,(0,o.default)())
e.default=i})),define("dummy/controllers/application",["exports","@ember/controller"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{constructor(){var e,t,n
super(...arguments),n=o,(t="toolsAnimationRules")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}}function o(){this.transition(this.fromValue(!1),this.toValue(!0),this.use("to-down"),this.reverse("to-up")),this.transition(this.fromValue(!0),this.toValue(!0),this.use("fade"))}e.default=n})),define("dummy/controllers/second",["exports","@ember/array","@ember/controller","@ember/object"],(function(e,t,n,o){var r
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let i=(r=class extends n.default{constructor(){var e,n,o
super(...arguments),e=this,n="handled",o=(0,t.A)(),n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}handleIt(){this.handled.pushObject("I handled an event")}},l=r.prototype,u="handleIt",d=[o.action],a=Object.getOwnPropertyDescriptor(r.prototype,"handleIt"),s=r.prototype,f={},Object.keys(a).forEach((function(e){f[e]=a[e]})),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=d.slice().reverse().reduce((function(e,t){return t(l,u,e)||e}),f),s&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(s):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(l,u,f),f=null),r)
var l,u,d,a,s,f
e.default=i})),define("dummy/controllers/third",["exports","@ember/controller"],(function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(){super(...arguments),n(this,"queryParams",["warn"]),n(this,"warn",!1)}}e.default=o})),define("dummy/helpers/ensure-safe-component",["exports","@embroider/util"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.EnsureSafeComponentHelper}})}))
define("dummy/helpers/get-code-snippet",["exports","ember-code-snippet/helpers/get-code-snippet"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/helpers/lf-lock-model",["exports","liquid-fire/helpers/lf-lock-model"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfLockModel",{enumerable:!0,get:function(){return t.lfLockModel}})})),define("dummy/helpers/lf-or",["exports","liquid-fire/helpers/lf-or"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lfOr",{enumerable:!0,get:function(){return t.lfOr}})})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],(function(e,t,n){function o(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var r,i=n.default.exportApplicationGlobal
r="string"==typeof i?i:t.default.String.classify(n.default.modulePrefix),o[r]||(o[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=o
var r={name:"export-application-global",initialize:o}
e.default=r})),define("dummy/initializers/liquid-fire",["exports","liquid-fire/velocity-ext"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"liquid-fire",initialize:function(){}}})),define("dummy/instance-initializers/clear-double-boot",["exports","ember-cli-fastboot/instance-initializers/clear-double-boot"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/instance-initializers/error-handler",["exports","ember"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"error-handler",initialize:function(e){"undefined"!=typeof FastBoot&&(t.default.onerror=function(n){let o=`There was an error running your app in fastboot. More info about the error: \n ${n.stack||n}`
t.default.Logger.error(o),e.lookup("service:fastboot").set("response.statusCode",500)})}}
e.default=n})),define("dummy/locations/none",["exports","ember-cli-fastboot/locations/none"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","@ember/routing/router","dummy/config/environment"],(function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{constructor(){super(...arguments),o(this,"location",n.default.locationType),o(this,"rootURL",n.default.rootURL)}}e.default=r,r.map((function(){this.route("second"),this.route("third"),this.route("fourth")}))})),define("dummy/routes/fourth",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{}e.default=n})),define("dummy/routes/index",["exports","@ember/object","@ember/routing/route"],(function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends n.default{model(){return t.default.create({title:"Welcome"})}}e.default=o})),define("dummy/services/-ensure-registered",["exports","@embroider/util/services/ensure-registered"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/ember-elsewhere",["exports","ember-elsewhere/services/ember-elsewhere"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/fastboot",["exports","ember-cli-fastboot/services/fastboot"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/liquid-fire-transitions",["exports","liquid-fire/transition-map"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"l+Q6Rqux",block:'[[[8,[39,0],null,null,null],[1,"\\n\\n"],[10,0],[14,0,"v-container"],[12],[1,"\\n  "],[8,[39,1],null,[["@name"],["tools"]],[["default"],[[[[1,"\\n    "],[10,0],[14,0,"topbar"],[12],[1,"\\n"],[6,[39,2],[[30,1]],[["rules"],[[30,0,["toolsAnimationRules"]]]],[["default"],[[[[1,"        "],[8,[30,2],null,null,null],[1,"\\n"]],[2]]]]],[1,"    "],[13],[1,"\\n  "]],[1]]]]],[1,"\\n\\n  "],[10,0],[14,0,"container"],[12],[1,"\\n    "],[10,"main"],[12],[1,"\\n      "],[10,2],[12],[1,"This app demonstrates the "],[10,3],[14,6,"https://github.com/ef4/ember-elsewhere"],[12],[1,"Ember Elsewhere"],[13],[1," addon. It contains three elsewhere targets:"],[13],[1,"\\n\\n      "],[10,"ol"],[12],[1,"\\n        "],[10,"li"],[12],[1,"The blue sidebar is a target named \\"right\\", implemented as "],[10,"code"],[12],[1,"<FromElsewhere @name=\\"right\\">"],[13],[1,"."],[13],[1,"\\n\\n        "],[10,"li"],[12],[1,"The green toolbar (visible only on some pages) is a target named \\"tools\\", implemented with a "],[10,"code"],[12],[1,"<FromElsewhere>"],[13],[1," component that allows it to be composed with liquid-fire animations."],[13],[1,"\\n        "],[10,"li"],[12],[1,"There is a \\"modal\\" target that demonstrates animated modals. See the button on "],[8,[39,3],null,[["@route"],["third"]],[["default"],[[[[1,"Third Page"]],[]]]]],[1,"."],[13],[1,"\\n        "],[10,"li"],[12],[1,"There is an \\"actions\\" target, implemented with a "],[10,"code"],[12],[1,"<MultipleFromElsewhere @name=\\"actions\\">"],[13],[1," that allows you to pass multiple components. Check "],[8,[39,3],null,[["@route"],["fourth"]],[["default"],[[[[1,"Fourth Page"]],[]]]]],[1,"."],[13],[1,"\\n      "],[13],[1,"\\n\\n      "],[10,"nav"],[12],[1,"\\n        "],[8,[39,3],null,[["@route"],["index"]],[["default"],[[[[1,"First Page"]],[]]]]],[1,"\\n        "],[8,[39,3],null,[["@route"],["second"]],[["default"],[[[[1,"Second Page"]],[]]]]],[1,"\\n        "],[8,[39,3],null,[["@route"],["third"]],[["default"],[[[[1,"Third Page"]],[]]]]],[1,"\\n        "],[8,[39,3],null,[["@route"],["fourth"]],[["default"],[[[[1,"Fourth Page"]],[]]]]],[1,"\\n      "],[13],[1,"\\n\\n      "],[46,[28,[37,5],null,null],null,null,null],[1,"\\n    "],[13],[1,"\\n\\n    "],[10,0],[14,0,"right-sidebar"],[12],[1,"\\n      "],[8,[39,1],null,[["@name"],["right"]],null],[1,"\\n    "],[13],[1,"\\n\\n  "],[13],[1,"\\n\\n  "],[10,0],[14,0,"bottom-bar"],[12],[1,"\\n    "],[8,[39,6],null,[["@name"],["actions"]],[["default"],[[[[1,"\\n      "],[10,0],[14,0,"action"],[12],[1,"\\n        "],[8,[30,3],null,null,null],[1,"\\n      "],[13],[1,"\\n    "]],[3]]]]],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"]],["tools","T","C"],false,["modal-target","from-elsewhere","liquid-bind","link-to","component","-outlet","multiple-from-elsewhere"]]',moduleName:"dummy/templates/application.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/fourth",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"vxa6xP6I",block:'[[[10,2],[12],[1,"This is the fourth page. It sends multiple \\"button\\" components into the same orange \\"actions\\" bar at the bottom."],[13],[1,"\\n\\n"],[8,[39,0],null,[["@named","@send"],["actions",[50,"test-button",0,null,[["text"],["Button1"]]]]],null],[1,"\\n"],[8,[39,0],null,[["@named","@send"],["actions",[50,"test-button",0,null,[["text"],["Button3"]]]]],null],[1,"\\n"],[8,[39,0],null,[["@named","@send"],["actions",[50,"test-button",0,null,[["text"],["Button2"]]]]],null],[1,"\\n\\n"],[1,"\\n"],[8,[39,2],null,[["@name"],["fourth.hbs"]],null]],[],false,["to-elsewhere","component","code-snippet"]]',moduleName:"dummy/templates/fourth.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"fYjzRMMS",block:'[[[10,2],[12],[1,"This is the first page. It sends the \\"FirstSidebar\\" component into the \\"right\\" sidebar."],[13],[1,"\\n\\n"],[10,2],[12],[1,"The model says: "],[1,[30,0,["model","title"]]],[13],[1,"\\n\\n"],[8,[39,0],null,[["@named","@send"],["right",[50,"first-sidebar",0,null,[["model"],[[30,0,["model"]]]]]]],null],[1,"\\n"],[1,"\\n"],[8,[39,2],null,[["@name"],["index.hbs"]],null],[1,"\\n"]],[],false,["to-elsewhere","component","code-snippet"]]',moduleName:"dummy/templates/index.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/second",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"KJdWI7xr",block:'[[[10,0],[12],[1,"This is the second page. It sends the \\"second-tools\\" component into the green \\"tools\\" bar, and receives actions back."],[13],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,0,["handled"]]],null]],null],null,[[[1,"  "],[10,0],[12],[1,[30,1]],[13],[1,"\\n"]],[1]],null],[1,"\\n"],[8,[39,2],null,[["@named","@send"],["tools",[50,"second-tools",0,null,[["doIt"],[[30,0,["handleIt"]]]]]]],null],[1,"\\n"],[1,"\\n"],[8,[39,4],null,[["@name"],["second.hbs"]],null],[1,"\\n"]],["h"],false,["each","-track-array","to-elsewhere","component","code-snippet"]]',moduleName:"dummy/templates/second.hbs",isStrictMode:!1})
e.default=n})),define("dummy/templates/third",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=(0,t.createTemplateFactory)({id:"Bgvvr5+c",block:'[[[10,2],[12],[1,"This is the third page."],[13],[1,"\\n\\n"],[10,2],[12],[11,"button"],[24,4,"button"],[4,[38,0],["click",[28,[37,1],[[28,[37,2],[[30,0,["warn"]]],null],true],null]],null],[12],[1,"Launch a modal"],[13],[13],[1,"\\n\\n"],[8,[39,3],null,[["@named","@send"],["tools",[50,"third-tools",0,null,null]]],null],[1,"\\n\\n"],[41,[30,0,["warn"]],[[[1,"  "],[8,[39,3],null,[["@named","@send"],["modal",[28,[37,6],null,[["body","onOutsideClick"],[[50,"warning-modal",0,null,[["onCancel"],[[28,[37,1],[[28,[37,2],[[30,0,["warn"]]],null],false],null]]]],[28,[37,1],[[28,[37,2],[[30,0,["warn"]]],null],false],null]]]]]],null],[1,"\\n"]],[]],null],[1,"\\n\\n"],[1,"\\n"],[8,[39,7],null,[["@name"],["third.hbs"]],null]],[],false,["on","fn","mut","to-elsewhere","component","if","hash","code-snippet"]]',moduleName:"dummy/templates/third.hbs",isStrictMode:!1})
e.default=n})),define("dummy/transitions/cross-fade",["exports","liquid-fire/transitions/cross-fade"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/default",["exports","liquid-fire/transitions/default"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/explode",["exports","liquid-fire/transitions/explode"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("dummy/transitions/fade",["exports","liquid-fire/transitions/fade"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/flex-grow",["exports","liquid-fire/transitions/flex-grow"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/fly-to",["exports","liquid-fire/transitions/fly-to"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/move-over",["exports","liquid-fire/transitions/move-over"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/scale",["exports","liquid-fire/transitions/scale"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/scroll-then",["exports","liquid-fire/transitions/scroll-then"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/to-down",["exports","liquid-fire/transitions/to-down"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/to-left",["exports","liquid-fire/transitions/to-left"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/to-right",["exports","liquid-fire/transitions/to-right"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/to-up",["exports","liquid-fire/transitions/to-up"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/transitions/wait",["exports","liquid-fire/transitions/wait"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/config/environment",[],(function(){if("undefined"!=typeof FastBoot)return FastBoot.config("dummy")
try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(o){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),"undefined"==typeof FastBoot&&(runningTests||require("dummy/app").default.create({}))
