var pigLatin = function(word) {
  var theInput = word.split("");
  return theInput;
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
