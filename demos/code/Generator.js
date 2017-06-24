var includes = "";
var instantiations = "";
var updates = "";
var setupCode = "";
var insetupCode = "";

Blockly.Python['setuploop'] = function(block) {
  includes = "//Includes\n";
  instantiations = "//Instantiations\n";
  updates = "  //Updates\n";
  setupCode = "";
  insetupCode = "";
  
  var code       = "";
  var baudrate  = block.getFieldValue('BAUDRATE');
  var loopCode  = Blockly.Python.statementToCode(block, 'LOOPCODE' );
  
  // Get the associated code for blocks in the setup area
  var setCode = Blockly.Python.statementToCode (block, 'SETUPCODE' );
  /*
  var includes   = "";
  var startIndex = 0;
  var endIndex;
  var bracket1;
  var bracket2;
  var uniqueName;
  var typeName;
  var extraCode = "";
  var setupCode = "";
  // loop through instantiations
  startIndex = 0;
  endIndex = instantiations.indexOf ('\n');

  updates = "";  
  while (endIndex != -1) {0
	   value = instantiations.substring (startIndex,endIndex);
    if (value.indexOf ( '// Timer') > -1) {
      typeName = 'timer';
    } else {
      typeName = getTypeName (value);
    }   
    pins = getPins (value);
    uniqueName = getUniqueName (value);

    if (includes.indexOf (typeName) == -1) { // This is the first time to include 
      if (typeName == "IRPipboy") {
        setupCode = setupCode + "  //Setup code for IRPipboy\n  " + uniqueName + ".init();\n  Timer1.initialize (25);\n  Timer1.attachInterrupt(callback,25);\n"  
        includes = includes + '#include <IR.h>       // additional include for IRPipboy\n#include <TimerOne.h> // necessary? additional include for IRPipboy\n';
        extraCode = "// callback is used by ir receiver.\n" +
		                  "// The setup procedure will call attach to attach to this procedure\n" +
                    "void callback() {\n" + 
                    "  static bool skip = false;\n" + 
                    "  skip = !skip;\n" + 
                    "  if (!skip) {\n" + 
                    "    " + uniqueName + ".callback();\n" + 
                    "  }\n" +
	                   "}\n";
      } 
      if (typeName != 'timer') {        
        includes = includes + '#include <' + typeName + '.h>\n';
      }  
    }    
    //alert ( 'typeName: ' + typeName + ' value: ' + value);
    if (typeName == 'timer') {
      code = code + value.substring ( 2,value.length) + '\n';
    } else {
      updates = updates + "  " + uniqueName + ".update();\n";
     	code = code + typeName + ' ' + uniqueName + ' = ' + typeName + '(' + pins + ');\n';
    }  
	   startIndex = endIndex + 1;
	   endIndex = instantiations.indexOf ( '\n', startIndex);
  }
  
  */
  code = includes + 
         instantiations + 
         setupCode + 
         '\nvoid setup () {\n  Serial.begin (' + baudrate + ');\n  Serial.println (\"Ready\");\n' + insetupCode + setCode + '}\n' +
         '\nvoid loop  () {\n' + loopCode + updates + '}\n';      
  return code;
};

function insetupTheCode (code) { 
  if (insetupCode.indexOf (code) == -1) {
     insetupCode = insetupCode + code + '\n';
  } 
}

function setupTheCode (code) { 
  if (setupCode.indexOf (code) == -1) {
     setupCode = setupCode + code + '\n'; 
  }
}

function instantiateVariable (instantiation) { 
  if (instantiations.indexOf (instantiation) == -1) {
     instantiations = instantiations + instantiation + '\n';
  }
}

function updateVariable (variableUpdate) { 
  if (updates.indexOf (variableUpdate) == -1) {
     updates = updates + '  ' + variableUpdate + '\n';
  }
}

function includeClass (className) { 
  if (includes.indexOf (className) == -1) {
     includes = includes + className + '\n';
  }
}

function getTypeName (value) {
  var bracket1 = findIndex ( value, '|', 1) + 1;
  var bracket2 = findIndex ( value, '|', 2);	
  var typeName = value.substring(bracket1,bracket2);
  return typeName;
}

