Blockly.Blocks['grasp_approach'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Extract")
        .appendField(new Blockly.FieldDropdown([["hand_pregrasp", "hand_pregrasp"], ["hand_grasp", "hand_grasp"], ["arm_pregrasp", "arm_pregrasp"], ["arm_grasp", "arm_grasp"], ["arm_retreat", "arm_retreat"]]), "grasp_phase")
        .appendField("from");
    this.appendValueInput("grasp")
        .setCheck("Grasp")
        .appendField("grasp");
    this.setOutput(true, "Pose");
    this.setInputsInline(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
