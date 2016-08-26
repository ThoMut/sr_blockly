Blockly.Python['sleep'] = function(block) {
  var text_sleep = block.getFieldValue('sleep');

  var code = "";

  code += "sleep = " + text_sleep + "\n";

  code += Blockly.readPythonFile("../blockly/generators/python/scripts/sleep.py");

  return code;
};