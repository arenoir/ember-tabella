"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define("dummy/app",["exports","ember-resolver","ember-load-initializers","dummy/config/environment"],(function(e,t,n,r){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=c(e)
if(t){var o=c(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return l(this,n)}}function l(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var s=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)})(l,Ember.Application)
var n=a(l)
function l(){var e
o(this,l)
for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c]
return d(u(e=n.call.apply(n,[this].concat(a))),"modulePrefix",r.default.modulePrefix),d(u(e),"podModulePrefix",r.default.podModulePrefix),d(u(e),"Resolver",t.default),e}return l}()
e.default=s,(0,n.default)(s,r.default.modulePrefix)})),define("dummy/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/code-snippet",["exports","dummy/snippets"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=self.require("highlight.js"),r=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var t,n,r=e.split("\n").filter((function(e){return""!==e})),o=0;o<r.length;o++)(t=/^[ \t]*/.exec(r[o]))&&(void 0===n||n>t[0].length)&&(n=t[0].length)
return void 0!==n&&n>0&&(e=e.replace(new RegExp("^[ \t]{"+n+"}","gm"),"")),e},source:Ember.computed("name",(function(){var e=this.get("name").split("/").reduce((function(e,t){return e&&e[t]}),t.default)
return this._unindent((e||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))})),didInsertElement:function(){n.highlightBlock(this.get("element"))},language:Ember.computed("name",(function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}}))})
e.default=r})),define("dummy/components/ember-collection",["exports","ember-collection/components/ember-collection"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-native-scrollable",["exports","ember-collection/components/ember-native-scrollable"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella",["exports","ember-tabella/components/ember-tabella"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/body-column",["exports","ember-tabella/components/ember-tabella/body-column"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/body-row",["exports","ember-tabella/components/ember-tabella/body-row"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/body",["exports","ember-tabella/components/ember-tabella/body"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/collection",["exports","ember-tabella/components/ember-tabella/collection"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/header-column",["exports","ember-tabella/components/ember-tabella/header-column"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/header-resize-handle",["exports","ember-tabella/components/ember-tabella/header-resize-handle"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/header-row",["exports","ember-tabella/components/ember-tabella/header-row"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/components/ember-tabella/header-sort-indicator",["exports","ember-tabella/components/ember-tabella/header-sort-indicator"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/controllers/application",["exports","ember-tabella/models/column","dummy/utils/random"],(function(e,t,n){var r,o,i,a,l,u,c,d
function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return y(this,n)}}function y(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(r=Ember._tracked,o=Ember._tracked,i=Ember.computed.sort("content","sortProperties"),a=Ember._action,u=_((l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(l,Ember.Controller)
var r,o,i,a=b(l)
function l(){var e
f(this,l)
for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return v(h(e=a.call.apply(a,[this].concat(r))),"queryParams",["_sort","_desc"]),s(h(e),"_sort",u,h(e)),s(h(e),"_desc",c,h(e)),v(h(e),"tableColumns",Ember.A([t.default.create({id:"date",width:150,textAlign:"text-align-left",headerCellName:"Date",sortProperties:["date","high:desc"],getContent:function(e){return e.date.toDateString()}}),t.default.create({id:"open",width:75,headerCellName:"Open",isResizable:!0,getContent:function(e){return e.open.toFixed(2)}}),t.default.create({id:"high",width:200,headerCellName:"High",sortProperties:["high"],getContent:function(e){return e.high.toFixed(2)}}),t.default.create({id:"low",width:200,headerCellName:"Low",getContent:function(e){return e.low.toFixed(2)}}),t.default.create({id:"close",width:200,headerCellName:"Close",getContent:function(e){return e.close.toFixed(2)}})])),s(h(e),"sorted",d,h(e)),e}return r=l,(o=[{key:"content",get:function(){for(var e,t=Ember.A([]),r=0;r<5e3;r++)e=(0,n.randomDate)(new Date(2e3,1,5),new Date),t.push(Ember.Object.create({date:e,open:(0,n.randomNumber)(100)-50,high:(0,n.randomNumber)(100)-50,low:(0,n.randomNumber)(100)-50,close:(0,n.randomNumber)(100)-50,volume:1e6*(0,n.randomNumber)(100)}))
return t}},{key:"sortedColumn",get:function(){return this.tableColumns.findBy("id",this._sort)}},{key:"sortProperties",get:function(){return this.sortedColumn?this.sortedColumn.sortProperties:[]}},{key:"tableContent",get:function(){return Ember.isEqual(this._desc,!1)?this.sorted.toArray().reverse():this.sorted}},{key:"sort",value:function(e,t){var n=e.get("id")
n&&this.transitionToRoute({queryParams:{_sort:n,_desc:t}})}}])&&m(r.prototype,o),i&&m(r,i),l}()).prototype,"_sort",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=_(l.prototype,"_desc",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=_(l.prototype,"sorted",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_(l.prototype,"sort",[a],Object.getOwnPropertyDescriptor(l.prototype,"sort"),l.prototype),l)
e.default=w})),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.default.APP.version,i=r.versionOnly||r.hideSha,a=r.shaOnly||r.hideVersion,l=null
return i&&(r.showExtended&&(l=o.match(n.versionExtendedRegExp)),l||(l=o.match(n.versionRegExp))),a&&(l=o.match(n.shaRegExp)),l?l[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var o=Ember.Helper.helper(r)
e.default=o})),define("dummy/helpers/fixed-grid-layout",["exports","ember-collection/layouts/grid"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){return new t.default(e[0],e[1])}))
e.default=n})),define("dummy/helpers/mixed-grid-layout",["exports","ember-collection/layouts/mixed-grid"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){return new t.default(e[0])}))
e.default=n})),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n})),define("dummy/helpers/percentage-columns-layout",["exports","ember-collection/layouts/percentage-columns"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Helper.helper((function(e){return new t.default(e[0],e[1],e[2])}))
e.default=n})),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],(function(e,t,n){var r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,o=n.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(r,o)}
e.default=i})),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n})),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],(function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,o=t.default.exportApplicationGlobal
r="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r})),define("dummy/models/column",["exports","ember-tabella/models/column"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/router",["exports","dummy/config/environment"],(function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=l(e)
if(t){var o=l(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return i(this,n)}}function i(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?a(e):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var c=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)})(l,Ember.Router)
var i=o(l)
function l(){var e
n(this,l)
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
return u(a(e=i.call.apply(i,[this].concat(o))),"location",t.default.locationType),u(a(e),"rootURL",t.default.rootURL),e}return l}()
e.default=c,c.map((function(){}))})),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("dummy/snippets",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={"app.js":"import Application from '@ember/application';\nimport Resolver from 'ember-resolver';\nimport loadInitializers from 'ember-load-initializers';\nimport config from 'dummy/config/environment';\n\nexport default class App extends Application {\n  modulePrefix = config.modulePrefix;\n  podModulePrefix = config.podModulePrefix;\n  Resolver = Resolver;\n}\n\nloadInitializers(App, config.modulePrefix);\n",components:{".gitkeep":""},controllers:{".gitkeep":"","application.js":"/* eslint-disable ember/no-computed-properties-in-native-classes*/\nimport { sort } from '@ember/object/computed';\nimport { A } from '@ember/array';\nimport Controller from '@ember/controller';\nimport EmberObject from '@ember/object';\nimport { isEqual } from '@ember/utils';\nimport ColumnDefinition from 'ember-tabella/models/column';\nimport { randomNumber, randomDate } from '../utils/random';\nimport { action } from '@ember/object';\nimport { tracked } from '@glimmer/tracking';\n\nexport default class MaterialsController extends Controller {\n  queryParams = ['_sort', '_desc'];\n  @tracked _sort = '';\n  @tracked _desc = false;\n\n  tableColumns = A([\n    ColumnDefinition.create({\n      id: 'date',\n      width: 150,\n      textAlign: 'text-align-left',\n      headerCellName: 'Date',\n      sortProperties: ['date', 'high:desc'],\n      getContent: function (row) {\n        return row.date.toDateString();\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'open',\n      width: 75,\n      headerCellName: 'Open',\n      isResizable: true,\n      getContent: function (row) {\n        return row.open.toFixed(2);\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'high',\n      width: 200,\n      headerCellName: 'High',\n      sortProperties: ['high'],\n      getContent: function (row) {\n        return row.high.toFixed(2);\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'low',\n      width: 200,\n      headerCellName: 'Low',\n      getContent: function (row) {\n        return row.low.toFixed(2);\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'close',\n      width: 200,\n      headerCellName: 'Close',\n      getContent: function (row) {\n        return row.close.toFixed(2);\n      },\n    }),\n  ]);\n\n  get content() {\n    let content = A([]);\n    let date;\n    for (var i = 0; i < 5000; i++) {\n      date = randomDate(new Date(2000, 1, 5), new Date());\n      content.push(\n        EmberObject.create({\n          date: date,\n          open: randomNumber(100) - 50,\n          high: randomNumber(100) - 50,\n          low: randomNumber(100) - 50,\n          close: randomNumber(100) - 50,\n          volume: randomNumber(100) * 1000000,\n        })\n      );\n    }\n    return content;\n  }\n\n  get sortedColumn() {\n    return this.tableColumns.findBy('id', this._sort);\n  }\n\n  get sortProperties() {\n    if (this.sortedColumn) {\n      return this.sortedColumn.sortProperties;\n    }\n\n    return [];\n  }\n\n  @sort('content', 'sortProperties') sorted;\n\n  get tableContent() {\n    if (isEqual(this._desc, false)) {\n      return this.sorted.toArray().reverse();\n    }\n\n    return this.sorted;\n  }\n\n  @action\n  sort(column, desc) {\n    let id = column.get('id');\n    if (id) {\n      this.transitionToRoute({ queryParams: { _sort: id, _desc: desc } });\n    }\n  }\n}\n"},helpers:{".gitkeep":""},"index.html":'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <title>Ember Tabella</title>\n    <meta name="description" content="">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n\n    {{content-for "head"}}\n\n    <link integrity="" rel="stylesheet" href="{{rootURL}}assets/vendor-57af878e3fd9c27e41d03ea9a4d87ab4.css">\n    <link integrity="" rel="stylesheet" href="{{rootURL}}assets/dummy-8ac8d5c254507ff1cffa864366d4dd8b.css">\n\n    {{content-for "head-footer"}}\n  </head>\n  <body>\n    {{content-for "body"}}\n\n    <script src="{{rootURL}}assets/vendor-8a7aa269a10f6b1798bc82f5ac4c44e1.js"><\/script>\n    <script src="{{rootURL}}assets/dummy-40e0a5c8b3b88ee05dd2ba7ad5382875.js"><\/script>\n\n    {{content-for "body-footer"}}\n  </body>\n</html>\n',models:{".gitkeep":""},"router.js":"import EmberRouter from '@ember/routing/router';\nimport config from 'dummy/config/environment';\n\nexport default class Router extends EmberRouter {\n  location = config.locationType;\n  rootURL = config.rootURL;\n}\n\nRouter.map(function () {});\n",routes:{".gitkeep":""},snippets:{"controller-basic.js":"/* eslint-disable ember/no-computed-properties-in-native-classes*/\n\n// BEGIN-SNIPPET simple-controller\nimport { sort } from '@ember/object/computed';\nimport { A } from '@ember/array';\nimport Controller from '@ember/controller';\nimport EmberObject from '@ember/object';\nimport { isEqual } from '@ember/utils';\nimport ColumnDefinition from 'ember-tabella/models/column';\nimport { randomNumber, randomDate } from '../utils/random';\nimport { action } from '@ember/object';\nimport { tracked } from '@glimmer/tracking';\n\nexport default class MaterialsController extends Controller {\n  queryParams = ['_sort', '_desc'];\n  @tracked _sort = '';\n  @tracked _desc = false;\n\n  tableColumns = A([\n    ColumnDefinition.create({\n      id: 'date',\n      width: 150,\n      textAlign: 'text-align-left',\n      headerCellName: 'Date',\n      sortProperties: ['date', 'high:desc'],\n      getContent: function (row) {\n        return row.date.toDateString();\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'open',\n      width: 75,\n      headerCellName: 'Open',\n      isResizable: true,\n      getContent: function (row) {\n        return row.open.toFixed(2);\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'high',\n      width: 200,\n      headerCellName: 'High',\n      sortProperties: ['high'],\n      getContent: function (row) {\n        return row.high.toFixed(2);\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'low',\n      width: 200,\n      headerCellName: 'Low',\n      getContent: function (row) {\n        return row.low.toFixed(2);\n      },\n    }),\n    ColumnDefinition.create({\n      id: 'close',\n      width: 200,\n      headerCellName: 'Close',\n      getContent: function (row) {\n        return row.close.toFixed(2);\n      },\n    }),\n  ]);\n\n  get content() {\n    let content = A([]);\n    let date;\n    for (var i = 0; i < 5000; i++) {\n      date = randomDate(new Date(2000, 1, 5), new Date());\n      content.push(\n        EmberObject.create({\n          date: date,\n          open: randomNumber(100) - 50,\n          high: randomNumber(100) - 50,\n          low: randomNumber(100) - 50,\n          close: randomNumber(100) - 50,\n          volume: randomNumber(100) * 1000000,\n        })\n      );\n    }\n    return content;\n  }\n\n  get sortedColumn() {\n    return this.tableColumns.findBy('id', this._sort);\n  }\n\n  get sortProperties() {\n    if (this.sortedColumn) {\n      return this.sortedColumn.sortProperties;\n    }\n\n    return [];\n  }\n\n  @sort('content', 'sortProperties') sorted;\n\n  get tableContent() {\n    if (isEqual(this._desc, false)) {\n      return this.sorted.toArray().reverse();\n    }\n\n    return this.sorted;\n  }\n\n  @action\n  sort(column, desc) {\n    let id = column.get('id');\n    if (id) {\n      this.transitionToRoute({ queryParams: { _sort: id, _desc: desc } });\n    }\n  }\n}\n","table-basic.hbs":"<EmberTabella\n  @numFixedColumns={{2}}\n  @width={{500}}\n  @height={{500}}\n  @rowHeight={{50}}\n  @content={{this.tableContent}}\n  @columns={{this.tableColumns}}\n  @hasFooter={{false}}\n  @sortedColumn={{this.sortedColumn}}\n  @isSortReversed={{this._desc}}\n  @onColumnSort={{this.sort}}\n/>\n"},styles:{"app.scss":"html, body {\n  font-family: Helvetica, Arial, sans-serif;\n  margin: 10px;\n}\n\n@import 'ember-tabella';"},templates:{"application.hbs":'<div class="container">\n  <style>\n    .ember-tabella__header-resize-handle {\n      border-left: 3px dotted #ccc;\n      background: #fff;\n    }\n    .ember-tabella__header {\n      border-bottom: 1px solid #ccc;\n    }\n    .example-container {\n      width:600px;\n    }\n  </style>\n  <h1>Ember Tabella <small>Simple</small></h1>\n\n  <div class="row">\n    <div class="col-md-12">\n      <div class="example-container">\n        <EmberTabella \n          @numFixedColumns={{2}} \n          @width={{500}} \n          @height={{500}} \n          @rowHeight={{50}} \n          @content={{this.tableContent}} \n          @columns={{this.tableColumns}} \n          @hasFooter={{false}} \n          @sortedColumn={{this.sortedColumn}} \n          @isSortReversed={{this._desc}} \n          @onColumnSort={{this.sort}} \n        />\n      </div>\n    </div>\n\n    <div class="col-md-12 bumper-30">\n      <h3>Template</h3>\n      <CodeSnippet @name="snippets/table-basic.hbs" />\n\n    </div>\n\n    <div class="col-md-12 bumper-30">\n      <h3>Controller</h3>\n      <CodeSnippet @name="controllers/application.js" />\n    </div>\n  </div>\n</div>\n'},utils:{"random.js":"var seed = 6;\n// source: http://indiegamr.com/generate-repeatable-random-numbers-in-js/\n// in order to work 'Math.seed' must NOT be undefined,\n// so in any case, you HAVE to provide a Math.seed\nexport function randomNumber(max = 1, min = 0, randomSeed = undefined) {\n  if (randomSeed !== undefined) {\n    // reset seed\n    seed = randomSeed;\n  }\n  seed = (seed * 9301 + 49297) % 233280;\n  var rnd = seed / 233280;\n  return min + rnd * (max - min);\n}\n\n/**\n * source: http://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates\n */\nexport function randomDate(start, end, randomSeed) {\n  let random = randomNumber(1, 0, randomSeed);\n  return new Date(start.getTime() + random * (end.getTime() - start.getTime()));\n}\n\nexport function setRandomSeed(randomSeed = 6) {\n  seed = randomSeed;\n}\n"}}})),define("dummy/snippets/controller-basic",["exports","ember-tabella/models/column","dummy/utils/random"],(function(e,t,n){var r,o,i,a,l,u,c,d
function s(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()
return function(){var n,r=g(e)
if(t){var o=g(this).constructor
n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments)
return y(this,n)}}function y(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t,n,r,o){var i={}
return Object.keys(r).forEach((function(e){i[e]=r[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce((function(n,r){return r(e,t,n)||n}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var w=(r=Ember._tracked,o=Ember._tracked,i=Ember.computed.sort("content","sortProperties"),a=Ember._action,u=_((l=function(e){(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(l,Ember.Controller)
var r,o,i,a=b(l)
function l(){var e
f(this,l)
for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
return v(h(e=a.call.apply(a,[this].concat(r))),"queryParams",["_sort","_desc"]),s(h(e),"_sort",u,h(e)),s(h(e),"_desc",c,h(e)),v(h(e),"tableColumns",Ember.A([t.default.create({id:"date",width:150,textAlign:"text-align-left",headerCellName:"Date",sortProperties:["date","high:desc"],getContent:function(e){return e.date.toDateString()}}),t.default.create({id:"open",width:75,headerCellName:"Open",isResizable:!0,getContent:function(e){return e.open.toFixed(2)}}),t.default.create({id:"high",width:200,headerCellName:"High",sortProperties:["high"],getContent:function(e){return e.high.toFixed(2)}}),t.default.create({id:"low",width:200,headerCellName:"Low",getContent:function(e){return e.low.toFixed(2)}}),t.default.create({id:"close",width:200,headerCellName:"Close",getContent:function(e){return e.close.toFixed(2)}})])),s(h(e),"sorted",d,h(e)),e}return r=l,(o=[{key:"content",get:function(){for(var e,t=Ember.A([]),r=0;r<5e3;r++)e=(0,n.randomDate)(new Date(2e3,1,5),new Date),t.push(Ember.Object.create({date:e,open:(0,n.randomNumber)(100)-50,high:(0,n.randomNumber)(100)-50,low:(0,n.randomNumber)(100)-50,close:(0,n.randomNumber)(100)-50,volume:1e6*(0,n.randomNumber)(100)}))
return t}},{key:"sortedColumn",get:function(){return this.tableColumns.findBy("id",this._sort)}},{key:"sortProperties",get:function(){return this.sortedColumn?this.sortedColumn.sortProperties:[]}},{key:"tableContent",get:function(){return Ember.isEqual(this._desc,!1)?this.sorted.toArray().reverse():this.sorted}},{key:"sort",value:function(e,t){var n=e.get("id")
n&&this.transitionToRoute({queryParams:{_sort:n,_desc:t}})}}])&&m(r.prototype,o),i&&m(r,i),l}()).prototype,"_sort",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),c=_(l.prototype,"_desc",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),d=_(l.prototype,"sorted",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_(l.prototype,"sort",[a],Object.getOwnPropertyDescriptor(l.prototype,"sort"),l.prototype),l)
e.default=w})),define("dummy/snippets/table-basic",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"WZ1B1AQl",block:'{"symbols":[],"statements":[[8,"ember-tabella",[],[["@numFixedColumns","@width","@height","@rowHeight","@content","@columns","@hasFooter","@sortedColumn","@isSortReversed","@onColumnSort"],[2,500,500,50,[32,0,["tableContent"]],[32,0,["tableColumns"]],false,[32,0,["sortedColumn"]],[32,0,["_desc"]],[32,0,["sort"]]]],null],[2,"\\n"]],"hasEval":false,"upvars":[]}',moduleName:"dummy/snippets/table-basic.hbs"})
e.default=t})),define("dummy/templates/application",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Y7av8fMj",block:'{"symbols":[],"statements":[[10,"div"],[14,0,"container"],[12],[2,"\\n  "],[10,"style"],[12],[2,"\\n    .ember-tabella__header-resize-handle {\\n      border-left: 3px dotted #ccc;\\n      background: #fff;\\n    }\\n    .ember-tabella__header {\\n      border-bottom: 1px solid #ccc;\\n    }\\n    .example-container {\\n      width:600px;\\n    }\\n  "],[13],[2,"\\n  "],[10,"h1"],[12],[2,"Ember Tabella "],[10,"small"],[12],[2,"Simple"],[13],[13],[2,"\\n\\n  "],[10,"div"],[14,0,"row"],[12],[2,"\\n    "],[10,"div"],[14,0,"col-md-12"],[12],[2,"\\n      "],[10,"div"],[14,0,"example-container"],[12],[2,"\\n        "],[8,"ember-tabella",[],[["@numFixedColumns","@width","@height","@rowHeight","@content","@columns","@hasFooter","@sortedColumn","@isSortReversed","@onColumnSort"],[2,500,500,50,[32,0,["tableContent"]],[32,0,["tableColumns"]],false,[32,0,["sortedColumn"]],[32,0,["_desc"]],[32,0,["sort"]]]],null],[2,"\\n      "],[13],[2,"\\n    "],[13],[2,"\\n\\n    "],[10,"div"],[14,0,"col-md-12 bumper-30"],[12],[2,"\\n      "],[10,"h3"],[12],[2,"Template"],[13],[2,"\\n      "],[8,"code-snippet",[],[["@name"],["snippets/table-basic.hbs"]],null],[2,"\\n\\n    "],[13],[2,"\\n\\n    "],[10,"div"],[14,0,"col-md-12 bumper-30"],[12],[2,"\\n      "],[10,"h3"],[12],[2,"Controller"],[13],[2,"\\n      "],[8,"code-snippet",[],[["@name"],["controllers/application.js"]],null],[2,"\\n    "],[13],[2,"\\n  "],[13],[2,"\\n"],[13],[2,"\\n"]],"hasEval":false,"upvars":[]}',moduleName:"dummy/templates/application.hbs"})
e.default=t})),define("dummy/templates/components/code-snippet",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"0aI5DoxF",block:'{"symbols":[],"statements":[[1,[34,0]],[2,"\\n"]],"hasEval":false,"upvars":["source"]}',moduleName:"dummy/templates/components/code-snippet.hbs"})
e.default=t})),define("dummy/utils/column-style",["exports","ember-tabella/utils/column-style"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("dummy/utils/random",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomNumber=n,e.randomDate=function(e,t,r){var o=n(1,0,r)
return new Date(e.getTime()+o*(t.getTime()-e.getTime()))},e.setRandomSeed=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6
t=e}
var t=6
function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0
void 0!==r&&(t=r)
var o=(t=(9301*t+49297)%233280)/233280
return n+o*(e-n)}})),define("dummy/config/environment",[],(function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("dummy/app").default.create({name:"ember-tabella",version:"v2.0.0-beta.2+bfbf3126"})
