/**
 * An IField suitable for displaying an object.
 */
qx.Class.define("jsonui.default.fields.Object", {
    extend: jsonui.default.FieldContainer,
    implement: [jsonui.ICompositeField],

    construct(path, label, description) {
        this.base(arguments, 5);
        this.setAppearance("jsonui-object-field");

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
