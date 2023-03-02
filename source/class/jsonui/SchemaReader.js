/**
 * An object which can read a JSON schema (or subschema) and call to the specified generator to create appropriate UI
 * fields while reading.
 */
qx.Class.define("jsonui.SchemaReader", {
    extend: qx.core.Object,

    properties: {
        trace: {
            check: "Boolean",
            init: false,
            nullable: false
        }
    },

    /**
     * Constructor.
     * 
     * @param {Object}                schema    The JSON schema definition to be represented by this object. This can
     *                                          also be a subschema.
     * @param {jsonui.FieldGenerator} generator The generator that will create appropriate UI controls for the fields
     *                                          defined in the schema.
     * @param {String}                [name]    The name for the schema this reader is reading if it's not reading the
     *                                          root schema.
     * @param {SchemaReader}          [parent]  The reader that parsed the schema that spawned this reader, if any.
     */
    construct(schema, generator, name, parent) {
        this.__schema = schema;
        this.__generator = generator;
        this.__name = name ? name : null;
        this.__parent = parent ? parent : null;
    },

    members: {
        /**
         * @returns {String?} The name for the schema that this reader is reading or null if it's reading the root
         *                    schema.
         */
        getName() {
            return this.__name;
        },

        /**
         * @returns {jsonui.SchemaReader?} The parent reader of this one or null if it doesn't have a parent.
         */
        getParent() {
            return this.__parent;
        },

        /**
         * @param {Boolean} [includeRootIndicator] Pass true to have the path started with an indicator for the root
         *                                         ("[root]").
         * @returns {String} The ancestry chain of this reader, where each ancestor's name is separated by a ".", with
         *                   the most senior ancestor being the first. If this reader has no ancestors, an empty string
         *                   will be returned.
         */
        getPath(includeRootIndicator) {
            const ret = [];
            if (this.__name) {
                ret.push(this.__name);
            } else if (this.isRoot() && includeRootIndicator) {
                ret.push("[root]");
            }

            let parent = this.__parent;
            while (parent) {
                const parentName = parent.getName();
                if (parentName) {
                    ret.push(parentName);
                } else if (parent.isRoot() && includeRootIndicator) {
                    ret.push("[root]");
                }

                parent = parent.getParent();
            }

            ret.reverse();

            return ret.join(".");
        },

        /**
         * @returns {Object} The JSON schema or subschema that this reader reads.
         */
        getSchema() {
            return this.__schema;
        },

        /**
         * @returns {Boolean} True if this reader is reading the root schema.
         */
        isRoot() {
            return !this.__parent;
        },

        /**
         * Begins reading the schema, calling the various methods of the reader's FieldGenerator instance to have it
         * create UI fields for viewing and editing the fields of the schema.
         * 
         * @throws {String} if an error occurs while reading.
         */
        read() {
            if ("type" in this.__schema) {
                switch (this.__schema.type) {
                    case "array":
                        this.__log();
                        this.__generator.handleArray(this);
                        break;
                    
                    case "boolean":
                        this.__log();
                        this.__generator.handleBoolean(this);
                        break;
                    
                    case "integer":
                        this.__log();
                        this.__generator.handleInteger(this);
                        break;
                    
                    case "number":
                        this.__log();
                        this.__generator.handleNumber(this);
                        break;

                    case "object":
                        this.__log();

                        // We don't want an object field for the root object
                        if (this.__parent) {
                            this.__generator.handleObject(this);
                        }

                        for (let propName in this.__schema.properties) {
                            const subSchemaReader = new jsonui.SchemaReader(
                                this.__schema.properties[propName],
                                this.__generator,
                                propName,
                                this
                            );
                            subSchemaReader.setTrace(this.getTrace());
                            subSchemaReader.read();
                        }
                        break;
                    
                    case "string":
                        this.__log();
                        this.__generator.handleString(this);
                        break;
                    
                    default:
                        throw `Unknown schema type "${this.__schema.type}" for field "${this.getPath()}"`;
                }
            } else if ("enum" in this.__schema) {
                this.__log();
                this.__generator.handleEnum(this);
            } else {
                throw `Invalid or unhandled definition for field "${this.getPath()}"`;
            }
        },

        __log() {
            if (this.getTrace()) {
                console.warn(`SchemaReader: ${this.getPath(true)}`);
            }
        }
    }
});
