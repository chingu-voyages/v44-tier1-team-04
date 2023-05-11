const endGame = document.getElementById("end-game")
const newGame = document.getElementById("end-game-new-game-btn")
const endGameModal = document.getElementById("end-game-modal")
document.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target === endGame){
        endGameModal.showModal()
    } else if (e.target ===newGame){
        endGameModal.close()
    }

})



