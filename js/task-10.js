function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const inputNorm = document.querySelector('#controls > input');
const btnCreate = document.querySelector('button[data-create]');
const btnRemove = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');


let total = '';


const createBoxes = (amount) => {
  
  let values = amount.currentTarget.value;
  values = Number(values);

  if (values > 100) {
      values = 100; 
  }
  
  for (let i = 0; i < values; i++){
      
  let markup = `<div style="display:block; margin:10px; width:${30+10*i}px; height:${30+10*i}px; background-color:${getRandomHexColor()}"></div>`;
  total += markup;
  };

}

inputNorm.addEventListener("input", createBoxes);


const addEl = () => {
  return boxes.insertAdjacentHTML("beforeend", total);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  total = '';
}


btnCreate.addEventListener('click', addEl);

btnRemove.addEventListener('click', destroyBoxes);