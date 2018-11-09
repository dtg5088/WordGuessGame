
function startFunction (){
   
    //pulling html DOM into JavaScript
    var questions = document.getElementById("questions");
    var guessedLetters = document.getElementById("guessedLetters");
    var userAnswer = document.getElementById("answer");
    var correct = document.getElementById("wins");
    var wrong = document.getElementById("losses");
   
    // Starting prompt variables
    var startPrompt = document.getElementById("startPrompt");
    var genre = ["Romantic Comedy", "Horror", "SciFi", "Action", "Mystery"];
    var randomNum = Math.floor((Math.random() * genre.length));
    var randomGenre = genre[randomNum];

    // array for movies ansers
    var movies = ["hitch", "the proposal", "bridesmaids", "clueless", "big stick"];
    var randomNum = Math.floor((Math.random() * movies.length));
    var choosenMovie = movies[randomNum];
    var choosenMovieArr = [];
    var rightLetters = [];// used to be underscore
    var wrongLetters = [];
    var underscore = [];
    for (var i=0; i <choosenMovie.length; i++){  var charString = choosenMovie.charAt(i); choosenMovieArr.push(charString)}
    console.log(choosenMovieArr);

    //for loop to get the undersore patterns for user answers
    function generateUnderscore (){
        for (var i = 0; i<choosenMovie.length; i++){
            underscore.push(' _ ');
        }
        return underscore;
    }

    document.onkeyup = function(event) {
        var key = event.key;
        var i = 0;

                for (i = 0; i < choosenMovie.length; i++) {
                var charCheck = choosenMovie.charAt(i);
                
                if (charCheck === key){
                    rightLetters.push(key);
                    underscore[i]=key;
                }else {
                    wrongLetters.push(key);
                }

                console.log(rightLetters);
                console.log(choosenMovieArr);
                console.log(underscore);
                console.log(choosenMovie);
            }
            
           



            //userAnswer.textContent = answer;
            console.log(i)
        //console.log(charString);
        console.log(key);
        userAnswer.textContent = event.underscore;
        return underscore;
    }

    // brings JavaScript back into HTML (NEEDS TO BE ABLE PICK MOVIES IN EACH CATAGORY)
    // pulls genre type randomly for game use then writing text onto the screen
    startPrompt.textContent = "Romantic Comedy";//randomGenre;
    userAnswer.textContent = generateUnderscore();
    
    //test log
    console.log(startPrompt);
    

}