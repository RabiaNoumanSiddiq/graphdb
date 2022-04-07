
function RdfMappingDialog(project){
	this._init(project);
};


RdfMappingDialog.prototype._init = function (project) {
    window.addEventListener( "message", isMappingPristine);
    var self = this;
    var dialog = $(DOM.loadHTML("mapping-editor", "iframe.html"));
    var isPristine = true;
    dialog.find("#rdfMappingFrame").attr('src', "extension/mapping-editor/?dataProviderID=ontorefine:" + project.id);
    dialog.find("#cancelButton").click(function () {
        if (isPristine) {
            exit();
        } else {
            confirmExit();
        }
    });

    self._level = DialogSystem.showDialog(dialog);
    dialog.parent(".dialog-container")
        .addClass("dialog-container-mapping")
        .draggable("destroy");


    function confirmExit() {
        if (confirm("There are unsaved changes! Are you sure, you want to exit?")) {
            exit();
        }
    }

    function exit() {
        window.removeEventListener("message", isMappingPristine);
        ui.historyPanel.update();
        DialogSystem.dismissUntil(self._level - 1);
    }

    function isMappingPristine(e) {
        isPristine = e.data === 'pristine';
        window.parent.postMessage(e.data, '*');
    }
};


//extend the column header menu
$(function(){

	ExtensionBar.MenuItems.push(
        {
            "id": "rdf-mapping",
            "label": "RDF Mapping",
            "submenu" : [
                {
                    "id": "rdf/edit-rdf-mapping",
                    label: "Edit RDF Mapping",
                    click: function() { new RdfMappingDialog(theProject); }
                },
            ]
        }
	);

});

