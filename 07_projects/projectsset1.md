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

