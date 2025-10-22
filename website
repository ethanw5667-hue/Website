<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Ethan Wang — Portfolio</title>
<meta name="description" content="Ethan Wang — physics projects, writing, and experiments.">
<style>
/* ====== Penn-inspired palette & tokens (not official branding) ====== */
:root{
  --penn-blue:#011F5B;     /* deep academic blue */
  --penn-red:#990000;      /* accent red */
  --ink:#0b1220;           /* body text */
  --muted:#5b6473;
  --paper:#ffffff;
  --paper-alt:#f6f8fb;
  --line:#e6e9f0;
  --shadow:0 8px 24px rgba(1,31,91,.08);
  --radius:16px;
  --gap:22px;
}
/* ====== Base ====== */
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{
  font-family: ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji";
  color:var(--ink); background:var(--paper); line-height:1.65;
  -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}
h1,h2,h3{font-family: Georgia, 'Times New Roman', serif; margin:0 0 .4rem}
h1{font-size:clamp(34px,5vw,52px); line-height:1.1; letter-spacing:.2px}
h2{font-size:clamp(20px,2.2vw,28px); line-height:1.2}
h3{font-size:clamp(18px,1.6vw,22px)}
p{margin:.4rem 0 1rem}
a{color:var(--penn-blue); text-decoration:none}
a:hover{text-decoration:underline}
.container{max-width:1100px; margin:0 auto; padding:0 22px}

/* ====== Header / Nav ====== */
.site-header{
  position:sticky; top:0; z-index:30;
  background:linear-gradient(0deg,rgba(255,255,255,.75),rgba(255,255,255,.85));
  backdrop-filter:saturate(160%) blur(8px);
  border-bottom:1px solid var(--line);
}
.navbar{display:flex; align-items:center; justify-content:space-between; padding:14px 0}
.brand{
  display:flex; align-items:center; gap:10px; text-decoration:none;
}
.brand-badge{
  width:34px; height:34px; border-radius:8px; box-shadow:var(--shadow);
  background:conic-gradient(from 20deg at 60% 50%, var(--penn-blue), var(--penn-blue) 60%, var(--penn-red) 61%, var(--penn-red) 100%);
}
.brand-name{font-weight:800; letter-spacing:.2px; color:var(--penn-blue)}
.nav{display:flex; gap:18px; align-items:center}
.nav a{font-weight:600; color:var(--penn-blue)}
.nav .btn{margin-left:6px}

