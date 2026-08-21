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