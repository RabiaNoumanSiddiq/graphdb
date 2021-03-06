PluginRegistry.add('route', {
    'url': '/autocomplete',
    'module': 'graphdb.framework.autocomplete',
    'path': 'autocomplete/app',
    'chunk': 'autocomplete',
    'controller': 'AutocompleteCtrl',
    'templateUrl': 'pages/autocomplete.html',
    'title': 'Autocomplete index',
    'helpInfo': 'The Autocomplete index is used for automatic completion of URIs in the SPARQL editor and the View resource page. Use this view to enable or disable the index and check its status.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {label: 'Setup', href: '#', order: 5, role: 'IS_AUTHENTICATED_FULLY', icon: "icon-settings"},
        {label: 'Autocomplete', href: 'autocomplete', order: 40, parent: 'Setup', role: "IS_AUTHENTICATED_FULLY"}
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/resource',
        'module': 'graphdb.framework.explore',
        'chunk': 'explore',
        'path': 'explore/app',
        'controller': 'ExploreCtrl',
        'templateUrl': 'pages/explore.html',
        'title': 'Resource'
    }, {
        'url': '/resource/edit',
        'module': 'graphdb.framework.explore',
        'chunk': 'explore',
        'path': 'explore/app',
        'controller': 'EditResourceCtrl',
        'templateUrl': 'pages/edit.html',
        'title': 'Resource'
    }, {
        'url': '/resource/:any*',
        'module': 'graphdb.framework.explore',
        'chunk': 'explore',
        'path': 'explore/app',
        'controller': 'ExploreCtrl',
        'templateUrl': 'pages/explore.html',
        'title': 'Resource'
    }
]);

PluginRegistry.add('main.menu', {
    'items': [{
        label: 'Explore',
        href: '#',
        order: 1,
        role: 'IS_AUTHENTICATED_FULLY',
        icon: "icon-data"
    }]
});

PluginRegistry.add('route', {
    'url': '/graphs',
    'module': 'graphdb.framework.impex.export',
    'path': 'export/app',
    'chunk': 'export',
    'controller': 'ExportCtrl',
    'templateUrl': 'pages/export.html',
    'title': 'Graphs overview',
    'helpInfo': 'Graphs overview provides a list of the default graph and all named graphs in GraphDB. '
    + 'It can be used to inspect the statements in each graph, export the graph or clear the graph\'s data. '
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Explore',
            href: '#',
            order: 1,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-data'
        },
        {
            label: 'Graphs overview',
            href: 'graphs',
            order: 0,
            role: 'IS_AUTHENTICATED_FULLY',
            parent: 'Explore'
        }
    ]
});

