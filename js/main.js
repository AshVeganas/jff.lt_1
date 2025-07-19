// Load random YouTube video by ID from videos.js
function loadRandomVideo() {
  const randomId = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  const iframe = document.getElementById("ytplayer");
  iframe.src = `https://www.youtube.com/embed/${randomId}?autoplay=1&rel=0&mute=1`;
}

// Flying GIFs & phrases
function spawnFlyingStuff() {
  for (let gif of gifs) {
    const img = document.createElement("img");
    img.src = gif;
    img.className = "floating-gif";
    img.style.position = "absolute";
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.width = 80 + Math.random() * 120 + "px";
    img.style.pointerEvents = "none";
    document.body.appendChild(img);
    moveRandom(img);
  }

  for (let phrase of phrases) {
    const div = document.createElement("div");
    div.className = "floating-phrase";
    div.innerText = phrase;
    div.style.position = "absolute";
    div.style.top = Math.random() * window.innerHeight + "px";
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.color = getRandomColor();
    div.style.fontSize = 14 + Math.random() * 26 + "px";
    div.style.fontWeight = "bold";
    div.style.userSelect = "none";
    div.style.pointerEvents = "none";
    document.body.appendChild(div);
    moveRandom(div);
  }
}

function moveRandom(el) {
  function move() {
    el.style.top = Math.random() * (window.innerHeight - el.offsetHeight) + "px";
    el.style.left = Math.random() * (window.innerWidth - el.offsetWidth) + "px";
  }
  move();
  setInterval(move, 1500 + Math.random() * 2000);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Chat system
function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chatInput");
    const chatLog = document.getElementById("chatLog");
    const message = input.value.trim();
    if (!message) return;
    chatLog.innerHTML += `<div><b>You:</b> ${message}</div>`;

    if (/artūras/i.test(message)) {
      chatLog.innerHTML += `<div><b>JFF.LT Support:</b> SEX WITH ARTŪRAS</div>`;
    } else {
      chatLog.innerHTML += `<div><b>JFF.LT Support:</b> sex</div>`;
    }
    chatLog.scrollTop = chatLog.scrollHeight;
    input.value = "";
  }
}

// Fake login
function fakeLogin() {
  document.getElementById("admin-login").style.display = "none";
  document.getElementById("admin-panel").classList.remove("hidden");
  alert("Welcome to the admin panel! (Nothing actually works, though. Nice try!)");
}

// DVD Logo bouncing
const dvd = document.getElementById("dvdLogo");
let posX = Math.random() * (window.innerWidth - dvd.offsetWidth);
let posY = Math.random() * (window.innerHeight - dvd.offsetHeight);
let dx = 3;
let dy = 3;

dvd.style.left = posX + "px";
dvd.style.top = posY + "px";

function bounceDVD() {
  const maxX = window.innerWidth - dvd.offsetWidth;
  const maxY = window.innerHeight - dvd.offsetHeight;

  posX += dx;
  posY += dy;

  if (posX <= 0 || posX >= maxX) dx = -dx;
  if (posY <= 0 || posY >= maxY) dy = -dy;

  dvd.style.left = posX + "px";
  dvd.style.top = posY + "px";

  const cornerTolerance = 8;
  const atLeft = posX <= cornerTolerance;
  const atRight = posX >= maxX - cornerTolerance;
  const atTop = posY <= cornerTolerance;
  const atBottom = posY >= maxY - cornerTolerance;

  if ((atLeft || atRight) && (atTop || atBottom)) {
    alert("🎉 You have won a free date with Artūras!");
  }

  requestAnimationFrame(bounceDVD);
}

// Setup minigames buttons from minigames.js
function setupMinigames() {
  const container = document.getElementById("minigames");
  container.style.margin = "40px auto";
  container.style.textAlign = "center";

  minigames.forEach((game) => {
    const btn = document.createElement("button");
    btn.textContent = game.name;
    btn.style.margin = "10px";
    btn.style.padding = "12px 24px";
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

// Button to load new random video
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("randomVideoBtn").onclick = loadRandomVideo;
  document.getElementById("chatInput").addEventListener("keydown", handleChat);
});

window.onload = () => {
  loadRandomVideo();
  spawnFlyingStuff();
  bounceDVD();
  setupMinigames();
};

// Fun flashy but non-spinning title animation
const title = document.getElementById("title");
let jump = true;
setInterval(() => {
  if (jump) {
    title.style.transform = "translateY(-20px)";
  } else {
    title.style.transform = "translateY(0)";
  }
  jump = !jump;
}, 700);
