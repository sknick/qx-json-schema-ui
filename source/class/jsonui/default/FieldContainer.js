qx.Class.define("jsonui.default.FieldContainer", {
    extend: qx.ui.container.Composite,
    implement: [jsonui.IFieldContainer],

    construct(spacingX, spacingY) {
        this.base(arguments, new qx.ui.layout.Grid(spacingX, spacingY));
    },

    members: {
        addField(field) {
            const row = this.getLayout().getRowCount();
            this.add(new qx.ui.basic.Label(field.getLabel()), { row: row, column: 0 });
            this.add(field.getWidget(),                       { row: row, column: 1 });
        }
    }
});
