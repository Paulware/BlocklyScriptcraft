/*
Direction player is looking
  public static CardinalDirection get(Player player) {
    float yaw = player.getLocation().getYaw();
    if (yaw < 0) {
        yaw += 360;
    }
    if (yaw >= 315 || yaw < 45) {
        return CardinalDirection.SOUTH;
    } else if (yaw < 135) {
        return CardinalDirection.WEST;
    } else if (yaw < 225) {
        return CardinalDirection.NORTH;
    } else if (yaw < 315) {
        return CardinalDirection.EAST;
    }
    return CardinalDirection.NORTH;
  }

*/

var includes = "";
var instantiations = [];
var updates = "";
var setupCode = "";
var insetupCode = "";

function maxValue (max,value) {
   if (parseInt (value) > max) {
      value = max;
   } else {
      value = parseInt (value);
   }
   return value;
} 

// Utility javascript functions
function millis() {
    var code =
       'function millis() {\n' + 
       '   var d = new Date();\n' + 
       '   return d.getTime();\n' +    
       '}\n';
    return code;
}
/*
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
*/

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
  if (variableName.indexOf ( 'exports.') > -1) { 
      found = true;
  } else { 
	  for (var i=0; i<instantiations.length; i++) {
		 if (instantiations[i] == variableName) { 
			found = true;
			break;
		 } 
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

function delCharAt (str, position) {
   newString = str.slice(0, position) + str.slice(position+1, str.length)        
   return newString;
}

function insideBracket (value) { 
   var startIndex = value.indexOf     ('[');
   var endIndex   = value.lastIndexOf (']');
   value = delCharAt (value, endIndex);
   value = delCharAt (value, startIndex);
   var newValue = value;
   return newValue;
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
       endIndex = value.lastIndexOf ( ')');
       if (endIndex > -1) {
           //console.log ( 'value: ' + value )
           value = delCharAt (value, endIndex);
           value = delCharAt (value, startIndex);
           newValue = value;
           //console.log ( 'newValue: ' + newValue );
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
  var val = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  val = insideParen (val)  
  var code  = "(" + val + "==null)?\"\":(" + val + ".toString==null)?\"\":" + val + ".toString()"; 
  
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.JavaScript ['scriptcraftexpression'] = function (block) {
  var expression = block.getFieldValue ('EXPRESSION');
  code = expression + '\n';
  return code;
};

Blockly.Python['spawn'] = function(block) {
  var entity = block.getFieldValue ("ENTITY");
  //entity = entity.toUpperCase();
  var count = Blockly.Python.valueToCode(block, 'COUNT', Blockly.Python.ORDER_ATOMIC);
  count = maxValue (64,count)
  var code = '// Spawn ' + entity + '\n';
  if ((count == "") || (count <= 1 )) { 
    code = code + 'self.world.spawnEntity(self.location,' + entity + ');\n';     
  } else {
    code = code + 'for (var i=0; i<' + count + '; i++) {\n'; 
    code = code + '  self.world.spawnEntity(self.location,' + entity + ');\n';     
    code = code + '}\n';
  } 
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
  var b = Blockly.Python.valueToCode(block, 'BLOCK',       Blockly.Python.ORDER_ATOMIC); 
  b = insideParen(b);
  var blockType = Blockly.Python.valueToCode(block, 'TYPEOFBLOCK', Blockly.Python.ORDER_ATOMIC);
  blockType = insideParen (blockType);
  var code = b + ".setType(" + blockType + ");\n";
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

Blockly.Python['forlistdo'] = function(block) {
  
  var name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ADDITIVE); 
  name = insideParen (name);
  var index = block.getFieldValue ('INDEX');
  if (index.indexOf ( "\"" ) > -1) { 
     index = insideChars ( index,"\"","\"");
  }
  
  var forCode = Blockly.Python.statementToCode (block, 'FORCODE' ); 
   
  var code = 'for (var ' + index + '=0; ' + index + '<' + name + '.length;' + index + '++) {\n'  + 
             forCode + 
             '};\n';
  
  return code;
};

Blockly.Python['explosion'] = function(block) {
  var size = parseFloat(block.getFieldValue ('SIZE'));    
  if (size > 10.0) {
     size = 10.0;
  } 
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);    
  location = insideParen (location);
  var code = "server.worlds[0].createExplosion (" + location + "," + size + ");\n";
  
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
  var message = block.getFieldValue ('MESSAGE');
  //alert ( 'sendmessage Got message: ' + message );
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code;
  
  // note: Don't add \" to the message because it might be a variable value.
  if (player == "event.getAffectedEntities()") {
     code = "var entities = event.getAffectedEntities();\n" + 
            "for (var i=0; i<entities.length; i++) {\n" + 
            "  entities[i].sendMessage (" + message + ");\n" + 
            "}\n";
  } else if (player == "server.getOnlinePlayers()") { // All players
      //String.prototype.replaceAll = function(search, replacement) {
      //    var target = this;
      //    return target.split(search).join(replacement);
      //};  
      // command = "\"tellraw @a [" + message + "]\"";
      if (message.indexOf ( '\"' ) == -1) { // This is a variable 
         code = "org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), " + 
                "\"tellraw @a [\\\"\" + " + message + " + \"\\\"]\");\n";
      } else { 
         message = message.substring (0,message.length-1)
         message = message + "\\\""
      
         code = "org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), " + 
                "\"tellraw @a [\\" + message + "]\");\n";      
      } 
  } else { 
     var code = '(function() { \n' + 
                '  if (' + player + ' != null ) { \n' + 
                '     ' + player + '.sendMessage (' + message + ');\n' + 
                '  }\n' +                 
                ' })();\n'    
  }
  return code;
};

Blockly.Python['armorset'] = function(block) {
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC); 
  color = insideParen (color);
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (player == "") {
     player = 'self';
  } else {
     player = insideParen (player );
  } 
  instantiateVariable ('color' );
  var colorCode = color;
  if (color.indexOf ( "org.bukkit.Color." ) == -1 ) {
    colorCode = "eval ( \"color = org.bukkit.Color.\" + " + color + ");\n";
  } else {
    colorCode = "color = " + colorCode + ";\n"; 
  } 
  instantiateVariable ( '_player');
  
  var code = colorCode + 
     "_player = " + player + ";\n" + 
     "var items = require ('items');\n" + 
     "var helmet = items.leatherHelmet(1);\n" + 
     "var helmetMeta = helmet.itemMeta;\n" + 
     "helmetMeta.color = color;\n" + 
     "helmet.itemMeta = helmetMeta;\n" + 
     "_player.equipment.helmet = helmet;\n" + 
     "var boots = items.leatherBoots(1);\n" + 
     "var bootsMeta = boots.itemMeta;\n" + 
     "bootsMeta.color = color;\n" + 
     "boots.itemMeta = bootsMeta;\n" + 
     "_player.equipment.boots = boots;\n" + 
     "var chest = items.leatherChestplate(1);\n" + 
     "var chestMeta = chest.itemMeta;\n" + 
     "chestMeta.color = color;\n" + 
     "chest.itemMeta = chestMeta;\n" + 
     "_player.equipment.chestplate = chest;\n" +
     "var legs = items.leatherLeggings(1);\n" + 
     "var legsMeta = legs.itemMeta;\n" + 
     "legsMeta.color = color;\n" + 
     "legs.itemMeta = legsMeta;\n" + 
     "_player.equipment.leggings = legs;\n";  
  return code;
};

Blockly.Python['killplayer'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player );
   
  var code = "setTimeout (function () {\n" + 
             "  " + player + ".setHealth(0);\n" +
             "},500);\n";    

  return code;
};

Blockly.Python['setplayerdata'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  var value = Blockly.Python.valueToCode (block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  value = insideParen (value);
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (player == "") {
     player = 'self';
  } else {
     player = insideParen (player );
  } 
  var code = "fd = new org.bukkit.metadata.FixedMetadataValue (__plugin," + value + ");\n" + 
             "if (" + player + " != null) { \n" + 
             "  if (" + player + ".setMetadata != null ) { \n" +              
             "    " + player + ".setMetadata (\"" + key + "\", fd );\n" + 
             "  }\n" + 
             "}\n";
  return code;
};

Blockly.Python['removeplayerdata'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player);
  if (player == "") {
     player = 'self';
  } else if ( player == 'server.getOnlinePlayers()') { // All Players
     alert ( 'Use a repeat loop instead of all players' );
  } else {
     player = insideParen (player );
  } 
  var code = player + ".removeMetadata (\"" + key + "\", __plugin );\n";
  return code;
};

Blockly.Python['getplayerdata'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (player == "") {
     player = 'self';
  } else {
     player = insideParen (player );
  } 
    
  var code = player + ".getMetadata(\"" + key + "\")[0].value()" 
  return [code, Blockly.Python.ORDER_NONE];  
};

Blockly.Python['getplayerdata2'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  
  var entity = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (entity == "") {
     entity = 'self';
  } else {
     entity = insideParen (entity );
  } 
  var code = "(" + entity + "== null)? null : (" + entity + ".getMetadata == null)?null:(" + entity + ".getMetadata(\"" + key + 
             "\").length == 0)?null:" + entity + ".getMetadata(\"" + key + "\")[0].value()";
    
  return [code, Blockly.Python.ORDER_NONE];  
};

Blockly.Python['playerdataeq'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  
  var player1 = Blockly.Python.valueToCode(block, 'PLAYER1', Blockly.Python.ORDER_ATOMIC); 
  player1 = insideParen (player1);
  var player2 = Blockly.Python.valueToCode(block, 'PLAYER2', Blockly.Python.ORDER_ATOMIC); 
  player2 = insideParen (player2);
   
  var code = '(function() { ' + 
             '  var value1 = (' + player1 + '== null)? null : (' + player1 + '.getMetadata == null)?null:(' + player1 + 
             '.getMetadata(\"' + key + '\").length == 0)?null:' + player1 + '.getMetadata(\"' + key + '\")[0].value();' +  
             '  var value2 = (' + player2 + '== null)? null : (' + player2 + '.getMetadata == null)?null:(' + player2 + 
             '.getMetadata(\"' + key + '\").length == 0)?null:' + player2 + '.getMetadata(\"' + key + '\")[0].value();' +
             '  var s = (value1 == value2);' + 
             '  return s;' + 
             ' })()'              
             
    
  return [code, Blockly.Python.ORDER_NONE];  
};

Blockly.Python['blocksradius'] = function(block) {
  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC); 
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  var blockType = Blockly.Python.valueToCode(block, 'BLOCKTYPE', Blockly.Python.ORDER_ATOMIC); 
   
  var code = '(function() { ' + 
             '  var _blocks = [];\n' +  
             '  var _blockType;\n' + 
             '  var _loc;\n' + 
             '  for (var _x=' + location + '.x-' + radius + ';_x<=' + location + '.x+' + radius + ';_x++) {' + 
             '    for (var _y=' + location + '.y-' + radius + ';_y<=' + location + '.y+' + radius + ';_y++) {' + 
             '      for (var _z=' + location + '.z-' + radius + ';_z<=' + location + '.z+' + radius + ';_z++) {' +
             '         _loc = new org.bukkit.Location(server.worlds[0], _x,_y,_z);' +    
             '         _blockType =  server.worlds[0].getBlockAt(_loc).getType();\n' +             
             '         if (_blockType == ' + blockType + ') { _blocks.push (server.worlds[0].getBlockAt(_loc)); } \n' + 
             '  }}}\n' + 
             '  if (_blocks.length > 0) { \n' +              
             '     console.log ( \"found\" + _blocks.length + \" blocks \" );\n' +           
             '  }\n' +              
             '  return _blocks;\n'  + 
             ' })()'              
             
    
  return [code, Blockly.Python.ORDER_NONE];  
};


