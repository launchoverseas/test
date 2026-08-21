**CHAT BUILD #5**

---

**📁 File: `README.md**`

```markdown
# Launch Overseas Limited (領海品牌管理有限公司)

A high-performance, responsive corporate web platform for Launch Overseas Limited (領海品牌管理有限公司), a Hong Kong-based global brand management and multi-market distribution consultancy. Engineered for high-conversion enterprise client acquisition, maximum Search Engine Optimization (SEO), Generative Engine Optimization (GEO / AI Search retrieval), and smooth mobile user experience.

---

## 1. Executive Summary & Corporate Scope
* **Legal Entity Name:** Launch Overseas Limited (領海品牌管理有限公司)
* **Jurisdiction & Headquarters:** Hong Kong Special Administrative Region (Common-law trade, regulatory compliance, and multi-currency capital settlement hub).
* **Primary Category:** Global Brand Management & Multi-Market Distribution Consultancy.
* **Target Geographies:** North America (US, Canada), Europe (UK, European Union), East Asia (Japan, South Korea), and Southeast Asia (Singapore, Malaysia, Indonesia, Thailand, Vietnam).
* **Core Problem Solved:** Eliminating market entry risk, regulatory delays (FDA/CPNP), and offline/online distribution friction for expanding consumer brands.

---

## 2. Technical Architecture & Design System

### Technology Stack
* **Markup:** Dual-locale static semantic HTML5 (`index.html` for English and `zh-hk.html` for Traditional Chinese) with bidirectional `hreflang` headers and OpenGraph tags.
* **Styling:** Modern enterprise CSS3 (`styles.css`) implementing modern CSS variables, responsive CSS grid, flexbox layout, and native safe-area viewport support (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`).
* **Scripting:** Modular, zero-dependency ES6 vanilla JavaScript (`js/app.js`, strictly maintained under 300 lines) with touch-optimized mobile navigation drawer, safe DOM manipulation, and click-to-copy functionality.
* **Data & Lead Architecture:** Direct multi-channel zero-database inquiry model (Official Email + Instant WhatsApp) with structured pre-fills, eliminating database maintenance costs and attack surfaces.
* **Search & AI Retrieval (GEO):** Complete Schema.org JSON-LD `Corporation` and `FAQPage` structured data on all pages, accompanied by `robots.txt` and a machine-readable `llms.txt` file at the root.

### Brand Design Tokens
* **Primary Royal Cobalt:** `#1B56C7` (Header brand lockup, primary CTA buttons, table headers, active state accents)
* **Electric Azure Accent:** `#3B7EF6` (Logo top chevron, category tags, interactive links, secondary badges)
* **Canvas Backgrounds:** Pure White (`#FFFFFF`) and Clean Studio Tint (`#F8FAFC`)
* **Primary Typography:** Crisp Charcoal (`#0F172A`)
* **Secondary Typography:** Slate Gray (`#475569`)
* **Structural Borders:** Hairline Slate (`#E2E8F0`)
* **Status Accent:** Emerald Green (`#10B981`)

---

## 3. Project Directory Map
```text
├── index.html         # English primary entry page (/en parity)
├── zh-hk.html         # Traditional Chinese entry page (/zh-hk parity)
├── styles.css         # Unified responsive stylesheet & design system
├── js/
│   └── app.js         # Client controller (< 300 lines)
├── robots.txt         # Search & AI crawler governance
├── llms.txt           # Structured AI search summary & knowledge file
└── README.md          # Project documentation & chronological history log

```

---

## 4. HKTDC GoGlobal Service Alignment

The platform aligns with official Hong Kong Trade Development Council (HKTDC) GoGlobal professional classification standards across 4 integrated pillars:

1. **Strategic Consulting & Market Incubation (頂層戰略與出海市場孵化):** Whitespace audits, localized pricing, product formulation adaptation, and capital risk management.
2. **Omnichannel Retail & E-Commerce Operations (線下零售與線上電商全渠道分銷):** Direct placement into Tier-1 retail door chains, specialty cosmetics accounts, and D2C/Amazon flagship operations.
3. **Integrated Marketing & Brand PR (國際品牌管理、本土化行銷與海外公關):** Tier-1 international business and industry media features, localized creator seeding, and cross-border commercial campaigns.
4. **Testing, Certification, Logistics & Regulatory Compliance (國際檢測認證、自貿港供應鏈與跨境法規):** Complete handling of US FDA notifications, EU CPNP toxicology assessments, CE safety filings, Hong Kong free-port staging, trademark defense, and transfer pricing tax structuring.

---

