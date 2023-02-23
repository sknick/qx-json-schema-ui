/**
 * This class demonstrates how to define unit tests for your application.
 *
 * Execute <code>qx test</code> to generate a testrunner application
 * and open it from <tt>test/index.html</tt>
 *
 * The methods that contain the tests are instance methods with a
 * <code>test</code> prefix. You can create an arbitrary number of test
 * classes like this one. They can be organized in a regular class hierarchy,
 * i.e. using deeper namespaces and a corresponding file structure within the
 * <tt>test</tt> folder.
 */
qx.Class.define("jsonui.test.Test", {
    extend: qx.dev.unit.TestCase,

    members: {
        testParse() {
            const def = {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://example.com/product.schema.json",
                "title": "Product",
                "description": "A product from Acme's catalog",
                "type": "object",
                "properties": {
                    "productId": {
                        "description": "The unique identifier for a product",
                        "type": "integer"
                    },
                    "productName": {
                        "description": "Name of the product",
                        "type": "string"
                    },
                    "price": {
                        "description": "The price of the product",
                        "type": "number",
                        "exclusiveMinimum": 0
                    },
                    "tags": {
                        "description": "Tags for the product",
                        "type": "array",
                        "items": {
                            "type": "string"
                        },
                        "minItems": 1,
                        "uniqueItems": true
                    },
                    "dimensions": {
                        "type": "object",
                        "properties": {
                            "length": {
                                "type": "number"
                            },
                            "width": {
                                "type": "number"
                            },
                            "height": {
                                "type": "number"
                            }
                        },
                        "required": ["length", "width", "height"]
                    }
                },
                "required": ["productId", "productName", "price"]
            };

            const schema = new jsonui.Schema(def, new jsonui.test.Generator());
        }
    }
});
