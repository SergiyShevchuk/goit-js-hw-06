function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyColor = document.querySelector('body');
const spanColor = document.querySelector('.color')
const btnColor = document.querySelector('.change-color');


btnColor.addEventListener('click', function () {
  const color = getRandomHexColor(); 
  
  bodyColor.style.backgroundColor = color;
  spanColor.textContent = color;
})