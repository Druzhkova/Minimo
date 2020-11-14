// page scrolling
const scrollButton = document.querySelector('.up-button');
const upArrow = document.querySelector('.up-arrow');

scrollButton.addEventListener('mouseover', () => {
  upArrow.style.color = 'white';
})

scrollButton.addEventListener('mouseout', () => {
  upArrow.style.color = 'black';
})

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollButton.classList.add('shown');
  } else {
    scrollButton.classList.remove('shown');
  }
})

scrollButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
})