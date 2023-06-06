/* ---------- Start Game Modal ---------- */

const modal = document.getElementById('startModal');

window.onload = function displayModal() {
  modal.classList.add('show-modal');
};

function closeModal() {
  const inputElement = document.getElementById('playername');
  const inputValue = inputElement.value;
  const name = inputValue;

  document.getElementById('name').innerText = `${name}`;
  modal.classList.remove('show-modal');
}

/* ------------ End Game Modal ----------- */

const endGame = document.getElementById('end-game');
const newGame = document.getElementById('end-game-new-game-btn');
const endGameModal = document.getElementById('end-game-modal');
document.addEventListener('click', function (e) {
  // console.log(e.target)
  if (e.target === endGame) {
    endGameModal.showModal();
  } else if (e.target === newGame) {
    clearBoard();
    endGameModal.close();
  }
});

/*------------- Grid ----------------*/

function createBoard() {
  const box = '';
  for (let a = 0; a < 10; a++) {
    var row = document.createElement('div');
    document.getElementById('grid-container').appendChild(row);
    row.className = 'row';
    for (let b = 0; b < 10; b++) {
      var column = document.createElement('div');
      column.innerHTML = box;
      column.className = 'column';
      row.appendChild(column);
    }
  }
}

createBoard();

/*---------- Coloring the Boxes --------------*/

let gridBox = document.querySelectorAll('.column');
let diceBtn = document.getElementById('dice');
var aquaCount = 0;
//var grayCount = 0;

gridBox.forEach(function (gridBox) {
  gridBox.addEventListener('mousedown', () => {
    let currentColor = gridBox.style.backgroundColor;
    
    if (currentColor === "gray" || currentColor === "") {
      gridBox.style.backgroundColor = 'aqua';
      aquaCount += 1;
      console.log(aquaCount);
    } else {
      gridBox.style.backgroundColor = 'gray';
    }
  });
  
});
/*-----------Clearing the Grid------------*/
function clearBoard() {
  const squares = document.querySelectorAll('.column');
  squares.forEach((column) => {
    column.style.backgroundColor = 'gray';
  });
  
}

/*-----------Dice roll------------- */
var total = 0;
function rollTheDice() {
  //Initializes dice roll
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  total = d1*d2;

  var diceRoll1 = document.getElementById('dice1');
  var diceRoll2 = document.getElementById('dice2');

  diceRoll1.innerText = d1;
  diceRoll2.innerText = d2;
  console.log(total);
  diceBtn.disabled = true;
  return total;
}

  function submitHandler () {
    diceBtn.disabled = false;
  }
/*
console.log(totalDice)
console.log(sum == totalDice.total)
if (sum == totalDice.total){
  diceBtn.disabled = false;
}else{
  diceBtn.disabled = true;
}*/
    


