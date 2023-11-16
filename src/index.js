const heroSquares = document.querySelectorAll('.hero-square');
const skillsSection = document.querySelectorAll('.card');

const handleOnMouseMove = e => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
               x = e.clientX - rect.left,
               y = e.clientY - rect.top;

  target.style.setProperty('--mouse-x', `${x}px`);
  target.style.setProperty('--mouse-y', `${y}px`);
}

for(const card of skillsSection) {
  card.onmousemove = e => handleOnMouseMove(e);
}

for(square of heroSquares) {
  square.onmousemove = e => handleOnMouseMove(e);
}