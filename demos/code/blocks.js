
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
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['echowidget'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Echo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sendmessage'] = {
  init: function() {  
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("Send Message");
    this.appendValueInput("PLAYER")
        .appendField("To Player/Entity");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
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
        .appendField("Flash LED color")
        .appendField(new Blockly.FieldDropdown([["Green", "GREEN"], ["Red", "RED"], ["Blue", "BLUE"]]), "COLOR")
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

// event.getPotion().getItem().getItemMeta().getDisplayName()
Blockly.Blocks['potionname'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Potion Name");
    this.setOutput(true, "String");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://www.codeproject.com/Articles/878585/Build-Giant-Ravine-in-Minecraft-using-ScriptCraft
Blockly.Blocks['tostring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Convert to string");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("Number Value");        
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setOutput(true, "String");  
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['structures'] = { 
  init: function() {
    this.appendDummyInput()
        .appendField("Spawn");    
    this.appendDummyInput()
        .appendField("Structure")
        .appendField(new Blockly.FieldDropdown([["Farm","farm"],["Castle", "castle"],["Cottage","cottage"],["Cottage Road","cottage_road"]]), "STRUCTURE");           
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createdrone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Drone");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buildbox'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build Box");
    this.appendDummyInput()
        .appendField("Block Type")
        .appendField(new Blockly.FieldDropdown([["Slime", "slime"],["Oak","oak"]]), "BLOCKTYPE");  
    this.appendValueInput("LENGTH")
        .appendField("Length");                 
    this.appendValueInput("WIDTH")
        .appendField("WIDTH");                 
    this.appendValueInput("HEIGHT")
        .appendField("Height");                 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['changeBlock'] = {
  init: function() {
    this.appendValueInput("BLOCK")
        .appendField("Change Block");
    this.appendValueInput("TYPEOFBLOCK")
        .appendField("Type of Block");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sign'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create a standing sign");
    this.appendValueInput("LOCATION")
        .appendField ("Location");
    this.appendValueInput("LINE1")
        .appendField("Line 1");          
    this.appendValueInput("LINE2")
        .appendField("Line 2");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wallsign'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create a wall sign");
    this.appendValueInput("LINE1")
        .appendField("Line 1");          
    this.appendValueInput("LINE2")
        .appendField("Line 2");          
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['additem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add");
    this.appendDummyInput()
        .appendField("Item")
       .appendField(new Blockly.FieldDropdown([["White Wool", "WHITE_WOOL"], ["Snow Block", "SNOW_BLOCK"],["Diamond Shovel", "DIAMOND_SHOVEL"],["Diamond Pick", "DIAMOND_PICKAXE"], ["Bone Meal", "boneMeal"], ["Wheat Seeds", "wheatSeeds"], ["SnowBall", "snowball"],["Cookie","cookie"],["Baked Potato","bakedPotato"],["Diamond", "diamond"],["Splash Potion", "splashPotion"]]), "ITEMTYPE");  
    this.appendValueInput("PLAYER")
        .appendField("To inventory for Player/Entity ");        
    this.appendDummyInput()
        .appendField ("How Many")    
        .appendField (new Blockly.FieldTextInput ("1"), "COUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['consolelog'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("server console");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['eventlistener'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Listener Event")
        .appendField(new Blockly.FieldDropdown([["A player moved", "playerMove"], ["An item was hung", "hangingPlace"],["Player entered a portal", "playerPortal"],["Projectile Hit Something", "projectileHit"], ["Player Respawn","playerRespawn"],["Player joined the game","playerJoin"],["A potion was splashed", "potionSplash"],["A plant grew on a block","blockGrow"],["A block was broken","blockBreak"], ["A player, monster or animal was damaged", "entityDamage"],["A player pushed a lever, button or sign","playerInteract"]]), "LISTENERTYPE");  
    this.appendStatementInput("LISTENERCODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['explosion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Explosion")
    this.appendValueInput("SIZE")
        .setCheck("Number")
        .appendField("Explosion Size");
    this.appendValueInput("LOCATION")
        .setCheck("String")
        .appendField("Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['eventplayer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For Which Player?")
        .appendField(new Blockly.FieldDropdown([["calling function", "self"], ["causing event","event.player"],["event entity", "event.entity"],["shooter","event.entity.shooter"], ["All affected entities", "event.getAffectedEntities"], ["Attacker", "event.damager"]]), "PLAYER");           
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['armorset'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .appendField("Player Armor, Color");
    this.appendValueInput("PLAYER")
        .appendField("For Player/Entity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['repairarmor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RepairArmor");
    this.appendValueInput("PLAYER")
        .setCheck("String")
        .appendField("Which Player");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['placebanner'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Place Banner");
    this.appendDummyInput()
        .appendField("Banner Type")
        .appendField(new Blockly.FieldDropdown([["Standing Banner", "LEGACY_STANDING_BANNER"]]), "BANNER");  
    this.appendValueInput("LOCATION")
        .setCheck("String")
        .appendField("Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spawnblock'] = {
  init: function() {
    this.appendValueInput("TYPE")
        .appendField("Spawn Block at current location ");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['signtext'] = {
  init: function() {
    this.appendDummyInput ()
        .appendField ( "Set sign text" );
    this.appendValueInput("LINE1")
        .appendField("Line 1");        
    this.appendValueInput("LINE2")
        .appendField("Line 2");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['teamflag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Team Flag");
    this.appendDummyInput()
        .appendField("Team Color")
        .appendField(new Blockly.FieldDropdown([["Red", "RED"], ["Blue", "BLUE"], ["White", "WHITE"], ["Black", "BLACK"]]), "COLOR");  
    this.appendValueInput("LOCATION")
        .setCheck("String")
        .appendField("Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['playerlocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("self.location");
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['teleport'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Teleport Player");
    this.appendValueInput("LOCATION")
        .appendField("Location");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Make Sound");
    this.appendValueInput("ANIMAL")
        .appendField("Entity Type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fireworks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fireworks")
    this.appendValueInput("LOCATION")
        .setCheck("String")
        .appendField("Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['eventcancel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cancel the Event");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['spawnarea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Spawn (20x20) Area");   
    this.appendValueInput("LOCATION")
        .appendField("Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['ability'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Give ")
    this.appendDummyInput()
        .appendField("The ability ")
        .appendField(new Blockly.FieldDropdown([["To Fly", "FLY"],["Invunlerability","INVULNERABLE"], ["Super Speed","SPEED"]]), "ABILITY");          
    this.appendValueInput("ENTITY")
        .appendField("To Player/Entity");
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField("For how many seconds?");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['abilityactive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ability is Active")
    this.appendDummyInput()
        .appendField("For Which Player?")
        .appendField(new Blockly.FieldDropdown([["calling function", "self"], ["causing event","event.player"],["event entity", "event.entity"],["shooter","event.entity.shooter"], ["All affected entities", "event.getAffectedEntities"], ["Attacker", "event.damager"]]), "PLAYER");           
    this.appendDummyInput()
        .appendField("Which ability ")
        .appendField(new Blockly.FieldDropdown([["To Fly", "FLY"],["Invunlerability","INVULNERABLE"], ["Super Speed","SPEED"]]), "ABILITY");          
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['addpotion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add potion to inventory")
    this.appendDummyInput()
        .appendField("Which Potion")
        .appendField(new Blockly.FieldDropdown([["Use the optional name",""], ["Create a bat cart", "BATCART"],["Increase health of entity", "ABSORPTION"],["Oof Bad Omen", "BAD_OMEN"],["Blindness", "BLINDNESS"],["Confusion", "CONFUSION"],["Decrease Damage Received","DAMAGE_RESISTANCE"],["Glow", "GLOWING"], ["Hurt an entity", "HARM"],["Heal an entity", "HEAL"],["Increase damage dealt","INCREASE_DAMAGE"],["Invisibility","INVISIBILITY"],["Increase jump height","JUMP"],["Cause entity to float","LEVITATION"],["Loot table luck","LUCK"],["Night Vision","NIGHT_VISION"],["Poison an entity","POISION"],["Regenerate Health","REGENERATION"], ["Decrease Movement Speed","SLOW"],["Increase Movement Speed", "SPEED"],["Allow breathing underwater", "WATER_BREATHING"],["Decrease damage dealt by entity","WEAKNESS"],["Suck health from entity","WITHER"]]), "POTION");           
    this.appendValueInput("NAME")
        .appendField("Optional Potion Name");
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['modifyEntity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Spawn and modify an entity");
    this.appendValueInput("ENTITY")
        .appendField("Type of creature");         
    this.appendValueInput("LOCATION")
        .setCheck("String")
        .appendField("Location");        
    this.appendStatementInput("MODIFICATIONS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['buildstructure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Build a structure");
    this.appendDummyInput()
        .appendField("Name of Structure")         
        .appendField (new Blockly.FieldTextInput ("building"), "NAME");    
    this.appendValueInput("LOCATION")
        .setCheck("String")
        .appendField("Location");        
    this.appendStatementInput("STEPS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['setpassenger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Passenger");
    this.appendValueInput("ENTITY")
        .appendField("Type of creature");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['offai'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn Off AI");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setName'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Entity Name");
        
    this.appendValueInput("NAME");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    // this.setOutput(true, null);    
  }
};

Blockly.Blocks['entityArmor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Armor");   
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([["Black","BLACK"],["Red", "RED"],["Blue","BLUE"],["Green","GREEN"]]), "COLOR");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['entityProfession'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Profession");   
    this.appendDummyInput()
        .appendField("Profession")
        .appendField(new Blockly.FieldDropdown([["Blacksmith","BLACKSMITH"], ["Butcher", "BUTCHER"],["Farmer","FARMER"],["Husk","HUSK"],["Librarian","LIBRARIAN"],["Nitwit","NITWIT"],["Normal","NORMAL"],["Priest","PRIEST"]]), "PROFESSION");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['baby'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Change to Baby");   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Location Of")
        .appendField(new Blockly.FieldDropdown([ ["Internal Location", "location"],["Player calling function", "self.location"], ["Player causing event","event.player.location"],["event entity", "event.entity.location"],["event shooter","event.entity.shooter.location"], ["Attacker", "event.damager.location"]]), "LOCATIONTYPE");           
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['absolutelocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Absolute Location")
        .appendField("X")
        .appendField (new Blockly.FieldTextInput ("100"), "X")          
        .appendField("Y")
        .appendField (new Blockly.FieldTextInput ("100"), "Y")          
        .appendField("Z")
        .appendField (new Blockly.FieldTextInput ("100"), "Z");          
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['entity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player, Monster or Object")
        .appendField(new Blockly.FieldDropdown([["entity","entity"], ["Player calling function", "self"], ["Player causing event","event.player"],["event entity", "event.entity"],["shooter","event.entity.shooter"], ["All affected entities", "event.getAffectedEntities"], ["Attacker", "event.damager"]]), "ENTITY");           
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['entityType'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Creature Type")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Bat", "BAT"], 
                                                ["Bat Cart", "BATCART"],
                                                ["Cave Spider", "CAVE_SPIDER"],
                                                ["Cat", "CAT"],
                                                ["Chicken","CHICKEN"],
                                                ["Cow","COW"],
                                                ["Creeper","CREEPER"],
                                                ["Ender Dragon", "ENDER_DRAGON"],
                                                ["Evoker", "EVOKER"],
                                                ["Evoker Fangs", "EVOKER_FANGS"],
                                                ["Horse", "HORSE"], 
                                                ["Minecart", "MINECART"], 
                                                ["Ocelot", "OCELOT"],
                                                ["Pig", "PIG"],
                                                ["Rabbit", "RABBIT"],
                                                ["Sheep", "SHEEP"],                                                
                                                ["Shulker", "SHULKER"],
                                                ["Skeleton","SKELETON"],
                                                ["Skeleton Horse", "SKELETON_HORSE"],
                                                ["Villager", "VILLAGER"],
                                                ["Wolf", "WOLF"],
                                                ["Wither", "WITHER"],
                                                ["Zombie", "ZOMBIE"]
                                               ]), "ENTITY");                   
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockType'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block or Material Type")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Bed", "LEGACY_BED_BLOCK"],
                                                ["Bow", "BOW"],
                                                ["Composter", "COMPOSTER"],
                                                ["Door", "LEGACY_WOODEN_DOOR"],
                                                ["Farm Land", "FARMLAND"],
                                                ["Fence", "OAK_FENCE"],                                                
                                                ["Gate", "OAK_FENCE_GATE"],
                                                ["Item Frame", "ITEM_FRAME"],
                                                ["Oak", "OAK_WOOD"], 
                                                ["Portal", "LEGACY_PORTAL"],
                                                ["Sign on Wall", "LEGACY_SIGN"],
                                                ["Sign Post", "OAK_SIGN"],
                                                ["Water", "WATER"],
                                                ["Wheat", "WHEAT"],
                                                ["White Banner", "WHITE_BANNER"], 
                                                ["Window Pane", "LEGACY_GLASS"]
                                               ]), "BLOCK");                   
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['creatureTypeString'] = {
  init: function() {
    this.appendValueInput("ENTITYTYPE")
        .setCheck("String")    
        .appendField("Creature Type String");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['rider'] = {
  init: function() {   
    this.appendValueInput("RIDE")
        .appendField("Ride");
    this.appendValueInput("PASSENGER")
        .appendField("Passenger");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['updatelocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update Location Axis")        
        .appendField(new Blockly.FieldDropdown([
                                                ["x", "X"],
                                                ["y", "Y"],
                                                ["z", "Z"]                                                
                                               ]), "AXIS")                   
        .appendField (new Blockly.FieldTextInput ("1"), "OFFSET");
    this.setColour(0);
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['decrementlocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Decrement Location Axis")        
        .appendField(new Blockly.FieldDropdown([
                                                ["x", "X"],
                                                ["y", "Y"],
                                                ["z", "Z"]                                                
                                               ]), "AXIS");                   
    this.setColour(0);
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['clickedBlock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block that was clicked on");
    this.setColour(40);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['getBlock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Block at Location");
    this.appendValueInput("LOCATION")
        .appendField("Location of Block");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['typeString'] = {
  init: function() {
    this.appendValueInput("TYPESTRING")   
        .appendField("Object Type String");
    this.setOutput(true, "String");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['leverUp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lever is up")
    this.appendValueInput("BLOCK")   
        .appendField("Lever Block");
    this.setOutput(true, "Boolean");
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sendUdpMessage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Send UDP");   
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("Message");
    this.appendValueInput("PORT")
        .appendField("Port");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['varname']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendDummyInput().appendField("variable:")
       .appendField (new Blockly.FieldTextInput ("value"), "VARNAME");
   this.setOutput(true, null);
   var a=this;
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setvariable']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendDummyInput()
      .appendField("Set ")
      .appendField (new Blockly.FieldTextInput ("name"), "VARNAME")      
      .appendField("=")
      .appendField (new Blockly.FieldTextInput ("expression"), "EXPRESSION");
   var a=this;
   this.setTooltip('');
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['setvariablevalue']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendValueInput ("EXPRESSION")
      .appendField("Set ")
      .appendField (new Blockly.FieldTextInput ("name"), "VARNAME")      
      .appendField("=");
   var a=this;
   this.setTooltip('');
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['scriptcraftexpression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Expression")
        .appendField (new Blockly.FieldTextInput ("expression"), "EXPRESSION")
        .setAlign(Blockly.ALIGN_CENTRE);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['returnVariable'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Return ")
        .appendField (new Blockly.FieldTextInput ("name"), "RETURNVARIABLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['snaplocation'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Snap Location to block ")
        .appendField (new Blockly.FieldTextInput ("location"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createVariable'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("create ")
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['functionCall'] = {
  init: function() {   
    //this.appendValueInput("FUNCTIONNAME")
    //    .appendField("Call Function");
    this.appendDummyInput()
        .appendField("Call Function")
        .appendField (new Blockly.FieldTextInput ("test"), "FUNCTIONNAME");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['mapRenderer'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("New Map Renderer")
        .appendField (new Blockly.FieldTextInput ("render"), "RENDERER");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['fileExists'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File Exists")
        .appendField(new Blockly.FieldTextInput ("filename.jpg"), "NAME");       
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com');
  }
};

Blockly.Blocks['drawImage'] = {
  init: function() {   

    this.appendDummyInput()
        .appendField("Draw Image")
        .appendField (new Blockly.FieldTextInput ("1.jpg"), "FILENAME");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['drawText'] = {
  init: function() {   

    this.appendDummyInput()
        .appendField("Draw Text")
        .appendField (new Blockly.FieldTextInput ("Hello World"), "TEXT");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['copyFile'] = {
  init: function() {   
    //this.appendValueInput("FUNCTIONNAME")
    //    .appendField("Call Function");
    this.appendDummyInput()
        .appendField("Copy File")
        .appendField (new Blockly.FieldTextInput ("source"), "SOURCE")
        .appendField (new Blockly.FieldTextInput ("destination"), "DESTINATION");
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['killplayer'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Kill Player");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setplayerdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Player Data")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.appendValueInput("VALUE")
        .appendField("Value");
    this.appendValueInput("PLAYER")
        .appendField("For Player/Entity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['removeplayerdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delete Player Data")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.appendValueInput("PLAYER")
        .appendField("For Player/Entity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['getplayerdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Player Data")
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY");        
    this.appendValueInput("PLAYER")
        .appendField("For Player/Entity");
    this.setColour(0);
    this.setOutput(true, null);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['existsplayerdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player Data Exists?")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.appendValueInput("PLAYER")
        .appendField("For Player/Entity");
    this.setColour(0);
    this.setTooltip('');
    this.setOutput(true, "Boolean");
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['delayedexecution'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delayed Execution")
        .appendField("TIMEOUT (ms)")
        .appendField (new Blockly.FieldTextInput ("500"), "TIMEOUT");
    this.appendStatementInput("DELAYEDCODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['scriptcraftfunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Function")
        .appendField (new Blockly.FieldTextInput ("test"), "nameOfFunction");
    this.appendStatementInput("FUNCTIONCODE")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dataexpression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data Structure")
        .appendField (new Blockly.FieldTextInput ("variable"), "VARNAME");
    this.appendStatementInput("EXPRESSION")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['datavalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Data Value")
        .appendField (new Blockly.FieldTextInput ("header"), "HEADER");
    this.appendStatementInput("EXPRESSION")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['namevalue']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendDummyInput()
      .appendField("Name")
      .appendField (new Blockly.FieldTextInput ("name"), "VARNAME")      
      .appendField("Value")
      .appendField (new Blockly.FieldTextInput ("expression"), "EXPRESSION");
   var a=this;
   this.setTooltip('');
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['settime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Time of Day")  
        .appendField (new Blockly.FieldTextInput ("11000"), "TIME")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['gettime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField ( "Get Time of Day");
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(120);
    this.setOutput(true, null);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setstorm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Storm")  
        .appendField(new Blockly.FieldDropdown([
                                                ["on", "true"],
                                                ["off", "false"]
                                               ]), "STORM"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['iteminhandis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Item in hand");
    this.appendValueInput("PLAYER")
        .appendField("Player");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['repeatexecution'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Repeat Execution Name:")
        .appendField (new Blockly.FieldTextInput ("test"), "NAME")
        .appendField("How Often (ms)")
        .appendField (new Blockly.FieldTextInput ("500"), "TIMEOUT");
    this.appendStatementInput("CODE");      
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};




