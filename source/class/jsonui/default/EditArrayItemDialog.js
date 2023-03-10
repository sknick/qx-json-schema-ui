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
        this.setLayout(new qx.ui.layout.Dock(10, 10));

        this.setAllowMaximize(dialogConfig.getAllowMaximize());
        this.setAllowMinimize(dialogConfig.getAllowMinimize());
        this.setHeight(dialogConfig.getHeight());
        this.setModal(dialogConfig.getModal());
        this.setResizable(dialogConfig.getResizable());
        this.setShowMaximize(dialogConfig.getShowMaximize());
        this.setShowMinimize(dialogConfig.getAllowMinimize());
        this.setWidth(dialogConfig.getWidth());

        const okButton = new qx.ui.form.Button("OK");
        okButton.setWidth(100);

        const cancelButton = new qx.ui.form.Button("Cancel");

        const buttonContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
        buttonContainer.add(okButton);
        buttonContainer.add(cancelButton);

        const container = new qx.ui.container.Composite(new qx.ui.layout.Dock());
        container.add(buttonContainer, { edge: "east" });

        this.__fieldContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(dialogConfig.getVerticalSpacing()));
        this.__fieldContainer.setPadding(10);

        const scroll = new qx.ui.container.Scroll();
        scroll.add(this.__fieldContainer);

        this.add(scroll,    { edge: "center" });
        this.add(container, { edge: "south" });

        itemSchemaReader.read(new jsonui.default.FieldGenerator(this));

        this.center();

        this.addListener("keypress", this.__onKeyPressed, this, true);
        okButton.addListener("execute", this.__onOK, this);
        cancelButton.addListener("execute", this.__onCancel, this);
    },

    members: {
        /**
         * @param {jsonui.IField} field The field to be added to this container.
         */
        addField(field) {
            jsonui.default.FieldContainer.addFieldToContainer(this.__fieldContainer, field);
        },

        __onCancel(e) {
            this.hide();
        },

        __onOK(e) {
            this.fireDataEvent("confirmed", null); // TODO
        },
        
        __onKeyPressed(e) {
            if (e.getKeyIdentifier() === "Escape") {
                this.close();
            }
        }
    },

    events: {
        "confirmed": "qx.event.type.Data"
    }
});
