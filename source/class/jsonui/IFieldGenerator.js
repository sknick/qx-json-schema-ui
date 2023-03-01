/**
 * This interface identifies an object which can create UI fields for viewing and editing a JSON document conforming to
 * a defined JSON schema.
 */
qx.Interface.define("jsonui.IFieldGenerator", {
    members: {
        createArrayField(schemaReader) {},
        createBooleanField(schemaReader) {},
        createEnumField(schemaReader) {},
        createIntegerField(schemaReader) {},
        createNumberField(schemaReader) {},
        createStringField(schemaReader) {}
    }
});
