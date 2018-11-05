
function startFunction (){
   
   // declaring my variables
    var startPrompt = document.getElementById("startPrompt");
    var userQuestions = document.getElementById("questions");
    var genre = "Romantic comedy";

    var randomNum = Math.floor((Math.random() * questions.length));
    
    
    // writing text onto the screen
    startPrompt.textContent = genre;
    
    
    //test log
    console.log(startPrompt);


}