const menuToggle = document.querySelector('.toggle');
const display = document.querySelector('.display');

menuToggle.addEventListener('click', () => {
  
  display.classList.toggle('active');
})