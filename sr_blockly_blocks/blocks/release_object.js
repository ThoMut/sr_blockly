Blockly.Blocks['release_object'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Grasp")
        .appendField("Release object with grasp");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
