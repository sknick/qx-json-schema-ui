qx.Class.define("jsonui.test.Test", {
    extend: qx.dev.unit.TestCase,

    members: {
        testParse() {
            const generator = new jsonui.test.Generator();
            new jsonui.Schema(jsonui.test.Test.__TEST_SCHEMA, generator);

            const fields = generator.getFields();
            this.assertInArray("root.arrayValue", fields);
            this.assertInArray("root.booleanValue", fields);
            this.assertInArray("root.integerValue", fields);
            this.assertInArray("root.numberValue", fields);
            this.assertInArray("root.objectValue.objectNumberValue", fields);
            this.assertInArray("root.objectValue.objectStringValue", fields);
            this.assertInArray("root.stringValue", fields);
        }
    },

    statics: {
        __TEST_SCHEMA: {
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "$id": "https://example.com/product.schema.json",
            "title": "Product",
            "description": "A product from Acme's catalog",
            "type": "object",
            "properties": {
                "arrayValue": {
                    "description": "A description for arrayValue",
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
