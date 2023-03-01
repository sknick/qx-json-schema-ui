qx.Class.define("jsonui.default.FieldGenerator", {
    extend: jsonui.FieldGenerator,

    construct(container) {
        this.base(arguments, container);
    },
    
    members: {
        _createArrayField(schemaReader) {
            return new jsonui.default.fields.Array(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description,
                
                new jsonui.SchemaReader(
                    schemaReader.getSchema().items,
                    this,
                    null,
                    schemaReader
                )
            );
        },

        _createBooleanField(schemaReader) {
            return new jsonui.default.fields.Boolean(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description
            );
        },

        _createEnumField(schemaReader) {
            return new jsonui.default.fields.Enum(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description,
                schemaReader.getSchema().enum
            );
        },

        _createIntegerField(schemaReader) {
            return new jsonui.default.fields.Integer(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description
            );
        },

        _createNumberField(schemaReader) {
            return new jsonui.default.fields.Number(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description
            );
        },

        _createObjectField(schemaReader) {
            return new jsonui.default.fields.Object(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description
            );
        },

        _createStringField(schemaReader) {
            return new jsonui.default.fields.String(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description
            );
        }
    }
});
