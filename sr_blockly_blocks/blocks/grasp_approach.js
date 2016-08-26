Blockly.Blocks['grasp_approach'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Extract")
        .appendField(new Blockly.FieldDropdown([["approach", "OPTIONNAME"], ["final_approach", "OPTIONNAME"], ["retreat", "OPTIONNAME"]]), "NAME")
        .appendField("from");
    this.appendValueInput("grasp")
        .setCheck("Grasp")
        .appendField("grasp");
    this.appendValueInput("commander")
        .setCheck("Commander")
        .appendField("commander");
    this.setOutput(true, "Pose");
    this.setColour(306);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
