
Blockly.Blocks['commander'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["right", "OPTIONNAME"], ["left", "OPTIONNAME"]]), "NAME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["arm", "OPTIONNAME"], ["hand", "OPTIONNAME"]]), "NAME");
    this.appendDummyInput()
        .appendField("commander");
    this.setInputsInline(true);
    this.setOutput(true, "RobotCommander");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
