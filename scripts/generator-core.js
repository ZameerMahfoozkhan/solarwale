/**
 * SOLAR WALLAH - STATIC SITE GENERATOR & SEO BUILDER
 * Generates all 28 production-ready HTML pages, sitemap.xml, and robots.txt
 */

import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const SITE_DOMAIN = 'https://solarwallah.online';
const PHONE_NUMBER = '+91 95806 59559';
const PHONE_TEL = 'tel:+919580659559';
const WHATSAPP_RAW = '919580659559';
const EMAIL_ADDRESS = 'hello@solarwallah.online';

// Ensure directory exists
function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Write file helper
function writeHtml(relPath, content) {
  const fullPath = path.join(ROOT_DIR, relPath);
  ensureDir(fullPath);
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log(`Generated: ${relPath}`);
}

// Common Shared SVG Icons (Standard 1.5 - 2 stroke width)
const ICONS = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  tool: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  calculator: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>`
};

// Cities List
const TARGET_CITIES = [
  { slug: 'ayodhya', name: 'Ayodhya & Faizabad', shortName: 'Ayodhya', discom: 'Madhyanchal Vidyut Vitran Nigam Ltd (MVVNL)', areas: 'Civil Lines, Naka, Devkali, Rekabganj, Cantt, Ranopali, Faizabad City, Amaniganj', desc: 'Complete rooftop solar installation and subsidy guidance across Ayodhya and Faizabad.' },
  { slug: 'lucknow', name: 'Lucknow', shortName: 'Lucknow', discom: 'MVVNL (LESCO / Madhyanchal)', areas: 'Gomti Nagar, Indira Nagar, Aliganj, Ashiyana, Mahanagar, Hazratganj, Jankipuram, Kakori, Shaheed Path', desc: 'Residential & commercial solar solutions with net metering across Lucknow.' },
  { slug: 'sultanpur', name: 'Sultanpur', shortName: 'Sultanpur', discom: 'Madhyanchal Vidyut Vitran Nigam Ltd (MVVNL)', areas: 'Civil Lines, Golaghat, Badhaiyabeer, Payagipur, Amhat, Kurwar Road', desc: 'High-efficiency rooftop solar for homes and businesses in Sultanpur district.' },
  { slug: 'gonda', name: 'Gonda', shortName: 'Gonda', discom: 'Madhyanchal Vidyut Vitran Nigam Ltd (MVVNL)', areas: 'Balpur, Pant Nagar, Civil Lines, Circular Road, Janki Nagar, Station Road', desc: 'Customized on-grid and hybrid solar installations in Gonda.' },
  { slug: 'barabanki', name: 'Barabanki', shortName: 'Barabanki', discom: 'Madhyanchal Vidyut Vitran Nigam Ltd (MVVNL)', areas: 'Dewa Road, Satrikh Road, Lucknow Road, Nawabganj, Kursi Road', desc: 'Terrace solar panel systems and DISCOM net metering assistance in Barabanki.' },
  { slug: 'amethi', name: 'Amethi', shortName: 'Amethi', discom: 'Madhyanchal Vidyut Vitran Nigam Ltd (MVVNL)', areas: 'Gauriganj, Jagdishpur Industrial Area, Musafirkhana, Tiloi, Ramganj', desc: 'Solar solutions for homes, educational institutes, and industries in Amethi.' },
  { slug: 'prayagraj', name: 'Prayagraj (Allahabad)', shortName: 'Prayagraj', discom: 'Purvanchal Vidyut Vitran Nigam Ltd (PVVNL)', areas: 'Civil Lines, George Town, Tagoretown, Naini, Kareli, Phaphamau, Jhalwa', desc: 'Reliable rooftop solar engineering and PM Surya Ghar assistance in Prayagraj.' },
  { slug: 'gorakhpur', name: 'Gorakhpur', shortName: 'Gorakhpur', discom: 'Purvanchal Vidyut Vitran Nigam Ltd (PVVNL)', areas: 'Taramandal, Medical College Road, Golghar, Rustampur, Mohaddipur, Rapti Nagar, Gorakhnath', desc: 'High-yield solar systems for residences and commercial establishments in Gorakhpur.' }
];

// Navigation Links
const NAV_SOLAR_SOLUTIONS = [
  { href: '/residential-solar/', title: 'Residential Solar', desc: 'Rooftop systems for independent homes' },
  { href: '/commercial-solar/', title: 'Commercial Solar', desc: 'For offices, schools, shops & factories' },
  { href: '/on-grid-solar/', title: 'On-Grid Solar', desc: 'Grid-connected systems with net metering' },
  { href: '/hybrid-solar/', title: 'Hybrid Solar', desc: 'Solar + battery storage for power backup' },
  { href: '/off-grid-solar/', title: 'Off-Grid Solar', desc: 'Independent power for remote sites' },
  { href: '/solar-subsidy/', title: 'Solar Subsidy Guide', desc: 'PM Surya Ghar & UP State subsidies' }
];

// Layout Components
function renderHeader(activePath = '') {
  return `
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="/" class="site-logo" aria-label="Solar Wallah Homepage">
        <picture>
          <source srcset="/assets/images/logo.webp" type="image/webp">
          <img src="/assets/images/logo.png" alt="Solar Wallah Logo" width="160" height="48" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        </picture>
        <div class="site-logo-text" style="display: none;">
          <div class="brand-name">Solar <span>Wallah</span></div>
          <div class="brand-tagline">Clean Energy • Uttar Pradesh</div>
        </div>
      </a>

      <nav class="nav-desktop" aria-label="Primary Navigation">
        <a href="/" class="nav-link ${activePath === '/' ? 'active' : ''}">Home</a>
        
        <div class="nav-item-dropdown">
          <a href="/solar-panel-installation/" class="nav-link ${activePath.includes('solar') ? 'active' : ''}">
            Solar Solutions ${ICONS.chevronDown}
          </a>
          <div class="nav-dropdown-menu">
            ${NAV_SOLAR_SOLUTIONS.map(s => `
              <a href="${s.href}" class="nav-dropdown-item">
                ${ICONS.sun}
                <div>
                  <div style="font-weight:700;">${s.title}</div>
                  <div style="font-size:0.75rem; color:var(--color-text-subtle);">${s.desc}</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

        <a href="/#how-it-works" class="nav-link">How It Works</a>
        <a href="/projects/" class="nav-link ${activePath.includes('/projects') ? 'active' : ''}">Projects</a>
        <a href="/solar-calculator/" class="nav-link ${activePath.includes('/solar-calculator') ? 'active' : ''}">Solar Calculator</a>
        
        <div class="nav-item-dropdown">
          <a href="/cities/" class="nav-link ${activePath.includes('/cities') ? 'active' : ''}">
            Cities We Serve ${ICONS.chevronDown}
          </a>
          <div class="nav-dropdown-menu" style="min-width: 220px;">
            ${TARGET_CITIES.map(c => `
              <a href="/cities/${c.slug}/" class="nav-dropdown-item">
                ${ICONS.mapPin}
                <span>${c.shortName}</span>
              </a>
            `).join('')}
            <a href="/cities/" class="nav-dropdown-item" style="border-top: 1px solid var(--color-border); margin-top: 4px; font-weight: 700; color: var(--color-accent);">
              <span>View All 8 UP Cities →</span>
            </a>
          </div>
        </div>

        <a href="/about/" class="nav-link ${activePath.includes('/about') ? 'active' : ''}">About</a>
        <a href="/contact/" class="nav-link ${activePath.includes('/contact') ? 'active' : ''}">Contact</a>
      </nav>

      <div class="header-actions">
        <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wallah,%20I%20want%20to%20know%20about%20solar%20panel%20installation." 
           class="header-whatsapp-btn" 
           target="_blank" 
           rel="noopener noreferrer"
           data-location="header"
           aria-label="Chat on WhatsApp">
          ${ICONS.whatsapp}
          <span>WhatsApp</span>
        </a>

        <button type="button" class="btn btn-primary header-quote-btn btn-sm" data-open-modal="quote-modal">
          <span>Get Free Quote</span>
          <span class="btn-icon-circle">${ICONS.arrowRight}</span>
        </button>

        <button type="button" class="mobile-nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
  `;
}

function renderMobileDrawer(activePath = '') {
  return `
  <div class="mobile-menu-drawer" id="mobile-menu-drawer" aria-label="Mobile Navigation Menu">
    <div class="mobile-drawer-topbar">
      <a href="/" class="mobile-drawer-brand">
        <picture>
          <source srcset="/assets/images/logo.webp" type="image/webp">
          <img src="/assets/images/logo.png" alt="Solar Wallah Logo" height="34" width="120" style="height:34px; width:auto; object-fit:contain;">
        </picture>
      </a>
      <button type="button" class="mobile-drawer-close-btn" id="mobile-drawer-close" aria-label="Close menu">
        <span>Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>

    <div class="mobile-menu-list">
      <div class="mobile-menu-item"><a href="/">Home</a></div>
      
      <div class="mobile-menu-item">
        <a href="/solar-panel-installation/">Solar Solutions</a>
        <div class="mobile-submenu">
          <a href="/residential-solar/">• Residential Rooftop Solar</a>
          <a href="/commercial-solar/">• Commercial & Industrial Solar</a>
          <a href="/on-grid-solar/">• On-Grid Solar (Net Metering)</a>
          <a href="/hybrid-solar/">• Hybrid Solar (With Battery)</a>
          <a href="/off-grid-solar/">• Off-Grid Standalone Solar</a>
          <a href="/solar-subsidy/">• Solar Subsidy & Government Schemes</a>
          <a href="/solar-inverter/">• Solar Inverter Technology</a>
          <a href="/solar-battery/">• Solar Batteries & Energy Storage</a>
          <a href="/solar-maintenance/">• Solar Maintenance & Cleaning</a>
        </div>
      </div>

      <div class="mobile-menu-item"><a href="/#how-it-works">How It Works</a></div>
      <div class="mobile-menu-item"><a href="/solar-calculator/">Solar Savings Calculator</a></div>
      <div class="mobile-menu-item"><a href="/projects/">Installation Projects</a></div>
      
      <div class="mobile-menu-item">
        <a href="/cities/">Cities We Serve in UP</a>
        <div class="mobile-submenu">
          ${TARGET_CITIES.map(c => `<a href="/cities/${c.slug}/">• Solar in ${c.shortName}</a>`).join('')}
        </div>
      </div>

      <div class="mobile-menu-item"><a href="/about/">About Solar Wallah</a></div>
      <div class="mobile-menu-item"><a href="/faq/">Frequently Asked Questions</a></div>
      <div class="mobile-menu-item"><a href="/contact/">Contact Us</a></div>
    </div>

    <div style="display:flex; flex-direction:column; gap:12px; margin-top:24px; padding:0 18px 40px; box-sizing:border-box; width:100%;">
      <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wallah,%20I%20want%20to%20know%20about%20solar%20panel%20installation." 
         class="btn btn-whatsapp" 
         target="_blank" 
         rel="noopener noreferrer"
         style="width: 100%;">
        ${ICONS.whatsapp}
        <span>Chat on WhatsApp</span>
      </a>
      <button type="button" class="btn btn-primary" data-open-modal="quote-modal" style="width:100%;">
        <span>Get Free Solar Quote</span>
      </button>
    </div>
  </div>
  `;
}

function renderMobileBottomBar(cityContext = '') {
  const waText = cityContext 
    ? encodeURIComponent(`Hi Solar Wallah, I am looking for solar panel installation in ${cityContext}. Please share system details and price estimate.`)
    : encodeURIComponent('Hi Solar Wallah, I want to know about solar panel installation for my property.');
  
  return `
  <div class="mobile-bottom-bar" id="mobile-bottom-bar" aria-label="Quick Action Conversion Bar">
    <a href="${PHONE_TEL}" class="mobile-bar-btn mobile-bar-call" data-location="mobile_bar" aria-label="Call Solar Wallah">
      ${ICONS.phone}
      <span>Call</span>
    </a>
    <a href="https://wa.me/${WHATSAPP_RAW}?text=${waText}" 
       class="mobile-bar-btn mobile-bar-whatsapp" 
       target="_blank" 
       rel="noopener noreferrer"
       data-location="mobile_bar" 
       aria-label="WhatsApp Solar Wallah">
      ${ICONS.whatsapp}
      <span>WhatsApp</span>
    </a>
    <button type="button" class="mobile-bar-btn mobile-bar-quote" data-open-modal="quote-modal" data-city="${cityContext}" aria-label="Get Free Solar Quote">
      <span>Get Quote</span>
    </button>
  </div>
  `;
}

function renderModal() {
  return `
  <div class="modal-overlay" id="quote-modal" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
    <div class="modal-container">
      <div class="modal-header">
        <h3 class="modal-title" id="modal-heading">Get Your Free Solar Consultation</h3>
        <button type="button" class="modal-close-btn" aria-label="Close dialog">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="modal-body">
        <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:20px;">
          Tell us about your property. Our solar engineering team in Uttar Pradesh will help you understand the right solar capacity, subsidy eligibility, and savings.
        </p>

        <form data-solar-form="quote" id="modal-quote-form" action="https://formspree.io/f/xrpbadnn" method="POST">
          <!-- Honeypot Bot Trap -->
          <input type="text" name="website_shield_trap" class="form-honeypot" tabindex="-1" autocomplete="off">

          <div class="form-group">
            <label class="form-label" for="modal-name">Your Full Name <span class="required">*</span></label>
            <input type="text" id="modal-name" name="full_name" class="form-control" placeholder="e.g. Ramesh Verma" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="modal-phone">Phone Number (+91) <span class="required">*</span></label>
            <input type="tel" id="modal-phone" name="phone_number" class="form-control" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
          </div>

          <div class="form-grid-2col">
            <div class="form-group">
              <label class="form-label" for="modal-city">City in UP <span class="required">*</span></label>
              <select id="modal-city" name="city" class="form-control" required>
                <option value="">Select City</option>
                ${TARGET_CITIES.map(c => `<option value="${c.shortName}">${c.name}</option>`).join('')}
                <option value="Other UP">Other City in Uttar Pradesh</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="modal-property">Property Type</label>
              <select id="modal-property" name="property_type" class="form-control">
                <option value="Home">Home / Residential</option>
                <option value="Shop">Shop / Retail Store</option>
                <option value="Office">Commercial Office</option>
                <option value="Factory">Factory / Industrial</option>
                <option value="School / College">School / College</option>
                <option value="Other">Other Property</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="modal-bill">Average Monthly Electricity Bill (₹)</label>
            <input type="number" id="modal-bill" name="monthly_bill" class="form-control" placeholder="e.g. 3500">
          </div>

          <button type="submit" class="btn btn-primary form-submit-btn">
            <span>Get My Free Solar Quote</span>
            <span class="btn-icon-circle">${ICONS.arrowRight}</span>
          </button>

          <div class="form-trust-note">
            ${ICONS.shield}
            <span>100% Privacy. No spam. Transparent guidance by solar professionals.</span>
          </div>
        </form>
      </div>
    </div>
  </div>
  `;
}

function renderFooter(activePath = '') {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand & Identity -->
        <div class="footer-brand">
          <a href="/" class="site-logo" style="color:#FFFFFF;">
            <picture>
              <source srcset="/assets/images/logo.webp" type="image/webp">
              <img src="/assets/images/logo.png" alt="Solar Wallah Logo" width="160" height="48" style="filter: brightness(0) invert(1);" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            </picture>
            <div style="display:none; font-size:1.35rem; font-weight:800; color:#FFFFFF;">Solar <span style="color:var(--color-accent);">Wallah</span></div>
          </a>
          <p>
            Complete rooftop solar solutions for homes and businesses across Uttar Pradesh. From site survey and engineering design to commissioning, subsidy liaison, and long-term service.
          </p>
          <div style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
            <div class="footer-contact-item">
              ${ICONS.phone}
              <div>
                <div style="font-size:0.75rem; color:#64748B;">Direct Call / Helpline</div>
                <a href="${PHONE_TEL}">${PHONE_NUMBER}</a>
              </div>
            </div>
            <div class="footer-contact-item">
              ${ICONS.whatsapp}
              <div>
                <div style="font-size:0.75rem; color:#64748B;">Official WhatsApp</div>
                <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wallah" target="_blank" rel="noopener noreferrer">${PHONE_NUMBER}</a>
              </div>
            </div>
            <div class="footer-contact-item">
              ${ICONS.mail}
              <div>
                <div style="font-size:0.75rem; color:#64748B;">Email Enquiries</div>
                <a href="mailto:${EMAIL_ADDRESS}">${EMAIL_ADDRESS}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Col 2: Solar Solutions -->
        <div>
          <h3 class="footer-heading">Solar Solutions</h3>
          <ul class="footer-links">
            <li><a href="/residential-solar/">Residential Rooftop Solar</a></li>
            <li><a href="/commercial-solar/">Commercial & Industrial Solar</a></li>
            <li><a href="/on-grid-solar/">On-Grid Net Meter Systems</a></li>
            <li><a href="/hybrid-solar/">Hybrid Solar with Storage</a></li>
            <li><a href="/off-grid-solar/">Off-Grid Standalone Systems</a></li>
            <li><a href="/solar-subsidy/">PM Surya Ghar Subsidy Guide</a></li>
            <li><a href="/solar-maintenance/">Solar Panel Maintenance</a></li>
            <li><a href="/solar-calculator/">Solar Savings Calculator</a></li>
          </ul>
        </div>

        <!-- Col 3: Cities We Serve -->
        <div>
          <h3 class="footer-heading">Cities We Serve (UP)</h3>
          <ul class="footer-links">
            ${TARGET_CITIES.map(c => `<li><a href="/cities/${c.slug}/">Solar in ${c.name}</a></li>`).join('')}
            <li><a href="/cities/" style="color:var(--color-accent); font-weight:700;">Explore All UP Coverage →</a></li>
          </ul>
        </div>

        <!-- Col 4: Company & Trust -->
        <div>
          <h3 class="footer-heading">Company & Guidance</h3>
          <ul class="footer-links">
            <li><a href="/about/">About Solar Wallah</a></li>
            <li><a href="/projects/">Recent Installations</a></li>
            <li><a href="/solar-panel-installation/">Installation Process</a></li>
            <li><a href="/faq/">Frequently Asked Questions</a></li>
            <li><a href="/contact/">Contact Our Team</a></li>
            <li><a href="/solar-inverter/">Solar Inverter Technology</a></li>
            <li><a href="/solar-battery/">Solar Batteries & Energy</a></li>
          </ul>

          <div style="margin-top:24px;">
            <div style="font-size:0.8rem; color:#94A3B8; margin-bottom:10px; font-weight:600;">Connect With Solar Wallah:</div>
            <div class="footer-socials">
              <a href="https://wa.me/${WHATSAPP_RAW}" class="footer-social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">${ICONS.whatsapp}</a>
              <a href="mailto:${EMAIL_ADDRESS}" class="footer-social-link" aria-label="Email">${ICONS.mail}</a>
              <a href="${PHONE_TEL}" class="footer-social-link" aria-label="Phone">${ICONS.phone}</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div>
          © ${new Date().getFullYear()} Solar Wallah (solarwallah.online). All rights reserved. Professional rooftop solar solutions in Uttar Pradesh.
        </div>
        <div class="footer-legal-links">
          <a href="/sitemap/">Visual Sitemap</a>
          <a href="/privacy-policy/">Privacy Policy</a>
          <a href="/terms-and-conditions/">Terms & Conditions</a>
          <a href="/disclaimer/">Disclaimer & Subsidy Notes</a>
          <a href="/sitemap.xml">XML Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function renderBreadcrumbs(crumbs = []) {
  if (!crumbs.length) return '';
  return `
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <div class="container">
      <ol class="breadcrumb-list" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a href="/" itemprop="item"><span itemprop="name">Home</span></a>
          <meta itemprop="position" content="1" />
          <span class="separator">/</span>
        </li>
        ${crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;
          const pos = idx + 2;
          if (isLast) {
            return `
              <li class="breadcrumb-item active" aria-current="page" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <span itemprop="name">${c.title}</span>
                <meta itemprop="position" content="${pos}" />
              </li>
            `;
          }
          return `
            <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
              <a href="${c.url}" itemprop="item"><span itemprop="name">${c.title}</span></a>
              <meta itemprop="position" content="${pos}" />
              <span class="separator">/</span>
            </li>
          `;
        }).join('')}
      </ol>
    </div>
  </nav>
  `;
}

function renderFaqAccordion(faqs = []) {
  return `
  <div class="faq-accordion" itemscope itemtype="https://schema.org/FAQPage">
    ${faqs.map((faq, index) => `
      <div class="faq-item ${index === 0 ? 'active' : ''}" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button type="button" class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}" id="faq-q-${index}">
          <span itemprop="name">${faq.question}</span>
          <span class="faq-icon">${ICONS.chevronDown}</span>
        </button>
        <div class="faq-answer" id="faq-a-${index}" role="region" aria-labelledby="faq-q-${index}" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text">${faq.answer}</div>
        </div>
      </div>
    `).join('')}
  </div>
  `;
}

function renderPage({
  title,
  metaDescription,
  canonicalUrl,
  ogImage = '/assets/images/hero-rooftop-solar.jpg',
  activeNav = '',
  breadcrumbs = [],
  schema = null,
  bodyContent = '',
  cityContext = '',
  robots = null
}) {
  const fullCanonical = `${SITE_DOMAIN}${canonicalUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_DOMAIN}${ogImage}`;

  // Organization Schema standard on all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Solar Wallah",
    "url": SITE_DOMAIN,
    "logo": `${SITE_DOMAIN}/assets/images/logo.png`,
    "description": "Professional rooftop solar panel installation and engineering solutions across Uttar Pradesh, India.",
    "telephone": "+91-9580659559",
    "email": "hello@solarwallah.online",
    "areaServed": [
      { "@type": "State", "name": "Uttar Pradesh" },
      ...TARGET_CITIES.map(c => ({ "@type": "City", "name": c.shortName }))
    ],
    "sameAs": [
      "https://wa.me/919580659559"
    ]
  };

  const allSchemas = [organizationSchema];

  // Automatic JSON-LD BreadcrumbList schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_DOMAIN
        },
        ...breadcrumbs.map((b, idx) => ({
          "@type": "ListItem",
          "position": idx + 2,
          "name": b.title,
          "item": `${SITE_DOMAIN}${b.url}`
        }))
      ]
    };
    allSchemas.push(breadcrumbSchema);
  }

  if (schema) {
    if (Array.isArray(schema)) allSchemas.push(...schema);
    else allSchemas.push(schema);
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${title}</title>
  <meta name="description" content="${metaDescription}">
  <link rel="canonical" href="${fullCanonical}">
  ${robots ? `<meta name="robots" content="${robots}">` : ''}
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullCanonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${metaDescription}">
  <meta property="og:image" content="${fullOgImage}">
  <meta property="og:site_name" content="Solar Wallah">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${fullCanonical}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${metaDescription}">
  <meta name="twitter:image" content="${fullOgImage}">

  <!-- Multi-Device Favicons & PWA Icons -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#0B1B3D">
  <meta name="msapplication-TileColor" content="#0B1B3D">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <meta name="apple-mobile-web-app-title" content="Solar Wallah">

  <!-- Preconnect & High-Performance Google Font Loading -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/home.css">

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  ${JSON.stringify(allSchemas, null, 2)}
  </script>
</head>
<body>
  ${renderHeader(activeNav)}
  ${renderMobileDrawer(activeNav)}
  ${renderBreadcrumbs(breadcrumbs)}

  <main id="main-content">
    ${bodyContent}
  </main>

  ${renderFooter(activeNav)}
  ${renderMobileBottomBar(cityContext)}
  ${renderModal()}

  <!-- Core Scripts -->
  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/calculator.js" defer></script>
</body>
</html>`;
}

export {
  ROOT_DIR,
  SITE_DOMAIN,
  PHONE_NUMBER,
  PHONE_TEL,
  WHATSAPP_RAW,
  EMAIL_ADDRESS,
  ICONS,
  TARGET_CITIES,
  renderHeader,
  renderMobileDrawer,
  renderMobileBottomBar,
  renderModal,
  renderFooter,
  renderBreadcrumbs,
  renderFaqAccordion,
  renderPage,
  writeHtml
};
