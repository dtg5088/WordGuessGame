
//pulling html DOM into JavaScript
var hints = document.getElementById("hints");
var guessedLetters = document.getElementById("guessedLetters");
var userAnswer = document.getElementById("answer");
var correct = document.getElementById("wins");
var wrong = document.getElementById("losses");
var startPrompt = document.getElementById("startPrompt");
var tries = document.getElementById("tries");
var showButton = document.getElementById("display");
var buttonElement = document.createElement("button");

//declaring variables
var userGuessPar = "";
var correctWords = 0;
var wrongWords = 0;
var attempts = 7; // user tries

function startFunction (){

    // Starting prompt variables
    var genre = ["Romantic Comedy", "Horror", "SciFi", "Action", "Mystery"];
    var randomNum = Math.floor((Math.random() * genre.length));
    var randomGenre = genre[randomNum];
    
    // array for movies ansers (11 MOVIES)
    var movies = ["HITCH", "THE PROPOSAL", "BRIDESMAIDS", "CLUELESS", "BIG STICK", "LOVE ACTUALLY", "CRAZY RICH ASIANS", "BOOMERANG", "LOVE JONES", "MOONLIGHT", "THE BEST MAN"];
    var randomNum = Math.floor((Math.random() * movies.length));
    var choosenMovie = movies[randomNum];
    var choosenMovieArr = [];
    var rightLetters = []; // used to be underscore
    var wrongLetters = [];
    var userGuess = [];
    console.log(userGuess);

    // creating img elements for movie
    switch (randomNum){

    }


    // this gets the chosenMovie array of letters
    for (var i=0; i <choosenMovie.length; i++){  var charString = choosenMovie.charAt(i); choosenMovieArr.push(charString)}
    console.log(choosenMovieArr);

    // This will get the users underscore
    for (var i = 0; i<choosenMovie.length; i++){userGuess.push(' _ ');}

    // sends underscores to page 
    userAnswer.textContent = userGuess;

    // this displays the user tries and sends it to the DOM
    tries.textContent = attempts;

    document.onkeyup = function(event) {
        var key = event.key; 
        key = key.toUpperCase();
        var correctLetterCounter;
        var wrongLetterCounter;

        //loop that checks the users keypress for matching 
        for (var i = 0; i < choosenMovie.length; i++) {
                  
            var charCheck = choosenMovie.charAt(i);
            
            if (charCheck == key){
                correctLetterCounter = true;
                userGuess[i]=key;
            }
            if (charCheck !== key) {
                wrongLetterCounter = true;
            }
            console.log(charCheck === key);
            console.log(charCheck !== key);
            //console.log(choosenMovieArr);
            //console.log(userGuess);
            //console.log(choosenMovie);
            //console.log(userGuess);
            //console.log(choosenMovieArr);
        }

        //Conditional statement that retrieves the users right and wrong keyed letters
        if (correctLetterCounter === true){
            rightLetters.push(key);
            console.log(rightLetters);
        } else if (wrongLetterCounter === true){
            wrongLetters.push(key);
            attempts--;
            console.log(wrongLetters);
            guessedLetters.textContent = wrongLetters;
        } else {}
            
        userGuessPar = userGuess.join(); // joins guesses together for comparrison
        var choosenMovieArrPar = choosenMovieArr.join(","); //Joins movie array letters together for comparison 
            console.log(userGuessPar);
            console.log(choosenMovieArrPar);
            console.log(key);

    //if the user losses the game
    userAnswer.textContent = userGuess;
    if (attempts < 1 ){
        wrongWords++;
        userAnswer.textContent = "Sorry the correct answer is "+ choosenMovie;
        
        lose();
        /*if (attempts === 0 ){
            
            attempts = 7;
            wrongLetters = [];
            guessedLetters.textContent = wrongLetters;
            tries.textContent = attempts;
            
        }*/
    }
    
    

    function lose(){
        var buttonElement = document.createElement("button");
        if (attempts === 0 ){
            attempts = 7;
            wrongLetters = [];
            guessedLetters.textContent = wrongLetters;
            tries.textContent = attempts;
            var t = document.createTextNode("click me to play agian");
            buttonElement.appendChild(t);
            buttonElement.addEventListener ("click",  function(){showButton.remove(buttonElement); startFunction();});
            showButton.appendChild(buttonElement);
    }
}

    //when the user wins!!
    if (userGuessPar === choosenMovieArrPar){
        correctWords++;
        var con = confirm("You won!! Would you like to play another game?");
        if (con === true){
            attempts = 7;
            wrongLetters = [];
            guessedLetters.textContent = wrongLetters;
            tries.textContent = attempts;
            startFunction();
        }
    }

    //displays the correct words onto the screen
    correct.textContent = correctWords;
    wrong.textContent = wrongWords;
    tries.textContent = attempts;
    }

    //prompt that displays the genre user will be guessing
    startPrompt.textContent = "Romantic Comedy";//randomGenre;
}