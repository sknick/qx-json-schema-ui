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
        createArrayField(def, path) {
            console.log(path);
            this.getFields().push(path);

            // TODO
            // new jsonui.Schema(def.items, this, path);
        },

        createBooleanField(def, path) {
            console.log(path);
            this.getFields().push(path);
        },

        createEnumField(def, path) {
            console.log(path);
            this.getFields().push(path);
        },

        createIntegerField(def, path) {
            console.log(path);
            this.getFields().push(path);
        },

        createNumberField(def, path) {
            console.log(path);
            this.getFields().push(path);
        },

        createStringField(def, path) {
            console.log(path);
            this.getFields().push(path);
        }
    }
});
