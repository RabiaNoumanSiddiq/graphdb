(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{52:function(e,n){angular.module("graphdb.framework.rest.graphconfig.service",[]).factory("GraphConfigRestService",o);const t="rest/explore-graph/",r=`${t}config`;function o(e){return{getGraphConfigs:function(){return e.get(r)},getGraphConfigSamples:function(){return e.get(`${t}samples`)},loadGraphForConfig:function(n,t,o,i){return e.get(`${r}/graph/${encodeURIComponent(n.id)}?includeInferred=${t}&linksLimit=${o}&sameAsState=${i}`)},getConfig:function(n){return e.get(`${r}/${encodeURIComponent(n)}`)},createGraphConfig:function(n){return e.post(r,n)},updateGraphConfig:function(n){return e.put(`${r}/${encodeURIComponent(n.id)}`,n)},deleteGraphConfig:function(n){return e.delete(`${r}/${encodeURIComponent(n.id)}`)},validateQuery:function(n,r,o,i,a){return e({method:"POST",url:`${t}validate`,data:{query:n,queryType:r,params:o,all:i,oneOf:a}})}}}o.$inject=["$http"]}}]);
//# sourceMappingURL=85.86d8a2577257374b9275.bundle.js.map