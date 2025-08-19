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