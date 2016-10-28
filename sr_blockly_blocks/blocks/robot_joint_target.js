Blockly.Blocks['robot_joint_target'] = {};

function createNamedJointTarget(data) {
  Blockly.Blocks['robot_joint_target'] = {
    init: function() {
      if ((null != data) && (data.length > 0)) {
        this.appendDummyInput()
          .appendField("Move arm and hand to joint target:")
          .appendField("Named Pose: ")
          .appendField(new Blockly.FieldDropdown(data), "joint_pose_target");
      }
      else {
        this.appendDummyInput()
          .appendField("Move arm and hand to joint target:")
          .appendField("Named Pose: ")
          .appendField(new Blockly.FieldTextInput("default"), "joint_pose_target");
      }

      this.appendDummyInput()
        .appendField("Time:")
        .appendField(new Blockly.FieldTextInput("2"), "time_to_target")
        .appendField("Wait:")
        .appendField(new Blockly.FieldDropdown([["True", "True"], ["False", "False"]]), "wait")
        .appendField("Angle unit:")
        .appendField(new Blockly.FieldDropdown([["Radians", "False"], ["Degrees", "True"]]), "angle");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(240);
      this.setTooltip('Enter named pose as saved in the database.');
      this.setHelpUrl('http://www.shadowrobot.com/');
    }
  };
}

Blockly.waitForComponentToLoad('sr_blockly_blocks', 'get_named_poses', ['ur10srh', 'shadowhand_motor'],
  function (response) {
    createNamedJointTarget(response);
  },
  function(jqXHR, textStatus, errorThrown) {
    createNamedJointTarget(null);
  });
