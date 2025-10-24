// Menu toggle
const menuBtn = document.querySelector('.menu');
const mainnav = document.getElementById('mainnav');
if(menuBtn && mainnav){
  menuBtn.addEventListener('click', ()=>{
    const open = mainnav.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Footer year
const y = document.getElementById('year');
if(y){ y.textContent = new Date().getFullYear(); }

// Progress bar & reveal on scroll
const progress = document.querySelector('.progress');
const reveals = [...document.querySelectorAll('.reveal')];

function onScroll(){
  if(progress){
    const scrolled = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const pct = Math.max(0, Math.min(1, scrolled / (height || 1)));
    progress.style.transform = `scaleX(${pct})`;
  }
  const vh = window.innerHeight * 0.9;
  for(const el of reveals){
    const r = el.getBoundingClientRect();
    if(r.top < vh) el.classList.add('is-visible');
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
window.addEventListener('load', onScroll);

// Parallax for hero (optional)
const hero = document.querySelector('.hero');
if(hero){
  window.addEventListener('scroll', ()=>{
    const offset = window.scrollY * 0.25;
    hero.style.setProperty('--parallax', `${offset}px`);
  }, {passive:true});
}
