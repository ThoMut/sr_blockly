Blockly.Blocks['plan_traj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Plan");
    this.appendValueInput("commander")
        .appendField("  commander")
        .setCheck("RobotCommander")
    this.appendValueInput("start")
        .setCheck("Pose")
        .appendField("  start");
    this.appendValueInput("goal")
        .setCheck("Pose")
        .appendField("  goal");
    this.appendDummyInput()
        .appendField("  interpolation")
        .appendField(new Blockly.FieldTextInput("1"), "interpolation")
        .appendField("s");
    this.setInputsInline(true);
    this.setOutput(true, "Trajectory");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
