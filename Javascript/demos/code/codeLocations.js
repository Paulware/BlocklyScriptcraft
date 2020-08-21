   var codeLocations = [
      "Set => Scriptcraft Coding => Variables", 
      "Block at Location (location) => World, Blocks, Location",
      "Block looked at by player => World, Blocks",
      "Block Type => World, Blocks", 
      "Change Block => World, Blocks", 
      "Copy File (source,destination) => World", 
      "Current Milliseconds => World", 
      "Function => Scriptcraft Coding, Functions", 
      "Get Block At Location (location) => World, Blocks, Location", 
      "Get new scoreboard => World, Scoreboard", 
      "Get Type of Block: => World, Blocks",       
      "Item Direction => World",       
      "Block Facing Direction => World, Blocks", 
      "Set Command Block Conditional => World, Blocks, Command Block ", 
      "Set command block command => World, Blocks, Command Block ", 
      "Set score for (player,value) => World, Scoreboard", 
      "Set Scoreboard Title (Text) => World, Scoreboard",
      "Spawn Block (block) At Location (location) => World, Blocks, Location", 
      "Variables => Scriptcraft Coding, Variables",
      "Set sign text for sign at location => World, Blocks, Sign",
      "Get Signs Line for Block => World, Blocks, Sign",
      "Set Sign Facing Direction => World, Blocks, Sign",
      "Spawn Structure => World, Blocks, Structures", 
      "Build a structure  => World, Blocks, Structures", 
      "Set Block Data (Key) => Data",
      "Get Block Data (Key)  => Data",
      "Block Data Exists? (Key) => Data",
      "Absolute Location (X,Y,Z) => World, Location",
      "Modify location (X,Y,Z) => World, Location",
      "Update Location Axis => World, Location",
      "Snap Location to block => World, Location",
      "Distance between locations => World, Location",
      "Mouse Click Type => World, Events", 
      "Listener Event => World, Events",
      "Event Information Get => World, Events",
      "Cancel the Event => World, Events",
      "Make Sound => World, Effects", 
      "Kill Player => World, Effects",
      "Explosion Size => => World, Effects",
      "Lightning strike at => World, Effects",
      "Teleport Entity => World, Effects",
      "Move Entity=> World, Effects",
      "Vector (X,Y,Z) => World, Vector", 
      "Vector between 2 locations => World, Vector",
      "Multiply vector => World, Vector",
      "Get vector velocity from entity => World, Vector",
      "Set vector velocity for entity => World, Vector",
      "Get yaw for vector: => World, Vector",
      "Set World Border Center Location => World, Server", 
      "Set World Border Radius => World, Server",
      "Execute server command => World, Server",
      "Set Game Mode for player => World, Server",
      "Set Spawn (20x20) Area => World, Server",
      "Event Entity => Entities", 
      "Get Type of entity: => Entities",
      "Is a living type, entity => Entities",
      "Is dead, entity => Entities",
      "All Entities => Entities",
      "Spawn creature At Location => Entities",
      "Tame entity: => Entities",
      "Attack! (Attacker, Target) => Entities",
      "Entities within (5) blocks of location => Entities",
      "Delete All Players Data with Key (Key) => Entities, AllPlayers",
      "Remove Gear from All Players => Entities, AllPlayers",
      "For all players set score ==> Entities, AllPlayers",
      "To all players, send message: => Entities, AllPlayers",
      "Set passenger on vehicle => Entities, Player", 
      "Set Health to => Entities, Player",
      "Health of Player => Entities, Player",
      "Stack in hand of Player => Entities, Player",
      "Player Has the item with name (name) => Entities, Player",
      "Is a player => Entities, Player",
      "Is spectator (player) => Entities, Player",
      "Get direction looking for Player => Entities, Player",
      "Data Exists? (Key ) For => Data",
      "Set Entity Data (Key) (Value) (For ) = Data", 
      "Get Player Data (Key) For: => EData", 
      "Delete Player Data (Key) For Player/Entity => Data",
      "Projectile => Entities, Projectiles", 
      "Is an arrow => Entities, Projectiles",
      "Is a snowball => Entities, Projectiles",
      "Launch projectile from entity: => Entities, Projectiles",
      "Set Speed For Projectile => Entities, Projectiles",
      "Shooter of Projectile => Entities, Projectiles",
      "Monster or Object => Entities, Creatures", 
      "Creature Type => Entities, Creatures",
      "Convert to creature type => Entities, Creatures",
      "Spawn and modify an entity => Entities, Creatures",
      "Set Entity Name => Entities, Creatures",
      "Set Profession => Entities, Creatures",
      "Armor Color => Entities, Creatures",
      "Change to Baby => Entities, Creatures",
      "Add Passenger => Entities, Creatures",
      "Turn Off AI => Entities, Creatures",
      "Add to inventory, itemstack => Items", 
      "Inventory for player => Items",
      "Clear inventory for player => Items",
      "Custom Name of Item => Items",
      "Material => Items",
      "Egg => Items",
      "Drop Stack of Items At Location => Items, Stack",
      "Stack of => Items, Stack", 
      "Set custom name to for the stack=> Items, Stack",
      "Custom Name of Stack => Items, Stack",
      "Material type in stack => Items, Stack",
      "Add Potion to inventory => Items, Potions", 
      "Give potion effect => Items, Potions",
      "Effect => Items, Potions",
      "Potion Name => Items, Potions",
      "Set Equipment Name => Items, Gear", 
      "Color => Items, Gear",
      "Inventory for player: => Items, Gear",
      "Set hotbar slot => Entities, Player, Hotbar",
      "Clear hotbar for player => Entities, Player, Hotbar",
      "Count number of Material in hotbar for player => Entities, Player, Hotbar", 
      "Chestplate in inventory => Items, Gear",
      "Remove Material from hotbar => Entities, Player, Hotbar", 
      "Item in hand for Player: => Items, Gear",
      "Give diamond armor to player/entity => Items, Gear",
      "Give diamond helmet to player/entity => Items, Gear",
      "Give gold boots to player/entity => Items, Gear",
      "Leather Armor in Color => Items, Gear",
      "Add Ingredient Character => Items, Recipes", 
      "Recipe Result Stack => Items, Recipes", 
      "New Map Renderer => Items, Map", 
      "Draw Image => Items, Map", 
      "Draw Text => Items, Map", 
      "server console => Output", 
      "Echo => Output", 
      "SendMessage To Player => Output", 
      "Send UDP (Message) (Port) => Output", 
      "Expression => Scriptcraft Coding", 
      "Function => Scriptcraft Coding, Functions", 
      "Call Function => Scriptcraft Coding, Functions",
      "Repeat Execution Name: => Scriptcraft Coding, Functions",
      "Delayed Execution => Scriptcraft Coding, Functions",
      "Function () is callable from object => Scriptcraft Coding, Functions",
      "Return => Scriptcraft Coding, Functions",
      "variable: => Scriptcraft Coding, Variables", 
      "Set (variable) = (expression) => Scriptcraft Coding, Variables",
      "Set (variable) => Scriptcraft Coding, Variables",
      "Expression (expression) => Scriptcraft Coding, Variables",
      "Add to list => Lists",
      "Dictionary Structure => Scriptcraft Coding, Variables",
      "Data Value => Scriptcraft Coding, Variables",
      "Data Name => Scriptcraft Coding, Variables",
      "Repeat times use variable => Scriptcraft Coding, Loops", 
      "Repeat (while) => Scriptcraft Coding, Loops", 
      "break out of loop => Scriptcraft Coding, Loops",
      "File Exists => Scriptcraft Coding, File I/O",
      "\" \" => Text", 
      "if do => Logic", 
      "= /= < <= > >=  => Logic", 
      "and/or => Logic", 
      "true => Logic", 
      "false => Logic", 
      "Number => Math", 
      "Random Number => Math", 
      "Count condition in list => Lists",
      "Reverse face => World, Blocks",   
      "Change Location => World, Location", 
      "create list with => Lists",  
      "Value in List => Lists",     
      "Delete element from list => Lists",  
      "Set Variable => Scriptcraft Coding, Variables",  
      "Increment Variable => Math", 
      "All Players => Entities => All Players",
      "Using loop variable => Scriptcraft Coding, Loop ",  
      "Create a stack of items => Items Stack",
      "Set name = => Scripcraft Coding, Variables",  
      "Randomize chest contents from list => Items",  
      "Player Data Eq => Entities, Player, Data",  
      "List of Block Type => World, Blocks", 
      "Active Team List => Entities, AllPlayers",   
      "Is Jumping => World, Events",  
      "For Each Loop => Scriptcraft Coding, Loops",  
      "Assign Damage => Entities",  
      "Damage => Entities",  
      "Get Boots Worn by Player => Items, Gear",     
      "create list with => Lists", 
      "Give random potion to player => Items, Potions",   
      "Add Potion Effect => Items, Potions",  
      "Add stack to inventory for player => Entities, Player",  
      "Modify stack set custom name => Items, Stack",  
      "Find entity with custom name => Entities",    
      "Is null => Logic",    
      "Set Custom Name of => Entities", 
      "Add Custom Effect For Cloud => Items, Area Effect Cloud",   
      "Set duration Seconds for area effect cloud => Items, Area Effect Cloud",     
      "Set radius to blocks for area effect cloud => Items, Area Effect Cloud", 
      "Door block is open => World=>Blocks",     
      "Play Effect => Entities, Effects", 
      "Effect Type => Entities, Effects", 
      "Location = =>World Location", 
      "Create list with => Lists", 
      "Count Players Bet => Entities, Player",
      "In text find first occurence of text => Text",   
      "Convert to string, Variable: => Text",  
      "Set Global => Data, Global", 
      "Global Variable: => Data, Global", 
      "Location Of => World, Location",
      "Open Door at Location => World, Blocks, Door",    
      "Fill Block Type => World, Server", 
      "Set invincibility for player => Entities, Player",      
   ];
   
   function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}
