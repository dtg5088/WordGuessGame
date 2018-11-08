
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

    // pulls genre type randomly for game use then writing text onto the screen
    startPrompt.textContent = randomGenre;
    
    //Sorting Genre to allow genre picks to read correct keys 
    if (genre === "Romantic Comedy"){
        randomGenre == genrePicks.RomanticComedy();
    } else if (genre === "Horror"){
        randomGenre == genrePicks.Horror();
    } else if (genre === "SciFi"){
        randomGenre == genrePicks.SciFi();
    } else if (genre === "Action"){
        randomGenre == genrePicks.Action();
    } else if (genre === "Mystery"){
        randomGenre == genrePicks.Mystery();
    }else


   var genrePicks = {

        RomanticComedy: function (){
            // array for movies ansers
            var movies = ["Hitch", "The Proposal", "Bridesmaids", "Clueless", "Big Stick"];
            var randomNum = Math.floor((Math.random() * movies.length));
            var choosenMovie = movies[randomNum];
            var underscore = [];

            //for loop to get the undersore patterns for user answers
            for (var i = 0; i<choosenMovie.length; i++){
                underscore.push(' _ ');
            }
            return underscore;
        },

        Horror: function (){},
        SciFi: function (){},
        Action: function (){},
        Mystery: function (){}
    }

    // This function only runs in a genre function
    function generateUnderscore(movies){
        var randomNum = Math.floor((Math.random() * movies.length));
        var choosenMovie = movies[randomNum];
        var underscore = [];

        for (var i = 0; i<choosenMovie.length; i++){
            underscore.push('_');
        }
        return underscore;
    }







    // brings JavaScript back into HTML (NEEDS TO BE ABLE PICK MOVIES IN EACH CATAGORY)
    userAnswer.textContent= genrePicks.RomanticComedy();
    
    //test log
    console.log(startPrompt);


}