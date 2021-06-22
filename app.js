// var username = prompt("Give me your name")

// alert("Hello :" + username)

var btnRecipe = document.querySelector("#btn-recipe");
btnRecipe.addEventListener("click", clickEventHandler);

var outputDiv = document.querySelector("#output");

var serverURL = "https://www.themealdb.com/api/json/v1/1/search.php"

//var txtInput = document.querySelector("#txt-input")

function getMealURL(text) {

    return serverURL + "?s=" + text;

}



var txtInput = document.querySelector("#txt-input")

function errorHandler(error) {
    console.log("error occured", error)

}


//console.log(btnRecipe,outputDiv);

function clickEventHandler() {
    // console.log("button clicked")
    // outputDiv.innerText = "kjsdghfk " + txtInput.value;

    var inputText = txtInput.value;

    fetch(getMealURL(inputText))
        .then(response => response.json())
        .then(json => {
            var mealInstructions = json.meals[0].strInstructions;
            //console.log(mealInstructions)
            outputDiv.innerText = mealInstructions;
        })
        .catch(errorHandler)
}