Blockly.Blocks['combine_traj'] = {
  init: function() {
    this.appendValueInput("traj1")
        .setCheck("Trajectory")
        .appendField("Combine")
        .appendField("traj1");
    this.appendValueInput("traj2")
        .setCheck("Trajectory")
        .appendField("traj2");
    this.appendDummyInput()
        .appendField("start together")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "sync");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
