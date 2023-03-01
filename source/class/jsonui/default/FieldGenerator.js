qx.Class.define("jsonui.default.FieldGenerator", {
    extend: qx.core.Object,
    implement: [jsonui.IFieldGenerator],

    /**
     * @param {IFieldContainer} container The container which handles displaying the generated fields.
     */
    construct(container) {
        this.__container = container;
    },
    
    members: {
        createArrayField(schemaReader) {
            // TODO

            const subSchema = new jsonui.SchemaReader(schemaReader.getSchema().items, this, null, schemaReader);
            subSchema.read();
        },

        createBooleanField(schemaReader) {
            this.__container.addField(new jsonui.default.fields.Boolean(schemaReader.getName()));
        },

        createEnumField(schemaReader) {

        },

        createIntegerField(schemaReader) {
            
        },

        createNumberField(schemaReader) {
            
        },

        createStringField(schemaReader) {
            
        }
    }
});
