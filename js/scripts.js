var pigLatin = function(word)
{
  var theInput = word.split("");
  var vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

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
      for (var index = 0; index < vowelsArray.length; index++)
      {
        if (theInput[0] === vowelsArray[index])
        {
          theInput.push("way"); //if word starts with vowel, just add way
        } else
        {
          theInput.push(theInput[0]);
          theInput.splice(0, 1);
          theInput.push("ay");
          index = vowelsArray.length;
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
