function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNorm = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnRemove = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


let size = 30;

const createBoxes = () => {
  
  let total = '';
  
  let values = Number(inputNorm.value);
  
  if (values > 100) {
      values = 100; 
  }
  
  for (let i = 0; i < values; i++){
      
  let markup = `<div style="display:block; margin:10px; width:${size+10*i}px; height:${size+10*i}px; background-color:${getRandomHexColor()}"></div>`;
  total += markup;  
  };
  size = size + 10 * values;  

  boxes.insertAdjacentHTML("beforeend", total);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  size = 30;
}

btnCreate.addEventListener('click', createBoxes);

btnRemove.addEventListener('click', destroyBoxes);