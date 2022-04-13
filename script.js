//DOM elements
let results = document.querySelector("#results");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let buttons = [...document.querySelectorAll("button")];
let playerScoreCard = document.querySelector("#player-score");
let cpuScoreCard = document.querySelector("#cpu-score");
let playerChoiceContainer = document.querySelector("#player-choice");
let cpuChoiceContainer = document.querySelector("#cpu-choice");

let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let cpuScore = 0;

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
  return choices[randomNumberBetween(0, 2)];
}

function playRockPaperScissors(p1Choice, p2Choice) {
  //write rock, paper, scissors game algorithm and return winner
  if (p1Choice === p2Choice) return (results.textContent = "Draw. No points.");
  if (p1Choice === "rock") {
    if (p2Choice === "scissors") {
      playerScore++;
      playerScoreCard.textContent = "Player Score: " + playerScore;
      results.textContent = "You win! Rock beats scissors.";
    } else {
      cpuScore++;
      cpuScoreCard.textContent = "CPU Score: " + cpuScore;
      results.textContent = "You lose. Paper beats rock.";
    }
  }
  if (p1Choice === "paper") {
    if (p2Choice === "rock") {
      playerScore++;
      playerScoreCard.textContent = "Player Score: " + playerScore;
      results.textContent = "You win! Paper beats rock.";
    } else {
      cpuScore++;
      cpuScoreCard.textContent = "CPU Score: " + cpuScore;
      results.textContent = "You lose. Scissors beats paper.";
    }
  }
  if (p1Choice === "scissors") {
    if (p2Choice === "paper") {
      playerScore++;
      playerScoreCard.textContent = "Player Score: " + playerScore;
      results.textContent = "You win! Scissors beats paper.";
    } else {
      cpuScore++;
      cpuScoreCard.textContent = "CPU Score: " + cpuScore;
      results.textContent = "You lose. Rock beats scissors.";
    }
  }
  return checkEnd();
}

function checkEnd() {
  if (playerScore === 5) {
    results.textContent = "VICTORY! You won the Match!";
    playerScore = 0;
    cpuScore = 0;
    playerScoreCard.textContent = "Player Score: " + playerScore;
    cpuScoreCard.textContent = "CPU Score: " + cpuScore;
  }
  if (cpuScore === 5) {
    results.textContent = "DEFEAT... You lost.";
    playerScore = 0;
    cpuScore = 0;
    playerScoreCard.textContent = "Player Score: " + playerScore;
    cpuScoreCard.textContent = "CPU Score: " + cpuScore;
  }
}

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    let playerChoice = e.target.textContent;
    let cpuChoice = computerPlay();
    playerChoiceContainer.textContent = `Player Choose: ${playerChoice}`;
    cpuChoiceContainer.textContent = `CPU Choose: ${cpuChoice}`;
    playRockPaperScissors(playerChoice, cpuChoice);
  });
});
