Blockly.Blocks['get_current_pose'] = {
  init: function() {
    this.appendValueInput("commander")
        .setCheck("RobotCommander")
        .appendField("get current pose from commander");
    this.setInputsInline(false);
    this.setOutput(true, "Pose");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