PluginRegistry.add('route', {
    'url': '/connectors',
    'module': 'graphdb.framework.externalsync',
    'path': 'externalsync/app',
    'chunk': 'externalsync',
    'controller': 'ConnectorsCtrl',
    'templateUrl': 'pages/connectorsInfo.html',
    'title': 'Connector management',
    'helpInfo': 'The Connector management view is used to create and manage GraphDB connector instances.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 5,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-settings'
        },
        {
            label: 'Connectors',
            href: 'connectors',
            order: 10,
            parent: 'Setup',
            role: 'IS_AUTHENTICATED_FULLY'
        }
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/hierarchy',
        'module': 'graphdb.framework.graphexplore',
        'path': 'graphexplore/app',
        'chunk': 'hierarchy',
        'controller': 'RdfClassHierarchyCtlr',
        'templateUrl': 'pages/rdfClassHierarchyInfo.html',
        'title': 'Class hierarchy',
        'reloadOnSearch': false,
        'helpInfo': 'This diagram shows the hierarchy of RDF classes by number of instances. '
        + 'The biggest circles are the parent classes and the nested ones are their children. '
        + 'Hover over a given class to see its subclasses or zoom in a '
        + 'nested circle (RDF class) for further exploration. '
    }, {
        'url': '/domain-range-graph',
        'module': 'graphdb.framework.graphexplore',
        'path': 'graphexplore/app',
        'chunk': 'domain-range-graph',
        'controller': 'DomainRangeGraphCtlr',
        'templateUrl': 'pages/domainRangeInfo.html',
        'title': 'Domain-Range graph',
        'helpInfo': 'This diagram shows the classes and properties that lead to a given '
        + 'RDF class, which plays the role of <b>range</b> for all properties on the left of it, and '
        + '<b>domain</b> for all properties on the right of it.'
        + 'You can navigate to another class '
        + 'by double clicking on it.'
    }, {
        'url': '/relationships',
        'module': 'graphdb.framework.graphexplore',
        'path': 'graphexplore/app',
        'chunk': 'relationships',
        'controller': 'DependenciesChordCtrl',
        'templateUrl': 'pages/dependencies.html',
        'title': 'Class relationships',
        'helpInfo': 'This diagram shows the relationships between RDF classes, '
        + 'where a relationship is represented by links between the individual instances of two classes. '
        + 'Each link is an RDF statement where the subject is an instance of one class, the object is an instance of another class, '
        + 'and the link is the predicate. '
        + 'Depending on the number of links between the instances of two classes, the bundle can be '
        + 'thicker or thinner and it gets the colour of the class with more incoming links. '
        + 'The links can be in both directions. '
    }, {
        'url': '/graphs-visualizations',
        'module': 'graphdb.framework.graphexplore',
        'path': 'graphexplore/app',
        'chunk': 'graphs-visualizations',
        'controller': 'GraphsVisualizationsCtrl',
        'templateUrl': 'pages/graphs-visualizations.html',
        'title': 'Visual graph',
        'reloadOnSearch': false,
        'helpInfo': 'Provides a way to create a visual representation of parts of the data graph. You start from a single resource and the resources connected '
        + ' to it or from a graph query result. Click on resources to show their connections too.'
    }, {
        'url': '/graphs-visualizations/config/save/:configName?',
        'module': 'graphdb.framework.graphexplore',
        'path': 'graphexplore/app',
        'chunk': 'graph-config',
        'controller': 'GraphConfigCtrl',
        'templateUrl': 'pages/graph-config/saveGraphConfig.html',
        'title': 'Create visual graph config',
        'helpInfo': 'A visual graph config defines the SPARQL queries used to retrieve nodes and edges in the visual graph, as well as'
        + ' the starting point of visualisation.'
    }
]);

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Explore',
            href: '#',
            order: 1,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-data'
        }, {
            label: 'Class relationships',
            href: 'relationships',
            order: 2,
            parent: 'Explore'
        }, {
            label: 'Class hierarchy',
            href: 'hierarchy',
            order: 1,
            parent: 'Explore'
        }, {
            label: 'Visual graph',
            href: 'graphs-visualizations',
            order: 5,
            parent: 'Explore',
            children: [{
                href: 'graphs-visualizations/config/save',
                children: []
            }]
        }
    ]
});

PluginRegistry.add('route', {
    'url': '/import',
    'module': 'graphdb.framework.impex.import',
    'path': 'import/app',
    'chunk': 'import',
    'controller': 'CommonCtrl',
    'templateUrl': 'pages/import.html',
    'title': 'Import',
    'reloadOnSearch': false,
    'helpInfo': 'The Import view allows you to import RDF data into GraphDB. '
    + 'Import data from local files, from files on the server where the workbench is located, '
    + 'from a remote URL (with a format extension or by specifying the data format), '
    + 'or by pasting the RDF data in the Text area tab. '
    + 'Each import method supports different serialisation formats.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Import',
            href: '#',
            order: 0,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-import'
        }, {
            label: 'RDF',
            href: 'import',
            order: 1,
            parent: 'Import',
            role: 'IS_AUTHENTICATED_FULLY'
        }
    ]
});

PluginRegistry.add('route', [
    {
    'url': '/jdbc',
    'module': 'graphdb.framework.jdbc',
    'path': 'jdbc/app',
    'chunk': 'jdbc',
    'controller': 'JdbcListCtrl',
    'templateUrl': 'pages/jdbc.html',
    'title': 'JDBC configuration',
    'helpInfo': 'JDBC driver configuration to allow SQL access to repository data'
    },
    {
        'url': '/jdbc/configuration/create',
        'module': 'graphdb.framework.jdbc',
        'path': 'jdbc/app',
        'chunk': 'jdbc',
        'controller': 'JdbcCreateCtrl',
        'templateUrl': 'pages/jdbc-create.html',
        'title': 'SQL table configuration',
        'helpInfo': 'RDF to SQL table mapping configuration tool'
    }
    ]);

