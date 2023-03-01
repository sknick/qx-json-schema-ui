qx.Class.define("jsonui.Schema", {
    extend: qx.core.Object,

    /**
     * @param {String}            schema    The JSON schema definition to be represented by this object. This can also
     *                                      be a subschema.
     * @param {jsonui.IGenerator} generator The generator that will create appropriate UI controls for the definitions
     *                                      in the schema.
     * @param {String}            [name]    The name for this schema if it's not the root schema.
     * @param {Schema}            [parent]  The parent schema of this one, if any.
     */
    construct(schema, generator, name, parent) {
        this.__schema = schema;
        this.__generator = generator;
        this.__name = name ? name : "";
        this.__parent = parent ? parent : null;
    },

    members: {
        getParent() {
            return this.__parent;
        },

        getPath() {
            const ret = [];
            if (this.__name !== "") {
                ret.push(this.__name);
            }

            let parent = this.__parent;
            while (parent) {
                const path = parent.getPath();
                if (path !== "") {
                    ret.push(path);
                }

                parent = parent.getParent();
            }

            ret.reverse();

            return ret.join(".");
        },

        recurse() {
            if ("type" in this.__schema) {
                switch (this.__schema.type) {
                    case "array":
                        this.__generator.createArrayField(this);
                        break;
                    
                    case "boolean":
                        this.__generator.createBooleanField(this);
                        break;
                    
                    case "integer":
                        this.__generator.createIntegerField(this);
                        break;
                    
                    case "number":
                        this.__generator.createNumberField(this);
                        break;

                    case "object":
                        // TODO: Redundancy in path: objectValue.objectValue.objectObjectValue.objectObjectValueStringValue
                        for (let propName in this.__schema.properties) {
                            const subSchema = new jsonui.Schema(this.__schema.properties[propName], this.__generator,
                                propName, this);
                            subSchema.recurse();
                        }
                        break;
                    
                    case "string":
                        this.__generator.createStringField(this);
                        break;
                    
                    default:
                        throw `Unknown schema type "${this.__schema.type}" for field "${this.getPath()}"`;
                }
            } else if ("enum" in this.__schema) {
                this.__generator.createEnumField(this);
            } else {
                throw `Invalid or unhandled definition for field "${this.getPath()}"`;
            }
        }
    }
});
