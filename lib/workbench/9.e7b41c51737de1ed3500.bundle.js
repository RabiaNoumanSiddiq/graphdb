(window.webpackJsonp=window.webpackJsonp||[]).push([[9,103],{210:function(e,t,n){var r,o=o||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o=e.webkitRequestFileSystem,i=e.requestFileSystem||o||e.mozRequestFileSystem,a=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},s=0,c=function(t){var r=function(){"string"==typeof t?n().revokeObjectURL(t):t.remove()};e.chrome?r():setTimeout(r,500)},l=function(e,t,n){for(var r=(t=[].concat(t)).length;r--;){var o=e["on"+t[r]];if("function"==typeof o)try{o.call(e,n||e)}catch(e){a(e)}}},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e},p=function(t,a){t=u(t);var p,d,f,m=this,g=t.type,h=!1,x=function(){l(m,"writestart progress write writeend".split(" "))},w=function(){(!h&&p||(p=n().createObjectURL(t)),d)?d.location.href=p:null==e.open(p,"_blank")&&"undefined"!=typeof safari&&(e.location.href=p);m.readyState=m.DONE,x(),c(p)},y=function(e){return function(){if(m.readyState!==m.DONE)return e.apply(this,arguments)}},v={create:!0,exclusive:!1};if(m.readyState=m.INIT,a||(a="download"),r)return p=n().createObjectURL(t),r.href=p,r.download=a,void setTimeout((function(){var e,t;e=r,t=new MouseEvent("click"),e.dispatchEvent(t),x(),c(p),m.readyState=m.DONE}));e.chrome&&g&&"application/octet-stream"!==g&&(f=t.slice||t.webkitSlice,t=f.call(t,0,t.size,"application/octet-stream"),h=!0),o&&"download"!==a&&(a+=".download"),("application/octet-stream"===g||o)&&(d=e),i?(s+=t.size,i(e.TEMPORARY,s,y((function(e){e.root.getDirectory("saved",v,y((function(e){var n=function(){e.getFile(a,v,y((function(e){e.createWriter(y((function(n){n.onwriteend=function(t){d.location.href=e.toURL(),m.readyState=m.DONE,l(m,"writeend",t),c(e)},n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&w()},"writestart progress write abort".split(" ").forEach((function(e){n["on"+e]=m["on"+e]})),n.write(t),m.abort=function(){n.abort(),m.readyState=m.DONE},m.readyState=m.WRITING})),w)})),w)};e.getFile(a,{create:!1},y((function(e){e.remove(),n()})),y((function(e){e.code===e.NOT_FOUND_ERR?n():w()})))})),w)})),w)):w()},d=p.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t){return navigator.msSaveOrOpenBlob(u(e),t)}:(d.abort=function(){this.readyState=this.DONE,l(this,"abort")},d.readyState=d.INIT=0,d.WRITING=1,d.DONE=2,d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null,function(e,t){return new p(e,t)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */e.exports?e.exports.saveAs=o:null!==n(211)&&null!=n(212)&&(void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r))},211:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},212:function(e,t){(function(t){e.exports=t}).call(this,{})},36:function(e,t){angular.module("graphdb.workbench.utils.filetypes",[]).value("FileTypes",[{name:"JSON",type:"application/rdf+json",extension:".json"},{name:"JSON-LD",type:"application/ld+json",extension:".jsonld"},{name:"RDF-XML",type:"application/rdf+xml",extension:".rdf"},{name:"N3",type:"text/rdf+n3",extension:".n3"},{name:"N-Triples",type:"text/plain",extension:".nt"},{name:"N-Quads",type:"text/x-nquads",extension:".nq"},{name:"Turtle",type:"text/turtle",extension:".ttl"},{name:"Turtle*",type:"application/x-turtlestar",extension:".ttls"},{name:"TriX",type:"application/trix",extension:".trix"},{name:"TriG",type:"application/x-trig",extension:".trig"},{name:"TriG*",type:"application/x-trigstar",extension:".trigs"},{name:"Binary RDF",type:"application/x-binary-rdf",extension:".brf"}])},83:function(e,t,n){"use strict";n.r(t);n(36);var r=n(207),o=n.n(r),i=n(210);function a(e,t,n,r,a,s,c,l,u,p){let d;e.loading=!1,e.getActiveRepository=function(){return s.getActiveRepository()},e.isTripleResource=function(){return!!e.tripleParam},e.encodeURIComponent=function(e){return encodeURIComponent(e)},e.getRdfStarLocalNames=function(e){let t=e.slice();return e.replace(/[<>]+/g,"").split(" ").forEach(e=>{t=t.replace(e,c.getLocalName(e))}),t},e.role=n.search().role?n.search().role:"subject",e.inference="explicit",e.inferenceNamed="explicit",e.inferences=[{id:"all",title:"Explicit and Implicit"},{id:"explicit",title:"Explicit only"},{id:"implicit",title:"Implicit only"}],e.context="",e.getLocalName=function(e){return c.getLocalName(e)},e.blanks=!0,e.sameAs=!0,e.formats=p,window.editor={},window.editor.getQueryType=function(){return"RESOURCE"},e.$watch((function(){return s.getActiveRepository()}),(function(){e.getActiveRepository()&&(e.usedPrefixes?e.loadResource():u.getNamespaces(e.getActiveRepository()).success((function(t){e.usedPrefixes={},t.results.bindings.forEach((function(t){e.usedPrefixes[t.prefix.value]=t.namespace.value})),d=o()(document.getElementById("yasr"),{getUsedPrefixes:e.usedPrefixes,persistency:!1,hideHeader:!0}),e.loadResource()})).error((function(e){r.error("Cannot get namespaces for repository. View will not work properly; "+getError(e))})))})),e.loadResource=function(){a.prefix&&a.localName&&e.usedPrefixes[a.prefix]?e.uriParam=e.usedPrefixes[a.prefix]+a.localName:n.search().uri?e.uriParam=n.search().uri+(n.hash()?"#"+n.hash():""):n.search().triple?e.tripleParam=n.search().triple+(n.hash()?"#"+n.hash():""):e.uriParam=n.absUrl(),null!=a.context&&(e.context=a.context),e.uriParam=e.uriParam&&e.uriParam.replace(/<|>/g,""),t({url:"rest/explore/details",method:"GET",params:{uri:e.uriParam,triple:e.tripleParam,context:e.context},headers:{Accept:"application/json"}}).success((function(t){e.details=t,e.context=e.details.context,"object"!==e.details.uri&&(e.details.encodeURI=encodeURIComponent(e.details.uri))})).error((function(e){r.error("Cannot get resource details; "+getError(e))})),e.exploreResource()},e.isContextAvailable=function(){return null!==e.context&&"http://rdf4j.org/schema/rdf4j#SHACLShapeGraph"===e.context},e.goToGraphsViz=function(){n.path("graphs-visualizations").search("uri",e.uriParam)};const f=function(t){const n=angular.element(document.getElementById("yasr-inner")),r=angular.element(document.getElementById("results-loader"));t?(e.loading=!0,n.addClass("opacity-hide"),r.removeClass("opacity-hide")):(e.loading=!1,n.removeClass("opacity-hide"),r.addClass("opacity-hide"))};e.exploreResource=function(){f(!0),null!=a.context&&(e.context=a.context);$.ajax({method:"GET",url:"rest/explore/graph",data:{uri:e.uriParam,triple:e.tripleParam,inference:e.inference,role:e.role,bnodes:e.blanks,sameAs:e.sameAs,context:e.context},headers:{Accept:"application/x-graphdb-table-results+json"}}).done((function(e,t,n){f(!1),d.setResponse(n,t)})).fail((function(e){r.error("Could not get resource; "+getError(e)),f(!1)}))},e.downloadExport=function(n){let o,a;e.uriParam?(o="uri=",a=encodeURIComponent(e.uriParam)):(o="triple=",a=encodeURIComponent(e.tripleParam)),t({method:"GET",url:"rest/explore/graph?"+o+a+"&role="+e.role+"&inference="+e.inference+"&bnodes="+e.blanks+"&sameAs="+e.sameAs+(e.context?"&context="+encodeURIComponent(e.context):""),headers:{Accept:n.type}}).success((function(e){let t=e;n.type.indexOf("json")>-1&&(t=JSON.stringify(t));const r=navigator.userAgent.toLowerCase();if(-1!==r.indexOf("safari")&&-1===r.indexOf("chrome"))window.open('data:attachment/csv;filename="statements.'+n.extension+'",'+encodeURIComponent(t),"statements."+n.extension);else{const e=new Blob([t],{type:n.type});Object(i.saveAs)(e,"statements"+n.extension)}})).error((function(e){const t=getError(e);r.error(t,"Error")}))},e.changeRole=function(t){e.role=t,e.exploreResource()},e.changeInference=function(t){e.inference=t,e.exploreResource()},e.copyToClipboardResult=function(e){l.openCopyToClipboardModal(e)}}function s(e,t,n,r,o,i,a,s,c,l,u){function p(){s.checkAutocompleteStatus().success((function(t){t||a.warning("",'<div class="autocomplete-toast"><a href="autocomplete">Autocomplete is OFF<br>Go to Setup -> Autocomplete</a></div>',{allowHtml:!0}),e.autocompleteEnabled=t})).error((function(){a.error("Error attempting to check autocomplete capability!")}))}function d(){u.getNamespaces(r.getActiveRepository()).success((function(t){e.namespaces=t.results.bindings.map((function(e){return{prefix:e.prefix.value,uri:e.namespace.value}})),e.loader=!1})).error((function(t){const n=getError(t);a.error(n,"Error"),e.loader=!1}))}function f(e){const t=e.indexOf("<")>=0&&e.lastIndexOf(">")===e.length-1,n=-1===e.indexOf("<")&&-1===e.lastIndexOf(">"),r=/^<?[http|urn].*>?$/.test(e)&&(t||n);let o=!1;if(r)if(e.indexOf("http")>=0){const t=e.indexOf("//");o=t>4&&e.substring(t+2).length>0}else e.indexOf("urn")>=0&&(o=e.substring(4).length>0);return r&&o}let m,g;function h(t){function r(t){i((function(){e.form&&(e.form.$dirty=t)}))}t||(t=document.getElementById("resources_finder_value").value),t&&f(t)?(r(!1),n.path("resource").search("uri",t)):(r(!0),t&&a.error("Invalid input!"))}e.submit=h,e.getAutocompleteSuggestions=function(t){if(!/<|>/.test(t)&&":"===t.slice(-1)){const n=c.getNamespaceUriForPrefix(e.namespaces,t.slice(0,-1));g=n!==g?n:g,g&&$("#resources_finder_value").val(g)}let n;if(e.autocompleteEnabled){const e=t.replace(g,g+";");n=s.getAutocompleteSuggestions(e)}else n=o.when(e.autocompleteEnabled);return n},e.inputChangedFn=function(){m=document.getElementById("resources_finder_value").value,e.form.$dirty=!(m&&f(m))},e.selectedUriCallback=function(t){e.selectedUri={name:t.title},h(e.selectedUri.name)},e.selectedUri={name:""},e.autocompleteEnabled=!1,angular.isDefined(l.search)&&i((function(){$("#resources_finder_value").val(l.search),$(".search-button").click()}),500),e.getActiveRepository()&&(p(),d()),e.$on("repositoryIsSet",(function(){p(),d()}))}function c(e,t,n,r,o,i,a,s,c,l){e.uriParam=n.search().uri,e.newRow={subject:e.uriParam,object:{type:"uri",datatype:""}},e.newResource=!1,e.datatypeOptions=c.getDatatypeOptions(),e.activeRepository=function(){return o.getActiveRepository()},e.getClassInstancesDetails=function(){l.getNamespaces(e.activeRepository()).success((function(t){e.namespaces=t.results.bindings.map((function(e){return{prefix:e.prefix.value,uri:e.namespace.value}})),e.loader=!1})).error((function(t){const n=getError(t);r.error(n,"Error"),e.loader=!1})),s.getDetails(e.uriParam).success((function(t){e.details=t,e.details.encodeURI=encodeURIComponent(e.details.uri)})).error((function(e){r.error("Cannot get resource details; "+getError(e))})),s.getGraph(e.uriParam).then((function(t){const n=c.buildStatements(t,e.uriParam);e.statements=n,e.newResource=!n.length}))},e.addStatement=function(){e.newRowPredicate.$setSubmitted(),e.newRowObject.$setSubmitted(),e.newRowContext.$setSubmitted(),e.newRowPredicate.$valid&&e.newRowObject.$valid&&e.newRowContext.$valid&&(e.statements.push(angular.copy(e.newRow)),e.newRow={subject:e.uriParam,object:{type:"uri",datatype:""}},e.newRowPredicate.$setPristine(),e.newRowPredicate.$setUntouched(),e.newRowObject.$setPristine(),e.newRowObject.$setUntouched(),e.newRowContext.$setPristine(),e.newRowContext.$setUntouched())},e.removeStatement=function(t){e.statements.splice(t,1)},e.getLocalName=function(e){return s.getLocalName(e)},e.checkValid=function(e){if(!angular.isUndefined(e))return!0;return"Please enter a valid value."},e.validEditRow=function(){return e.rowform.$valid},e.viewTrig=function(){i.open({templateUrl:"js/angular/explore/templates/viewTrig.html",controller:"ViewTrigCtrl",size:"lg",resolve:{data:function(){return c.transformToTrig(e.statements)}}})},e.save=function(){const o=e.newResource?"POST":"PUT";t({method:o,url:"rest/resource?uri="+encodeURIComponent(e.uriParam),headers:{"Content-Type":"application/x-trig"},data:c.transformToTrig(e.statements)}).success((function(){r.success("Resource saved.");const t=a((function(){n.path("resource").search("uri",e.uriParam)}),500);e.$on("$destroy",(function(){a.cancel(t)}))})).error((function(e){r.error(getError(e))}))},e.$watch((function(){return o.getActiveRepository()}),(function(){e.activeRepository()&&e.getClassInstancesDetails()})),e.validateUri=function(t){let n=!0;const r=t||"";if(-1===r.indexOf(":"))n=!1;else{const t=r.substring(0,r.indexOf(":"));if(""===s.getNamespaceUriForPrefix(e.namespaces,t)){!1===/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(r)&&(n=!1);const e=r.match(/\//g);(void 0===e||e.length<3)&&(n=!1)}else{r.substring(r.indexOf(":")+1).trim().length<1&&(n=!1)}}return n}}function l(e,t,n){e.trig=n,e.cancel=function(){t.dismiss("cancel")}}angular.module("graphdb.framework.explore.controllers",["ngCookies","ngRoute","ui.bootstrap","toastr","graphdb.framework.core","graphdb.framework.core.services.repositories","graphdb.framework.explore.services","graphdb.workbench.utils.filetypes"]).controller("FindResourceCtrl",s).controller("ExploreCtrl",a).controller("EditResourceCtrl",c).controller("ViewTrigCtrl",l),a.$inject=["$scope","$http","$location","toastr","$routeParams","$repositories","ClassInstanceDetailsService","ModalService","RDF4JRepositoriesRestService","FileTypes"],s.$inject=["$scope","$http","$location","$repositories","$q","$timeout","toastr","AutocompleteRestService","ClassInstanceDetailsService","$routeParams","RDF4JRepositoriesRestService"],c.$inject=["$scope","$http","$location","toastr","$repositories","$modal","$timeout","ClassInstanceDetailsService","StatementsService","RDF4JRepositoriesRestService"],l.$inject=["$scope","$modalInstance","data"]}}]);
//# sourceMappingURL=9.e7b41c51737de1ed3500.bundle.js.map