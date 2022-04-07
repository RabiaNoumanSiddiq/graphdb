(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{73:function(e,r,o){"use strict";o.r(r);var t=o(41);function i(e,r,o,i){return{restrict:"E",scope:!1,templateUrl:"js/angular/repositories/templates/ontop-repo.html",link:function(s){s.selectedDriver={driverType:"generic",driverName:"Generic JDBC Driver",jdbc:{hostName:"",port:"",databaseName:"",userName:"",password:"",driverClass:"",url:""},urlTemplate:"",downloadDriverUrl:""},s.ontopRepoFileNames={},s.supportedDriversData=[],s.ontopRepoFileLabels={propertiesFile:"JDBC properties",obdaFile:"OBDA or R2RML",owlFile:"ontology file",constraintFile:"constraint file"},s.ontopRepoFiles=Object.keys(s.ontopRepoFileLabels),s.ontopRepoFiles.forEach((function(e){s.repositoryInfo.params[e]&&(s.ontopRepoFileNames[e]=Object(t.getFileName)(s.repositoryInfo.params[e].value))})),s.supportedDriverLabels={hostName:"Hostname",port:"Port",databaseName:"Database name",userName:"Username",password:"Password",driverClass:"Driver class",url:"URL"},s.propertiesFileParams=Object.keys(s.supportedDriverLabels),s.classAvailable=!1,s.genericDriverType="generic",s.propertiesFile="propertiesFile";const a=[s.propertiesFile,"obdaFile"],n=["hostName","databaseName","userName"];function l(){return s.selectedDriver.driverType!==s.genericDriverType?n.filter((function(e){return!s.selectedDriver.jdbc[e]})).length>0&&(o.error("Missing required field"),1)?Promise.reject("Missing required field"):(s.uploadFileLoader=!0,r.updatePropertiesFile(s.repositoryInfo.params[s.propertiesFile].value,s.selectedDriver.jdbc).success((function(e){s.ontopRepoFileNames[s.propertiesFile]=Object(t.getFileName)(e.fileLocation),s.repositoryInfo.params[s.propertiesFile].value=e.fileLocation,s.uploadFileLoader=!1})).error((function(e){p("Error",e),s.uploadFileLoader=!1}))):Promise.resolve()}function p(e,r){const t=getError(r);o.error(t,e)}s.loadDriverByClass=function(e){const r=s.supportedDriversData.find(r=>r.driverClass===e);return r&&s.copyDriverProperties(r),r},s.selectDriverByType=function(e){s.copyDriverProperties(s.supportedDriversData.find(r=>r.driverType===e)),s.concatURL("hostName",s)},s.copyDriverProperties=function(e){s.selectedDriver.driverType=e.driverType,s.selectedDriver.jdbc.driverClass=e.driverClass,s.selectedDriver.jdbc.url=e.urlTemplate,s.selectedDriver.urlTemplate=e.urlTemplate,s.selectedDriver.downloadDriverUrl=e.downloadDriverUrl,s.selectedDriver.portRequired=e.portRequired,s.classAvailable=e.classAvailable},s.isReadOnly=function(e){return"driverClass"===e||"url"===e},s.editFile=function(o){e.open({templateUrl:"js/angular/templates/modal/editRepoFile.html",controller:"EditRepositoryFileCtrl",resolve:{file:function(){return s.repositoryInfo.params[o]?s.repositoryInfo.params[o].value:""}}}).result.then((function(e){r.updateRepositoryFileContent(e.fileLocation,e.content).success((function(e){s.ontopRepoFileNames[o]=Object(t.getFileName)(e.fileLocation),s.repositoryInfo.params[o].value=e.fileLocation})).error((function(e){p("Error",e)}))}))},s.uploadOntopRepoFile=function(e,r){e&&e.length&&(s.uploadFile=e[0],s.uploadFileLoader=!0,i.upload({url:"rest/repositories/uploadFile",data:{uploadFile:s.uploadFile}}).success((function(e){e.success?(s.ontopRepoFileNames[r]=s.uploadFile.name,s.repositoryInfo.params[r].value=e.fileLocation):o.error(e.errorMessage),s.uploadFileLoader=!1})).error((function(e){p("Error",e),s.uploadFile="",s.uploadFileLoader=!1})))},s.concatURL=function(e){if("hostName"===e||"port"===e||"databaseName"===e){let e=s.selectedDriver.urlTemplate;s.selectedDriver.jdbc.hostName&&(e=s.selectedDriver.jdbc.port?e.replace("{hostport}",`${s.selectedDriver.jdbc.hostName}:${s.selectedDriver.jdbc.port}`):e.replace("{hostport}",s.selectedDriver.jdbc.hostName)),s.selectedDriver.jdbc.databaseName&&(e=e.replace("{database}",s.selectedDriver.jdbc.databaseName)),s.selectedDriver.jdbc.url=e}},s.getInputType=function(e){switch(e){case"password":return"password";case"port":return"number";default:return"text"}},s.checkForRequiredOntopFiles=function(){return l().then((function(){return a.filter((function(e){return!s.repositoryInfo.params[e].value})).length>0?(o.error("Missing required ontop repo file"),Promise.reject("Missing required ontop repo file")):Promise.resolve()}))},s.validateOntopPropertiesConnection=function(){l().then((function(){r.validateOntopPropertiesConnection(s.repositoryInfo.params.propertiesFile).success((function(){o.success("Connection is successful")})).error((function(e){p("Failed to connect",e)}))}))},s.isOntopRepoFileUploaded=function(){return s.repositoryInfo.params.propertiesFile&&s.repositoryInfo.params.propertiesFile.value.length>0},s.isRequiredOntopRepoFile=function(e){return a.indexOf(e)>-1},s.isRequiredField=function(e){return n.indexOf(e)>-1||"port"===e&&s.selectedDriver.portRequired},s.getFieldTooltip=function(e){return"port"===e&&s.selectedDriver.portRequired&&(e="portIfRequired"),s.repoTooltips.ontop[e]},s.editOntopRepo=function(){s.checkForRequiredOntopFiles().then((function(){s.editRepository()})).catch((function(e){}))},s.createOntopRepo=function(){s.repositoryInfo.id?s.checkForRequiredOntopFiles().then((function(){s.createRepo()})).catch((function(e){})):o.error("Repository ID cannot be empty")},s.goBackToPrevious=function(){s.goBackToPreviousLocation()},r.getSupportedDriversData().success((function(e){s.supportedDriversData=e})).error((function(e){p("Error",e)})).then((function(){s.editRepoPage&&r.loadPropertiesFile(s.repositoryInfo.params[s.propertiesFile].value).success((function(e){s.loadDriverByClass(e.driverClass)&&(s.selectedDriver.jdbc.hostName=e.hostName,s.selectedDriver.jdbc.port=parseInt(e.port),s.selectedDriver.jdbc.databaseName=e.databaseName,s.selectedDriver.jdbc.userName=e.userName,s.selectedDriver.jdbc.password=e.password,s.selectedDriver.jdbc.url=e.url)})).error((function(e){p("Error",e),s.uploadFileLoader=!1}))}))}}}angular.module("graphdb.framework.repositories.ontop-repo.directive",[]).directive("ontopRepo",i),i.$inject=["$modal","RepositoriesRestService","toastr","Upload"]}}]);
//# sourceMappingURL=79.70210df3d9701e7f64a1.bundle.js.map