/* ====== Buttons ====== */
.btn{
  display:inline-block; font-weight:700; letter-spacing:.2px;
  padding:10px 14px; border-radius:10px; border:1px solid var(--penn-blue);
  background:var(--penn-blue); color:#fff; box-shadow:var(--shadow);
}
.btn:hover{filter:brightness(.96)}
.btn.ghost{background:#fff; color:var(--penn-blue)}
.btn.red{background:var(--penn-red); border-color:var(--penn-red)}

/* ====== Hero ====== */
.hero{
  background:
    radial-gradient(1200px 400px at 10% -10%, rgba(1,31,91,.12), transparent 60%),
    radial-gradient(900px 360px at 120% 0%, rgba(153,0,0,.10), transparent 50%),
    linear-gradient(180deg,#fff, #fafbfe 65%);
  border-bottom:1px solid var(--line);
}
.hero-inner{display:grid; grid-template-columns:1.3fr .9fr; gap:var(--gap); padding:56px 0}
.kicker{
  font: 700 12px/1 ui-sans-serif,system-ui; letter-spacing:.18em; text-transform:uppercase;
  color:var(--penn-red); margin-bottom:10px;
}
.hero p{color:var(--muted); margin-top:10px}
.hero-cta{display:flex; gap:10px; margin-top:16px}
.hero-card{
  background:#fff; border:1px solid var(--line); border-radius:var(--radius);
  padding:16px; box-shadow:var(--shadow); align-self:start;
}
.hero-grid{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:8px}
.hero-chip{
  border:1px solid var(--line); border-left:4px solid var(--penn-blue);
  background:linear-gradient(0deg, #fff, #fefefe);
  border-radius:12px; padding:10px 12px; font-weight:600
}
.hero-chip small{display:block; color:var(--muted); font-weight:500}

/* ====== Section ====== */
.section{padding:40px 0; border-bottom:1px solid var(--line)}
.section.alt{background:var(--paper-alt)}
.overline{
  color:var(--penn-red); text-transform:uppercase; letter-spacing:.18em;
  font:700 12px/1 ui-sans-serif,system-ui; margin-bottom:10px
}
.lead{color:var(--muted); max-width:62ch}

/* ====== Projects grid ====== */
.cards{display:grid; gap:var(--gap); grid-template-columns:repeat(3,minmax(0,1fr))}
.card{
  background:#fff; border:1px solid var(--line); border-radius:var(--radius); padding:16px;
  box-shadow:var(--shadow); transition:transform .12s ease, box-shadow .12s ease;
}
.card:hover{transform:translateY(-2px); box-shadow:0 12px 28px rgba(1,31,91,.12)}
.card h3{margin-bottom:6px}
.card .meta{color:var(--muted); font-size:.92rem}

/* ====== Footer ====== */
.site-footer{padding:28px 0; color:var(--muted); text-align:center}

/* ====== Responsive ====== */
@media (max-width:900px){
  .hero-inner{grid-template-columns:1fr}
  .cards{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (max-width:620px){
  .nav{display:none} .nav.show{display:flex; flex-direction:column; align-items:flex-start; gap:10px; padding:10px 0}
  .menu{display:inline-flex}
  .cards{grid-template-columns:1fr}
}
.menu{display:none; border:1px solid var(--line); background:#fff; border-radius:10px; padding:8px 10px; font-weight:700; color:var(--penn-blue)}
/* playful underline accent */
a.underline{background:linear-gradient(120deg, rgba(153,0,0,.18), rgba(1,31,91,.18)); background-size:0 2px; background-repeat:no-repeat; background-position:0 100%; transition:background-size .25s}
a.underline:hover{background-size:100% 2px}
</style>
</head>
<body>

<!-- ===================== Header ===================== -->
<header class="site-header">
  <div class="container navbar">
    <a class="brand" href="#top" aria-label="Home">
      <span class="brand-badge" aria-hidden="true"></span>
      <span class="brand-name">Ethan&nbsp;Wang</span>
    </a>

    <button class="menu" aria-controls="mainnav" aria-expanded="false" onclick="toggleNav()">Menu</button>
    <nav id="mainnav" class="nav">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#cv">CV</a>
      <a href="#contact" class="btn ghost">Contact</a>
    </nav>
  </div>
</header>

<!-- ===================== Hero ===================== -->
<section class="hero" id="top">
  <div class="container hero-inner">
    <div>
      <div class="kicker">Physics • Building • Writing</div>
      <h1>Ideas that fly — projects that land.</h1>
      <p class="lead">I’m Ethan, a student who loves mechanics-based physics, astronomy, and hands-on experiments. I build demos, write explainers, and turn uncertainty into something measurable.</p>
      <div class="hero-cta">
        <a class="btn red" href="#projects">See Projects</a>
        <a class="btn ghost" href="#contact">Work with me</a>
      </div>
    </div>

    <aside class="hero-card" aria-label="Highlights">
      <h3 style="margin:0 0 8px;color:var(--penn-blue)">Highlights</h3>
      <div class="hero-grid">
        <div class="hero-chip">IOAA <small>Team Canada camp</small></div>
        <div class="hero-chip">IYPT <small>Canada — Sweden</small></div>
        <div class="hero-chip">OAPT <small>Absolute Winner</small></div>
        <div class="hero-chip">Club Lead <small>Physics demos</small></div>
      </div>
    </aside>
  </div>
</section>

<!-- ===================== About ===================== -->
<section class="section" id="about">
  <div class="container">
    <div class="overline">About</div>
    <h2>From notebook to build bench.</h2>
    <p class="lead">I tinker with friction, fields, and first principles. My projects favor clear methods, error bars, and write-ups that invite others to reproduce the work.</p>
    <ul style="margin:12px 0 0; padding-left:18px; color:var(--muted)">
      <li>Based in Toronto • open to remote collab</li>
      <li>Physics, math, and writing projects</li>
      <li>Contact below</li>
    </ul>
  </div>
</section>

<!-- ===================== Projects ===================== -->
<section class="section alt" id="projects">
  <div class="container">
    <div class="overline">Projects</div>
    <h2>Recent work</h2>
    <p class="lead">Short write-ups now; code and longer reports coming soon.</p>

    <div class="cards" style="margin-top:18px">
      <article class="card">
        <h3><span class="underline">Magnetic Pendulum Map</span></h3>
        <p class="meta">Fractal basins of attraction in a 3-magnet system.</p>
        <p>Modeled with ODEs; visualized sensitive dependence and damping effects.</p>
      </article>

      <article class="card">
        <h3><span class="underline">Beer–Lambert @ 949.2 nm</span></h3>
        <p class="meta">Absorbance vs concentration for Cu(NO<sub>3</sub>)<sub>2</sub>.</p>
        <p>Prepared standards, performed linear regression, reported slope &amp; R².</p>
      </article>

      <article class="card">
        <h3><span class="underline">Vertical Spring Damping</span></h3>
        <p class="meta">Fit x(t)=A e<sup>−γt</sup>cos(ωt+φ) to estimate γ.</p>
        <p>Compared model and measurement; notes on instrument error.</p>
      </article>
    </div>
  </div>
</section>

<!-- ===================== Resume ===================== -->
<section class="section" id="resume">
  <div class="container">
    <div class="overline">Resume</div>
    <h2>Snapshot</h2>
    <p class="lead">Add your PDF later, or keep this as a quick HTML overview.</p>
    <ul style="margin:12px 0 0; padding-left:18px">
      <li><strong>Education:</strong> St. Robert CHS (IB)</li>
      <li><strong>Awards:</strong> IOAA, IYPT Canada, OAPT Absolute Winner</li>
      <li><strong>Focus:</strong> Mechanics, astronomy, explanatory writing</li>
    </ul>
  </div>
</section>

<!-- ===================== CV ===================== -->
<section class="section alt" id="cv">
  <div class="container">
    <div class="overline">CV</div>
    <h2>Academic CV</h2>
    <p class="lead">When you’re ready, link an external PDF or page. This single-file version keeps it simple.</p>
  </div>
</section>

<!-- ===================== Contact ===================== -->
<section class="section" id="contact">
  <div class="container">
    <div class="overline">Contact</div>
    <h2>Say hello</h2>
    <p>Email: <a href="mailto:ethanw5667@gmail.com"><strong>ethanw5667@gmail.com</strong></a></p>
    <p>GitHub: <a href="https://github.com/ethan5667">github.com/ethan5667</a></p>
  </div>
</section>

<!-- ===================== Footer ===================== -->
<footer class="site-footer">
  <div class="container">
    © <span id="year"></span> Ethan Wang
  </div>
</footer>

<script>
  // Year + tiny mobile menu
  document.getElementById('year').textContent = new Date().getFullYear();
  function toggleNav(){
    const nav = document.getElementById('mainnav');
    const btn = document.querySelector('.menu');
    const showing = nav.classList.toggle('show');
    btn.setAttribute('aria-expanded', showing ? 'true' : 'false');
  }
</script>
</body>
</html>
