sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.FilmeList", {
        formatter: formatter,
        onInit() {
            const oViewModel = new JSONModel({
                currency: "NOTA"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterFilmes(oEvent) {
            const aFilter = [];
            const sQuery = oEvent.getParameter("query") 
                || oEvent.getParameter("newValue");
                
            if(sQuery) {
                aFilter.push(new Filter("Nome", FilterOperator.Contains, sQuery));
            }

            const oList = this.byId("filmeList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("detail");
        }
    });
});