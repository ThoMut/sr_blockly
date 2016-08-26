Blockly.Blocks['safe_planning'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Safe Planning");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
