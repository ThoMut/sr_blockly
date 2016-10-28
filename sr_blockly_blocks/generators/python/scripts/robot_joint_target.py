
joints = robot_commander.get_named_target_joint_values(joint_pose_target)
robot_commander.move_to_joint_value_target(joints, wait=wait, angle_degrees=angle)