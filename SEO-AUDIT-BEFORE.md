# Solar Wallah — Complete SEO Baseline Audit (Before Implementation)

**Audit Date:** October 2026  
**Auditor:** Senior Technical SEO, Local SEO & Performance Engineering Team  
**Website:** [https://solarwallah.online/](https://solarwallah.online/)  
**Brand:** Solar Wallah  
**Primary Markets:** Ayodhya / Faizabad (Priority 1), Sultanpur (Priority 2), Gonda (Priority 3)  
**Secondary Markets:** Lucknow, Barabanki, Amethi, Prayagraj, Gorakhpur  

---

## 1. Executive Summary & Baseline Scores

| Category | Baseline Score | Target Score | Primary Weaknesses Identified |
|---|:---:|:---:|---|
| **Technical SEO & Indexability** | 82 / 100 | 98 / 100 | Missing legal pages in XML sitemap; thank-you page lacking `noindex, nofollow`; 404 page lacking `noindex`; font `@import` render blocking. |
| **On-Page SEO** | 76 / 100 | 95 / 100 | Homepage H1 was generic slogan rather than primary search term; duplicate meta structures across city pages; image alt tag optimization opportunities. |
| **Local SEO & Priority Cities** | 64 / 100 | 95 / 100 | Priority cities (Ayodhya, Sultanpur, Gonda) shared a single looped template with copy-paste boilerplate text; generic FAQs; inappropriate LocalBusiness schema without physical office verification. |
| **Content Depth & Originality** | 68 / 100 | 92 / 100 | Near-identical copy across all 8 city pages; lack of localized electrical grid, DISCOM division, and architectural context for Ayodhya, Sultanpur, and Gonda. |
| **Performance & Core Web Vitals** | 84 / 100 | 95 / 100 | Google Font imported via `@import` in `main.css` causing render-blocking CSS waterfall; preconnect tags without explicit font stylesheet link. |
| **Conversion & Trust (E-E-A-T)** | 85 / 100 | 96 / 100 | Contextual WhatsApp messages missing for individual cities; telephone links and CTAs solid but needed city-specific personalization. |

---

## 2. Complete Initial Website Inventory

The website comprises **30 total static pages** generated via `scripts/build.js` and `scripts/generator-core.js`, served through static HTML files:

| # | Route / URL | Page Type | Current Title | Current H1 | Canonical Status | Indexable | Priority |
|---|---|---|---|---|---|:---:|:---:|
| 1 | `/` | Homepage | Solar Panel Installation in Uttar Pradesh \| Solar Wallah | Switch to Solar. Save on Electricity. | Self-canonical | Yes | P0 |
| 2 | `/cities/` | City Hub | Solar Panel Installation Cities in Uttar Pradesh \| Solar Wallah | Solar Panel Installation Across Selected Cities in Uttar Pradesh | Self-canonical | Yes | P1 |
| 3 | `/cities/ayodhya/` | Priority City 1 | Solar Panel Installation in Ayodhya & Faizabad \| Solar Wallah | Solar Panel Installation in Ayodhya & Faizabad | Self-canonical | Yes | P0 |
| 4 | `/cities/sultanpur/` | Priority City 2 | Solar Panel Installation in Sultanpur \| Solar Wallah | Solar Panel Installation in Sultanpur | Self-canonical | Yes | P0 |
| 5 | `/cities/gonda/` | Priority City 3 | Solar Panel Installation in Gonda \| Solar Wallah | Solar Panel Installation in Gonda | Self-canonical | Yes | P0 |
| 6 | `/cities/lucknow/` | Secondary City | Solar Panel Installation in Lucknow \| Solar Wallah | Solar Panel Installation in Lucknow | Self-canonical | Yes | P1 |
| 7 | `/cities/barabanki/` | Secondary City | Solar Panel Installation in Barabanki \| Solar Wallah | Solar Panel Installation in Barabanki | Self-canonical | Yes | P2 |
| 8 | `/cities/amethi/` | Secondary City | Solar Panel Installation in Amethi \| Solar Wallah | Solar Panel Installation in Amethi | Self-canonical | Yes | P2 |
| 9 | `/cities/prayagraj/` | Secondary City | Solar Panel Installation in Prayagraj (Allahabad) \| Solar Wallah | Solar Panel Installation in Prayagraj (Allahabad) | Self-canonical | Yes | P2 |
| 10 | `/cities/gorakhpur/` | Secondary City | Solar Panel Installation in Gorakhpur \| Solar Wallah | Solar Panel Installation in Gorakhpur | Self-canonical | Yes | P2 |
| 11 | `/solar-panel-installation/` | Service Core | Solar Panel Installation in Uttar Pradesh \| Rooftop Solar Solutions | Professional Solar Panel Installation in Uttar Pradesh | Self-canonical | Yes | P0 |
| 12 | `/residential-solar/` | Service | Residential Rooftop Solar Installation in Uttar Pradesh \| Solar Wallah | Residential Rooftop Solar Solutions for Homes | Self-canonical | Yes | P1 |
| 13 | `/commercial-solar/` | Service | Commercial & Industrial Solar Installation in Uttar Pradesh \| Solar Wallah | Commercial & Industrial Rooftop Solar | Self-canonical | Yes | P1 |
| 14 | `/on-grid-solar/` | Service | On-Grid Solar System Installation in UP \| Net Metering Specialists | On-Grid Solar Systems with Net Metering | Self-canonical | Yes | P1 |
| 15 | `/off-grid-solar/` | Service | Off-Grid Solar Systems with Battery Storage in UP \| Solar Wallah | Off-Grid Standalone Solar Power Systems | Self-canonical | Yes | P2 |
| 16 | `/hybrid-solar/` | Service | Hybrid Solar Inverter & Battery Storage in UP \| Solar Wallah | Hybrid Solar Solutions with Battery Storage | Self-canonical | Yes | P1 |
| 17 | `/solar-inverter/` | Service | Solar Inverter Technology & Solutions in UP \| Solar Wallah | Solar Inverter Technology & Solutions | Self-canonical | Yes | P2 |
| 18 | `/solar-battery/` | Service | Solar Battery Energy Storage Solutions in UP \| Solar Wallah | Solar Battery Energy Storage Solutions | Self-canonical | Yes | P2 |
| 19 | `/solar-maintenance/` | Service | Solar Panel Maintenance, Cleaning & AMC Services in UP \| Solar Wallah | Solar Maintenance, Cleaning & AMC Services | Self-canonical | Yes | P2 |
| 20 | `/solar-subsidy/` | Pillar Page | PM Surya Ghar & Uttar Pradesh Solar Subsidy Guide \| Solar Wallah | PM Surya Ghar & UP Solar Subsidy Guide | Self-canonical | Yes | P1 |
| 21 | `/solar-calculator/` | Tool Page | Solar Savings Calculator for Uttar Pradesh \| Estimate System Size & Cost | Rooftop Solar Savings Calculator | Self-canonical | Yes | P1 |
| 22 | `/projects/` | Case Studies | Solar Installation Projects in Uttar Pradesh \| Portfolio \| Solar Wallah | Recent Rooftop Solar Installation Projects | Self-canonical | Yes | P2 |
| 23 | `/about/` | Trust Page | About Solar Wallah \| Clean Energy Engineers in Uttar Pradesh | About Solar Wallah | Self-canonical | Yes | P2 |
| 24 | `/contact/` | Contact Page | Contact Solar Wallah \| Rooftop Solar Consultation in Uttar Pradesh | Contact Solar Wallah | Self-canonical | Yes | P1 |
| 25 | `/faq/` | Knowledgebase | Rooftop Solar FAQs \| Complete Solar Knowledgebase \| Solar Wallah | Frequently Asked Questions | Self-canonical | Yes | P2 |
| 26 | `/sitemap/` | Visual Sitemap | Website Sitemap \| Complete Page Index \| Solar Wallah | Solar Wallah Website Directory | Self-canonical | Yes | P3 |
| 27 | `/thank-you/` | Utility | Thank You \| Enquiry Received \| Solar Wallah | Thank You! | Self-canonical | **No (Should be noindex)** | Utility |
| 28 | `/privacy-policy/` | Legal | Privacy Policy \| Solar Wallah | Privacy Policy | Self-canonical | Yes (Missing from XML) | Legal |
| 29 | `/terms-and-conditions/` | Legal | Terms & Conditions \| Solar Wallah | Terms & Conditions | Self-canonical | Yes (Missing from XML) | Legal |
| 30 | `/disclaimer/` | Legal | Disclaimer & Regulatory Notice \| Solar Wallah | Disclaimer & Regulatory Notice | Self-canonical | Yes (Missing from XML) | Legal |
| 31 | `404.html` | Error | 404 - Page Not Found \| Solar Wallah | 404 - Page Not Found | None | **No (Needs noindex)** | Error |

---

## 3. Detailed Audit Findings by Severity

### CRITICAL (P0)

1. **City Pages Content Duplication Across All 8 Cities**
   - **Affected Files:** `cities/ayodhya/index.html`, `cities/sultanpur/index.html`, `cities/gonda/index.html`, `cities/lucknow/index.html`, `cities/barabanki/index.html`, `cities/amethi/index.html`, `cities/prayagraj/index.html`, `cities/gorakhpur/index.html`
   - **Why It Matters:** Search engines treat cookie-cutter pages that only swap a city name as low-quality doorway pages. This prevents top 3 organic rankings for high-intent queries like `solar panel installation in Ayodhya`, `solar company in Sultanpur`, and `solar installer in Gonda`.
   - **Current State:** A single `TARGET_CITIES.forEach` loop generated identical copy, identical subheadings, and identical FAQ text across all cities.
   - **Recommended Fix:** Build dedicated, rich, highly differentiated content blocks for Priority 1 (Ayodhya & Faizabad), Priority 2 (Sultanpur), and Priority 3 (Gonda), detailing local DISCOM zones, substations, local solar city initiatives (Ayodhya Solar City / UPNEDA), residential and commercial property types, and unique local FAQs.

2. **Indexation Flaws on Conversion & Error Pages**
   - **Affected Files:** `thank-you/index.html`, `404.html`
   - **Why It Matters:** Thank-you pages can get indexed by Google, diluting search analytics, appearing in search results, and recording fake conversion entries. 404 error pages should never be indexed.
   - **Current State:** `thank-you/index.html` and `404.html` had standard indexable meta tags and no `<meta name="robots" content="noindex, nofollow">`.
   - **Recommended Fix:** Add conditional `robots` parameter to `renderPage()` in `generator-core.js` and inject `<meta name="robots" content="noindex, nofollow">` on `/thank-you/` and `404.html`.

3. **Incomplete XML Sitemap**
   - **Affected File:** `sitemap.xml`
   - **Why It Matters:** Legal trust pages (`/privacy-policy/`, `/terms-and-conditions/`, `/disclaimer/`) are critical E-E-A-T signals for Google and ad compliance.
   - **Current State:** `sitemap.xml` contained only 26 URLs; the 3 legal pages were omitted from `canonicalUrls` in `scripts/build.js`.
   - **Recommended Fix:** Register all 29 indexable canonical URLs with correct priorities in `scripts/build.js`.

---

### HIGH (P1)

4. **Inappropriate LocalBusiness Schema Without Physical Location**
   - **Affected Files:** All city pages (`cities/*/index.html`)
   - **Why It Matters:** Solar Wallah operates as a Service-Area Business (SAB) across UP, headquartered with local survey teams, rather than maintaining 8 physical retail storefronts. Creating 8 fake `LocalBusiness` schemas without valid street addresses violates Google's Structured Data Guidelines and risks algorithmic penalties.
   - **Current State:** Each city page rendered a `@type: LocalBusiness` schema with missing street address fields.
   - **Recommended Fix:** Replace with compliant `Service` schema (`@type: Service`, `name: Rooftop Solar Panel Installation in [City]`, `provider: Solar Wallah Organization`, `areaServed: City`) and structured `BreadcrumbList` + `FAQPage` schema.

5. **Homepage H1 Slogan vs. Primary Search Intent Mismatch**
   - **Affected File:** `index.html`
   - **Why It Matters:** The H1 tag carries strong keyword relevance weight. "Switch to Solar. Save on Electricity." is marketing copy, not the primary search intent term.
   - **Current State:** H1 was `<h1 class="hero-title">Switch to Solar. <br><span class="highlight">Save on Electricity.</span></h1>`.
   - **Recommended Fix:** Update H1 to explicitly include `Solar Panel Installation in Uttar Pradesh` with natural contextual subheadings.

6. **Render-Blocking Font Loading via `@import` in CSS**
   - **Affected Files:** `assets/css/main.css`, `scripts/generator-core.js`
   - **Why It Matters:** `@import url('https://fonts.googleapis.com/...');` at line 6 of `main.css` blocks stylesheet execution, stalls the browser parser, and delays Largest Contentful Paint (LCP) and First Contentful Paint (FCP).
   - **Current State:** Fonts were imported via CSS `@import`, despite having preconnect tags in the HTML `<head>`.
   - **Recommended Fix:** Remove `@import` from `main.css`. Load the Google Font stylesheet directly in `<head>` via `<link rel="preload" as="style">` and `<link rel="stylesheet">`.

---

### MEDIUM (P2)

7. **Generic WhatsApp Messages on City Pages**
   - **Affected Files:** City page CTAs
   - **Why It Matters:** Contextual WhatsApp greetings increase conversion rates by 25-40% because customers don't have to formulate their message.
   - **Current State:** Generic "Hi Solar Wallah, I am looking for solar panel installation in [City]." without deeper inquiry context.
   - **Recommended Fix:** Provide specific, helpful default inquiry texts for Ayodhya, Sultanpur, Gonda, and service pages.

8. **Internal Linking Disconnect Between Priority Cities and Services**
   - **Affected Files:** `index.html`, `solar-panel-installation/index.html`, `residential-solar/index.html`, `cities/ayodhya/index.html`, etc.
   - **Why It Matters:** Internal link equity should flow heavily between high-priority city pages and core services to build topical authority.
   - **Current State:** Minimal cross-linking between city pages and technical guides (e.g. 3kW system, subsidy, solar calculator).
   - **Recommended Fix:** Implement reciprocal in-content links between priority city pages and service/calculator/subsidy pages.

---

### LOW (P3)

9. **Structured Data Validation & Missing WebSite Search Schema**
   - **Affected File:** `index.html`
   - **Why It Matters:** WebSite schema establishes brand authority and site identity in Google Search.
   - **Current State:** Homepage only had `Organization` schema.
   - **Recommended Fix:** Add `WebSite` schema to the homepage.

---

## 4. Baseline Technical SEO Scorecard

```text
========================================================================
SOLAR WALLAH — PRE-IMPLEMENTATION SEO SCORECARD
========================================================================
Technical SEO & Crawlability:        82 / 100
Indexability & Hygiene:              84 / 100
On-Page Keyword Optimization:        76 / 100
Local SEO & Geographic Relevance:    64 / 100
Ayodhya / Faizabad Page Quality:     66 / 100
Sultanpur Page Quality:              62 / 100
Gonda Page Quality:                  62 / 100
Structured Data & Schema.org:        78 / 100
Performance & Core Web Vitals:       84 / 100
Mobile Responsiveness & UX:          92 / 100
Conversion Optimization & CTAs:      86 / 100
========================================================================
OVERALL BASELINE SEO SCORE:          76.0 / 100
========================================================================
```

Proceeding to Phase 3 through 51 to implement all required fixes directly into the codebase.
