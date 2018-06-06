var pigLatin = function(word)
{
  var theInput = word.split("");
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  // var consonantsArray = consonants.split(""); A consonant is simply not a vowel, so an array of the consonants is not needed.
  for (index = 0; index < vowelsArray.length; index++) //solves for any single letter word that is a vowel as well as any single word that starts with a vowel
  {
    if (theInput[0] === vowelsArray[index])
    {
      theInput.push("way");
      var theResult = theInput.join("");
      return theResult;
    }
  }

  for (index = 1; index < theInput.length; index++)
  {
    for (var i = 0; i < vowelsArray.length; i++)
    {
      var dummyArray = [];
      if (theInput[index] === vowelsArray[i])
      {
        theInput.push(theInput[(index-1)] + "way");
        theInput.splice(0, index);
        var theResult = theInput.join("");
        return theResult;
      }
    }
  }
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
