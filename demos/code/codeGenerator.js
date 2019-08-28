var includes = "";
var instantiations = [];
var updates = "";
var setupCode = "";
var insetupCode = "";

// Utility javascript functions
function millis() {
    var code =
       'function millis() {\n' + 
       '   var d = new Date();\n' + 
       '   return d.getTime();\n' +    
       '}\n';
    return code;
}
function changeLocation() {
    var code = 
       'function changeLocation (location, xOffset, yOffset,zOffset) {\n' + 
       '   var x = parseInt (location.x) + xOffset;\n' + 
       '   var y = parseInt (location.y) + yOffset;\n' + 
       '   var z = parseInt (location.z) + zOffset;\n' + 
       '   var location = new org.bukkit.Location(server.worlds[0],x,y,z);\n' + 
       '   return location;\n' + 
       '}\n';
    return code;
}

function changeBlock() {
   var code = 
              'function changeBlock (location, xOffset,yOffset,zOffset, material, repeat) {\n' + 
              '  var x,y,z,block;\n' + 
              '  for (var i=0; i<repeat; i++) {\n' + 
              '     x = parseInt (location.x) + xOffset;\n' + 
              '     y = parseInt (location.y) + yOffset;\n' + 
              '     z = parseInt (location.z) + zOffset;\n' + 
              '     location = new org.bukkit.Location(server.worlds[0],x,y,z);\n' + 
              '     block = server.worlds[0].getBlockAt (location);\n' + 
              '     block.setType (material);\n' +         
              '  }\n' + 
              '  return location;\n' +  
              '}\n';  
   return code;
} 

function circleBlock() {
   var code = 
             'function circleBlock (location, radius, material) {\n' + 
             '  var count = 0;\n' + 
             '  for (var i=0; i<radius; i++) {\n' + 
             '     count = count + 1;\n' + 
             '     location = changeBlock (location, 1,0,0,material,count);\n' + 
             '     location = changeBlock (location, 0,0,1,material,count);\n' + 
             '     count = count + 1;\n' + 
             '     location = changeBlock (location, -1,0,0,material,count);\n' + 
             '     location = changeBlock (location, 0,0,-1,material,count);\n' + 
             '  }\n' + 
             '  location = changeBlock (location, 1,0,0,material,count);\n' + 
             '  return location;\n' +  
             '}\n';               
   return code; 
} 

function findGround() {
  var code = 
     'function findGround (location) {\n' + 
     '   var x = parseInt (location.x);\n' +
     '   var y = parseInt (location.y);\n' +
     '   var z = parseInt (location.z);\n' +
     '   var block;\n' +
     '   for (var i=0; i<20; i++) { \n' +       
     '      location = new org.bukkit.Location(server.worlds[0],x,y+i,z);  \n' + 
     '      block = server.worlds[0].getBlockAt (location);\n' +
     '      if (block.type != org.bukkit.Material.AIR) {\n' +
     '          break;\n' +
     '      } \n' +
     '      if (y - i > 0) { \n' +
     '         location = new org.bukkit.Location(server.worlds[0],x,y-i,z); \n' +  
     '         block = server.worlds[0].getBlockAt (location);\n' +
     '         if (block.type != org.bukkit.Material.AIR) {\n' +
     '             break;\n' +
     '         } \n' +
     '      } \n' +                
     '   }\n' +
     '   console.log ( \'Ground located at: \' + location );\n' +
     '   return location;\n' +
     '}  \n';
  return code;
} 


// Helper functions, used by echo and sendMessage
function extractStr (value) {
  var returnValue = value;
  var debugIt = false;
  // alert ( 'extractStr starting with : ' + value );
  if (value.length > 1) { 
     var startChar = value.substring (0,1);
     var endChar = value.substring (value.length -1) 
     // Example: extractStr ("Hello")
     if ((startChar == "\"") && (endChar == "\"")) {
        returnValue = value; // insideChars (value, "\"", "\"");
        if (debugIt) {
           alert ( "start:endChar = \"\", returnValue: " + returnValue );
        }
     // Example: ? 
     } else if ((startChar == "(") && (endChar == ")")) {
        returnValue = value.substring (1,value.length-1);
        if (debugIt) { 
           alert ( 'extract Str, (): ' + value + ', returnValue: ' + returnValue );
        }
     } else { 
        if (insideChars (value, "\"", "\"") == "" ) {
           if (debugIt) {           
              alert ( 'extractStr \"\"== null string, [value,startChar,endChar]: [' + value + ',' + startChar + ',' + endChar + ']' );
           }   
           returnValue = value;
        } else {
           if (debugIt) {         
              alert ( 'extractStr \"\": [value,startChar,endChar]: [' + value + ',' + startChar + ',' + endChar + ']' );
           }
           returnValue = insideChars ( value, "\"", "\"" );
        }
     }
  } else {
     alert ( 'ERR extractStr, value.length ==' + value.length );
  }
  return returnValue;
} 


