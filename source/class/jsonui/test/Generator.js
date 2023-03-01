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
            console.log(schema.getPath());
            this.getFields().push(schema.getPath());

            // TODO
            // new jsonui.Schema(schema.items, this, path);
        },

        createBooleanField(schema) {
            console.log(schema.getPath());
            this.getFields().push(schema.getPath());
        },

        createEnumField(schema) {
            console.log(schema.getPath());
            this.getFields().push(schema.getPath());
        },

        createIntegerField(schema) {
            console.log(schema.getPath());
            this.getFields().push(schema.getPath());
        },

        createNumberField(schema) {
            console.log(schema.getPath());
            this.getFields().push(schema.getPath());
        },

        createStringField(schema) {
            console.log(schema.getPath());
            this.getFields().push(schema.getPath());
        }
    }
});
