qx.Class.define("jsonui.test.Test", {
    extend: qx.dev.unit.TestCase,

    members: {
        testParse() {
            const generator = new jsonui.test.Generator(new jsonui.test.DummyFieldContainer());

            const reader = new jsonui.SchemaReader(jsonui.test.Test.TEST_SCHEMA, generator);
            reader.read();

            const fields = generator.getFields();
            this.assertInArray("array_of_object_value", fields);
            this.assertInArray("array_of_string_value", fields);
            this.assertInArray("boolean_value", fields);
            this.assertInArray("enum_value", fields);
            this.assertInArray("integer_value", fields);
            this.assertInArray("number_value", fields);
            this.assertInArray("object_value.object_value|array_of_object_value", fields);
            this.assertInArray("object_value.object_value|number_value", fields);
            this.assertInArray("object_value.object_value|object_value.object_value|object_value|string_value", fields);
            this.assertInArray("object_value.object_value|string_value", fields);
            this.assertInArray("string_value", fields);
        }
    },

    statics: {
        TEST_SCHEMA: {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://example.com/product.schema.json",
            "title": "Test JSON schema",
            "description": "A test schema",
            "type": "object",
            "properties": {
                "array_of_object_value": {
                    "description": "A description for array_of_object_value",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "array_of_object_value|string_value": {
                                "description": "A description for array_of_object_value|string_value",
                                "type": "string"
                            }
                        }
                    }
                },
                "array_of_string_value": {
                    "description": "A description for array_of_string_value",
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "boolean_value": {
                    "description": "A description for boolean_value",
                    "type": "boolean"
                },
                "enum_value": {
                    "description": "A description for enum_value",
                    "enum": [
                        "enum_value_1",
                        "enum_value_2"
                    ]
                },
                "integer_value": {
                    "description": "A description for integer_value",
                    "type": "integer"
                },
                "number_value": {
                    "description": "A description for number_value",
                    "type": "number"
                },
                "object_value": {
                    "type": "object",
                    "properties": {
                        "object_value|array_of_object_value": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "object_value|array_of_object_value|boolean_value": {
                                        "type": "boolean"
                                    }
                                }
                            }
                        },
                        "object_value|number_value": {
                            "type": "number"
                        },
                        "object_value|object_value": {
                            "type": "object",
                            "properties": {
                                "object_value|object_value|string_value": {
                                    "description": "A description for object_value|object_value|string_value",
                                    "type": "string"
                                }
                            }
                        },
                        "object_value|string_value": {
                            "type": "string"
                        }
                    }
                },
                "string_value": {
                    "description": "A description for string_value",
                    "type": "string"
                }
            }
        }
    }
});