function inSetupCode (code) { 
  if (insetupCode.indexOf (code) == -1) {
     insetupCode = insetupCode + code + '\n';
  } 
}

function setupTheCode (code) { 
  if (setupCode.indexOf (code) == -1) {
     setupCode = setupCode + code + '\n'; 
  }
}

function instantiateVariable (variableName) {
  var found = false;
  for (var i=0; i<instantiations.length; i++) {
     if (instantiations[i] == variableName) { 
        found = true;
        break;
     } 
  } 
  if (!found) {
     instantiations.push (variableName);
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
  if (value == undefined) { 
     return "";
  } else if (value == null) {
     return "";
  } else {      
     var startIndex = value.indexOf ( '(' );
     var endIndex = value.length;  
     var count = 0;
     var newValue = "";
     var ch;
     if (startIndex == -1) {
        newValue = value;   
     } else {
       endIndex = startIndex + 1;
       count = 1;
       while (endIndex < value.length-1) {
         if (endIndex == (value.length -1)) {
           ch = value.substring (endIndex); 
         } else {        
           ch = value.substring (endIndex, endIndex + 1);    
         }        
         if (value.substring (endIndex,endIndex+1) == ")") {
             count = count - 1;
            if (count == 0) {
               break;
            } 
         } else if (value.substring( endIndex, endIndex + 1) == "(") {
            count = count + 1;
         } 
         endIndex = endIndex + 1;
       } 
       startIndex = startIndex + 1;
       newValue = value.substring (startIndex, endIndex );
     }
     //alert ( 'insideParen oldvalue: ' + value + ' newValue: ' + newValue );
     return newValue;
  }
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
  var color = block.getFieldValue('COLOR');
  var code = 'led.setColor(' + color + ',1000);\n';
  return code;
};

Blockly.Python['statement'] = function(block) {
  var statementValue = Blockly.Python.valueToCode(block, 'statementValue', Blockly.Python.ORDER_ATOMIC);
  var code = insideChars (statementValue,"\"","\"");
  return code + '\n'; // [statementValue, Blockly.Python.ORDER_NONE];
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

Blockly.Python['echowidget'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);  
  
  var code = 'echo (\"' + insideChars ( value, "\"", "\"" ) + '\");\n';
  return code;
};

Blockly.Python.controls_if=function(a){
    var b=0,c="",d,e;
    while (true) {
       //do 
       e=Blockly.Python.valueToCode(a,"IF"+b,Blockly.Python.ORDER_NONE)||"false";
       if ((e[0] == "\"") && (e[e.length-1] == "\"")) {  
         e = e.substring (1,e.length-1);
       } 
       d=Blockly.Python.statementToCode(a,"DO"+b)||Blockly.Python.PASS;
       c+=(0==b?"if (":"else if (")+e+"){\n" + d + "}\n",++b;
       if (!a.getInput("IF"+b)) {
          break;
       }
    }
     
    // );
    a.getInput("ELSE")&&(d=Blockly.Python.statementToCode(a,"ELSE")||Blockly.Python.PASS,c+="else {\n"+d+"}\n");
    return c;
  };
  
Blockly.Python.text_print=function(a) {
  var text = Blockly.Python.valueToCode(a,"TEXT",Blockly.Python.ORDER_NONE)||"''";
  if (text.indexOf ( "\"" ) > -1 ) {
    text = "\"" + insideChars ( text, "\"", "\"") + "\""; // \n necessary for println
  } else {
    text = text;
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

Blockly.Python['createfirepulse'] = function(block) {
  var value1 = Blockly.Python.valueToCode(block, 'VALUE1', Blockly.Python.ORDER_ATOMIC);
  var value2 = Blockly.Python.valueToCode(block, 'VALUE2', Blockly.Python.ORDER_ATOMIC);
  var value3 = Blockly.Python.valueToCode(block, 'VALUE3', Blockly.Python.ORDER_ATOMIC);
  var value4 = Blockly.Python.valueToCode(block, 'VALUE4', Blockly.Python.ORDER_ATOMIC);
  var txData;
  value1 = insideChars (value1,"(",")");
  value2 = insideChars (value2,"(",")");
  value3 = insideChars (value3,"(",")");
  value4 = insideChars (value4,"(",")");
  var code = 'irTx.createFirePulse(' + value1 + '),' + value2 + '),' +
                                       value3 + '),' + value4 + '));\n';
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

Blockly.JavaScript ['setuploop'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = '//Start of blockly generated code!\n';
  return code;
};

Blockly.JavaScript ['scriptcraftfunction'] = function (block) {
  instantiations = [];
  var functionName = block.getFieldValue ('nameOfFunction'); // Blockly.Python.valueToCode(block, 'nameOfFunction', Blockly.Python.ORDER_ATOMIC);
  var params = "()";
  var ind;
  if (functionName.indexOf ( '(') > -1) { 
     ind = functionName.indexOf ( '(' );
     params = functionName.substring (ind);
     functionName = functionName.substring (0,ind);
  } 
  var functionCode = Blockly.Python.statementToCode (block, 'FUNCTIONCODE' );  
  var code = 'exports.' + functionName + ' = function ' + params + ' {\n';
  var first = true;
  for (var i=0; i<instantiations.length; i++ ) {
     if (params.indexOf ( instantiations[i] ) == -1) { // not in the parameter list
        if (first) {
           code = code + "  //Instantiations;\n"; 
           first = false;
        } 
        code = code + "  var " + instantiations[i] + ";\n"; 
     } 
  }   
  code = code +   
         functionCode +
         '};\n';
  return code;
};

// self.location.world.spawnEntity(self.location,org.bukkit.entity.EntityType.PIG);
Blockly.Python['spawn'] = function(block) {
  var entity = block.getFieldValue ("ENTITY");
  var count = Blockly.Python.valueToCode(block, 'COUNT', Blockly.Python.ORDER_ATOMIC);
  var code = '// Spawn ' + entity + '\n';
  if ((count == "") || (parseInt(count) <= 1 )) { 
    code = code + 'self.world.spawnEntity(self.location,org.bukkit.entity.EntityType.' + entity + ');\n';     
  } else {
    count = parseInt (count);
    if (count > 100) {
       count = 100;
    } 
    code = code + 'for (var i=0; i<' + count + '; i++) {\n'; 
    code = code + '  self.world.spawnEntity(self.location,org.bukkit.entity.EntityType.' + entity + ');\n';     
    code = code + '}\n';
  } 
  // 'org.bukkit.entity.getEquipment().setHelmet(new org.bukkit.inventory.ItemStack(gobjBukkit.Material.CHAINMAIL_HELMET));';            
  return code;
};

/*
    /js castle()
				/js chessboard()
				/js cottage()
				/js cottage_road()
				/js dancefloor()
				/js fort()
				/js rainbow()
				/js temple()
*/
Blockly.Python['structures'] = function(block) {
  var structure = block.getFieldValue ("STRUCTURE");
  var code;
  if (structure == "farm") {
     code =        
        changeBlock() + 
        'location = changeBlock (self.location,0,-1,0,org.bukkit.Material.COMPOSTER,1);\n' + 
        'location = changeBlock (location,0,0,1,org.bukkit.Material.FARMLAND,6);\n' + 
        'location = changeBlock (location,-2,0,1,org.bukkit.Material.FARMLAND,1);\n' + 
        'location = changeBlock (location,0,0,-1,org.bukkit.Material.FARMLAND,6);\n' + 
        'location = changeBlock (location,1,0,0,org.bukkit.Material.WHEAT,1);\n' + 
        'location = changeBlock (location,0,0,1,org.bukkit.Material.WATER,6);\n' + 
        'location = changeBlock (location,-5,1,0,org.bukkit.Material.OAK_FENCE,1);\n' + 
        'location = changeBlock (location,0,0,-1,org.bukkit.Material.OAK_FENCE,10);\n' + 
        'location = changeBlock (location,1,0,0,org.bukkit.Material.OAK_FENCE,8);\n' + 
        'location = changeBlock (location,0,0,1,org.bukkit.Material.OAK_FENCE,12);\n' + 
        'location = changeBlock (location,-1,0,0,org.bukkit.Material.OAK_FENCE,4);\n' + 
        'location = changeBlock (location,-1,0,0,org.bukkit.Material.OAK_FENCE_GATE,1);\n' + 
        'location = changeBlock (location,-1,0,0,org.bukkit.Material.OAK_FENCE,3);\n' + 
        'location = changeBlock (location,0,0,-1,org.bukkit.Material.OAK_FENCE,3);\n' + 
        'var entity = server.worlds[0].spawnEntity(self.location, org.bukkit.entity.EntityType.VILLAGER);\n' + 
        'newItems = require(\'items\').wheatSeeds(16);\n' + 
        'entity.inventory.addItem(newItems);\n' + 
        'entity.setProfession (org.bukkit.entity.Villager.Profession.FARMER);\n';      
  } else {
     code = '// Spawn ' + structure + '\n' + 
             structure.toLowerCase() + '();\n' 
  }
  return code;
};

Blockly.Python['createdrone'] = function(block) {
  var code = 'drone = new Drone(self); // create a drone\n'; 
  //  myDrone.box(blocks.slime, 4, 1 ,4); 
  return code;
};

Blockly.Python['buildbox'] = function(block) {
  var blockType = block.getFieldValue ("BLOCKTYPE");
  var len = Blockly.Python.valueToCode(block, 'LENGTH', Blockly.Python.ORDER_ATOMIC); 
  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_ATOMIC); 
  var height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_ATOMIC); 
  
  var code = '//Build a box out of ' + blockType + '\n' +   
             'drone.box(blocks.' + blockType + ', ' + len + ', ' + height + ', ' +  width + '); // length, height, width\n'; 
  return code;
};

Blockly.Python['changeBlock'] = function(block) {
  var b         = Blockly.Python.valueToCode(block, 'BLOCK',       Blockly.Python.ORDER_ATOMIC); 
  b = insideParen(b);
  var blockType = Blockly.Python.valueToCode(block, 'TYPEOFBLOCK', Blockly.Python.ORDER_ATOMIC);
  blockType = insideParen (blockType);
  var code = b + ".setType(org.bukkit.Material." + blockType + ");\n";
  return code;
};

Blockly.Python['sign'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);  
  var line1 = Blockly.Python.valueToCode(block, 'LINE1', Blockly.Python.ORDER_ATOMIC); 
  var line2 = Blockly.Python.valueToCode(block, 'LINE2', Blockly.Python.ORDER_ATOMIC); 
  if (line1 == "" ) { 
     line1 = "\"\"";
  } 
  if (line2 == "" ) { 
     line2 = "\"\"";
  }
  var code = "drone = new Drone(self); // create a drone\n" +
             "var line1 = " + line1 + "\n" + 
             "var line2 = " + line2 + "\n" + 
             "drone.signpost([line1,line2]);\n";  
  return code;
};
Blockly.Python['wallsign'] = function(block) {
  var line1 = Blockly.Python.valueToCode(block, 'LINE1', Blockly.Python.ORDER_ATOMIC); 
  var line2 = Blockly.Python.valueToCode(block, 'LINE2', Blockly.Python.ORDER_ATOMIC); 
  if (line1 == "" ) { 
     line1 = "\"\"";
  } 
  if (line2 == "" ) { 
     line2 = "\"\"";
  }
  var code = "drone = new Drone(self); // create a drone\n" +
             "var line1 = " + line1 + "\n" + 
             "var line2 = " + line2 + "\n" + 
             "drone.sign([line1,line2], blocks.sign);\n";  
  return code;
};

Blockly.Python['additem'] = function(block) {
  var count =  Blockly.Python.valueToCode(block, 'COUNT', Blockly.Python.ORDER_ATOMIC);
  var itemType = block.getFieldValue ("ITEMTYPE");
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  instantiateVariable ( 'player' );
  instantiateVariable ( 'newItems' );
  if (count == "") {
     count = 1;
  } else {
     count = parseInt (count);
     if (count > 200) {
         count = 200;
     } 
  }    
  var code = "newItems = require('items')." + itemType + "(" + count + ");\n" +  
             "player = " + player + ";\n" +              
             "player.inventory.addItem(newItems);\n" 
  return code;
};

Blockly.Python['consolelog'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ADDITIVE);  
  value = extractStr (value);
  var code = 'console.log (' + value + ');\n';
  return code;
};

