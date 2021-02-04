const winningCond = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7]
]

let player = 1;
let playerX = [];
let playerO = [];

const board = document.getElementById('board')
const playertag = document.getElementById('player')
const restart = document.getElementById('restart')


board.addEventListener('click', function (event) {
  
  if (document.getElementById(event.target.id).innerHTML === '') {
    if (player%2) {
      document.getElementById(event.target.id).innerHTML = 'X';
      playertag.innerHTML = 'player O turn';
      playerX.push(event.target.id);
      console.log(playerX)
    } else {
      document.getElementById(event.target.id).innerHTML = 'O'
      playertag.innerHTML = 'player X turn';
      playerO.push(event.target.id);
      console.log(playerO)
    }
    player++;
  }
  checkWinner();
})


const checkWinner = () => {
  if (playerX.length > 2) {
    winningCond.forEach(condition => { 
      if (playerX.includes(condition[0].toString()) && playerX.includes(condition[1].toString()) && playerX.includes(condition[2].toString())) {
        console.log('player x won')
        return playertag.innerHTML = 'player X wins!'
      } else if (playerO.includes(condition[0].toString()) && playerO.includes(condition[1].toString()) && playerO.includes(condition[2].toString())) {
        return playertag.innerHTML =  'player O wins!'
      } else if (!playerX.includes(condition[0].toString()) && !playerX.includes(condition[1].toString()) && !playerX.includes(condition[2].toString()) && playerX.length === 5) {
        return playertag.innerHTML = "it's a tie, restart the game!"
      }
    })
  }
}

restart.addEventListener('click', function () {
  location.reload();
})


// document.getElementById('result').innerHTML = `${winningPlayer} won!!!!`;



  // if (document.getElementById('1').innerHTML === 'X' && document.getElementById('2').innerHTML === 'X' && document.getElementById('3').innerHTML === 'X') {
  //   console.log('yeeey')
  // } else if (document.getElementById('4').innerHTML === 'X' && document.getElementById('2').innerHTML === 'X' && document.getElementById('3').innerHTML === 'X') {
  //   console.log()
  // } else if (document.getElementById('1').innerHTML === 'X' && document.getElementById('2').innerHTML === 'X' && document.getElementById('3').innerHTML === 'X') { }



