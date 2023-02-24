qx.Class.define("jsonui.test.Generator", {
    extend: qx.core.Object,
    implement: [jsonui.IGenerator],

    members: {
        createArrayField(def, path) {
            console.log(path);
        },

        createBooleanField(def, path) {
            console.log(path);
        },

        createEnumField(def, path) {
            console.log(path);
        },

        createIntegerField(def, path) {
            console.log(path);
        },

        createNumberField(def, path) {
            console.log(path);
        },

        createStringField(def, path) {
            console.log(path);
        }
    }
});
