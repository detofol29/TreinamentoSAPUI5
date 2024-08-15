sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter"
], (Controller, JSONModel, formatter) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.FilmeList", {
        formatter: formatter,
        onInit() {
            const oViewModel = new JSONModel({
                currency: "NOTA"
            });
            this.getView().setModel(oViewModel, "view");
        }
    });
});