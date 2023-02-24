qx.Class.define("jsonui.test.Test", {
    extend: qx.dev.unit.TestCase,

    members: {
        testParse() {
            const generator = new jsonui.test.Generator();
            new jsonui.Schema(jsonui.test.Test.__TEST_SCHEMA, generator);

            const fields = generator.getFields();
            this.assertInArray("arrayOfStringValue", fields);
            this.assertInArray("arrayOfObjectValue", fields); // TODO: Object in array
            this.assertInArray("booleanValue", fields);
            this.assertInArray("integerValue", fields);
            this.assertInArray("numberValue", fields);
            this.assertInArray("objectValue.objectNumberValue", fields);
            this.assertInArray("objectValue.objectStringValue", fields);
            this.assertInArray("objectValue.objectObjectValue.objectObjectValueStringValue", fields);
            this.assertInArray("stringValue", fields);
        }
    },

    statics: {
        __TEST_SCHEMA: {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://example.com/product.schema.json",
            "title": "Test JSON schema",
            "description": "A test schema",
            "type": "object",
            "properties": {
                "arrayOfObjectValue": {
                    "description": "A description for arrayOfObjectValue",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "arrayOfObjectValueStringValue": {
                                "description": "A description for arrayOfObjectValueStringValue",
                                "type": "string"
                            }
                        }
                    }
                },
                "arrayOfStringValue": {
                    "description": "A description for arrayOfStringValue",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "booleanValue": {
                    "description": "A description for booleanValue",
                    "type": "boolean"
                },
                "enumValue": {
                    "description": "A description for enumValue",
                    "enum": [
                        "enum_value"
                    ]
                },
                "integerValue": {
                    "description": "A description for integerValue",
                    "type": "integer"
                },
                "numberValue": {
                    "description": "A description for numberValue",
                    "type": "number"
                },
                "objectValue": {
                    "type": "object",
                    "properties": {
                        "objectNumberValue": {
                            "type": "number"
                        },
                        "objectObjectValue": {
                            "type": "object",
                            "properties": {
                                "objectObjectValueStringValue": {
                                    "description": "A description for objectObjectValueStringValue",
                                    "type": "string"
                                }
                            }
                        },
                        "objectStringValue": {
                            "type": "string"
                        }
                    }
                },
                "stringValue": {
                    "description": "A description for stringValue",
                    "type": "string"
                }
            }
        }
    }
});
