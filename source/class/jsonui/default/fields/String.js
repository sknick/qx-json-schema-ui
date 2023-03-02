/**
 * An IField suitable for displaying a string.
 */
qx.Class.define("jsonui.default.fields.String", {
    extend: qx.ui.form.TextField,
    implement: [jsonui.IField],

    construct(path, label, description) {
        this.base(arguments, "");

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
