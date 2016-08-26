Blockly.Blocks['find_unknowns'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Array")
        .appendField("find unknowns objects");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(140);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
