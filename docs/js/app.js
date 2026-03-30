/**
 * Knowledgement — app.js
 * SPA que carga fragmentos HTML pre-generados desde docs/content/
 */

// ============================================================
// Estado global
// ============================================================
let currentFile = null;
const allPages = [];   // Lista plana para búsqueda

// ============================================================
// Construcción de la navegación
// ============================================================
function buildNav() {
  const navTree = document.getElementById('navTree');
  navTree.innerHTML = '';

  SITE_CONFIG.nav.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'nav-section';
    if (section.id) sectionDiv.dataset.sectionId = section.id;

    const header = document.createElement('div');
    header.className = 'nav-section-header';
    header.innerHTML =
      `<span class="nav-section-icon">${section.icon || ''}</span>` +
      `<span class="nav-section-title">${section.section}</span>`;
    sectionDiv.appendChild(header);

    const list = document.createElement('ul');
    list.className = 'nav-items';
    section.items.forEach(item => list.appendChild(createNavItem(item)));
    sectionDiv.appendChild(list);

    navTree.appendChild(sectionDiv);
  });
}

function createNavItem(item, isChild = false) {
  const li = document.createElement('li');
  li.className = 'nav-item' + (isChild ? ' nav-child' : '');

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const link = document.createElement('div');
  link.className = 'nav-link' + (hasChildren ? ' has-children' : '');
  if (item.file) {
    link.dataset.file = item.file;
    link.setAttribute('role', 'button');
    link.setAttribute('tabindex', '0');
  }

  link.innerHTML =
    (isChild ? '' : `<span class="nav-item-icon">${item.icon || '📄'}</span>`) +
    `<span class="nav-item-title">${item.title}</span>` +
    (hasChildren ? '<span class="nav-arrow">&#9658;</span>' : '');

  link.addEventListener('click', () => {
    if (item.file) navigateTo(item.file);
    if (hasChildren) li.classList.toggle('open');
  });

  link.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); link.click(); }
  });

  li.appendChild(link);

  if (hasChildren) {
    const childList = document.createElement('ul');
    childList.className = 'nav-children';
    item.children.forEach(child => childList.appendChild(createNavItem(child, true)));
    li.appendChild(childList);
  }

  return li;
}

// ============================================================
// Lista plana para búsqueda
// ============================================================
function flattenPages() {
  SITE_CONFIG.nav.forEach(section => {
    section.items.forEach(item => {
      if (item.file) allPages.push({ title: item.title, file: item.file, section: section.section });
      if (item.children) {
        item.children.forEach(child => {
          if (child.file) allPages.push({
            title: child.title, file: child.file,
            section: section.section, parent: item.title
          });
        });
      }
    });
  });
}

// ============================================================
// Enrutamiento por hash
// ============================================================
function handleRoute() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/') && hash.length > 2) {
    loadContent(decodeURIComponent(hash.slice(2)));
  } else {
    showWelcome();
  }
}

function navigateTo(filePath) {
  window.location.hash = '/' + filePath;
  closeSidebar();
}

// ============================================================
// Carga e inyección de HTML
// ============================================================
async function loadContent(filePath) {
  currentFile = filePath;

  const contentInner = document.getElementById('contentInner');
  contentInner.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

  try {
    const encoded = filePath.split('/').map(s => encodeURIComponent(decodeURIComponent(s))).join('/');
    const res = await fetch(encoded);

    if (!res.ok) throw new Error(`HTTP ${res.status} — ${res.statusText}`);

    const html = await res.text();

    // Inyectar el fragmento HTML
    contentInner.innerHTML = html;

    // Syntax highlighting en bloques de código
    contentInner.querySelectorAll('pre code').forEach(block => {
      hljs.highlightElement(block);
    });

    // Convertir links HTML internos en navegación SPA
    fixInternalLinks(contentInner, filePath);

    // Scroll al inicio
    document.getElementById('content').scrollTop = 0;

    // Marcar activo en la nav
    updateActiveNav(filePath);

  } catch (err) {
    contentInner.innerHTML = `
      <div class="error-message">
        <div class="error-icon">&#9888;</div>
        <h2>No se pudo cargar el contenido</h2>
        <p>${err.message}</p>
        <p class="error-path">Ruta: <code>${filePath}</code></p>
      </div>`;
  }
}

/**
 * Convierte enlaces a archivos .html relativos en navegación por hash,
 * y abre los externos en nueva pestaña.
 */
