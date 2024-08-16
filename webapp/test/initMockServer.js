sap.ui.define([
    "../localService/mockserver"
], (mockServer) => {
    "use strict";

    mockServer.Init();
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});