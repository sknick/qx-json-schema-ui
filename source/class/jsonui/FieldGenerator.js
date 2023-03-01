/**
 * An object which can create UI fields for viewing and editing a JSON document conforming to a defined JSON schema.
 */
qx.Class.define("jsonui.FieldGenerator", {
    extend: qx.core.Object,
    type: "abstract",

    /**
     * @param {jsonui.IFieldContainer} container The container which handles displaying the generated fields.
     */
    construct(container) {
        this.__container = container;
        this.__pathsToFields = {};
    },

    members: {
        handleArray(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createArrayField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        handleBoolean(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createBooleanField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        handleEnum(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createEnumField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        handleInteger(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createIntegerField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        handleNumber(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createNumberField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        handleObject(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createObjectField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        handleString(schemaReader) {
            const path = schemaReader.getPath();
            this.__pathsToFields[path] = this._createStringField(schemaReader);

            this.__container.addField(this.__pathsToFields[path]);
        },

        _createArrayField(schemaReader) {},
        _createBooleanField(schemaReader) {},
        _createEnumField(schemaReader) {},
        _createIntegerField(schemaReader) {},
        _createNumberField(schemaReader) {},
        _createObjectField(schemaReader) {},
        _createStringField(schemaReader) {}
    }
});
