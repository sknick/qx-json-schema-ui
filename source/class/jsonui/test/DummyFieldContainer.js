qx.Class.define("jsonui.test.DummyFieldContainer", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IFieldContainer],

    construct() {
        this.base(arguments);
    },

    members: {
        addField(field) {
            // No op
        }
    }
});
