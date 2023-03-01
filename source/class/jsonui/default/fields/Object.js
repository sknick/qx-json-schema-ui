qx.Class.define("jsonui.default.fields.Object", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IField],

    construct(path, label, description) {
        this.base(arguments, new qx.ui.layout.VBox(5));

        this.__path = path;
        this.__label = label;
        this.__description = description;
    },

    members: {
        getDescription() {
            return this.__description;
        },

        getLabel() {
            return this.__label;
        },

        getWidget() {
            return this;
        }
    }
});
