Blockly.Blocks['pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pose");
    this.appendValueInput("NAME")
        .setCheck("Orientation")
        .appendField("  orientation");
    this.appendValueInput("NAME")
        .setCheck("Position")
        .appendField("  position");
    this.setInputsInline(false);
    this.setOutput(true, "Pose");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
