
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
    this.appendValueInput("PLAYER")
        .appendField ("SendMessage ")
        .appendField (new Blockly.FieldTextInput ( "Hello"), "MESSAGE")
        .appendField("To Player");        
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
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://www.codeproject.com/Articles/878585/Build-Giant-Ravine-in-Minecraft-using-ScriptCraft
Blockly.Blocks['tostring'] = {
  init: function() {
    this.appendValueInput("VARIABLE")
        .appendField("Var to string, Variable:");   
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setOutput(true, "String");  
    this.setColour(160);
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
        .appendField(new Blockly.FieldDropdown([ 
            ["A player moved", "playerMove"],
            ["Player Mouse Click","playerInteract"],           
            ["A player died", "playerDeath"], 
            ["World save event", "worldSave"],            
            ["An item was hung", "hangingPlace"],
            ["Player entered a portal", "playerPortal"],
            ["Projectile Hit Something", "projectileHit"],
            ["Player Respawn","playerRespawn"],
            ["Item Despawn", "itemDespawn"],
            ["Player joined the game","playerJoin"],
            ["A potion was splashed", "potionSplash"],
            ["A player consumed an item", "playerItemConsume"],
            ["A plant grew on a block","blockGrow"],
            ["A block was broken","blockBreak"],
            ["A block was exploded", "blockExplode"],
            ["A player threw an egg", "playerEggThrow"],
            ["An entity was damaged", "entityDamage"],
            ["An entity was spawned", "entitySpawn"],
            ["A creature was spawned", "creatureSpawn"],
            ["An entity targets another entity", "entityTarget"],
            ["An entity was damaged by entity", "entityDamageByEntity"],
            ["An entity exploded", "entityExplode"],
            ["A player, monster or animal was damaged", "entityDamage"],
            ["A server command was executed", "serverCommand"],
            ["A vehicle moved", "vehicleMove"],
            ["A vehicle collided with a block", "vehicleBlockCollision"],
            ["A vehicle was entered", "vehicleEnter"],
            ["A vehicle was exited", "vehicleExit"]
        ]), "LISTENERTYPE");  
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
    this.appendValueInput("LOCATION")
        .appendField("Explosion Size")
        .appendField (new Blockly.FieldTextInput ("1.5"), "SIZE")
        .appendField ("Location:");      

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
        .appendField(new Blockly.FieldDropdown([["calling function", "self"], ["causing event","event.player"],["event entity", "event.entity"],["shooter","event.entity.shooter"], ["All affected entities", "event.getAffectedEntities()"], ["Attacker", "event.damager"]]), "PLAYER");           
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
        .appendField("Leather Armor in Color");
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
        .appendField("Spawn Block ");        
    this.appendValueInput("LOCATION")
        .appendField("At Location ");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['signtext'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField ("Set sign text for sign at location: ");   
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
/*
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
*/


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
        .appendField("Teleport Entity");
    this.appendValueInput("LOCATION")
        .appendField("Location");         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['moveto'] = {
  init: function() {
     this.appendValueInput("ENTITY")
        .appendField ("Move Entity");
     this.appendValueInput("LOCATION")
        .appendField ("Location");
     this.setPreviousStatement(true, null);
     this.setNextStatement (true, null);
     this.setColour(120)
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
    this.setColour(120);
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

Blockly.Blocks['lightning'] = {
  init: function() {
    this.appendValueInput ("LOCATION")
        .appendField("Lightning strike at")
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
    this.setColour(120);
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
        .appendField(new Blockly.FieldDropdown([["calling function", "self"], ["causing event","event.player"],["event entity", "event.entity"],["shooter","event.entity.shooter"], ["All affected entities", "event.getAffectedEntities()"], ["Attacker", "event.damager"]]), "PLAYER");           
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
    this.appendValueInput("NAME")
        .appendField ("Add ")
        .appendField (new Blockly.FieldTextInput ("1"), "COUNT")
        .appendField (" ")        
        .appendField (new Blockly.FieldDropdown([["Drinkable Potion","POTION"],["Splash Potion","SPLASH_POTION"], ["Create a bat cart", "BATCART"],["Increase health of entity", "ABSORPTION"],["Oof Bad Omen", "BAD_OMEN"],["Blindness", "BLINDNESS"],["Confusion", "CONFUSION"],["Decrease Damage Received","DAMAGE_RESISTANCE"],["Glow", "GLOWING"], ["Hurt an entity", "HARM"],["Heal an entity", "HEAL"],["Increase damage dealt","INCREASE_DAMAGE"],["Invisibility","INVISIBILITY"],["Increase jump height","JUMP"],["Cause entity to float","LEVITATION"],["Loot table luck","LUCK"],["Night Vision","NIGHT_VISION"],["Poison an entity","POISION"],["Regenerate Health","REGENERATION"], ["Decrease Movement Speed","SLOW"],["Increase Movement Speed", "SPEED"],["Allow breathing underwater", "WATER_BREATHING"],["Decrease damage dealt by entity","WEAKNESS"],["Suck health from entity","WITHER"]]), "POTION")           
        .appendField (" to inventory. Potion Name:" );
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

Blockly.Blocks['modifystack'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create a stack of items");
    this.appendValueInput("ITEM")
        .appendField("Basic Stack of Items");         
    this.appendStatementInput("MODIFICATIONS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
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
    this.appendDummyInput () 
        .appendField ("Set Entity Name" )    
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");          
        
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
        .appendField("Monster or Object")
        .appendField(new Blockly.FieldDropdown([["entity","entity"], ["event entity", "event.entity"],["shooter","event.entity.shooter"], ["All affected entities", "event.getAffectedEntities()"], ["Attacker", "event.damager"]]), "ENTITY");           
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['whichplayer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Event Entity")
        .appendField(new Blockly.FieldDropdown([["Player calling function", "self"], 
                                                ["Player causing event","event.player"],
                                                ["event entity", "event.entity"],
                                                ["event vehicle", "event.vehicle"],
                                                ["shooter","event.entity.shooter"], 
                                                ["All affected entities", "event.getAffectedEntities()"],
                                                ["Potion that was splashed", "event.getPotion()"],
                                                ["Attacker", "event.damager"], 
                                                ["All Players", "server.getOnlinePlayers()"]]), "ENTITY");           
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
                                                ["Arrow", "ARROW"],
                                                ["Bat", "BAT"], 
                                                ["Bat Cart", "BATCART"],
                                                ["Cave Spider", "CAVE_SPIDER"],
                                                ["Cat", "CAT"],
                                                ["Chicken","CHICKEN"],
                                                ["Cow","COW"],
                                                ["Creeper","CREEPER"],
                                                ["Ender Dragon", "ENDER_DRAGON"],
                                                ["Endermite", "ENDERMITE"],
                                                ["Evoker", "EVOKER"],
                                                ["Evoker Fangs", "EVOKER_FANGS"],
                                                ["Fireball", "FIREBALL"],
                                                ["Horse", "HORSE"], 
                                                ["Iron Golem", "IRON_GOLEM"],
                                                ["Minecart", "MINECART"], 
                                                ["Ocelot", "OCELOT"],
                                                ["Pig", "PIG"],
                                                ["Rabbit", "RABBIT"],
                                                ["Ravager", "RAVAGER"],
                                                ["Sheep", "SHEEP"],  
                                                ["Splash Potion", "SPLASH_POTION"],                                                
                                                ["Shulker", "SHULKER"],
                                                ["Shulker Bullet", "SHULKER_BULLET"],
                                                ["Skeleton","SKELETON"],
                                                ["Skeleton Horse", "SKELETON_HORSE"],
                                                ["Trident", "TRIDENT"],
                                                ["Villager", "VILLAGER"],
                                                ["Wolf", "WOLF"],
                                                ["Wither", "WITHER"],
                                                ["Wither Skull", "WITHER_SKULL"],
                                                ["Zombie", "ZOMBIE"]
                                               ]), "ENTITY");                   
    this.setOutput(true, null);
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['materialtype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Material")        
        .appendField(new Blockly.FieldDropdown([
                                                  ["Arrow", "ARROW"],
                                                  ["Bow", "BOW"],
                                                  ["Baked Potato","BAKED_POTATO"],
                                                  ["Bone Meal", "BONE_MEAL"],
                                                  ["Chest", "CHEST"],
                                                  ["Cookie","COOKIE"],
                                                  ["Crossbow", "CROSSBOW"],
                                                  ["Diamond", "DIAMOND"],
                                                  ["Diamond Pick", "DIAMOND_PICKAXE"],
                                                  ["Diamond Shovel", "DIAMOND_SHOVEL"],
                                                  ["Drinkable Potion", "POTION"],
                                                  ["Elytra (Glider)", "LEGACY_ELYTRA"],                                                  
                                                  ["Firework", "FIREWORK_ROCKET"],
                                                  ["Golden Apple","GOLDEN_APPLE"],
                                                  ["Golden Apple (Enchanted)", "ENCHANTED_GOLDEN_APPLE"],
                                                  ["Oak Sign Post", "OAK_SIGN"],                                                  
                                                  ["SnowBall", "SNOWBALL"],
                                                  ["Stick", "STICK"],
                                                  ["Snow Block", "SNOW_BLOCK"],
                                                  ["Splash Potion", "SPLASH_POTION"],
                                                  ["White Wool", "WHITE_WOOL"],
                                                  ["Wolf Egg", "WOLF_SPAWN_EGG"],
                                                  ["Wheat Seeds", "WHEAT_SEEDS"]
                                               ]), "MATERIAL");                   
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['projectileentity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Projectile")        
        .appendField(new Blockly.FieldDropdown([
                                                  ["Arrow", "ARROW"],
                                                  ["Dragon Fireball", "DRAGON_FIREBALL"],
                                                  ["Fireball", "FIREBALL"],
                                                  ["Firework", "FIREWORK_ROCKET"],
                                                  ["Shulker Bullet", "SHULKER_BULLET"],
                                                  ["SnowBall", "SNOWBALL"],
                                                  ["Trident", "TRIDENT"],
                                                  ["Wither Skull", "WITHER_SKULL"]                                                                                                        
                                               ]), "PROJECTILE");                   
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['eggtype'] = {
  init: function() {
    this.appendDummyInput()       
        .appendField(new Blockly.FieldDropdown([
                                                  ["Blaze Spawn Egg", "BLAZE_SPAWN_EGG"],
                                                  ["Cave Spider Spawn Egg", "CAVE_SPIDER_SPAWN_EGG"],
                                                  ["Creeper Spawn Egg", "CREEPER_SPAWN_EGG"],
                                                  ["Endermite Spawn Egg", "ENDERMITE_SPAWN_EGG"],
                                                  ["Enderman Egg", "ENDERMAN_SPAWN_EGG"],
                                                  ["Guardian Egg", "GUARDIAN_SPAWN_EGG"],
                                                  ["Ghast Egg", "GHAST_SPAWN_EGG"],
                                                  ["Husk Egg", "HUSK_SPAWN_EGG"],
                                                  ["Llama Spawn Egg", "LLAMA_SPAWN_EGG"],
                                                  ["Magma Cube Spawn Egg","MAGMA_CUBE_SPAWN_EGG"],
                                                  ["Pillager Spawn Egg","PILLAGER_SPAWN_EGG"],
                                                  ["Polar Bear Spawn Egg","POLAR_BEAR_SPAWN_EGG"],
                                                  ["Shulker Spawn Egg", "SHULKER_SPAWN_EGG"],
                                                  ["Ravager Spawn Egg", "RAVAGER_SPAWN_EGG"],
                                                  ["Skeleton Spawn Egg", "SKELETON_SPAWN_EGG"],
                                                  ["Skeleton Horse Spawn Egg", "SKELETON_HORSE_SPAWN_EGG"],
                                                  ["Wolf Egg", "WOLF_SPAWN_EGG"],
                                                  ["Vex Spawn Egg", "VEX_SPAWN_EGG"],                                                
                                                  ["Vindicator Spawn Egg", "VINDICATOR_SPAWN_EGG"],
                                                  ["Zombie Pigman Spawn Egg", "ZOMBIE_PIGMAN_SPAWN_EGG"],
                                                  ["Zombie Villager Spawn Egg", "ZOMBIE_VILLAGER_SPAWN_EGG"],
                                                  ["Zombie Spawn Egg", "ZOMBIE_SPAWN_EGG"]
                                               ]), "MATERIAL");                   
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blocktype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block Type")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Air", "AIR"],
                                                ["Bed", "LEGACY_BED_BLOCK"],
                                                ["Chest", "CHEST"],
                                                ["Cobblestone", "COBBLESTONE"],
                                                ["Command Block (Chain)", "CHAIN_COMMAND_BLOCK"],
                                                ["Command Block (Impulse)", "COMMAND_BLOCK"],
                                                ["Command Block (Repeating)", "REPEATING_COMMAND_BLOCK"],
                                                ["Command Block Minecart", "COMMAND_BLOCK_MINECART"],                                                
                                                ["Composter", "COMPOSTER"],                                                
                                                ["Door", "LEGACY_WOODEN_DOOR"],
                                                ["Farm Land", "FARMLAND"],
                                                ["Fence", "OAK_FENCE"],
                                                ["Fire", "FIRE"],                                                
                                                ["Gate", "OAK_FENCE_GATE"],
                                                ["Item Frame", "ITEM_FRAME"],
                                                ["Lever", "LEVER"],
                                                ["Normal Piston", "PISTON"],
                                                ["Oak", "OAK_WOOD"], 
                                                ["Oak Sign Post", "OAK_SIGN"],
                                                ["Observer Block", "OBSERVER"],                                                
                                                ["Portal", "LEGACY_PORTAL"],
                                                ["Rail", "RAIL"],
                                                ["Rail Powered", "POWERED_RAIL"],
                                                ["Redstone Block", "REDSTONE_BLOCK"],
                                                ["Redstone Torch", "REDSTONE_TORCH"],
                                                ["Sign on Wall", "LEGACY_SIGN"],
                                                ["Sticky Piston", "STICKY_PISTON"],
                                                ["Slime Block", "SLIME_BLOCK"],
                                                ["TNT", "TNT"],
                                                ["Water", "WATER"],
                                                ["Wheat", "WHEAT"],
                                                ["White Banner", "WHITE_BANNER"], 
                                                ["Window Pane", "LEGACY_GLASS"]
                                               ]), "BLOCKTYPE"); 
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
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setride'] = {
  init: function() {   
    this.appendValueInput("VEHICLE")
        .appendField("Set passenger on vehicle");
    this.appendValueInput("PASSENGER")
        .appendField("Passenger");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
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
    this.setColour(200);
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
    this.setColour(200);
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
    this.setColour(0);
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
    this.setColour(0);
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
        .appendField("Set Entity Data")  
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

Blockly.Blocks['getplayerdata2'] = {
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
    this.setColour(330);
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
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['namevalue']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendDummyInput()
      .appendField("Data Name")
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
    this.appendValueInput("PLAYER")        
        .appendField("Stack in hand of Player");
    this.setOutput(true, null);
    this.setColour(0);
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
    this.appendDummyInput()
        .appendField ("Continue execution while" )
        .appendField (new Blockly.FieldTextInput ("i > 0"), "CONTINUE");
    this.appendStatementInput("CODE");      
    this.setColour(0);
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setgamemode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Game Mode")
        .appendField(new Blockly.FieldDropdown([
                                                ["Adventure - Need correct tools to break blocks", "ADVENTURE"],
                                                ["Creative - Can fly, build, invulnerable, and create items free", "CREATIVE"],
                                                ["Spectator - cannot interact with world and is invisible", "SPECTATOR"],
                                                ["Survival - Normal game mode, no special features", "SURVIVAL"]
                                               ]), "GAMEMODE"); 
    this.appendValueInput("PLAYER")
        .appendField("Player");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}; 

Blockly.Blocks['recipe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Recipe");
    this.appendValueInput("RESULT")
        .appendField("Result Stack");
    this.appendDummyInput()
        .appendField("Ingredient Stacks");
    this.appendStatementInput("INGREDIENTS")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("Line1") 
        .appendField (new Blockly.FieldTextInput ("D"), "CH1")
        .appendField (new Blockly.FieldTextInput (" "), "CH2")
        .appendField (new Blockly.FieldTextInput ("D"), "CH3");
    this.appendDummyInput()
        .appendField("Line2") 
        .appendField (new Blockly.FieldTextInput ("X"), "CH4")
        .appendField (new Blockly.FieldTextInput ("Y"), "CH5")
        .appendField (new Blockly.FieldTextInput ("Z"), "CH6");
    this.appendDummyInput()
        .appendField("Line3") 
        .appendField (new Blockly.FieldTextInput ("Q"), "CH7")
        .appendField (new Blockly.FieldTextInput ("H"), "CH8")
        .appendField (new Blockly.FieldTextInput ("Q"), "CH9");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['addingredient'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Ingredient Character:")
        .appendField (new Blockly.FieldTextInput ("%"), "CHARACTER");
    this.appendValueInput("INGREDIENT")
        .appendField("Ingredient Stack");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
}; 

Blockly.Blocks['itemstack'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .appendField("Stack of")
        .appendField (new Blockly.FieldTextInput ("1"), "COUNT");
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);

  }
}; 

Blockly.Blocks['instanceof'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Instance of");
    this.appendValueInput("ENTITY")
        .appendField("Player/Entity");  
    this.appendDummyInput()
        .appendField (" = ");    
    this.appendValueInput ("TYPE");
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);

  }
}; 

Blockly.Blocks['bordercenter'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Set World Border Center Location:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['bordersize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set World Border Radius:")
        .appendField (new Blockly.FieldTextInput ("100"), "SIZE");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['equipmentname'] = {
  init: function() {
    this.appendDummyInput () 
        .appendField ("Set Equipment Name" )    
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");          
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
  }
};

Blockly.Blocks['updateinventory'] = {
  init: function() {
    this.appendValueInput ("ITEMSTACK")
        .appendField ("Add to inventory, itemstack:")
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getequipmentname'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Item in hand for Player: ")

    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['playerhas'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Player");
        
    this.appendValueInput("MATERIAL")
        .appendField("Has the item with name" )
        .appendField (new Blockly.FieldTextInput ("name"), "NAME"); 

    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['servercommand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Execute server command")
        .appendField (new Blockly.FieldTextInput ("weather clear"), "COMMAND");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockatlocation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block at");
    this.appendValueInput("LOCATION")
        .appendField("Location");
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pushlist']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendDummyInput()
      .appendField("Add to list ")
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

Blockly.Blocks['getblocktype'] = {
  init: function() {
    this.appendValueInput("BLOCK")
        .appendField("Get Type of Block:");
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getsignline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField ( "Get Sign's Line" );
    this.appendValueInput("BLOCK")
        .appendField("For Block");
    this.appendDummyInput()
        .appendField("Line: ")
        .appendField (new Blockly.FieldTextInput ("0"), "LINE");      
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['whichblock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Which Block")
        .appendField(new Blockly.FieldDropdown([
                                                ["The events block", "event.block"],
                                                ["Block that was clicked on", "event.getClickedBlock()"]
                                               ]), "BLOCK");    
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['allplayers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField ( "All Players" );
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['allentities'] = {
  init: function() {
    this.appendDummyInput()
        .appendField ( "All Entities" );
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['blockfacing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Block Facing Direction")
        .appendField(new Blockly.FieldDropdown([
                                                 ["DOWN","DOWN"],	 
                                                 ["EAST","EAST"],	 
                                                 ["EAST_NORTH_EAST","EAST_NORTH_EAST"],	 
                                                 ["EAST_SOUTH_EAST","EAST_SOUTH_EAST"],	 
                                                 ["NORTH","NORTH"],	 
                                                 ["NORTH_EAST","NORTH_EAST"],	 
                                                 ["NORTH_NORTH_EAST","NORTH_NORTH_EAST"],	 
                                                 ["NORTH_NORTH_WEST","NORTH_NORTH_WEST"],	 
                                                 ["NORTH_WEST","NORTH_WEST"],	 
                                                 ["SOUTH","SOUTH"],	 
                                                 ["SOUTH_EAST","SOUTH_EAST"],	 
                                                 ["SOUTH_SOUTH_EAST","SOUTH_SOUTH_EAST"],	 
                                                 ["SOUTH_SOUTH_WEST","SOUTH_SOUTH_WEST"],	 
                                                 ["SOUTH_WEST","SOUTH_WEST"],	 
                                                 ["UP","UP"],	 
                                                 ["WEST","WEST"],	 
                                                 ["WEST_NORTH_WEST","WEST_NORTH_WEST"],	 
                                                 ["WEST_SOUTH_WEST","WEST_SOUTH_WEST"]        
                                               ]), "FACE"); 
    this.appendValueInput("LOCATION")
        .appendField("At Location ");                                                       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['signfacing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Sign Facing Direction")
        .appendField(new Blockly.FieldDropdown([
                                                 ["DOWN","DOWN"],	 
                                                 ["EAST","EAST"],	 
                                                 ["EAST_NORTH_EAST","EAST_NORTH_EAST"],	 
                                                 ["EAST_SOUTH_EAST","EAST_SOUTH_EAST"],	 
                                                 ["NORTH","NORTH"],	 
                                                 ["NORTH_EAST","NORTH_EAST"],	 
                                                 ["NORTH_NORTH_EAST","NORTH_NORTH_EAST"],	 
                                                 ["NORTH_NORTH_WEST","NORTH_NORTH_WEST"],	 
                                                 ["NORTH_WEST","NORTH_WEST"],	 
                                                 ["SOUTH","SOUTH"],	 
                                                 ["SOUTH_EAST","SOUTH_EAST"],	 
                                                 ["SOUTH_SOUTH_EAST","SOUTH_SOUTH_EAST"],	 
                                                 ["SOUTH_SOUTH_WEST","SOUTH_SOUTH_WEST"],	 
                                                 ["SOUTH_WEST","SOUTH_WEST"],	 
                                                 ["UP","UP"],	 
                                                 ["WEST","WEST"],	 
                                                 ["WEST_NORTH_WEST","WEST_NORTH_WEST"],	 
                                                 ["WEST_SOUTH_WEST","WEST_SOUTH_WEST"]        
                                               ]), "FACE"); 
    this.appendValueInput("LOCATION")
        .appendField("At Location ");                                                       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['getcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField ( "Color " )
        .appendField(new Blockly.FieldDropdown([
                                        ["AQUA","AQUA"],	
                                        ["BLACK","BLACK"],
                                        ["BLUE","BLUE"],
                                        ["FUCHSIA","FUCHSIA"],
                                        ["GRAY","GRAY"],
                                        ["GREEN","GREEN"],
                                        ["LIME","LIME"],
                                        ["MAROON","MAROON"],
                                        ["NAVY","NAVY"],
                                        ["OLIVE","OLIVE"],
                                        ["ORANGE","ORANGE"],
                                        ["PURPLE","PURPLE"],
                                        ["RED","RED"],
                                        ["SILVER","SILVER"],
                                        ["TEAL","TEAL"],
                                        ["WHITE","WHITE"],
                                        ["YELLOW","YELLOW"]
                                     ]), "COLOR"); 
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setblockcommand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Command Block Command")         
        .appendField (new Blockly.FieldTextInput ("\"say \\\"Hello\\\"\""), "COMMAND");     
    this.appendValueInput("LOCATION")
        .appendField("At Location ");                                                       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['runexpression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Expression")
        .appendField (new Blockly.FieldTextInput ("expression"), "EXPRESSION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setconditional'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Command Block Conditional")  
        .appendField(new Blockly.FieldDropdown([
                                                ["True", "true"],
                                                ["False", "false"]
                                               ]), "CONDITIONAL"); 
    this.appendValueInput("LOCATION")
        .appendField("Block Location ");                                                
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setblockdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Block Data")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.appendValueInput("VALUE")
        .appendField("Value");
    this.appendValueInput("LOCATION")
        .appendField("Block Location");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getblockdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Block Data")
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY");        
    this.appendValueInput("LOCATION")
        .appendField("Block Location");
    this.setColour(200);
    this.setOutput(true, null);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['existsblockdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block Data Exists?")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.appendValueInput("LOCATION")
        .appendField("Block Location");
    this.setColour(200);
    this.setTooltip('');
    this.setOutput(true, "Boolean");
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['potionSplashed'] = {
  init: function() {
    this.appendValueInput("POTION")
        .appendField("Custom Name of Stack:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['dropitem'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Drop Items At Location:");
    this.appendValueInput("ITEMSTACK")
        .appendField("Stack of Items");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['findentitybyname'] = {
  init: function() {
    this.appendDummyInput () 
        .appendField ("var entity = findEntityByName " )    
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");          
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    // this.setOutput(true, null);    
  }
};

Blockly.Blocks['findentitybycustomname'] = {
  init: function() {
    this.appendDummyInput () 
        .appendField ("var entity = findEntityByCustomName " )    
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");                  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');    
  }
};

Blockly.Blocks['whicheffect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Effect")
        .appendField(new Blockly.FieldDropdown([
                                                ["Add health to health bar", "absorption"],
                                                ["Get attacked by mobs in a village", "bad_omen"],
                                                ["Create a thick black fog", "blindness"],
                                                ["Improve visibility and water mining speed", "conduit_power"], 
                                                ["Increase swimming speed ", "dolphins_grace"],
                                                ["Immunity to fire","fire_resistance"],
                                                ["Display halo around player", "glowing"],
                                                ["Speed up block breaking","haste"],
                                                ["Increase max health", "health_boost"],
                                                ["Allow discount trading", "hero_of_the_village"],
                                                ["Cause food bar to deplete","hunger"],
                                                ["Damage player or living mob","instant_damage"],
                                                ["Give health to player or living mob","instant_health"],
                                                ["Invisibility","invisibility"],
                                                ["Higher Jumping","jump_boost"],
                                                ["Involuntary floating","levitation"],
                                                ["Increase chance of finding loot","luck"],
                                                ["Slow you down when breaking blocks","mining_fatigue"],
                                                ["Twist and warp the screen","nausea"],
                                                ["Night Vision","night_vision"],
                                                ["Continually damager health","poison"],
                                                ["Continually restore health","regeneration"],
                                                ["Reduce damage received","resistance"],
                                                ["Replenish food supply","saturation"],
                                                ["Slow falling","slow_falling"],
                                                ["Make player slower","slowness"],
                                                ["Make player faster","speed"],
                                                ["Increase damage dealt to others","strength"],
                                                ["Decrease probability of finding loot","unluck"],
                                                ["Breathe under water","water_breathing"],
                                                ["Decrease damage dealt to others","weakness"],
                                                ["Damage health every 2 seconds","wither"]
                                               ]), "EFFECT");           
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createvector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Vector")
        .appendField("X")
        .appendField (new Blockly.FieldTextInput (".5"), "X")          
        .appendField("Y")
        .appendField (new Blockly.FieldTextInput (".5"), "Y")          
        .appendField("Z")
        .appendField (new Blockly.FieldTextInput (".5"), "Z");          
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['vector2points'] = {
  init: function() {
    this.appendValueInput("LOCATION1")
        .appendField("Vector between 2 locations From ")
    this.appendValueInput("LOCATION2")
        .appendField("To")
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['multiplyvector'] = {
  init: function() {
    this.appendValueInput("VECTOR")
        .appendField ("Multiply vector ");   
    this.appendDummyInput () 
        .appendField ("By " )    
        .appendField (new Blockly.FieldTextInput ("1.5"), "SCALAR");                  
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');    
  }
};

Blockly.Blocks['getvectorvelocity'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField ("Get vector velocity from entity:" );   
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setvectorvelocity'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField ("Set vector velocity for entity:" );   
    this.appendValueInput("VECTOR")
        .appendField ("Vector:" );   
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');    
  }
};

Blockly.Blocks['findentitybylocation'] = {
  init: function() {           
    this.appendValueInput("LOCATION")
        .appendField ("var entity = findEntityByLocation" )
        .appendField ("Location:" );        
    this.appendValueInput("RADIUS")
        .appendField ("Radius:" );        
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    // this.setOutput(true, null);    
  }
};

Blockly.Blocks['distancebetweenlocations'] = {
  init: function() {
    this.appendValueInput("LOCATION1")
        .appendField ("Distance between locations location1:" );   
    this.appendValueInput("LOCATION2")
        .appendField ("location2:" );
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['direction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Item Direction")
        .appendField(new Blockly.FieldDropdown([
                                                 ["DOWN","DOWN"],	 
                                                 ["EAST (Positive X)","EAST"],	 
                                                 ["EAST_NORTH_EAST","EAST_NORTH_EAST"],	 
                                                 ["EAST_SOUTH_EAST","EAST_SOUTH_EAST"],	 
                                                 ["NORTH (Negative Z)","NORTH"],	 
                                                 ["NORTH_EAST","NORTH_EAST"],	 
                                                 ["NORTH_NORTH_EAST","NORTH_NORTH_EAST"],	 
                                                 ["NORTH_NORTH_WEST","NORTH_NORTH_WEST"],	 
                                                 ["NORTH_WEST","NORTH_WEST"],	 
                                                 ["SOUTH (Positive Z)","SOUTH"],	 
                                                 ["SOUTH_EAST","SOUTH_EAST"],	 
                                                 ["SOUTH_SOUTH_EAST","SOUTH_SOUTH_EAST"],	 
                                                 ["SOUTH_SOUTH_WEST","SOUTH_SOUTH_WEST"],	 
                                                 ["SOUTH_WEST","SOUTH_WEST"],	 
                                                 ["UP","UP"],	 
                                                 ["WEST (Negative X)","WEST"],	 
                                                 ["WEST_NORTH_WEST","WEST_NORTH_WEST"],	 
                                                 ["WEST_SOUTH_WEST","WEST_SOUTH_WEST"]        
                                               ]), "DIRECTION"); 
                                                      
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['lookingdirection'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField ("Get direction looking for Player" ); 
                                                      
    this.setOutput(true, null);
    this.setColour(00);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['millis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Current Milliseconds")
                                                      
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getentitytype'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Get Type of entity:");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['randomnumber'] = {
  init: function() {
    this.appendValueInput("LOW")
        .appendField("Random Number between");
    this.appendValueInput("HIGH")
        .appendField("And High");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isplayer'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Is a player");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['islivingentity'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Is a living entity");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isarrow'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Is an arrow");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['issnowball'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Is a snowball");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['addpotioneffect'] = {
  init: function() {           
    this.appendValueInput("EFFECT")
        .appendField ("Give potion effect:" );        
    this.appendValueInput("PLAYER")
        .appendField ("To Entity" );        
    this.appendValueInput("DURATION")
        .appendField ("Duration (seconds)" );        
                
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
  }
};


Blockly.Blocks['spawnentity'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Spawn creature");
    this.appendValueInput("LOCATION")
        .appendField("At Location");        
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['nameastack'] = {
  init: function() {
    this.appendValueInput("STACK")
        .appendField ("var stack = ")
        .appendField (new Blockly.FieldTextInput ( "Custom Name"), "NAME")
        .appendField(" named stack of ");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['additem'] = {
  init: function() {           
    this.appendValueInput("ITEMTYPE")
        .appendField ("Give potion effect:" );        
    this.appendValueInput("PLAYER")
        .appendField ("To Player" );        
    this.appendValueInput("COUNT")
        .appendField ("Duration (seconds)" );        
                
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
  }
};

Blockly.Blocks['nameofitem'] = {
  init: function() {
    this.appendValueInput("ITEM")
        .appendField("Custom Name of Item:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['lookingat'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Block looked at by player");   
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['playerinventory'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Inventory for player:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['clearinventory'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Clear inventory for player:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['vectortoyaw'] = {
  init: function() {
    this.appendValueInput("VECTOR")
        .appendField("Get yaw for vector:");   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['boundingbox'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Get Bounding Box, with center location:");   
    this.appendValueInput("RADIUS")
        .appendField("Radius:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['nearbyentities'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Entities in a box, with center");   
    this.appendValueInput("RADIUS")
        .appendField("and radius");   
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['tocreature'] = {
  init: function() {
    this.appendValueInput("CREATURE")
        .appendField("Convert to creature type");   
    this.setColour(80);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['hasfunction'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .appendField ("Function ")
        .appendField (new Blockly.FieldTextInput ( "functionName"), "NAME")
        .appendField(" is callable from object");        
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);
  }
};

Blockly.Blocks['actiontype'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mouse Click Type")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Left click in air", "LEFT_CLICK_AIR"],
                                                ["Left click on a block", "LEFT_CLICK_BLOCK"],
                                                ["Right click in the air", "RIGHT_CLICK_AIR"], 
                                                ["Right click on a block", "RIGHT_CLICK_BLOCK"]
                                               ]), "ACTION"); 
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['launchprojectile'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Launch projectile from entity:");   
    this.appendValueInput("PROJECTILE")
        .appendField("projectile:");   
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['nameofstack'] = {
  init: function() {
    this.appendValueInput("STACK")
        .appendField("Custom Name of Stack:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['playerinventory'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Inventory for player: ");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['chestplate'] = {
  init: function() {
    this.appendValueInput("INVENTORY")
        .appendField("Chestplate in inventory: ");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};

Blockly.Blocks['materialdata'] = {
  init: function() {
    this.appendValueInput("STACK")
        .appendField("Material type in stack: ");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, "String");
  }
};
