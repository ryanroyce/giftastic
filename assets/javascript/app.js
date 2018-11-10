// first step is to create an array that I will later turn into buttons and create GIFs from using the given API
var pokeArr = ["Pikachu", "Bulbasaur", "Charmander","Squirtle", "Mankey", "Jigglypuff", "Butterfree", "Voltorb", "Porygon", "Clefairy", "Jigglypuff", "Onix", "Vulpix", "Tentacool", "Dugtrio", "Staryu", "Abra", "Geodude", "Nidoran", "Ghastly"]; 

// this is my function to create the pokemon buttons using the array above and giving them a class and an area to be put into
function makePokeButtons(pokeArr,pokeClass,area){
   
    // for loop for the array
    for(var i=0;i<pokeArr.length;i++){
        // creates buttons that will store the info from the array and then puts them on the page
        var pokeButton = $("<button>");
        $(area).append(pokeButton);

        // puts the buttons as html on the page
        pokeButton.html(pokeArr[i]);
        // give the buttons a class and a data-type attribute
        pokeButton.addClass(pokeClass);
        pokeButton.attr("data-type", pokeArr[i]);
    };
};

// now I call the makePokeButtons
makePokeButtons(pokeArr, "searchButton", "#buttonsArea");


$(document).on("click", ".searchButton", function(){
    
});
