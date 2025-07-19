// Load random video
function loadRandomVideo() {
  const randomId = videoLinks[Math.floor(Math.random() * videoLinks.length)];
  const iframe = document.getElementById("ytplayer");
  iframe.src = `https://www.youtube.com/embed/${randomId}?autoplay=1&rel=0`;
}

// Flying GIFs & Phrases
function spawnFlyingStuff() {
  for (let gif of gifs) {
    const img = document.createElement("img");
    img.src = gif;
    img.className = "floating-gif";
    img.style.top = Math.random() * window.innerHeight + "px";
    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.width = 100 + Math.random() * 100 + "px";
    document.body.appendChild(img);
    moveRandom(img);
  }

  for (let phrase of phrases) {
    const div = document.createElement("div");
    div.className = "floating-phrase";
    div.innerText = phrase;
    div.style.top = Math.random() * window.innerHeight + "px";
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.color = getRandomColor();
    div.style.fontSize = 16 + Math.random() * 24 + "px";
    document.body.appendChild(div);
    moveRandom(div);
  }
}

function moveRandom(el) {
  setInterval(() => {
    el.style.top = Math.random() * (window.innerHeight - 100) + "px";
    el.style.left = Math.random() * (window.innerWidth - 100) + "px";
  }, 1500 + Math.random() * 2000);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let c = "#";
  for (let i = 0; i < 6; i++) c += letters[Math.floor(Math.random() * 16)];
  return c;
}

// Chat system
function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chatInput");
    const chatLog = document.getElementById("chatLog");
    const message = input.value;
    chatLog.innerHTML += `<br>You: ${message}`;
    if (/artūras/i.test(message)) {
      chatLog.innerHTML += `<br>JFF.LT Support: SEX WITH ARTŪRAS`;
    } else {
      chatLog.innerHTML += `<br>JFF.LT Support: sex`;
    }
    input.value = "";
  }
}

// Fake Login
function fakeLogin() {
  document.getElementById("admin-login").style.display = "none";
  document.getElementById("admin-panel").classList.remove("hidden");
}

// DVD logo
let dvd = document.getElementById("dvdLogo");
let dx = 2;
let dy = 2;

function bounceDVD() {
  let rect = dvd.getBoundingClientRect();
  let x = dvd.offsetLeft;
  let y = dvd.offsetTop;

  if (x + rect.width >= window.innerWidth || x <= 0) {
    dx = -dx;
  }
  if (y + rect.height >= window.innerHeight || y <= 0) {
    dy = -dy;
  }

  dvd.style.left = x + dx + "px";
  dvd.style.top = y + dy + "px";

  // Perfect corner hit detection
  if (
    (x <= 0 || x + rect.width >= window.innerWidth) &&
    (y <= 0 || y + rect.height >= window.innerHeight)
  ) {
    alert("🎉 You have won a free date with Artūras!");
  }

  requestAnimationFrame(bounceDVD);
}

window.onload = () => {
  loadRandomVideo();
  spawnFlyingStuff();
  bounceDVD();
};
