Blockly.Blocks['play_traj'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play");
    this.appendValueInput("NAME")
        .setCheck("Trajectory")
        .appendField("trajectory");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
