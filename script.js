// Ethan Portfolio — animations v2 (vanilla)
(function(){
  // Progress bar
  const progress = document.querySelector('.progress');
  const setProgress = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    progress && (progress.style.transform = `scaleX(${Math.max(0,Math.min(1,scrolled))})`);
  };
  document.addEventListener('scroll', setProgress, {passive:true});
  setProgress();

  // Mobile menu
  const nav = document.getElementById('mainnav');
  const btn = document.querySelector('.menu');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const showing = nav.classList.toggle('show');
      btn.setAttribute('aria-expanded', showing ? 'true' : 'false');
    });
  }

  // Page enter fade
  document.documentElement.classList.add('page-enter');
  requestAnimationFrame(() => {
    document.documentElement.classList.add('page-enter-active');
  });

  // Scroll reveal with stagger
  const revealEls = document.querySelectorAll('.reveal, .card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{
      if(e.isIntersecting){
        const el = e.target;
        const idx = Array.from(el.parentElement?.children || []).indexOf(el);
        el.style.setProperty('--d', `${Math.min(idx*0.06, 0.3)}s`);
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });
  }, {threshold: 0.12, rootMargin: "0px 0px -40px"});
  revealEls.forEach(el=>io.observe(el));

  // Active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    const page = href && !href.startsWith('http') ? href.replace('./','') : null;
    if (page && (page === path || (path === 'index.html' && (page === '/' || page === 'index.html' || page === '#')))){
      a.classList.add('active');
    }
  });

  // Parallax glow in hero
  const hero = document.querySelector('.hero');
  if (hero){
    const onScroll = () => {
      const y = window.scrollY;
      hero.style.setProperty('--parallax', `${y * 0.08}px`);
    };
    document.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
