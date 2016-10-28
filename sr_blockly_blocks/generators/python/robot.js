Blockly.Python['robot_joint_target'] = function(block) {
  var text_joint_pose_target = block.getFieldValue('joint_pose_target');
  var text_time_to_target = block.getFieldValue('time_to_target');
  var dropdown_wait = block.getFieldValue('wait');
  var dropdown_angle = block.getFieldValue('angle');

  var code = "";
  code += "joint_pose_target = \"" + text_joint_pose_target.toString() + "\"" + "\n";
  code += "wait = " + dropdown_wait.toString() + "\n";
  code += "angle = " + dropdown_angle.toString() + "\n";

  code += Blockly.readFile("/sr_blockly_blocks/generators/python/scripts/robot_joint_target.py");

  return code;
};
