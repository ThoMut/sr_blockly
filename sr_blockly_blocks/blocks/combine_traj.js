Blockly.Blocks['combine_traj'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Trajectory")
        .appendField("Combine")
        .appendField("traj1");
    this.appendValueInput("NAME")
        .setCheck("Trajectory")
        .appendField("traj2");
    this.setInputsInline(true);
    this.setOutput(true, "Trajectory");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
