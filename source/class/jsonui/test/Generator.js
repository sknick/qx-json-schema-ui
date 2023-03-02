qx.Class.define("jsonui.test.Generator", {
    extend: jsonui.FieldGenerator,

    properties: {
        fields: {
            init: [],
            check: "Array",
            nullable: false
        }
    },
    
    construct(container) {
        this.base(arguments, container);
    },

    members: {
        _createArrayField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            // const subSchema = new jsonui.SchemaReader(schemaReader.getSchema().items, this, schemaReader.getPath(), schemaReader);
            // subSchema.setTrace(schemaReader.getTrace());
            // subSchema.read();

            return new jsonui.test.DummyField();
        },

        _createBooleanField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return new jsonui.test.DummyField();
        },

        _createEnumField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return new jsonui.test.DummyField();
        },

        _createIntegerField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return new jsonui.test.DummyField();
        },

        _createNumberField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return new jsonui.test.DummyField();
        },

        _createObjectField(schemaReader) {
            // TODO

            return new jsonui.test.DummyField();
        },

        _createStringField(schemaReader) {
            console.log(schemaReader.getPath());
            this.getFields().push(schemaReader.getPath());

            return new jsonui.test.DummyField();
        }
    }
});
