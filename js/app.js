/**
 * Launch Overseas Limited - Client-Side Controller
 * Handles mobile drawer interaction, scroll behaviors, and one-click copying.
 * Lines: < 150 (Strictly < 300 Limit)
 */

(function () {
  'use strict';

  // DOM Elements
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const copyButtons = document.querySelectorAll('.copy-btn');

  /**
   * Initializes mobile navigation drawer toggling
   */
  function initMobileMenu() {
    if (!mobileToggle || !mobileMenu) return;

    mobileToggle.addEventListener('click', function () {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      setMenuState(!isExpanded);
    });

    // Close menu when clicking on any mobile anchor link
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    // Close on Escape key press
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        setMenuState(false);
      }
    });
  }

  /**
   * Updates state attributes and classes for mobile menu
   * @param {boolean} open
   */
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

  /**
   * Handles clipboard copying for corporate contact items
   */
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
            // Fallback for non-https/legacy browser contexts
            fallbackCopyText(textToCopy);
            renderCopyFeedback(btn, true);
          }
        } catch (err) {
          renderCopyFeedback(btn, false);
        }
      });
    });
  }

  /**
   * Fallback copy helper using temporary textarea
   * @param {string} text 
   */
  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (e) {
      // Ignore fallback failure
    }
    document.body.removeChild(textArea);
  }

  /**
   * Displays temporary feedback state on copy action
   * @param {HTMLElement} btn 
   * @param {boolean} success 
   */
  function renderCopyFeedback(btn, success) {
    const textSpan = btn.querySelector('span');
    if (!textSpan) return;

    const originalText = textSpan.textContent;
    const isZh = document.documentElement.lang.includes('zh');
    
    if (success) {
      textSpan.textContent = isZh ? '已複製' : 'Copied';
    } else {
      textSpan.textContent = isZh ? '失敗' : 'Failed';
    }

    setTimeout(function () {
      textSpan.textContent = originalText;
    }, 2000);
  }

  /**
   * Add active header shadow on scroll
   */
  function initHeaderScroll() {
    if (!header) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.borderBottomColor = '#D5D4CD';
      } else {
        header.style.borderBottomColor = 'var(--border-stone)';
      }
    }, { passive: true });
  }

  // Initialization lifecycle
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initClipboardButtons();
    initHeaderScroll();
  });
})();
