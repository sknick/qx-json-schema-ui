/**
 * An IField suitable for displaying an object.
 */
qx.Class.define("jsonui.default.fields.Object", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.ICompositeField],

    construct(path, label, description) {
        this.base(arguments, new qx.ui.layout.VBox(5));

        this.__path = path;
        this.__label = label;
        this.__description = description;
    },

    members: {
        addField(field) {
            // TODO
            this.add(new qx.ui.basic.Label(`TODO: [${field.getLabel()}]`));
        },

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
