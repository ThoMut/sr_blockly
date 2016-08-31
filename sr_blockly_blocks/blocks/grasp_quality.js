Blockly.Blocks['grasp_quality'] = {
  init: function() {
    this.appendValueInput("hand")
        .setCheck("Commander")
        .appendField("Grasp quality for hand");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
