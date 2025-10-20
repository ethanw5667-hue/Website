<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Joe Don — Portfolio</title>
  <meta name="description" content="Personal site for Joe Don: physics & lab projects, writing, and contact." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#ffffff; --text:#0f172a; --muted:#475569; --accent:#2563eb; --card:#f8fafc; --line:#e2e8f0;
      --shadow: 0 10px 30px rgba(2,6,23,.08);
    }
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;}
    a{color:var(--accent);text-decoration:none}
    img{max-width:100%;display:block}
    header{position:sticky;top:0;backdrop-filter:saturate(180%) blur(8px);background:rgba(255,255,255,.7);border-bottom:1px solid var(--line);z-index:20}
    .wrap{max-width:1000px;margin:0 auto;padding:0 20px}
    .nav{display:flex;align-items:center;justify-content:space-between;height:64px}
    .nav a{margin-left:20px;font-weight:600;color:var(--muted)}
    .btn{display:inline-flex;align-items:center;gap:10px;background:var(--text);color:#fff;padding:12px 18px;border-radius:12px;box-shadow:var(--shadow);transition:transform .08s ease}
    .btn:hover{transform:translateY(-1px)}
    .hero{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:center;padding:72px 0 28px}
    .eyebrow{letter-spacing:.2em;text-transform:uppercase;color:var(--muted);font-weight:700;font-size:.8rem}
    h1{font-family:"Playfair Display",serif;font-weight:700;font-size:clamp(2rem,4vw,3.4rem);line-height:1.05;margin:.4rem 0 1rem}
    p.lead{font-size:1.12rem;color:var(--muted)}
    .card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:22px;box-shadow:var(--shadow)}
    .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:18px}
    .col-6{grid-column:span 6}
    .col-12{grid-column:span 12}
    section{padding:56px 0}
    h2{font-family:"Playfair Display",serif;font-size:1.8rem;margin:0 0 18px}
    .kpi{display:flex;gap:26px;margin:18px 0}
    .kpi div{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 16px;box-shadow:var(--shadow)}
    .mono{font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
    footer{padding:36px 0;border-top:1px solid var(--line);color:var(--muted);font-size:.95rem}
    .sig-line{height:4px;background:#111;border-radius:2px;margin-top:10px}
    .tag{display:inline-block;background:#eef2ff;color:#4338ca;border:1px solid #c7d2fe;padding:4px 10px;border-radius:999px;font-size:.8rem;margin:0 8px 8px 0}
    .project{display:flex;gap:16px;align-items:flex-start;border:1px solid var(--line);border-radius:16px;padding:16px;background:#fff;box-shadow:var(--shadow)}
    .project h3{margin:0}
    @media (max-width:860px){
      .hero{grid-template-columns:1fr}
      .col-6{grid-column:span 12}
    }
  </style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <strong>Joe Don</strong>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <section class="hero">
      <div>
        <div class="eyebrow">Physics • Lab • Builder</div>
        <h1>Turning curiosity into experiments.</h1>
        <p class="lead">I’m <strong>Joe Don</strong>, a physics‑minded tinkerer who likes benches that hum, oscilloscopes that glow, and data that actually means something. Here’s a clean snapshot of my work and how to reach me.</p>
        <div style="margin:20px 0 26px;display:flex;gap:12px;flex-wrap:wrap">
          <a class="btn" href="#projects">See projects</a>
          <a class="btn" href="#contact" style="background:var(--accent)">Contact</a>
        </div>
        <div class="kpi">
          <div><div class="mono" style="font-size:1.1rem">10+ rigs</div><div class="muted">built & calibrated</div></div>
          <div><div class="mono" style="font-size:1.1rem">5 papers</div><div class="muted">in progress/notes</div></div>
          <div><div class="mono" style="font-size:1.1rem">∞</div><div class="muted">failed trials → insight</div></div>
        </div>
      </div>
      <div class="card">
        <div style="font-family:'Playfair Display',serif;font-size:2.4rem;letter-spacing:.02em">Joe Don</div>
        <div class="sig-line"></div>
        <div style="margin-top:12px;color:var(--muted)">signature line</div>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div class="grid">
        <div class="col-6">
          <article class="project">
            <div class="mono" aria-hidden="true">01</div>
            <div>
              <h3>Interferometer on a Budget</h3>
              <p class="muted">Built a Michelson interferometer using off‑the‑shelf parts; measured wavelength drift and air index changes. Wrote processing code and uncertainty analysis.</p>
              <div>
                <span class="tag">optics</span>
                <span class="tag">python</span>
                <span class="tag">data</span>
              </div>
            </div>
          </article>
        </div>
        <div class="col-6">
          <article class="project">
            <div class="mono">02</div>
            <div>
              <h3>Oscilloscope Damped‑Oscillator Fit</h3>
              <p class="muted">Captured decay curves from a mass‑spring system and fit <span class="mono">x(t)=A e^{-\gamma t}\cos(\omega t+\phi)</span>. Produced nice residual plots and R².</p>
              <div>
                <span class="tag">mechanics</span>
                <span class="tag">arduino</span>
                <span class="tag">least‑squares</span>
              </div>
            </div>
          </article>
        </div>
        <div class="col-6">
          <article class="project">
            <div class="mono">03</div>
            <div>
              <h3>Calibration Rig: Load Cell + ADC</h3>
              <p class="muted">Designed a compact rig to calibrate spring constants and verify Hooke’s law; temp compensation and error bars that don’t lie.</p>
              <div>
                <span class="tag">sensors</span>
                <span class="tag">metrology</span>
                <span class="tag">circuits</span>
              </div>
            </div>
          </article>
        </div>
        <div class="col-6">
          <article class="project">
            <div class="mono">04</div>
            <div>
              <h3>Star‑Plate Solving Notes</h3>
              <p class="muted">Notebook from an astrophotography sprint: plate‑solve crop, extract RA/Dec, and annotate constellations. Clean, reproducible workflow.</p>
              <div>
                <span class="tag">astro</span>
                <span class="tag">WCS</span>
                <span class="tag">CLI</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="about">
      <h2>About</h2>
      <div class="card">
        <p>I like experiments that fit on a bench and teach more than a lecture. My happy place is between a breadboard and a whiteboard, turning a question into a setup, a setup into a dataset, and a dataset into an answer.</p>
        <p class="muted">This site is a single HTML file you can drop onto GitHub Pages. Edit the text, add links to repos, and ship.</p>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <div class="grid">
        <div class="col-12 card">
          <p><strong>Email:</strong> <a href="mailto:you@example.com">you@example.com</a> &nbsp;•&nbsp; <strong>GitHub:</strong> <a href="#">github.com/your-handle</a> &nbsp;•&nbsp; <strong>LinkedIn:</strong> <a href="#">/in/your-handle</a></p>
          <p class="muted">Replace the placeholders above with your real links.</p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap">© <span id="year"></span> Joe Don — Built with vanilla HTML/CSS. Hosted on GitHub Pages.</div>
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
