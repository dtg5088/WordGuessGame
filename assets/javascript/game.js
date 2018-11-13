
//pulling html DOM into JavaScript
var hints = document.getElementById("hints");
var guessedLetters = document.getElementById("guessedLetters");
var userAnswer = document.getElementById("answer");
var correct = document.getElementById("wins");
var wrong = document.getElementById("losses");
var startPrompt = document.getElementById("startPrompt");
var tries = document.getElementById("tries");
var movieImage = document.getElementById("movieImage");

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
    
    // array for movies ansers (10 MOVIES)
    var movies = ["HITCH", "THE PROPOSAL", "BRIDESMAIDS", 
                "SUPER BAD", "WHITE CHICKS", "PULP FICTION", 
                "STEP BROTHERS", "HARLEM NIGHTS", 
                "BAD SANTA", "BAD BOYS"];
    var randomNum = Math.floor((Math.random() * movies.length));
    var choosenMovie = movies[randomNum];
    var choosenMovieArr = [];
    var rightLetters = []; // used to be underscore
    var wrongLetters = [];
    var userGuess = [];
    console.log(userGuess);

    // creating img elements for movie
    // movieImage.src = "assets/images/Hitch.jpg";
   if (randomNum = 0){
    movieImage.src = "assets/images/Hitch.jpg";
   }else if (randomNum = 1){
    movieImage.src = "assets/images/theProposal.jpg";
   }else if (randomNum = 2){
    movieImage.src = "assets/images/bridesmaid.jpg";
   }else if (randomNum = 3){
    movieImage.src = "assets/images/superbad.jpg";
   }else if (randomNum = 4){
    movieImage.src = "assets/images/whiteChicks.jpg";
   }else if (randomNum = 5){
    movieImage.src = "assets/images/pulpFiction.jpg";
   }else if (randomNum = 6){
    movieImage.src = "assets/images/stepBrothers.jpg";
   }else if (randomNum = 7){
    movieImage.src = "assets/images/harlemNights.jpg";
   }else if (randomNum = 8){
    movieImage.src = "assets/images/badSanta.jpg";
   }else if (randomNum = 9){
    movieImage.src = "assets/images/badBoys.jpg";
   } else{}
   console.log(randomNum)
   console.log(movieImage)

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
        if (attempts === 0 ){
        lose();
        }
    }
    
    

    function lose(){
    alert("Sorry you guessed poorly... The answer was "+ choosenMovie);
    var conf = confirm("Would you like to play again?");
    if (conf === true){
        attempts = 7;
        wrongLetters = [];
        guessedLetters.textContent = wrongLetters;
        tries.textContent = attempts;
        startFunction();
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
    startPrompt.textContent = "Comedies";//randomGenre;
}