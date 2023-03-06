/**
 * An IField suitable for displaying a boolean.
 */
qx.Class.define("jsonui.default.fields.Boolean", {
    extend: qx.ui.form.SelectBox,
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
        this.base(arguments);

        this.__path = path;
        this.__label = label;
        this.__description = description ? description : "";

        const yesItem = new qx.ui.form.ListItem("Yes");
        const noItem = new qx.ui.form.ListItem("No");

        this.add(yesItem);
        this.add(noItem);

        this.setSelection([noItem]);
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
