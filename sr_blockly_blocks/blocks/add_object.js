Blockly.Blocks['add_object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Save object as")
        .appendField(new Blockly.FieldTextInput("object_name"), "NAME");
    this.appendValueInput("NAME")
        .setCheck("Object");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(140);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
