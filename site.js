/* Appasani MD — shared site behavior */
(function () {
  // ---- scroll reveal ----
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // ---- mobile menu ----
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    const close = document.querySelector('.mm-close');
    const open = () => { menu.classList.add('open'); document.body.style.overflow = 'hidden'; };
    const shut = () => { menu.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', shut));
  }

  // ---- active link highlight ----
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a[href]').forEach((a) => {
    const href = a.getAttribute('href').toLowerCase();
    if (href === path || (path === 'index.html' && href === 'index.html')) a.classList.add('active');
  });

  // ---- click-to-play YouTube facades ----
  document.querySelectorAll('.lite-yt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (!id) return;
      const ifr = document.createElement('iframe');
      ifr.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
      ifr.title = btn.getAttribute('aria-label') || 'Video';
      ifr.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      ifr.setAttribute('allowfullscreen', '');
      ifr.setAttribute('frameborder', '0');
      btn.replaceWith(ifr);
    });
  });
})();