Blockly.Python['eventlistener'] = function(block) {
  var listenerType = block.getFieldValue ('LISTENERTYPE');
  var functionCode = Blockly.Python.statementToCode (block, 'LISTENERCODE' );  
  var code = 'events.' + listenerType + '( function (event) { \n' + 
             functionCode + 
             '});\n';
  return code;
};

Blockly.Python['explosion'] = function(block) {
  var size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC);    
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);    
  location = insideParen (location);
  var code = "// create explosion of size: " + size + ";\n" + 
             "event.entity.world.createExplosion (" + location + "," + size + ");\n";
  
  return code;
};

Blockly.Python['evententitylocation'] = function(block) {
  return ['event.entity.location', Blockly.Python.ORDER_NONE];
};

Blockly.Python['evententityshooter'] = function(block) {
  return ['event.entity.shooter', Blockly.Python.ORDER_NONE];
};

Blockly.Python['eventplayer'] = function(block) {
  var player = block.getFieldValue ('PLAYER');
  return [player, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sendmessage'] = function(block) {
  var message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  // alert ( 'sendmessage Got message: ' + message );
  message = extractStr (message);
  // alert ( 'sendmessage extracted message to: [' + message + ']' );
  // message = insideChars ( message, "\"", "\"" );
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code;
  // note: Don't add \" to the message because it might be a variable value.
  if (player == "event.getAffectedEntities") {
     code = "var entities = event.getAffectedEntities();\n" + 
            "for (var i=0; i<entities.length; i++) {\n" + 
            "  entities[i].sendMessage (" + message + ");\n" + 
            "}\n";
  } else {
     code = player + '.sendMessage (' + message + ');\n';
  }
  return code;
};

Blockly.Python['armorset'] = function(block) {
  var color = block.getFieldValue ('COLOR');
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (player == "") {
     player = 'self';
  } else {
     player = insideParen (player );
  } 
  var code = 
     "var color = org.bukkit.Color." + color + "\n" +
     "var player = " + player + ";\n" + 
     "var items = require ('items');\n" + 
     "var helmet = items.leatherHelmet(1);\n" + 
     "var helmetMeta = helmet.itemMeta;\n" + 
     "helmetMeta.color = color;\n" + 
     "helmet.itemMeta = helmetMeta;\n" + 
     "player.equipment.helmet = helmet;\n" + 
     "var boots = items.leatherBoots(1);\n" + 
     "var bootsMeta = boots.itemMeta;\n" + 
     "bootsMeta.color = color;\n" + 
     "boots.itemMeta = bootsMeta;\n" + 
     "player.equipment.boots = boots;\n" + 
     "var chest = items.leatherChestplate(1);\n" + 
     "var chestMeta = chest.itemMeta;\n" + 
     "chestMeta.color = color;\n" + 
     "chest.itemMeta = chestMeta;\n" + 
     "player.equipment.chestplate = chest;\n" +
     "var legs = items.leatherLeggings(1);\n" + 
     "var legsMeta = legs.itemMeta;\n" + 
     "legsMeta.color = color;\n" + 
     "legs.itemMeta = legsMeta;\n" + 
     "player.equipment.leggings = legs;\n";  
  return code;
};

Blockly.Python['repairarmor'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (player == "") {
     player = 'self';
  } else {
     player = insideParen (player );
  } 
  var code = 
     "var player = " + player + ";\n" + 
     "player.equipment.helmet.durability = 0;\n" + 
     "player.equipment.chestplate.durability = 0;\n" + 
     "player.equipment.leggings.durability = 0;\n" + 
     "player.equipment.boots.durability = 0; \n"; 
  return code;
};



Blockly.Python['placebanner'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  location = insideParen(location);
  var banner = block.getFieldValue ('BANNER');
  var world = "event.entity.world";
  if (location == "self.location") { 
     world = "self.world";
  } 
  
  var code = "server.worlds[0].getBlockAt(" + location + ").type = org.bukkit.Material." + banner + ";\n";
  return code;
};


Blockly.Python['playerlocation'] = function(block) {
  return ['self.location', Blockly.Python.ORDER_NONE];
};

Blockly.Python['teleport'] = function(block) {
   
  instantiateVariable ('location' );
  instantiateVariable ('entity' );
  instantiateVariable ('TeleportCause');
  
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen (entity);
  var code ="";
  
  if (entity != "entity") {
     code = code + "entity = " + entity + ";\n";
  } 
  
  code = 	code + 
          "location = " + location + ";\n" + 
          "TeleportCause  = org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN;\n" + 
          "// Add a delay for teleport event\n"  + 
          "function teleportLater()  {\n" +  
          "  entity.teleport( location, TeleportCause);\n" + 
          "}\n" +  
          "setTimeout (teleportLater,1000);\n";               
  
  return code;
}

Blockly.Python['sound'] = function(block) {
  var animal = block.getFieldValue ('ANIMAL');
  var code = 	"require('sounds').play(org.bukkit.Sound.ENTITY_" + animal + "_AMBIENT,self.location);\n";	  
  return code;
}

Blockly.Python['fireworks'] = function(block) {
  var code = "var fireworks = require ('fireworks');\n";
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  code = code + 'fireworks.firework (' + location + ');\n'; 
  //var animal = block.getFieldValue ('ANIMAL');
  //var code = 	"require('sounds').play(org.bukkit.Sound.ENTITY_" + animal + "_AMBIENT,self.location);\n";	  
  return code;
}

Blockly.Python['eventcancel'] = function(block) {
  var code = "event.cancelled = true;\n";
  return code;
}

Blockly.Python['teamflag'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  location = insideParen(location);
  var color = block.getFieldValue ('COLOR');
  
  var code = changeBlock() + 
             circleBlock() + 
             changeLocation() + 
             findGround() + 
             'var material = org.bukkit.Material.' + color + '_TERRACOTTA;\n' + 
             'var location = findGround (' + location + ');\n' + 
             'location = changeBlock (location, 0, 1, 0, org.bukkit.Material.' + color + '_BANNER, 1);\n' + 
             'location = changeLocation (location, 0,-1,0);\n' + 
             'location = circleBlock (location, 4, material);\n';         
  return code;
};

Blockly.Python['spawnarea'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var code = 	"server.worlds[0].setSpawnLocation(" + location + ");\n";
  
  return code;
}

Blockly.Python['ability'] = function(block) {
  var ability = block.getFieldValue ('ABILITY');
  var player = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  
  var code = "// Give the player an ability\n";
  var duration = Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC); 
  
  instantiateVariable ('player' );
  code = code + 'player = ' + player + ';\n';
  if (ability == "FLY" ) { 
     code = code + "player.allowFlight = true; // Player can fly\n"; 
  } else if (ability == "SPEED") {
     code = code + "player.walkSpeed = 1.0; // Super speed\n"; 
  } else if (ability == "INVULNERABLE") {
     code = code + "player.invulnerable = true;\n" 
  }
   
  code = code + "function stopAbility() {\n"; 
  if (ability == "FLY" ) { 
     code = code + "  player.allowFlight = false;\n"; 
  } else if (ability == "SPEED") {
     code = code + "  player.walkSpeed = 0.2; // Normal speed\n"; 
  } else if (ability == "INVULNERABLE") {
     code = code + "  player.invulnerable = false;\n"; 
  } 
  code = code + "}\n";
  code = code + "setTimeout (stopAbility, " + duration + "000);\n" 
   
  return code;
};

