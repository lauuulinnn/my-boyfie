const pages=[...document.querySelectorAll('.page')];
function show(id){pages.forEach(p=>p.classList.toggle('active',p.id===id));}
document.querySelectorAll('[data-next]').forEach(b=>b.onclick=()=>show(b.dataset.next));
document.querySelectorAll('[data-prev]').forEach(b=>b.onclick=()=>show(b.dataset.prev));
const hearts=document.getElementById('hearts');
for(let i=0;i<34;i++){const h=document.createElement('span');h.className='heart';h.textContent=Math.random()<.8?'♡':'·';h.style.left=Math.random()*100+'%';h.style.animationDelay=(-Math.random()*10)+'s';h.style.animationDuration=(6+Math.random()*8)+'s';hearts.appendChild(h)}
const audio=document.getElementById('audio'),btn=document.getElementById('musicBtn');let playing=false;
btn.onclick=()=>{if(!audio.src.endsWith('ivy.mp3'))return;if(audio.paused){audio.play();btn.textContent='Ⅱ';playing=true}else{audio.pause();btn.textContent='♫';playing=false}};