function fixInternalLinks(container, currentFilePath) {
  const dir = currentFilePath.split('/').slice(0, -1).join('/');

  container.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;

    if (href.startsWith('http://') || href.startsWith('https://')) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      return;
    }

    // Enlace interno a otro .html
    const resolved = dir ? dir + '/' + href : href;
    a.setAttribute('href', '#/' + resolved);
    a.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(resolved);
    });
  });
}

// ============================================================
// Pantalla de bienvenida
// ============================================================
function showWelcome() {
  currentFile = null;
  updateActiveNav(null);

  const cards = SITE_CONFIG.nav.map(section => {
    const titles = section.items.map(i => i.title).join(', ');
    const firstFile = section.items.find(i => i.file)?.file || '';
    return `
      <div class="welcome-card" onclick="navigateTo('${firstFile.replace(/'/g, "\\'")}')">
        <div class="welcome-card-header">
          <span class="welcome-card-icon">${section.icon || '&#128193;'}</span>
          <span class="welcome-card-title">${section.section}</span>
        </div>
        <div class="welcome-card-items">${titles}</div>
      </div>`;
  }).join('');

  document.getElementById('contentInner').innerHTML = `
    <div class="welcome">
      <div class="welcome-logo">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      </div>
      <h1>${SITE_CONFIG.title}</h1>
      <p class="welcome-desc">${SITE_CONFIG.description}</p>
      <div class="welcome-grid">${cards}</div>
    </div>`;
}

// ============================================================
// Estado activo en la navegación
// ============================================================
function updateActiveNav(filePath) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const isActive = filePath && link.dataset.file === filePath;
    link.classList.toggle('active', !!isActive);

    if (isActive) {
      const parentLi = link.closest('.nav-child')?.parentElement?.closest('.nav-item');
      if (parentLi) parentLi.classList.add('open');
    }
  });
}

// ============================================================
// Búsqueda
// ============================================================
function handleSearch(e) {
  const q = e.target.value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  const navTree   = document.getElementById('navTree');

  if (!q) {
    resultsEl.classList.add('hidden');
    resultsEl.innerHTML = '';
    navTree.style.display = '';
    return;
  }

  navTree.style.display = 'none';
  resultsEl.classList.remove('hidden');

  const hits = allPages.filter(p =>
    p.title.toLowerCase().includes(q) ||
    (p.parent && p.parent.toLowerCase().includes(q))
  );

  if (!hits.length) {
    resultsEl.innerHTML = `<div class="search-no-results">Sin resultados para <em>${q}</em></div>`;
    return;
  }

  resultsEl.innerHTML = hits.map(p => `
    <div class="search-result" onclick="navigateTo('${p.file.replace(/'/g, "\\'")}')">
      <div class="search-result-title">${highlight(p.title, q)}</div>
      <div class="search-result-meta">${p.parent ? p.parent + ' &middot; ' : ''}${p.section}</div>
    </div>`).join('');
}

function highlight(text, query) {
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return text.slice(0, idx) +
    `<mark style="background:rgba(99,102,241,.25);color:inherit;border-radius:2px">${text.slice(idx, idx + query.length)}</mark>` +
    text.slice(idx + query.length);
}

// ============================================================
// Menú mobile
// ============================================================
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('visible');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('visible');
}

// ============================================================
// Atajo de teclado Ctrl+K
// ============================================================
function setupShortcuts() {
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const input = document.getElementById('searchInput');
      input.focus();
      input.select();
    }
    if (e.key === 'Escape') {
      const input = document.getElementById('searchInput');
      if (document.activeElement === input) {
        input.blur();
        input.value = '';
        document.getElementById('searchResults').classList.add('hidden');
        document.getElementById('navTree').style.display = '';
      }
    }
  });
}

// ============================================================
// Inicialización
// ============================================================
function init() {
  document.title = SITE_CONFIG.title;
  document.getElementById('githubLink').href = SITE_CONFIG.githubUrl;

  document.getElementById('homeLink').addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, '', window.location.pathname);
    showWelcome();
  });

  buildNav();
  flattenPages();
  setupShortcuts();

  window.addEventListener('hashchange', handleRoute);
  document.getElementById('searchInput').addEventListener('input', handleSearch);
  document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

  handleRoute();
}

document.addEventListener('DOMContentLoaded', init);
