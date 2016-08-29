Blockly.JavaScript['combine_traj'] = function(block) {
  var value_traj1 = Blockly.JavaScript.valueToCode(block, 'traj1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_traj2 = Blockly.JavaScript.valueToCode(block, 'traj2', Blockly.JavaScript.ORDER_ATOMIC);
  var checkbox_sync = block.getFieldValue('sync') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
