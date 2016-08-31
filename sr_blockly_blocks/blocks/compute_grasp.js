Blockly.Blocks['compute_grasp'] = {
  init: function() {
    this.appendValueInput("NAME")
        .appendField("Compute grasp for object");
    this.appendValueInput("NAME")
        .setCheck("RobotCommander")
        .appendField("  hand commander");
    this.setInputsInline(true);
    this.setOutput(true, "Grasp");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
