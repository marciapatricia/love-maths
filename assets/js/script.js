//Wait for the DOM to finish loading before running the game.
//Get button elements and add event listeners to them.
//returns all ements by tag name method found as an array then we can iterate through that array.
//this goes through our buttons array and return each element in the array which will be stored in that variable button on each iteration.
//button represents an individual button element, we're adding event listener which listens for that button to be clicked. When
//When the button is clicked the code thats inside code block will then run.

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

//Through the if statement above we are going to check the attribute of the data type to see what its value is.
//If it is submit we are going to display an alert that "you clicked submit"
//part says this get attribute, this refers to the button that was just clicked so if we click the addition button then "this" is referring to that specific button.
// we then use the reference to that button to call its get GET attribute methodo and check the contents of our data type custom attribute. If is equal to submit display alert you clicked submit.
//let game type part set the game type the value of that attribute and this will tell us what game type we want to run.

//this modern version is convenient it means we dont use index notation to speak to elements in the array. Just reads cleaner for humans.

//for (let i = 0; i < buttons.length; i++) could use thisbut using a more modern version above.
//syntax used to iterate through an aray, so the first thing we are doing is setting i to zero.
//then we check if i is less than the length of our buttons array.
//through every iteration we are incrementing i by one. 

//When the page is finished loading and all of the dom content is loaded.then the code in this code block above will execute.
// Otherwise could be targeting elements in your page that doesnt existe or havent loaded yet.


//I'm gonna to put docstring above function name.
//docstrings are created in JS with slash, star, syntax.

/** docstring used to describe functions 
 * The main game "loop", called when the script is first loaded
 * and after the user answer has been processed
 */
function runGame(gameType) { //need to supply parameters functions is going to accept

    //create two random numbers between 1 and 25 we can use this to display our questions.
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    //now we need to check which game type we are running with an if statement
    //call the apropriate function to display the question
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gameType} `);
        throw `Unkown game type: ${gameType}. Aborting`; //will throw an error for debugging
    }
}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}