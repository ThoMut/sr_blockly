
Blockly.Blocks['find_objects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Find objects");
    this.setInputsInline(false);
    this.setOutput(true, "Array");
    this.setColour(140);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
