Blockly.Blocks['position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Position");
    this.appendDummyInput()
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "NAME");
    this.appendDummyInput()
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "NAME");
    this.appendDummyInput()
        .appendField("z")
        .appendField(new Blockly.FieldTextInput("0"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Position");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
