/**
 * An IField suitable for displaying an enum.
 */
qx.Class.define("jsonui.default.fields.Enum", {
    extend: qx.ui.form.SelectBox,
    implement: [jsonui.IField],

    /**
     * Constructor.
     * 
     * @param {String} path              The ancestry chain of this field, with each ancestor indicated, separated by a
     *                                   ".", from oldest to youngest. The name associated with this field is the last
     *                                   item in the path.
     * @param {String} label             The label to show for this field.
     * @param {String?} description      An optional description to show for this field.
     * @param {Array<String>} enumValues The enumeration values to show in this field.
     */
    construct(path, label, description, enumValues) {
        this.base(arguments);

        this.__path = path;
        this.__label = label;
        this.__description = description;

        let selection = null;
        enumValues.forEach((val) => {
            const item = new qx.ui.form.ListItem(val, null, val);
            if (!selection) {
                selection = item;
            }

            this.add(item);
        });

        this.setSelection([selection]);
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
