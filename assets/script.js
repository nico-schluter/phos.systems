// Phos Systems — script
(function() {
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Mobile nav toggle
  const nav = $('[data-nav]');
  const navToggle = $('[data-nav-toggle]');
  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close on link click (mobile)
    $$('.nav a').forEach(a => a.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }));
  }

  // Smooth scroll for in-page anchors
  $$('.nav a[href^="#"], .btn[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id && id.startsWith('#')) {
        const el = $(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Populate year
  const year = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(year);

  // UTM and context fields
  const params = new URLSearchParams(window.location.search);
  const setVal = (id, v) => { const el = document.getElementById(id); if (el) el.value = v || ''; };
  setVal('page_url', window.location.href);
  setVal('utm_source', params.get('utm_source'));
  setVal('utm_medium', params.get('utm_medium'));
  setVal('utm_campaign', params.get('utm_campaign'));
  setVal('ref', document.referrer);

  // Ensure redirect stays on current origin for thank-you
  const nextField = document.querySelector('input[name="_next"]');
  if (nextField) {
    try {
      nextField.value = `${window.location.origin}${window.location.pathname}#thanks`;
    } catch {}
  }

  // Form: disable button on submit for better UX
  const form = document.querySelector('.consult-form');
  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('.btn-submit');
      if (btn) {
        btn.setAttribute('disabled', 'true');
        const label = btn.querySelector('.btn-label');
        if (label) label.textContent = 'Sending…';
      }
    });
  }

  // Thanks section toggler if URL has #thanks (useful after redirect)
  if (window.location.hash === '#thanks') {
    const thanks = document.getElementById('thanks');
    if (thanks) thanks.hidden = false;
  }
})();
