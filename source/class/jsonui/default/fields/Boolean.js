qx.Class.define("jsonui.default.fields.Boolean", {
    extend: qx.ui.form.SelectBox,
    implement: [jsonui.IField],

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
