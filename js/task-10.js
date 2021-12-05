let inputVal = document.querySelector("input[type='number']");
let divList = document.getElementById("boxes");
let dataCreate = document.querySelector('button[data-create]');
let dataDestroy = document.querySelector('button[data-destroy]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

dataCreate.addEventListener('click', addDiv)

let size = 20;

function addDiv() {
  let i = 0;
  
  let param = +inputVal.value
  while (i < param) {
    i++;
    let bgcolor = getRandomHexColor();
    size += 10;
    let items = document.createElement("div");
    items.style.backgroundColor = bgcolor;
    items.style.width = size + "px";
    items.style.height = size + "px";
    divList.append(items);
  }
}

dataDestroy.addEventListener('click', () => {
  divList.innerHTML = ''
  size = 20;
})