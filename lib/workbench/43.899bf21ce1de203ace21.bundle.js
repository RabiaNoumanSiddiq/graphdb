(window.webpackJsonp=window.webpackJsonp||[]).push([[43,104],{31:function(e,n){function r(e){return{showToastMessageWithDelay:function(n){return new Promise(r=>{e.success(n),setTimeout(r,200)})}}}angular.module("graphdb.framework.utils.notifications",[]).factory("Notifications",r),r.$inject=["toastr"]},79:function(e,n,r){"use strict";r.r(n);r(31),r(4);function t(e,n,r,t,i,o,a,s,u,c,d,l){const y=a.search().type;void 0===y||y.startsWith("text")?e.viewType="text":e.viewType=y;e.newIndex={},e.info=s,e.page=1;const w={id:"1",name:"",query:"",inference:!0,sameAs:!0};const g=function(){var r;if(e.editSearchQuery=a.search().editSearchQuery,e.page=e.editSearchQuery?2:1,e.newIndex.name=(r=a.search().name)?1!==e.page?r:"Copy_of_"+r:"",e.newIndex.options=a.search().options?a.search().options:"text"===e.viewType?"-termweight idf":"",e.searchQueries&&(e.newIndex.searchQuery=a.search().searchQuery?a.search().searchQuery:e.searchQueries[e.viewType],"predication"===e.viewType&&(e.newIndex.analogicalQuery=a.search().analogicalQuery?a.search().analogicalQuery:e.searchQueries.analogical)),e.editSearchQuery)e.currentQuery.query=e.newIndex.searchQuery,e.notoolbarInference=!0,e.notoolbarSameAs=!0,window.editor&&e.setQuery(e.newIndex.searchQuery);else{if("text"===e.viewType&&e.allSamples){e.samples=e.allSamples.text,e.newIndex.stopList=a.search().stopList?a.search().stopList:void 0,e.newIndex.analyzer=a.search().analyzer?a.search().analyzer:"org.apache.lucene.analysis.en.EnglishAnalyzer";const n=m("-literal_index");void 0!==n&&(e.newIndex.isLiteralIndex=n),window.editor&&e.setQuery(e.samples.literals)}"predication"===e.viewType&&e.allSamples&&(i.getIndexes().success((function(n){if(e.literalIndexes=["no-index"].concat(n.filter((function(e){return"textLiteral"===e.type&&("BUILT"===e.status||"OUTDATED"===e.status)})).map((function(e){return e.name}))),void 0===e.newIndex.inputIndex){const n=m("-input_index");if(void 0!==n)for(let r=0;r<e.literalIndexes.length;r++)n===e.literalIndexes[r]&&(e.newIndex.inputIndex=e.literalIndexes[r])}void 0===e.newIndex.inputIndex&&(e.newIndex.inputIndex=e.literalIndexes[0])})).error((function(e){const r=getError(e);n.error(r,"Could not get indexes")})),e.samples=e.allSamples.predication,window.editor&&e.setQuery(e.samples.predication))}},f=new RegExp("^[a-zA-Z0-9-_]+$"),p=function(){return e.invalidIndexName=!1,e.saveQueries(),e.newIndex.name?f.test(e.newIndex.name)?e.newIndex.query?e.newIndex.searchQuery?"predication"!==e.viewType||e.newIndex.analogicalQuery?"SELECT"===window.editor.getQueryType()||void n.error("Similarity index requires SELECT queries."):(n.error("Analogical query cannot be empty."),!1):(n.error("Search query cannot be empty."),!1):(n.error("Select query cannot be empty."),!1):(e.invalidIndexName='Index name can contain only letters (a-z, A-Z), numbers (0-9), "-" and "_"',!1):(e.invalidIndexName="Index name cannot be empty",!1)},x=function(n,r){e.newIndex.options=e.newIndex.options+(""===e.newIndex.options?"":" ")+n+" "+r};function m(n){const r=e.newIndex.options.split(" ");for(let t=0;t<r.length;t++)if(r[t]===n&&t+1<r.length){const n=r[t+1];return delete r[t],delete r[t+1],e.newIndex.options=r.join(" "),n}}function h(e){}function I(n,r,t){const i=angular.element(document.getElementById("yasr-inner"));e.queryIsRunning=n,n?(e.queryStartTime=Date.now(),e.countTimeouted=!1,e.progressMessage=r,e.extraMessage=t,i.addClass("hide")):(e.progressMessage="",e.extraMessage="",i.removeClass("hide")),null===e.$$phase&&e.$apply()}function Q(n){function r(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0}const i=n;if(e.orientationViewMode){if("yasr"===e.viewMode){let e=r()-document.querySelector(".CodeMirror-wrap").getBoundingClientRect().top;e-=40,document.querySelector(".CodeMirror-wrap").style.height=e+"px"}else e.noPadding={},document.querySelector(".CodeMirror-wrap").style.height="";document.getElementById("yasr").style.minHeight=""}else if(e.noPadding={paddingRight:15,paddingLeft:0},window.editor&&document.querySelector(".CodeMirror-wrap")){let e=r()-document.querySelector(".CodeMirror-wrap").getBoundingClientRect().top;e-=40,document.querySelector(".CodeMirror-wrap").style.height=e+"px",document.getElementById("yasr").style.minHeight=e+"px"}else{let n;n=t(i?function(){e.fixSizesOnHorizontalViewModeSwitch(i)}:e.fixSizesOnHorizontalViewModeSwitch,100),e.$on("$destroy",(function(){t.cancel(n)}))}window.yasr&&window.yasr.container&&t((function(){window.yasr.container.resize()}),100)}function T(){Q(!0)}function S(e){t((function(){$('a[data-id = "'+e+'"]').tab("show")}),0)}function b(r,t){e.executedQueryTab=e.currentQuery,"SELECT"===window.editor.getQueryType()?t&&"SELECT"!==window.editor.getQueryType()?n.warning("Explain only works with SELECT queries."):"update"!==window.editor.getQueryMode()?(e.explainRequested=t,e.queryIsRunning||(r?e.currentTabConfig.resultsCount=0:e.resetCurrentTabConfig(),e.viewMode="editor",e.orientationViewMode&&e.fixSizesOnHorizontalViewModeSwitch(),I(!0,"Evaluating query"),window.editor.query())):n.warning("Cannot execute updates from this editor."):n.error("Similarity indexes work only with SELECT queries.")}function v(){I(!0,"Refreshing namespaces","Normally this is a fast operation but it may take longer if a bigger repository needs to be initialised first."),c.getRepositoryNamespaces().success((function(n){const r={};n.results.bindings.forEach((function(e){r[e.prefix.value]=e.namespace.value})),e.namespaces=r})).error((function(n){e.repositoryError=getError(n)})).finally((function(){I(!1)}))}function C(){o.addKnownPrefixes(JSON.stringify(window.editor.getValue())).success((function(e){angular.isDefined(window.editor)&&angular.isDefined(e)&&e!==window.editor.getValue()&&window.editor.setValue(e)})).error((function(e){const r=getError(e);return n.error(r,"Error! Could not add known prefixes"),!0}))}function q(n){let r=void 0;return angular.forEach(e.tabsData,(function(e){if(e.name===n.name&&e.query===n.body)return r=e.id,e})),r}function E(){e.tabsData=[e.currentQuery];const n=e.currentQuery;null===e.currentQuery.query||""===e.currentQuery.query?window.editor.setValue(" "):window.editor.setValue(e.currentQuery.query||" "),t((function(){e.currentTabConfig={},e.currentTabConfig.queryType=n.queryType,e.currentTabConfig.resultsCount=n.resultsCount,e.currentTabConfig.offset=n.offset,e.currentTabConfig.allResultsCount=n.allResultsCount,e.currentTabConfig.page=n.page,e.currentTabConfig.pageSize=n.pageSize,e.currentTabConfig.timeFinished=n.timeFinished,e.currentTabConfig.timeTook=n.timeTook,e.currentTabConfig.sizeDelta=n.sizeDelta,e.$apply()}),0),$("#yasr").css("padding","0")}function M(e){return $(e).attr("data-id")}i.getSearchQueries().success((function(n){e.searchQueries=n,i.getSamples().success((function(n){w.query=a.search().selectQuery?a.search().selectQuery:n.text.literals,w.inference=!("false"===a.search().infer),w.sameAs=!("false"===a.search().sameAs),e.tabsData=e.tabs=[w],e.currentQuery=angular.copy(w),e.allSamples=n,g()}))})).error((function(e){const r=getError(e);n.error(r,"Could not get search queries")})),e.$watch("viewType",(function(){g()})),e.helpHidden=1===d.get(l.HIDE_SIMILARITY_HELP),e.toggleHelp=function(n){void 0===n&&(n=d.get(l.HIDE_SIMILARITY_HELP)),1!==n?(d.set(l.HIDE_SIMILARITY_HELP,1),e.helpHidden=!0):(d.set(l.HIDE_SIMILARITY_HELP,0),e.helpHidden=!1)},e.viewQuery=function(){p()&&i.getQuery({indexName:e.newIndex.name,indexOptions:e.newIndex.options,query:e.currentQuery.query,indexStopList:e.newIndex.stopList,queryInference:e.currentQuery.inference,querySameAs:e.currentQuery.sameAs,viewType:e.viewType,indexAnalyzer:e.newIndex.analyzer}).success((function(e){e&&r.open({templateUrl:"pages/viewQuery.html",controller:"ViewQueryCtrl",resolve:{query:function(){return e}}})}))},e.$watch("newIndex.name",(function(){e.isInvalidIndexName=!1,e.isEmptyIndexName=!1})),e.saveQueries=function(){const n=window.editor.getValue().trim();1===e.page?e.newIndex.query=n:2===e.page?e.newIndex.searchQuery=n:3===e.page&&(e.newIndex.analogicalQuery=n)},e.goToPage=function(n){1!==n&&"yasr"!==e.viewMode&&(e.showEditor(),t((function(){2===n&&(e.currentQuery.query=e.newIndex.searchQuery),3===n&&(e.currentQuery.query=e.newIndex.analogicalQuery),window.editor.setValue(e.currentQuery.query||" ")}))),e.saveQueries(),1===n?e.currentQuery.query=e.newIndex.query:2===n?e.currentQuery.query=e.newIndex.searchQuery:3===n&&(e.currentQuery.query=e.newIndex.analogicalQuery),E(),e.notoolbar=1!==n,e.page=n},e.createIndex=function(){p()&&i.getIndexes().success((function(r){if(r.forEach((function(n){n.name===e.newIndex.name&&(e.invalidIndexName="Index with this name already exists.")})),!e.invalidIndexName){let r=e.viewType;if(void 0!==e.literalIndexes){const n=e.newIndex.inputIndex;n!==e.literalIndexes[0]&&x("-input_index",n)}"true"===e.newIndex.isLiteralIndex&&(x("-literal_index","true"),r="textLiteral"),i.createIndex("POST",e.newIndex.name,e.newIndex.options,e.newIndex.query,e.newIndex.searchQuery,e.newIndex.analogicalQuery,e.newIndex.stopList,e.currentQuery.inference,e.currentQuery.sameAs,r,e.newIndex.analyzer).error((function(e){n.error(getError(e),"Could not create index")})),a.url("similarity")}})).error((function(e){const r=getError(e);n.error(r,"Could not get indexes")}))},e.setQuery=function(e){window.editor.setValue(e||" ")},e.showEditor=function(){window.editor.xhr&&window.editor.xhr.abort(),e.viewMode="yasr"},e.showPreview=function(){e.currentQuery.outputType="table",e.runQuery()},e.resetCurrentTabConfig=function(){e.currentTabConfig={pageSize:100,page:1,allResultsCount:0,resultsCount:0}},e.queryExists=!1,e.resetCurrentTabConfig(),e.tabsData=e.tabs=[w],e.saveTab=function(n){const r=function(n){for(let r=0;r<e.tabsData.length;r++){if(e.tabsData[r].id===n)return r}}(n);if(void 0===r)return{};const t=e.tabsData[r];return e.saveQueryToLocal(t),t},e.loadTab=E,e.addNewTab=function(e,n,r){},e.runQuery=b,e.getNamespaces=v,e.changePagination=function(){b(!0,e.explainRequested)},e.toggleSampleQueries=function(){},e.addKnownPrefixes=C,e.getExistingTabId=q,e.querySelected=function(n){const r=q(n);e.toggleSampleQueries(),angular.isDefined(r)?S(r):e.addNewTab(null,n.name,n.body)},e.saveQueryToLocal=h,e.setLoader=I,e.getLoaderMessage=function(){const n=(Date.now()-e.queryStartTime)/1e3,r=e.getHumanReadableSeconds(n);let t="";t=e.progressMessage?e.progressMessage+"... "+r:"Running operation..."+r;e.extraMessage&&n>10&&(t+="\n"+e.extraMessage);return t},e.fixSizesOnHorizontalViewModeSwitch=Q,e.changeViewMode=function(n){e.viewMode="none",e.orientationViewMode=!e.orientationViewMode,Q(),$(".dataTables_filter").remove(),$(".resultsTable").remove(),t((function(){E(),S(n)}),100)},e.showHideEditor=T,e.focusQueryEditor=function(){angular.element(document).find(".editable-input").is(":focus")||angular.element(document).find(".CodeMirror textarea:first-child").focus()},e.orientationViewMode=!0,e.getActiveRepository(),e.orientationViewMode||T(),e.getActiveRepository()&&v(),e.$on("$destroy",(function(){window.editor=null,window.yasr=null})),$("textarea").on("paste",(function(){t((function(){C()}),0)})),e.$watchCollection("[currentQuery.inference, currentQuery.sameAs]",(function(){e.currentQuery})),e.$on("tabAction",(function(n,r){r.relatedTarget&&e.saveTab(M(r.relatedTarget)),e.loadTab(M(r.target))})),e.$on("deleteAllexeptSelected",(function(n,r){e.tabsData=r,e.tabs=r})),e.currentQuery=angular.copy(w),e.showSampleQueries=!1,e.savedQuery={},e.sampleQueries={},e.getResultsDescription=function(){},e.getUpdateDescription=function(){},e.getStaleWarningMessage=function(){},e.saveSearchQuery=function(){if("SELECT"!==window.editor.getQueryType())return void n.error("Similarity index requires SELECT queries.");let r={name:e.newIndex.name,changedQuery:e.currentQuery.query,isSearchQuery:2===e.page};return i.saveSearchQuery(JSON.stringify(r)).then((async function(){await u.showToastMessageWithDelay(2===e.page?"Changed search query":"Changed analogical query"),a.url("similarity")}),(function(e){n.error(getError(e),"Could not change query!")}))},e.getCloseBtnMsg=function(){return"Closes "+(e.editSearchQuery?"query edition":"index creation")+" without saving the changes."}}angular.module("graphdb.framework.similarity.controllers.create",["graphdb.framework.utils.notifications","graphdb.framework.utils.localstorageadapter"]).controller("CreateSimilarityIdxCtrl",t),t.$inject=["$scope","toastr","$modal","$timeout","SimilarityRestService","SparqlRestService","$location","productInfo","Notifications","RDF4JRepositoriesRestService","LocalStorageAdapter","LSKeys"]}}]);
//# sourceMappingURL=43.899bf21ce1de203ace21.bundle.js.map