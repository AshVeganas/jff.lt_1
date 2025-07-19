const minigames = [
  {
    name: "Click the Moving Button",
    play: () => {
      alert("Try clicking the button that moves! Spoiler: it hates you.");
      const btn = document.createElement("button");
      btn.textContent = "Catch me if you can!";
      btn.style.position = "fixed";
      btn.style.top = "50%";
      btn.style.left = "50%";
      btn.style.transform = "translate(-50%, -50%)";
      btn.style.padding = "15px";
      btn.style.fontSize = "1.2em";
      document.body.appendChild(btn);

      function moveButton() {
        btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
        btn.style.left = Math.random() * (window.innerWidth - 150) + "px";
      }

      btn.addEventListener("mouseover", moveButton);
      btn.addEventListener("click", () => {
        alert("You caught me! Nah, just kidding. You lost.");
        document.body.removeChild(btn);
      });

      moveButton();
    },
  },
  {
    name: "Fake Typing Test",
    play: () => {
      let counter = 0;
      alert("Type fast! (But it won't matter.)");
      window.addEventListener("keydown", function handler() {
        counter++;
        if (counter > 50) {
          alert("You typed a lot! But your score is... 0.");
          window.removeEventListener("keydown", handler);
        }
      });
    },
  },
  {
    name: "Inescapable Alert Loop",
    play: () => {
      let count = 0;
      alert("Try closing the alerts. Good luck!");
      function loop() {
        if (count < 5) {
          alert("You can't escape!");
          count++;
          setTimeout(loop, 100);
        } else {
          alert("Fine, you win... for now.");
        }
      }
      loop();
    },
  },
  {
    name: "Random Number Guess",
    play: () => {
      const num = Math.floor(Math.random() * 5) + 1;
      let guess = prompt("Guess a number between 1 and 5");
      if (parseInt(guess) === num) {
        alert("No way! You guessed it... but it's a trick. You lose.");
      } else {
        alert(`Wrong! The number was ${num}. You lose.`);
      }
    },
  },
];

function setupMinigames() {
  const container = document.getElementById("minigames");
  container.style.margin = "40px auto";
  container.style.textAlign = "center";

  minigames.forEach((game, i) => {
    const btn = document.createElement("button");
    btn.textContent = game.name;
    btn.style.margin = "10px";
    btn.style.padding = "12px 20px";
    btn.style.background = "#ff0080";
    btn.style.color = "white";
    btn.style.fontWeight = "bold";
    btn.style.borderRadius = "8px";
    btn.style.border = "2px solid white";
    btn.style.cursor = "pointer";

    btn.onclick = game.play;
    container.appendChild(btn);
  });
}

window.onload = () => {
  loadRandomVideo();
  spawnFlyingStuff();
  bounceDVD();
  setupMinigames();
};
