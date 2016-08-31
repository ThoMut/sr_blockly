Blockly.Python['grasp_quality'] = function(block) {
  var value_hand = Blockly.Python.valueToCode(block, 'hand', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
