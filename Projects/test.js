exports.haunted = function () {
  //Instantiations;
  var entity;
  var attacker;
  var player;
  var potion;
  var id;
  var cmd;
  var location;
  var witch;
  exports.witchSpawned=false;
  events.entityDamageByEntity( function (event) {
    entity=(event.getEntity== null) ? null : event.getEntity();
    attacker=(event.getDamager== null) ? null : event.getDamager();
    console.log (entity + " was attacked by: " + attacker);
    fd = new org.bukkit.metadata.FixedMetadataValue (__plugin,attacker);
    if (entity != null) {
      if (entity.setMetadata != null ) {
        entity.setMetadata ("_"attacker"_", fd );
      }
    }
  });
  events.playerInteract( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    potion=(function () {
       var _potions = ["SPEED","SLOWNESS","HASTE","MINING_FATIGUE","STRENGTH","INSTANT_HEALTH","INSTANT_DAMAGE","JUMP_BOOST","NAUSEA","REGENERATION","RESISTANCE","FIRE_RESISTANCE", "WATER_BREATHING", "INVISIBILITY", "BLINDNESS", "NIGHT_VISION", "HUNGER", "WEAKNESS", "POISON", "WITHER", "HEALTH_BOOST", "ABSORPTION", "SATURATION", "GLOWING", "LEVITATION", "LUCK", "UNLUCK", "SLOW_FALLING", "CONDUIT_POWER", "DOLPHINS_GRACE", "BAD_OMEN", "HERO_OF_THE_VILLAGE"];
       var _index = parseInt (Math.random () * (_potions.length) );
       return _potions[_index];})();
    id=(function () {
       var _id=null;
       var _potions = ["SPEED","SLOWNESS","HASTE","MINING_FATIGUE","STRENGTH","INSTANT_HEALTH","INSTANT_DAMAGE","JUMP_BOOST","NAUSEA","REGENERATION","RESISTANCE","FIRE_RESISTANCE", "WATER_BREATHING", "INVISIBILITY", "BLINDNESS", "NIGHT_VISION", "HUNGER", "WEAKNESS", "POISON", "WITHER", "HEALTH_BOOST", "ABSORPTION", "SATURATION", "GLOWING", "LEVITATION", "LUCK", "UNLUCK", "SLOW_FALLING", "CONDUIT_POWER", "DOLPHINS_GRACE", "BAD_OMEN", "HERO_OF_THE_VILLAGE"];
       for (var _i=0; _i<_potions.length; _i++) {
          if (_potions[_i]==potion.toUpperCase()){
             _id = _i + 1;
             break;
          }
       }
       return _id;})();
    cmd="give " + player.name + " splash_potion" + "{CustomPotionEffects:[{Id:"+id+",Duration:1200}]," + "display:{Name:\"\\\"" + potion + "\\\"\"}}";
    console.log (cmd);
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), cmd);
  });
  events.playerMove( function (event) {
    player=(event.getPlayer== null) ? null : event.getPlayer();
    location=player.location;
    if (((parseInt(location.x)) == 399)){
      if (((parseInt(location.y)) == 28)){
        if (((parseInt(location.z)) == 626)){
          if (! (exports.witchSpawned)){
            (function() {
              if (player != null ) {
                 player.sendMessage ("Spawning Witch");
              }
             })();
            exports.witchSpawned=true;
            witch=server.worlds[0].spawnEntity(location,org.bukkit.entity.EntityType.WITCH);
            if (witch.setCustomName != null) {
              witch.setCustomName ("Isabella");
            }
          }
        }
      }
    }
  });
  events.entityDeath( function (event) {
    entity=(event.getEntity== null) ? null : event.getEntity();
    org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + name + " died");
    if (((name) == ("Isabella"))){
      attacker=(entity== null)? null : (entity.getMetadata == null)?null:(entity.getMetadata("_"attacker"_").length == 0)?null:entity.getMetadata("_"attacker"_")[0].value();
      org.bukkit.Bukkit.dispatchCommand(org.bukkit.Bukkit.getConsoleSender(), "say @a " + "Isabella last attacked by: " + attacker);
    }
  });
};
