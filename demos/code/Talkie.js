Blockly.Blocks['talkie'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speak");
    this.appendDummyInput()
        .appendField("Word") 
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["About", "ABOUT"], ["After", "AFTER"], ["Again", "AGAIN"], ["All", "ALL"],
           ["Am", "AM"], ["Degrees", "DEGREES"], ["Eight", "EIGHT"], ["Eighty", "EIGHTY"], 
           ["Eleven", "ELEVEN"],
           ["Fifteen", "FIFTEEN"], ["Fifty", "FIFTY"], ["Five", "FIVE"],
           ["Forty", "FORTY"], ["Four", "FOUR"], ["Fourteen", "FOURTEEN"],
           ["Goodbye", "GOODBYE"],["Hello", "HELLO"], ["Hundred", "HUNDRED"],
           ["Is", "IS"], ["Nine", "NINE"], ["Ninety", "NINETY"],  
           ["One", "ONE"], ["Point", "POINT"], 
           ["Seven", "SEVEN"], ["Seventy", "SEVENTY"], ["Six", "SIX"], ["Sixty", "SIXTY"], 
           ["Teen", "TEEN"], ["Ten", "TEN"],
           ["Temperature", "TEMPERATURE"], ["Thirteen", "THIRTEEN"], ["Thirty", "THIRTY"],
           ["Thousand", "THOUSAND"],            
           ["Twelve", "TWELVE"], ["Twenty", "TWENTY"], 
           ["The", "THE"],["Three", "THREE"], ["Two","TWO"] ]), "WORD");       
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  } 
};