function getUniqueName (value) {
  var bracket1 = findIndex ( value, '|', 2) + 1;
  var bracket2 = findIndex ( value, '|', 3);	
  var uniqueName = value.substring(bracket1,bracket2);
  var index = uniqueName.indexOf ( "\"");
  if (index != -1) {
	 uniqueName = uniqueName.substring (1,uniqueName.length-1);
  }
  return uniqueName;
}

function getPins (value) {
  var bracket1 = findIndex ( value, '|', 3) + 1;
  var bracket2 = findIndex ( value, '|', 4);	
  var val = value.substring(bracket1,bracket2);
  return val;
}

function findType (value) {
  var startIndex = value.indexOf ( '(' ) + 1;
  var endIndex = value.indexOf ( '|' );
  var library = value.substring ( startIndex,endIndex);
  return library;
}

function insideParen (value) {   
  var startIndex = value.indexOf ( '(' );
  if (startIndex == -1) {
     newValue = value;   
  } else {
    startIndex = startIndex + 1;
    var endIndex = value.indexOf ( ')' );
    var newValue = value.substring (startIndex, endIndex );
    if (newValue.indexOf ( '(' ) > -1) {
      endIndex = value.indexOf ( ')', endIndex + 1);
      newValue = value.substring (startIndex, endIndex );   
    }      
  }
  return newValue;
}

function insideChars (value, char1, char2) {
  var startIndex = value.indexOf (char1) + 1;
  var endIndex = value.indexOf ( char2, startIndex );
  var newValue = value.substring (startIndex, endIndex );
  return newValue;
}

function findIndex ( value, char, which ) {
  var startIndex = -1;
  var index;
  for (i=0; i<which; i++) {
    index = value.indexOf ( char, startIndex + 1);
    startIndex = index;
  }
  return index;
}

Blockly.Python['setcolor'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  var uniqueName = insideChars ( object,"\"","\"");
  var code = uniqueName + '.setColor (' + color + ');\n';
  return code;
};

Blockly.Python['flashcolor'] = function(block) {
  var object = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var color = block.getFieldValue('COLOR');
  var uniqueName = insideChars (object,"\"","\"");
  var code = uniqueName + '.flashColor(' + color + ');\n';
  return code;
};

Blockly.Python['statement'] = function(block) {
  var statementValue = Blockly.Python.valueToCode(block, 'statementValue', Blockly.Python.ORDER_ATOMIC);
  var code = insideChars (statementValue,"\"","\"");
  return code + '\n'; // [statementValue, Blockly.Python.ORDER_NONE];
};

Blockly.Python['infrared'] = function(block) {
  var uniqueName = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var rxPin = Blockly.Python.valueToCode(block, 'rxPin', Blockly.Python.ORDER_ATOMIC);
  var txPin = Blockly.Python.valueToCode(block, 'txPin', Blockly.Python.ORDER_ATOMIC);
  var code = "(|IRPipboy|" + uniqueName + "|" + insideParen(rxPin) + "," + insideParen(txPin) + ",&Timer1|)\n";
  return code;
};

Blockly.Python['fireshot'] = function(block) {
  var val = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var name = 'irTransmit3';
  instantiateVariable ( 'IRPipboy ' + name + '(20,3,&Timer1);\n' );
  includeClass ( '#include <IR.h>' );    
  includeClass ( '#include <IRPipboy.h>' );
  
  insetupTheCode (
    '  ' + name + '.init();\n'
  );
  
  var code =  name + '.createDataSequence(' + val + ');\n' + name + '.fireShot();\n';  
  return code;
};


Blockly.Python['pinselector'] = function(block) {
  var name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['start'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '//Start of blockly generated code!\n';
  return code;
};
Blockly.Python['commentwidget'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);  
  
  var code = '//' + insideChars ( value, "\"", "\"" ) + '\n';
  return code;
};

Blockly.Python.controls_if=function(a){
    var b=0,c="",d,e;
    do e=Blockly.Python.valueToCode(a,"IF"+b,Blockly.Python.ORDER_NONE)||"false",
       d=Blockly.Python.statementToCode(a,"DO"+b)||Blockly.Python.PASS,
       c+=(0==b?"if (":"else if (")+e+"){\n" + d + "}\n",++b;
    while(a.getInput("IF"+b)
     
    );
    a.getInput("ELSE")&&(d=Blockly.Python.statementToCode(a,"ELSE")||Blockly.Python.PASS,c+="else {\n"+d+"}\n");
    return c;
  };
  
