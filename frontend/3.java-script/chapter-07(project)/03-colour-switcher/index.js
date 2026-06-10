// Select all color boxes
const buttons = document.querySelectorAll('.button');

// Select the <body>
const body = document.querySelector('body');

// Loop over each color button and add a click event
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // Get the color id of the clicked box
    const color = e.target.id;

    // Set the body's background color
    body.style.backgroundColor = color;
  });
});
