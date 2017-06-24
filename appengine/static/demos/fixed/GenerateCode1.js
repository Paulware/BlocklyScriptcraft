  Blockly.Python['setup'] = function(block) {
    var value_baudrate = Blockly.Python.valueToCode(block, 'BaudRate', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '  void setup() {\n    Serial.begin (9600);\n }\n';
    return code;
  };

  Blockly.Python['import_library'] = function(block) {
    var value_library_name = Blockly.Python.valueToCode(block, 'Library Name', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var len = value_library_name.length;
    var code = '#import <' + value_library_name.substring(1,len-1) + '.h>\n';
    return code;
  }; 