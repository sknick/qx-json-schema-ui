qx.Class.define("jsonui.test.DummyField", {
    extend: qx.ui.core.Widget,
    implement: [jsonui.IField],

    construct() {
        this.base(arguments);
    },

    members: {
        getDescription() {
            return "";
        },

        getLabel() {
            return "";
        },

        getWidget() {
            return this;
        }
    }
});
