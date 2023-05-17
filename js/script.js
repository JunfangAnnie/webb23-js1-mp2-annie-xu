let playerScore = 0
let computerScore = 0
let playerName = ''
let playerChoice = ''

const playerNameInput = document.getElementById('playerNameInput');
const startButton = document.getElementById('startButton');
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorBtn = document.querySelector('.scissor')
const playerHandEl = document.querySelector('.playerHand');
const computerHandEl = document.querySelector('.computerHand')
const playerEl = document.querySelector('.p-count')
const computerEl = document.querySelector('.c-count')

const playerOptions = [rockBtn, scissorBtn, paperBtn]
const computerOptions = ['Sten', 'Sax', 'Påse']

startButton.addEventListener('click', () => {
  playerName = playerNameInput.value;
  document.getElementById('playerName').textContent = playerName; 
});

const computer = () => {
  let totalOptions = Math.floor(Math.random() * 3);
  let computerChoice = computerOptions[totalOptions];

  computerHandEl.innerHTML = `Datorns val: ${computerChoice}`;
  playerEl.innerHTML = `Ditt val: ${playerChoice}`;
  return computerChoice;
};

const resetGame = () => {
    playerScore = 0
    computerScore = 0

    playerEl.innerHTML = playerScore
    computerEl.innerHTML = computerScore
}

const game = () => {
  rockBtn.addEventListener('click', () => {
    computerHandEl.innerHTML = "";
    let computerChoice = computer();
    let playerChoice = 'Sten'; // Sätt spelarens val här
    if (computerChoice === 'Sax') {
      playerScore++;
      console.log("Du vinner");
    } else if (computerChoice === 'Påse') {
      computerScore++;
      console.log("Du förlorar");
    } else {
      console.log("Oavgjort");
    }
    computerHandEl.innerHTML = `Datorns val: ${computerChoice}`;
    playerHandEl.innerHTML = `Ditt val: ${playerChoice}`;

    playerEl.innerHTML = playerScore;
    computerEl.innerHTML = computerScore;
    console.log(playerScore, computerScore);

    if (playerScore === 3) {
      alert(`Grattis! Du vann med: ${playerScore} - ${computerScore}`);
      resetGame();
    } else if (computerScore === 3) {
      alert(`Du har förlorat. Försök igen! ${playerScore} - ${computerScore}`);
      resetGame();
    }
  });

  scissorBtn.addEventListener('click', () => {
    computerHandEl.innerHTML = "";
    let computerChoice = computer();
    let playerChoice = 'Sax';
    if (computerChoice === 'Sax') {
      console.log("Oavgjort");
    } else if (computerChoice === 'Påse') {
      playerScore++;
      console.log("Du vinner ");
    } else {
      console.log("Du förlorar");
      computerScore++;
    }
    computerHandEl.innerHTML = `Datorns val: ${computerChoice}`;
    playerHandEl.innerHTML = `Ditt val: ${playerChoice}`;

    playerEl.innerHTML = playerScore;
    computerEl.innerHTML = computerScore;
    console.log(playerScore, computerScore);

    if (playerScore === 3) {
      alert(`Grattis! Du vann med: ${playerScore} - ${computerScore}`);
      resetGame();
    } else if (computerScore === 3) {
      alert(`Du har förlorat. Försök igen! ${playerScore} - ${computerScore}`);
      resetGame();
    }
  });

  paperBtn.addEventListener('click', () => {
    computerHandEl.innerHTML = "";
    let computerChoice = computer();
    let playerChoice = 'Påse';
    if (computerChoice === 'Sax') {
      console.log("Du förlorar");
      computerScore++;
    } else if (computerChoice === 'Sten') {
      playerScore++;
      console.log("Du vinner");
    } else {
      console.log("Oavgjort");
    }
    computerHandEl.innerHTML = `Datorns val: ${computerChoice}`;
    playerHandEl.innerHTML = `Ditt val: ${playerChoice}`;

    playerEl.innerHTML = playerScore;
    computerEl.innerHTML = computerScore;
    console.log(playerScore, computerScore);

    if (playerScore === 3) {
      alert(`Grattis! Du vann med: ${playerScore} - ${computerScore}`);
      resetGame();
    } else if (computerScore === 3) {
      alert(`Du har förlorat. Försök igen! ${playerScore} - ${computerScore}`);
      resetGame();
    }
  });
};

game();
