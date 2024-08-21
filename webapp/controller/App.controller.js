sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" //usada para exibir mensagens toast na interface do usuário
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit() {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });
});