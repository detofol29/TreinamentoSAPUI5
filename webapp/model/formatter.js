sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return oResourceBundle.getText("filmeGeneroA");
				case "F":
					return oResourceBundle.getText("filmeGeneroF");
				case "R":
					return oResourceBundle.getText("filmeGeneroR");
				default:
					return sStatus;
			}
		}
	};
});