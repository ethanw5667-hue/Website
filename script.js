// Year + tiny mobile menu + page fade + scroll reveal + active nav
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const nav = document.getElementById('mainnav');
  const btn = document.querySelector('.menu');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const showing = nav.classList.toggle('show');
      btn.setAttribute('aria-expanded', showing ? 'true' : 'false');
    });
  }

  // Page enter animation
  document.documentElement.classList.add('page-enter');
  requestAnimationFrame(() => {
    document.documentElement.classList.add('page-enter-active');
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // Active nav link based on current path
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    const page = href.startsWith('http') ? null : href.replace('./','');
    if (page && (page === path || (path === 'index.html' && (page === '/' || page === 'index.html' || page === '#')))){
      a.classList.add('active');
    }
  });
})();