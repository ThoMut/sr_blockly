Blockly.Blocks['joints_pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Joints pose")
        .appendField(new Blockly.FieldDropdown([["home", "home"], ["pack", "pack"], ["reach", "reach"]]), "joint_pose");
    this.appendValueInput("NAME")
        .setCheck("Commander")
        .appendField("Commander");
    this.setInputsInline(true);
    this.setOutput(true, "Pose");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