PluginRegistry.add('main.menu', {
    'items': [
        {label: 'Setup', href: '#', order: 5, role: 'IS_AUTHENTICATED_FULLY', icon: "icon-settings"},
        {label: 'JDBC', href: 'jdbc', order: 50, parent: 'Setup', role: "IS_AUTHENTICATED_FULLY"}
    ]
});

PluginRegistry.add('route', {
    'url': '/namespaces',
    'module': 'graphdb.framework.namespaces',
    'chunk': 'namespaces',
    'path': 'namespaces/app',
    'controller': 'NamespacesCtrl',
    'templateUrl': 'pages/namespaces.html',
    'title': 'Namespaces',
    'helpInfo': 'The Namespaces view provides an overview of all namespaces used in your data. '
    + 'Here you can add, remove and modify them. '
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 5,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: "icon-settings"
        }, {
            label: 'Namespaces',
            href: 'namespaces',
            order: 30,
            parent: 'Setup'
        }
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/ontorefine',
        'module': 'graphdb.framework.ontorefine',
        'path': 'ontorefine/app',
        'chunk': 'ontorefine',
        'controller': 'OntoRefineCtrl',
        'templateUrl': 'pages/ontorefine.html',
        'title': 'OntoRefine',
        'helpInfo': 'GraphDB OntoRefine is a data transformation tool, based on OpenRefine and integrated in GraphDB Workbench, for ' +
        'converting tabular data into RDF and importing it into a GraphDB repository, using simple SPARQL queries and a virtual endpoint.  ' +
        'The supported formats are TSV, CSV, *SV, Excel (.xls and. xlsx), JSON, XML, RDF as XML, and Google sheet. ' +
        'Using OntoRefine you can easily filter your data, edit the inconsistencies, convert it into RDF, and import it into your repository.'
    }, {
        'url': '/ontorefine/:page',
        'module': 'graphdb.framework.ontorefine',
        'path': 'ontorefine/app',
        'chunk': 'ontorefine',
        'controller': 'OntoRefineCtrl',
        'templateUrl': 'pages/ontorefine.html',
        'title': 'OntoRefine',
        'helpInfo': 'GraphDB OntoRefine is a data transformation tool, based on OpenRefine and integrated in GraphDB Workbench, for ' +
        'converting tabular data into RDF and importing it into a GraphDB repository, using simple SPARQL queries and a virtual endpoint.  ' +
        'The supported formats are TSV, CSV, *SV, Excel (.xls and. xlsx), JSON, XML, RDF as XML, and Google sheet. ' +
        'Using OntoRefine you can easily filter your data, edit the inconsistencies, convert it into RDF, and import it into your repository.'
    }, {
        'url': '/ontorefine/project?project=:project',
        'module': 'graphdb.framework.ontorefine',
        'path': 'ontorefine/app',
        'chunk': 'ontorefine',
        'controller': 'OntoRefineCtrl',
        'templateUrl': 'pages/ontorefine.html',
        'title': 'OntoRefine',
        'helpInfo': 'GraphDB OntoRefine is a data transformation tool, based on OpenRefine and integrated in GraphDB Workbench, for ' +
        'converting tabular data into RDF and importing it into a GraphDB repository, using simple SPARQL queries and a virtual endpoint.  ' +
        'The supported formats are TSV, CSV, *SV, Excel (.xls and. xlsx), JSON, XML, RDF as XML, and Google sheet. ' +
        'Using OntoRefine you can easily filter your data, edit the inconsistencies, convert it into RDF, and import it into your repository.'
    }
]);

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Import',
            href: '#',
            order: 0,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-import'
        },
        {
            label: 'Tabular (OntoRefine)',
            href: 'ontorefine',
            order: 2,
            parent: 'Import',
            role: 'ROLE_USER'
        }
    ]
});

PluginRegistry.add('route', {
    'url': '/',
    'module': 'graphdb.workbench',
    'chunk': 'home',
    'path': 'controllers',
    'controller': 'homeCtrl',
    'templateUrl': 'pages/home.html'
});

