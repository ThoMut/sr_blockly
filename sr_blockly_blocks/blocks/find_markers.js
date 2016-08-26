
Blockly.Blocks['find_markers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find markers");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(140);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