Blockly.Python['abilityactive'] = function(block) {
  var ability = block.getFieldValue ('ABILITY');
  var player = block.getFieldValue ('PLAYER');
  var code = "// Give the player an ability\n";


  if (ability == "FLY" ) { 
     code = player + ".allowFlight"; 
  } else if (ability == "SPEED") {
     code = player + ".walkSpeed == 1.0"; 
  } else if (ability == "INVULNERABLE") {
     code = player + ".invulnerable" 
  }
    
  return [code, Blockly.Python.ORDER_NONE];
};

function extractString (block,name) {
  var value = Blockly.Python.valueToCode(block, name, Blockly.Python.ORDER_ATOMIC); 
  value = insideChars ( value,"\"","\"");
  return value;
} 



Blockly.Python['modifyEntity'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, "ENTITY", Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen(entity);
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);  
  var modifications = Blockly.Python.statementToCode (block, 'MODIFICATIONS' );  

  var code = "";
  
  for (var i=0; i<instantiations.length; i++ ) {
     if (first) {
        code = code + "  //Instantiations;\n"; 
        first = false;
     } 
     code = code + "  var " + instantiations[i] + ";\n"; 
  }   

  code = code + '// spawn ' + entity + '\n' + 
                'var location = ' + location + ';\n' + 
                'var entity = server.worlds[0].spawnEntity(location, org.bukkit.entity.EntityType.' + entity + ');\n';
  
  if ((entity == "HORSE") || (entity == "SKELETON_HORSE")) { 
     code = code + 
        "var saddle = require('items').saddle(1);\n" + 
        "entity.getInventory().setSaddle(saddle);\n" + 
        "entity.tamed = true;\n"    
  }   
  code = code + modifications;  
  return code;
};

