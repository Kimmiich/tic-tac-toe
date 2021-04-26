const winningCond = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
];

let player = 1;
let playerX = [];
let playerO = [];

const board = document.getElementById("board");
const playertag = document.getElementById("player");
const restart = document.getElementById("restart");

board.addEventListener("click", checkForWinner);

function checkForWinner(event) {
  if (document.getElementById(event.target.id).innerHTML === "") {
    if (player % 2) {
      document.getElementById(event.target.id).innerHTML = `<span>X</span>`;
      playertag.innerHTML = "Player O turn";
      playerX.push(event.target.id);
    } else {
      document.getElementById(event.target.id).innerHTML = `<span>O</span>`;
      playertag.innerHTML = "Player X turn";
      playerO.push(event.target.id);
    }
    player++;
  }
  checkWinner();
}

const checkWinner = () => {
  console.log("check winner");
  if (playerX.length > 2) {
    winningCond.forEach((condition) => {
      if (
        playerX.includes(condition[0].toString()) &&
        playerX.includes(condition[1].toString()) &&
        playerX.includes(condition[2].toString())
      ) {
        board.removeEventListener("click", checkForWinner);
        return (playertag.innerHTML = "Player X wins!");
      } else if (
        playerO.includes(condition[0].toString()) &&
        playerO.includes(condition[1].toString()) &&
        playerO.includes(condition[2].toString())
      ) {
        board.removeEventListener("click", checkForWinner);
        return (playertag.innerHTML = "Player O wins!");
      } else if (
        playerX.length === 5 &&
        (!playerX.includes(condition[0].toString()) ||
          !playerX.includes(condition[1].toString()) ||
          !playerX.includes(condition[2].toString()))
      ) {
        console.log("its a tie");
        return (playertag.innerHTML = "It's a tie, restart the game!");
      }
    });
  }
};

restart.addEventListener("click", function () {
  location.reload();
});
