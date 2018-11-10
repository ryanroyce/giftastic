// first step is to create an array that I will later turn into buttons and create GIFs from using the given API
var pokeArr = ["Pikachu", "Bulbasaur", "Charmander","Squirtle", "Mankey", "Jigglypuff", "Butterfree", "Voltorb", "Porygon", "Clefairy", "Jigglypuff", "Onix", "Vulpix", "Tentacool", "Dugtrio", "Staryu", "Abra", "Geodude", "Nidoran", "Ghastly"]; 

// this is my function to create the pokemon buttons using the array above and giving them a class and an area to be put into
function makePokeButtons(pokeArr,pokeClass){
    // for loop for the array
    for(var i=0;i<pokeArr.length;i++){
        // creates buttons that will store the info from the array and then puts them on the page
        var pokeButton = $("<button>");
        $("#pokeButtons").append(pokeButton);
        // puts the buttons as html on the page
        pokeButton.html(pokeArr[i]);
        // give the buttons a class and a data-type attribute
        pokeButton.addClass(pokeClass);
        pokeButton.attr("data-type", pokeArr[i]);
    };
};

// now I call the makePokeButtons function to make the magic happen!
makePokeButtons(pokeArr, "iChooseYou", "#pokeButtons");

// on click event to make the buttons prepend GIFs
$(document).on("click", ".iChooseYou", function(){
    // creating a variable to store the string names of the pokemon 
    // var searchTerm = $(".iChooseYou").data("type");
    // have to use this so it isn't picking only the first iChooseYou button and getting all of them
    var searchTerm = $(this).data("type");

    // call the giphy api from the code Phil gave us 
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=1";
    // AJAX call to get the JSON data
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // next, i console log the response to get the api data from the giphy site so later I can call specific elements of it.    
        console.log(response);
         
        // have to make a for loop to call JSON data to populate the GIFs and get the ratings
        for(var i=0;i<response.data.length;i++){
            // create a div to later store our gifs inside of
            var gifDiv = $("<div>");

            // set rating equal to the JSON data a create a rating div
            var rating = response.data[i].rating;
            var ratingDiv = $("<div>").html("Rating " + rating);
            // display the rating in the rating div
            gifDiv.prepend(ratingDiv);
            
            // store JSON data for still and animated versions of gifs
            // wont be making them animate until another on click event is made later on
            var still = response.data[i].images.downsized_still.url;
            var animated = response.data[i].images.downsized.url;
            
            // created an img tag to store the two versions into and a break to give space between image and rating
            var pokeGif = $("<img><br>");

            // give the gifs attributes for still and animated versions, week 6 activity 15 helpful for syntax. i.e. data-state, data-still
            pokeGif.attr("src", still);
            pokeGif.attr("data-still", still);
            pokeGif.attr("data-state", "still");
            // load still versions first, then animated bc of order of precedence in reading JS
            pokeGif.attr("data-animated", animated);
            
            
            // add a class of pokeGif to call later on in on click event 
            pokeGif.addClass("pokeGif");
            
            // prepend to make the images come before the ratings and to display at the top when you click any button
            gifDiv.prepend(pokeGif);
            $("#iChooseYou").prepend(gifDiv);
        };
        });
});



