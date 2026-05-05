const cursor = document.querySelector('.cursor');
console.log(cursor)

// Array of 10 colors
const colors=[
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'
];

const scale=['scale(1)','scale(2)','scale(1.5)','scale(3)','scale(2.5)']


// Move cursor with mouse and change color
document.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
  const randomcolor=colors[Math.floor(Math.random() * colors.length)]
  const randomscale = scale[Math.floor(Math.random() * scale.length)];
  cursor.style.transform = randomscale
  cursor.style.backgroundColor=randomcolor
});

