let player;
let videos = ["naUGQl02N1M","dQw4w9WgXcQ"];
function getRandomVideoId(){return videos[Math.floor(Math.random()*videos.length)];}
function playRandom(){
  const id = getRandomVideoId();
  if(player) player.loadVideoById(id);
  else player = new YT.Player('player',{videoId:id,width:960,height:540,playerVars:{autoplay:1},events:{'onStateChange':e=>{if(e.data===YT.PlayerState.ENDED)playRandom();}}});
}
window.onYouTubeIframeAPIReady = playRandom;
document.getElementById("nextBtn").onclick = playRandom;

let clicks=0,bombs=0,score=0;
function updateStats(){
  document.getElementById('clicks').textContent=clicks;
  document.getElementById('bombs').textContent=bombs;
  document.getElementById('score').textContent=score;
}
document.getElementById('runBtn').addEventListener('mouseenter',()=>{
  score++;
  updateStats();
  const x=Math.random()*200+50;
  const y=Math.random()*150+30;
  document.getElementById('runBtn').style.transform=`translate(${x}px,-${y}px)`;
});

const chatlog=document.getElementById('chatlog');
const chatinput=document.getElementById('chatinput');
chatinput.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&chatinput.value.trim()){
    chatlog.innerHTML+=`<br>You: ${chatinput.value}<br>Sexbot: sex`;
    chatinput.value='';
    chatlog.scrollTop=chatlog.scrollHeight;
    fetch('data/chatlogs.txt', {
      method: 'POST',
      body: "User: " + chatinput.value + "\n"
    });
  }
});
