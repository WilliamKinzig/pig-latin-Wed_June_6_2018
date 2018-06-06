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

/////// LOOK FOR BEGINNNING CONSONANTS. REMOVE-ADD THEM TO END. END STRING WITH "ay"
  for (index = 1; index < theInput.length; index++)//loop through string (theInput)
  {
    for (var i = 0; i < vowelsArray.length; i++)//loop through vowels
    {
      if (theInput[index] === vowelsArray[i])//check for vowel
      {
        for (var j = 0; j <= (index-1); j++)//loop through string again
        {
          theInput.push(theInput[j]);//push each letter one at a time until vowel is reached.
        }
        theInput.push("ay");// add "ay" to end of string
        theInput.splice(0, index);//remove letters up to vowel (index position from for loop)
        var theResult = theInput.join("");//combine array elements into a string
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
