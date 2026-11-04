/**
 * GIFAA — JavaScript Principal
 * Gestión de navegación responsive, tema dual Claro/Oscuro y accesibilidad
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  highlightActiveNavLink();
});

/* ==========================================================================
   GESTIÓN DE TEMA DUAL (CLARO / OSCURO)
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('gifaa-theme');
  // Por requerimiento formal, el tema por defecto es 'light'
  const theme = savedTheme ? savedTheme : 'light';
  applyTheme(theme);

  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('gifaa-theme', nextTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  
  const sunIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const moonIcon = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  themeToggles.forEach(btn => {
    if (theme === 'dark') {
      btn.innerHTML = `${sunIcon}<span class="theme-label-sr">Cambiar a modo claro</span>`;
      btn.setAttribute('title', 'Cambiar a modo claro');
      btn.setAttribute('aria-label', 'Cambiar a modo claro');
    } else {
      btn.innerHTML = `${moonIcon}<span class="theme-label-sr">Cambiar a modo oscuro</span>`;
      btn.setAttribute('title', 'Cambiar a modo oscuro');
      btn.setAttribute('aria-label', 'Cambiar a modo oscuro');
    }
  });
}

/* ==========================================================================
   MENÚ MÓVIL RESPONSIVE
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    toggleBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-open');
  });

  // Cerrar al hacer clic en un enlace del menú móvil
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('is-active');
      mobileNav.classList.remove('is-open');
    });
  });

  // Cerrar al redimensionar a pantalla de escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && mobileNav.classList.contains('is-open')) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.classList.remove('is-active');
      mobileNav.classList.remove('is-open');
    }
  });
}

/* ==========================================================================
   RESALTADO DE ENLACE ACTIVO
   ========================================================================== */
function highlightActiveNavLink() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const targetPage = href.split('?')[0];

    if (targetPage === page || (page === '' && targetPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
