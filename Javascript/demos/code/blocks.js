
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
        .appendField (new Blockly.FieldTextInput ( "\"Hello\""), "MESSAGE")
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
        .appendField("convert to string, Variable:");   
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
            ["Player dropped an item", "playerDropItem"],
            ["Area Effect Cloud Apply", "areaEffectCloudApply"],
            ["An inventory item was selected", "inventoryClick"],  
            ["An inventory got an item", "inventoryPickupItem"],
            ["An item was crafted", "craftItem"],
            ["An entity moved an inventory item", "inventoryMoveItem"],
            ["Player entered a command", "playerCommandPreprocess" ],    
            ["A player died", "playerDeath"], 
            ["A player joined the server", "playerJoin"],
            ["World save event", "worldSave"],            
            ["An item was hung", "hangingPlace"],
            ["Player entered a portal", "playerPortal"],
            ["Bow was fired", "entityShootBow"],
            ["Projectile Hit Something", "projectileHit"],
            ["Projectile Launched", "projectileLaunch"],
            ["Player Respawn","playerRespawn"],
            ["Item Despawn", "itemDespawn"],
            ["Player disconnected","playerQuit"],
            ["A potion was splashed", "potionSplash"],
            ["A player consumed an item", "playerItemConsume"],
            ["A plant grew on a block","blockGrow"],
            ["A block was broken","blockBreak"],
            ["A block was exploded", "blockExplode"],
            ["A player threw an egg", "playerEggThrow"],
            ["An entity was damaged", "entityDamage"],
            ["An entity died", "entityDeath"],
            ["An entity was spawned", "entitySpawn"],
            ["A creature was spawned", "creatureSpawn"],
            ["An entity targets another entity", "entityTarget"],
            ["An entity was damaged by entity", "entityDamageByEntity"],
            ["An entity exploded", "entityExplode"],
            ["A player, monster or animal was damaged", "entityDamage"],
            ["A server command was executed", "serverCommand"],
            ["A server reload has completed", "serverLoad"], 
            ["A vehicle moved", "vehicleMove"],
            ["A vehicle collided with a block", "vehicleBlockCollision"],
            ["A vehicle was entered", "vehicleEnter"],
            ["A vehicle was exited", "vehicleExit"],
            ["World unload event", "worldUnload"]
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

