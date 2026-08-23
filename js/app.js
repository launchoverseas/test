/**
 * Launch Overseas Limited - Client-Side Controller
 * Features: Mobile drawer, partnership tabs, dynamic HKT status, scroll reveals, copy feedback, scoping generator.
 * Lines: 234 (< 300 Limit)
 */

(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const copyButtons = document.querySelectorAll('.copy-btn');
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

  function initLiveHktStatus() {
    const statusDots = document.querySelectorAll('.dynamic-status-dot');
    const statusTexts = document.querySelectorAll('.dynamic-status-text');
    if (statusDots.length === 0 && statusTexts.length === 0) return;

    const lang = document.documentElement.lang.toLowerCase();
    // Calculate current HKT (UTC+8)
    const now = new Date();
    const utcHours = now.getUTCHours();
    const hktHours = (utcHours + 8) % 24;
    const hktDay = (now.getUTCDay() + (utcHours + 8 >= 24 ? 1 : 0)) % 7;
    const isWeekday = hktDay >= 1 && hktDay <= 5;
    const isOpen = isWeekday && hktHours >= 9 && hktHours < 18;

    let text = isOpen ? 'Advisory Desk Live (HKT)' : '24h Inquiry Intake Active (HKT)';
    if (lang.includes('zh-hk')) {
      text = isOpen ? '顧問團隊在線 (HKT)' : '24小時諮詢受理中 (HKT)';
    } else if (lang.includes('zh-cn') || lang.includes('zh-hans')) {
      text = isOpen ? '顾问团队在线 (HKT)' : '24小时咨询受理中 (HKT)';
    }

    statusDots.forEach(function (dot) {
      dot.className = isOpen ? 'status-dot pulse' : 'status-dot standby';
    });
    statusTexts.forEach(function (el) {
      el.textContent = text;
    });
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

  function initScopeGenerator() {
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
        updateScopePreview();
      });
    });

    updateScopePreview();
  }

  function updateScopePreview() {
    const lang = document.documentElement.lang.toLowerCase();
    const catNode = document.querySelector('#scope-category .active');
    const modelNode = document.querySelector('#scope-model .active');
    const regionNodes = document.querySelectorAll('#scope-regions .active');

    const cat = catNode ? catNode.getAttribute('data-val') : '';
    const model = modelNode ? modelNode.getAttribute('data-val') : '';
    let regions = Array.from(regionNodes).map(b => b.getAttribute('data-val')).join(', ');

    if (!regions) regions = (lang.includes('zh') ? '全球市場' : 'Global Markets');

    let msg = `Hello Launch Overseas team, we are a [${cat}] brand looking to expand into [${regions}] via the [${model}] model. We would like to request a strategic consultation.`;
    let subject = 'Strategic Expansion Inquiry';

    if (lang.includes('zh-hk')) {
      msg = `您好，領海品牌管理團隊。我們是一家【${cat}】品牌，希望透過【${model}】模式拓展至【${regions}】。希望預約一次戰略諮詢。`;
      subject = '出海戰略諮詢';
    } else if (lang.includes('zh-cn') || lang.includes('zh-hans')) {
      msg = `您好，领海品牌管理团队。我们是一家【${cat}】品牌，希望通过【${model}】模式拓展至【${regions}】。希望预约一次战略咨询。`;
      subject = '出海战略咨询';
    }

    const previewEl = document.getElementById('scope-preview');
    if (previewEl) previewEl.textContent = `"${msg}"`;

    const waLink = document.getElementById('dynamic-wa-link');
    const emailLink = document.getElementById('dynamic-email-link');

    if (waLink) waLink.href = `https://wa.me/85200000000?text=${encodeURIComponent(msg)}`;
    if (emailLink) emailLink.href = `mailto:contact@launchoverseas.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initModelSwitcher();
    initClipboardButtons();
    initLiveHktStatus();
    initScrollReveals();
    initScopeGenerator();
  });
})();