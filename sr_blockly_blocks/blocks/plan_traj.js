Blockly.Blocks['plan_traj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Plan");
    this.appendValueInput("NAME")
        .appendField("  commander")
        .setCheck("RobotCommander")
    this.appendValueInput("NAME")
        .setCheck("Pose")
        .appendField("  start");
    this.appendValueInput("NAME")
        .setCheck("Pose")
        .appendField("  goal");
    this.appendDummyInput()
        .appendField("  interpolation")
        .appendField(new Blockly.FieldTextInput("1"), "NAME")
        .appendField("s");
    this.setInputsInline(false);
    this.setOutput(true, "Trajectory");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
