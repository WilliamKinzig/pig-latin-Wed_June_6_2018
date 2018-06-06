var pigLatinWord = function(word)
{
  var theInput = word.split("");
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "y", "Y"];

  // var consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  // var consonantsArray = consonants.split(""); A consonant is simply not a vowel, so an array of the consonants is not needed.\


  /******solves for any single letter word that is a vowel as well as any single word that starts with a vowel******/
  for (index = 0; index < vowelsArray.length; index++) //loop through all vowels
  {
    if (theInput[0] === vowelsArray[index] && theInput[0] != "y" && theInput[0] != "Y") //if the first letter is a vowel but not Y
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
      if (theInput[index] === "q" || theInput[index] === "Q")
      {
        for (var x = 0; x <= (index+1); x++)//loop through string again
        {
          theInput.push(theInput[x]);//push each letter one at a time until the u after q is pushed
        }
        theInput.push("ay");// add "ay" to end of string
        theInput.splice(0, x);//remove letters up to vowel (index position from for loop)
        var theResult = theInput.join("");//combine array elements into a string
        return theResult;
      }
      else if (theInput[index] === vowelsArray[i])//check for vowel
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
    var result = pigLatinWord(userInput);
    alert(result);

    $("#result").text(result);
  })




})
