/**
 * Identifies an IField that can contain other IField instances.
 */
qx.Interface.define("jsonui.ICompositeField", {
    extend: [jsonui.IField],

    members: {
        /**
         * @param {jsonui.IField} field The field to be added to this composite field.
         */
        addField(field) {}
    }
});
