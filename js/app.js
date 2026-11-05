(() => {
  'use strict';

  const data = window.PORTFOLIO_DATA;
  if (!data) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
  const tag = (text, cls = 'tag') => `<span class="${cls}">${escapeHTML(text)}</span>`;

  // A small visual representation: not an actual system monitor or a live API.
  const art = (kind) => {
    switch (kind) {
      case 'clinical':
        return `<div class="art-inner art-clinical" aria-hidden="true"><div class="art-topline"><span>CONVERSATION_072</span><span>PROCESSING ›</span></div><div class="waveform">${Array.from({length: 29}, (_, i) => `<i style="--i:${i};--height:${18 + Math.round(Math.abs(Math.sin(i * 0.82) * Math.cos(i * .21)) * 74)}%"></i>`).join('')}</div><div class="art-clinical-bottom"><span class="art-progress"><i></i></span><span>TRANSCRIPTION → SUMMARY</span></div></div>`;
      case 'evaluation':
        return `<div class="art-inner art-evaluation" aria-hidden="true"><div class="eval-label">EVALUATION SUITE <span>RUN_018</span></div><div class="eval-rows"><span><i>✓</i> factual accuracy <b>PASS</b></span><span><i>✓</i> completeness <b>PASS</b></span><span><i>✓</i> format integrity <b>PASS</b></span><span><i class="eval-processing">⋯</i> model trace <b>CHECKING</b></span></div><div class="eval-progress"><span></span></div></div>`;
      case 'vision':
        return `<div class="art-inner art-vision" aria-hidden="true"><div class="vision-corner tl"></div><div class="vision-corner tr"></div><div class="vision-corner bl"></div><div class="vision-corner br"></div><div class="vision-target"><span class="vision-box vision-box-a"></span><span class="vision-box vision-box-b"></span><span class="vision-dot"></span></div><span class="vision-label">OBJECT DETECTION <b>·</b> INFERENCE</span><span class="vision-number">1.2M / WK</span></div>`;
      case 'quality':
        return `<div class="art-inner art-quality" aria-hidden="true"><div class="quality-header">MODEL VALIDATION <span>DATASET / 04</span></div><div class="quality-grid">${Array.from({length:12}, (_,i) => `<span class="quality-cell ${[2,5,9].includes(i)?'quality-highlight':''}"><i></i></span>`).join('')}</div><div class="quality-label">RARE SCENARIOS <strong>+31%</strong></div></div>`;
      default:
        return `<div class="art-inner art-booking" aria-hidden="true"><div class="booking-icon">⌘</div><div class="booking-connection"><span></span><span></span><span></span></div><div class="booking-card"><span>TRANSACTION</span><b>#ORD-0241</b><small>✓ CONFIRMED</small></div><div class="booking-caption">IDEMPOTENT · VALIDATED · RELIABLE</div></div>`;
    }
  };

  const projectCard = (project, index) => {
    const wide = index === 0 ? ' project-card-featured' : '';
    return `<article class="project-card${wide} reveal" data-categories="${project.filters.join(' ')}">
      <div class="project-art art-${escapeHTML(project.art)}">${art(project.art)}<div class="art-category">${escapeHTML(project.category)}</div></div>
      <div class="project-body"><div class="project-meta"><span>${escapeHTML(project.number)} / 05</span><span>${escapeHTML(project.company)}</span></div>
      <h3>${escapeHTML(project.title)}</h3><p>${escapeHTML(project.description)}</p>
      <div class="project-outcome"><strong>${escapeHTML(project.spotlight)}</strong><span>${escapeHTML(project.spotlightLabel)}</span></div>
      <div class="project-taglist">${project.tags.map((t) => tag(t)).join('')}</div>
      <button type="button" class="case-link" data-project="${escapeHTML(project.id)}" aria-label="Read case study: ${escapeHTML(project.title)}">Explore case study <span aria-hidden="true">↗</span></button></div></article>`;
  };

  $('#projects-grid').innerHTML = data.projects.map(projectCard).join('');
  $('#skills-grid').innerHTML = data.skills.map((s) => `<article class="skill-card reveal"><div class="skill-top"><span class="skill-number">${s.number}</span><span class="skill-icon" aria-hidden="true">${s.icon}</span></div><h3>${escapeHTML(s.title)}</h3><p>${escapeHTML(s.desc)}</p><ul>${s.points.map((p) => `<li>${escapeHTML(p)}</li>`).join('')}</ul><div class="skill-tags">${s.tags.map((t)=>tag(t)).join('')}</div></article>`).join('');
  $('#experience-list').innerHTML = data.experience.map((e) => `<article class="experience-item reveal"><div class="exp-time"><span class="exp-dot" aria-hidden="true"></span><span>${escapeHTML(e.range)}</span><small>${escapeHTML(e.dates)}</small></div><div class="exp-main"><div class="exp-head"><div><p class="exp-location">${escapeHTML(e.location)}</p><h3>${escapeHTML(e.company)}</h3><h4>${escapeHTML(e.role)}</h4></div><span class="exp-symbol" aria-hidden="true">↗</span></div><p class="exp-summary">${escapeHTML(e.summary)}</p><ul class="exp-points">${e.bullets.map((b) => `<li>${escapeHTML(b)}</li>`).join('')}</ul><div class="exp-tags">${e.tags.map((t)=>tag(t)).join('')}</div></div></article>`).join('');
  $('#principle-list').innerHTML = data.principles.map((p) => `<article class="principle reveal"><span class="principle-number">${p.number}</span><div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.desc)}</p></div><span class="principle-arrow" aria-hidden="true">↗</span></article>`).join('');

  const techContent = data.technologies.map((t) => `<span class="tech-name">${escapeHTML(t)}</span><span class="tech-star" aria-hidden="true">✳</span>`).join('');
  $('#marquee-track').innerHTML = `<div class="ticker-group">${techContent}</div><div class="ticker-group" aria-hidden="true">${techContent}</div>`;

  // Reveal on scroll with a reduced-motion and older-browser fallback.
  const reveals = $$('.reveal');
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  // Project filters. Cards are hidden with the HTML hidden attribute.
  $$('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      $$('.filter-btn').forEach((b) => {
        const isActive = b === button;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-pressed', String(isActive));
      });
      $$('.project-card').forEach((card) => {
        card.hidden = selected !== 'all' && !card.dataset.categories.split(' ').includes(selected);
      });
    });
  });

  // Accessible native dialog for project case studies. No fake external demos.
  const dialog = $('#project-dialog');
  const dialogContent = $('#dialog-content');
  const closeDialog = () => dialog.close();
  $('#dialog-close').addEventListener('click', closeDialog);
  dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
  $$('.case-link').forEach((button) => {
    button.addEventListener('click', () => {
      const project = data.projects.find((p) => p.id === button.dataset.project);
      if (!project) return;
      dialogContent.innerHTML = `<div class="dialog-header"><span class="section-index">CASE STUDY / ${escapeHTML(project.number)}</span><span>${escapeHTML(project.dates)}</span></div>
        <p class="dialog-category">${escapeHTML(project.category)} · ${escapeHTML(project.company)}</p>
        <h2 id="dialog-title">${escapeHTML(project.title)}</h2><p class="dialog-intro">${escapeHTML(project.description)}</p>
        <div class="dialog-metric"><strong>${escapeHTML(project.spotlight)}</strong><span>${escapeHTML(project.spotlightLabel)}</span></div>
        <section><h3>The challenge</h3><p>${escapeHTML(project.challenge)}</p></section>
        <section><h3>My contributions</h3><ul>${project.contribution.map((c) => `<li>${escapeHTML(c)}</li>`).join('')}</ul></section>
        <section><h3>Measurable impact</h3><ul>${project.outcomes.map((o) => `<li>${escapeHTML(o)}</li>`).join('')}</ul></section>
        <div class="dialog-tags">${project.tags.map((t)=>tag(t)).join('')}</div><p class="dialog-note">${escapeHTML(project.note)}</p>`;
      dialog.showModal();
    });
  });

  // Architecture diagram details are explanatory rather than a live dashboard.
  $$('.pipeline-node').forEach((button) => {
    button.addEventListener('click', () => {
      $$('.pipeline-node').forEach((node) => {
        const selected = node === button;
        node.classList.toggle('is-selected', selected);
        node.setAttribute('aria-pressed', String(selected));
      });
      $('#node-description').innerHTML = `<span class="detail-signal" aria-hidden="true">↳</span> ${escapeHTML(data.pipeline[button.dataset.node])}`;
    });
  });

  // Ticker is paused by default for people who request reduced motion.
  const tickerControl = $('#ticker-control');
  if (reducedMotion) $('#marquee').classList.add('paused');
  tickerControl.addEventListener('click', () => {
    const paused = $('#marquee').classList.toggle('paused');
    tickerControl.setAttribute('aria-pressed', String(paused));
    tickerControl.innerHTML = paused ? 'Play <span aria-hidden="true">▶</span>' : 'Pause <span aria-hidden="true">Ⅱ</span>';
    tickerControl.setAttribute('aria-label', paused ? 'Play technology ticker' : 'Pause technology ticker');
  });
  if (reducedMotion) {
    tickerControl.setAttribute('aria-pressed', 'true');
    tickerControl.innerHTML = 'Play <span aria-hidden="true">▶</span>';
    tickerControl.setAttribute('aria-label', 'Play technology ticker');
  }

  // Mobile navigation.
  const menuToggle = $('#menu-toggle');
  const mobileMenu = $('#mobile-menu');
  const setMenu = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    mobileMenu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  };
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  $$('#mobile-menu a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });

  // Navigation highlighting + progress bar.
  const navTargets = $$('.desktop-nav a');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) navTargets.forEach((link) => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
      });
    }, { rootMargin: '-28% 0px -58% 0px' });
    ['home', 'work', 'expertise', 'experience', 'about'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });
  }
  let scrollQueued = false;
  window.addEventListener('scroll', () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      $('#scroll-progress').style.width = `${maxScroll > 0 ? Math.min(100, Math.max(0, window.scrollY / maxScroll * 100)) : 0}%`;
      $('.site-header').classList.toggle('scrolled', window.scrollY > 20);
      scrollQueued = false;
    });
  }, { passive: true });

  // Clipboard is an enhancement: mailto links work even if clipboard is blocked.
  $('#copy-email').addEventListener('click', async () => {
    const feedback = $('#copy-feedback');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(data.email);
      feedback.textContent = 'Email address copied.';
    } catch (_) {
      feedback.textContent = `Copy manually: ${data.email}`;
    }
  });
  $('#year').textContent = new Date().getFullYear();
})();