Blockly.Blocks['forlistdo'] = {
  init: function() {
    this.appendValueInput("LIST")
        .appendField ( "Using loop variable: " )
        .appendField (new Blockly.FieldTextInput ( "_i"), "INDEX")    
        .appendField("For loop for list: ");
    this.appendStatementInput("FORCODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['explosion'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Explosion Size")
        .appendField(new Blockly.FieldDropdown([
               [ "0", "0"], 
               [ "1", "1"],  ["2", "2"],  ["3", "3"],  ["4", "4"], [ "5", "5"], [ "6", "6"],  ["7", "7"],  ["8", "8"],  ["9", "9"], ["10","10"],
                 ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"]
                                               ]), "SIZE")
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
        .appendField(new Blockly.FieldDropdown([
                                                  ["calling function", "self"], 
                                                  ["causing event","event.player"],
                                                  ["event entity", "event.entity"],
                                                  ["shooter","event.entity.shooter"],
                                                  ["All affected entities", "event.getAffectedEntities()"], 
                                                  ["Attacker", "event.damager"]
                                               ]), "PLAYER");           
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
        .appendField("Delayed Teleport Entity");
    this.appendValueInput("LOCATION")
        .appendField("Location");      
    this.setInputsInline(true);             
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['instantteleport'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField("Teleport Entity");
    this.appendValueInput("LOCATION")
        .appendField("Location");      
    this.setInputsInline(true);             
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
  }
};

Blockly.Blocks['nameentity'] = {
  init: function() {
    this.appendValueInput ("ENTITY") 
        .appendField ("Set Custom Name of " )
        
    this.appendDummyInput()
        .appendField ("to")
        .appendField (new Blockly.FieldTextInput ("\"NAME\""), "NAME");          
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['entityname'] = {
  init: function() {
    this.appendValueInput ("ENTITY") 
        .appendField ("Get Name of entity:" )
        
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
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
                                                ["Area Effect Cloud", "AREA_EFFECT_CLOUD"],
                                                ["Bat", "BAT"], 
                                                ["Bat Cart", "BATCART"],
                                                ["Cave Spider", "CAVE_SPIDER"],
                                                ["Cat", "CAT"],
                                                ["Chicken","CHICKEN"],
                                                ["Cow","COW"],
                                                ["Creeper","CREEPER"],
                                                ["Ender Dragon", "ENDER_DRAGON"],
                                                ["Enderman", "ENDERMAN"],
                                                ["Endermite", "ENDERMITE"],
                                                ["Evoker", "EVOKER"],
                                                ["Evoker Fangs", "EVOKER_FANGS"],
                                                ["Fireball", "FIREBALL"],
                                                ["Horse", "HORSE"], 
                                                ["Iron Golem", "IRON_GOLEM"],
                                                ["Lingering Potion", "LINGERING_POTION"],
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
                                                ["Thrown Potion", "THROWN_POTION"],
                                                ["Tipped Arrow", "TIPPED_ARROW"],
                                                ["Trident", "TRIDENT"],
                                                ["Villager", "VILLAGER"],
                                                ["Wandering Trader", "WANDERING_TRADER"],
                                                ["Wolf", "WOLF"],
                                                ["Witch", "WITCH"],
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
                                                  ["Acacia Door", "ACACIA_DOOR"],
                                                  ["Acacia Planks", "ACACIA_PLANKS"],
                                                  ["Air", "AIR"],
                                                  ["Arrow", "ARROW"],
                                                  ["Birch Door", "BIRCH_DOOR"],
                                                  ["Birch Planks", "BIRCH_PLANKS"],                                                
                                                  ["Bow", "BOW"],
                                                  ["Baked Potato","BAKED_POTATO"],
                                                  ["Blaze Rod", "BLAZE_ROD"],
                                                  ["Bone Meal", "BONE_MEAL"],
                                                  ["Chainmail Boots", "CHAINMAIL_BOOTS"],
                                                  ["Chainmail ChestPlate", "CHAINMAIL_CHESTPLATE"],
                                                  ["Chainmail Helmet", "CHAINMAIL_HELMET"],
                                                  ["Chainmail Leggings", "CHAINMAIL_LEGGINGS"],                                                  
                                                  ["Compass", "COMPASS"],
                                                  ["Cookie","COOKIE"],
                                                  ["Crossbow", "CROSSBOW"],
                                                  ["Dark Oak Door", "DARK_OAK_DOOR"],
                                                  ["Dark Oak Planks", "DARK_OAK_PLANKS"],
                                                  ["Diamond", "DIAMOND"],
                                                  ["Diamond Boots", "DIAMOND_BOOTS"],
                                                  ["Diamond ChestPlate", "DIAMOND_CHESTPLATE"],
                                                  ["Diamond Helmet", "DIAMOND_HELMET"],
                                                  ["Diamond Leggings", "DIAMOND_LEGGINGS"],
                                                  ["Diamond Pick", "DIAMOND_PICKAXE"],
                                                  ["Diamond Shovel", "DIAMOND_SHOVEL"],
                                                  ["Diamond Sword", "DIAMOND_SWORD"],
                                                  ["Drinkable Potion", "POTION"],
                                                  ["Elytra (Glider)", "LEGACY_ELYTRA"],   
                                                  ["Emerald", "EMERALD"],
                                                  ["Ender Pearl", "ENDER_PEARL"],                                                  
                                                  ["Firework", "FIREWORK_ROCKET"],
                                                  ["Heart of the Sea", "HEART_OF_THE_SEA"],              
                                                  ["Gold Ingot", "GOLD_INGOT"],
                                                  ["Golden Apple","GOLDEN_APPLE"],
                                                  ["Golden Apple (Enchanted)", "ENCHANTED_GOLDEN_APPLE"],
                                                  ["Golden Boots", "GOLDEN_BOOTS"],
                                                  ["Golden ChestPlate", "GOLDEN_CHESTPLATE"],
                                                  ["Golden Helmet", "GOLDEN_HELMET"],
                                                  ["Golden Leggings", "GOLDEN_LEGGINGS"],                                                   
                                                  ["Iron Boots", "IRON_BOOTS"], 
                                                  ["Iron Door", "IRON_DOOR"], 
                                                  ["Iron Ingot", "IRON_INGOT"],
                                                  ["Iron Sword", "IRON_SWORD"],
                                                  ["Jungle Door", "JUNGLE_DOOR"],
                                                  ["Jungle Planks", "JUNGLE_PLANKS"],
                                                  ["Leather Boots", "LEATHER_BOOTS"],
                                                  ["Leather ChestPlate", "LEATHER_CHESTPLATE"],
                                                  ["Leather Helmet", "LEATHER_HELMET"],
                                                  ["Leather Leggings", "LEATHER_LEGGINGS"],                                                   
                                                  ["Lingering Potion", "LINGERING_POTION"],
                                                  ["Oak Door", "OAK_DOOR"],
                                                  ["Oak Planks", "OAK_PLANKS"],                                                  
                                                  ["Oak Sign Post", "OAK_SIGN"], 
                                                  ["Paper", "PAPER"],
                                                  ["Redstone Dust", "REDSTONE"], 
                                                  ["Redsone Ore", "REDSTONE_ORE"],
                                                  ["Shield", "SHIELD"],                                                  
                                                  ["SnowBall", "SNOWBALL"],
                                                  ["Stick", "STICK"],
                                                  ["Snow Block", "SNOW_BLOCK"],
                                                  ["Splash Potion", "SPLASH_POTION"],
                                                  ["Spruce Door", "SPRUCE_DOOR"],
                                                  ["Spruce Planks", "SPRUCE_PLANKS"],
                                                  ["Tipped Arrow", "TIPPED_ARROW"],
                                                  ["TripWire Hook", "TRIPWIRE_HOOK"],
                                                  ["Totem of Undying", "TOTEM_OF_UNDYING"],
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
                                                  ["Firework", "FIREWORK"],
                                                  ["Shulker Bullet", "SHULKER_BULLET"],
                                                  ["SnowBall", "SNOWBALL"],
                                                  ["Tipped Arrow", "TIPPED_ARROW"],
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
        .appendField ("EGG") 
        .appendField(new Blockly.FieldDropdown([
                                                  ["Blaze", "BLAZE_SPAWN_EGG"],
                                                  ["Cave Spider", "CAVE_SPIDER_SPAWN_EGG"],
                                                  ["Creeper", "CREEPER_SPAWN_EGG"],
                                                  ["Endermite", "ENDERMITE_SPAWN_EGG"],
                                                  ["Enderman", "ENDERMAN_SPAWN_EGG"],
                                                  ["Guardian", "GUARDIAN_SPAWN_EGG"],
                                                  ["Ghast", "GHAST_SPAWN_EGG"],
                                                  ["Husk", "HUSK_SPAWN_EGG"],
                                                  ["Llama", "LLAMA_SPAWN_EGG"],
                                                  ["Magma Cube","MAGMA_CUBE_SPAWN_EGG"],
                                                  ["Pillager","PILLAGER_SPAWN_EGG"],
                                                  ["Polar Bear","POLAR_BEAR_SPAWN_EGG"],
                                                  ["Shulker", "SHULKER_SPAWN_EGG"],
                                                  ["Ravager", "RAVAGER_SPAWN_EGG"],
                                                  ["Skeleton", "SKELETON_SPAWN_EGG"],
                                                  ["Skeleton Horse", "SKELETON_HORSE_SPAWN_EGG"],
                                                  ["Wolf", "WOLF_SPAWN_EGG"],
                                                  ["Vex", "VEX_SPAWN_EGG"],                                                
                                                  ["Vindicator", "VINDICATOR_SPAWN_EGG"],
                                                  ["Zombie Pigman", "ZOMBIE_PIGMAN_SPAWN_EGG"],
                                                  ["Zombie Villager", "ZOMBIE_VILLAGER_SPAWN_EGG"],
                                                  ["Zombie", "ZOMBIE_SPAWN_EGG"]
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
                                                ["Beacon", "BEACON"],
                                                ["Bed", "LEGACY_BED_BLOCK"],              
                                                ["Blue Stained Glass", "BLUE_STAINED_GLASS"], 
                                                ["Button (Oak)", "OAK_BUTTON"],                                                
                                                ["Chest", "CHEST"],
                                                ["Cobblestone", "COBBLESTONE"],
                                                ["Cobweb", "COBWEB"],
                                                ["Command Block (Chain)", "CHAIN_COMMAND_BLOCK"],
                                                ["Command Block (Impulse)", "COMMAND_BLOCK"],
                                                ["Command Block (Repeating)", "REPEATING_COMMAND_BLOCK"],
                                                ["Command Block Minecart", "COMMAND_BLOCK_MINECART"],                                                
                                                ["Composter", "COMPOSTER"],    
                                                ["Diamond Block", "DIAMOND_BLOCK"],                                                
                                                ["Door", "LEGACY_WOODEN_DOOR"],
                                                ["Farm Land", "FARMLAND"],
                                                ["Fence", "OAK_FENCE"],
                                                ["Gold Block", "GOLD_BLOCK"],
                                                ["Hopper", "HOPPER"],
                                                ["Ice", "ICE"],
                                                ["Iron Block", "IRON_BLOCK"],
                                                ["Fire", "FIRE"],                                                
                                                ["Gate (Oak)", "OAK_FENCE_GATE"],
                                                ["Item Frame", "ITEM_FRAME"],
                                                ["Lava", "LAVA"], 
                                                ["Lever", "LEVER"],
                                                ["Oak", "OAK_WOOD"], 
                                                ["Oak Tree Log", "OAK_LOG"],
                                                ["Observer Block", "OBSERVER"], 
                                                ["Piston", "PISTON"],                                                
                                                ["Portal", "LEGACY_PORTAL"],
                                                ["Pressure Plate (Oak)", "OAK_PRESSURE_PLATE"],
                                                ["Rail", "RAIL"],
                                                ["Rail Powered", "POWERED_RAIL"],
                                                ["Red Stained Glass", "RED_STAINED_GLASS"],                                                                                                 
                                                ["Redstone Block", "REDSTONE_BLOCK"],
                                                ["Redstone Torch", "REDSTONE_TORCH"],
                                                ["Sand", "SAND"],
                                                ["Sign on Wall", "OAK_WALL_SIGN"],
                                                ["Sign Post (Oak)", "OAK_SIGN"],                                                
                                                ["Snow Block", "SNOW_BLOCK"],
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
    this.appendValueInput("LOCATION")
        .appendField("Get Block at Location");
    this.setInputsInline(true);        
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
        .appendField("Setup Code");

    this.appendStatementInput("EXPRESSIONCODE")
        .setCheck(null);
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
    this.appendValueInput("VALUE")
        .appendField("Set Data")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
        .appendField(" = ");
  
    this.appendValueInput("PLAYER")
        .appendField("For entity");
    this.setInputsInline(true);
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
        .appendField("Delete Data")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.appendValueInput("PLAYER")
        .appendField("For Entity");
    this.setInputsInline(true);             
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
        .appendField("Get Data")
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY");        
    this.appendValueInput("PLAYER")
        .appendField("For Entity");
    this.setColour(0);
    this.setOutput(true, null);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['playerdataeq'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Player Data Equal")
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY");        
    this.appendValueInput("PLAYER1")
        .appendField("Player1");
    this.appendValueInput("PLAYER2")
        .appendField("Player2");
    this.setColour(0);
    this.setOutput(true, null);    
    this.setInputsInline(true);        
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blocksradius'] = {
  init: function() {
   this.appendValueInput ("BLOCKTYPE") 
        .appendField("List of")
    this.appendValueInput ("RADIUS")
        .appendField("within");       
    this.appendValueInput("LOCATION")
        .appendField("blocks of location:");
    this.setColour(200);
    this.setOutput(true, null);    
    this.setInputsInline(true);        
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['activeteams'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Active Team List");
    this.setColour(0);
    this.setOutput(true, null);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getplayerdata2'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Get Data")
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")      
        .appendField("For entity ");
    this.setColour(0);
    this.setOutput(true, null);    
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['existsplayerdata'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Data Exists?")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
        .appendField("For entity");

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
        .appendField("Dictionary Structure");
    this.appendStatementInput("EXPRESSION")
        .setCheck(null);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setOutput(true,null);    
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
   // var a=this;
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
        .appendField("for player");
    this.setInputsInline(true);        
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
    this.appendValueInput("INGREDIENTS")
        .appendField("Ingredient List");
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
        .appendField("For Material");
    this.setColour(320);
    this.setOutput(true, null);
    this.setInputsInline(true);        
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
        .appendField ("Add stack:");
    this.appendValueInput ("PLAYER")
        .appendField ("to inventory for player:");
    this.setInputsInline(true);         
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
    this.setInputsInline(true);     
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['servercommand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Execute server command")
        .appendField (new Blockly.FieldTextInput ("\"weather clear\""), "COMMAND");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockatlocation'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Block at Location");
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
        .appendField(new Blockly.FieldDropdown([
                                                 ["1","1"],  
                                                 ["2","2"],  
                                                 ["3","3"]        
                                               ]), "LINE");         
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
    this.appendValueInput("FACE")
        .appendField("Set Block Facing Direction");
    this.appendValueInput("LOCATION")
        .appendField("At Location ");                                                       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockfacingdirection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Block Facing Direction")
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
                                               ]), "DIRECTION"); 
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['reverseface'] = {
  init: function() {
    this.appendValueInput("DIRECTION")
        .appendField("Reverse Block Direction")
    this.setOutput(true, null);
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
        .appendField("Set command block command")         
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
    this.setInputsInline(true);    
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
    this.setInputsInline(true);    
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
    this.setInputsInline(true);            
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
    this.appendValueInput("ITEMSTACK")
        .appendField("Drop Stack of Items: ");
    this.appendValueInput("LOCATION")
        .appendField("At Location:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setInputsInline(true);     
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
                                                ["Make player faster","speed"],                                 // id=01
                                                ["Make player slower","slowness"],                              // id=02
                                                ["Speed up block breaking","fast_digging"],                            // id=03
                                                ["Slow you down when breaking blocks","slow_digging"],        // id=04
                                                ["Increase damage dealt to others","increase_damage"],                 // id=05
                                                ["Give health to player or living mob","heal"],       // id=06
                                                ["Damage player or living mob","harm"],               // id=07
                                                ["Higher Jumping","jump"],                                // id=08
                                                ["Twist and warp the screen","confusion"],                         // id=09
                                                ["Continually restore health","regeneration"],                  // id=10
                                                ["Reduce damage received","damage_resistance"],                        // id=11
                                                ["Immunity to fire","fire_resistance"],                         // id=12
                                                ["Breathe under water","water_breathing"],                      // id=13
                                                ["Invisibility","invisibility"],                                // id=14                         
                                                ["Create a thick black fog", "blindness"],                      // id=15
                                                ["Night Vision","night_vision"],                                // id=16
                                                ["Cause food bar to deplete","hunger"],                         // id=17
                                                ["Decrease damage dealt to others","weakness"],                 // id=18
                                                ["Continually damager health","poison"],                        // id=19
                                                ["Damage health every 2 seconds","wither"],                     // id=20
                                                ["Increase max health", "health_boost"],                        // id=21                  
                                                ["Add health to health bar", "absorption"],                     // id=22
                                                ["Replenish food supply","saturation"],                         // id=23
                                                ["Display halo around player", "glowing"],                      // id=24                                               
                                                ["Involuntary floating","levitation"],                          // id=25
                                                ["Increase chance of finding loot","luck"],                     // id=26
                                                ["Decrease probability of finding loot", "unluck"],             // id=27
                                                ["Slow falling","slow_falling"],                                // id=28
                                                ["Improve visibility and water mining speed", "conduit_power"], // id=29
                                                ["Increase swimming speed ", "dolphins_grace"],                 // id=30
                                                ["Get attacked by mobs in a village", "bad_omen"],              // id=31
                                                ["Allow discount trading", "hero_of_the_village"]               // id=32
                                                
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
        .appendField ("var entity = entity within " )
        .appendField (new Blockly.FieldTextInput ( "5"), "RADIUS")
        .appendField ("blocks of location:" );        
        
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
        .appendField("Is a living type, entity:");
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
    this.setInputsInline(true);      
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
        .appendField("Entities within " )
        .appendField (new Blockly.FieldTextInput ("5"), "RADIUS")  
  .appendField("blocks of location:" );
    this.setColour(0);
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
    this.setColour(40);
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

Blockly.Blocks['sethotbar'] = {
  init: function() {
    this.appendValueInput("PLAYER")
     .appendField ( "Set hotbar slot" )
        .appendField(new Blockly.FieldDropdown([
               [ "1", "1"],  ["2", "2"],  ["3", "3"],  ["4", "4"], [ "5", "5"], 
      [ "6", "6"],  ["7", "7"],  ["8", "8"],  ["9", "9"]
                                               ]), "SLOT")  
        .appendField("for player: ");   
    this.appendValueInput("STACK")
        .appendField("To a stack of:");   
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['tameentity'] = {
  init: function() {
    this.appendValueInput("ENTITY")
     .appendField ( "Tame (if possible) entity:" )
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['attackentity'] = {
  init: function() {
    this.appendValueInput("ATTACKER")
     .appendField ( "Attack! Attacker: " )
    this.appendValueInput("TARGET")
     .appendField ( "Target: " )
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setInputsInline(true);      
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['namethestack'] = {
  init: function() {
    this.appendValueInput("STACK")
        .appendField ("Set custom name to: ")
        .appendField (new Blockly.FieldTextInput ( "Custom Name"), "NAME")
        .appendField(" for the stack:");        
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['locationadd'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Modify location")
        .appendField("X")
        .appendField (new Blockly.FieldTextInput ("0"), "X")          
        .appendField("Y")
        .appendField (new Blockly.FieldTextInput ("100"), "Y")          
        .appendField("Z")
        .appendField (new Blockly.FieldTextInput ("0"), "Z") 
        .appendField ("Location:");  
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['modplayerlocation'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Modify location")
        .appendField("X")
        .appendField (new Blockly.FieldTextInput ("0"), "X")          
        .appendField("Y")
        .appendField (new Blockly.FieldTextInput ("100"), "Y")          
        .appendField("Z")
        .appendField (new Blockly.FieldTextInput ("0"), "Z") 
        .appendField ("for player:");  
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['changelocation'] = {
  init: function() {
    this.appendValueInput ( "LOCATION" )
        .appendField ("Change Location" ) 
    this.appendValueInput("DIRECTION")
        .appendField ("By Direction:");  
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['entitydead'] = {
  init: function() {
    this.appendValueInput("ENTITY")
        .appendField ("Is dead, entity:");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isspectator'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField ("Is spectator, player:");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['eventinfo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Event information")    
        .appendField(new Blockly.FieldDropdown([
                                        ["Get action", "getAction"],
                                        ["Get all affected entities", "getAffectedEntities"],
                                        ["Get attacker", "getDamager"],
                                        ["Get block that was clicked on", "getClickedBlock"],
                                        ["Get block that was hit", "getHitBlock"],
                                        ["Get bow that was fired", "getBow"],
                                        ["Get the crafted item", "getRecipe().getResult()"],
                                        ["Get the ItemStack currently in the clicked clot", "getCurrentItem"], 
                                        ["Get entity", "getEntity"],
                                        ["Get face of block that was clicked on", "getBlockFace"],
                                        ["Get the block", "getBlock"],
                                        ["Get the entity doing the damage", "getDamager"],
                                        ["Get inventory", "getInventory"],
                                        ["Get item", "getItem"],
                                        ["Get item dropped", "getItemDrop"],
                                        ["Get location player moved from", "getFrom"],
                                        ["Get location player moved to", "getTo"],
                                        ["Get message", "getMessage" ],
                                        ["Get player", "getPlayer"],
                                        ["Get projectile", "getProjectile"],
                                        ["Get shooter", "getEntity().getShooter"],
                                        ["Get target", "getTarget"],
                                        ["Get the player who performed the click", "getWhoClicked"]
                                       ]), "INFORMATION"); 


    this.setOutput(true, null);
    this.setColour(40);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['removeplayersdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Delete All Players Data with Key: ")  
        .appendField (new Blockly.FieldTextInput ("Key"), "KEY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['diamondarmor'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Give diamond armor to player/entity:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['diamondhelmet'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Give diamond helmet to player/entity:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['goldboots'] = {
  init: function() {
    this.appendValueInput("PLAYER")
        .appendField("Give gold boots to player/entity:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['removeplayersgear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove Gear from All Players");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

/*
        .appendField(new Blockly.FieldDropdown([
               [ "0", "0"], 
               [ "1", "1"],  ["2", "2"],  ["3", "3"],  ["4", "4"], [ "5", "5"],
               [ "6", "6"],  ["7", "7"],  ["8", "8"],  ["9", "9"], ["10","10"],
                 ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"],
      ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"]
                                               ]), "HEALTH")

*/
Blockly.Blocks['setplayerhealth'] = {
  init: function() {
    this.appendValueInput("HEALTH")
        .appendField("Set Health to: ");
    this.appendValueInput("PLAYER")
        .appendField ("for player:");  
    this.setInputsInline(true);              
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['createexplosion'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Explosion Size")
        .appendField(new Blockly.FieldDropdown([
               [ "0", "0"], 
               [ "1", "1"],  ["2", "2"],  ["3", "3"],  ["4", "4"], [ "5", "5"], [ "6", "6"],  ["7", "7"],  ["8", "8"],  ["9", "9"], ["10","10"],
                 ["11","11"], ["12","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"], ["20","20"]
                                               ]), "SIZE")
        .appendField("Set Fire")
        .appendField(new Blockly.FieldDropdown([
                                              [ "true", "true"],  [ "false", "false"]
                                               ]), "FIRE")
        .appendField("Destroy Blocks")
        .appendField(new Blockly.FieldDropdown([
                                              [ "true", "true"],  [ "false", "false"]
                                               ]), "DESTROY")
        .appendField ("Location:");      

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['countcondition'] = {
  init: function() {
    this.appendValueInput("LIST")
        .appendField ("Count condition ")
        .appendField (new Blockly.FieldTextInput ("x == y"), "CONDITION")
        .appendField (" in list ");

    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['healthofplayer'] = {
  init: function() {
    this.appendValueInput("PLAYER")        
        .appendField("Health of Player");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setprojectilespeed'] = {
  init: function() {
    this.appendValueInput("SPEED")
        .appendField("Set Speed");
    this.appendValueInput ("PROJECTILE")
        .appendField("For Projectile:");   
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getshooter'] = {
  init: function() {
    this.appendValueInput("PROJECTILE")        
        .appendField("Shooter of Projectile:");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['getnewboard'] = { 
  init: function() {
    this.appendDummyInput()        
        .appendField("Get new scoreboard");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['registernewteam'] = {
  init: function() {
    this.appendValueInput("NAME")        
        .appendField("Create team with name:");
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['addteamplayer'] = { 
  init: function() {
    this.appendValueInput("TEAM")       
        .appendField("Modify team:");
    this.appendValueInput ("PLAYER")
        .appendField("Add player: ");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['friendlyfire'] = { 
  init: function() {
    this.appendValueInput("TEAM")       
        .appendField("Set Friendly Fire:")
        .appendField(new Blockly.FieldDropdown([
                                              [ "true", "true"],  [ "false", "false"]
                                               ]), "ALLOWED")
        .appendField ( "For Team:" );                                               
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['createscoreboard'] = { 
  init: function() {
    this.appendValueInput("NAME")       
        .appendField("Scoreboard name");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['scoreboardtitle'] = { 
  init: function() {
    this.appendValueInput("TITLE")       
        .appendField("Set Scoreboard Title");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['setscore'] = { 
  init: function() {
    this.appendValueInput("PLAYER")       
        .appendField("Set score for player: ");
    this.appendValueInput("VALUE")       
        .appendField(" = ");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['increment'] = { 
  init: function() {
    this.appendValueInput("VARIABLE")       
        .appendField("Increment variable:");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }   
};

Blockly.Blocks['allplayerssetscore'] = {
  init: function() {
    this.appendValueInput("SCORE")
        .appendField ( "For all players set score =" );       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['allplayersmessage'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .appendField ( "To all players, send message:" );       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['valueinlist'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .appendField("Value");
    this.appendValueInput("LIST")
        .appendField("In List"); 
    this.setInputsInline(true);         
    this.setOutput(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['deletefromlist'] = {
  init: function() {
    this.appendValueInput("LIST")
        .appendField ("Delete element ")
        .appendField (new Blockly.FieldTextInput ("0"), "INDEX")
        .appendField ("from list");        
     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['forchinstring'] = {
  init: function() {
    this.appendValueInput("LIST")
        .appendField("For _ch in string: ");
    this.appendStatementInput("FORCODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['breakoutofloop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Break out of loop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockinradius'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Found");
    this.appendValueInput ("BLOCKTYPE")
        .appendField("a");
    this.appendValueInput("RADIUS")
        .appendField("block, within"); 
    this.appendValueInput("LOCATION")
        .appendField("blocks of location");
    this.setInputsInline(true);         
    this.setOutput(true, null);
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['cancelfriendlydamage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cancel friendly damage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(40);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['friendlynearby'] = {
  init: function() {
    this.appendValueInput ("TEAM")
        .appendField ("Found team " );
    this.appendValueInput("RADIUS")
        .appendField("player within" );
    this.appendValueInput ( "LOCATION")
        .appendField("blocks of location"); 
    this.setInputsInline(true);        
        
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['randomizechests'] = {
  init: function() {
    this.appendValueInput("GOODIES")
        .appendField("Randomize chest contents from list");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['m1garand'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("M1-Garand(for player click and projectile launch)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['minigun'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Minigun(call from player click event)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['dealcard'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("Deal a card from the deck");        
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);    
    
  }
};

Blockly.Blocks['createdeck'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("Create a deck");        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
    
  }
};

Blockly.Blocks['sumcards'] = {
  init: function() {        
    this.appendValueInput("PLAYER")
        .appendField("Sum cards in inventory for player");
    this.setColour(160);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setOutput(true, null);    
    
  }
};

Blockly.Blocks['starttimer'] = {
  init: function() { 
    this.appendValueInput("PLAYER")
        .appendField ("Create/Reset Timer named ")
        .appendField (new Blockly.FieldTextInput ( "\"timerName\""), "TIMERNAME")
        .appendField("For Player");             
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
    
  }
};

Blockly.Blocks['elapsedtime'] = {
  init: function() {        
    this.appendDummyInput()
        .appendField("Elapsed time for timer")
        .appendField (new Blockly.FieldTextInput ( "\"timerName\""), "TIMERNAME");
    this.appendValueInput("PLAYER")
        .appendField("assigned to player");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setInputsInline(true);                    
    this.setOutput(true, null);    
    
  }
};


Blockly.Blocks['countBet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Count player\'s bet");   
    this.appendValueInput("PLAYER")
        .appendField("assigned to player");
    this.setOutput(true, null);     
    this.setInputsInline(true);                    
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['clearhotbar'] = {
  init: function() { 
    this.appendValueInput("PLAYER")
        .appendField ("Clear hotbar for player: ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
    
  }
};

Blockly.Blocks['blackjackdealer'] = {
  init: function() { 
    this.appendValueInput("FIRSTCARD")
        .appendField ("Get Blackjack dealer\'s hand. First Card:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('');
    this.setOutput(true, null);      
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['assigndamage'] = {
  init: function() { 
    this.appendValueInput("DAMAGE")
        .appendField ("Assign ");
    this.appendValueInput("ENTITY")
        .appendField ("damage to entity");
    this.setInputsInline(true);                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
    
  }
};

Blockly.Blocks['foreachloop'] = {
  init: function() {
    this.appendValueInput("LIST")
        .appendField ( "For Each: " )
        .appendField (new Blockly.FieldTextInput ( "element"), "ELEMENT")    
        .appendField(" in list: ");
    this.appendStatementInput("FORCODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isjumping'] = {
  init: function() { 
    this.appendValueInput("PLAYER")
        .appendField ("Is jumping, player:");
    this.setColour(40);
    this.setTooltip('');
    this.setOutput(true, null);      
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['getboots'] = {
  init: function() { 
    this.appendValueInput("PLAYER")
        .appendField ("Get boots worn by player:");
    this.setColour(320);
    this.setTooltip('');
    this.setOutput(true, null);      
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['randompotioneffect'] = {
  init: function() {
    this.appendDummyInput () 
        .appendField ("Random Potion Effect" )
        
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['effectid'] = {
  init: function() {
    this.appendValueInput ("POTION") 
        .appendField ("Get Effect Id For Potion: " )
        
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['giverandompotion'] = {
  init: function() { 
    this.appendValueInput("PLAYER")
        .appendField ("Give Random Potion to player: ");
    this.setInputsInline(true);                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
    
  }
};

Blockly.Blocks['addeffecttopotion'] = {
  init: function() { 
    this.appendValueInput("EFFECT")
        .appendField ("Add Potion Effect: ");
    this.appendValueInput("POTION")
        .appendField ("To Potion: ");
    this.appendValueInput("DURATION")
        .appendField ("Lasting: ");
    this.appendDummyInput()
        .appendField ("Seconds");
    this.setInputsInline(true);                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['updateplayersinventory'] = {
  init: function() {
    this.appendValueInput ("ITEMSTACK")
        .appendField ("Add stack:")
    this.appendValueInput ("PLAYER")
        .appendField ("to inventory for player:")
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);      
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setstackname'] = {
  init: function() {
    this.appendValueInput ("STACK") 
        .appendField ("Modify stack:" )
    this.appendValueInput ("NAME") 
        .appendField ("set custom name:" )    
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);      
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');   
  }
};


Blockly.Blocks['findcustomname'] = {
  init: function() {
    this.appendDummyInput () 
        .appendField ("Find entity with custom name: " )    
        .appendField (new Blockly.FieldTextInput ("name"), "NAME");                  
    this.setColour(0);
    this.setTooltip('');
    this.setOutput(true, null);    
    this.setHelpUrl('http://www.example.com/');    
  }
};

Blockly.Blocks['isnull'] = {
  init: function() {
    this.appendValueInput ("VARIABLE") 
        .appendField ("Is null:");                  
    this.setColour(210);
    this.setTooltip('');
    this.setOutput(true, null);    
    this.setHelpUrl('http://www.example.com/');    
  }
};

Blockly.Blocks['addcustomeffect'] = {
  init: function() { 
    this.appendValueInput("EFFECT")
        .appendField ("Add Custom Effect: ");
    this.appendValueInput("CLOUD")
        .appendField ("For Cloud: ");
    this.appendValueInput("DURATION")
        .appendField ("Lasting: ");
    this.appendDummyInput()
        .appendField ("Seconds");
    this.setInputsInline(true);                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['setduration'] = {
  init: function() { 
    this.appendValueInput("DURATION")
        .appendField ("Set duration: ");
    this.appendDummyInput()
        .appendField ("Seconds");
    this.appendValueInput("CLOUD")
        .appendField ("for area effect cloud: ");        
    this.setInputsInline(true);                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['setcloudradius'] = {
  init: function() { 
    this.appendValueInput("RADIUS")
        .appendField ("Set radius to ");
    this.appendDummyInput()
        .appendField ("blocks");
    this.appendValueInput("CLOUD")
        .appendField ("for area effect cloud: ");        
    this.setInputsInline(true);                     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['getplayerarmor'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("Get")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Boots", "Boots"],
                                                ["Chest Plate", "Chestplate"],
                                                ["Helmet", "Helmet"], 
                                                ["Leggings", "Leggings"]
                                               ]), "ARMOR");                   
    this.appendValueInput("PLAYER")
        .appendField ("worn by player:");
        
    this.setInputsInline(true);                     
    this.setColour(320);
    this.setTooltip('');
    this.setOutput(true, null);      
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['givearmor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Give")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Chainmail", "chainmail"],
                                                ["Diamond", "diamond"],
                                                ["Gold", "golden"],
                                                ["Iron", "iron"], 
                                                ["Leather", "leather"]
                                               ]), "STYLE");                   
    this.appendDummyInput()
        .appendField (" ")
        .appendField(new Blockly.FieldDropdown([
                                                ["Boots", "boots"],
                                                ["Chest Plate", "chestplate"],
                                                ["Helmet", "helmet"], 
                                                ["Leggings", "leggings"]
                                               ]), "ARMOR");                   
    this.appendValueInput("PLAYER")
        .appendField("To entity or player");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);    
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['isopen'] = {
  init: function() {
    this.appendValueInput("BLOCK")
        .appendField("Door block:");
    this.appendDummyInput()
        .appendField ("is open")
    this.setOutput(true, null);
    this.setInputsInline(true);                     
    this.setColour(200);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['entityeffect'] = {
  init: function() {
      
    this.appendDummyInput()
        .appendField("Effect Type")        
        .appendField(new Blockly.FieldDropdown([
                       ["Armor stand is hit", "ARMOR_STAND_HIT"],
                       ["Colored particles from a tipped arrow", "ARROW_PARTICLES"],	
                       ["Silverfish entering block, spawner spawning","ENTITY_POOF"],
                       ["When a firework explodes", "FIREWORK_EXPLODE"],
                       ["Guardian sets laser target", "GUARDIAN_TARGET"],
                       ["When mobs get hurt","HURT"],
                       ["Entity hurt due to drowning damage","HURT_DROWN"],
                       ["Entity hurt due to explosion damage","HURT_EXPLOSION"],
                       ["When an Iron Golem gives a rose", "IRON_GOLEM_ROSE"],
                       ["Iron golem puts away rose", "IRON_GOLEM_SHEATH"],
                       ["Hearts from a breeding entity", "LOVE_HEARTS"],	
                       ["Rabbit jumping", "RABBIT_JUMP"],
                       ["Shield blocks attack", "SHIELD_BLOCK"],	                       
                       ["Shield breaks", "SHIELD_BREAK"],
                       ["Resets squid rotation", "SQUID_ROTATE"],
                       ["Entity hurt by thorns attack","THORNS_HURT"],	
                       ["Totem prevents entity death","TOTEM_RESURRECT"],
                       ["When a villager is angry","VILLAGER_ANGRY"],
                       ["Happy particles from a villager", "VILLAGER_HAPPY"],	
                       ["Hearts from a villager","VILLAGER_HEART"],	
                       ["Magic particles from a witch", "WITCH_MAGIC"],	
                       ["The hearts when taming a wolf succeeds", "WOLF_HEARTS"],
                       ["When a wolf shakes (after being wet)", "WOLF_SHAKE"],
                       ["The smoke when taming a wolf fails","WOLF_SMOKE"],                       
                       ["When a zombie transforms into a villager by shaking violently","ZOMBIE_TRANSFORM"] 
                                               ]), "EFFECT");                   
                                        
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['playeffect'] = {
  init: function() {
    this.appendValueInput("EFFECT")
        .appendField("Play Effect:")        
        
    this.appendValueInput("ENTITY")
        .appendField ("on entity: ")
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);    
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};



Blockly.Blocks['soundeffect'] = {
  init: function() {
      
    this.appendDummyInput()
        .appendField("Sound Effect")        
        .appendField(new Blockly.FieldDropdown([
                       ["Anvil Fall", "BLOCK_ANVIL_FALL"], 
                       ["Arrow Shoot", "ENTITY_ARROW_SHOOT"],
                       ["Bat", "ENTITY_BAT_AMBIENT"],
                       ["Bat Takeoff", "ENTITY_BAT_TAKEOFF"],
                       ["Beacon", "BLOCK_BEACON_AMBIENT"],
                       ["Bell Resonate", "BLOCK_BELL_RESONATE"],
                       ["Bell Use", "BLOCK_BELL_USE"],
                       ["Blast Furnace Fire Crackle", "BLOCK_BLASTFURNACE_FIRE_CRACKLE"],
                       ["Blaze", "ENTITY_BLAZE_AMBIENT"],
                       ["Blaze Burn", "ENTITY_BLASE_BURN"],
                       ["Brewing Stand Brew", "BLOCK_BREWING_STAND_BREW"],
                       ["Bubble Column Bubble Pop", "BLOCK_BUBBLE_COLUMN_BUBBLE_POP"],
                       ["Campfire Crackle", "BLOCK_CAMPFIRE_CRACKLE"],
                       ["Cave", "AMBIENT_CAVE"],  
                       ["Chest Close", "BLOCK_CHEST_CLOSE"],
                       ["Chest Locked", "BLOCK_CHEST_LOCKED"],
                       ["Chest Open", "BLOCK_CHEST_OPEN"],
                       ["Composter Ready", "BLOCK_COMPOSTER_READY"],
                       ["Conduit Activate", "BLOCK_CONDUIT_ACTIVATE"],
                       ["Ender Chest Close", "BLOCK_ENDER_CHEST_CLOSE"],
                       ["Ender Chest Open", "BLOCK_ENDER_CHEST_OPEN"],
                       ["Enderman", "ENTITY_ENDERMAN_AMBIENT"],
                       ["Enderman Scream", "ENTITY_ENDERMAN_SCREAM"],
                       ["Enderman Stare", "ENTITY_ENDERMAN_STARE"],
                       ["Enderman Teleport", "ENTITY_ENDERMAN_TELEPORT"],
                       ["Event Raid Horn", "EVENT_RAID_HORN"],
                       ["Evoker", "ENTITY_EVOKER_AMBIENT"],
                       ["Evoker Celebrate", "ENTITY_EVOKER_CELEBRATE"],
                       ["Evoker Fangs Attack", "ENTITY_EVOKER_FANGS_ATTACK"],
                       ["Fence Gate Close", "BLOCK_FENCE_GATE_CLOSE"],
                       ["Fence Gate Open", "BLOCK_FENCE_GATE_OPEN"],
                       ["Fire", "BLOCK_FIRE_AMBIENT"],
                       ["Fire Extinguish", "BLOCK_FIRE_EXTINGUISH"],
                       ["Firework Rocket Blast", "ENTITY_FIREWORK_ROCKET_BLAST"],
                       ["Firework Rocket Launch", "ENTITY_FIREWORK_ROCKET_LAUNCH"],
                       ["Firework Rocket Shoot", "ENTITY_FIREWORK_ROCKET_SHOOT"],
                       ["Fox", "ENTITY_FOX_AMBIENT"],
                       ["Fox Screech", "ENTITY_FOX_SCREECH"],
                       ["Furnace Fire Crackle", "BLOCK_FURNANCE_FIRE_CRACKLE"],
                       ["Ghast", "ENTITY_GHAST_AMBIENT"],
                       ["Ghast Scream", "ENTITY_GHAST_SCREAM"],
                       ["Ghast Warn", "ENTITY_GHAST_WARN"],
                       ["Glass Break", "BLOCK_GLASS_BREAK"],
                       ["Glass Step", "BLOCK_GLASS_STEP"],
                       ["Gravel Break", "BLOCK_GRAVEL_BREAK"],
                       ["Grave Step", "BLOCK_GRAVEL_STEP"],
                       ["Horse", "ENTITY_HORSE_AMBIENT"],
                       ["Horse Gallup", "ENTITY_HORSE_GALLUP"],                       
                       ["Iron Door Close", "BLOCK_IRON_DOOR_CLOSE"],
                       ["Iron Door Open", "BLOCK_IRON_DOOR_OPEN"],
                       ["Ladder Break", "BLOCK_LADDER_BREAK"],
                       ["Ladder Fall", "BLOCK_LADDER_FALL"],
                       ["Ladder Step", "BLOCK_LADDER_STEP"],
                       ["Lava Pop", "BLOCK_LAVA_POP"],
                       ["Lightning Bolt Impact", "ENTITY_LIGHTNING_BOLT_IMPACT"],
                       ["Lightning Bolt Thunder", "ENTITY_LIGHTNING_BOLT_THUNDER"],
                       ["Metal Pressure Plate Click Off", "BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF"],
                       ["Metal Pressure Plate Click On", "BLOCK_METAL_PRESSURE_PLATE_CLICK_ON"],
                       ["Minecart Inside", "ENTITY_MINECART_INSIDE"],
                       ["Minecart Riding", "ENTITY_MINECART_RIDING"],
                       ["Music Disk 11", "MUSIC_DISC_11"],
                       ["Music Disk 13", "MUSIC_DISC_13"],
                       ["Music End", "MUSIC_END"],
                       ["Music Game", "MUSIC_GAME"],
                       ["Note Banjo", "BLOCK_NOTE_BLOCK_BANJO"],
                       ["Note Base Drum", "BLOCK_NOTE_BLOCK_BASEDRUM"],
                       ["Note Bell", "BLOCK_NOTE_BLOCK_BASS"],
                       ["Note CowBell", "BLOCK_NOTE_BLOCK_COW_BELL"],
                       ["Note Didgeridoo", "BLOCK_NOTE_BLOCK_DIDGERIDOO"],
                       ["Note Guitar", "BLOCK_NOTE_BLOCK_GUITAR"],
                       ["Note Harp", "BLOCK_NOTE_BLOCK_HARP"],
                       ["Note Iron Xylophone", "BLOCK_NOTE_BLOCK_IRON_XYLOPHONE"],
                       ["Note Pling", "BLOCK_NOTE_BLOCK_PLING"],
                       ["Note Snare", "BLOCK_NOTE_BLOCK_SNARE"],
                       ["Note Xylophone", "BLOCK_NOTE_BLOCK_XYLOPHONE"],
                       ["Panda", "ENTITY_PANDA_AMBIENT"],
                       ["Panda Pre Sneeze", "ENTITY_PANDA_PRE_SNEEZE"],
                       ["Panda Sneeze", "ENTITY_PANDA_SNEEZE"],
                       ["Phantom", "ENTITY_PHANTOM_AMBIENGT"],
                       ["Phantom Swoop", "ENTITY_PHANTOM_SWOOP"],
                       ["Pillager", "ENTITY_PILLAGER_AMBIENT"],
                       ["Pillager Celebrate", "ENTITY_PILLAGER_CELEBRATE"],
                       ["Piston Contract", "BLOCK_PISTON_CONTRACT"],
                       ["Piston Extend", "BLOCK_PISTON_EXTEND"],
                       ["Player Death", "ENTITY_PLAYER_DEATH"],
                       ["Player Burp", "ENTITY_PLAYER_BURP"],
                       ["Polar Bear", "ENTITY_POLAR_BEAR_AMBIENT"],
                       ["Portal", "BLOCK_PORTAL_AMBIENT"],
                       ["Portal Travel", "BLOCK_PORTAL_TRAVEL"],
                       ["Portal Trigger", "BLOCK_PORTAL_TRIGGER"],
                       ["Pumpkin Carve", "BLOCK_PUMPKIN_CARVE"],
                       ["Ravager", "ENTITY_RAVAGER_AMBIENT"],
                       ["Ravager Attack", "ENTITY_RAVAGER_ATTACK"],
                       ["Ravager Celebrate", "ENTITY_RAVAGER_CELEBRATE"],
                       ["Shulker Box Close", "BLOCK_SHULKER_BOX_CLOSE"],
                       ["Shulker Box Open", "BLOCK_SHULKER_BOX_OPEN"],
                       ["Snowball Throw", "ENTITY_SNOWBALL_THROW"],
                       ["Tripwire Click Off ", "BLOCK_TRIPWIRE_CLICK_OFF"],
                       ["Tripwire Click On", "BLOCK_TRIPEWIRE_CLOCK_ON"],
                       ["Button Click", "UI_BUTTON_CLICK"],
                       ["Villager Yes", "ENTITY_VILLAGER_YES"],
                       ["Vindicator", "ENTITY_VINDICATOR_AMBIENT"],
                       ["Vindicator Celebrate", "ENTITY_VINDICATOR_CELEBRATE"],
                       ["Water", "BLOCK_WATER_AMBIENT"],
                       ["Wet Grass Step", "BLOCK_WET_GRASS_STEP"],
                       ["Wandering Trader", "ENTITY_WANDERING_TRADER_AMBIENT"],
                       ["Wandering Trader No", "ENTITY_WANDERING_TRADER_NO"],
                       ["Wandering Trader Yes", "ENTITY_WANDERING_TRADER_YES"],                       
                       ["Weather Rain", "WEATHER_RAIN"],
                       ["Weather Rain Above", "WEATHER_RAIN_ABOVE"],
                       ["Witch", "ENTITY_WITCH_AMBIENT"],
                       ["Witch Celebrate", "ENTITY_WITCH_CELEBRATE"],
                       ["Wood Step", "BLOCK_WOOD_STEP"],
                       ["Wolf", "ENTITY_WOLF_AMBIENT"],
                       ["Wolf Growl", "ENTITY_WOLF_GROWL"],
                       ["Wolf Whine", "ENTITY_WOLF_WHINE"],
                       ["Wooden Trapdoor Open", "BLOCK_WOODEN_TRAPDOOR_OPEN"],
                       ["Wooden Trapdoor Close", "BLOCK_WOODEN_TRAPDOOR_CLOSE"]
                                               ]), "EFFECT");                   
                                        
    this.setOutput(true, null);
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['playsound'] = {
  init: function() {
    this.appendValueInput("EFFECT")
        .appendField("Play Sound:") 
        

    this.appendDummyInput()
        .appendField ("at volume ")
        .appendField (new Blockly.FieldTextInput ( "10"), "VOLUME")

        
    this.appendValueInput("PLAYER")
        .appendField ("for player: ")
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);    
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['islocation'] = {
  init: function() {
    this.appendValueInput("LOCATION")
        .appendField("Location");
        
    this.appendDummyInput()
        .appendField("= [ X")
        .appendField (new Blockly.FieldTextInput ("0"), "X")          
        .appendField("Y")
        .appendField (new Blockly.FieldTextInput ("0"), "Y")          
        .appendField("Z")
        .appendField (new Blockly.FieldTextInput ("0"), "Z")
        .appendField(" ]");
        
    this.setInputsInline(true);    
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['counthotbar'] = {
  init: function() {
    this.appendValueInput("MATERIAL")
        .appendField("Count number of Material");   
    this.appendValueInput("PLAYER")
        .appendField("in hotbar for player: ");
    this.setOutput(true, null);     
    this.setInputsInline(true);                    
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setglobal']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendValueInput ("EXPRESSION")
      .appendField("Set Global ")
      .appendField (new Blockly.FieldTextInput ("name"), "VARNAME")      
      .appendField("=");
   var a=this;
   this.setTooltip('');
   this.setPreviousStatement(true, null);
   this.setNextStatement(true, null);
   this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['globalvariable']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(330);
   this.appendDummyInput().appendField("Global variable:")
       .appendField (new Blockly.FieldTextInput ("value"), "VARNAME");
   this.setOutput(true, null);
   var a=this;
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['removeitemhotbar'] = {
  init: function() {
    this.appendValueInput("MATERIAL")
       .appendField("Remove ")
       .appendField (new Blockly.FieldTextInput ("1"), "COUNT")       
       .appendField(" Material: ");
       
    this.appendValueInput("PLAYER")
        .appendField("from hotbar for player: ");   
        
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setInputsInline(true);     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.Blocks['locationof']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("OBJECT")
       .appendField("Location of ");
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setdoor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
                       ["Open", "OPEN"],
                       ["Close", "CLOSE"]
                                               ]), "EFFECT");      
   
    this.appendValueInput("LOCATION")
       .appendField("door at location: ");
       
    this.setColour(320);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setInputsInline(true);     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['fill'] = {
  init: function() {
    this.appendValueInput("MATERIAL")
       .appendField("Fill Block Type: ");
    this.appendValueInput("LOCATION1")
       .appendField("From location: ");
    this.appendValueInput("LOCATION2")
       .appendField("To location: ");
       
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setInputsInline(true);     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['invincibility'] = {
  init: function() {
    this.appendValueInput("PLAYER")
       .appendField("Set invincibility for player ");
    this.appendValueInput("TICKS")
       .appendField("for");
    this.appendDummyInput()
       .appendField(" ticks ");
       
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.setInputsInline(true);     
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['removearmor'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("Remove ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["Boots", "Boots"],
                                                ["Chest Plate", "Chestplate"],
                                                ["Helmet", "Helmet"], 
                                                ["Leggings", "Leggings"]
                                               ]), "ARMOR");                   
    this.appendValueInput("PLAYER")
        .appendField ("worn by player:");
        
    this.setInputsInline(true);                     
    this.setColour(320);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['playernearby'] = {
  init: function() {
    this.appendValueInput ("PLAYER")
        .appendField ("Found player " );
    this.appendValueInput("RADIUS")
        .appendField("within" );
    this.appendValueInput ( "LOCATION")
        .appendField("blocks of location"); 
    this.setInputsInline(true);        
        
    this.setOutput(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['removeallarmor'] = {
  init: function() {                 
    this.appendValueInput("PLAYER")
        .appendField ("Remove all armor worn by player:");
        
    this.setInputsInline(true);                     
    this.setColour(320);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['basicrenderfunction'] = {
  init: function() {   
    this.appendDummyInput()
        .appendField("Basic Map Render Function")       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null); 
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['title'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField("Send ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["actionbar", "actionbar"],
                                                ["subtitle", "subtitle"], 
                                                ["title", "title"]
                                               ]), "MESSAGETYPE");                   
                                              
    this.appendValueInput("PLAYER")
        .appendField ("message ")
        .appendField (new Blockly.FieldTextInput ( "Hello"), "MESSAGE")
        .appendField("To Player");        
  
  
    this.appendDummyInput()
        .appendField("in color ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["aqua", "aqua"],
                                                ["black", "black"],
                                                ["blue", "blue"],
                                                ["dark_aqua", "dark_aqua"],
                                                ["dark_blue", "dark_blue"],
                                                ["dark_gray", "dark_gray"],
                                                ["dark_purple", "dark_purple"],
                                                ["dark_red", "dark_red"],
                                                ["gold", "gold"],
                                                ["gray", "gray"],
                                                ["green", "green"],
                                                ["light_purple", "light_purple"],
                                                ["red", "red"],
                                                ["white", "white"],
                                                ["yellow", "yellow"] 
                                               ]), "COLOR");  

    this.appendDummyInput()
        .appendField('in bold')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'BOLD'); 
        
    this.appendDummyInput()
        .appendField('in italic')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'ITALIC');  
        
    this.setInputsInline(true);                     
    this.setColour(320);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['playerinbox']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("PLAYER")
       .appendField ("Player ");
   this.appendValueInput("LOCATION1")
       .appendField("is within area bounded by Location1  ");
   this.appendValueInput("LOCATION2")
       .appendField("and Location2 ");
   // this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['playerpointed']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendDummyInput()
        .appendField("Get ")        
        .appendField(new Blockly.FieldDropdown([
                                                ["pitch", "Pitch"],
                                                ["yaw", "Yaw"]
                                               ]), "PITCHYAW");  
   this.appendValueInput("PLAYER")
       .appendField ("for player ");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['setinhand'] = {
  init: function() { 
                                       
    this.appendValueInput("ITEM")
        .appendField ("Set stack inhand to ");        
                                               
    this.appendValueInput("PLAYER")
        .appendField ("for player ");
   
    this.setInputsInline(true);                     
    this.setColour(320);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');       
  }
};

Blockly.Blocks['playerinsphere']={
  init:function(){
   this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
   this.setColour(0);
   this.appendValueInput("PLAYER")
       .appendField ("Player ");
   this.appendValueInput("LOCATION")
       .appendField("is within sphere with center at location  ");
   this.appendValueInput("RADIUS")
       .appendField("and radius ");
   this.setInputsInline(true);        
   this.setOutput(true, null);
   this.setTooltip('');
   this.setHelpUrl('http://www.example.com/');
  }
};

