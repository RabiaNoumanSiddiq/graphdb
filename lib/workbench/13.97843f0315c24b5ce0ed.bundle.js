(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{27:function(e,r,t){"use strict";t.r(r);t(2),t(7),t(81),t(82),t(8),t(215),t(213);angular.module("graphdb.framework.clustermanagement",["ngAnimate","toastr","graphdb.framework.clustermanagement.controllers","graphdb.framework.clustermanagement.directives"]).config(["$menuItemsProvider","$routeProvider",function(e,r){r.when("/cluster",{templateUrl:"pages/clusterInfo.html",controller:"ClusterManagementCtrl",title:"Cluster management",helpInfo:"The Cluster management view is a visual administration tool for the GraphDB cluster. Here you can create or modify a cluster by dragging and dropping the nodes or you can use it to monitor  the state of a running cluster in near real time. The view shows repositories from the active location and all remote locations."}),e.addItem({label:"Setup",href:"#",order:5,role:"IS_AUTHENTICATED_FULLY",icon:"icon-settings"}),e.addItem({label:"Cluster",href:"cluster",order:20,role:"ROLE_ADMIN",parent:"Setup"})}])}}]);
//# sourceMappingURL=13.97843f0315c24b5ce0ed.bundle.js.map