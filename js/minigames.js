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
      btn.style.zIndex = "9999";
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
      function keyHandler() {
        counter++;
        if (counter > 50) {
          alert("You typed a lot! But your
