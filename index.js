const endGame = document.getElementById("end-game")
const newGame = document.getElementById("end-game-new-game-btn")
const endGameModal = document.getElementById("end-game-modal")
document.addEventListener("click", function(e){
    // console.log(e.target)
    if(e.target === endGame){
        endGameModal.showModal()
    } else if (e.target ===newGame){
        endGameModal.close()
    }

})

/* ---------- Start Game Modal ---------- */

const modal = document.getElementById("startModal")

window.onload = function displayModal() {
    modal.classList.add("show-modal");    
}

function closeModal() {
    const inputElement = document.getElementById("playername");
    const inputValue = inputElement.value;
    const name = inputValue;

    document.getElementById('name').innerText = `${name}`;
    modal.classList.remove("show-modal");
}

