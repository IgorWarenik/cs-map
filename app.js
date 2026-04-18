/* ===== CS MAP — Interactive Graph ===== */

(function () {
  'use strict';

  // ── Theme toggle ──────────────────────────────────────────────
  const toggleBtn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let currentTheme = root.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  function updateThemeIcon() {
    if (!toggleBtn) return;
    toggleBtn.innerHTML = currentTheme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    toggleBtn.setAttribute('aria-label', `Переключить на ${currentTheme === 'dark' ? 'светлую' : 'тёмную'} тему`);
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      updateThemeIcon();
      drawConnections(); // redraw with new colors
    });
  }

  // ── Layout ────────────────────────────────────────────────────
  const layer = document.getElementById('nodesLayer');
  const canvas = document.getElementById('connections');
  const ctx = canvas.getContext('2d');

  function getMapBounds() {
    const rect = layer.getBoundingClientRect();
    return { w: rect.width, h: rect.height };
  }

  function getCenter() {
    const { w, h } = getMapBounds();
    return { x: w / 2, y: h / 2 };
  }

  function getRadius() {
    const { w, h } = getMapBounds();
    const base = Math.min(w, h);
    // leave room for panel when open
    return base * 0.31;
  }

  // ── Draw connections on canvas ────────────────────────────────
  function resizeCanvas() {
    const { w, h } = getMapBounds();
    canvas.width = w;
    canvas.height = h;
  }

  function getCSSVar(name) {
    return getComputedStyle(root).getPropertyValue(name).trim();
  }

  function drawConnections() {
    resizeCanvas();
    const c = getCenter();
    const r = getRadius();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    CS_DATA.sections.forEach(s => {
      const rad = (s.angle - 90) * Math.PI / 180;
      const sx = c.x + r * Math.cos(rad);
      const sy = c.y + r * Math.sin(rad);

      // Spoke line
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(sx, sy);
      const isDark = root.getAttribute('data-theme') === 'dark';
      const nodeColor = isDark ? s.colorDark : s.color;
      ctx.strokeStyle = nodeColor + '55'; // alpha
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.lineDashOffset = 0;
      ctx.stroke();
      ctx.setLineDash([]);

      // Dot at section node
      ctx.beginPath();
      ctx.arc(sx, sy, 4, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor + '88';
      ctx.fill();
    });

    // Center node ring
    ctx.beginPath();
    ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = getCSSVar('--color-primary') + 'cc';
    ctx.fill();
  }

  // ── Build nodes ───────────────────────────────────────────────
  let activeId = null;
  const nodeEls = {};

  function buildNodes() {
    layer.innerHTML = '';
    const c = getCenter();
    const r = getRadius();
    const isDark = root.getAttribute('data-theme') === 'dark';

    // Center node
    const centerEl = document.createElement('div');
    centerEl.className = 'node node-center';
    centerEl.style.left = `${c.x}px`;
    centerEl.style.top = `${c.y}px`;
    centerEl.setAttribute('tabindex', '0');
    centerEl.setAttribute('role', 'button');
    centerEl.setAttribute('aria-label', 'Компьютерные науки — центр');
    centerEl.innerHTML = `
      <span class="node-icon" style="color:var(--color-primary)">⬡</span>
      <span class="node-label">Computer\nScience</span>
    `;

    // Pulse ring for center
    const pulse = document.createElement('div');
    pulse.className = 'node-pulse';
    pulse.style.left = `${c.x}px`;
    pulse.style.top = `${c.y}px`;
    layer.appendChild(pulse);
    layer.appendChild(centerEl);

    // Section nodes
    CS_DATA.sections.forEach(s => {
      const rad = (s.angle - 90) * Math.PI / 180;
      const nx = c.x + r * Math.cos(rad);
      const ny = c.y + r * Math.sin(rad);

      const el = document.createElement('div');
      el.className = 'node node-section';
      el.dataset.id = s.id;
      el.style.left = `${nx}px`;
      el.style.top = `${ny}px`;
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', s.title);

      const nodeColor = isDark ? s.colorDark : s.color;

      el.style.setProperty('--node-color', nodeColor);
      el.style.borderColor = nodeColor + '55';
      el.innerHTML = `
        <span class="node-icon">${s.icon}</span>
        <span class="node-label">${s.label}</span>
      `;

      // Hover: brighten border
      el.addEventListener('mouseenter', () => {
        if (activeId !== s.id) {
          el.style.borderColor = nodeColor + 'aa';
          el.querySelector('.node-icon').style.color = nodeColor;
        }
      });
      el.addEventListener('mouseleave', () => {
        if (activeId !== s.id) {
          el.style.borderColor = nodeColor + '55';
          el.querySelector('.node-icon').style.color = '';
        }
      });

      el.addEventListener('click', () => openPanel(s.id));
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(s.id); } });

      nodeEls[s.id] = el;
      layer.appendChild(el);
    });
  }

  // ── Panel ─────────────────────────────────────────────────────
  const panel = document.getElementById('panel');
  const overlay = document.getElementById('overlay');
  const panelClose = document.getElementById('panelClose');

  function openPanel(id) {
    const s = CS_DATA.sections.find(x => x.id === id);
    if (!s) return;

    // Deactivate previous
    if (activeId && nodeEls[activeId]) {
      const prev = CS_DATA.sections.find(x => x.id === activeId);
      const prevEl = nodeEls[activeId];
      prevEl.classList.remove('active');
      prevEl.style.borderColor = (prev ? ((root.getAttribute('data-theme') === 'dark' ? prev.colorDark : prev.color) + '55') : '');
      prevEl.querySelector('.node-icon').style.color = '';
      prevEl.querySelector('.node-icon').style.transform = '';
    }

    activeId = id;
    const el = nodeEls[id];
    const isDark = root.getAttribute('data-theme') === 'dark';
    const nodeColor = isDark ? s.colorDark : s.color;

    el.classList.add('active');
    el.style.borderColor = nodeColor;
    el.querySelector('.node-icon').style.color = nodeColor;

    // Fill panel
    document.getElementById('panelIcon').textContent = s.icon;
    document.getElementById('panelIcon').style.color = nodeColor;
    document.getElementById('panelIcon').style.borderColor = nodeColor + '44';
    document.getElementById('panelIcon').style.background = nodeColor + '11';
    document.getElementById('panelTitle').textContent = s.title;
    document.getElementById('panelTitle').style.color = '';
    document.getElementById('panelSubtitle').textContent = s.subtitle;
    document.getElementById('panelSubtitle').style.color = nodeColor;
    document.getElementById('panelDesc').textContent = s.description;

    // Topics
    const topicsEl = document.getElementById('panelTopics');
    topicsEl.innerHTML = `<p class="panel-topics-title">Ключевые темы</p>` +
      s.topics.map(t => `
        <div class="topic-item" style="--node-color: ${nodeColor}">
          <div class="topic-name">${t.name}</div>
          <div class="topic-desc">${t.desc}</div>
        </div>
      `).join('');

    // Links
    const linksEl = document.getElementById('panelLinks');
    linksEl.innerHTML = `<p class="panel-links-title">Ресурсы</p>` +
      s.links.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener" class="panel-link">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          ${l.text}
        </a>
      `).join('');

    panel.classList.add('open');
    overlay.classList.add('active');
    panel.scrollTop = 0;
  }

  function closePanel() {
    if (activeId && nodeEls[activeId]) {
      const prev = CS_DATA.sections.find(x => x.id === activeId);
      const el = nodeEls[activeId];
      el.classList.remove('active');
      const isDark = root.getAttribute('data-theme') === 'dark';
      el.style.borderColor = prev ? ((isDark ? prev.colorDark : prev.color) + '55') : '';
      el.querySelector('.node-icon').style.color = '';
    }
    activeId = null;
    panel.classList.remove('open');
    overlay.classList.remove('active');
  }

  panelClose.addEventListener('click', closePanel);
  overlay.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  // ── Init & resize ─────────────────────────────────────────────
  function init() {
    buildNodes();
    drawConnections();
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      init();
      // re-position panel-open node highlight
      if (activeId) {
        const s = CS_DATA.sections.find(x => x.id === activeId);
        const isDark = root.getAttribute('data-theme') === 'dark';
        const nodeColor = isDark ? s.colorDark : s.color;
        const el = nodeEls[activeId];
        if (el) {
          el.classList.add('active');
          el.style.borderColor = nodeColor;
          el.querySelector('.node-icon').style.color = nodeColor;
        }
      }
    }, 80);
  });

  // Also redraw when theme changes (handled inside toggle listener above)
  // Observe theme attr changes for canvas redraw
  const observer = new MutationObserver(() => {
    drawConnections();
    // Update node colors
    CS_DATA.sections.forEach(s => {
      const el = nodeEls[s.id];
      if (!el) return;
      const isDark = root.getAttribute('data-theme') === 'dark';
      const nodeColor = isDark ? s.colorDark : s.color;
      el.style.setProperty('--node-color', nodeColor);
      if (activeId === s.id) {
        el.style.borderColor = nodeColor;
        el.querySelector('.node-icon').style.color = nodeColor;
      } else {
        el.style.borderColor = nodeColor + '55';
        el.querySelector('.node-icon').style.color = '';
      }
    });
  });
  observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  // Wait for fonts + layout
  document.fonts.ready.then(init);
  // Fallback
  setTimeout(init, 200);
})();
