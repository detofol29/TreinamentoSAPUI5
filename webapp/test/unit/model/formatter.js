sap.ui.define([
	"ui5/walkthrough/model/formatter",
	"sap/ui/model/resource/ResourceModel",
], (formatter, ResourceModel) => {
	"use strict";

	QUnit.module("Formatting functions", {});

	QUnit.test("Should return the translated texts", (assert) => {
        const oResourceModel = new ResourceModel({
            bundleUrl: sap.ui.require.toUrl("ui5/walkthrough/i18n/i18n.properties"),
            supportedLocales: [
                ""
            ],
            fallbackLocale: ""
        });

        const oControllerMock = {
            getOwnerComponent() {
                return {
                    getModel() {
                        return oResourceModel;
                    }
                };
            }
        };

        const fnIsolatedFormatter = formatter.statusText.bind(oControllerMock);

        assert.strictEqual(fnIsolatedFormatter("A"), "Acao", "O texto longo de Acao esta certo");
        assert.strictEqual(fnIsolatedFormatter("F"), "Ficcao", "O texto longo de Ficcao esta certo");
        assert.strictEqual(fnIsolatedFormatter("R"), "Romance", "O texto longo de Romance esta certo");
	});
});