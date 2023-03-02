qx.Theme.define("jsonui.theme.Appearance", {
    extend: qx.theme.indigo.AppearanceDark,

    appearances: {
        "jsonui-field-container": {
            style(states) {
                return {
                    decorator: "jsonui-field-container",
                    padding: 20
                };
            }
        },

        "jsonui-object-field": {
            style(states) {
                return {
                    decorator: "jsonui-object-field",
                    padding: 20
                };
            }
        }
    }
});
