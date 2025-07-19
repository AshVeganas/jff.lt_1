function loadMiniGames() {
  const container = document.getElementById("minigames");

  const whackGame = document.createElement("div");
  whackGame.innerHTML = `<h3>Whack-a-Face</h3><button onclick="alert('You missed lol')">👊</button><button onclick="alert('CRITICAL HIT!')">👊</button>`;

  const guessingGame = document.createElement("div");
  guessingGame.innerHTML = `<h3>Guess the Number (1-5)</h3><input type='number' id='guessNum'><button onclick='checkGuess()'>Guess</button>`;

  const buttonHell = document.createElement("div");
  buttonHell.innerHTML = `<h3>BUTTON HELL</h3><div id='btnHell'></div><button onclick='spawnMoreButtons()'>MORE</button>`;

  const trollMaze = document.createElement("div");
  trollMaze.innerHTML = `<h3>Troll Maze</h3><button onmouseover="this.style.position='absolute';this.style.left=Math.random()*window.innerWidth+'px';this.style.top=Math.random()*window.innerHeight+'px'">Try to click me</button>`;

  container.appendChild(whackGame);
  container.appendChild(guessingGame);
  container.appendChild(buttonHell);
  container.appendChild(trollMaze);
}
function checkGuess() {
  const val = document.getElementById('guessNum').value;
  const real = Math.floor(Math.random() * 5) + 1;
  alert(val == real ? "YOU'RE A GENIUS!" : `WRONG. It was ${real}`);
}
function spawnMoreButtons() {
  const div = document.getElementById('btnHell');
  const btn = document.createElement('button');
  btn.textContent = "Click me!";
  btn.onclick = () => alert("Ouch.");
  div.appendChild(btn);
}