Blockly.Python['activeteams'] = function(block) {
  var code = '(function() { ' + 
             '   var _players=server.getOnlinePlayers();var _teams=[];var _teamColor;\n' + 
             '   for (var i=0; i<_players.length;i++) {\n' +   
             '      _teamColor=(_players[i]== null)? null : (_players[i].getMetadata == null)?null:(_players[i].getMetadata(\"_team_\").length == 0)?null:players[i].getMetadata(\"_team_\")[0].value();\n' + 
             '      if (_teamColor != null) { \n' + 
             '         if (! ((_teams.indexOf (_teamColor) >= 0))){\n' + 
             '            if (! ((_players[i] == null ) ? false : (_players[i].getGameMode().toString() != \"SPECTATOR\"))){\n' + 
             '               _teams.push (_teamColor);\n' + 
             '            }\n' + 
             '         }\n' + 
             '      }\n' + 
             '   }\n' + 
             '   console.log ( \"Active teams: \" + _teams );\n' + 
             '   return _teams;\n' +              
             ' })()';              
              
  return [code, Blockly.Python.ORDER_NONE];  
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


Blockly.Python['moveto'] = function(block) {  
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen (entity);
  var code;
  
  instantiateVariable ('handle');  
  instantiateVariable ('path');
  instantiateVariable ('entity' );
  
  code = 'handle = entity.getHandle();\n' + 
         'path = handle.getNavigation().a(' + location + '.getX(),' + location + '.getY(),' + location + '.getZ());\n' + 
         entity + '.getNavigation().a(path,1.0);\n' 
  
  return code;
}


Blockly.Python['teleport'] = function(block) {   
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen (entity);  
  var code = "setTimeout (function () {\n" + 
             "  " + entity + ".teleport(" + location + ", org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);\n" +
             "},2000);\n";    
  return code;
}

Blockly.Python['instantteleport'] = function(block) {   
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen (entity);  
  //var yaw = entity + '.location.yaw';
  //var pitch = entity + '.location.pitch';
  var code = 
      "(function () { var _pitch; var _yaw; var _velocity;\n" +
      "  _pitch    = " + entity + ".location.getPitch();\n" + 
      "  _yaw      = " + entity + ".location.getYaw();\n" + 
      "  _velocity = " + entity + ".getVelocity();\n" + 
      "  " + location + ".setPitch (_pitch);\n" + 
      "  " + location + ".setYaw   (_yaw);\n" + 
      "  " + entity + ".teleport(" + location + 
            ", org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);\n" + 
      "  " + entity + ".setVelocity(_velocity);\n" +       
      "})();\n";  
  
  // var code = entity + ".teleport(" + location + ", org.bukkit.event.player.PlayerTeleportEvent.TeleportCause.PLUGIN);\n";    
  return code;
}

Blockly.Python['sound'] = function(block) {
  var animal = block.getFieldValue ('ANIMAL');
  var code =    "require('sounds').play(org.bukkit.Sound.ENTITY_" + animal + "_AMBIENT,self.location);\n";    
  return code;
}

Blockly.Python['fireworks'] = function(block) {
  var code = "var fireworks = require ('fireworks');\n";
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  code = code + 'fireworks.firework (' + location + ');\n'; 
  return code;
}

Blockly.Python['eventcancel'] = function(block) {
  var code = "event.cancelled = true;\n";
  return code;
}

/*
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
*/
Blockly.Python['spawnarea'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var code =    "server.worlds[0].setSpawnLocation(" + location + ");\n";
  
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

function showInstantiations(code,params) {
  var first = true;
  var found;
  for (var i=0; i<instantiations.length; i++ ) {
     found = false;
     if (params.length > 0) {
         if (params.indexOf ( instantiations[i]) > -1 ) {
             found = true;
         } 
     } 
      
     if (!found) { 
        if (first) {
            code = code + "  //Instantiations;\n"; 
            first = false;
         } 
         if (instantiations[i].indexOf ( "function") > -1) { 
           code = code + "  " + instantiations[i] + ";\n";
         } else { 
           code = code + "  var " + instantiations[i] + ";\n"; 
         } 
     }
  }   
  return code;  
} 

Blockly.Python['modifyEntity'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, "ENTITY", Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen(entity);
  //entity = entity.toUpperCase();
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);  
  var modifications = Blockly.Python.statementToCode (block, 'MODIFICATIONS' );  

  var code = "";
  code = showInstantiations (code, []);

  code = code + '// spawn ' + entity + '\n' + 
                'var location = ' + location + ';\n' + 
                'var entity = server.worlds[0].spawnEntity(location,' + entity + ');\n';
  
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
  var location = Blockly.Python.valueToCode (block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  var location = insideParen (location);
  var code = "";
  instantiateVariable ("location");
  instantiateVariable ("block");
  instantiateVariable ("data");
  instantiateVariable ("loc");
  instantiateVariable ("sign");
  instantiateVariable ("data");
  blockType = insideParen(blockType); 
  if (blockType == "LEGACY_WOODEN_DOOR") {
     code = "loc = new org.bukkit.Location (server.worlds[0], parseInt(location.x), parseInt(location.y)+1, parseInt(location.z));\n" + 
             "server.worlds[0].getBlockAt (loc).setType (org.bukkit.Material.OAK_DOOR);\n" + 
             "block = server.worlds[0].getBlockAt (loc);\n" + 
             "data = org.bukkit.Material.OAK_DOOR.createBlockData();\n" + 
             "data.setHalf(org.bukkit.block.data.Bisected.Half.TOP); // TOP or BOTTOM\n" + 
             "//data.setFacing (org.bukkit.block.BlockFace.NORTH); // Facing\n" + 
             "block.setBlockData (data);\n" + 
             "loc = new org.bukkit.Location (server.worlds[0], parseInt(loc.x), parseInt(loc.y)-1, parseInt(loc.z));\n" + 
             "block = server.worlds[0].getBlockAt (loc);\n" + 
             "block.setType (org.bukkit.Material.OAK_DOOR);\n" + 
             "data.setHalf(org.bukkit.block.data.Bisected.Half.BOTTOM); // TOP or BOTTOM\n" + 
             "//data.setFacing(org.bukkit.block.BlockFace.NORTH); // Facing\n" + 
             "block.setBlockData (data);\n"; 
  } else if (blockType == "LEGACY_BED_BLOCK") {
     code = "loc = new org.bukkit.Location (server.worlds[0], parseInt(location.x), parseInt(location.y), parseInt(location.z));\n" + 
            "block = server.worlds[0].getBlockAt (loc);\n" + 
            "block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);\n" +
            "data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();\n" + 
            "data.setPart (org.bukkit.block.data.type.Bed.Part.HEAD);\n" + 
            "block.setBlockData (data);\n" +             
            "loc = new org.bukkit.Location (server.worlds[0], parseInt(loc.x), parseInt(loc.y), parseInt(loc.z)+1);\n" + 
            "block = server.worlds[0].getBlockAt (loc);\n" + 
            "block.setType (org.bukkit.Material.LEGACY_BED_BLOCK);\n" +       
            "data = org.bukkit.Material.LEGACY_BED_BLOCK.createBlockData();\n" + 
            "data.setPart (org.bukkit.block.data.type.Bed.Part.FOOT);\n" + 
            "block.setBlockData (data);\n";                        
  } else if (blockType == "OAK_SIGN") {
     code = "loc = new org.bukkit.Location (server.worlds[0], parseInt(location.x), parseInt(location.y), parseInt(location.z));\n" + 
            "block = server.worlds[0].getBlockAt(loc);\n" +   
            "block.setType (org.bukkit.Material.OAK_SIGN);\n" + 
            "sign = block.getState();\n" + 
            "data = new org.bukkit.Material.Sign (org.bukkit.Material.OAK_SIGN);\n" + 
            "data.setFacingDirection (org.bukkit.block.BlockFace.SOUTH);\n" + 
            "sign.setData (data);\n" + 
            "sign.update();\n" 
  } else {   
     code = "server.worlds[0].getBlockAt (" + location + ").setType (" + blockType + ");\n";            
  }
  return code;
};

Blockly.Python['signtext'] = function(block) {
  var line1 = Blockly.Python.valueToCode(block, 'LINE1', Blockly.Python.ORDER_ATOMIC); 
  line1 = extractStr (line1)  
  var line2 = Blockly.Python.valueToCode(block, 'LINE2', Blockly.Python.ORDER_ATOMIC); 
  line2 = extractStr (line2)
  var location =  Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  location = insideParen (location);
  var code = "var sign = server.worlds[0].getBlockAt (" + location + ").getState();\n" +
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
  
  var code = 'var passenger = server.worlds[0].spawnEntity(location,' + entity + ');\n' + 
             'entity.setPassenger(passenger);\n';   
  return code; 
};

Blockly.Python['offai'] = function(block) {
  return 'entity.setAI(false);\n' 
};

Blockly.Python['setName'] = function(block) {
  var name =  block.getFieldValue ('NAME');
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


Blockly.Python['location'] = function(block) {
  var locationType = block.getFieldValue ('LOCATIONTYPE');    
  code = locationType;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['absolutelocation'] = function(block) {
  var x = block.getFieldValue ('X'); 
  //x = insideParen (x);
  var y = block.getFieldValue ('Y');
  //y = insideParen (y);
  var z = block.getFieldValue ('Z');
  //z = insideParen (z);
    
  code = "new org.bukkit.Location(server.worlds[0], " + x + ", " + y + ", " + z + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['baby'] = function(block) {
  return 'entity.baby = true;\n'; 
};

Blockly.Python['entity'] = function(block) {
  var entity = block.getFieldValue ("ENTITY");
  return [entity, Blockly.Python.ORDER_NONE];
}

Blockly.Python['whichplayer'] = function(block) {
  var entity = block.getFieldValue ("ENTITY");
  return [entity, Blockly.Python.ORDER_NONE];
}

Blockly.Python['entityType'] = function(block) {
  var entity = 'org.bukkit.entity.EntityType.' + block.getFieldValue ("ENTITY");
  return [entity, Blockly.Python.ORDER_NONE];
}

Blockly.Python['blocktype'] = function(block) {
  var b = block.getFieldValue ("BLOCKTYPE");
  b = 'org.bukkit.Material.' + insideParen (b);
  return [b, Blockly.Python.ORDER_NONE];
}

Blockly.Python['blockfacingdirection'] = function(block) {
  var b = block.getFieldValue ("DIRECTION");
  b = 'org.bukkit.block.BlockFace.' + insideParen (b);
  return [b, Blockly.Python.ORDER_NONE];
}

Blockly.Python['reverseface'] = function(block) {
  var direction = Blockly.Python.valueToCode(block, "DIRECTION", Blockly.Python.ORDER_ATOMIC);
  direction = insideParen (direction)
  var newDirection = ""
  var code = "(" + direction + "== org.bukkit.block.BlockFace.NORTH)? org.bukkit.block.BlockFace.SOUTH : " + 
             "(" + direction + "== org.bukkit.block.BlockFace.SOUTH)? org.bukkit.block.BlockFace.NORTH : " + 
             "(" + direction + "== org.bukkit.block.BlockFace.EAST)? org.bukkit.block.BlockFace.WEST : " + 
             "(" + direction + "== org.bukkit.block.BlockFace.WEST)? org.bukkit.block.BlockFace.EAST : " + 
             "(" + direction + "== org.bukkit.block.BlockFace.UP)? org.bukkit.block.BlockFace.DOWN : " + 
             "(" + direction + "== org.bukkit.block.BlockFace.DOWN)? org.bukkit.block.BlockFace.UP : null"; 
  return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Python['materialtype'] = function(block) {
  var material = block.getFieldValue ("MATERIAL");
  material = 'org.bukkit.Material.' + insideParen (material);
  return [material, Blockly.Python.ORDER_NONE];
}

Blockly.Python['eggtype'] = function(block) {
  var material = block.getFieldValue ("MATERIAL");
  material = 'org.bukkit.Material.' + insideParen (material);
  return [material, Blockly.Python.ORDER_NONE];
}

Blockly.Python['creatureTypeString'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, "ENTITYTYPE", Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var code = entity + ".toString()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['setride'] = function(block) {
  var vehicle  = Blockly.Python.valueToCode(block, 'VEHICLE', Blockly.Python.ORDER_ATOMIC);
  vehicle = insideParen (vehicle);
  var passenger = Blockly.Python.valueToCode(block, 'PASSENGER', Blockly.Python.ORDER_ATOMIC);
  passenger = insideParen (passenger);
  var code = vehicle + ".setPassenger(" + passenger + ");\n"; 
  return code;
};

Blockly.Python['functionCall'] = function(block) {
  var name = block.getFieldValue ('FUNCTIONNAME'); // Blockly.Python.valueToCode(block, 'FUNCTIONNAME', Blockly.Python.ORDER_ATOMIC);
  // name = insideChars ( name,"\"","\"");
  if (name.indexOf ( '(') == -1) {
     name = name + "()";
  } else if (name.indexOf ( ')' ) == -1) { // Right parenthesis is missing from name 
     name = name + ")";
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

Blockly.Python['addpotion'] = function(block) {
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  name = insideChars(name, "\"", "\"");
  var potion = block.getFieldValue ('POTION');
  var count = block.getFieldValue ('COUNT');

  var code = 'var newItems = new org.bukkit.inventory.ItemStack (org.bukkit.Material.' + potion + ',' + count + ');\n' + 
             'var meta = newItems.getItemMeta();\n' + 
             'meta.setDisplayName(\'' + name + '\');\n' +
             'newItems.setItemMeta(meta);\n' +              
             'inventory.addItem(newItems);\n';
  return code;
};

Blockly.Python['varname'] = function(block) {
  var code = block.getFieldValue("VARNAME"); 
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setvariable'] = function(block) {
  var varname = block.getFieldValue ('VARNAME'); 
  var expression = block.getFieldValue("EXPRESSION");
  if (varname.indexOf ( '.') == -1) {    
     instantiateVariable (varname);
  }
  var code = varname + '=' + expression + ';\n';
  return code;
};


Blockly.Python['setvariablevalue'] = function(block) {
  var varname = block.getFieldValue ('VARNAME'); 
  var expression = Blockly.Python.valueToCode(block, 'EXPRESSION', Blockly.Python.ORDER_ATOMIC);  
  expression = insideParen (expression);
  // expression = insideChars(expression, "\"", "\"");
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
  // alert ( 'got name [' + name + ']' );
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

Blockly.Python['mapRenderer'] = function(block) {
  var name = block.getFieldValue ('RENDERER');
  var code = "// Change renderer for all maps\n" + 
             "var renderers;\n" +
             "var mapView;\n" + 
             "var count = 1;\n" + 
             "while (true) {\n" +  
             "  mapView = server.getMap (count);\n" + 
             "  if (mapView == undefined) {\n" +  
             "    console.log ( 'Aborting at mapId=' + count );\n" + 
             "    break;\n" + 
             "  } else {\n" +  
             "    renderers = mapView.getRenderers ();\n" + 
             "    for (var j=0; j<renderers.length; j++ ){\n" + 
             "      mapView.removeRenderer (renderers[j]);\n" + 
             "    }\n" +  
             "    mapView.addRenderer (render);\n" + 
             "  }\n" + 
             "  count = count + 1;\n" + 
             "}\n";
  return code;
};

Blockly.Python['fileExists'] = function(block) {
  var varname = block.getFieldValue ('NAME');
  return ["new java.io.File (" + varname + ").exists()", Blockly.Python.ORDER_NONE];
}

Blockly.Python['drawImage'] = function(block) {
  var filename = block.getFieldValue ("FILENAME");
  var code = "mapCanvas.drawImage (0,0,org.bukkit.map.MapPalette.resizeImage (" + 
             "new javax.swing.ImageIcon(filename).getImage()) );\n"
  return code;
};

Blockly.Python['drawText'] = function(block) {
  var text = block.getFieldValue ( "TEXT");
  var code = "mapCanvas.drawText ( 10,10,org.bukkit.map.MinecraftFont.Font, " + text + ");"; 
  return code + "\n";
};

Blockly.Python['copyFile'] = function(block) {
  var source = block.getFieldValue ('SOURCE');
  var destination = block.getFieldValue ('DESTINATION');
  return "java.lang.Runtime.getRuntime.exec (\"cmd.exe /c copy " + source + " " + destination + "\");\n";
};

Blockly.Python['existsplayerdata'] = function(block) {
  var key = block.getFieldValue ('KEY'); 
  key = key.toLowerCase();
  key = '_' + key + '_';
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  if (player == "") {
     player = 'self';
  } else {
     player = insideParen (player );
  } 
    
  var code = player + ".getMetadata(\"" + key + "\").length > 0" 

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python ['delayedexecution'] = function (block) {
  var delayedCode = Blockly.Python.statementToCode (block, 'DELAYEDCODE' );  
  var timeout = block.getFieldValue("TIMEOUT"); 
  var code = 'setTimeout (function () {\n' + 
  delayedCode + "}," + timeout + ");\n";
  return code;
};

Blockly.JavaScript ['scriptcraftexpression'] = function (block) {
  var expressionCode = Blockly.Python.statementToCode (block, 'EXPRESSIONCODE' );  
    
  code = expressionCode + '\n';
  return code;
};
Blockly.JavaScript ['scriptcraftfunction'] = function (block) {
  instantiations = [];
  var functionName = block.getFieldValue ('nameOfFunction'); 
  var params = "()";
  var ind;
  if (functionName.indexOf ( '(') > -1) { 
     ind = functionName.indexOf ( '(' );
     params = functionName.substring (ind);
     if (params.indexOf ( ')') == -1) { 
        params = params + ')';
     } 
     functionName = functionName.substring (0,ind);
  } 
  var functionCode = Blockly.Python.statementToCode (block, 'FUNCTIONCODE' );  
  var code = 'exports.' + functionName + ' = function ' + params + ' {\n';
  var first = true;
  code = showInstantiations (code, params );
  code = code +   
         functionCode +
         '};\n';
  return code;
};

Blockly.Python ['dataexpression'] = function (block) {  
  var expression = Blockly.Python.statementToCode (block, 'EXPRESSION' );    
  var ch = expression.charAt (expression.length-1);
  var ind;
  if (ch == ',' ) { // remove final comma
     expression = expression.substring (0,expression.length-1);
  } 
  
  var code = "{" + expression + "}";
  return [code, Blockly.Python.ORDER_NONE];  
};

Blockly.Python ['datavalue'] = function (block) {
  var name = block.getFieldValue ('HEADER');
  var expression = Blockly.Python.statementToCode (block, 'EXPRESSION' );  
  var ch = expression.charAt (expression.length-1);
  if (ch == ',' ) { // remove final comma
     expression = expression.substring (0,expression.length-1);
  } 
  ind = expression.indexOf ( ';' );
  if (ind > -1) { 
     expression = expression.substring (0,ind) + ',' + expression.substring (ind+1) 
  } 
  ind = expression.indexOf ( '\n' );
  if (ind > -1) { 
     expression = expression.substring (0,ind) + expression.substring (ind+1) 
  } 
  
  ind = expression.indexOf ( '\r' );
  if (ind > -1) { 
     expression = expression.substring (0,ind)  + expression.substring (ind+1) 
  } 

  ind = expression.indexOf ( '=' );
  if (ind > -1) {
      expression = expression.substring (0,ind) + ':' + expression.substring (ind+1)
  } 
  
  return  "\"" + name + "\":{" + expression + "},";
};

Blockly.Python['namevalue'] = function(block) {
  var varname = block.getFieldValue ('VARNAME'); 
  var expression = block.getFieldValue("EXPRESSION"); 
  var code = varname + ':' + expression + ',';
  return code;
};

Blockly.Python['settime'] = function(block) {
  var newTime = block.getFieldValue ('TIME'); 
  var code = "server.worlds[0].setTime(" + newTime + ");\n";
  return code;
};

Blockly.Python['gettime'] = function(block) {
  var code = "server.worlds[0].getTime()" 
  return [code, Blockly.Python.ORDER_NONE];  
};

Blockly.Python['setstorm'] = function(block) {
  var storm = block.getFieldValue ("STORM");
  var code = "server.worlds[0].setStorm(" + storm + ");\n";
  return code;
};

Blockly.Python['iteminhandis'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player)
  var code = '(' + player + '== null) ? null : ( ' + player + '.getItemInHand == null) ? null : ' + player + '.getItemInHand()';  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python ['repeatexecution'] = function (block) { 
  var repeatCode = Blockly.Python.statementToCode (block, 'CODE' );  
  var name = block.getFieldValue ("NAME");
  var timeout = block.getFieldValue("TIMEOUT"); 
  var continueExecution = block.getFieldValue ("CONTINUE");

  var code =  'var ' + name + '= setInterval (function () {\n' + 
              repeatCode + 
              '  if (!(' + continueExecution + ')) {\n' + 
              '    clearInterval (' + name + ');\n' + 
              '  }\n' +               
              '}, ' + timeout + ');\n';
  return code; 
};

Blockly.Python['setgamemode'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  var mode = block.getFieldValue("GAMEMODE"); 
  var code = player + '.setGameMode(org.bukkit.GameMode.' + mode  + ');\n'
  return code;
}

Blockly.Python['recipe'] = function(block) {
  var result = "result";
  var result = Blockly.Python.valueToCode(block, 'RESULT', Blockly.Python.ORDER_ATOMIC);
  result = insideParen (result);
  var ch1 = block.getFieldValue ("CH1");
  var ch2 = block.getFieldValue ("CH2");
  var ch3 = block.getFieldValue ("CH3");
  var ch4 = block.getFieldValue ("CH4");
  var ch5 = block.getFieldValue ("CH5");
  var ch6 = block.getFieldValue ("CH6");
  var ch7 = block.getFieldValue ("CH7");
  var ch8 = block.getFieldValue ("CH8");
  var ch9 = block.getFieldValue ("CH9");
  
  if (ch1 == "") {
     ch1 = " ";
  } 
  if (ch2 == "") {
     ch2 = " ";
  } 
  if (ch3 == "") {
     ch3 = " ";
  } 
  if (ch4 == "") {
     ch4 = " " ;
  } 
  if (ch5 =="") {
     ch5 = " ";
  }
  if (ch6 == "") {
     ch6 = " ";
  } 
  if (ch7 == "") {
     ch7 = " ";
  } 
  if (ch8 == "") {
     ch8 = " ";
  }
  if (ch9 == "") {
     ch9 = " ";
  }
  var shape0 = ch1 + ch2 + ch3;
  var shape1 = ch4 + ch5 + ch6;
  var shape2 = ch7 + ch8 + ch9;
  var ingredients = Blockly.Python.valueToCode(block, 'INGREDIENTS', Blockly.Python.ORDER_ATOMIC);
  ingredients = insideParen ( ingredients);  
  ingredients = insideBracket (ingredients);
  var code = 
    "var result = " + result + ";\n" + 
    "var recipe = new org.bukkit.inventory.ShapedRecipe(result);\n" + 
    "recipe.shape(\"" + shape0 + "\",\"" + shape1 + "\",\"" + shape2 + "\");\n";

  var gredients = ingredients.split ( '\n' );
  for (var i=0; i<gredients.length; i++) {
     if (gredients[i] != '') {
       ingredient = gredients[i].trim();
       ch = ingredient.charAt (ingredient.length-1);
       if (ch == ',') {
          ingredient = ingredient.substring (0,ingredient.length-1);
       }       
       code = code + "recipe.setIngredient(" + ingredient + ");\n";
     }
  }
  code = code + "server.addRecipe(recipe);\n";
       
  return code; 
}

Blockly.Python['addingredient'] = function(block) {
  var ingredient = Blockly.Python.valueToCode(block, 'INGREDIENT', Blockly.Python.ORDER_ATOMIC);
  ingredient = insideParen (ingredient);
  var character = block.getFieldValue ("CHARACTER");
  var code ="'" + character + "'," + ingredient;
  console.log ( 'returning ingredient: [' + code + ']' );
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['itemstack'] = function(block) {
  var blockType = Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_ATOMIC);
  blockType = insideParen (blockType);
  var count =  block.getFieldValue("COUNT"); 
  var code = "new org.bukkit.inventory.ItemStack (" + blockType + "," + count + ")";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['instanceof'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var entityType = Blockly.Python.valueToCode(block, 'TYPE', Blockly.Python.ORDER_ATOMIC);
  entityType = insideParen (entityType);
  var code = entity + " instanceof  org.bukkit.entity." + entityType;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['bordercenter'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location)
  var code = "server.worlds[0].getWorldBorder().setCenter (" + location + ");\n";
  return code;
}

Blockly.Python['bordersize'] = function(block) {
  var size = block.getFieldValue("SIZE");
  var code = "server.worlds[0].getWorldBorder().setSize (" + size + ");\n";
  return code;
}

Blockly.Python['lightning'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var code = "server.worlds[0].strikeLightning(" + location + ");\n";
  return code;
}

Blockly.Python['modifystack'] = function(block) {
  var item = Blockly.Python.valueToCode(block, "ITEM", Blockly.Python.ORDER_ATOMIC); 
  item = insideParen(item);
  var modifications = Blockly.Python.statementToCode (block, 'MODIFICATIONS' );  

  var code = "";
  var first = true;
  code = showInstantiations (code , [] );
  code = code + 'var itemStack = ' + item + ';\n';
  
  code = code + modifications;  
  return code;
};

Blockly.Python['equipmentname'] = function(block) {
  var name =  block.getFieldValue ('NAME');
  instantiateVariable ("meta");
  var code = "meta = itemStack.getItemMeta();\n" + 
             "meta.setDisplayName(" + name + ");\n" + 
             "itemStack.setItemMeta (meta);\n" 
  
  return code;
};

Blockly.Python['updateinventory'] = function(block) {
  var itemStack = Blockly.Python.valueToCode(block, 'ITEMSTACK', Blockly.Python.ORDER_ATOMIC);
  itemStack = insideParen (itemStack);
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  var code = 'if (' + player + ' != null) { ' + player + '.getInventory().addItem (' + itemStack + '); }\n';
  return code;
};

Blockly.Python['getequipmentname'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code = player + '.getItemInHand().getItemMeta().getDisplayName().toUpperCase()';  
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['playerhas'] = function(block) {
  instantiateVariable (
    ' hack;\n  function stackIt ( material, name ) {\n' + 
    '  var itemStack = new org.bukkit.inventory.ItemStack (material,1);\n' + 
    '  var meta;\n' + 
    '  if (name != "") {\n' +  
    '     meta = itemStack.getItemMeta();\n' + 
    '     meta.setDisplayName(name);\n' + 
    '     itemStack.setItemMeta (meta);\n' + 
    '  }\n' + 
    '  return itemStack;\n' + 
    '}\n' 
  );    
 
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var name = block.getFieldValue ('NAME');
  var material = Blockly.Python.valueToCode(block, 'MATERIAL', Blockly.Python.ORDER_ATOMIC);
  material = insideParen (material);
  var code = player + '.getInventory().containsAtLeast (stackIt (org.bukkit.Material.' + material + ',' +  name + '),1)'; 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['servercommand'] = function(block) {
  var command = block.getFieldValue ("COMMAND");
  if ((command.indexOf ( "\"" ) == -1) && (command.indexOf ( "'") == -1 )) {
     if (command.indexOf ( " " ) > -1) { 
        command = "\"" + command + "\""; // Add double quotes.
     } 
  }
  var code = "org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), " +
         command + ");\n";
  return code;
}

Blockly.Python['pushlist'] = function(block) {
  var varname = block.getFieldValue ('VARNAME'); 
  var expression = block.getFieldValue("EXPRESSION");
  // expression = insideParen (expression);  
  instantiateVariable (varname);
  var code = varname + '.push(' + expression + ');\n';
  return code;
};

Blockly.Python['getblocktype'] = function(block) {
  var b = insideParen(Blockly.Python.valueToCode(block, 'BLOCK', Blockly.Python.ORDER_ATOMIC));
  var code = "(" + b + "==null)?null:" + b + ".getType()"; 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['getsignline'] = function(block) {
  var b = Blockly.Python.valueToCode(block, 'BLOCK', Blockly.Python.ORDER_ATOMIC);
  b = insideParen (b);
  var line = parseInt(block.getFieldValue("LINE")) - 1;  
  var code = "(" + b + "==null)?null: (" + b + ".state.getLine == null)?null:" + b + ".state.getLine(" + line + ")";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['whichblock'] = function(block) {
  var b = block.getFieldValue("BLOCK"); 
  //b = insideParen (b);
  var code = b;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['getBlock'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var code = "server.worlds[0].getBlockAt (" + location + ")";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['blockatlocation'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen(location);
  var code = "server.worlds[0].getBlockAt (" + location + ")"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['allplayers'] = function(block) {
  var code = "server.getOnlinePlayers()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['allentities'] = function(block) {
  var code = "server.worlds[0].getEntities()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['blockfacing'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen(location); 
  var direction = Blockly.Python.valueToCode(block, 'FACE', Blockly.Python.ORDER_ATOMIC);  
  direction = insideParen (direction);
  instantiateVariable ("_data");
  instantiateVariable ("_block");

  var code = "_block = server.worlds[0].getBlockAt (" + location + ")\n" + 
             "_data = _block.getBlockData();\n" + 
             "_data.setFacing(" + direction + ")\n" + 
             "_block.setBlockData(_data)\n"; 
  return code;
};


Blockly.Python['signfacing'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen(location); 
  var direction = block.getFieldValue("FACE");
  instantiateVariable ("data");
  instantiateVariable ("block");
  instantiateVariable ("sign");
  
  var code = "block = server.worlds[0].getBlockAt (" + location + ")\n" + 
             "sign = block.getState();\n" + 
             "data = new org.bukkit.Material.Sign (org.bukkit.Material.OAK_SIGN);\n" + 
             "data.setFacingDirection (" + direction + ");\n" + 
             "sign.setData (data);\n" + 
             "sign.update();\n"   
  return code;
};

Blockly.Python['getcolor'] = function(block) {
  var color = block.getFieldValue("COLOR");
  var code = "org.bukkit.Color." + color;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['setblockcommand'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen(location);
  var command = block.getFieldValue("COMMAND");
  if ((command.indexOf ( "\"") == -1) && (command.indexOf ( "'") == -1)) {
     command = "\"" + command + "\""
  }
  instantiateVariable ("state");
  instantiateVariable ("block");
  var code = "block = server.worlds[0].getBlockAt (" + location + ");\n" + 
             "state = block.getState();\n" + 
             "state.setCommand(" + command + ");\n" + 
             "state.update();\n"              
  return code;
};

Blockly.Python['setconditional'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen(location);
  var conditional = block.getFieldValue("CONDITIONAL");
  instantiateVariable ("data");
  instantiateVariable ("block");
  var code = "block = server.worlds[0].getBlockAt (" + location + ");\n" + 
             "data = block.getBlockData();\n" + 
             "data.setConditional(" + conditional + ");\n" + 
             "block.setBlockData(data);\n"              
  return code;
};

Blockly.Python ['runexpression'] = function (block) {
  var expression = block.getFieldValue ('EXPRESSION');
  code = expression + '\n';
  return code;
};

Blockly.Python['setblockdata'] = function(block) {
  instantiateVariable ("fd");
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  var value = Blockly.Python.valueToCode (block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  value = insideParen (value);
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  location = insideParen (location);
  var code = "fd = new org.bukkit.metadata.FixedMetadataValue (__plugin," + value + ");\n" + 
             "server.worlds[0].getBlockAt(" + location + ").setMetadata (\"" + key + "\", fd );\n";
  return code;
};

Blockly.Python['getblockdata'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  location = insideParen (location);
      
  var code = "server.worlds[0].getBlockAt(" + location + ").getMetadata(\"" + key + "\")[0].value()" 
  return [code, Blockly.Python.ORDER_NONE];  
};

Blockly.Python['existsblockdata'] = function(block) {
  var key = block.getFieldValue ('KEY'); 
  key = key.toLowerCase();
  key = '_' + key + '_';
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC); 
  location = insideParen (location);
    
  var code = "server.worlds[0].getBlockAt(" + location + ").getMetadata(\"" + key + "\").length > 0" 

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['potionSplashed'] = function(block) {
  var potion = Blockly.Python.valueToCode(block, 'POTION', Blockly.Python.ORDER_ATOMIC);  
  potion = insideParen(potion);
  var code = potion + ".getItemMeta().getDisplayName()" 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['dropitem'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  var itemStack = Blockly.Python.valueToCode(block, 'ITEMSTACK', Blockly.Python.ORDER_ATOMIC);
  itemStack = insideParen (itemStack);
  location = insideParen (location);
  var code = 'server.worlds[0].dropItem (' + location + ',' + itemStack + ');\n';
  return code;
};

Blockly.Python['findentitybyname'] = function(block) {
  var name =  block.getFieldValue ('NAME');
  instantiateVariable ('entity');
  instantiateVariable ('entities');
  var code = 
    'entity = null;\n' + 
    'entities = server.worlds[0].getEntities();\n' + 
    'for (var i = 0; i<entities.length; i++) { \n' + 
    "  if (entities[i].name == " + name + ") {\n" + 
    "     entity = entities[i];\n" +  
    "     break;\n" + 
    "  }\n" +
    "}\n";    
  return code; 
};

Blockly.Python['findentitybycustomname'] = function(block) {
  var name =  block.getFieldValue ('NAME');
  instantiateVariable ('entity');
  instantiateVariable ('entities');
  var code = 
    "entity = null;\n" + 
    "entities = server.worlds[0].getEntities();\n" + 
    "for (var i = 0; i<entities.length; i++) { \n" + 
    "   if (entities[i].getCustomName != null) { \n" + 
    "      if (entities[i].getCustomName() == " + name + ") {\n" + 
    "         entity = entities[i];\n" +  
    "         break;\n" + 
    "      }\n" + 
    "   }\n" +
    "}\n";    
  return code; 
};

Blockly.Python['whicheffect'] = function(block) {
  var effect = block.getFieldValue ("EFFECT");
  var code = 'org.bukkit.potion.PotionEffectType.' + effect.toUpperCase()
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['createvector'] = function(block) {
  var x = block.getFieldValue ('X'); 
  var y = block.getFieldValue ('Y');
  var z = block.getFieldValue ('Z');
  
  if (x.indexOf ( '.' ) == -1) {
     x = x + ".0";
  }
  if (y.indexOf ( '.' ) == -1) {
     y = y + ".0";
  }
  if (z.indexOf ( '.' ) == -1) {
     z = z + ".0";
  }
    
  code = "new org.bukkit.util.Vector(" + x + "," + y + "," + z + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['vector2points'] = function(block) {
  var location1 = Blockly.Python.valueToCode(block, 'LOCATION1', Blockly.Python.ORDER_ATOMIC);
  location1 = insideParen (location1);
  var location2 = Blockly.Python.valueToCode(block, 'LOCATION2', Blockly.Python.ORDER_ATOMIC);
  location2 = insideParen (location2);
  code = location2 + ".toVector().subtract(" + location1 + ".toVector())"  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['multiplyvector'] = function(block) {
  var vector =  Blockly.Python.valueToCode(block, 'VECTOR', Blockly.Python.ORDER_ATOMIC);
  vector = insideParen (vector);
  var scalar = block.getFieldValue ('SCALAR');
  var code = vector + ".multiply (" + scalar + ")";   
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['getvectorvelocity'] = function(block) {
  var entity =  Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);   
  entity = insideParen (entity)
  code = entity + ".getVelocity()"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setvectorvelocity'] = function(block) {
  var entity =  Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);  
  entity = insideParen(entity)  
  var vector =  Blockly.Python.valueToCode(block, 'VECTOR', Blockly.Python.ORDER_ATOMIC);  
  vector = insideParen (vector)  
  code = entity + ".setVelocity("+ vector + ");\n"
  return code; 
};

Blockly.Python['findentitybylocation'] = function(block) {
  var location =  Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);  
  location = insideParen (location)
  var radius = block.getFieldValue ("RADIUS");  
  instantiateVariable ('entity');
  instantiateVariable ('entities');
  var code = 
    'entity = null;\n' + 
    'entities = server.worlds[0].getEntities();\n' + 
    'for (var i = 0; i<entities.length; i++) { \n' + 
    "  if (entities[i].location.distance (" + location + ") < " + radius + ") {\n" + 
    "     entity = entities[i];\n" +  
    "     break;\n" + 
    "  }\n" +
    "}\n";    
  return code; 
};

Blockly.Python['distancebetweenlocations'] = function(block) {
  var location1 =  Blockly.Python.valueToCode(block, 'LOCATION1', Blockly.Python.ORDER_ATOMIC);   
  var location2 =  Blockly.Python.valueToCode(block, 'LOCATION2', Blockly.Python.ORDER_ATOMIC);   
  location1 = insideParen (location1)
  location2 = insideParen (location2)
  code = location1 + ".distance(" + location2 + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['direction'] = function(block) {
  var direction =  block.getFieldValue ('DIRECTION');   
  code = "org.bukkit.block.BlockFace." + direction;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['lookingdirection'] = function(block) {
  var player =  Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);   
  instantiateVariable ("directions = [org.bukkit.block.BlockFace.SOUTH,org.bukkit.block.BlockFace.SOUTH_SOUTH_WEST,org.bukkit.block.BlockFace.SOUTH_WEST,org.bukkit.block.BlockFace.WEST_SOUTH_WEST," + 
                                     "org.bukkit.block.BlockFace.WEST,org.bukkit.block.BlockFace.WEST_NORTH_WEST,org.bukkit.block.BlockFace.NORTH_WEST,org.bukkit.block.BlockFace.NORTH_NORTH_WEST,org.bukkit.block.BlockFace.NORTH,org.bukkit.block.BlockFace.NORTH_NORTH_EAST,org.bukkit.block.BlockFace.NORTH_EAST,org.bukkit.block.BlockFace.EAST_NORTH_EAST,org.bukkit.block.BlockFace.EAST,org.bukkit.block.BlockFace.EAST_SOUTH_EAST,org.bukkit.block.BlockFace.SOUTH_EAST,org.bukkit.block.BlockFace.SOUTH_SOUTH_EAST]");
                                     
  code = "directions[parseInt((" + player + ".getLocation().getYaw() + 368.0 ) / 22.5) % 16]"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['millis'] = function(block) {
  code = "new Date().getTime()"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['getentitytype'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen (entity);
  var code = entity + ".getType()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['randomnumber'] = function(block) {
  var low = Blockly.Python.valueToCode(block, 'LOW', Blockly.Python.ORDER_ATOMIC);
  var high = Blockly.Python.valueToCode(block, 'HIGH', Blockly.Python.ORDER_ATOMIC);
  var code  = "parseInt (Math.random () * (" + high + "-" + low + ")) + " + low 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['isplayer'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code = player + " instanceof org.bukkit.entity.Player";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['islivingentity'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var code = entity + " instanceof org.bukkit.entity.LivingEntity";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['addpotioneffect'] = function(block) {
  var effect =  Blockly.Python.valueToCode(block, 'EFFECT', Blockly.Python.ORDER_ATOMIC);  
  effect = insideParen(effect)  
  var player =  Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);  
  player = insideParen (player)  
  var duration =  Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);  
  duration = parseInt(insideParen (duration)) * 20 // 20 ticks per second
    
  code = player + ".addPotionEffect(new org.bukkit.potion.PotionEffect (" + effect + "," + duration + ", 1));\n"
  return code; 
};

Blockly.Python['spawnentity'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, "ENTITY", Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen(entity);
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);  
  var code = "server.worlds[0].spawnEntity(" + location + "," + entity + ")"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['nameastack'] = function(block) {
  var stack  = Blockly.Python.valueToCode(block, 'STACK', Blockly.Python.ORDER_ATOMIC);
  stack = insideParen (stack);
  var name = block.getFieldValue ('NAME');   
  instantiateVariable ( 'meta' )
  instantiateVariable ( 'stack' )
  var code = 'stack = ' + stack + ';\n' + 
             'meta = stack.getItemMeta()\n' + 
             'meta.setDisplayName (' + name + ');\n' +
             'stack.setItemMeta(meta);\n';             
  return code;
};

Blockly.Python['nameofitem'] = function(block) {
  var item = Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_ATOMIC);
  item = insideParen (item)
  var ind = item.indexOf ( "()" ) 
  var functionName = (ind > -1) ? item.substring(0,ind) : item; 
  var code = "(" + functionName + "== null) ? \"\" : " + 
           "(" + item + ".getItemMeta == null ) ? \"\" : "  + 
           "(" + item + ".getItemMeta() == null ) ? \"\" : " + 
           "(" + item + ".getItemMeta().getDisplayName == null ) ? \"\" : " + 
           item + ".getItemMeta().getDisplayName()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['playerinventory'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player)
  var code = player + ".getInventory()"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['clearinventory'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player)
  var code = player + ".getInventory().clear();\n"              
  return code;
};


Blockly.Python['lookingat'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player)
  var code = player + ".getTargetBlock(null,200)"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['vectortoyaw'] = function(block) {
  var vector = Blockly.Python.valueToCode(block, 'VECTOR', Blockly.Python.ORDER_ATOMIC);
  vector = insideParen (vector)
  instantiateVariable ("function finalVecAdjust (v){return (v<-180) ? v+360 : (v>180 ) ? v-360 : v; }" );
  
  var code = "finalVecAdjust((" + vector + ".getX==null) ? 0 : (" + vector + 
                              ".getZ==null) ? 0 : ((" + vector + ".getX()!= 0) ? ((" + 
							  vector + ".getX()<0) ? 1.5*Math.PI : 0.5*Math.PI) - Math.atan(" + 
							  vector + ".getZ()/" + vector + ".getX()) : (" + vector + ".getZ()<0) ? Math.PI : 0) * (-1*180/Math.PI))"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['boundingbox'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location)
  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC);
  radius = insideParen (radius)
  var code = "org.bukkit.util.BoundingBox (" +
     location  + ".x-" + radius + "," + 
     location  + ".y-" + radius + "," +      
     location  + ".z-" + radius + "," +      
     location  + ".x+" + radius + "," + 
     location  + ".y+" + radius + "," +      
     location  + ".z+" + radius + ")"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['nearbyentities'] = function(block) {
  var location = insideParen(Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC));
  var radius = block.getFieldValue ( 'RADIUS');
  var code = "server.worlds[0].getNearbyEntities (" + location + "," + radius + "," + radius + "," + radius + ")"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['tocreature'] = function(block) {
  var creature = Blockly.Python.valueToCode(block, 'CREATURE', Blockly.Python.ORDER_ATOMIC);
  creature = insideParen (creature)
  var code = "eval (\"org.bukkit.entity.EntityType.\" + " + creature + ".toUpperCase())"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['hasfunction'] = function(block) {
  var obj = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  obj = insideParen (obj)
  var name =  block.getFieldValue ('NAME');   
  
  var code = obj + '.' + name + ' != null';
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['isarrow'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var code = entity + " instanceof org.bukkit.entity.Arrow";
  return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Python['issnowball'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var code = entity + " instanceof org.bukkit.entity.Snowball";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['actiontype'] = function(block) {
  var action = block.getFieldValue ("ACTION");
  action = insideParen(action)
  var code = 'org.bukkit.event.block.Action.' + action;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['projectileentity'] = function(block) {
  var projectile = block.getFieldValue ("PROJECTILE");
  projectile = 'org.bukkit.entity.EntityType.' + insideParen (projectile);
  return [projectile, Blockly.Python.ORDER_NONE];
}

Blockly.Python['launchprojectile'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  var projectile = Blockly.Python.valueToCode(block, 'PROJECTILE', Blockly.Python.ORDER_ATOMIC);
  var code;
  entity = insideParen (entity);
  projectile = insideParen (projectile);
  
  instantiateVariable ("projectile");
  code = "projectile=server.worlds[0].spawnEntity(" + entity + ".location," + projectile + ");\n" + 
         entity + ".launchProjectile(projectile.getClass());\n"                 
  return code;
};

Blockly.Python['nameofstack'] = function(block) {
  var stack = Blockly.Python.valueToCode(block, 'STACK', Blockly.Python.ORDER_ATOMIC);  
  stack = insideParen(stack);
  var code = '(' + stack + '== null) ? null : (' + stack + '.getItemMeta == null) ? null : (' + stack + '.getItemMeta() == null)?null:' + stack + '.getItemMeta().getDisplayName()'; 
  var code = '(function() { ' + 
             '  var _value = ' + code + ';\n' + 
             '  console.log ( \'Custom name: [\' + _value + \']\');\n' + 
             '  return _value;' + 
             ' })()'   
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['playerinventory'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);  
  player = insideParen(player);
  var code = player + ".getInventory()" 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['chestplate'] = function(block) {
  var inventory = Blockly.Python.valueToCode(block, 'INVENTORY', Blockly.Python.ORDER_ATOMIC);  
  inventory = insideParen(inventory);
  var code = inventory + ".getChestplate()" 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['materialdata'] = function(block) {
  var stack = Blockly.Python.valueToCode(block, 'STACK', Blockly.Python.ORDER_ATOMIC);  
  stack = insideParen(stack);
  var code = "(" + stack + " == null ) ? null : (" + stack + ".getType == null) ? null : " +  stack + ".getType()" 
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['sethotbar'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  var slot = block.getFieldValue ("SLOT");
  var stack = Blockly.Python.valueToCode(block, 'STACK', Blockly.Python.ORDER_ATOMIC);
  stack = insideParen (stack)
  player = insideParen (player)
  slot = parseInt(slot)
  if ((slot <1) || (slot > 9)) {
	  alert ( 'Range of slot for player gear is 1..9' );
	  slot = 1;
  }
  var code = player + ".getInventory().setItem (" + (slot-1) + "," + stack + " );\n"              
  return code;
};

Blockly.Python['tameentity'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen (entity);
  var code;
  code = 'if (' + entity + '.setTamed != null) {\n' + 
         '  ' + entity + '.setTamed (true);\n' + 
         '}\n';            
  return code;
};

Blockly.Python['attackentity'] = function(block) {
  var attacker = Blockly.Python.valueToCode(block, 'ATTACKER', Blockly.Python.ORDER_ATOMIC);
  attacker = insideParen (attacker);
  var target = Blockly.Python.valueToCode(block, 'TARGET', Blockly.Python.ORDER_ATOMIC);
  target = insideParen (target);
  var code;
  code = attacker + '.setTarget (' + target + ')\n';
  return code;
};

Blockly.Python['namethestack'] = function(block) {
  var stack  = Blockly.Python.valueToCode(block, 'STACK', Blockly.Python.ORDER_ATOMIC);
  stack = insideParen (stack);
  var name = block.getFieldValue ('NAME');   
  if ((name.indexOf ( " " ) > -1) && (name.indexOf ( "\"") == -1) && (name.indexOf ( "'" ) == -1) ) {
     name = "\"" + name + "\"";
  }	 
  instantiateVariable ( 'meta' )
  instantiateVariable ( 'stack' )
  var code = '(function() { ' + 
             '  var s = ' + stack + ';' + 
             '  var m = s.getItemMeta();' + 
             '  m.setDisplayName (' + name + ');' +
             '  s.setItemMeta(m);' + 
             '  return s;' + 
             ' })()'              
			 
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['locationadd'] = function(block) {
  var x = block.getFieldValue ('X'); 
  //x = insideParen (x);
  var y = block.getFieldValue ('Y');
  //y = insideParen (y);
  var z = block.getFieldValue ('Z');
  //z = insideParen (z);
  var location = insideParen(Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC));
  
  var code = '(function() { ' + 
                'var _x = ' + location + '.x + ' + x + ';' + 
                'var _y = ' + location + '.y + ' + y + ';' +
                'var _z = ' + location + '.z + ' + z + ';' +                 
                'var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);' + 
                'return loc;' + 
             ' })()' 
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['entitydead'] = function(block) {
  var entity = insideParen(Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC));
    
  code = "(" + entity + " == null ) ? false : " + entity + ".isDead()";
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['isspectator'] = function(block) {
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC));
    
  code = "(" + player + " == null ) ? false : (" + player + ".getGameMode().toString() == \"SPECTATOR\")";
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['eventinfo'] = function(block) {
  var information = block.getFieldValue ('INFORMATION');
  if (information == 'getRecipe().getResult()') {
     code = "(event.getRecipe == null)? null : event.getRecipe().getResult()";
  } else {   
     code = "(event." + information + "== null) ? null : event." + information + "()"; 
  }
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['removeplayersdata'] = function(block) {
  var key = block.getFieldValue ('KEY');
  key = key.toLowerCase();
  key = '_' + key + '_';
  instantiateVariable ( "players");
  var code = "players = server.getOnlinePlayers();\n" + 
             "for (var playersIndex=0; playersIndex<players.length; playersIndex++) {\n" + 
			 "  players[playersIndex].removeMetadata (\"" + key + "\", __plugin );\n" + 
			 "}\n" 
  return code;
};

Blockly.Python['diamondarmor'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player );
  var code = "var player = " + player + ";\n" + 
			 "var items = require ('items');\n" + 
			 "player.equipment.helmet = items.diamondHelmet(1);\n" + 
			 "player.equipment.boots = items.diamondBoots(1);\n" + 
			 "player.equipment.chestplate = items.diamondChestplate(1);\n" + 
			 "player.equipment.leggings = items.diamondLeggings(1);\n";  
  return code;
};

Blockly.Python['removeplayersgear'] = function(block) {
    
  var code = "players = server.getOnlinePlayers();\n" + 
             "for (var playersIndex=0; playersIndex<players.length; playersIndex++) {\n" + 
			          "  players[playersIndex].getInventory().clear();\n" + 
         			 "}\n" 
  return code;
};

Blockly.Python['setplayerhealth'] = function(block) {
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC)); 
  var health = insideParen(Blockly.Python.valueToCode(block, 'HEALTH', Blockly.Python.ORDER_ATOMIC)); 
  
  var code = '(function() { ' + 
		         	 '  var h=' + health + ';\n' + 
			          '  if (' + player + '.setHealth != null) {\n' + 
			          '    if (h<0) {\n' + 
         			 '       h = 0;\n' + 
         			 '    }\n' + 
         			 '    ' + player + '.setHealth(h);' + 
	         		 '  }\n' + 
             ' })();\n'              
  return code;
};

Blockly.Python['createexplosion'] = function(block) {
  var size = parseFloat(block.getFieldValue ('SIZE'));    
  var fire = block.getFieldValue ( 'FIRE' );
  var destroy = block.getFieldValue ( 'DESTROY' );
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);    
  location = insideParen (location);
  var code = "server.worlds[0].createExplosion (" + location + "," + size + "," + 
             fire + ',' + destroy + ");\n";
  
  return code;
};

Blockly.Python['countcondition'] = function(block) {
  var list = insideParen(Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC));
  var condition = block.getFieldValue ( 'CONDITION' );  
  var code = '(function() { \n' +
             '  var count = 0;\n' +   
             '  for (var i=0; i<' + list + '.length; i++) {\n' + 
             '     if (' + list + '[i] == ' +  condition + ') {\n' + 
             '        count = count + 1;\n' + 
             '     }\n' +
             '  }\n' + 
             '  return count;' + 
             ' })()'              
  return [code, Blockly.Python.ORDER_NONE]; 
};

Blockly.Python['healthofplayer'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player)
  var code = player + '.getHealth()';  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setprojectilespeed'] = function(block) {
  var speed = parseInt(insideParen(Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC))); 
  if (speed > 7) {
	 speed = '7';
  } else if (speed < 1) {
	 speed = 0.5
  }
  var projectile = insideParen(Blockly.Python.valueToCode(block, 'PROJECTILE', Blockly.Python.ORDER_ATOMIC));     
	
  var code = '(function() { \n' +
             '  var vector = ' + projectile + '.getVelocity().normalize().multiply(' + speed + ');\n' +   
             '  if (!isNaN(vector.x)) {\n' + 
			 '     ' + projectile + '.setVelocity (vector);\n' + 
             '  }\n' + 
             ' })();\n'   
  
  return code;
};

Blockly.Python['getshooter'] = function(block) {
  var projectile = insideParen(Blockly.Python.valueToCode(block, 'PROJECTILE', Blockly.Python.ORDER_ATOMIC)); 
  
  var code = '(' + projectile + ' == null) ? null : (' + projectile + '.getShooter == null) ? null : ' + projectile + '.getShooter()';             
  return  [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['getnewboard'] = function(block) {
  var code = 'var manager = org.bukkit.Bukkit.getScoreboardManager();\n' + 
             'exports.board = manager.getNewScoreboard();\n' +   
             'var objective = exports.board.registerNewObjective(\"objective1\", \"HEALTH\", \"Scoreboard\");\n' + 
             'objective.setDisplaySlot(org.bukkit.scoreboard.DisplaySlot.SIDEBAR);\n'              
  return code;
};

Blockly.Python['registernewteam'] = function(block) {
  var name = insideParen(Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC)); 
  
  var code = 'exports.board.registerNewTeam(' + name + ')'          
  return  [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['addteamplayer'] = function(block) {
  var team = insideParen(Blockly.Python.valueToCode(block, 'TEAM', Blockly.Python.ORDER_ATOMIC)); 
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC)); 
  var code = team + '.addPlayer (' + player + ');\n';
     
  return code;
};

Blockly.Python['friendlyfire'] = function(block) { 
  var team = insideParen(Blockly.Python.valueToCode(block, 'TEAM', Blockly.Python.ORDER_ATOMIC)); 
  var allowed = block.getFieldValue ( 'ALLOWED' ); 
  var code = team + '.setAllowFriendlyFire (' + allowed + ');\n';     
  return code;
};

Blockly.Python['setscore'] = function(block) {
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC)); 
  var value = insideParen(Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC));  
  instantiateVariable ("objective");
  var code = 'if (player != null) {\n' + 
             '  objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);\n' + 
             '  objective.getScore(' + player + ').setScore(' + value + ');\n' + 
             '  ' + player + '.setScoreboard (exports.board);\n' + 
             '}\n';             
  return code;
};

Blockly.Python['scoreboardtitle'] = function(block) { 
  var title = insideParen(Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC)); 
  
  instantiateVariable ("objective");
  instantiateVariable ("players");
  var code = 'objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);\n' + 
             'objective.setDisplayName(' + title + ');\n' +  
             '// Update scoreboard for all players\n' +      
             'players=server.getOnlinePlayers();\n' +
             'for (var playerIndex=0; playerIndex<players.length;playerIndex++) {\n' +
             '  score=(players[playerIndex]== null)? null : (players[playerIndex].getMetadata == null)?null:(players[playerIndex].getMetadata("_score_").length == 0)?null:players[playerIndex].getMetadata("_score_")[0].value();\n' +
             '  objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);\n' +
             '  objective.getScore(players[playerIndex]).setScore(score);\n' +
             '  players[playerIndex].setScoreboard (exports.board);\n' +
             '}; \n'           
  return code;
};


Blockly.Python['increment'] = function(block) {
  var variable = insideParen(Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC)); 
  
  instantiateVariable ( 'value' );
  var code = '(function () {\n'  + 
             '  var value = ( ' + variable + '==null)?0:' + variable + ';\n' + 
             '  ' + variable + '= value+1;\n' +
             '})();\n'
  return code;
};

Blockly.Python['allplayerssetscore'] = function(block) {
  var score = insideParen(Blockly.Python.valueToCode(block, 'SCORE', Blockly.Python.ORDER_ATOMIC));   
  instantiateVariable ("objective");
  instantiateVariable ("players");
  var code = 'objective = exports.board.getObjective (org.bukkit.scoreboard.DisplaySlot.SIDEBAR);\n' + 
             'players = server.getOnlinePlayers();\n' + 
             'for (var playersIndex=0; playersIndex<players.length; playersIndex++) {\n' + 
             '  objective.getScore(players[playersIndex]).setScore(' + score + ');\n' + 
             '  players[playersIndex].setScoreboard (exports.board);\n' + 
		         	 '}\n'; 
  return code;
};

Blockly.Python['allplayersmessage'] = function(block) {
  var message = insideParen(Blockly.Python.valueToCode(block, 'MESSAGE', Blockly.Python.ORDER_ATOMIC));   
  var code = 'org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), ' + 
             '\"say @a \" + ' + message + ');\n';
  return code;
};

Blockly.Python['diamondhelmet'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player );
  instantiateVariable ( "_player" );
  instantiateVariable ( "items" );
  var code = "_player = " + player + ";\n" + 
	         		 "items = require ('items');\n" + 
	         		 "_player.equipment.helmet = items.diamondHelmet(1);\n"; 
  return code;
};

Blockly.Python['goldboots'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player );
  instantiateVariable ( "player" );
  instantiateVariable ( "items" );
  var code = "player = " + player + ";\n" + 
	         		 "items = require ('items');\n" + 
	         		 "player.equipment.boots = items.goldenBoots(1);\n";

  return code;
};

Blockly.Python['changelocation'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location);
  var direction = Blockly.Python.valueToCode(block, 'DIRECTION', Blockly.Python.ORDER_ATOMIC);
  direction = insideParen (direction);
  
  var code = '(function() { \n' +                
                '  var _location = new org.bukkit.Location(server.worlds[0], ' + location + '.x, ' + location + '.y, ' + location + '.z);\n' +   
                ' _location = ' +                 
                '(' + direction + ' == org.bukkit.block.BlockFace.NORTH ) ? _location.add (0,0,-1) : ' + 
                '(' + direction + ' == org.bukkit.block.BlockFace.SOUTH ) ? _location.add (0,0,1) : ' +   
                '(' + direction + ' == org.bukkit.block.BlockFace.EAST )   ? _location.add (1,0,0) : ' + 
                '(' + direction + ' == org.bukkit.block.BlockFace.WEST )   ? _location.add (-1,0,0) : ' + 
                '(' + direction + ' == org.bukkit.block.BlockFace.UP )     ? _location.add (0,1,0) : ' + 
                '(' + direction + ' == org.bukkit.block.BlockFace.DOWN )   ? _location.add (0,-1,0):null;\n' +                 
                '  return _location;\n' +                 
                ' })()';    
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['valueinlist'] = function(block) {
  var value = Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC);
  value = insideParen (value)
  var list = Blockly.Python.valueToCode(block, "LIST", Blockly.Python.ORDER_ATOMIC);
  list = insideParen (list)
  var code = "(" + list + ".indexOf ( " + value + ") >= 0)"
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['deletefromlist'] = function(block) {
  var index = block.getFieldValue ( 'INDEX' ); 
  var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC); 
  list = insideParen (list);
  var code = list + '.splice (' + index + ',1);\n';
  return code;
};

Blockly.Python['forchinstring'] = function(block) {
  
  var name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ADDITIVE); 
  name = insideParen (name);
  
  var forCode = Blockly.Python.statementToCode (block, 'FORCODE' ); 
  instantiateVariable ("_ch");
   
  var code = 'for (var _ch_i=0; _ch_i<' + name + '.length;_ch_i++) {\n'  + 
             '  _ch = ' + name + '.charAt(_ch_i);\n' + 
             forCode + 
             '};\n';
  
  return code;
};

Blockly.Python['breakoutofloop'] = function(block) {
  return "break;\n";
};

Blockly.Python['blockinradius'] = function(block) {   
  var location = Blockly.Python.valueToCode(block, "LOCATION", Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location)
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC);
  radius = insideParen (radius)
  var blockType = Blockly.Python.valueToCode(block, "BLOCKTYPE", Blockly.Python.ORDER_ATOMIC);
  blockType = insideParen(blockType);
  
  var code = 
    "function(){var _found;var _block;var _loc;_found=false;\n" + 
      "for (var x=-" + radius + "; x<parseInt(" + radius + "*2); x++){" + 
        "for (var y=-" + radius + "; y<parseInt(" + radius + "*2); y++) {" + 
          "for (var z=-" + radius + "; z<parseInt(" + radius + "*2); z++) {\n" + 
            "_loc=(function() { var _x = " + location + ".x + x;" + 
            "var _y = " + location + ".y + y;var _z = " + location + ".z + z;" + 
            "var _locBlockInRadius = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return _locBlockInRadius; })();\n" + 
            "_block=server.worlds[0].getBlockAt (_loc);\n" + 
            "if ((((_block==null)?null:_block.getType()) == (" + blockType + "))){\n" + 
              "_found=true;" + 
              "break;" +
            "}" + 
          "}" + 
          "if (_found){" + 
            "break;" + 
          "}" +           
        "}" + 
        "if (_found){" + 
          "break;" + 
        "}" + 
      "}\n" + 
    "return _found;" + 
  "}()\n";
  
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['cancelfriendlydamage'] = function(block) {
  var code =
     "(function () {var _target;var _team1;var _attacker;var _team2;var _owner;var _fd;\n" + 
        "_target=(event.getEntity== null) ? null : event.getEntity();\n" + 
        "_team1=(_target== null)? null : (_target.getMetadata == null)?null:(_target.getMetadata(\"_team_\").length == 0)?null:_target.getMetadata(\"_team_\")[0].value();\n" + 
        "_attacker=(event.getDamager== null) ? null : event.getDamager();\n" + 
        "_team2=(_attacker== null)? null : (_attacker.getMetadata == null)?null:(_attacker.getMetadata(\"_team_\").length == 0)?null:_attacker.getMetadata(\"_team_\")[0].value();\n" + 
        "_owner=(_attacker== null)? null : (_attacker.getMetadata == null)?null:(_attacker.getMetadata(\"_owner_\").length == 0)?null:_attacker.getMetadata(\"_owner_\")[0].value();\n" + 
        "if ((_team1 != null) && (_team2 != null)){" + 
          "if (_team1 == _team2){" + 
            "if (_attacker != null ) {" + 
               "_attacker.sendMessage (\"Ouch! we are on the same team yo\");" + 
            "}\n" + 
            "if (_owner != null ) {" + 
               "_owner.sendMessage (\"Stop! we are friends yo\");" + 
            "}\n" + 
            "event.cancelled = true;\n" +
          "} else {\n" + 
            "_fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,_attacker);\n" +
            "if (_target != null) {" + 
              "if (_target.setMetadata != null ) {" + 
                "_target.setMetadata (\"_attacker_\", _fd );" + 
              "}" + 
            "}\n" + 
          "}" + 
        "}" + 
     "}());\n" 
  return code;
};

Blockly.Python['friendlynearby'] = function(block) {   
  var location = Blockly.Python.valueToCode(block, "LOCATION", Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location)
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC);
  radius = insideParen (radius)
  var team = Blockly.Python.valueToCode(block, "TEAM", Blockly.Python.ORDER_ATOMIC);
  team = insideParen(team);
  
  var code = 
      "function () { var _near;var _players;var _distance;_near=false;\n" + 
        "_players=server.getOnlinePlayers();\n" + 
        "for (var _i=0; _i<_players.length;_i++) {\n" + 
           "_distance=" + location + ".distance(_players[_i].location);\n" + 
           "if(_distance <= " + radius + "){" + 
              "if ((" + team + "== ((_players[_i]== null)? null : (_players[_i].getMetadata == null)?null:(_players[_i].getMetadata(\"_team_\").length == 0)?null:_players[_i].getMetadata(\"_team_\")[0].value()))){" + 
                 "_near=true;" + 
                 "break;" + 
               "}" +
            "}" +
         "}\n" +
       "return _near;" + 
     "}()";
  
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['randomizechests'] = function(block) {
  var goodies = Blockly.Python.valueToCode(block, "GOODIES", Blockly.Python.ORDER_ATOMIC);
  goodies = insideParen (goodies);
  var code =
   "(function () {" + 
      "var _world;" + 
      "var _chunks;" +
      "var _chunk;" + 
      "var _blocks;" + 
      "var _blockType;" + 
      "var _inventory;\n" + 
      "_world=server.worlds[0];" + 
      "_chunks=_world.getLoadedChunks();\n" + 
      "for (var _chunkIndex=0; _chunkIndex<_chunks.length;_chunkIndex++) {" + 
         "_chunk=_chunks[_chunkIndex];" + 
         "_blocks=_chunk.getTileEntities();" + 
         "for (var _blockIndex=0; _blockIndex<_blocks.length;_blockIndex++) {\n" + 
            "_blockType=(_blocks[_blockIndex]==null)?null:_blocks[_blockIndex].getType();\n" + 
            "if (_blockType == org.bukkit.Material.CHEST){\n" + 
               "_inventory=_blocks[_blockIndex].getBlockInventory();" + 
               "_inventory.clear();\n" + 
               "console.log ( \"add goodies\");\n" + 
               "for (var _goodieIndex=0;_goodieIndex<" + goodies + ".length;_goodieIndex++) {\n" + 
                  "if ((parseInt (Math.random () * (100-1)) + 1) > 50){" + 
                     "_inventory.addItem (" + goodies + "[_goodieIndex]);\n" + 
                  "}" +
               "}" +                
            "}" + 
         "}" +
      "}" +
    "})();\n"
  return code;
};

Blockly.Python['m1garand'] = function(block) {
  var code =
    "(function () {var _player;var _inhand;var _stack;var _fireAgain;var _projectile;var _shooter;var _team;var _fd;\n" + 
       "if (event instanceof org.bukkit.event.player.PlayerInteractEvent){\n" + 
          "_player=(event.getPlayer== null) ? null : event.getPlayer();\n" + 
          "_inhand=(_player== null) ? null :(_player.getItemInHand == null)?null:_player.getItemInHand();\n" + 
          "_stack=(_inhand== null) ? null : (_inhand.getItemMeta == null) ? null : (_inhand.getItemMeta() == null)?null:_inhand.getItemMeta().getDisplayName();\n" + 
          "if (_stack == \"M1-Garand\"){\n" + 
            "_fireAgain=(_player== null)? null : (_player.getMetadata == null)?null:(_player.getMetadata(\"_fireagain_\").length == 0)?null:_player.getMetadata(\"_fireagain_\")[0].value();\n" + 
            "if ((new Date().getTime()) > _fireAgain){\n" + 
               "_projectile=server.worlds[0].spawnEntity(_player.location,org.bukkit.entity.EntityType.ARROW);" + 
               "_player.launchProjectile(_projectile.getClass());" + 
               "_fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,(new Date().getTime()) + 1000);\n" + 
               "if (_player != null) {\n" + 
                  "if (_player.setMetadata != null ) {\n" + 
                     "_player.setMetadata (\"_fireagain_\", _fd );\n" + 
                  "}" + 
               "}" +
            "}" +
          "}\n" +
       "}else if (event instanceof org.bukkit.event.entity.ProjectileLaunchEvent){\n" + 
          "_projectile=(event.getEntity== null) ? null : event.getEntity();" + 
          "_shooter=(_projectile == null) ? null : (_projectile.getShooter == null) ? null : _projectile.getShooter();" + 
          "_team=(_shooter== null)? null :(_shooter.getMetadata == null)?null:(_shooter.getMetadata(\"_team_\").length == 0)?null:_shooter.getMetadata(\"_team_\")[0].value();" + 
          "_fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,_team);\n" + 
          "if (_projectile != null) {" + 
             "if (_projectile.setMetadata != null ) {" + 
                 "_projectile.setMetadata (\"_team_\", _fd );\n" + 
             "}" +
          "}" +
          "_fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,_shooter);" + 
          "if (_projectile != null) {" + 
             "if (_projectile.setMetadata != null ) {" + 
                "_projectile.setMetadata (\"_owner_\", _fd );" + 
             "}" +
          "}\n" +
          "_inhand=(_shooter== null) ? null : ( _shooter.getItemInHand == null) ? null : _shooter.getItemInHand();" + 
          "_stack=(_inhand== null) ? null : (_inhand.getItemMeta == null) ? null : (_inhand.getItemMeta() == null)?null:_inhand.getItemMeta().getDisplayName();\n" + 
          "if (stack == \"M1-Garand\"){" + 
            "(function() {var _vector = _projectile.getVelocity().normalize().multiply(7);if (!isNaN(_vector.x)){_projectile.setVelocity(_vector);}})();\n" +
          "}" +
       "}" +
    "}());";    
  return code;
};

Blockly.Python['minigun'] = function(block) {
  var code =
    "(function () {var _player;var _inhand;var _name;var _i;var _projectile;\n" + 
       "if (event instanceof org.bukkit.event.player.PlayerInteractEvent){\n" + 
          "_player=(event.getPlayer== null) ? null : event.getPlayer();\n" + 
          "_inhand=(_player== null)?null:( _player.getItemInHand == null) ? null : _player.getItemInHand();\n" + 
          "_name=(_inhand== null)?null:(_inhand.getItemMeta==null)?null:(_inhand.getItemMeta()==null)?null:_inhand.getItemMeta().getDisplayName();\n" + 
          "if (_name == \"minigun\"){\n" + 
             "_i=0;" + 
             "var _test= setInterval (function () {\n" + 
                "_i=_i+1;\n" + 
                "_projectile=server.worlds[0].spawnEntity(_player.location,org.bukkit.entity.EntityType.ARROW);\n" + 
                "_player.launchProjectile(_projectile.getClass());\n" + 
                "if (!(_i<10)) {\n" + 
                   "clearInterval (_test);\n" + 
                "}\n" + 
             "}, 200);\n" + 
           "}\n" +    
       "}\n" +            
    "}());";    
     
  return code;
};

Blockly.Python['dealcard'] = function(block) {
  var code =  "(function () {var _length = exports.cardDeck.length;\n" +     
              "   var _index = parseInt (Math.random () * _length );\n" +
              "   var _card = exports.cardDeck.splice (_index,1);\n" +
              "   console.log ( 'dealt a: ' + _card);\n" + 
              "   return _card;\n" +           
              "}());";  
    return [code, Blockly.Python.ORDER_NONE]
};

Blockly.Python['createdeck'] = function(block) {
  var code = "exports.cardDeck = [" + 
             "\'clubs-a\', \'clubs-2\', \'clubs-3\', \'clubs-4\',\'clubs-5\', \'clubs-6\', \'clubs-7\', \'clubs-8\',\'clubs-9\', \'clubs-10\', \'clubs-j\', \'clubs-q\',\'clubs-k\'," +
             "\'hearts-a\', \'hearts-2\', \'hearts-3\', \'hearts-4\',\'hearts-5\', \'hearts-6\', \'hearts-7\', \'hearts-8\',\'hearts-9\', \'hearts-10\', \'hearts-j\', \'hearts-q\',\'hearts-k\'," +
             "\'spades-a\', \'spades-2\', \'spades-3\', \'spades-4\',\'spades-5\', \'spades-6\', \'spades-7\', \'spades-8\',\'spades-9\', \'spades-10\', \'spades-j\', \'spades-q\',\'spades-k\'," +
             "\'diamonds-a\', \'diamonds-2\', \'diamonds-3\', \'diamonds-4\',\'diamonds-5\', \'diamonds-6\', \'diamonds-7\', \'diamonds-8\',\'diamonds-9\', \'diamonds-10\', \'diamonds-j\', \'diamonds-q\',\'diamonds-k\'" +
             "];\n"
  return code;
};

Blockly.Python['sumcards'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code =  "(function () {\n" +     
              "   var _inventory = " + player + ".getInventory();\n" +
              "   var _sum=0;\n" +              
              "   var _name;\n" + 
              "   var _index;\n" + 
              "   var _ch;\n" + 
              "   var _ch2;\n" +            
              "   var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};\n" + 
              "   for (var _i=0; _i<9; _i++) { \n" +
              "     _name=(" + player + ".getInventory().getItem(_i)== null) ? null : (" + player + ".getInventory().getItem(_i).getItemMeta == null) ? null : ("+ player + ".getInventory().getItem(_i).getItemMeta() == null)?null:" + player + ".getInventory().getItem(_i).getItemMeta().getDisplayName();\n" + 
              "     if (_name != null) { \n" +
              "        _index = _name.indexOf ( '-'); \n" + 
              "        _ch  = _name.charAt (_index+1);\n" +
              "        _ch2 = _name.charAt (_index+2);\n" + 
              "        //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');\n" + 
              "        _sum = _sum  + _values[_ch] + _values[_ch2];\n" + 
              "        //console.log ( '_sum: ' + _sum );\n" + 
              "     }\n" + 
              "   }\n" +   
              "   if ((_ch == \'a\') && (_sum <= 11)) { \n" + 
              "      _sum = _sum + 10;\n" + 
              "   }\n" +               
              "   console.log ( \'Got a sum of: \' + _sum );\n" +               
              "   return _sum;\n" +           
              "}());";  
    return [code, Blockly.Python.ORDER_NONE]
};

Blockly.Python['starttimer'] = function(block) {
  var timerName = block.getFieldValue ('TIMERNAME');

  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code =  "(function () {\n" +
              "  fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,new Date().getTime());\n" +
              "  if (" + player + " != null) {\n" +
              "    if (" + player + ".setMetadata != null ) {\n" +
              "       " + player + ".setMetadata (" + timerName + ", fd );\n" +
              "    }\n" +
              "  }\n" +
              "}());\n";
  return code;
};

Blockly.Python['elapsedtime'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player); 
  var timerName = block.getFieldValue ('TIMERNAME');

  var code =  "(function () {\n" + 
              "   var _startTime = (" + player + "== null)? 0 : (" + player + ".getMetadata == null)?0:(" + 
              player + ".getMetadata(" + timerName + ").length == 0)?0:" + player + ".getMetadata(" + timerName + ")[0].value();\n" +   
              "   var _elapsedTime = (new Date().getTime()) - _startTime;\n" +     
              "   console.log ( \'Elapsed Time: \' + _elapsedTime + \' ms\');\n" +
              "   return _elapsedTime;\n" +               
              "}())";  
    return [code, Blockly.Python.ORDER_NONE]
};

Blockly.Python['countBet'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code =  "(function () {\n" +     
              "   var _sum=0;\n" +              
              "   var _index;\n" + 
              "   var _stack;\n" +
              "   var _stackType;\n" +              
              "   var _inventory = " + player + ".getInventory().getContents();\n" +
              "   var _count = 0;\n" +               
              "   for (var _i=0; _i<_inventory.length; _i++)  {\n" +   
              "      _stack = _inventory[_i];\n" +
              "      _stackType = (_stack == null ) ? null : (_stack.getType == null) ? null : _stack.getType();\n" +               
              "      // console.log ( _i + \"): \" + _stackType );\n" + 
              "      if (_stackType == org.bukkit.Material.EMERALD ){ \n" + 
              "         _count = _count + _stack.getAmount();\n" + 
              "      }\n" + 
              "      if (_i == 8) { break; }\n" +               
              "   }\n" + 
              "   console.log ( \"Got a bet of:\" + _count + \" emeralds.\" );\n" + 
              "   return _count;})()"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['clearhotbar'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var code =  "for (var _hotbarIndex=0; _hotbarIndex<9; _hotbarIndex++)  {\n" + 
              "  " + player + ".getInventory().setItem (_hotbarIndex,new org.bukkit.inventory.ItemStack (org.bukkit.Material.AIR,1) );\n" + 
              "}\n";
  return code;
};

Blockly.Python['blackjackdealer'] = function(block) {
  var firstCard = Blockly.Python.valueToCode(block, 'FIRSTCARD', Blockly.Python.ORDER_ATOMIC);
  firstCard = insideParen(firstCard);
  var code =  "(function () {\n" +     
              "   var _count = 0;\n" + 
              "   var _sum = 0;\n" + 
              "   var _length;\n" + 
              "   var _index;\n" + 
              "   var _card;\n" + 
              "   var _name;\n" + 
              "   var _ch;\n" + 
              "   var _ch2;\n" +   
              "   var _values = {'':0, '0':0, '1':10, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'j':10, 'q':10, 'k':10, 'a':1};\n" + 
              "   console.log ( \"Got a first card of: \" + " + firstCard + ");\n" + 
              "   var _cards = [exports.dealerCard];\n" +  
              "   while (_sum < 17) {\n" + 
              "      _sum = 0;\n" + 
              "      // Dealer gets a random card\n" + 
              "      _length = exports.cardDeck.length;\n" +     
              "      _index = parseInt (Math.random () * _length );\n" +
              "      _card = exports.cardDeck.splice (_index,1);\n" +
              "      console.log ( 'dealt dealer a: ' + _card);\n" +    
              "      _cards.push ( _card );\n" + 
              "      // sum _cards\n" + 
              "      for (var _i=0; _i<_cards.length; _i++) { \n" +
              "        //console.log ( '_cards[_i]: [' + _cards[_i] + ']');\n" + 
              "        _name = _cards[_i].toString();\n" + 
              "        _index = _name.indexOf ('-'); \n" + 
              "        //console.log ( '_name: [' + _name + '], _index:' + _index);\n" + 
              "        _ch  = _name.charAt (_index+1);\n" +
              "        _ch2 = _name.charAt (_index+2);\n" + 
              "        //console.log ( '_ch,_ch2: [' + _ch + ',' + _ch2 + ']');\n" + 
              "        _sum = _sum  + _values[_ch] + _values[_ch2];\n" + 
              "        //console.log ( 'dealer _sum: ' + _sum );\n" + 
              "      }\n" +   
              "      if ((_ch == \'a\') && (_sum <= 11)) { \n" + 
              "         _sum = _sum + 10;\n" + 
              "      }\n" +               
              "      console.log ( \'Got a dealer sum of: \' + _sum );\n" +               
              "   }\n" + 
              "   return _sum;})()"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['assigndamage'] = function(block) {
  var damage = Blockly.Python.valueToCode(block, 'DAMAGE', Blockly.Python.ORDER_ATOMIC);
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC);
  entity = insideParen(entity);
  var code = "if(" + entity + ".damage != null) {" + entity + ".damage(" + damage + ")};\n";
  return code;
};

Blockly.Python['foreachloop'] = function(block) {
  
  var name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ADDITIVE); 
  name = insideParen (name);
  var index = block.getFieldValue ('ELEMENT');
  if (index.indexOf ( "\"" ) > -1) { 
     index = insideChars ( index,"\"","\"");
  }
  
  var forCode = Blockly.Python.statementToCode (block, 'FORCODE' ); 
   
  var code = 'for (var _elementIndex=0; _elementIndex <' + name + '.length;_elementIndex++) {\n'  + 
             '  ' + index + ' = ' + name + '[_elementIndex];\n' + 
             forCode + 
             '};\n';
  
  return code;
};

Blockly.Python['isjumping'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  var code =  "(function () {\n" +                
              "   var _isJumping = false;\n" + 
              "   var _velocity=" + player + ".getVelocity().getY();\n" + 
              "   var _block;\n" + 
              "   if (((Math.abs(_velocity-0.42)) < (0.01))){\n" + 
              "      if (!" + player + ".isOnGround()) { \n" + 
              "         _isJumping = true;\n" + 
              "      }\n" + 
              "   }\n" + 
              "   return _isJumping;})()";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['getboots'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  
  var code = "(" + player + ".getInventory().getBoots()== null) ? null : " + player + ".getInventory().getBoots()";
        
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['nameentity'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen (entity);
  var name =  block.getFieldValue ('NAME');
  var code = 'if (' + entity + '.setCustomName != null) { \n' + 
             '  ' + entity + '.setCustomName (' + name + ');\n' + 
             '}\n'; 
  return code;
};

Blockly.Python['entityname'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen (entity);
  
  var code = "(" + entity + ".getCustomName == null) ? \"\" : " + entity + ".getCustomName()";
        
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['randompotioneffect'] = function(block) {   
  var code =  "(function () {\n" +                
              "   var _effects = [org.bukkit.potion.PotionEffectType.SPEED,org.bukkit.potion.PotionEffectType.SLOW,org.bukkit.potion.PotionEffectType.FAST_DIGGING,org.bukkit.potion.PotionEffectType.SLOW_DIGGING,org.bukkit.potion.PotionEffectType.INCREASE_DAMAGE,org.bukkit.potion.PotionEffectType.HEAL,org.bukkit.potion.PotionEffectType.HARM,\n" + 
              "                   org.bukkit.potion.PotionEffectType.JUMP,org.bukkit.potion.PotionEffectType.CONFUSION,org.bukkit.potion.PotionEffectType.REGENERATION,org.bukkit.potion.PotionEffectType.DAMAGE_RESISTANCE,org.bukkit.potion.PotionEffectType.FIRE_RESISTANCE,org.bukkit.potion.PotionEffectType.WATER_BREATHING,\n" + 
              "                   org.bukkit.potion.PotionEffectType.INVISIBILITY,org.bukkit.potion.PotionEffectType.BLINDNESS,org.bukkit.potion.PotionEffectType.NIGHT_VISION,org.bukkit.potion.PotionEffectType.HUNGER,org.bukkit.potion.PotionEffectType.WEAKNESS,org.bukkit.potion.PotionEffectType.POISON, \n" + 
              "                   org.bukkit.potion.PotionEffectType.WITHER,org.bukkit.potion.PotionEffectType.HEALTH_BOOST,org.bukkit.potion.PotionEffectType.ABSORPTION,org.bukkit.potion.PotionEffectType.SATURATION,org.bukkit.potion.PotionEffectType.GLOWING,org.bukkit.potion.PotionEffectType.LEVITATION,\n" + 
              "                   org.bukkit.potion.PotionEffectType.LUCK,org.bukkit.potion.PotionEffectType.UNLUCK,org.bukkit.potion.PotionEffectType.SLOW_FALLING,org.bukkit.potion.PotionEffectType.CONDUIT_POWER,org.bukkit.potion.PotionEffectType.DOLPHINS_GRACE,org.bukkit.potion.PotionEffectType.BAD_OMEN,\n" + 
              "                   org.bukkit.potion.PotionEffectType.HERO_OF_THE_VILLAGE];\n" + 
              "   var _index = parseInt (Math.random () * (_effects.length) );\n" +   
              "   console.log ( \"Effect:\" + _index );\n" + 
              "   return _effects[_index];})()";
   
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['effectid'] = function(block) {
  var potion = Blockly.Python.valueToCode(block, 'POTION', Blockly.Python.ORDER_ATOMIC); 
  potion = insideParen (potion);
  var code =  "(function () {\n" +                
              "   var _id=null;\n" + 
              "   var _potions = [\"SPEED\",\"SLOW\",\"FAST_DIGGING\",\"SLOW_DIGGING\",\"INCREASE_DAMAGE\",\"HEAL\",\"HARM\",\"JUMP\",\"CONFUSION\",\"REGENERATION\",\"DAMAGE_RESISTANCE\",\"FIRE_RESISTANCE\", \"WATER_BREATHING\", \"INVISIBILITY\", \"BLINDNESS\", \"NIGHT_VISION\", \"HUNGER\", \"WEAKNESS\", \"POISON\", \"WITHER\", \"HEALTH_BOOST\", \"ABSORPTION\", \"SATURATION\", \"GLOWING\", \"LEVITATION\", \"LUCK\", \"UNLUCK\", \"SLOW_FALLING\", \"CONDUIT_POWER\", \"DOLPHINS_GRACE\", \"BAD_OMEN\", \"HERO_OF_THE_VILLAGE\"];\n" + 
              "   for (var _i=0; _i<_potions.length; _i++) {\n" + 
              "      if (_potions[_i]==" + potion + "){\n" + 
              "         _id = _i + 1;\n" + 
              "         break;\n" + 
              "      }\n" + 
              "   }\n" + 
              "   return _id;})()";   
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['giverandompotion'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player);
  var name =  block.getFieldValue ('NAME');
  var code = "(function () {\n" + 
             "   var _potions = [\"SPEED\",\"SLOW\",\"FAST_DIGGING\",\"SLOW_DIGGING\",\"INCREASE_DAMAGE\",\"HEAL\",\"HARM\",\"JUMP\",\"CONFUSION\",\"REGENERATION\",\"RESISTANCE\",\"FIRE_RESISTANCE\", \"WATER_BREATHING\", \"INVISIBILITY\", \"BLINDNESS\", \"NIGHT_VISION\", \"HUNGER\", \"WEAKNESS\", \"POISON\", \"WITHER\", \"HEALTH_BOOST\", \"ABSORPTION\", \"SATURATION\", \"GLOWING\", \"LEVITATION\", \"LUCK\", \"UNLUCK\", \"SLOW_FALLING\", \"CONDUIT_POWER\", \"DOLPHINS_GRACE\", \"BAD_OMEN\", \"HERO_OF_THE_VILLAGE\"];\n" + 
             "   var _index = parseInt (Math.random () * (_potions.length) );\n" + 
             "   var _potion = _potions[_index];\n" + 
             "   var _cmd=\"give \" + player.name + \" splash_potion{CustomPotionEffects:[{Id:\"+_index+\",Duration:1200}],display:{Name:\\\"\\\\\\\"\" + _potion + \"\\\\\\\"\\\"}}\";\n" + 
             "   console.log ( _cmd);\n" +  
             "   org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), _cmd);\n" + 
             "})();\n";
  return code;
};

Blockly.Python['addeffecttopotion'] = function(block) {
  var effect =  Blockly.Python.valueToCode(block, 'EFFECT', Blockly.Python.ORDER_ATOMIC);  
  effect = insideParen(effect)  
  var potion =  Blockly.Python.valueToCode(block, 'POTION', Blockly.Python.ORDER_ATOMIC);  
  potion = insideParen (potion)  
  var duration =  Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);  
  duration = parseFloat(insideParen (duration)) * 20.0; // 20 ticks per second
    
  instantiateVariable ( "_meta");  
    
  code = "if (" + potion + ".getItemMeta != null) { \n" + 
         "  _meta = " + potion + ".getItemMeta();\n" + 
         "  if (_meta.addCustomEffect != null) { \n" + 
         "    _meta.addCustomEffect (new org.bukkit.potion.PotionEffect(" + effect + 
         "    ," + parseInt (duration) + ",2), true);\n" + 
         "    " + potion + ".setItemMeta (_meta);\n" +
         "  }\n" + 
         "}\n";         
  return code; 
};

Blockly.Python['updateplayersinventory'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  var itemStack = Blockly.Python.valueToCode(block, 'ITEMSTACK', Blockly.Python.ORDER_ATOMIC);
  itemStack = insideParen (itemStack);
  var code = player + '.getInventory().addItem (' + itemStack + ');\n';
  return code;
};

Blockly.Python['setstackname'] = function(block) {
  var stack = Blockly.Python.valueToCode(block, 'STACK', Blockly.Python.ORDER_ATOMIC);
  stack = insideParen (stack);
  var name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  name = insideParen (name);
  instantiateVariable ("_meta");
  var code = "_meta = " + stack + ".getItemMeta();\n" + 
             "_meta.setDisplayName(" + name + ");\n" + 
             stack + ".setItemMeta (_meta);\n"   
  return code;
};

Blockly.Python['findcustomname'] = function(block) {
  var name =  block.getFieldValue ('NAME');
  instantiateVariable ('_entity');
  instantiateVariable ('_entities');
  var code =  "(function () {\n" +                
              "   _entity = null;\n" + 
              "   _entities = server.worlds[0].getEntities();\n" + 
              "   for (var _i = 0; _i<_entities.length; _i++) { \n" + 
              "      if (_entities[_i].getCustomName != null) { \n" + 
              "         if (_entities[_i].getCustomName() == " + name + ") {\n" + 
              "            _entity = _entities[_i];\n" +  
              "            break;\n" + 
              "         }\n" + 
              "      }\n" +
              "   }\n" +  
              "   return _entity;})()";   
  return [code, Blockly.Python.ORDER_NONE];
}
Blockly.Python['isnull'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  variable = insideParen (variable);
  var code =  "(" + variable + " == null)";
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['addcustomeffect'] = function(block) {
  var effect =  Blockly.Python.valueToCode(block, 'EFFECT', Blockly.Python.ORDER_ATOMIC);  
  effect = insideParen(effect)  
  var cloud =  Blockly.Python.valueToCode(block, 'CLOUD', Blockly.Python.ORDER_ATOMIC);  
  cloud = insideParen (cloud)  
  var duration =  Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);  
  duration = parseFloat(insideParen (duration)) * 20.0; // 20 ticks per second
    
  code = "if (" + cloud + ".addCustomEffect != null) { \n" + 
         "    " + cloud + ".addCustomEffect (new org.bukkit.potion.PotionEffect(" + effect + "," + parseInt (duration) + ",2), true);\n" + 
         "}\n";         
  return code; 
};

Blockly.Python['setduration'] = function(block) {  
  var cloud =  Blockly.Python.valueToCode(block, 'CLOUD', Blockly.Python.ORDER_ATOMIC);  
  cloud = insideParen (cloud)  
  var duration =  Blockly.Python.valueToCode(block, 'DURATION', Blockly.Python.ORDER_ATOMIC);  
  duration = parseFloat(insideParen (duration)) * 20.0; // 20 ticks per second
    
  code = "if (" + cloud + ".setDuration != null) { \n" + 
         "    " + cloud + ".setDuration (" + parseInt (duration) + ");\n" + 
         "}\n";         
  return code; 
};

Blockly.Python['setcloudradius'] = function(block) {  
  var cloud =  Blockly.Python.valueToCode(block, 'CLOUD', Blockly.Python.ORDER_ATOMIC);  
  cloud = insideParen (cloud)  
  var radius =  Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_ATOMIC);  
  radius = parseInt(insideParen (radius));
    
  code = "if (" + cloud + ".setRadius != null) { \n" + 
         "    " + cloud + ".setRadius (" + parseInt (radius) + ");\n" + 
         "}\n";         
  return code; 
};

Blockly.Python['getplayerarmor'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  var armor =  block.getFieldValue ('ARMOR');  
  
  var code = "(" + player + "==null)?null:(" + player + ".getInventory == null)?null:(" + player + ".getInventory().get" + armor + "== null) ? null : " + player + ".getInventory().get" + armor + "()";
        
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['givearmor'] = function(block) {
  var armor =  block.getFieldValue ('ARMOR');
  var upArmor = armor.charAt (0).toUpperCase() + armor.substring (1);
  var style =  block.getFieldValue ('STYLE');
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player );
  
  var code = 
			 "var items = require ('items');\n" + 
			 player + ".equipment." + armor + " = items." + style + upArmor + "(1);\n"; // items.diamondHelmet(1);\n" + 
  return code;
};

Blockly.Python['isopen'] = function(block) {
  var block = Blockly.Python.valueToCode(block, 'BLOCK', Blockly.Python.ORDER_ATOMIC);
  block = insideParen (block);
  var code = "(" + block + ".getState == null) ? false : (" + block + ".getState().getData == null) ? false : " + 
             "(" + block + ".getState().getData().isOpen == null) ? false: " + block + ".getState().getData().isOpen()"

  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['entityeffect'] = function(block) {
  var effect = 'org.bukkit.EntityEffect.' + block.getFieldValue ("EFFECT");
  return [effect, Blockly.Python.ORDER_NONE];
}

Blockly.Python['playeffect'] = function(block) {
  var entity = Blockly.Python.valueToCode(block, 'ENTITY', Blockly.Python.ORDER_ATOMIC); 
  entity = insideParen (entity);
  var effect = Blockly.Python.valueToCode(block, 'EFFECT', Blockly.Python.ORDER_ATOMIC); 
  effect = insideParen (effect);
  var code = entity + ".playEffect (" + effect + ");\n" 
  return code;
};

Blockly.Python['soundeffect'] = function(block) {
  var effect = 'org.bukkit.Sound.' + block.getFieldValue ("EFFECT");
  return [effect, Blockly.Python.ORDER_NONE];
}

Blockly.Python['playsound'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC); 
  player = insideParen (player);
  var effect = Blockly.Python.valueToCode(block, 'EFFECT', Blockly.Python.ORDER_ATOMIC); 
  effect = insideParen (effect);
  var volume = block.getFieldValue ("VOLUME");
  
  var code = "server.worlds[0].playSound (" + player + ".getLocation(), " + effect + ", " + volume + ", 1);\n"; 
  return code;
};

Blockly.Python['modplayerlocation'] = function(block) {
  var x = block.getFieldValue ('X'); 
  var y = block.getFieldValue ('Y');
  var z = block.getFieldValue ('Z');

  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC));
  var location = player + '.location';
  var yaw = player + '.yaw';
  var pitch = player + '.pitch'
  
  var code = '(function() { ' + 
                'var _x = ' + location + '.x + ' + x + ';' + 
                'var _y = ' + location + '.y + ' + y + ';' +
                'var _z = ' + location + '.z + ' + z + ';' +                 
                'var loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);' + // ,' + yaw + ',' + pitch + ');' + 
                'return loc;' + 
             ' })()' 
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['islocation'] = function(block) {
  var x = block.getFieldValue ('X'); 
  var y = block.getFieldValue ('Y');
  var z = block.getFieldValue ('Z');

  var location = insideParen(Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC));  
  var code = '( parseInt(' + location + '.x) !=' + x + ') ? false :' + 
             '( parseInt(' + location + '.y) !=' + y + ') ? false :' + 
             '( parseInt(' + location + '.z) !=' + z + ') ? false : true'; 
  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['counthotbar'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var material = insideParen(Blockly.Python.valueToCode(block, 'MATERIAL', Blockly.Python.ORDER_ATOMIC));

  var code =  "(function () {\n" +     
              "   var _sum=0;\n" +              
              "   var _index;\n" + 
              "   var _stack;\n" +
              "   var _stackType;\n" +              
              "   var _inventory = " + player + ".getInventory().getContents();\n" +
              "   var _count = 0;\n" +               
              "   for (var _i=0; _i<_inventory.length; _i++)  {\n" +   
              "      _stack = _inventory[_i];\n" +
              "      _stackType = (_stack == null ) ? null : (_stack.getType == null) ? null : _stack.getType();\n" +               
              "      // console.log ( _i + \"): \" + _stackType );\n" + 
              "      if (_stackType == " + material + " ){ \n" + 
              "         _count = _count + _stack.getAmount();\n" + 
              "      }\n" + 
              "      if (_i == 8) { break; }\n" +               
              "   }\n" + 
              "   console.log ( \"Got a hotbar quantity of:\" + _count + \" " + material + "\" );\n" + 
              "   return _count;})()"
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setglobal'] = function(block) {
  var varname = block.getFieldValue ('VARNAME'); 
  var expression = Blockly.Python.valueToCode(block, 'EXPRESSION', Blockly.Python.ORDER_ATOMIC);
  expression = insideParen(expression);
  //if (varname.indexOf ( '.') == -1) {    
  //   instantiateVariable (varname);
  //}
  
  var code = 'exports.' + varname + '=' + expression + ';\n';
  
  return code;
};

Blockly.Python['globalvariable'] = function(block) {
  var code = 'exports.' + block.getFieldValue("VARNAME"); 
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['removeitemhotbar'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen(player);
  var material = insideParen(Blockly.Python.valueToCode(block, 'MATERIAL', Blockly.Python.ORDER_ATOMIC));
  var count = block.getFieldValue ("COUNT");

  var code =  "(function () {\n" +     
              "   var _sum=0;\n" +              
              "   var _index;\n" + 
              "   var _stack;\n" +
              "   var _stackType;\n" +              
              "   var _inventory = " + player + ".getInventory().getContents();\n" +
              "   var _remaining = " + count + ";\n" +       
              "   var _count;\n" + 
              "   var _newStack;\n" +               
              "   for (var _i=0; _i<8; _i++)  {\n" +   
              "      _stack = _inventory[_i];\n" +
              "      _stackType = (_stack == null ) ? null : (_stack.getType == null) ? null : _stack.getType();\n" +                
              "      if (_stackType == " + material + " ){ \n" +  
              "         if (_remaining == 0) break;\n" + 
              "         _count = _stack.getAmount();\n" + 
              "         if (_count >= _remaining) { \n" + 
              "            _count = _count - _remaining;\n" + 
              "            _remaining = 0;\n" + 
              "         } else { \n" + 
              "            _remaining = _remaining - _count; \n" + 
              "            _count = 0;\n" + 
              "         }\n" + 
              "         _newStack = new org.bukkit.inventory.ItemStack (" + material + ",_count);\n" + 
              "         " + player + ".getInventory().setItem (_i,_newStack);\n" + 
              "      }\n" +              
              "   }\n" + 
              "})();\n"
  return code;
};

Blockly.Python['locationof'] = function(block) {
  var obj = Blockly.Python.valueToCode(block, 'OBJECT', Blockly.Python.ORDER_ATOMIC);
  obj = insideParen(obj);
  var code = '(' + obj + '== null)?null:' + obj + '.location';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['setdoor'] = function(block) {
  var location = Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);
  location = insideParen(location);
  var effect = block.getFieldValue ("EFFECT");  
  
  var code = 
              "(function () {\n" +                    
              "   if (" + location + "!= null) { \n" + 
              "     var _block=server.worlds[0].getBlockAt(" + location + ");\n" +           
              "     var _myString = _block.toString();\n" + 
              "     var _isTop = _myString.indexOf ( \"half=upper\") > -1;\n" +  
              "     console.log ( \"closedoor Is top: \" + _isTop ); \n" + 
              "     if (_isTop) {\n" + 
              "        var _loc=(function() { var _x = " + location + ".x;var _y = " + location + ".y+-1;var _z = " + location + ".z;var __loc = new org.bukkit.Location(server.worlds[0],_x,_y,_z);return __loc; })();\n" + 
              "        _block = server.worlds[0].getBlockAt ( _loc ); \n" + 
              "     }\n" + 
              "     var _state = _block.getState();\n" + 
              "     var _info  = _state.getData();\n";
  if (effect == "OPEN") {
     code = code + "     _info.setOpen (true);\n";    
  } else {
     code = code + "     _info.setOpen (false);\n";    
  }

  code = code +             
              "     _state.setData (_info);\n" + 
              "     _state.update();\n" + 
              "   }\n" +               
              "})();\n"
  
  return code;
};

Blockly.Python['fill'] = function(block) {
  var material  = insideParen(Blockly.Python.valueToCode(block, 'MATERIAL',  Blockly.Python.ORDER_ATOMIC));
  var location1 = insideParen(Blockly.Python.valueToCode(block, 'LOCATION1', Blockly.Python.ORDER_ATOMIC));
  var location2 = insideParen(Blockly.Python.valueToCode(block, 'LOCATION2', Blockly.Python.ORDER_ATOMIC));
  material = material.toLowerCase();
  index = material.lastIndexOf ( '.' );
  material = 'minecraft:' + material.substring (index+1);
    
  var code =   
              "(function () {\n" +   
              "   var _x1 = parseInt ( " + location1 + ".x );\n" +               
              "   var _y1 = parseInt ( " + location1 + ".y );\n" +               
              "   var _z1 = parseInt ( " + location1 + ".z );\n" +               
              "   var _x2 = parseInt ( " + location2 + ".x );\n" +               
              "   var _y2 = parseInt ( " + location2 + ".y );\n" +               
              "   var _z2 = parseInt ( " + location2 + ".z );\n" +               
              "   var _command = \"fill \" + _x1 + \" \" + _y1 + \" \" + _z1 + \" \" + _x2 + \" \" + _y2 + \" \" + _z2 + \" " + material + " replace\";\n" + 
              "   console.log ( \"command: \" + _command );\n" +             
              "   org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), _command );\n" + 
              "})();\n"
    
  return code;
}

Blockly.Python['invincibility'] = function(block) {
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC)); 
  var ticks  = insideParen(Blockly.Python.valueToCode(block, 'TICKS', Blockly.Python.ORDER_ATOMIC)); 
  
  var code = player + '.setNoDamageTicks (' + ticks + ');\n';
  return code;
};

Blockly.Python['removearmor'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  var armor =  block.getFieldValue ('ARMOR');  
  
  var code = 
       player + '.getInventory().set' + armor + '(null);\n' + 
       'console.log ( \'' + armor + ' removed for player: \' + ' + player + '.name );\n'; 
        
  return code;
}

Blockly.Python['playernearby'] = function(block) {   
  var location = Blockly.Python.valueToCode(block, "LOCATION", Blockly.Python.ORDER_ATOMIC);
  location = insideParen (location)
  var radius = Blockly.Python.valueToCode(block, "RADIUS", Blockly.Python.ORDER_ATOMIC);
  radius = insideParen (radius)
  var player = insideParen(Blockly.Python.valueToCode(block, "PLAYER", Blockly.Python.ORDER_ATOMIC));
  var code = 
      "function () { var _near;var _players;var _distance;_near=false;\n" + 
        "_players=server.getOnlinePlayers();\n" + 
        "for (var _i=0; _i<_players.length;_i++) {\n" + 
           "_distance=" + location + ".distance(_players[_i].location);\n" + 
           "if(_distance <= " + radius + "){" + 
              "if (" + player + "== _players[_i]){\n" + 
                 "_near=true;" + 
                 "break;" + 
               "}" +
            "}" +
         "}\n" +
       "return _near;" + 
     "}()";
  
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['removeallarmor'] = function(block) {
  var player = Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC);
  player = insideParen (player);
  
  var code = 
       player + '.getInventory().setHelmet(null);\n' + 
       player + '.getInventory().setLeggings(null);\n' + 
       player + '.getInventory().setChestplate(null);\n' + 
       player + '.getInventory().setBoots(null);\n' + 
       'console.log ( \'All armor removed for player: \' + ' + player + '.name );\n'; 
        
  return code;
}

Blockly.Python['basicrenderfunction'] = function(block) { 
  var code = 
     'exports.render  = function (mapView, mapCanvas, player) {\n' + 
     '  var _mapId;\n' + 
     '  var _filename;\n' + 
     '  var _title;\n' + 
     '  _mapId=mapView.getId();\n' + 
     '  _filename=\'scriptcraft/plugins/images/\' + _mapId + \'.jpg\';\n' + 
     '  if (new java.io.File (_filename).exists()){\n' + 
     '    mapCanvas.drawImage (0,0,org.bukkit.map.MapPalette.resizeImage (new javax.swing.ImageIcon(_filename).getImage()) );\n' + 
     '  } else {\n' + 
     '    _title=\'scriptcraft/plugins/\\nimages/\' + _mapId + \'.jpg\\n\\nDoes not exist yet\';\n' + 
     '    mapCanvas.drawText ( 10,10,org.bukkit.map.MinecraftFont.Font, _title);\n' + 
     '  }\n' + 
     '};\n';
        
  return code;
}

Blockly.Python['title'] = function(block) {
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC));
  var messageType = block.getFieldValue ("MESSAGETYPE");   
  var message = block.getFieldValue ("MESSAGE");   
  var color = block.getFieldValue ("COLOR");  
  var bold = block.getFieldValue ("BOLD");  
  if (bold == "TRUE") {
     bold = 'true';
  } else {
     bold = 'false';
  }
  var italic = block.getFieldValue ("ITALIC");  
  if (italic == "TRUE") {
     italic = 'true';
  } else {
     italic = 'false';
  }
  
  var command = '\"title \" + ' + player + '.name + \" ' + messageType + ' {\\\"text\\\":\\\"' + message + 
  '\\\",\\\"italic\\\":' + italic + ',\\\"bold\\\":' + bold + ',\\\"color\\\":\\\"' + color + '\\\"}\"';
  var code = "org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), " + command + ");\n";      

  return code;
}

Blockly.Python['playerinbox'] = function(block) {   
  var location1 = insideParen(Blockly.Python.valueToCode(block, "LOCATION1", Blockly.Python.ORDER_ATOMIC));
  var location2 = insideParen(Blockly.Python.valueToCode(block, "LOCATION2", Blockly.Python.ORDER_ATOMIC));  
  var player    = insideParen(Blockly.Python.valueToCode(block, "PLAYER",    Blockly.Python.ORDER_ATOMIC));
  
  var code = 
      "function () { var _x1; var _x2; var _y1; var _y2; var _z1; var _z2; var _inBox=false;\n" + 
      "  _x1 = Math.min (parseInt (" + location1 + ".x), parseInt (" + location2 + ".x));\n" +
      "  _y1 = Math.min (parseInt (" + location1 + ".y), parseInt (" + location2 + ".y));\n" +
      "  _z1 = Math.min (parseInt (" + location1 + ".z), parseInt (" + location2 + ".z));\n" +
      "  _x2 = Math.max (" + location1 + ".x, " + location2 + ".x);\n" +
      "  _y2 = Math.max (" + location1 + ".y, " + location2 + ".y);\n" +
      "  _z2 = Math.max (" + location1 + ".z, " + location2 + ".z);\n" +
      "  if (parseInt(" + player + ".location.x) >= _x1) {\n" +
      "    if (parseInt(" + player + ".location.y) >= _y1) {\n" +
      "      if (parseInt(" + player + ".location.z) >= _z1) {\n" +
      "        if (parseInt(" + player + ".location.x) <= _x2) {\n" +
      "          if (parseInt(" + player + ".location.y) <= _y2) {\n" +
      "            if (parseInt(" + player + ".location.z) <= _z2) {\n" +
      "               _inBox = true;\n" +
      "            }\n" +
      "          }\n" +
      "        }\n" +
      "      }\n" +
      "    }\n" +
      "  }\n" +     
      "  return _inBox;" +
     "}()";
  
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['playerpointed'] = function(block) {    
  var player    = insideParen(Blockly.Python.valueToCode(block, "PLAYER",    Blockly.Python.ORDER_ATOMIC));
  var pitchYaw = block.getFieldValue ("PITCHYAW"); 
  var code = '(' + player + '== null)?null: ' + player + '.location.get' + pitchYaw + '()'
  
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Python['setinhand'] = function(block) {
  var player = insideParen(Blockly.Python.valueToCode(block, 'PLAYER', Blockly.Python.ORDER_ATOMIC));
  var item   = insideParen(Blockly.Python.valueToCode(block, 'ITEM', Blockly.Python.ORDER_ATOMIC));
  code       = player + '.getInventory().setItemInHand (' + item + ');\n'; 
  return code;
}

Blockly.Python['playerinsphere'] = function(block) {   
  var location = insideParen(Blockly.Python.valueToCode(block, "LOCATION", Blockly.Python.ORDER_ATOMIC));
  var radius   = insideParen(Blockly.Python.valueToCode(block, "RADIUS",   Blockly.Python.ORDER_ATOMIC));  
  var player   = insideParen(Blockly.Python.valueToCode(block, "PLAYER",   Blockly.Python.ORDER_ATOMIC));
  
  var code = 
      "function () { _inSphere = false;\n" + 
      "  if (Math.abs(" + player + ".location.x - " + location + ".x) <= " + radius + "){ \n"  + 
      "     if (Math.abs(" + player + ".location.y - " + location + ".y) <= " + radius + "){ \n"  + 
      "        if (Math.abs(" + player + ".location.z - " + location + ".z) <= " + radius + "){ \n"  +
      "           _inSphere = true;\n" + 
      "        }\n" + 
      "     } \n" + 
      "  }\n" +       
      "  return _inSphere;\n" +
     "}()";
  
  return [code, Blockly.Python.ORDER_NONE];
}


Blockly.Python['customizefirework'] = function(block) {
  var firework = insideParen(Blockly.Python.valueToCode(block, 'FIREWORK', Blockly.Python.ORDER_ATOMIC));
  var color = block.getFieldValue ("COLOR");
  var fadeColor = block.getFieldValue ("FADE");
  var effect = block.getFieldValue ("EFFECT");
  
  var flicker = block.getFieldValue ("FLICKER");  
  flicker = (flicker == "TRUE")?true:false;
  
  var code = 
      "var _meta = org.bukkit.Bukkit.getItemFactory().getItemMeta(org.bukkit.Material.FIREWORK_ROCKET);\n" + 
      "_meta.setPower(0);\n" +         
      "_meta.addEffect(org.bukkit.FireworkEffect.builder()\n" + 
      "                   .withColor(org.bukkit.Color." + color + ")\n" + 
      "                   .withFade(org.bukkit.Color." + fadeColor + ")\n" + 
      "                   .with(org.bukkit.FireworkEffect.Type." + effect + ")\n" + 
      "                   .trail(false)\n" +
      "                   .flicker(" + flicker + ")\n" +       
      "                   .build());\n" +       
      firework + ".setFireworkMeta(_meta);\n"    
  return code;
};

Blockly.Python['locationtovector'] = function(block) {
  var location =  Blockly.Python.valueToCode(block, 'LOCATION', Blockly.Python.ORDER_ATOMIC);   
  location = insideParen (location)
  code = location + ".getDirection().normalize()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['spawnarrow'] = function(block) {
  var location = insideParen(Blockly.Python.valueToCode(block, "LOCATION", Blockly.Python.ORDER_ATOMIC)); 
  var vector = insideParen(Blockly.Python.valueToCode(block, "VECTOR", Blockly.Python.ORDER_ATOMIC)); 
  var speed = block.getFieldValue ("SPEED");
  var spread = block.getFieldValue ("SPREAD");
  
  var code = "server.worlds[0].spawnArrow(" + location + "," + vector + "," + speed + "," + spread + ");\n";  
  return code;
};


