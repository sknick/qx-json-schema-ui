/**
 * An IField suitable for displaying a string.
 */
qx.Class.define("jsonui.default.fields.String", {
    extend: qx.ui.form.TextField,
    implement: [jsonui.IField],

    /**
     * Constructor.
     * 
     * @param {String} path          The ancestry chain of this field, with each ancestor indicated, separated by a ".",
     *                               from oldest to youngest. The name associated with this field is the last item in
     *                               the path.
     * @param {String} label         The label to show for this field.
     * @param {String} [description] An optional description to show for this field.
     */
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
