(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{167:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="mb-2 row" ng-hide="getActiveRepository() && !isRestricted">\n    <div role="alert">\n        <div class="mb-1 mt-1 ml-1 mr-1">\n            <div class="card repository-errors">\n                <div class="alert alert-warning lead">\n                    <div ng-if="!getActiveRepository()" >Some functionalities are not available because you are not connected to any repository.</div>\n                    <div id="restrictedDiv" ng-if="getActiveRepository() && isRestricted">Some functionalities are not available because\n                        <span ng-if="isSecurityEnabled() && !canWriteActiveRepo()">you have no write permission to repository </span>\n                        <strong ng-if="isActiveRepoOntopType()">{{getActiveRepository()}}</strong>\n                        <span ng-if="canWriteActiveRepo() && isActiveRepoOntopType()"> is read-only Virtual Repository</span>\n                        <span ng-if="canWriteActiveRepo() && isActiveRepoFedXType()"> <b>{{title}}</b> view is not supported by FedX Repository</span>.</div>\n                    <small>\n                        <span ng-if="getAccessibleRepositories().length">\n                            Click one of the repositories below to connect to it<span ng-if="canManageRepositories()"> or create a new repository</span>.\n                        </span>\n\n                        <span ng-hide="getAccessibleRepositories().length">\n                            There are no accessible <span ng-if="isRestricted">writable </span>repositories<span ng-if="canManageRepositories()">. You can create a new repository</span>.\n                        </span>\n                    </small>\n                </div>\n\n                <ul class="list-group limit-height clearfix two-columns repos" ng-mouseleave="hidePopoverForRepo($event)">\n                    <li ng-repeat="repository in getAccessibleRepositories() | orderBy: [\'type === \\\'system\\\'\', \'id\']"\n                        ng-if="repository.id !== getActiveRepository()"\n                        class="list-group-item list-group-item-action repository"\n                        ng-mouseenter="showPopoverForRepo($event, repository)" ngx-mouseleave="setPopoverForRepo($event, repository, false)">\n                        <div class="lead ellipsis-block" ng-click="setRepository(repository.id)">\n                            <span class="popover-anchor"\n                                  popover-popup-delay="500"\n                                  popover-trigger="show" popover-placement="{{$index % 2 === 0 ? \'bottom-right\' : \'left-bottom\'}}"\n                                  popover-template="popoverTemplate" popover-title="Repository {{repository.id}}">\n                            <em class="icon-lg" ng-class="\'icon-repo-\' + repository.type"></em>\n                            <strong>{{repository.id}}</strong></span><small ng-show="repository.title"><span class="small"> &middot; {{repository.title}}</span></small>\n                        </div>\n                    </li>\n                </ul>\n\n                <div class="pull-right" ng-if="canManageRepositories()">\n                    <button class="btn btn-link px-0 create-repository-btn" ng-click="goToAddRepo()">\n                        <span class="icon-plus"></span> Create new repository\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n';return __p}}}]);
//# sourceMappingURL=114.edebb3161ce52d4ca2e1.bundle.js.map