PluginRegistry.add('route', {
    'url': '/monitor/queries',
    'module': 'graphdb.framework.jmx.queries',
    'path': 'queries/app',
    'chunk': 'monitor-queries',
    'controller': 'QueriesCtrl',
    'templateUrl': 'pages/monitor/queries.html',
    'title': 'Query and Update monitoring',
    'helpInfo': 'The Queries and Updates monitoring view shows all running queries or updates in GraphDB. '
    + 'A query or update can be terminated by pressing the Abort button.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Monitor',
            href: '#',
            order: 3,
            // Changed to role user as now users can monitor their own queries
            role: 'ROLE_USER',
            icon: 'icon-monitoring'
        }, {
            label: 'Queries and Updates',
            href: 'monitor/queries',
            order: 1,
            parent: 'Monitor'
        }
    ]
});

PluginRegistry.add('route', {
    'url': '/rdfrank',
    'module': 'graphdb.framework.rdfrank',
    'path': 'rdfrank/app',
    'chunk': 'rdfrank',
    'controller': 'RDFRankCtrl',
    'templateUrl': 'pages/rdfrank.html',
    'title': 'RDF Rank',
    'helpInfo': 'RDF Rank is an algorithm that identifies the more important or more popular ' +
    'entities in the repository by examining their interconnectedness. The popularity of entities' +
    ' can then be used to order the query results.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 5,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-settings'
        },
        {
            label: 'RDF Rank',
            href: 'rdfrank',
            order: 45,
            parent: 'Setup',
            role: 'IS_AUTHENTICATED_FULLY'
        }
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/repository',
        'module': 'graphdb.framework.repositories',
        'path': 'repositories/app',
        'chunk': 'repositories',
        'controller': 'LocationsAndRepositoriesCtrl',
        'templateUrl': 'pages/repositories.html',
        'title': 'Repositories',
        'helpInfo': 'The Repositories view is used to manage repositories and connect to remote locations. '
        + 'A location represents a local or remote instance of GraphDB. '
        + 'Only a single location can be active at a given time.'
    }, {
        'url': '/repository/create',
        'module': 'graphdb.framework.repositories',
        'path': 'repositories/app',
        'chunk': 'repositories',
        'controller': 'ChooseRepositoryCtrl',
        'templateUrl': 'pages/choose-repository-type.html',
        'title': 'Select Repository Type'
    }, {
        'url': '/repository/create/:repositoryType',
        'module': 'graphdb.framework.repositories',
        'path': 'repositories/app',
        'chunk': 'repositories',
        'controller': 'AddRepositoryCtrl',
        'templateUrl': 'pages/repository.html',
        'title': 'Create Repository'
    }, {
        'url': '/repository/edit/:repositoryId',
        'module': 'graphdb.framework.repositories',
        'path': 'repositories/app',
        'chunk': 'repositories',
        'controller': 'EditRepositoryCtrl',
        'templateUrl': 'pages/repository.html',
        'title': 'Edit Repository'
    }
]);

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 5,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-settings'
        },
        {
            label: 'Repositories',
            href: 'repository',
            order: 1,
            role: 'ROLE_REPO_MANAGER',
            parent: 'Setup',
            children: [{
                href: 'repository/create',
                children: []
            }]
        }
    ]
});

