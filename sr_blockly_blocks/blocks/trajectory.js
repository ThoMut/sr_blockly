Blockly.Blocks['trajectory'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Trajectory")
        .appendField("Trajectory");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
