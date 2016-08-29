Blockly.Blocks['grasp_approach'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Extract")
        .appendField(new Blockly.FieldDropdown([["approach", "approach"], ["final_approach", "final_approach"], ["retreat", "retreat"]]), "grasp_phase")
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