Blockly.Python['spawnblock'] = function(block) {
  var blockType = Blockly.Python.valueToCode(block, 'TYPE', Blockly.Python.ORDER_ATOMIC); 
  blockType = insideParen(blockType);   
  var code = "server.worlds[0].getBlockAt (location).setType (org.bukkit.Material." + blockType + ");\n";            
  return code;
};

Blockly.Python['signtext'] = function(block) {
  var line1 = Blockly.Python.valueToCode(block, 'LINE1', Blockly.Python.ORDER_ATOMIC); 
  line1 = extractStr (line1)  
  var line2 = Blockly.Python.valueToCode(block, 'LINE2', Blockly.Python.ORDER_ATOMIC); 
  line2 = extractStr (line2)  
  var code = "var sign = server.worlds[0].getBlockAt (location).getState();\n" +
             "sign.setLine (0," + line1 + ");\n" +   
             "sign.setLine (1," + line2 + ");\n" +   
             "sign.update();\n";
  return code;
};

Blockly.Python['updatelocation'] = function(block) {
  var axis = block.getFieldValue ('AXIS');
  var offset = block.getFieldValue ('OFFSET'); // Blockly.Python.valueToCode(block, 'OFFSET', Blockly.Python.ORDER_ATOMIC); 
  var code;
  instantiateVariable ('location' );
  if (axis == "X") {
      code = "location = new org.bukkit.Location (server.worlds[0], parseInt(location.x)+" + offset + ", parseInt(location.y), parseInt(location.z));\n";
  } else if (axis == "Y") {
      code = "location = new org.bukkit.Location (server.worlds[0], parseInt(location.x), parseInt(location.y)+" + offset + ", parseInt(location.z));\n";
  } else if (axis == "Z") {
      code = "location = new org.bukkit.Location (server.worlds[0], parseInt(location.x), parseInt(location.y), parseInt(location.z)+" + offset + ");\n";
  } 
  return code;
};

