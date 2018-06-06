var pigLatin = function(word)
{
  var theInput = word.split("");
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  // var consonantsArray = consonants.split(""); A consonant is simply not a vowel, so an array of the consonants is not needed.

  if (theInput.length === 1)
  { //for single letter words
      for (var index = 0; index < vowelsArray.length; index++)
      {
        if (theInput[0] === vowelsArray[index])
        {
          theInput.push("way");
        }
      }
      var theResult = theInput.join("");
      return theResult;
  } else if (theInput.length != 1)
    { //word is longer than 1 character
      for (var index = 0; index < consonantsArray.length; index++)
      {
        if (theInput[0] === vowelsArray[index])
        {
          theInput.push("way");
          index = consonantsArray.length;
          var theResult = theInput.join("");
          return theResult; //if word starts with vowel, just add way
        }
        else if (theInput[0] === cononantsArray[index])
        {
          theInput.push(theInput[0]);
          theInput.splice(0, 1);
          theInput.push("ay");
          index = consonantsArray.length;
          var theResult = theInput.join("");
          return theResult;
        }
        else
        {
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
