const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');


function explore() {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
  }

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})