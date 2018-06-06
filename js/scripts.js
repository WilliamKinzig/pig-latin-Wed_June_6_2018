var pigLatin = function(word) {
  var theInput = word.split("");
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  if (theInput.length === 1) {
      for (var index = 0; index < vowelsArray.length; index++) {
        if (theInput[0] === vowelsArray[index]) {
          theInput.push("way");
        }
      }//evaluate the array against each vowel in vowelsArray and then add "way" to the letter.
  }
  var theResult = theInput.join("");
  return theResult;
};



$(document).ready(function(){

  $("#input-form").submit(function(event){
    event.preventDefault();
    var userInput = $("#word-input").val();
    var result = pigLatin(userInput);
    alert(result);

    $("#result").text(result);
  })




})
