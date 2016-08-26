
Blockly.Python['commander'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['store_commander'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  return code;
};

Blockly.Python['safe_planning'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
  // TODO: Assemble Python into code variable.
  var code = '...';
  return code;
};
