var getGraphDBAuthToken = function() {
    return localStorage.getItem('com.ontotext.graphdb.auth');
};

var setupGraphDBWorkbenchHeaders = function () {
    var headers = {};
    var graphDBAuth = getGraphDBAuthToken();
    if (graphDBAuth != '') {
        headers['Authorization'] = graphDBAuth;
        $.ajaxSetup({ headers: headers });
    }
};

setupGraphDBWorkbenchHeaders();
