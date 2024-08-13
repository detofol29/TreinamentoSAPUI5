sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast" //usada para exibir mensagens toast na interface do usuário
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        onShowHello(){

            //Obtém o ResourceBundle associado ao modelo "i18n", permitindo o acesso às mensagens traduzidas
            const oPacoteInter = this.getView().getModel("i18n").getResourceBundle();

            //Obtém o valor da propriedade /recipient/name
            const sRecipiente = this.getView().getModel().getProperty("/recipient/name");

            const sMsg = oPacoteInter.getText("BomDiaMsg"," " + [sRecipiente]);
            MessageToast.show(sMsg);
        }
    });
});