<!-- md means marked down -->
<!-- we have right hand side preview option(here we can see) -->
# Project related to DOM

## Project link
[Click here]()

# Solution code

## project 1

<!-- 3 times backtick for opening and closing -->
``` Javascript
console.log("sarvagya")

// We have to select all button so querySelectorAll()

const buttons = document.querySelectorAll('.button');
// console.log(buttons) // so nodelist we get
const body = document.querySelector('body');

// so we know that in buttons(nodelist) we can use forEach loop

buttons.forEach(function (button) {
  console.log(button);
  // on every button we will use event listener

  // ('click'(event) , callback fun)
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // here above we get id (in console when youclick in grey box(like other also))

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
      // when you click on grey color so color change to grey because in e.target.id have grey color
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});



```
## Project 2 solution 
``` javascript
const form = document.querySelector('form'); // by this form we have access it.

/* NOTE: whenever form is submitted so , it submitted in type of post or get but whenever it will submit so its value goes to url or server so this we have to stops that value( going in url or server) so stop the default action of 'form' so (in events we have method) */
// (event, callback fun)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value); // value we get in string. so parsing in int

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    // isNaN is a method (if height is true(number ma convertable hogi) so value will get true)
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // showing the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## Project 3 solution 
``` Javascript
const clock = document.getElementById('clock');
// or ( both are same thing)
// const clock = document.querySelector('#clock')

/*
let date = new Date()
console.log(date.toLocaleDateString()); // in console 8/21/2025 come
*/

// we want everytime we get updated date so we have a method
// setInterval method (it say after how many interval this will run)

// two parameter ( function , time(in sec))
// in every sec we will get value
setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());// ( we have to update document. ju node ha usha update karna tha ek second )
  // so we write
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## Project 4 solution
``` javascript
// generating random number between 1-100
//console.log(Math.random()); // 0.3141853797547367

// here number between 0-9 are there...
//console.log(Math.random() * 10); // 4.39466858708557

// we want number from 1 to 100 so doing +1 it give gurantee that 0 will not come...
//console.log(Math.random() * 100 + 1); // 71.57766727720468

// We want only integer so wrapping

//console.log(parseInt(Math.random() * 100 + 1)); // 95

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

// taking user input from (guessField)   .... but here we have not taken
const userInput = document.querySelector('#guessField');

// taking user guesses ( in array we will put in later)
const guessSlot = document.querySelector('.guesses');

// user last result value
const remaining = document.querySelector('.lastResult');

// tell user to low or high value
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

// creating paragraph
const p = document.createElement('p');

// taking array because user will submit value and we will store that value. and we will show whole array to user(so that again guess value they will not repeat)

let prevGuess = [];
let numGuess = 1;

let playGame = true;

// checking you are eligilbe for playing game or not..
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    // here we are taking userInput
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  /* (what if they give a,b)
       or they give negative number
  */
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less then 100');
  } else {
    prevGuess.push(guess);
    // it may happen ki uska last attempt hu (game over tu nahi hu gaya ha)
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check for value is low or high like that  if they are equal value so you win game
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High `);
  }
}

function displayGuess(guess) {
  // it will clean your values and your guesses will update in array

  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; // innerHTML using because of span tag
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''; // by this value will be clean
  userInput.setAttribute('disabled', ''); // it is in key value pair.
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame> Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    // doing variable reset
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

## Project 5 solution
``` javascript
// How to generate a random color (in hexa value it will generate)
// hex value start from 0 to 9 and then A to F (10 to 15)..

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());

// console.log(Math.random() * 16); // here we get value from 0 to 16

// console.log(Math.floor(Math.random() * 16));

// Now we want start and stop reference
let intervalId; // make global
const startChangingColor = function () {
  // safety check for good practise
  if(!intervalId) // agar intervalId ha ki nahi tu..
  {
  intervalId = setInterval(changeBgColor, 1000);
  }
//  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  // code is working start and stop but there are edges cases..

  //after our work we have done  we have clear intervalId and now we are derefrenceing the variable.
  intervalId = null; // here now stop button is not doing stop... so, modify code of startChangingColor
   
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

