qx.Class.define("jsonui.test.Generator", {
    extend: qx.core.Object,
    implement: [jsonui.IFieldGenerator],

    properties: {
        fields: {
            init: [],
            check: "Array",
            nullable: false
        }
    },

    members: {
        createArrayField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            const subSchema = new jsonui.SchemaReader(schemaReader.getSchema().items, this, null, schemaReader);
            subSchema.read();
        },

        createBooleanField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());
        },

        createEnumField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());
        },

        createIntegerField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());
        },

        createNumberField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());
        },

        createStringField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());
        }
    }
});
