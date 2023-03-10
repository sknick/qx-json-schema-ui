qx.Class.define("jsonui.demo.Application", {
    extend: qx.application.Standalone,

    members: {
        async main() {
            this.base(arguments);

            if (qx.core.Environment.get("qx.debug")) {
                qx.log.appender.Native;
            }
                
            this.__fieldGenerator = null;

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

            this.__applyJsonDocButton = new qx.ui.form.Button("Apply JSON Document");
            this.__applyJsonDocButton.setEnabled(false);

            const trace = qx.bom.storage.Web.getLocal().getItem("jsonui-trace");

            this.__traceCheckBox = new qx.ui.form.CheckBox("Trace (debug console)");
            this.__traceCheckBox.setValue(trace ? true : false);

            const rightControlsContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
            rightControlsContainer.add(this.__applyJsonDocButton);
            rightControlsContainer.add(this.__traceCheckBox);

            const controlsContainer = new qx.ui.container.Composite(new qx.ui.layout.Dock(10));
            controlsContainer.add(generateButton,         { edge: "center" });
            controlsContainer.add(rightControlsContainer, { edge: "east" });

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
            this.__applyJsonDocButton.addListener("execute", this.__onApplyJsonDoc, this);
        },

        __onApplyJsonDoc(e) {
            // TODO
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
                
                this.__fieldGenerator = new jsonui.default.FieldGenerator(this.__fieldContainer);
                this.__fieldGenerator.getArrayItemEditConfig().setAllowMaximize(true);
                this.__fieldGenerator.getArrayItemEditConfig().setHeight(450);
                this.__fieldGenerator.getArrayItemEditConfig().setModal(true);
                this.__fieldGenerator.getArrayItemEditConfig().setResizable(true);
                this.__fieldGenerator.getArrayItemEditConfig().setShowMaximize(true);
                this.__fieldGenerator.getArrayItemEditConfig().setWidth(600);

                const reader = new jsonui.SchemaReader(JSON.parse(schemaText), this.__fieldGenerator);
                reader.setTrace(this.__traceCheckBox.getValue());

                reader.read();

                this.__applyJsonDocButton.setEnabled(true);
            } catch (ex) {
                this.__applyJsonDocButton.setEnabled(false);
                window.alert(ex);
            }
        }
    }
});
