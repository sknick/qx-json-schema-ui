qx.Class.define("jsonui.demo.Application", {
    extend: qx.application.Standalone,

    members: {
        async main() {
            this.base(arguments);

            if (qx.core.Environment.get("qx.debug")) {
                qx.log.appender.Native;
            }

            this.__schemaField = new qx.ui.form.TextArea(JSON.stringify(jsonui.test.Test.TEST_SCHEMA, null, 4));
            this.__schemaField.setHeight(300);
            this.__schemaField.setPlaceholder("Enter a JSON schema");

            const generateButton = new qx.ui.form.Button("Generate UI");

            const topContainer = new qx.ui.container.Composite(new qx.ui.layout.Dock(5));
            topContainer.add(this.__schemaField, { edge: "center" });
            topContainer.add(generateButton,     { edge: "south" });

            this.__fieldContainer = new jsonui.default.FieldContainer(10);
            this.__fieldContainer.setPadding(20);

            const content = new qx.ui.splitpane.Pane("vertical");
            content.add(topContainer, 0);
            content.add(new qx.ui.container.Scroll(this.__fieldContainer, 1));

            this.getRoot().add(content, { edge: 0 });

            generateButton.addListener("execute", this.__onGenerate, this);
        },

        __onGenerate(e) {
            const schemaText = this.__schemaField.getValue().trim();
            if (schemaText === "") {
                return;
            }

            try {
                this.__fieldContainer.removeAll();

                const schema = JSON.parse(schemaText);

                const reader = new jsonui.SchemaReader(schema, new jsonui.default.FieldGenerator(this.__fieldContainer));
                reader.read();
            } catch (ex) {
                window.alert(ex);
            }
        }
    }
});
