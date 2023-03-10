qx.Class.define("jsonui.demo.Application", {
    extend: qx.application.Standalone,

    members: {
        async main() {
            this.base(arguments);

            if (qx.core.Environment.get("qx.debug")) {
                qx.log.appender.Native;
            }

            const schema = qx.bom.storage.Web.getLocal().getItem("jsonui-schema");

            this.__schemaField = new qx.ui.form.TextArea(
                schema ? schema : JSON.stringify(
                    jsonui.test.Test.TEST_SCHEMA,
                    null,
                    4
                )
            );
            this.__schemaField.setHeight(300);
            this.__schemaField.setPlaceholder("Enter a JSON schema");

            const generateButton = new qx.ui.form.Button("Generate UI");

            const trace = qx.bom.storage.Web.getLocal().getItem("jsonui-trace");

            this.__traceCheckBox = new qx.ui.form.CheckBox("Trace (debug console)");
            this.__traceCheckBox.setValue(trace ? true : false);

            const controlsContainer = new qx.ui.container.Composite(new qx.ui.layout.Dock(10));
            controlsContainer.add(generateButton,       { edge: "center" });
            controlsContainer.add(this.__traceCheckBox, { edge: "east" });

            const topContainer = new qx.ui.container.Composite(new qx.ui.layout.Dock(5));
            topContainer.add(this.__schemaField, { edge: "center" });
            topContainer.add(controlsContainer,  { edge: "south" });

            this.__fieldContainer = new jsonui.default.FieldContainer(10);
            this.__fieldContainer.setMaxWidth(800);

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

            qx.bom.storage.Web.getLocal().setItem("jsonui-schema", schemaText);
            qx.bom.storage.Web.getLocal().setItem("jsonui-trace", this.__traceCheckBox.getValue());

            try {
                this.__fieldContainer.removeAll();

                const schema = JSON.parse(schemaText);
                
                const generator = new jsonui.default.FieldGenerator(this.__fieldContainer);
                generator.getArrayItemEditConfig().setModal(true);

                const reader = new jsonui.SchemaReader(schema, generator);
                reader.setTrace(this.__traceCheckBox.getValue());

                reader.read();
            } catch (ex) {
                window.alert(ex);
            }
        }
    }
});
