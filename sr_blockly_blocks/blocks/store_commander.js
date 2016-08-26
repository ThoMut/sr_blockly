Blockly.Blocks['store_commander'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Commander");
    this.appendValueInput("NAME")
        .setCheck("RobotCommander");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