PluginRegistry.add('route', {
    'url': '/monitor/resources',
    'module': 'graphdb.framework.jmx.resources',
    'path': 'resources/app',
    'chunk': 'resources',
    'controller': 'ResourcesCtrl',
    'templateUrl': 'pages/monitor/resources.html',
    'title': 'Resource monitoring',
    'helpInfo': 'The Resource monitoring view shows the usage of various system resources, '
    + 'such as memory and CPU, for the currently active location.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Monitor',
            href: '#',
            order: 3,
            role: 'ROLE_MONITORING',
            icon: 'icon-monitoring'
        }, {
            label: 'Resources',
            href: 'monitor/resources',
            // Added role requirement here to assert that users cannot see Resources menu item
            role: 'ROLE_MONITORING',
            order: 2,
            parent: 'Monitor'
        }
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/users',
        'module': 'graphdb.framework.security',
        'path': 'security/app',
        'chunk': 'security',
        'controller': 'UsersCtrl',
        'templateUrl': 'js/angular/security/templates/users.html',
        'title': 'Users and Access',
        'helpInfo': 'The Users and Access view is used to manage the users and their access to the GraphDB repositories. '
        + 'You can also enable or disable the security of the entire Workbench. '
        + 'When disabled, everyone has full access to the repositories and the admin functionality. '
    }, {
        'url': '/user/create',
        'module': 'graphdb.framework.security',
        'path': 'security/app',
        'chunk': 'security',
        'controller': 'AddUserCtrl',
        'templateUrl': 'js/angular/security/templates/user.html',
        'title': 'Create new user'
    }, {
        'url': '/login',
        'module': 'graphdb.framework.security',
        'path': 'security/app',
        'chunk': 'security',
        'controller': 'LoginCtrl',
        'templateUrl': 'pages/login.html',
        'title': 'Login'
    }, {
        'url': '/user/:userId',
        'module': 'graphdb.framework.security',
        'path': 'security/app',
        'chunk': 'security',
        'controller': 'EditUserCtrl',
        'templateUrl': 'js/angular/security/templates/user.html',
        'title': 'Edit user'
    }, {
        'url': '/settings',
        'module': 'graphdb.framework.security',
        'path': 'security/app',
        'chunk': 'security',
        'controller': 'ChangeUserPasswordSettingsCtrl',
        'templateUrl': 'js/angular/security/templates/user.html',
        'title': 'Settings'
    }, {
        'url': '/accessdenied',
        'templateUrl': 'pages/accessdenied.html',
        'title': 'Access Denied'
    }, {
        'url': '/rolesmappings',
        'module': 'graphdb.framework.security',
        'path': 'security/app',
        'chunk': 'security',
        'controller': 'RolesMappingController',
        'templateUrl': 'js/angular/security/templates/roles.html',
        'title': 'Roles per Request Mapping'
    }
]);

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 5,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-settings'
        },
        {
            label: 'Users and Access', href: 'users', order: 2, parent: 'Setup', role: 'ROLE_ADMIN',
            children: [{
                href: 'user/create',
                children: []
            }]
        },
        {
            label: 'My Settings',
            href: 'settings',
            order: 6,
            parent: 'Setup',
            role: 'ROLE_USER'
        }
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/license/register',
        'module': 'graphdb.framework.settings',
        'path': 'settings/app',
        'chunk': 'settings',
        'controller': 'RegisterLicenseCtrl',
        'templateUrl': 'pages/registerLicenseInfo.html',
        'title': 'Register GraphDB License',
        'helpInfo': 'The Register GraphDB License view is where you register your GraphDB. '
        + 'Upload the generated binary or simply copy the license key in the designated text area.'
    }, {
        'url': '/license',
        'module': 'graphdb.framework.settings',
        'path': 'settings/app',
        'chunk': 'settings',
        'controller': 'LicenseCtrl',
        'templateUrl': 'pages/licenseInfo.html',
        'title': 'Current license for this location',
        'helpInfo': 'The GraphDB License Information view allows you to check the details of your current license. '
    }
]);

PluginRegistry.add('route', [
    {
        'url': '/similarity',
        'module': 'graphdb.framework.similarity',
        'path': 'similarity/app',
        'chunk': 'similarity',
        'controller': 'SimilarityCtrl',
        'templateUrl': 'pages/similarity-indexes.html',
        'title': 'Similarity indexes',
        'helpInfo': 'Similarity indexes help you look up semantically similar entities and text.'
    }, {
        'url': '/similarity/index/create',
        'module': 'graphdb.framework.similarity',
        'path': 'similarity/app',
        'chunk': 'similarity',
        'controller': 'CreateSimilarityIdxCtrl',
        'templateUrl': 'pages/create-index.html',
        'title': 'Create similarity index',
        'helpInfo': 'Index name and select query are required. Add Semantic Vectors parameters if you want.'
    }
]);

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 5,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-settings'
        },
        {
            label: 'Similarity',
            href: 'similarity',
            order: 40,
            parent: 'Explore',
            role: 'IS_AUTHENTICATED_FULLY',
            children: [{
                href: 'similarity/index/create',
                children: []
            }]
        }
    ]
});

