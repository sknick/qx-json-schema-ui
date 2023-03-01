qx.Class.define("jsonui.default.fields.Enum", {
    extend: qx.ui.form.SelectBox,
    implement: [jsonui.IField],

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
