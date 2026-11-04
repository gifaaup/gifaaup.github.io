/**
 * GIFAA — Motor del Blog Estático en Markdown
 * Compatible tanto con protocolos http/https (servidor/GitHub Pages)
 * como con protocolo file:/// (navegación directa en local sin servidor).
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('blog-container');
  if (!container) return;

  const currentPostSlug = getCurrentPostSlug();

  loadBlogPosts()
    .then(posts => {
      if (currentPostSlug) {
        const found = posts.find(p => p.slug === currentPostSlug);
        if (found) {
          renderSinglePost(found, container);
        } else {
          renderPostNotFound(container);
        }
      } else {
        renderPostList(posts, container);
      }
    })
    .catch(err => {
      container.innerHTML = `
        <div class="empty-state">
          <h3>No se pudieron cargar los comunicados</h3>
          <p style="color:var(--text-muted);">${err.message}</p>
        </div>
      `;
    });

  // Escuchar cambios de historial en navegador (adelante / atrás / hash)
  window.addEventListener('popstate', () => {
    const slug = getCurrentPostSlug();
    loadBlogPosts().then(posts => {
      if (slug) {
        const found = posts.find(p => p.slug === slug);
        if (found) renderSinglePost(found, container);
      } else {
        renderPostList(posts, container);
      }
    });
  });

  window.addEventListener('hashchange', () => {
    const slug = getCurrentPostSlug();
    loadBlogPosts().then(posts => {
      if (slug) {
        const found = posts.find(p => p.slug === slug);
        if (found) renderSinglePost(found, container);
      } else {
        renderPostList(posts, container);
      }
    });
  });
});

/**
 * Obtiene el slug del post actual por parámetro ?post=slug o por hash #post=slug
 */
function getCurrentPostSlug() {
  const urlParams = new URLSearchParams(window.location.search);
  const fromQuery = urlParams.get('post');
  if (fromQuery) return fromQuery;

  // Fallback con hash para compatibilidad con file:///
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (hash.startsWith('post=')) {
    return hash.split('=')[1];
  } else if (hash) {
    return hash;
  }
  return null;
}

/**
 * Carga los posts desde window.GIFAA_BLOG_DATA o mediante fetch
 */
function loadBlogPosts() {
  // 1. Prioridad: Datos embebidos / precargados (inmunes a bloqueos CORS en file:///)
  if (window.GIFAA_BLOG_DATA && Array.isArray(window.GIFAA_BLOG_DATA.posts)) {
    return Promise.resolve(window.GIFAA_BLOG_DATA.posts);
  }

  // 2. Fallback: Fetch a blog/posts.json
  return fetch('blog/posts.json')
    .then(response => {
      if (!response.ok) throw new Error('No se pudo cargar blog/posts.json');
      return response.json();
    })
    .then(data => data.posts || []);
}

/**
 * Carga el contenido Markdown de un post específico
 */
function loadPostContent(post) {
  // 1. Si el contenido ya fue precargado
  if (post.content && typeof post.content === 'string') {
    return Promise.resolve(post.content);
  }

  // 2. Fetch al archivo .md correspondiente
  return fetch('blog/' + post.file).then(res => {
    if (!res.ok) throw new Error('No se pudo encontrar el archivo Markdown: ' + post.file);
    return res.text();
  });
}

