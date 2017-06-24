Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Baud Rate")
        .appendField(new Blockly.FieldDropdown([["9600", "opt9600"], ["115200", "opt115200"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tricolorled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TriColorLED Object");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Unique Name");
    this.appendValueInput("GREEN LED pin")
        .setCheck("Number")
        .appendField("GREEN PIN");
    this.appendValueInput("RED LED pin")
        .setCheck("Number")
        .appendField("RED PIN");
    this.appendValueInput("BLUE LED pin")
        .setCheck("Number")
        .appendField("BLUE PIN")
        .appendField(new Blockly.FieldImage("TriColorLED.jpg", 30, 40, "*"));
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setColor");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["GREEN", "optGreen"], ["RED", "optRed"], ["BLUE", "optBlue"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ispressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is Pressed");
    this.appendValueInput("buttonObject")
        .setCheck(null)
        .appendField("Button Press Object");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isreleased'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is Released");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Button Press Object");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buttonpress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button Press Object");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Unique Name");
    this.appendValueInput("buttonPin")
        .setCheck(null)
        .appendField("Pin Selector");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['infrared'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infra-red Object");
    this.appendDummyInput()
        .appendField("Receive Pin");
    this.appendValueInput("rxPin")
        .setCheck("Number")
        .appendField("Pin Selector");
    this.appendDummyInput()
        .appendField("Transmit Pin");
    this.appendValueInput("txPin")
        .setCheck("Number")
        .appendField("Pin Selector");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fireshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fire Shot");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("infra red object");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("3 digit data");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shotdetected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shot Detected");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Infra-red object");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['piezo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Piezo");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Unique Name");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("pin");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shotsound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make Shot Sound");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Piezo object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pinselector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pin Selector");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["D0(serial receive)", "optD0"], ["D1(serial transmit)", "optD1"], ["D2", "optD2"], ["D3", "optD3"], ["D4", "optD4"], ["D5", "optD5"], ["D6", "optD6"], ["D7", "optD7"], ["D8", "optD8"], ["D9", "optD9"], ["D10", "opt10"], ["D11", "opt11"], ["D12", "opt12"], ["D13", "opt13"], ["D14 (A0)", "opt14"], ["D15(A1)", "opt15"], ["D16(A2)", "opt16"], ["D17(A3)", "opt17"], ["D18(A4)", "opt18"], ["D19(A5)", "opt19"], ["D20(A6 Readonly)", "opt20"], ["D21(A7 Readonly)", "opt21"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};