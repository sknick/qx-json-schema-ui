/**
 * An IField suitable for displaying an array.
 */
qx.Class.define("jsonui.default.fields.Array", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IField],

    properties: {
        /**
         * The configuration to apply to any editing dialogs shown by this field.
         */
        editConfig: {
            init: new jsonui.default.EditArrayItemConfig(),
            check: "jsonui.default.EditArrayItemConfig",
            nullable: false
        }
    },

    /**
     * Constructor.
     * 
     * @param {String} path                          The ancestry chain of this field, with each ancestor indicated,
     *                                               separated by a ".", from oldest to youngest. The name associated
     *                                               with this field is the last item in the path.
     * @param {String} label                         The label to show for this field.
     * @param {String} [description]                 An optional description to show for this field.
     * @param {jsonui.SchemaReader} itemSchemaReader The reader which can be used to read the items in this array field.
     */
    construct(path, label, description, itemSchemaReader) {
        this.base(arguments, new qx.ui.layout.Dock(10, 10));

        this.__path = path;
        this.__label = label;
        this.__description = description;
        this.__itemSchemaReader = itemSchemaReader;

        this.__itemsField = new qx.ui.form.List();

        const addButton = new qx.ui.form.Button("Add");
        addButton.setWidth(100);

        const editButton = new qx.ui.form.Button("Edit");
        editButton.setWidth(100);

        const removeButton = new qx.ui.form.Button("Remove");
        removeButton.setWidth(100);

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
            const dlg = new jsonui.default.EditArrayItemDialog(this.getEditConfig(), this.__itemSchemaReader);
            dlg.show();
        },

        __onEdit(e) {
            // TODO
        },

        __onRemove(e) {
            // TODO
        }
    }
});
