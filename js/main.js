function loadRandomVideo() {
  const index = Math.floor(Math.random() * videos.length);
  document.getElementById("ytplayer").src = videos[index];
}
loadRandomVideo();
loadMiniGames();

function handleChat(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("chatInput");
    const msg = input.value;
    const chatLog = document.getElementById("chatLog");
    chatLog.innerHTML += `<br>You: ${msg}<br>JFF.LT Support: ${msg.toLowerCase().includes("artūras") ? "SEX WITH ARTŪRAS" : "sex"}`;
    input.value = "";
  }
}

function fakeLogin() {
  document.getElementById("admin-login").classList.add("hidden");
  document.getElementById("admin-panel").classList.remove("hidden");
}

setInterval(() => {
  const img = document.createElement("img");
  img.src = gifs[Math.floor(Math.random() * gifs.length)];
  img.className = "floating-gif";
  img.style.left = Math.random() * window.innerWidth + "px";
  img.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(img);

  const phrase = document.createElement("div");
  phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
  phrase.className = "flying-text";
  phrase.style.left = Math.random() * window.innerWidth + "px";
  phrase.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(phrase);
}, 3000);

// DVD Logo movement
let dvd = document.getElementById("dvdLogo");
let dx = 2, dy = 2;
let x = 100, y = 100;
function animateDVD() {
  x += dx;
  y += dy;
  if (x + dvd.offsetWidth >= window.innerWidth || x <= 0) dx *= -1;
  if (y + dvd.offsetHeight >= window.innerHeight || y <= 0) dy *= -1;

  dvd.style.left = x + "px";
  dvd.style.top = y + "px";

  if ((x <= 0 || x + dvd.offsetWidth >= window.innerWidth) &&
      (y <= 0 || y + dvd.offsetHeight >= window.innerHeight)) {
    alert("🎉 YOU WON A DATE WITH ARTŪRAS 🎉");
  }
  requestAnimationFrame(animateDVD);
}
animateDVD();