function renderPostList(posts, container) {
  if (!posts.length) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No hay comunicados publicados aún.</p>
      </div>
    `;
    return;
  }

  // Ordenar cronológicamente (más reciente primero)
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const html = `
    <div class="blog-list-header">
      <h2 class="section-title">Comunicados y Publicaciones Recientes</h2>
      <p class="section-lead">Noticias oficiales, notas técnicas y artículos de divulgación científica redactados en Markdown por miembros del grupo.</p>
    </div>
    <div class="blog-feed">
      ${sorted.map(post => `
        <article class="blog-entry-card">
          <div class="blog-entry-meta">
            <span class="badge badge-navy">${post.category || 'General'}</span>
            <span class="blog-entry-date">${formatDate(post.date)}</span>
            <span class="blog-entry-time">Lectura: ${post.readingTime || '4 min'}</span>
          </div>
          <h3 class="blog-entry-title">
            <a href="blog.html?post=${post.slug}" onclick="navigateToPost(event, '${post.slug}')">${post.title}</a>
          </h3>
          <p class="blog-entry-summary">${post.summary}</p>
          <div class="blog-entry-footer">
            <span class="blog-entry-author">Por <strong>${post.author}</strong></span>
            <a href="blog.html?post=${post.slug}" class="blog-entry-cta" onclick="navigateToPost(event, '${post.slug}')">
              Leer artículo completo →
            </a>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
}

function renderSinglePost(post, container) {
  container.innerHTML = `
    <div class="blog-loading">
      <div class="spinner"></div>
      <p>Cargando artículo...</p>
    </div>
  `;

  loadPostContent(post)
    .then(markdown => {
      const contentHtml = window.marked ? window.marked.parse(markdown) : simpleMarkdownFallback(markdown);

      container.innerHTML = `
        <div class="blog-reader-wrap">
          <button class="btn btn-secondary blog-back-btn" onclick="navigateBackToList(event)">
            ← Volver a todos los comunicados
          </button>

          <header class="blog-reader-header">
            <div class="blog-entry-meta">
              <span class="badge badge-crimson">${post.category || 'General'}</span>
              <span class="blog-entry-date">${formatDate(post.date)}</span>
              <span class="blog-entry-time">${post.readingTime || '4 min'}</span>
            </div>
            <h1 class="blog-reader-title">${post.title}</h1>
            <p class="blog-reader-author">Autor: <strong>${post.author}</strong> · Universidad de Panamá</p>
          </header>

          <div class="markdown-body">
            ${contentHtml}
          </div>

          <div class="blog-reader-footer">
            <button class="btn btn-secondary" onclick="navigateBackToList(event)">
              ← Volver al listado de artículos
            </button>
            <a href="ingresar.html" class="btn btn-primary">
              Postularse al Semillero GIFAA →
            </a>
          </div>
        </div>
      `;

      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(err => {
      container.innerHTML = `
        <div class="empty-state">
          <p>Error cargando el contenido del artículo: ${err.message}</p>
          <button class="btn btn-secondary" onclick="navigateBackToList(event)">← Volver al listado</button>
        </div>
      `;
    });
}

function renderPostNotFound(container) {
  container.innerHTML = `
    <div class="empty-state">
      <h3>Artículo no encontrado</h3>
      <p>El comunicado solicitado no existe o ha sido reubicado.</p>
      <button class="btn btn-secondary" onclick="navigateBackToList(event)">← Volver al blog</button>
    </div>
  `;
}

function navigateToPost(event, slug) {
  if (event) event.preventDefault();
  try {
    history.pushState({ slug }, '', `blog.html?post=${slug}`);
  } catch (e) {
    // Modo file:/// en navegadores con restricciones de pushState
    window.location.hash = `post=${slug}`;
  }

  loadBlogPosts().then(posts => {
    const post = posts.find(p => p.slug === slug);
    const container = document.getElementById('blog-container');
    if (post && container) renderSinglePost(post, container);
  });
}

function navigateBackToList(event) {
  if (event) event.preventDefault();
  try {
    history.pushState({}, '', 'blog.html');
  } catch (e) {
    window.location.hash = '';
  }

  loadBlogPosts().then(posts => {
    const container = document.getElementById('blog-container');
    if (container) renderPostList(posts, container);
  });
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const [y, m, d] = dateStr.split('-');
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const monthIdx = parseInt(m, 10) - 1;
  return `${parseInt(d, 10)} de ${months[monthIdx] || m}, ${y}`;
}

function simpleMarkdownFallback(md) {
  return md
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\n$/gim, '<br />');
}
