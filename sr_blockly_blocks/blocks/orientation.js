Blockly.Blocks['orientation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Orientation");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["up", "up"], ["right", "right"], ["down", "down"], ["left", "left"], ["front", "front"], ["back", "back"]]), "orientation");
    this.appendDummyInput()
        .appendField("frame")
        .appendField(new Blockly.FieldTextInput("/world"), "frame");
    this.setInputsInline(true);
    this.setOutput(true, "Orientation");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