Blockly.Python['buildstructure'] = function(block) {
  var name = block.getFieldValue ("NAME"); // Blockly.Python.valueToCode(block, "NAME", Blockly.Python.ORDER_ATOMIC); 
  // name = insideChars ( name,"\"","\"");
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);  
  var steps = Blockly.Python.statementToCode (block, 'STEPS' );  
  // alert ( 'steps: ' + steps );
  var code = 
     '// Build a ' + name + '\n' + 
     'var location = ' + location + ';\n';
     
  code = code + steps;  
  return code;
};


Blockly.Python['setpassenger'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, "ENTITY", Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen(entity);
  
  var code = 'var passenger = server.worlds[0].spawnEntity(location, org.bukkit.entity.EntityType.' + entity + ');\n' + 
             'entity.setPassenger(passenger);\n';   
  return code; 
};

Blockly.Python['offai'] = function(block) {
  return 'entity.setAI(false);\n' 
};

Blockly.Python['setName'] = function(block) {
  var name =  Blockly.Python.valueToCode(block, "NAME", Blockly.Python.ORDER_ATOMIC);
  return 'entity.setCustomName (' + name + ');\n'; 
};

Blockly.Python['entityArmor'] = function(block) {
  var color = block.getFieldValue ('COLOR');
  var code = 
     "var color = org.bukkit.Color." + color + "\n" + 
     "var helmet = require('items').leatherHelmet(1);\n" + 
     "var helmetMeta = helmet.itemMeta;\n" + 
     "helmetMeta.color = color;\n" + 
     "helmet.itemMeta = helmetMeta;\n" + 
     "entity.equipment.helmet = helmet;\n" + 
     "var boots = require('items').leatherBoots(1);\n" + 
     "var bootsMeta = boots.itemMeta;\n" + 
     "bootsMeta.color = color;\n" + 
     "boots.itemMeta = bootsMeta;\n" + 
     "entity.equipment.boots = boots;\n" + 
     "var chest = require('items').leatherChestplate(1);\n" + 
     "var chestMeta = chest.itemMeta;\n" + 
     "chestMeta.color = color;\n" + 
     "chest.itemMeta = chestMeta;\n" + 
     "entity.equipment.chestplate = chest;\n" +
     "var legs = require('items').leatherLeggings(1);\n" + 
     "var legsMeta = legs.itemMeta;\n" + 
     "legsMeta.color = color;\n" + 
     "legs.itemMeta = legsMeta;\n" + 
     "entity.equipment.leggings = legs;\n";  
  return code;
};

