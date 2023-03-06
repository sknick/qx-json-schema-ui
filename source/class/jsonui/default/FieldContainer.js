/**
 * A default field container.
 */
qx.Class.define("jsonui.default.FieldContainer", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IFieldContainer],

    statics: {
        /**
         * 
         * @param {qx.ui.core.Widget} container The container to which to add the specified field.
         * @param {jsonui.IField} field         The field to be added to the container.
         */
        addFieldToContainer(container, field) {
            if (container.getChildren().length > 0) {
                container.add(new qx.ui.core.Spacer(null, 10));
            }

            container.add(new qx.ui.basic.Label(field.getLabel()));
            container.add(field.getWidget());

            // TODO: Description if available
        }
    },

    /**
     * Constructor.
     * 
     * @param {Integer} spacing The vertical spacing between fields.
     */
    construct(spacing) {
        this.base(arguments, new qx.ui.layout.VBox(spacing));
        this.setAppearance("jsonui-field-container");
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