Blockly.Python.text_print=function(a){
  var text = Blockly.Python.valueToCode(a,"TEXT",Blockly.Python.ORDER_NONE)||"''";
  if (text.indexOf ( "\"" ) > -1 ) { 
    text = "\"" + insideChars ( text, "\"", "\"") + "\\n\""; // \n necessary for println   
  } else {
    text = text + " + \"\\n\"";   
  }   
  return "Serial.print (" + text + ");\n"
};  

Blockly.Python['loadobjects'] = function(block) {
  var objects = Blockly.Python.statementToCode(block, 'NAME');
  var typeName;
  var uniqueName;
  var pins;
  var code = "";
  // loop through objects
  var startIndex = 0;
  var endIndex = objects.indexOf ('\n');
  var imports = "";
  while (endIndex != -1) {
	   value = objects.substring (startIndex,endIndex-1);
    //alert ( 'value: ' + value);
    typeName = getTypeName (value);
    if (imports.indexOf (typeName) == -1) {
      if (typeName== "IRPipboy") {
        imports = imports + '#include &ltIR.h&gt\n#include &ltTimerOne.h&gt\n';
      } 
      imports = imports + '#include &lt' + typeName + '.h&gt\n';
    }
    uniqueName = getUniqueName (value);    
    pins = getPins (value);
   	code = code + typeName + ' ' + uniqueName + ' = ' + typeName + '(' + pins + ');\n';
	   startIndex = endIndex + 1;
	   endIndex = objects.indexOf ( '\n', startIndex);
  }    
  return imports + code +'\n';
};

