(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{78:function(e,t,r){"use strict";r.r(t);var i=r(207),n=r.n(i);function a(e,t,r,i,a,s,c,o,l,u){const p="http://www.ontotext.com/graphdb/similarity/",d="http://www.ontotext.com/graphdb/similarity/psi/",y=d+"any",h=function(e){return'"'+e+'"'},g=function(e){return void 0===e||e.startsWith("<<")&&e.endsWith(">>")?e:"<"+e+">"};function m(){return!e.getActiveRepository()||e.isActiveRepoFedXType()||e.isActiveRepoOntopType()}e.info=l,e.pluginDisabled=!1,e.getActiveRepository=function(){return i.getActiveRepository()},e.checkPluginEnabled=function(){m()||u.checkSimilarityPluginEnabled().done((function(t){e.pluginDisabled=t.indexOf("false")>0})).fail((function(e){r.error(getError(e),"Could not check plugin enabled!")}))},e.enabledSimilarityPlugin=function(){u.enableSimilarityPlugin().done((function(){e.pluginDisabled=!1,e.getSimilarityIndexes()})).fail((function(e){r.error(getError(e),"Could not enable plugin!")}))},m()||c.getSearchQueries().success((function(t){e.searchQueries=t})).error((function(e){const t=getError(e);r.error(t,"Could not get search queries")})),e.encodeURIComponent=function(e){return encodeURIComponent(e)},e.getSimilarityIndexes=function(){m()||e.pluginDisabled||c.getIndexes().success((function(t){e.similarityIndexes=t})).error((function(e){const t=getError(e);r.error(t,"Could not get indexes")}))},e.pullList=function(){if(m()||e.pluginDisabled)return;e.getSimilarityIndexes();const r=t((function(){"false"!==$("#indexes-table").attr("aria-expanded")&&e.getSimilarityIndexes()}),5e3);e.$on("$destroy",(function(){t.cancel(r)}))};const f=e.$on("repositoryIsSet",(function(){e.checkPluginEnabled(),e.pullList()}));let S;function b(){e.getAutocompletePromise=o.checkAutocompleteStatus()}e.getActiveRepository()&&(e.checkPluginEnabled(),e.pullList()),e.$watch((function(){return i.getActiveRepository()}),(function(){!e.getActiveRepository()||e.isActiveRepoOntopType()||e.isActiveRepoFedXType()||(e.getNamespacesPromise=u.getNamespaces(e.getActiveRepository()).success((function(t){b(),e.usedPrefixes={},t.results.bindings.forEach((function(t){e.usedPrefixes[t.prefix.value]=t.namespace.value})),S=n()(document.getElementById("yasr"),{getUsedPrefixes:e.usedPrefixes,persistency:!1,hideHeader:!0})})).error((function(e){r.error(getError(e),"Cannot get namespaces for repository. View will not work properly;")})))})),e.$on("autocompleteStatus",(function(){b()})),e.loading=!1,e.selected=void 0,e.searchType="searchTerm",e.resultType="termResult",e.$watch("searchType",(function(){e.empty=!0})),e.goToSimilarityIndex=function(t){"BUILT"!==t.status&&"OUTDATED"!==t.status&&"REBUILDING"!==t.status||(e.empty=!0,e.selected!==t&&(e.lastSearch=void 0,e.selected=t),"text"===t.type?e.searchType="searchTerm":"predication"===t.type&&(e.searchType="searchEntity"),"text"!==t.type&&"predication"!==t.type||$("#indexes-table").collapse("hide"))};const x=function(t){const r=angular.element(document.getElementById("yasr-inner")),i=angular.element(document.getElementById("results-loader"));t?(e.loading=!0,r.addClass("opacity-hide"),i.removeClass("opacity-hide")):(e.loading=!1,r.removeClass("opacity-hide"),i.addClass("opacity-hide"))};e.performSearch=function(t,n,a,s,c){x(!0);let o=n;e.lastSearch={},e.lastSearch.type=a,"searchEntityPredicate"===a&&(o=e.psiSubject,e.lastSearch.predicate=n),o="searchTerm"===a?h(o):g(o),e.lastSearch.termOrSubject=o;let l;l="searchAnalogical"===a?e.selected.analogicalQuery?e.selected.analogicalQuery:e.searchQueries.analogical:e.selected.searchQuery?e.selected.searchQuery:e.searchQueries[e.selected.type];const u={query:l,$index:g("http://www.ontotext.com/graphdb/similarity/instance/"+t),$query:o,$searchType:g(("text"===e.selected.type?p:d)+("searchEntityPredicate"===a?"searchEntity":a)),$resultType:g("text"===e.selected.type?p+s:d+"entityResult"),$parameters:h(c)};"searchEntityPredicate"===a&&(u.$psiPredicate=e.lastSearch.predicate?g(e.lastSearch.predicate):g(y)),"searchAnalogical"===a&&(e.searchSubject=n,u.$givenSubject=g(e.analogicalSubject),u.$givenObject=g(e.analogicalObject),u.$searchSubject=g(n)),$.ajax({method:"GET",url:"repositories/"+i.getActiveRepository(),data:u,headers:{Accept:"application/x-sparqlstar-results+json, application/sparql-results+json;q=0.9, */*;q=0.8"}}).done((function(e,t,r){x(!1),S.setResponse(e,t,r)})).fail((function(e){r.error(getError(e),"Could not get resource!"),x(!1)}))},e.viewSearchQuery=function(){let t;t="searchAnalogical"===e.lastSearch.type?e.selected.analogicalQuery?e.selected.analogicalQuery:e.searchQueries.analogical:e.selected.searchQuery?e.selected.searchQuery:e.searchQueries[e.selected.type];const r=t.replace("?index","inst:"+e.selected.name).replace("?query",e.lastSearch.termOrSubject).replace("?searchType",("text"===e.selected.type?":":"psi:")+("searchEntityPredicate"===e.lastSearch.type?"searchEntity":e.lastSearch.type)).replace("?resultType","text"===e.selected.type?":"+e.resultType:"psi:entityResult").replace("?parameters",h(e.searchParameters?e.searchParameters:"")).replace("?psiPredicate",e.lastSearch.predicate?g(e.lastSearch.predicate):g(y)).replace("?givenSubject",g(e.analogicalSubject)).replace("?givenObject",g(e.analogicalObject)).replace("?searchSubject",g(e.searchSubject));s.open({templateUrl:"pages/viewQuery.html",controller:"ViewQueryCtrl",resolve:{query:function(){return r}}})},e.deleteIndex=function(t){a.openSimpleModal({title:"Confirm",message:"Are you sure you want to delete the index '"+t.name+"'?",warning:!0}).result.then((function(){c.deleteIndex(t).then((function(){e.getSimilarityIndexes()}),(function(e){r.error(getError(e))}))}))},e.viewCreateQuery=function(e){c.getQuery({indexName:e.name,indexOptions:e.options,query:e.selectQuery,indexStopList:e.stopList,queryInference:e.infer,querySameAs:e.sameAs,viewType:e.type,indexAnalyzer:e.analyzer}).success((function(e){s.open({templateUrl:"pages/viewQuery.html",controller:"ViewQueryCtrl",resolve:{query:function(){return e}}})}))},e.rebuildIndex=function(t){t.searchQuery||(t.searchQuery=t.type?e.searchQueries[t.type]:e.searchQueries.text),a.openSimpleModal({title:"Confirm",message:"Are you sure you want to rebuild the whole index '"+t.name+"'?<br>You will still be able to use the latest successful build!",warning:!0}).result.then((function(){t.status="REBUILDING",c.rebuildIndex(t).then((function(e){}),(function(e){r.error(getError(e))}))}))},e.copyToClipboardResult=function(e){a.openCopyToClipboardModal(e)},e.trimIRI=function(e){return _.trim(e,"<>")},window.addEventListener("beforeunload",(function e(){f(),window.removeEventListener("beforeunload",e)}))}angular.module("graphdb.framework.similarity.controllers.list",[]).controller("SimilarityCtrl",a),a.$inject=["$scope","$interval","toastr","$repositories","ModalService","$modal","SimilarityRestService","AutocompleteRestService","productInfo","RDF4JRepositoriesRestService"]}}]);
//# sourceMappingURL=96.5e92f88002f7573b4398.bundle.js.map