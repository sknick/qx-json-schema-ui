/**
 * Allows an item in an Array field to be edited.
 */
qx.Class.define("jsonui.default.EditArrayItemDialog", {
    extend: qx.ui.window.Window,

    /**
     * Constructor.
     * 
     * @param {jsonui.default.EditArrayItemConfig} dialogConfig The configuration to apply to this dialog.
     * @param {jsonui.SchemaReader} itemSchemaReader            The reader that can be used to generate fields in this
     *                                                          dialog.
     */
    construct(dialogConfig, itemSchemaReader) {
        this.base(arguments, "Add Item");
        this.setModal(dialogConfig.getModal());
        this.setResizable(dialogConfig.getResizable());
        this.setAllowMaximize(dialogConfig.getAllowMaximize());
        this.setShowMaximize(dialogConfig.getShowMaximize());
        this.setAllowMinimize(dialogConfig.getAllowMinimize());
        this.setShowMinimize(dialogConfig.getAllowMinimize());
        this.setWidth(dialogConfig.getWidth());
        this.setLayout(new qx.ui.layout.VBox(dialogConfig.getVerticalSpacing()));

        itemSchemaReader.read(new jsonui.default.FieldGenerator(this));

        this.center();
    },

    members: {
        /**
         * @param {jsonui.IField} field The field to be added to this container.
         */
        addField(field) {
            jsonui.default.FieldContainer.addFieldToContainer(this, field);
        }
    }
});
