sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.FilmeList", {
        onInit() {
            const oViewModel = new JSONModel({
                currency: "NOTA"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});