PluginRegistry.add('route', [
    {
    'url': '/sparql-templates',
    'module': 'graphdb.framework.sparql-template',
    'path': 'sparql-template/app',
    'chunk': 'sparql-template',
    'controller': 'SparqlTemplatesCtrl',
    'templateUrl': 'pages/sparql-templates.html',
    'title': 'SPARQL Templates',
    'helpInfo': 'Allows storing configurations for future updates of repository data'
    },
    {
        'url': '/sparql-template/create',
        'module': 'graphdb.framework.sparql-template',
        'path': 'sparql-template/app',
        'chunk': 'sparql-template',
        'controller': 'SparqlTemplateCreateCtrl',
        'templateUrl': 'pages/sparql-template-create.html',
        'title': 'Create SPARQL Templates',
        'helpInfo': 'SPARQL Template configuration tool'
    }
    ]);

PluginRegistry.add('main.menu', {
    'items': [
        {label: 'Setup', href: '#', order: 5, role: 'IS_AUTHENTICATED_FULLY', icon: "icon-settings"},
        {label: 'SPARQL Templates', href: 'sparql-templates', order: 51, parent: 'Setup', role: "IS_AUTHENTICATED_FULLY"}
    ]
});

PluginRegistry.add('route', {
    'url': '/sparql',
    'module': 'graphdb.framework.sparql',
    'path': 'sparql/app',
    'chunk': 'sparql',
    'controller': 'QueryEditorCtrl',
    'templateUrl': 'pages/sparql.html',
    'title': 'SPARQL Query & Update',
    'helpInfo': 'The SPARQL Query & Update view is a unified editor for queries and updates. '
    + 'Use any type of SPARQL query and click Run to execute it.'
});

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'SPARQL',
            href: 'sparql',
            order: 2,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: "icon-sparql"
        }
    ]
});

PluginRegistry.add('route', [
    {
        'url': '/sysinfo',
        'module': 'graphdb.framework.stats',
        'path': 'stats/app',
        'chunk': 'stats',
        'controller': 'AdminInfoCtrl',
        'templateUrl': 'pages/info.html',
        'title': 'System information',
        'helpInfo': 'The System information view shows the configuration values of the JVM '
        + 'running the GraphDB Workbench as well generate a detailed server report file you can use to hunt down issues'
    }, {
        'url': '/webapi',
        'templateUrl': 'pages/webapi.html',
        'title': 'REST API documentation',
        'helpInfo': 'The REST API view documents the available public RESTful endpoints and '
        + 'provides an interactive interface to execute the requests.'
    }
]);

const DOCUMENTATION_URL = 'https://graphdb.ontotext.com/documentation/';

PluginRegistry.add('main.menu', {
    'items': [
        {
            label: 'Setup',
            href: '#',
            order: 7,
            role: 'IS_AUTHENTICATED_FULLY',
            icon: 'icon-settings'
        }, {
            label: 'Help',
            href: '#',
            order: 8,
            icon: 'icon-help'
        }, {
            label: 'System information',
            href: 'sysinfo',
            order: 50,
            parent: 'Help',
            role: 'ROLE_ADMIN'
        }, {
            label: 'REST API',
            href: 'webapi',
            order: 1,
            parent: 'Help'
        }, {
            label: 'Documentation',
            order: 2,
            parent: 'Help',
            icon: 'icon-external',
            hrefFun: function (productInfo) {
                if (productInfo.productType) {
                    return DOCUMENTATION_URL + productInfo.productShortVersion + '/' + productInfo.productType + '/';
                }
                return DOCUMENTATION_URL;
            }
        }, {
            label: 'Developer Hub',
            order: 3,
            parent: 'Help',
            icon: 'icon-external',
            hrefFun: function (productInfo) {
                if (productInfo.productType) {
                    return DOCUMENTATION_URL + productInfo.productShortVersion + '/' + productInfo.productType + '/devhub/';
                }
                return DOCUMENTATION_URL + 'free/devhub/';
            }
        }, {
            label: 'Support',
            order: 4,
            parent: 'Help',
            icon: 'icon-external',
            hrefFun: function (productInfo) {
                if (productInfo.productType) {
                    return DOCUMENTATION_URL + productInfo.productShortVersion + '/' + productInfo.productType + '/support.html';
                }
                return DOCUMENTATION_URL + 'free/support.html';
            }
        }
    ]
});
