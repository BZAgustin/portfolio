const heroSquares = document.querySelectorAll('.hero-square');
const skillsSection = document.querySelectorAll('.card');
const contactSection = document.querySelector('.abstract-card');

const handleOnMouseMove = e => {
  let timeoutId;
  
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
               x = e.clientX - rect.left,
               y = e.clientY - rect.top;

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  }, 25);
}

for(square of heroSquares) {
  square.onmousemove = e => handleOnMouseMove(e);
}

for(const card of skillsSection) {
  card.onmousemove = e => handleOnMouseMove(e);
}

contactSection.onmousemove = e => handleOnMouseMove(e);

