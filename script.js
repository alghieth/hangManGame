// Letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// get Array From Letters
let lettersArray = Array.from(letters);

// select letters container 
let lettersContainer = document.querySelector('.letters');

// Generate letters 

lettersArray.forEach(letter => {

    // Creat span 
    let span = document.createElement("span");

    // create letter text node
    let theLetter = document.createTextNode(letter);

    // Append the letter to span
    span.appendChild(theLetter);

    // Add Class On Span 
    span.className = 'letter-box';

    // Append Span To The Letters Container
    lettersContainer.appendChild(span);
});

// Object of words + categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Para site", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
//Get Random Property 
let allKeys = Object.keys(words);

// randome number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
console.log(randomPropNumber);
// Categort
let randomPropName = allKeys[randomPropNumber];
console.log(randomPropName);
// category words
let randomPropValue = words[randomPropName];
console.log(randomPropValue);
// category number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
console.log(randomValueNumber);
//
let randomValueValue = randomPropValue[randomPropNumber];
console.log(randomValueValue);
// Set category Info 
document.querySelector('.game-info .category span').innerHTML = randomPropName;

// Select letters Guess container 
let lettersGuessContainer = document.querySelector('.letters-guess');

// Convert Chosen Word To Array 

let lettersAndSpace = Array.from(randomValueValue);
console.log(lettersAndSpace);
// Create Spans Depend On Word
lettersAndSpace.forEach(letter => {

    // creat empty span 
    let emptySpan = document.createElement('span');

    // if letter is space 
    if (letter === ' ') {

        // add Class to the span 
        emptySpan.className = "with-space";

    }
    // Append spans to the Letters Guess container
    lettersGuessContainer.appendChild(emptySpan);
    console.log(lettersGuessContainer);

});

// Select Guess Span 
let guessSpans =  document.querySelectorAll('.letters-guess span');
console.log(guessSpans);

// Set Wrong Attempts
let wrongAttempts = 0;

// Select the Draw Elemnt 
let theDraw = document.querySelector(".hangman-draw")


// Handle Clicking On Letters 
document.addEventListener('click' , (e) => {
    
        // Set the choose status 
    let theStatus = false;
    
    if (e.target.className === 'letter-box') {
        
        e.target.classList.add('clicked');
        
    }
    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    console.log(theClickedLetter);
    // the Chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    console.log(theChosenWord);
    
    theChosenWord.forEach((wordLetter, wordIndex) => {
        

        // If the clicked letters equal to one we chosen
        if (theClickedLetter === wordLetter) {

            // Set Status To Correct 
            theStatus = true;

            // Loop On All Guess Spans
            guessSpans.forEach((span, spanIndex) => {
                if (wordIndex === spanIndex) {
                    span.innerHTML = theClickedLetter;
                }
            });
        }
       })
       // if letter is wrong 
       if (theStatus !== true) {

        // Increase the wrong Attempts
        wrongAttempts++;

        // Add Class Wrong On The Draw Elemnt
        theDraw.classList.add(`wrong-${wrongAttempts}`);

        // play Fail Sound 
        document.getElementById('fail').play();

        if (wrongAttempts === 8) {

            endGame();

            lettersContainer.classList.add('finished');
        }

    } else {

        // play Succes Sound
        document.getElementById('success').play();
       }
});

// End Game function 
function endGame() {

    // Creat Popup Div
    let div = document.createElement('div');

    // Create Text
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    // Apped Text to Div
    div.appendChild(divText);

    // Add Class On Div
    div.className = 'popup';

    // Apped to the body
    document.body.appendChild(div);
}
