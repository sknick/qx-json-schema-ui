qx.Class.define("jsonui.test.DummyField", {
    extend: qx.ui.core.Widget,

    // Just make it implement ICompositeField for simplicity's sake
    implement: [jsonui.ICompositeField],

    construct() {
        this.base(arguments);
    },

    members: {
        addField(field) {
            // No op
        },

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
