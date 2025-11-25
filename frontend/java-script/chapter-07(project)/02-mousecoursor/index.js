const cursor = document.querySelector('.cursor');
console.log(cursor)

// Array of 10 colors
const colors=[
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
];


// Move cursor with mouse and change color
document.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.backgroundColor = randomColor;
});

