(window.webpackJsonp=window.webpackJsonp||[]).push([[11,105],{30:function(t,e){let u;angular.module("graphdb.framework.utils.uriutils",[]).factory("UriUtils",(function(){return{isValidIri:function(t){return void 0!==t&&!!t.match(u)},validateRdfUri:function(t){const e=t.indexOf("<")>=0&&t.indexOf(">")>=0,u=-1===t.indexOf("<")&&-1===t.lastIndexOf(">"),n=/^<?(http|urn).*>?/.test(t)&&(e||u);let r=!1;if(n)if(t.indexOf("http")>=0){const e=t.indexOf("//");r=e>4&&t.substring(e+2).length>0}else t.indexOf("urn")>=0&&(r=t.substring(4).length>0);return n&&r}}}));try{u=new RegExp("^[a-z](?:[-a-z0-9\\+\\.])*:(?:\\/\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:])*@)?(?:\\[(?:(?:(?:[0-9a-f]{1,4}:){6}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|::(?:[0-9a-f]{1,4}:){5}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:[0-9a-f]{1,4}:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3})|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|v[0-9a-f]+[-a-z0-9\\._~!\\$&'\\(\\)\\*\\+,;=:]+)\\]|(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\\.(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}|(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=@])*)(?::[0-9]*)?(?:\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))*)*|\\/(?:(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))*)*)?|(?:(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))+)(?:\\/(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@]))*)*|(?!(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@])))(?:\\?(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@])|[\\u{E000}-\\u{F8FF}\\u{F0000}-\\u{FFFFD}\\u{100000}-\\u{10FFFD}\\/\\?])*)?(?:#(?:(?:%[0-9a-f][0-9a-f]|[-a-z0-9\\._~\\u{A0}-\\u{D7FF}\\u{F900}-\\u{FDCF}\\u{FDF0}-\\u{FFEF}\\u{10000}-\\u{1FFFD}\\u{20000}-\\u{2FFFD}\\u{30000}-\\u{3FFFD}\\u{40000}-\\u{4FFFD}\\u{50000}-\\u{5FFFD}\\u{60000}-\\u{6FFFD}\\u{70000}-\\u{7FFFD}\\u{80000}-\\u{8FFFD}\\u{90000}-\\u{9FFFD}\\u{A0000}-\\u{AFFFD}\\u{B0000}-\\u{BFFFD}\\u{C0000}-\\u{CFFFD}\\u{D0000}-\\u{DFFFD}\\u{E1000}-\\u{EFFFD}!\\$&'\\(\\)\\*\\+,;=:@])|[\\/\\?])*)?$","ui")}catch(t){u=new RegExp("^[a-z](?:[-a-z0-9\\+\\.])*:","i")}},84:function(t,e,u){"use strict";u.r(e);u(2),u(30);const n="UPLOADING",r="PENDING",a="ERROR",i="DONE",F="NONE",s=angular.module("graphdb.framework.impex.import.controllers",["ui.bootstrap","toastr","graphdb.framework.core.services.repositories","graphdb.framework.utils.uriutils"]);s.controller("CommonCtrl",["$scope","$http","toastr","$interval","$repositories","$modal","$filter","$jwtAuth","$location","LicenseRestService",function(t,e,u,n,r,F,s,o,l,c){t.files=[],t.fileChecked={},t.checkAll=!1,t.popoverTemplateUrl="settingsPopoverTemplate.html",t.fileQuery="",t.getAppData=function(){c.getInfo().success((function(e){t.appData={},t.appData.properties={};for(let u=0;u<e.length;u++)t.appData.properties[e[u].key]={source:e[u].source,value:e[u].value};t.maxUploadFileSizeMB=t.appData.properties["graphdb.workbench.maxUploadSize"].value/1048576})).error((function(t){const e=getError(t);u.error(e,"Error")}))},t.getAppData(),t.fileFormats=["ttl","ttls","rdf","rj","n3","nt","nq","trig","trigs","trix","brf","owl","jsonld"];{const e=_.map(t.fileFormats,(function(t){return"."+t+".gz"})),u=_.map(t.fileFormats,(function(t){return"."+t}));t.fileFormatsExtended=_.reduce(_.union(e,u,[".zip"]),(function(t,e){return t+", "+e})),t.fileFormatsHuman=_.reduce(u,(function(t,e){return t+" "+e}))+", as well as their .gz versions and .zip archives",t.textFileFormatsHuman=_.reduce(_.filter(u,(function(t){return".brf"!==t})),(function(t,e){return t+" "+e}))}t.updateListHttp=function(n){e({method:"GET",url:t.getBaseUrl()}).success((function(e){0===t.files.length||n?(t.files=e,_.forEach(t.files,(function(e){e.type||(e.type=t.defaultType)})),t.rebatch()):t.files.forEach((function(u){const n=_.find(e,_.matches({name:u.name}));u.status&&n&&_.assign(u,n),u.type||(u.type=t.defaultType)})),n&&"user"===t.viewType&&(t.files=_.filter(t.files,(function(t){return void 0!==t.status}))),t.showClearStatuses=_.filter(t.files,(function(t){return t.status===i||t.status===a})).length>0,t.savedSettings=_.mapKeys(_.filter(t.files,"parserSettings"),"name"),t.loader=!1})).error((function(e){u.warning("Could not get files; "+getError(e)),t.loader=!1}))},t.$watch((function(){return $(t.tabId).is(":visible")}),(function(){$(t.tabId).is(":visible")&&(t.updateListHttp(!1),l.hash(t.viewType))})),t.updateList=function(e){t.canWriteActiveRepo()&&$(t.tabId).is(":visible")&&t.updateListHttp(e)},t.init=function(){t.setRestricted(),t.isRestricted||(t.updateList(!0),t.getSettings())},t.$on("repositoryIsSet",t.init),t.pullList=function(){const e=n((function(){t.updating||t.updateList(!1)}),4e3);t.$on("$destroy",(function(){n.cancel(e)}))},t.getVisibleFiles=function(){return s("filter")(t.files,{name:t.fileQuery,type:t.getTypeFilter()})},t.getTypeFilter=function(){return"server"!==t.viewType||"file"!==t.showItems&&"directory"!==t.showItems?"":t.showItems},t.selectAllFiles=function(){t.getVisibleFiles().forEach((function(e){t.fileChecked[e.name]=t.checkAll&&t.importable(e)}))},t.getSettingsFor=function(e,u){return u||_.isEmpty(e)||_.isEmpty(t.savedSettings[e])?angular.copy(t.defaultSettings):t.savedSettings[e]},t.setSettingsFor=function(e,u){t.settingsFor=e,t.settings=t.getSettingsFor(e,u),F.open({templateUrl:"js/angular/import/templates/settingsModal.html",controller:"SettingsModalCtrl",resolve:{settings:function(){return angular.copy(t.settings)},hasParserSettings:t.isLocalLocation,defaultSettings:function(){return t.defaultSettings},isMultiple:function(){return!e}},size:"lg"}).result.then((function(e){t.settings=e,""===t.settingsFor?t.importSelected():t.importFile(t.settingsFor,!0)}),(function(e){t.settings=e}))},t.updateImport=function(e,u){t.settingsFor=e,t.settings=t.getSettingsFor(e,u),t.importFile(e,!1)},t.stopImport=function(n){e({method:"DELETE",url:t.getBaseUrl(),params:{name:n.name,type:n.type}}).success((function(){t.updateList()})).error((function(t){u.warning("Could not stop import; "+getError(t))}))},t.importable=function(){return!0},t.hasImportable=function(){return _.filter(t.files,(function(e){return t.importable(e)})).length>0},t.showTable=function(){const e=t.files.length>0&&("user"===t.viewType||"server"===t.viewType);return t.checkAll&&t.switchBatch(!0),e},t.switchBatch=function(e){e?t.selectAllFiles():t.checkAll&&(t.checkAll=!1),t.batch=_.map(_.filter(t.files,(function(e){return t.fileChecked[e.name]&&t.importable(e)})),"name").length>0},t.rebatch=function(){const e={};t.batch=!1,_.each(t.files,(function(u){e[u.name]=t.fileChecked[u.name],t.batch|=t.fileChecked[u.name]})),t.batch||(t.checkAll=!1),t.fileChecked=e},t.getSelectedFiles=function(){return _.map(_.filter(t.getVisibleFiles(),(function(e){return t.fileChecked[e.name]&&t.importable(e)})),"name")},t.importSelected=function(e){const u=t.getSelectedFiles(),n=function(){const r=u.shift();r&&(e&&(t.settings=t.getSettingsFor(r)),t.importFile(r,!0,n))};n()};const f=function(n,r){e({method:"DELETE",url:t.getBaseUrl()+"/status",params:{remove:r},data:n,headers:{"Content-type":"application/json;charset=utf-8"}}).success((function(){t.updateList(!0)})).error((function(t){u.warning("Could not clear status; "+getError(t))}))};t.resetStatus=function(t){f(t,!1)},t.resetStatusSelected=function(){t.resetStatus(t.getSelectedFiles())},t.removeEntry=function(t){f(t,!0)},t.removeEntrySelected=function(){t.removeEntry(t.getSelectedFiles())},t.isLocalLocation=function(){const t=r.getActiveLocation();return t&&t.local},t.filterSettings=function(e){let u=_.omitBy(t.savedSettings[e],_.isNull);return u=_.omit(u,["repoLocationHash","status","message","name","data","type","format","fileNames","$$hashKey"]),_.map(_.keys(u),(function(t){return[t,u[t]]}))},t.getSettings=function(){t.canWriteActiveRepo()&&e({method:"GET",url:"rest/data/import/settings/default"}).success((function(e){t.defaultSettings=e})).error((function(t){u.warning("Could not get default settings; "+getError(t))}))},t.getBaseUrl=function(){return"rest/data/import/"+t.viewUrl+"/"+r.getActiveRepository()},t.pritifySettings=function(t){return JSON.stringify(t,null," ")},t.toTitleCase=function(t){return t?_.upperFirst(t.toLowerCase()):t}}]),s.controller("ImportCtrl",["$scope","$http","toastr","$controller",function(t,e,u,n){t.loader=!0,angular.extend(this,n("CommonCtrl",{$scope:t})),t.viewUrl="server",t.defaultType="server",t.tabId="#import-server",t.showItems="all",t.pullList();const r=function(n,r){t.canWriteActiveRepo()&&e({method:"POST",url:t.getBaseUrl(),data:{importSettings:r?null:t.settings,fileNames:n}}).success((function(){t.updateList(),t.batch=!1,t.fileChecked={}})).error((function(t){u.error("Could not send file for import; "+getError(t))}))};t.importSelected=function(e){const u=t.getSelectedFiles();r(u,e)},t.importFile=function(t){r([t])},t.init()}]),s.controller("UploadCtrl",["$scope","Upload","$http","toastr","$controller","$modal",function(t,e,u,i,s,o){t.loader=!0,angular.extend(this,s("CommonCtrl",{$scope:t})),t.viewUrl="upload",t.defaultType="file",t.tabId="#import-user",t.pullList(),t.currentFiles=[],t.importable=function(){return!0},t.fileSelected=function(t,e,u,n,r){r.length>0&&r.forEach((function(t){i.warning("File "+t.name+" too big "+Math.floor(t.size/1048576)+" MB. Use Server Files import.")}))},t.$watchCollection("currentFiles",(function(){t.currentFiles&&t.currentFiles.forEach((function(e){if("bz2"===e.name.substr(e.name.lastIndexOf(".")+1)){const u=t.currentFiles.indexOf(e);u>-1&&t.currentFiles.splice(u,1),i.error("Could not upload file "+e.name+". BZip2 archives are not supported.")}})),t.files=_.uniqBy(_.union(_.map(t.currentFiles,(function(t){return{name:t.name,type:"file",file:t}})),t.files),(function(t){return t.name})),t.savedSettings=_.mapKeys(_.filter(t.files,"parserSettings"),"name"),_.each(t.currentFiles,(function(e){t.updateImport(e.name)}))})),t.importFile=function(F,s,o){const l=_.findIndex(t.files,{name:F});if(l<0)i.warning("No such file; "+F);else{const F=t.files[l];if("text"===F.type)t.settings.name=F.name,t.settings.type=F.type,t.settings.data=F.data,t.settings.format=F.format,F.status=r,u({method:"POST",url:t.getBaseUrl()+(s?"":"/update")+"/text",data:t.settings}).success((function(){t.updateList()})).error((function(t){i.error("Could not send data for import; "+getError(t)),F.status=a,F.message=getError(t)})).finally(o||function(){});else if("url"===F.type)t.settings.name=F.name,t.settings.type=F.type,t.settings.data=F.data,t.settings.format=F.format,F.status=r,u({method:"POST",url:t.getBaseUrl()+(s?"":"/update")+"/url",data:t.settings}).success((function(){t.updateList()})).error((function(t){i.error("Could not send url for import; "+getError(t))})).finally(o||function(){});else{let u;t.settings.name=F.name,u=F.file?{file:F.file,importSettings:e.jsonBlob(t.settings)}:{importSettings:e.jsonBlob(t.settings)},e.upload({url:t.getBaseUrl()+(s?"":"/update")+"/file",data:u}).progress((function(t){if(F.file?(F.file=null,F.status=n):F.status!==n&&(F.status=r),F.status===n){const e=parseInt(100*t.loaded/t.total);F.message=e+"% uploaded"}})).success((function(){t.updateList()})).error((function(t){i.error("Could not upload file; "+getError(t)),F.status=a,F.message=getError(t)})).finally(o||function(){})}}},t.updateTextImport=function(e){t.updating=!0,u({method:"POST",url:t.getBaseUrl()+"/update/text",data:e}).success((function(t){})).error((function(t){i.error("Could not update text import; "+getError(t))})).finally((function(){t.updating=!1}))},t.pastedDataIdx=1;const l=function(){const t=new Date;return t.getFullYear()+"-"+_.padStart(t.getMonth()+1,2,"0")+"-"+_.padStart(t.getDate(),2,"0")+" "+_.padStart(t.getHours(),2,"0")+":"+_.padStart(t.getMinutes(),2,"0")+":"+_.padStart(t.getSeconds(),2,"0")+"."+_.padStart(t.getMilliseconds(),3,"0")};t.pasteData=function(e){e&&e.data,o.open({templateUrl:"js/angular/import/templates/textSnippet.html",controller:"TextCtrl",resolve:{text:function(){return e?e.data:""},format:function(){return e?e.format:"text/turtle"}}}).result.then((function(u){e?(e.data===u.text&&e.format===u.format||e.status===F||(e.status=F,e.message="Text snippet was edited but has not been imported again."),e.data=u.text,e.format=u.format,t.updateTextImport(e)):(e={type:"text",name:"Text snippet "+l(),format:u.format,data:u.text},t.files.unshift(e),t.updateImport(e.name)),u.startImport&&t.setSettingsFor(e.name)}))},t.rdfDataFromURL=function(){o.open({templateUrl:"js/angular/import/templates/urlImport.html",controller:"UrlCtrl",scope:t}).result.then((function(e){const u=_.find(t.files,{type:"url",name:e.url});u?u.format=e.format:t.files.unshift({type:"url",name:e.url,format:e.format,data:e.url}),t.updateImport(e.url,!0),e.startImport&&t.setSettingsFor(e.url,!0)}))},t.init()}]),s.controller("UrlCtrl",["$scope","$modalInstance","toastr",function(t,e){t.importFormat={name:"Auto",type:""},t.startImport=!0,t.cancel=function(){e.dismiss()},t.ok=function(){e.close({url:t.dataUrl,format:t.importFormat.type,startImport:t.startImport})}}]),s.controller("TextCtrl",["$scope","$modalInstance","text","format",function(t,e,u,n){t.importFormats=[{name:"RDF/JSON",type:"application/rdf+json"},{name:"JSON-LD",type:"application/ld+json"},{name:"RDF/XML",type:"application/rdf+xml"},{name:"N3",type:"text/rdf+n3"},{name:"N-Triples",type:"text/plain"},{name:"N-Quads",type:"text/x-nquads"},{name:"Turtle",type:"text/turtle"},{name:"Turtle*",type:"application/x-turtlestar"},{name:"TriX",type:"application/trix"},{name:"TriG",type:"application/x-trig"},{name:"TriG*",type:"application/x-trigstar"}],t.rdfText=u,t.importFormat=_.find(t.importFormats,{type:n}),t.startImport=!0,t.setFormat=function(e){t.importFormat=e},t.cancel=function(){e.dismiss()},t.ok=function(){e.close({text:t.rdfText,format:t.importFormat.type,startImport:t.startImport})}}]),s.controller("TabCtrl",["$scope","$location",function(t,e){t.viewType=e.hash(),"user"!==t.viewType&&"server"!==t.viewType&&(t.viewType="user"),t.isCollapsed=!1,"user"===t.viewType?t.templateUrl="js/angular/import/templates/uploadInfo.html":t.templateUrl="js/angular/import/templates/importInfo.html",t.changeHelpTemplate=function(e){t.templateUrl="js/angular/import/templates/"+e},t.commonUrl="js/angular/import/templates/commonInfo.html"}]),s.controller("SettingsModalCtrl",["$scope","$modalInstance","toastr","UriUtils","settings","hasParserSettings","defaultSettings","isMultiple",function(t,e,u,n,r,a,i,F){t.hasError=function(t,e){return _.find(t,(function(t){return e===t.$name}))},t.settings=r,t.hasParserSettings=a,t.settings.context?"default"===t.settings.context?(t.target="default",t.settings.context=""):t.target="named":t.target="data",t.isMultiple=F,t.enableReplace=!(!t.settings.replaceGraphs||!t.settings.replaceGraphs.length);const s=function(){"default"===t.target?t.settings.context="default":"data"===t.target&&(t.settings.context=""),t.enableReplace?"default"!==t.target&&"named"!==t.target||(t.settings.replaceGraphs=[t.settings.context]):t.settings.replaceGraphs=[]};t.ok=function(){t.settingsForm.replaceGraph.$setValidity("replaceGraph",!0),t.settingsForm.$valid&&(s(),e.close(t.settings))},t.cancel=function(){s(),e.dismiss(t.settings)},t.reset=function(){t.settings=angular.copy(i),t.target="data"},t.addReplaceGraph=function(e){let r=!0;"default"!==e&&(r=n.isValidIri(e)),t.settingsForm.replaceGraph.$setTouched(),t.settingsForm.replaceGraph.$setValidity("replaceGraph",r),t.settingsForm.replaceGraph.$valid&&(t.settings.replaceGraphs=t.settings.replaceGraphs||[],-1===_.indexOf(t.settings.replaceGraphs,e)?(t.replaceGraph="",t.settings.replaceGraphs.push(e)):u.warning("This graph is already in the list."))},t.checkEnterReplaceGraph=function(e,u){13===e.keyCode&&(e.preventDefault(),t.addReplaceGraph(u))},t.showAdvancedSettings=!1,t.switchParserSettings=function(){t.showAdvancedSettings=!t.showAdvancedSettings}}])}}]);
//# sourceMappingURL=11.bdd794940dcfd5daa9a1.bundle.js.map