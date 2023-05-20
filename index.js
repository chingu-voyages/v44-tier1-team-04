const endGame = document.getElementById("end-game");
const newGame = document.getElementById("end-game-new-game-btn");
const endGameModal = document.getElementById("end-game-modal");
document.addEventListener("click", function (e) {
  // console.log(e.target)
  if (e.target === endGame) {
    endGameModal.showModal();
  } else if (e.target === newGame) {
    endGameModal.close();
  }
});

/* ---------- Start Game Modal ---------- */

const modal = document.getElementById("startModal");

window.onload = function displayModal() {
  modal.classList.add("show-modal");
};

function closeModal() {
  const inputElement = document.getElementById("playername");
  const inputValue = inputElement.value;
  const name = inputValue;

  document.getElementById("name").innerText = `${name}`;
  modal.classList.remove("show-modal");
}

/*------------- Grid ----------------*/

function createBoard() {
  const box = "";
  for (let a = 0; a < 10; a++) {
    var row = document.createElement("div");
    document.getElementById("grid-container").appendChild(row);
    row.className = "row";
    for (let b = 0; b < 10; b++) {
      var column = document.createElement("div");
      column.innerHTML = box;
      column.className = "column";
      row.appendChild(column);
    }
  }
}

/*-----------Dice roll------------- */
function rollTheDice(){

  //Initializes dice roll
  var d1 = Math.floor(Math.random()*6) + 1;
  var d2 = Math.floor(Math.random()*6) + 1;

  //Prints dice rolls to console
  console.log(d1)
  console.log(d2)

  var diceRoll1 = document.getElementById("dice1");
  var diceRoll2 = document.getElementById("dice2");

  diceRoll1.innerText = d1;
  diceRoll2.innerText = d2;
}

createBoard();
