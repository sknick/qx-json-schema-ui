/**
 * An IField suitable for displaying an array.
 */
qx.Class.define("jsonui.default.fields.Array", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IField],

    construct(path, label, description, itemSchemaReader) {
        this.base(arguments, new qx.ui.layout.Dock(10, 10));

        this.__path = path;
        this.__label = label;
        this.__description = description;
        this.__itemSchemaReader = itemSchemaReader;

        this.__itemsField = new qx.ui.form.List();

        const addButton = new qx.ui.form.Button("Add");
        addButton.setWidth(150);

        const editButton = new qx.ui.form.Button("Edit");
        editButton.setWidth(150);

        const removeButton = new qx.ui.form.Button("Remove");
        removeButton.setWidth(150);

        const buttonsContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
        buttonsContainer.add(addButton);
        buttonsContainer.add(editButton);
        buttonsContainer.add(removeButton);

        this.add(this.__itemsField, { edge: "center" });
        this.add(buttonsContainer,  { edge: "east" });

        addButton.addListener("execute", this.__onAdd, this);
        editButton.addListener("execute", this.__onEdit, this);
        removeButton.addListener("execute", this.__onRemove, this);
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
        },

        __onAdd(e) {
            // TODO
        },

        __onEdit(e) {
            // TODO
        },

        __onRemove(e) {
            // TODO
        }
    }
});
