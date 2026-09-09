/**
 * Launch Overseas Limited - Client-Side Controller
 * Features: Mobile drawer, partnership tabs, scroll reveals, click-to-copy buttons, scoping pills.
 * Compliance: Strictly under 300 lines (Total Lines: 175)
 */

(function () {
  'use strict';

  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const copyButtons = document.querySelectorAll('.copy-btn:not(#fallback-copy-btn)');
  const tabButtons = document.querySelectorAll('.model-tab-btn');
  const modelPanels = document.querySelectorAll('.model-panel');

  function initMobileMenu() {
    if (!mobileToggle || !mobileMenu) return;
    mobileToggle.addEventListener('click', function () {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isExpanded);
    });
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        setMenuState(false);
      }
    });
  }

  function setMenuState(open) {
    if (!mobileToggle || !mobileMenu) return;
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    if (open) {
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  function initModelSwitcher() {
    if (tabButtons.length === 0 || modelPanels.length === 0) return;
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const targetId = btn.getAttribute('aria-controls');
        if (!targetId) return;
        tabButtons.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        modelPanels.forEach(function (panel) {
          panel.classList.remove('active');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        const activePanel = document.getElementById(targetId);
        if (activePanel) activePanel.classList.add('active');
      });
    });
  }

  function initClipboardButtons() {
    copyButtons.forEach(function (btn) {
      btn.addEventListener('click', async function () {
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
            renderCopyFeedback(btn, true);
          } else {
            fallbackCopyText(textToCopy);
            renderCopyFeedback(btn, true);
          }
        } catch (err) {
          renderCopyFeedback(btn, false);
        }
      });
    });
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(textArea);
  }

  function renderCopyFeedback(btn, success) {
    const textSpan = btn.querySelector('span');
    if (!textSpan) return;
    const originalText = textSpan.textContent;
    const htmlLang = document.documentElement.lang.toLowerCase();
    
    if (success) {
      if (htmlLang.includes('zh-cn') || htmlLang.includes('zh-hans')) {
        textSpan.textContent = '已复制';
      } else if (htmlLang.includes('zh')) {
        textSpan.textContent = '已複製';
      } else {
        textSpan.textContent = 'Copied';
      }
    } else {
      textSpan.textContent = 'Failed';
    }
    setTimeout(function () {
      textSpan.textContent = originalText;
    }, 2000);
  }

  function initScrollReveals() {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    if (reveals.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  }

  function initScopePills() {
    const scopePills = document.querySelectorAll('.scope-pill');
    if (scopePills.length === 0) return;

    scopePills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        const parentGroup = pill.closest('.scoping-options');
        const isMultiSelect = parentGroup.id === 'scope-regions';

        if (!isMultiSelect) {
          parentGroup.querySelectorAll('.scope-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
        } else {
          pill.classList.toggle('active');
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initModelSwitcher();
    initClipboardButtons();
    initScrollReveals();
    initScopePills();
  });
})();