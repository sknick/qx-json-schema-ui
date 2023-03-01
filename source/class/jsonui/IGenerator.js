/**
 * This interface identifies an object which can create UI fields for viewing and editing a JSON document conforming to
 * a defined JSON schema.
 */
qx.Interface.define("jsonui.IGenerator", {
    members: {
        createArrayField(schema) {},
        createBooleanField(schema) {},
        createEnumField(schema) {},
        createIntegerField(schema) {},
        createNumberField(schema) {},
        createStringField(schema) {}
    }
});
