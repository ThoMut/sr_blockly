Blockly.Blocks['orientation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Orientation");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["up", "OPTIONNAME"], ["right", "OPTIONNAME"], ["down", "OPTIONNAME"], ["left", "OPTIONNAME"], ["front", "OPTIONNAME"], ["back", "OPTIONNAME"]]), "NAME");
    this.appendDummyInput()
        .appendField("frame")
        .appendField(new Blockly.FieldTextInput("/world"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Orientation");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
