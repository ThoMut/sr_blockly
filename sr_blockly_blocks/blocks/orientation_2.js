Blockly.Blocks['orientation_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Orientation");
    this.appendDummyInput()
        .appendField("r")
        .appendField(new Blockly.FieldAngle(0), "NAME");
    this.appendDummyInput()
        .appendField("p")
        .appendField(new Blockly.FieldAngle(0), "NAME");
    this.appendDummyInput()
        .appendField("y")
        .appendField(new Blockly.FieldAngle(0), "NAME");
    this.appendDummyInput()
        .appendField("frame")
        .appendField(new Blockly.FieldTextInput("world"), "NAME");
    this.setOutput(true, "Orientation");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
