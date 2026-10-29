/* Accessible mobile navigation and back-to-top utility. */
(() => {
  'use strict';
  const setupNavigation = () => {
    const header = document.querySelector('header');
    if (!header) return;
    const nav = header.querySelector('nav[aria-label="Main navigation"], nav.nav-links, nav.nav, nav');
    if (!nav || nav.dataset.libraryEnhanced === 'true') return;
    nav.dataset.libraryEnhanced = 'true';
    nav.classList.add('library-nav-collapsible');
    if (!nav.id) nav.id = 'library-main-navigation';
    if (!nav.hasAttribute('aria-label')) nav.setAttribute('aria-label', 'Main navigation');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'library-mobile-menu-button';
    button.setAttribute('aria-controls', nav.id);
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span aria-hidden="true">☰</span><span>Menu</span>';
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      button.querySelector('span:last-child').textContent = open ? 'Close menu' : 'Menu';
    });
    nav.parentNode.insertBefore(button, nav);
    const desktop = window.matchMedia('(min-width: 761px)');
    const resetForViewport = () => {
      if (desktop.matches) {
        nav.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        button.querySelector('span:last-child').textContent = 'Menu';
      }
    };
    if (desktop.addEventListener) desktop.addEventListener('change', resetForViewport);
    else if (desktop.addListener) desktop.addListener(resetForViewport);
  };
  const setupBackToTop = () => {
    if (document.querySelector('.library-back-to-top')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'library-back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.title = 'Back to top';
    button.innerHTML = '<span aria-hidden="true">↑</span><span class="library-back-to-top-label"> Top</span>';
    button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
    document.body.appendChild(button);
    let ticking = false;
    const update = () => {
      button.classList.toggle('is-visible', window.scrollY > 500);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  };
  const init = () => { setupNavigation(); setupBackToTop(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
