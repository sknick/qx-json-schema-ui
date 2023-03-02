/**
 * An IField suitable for displaying an integer.
 */
qx.Class.define("jsonui.default.fields.Integer", {
    extend: qx.ui.form.TextField,
    implement: [jsonui.IField],

    construct(path, label, description) {
        this.base(arguments, "");
        this.setFilter(/[0-9]/);

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
