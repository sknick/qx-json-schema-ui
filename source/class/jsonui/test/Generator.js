qx.Class.define("jsonui.test.Generator", {
    extend: jsonui.FieldGenerator,

    properties: {
        fields: {
            init: [],
            check: "Array",
            nullable: false
        }
    },

    members: {
        _createArrayField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            const subSchema = new jsonui.SchemaReader(schemaReader.getSchema().items, this, null, schemaReader);
            subSchema.read();

            return null;
        },

        _createBooleanField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return null;
        },

        _createEnumField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return null;
        },

        _createIntegerField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return null;
        },

        _createNumberField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return null;
        },

        _createObjectField(schemaReader) {
            // TODO

            return null;
        },

        _createStringField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return null;
        }
    }
});
