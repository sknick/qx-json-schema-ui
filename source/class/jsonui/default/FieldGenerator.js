/**
 * A default IField generator.
 */
qx.Class.define("jsonui.default.FieldGenerator", {
    extend: jsonui.FieldGenerator,

    properties: {
        /**
         * The configuration to be applied to new dialogs for editing items in array fields.
         */
        arrayItemEditConfig: {
            init: new jsonui.default.EditArrayItemConfig(),
            check: "jsonui.default.EditArrayItemConfig",
            nullable: false
        }
    },

    /**
     * Constructor.
     * 
     * @param {jsonui.IFieldContainer} container The container which handles displaying the generated fields.
     */
    construct(container) {
        this.base(arguments, container);
    },
    
    members: {
        _createArrayField(schemaReader) {
            const ret = new jsonui.default.fields.Array(
                schemaReader.getPath(),
                schemaReader.getName(),
                schemaReader.getSchema().description,
                
                new jsonui.SchemaReader(schemaReader.getSchema().items, this, schemaReader.getName())
            );
            ret.setEditConfig(this.getArrayItemEditConfig());
            return ret;
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
