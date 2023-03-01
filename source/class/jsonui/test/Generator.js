qx.Class.define("jsonui.test.Generator", {
    extend: qx.core.Object,
    implement: [jsonui.IGenerator],

    properties: {
        fields: {
            init: [],
            check: "Array",
            nullable: false
        }
    },

    members: {
        createArrayField(schema) {
            this.getFields().push(schema.getPath());

            // TODO
            // new jsonui.Schema(schema.items, this, path);
        },

        createBooleanField(schema) {
            this.getFields().push(schema.getPath());
        },

        createEnumField(schema) {
            this.getFields().push(schema.getPath());
        },

        createIntegerField(schema) {
            this.getFields().push(schema.getPath());
        },

        createNumberField(schema) {
            this.getFields().push(schema.getPath());
        },

        createStringField(schema) {
            this.getFields().push(schema.getPath());
        }
    }
});
