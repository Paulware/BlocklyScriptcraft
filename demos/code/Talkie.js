Blockly.Blocks['talkie'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speak");
    this.appendDummyInput()
        .appendField("Word") 
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["About", "ABOUT"], ["After", "AFTER"], ["Again", "AGAIN"], ["All", "ALL"],
           ["Am", "AM"], ["Degrees", "DEGREES"], ["Eight", "EIGHT"], ["Four", "FOUR"], ["Five", "FIVE"], 
           ["Goodbye", "GOODBYE"],["Hello", "HELLO"], ["Is", "IS"], ["Nine", "NINE"], ["One", "ONE"], ["Point", "POINT"], 
           ["Seven", "SEVEN"], ["Seventy", "SEVENTY"], ["Six", "SIX"], ["Temperature", "TEMPERATURE"],
           ["The", "THE"],["Three", "THREE"], ["Two","TWO"] ]), "WORD");       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  } 
};