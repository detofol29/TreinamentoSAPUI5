sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/press"
], (Opa5, Press) => {
    "use strict";

    const sViewName = "ui5.walkthrough.view.BomDiaPanel";

    Opa5.createPageObjects({
        onTheAppPage: {
            actions: {
                iPressTheBoaNoiteComDialogButton(){
                    return this.waitFor({
                        id: "boaNoiteDialogButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Não encontrado o botão referente no BoaNoitePanel view"  
                    });
               }
            },

            assertions: {
                IShouldSeeTheBoaNoiteDialog() {
                    return this.waitFor({
                        controlType: "sap.m.Dialog",
                        success() {
                            Opa5.assert.ok(true, "O dialog está aberto");
                        },
                        errorMessage: "Dialog control não encontrado"
                    });
                }
            }
        }
    });
});