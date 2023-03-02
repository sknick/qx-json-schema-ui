/**
 * A default field container.
 */
qx.Class.define("jsonui.default.FieldContainer", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IFieldContainer],

    /**
     * Constructor.
     * 
     * @param {Integer} spacing The vertical spacing between fields.
     */
    construct(spacing) {
        this.base(arguments, new qx.ui.layout.VBox(spacing));
    },

    members: {
        /**
         * @param {jsonui.IField} field The field to be added to this container.
         */
        addField(field) {
            if (this.getChildren().length > 0) {
                this.add(new qx.ui.core.Spacer(null, 10));
            }

            this.add(new qx.ui.basic.Label(field.getLabel()));
            this.add(field.getWidget());

            // TODO: Description if available
        }
    }
});
