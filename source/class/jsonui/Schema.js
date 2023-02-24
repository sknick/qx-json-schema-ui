qx.Class.define("jsonui.Schema", {
    extend: qx.core.Object,

    /**
     * @param {String}            schema       The JSON schema definition to be represented by this object.
     * @param {jsonui.IGenerator} generator    The generator that will create appropriate UI controls for the
     *                                         definitions in the schema.
     * @param {String}            [pathPrefix] A prefix path to add to any parsed paths. This is useful when parsing
     *                                         sub-schemas.
     */
    construct(schema, generator, pathPrefix) {
        this.__generator = generator;
        this.__pathPrefix = pathPrefix ? `${pathPrefix}.` : "";

        this.__recurse(schema, "");
    },

    members: {
        __recurse(def, path) {
            const currentPath = `${this.__pathPrefix}${path}`;

            if ("type" in def) {
                switch (def.type) {
                    case "array":
                        this.__generator.createArrayField(def, currentPath);
                        break;
                    
                    case "boolean":
                        this.__generator.createBooleanField(def, currentPath);
                        break;
                    
                    case "integer":
                        this.__generator.createIntegerField(def, currentPath);
                        break;
                    
                    case "number":
                        this.__generator.createNumberField(def, currentPath);
                        break;

                    case "object":
                        for (let propName in def.properties) {
                            const p = (currentPath !== "") ? `${currentPath}.` : currentPath;
                            this.__recurse(def.properties[propName], `${p}${propName}`);
                        }
                        break;
                    
                    case "string":
                        this.__generator.createStringField(def, currentPath);
                        break;
                    
                    default:
                        throw `Unknown schema type "${def.type}" for field "${currentPath}"`;
                }
            } else if ("enum" in def) {
                this.__generator.createEnumField(def, currentPath);
            } else {
                throw `Invalid or unhandled definition for field "${currentPath}"`
            }
        }
    }
});
