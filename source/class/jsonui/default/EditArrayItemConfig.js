/**
 * The configuration that can be applied to EditArrayItemDialogs. Most properties match the properties that can be
 * applied to a qx.ui.window.Window except where otherwise documented.
 */
qx.Class.define("jsonui.default.EditArrayItemConfig", {
    extend: qx.core.Object,

    properties: {
        allowMinimize: {
            init: false,
            check: "Boolean",
            nullable: false
        },

        allowMaximize: {
            init: false,
            check: "Boolean",
            nullable: false
        },

        modal: {
            init: false,
            check: "Boolean",
            nullable: false
        },

        resizable: {
            init: false,
            check: "Boolean",
            nullable: false
        },

        showMinimize: {
            init: false,
            check: "Boolean",
            nullable: false
        },

        showMaximize: {
            init: false,
            check: "Boolean",
            nullable: false
        },

        /**
         * The vertical spacing between fields in the dialog.
         */
        verticalSpacing: {
            init: 10,
            check: "Integer",
            nullable: false
        },

        width: {
            init: 400,
            check: "Integer",
            nullable: false
        }
    }
});
