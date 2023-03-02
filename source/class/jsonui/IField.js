/**
 * Identifies an object which provides UI elements for viewing and editing a JSON schema item.
 */
qx.Interface.define("jsonui.IField", {
    members: {
        /**
         * @returns {String?} A description of this field, if any.
         */
        getDescription() {},

        /**
         * @returns {String} The label to show for this field.
         */
        getLabel() {},

        /**
         * @returns {qx.ui.core.Widget} The widget which allows the editing of this field.
         */
        getWidget() {}
    }
});
