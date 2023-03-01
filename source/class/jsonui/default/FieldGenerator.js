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
            this.__container.addField(
                new jsonui.default.fields.Enum(
                    schemaReader.getName(),
                    schemaReader.getSchema().description,
                    schemaReader.getSchema().enum
                )
            );
        },

        createIntegerField(schemaReader) {
            this.__container.addField(
                new jsonui.default.fields.Integer(
                    schemaReader.getName(),
                    schemaReader.getSchema().description
                )
            );
        },

        createNumberField(schemaReader) {
            this.__container.addField(
                new jsonui.default.fields.Number(
                    schemaReader.getName(),
                    schemaReader.getSchema().description
                )
            );
        },

        createStringField(schemaReader) {
            this.__container.addField(
                new jsonui.default.fields.String(
                    schemaReader.getName(),
                    schemaReader.getSchema().description
                )
            );
        }
    }
});
