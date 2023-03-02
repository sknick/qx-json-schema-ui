/**
 * An object which can create UI fields for viewing and editing a JSON document conforming to a defined JSON schema.
 */
qx.Class.define("jsonui.FieldGenerator", {
    extend: qx.core.Object,
    type: "abstract",

    /**
     * Constructor.
     * 
     * @param {jsonui.IFieldContainer} container The container which handles displaying the generated fields.
     */
    construct(container) {
        this.__container = container;

        // Central lookup of IField instances for a given field's path
        this.__pathsToFields = {};
    },

    members: {
        /**
         * This method will be called by a SchemaReader to have an IField for editing an array created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleArray(schemaReader) {
            this.__addField(schemaReader, this._createArrayField(schemaReader));
        },

        /**
         * This method will be called by a SchemaReader to have an IField for editing a boolean created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleBoolean(schemaReader) {
            this.__addField(schemaReader, this._createBooleanField(schemaReader));
        },

        /**
         * This method will be called by a SchemaReader to have an IField for editing an enum created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleEnum(schemaReader) {
            this.__addField(schemaReader, this._createEnumField(schemaReader));
        },

        /**
         * This method will be called by a SchemaReader to have an IField for editing an integer created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleInteger(schemaReader) {
            this.__addField(schemaReader, this._createIntegerField(schemaReader));
        },

        /**
         * This method will be called by a SchemaReader to have an IField for editing a number created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleNumber(schemaReader) {
            this.__addField(schemaReader, this._createNumberField(schemaReader));
        },

        /**
         * This method will be called by a SchemaReader to have an IField for editing an object created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleObject(schemaReader) {
            this.__addField(schemaReader, this._createObjectField(schemaReader));
        },

        /**
         * This method will be called by a SchemaReader to have an IField for editing a string created.
         * @param {jsonui.SchemaReader} schemaReader The reader invoking this method.
         */
        handleString(schemaReader) {
            this.__addField(schemaReader, this._createStringField(schemaReader));
        },

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.IField} The IField instance which can be used for viewing and editing the item indicated by
         *                          the reader.
         */
        _createArrayField(schemaReader) {},

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.IField} The IField instance which can be used for viewing and editing the item indicated by
         *                          the reader.
         */
        _createBooleanField(schemaReader) {},

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.IField} The IField instance which can be used for viewing and editing the item indicated by
         *                          the reader.
         */
        _createEnumField(schemaReader) {},

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.IField} The IField instance which can be used for viewing and editing the item indicated by
         *                          the reader.
         */
        _createIntegerField(schemaReader) {},

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.IField} The IField instance which can be used for viewing and editing the item indicated by
         *                          the reader.
         */
        _createNumberField(schemaReader) {},

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.ICompositeField} The ICompositeField instance which can be used for viewing and editing the
         *                                   item indicated by the reader.
         */
        _createObjectField(schemaReader) {},

        /**
         * This method must be implemented by subclasses to create an IField of the appropriate type and return it.
         * @param {jsonui.SchemaReader} schemaReader The reader responsible for wanting the field.
         * @returns {jsonui.IField} The IField instance which can be used for viewing and editing the item indicated by
         *                          the reader.
         */
        _createStringField(schemaReader) {},

        __addField(schemaReader, field) {
            let container = this.__container;
            if (!schemaReader.getParent().isRoot()) {
                const parentPath = schemaReader.getParent().getPath();
                if (!(parentPath in this.__pathsToFields)) {
                    throw `Unable to find field for parent path "${parentPath}"`;
                }

                container = this.__pathsToFields[parentPath];
            }

            container.addField(field);
            this.__pathsToFields[schemaReader.getPath()] = field;
        }
    }
});
