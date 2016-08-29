
Blockly.Blocks['commander'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["right", "right"], ["left", "left"]]), "side");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["arm", "arm"], ["hand", "hand"]]), "robot");
    this.appendDummyInput()
        .appendField("commander");
    this.setInputsInline(true);
    this.setOutput(true, "RobotCommander");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
