/**
 * Identifies an object which can contain fields generated by a FieldGenerator object.
 */
qx.Interface.define("jsonui.IFieldContainer", {
    members: {
        /**
         * @param {jsonui.IField} field The field to be added to this container.
         */
        addField(field) {}
    }
});
