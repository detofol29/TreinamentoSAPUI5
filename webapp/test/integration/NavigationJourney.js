sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/App"
], (opaTest) => {
    "use strict";

    QUnit.module("Navigation");

    opaTest("Deve abrir o boa noite com Dialog", (Given, When, Then) => {
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "ui5.walkthrough"
            }
        });
        
        When.onTheAppPage.iPressTheBoaNoiteComDialogButton();

        Then.onTheAppPage.IShouldSeeTheBoaNoiteDialog();

        Then.iTeardownMyApp();
    });
});