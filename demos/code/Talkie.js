Blockly.Blocks['talkie'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speak");
    this.appendDummyInput()
        .appendField("Word") 
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["Hello", "HELLO"], ["Goodbye", "GOODBYE"], ["About", "ABOUT"], ["After", "AFTER"], ["Again", "AGAIN"], ["All", "ALL"], ["Am", "AM"]]), "WORD");       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};