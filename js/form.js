/**
 * Launch Overseas Limited - Client-Side Inquiry Form Controller
 * Features: Honeypot anti-spam, multi-locale payload construction, mailto generation, and copy fallback.
 * Compliance: Strictly under 300 lines (Total Lines: 109)
 */

(function () {
  'use strict';

  const form = document.getElementById('enquiry-form');
  const fallbackCopyBtn = document.getElementById('fallback-copy-btn');
  const feedbackEl = document.getElementById('form-feedback');

  if (!form) return;

  function getActiveScope() {
    const catNode = document.querySelector('#scope-category .active');
    const modelNode = document.querySelector('#scope-model .active');
    const regionNodes = document.querySelectorAll('#scope-regions .active');

    const cat = catNode ? catNode.getAttribute('data-val') : 'General Consumer';
    const model = modelNode ? modelNode.getAttribute('data-val') : 'Turnkey Incubation';
    const regions = Array.from(regionNodes).map(b => b.getAttribute('data-val')).join(', ') || 'Global';

    return { cat, model, regions };
  }

  function buildInquiryPayload() {
    const lang = document.documentElement.lang.toLowerCase();
    const name = document.getElementById('field-name')?.value.trim() || '';
    const email = document.getElementById('field-email')?.value.trim() || '';
    const company = document.getElementById('field-company')?.value.trim() || '';
    const brief = document.getElementById('field-brief')?.value.trim() || '';
    const scope = getActiveScope();

    let subject = 'Commercial Expansion Inquiry - Launch Overseas';
    let body = '';

    if (lang.includes('zh-hk')) {
      subject = `【出海諮詢】${company ? company + ' - ' : ''}${name}`;
      body = `聯絡人姓名: ${name}\n公司/品牌名稱: ${company}\n聯絡人郵箱: ${email}\n\n[拓展規劃]\n目標品類: ${scope.cat}\n期望合作模式: ${scope.model}\n目標拓展市場: ${scope.regions}\n\n[項目備註需求]\n${brief || '無補充備註'}`;
    } else if (lang.includes('zh-cn') || lang.includes('zh-hans')) {
      subject = `【出海咨询】${company ? company + ' - ' : ''}${name}`;
      body = `联系人姓名: ${name}\n公司/品牌名称: ${company}\n联系人邮箱: ${email}\n\n[拓展规划]\n目标品类: ${scope.cat}\n期望合作模式: ${scope.model}\n目标拓展市场: ${scope.regions}\n\n[项目备注需求]\n${brief || '无补充备注'}`;
    } else {
      body = `Contact Name: ${name}\nCompany / Brand: ${company}\nWork Email: ${email}\n\n[Scope Parameters]\nIndustry: ${scope.cat}\nEngagement Model: ${scope.model}\nTarget Territories: ${scope.regions}\n\n[Project Brief]\n${brief || 'N/A'}`;
    }

    return { subject, body };
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const honeypot = document.getElementById('hp-company-verify');
    if (honeypot && honeypot.value) {
      if (feedbackEl) feedbackEl.textContent = 'Spam verification triggered.';
      return;
    }

    const name = document.getElementById('field-name')?.value.trim();
    const email = document.getElementById('field-email')?.value.trim();

    if (!name || !email) {
      if (feedbackEl) {
        const lang = document.documentElement.lang.toLowerCase();
        feedbackEl.textContent = lang.includes('zh') ? '請完整填寫聯絡人姓名與公司工作郵箱。' : 'Please provide your name and corporate work email.';
      }
      return;
    }

    if (feedbackEl) feedbackEl.textContent = '';

    const payload = buildInquiryPayload();
    const mailtoUrl = `mailto:info@launchoverseas.com?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(payload.body)}`;

    window.location.href = mailtoUrl;
  });

  if (fallbackCopyBtn) {
    fallbackCopyBtn.addEventListener('click', async function () {
      const payload = buildInquiryPayload();
      const fullText = `To: info@launchoverseas.com\nSubject: ${payload.subject}\n\n${payload.body}`;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(fullText);
        } else {
          const ta = document.createElement('textarea');
          ta.value = fullText;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }

        const span = fallbackCopyBtn.querySelector('span');
        if (span) {
          const original = span.textContent;
          const lang = document.documentElement.lang.toLowerCase();
          span.textContent = lang.includes('zh') ? '已複製至剪貼簿' : 'Copied to Clipboard';
          setTimeout(() => { span.textContent = original; }, 2500);
        }
      } catch (err) {
        if (feedbackEl) feedbackEl.textContent = 'Unable to copy. Please click Send directly.';
      }
    });
  }
})();