## 5. Security & Mobile Readiness Standards

* **Zero Secret Leakage:** No private API keys or server credentials exist within client-side code.
* **Safe DOM Standards:** All dynamic text injection utilizes safe `textContent` methods to eliminate Cross-Site Scripting (XSS) risks.
* **Touch Optimization:** All buttons, navigation items, and interactive toggles enforce minimum 44x44px tap targets.
* **Robots & Asset Protection:** Public marketing pages are open to search crawlers while private directories and future endpoint paths are restricted in `robots.txt`.

---

## Project Updates & History Log

* Date: 2026-08-21
* Feature Added: Dual-Locale Static Architecture & Japanese Minimalist Web Platform
* Architecture Notes: Delivered complete static dual-locale setup (`index.html` and `zh-hk.html`) with reciprocal `hreflang` headers, Schema.org Corporation/FAQ JSON-LD schemas, and `llms.txt` file for GEO indexing. Implemented pure CSS Japanese Minimalist Design System (`#F7F6F2`, `#1A1A1A`, `#1B2A4A`) and modular, zero-dependency client script (`js/app.js`, 146 lines) supporting responsive drawer controls and click-to-copy contact channels.
* Date: 2026-08-21
* Feature Added: Geometric Brand Emblem, Responsive Mobile Header & Regional Metric Matrix Visual
* Architecture Notes: Embedded pure inline vector logo lockup across header and footer. Optimized mobile header viewports to resolve line-wrapping issues on narrow screens (320px–430px). Replaced the map node diagram with a responsive 4-Region Metric Expansion Matrix detailing North America (FDA/Retail), Europe (CPNP/PR), East Asia (Formulations/Specialty), and Southeast Asia (Freeport Hub/Marketplaces) while retaining strict Japanese Minimalist design tokens and dual-locale parity.
* Date: 2026-08-21
* Feature Added: HKTDC GoGlobal Alignment & Target Enterprise Profiles Integration
* Architecture Notes: Restructured the 4 Core Service Pillars and Schema.org JSON-LD structured data to match official HKTDC GoGlobal professional service standards (Testing & Certification, Omnichannel Retail Distribution, Localized Brand PR, and Tax/Legal Compliance). Added a 3-tier Target Enterprise Profiles module across both `index.html` and `zh-hk.html` to address high-intent enterprise search queries while preserving the zero-database contact model and mobile responsive layout.
* Date: 2026-08-22
* Feature Added: Official SVG Logo Integration & Enterprise Cobalt Color System
* Architecture Notes: Integrated official dual-shade vector logo (Electric Azure `#3B7EF6` and Royal Cobalt `#1B56C7`) into navigation headers and footers across `index.html` and `zh-hk.html`. Refactored `styles.css` color variables to a modern enterprise studio palette (`#FFFFFF`, `#F8FAFC`, `#E2E8F0`, `#0F172A`), enhanced mobile header single-line legibility, and synchronized browser theme color meta tags.
- Date: 2026-08-22
- Feature Added: Modular CSS Architecture & Simplified Chinese (zh-cn.html) Multi-Locale Parity
- Architecture Notes: Split monolithic stylesheet into 3 modular files (`css/variables.css`, `css/layout.css`, `css/components.css`). Added a dedicated Simplified Chinese static page (`zh-cn.html`) with localized Mainland enterprise trade terminology. Integrated a 3-way segmented language controller (`EN | 繁 | 简`) with reciprocal `hreflang` tags and Schema.org JSON-LD structured data across all three pages.
- Date: 2026-08-22
- Feature Added: Mobile Viewport Grid Isolation & Hamburger Language Integration
- Architecture Notes: Resolved CSS cascade conflicts causing the 2-column hero split on mobile viewports. Shifted the 3-locale language switch inside the slide-out hamburger menu on screens <= 768px, ensuring the top header contains only the brand mark and touch toggle. Fixed badge text wrapping inside `.hub-matrix-header` to guarantee clean single-column presentation on 375px–430px mobile displays.
- Date: 2026-08-22
- Feature Added: Interactive Commercial Model Switcher Component
- Architecture Notes: Replaced wide comparison table with an accessible, mobile-first 3-way segmented card switcher (`role="tablist"`, `role="tabpanel"`) across all three static pages (`index.html`, `zh-hk.html`, `zh-cn.html`). Expanded `css/components.css` with structured detail blocks (Operational Scope, Commercial Structure, Inventory Title, Channel Coverage) and integrated modular tab switching logic into `js/app.js` (214 lines) while preserving zero-database security and full SEO DOM retention.