Blockly.Python['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_NONE) || '0';
  var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Python['resettimer'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var uniqueName = insideChars (value_name, "\"","\"")
  var code = uniqueName + ' = 0;\n';
  return code;
};

Blockly.Python['timerisactive'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  var uniqueName = insideChars (value_object,"\"","\"");
  var code = '(' + uniqueName + ' > 0 ) && (millis() < ' + uniqueName + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['createfiresequence'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  var firedata = Blockly.Python.valueToCode(block, 'FIREDATA', Blockly.Python.ORDER_ATOMIC);
  var txData = insideChars (firedata,"\"","\"");
  var uniqueName = insideChars (value_object,"\"","\"");
  var code = uniqueName + '.createFireSequence(0x' + txData + ');\n';
  return code;
};

Blockly.Python['writepin'] = function(block) {
  var whichpin = Blockly.Python.valueToCode(block, 'WHICHPIN', Blockly.Python.ORDER_ATOMIC);
  var value = block.getFieldValue('PINVALUE');
  var pin = insideParen(whichpin);
  var code = 'pinMode (' + pin + ',OUTPUT);\ndigitalWrite(' + pin + ',' + value + ');\n';
  return code;
};

Blockly.Python['readpin'] = function(block) {
  var whichpin = Blockly.Python.valueToCode(block, 'WHICHPIN', Blockly.Python.ORDER_ATOMIC);
  var pin = insideParen (whichpin);
  var code = 'digitalRead(' + pin + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['define'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '#define ' + name + ' ' + value + '\n';
  return code;
};

Blockly.Python['definename'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  return [name, Blockly.Python.ORDER_NONE];
};

Blockly.Python['loop'] = function(block) {
  var statements = Blockly.Python.statementToCode(block, 'NAME');
  var code = instantiations + 'void loop() {\n' + statements;
  var value;
  var uniqueName; 
  return code + updates + '}\n';
};

Blockly.Python['settricolor'] = function(block) {
  var color    = block.getFieldValue('COLOR');
  var greenPin = Blockly.Python.valueToCode(block, 'GREENPIN', Blockly.Python.ORDER_ATOMIC);
  var bluePin  = Blockly.Python.valueToCode(block, 'BLUEPIN',  Blockly.Python.ORDER_ATOMIC);
  var redPin   = Blockly.Python.valueToCode(block, 'REDPIN',   Blockly.Python.ORDER_ATOMIC);
  var name = 'led' + greenPin;  
  var code = name + '.setColor (' + color + ');\n';
  instantiateVariable ( 'TriColorLED ' + name + '(' + greenPin + ',' + bluePin + ',' + redPin + '); // (green,blue,red)');
  includeClass ( '#include <TriColorLED.h>' );
  updateVariable ( name + '.update();' );
  return code;
};

Blockly.Python['nextcolor'] = function(block) {
  var greenPin = Blockly.Python.valueToCode(block, 'GREENPIN', Blockly.Python.ORDER_ATOMIC);
  var bluePin  = Blockly.Python.valueToCode(block, 'BLUEPIN',  Blockly.Python.ORDER_ATOMIC);
  var redPin   = Blockly.Python.valueToCode(block, 'REDPIN',   Blockly.Python.ORDER_ATOMIC);
  var name = 'led' + greenPin;
  var code = name + '.nextColor();\n';
  instantiateVariable ( 'TriColorLED ' + name + '(' + greenPin + ',' + bluePin + ',' + redPin + ');');
  includeClass ( '#include <TriColorLED.h>' );
  updateVariable ( name + '.update();' );
  return code;
};

Blockly.Python['currentcolor'] = function(block) {
  var greenPin = Blockly.Python.valueToCode(block, 'GREENPIN', Blockly.Python.ORDER_ATOMIC);
  var name = 'led' + greenPin;
  var code = insideChars (name,"\"","\"") + '.currentColor()';
  updateVariable ( name + '.update();' );
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['isreleased'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var name = 'button' + pin
  var code = name + '.isReleased()';
  instantiateVariable ( 'ButtonPress ' + name + '(' + pin + ');\n' ); 
  includeClass ( '#include <ButtonPress.h>\n' );
  updateVariable ( name + '.update();' );
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ispressed'] = function(block) {
  var pin = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var name = 'button' + pin
  var code = name + '.isPressed()';
  instantiateVariable ( 'ButtonPress ' + name + '(' + pin + ');\n' ); 
  includeClass ( '#include <ButtonPress.h>\n' );
  updateVariable ( name + '.update();' );
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['makesound'] = function(block) {
  var pin   = Blockly.Python.valueToCode(block, 'PIN', Blockly.Python.ORDER_ATOMIC);
  var sound = block.getFieldValue('SOUND');
  
  var name = 'piezo' + pin;
  instantiateVariable ( 'Piezo ' + name + '(' + pin + ');\n' );
  includeClass ( '#include <Piezo.h>\n' );
  updateVariable ( name + '.update();' );
  var code = name + '.' + sound + '();\n';
  return code;
};

Blockly.Python['charpressed'] = function(block) {
  var name = 'chReader';
  var code = name + '.read()';
  instantiateVariable ( 'ChReader ' + name + ';\n' ); 
  includeClass ( '#include <ChReader.h>\n' );
  updateVariable ( name + '.update();' );
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['lineentered'] = function(block) {
  var name = 'chReader';
  var code = name + '.readLine()';
  instantiateVariable ( 'ChReader ' + name + ';\n' ); 
  includeClass ( '#include <ChReader.h>\n' );
  updateVariable ( name + '.update();' );
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['cyclecolors'] = function(block) {
  var greenPin = Blockly.Python.valueToCode(block, 'GREENPIN', Blockly.Python.ORDER_ATOMIC);
  var bluePin  = Blockly.Python.valueToCode(block, 'BLUEPIN',  Blockly.Python.ORDER_ATOMIC);
  var redPin   = Blockly.Python.valueToCode(block, 'REDPIN',   Blockly.Python.ORDER_ATOMIC);
  var timeoutValue  = Blockly.Python.valueToCode(block, 'TIMEOUT',  Blockly.Python.ORDER_ATOMIC);
  var name = 'led' + greenPin;  
  var code = name + '.cycleColors(' + timeoutValue + ');\n';
  instantiateVariable ( 'TriColorLED ' + name + '(' + greenPin + ',' + bluePin + ',' + redPin + ');');
  includeClass ( '#include <TriColorLED.h>' );
  updateVariable ( name + '.update();' );
  return code;
};

Blockly.Python['stopcyclecolors'] = function(block) {
  var greenPin = Blockly.Python.valueToCode(block, 'GREENPIN', Blockly.Python.ORDER_ATOMIC);
  var name = 'led' + greenPin;  
  var code = name + '.cycleColors(-1);\n';
  return code;
};


Blockly.Python['timer'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME',   Blockly.Python.ORDER_ATOMIC);
  var timeout    = Blockly.Python.valueToCode(block, 'TIMEOUT',Blockly.Python.ORDER_ATOMIC);
  var uniqueName = insideChars (value_name,"\"","\"");
  var code = 'Timer ' + uniqueName + '(' + timeout + '); // Timer\n';
  instantiateVariable ( code );
  includeClass ( '#include <Timer.h>' );
  return code;
};

Blockly.Python['timerexpired'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var name = insideChars (value_name,"\"","\"");
  includeClass ( '#include <Timer.h>' );
  var code = name + '.expired()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['starttimer'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME',    Blockly.Python.ORDER_ATOMIC);
  var timeout    = Blockly.Python.valueToCode(block, 'TIMEOUT', Blockly.Python.ORDER_ATOMIC);
  var name = insideChars (value_name,"\"","\"");
  instantiateVariable ( 'Timer ' + name + '('+ timeout + ');\n' ); 
  includeClass ( '#include <Timer.h>' );
  var code = name + '.start(); // Timer\n';
  return code;
};

Blockly.Python['wait'] = function(block) {
  var timeout    = Blockly.Python.valueToCode(block, 'TIMEOUT', Blockly.Python.ORDER_ATOMIC);
  var code = 'delay (' + timeout + ');\n';
  return code;
};

Blockly.Python['displayclear'] = function(block) {
  var dataPin = Blockly.Python.valueToCode(block, 'DATAPIN', Blockly.Python.ORDER_ATOMIC);
  var name    = 'display' + dataPin; 
  instantiateVariable ( 'DisplaySerial ' + name + '(20,'+ dataPin + ');\n' ); 
  includeClass ( '#include <SoftwareSerial.h>' );    
  includeClass ( '#include <DisplaySerial.h>' );    
  var code = name + '.clearScreen();\n';
  return code;
};

Blockly.Python['displaywrite'] = function(block) {
  var dataPin = Blockly.Python.valueToCode(block, 'DATAPIN', Blockly.Python.ORDER_ATOMIC);
  var name    = 'display' + dataPin; 
  var text    = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  instantiateVariable ( 'DisplaySerial ' + name + '(20,'+ dataPin + ');\n' ); 
  includeClass ( '#include <SoftwareSerial.h>' );    
  includeClass ( '#include <DisplaySerial.h>' );    
  var code = name + '.printString(' + text + ');\n';
  return code;
};

Blockly.Python['motormove'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');
  var speed     = block.getFieldValue('SPEED');
  var pin1      = block.getFieldValue('PIN1');
  var pin2      = block.getFieldValue('PIN2');
  var name      = 'motor' + pin1 + pin2;
  
  instantiateVariable ( 'SingleMotor ' + name + '(' + pin1 + ',' + pin2 + ');\n' );
  includeClass ( '#include <MotorControl.h>\n' );
  var code = name + '.motorMove(\"' + direction + '\",\"' + speed + '\");\n';
  return code;
};

Blockly.Python['irdetected'] = function(block) {
  var rcvPin = Blockly.Python.valueToCode(block, 'RCVPIN', Blockly.Python.ORDER_ATOMIC);
  var name = 'irReceive' + rcvPin;
  instantiateVariable ( 'IRPipboy ' + name + '(' + rcvPin + ',20,&Timer1);\n' );
  includeClass ( '#include <IR.h>' );    
  includeClass ( '#include <IRPipboy.h>' );
  includeClass ( '#include <TimerOne.h>' );
  
  insetupTheCode (
    '  ' + name + '.init();\n' +  
    '  Timer1.initialize (25);\n' + 
    '  Timer1.attachInterrupt(callback,25);\n' 
  );
  
  setupTheCode ( 
    'void callback() // Timer1 is set to 25 microsecond to balance PWM output\n' + 
    '{\n' + 
    '  static bool skip = false;\n' + 
    '  skip = !skip;\n' + 
    '  if (!skip)\n' + 
    '    ' + name + '.callback();\n' + 
    '}' 
  );
  
  var code =  name + '.irValue()'
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['tostring'] = function (block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);  
  var code  = "toString (" + value + ")"; 
  setupTheCode ( 
    'String toString(float value) // Convert a number to a string\n' + 
    '{\n' + 
    '  String val = String (value);\n' + 
    '  return val;\n' + 
    '}' 
  );  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python ['talkie'] = function (block) {
   var word = block.getFieldValue('WORD');
   if (word == "HELLO") { 
     instantiateVariable ("const uint8_t spHELLO[] PROGMEM ={0x00,0xC0,0x80,0x60,0x59,0x08,0x10,0x3D,0xB7,0x00,0x62,0x64,0x3D,0x55,0x4A,0x9E,0x66,0xDA,0xF6,0x56,0xB7,0x3A,0x55,0x76,0xDA,0xED,0x92,0x75,0x57,0xA3,0x88,0xA8,0xAB,0x02,0xB2,0xF4,0xAC,0x67,0x23,0x73,0xC6,0x2F,0x0C,0xF3,0xED,0x62,0xD7,0xAD,0x13,0xA5,0x46,0x8C,0x57,0xD7,0x21,0x0C,0x22,0x4F,0x93,0x4B,0x27,0x37,0xF0,0x51,0x69,0x98,0x9D,0xD4,0xC8,0xFB,0xB8,0x98,0xB9,0x56,0x23,0x2F,0x93,0xAA,0xE2,0x46,0x8C,0x52,0x57,0x66,0x2B,0x8C,0x07};\n" );   
   } else if (word == "GOODBYE") {
     instantiateVariable ("const uint8_t spGOODBYE[] PROGMEM ={0xA9,0x49,0xE1,0x54,0x91,0x2D,0xAF,0x22,0x07,0x55,0x29,0x69,0x7B,0xF2,0x18,0x38,0x32,0x3C,0xCB,0x4D,0x52,0xC8,0x4A,0x5A,0x65,0x99,0x52,0x21,0x6A,0x61,0x69,0x2E,0x45,0x46,0x2C,0x43,0xA9,0x3C,0x3D,0x1C,0x87,0x2A,0x3A,0xFB,0x50,0x6E,0x73,0xEB,0xDB,0xEC,0x6E,0x77,0xA3,0xF7,0xD1,0x4E,0x35,0xA2,0xCC,0x7E,0x74,0x3E,0xC6,0xA8,0x79,0x85,0xD1,0x86,0x64,0x65,0x16,0x95,0x5B,0x13,0x52,0xB0,0x65,0x94,0x2E,0xB5,0x4D,0x6A,0x55,0x65,0xF8,0x01,0x00,0x00};\n" );
   } else if (word == "A") {
     instantiateVariable ("const uint8_t spA[] PROGMEM ={ 0xA7,0x8A,0xCE,0x25,0xA7,0x2A,0xDD,0x62,0xE7,0x3B,0xBF,0xF9,0xAD,0x56,0xD5,0x72,0xA0,0x44,0x7D,0x99,0x4D,0xED,0xFC,0xE0,0x87,0x07,0x00,0x00};\n" );
   } else if (word == "ABOUT") {
     instantiateVariable ("const uint8_t spABOUT[] PROGMEM ={0xA1,0x08,0x2E,0xCF,0x4A,0xDB,0xF7,0x62,0x54,0xC9,0xC6,0xB9,0xC9,0xDA,0x56,0x45,0xE3,0x1B,0xCE,0x5D,0x55,0x2D,0x43,0x06,0xAA,0xA7,0x86,0x51,0x05,0x95,0xED,0x26,0xBB,0x57,0xE5,0x6D,0xB5,0xAB,0xBD,0xDE,0xD5,0xAE,0x4E,0xE5,0xFD,0xB4,0x69,0xD4,0x9D,0x55,0xAF,0x4A,0x6D,0xC2,0x8E,0x48,0xD4,0x75,0xB5,0x35,0xF3,0xAC,0x36,0x47,0xD4,0xA2,0xB7,0x4B,0x87,0x65,0x00,0x00,0x02,0x64,0xED,0x81,0x80,0xA3,0xDD,0x10,0xE0,0x4D,0x18,0xC0,0x03};\n" );    
   } else if (word == "AFTER") {
     instantiateVariable ("const uint8_t spAFTER[] PROGMEM ={0x25,0x8B,0x23,0xC3,0xA1,0xC3,0x9C,0x2C,0xF6,0x32,0xE7,0xAA,0x7A,0xB3,0x9B,0xDF,0xE2,0x56,0xB5,0x31,0x80,0x15,0xC6,0x1A,0xD0,0x00,0x80,0x01,0x8A,0x32,0x4F,0x85,0x5F,0xEC,0x96,0x9A,0xBD,0xD7,0xB5,0xCB,0x83,0x1B,0xEC,0xA0,0x88,0x8C,0x74,0x62,0xB4,0x03,0xAA,0x2C,0x12,0xB3,0xC9,0x76,0xD6,0xCC,0x70,0xF2};\n" );
   } else if (word == "AGAIN") {
     instantiateVariable ("const uint8_t spAGAIN[] PROGMEM ={0x08,0xD0,0xD1,0xBD,0x55,0xAE,0xA7,0x73,0x54,0xAD,0x53,0xC5,0x18,0xE1,0xA2,0x4B,0x4F,0x9D,0x42,0xA8,0x89,0x76,0x6D,0xB5,0xB7,0x22,0x21,0xE9,0xAD,0x36,0xB3,0x1D,0x4D,0xB1,0x22,0xAE,0x97,0xA4,0xE7,0x23,0x2B,0x89,0x5D,0x63,0x92,0xEC,0x6C,0xA7,0x23,0x2D,0xD5,0x42,0x74,0x14,0xCF,0x6C,0xE4,0xA9,0x45,0x08,0x8D,0xE3,0x5D,0xEF,0x66,0xB4,0xB1,0x67,0xB2,0x66,0xE2,0xD9,0x8F,0x3E,0x8C,0x08,0xF2,0x8C,0x1B,0x06,0xE9,0xA5,0xCC,0x46,0xB6,0x1F,0xEC,0x20,0x07,0x34,0xD0,0x10,0x99,0xDA,0x92,0x1E,0x00,0x00};\n" );  
   } else if (word == "ALL") {
     instantiateVariable ("const uint8_t spALL[] PROGMEM ={0x29,0xB1,0xE6,0x57,0xB9,0xE6,0xD4,0xB4,0xA7,0x23,0x35,0xEE,0xD6,0xD8,0x9B,0xCE,0x74,0x66,0xB3,0x9A,0xD5,0xAC,0x4B,0x23,0xEB,0x8C,0x62,0x3B,0xA9,0x5D,0xE8,0xC4,0xDA,0x56,0x28,0x65,0xBE,0xD7,0xBD,0xEC,0x1F};\n" );
   } else if (word == "AM") {
     instantiateVariable ("const uint8_t spAM[] PROGMEM ={0xA3,0x28,0x4D,0xDD,0x64,0x15,0x9D,0xA2,0x34,0x0B,0xD5,0x4A,0x74,0xAA,0x3C,0x2D,0x44,0x2A,0xD5,0xAD,0x6E,0x75,0xAA,0xD4,0xB5,0x59,0x33,0xCE,0xAD,0x4F,0x1D,0x6B,0x94,0x9A,0x57,0xD9,0xED,0x68,0x6D,0xA9,0x56,0xC9,0xD8,0xAD,0x35,0x8E,0x4B,0xC5,0x54,0xFB,0xCE,0x77,0xA6,0xD3,0x8E,0x4A,0xC3,0xDD,0x98,0x4E,0x7A,0x49,0xE5,0x76,0xEA,0x3B,0xDD,0x3F,0x00,0x00};\n" );    
   }
   includeClass ("#include \"talkie.h\""); 
   instantiateVariable ("Talkie voice;\n" );   
   
   var code = "voice.say(sp" + word + ");\n"
   return code;
};