Blockly.Python['getBlock'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var code = "server.worlds[0].getBlockAt (" + location + ")";
  return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Python['location'] = function(block) {
  var locationType = block.getFieldValue ('LOCATIONTYPE');    
  code = locationType;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['absolutelocation'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC); 
  x = insideParen (x);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC); 
  y = insideParen (y);
  var z = Blockly.Python.valueToCode(block, 'Z', Blockly.Python.ORDER_ATOMIC); 
  z = insideParen (z);
    
  code = "new org.bukkit.Location(server.worlds[0], " + x + ", " + y + ", " + z + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['baby'] = function(block) {
  return 'entity.baby = true;\n'; 
};

Blockly.Python['entity'] = function(block) {
  var entity = block.getFieldValue ("ENTITY");
  //alert ( 'entity got: ' + entity );
  return [entity, Blockly.Python.ORDER_NONE];
}

Blockly.Python['entityType'] = function(block) {
  var entity = block.getFieldValue ("ENTITY");
  return [entity, Blockly.Python.ORDER_NONE];
}

Blockly.Python['blockType'] = function(block) {
  var b = block.getFieldValue ("BLOCK");
  b = insideParen (b);
  return [b, Blockly.Python.ORDER_NONE];
}

Blockly.Python['creatureTypeString'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, "ENTITYTYPE", Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var code = entity + ".toString()";
  return [code, Blockly.Python.ORDER_NONE];
}

// self.location.world.spawnEntity(self.location,org.bukkit.entity.EntityType.PIG);
Blockly.Python['rider'] = function(block) {
  //alert ( 'get ride' );
  var ride  = Blockly.Python.valueToCode(block, 'RIDE', Blockly.Python.ORDER_ATOMIC);
  ride = insideParen (ride);
  //alert ( 'got: ' + ride );
  var rider = Blockly.Python.valueToCode(block, 'PASSENGER', Blockly.Python.ORDER_ATOMIC);
  rider = insideParen (rider);
  var code = 
     "// Spawn " + rider + " riding: [" + ride + "]\n" + 
     "var ride = " + ride + ";\n" + 
     "var rider = " + rider + ";\n" + 
     "ride.setPassenger(rider);\n"; 
  return code;
};

Blockly.Python['functionCall'] = function(block) {
  var name = block.getFieldValue ('FUNCTIONNAME'); // Blockly.Python.valueToCode(block, 'FUNCTIONNAME', Blockly.Python.ORDER_ATOMIC);
  // name = insideChars ( name,"\"","\"");
  if (name.indexOf ( '(') == -1) {
     name = name + "()";
  } 
  return name + ";\n";
};

Blockly.Python['clickedBlock'] = function(block) {
  return ["event.getClickedBlock()", Blockly.Python.ORDER_NONE];
}

Blockly.Python['typeString'] = function(block) {
  var typeString = Blockly.Python.valueToCode(block, 'TYPESTRING', Blockly.Python.ORDER_ATOMIC); 
  return [typeString + ".type.toString()", Blockly.Python.ORDER_NONE];
}

Blockly.Python['leverUp'] = function(block) {
  var block = Blockly.Python.valueToCode(block, 'BLOCK', Blockly.Python.ORDER_ATOMIC); 
  var code = "(" + block + ".toString().indexOf ('powered=true')>-1)";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['potionname'] = function(block) {
  var code = "event.getPotion().getItem().getItemMeta().getDisplayName()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['sendUdpMessage'] = function(block) {
  var port = Blockly.Python.valueToCode(block, 'PORT', Blockly.Python.ORDER_ATOMIC);
  var message = Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC);
  message = insideChars ( message,"\"","\"");
  var code = 
     "var clientSocket = new java.net.DatagramSocket();\n" + 
     "clientSocket.setBroadcast(true);\n" + 
     "var socketAddress = new java.net.InetSocketAddress ( '192.168.4.255', " + port + " );\n" +  
     "var msg = '" + message + "';\n" + 
     "var sendPacket = new java.net.DatagramPacket (msg.getBytes(), msg.length, socketAddress );\n" + 
     "clientSocket.send(sendPacket);\n" +  
     "clientSocket.close();\n" +    
     "console.log ( 'Sent ' + msg + ' to: 192.168.4.255:' + " + port + ");\n"
  
  return code;
};

Blockly.Python['entityProfession'] = function(block) {
  var profession = block.getFieldValue ('PROFESSION');
  var code = "entity.setProfession (org.bukkit.entity.Villager.Profession." + profession + ");\n";
  return code;
};

// splashpotion_blindness_meta.setMainEffect(PotionEffectType.BLINDNESS);
Blockly.Python['addpotion'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var potion = block.getFieldValue ('POTION');
  if (potion == "") {
     potion = name;
  } else {
     // TODO: Add potion attributes
  } 
  var code = '// Add ' + potion + ' to inventory\n' + 
             'var newItems = require(\'items\').splashPotion(5);\n' + 
             'var meta = newItems.getItemMeta();\n' + 
             'meta.setDisplayName(\'' + potion + '\');\n' +
             'newItems.setItemMeta(meta);\n' +              
             'self.inventory.addItem(newItems);\n';
  return code;
};

Blockly.Python['varname'] = function(block) {
  var code = block.getFieldValue("VARNAME"); 
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setvariable'] = function(block) {
  var varname = block.getFieldValue ('VARNAME'); 
  var expression = block.getFieldValue("EXPRESSION"); 
  instantiateVariable (varname);
  var code = varname + '=' + expression + ';\n';
  return code;
};

Blockly.Python['expression'] = function(block) {
  var expression = block.getFieldValue("EXPRESSION"); 
  alert ( 'expression: ' + expression );
  return [expression, Blockly.Python.ORDER_NONE];
};

Blockly.Python['returnVariable'] = function(block) {
  var name = block.getFieldValue ('RETURNVARIABLE');
  if (name.indexOf ( '\"' ) > -1) {
     name = insideChars ( name,"\"","\"");
  } else if (name.indexOf ( '(' ) > -1) { 
     name = insideParen (name );
  } 
  return "return " + name + ';\n';
};

Blockly.Python['snaplocation'] = function(block) {
  var name = block.getFieldValue ('NAME');
  return name + " = new org.bukkit.Location (server.worlds[0], parseInt(" + name + ".x), parseInt(" + name + ".y), parseInt (" + name + ".z));\n";
};

Blockly.Python['createVariable'] = function(block) {
  var name = block.getFieldValue ('NAME');
  return "var " + name + ';\n';
};


