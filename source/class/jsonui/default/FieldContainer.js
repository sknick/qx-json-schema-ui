qx.Class.define("jsonui.default.FieldContainer", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IFieldContainer],

    construct(spacing) {
        this.base(arguments, new qx.ui.layout.VBox(spacing));
    },

    members: {
        addField(field) {
            if (this.getChildren().length > 0) {
                this.add(new qx.ui.core.Spacer(null, 10));
            }

            this.add(new qx.ui.basic.Label(field.getLabel()));
            this.add(field.getWidget());
        }
    }
});
