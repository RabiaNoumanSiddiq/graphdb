(window.webpackJsonp=window.webpackJsonp||[]).push([[19,33,46,52,105],{219:function(e,t){
/*! Copyright (c) 2014 Hidenari Nozaki and contributors | Licensed under the MIT license */
!function(e,t){"use strict";!function(e){e.module("angucomplete-alt-onto",[]).directive("angucompleteAltOnto",["$q","$parse","$http","$sce","$timeout","$templateCache","$interpolate","$rootScope",function(e,t,u,n,r,a,l,i){var o=40,F=39,s=38,c=37,d=27,g=13,p=9,f=3,h=524288,D=500,m=200,w="autocomplete-required",v="Searching...",b="No results found";function x(t,a,l,i){var x,y,S,C,$,I,R=a.find("input"),E=f,M=null,A=w,L=null,j=null,O=a[0].querySelector(".angucomplete-dropdown"),B=!1,X=null;function U(e,u){e&&("object"==typeof e?(t.uri=_(e),q({originalObject:e})):"string"==typeof e&&e.length>0?t.uri=e:console&&console.error&&console.error("Tried to set "+(u?"initial":"")+" value of angucomplete to",e,"which is an invalid value"),N(!0))}function k(e){X=null,t.hideResults(e),document.body.removeEventListener("click",k)}function z(e){return e.which?e.which:e.keyCode}function q(e){"function"==typeof t.selectedObject?t.selectedObject(e):t.selectedObject=e,N(!!e)}function _(e){return t.titleField.split(",").map((function(t){return H(e,t)})).join(" ")}function H(e,t){var u,n;if(t){u=t.split("."),n=e;for(var r=0;r<u.length;r++)n=n[u[r]]}else n=e;return n}function T(e,u){var r,a,l;if(l=new RegExp(u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i"),e)return e.match&&e.replace||(e=e.toString()),r=(a=e.match(l))?e.replace(l,'<span class="'+t.matchClass+'">'+a[0]+"</span>"):e,n.trustAsHtml(r)}function N(e){t.notEmpty=e,L=t.uri,t.fieldRequired&&i&&t.inputName&&i[t.inputName].$setValidity(A,e)}function V(e){!t.overrideSuggestions||t.selectedObject&&t.selectedObject.originalObject===t.uri||(e&&e.preventDefault(),r.cancel(M),K(),q({originalObject:t.uri}),t.clearSelected&&(t.uri=null),ee())}function W(){return a[0].querySelectorAll(".angucomplete-row")[t.currentIndex]}function Y(e){O.scrollTop=O.scrollTop+e}function J(){var e=t.results[t.currentIndex];if(t.matchClass){var u=_(e.originalObject);u=u.replace(/<b>|<\/b>/g,""),R.val(u)}else R.val(e.title)}function P(e){return function(u,n,r,a){n||r||a||!u.data||(u=u.data),t.searching=!1,ne(H(y(u),t.remoteUrlDataField),e)}}function G(e,u,n,r){0!==u&&-1!==u&&(u||n||r||(u=e.status),t.remoteUrlErrorCallback?t.remoteUrlErrorCallback(e,u,n,r):console&&console.error&&console.error("http error"))}function K(){j&&j.resolve()}function Q(n){var r={},a=t.remoteUrl+encodeuriComponent(n);t.remoteUrlRequestFormatter&&(r={params:t.remoteUrlRequestFormatter(n)},a=t.remoteUrl),t.remoteUrlRequestWithCredentials&&(r.withCredentials=!0),K(),j=e.defer(),r.timeout=j.promise,u.get(a,r).success(P(n)).error(G)}function Z(u){K(),j=e.defer(),t.remoteApiHandler(u,j.promise).then(P(u)).catch(G)}function ee(){t.showDropdown=!1,t.results=[],O&&(O.scrollTop=0)}function te(){t.showDropdown=C,t.currentIndex=t.focusFirst?0:-1,t.results=[]}function ue(e){!e||e.length<E||(t.localData?t.$apply((function(){var u;u=void 0!==t.localSearch()?t.localSearch()(e):function(e){var u,n,r,a,l=t.searchFields.split(","),i=[];for(void 0!==t.parseInput()&&(e=t.parseInput()(e)),u=0;u<t.localData.length;u++){for(n=!1,r=0;r<l.length;r++)a=H(t.localData[u],l[r])||"",n=n||a.toString().toLowerCase().indexOf(e.toString().toLowerCase())>=0;n&&(i[i.length]=t.localData[u])}return i}(e),t.searching=!1,ne(u,e)})):t.remoteApiHandler?Z(e):Q(e))}function ne(e,u){var n,r,a,l,i,o;if(e&&e.length>0)for(t.results=[],n=0;n<e.length;n++)t.titleField&&""!==t.titleField&&(l=i=_(e[n])),r="",t.descriptionField&&(r=o=H(e[n],t.descriptionField)),a="",t.imageField&&(a=H(e[n],t.imageField)),t.matchClass&&(i=T(l,u),o=T(r,u)),t.results[t.results.length]={title:i,description:o,image:a,originalObject:e[n]};else t.results=[];t.autoMatch&&1===t.results.length&&function(e,u,n){if(!n)return!1;for(var r in u)if(u[r].toLowerCase()===n.toLowerCase())return t.selectResult(e),!0;return!1}(t.results[0],{title:l,desc:r||""},t.uri)?t.showDropdown=!1:0!==t.results.length||$?t.showDropdown=!0:t.showDropdown=!1}function re(){t.localData?ne(t.localData,""):t.remoteApiHandler?Z(""):Q("")}a.on("mousedown",(function(e){e.target.id?(X=e.target.id)===t.id+"_dropdown"&&document.body.addEventListener("click",k):X=e.target.className})),t.currentIndex=t.focusFirst?0:null,t.searching=!1,S=t.$watch("initialValue",(function(e){e&&(S(),U(e,!0))})),t.$watch("fieldRequired",(function(e,u){e!==u&&(e?L&&-1!==t.currentIndex?N(!0):N(!1):i[t.inputName].$setValidity(A,!0))})),t.$on("angucomplete-alt:clearInput",(function(e,u){u&&u!==t.id||(t.uri=null,q(),N(!1),ee())})),t.$on("angucomplete-alt:changeInput",(function(e,u,n){u&&u===t.id&&U(n)})),t.onFocusHandler=function(){t.focusIn&&t.focusIn(),0!==E||t.uri&&0!==t.uri.length||(t.currentIndex=t.focusFirst?0:t.currentIndex,t.showDropdown=!0,re())},t.hideResults=function(){X&&(X===t.id+"_dropdown"||X.indexOf("angucomplete")>=0)?X=null:(x=r((function(){ee(),t.$apply((function(){t.uri&&t.uri.length>0&&R.val(t.uri)}))}),m),K(),t.focusOut&&t.focusOut(),t.overrideSuggestions&&t.uri&&t.uri.length>0&&-1===t.currentIndex&&V())},t.resetHideResults=function(){x&&r.cancel(x)},t.hoverRow=function(e){t.currentIndex=e},t.selectResult=function(e){t.matchClass&&(e.title=_(e.originalObject),"string"==typeof e.title&&(e.title=e.title.replace(/<b>|<\/b>/g,"")),e.description=H(e.originalObject,t.descriptionField)),t.clearSelected?t.uri=null:t.uri=e.title,q(e),ee()},t.inputChangeHandler=function(e){return e.length<E?(K(),ee()):0===e.length&&0===E&&(t.searching=!1,re()),t.inputChanged&&(e=t.inputChanged(e)),e},t.fieldRequiredClass&&""!==t.fieldRequiredClass&&(A=t.fieldRequiredClass),t.minlength&&""!==t.minlength&&(E=parseInt(t.minlength,10)),t.pause||(t.pause=D),t.clearSelected||(t.clearSelected=!1),t.overrideSuggestions||(t.overrideSuggestions=!1),t.fieldRequired&&i&&(t.initialValue?N(!0):N(!1)),t.inputType=l.type?l.type:"text",t.textSearching=l.textSearching?l.textSearching:v,t.textNoResults=l.textNoResults?l.textNoResults:b,C="false"!==t.textSearching,$="false"!==t.textNoResults,t.maxlength=l.maxlength?l.maxlength:h,R.on("keydown",(function(e){var u=z(e),n=null,r=null;u===g&&t.results?(t.currentIndex>=0&&t.currentIndex<t.results.length?(e.preventDefault(),t.selectResult(t.results[t.currentIndex])):(V(e),ee()),t.$apply()):u===o&&t.results?(e.preventDefault(),t.currentIndex+1<t.results.length&&t.showDropdown&&(t.$apply((function(){t.currentIndex++,J()})),B&&(n=W(),O.getBoundingClientRect().top+parseInt(getComputedStyle(O).maxHeight,10)<n.getBoundingClientRect().bottom&&Y(function(e){var t=getComputedStyle(e);return e.offsetHeight+parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}(n))))):u===s&&t.results?(e.preventDefault(),t.currentIndex>=1?(t.$apply((function(){t.currentIndex--,J()})),B&&(r=W().getBoundingClientRect().top-(O.getBoundingClientRect().top+parseInt(getComputedStyle(O).paddingTop,10)))<0&&Y(r-1)):0===t.currentIndex&&t.$apply((function(){t.currentIndex=-1,R.val(t.uri)}))):u===p?t.results&&t.results.length>0&&t.showDropdown?-1===t.currentIndex&&t.overrideSuggestions?V():(-1===t.currentIndex&&(t.currentIndex=0),t.selectResult(t.results[t.currentIndex]),t.$digest()):t.uri&&t.uri.length>0&&V():u===d&&e.preventDefault()})),R.on("keyup",(function(e){var u=z(e);if(u!==c&&u!==F)if(u===s||u===g)e.preventDefault();else if(u===o)e.preventDefault(),!t.showDropdown&&t.uri&&t.uri.length>=E&&(te(),t.searching=!0,ue(t.uri));else if(u===d)ee(),t.$apply((function(){R.val(t.uri)}));else{if(0===E&&!t.uri)return;t.uri&&""!==t.uri?t.uri.length>=E&&(te(),M&&r.cancel(M),t.searching=!0,M=r((function(){ue(t.uri)}),t.pause)):t.showDropdown=!1,L&&L!==t.uri&&!t.clearSelected&&t.$apply((function(){q()}))}})),I="remoteUrlResponseFormatter",y=function(e){return t[I]?t[I](e):e},r((function(){var e=getComputedStyle(O);B=e.maxHeight&&"auto"===e.overflowY}))}return(a.put("/angucomplete-alt/index.html",'<div class="angucomplete-holder" ng-class="{\'angucomplete-dropdown-visible\': showDropdown}">  <input id="{{id}}_value" name="{{inputName}}" tabindex="{{fieldTabindex}}" ng-class="{\'angucomplete-input-not-empty\': notEmpty}" ng-model="uri" ng-disabled="disableInput" type="{{inputType}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" ng-focus="onFocusHandler()" class="{{inputClass}}" ng-focus="resetHideResults()" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off" ng-change="inputChangeHandler(uri)" style="overflow: hidden; padding-right: .5em;"/>  <div id="{{id}}_dropdown" class="angucomplete-dropdown" ng-show="disableSuggestions && showDropdown">    <div class="angucomplete-searching" ng-show="searching" ng-bind="textSearching"></div>    <div class="angucomplete-searching" ng-show="!searching && (!results || results.length == 0)" ng-bind="textNoResults"></div>    <div class="angucomplete-row" ng-repeat="result in results" ng-click="selectResult(result)" ng-mouseenter="hoverRow($index)" ng-class="{\'angucomplete-selected-row\': $index == currentIndex}">      <div ng-if="imageField" class="angucomplete-image-holder">        <img ng-if="result.image && result.image != \'\'" ng-src="{{result.image}}" class="angucomplete-image"/>        <div ng-if="!result.image && result.image != \'\'" class="angucomplete-image-default"></div>      </div>      <div class="angucomplete-title" ng-if="matchClass" ng-bind-html="result.title"></div>      <div class="angucomplete-title" ng-if="!matchClass">{{ result.title }}</div>      <div ng-if="matchClass && result.description && result.description != \'\'" class="angucomplete-description" ng-bind-html="result.description"></div>      <div ng-if="!matchClass && result.description && result.description != \'\'" class="angucomplete-description">{{result.description}}</div>    </div>  </div></div>'),{restrict:"EA",require:"^?form",scope:{selectedObject:"=",disableInput:"=",disableSuggestions:"=",initialValue:"=",localData:"=",localSearch:"&",remoteUrlRequestFormatter:"=",remoteUrlRequestWithCredentials:"@",remoteUrlResponseFormatter:"=",remoteUrlErrorCallback:"=",remoteApiHandler:"=",id:"@",type:"@",placeholder:"@",remoteUrl:"@",remoteUrlDataField:"@",titleField:"@",descriptionField:"@",imageField:"@",inputClass:"@",pause:"@",searchFields:"@",minlength:"@",matchClass:"@",clearSelected:"@",overrideSuggestions:"@",fieldRequired:"=",fieldRequiredClass:"@",inputChanged:"=",autoMatch:"@",focusOut:"&",focusIn:"&",fieldTabindex:"@",inputName:"@",focusFirst:"@",parseInput:"&"},templateUrl:function(e,t){return t.templateUrl||"/angucomplete-alt/index.html"},compile:function(e){var t=l.startSymbol(),u=l.endSymbol();if("{{"!==t||"}}"!==u){var n=e.html().replace(/\{\{/g,t).replace(/\}\}/g,u);e.html(n)}return x}})}])}(window.angular)}()},30:function(e,t){let u;angular.module("graphdb.framework.utils.uriutils",[]).factory("UriUtils",(function(){return{isValidIri:function(e){return void 0!==e&&!!e.match(u)},validateRdfUri:function(e){const t=e.indexOf("<")>=0&&e.indexOf(">")>=0,u=-1===e.indexOf("<")&&-1===e.lastIndexOf(">"),n=/^<?(http|urn).*>?/.test(e)&&(t||u);let r=!1;if(n)if(e.indexOf("http")>=0){const t=e.indexOf("//");r=t>4&&e.substring(t+2).length>0}else e.indexOf("urn")>=0&&(r=e.substring(4).length>0);return n&&r}}}));try{u=new RegExp("^[a-z](?:[-a-z0-9\\+\\.])*:(?:\\/\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:])*@)?(?:\\[(?:(?:(?:[0-9a-f]{1,4}:){6}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9a-f]{1,4}:){5}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4}:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+[-a-z0-9\\._~!\\$&'\\(\\)\\*\\+,;=:]+)\\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=@])*)(?::[0-9]*)?(?:\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))*)*|\\/(?:(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))*)*)?|(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))*)*|(?!(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@])))(?:\\?(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@])|[\\u{E000}-\\u{F8FF}\\u{F0000}-\\u{FFFFD}\\u{100000}-\\u{10FFFD}\\/\\?])*)?(?:#(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@])|[\\/\\?])*)?$","ui")}catch(e){u=new RegExp("^[a-z](?:[-a-z0-9\\+\\.])*:","i")}},44:function(e,t){function u(e){return{restrict:"A",scope:{min:"=",max:"="},link:function(t,u,n){const r={debounce:_.debounce,delay:100,loadDelay:10,compressor:1,min:n.fitTextMin||"inherit",max:n.fitTextMax||"inherit",calcSize:10,lines:1},a=u.parent(),l=u[0],i=l.style,o=window.getComputedStyle(u[0],null),F=u.children().length||r.lines,s="inherit"===r.min?o["font-size"]:r.min,c="inherit"===r.max?o["font-size"]:r.max,d=o["line-height"],g=o.display;let p;function f(){const e=r.calcSize*F/l.offsetWidth/F;return Math.max(Math.min(function(e){const t=parseFloat(getComputedStyle(a[0]).paddingLeft),u=parseFloat(getComputedStyle(a[0]).paddingRight);return(a[0].offsetWidth-(t+u))*e*r.compressor}(e),parseFloat(c)),parseFloat(s))}function h(){p&&e.cancel(p),p=e((function(){l.offsetHeight*l.offsetWidth!=0&&(i.fontSize=r.calcSize+"px",i.lineHeight="1",i.display="inline-block",i.fontSize=f()+"px",i.lineHeight=d,i.display=g)}),r.loadDelay)}t.$watch((function(){return[a[0].offsetWidth,u[0].offsetWidth].join("_")}),(function(){h()})),$(window).on("resize",r.debounce((function(){t.$apply(h)}),r.delay)),t.$on("$destroy",(function(){p&&e.cancel(p),$(window).off("resize")}))}}}angular.module("graphdb.framework.core.directives.fittext",[]).directive("fitText",u),u.$inject=["$timeout"]},45:function(e,t){function u(){return{transformToTrig:function(e){let t="";const u={};for(let t=0;t<e.length;t++){const n=e[t];if(void 0===n.context?n.context="":n.context=_.trim(n.context),angular.isUndefined(u[n.context])){const e=[];e.push(n),u[n.context]=e}else u[n.context].push(n)}const n=Object.keys(u);for(let e=0;e<n.length;e++){const r=n[e];t+=""===r?"\n{":"\n<"+r+"> {";const a=u[r];for(let e=0;e<a.length;e++){const u=a[e];t+="\n\t<"+u.subject+"> <"+u.predicate+"> ","uri"===u.object.type?t+="<"+u.object.value+"> .":t+='"'+u.object.value+'"'+(u.object.datatype?"^^<"+u.object.datatype+">":u.object.lang?"@"+u.object.lang:"")+" ."}t+="\n}"}return t},buildStatements:function(e,t){const u=[];if(!_.isEmpty(e.data)){const n=e.data[t],r=Object.keys(n);for(let e=0;e<r.length;e++){const a=r[e],l=n[a];for(let e=0;e<l.length;e++){const n=l[e];for(let e=0;e<n.graphs.length;e++){let r=n.graphs[e];"http://www.ontotext.com/explicit"===r&&(r=""),n.lang&&(n.datatype=""),n.datatype||(n.datatype=""),u.push({subject:t,predicate:a,object:{value:n.value,type:n.type,datatype:n.datatype,lang:n.lang},context:r})}}}}return u},getDatatypeOptions:function(){return[{value:"",label:"string"},{value:"http://www.w3.org/2001/XMLSchema#boolean",label:"boolean"},{value:"http://www.w3.org/2001/XMLSchema#decimal",label:"decimal"},{value:"http://www.w3.org/2001/XMLSchema#integer",label:"integer"},{value:"http://www.w3.org/2001/XMLSchema#double",label:"double"},{value:"http://www.w3.org/2001/XMLSchema#float",label:"float"},{value:"http://www.w3.org/2001/XMLSchema#date",label:"date"},{value:"http://www.w3.org/2001/XMLSchema#time",label:"time"},{value:"http://www.w3.org/2001/XMLSchema#dateTime",label:"date time"},{value:"http://www.w3.org/2001/XMLSchema#byte",label:"byte"},{value:"http://www.w3.org/2001/XMLSchema#short",label:"short"},{value:"http://www.w3.org/2001/XMLSchema#int",label:"int"},{value:"http://www.w3.org/2001/XMLSchema#long",label:"long"},{value:"http://www.w3.org/2001/XMLSchema#unsignedByte",label:"unsigned byte"},{value:"http://www.w3.org/2001/XMLSchema#unsignedShort",label:"unsigned short"},{value:"http://www.w3.org/2001/XMLSchema#unsignedInt",label:"unsigned int"},{value:"http://www.w3.org/2001/XMLSchema#unsignedLong",label:"unsigned long"},{value:"http://www.w3.org/2001/XMLSchema#positoveInteger",label:"positive integer"},{value:"http://www.w3.org/2001/XMLSchema#nonNegativeInteger",label:"non-negative integer"},{value:"http://www.w3.org/2001/XMLSchema#negativeInteger",label:"negative integer"},{value:"http://www.w3.org/2001/XMLSchema#nonPositiveInteger",label:"non-positive integer"},{value:"http://www.w3.org/2001/XMLSchema#gYear",label:"gYear"},{value:"http://www.w3.org/2001/XMLSchema#gMonth",label:"gMonth"},{value:"http://www.w3.org/2001/XMLSchema#gDay",label:"gDay"},{value:"http://www.w3.org/2001/XMLSchema#gYearMonth",label:"gYearMonth"},{value:"http://www.w3.org/2001/XMLSchema#gMonthDay",label:"gMonthDay"},{value:"http://www.w3.org/2001/XMLSchema#duration",label:"duration"},{value:"http://www.w3.org/2001/XMLSchema#hexBinary",label:"hex binary"},{value:"http://www.w3.org/2001/XMLSchema#base64Binary",label:"base64 binary"}]}}}angular.module("graphdb.framework.explore.services",[]).factory("StatementsService",u),u.$inject=[]},46:function(e,t,u){"use strict";u.r(t);u(30);angular.module("graphdb.framework.explore.directives",["graphdb.framework.utils.uriutils"]).directive("uri",["UriUtils",function(e){return{require:"ngModel",link:function(t,u,n,r){r.$parsers.unshift((function(t){if(!angular.isUndefined(t)&&t.length>0){const u=e.validateRdfUri(t);return r.$setValidity("searchStr",u),u?t:void 0}return r.$setValidity("searchStr",!0),t})),r.$formatters.unshift((function(t){return angular.isUndefined(t)||r.$setValidity("searchStr",e.validateRdfUri),t}))}}}])},88:function(e,t,u){"use strict";u.r(t);u(2),u(7),u(45),u(83),u(46),u(216),u(219),u(44);angular.module("graphdb.framework.explore",["ngRoute","toastr","xeditable","angucomplete-alt-onto","graphdb.framework.explore.services","graphdb.framework.explore.controllers","graphdb.framework.explore.directives","graphdb.framework.core.directives.fittext"])}}]);
//# sourceMappingURL=19.021263fa2b5c9ab91047.bundle.js.map