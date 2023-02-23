qx.Class.define("jsonui.Schema", {
    extend: qx.core.Object,

    /**
     * @param {String}            schema    The JSON schema definition to be represented by this object.
     * @param {jsonui.IGenerator} generator The generator that will create appropriate UI controls for the definitions
     *                                      in the schema.
     */
    construct(schema, generator) {
        this.__generator = generator;
        this.__recurse(schema, "root");
    },

    members: {
        __recurse(def, path) {
            if ("type" in def) {
                switch (def.type) {
                    case "array":
                        this.__generator.createArrayField(def, path);
                        break;
                    
                    case "boolean":
                        this.__generator.createBooleanField(def, path);
                        break;
                    
                    case "integer":
                        this.__generator.createIntegerField(def, path);
                        break;
                    
                    case "number":
                        this.__generator.createNumberField(def, path);
                        break;

                    case "object":
                        for (let propName in def.properties) {
                            this.__recurse(def.properties[propName], `${path}.${propName}`);
                        }
                        break;
                    
                    case "string":
                        this.__generator.createStringField(def, path);
                        break;
                    
                    default:
                        throw `Unknown schema type "${def.type} for field "${path}"`;
                }
            } else if ("enum" in def) {
                this.__generator.createEnumField(def, path);
            } else {
                throw `Invalid or unhandled definition for field "${path}"`
            }
        }
    }
});
