Blockly.Python['grasp_approach'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_grasp = Blockly.Python.valueToCode(block, 'grasp', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
