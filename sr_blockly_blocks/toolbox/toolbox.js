if (null == toolboxXmlText) {
    var toolboxXmlText = "";
}
toolboxXmlText += `
    <category id="shadow" name="Shadow Robot" colour="120">
    <category id="shadow" name="Shadow Robot" colour="306">
      <block type="commander"></block>
      <block type="safe_planning"></block>
      <block type="compute_grasp"></block>
      <block type="grasp_object"></block>
      <block type="grasp_approach"></block>
      <block type="release_object"></block>
    </category>
    <category id="geometry" name="Geometry" colour="230">
      <block type="pose"></block>
      <block type="position"></block>
      <block type="orientation"></block>
      <block type="orientation_2"></block>
    </category>
    <category id="joints" name="Joints" colour="65">
      <block type="joints_pose"></block>
      <block type="get_current_pose"></block>
    </category>
    <category id="trajectory" name="Trajectory" colour="0">
      <block type="combine_traj"></block>
      <block type="plan_traj"></block>
      <block type="play_traj"></block>
    </category>
    <category id="vision" name="Vision" colour="140">
      <block type="find_objects"></block>
      <block type="add_object"></block>
      <block type="find_unknowns"></block>
      <block type="find_markers"></block>
    </category>
    </category>
`;
