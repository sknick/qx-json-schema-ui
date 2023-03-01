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
            this.__container.addField(
                new jsonui.default.fields.Array(
                    schemaReader.getName(),
                    schemaReader.getSchema().description,
                    
                    new jsonui.SchemaReader(
                        schemaReader.getSchema().items,
                        this,
                        null,
                        schemaReader
                    )
                )
            );
        },

        createBooleanField(schemaReader) {
            this.__container.addField(
                new jsonui.default.fields.Boolean(
                    schemaReader.getName(),
                    schemaReader.getSchema().description
                )
            );
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
