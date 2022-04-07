(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{74:function(e,o){function r(e,o,r,t,s){return{restrict:"E",scope:!1,templateUrl:"js/angular/repositories/templates/fedx-repo.html",link:function(t){const i="ResolvableRepository";function n(){for(const e of t.fedxMembers)t.knownRepos=t.knownRepos.filter((function(o){return e.repositoryServer?o.id!==e.repositoryName||o.location!==e.repositoryServer:o.id!==e.repositoryName||!o.local}))}function a(){return o.getRepositories().success((function(e){t.allLocalRepos=e.slice()})).error((function(e){const o=getError(e);r.error(o,"Error")})).then((function(){s.getLocations().success((function(e){t.locations=e.slice()})).error((function(e){const o=getError(e);r.error(o,"Error")})).then((function(){t.locations.forEach(e=>(function(e){return o.getRepositoriesFromKnownLocation(e).success((function(e){t.knownRepos=t.allLocalRepos.filter(e=>-1!==t.knownRepos.indexOf(e));for(const o of e)t.allAttachedRepos=t.allAttachedRepos.filter(e=>e.id!==o.id||e.location!==o.location);t.allAttachedRepos=t.allAttachedRepos.concat(e.slice()),t.knownRepos=t.knownRepos.concat(t.allAttachedRepos)})).error((function(e){const o=getError(e);r.error(o,"Error")}))})(e.uri).then((function(){t.editRepoPage&&(t.fedxMembers=t.repositoryInfo.params.member.value.slice()),n()})))}))}))}t.fedxMembers=[],t.knownRepos=[],t.allLocalRepos=[],t.allAttachedRepos=[],t.locations=[],t.setWritableRepo=function(e){let o=t.fedxMembers.find(e=>"true"===e.writable);o&&((o.store!==i||e.store===i&&o.repositoryName===e.repositoryName)&&("RemoteRepository"!==o.store||"RemoteRepository"===e.store&&o.repositoryName===e.repositoryName&&o.repositoryServer===e.repositoryServer)||(o.writable="false")),e.writable=JSON.stringify("false"===e.writable)},t.getActiveClass=function(e){return"true"===e.writable?" active":""},t.checkIfRepoExist=function(e){return e.store===i?t.allLocalRepos.find(o=>o.id===e.repositoryName):"RemoteRepository"!==e.store||(o=e,!t.locations.find(e=>e.uri===o.repositoryServer))||t.allAttachedRepos.find(o=>o.id===e.repositoryName&&o.location===e.repositoryServer);var o},t.getRepositoryServer=function(e){return e.local?"Local":e.location};const p=setInterval((function(){a()}),5e3);function l(e){t.fedxMembers.push(e),t.repositoryInfo.params.member.value=t.fedxMembers}function d(e){return"/"===e.slice(-1)?e.slice(0,-1):e}function m(){return t.editRepoPage&&!t.editRepoPage||!t.model.editMode}t.$on("$destroy",(function(){clearInterval(p)})),t.addMember=function(e){if("Local"===t.getRepositoryServer(e))t.addLocalMember(e);else{let o={store:"RemoteRepository",repositoryName:e.id,repositoryServer:e.location,username:"",password:"",supportsASKQueries:"true",writable:"false"};t.knownRepos=t.knownRepos.filter((function(e){return o.repositoryServer?e.id!==o.repositoryName||e.location!==o.repositoryServer:e.id!==o.repositoryName||!e.local})),l(o)}},t.addLocalMember=function(e){let o={store:i,repositoryName:e.id,repoType:e.type,respectRights:"true",writable:"false"};t.knownRepos=t.knownRepos.filter((function(e){return o.repositoryServer?e.id!==o.repositoryName||e.location!==o.repositoryServer:e.id!==o.repositoryName||!e.local})),l(o)},t.removeMember=function(e){e.store&&e.store===i?(t.fedxMembers=t.fedxMembers.filter(o=>o.repositoryName!==e.repositoryName||o.store!==e.store),t.allLocalRepos=[],a()):e.store&&"SPARQLEndpoint"===e.store?t.fedxMembers=t.fedxMembers.filter(o=>o.endpoint!==e.endpoint):e.store&&"NativeStore"===e.store?t.fedxMembers=t.fedxMembers.filter(o=>o.repositoryLocation!==e.repositoryLocation):e.store&&"RemoteRepository"===e.store&&(t.fedxMembers=t.fedxMembers.filter(o=>o.repositoryName!==e.repositoryName||o.repositoryServer!==e.repositoryServer||o.store!==e.store),t.allAttachedRepos=[],a()),t.repositoryInfo.params.member.value=t.fedxMembers},t.addRemoteMember=function(){t.mode="remote",t.model={editMode:!1,store:"RemoteRepository",repositoryName:"",repositoryServer:"",sparqlEndpoint:"",username:"",password:"",supportsASKQueries:"true",writable:"false"},t.$modalInstance=e.open({templateUrl:"js/angular/templates/modal/add-fedx-remote-repo.html",scope:t})},t.getMemberIcon=function(e){return e.repoType?"icon-repo-"+e.repoType:"NativeStore"===e.store?"icon-warning":"icon-link"},t.editFedXRepository=function(o){o.store===i?(t.mode="local",t.model={editMode:!0,store:o.store,respectRights:o.respectRights,repositoryName:o.repositoryName,repoType:o.repoType,writable:o.writable}):(t.mode="remote",t.model={editMode:!0,store:o.store,repositoryName:o.repositoryName,repositoryServer:o.repositoryServer,sparqlEndpoint:"SPARQLEndpoint"===o.store?o.endpoint:o.repositoryLocation,username:o.username,password:o.password,supportsASKQueries:o.supportsASKQueries,writable:o.writable}),t.$modalInstance=e.open({templateUrl:"js/angular/templates/modal/add-fedx-remote-repo.html",scope:t})},t.resolveName=function(e){switch(e.store){case i:return e.repositoryName;case"RemoteRepository":return e.repositoryName+"@"+e.repositoryServer;case"SPARQLEndpoint":return e.endpoint;case"NativeStore":return e.repositoryLocation;default:return""}},t.cancel=function(){t.$modalInstance.dismiss("cancel")},t.ok=function(){let e;if(t.model.repositoryName&&t.model.store===i)e={store:i,repositoryName:t.model.repositoryName,repoType:t.model.repoType,respectRights:t.model.respectRights,writable:t.model.writable},t.fedxMembers=t.fedxMembers.filter(o=>o.repositoryName!==e.repositoryName||o.store!==e.store);else if(t.model.repositoryName&&"RemoteRepository"===t.model.store){if(e={store:"RemoteRepository",repositoryName:t.model.repositoryName,repositoryServer:d(t.model.repositoryServer),username:t.model.username,password:t.model.password,writable:t.model.writable},m()&&t.fedxMembers.find(o=>o.repositoryName===e.repositoryName&&o.repositoryServer===e.repositoryServer)){let o=t.resolveName(e);return r.error(`Repository ${o} already added as a FedX member`),void t.$modalInstance.close()}t.fedxMembers=t.fedxMembers.filter(o=>o.repositoryName!==e.repositoryName||o.repositoryServer!==e.repositoryServer)}else{if(e={store:"SPARQLEndpoint",endpoint:d(t.model.sparqlEndpoint),username:t.model.username,password:t.model.password,supportsASKQueries:t.model.supportsASKQueries,writable:t.model.writable},m()&&t.fedxMembers.find(o=>o.endpoint===e.endpoint)){let o=t.resolveName(e);return r.error(`SPARQL endpoint ${o} already added as a FedX member`),void t.$modalInstance.close()}t.fedxMembers=t.fedxMembers.filter(o=>o.endpoint!==e.endpoint)}l(e),n(),t.$modalInstance.close()},a()}}}angular.module("graphdb.framework.repositories.fedx-repo.directive",[]).directive("fedxRepo",r),r.$inject=["$modal","RepositoriesRestService","toastr","$timeout","LocationsRestService"]}}]);
//# sourceMappingURL=78.608f8074bef29a89d68b.bundle.js.map