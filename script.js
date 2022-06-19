const player1 = {
  score: 0,
  button: document.querySelector('#player1'),
  display: document.querySelector('#score1'),
};
const player2 = {
  score: 0,
  button: document.querySelector('#player2'),
  display: document.querySelector('#score2'),
};

const selectedScore = document.querySelector('#scoreMax');
const resetBtn = document.querySelector('#reset');
let scoreThreshold = 3;
let gameOver = false;

player1.button.addEventListener('click', () => {
  updateScores(player1, player2);
});
player2.button.addEventListener('click', () => {
  updateScores(player2, player1);
});

resetBtn.addEventListener('click', reset);

selectedScore.addEventListener('change', function () {
  scoreThreshold = parseInt(this.value);
  reset();
});

function reset() {
  gameOver = false;

  //looping to avoid hard-coding everything to 0
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
}

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1;
    if (player.score === scoreThreshold) {
      gameOver = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}
