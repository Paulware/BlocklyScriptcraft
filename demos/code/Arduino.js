Blockly.Blocks['setuploop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void setup() {");
    this.appendDummyInput()
        .appendField("Baud Rate")
        .appendField(new Blockly.FieldDropdown([["9600", "9600"], ["115200", "115200"]]), "BAUDRATE");
    this.appendStatementInput("SETUPCODE")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("void loop");
    this.appendStatementInput("LOOPCODE")
        .setCheck(null);        
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['infrared'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Infra-red Object");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Unique Name");
    this.appendValueInput("rxPin")
        .setCheck("Number")
        .appendField("Receive Pin Selector");
    this.appendValueInput("txPin")
        .setCheck("Number")
        .appendField("Transmit Pin Selector");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fireshot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fire Infra-red Shot");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Value to send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['irdetected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IR Value");
    this.appendValueInput("RCVPIN")
        .setCheck("Number")
        .appendField("Receive Pin");       
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pinselector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pin Selector")
        .appendField(new Blockly.FieldDropdown([["D0(serial receive)", "0"], ["D1(serial transmit)", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"], ["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"], ["D13", "13"], ["D14 (A0)", "14"], ["D15(A1)", "15"], ["D16(A2)", "16"], ["D17(A3)", "17"], ["D18(A4)", "18"], ["D19(A5)", "19"], ["D20(A6 Readonly)", "20"], ["D21(A7 Readonly)", "21"]]), "NAME");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['instantiate'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Instatiate Object");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['import'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Import Library for Object:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Block");
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['commentwidget'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Comment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("void loop() {");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['statement'] = {
  init: function() {
    this.appendValueInput("statementValue")
        .setCheck("String")
        .appendField("statement");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['update'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("update objects:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['flashcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Flash LED color");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["Green", "GREEN"], ["Red", "RED"], ["Blue", "BLUE"]]), "COLOR")
        .appendField("LED Object name:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['loadobjects'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load Objects Here");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['timer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Unique Name");
    this.appendValueInput("TIMEOUT")
        .setCheck("Number")
        .appendField("Timer Length (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['timerexpired'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer has expired");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name of Timer");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['resettimer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset Timer");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name of Timer:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['settimerelapse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set timer elapse");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name of timer");
    this.appendValueInput("ELAPSETIME")
        .setCheck("Number")
        .appendField("milliseconds:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['timerisactive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timer is active");
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Timer Name");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['nextcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set LED to next color");
    this.appendValueInput("GREENPIN")
        .setCheck("Number")
        .appendField("Green Pin");
    this.appendValueInput("BLUEPIN")
        .setCheck("Number")
        .appendField("Blue Pin");
    this.appendValueInput("REDPIN")
        .setCheck("Number")
        .appendField("Red Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createfiresequence'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create fire sequence");
    this.appendValueInput("OBJECT")
        .setCheck("String")
        .appendField("Name of IR object");
    this.appendValueInput("FIREDATA")
        .setCheck("String")
        .appendField("3 hex digit fire sequence");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['writepin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write Value")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["0", "0"]]), "PINVALUE");
    this.appendValueInput("WHICHPIN")
        .setCheck(null)
        .appendField("To Pin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['readpin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Pin");
    this.appendValueInput("WHICHPIN")
        .setCheck(null)
        .appendField("Pin Selector");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['define'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("define");
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("value");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['definename'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("define");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("name");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gotipaddress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GotIpAddress");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['settricolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set LED Color")
        .appendField(new Blockly.FieldDropdown([["Green", "GREEN"], ["Red", "RED"], ["Blue", "BLUE"],["Purple", "PURPLE"], ["White", "WHITE"], ["Yellow", "YELLOW"], ["Light Blue", "BLUEBLUE"], ["Off", "OFF"]]), "COLOR");
    this.appendValueInput("GREENPIN")
        .setCheck("Number")
        .appendField("Green Pin"); 
    this.appendValueInput("BLUEPIN")
        .setCheck("Number")
        .appendField("Blue Pin"); 
    this.appendValueInput("REDPIN")
        .setCheck("Number")
        .appendField("Red Pin"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['currentcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Current Color");
    this.appendValueInput("GREENPIN")
        .setCheck("Number")
        .appendField("GreenPin");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['makesound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sound to Play")
        .appendField(new Blockly.FieldDropdown([["Star Wars", "startStarWars"], ["Mario Theme", "startMarioTheme"], ["fire", "fireSound"], ["hit", "hitSound"], ["Police Siren", "siren"]]), "SOUND");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Piezo Pin");
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
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Button Pin");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('help/wireButton.htm');
  }
};

Blockly.Blocks['isreleased'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is Released");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Button Pin");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['charpressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Character Entered");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lineentered'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Entered");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cyclecolors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cycle Colors");
    this.appendValueInput("TIMEOUT")
        .setCheck("Number")
        .appendField("Timeout ms (1000)");
    this.appendValueInput("GREENPIN")
        .setCheck("Number")
        .appendField("GreenPin");
    this.appendValueInput("BLUEPIN")
        .setCheck("Number")
        .appendField("Blue Pin"); 
    this.appendValueInput("REDPIN")
        .setCheck("Number")
        .appendField("Red Pin");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['stopcyclecolors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop Cycling Colors");
    this.appendValueInput("GREENPIN")
        .setCheck("Number")
        .appendField("GreenPin");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['starttimer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start Timer");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name of timer");
    this.appendValueInput("TIMEOUT")
        .setCheck("Number")
        .appendField("Timeout (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("TIMEOUT")
        .setCheck("Number")
        .appendField("Wait(ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['displaywrite'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("Display Text");
    this.appendValueInput("DATAPIN")
        .setCheck("Number")
        .appendField("Data Pin");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['displayclear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear Display");
    this.appendValueInput("DATAPIN")
        .setCheck("Number")
        .appendField("Data Pin");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['stopsound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop the sound");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Piezo Pin");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['motormove'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["Forward", "forward"], ["Reverse", "reverse"]]), "DIRECTION");
    this.appendDummyInput()
        .appendField("Speed")
        .appendField(new Blockly.FieldDropdown([["Stop", "stop"], ["Medium", "medium"], ["Fast", "fast"]]), "SPEED");
    this.appendDummyInput()
        .appendField("Forward Pin")
        .appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"]]), "PIN1");
    this.appendDummyInput()
        .appendField("Reverse Pin")
        .appendField(new Blockly.FieldDropdown([["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"]]), "PIN2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['tostring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Convert to string");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Number Value");        
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setOutput(true, "String"); // "String");   
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['speaknumber'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speak Number");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Number Value");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nunchukreadbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField ("Nunchuk");    
    this.appendDummyInput()
        .appendField("button")
        .appendField(new Blockly.FieldDropdown([["c", "C"], ["z", "Z"]]), "BUTTON");
    this.appendDummyInput()
        .appendField("Is")
        .appendField(new Blockly.FieldDropdown([["Pressed", "PRESSED"], ["Released", "RELEASED"]]), "ACTION");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nunchukjoystickx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Joystick X Direction");
    this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["Left", "LEFT"], ["Right", "RIGHT"]]), "DIRECTION");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nunchukjoysticky'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Joystick Y Direction");
    this.appendDummyInput()
        .appendField("Direction")
        .appendField(new Blockly.FieldDropdown([["Up", "UP"], ["Down", "DOWN"]]), "DIRECTION");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nunchukjoystickreleased'] = { 
  init: function() {
    this.appendDummyInput()
        .appendField("Joystick Released");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
 
Blockly.Blocks['rf433tx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send Message");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Output Pin");        
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("Message");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rf433rx'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Receive Char");
    this.appendValueInput("PIN")
        .setCheck("Number")
        .appendField("Input Pin");        
    this.setColour(120);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
