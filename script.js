(function(){
  const progress=document.querySelector('.progress');
  const onScroll=()=>{const h=document.documentElement;const s=h.scrollTop/(h.scrollHeight-h.clientHeight);if(progress){progress.style.transform=`scaleX(${Math.max(0,Math.min(1,s))})`}};
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  const menuBtn=document.querySelector('.menu'); const nav=document.getElementById('mainnav');
  if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const e=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!e));nav.classList.toggle('show')})}
  const reveals=document.querySelectorAll('.reveal'); const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:0.1}); reveals.forEach(el=>io.observe(el));
  const y=document.getElementById('year'); if(y){y.textContent=new Date().getFullYear()}
})();