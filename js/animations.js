const layer=document.getElementById('petals'),button=document.getElementById('celebrate');
const bgm=document.getElementById('bgm'),music=document.getElementById('music');
let musicPausedByUser=false;
bgm.volume=0.55;
function setMusicLabel(on){music.setAttribute('aria-pressed',on?'true':'false');music.textContent=on?'♪ SONANDO':'♪ MÚSICA';}
function playMusic(){if(musicPausedByUser)return Promise.resolve();return bgm.play().then(()=>setMusicLabel(true)).catch(()=>setMusicLabel(false));}
music.addEventListener('click',()=>{if(bgm.paused){musicPausedByUser=false;playMusic();}else{musicPausedByUser=true;bgm.pause();setMusicLabel(false);}});
playMusic();
window.addEventListener('pointerdown',()=>playMusic());
const colors=['#ff9bca','#ffdb8a','#d9baff','#f6a35b','#fff0d2'];
function shower(n=70){for(let i=0;i<n;i++){const p=document.createElement('span');p.className='petal';p.style.left=Math.random()*100+'%';p.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];p.style.setProperty('--time',(3+Math.random()*3)+'s');p.style.setProperty('--drift',(-120+Math.random()*240)+'px');p.style.animationDelay=Math.random()+'s';layer.appendChild(p);p.addEventListener('animationend',()=>p.remove(),{once:true});}}
button.addEventListener('click',()=>shower(120));window.addEventListener('load',()=>setTimeout(()=>shower(35),900));