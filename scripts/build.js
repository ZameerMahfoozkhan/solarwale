/**
 * SOLAR WALE - MASTER STATIC SITE GENERATOR & SEO ENGINE
 * Generates all 28 production-ready HTML pages, sitemap.xml, and robots.txt
 */

import fs from 'fs';
import path from 'path';
import {
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
} from './generator-core.js';

const canonicalUrls = [];

function registerUrl(url, priority = '0.8', changefreq = 'weekly') {
  canonicalUrls.push({
    loc: `${SITE_DOMAIN}${url}`,
    lastmod: new Date().toISOString().split('T')[0],
    priority,
    changefreq
  });
}

// ==========================================================================
// 1. HOMEPAGE BUILDER
// ==========================================================================
function buildHomePage() {
  const metaTitle = "Solar Panel Installation in Uttar Pradesh | Solar Wale";
  const metaDesc = "Complete rooftop solar solutions for homes & businesses across Uttar Pradesh. Site survey, engineering design, professional installation & after-sales support. Get a free solar quote today.";
  
  registerUrl('/', '1.0', 'daily');

  const homeFaqs = [
    {
      question: "How much can I save on my electricity bill by switching to solar?",
      answer: "In Uttar Pradesh, a properly sized on-grid rooftop solar system typically reduces monthly electricity bills by 80% to 90%. For example, an average household with a monthly bill of ₹3,000 to ₹4,000 can save over ₹30,000 to ₹40,000 annually with a 3 kW solar system, depending on sunlight, roof orientation, and local DISCOM net metering."
    },
    {
      question: "How does the PM Surya Ghar Muft Bijli Yojana subsidy work in UP?",
      answer: "Under the PM Surya Ghar program, eligible residential consumers receive up to ₹30,000 subsidy for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and higher systems from the Central Government. In addition, the Uttar Pradesh state government provides supplementary financial assistance under the UP Solar Policy (up to ₹15,000/kW, capped at ₹30,000). Solar Wale assists with all documentation and DISCOM portal applications."
    },
    {
      question: "What is net metering and does UP electricity board support it?",
      answer: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. In Uttar Pradesh, state DISCOMs (MVVNL, PVVNL, DVVNL, PaVVNL) provide bidirectional net meters for eligible on-grid solar systems, allowing you to export surplus daytime power to the grid and draw units at night."
    },
    {
      question: "How much shadow-free roof area is required for solar panels?",
      answer: "As a rule of thumb, you need approximately 90 to 100 square feet of shadow-free rooftop space for every 1 kW of solar panel installation. A standard 3 kW residential system requires roughly 270 to 300 sq. ft. of clear terrace area."
    },
    {
      question: "How long does the solar panel installation process take?",
      answer: "Once site survey and DISCOM approvals are completed, physical rooftop installation typically takes 2 to 4 days for residential systems (1 kW to 10 kW). Meter testing and official net meter commissioning by your local electricity division usually takes 2 to 3 weeks."
    },
    {
      question: "Which cities in Uttar Pradesh does Solar Wale serve?",
      answer: "Solar Wale currently serves Ayodhya / Faizabad, Lucknow, Sultanpur, Gonda, Barabanki, Amethi, Prayagraj, and Gorakhpur, with ongoing expansion to surrounding districts in Uttar Pradesh."
    }
  ];

  const bodyContent = `
  <!-- Hero Section -->
  <section class="hero-section" id="hero">
    <div class="container">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="eyebrow eyebrow-accent">
            <span class="eyebrow-dot"></span>
            <span>Rooftop Solar Solutions • Uttar Pradesh</span>
          </div>

          <h1 class="hero-title">
            Switch to Solar. <br>
            <span class="highlight">Save on Electricity.</span>
          </h1>

          <p class="hero-subtitle">
            Complete rooftop solar solutions for homes and businesses — from consultation and site survey to system design, installation and after-sales support.
          </p>

          <div class="hero-ctas">
            <button type="button" class="btn btn-primary btn-lg" data-open-modal="quote-modal">
              <span>Get Free Solar Quote</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>

            <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20want%20to%20know%20about%20solar%20panel%20installation." 
               class="btn btn-whatsapp btn-lg" 
               target="_blank" 
               rel="noopener noreferrer"
               data-location="hero_secondary">
              ${ICONS.whatsapp}
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div class="hero-trust-micro">
            <span>Professional Installation</span>
            <span class="separator">•</span>
            <span>Transparent Guidance</span>
            <span class="separator">•</span>
            <span>Complete Solar Solutions</span>
          </div>
        </div>

        <div class="hero-visual-wrapper">
          <div class="hero-image-frame">
            <img src="/assets/images/hero-rooftop-solar.jpg" 
                 alt="Residential elevated rooftop solar panel installation on a modern home terrace in Uttar Pradesh" 
                 width="720" 
                 height="480"
                 fetchpriority="high">
            
            <div class="hero-tag-badge badge-top-left">
              <span class="hero-tag-dot green"></span>
              <span>Rooftop Solar • Clean Energy</span>
            </div>

            <div class="hero-tag-badge badge-bottom-right">
              <span class="hero-tag-dot"></span>
              <span>Lower Electricity Costs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Trust Bar -->
  <section class="trust-bar-section" aria-label="Core Service Pillars">
    <div class="container">
      <div class="trust-bar-grid">
        <div class="trust-item">
          <div class="trust-item-icon">${ICONS.tool}</div>
          <div class="trust-item-content">
            <h3>Site Survey</h3>
            <p>Professional shadow analysis and structural roof assessment before quotation.</p>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-item-icon">${ICONS.sun}</div>
          <div class="trust-item-content">
            <h3>System Design</h3>
            <p>Accurate solar capacity engineered around your actual electricity usage.</p>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-item-icon">${ICONS.shield}</div>
          <div class="trust-item-content">
            <h3>Professional Installation</h3>
            <p>Proper electrical commissioning, galvanized structures, and safety earthing.</p>
          </div>
        </div>

        <div class="trust-item">
          <div class="trust-item-icon">${ICONS.headphones}</div>
          <div class="trust-item-content">
            <h3>After-Sales Support</h3>
            <p>Responsive local assistance, generation checks, and maintenance guidance.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Lead Generation Form Section -->
  <section class="section section-bg-surface" id="consultation">
    <div class="container">
      <div class="grid-cols-2" style="align-items: center; gap: 48px;">
        <div>
          <div class="eyebrow">Expert Guidance</div>
          <h2>Get Your Free Solar Consultation</h2>
          <p class="text-lead" style="margin-bottom: 24px;">
            Tell us a few details about your property and electricity usage. Our team will help you understand the right solar solution, expected generation, and applicable government subsidies.
          </p>

          <div style="display:flex; flex-direction:column; gap:16px; margin-bottom: 24px;">
            <div style="display:flex; align-items:flex-start; gap:12px;">
              <div style="width:24px; height:24px; border-radius:50%; background:var(--color-accent-light); color:#92400E; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${ICONS.check}</div>
              <div>
                <strong style="color:var(--color-primary); font-size:0.95rem;">Clear System Sizing</strong>
                <p style="font-size:0.85rem; margin-top:2px;">No oversized or undersized packages. Sized for your appliances.</p>
              </div>
            </div>

            <div style="display:flex; align-items:flex-start; gap:12px;">
              <div style="width:24px; height:24px; border-radius:50%; background:var(--color-accent-light); color:#92400E; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${ICONS.check}</div>
              <div>
                <strong style="color:var(--color-primary); font-size:0.95rem;">Subsidy Application Support</strong>
                <p style="font-size:0.85rem; margin-top:2px;">Step-by-step assistance with PM Surya Ghar portal documentation.</p>
              </div>
            </div>

            <div style="display:flex; align-items:flex-start; gap:12px;">
              <div style="width:24px; height:24px; border-radius:50%; background:var(--color-accent-light); color:#92400E; display:flex; align-items:center; justify-content:center; flex-shrink:0;">${ICONS.check}</div>
              <div>
                <strong style="color:var(--color-primary); font-size:0.95rem;">Local Service in UP</strong>
                <p style="font-size:0.85rem; margin-top:2px;">Rapid on-site surveys across Ayodhya, Lucknow, and surrounding cities.</p>
              </div>
            </div>
          </div>

          <div style="padding:16px; background:#FFFFFF; border-radius:var(--radius-md); border:1px solid var(--color-border); display:flex; align-items:center; gap:16px;">
            <div style="width:40px; height:40px; border-radius:50%; background:rgba(37, 211, 102, 0.1); color:var(--color-whatsapp); display:flex; align-items:center; justify-content:center; flex-shrink:0;">${ICONS.whatsapp}</div>
            <div>
              <div style="font-size:0.85rem; font-weight:700; color:var(--color-primary);">Prefer instant WhatsApp consultation?</div>
              <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20would%20like%20a%20free%20solar%20consultation." target="_blank" rel="noopener noreferrer" style="color:var(--color-whatsapp); font-size:0.85rem; font-weight:700;">Chat directly with an engineer →</a>
            </div>
          </div>
        </div>

        <div>
          <div class="lead-form-card">
            <h3 style="margin-bottom:6px;">Request Solar Consultation</h3>
            <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:20px;">
              Fill in your details below for a quick callback and customized solar estimate.
            </p>

            <form data-solar-form="quote" id="home-lead-form" action="https://formspree.io/f/xrpbadnn" method="POST">
              <!-- Honeypot -->
              <input type="text" name="website_shield_trap" class="form-honeypot" tabindex="-1" autocomplete="off">

              <div class="form-group">
                <label class="form-label" for="home-form-name">Name <span class="required">*</span></label>
                <input type="text" id="home-form-name" name="full_name" class="form-control" placeholder="Your Full Name" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="home-form-phone">Phone Number <span class="required">*</span></label>
                <input type="tel" id="home-form-phone" name="phone_number" class="form-control" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
              </div>

              <div class="form-grid-2col">
                <div class="form-group">
                  <label class="form-label" for="home-form-city">City <span class="required">*</span></label>
                  <select id="home-form-city" name="city" class="form-control" required>
                    <option value="">Select City</option>
                    ${TARGET_CITIES.map(c => `<option value="${c.shortName}">${c.name}</option>`).join('')}
                    <option value="Other UP">Other UP Location</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="home-form-property">Property Type</label>
                  <select id="home-form-property" name="property_type" class="form-control">
                    <option value="Home">Home</option>
                    <option value="Shop">Shop</option>
                    <option value="Office">Office</option>
                    <option value="Factory">Factory</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="home-form-bill">Monthly Electricity Bill (₹)</label>
                <input type="number" id="home-form-bill" name="monthly_bill" class="form-control" placeholder="e.g. 3000">
              </div>

              <button type="submit" class="btn btn-primary form-submit-btn">
                <span>Get My Free Solar Quote</span>
                <span class="btn-icon-circle">${ICONS.arrowRight}</span>
              </button>

              <div class="form-trust-note">
                ${ICONS.shield}
                <span>Transparent guidance. No spam or aggressive sales calls.</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Solar Calculator Section -->
  <section class="section" id="solar-calculator">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow eyebrow-accent">Interactive Tool</div>
        <h2>How Much Can You Save With Solar?</h2>
        <p>
          Adjust your monthly electricity bill to calculate estimated solar system size, monthly generation, annual savings, and terrace roof area required in Uttar Pradesh.
        </p>
      </div>

      <div class="calculator-card">
        <div class="calc-layout">
          <!-- Inputs Panel -->
          <div class="calc-inputs-panel">
            <h3 style="margin-bottom: 20px;">1. Enter Your Electricity Details</h3>

            <div class="calc-slider-wrapper">
              <div class="bill-display-box">
                <label class="form-label" style="margin-bottom:0;" for="calc-bill-slider">Monthly Electricity Bill</label>
                <div class="bill-amount-display" id="calc-bill-display">₹3,000</div>
              </div>

              <input type="range" 
                     id="calc-bill-slider" 
                     class="calc-range-slider" 
                     min="1000" 
                     max="40000" 
                     step="500" 
                     value="3000" 
                     aria-label="Monthly electricity bill range slider">
              
              <div class="calc-range-ticks">
                <span>₹1,000</span>
                <span>₹10,000</span>
                <span>₹20,000</span>
                <span>₹40,000+</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Property Type</label>
              <div class="property-type-chips">
                <label class="chip-label">
                  <input type="radio" name="calc_property_type" value="Home" checked>
                  <div class="chip-box">
                    ${ICONS.home}
                    <span>Home</span>
                  </div>
                </label>

                <label class="chip-label">
                  <input type="radio" name="calc_property_type" value="Shop">
                  <div class="chip-box">
                    ${ICONS.briefcase}
                    <span>Shop</span>
                  </div>
                </label>

                <label class="chip-label">
                  <input type="radio" name="calc_property_type" value="Office">
                  <div class="chip-box">
                    ${ICONS.zap}
                    <span>Office</span>
                  </div>
                </label>

                <label class="chip-label">
                  <input type="radio" name="calc_property_type" value="Factory">
                  <div class="chip-box">
                    ${ICONS.tool}
                    <span>Factory</span>
                  </div>
                </label>
              </div>
            </div>

            <div class="form-group" style="margin-bottom:0;">
              <label class="form-label" for="calc-city-select">Select Your City</label>
              <select id="calc-city-select" class="form-control">
                ${TARGET_CITIES.map(c => `<option value="${c.shortName}">${c.name}</option>`).join('')}
                <option value="Uttar Pradesh">Other UP Location</option>
              </select>
            </div>
          </div>

          <!-- Results Panel -->
          <div class="calc-results-panel">
            <div>
              <div class="calc-results-header">
                <div class="result-lead-badge">Estimated Requirement</div>
                <div class="recommended-kw-display">
                  <span class="kw-val" id="calc-result-kw">3</span>
                  <span class="kw-unit">kW System</span>
                </div>
                <p style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">
                  Recommended rooftop capacity based on UP solar irradiance.
                </p>
              </div>

              <div class="results-metrics-grid">
                <div class="result-metric-card">
                  <div class="result-metric-label">Estimated Monthly Generation</div>
                  <div class="result-metric-val" id="calc-result-monthly-gen">360 units</div>
                </div>

                <div class="result-metric-card">
                  <div class="result-metric-label">Approx. Annual Savings</div>
                  <div class="result-metric-val" id="calc-result-annual-savings" style="color:var(--color-success);">₹30,240 / yr</div>
                </div>

                <div class="result-metric-card">
                  <div class="result-metric-label">Approx. Monthly Savings</div>
                  <div class="result-metric-val" id="calc-result-monthly-savings">₹2,520 / mo</div>
                </div>

                <div class="result-metric-card">
                  <div class="result-metric-label">Roof Area Required</div>
                  <div class="result-metric-val" id="calc-result-roof-area">285 sq. ft.</div>
                </div>
              </div>

              <!-- Subsidy Callout in Calculator -->
              <div class="subsidy-highlight-card" id="calc-subsidy-card">
                <div>
                  <div class="subsidy-title">Govt Subsidy Support (Estimated)</div>
                  <div style="font-size:0.75rem; color:#065F46;" id="calc-subsidy-note">PM Surya Ghar + UP State Policy</div>
                </div>
                <div class="subsidy-amount" id="calc-subsidy-amount">Up to ₹1,08,000</div>
              </div>
            </div>

            <div>
              <div style="display:flex; flex-direction:column; gap:10px;">
                <a href="#" id="calc-whatsapp-cta" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" style="width:100%;">
                  ${ICONS.whatsapp}
                  <span>Get Detailed Assessment on WhatsApp</span>
                </a>
                
                <button type="button" id="calc-quote-modal-cta" class="btn btn-secondary" data-open-modal="quote-modal" style="width:100%;">
                  <span>Book Free Rooftop Site Survey</span>
                  <span class="btn-icon-circle">${ICONS.arrowRight}</span>
                </button>
              </div>

              <div class="calc-disclaimer">
                * Note: All calculations are engineering estimates. Actual energy output and savings depend on rooftop orientation, shadow clearance, component selection, seasonal sunlight variations, and official DISCOM billing tariffs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Solar Solutions Section -->
  <section class="section section-bg-surface" id="solar-solutions">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Solutions Portfolio</div>
        <h2>Solar Solutions for Homes & Businesses</h2>
        <p>
          Engineered solar energy systems built with tier-1 components, high-durability mounting structures, and complete grid interconnection support.
        </p>
      </div>

      <div class="grid-cols-3">
        <!-- 1. Residential Solar -->
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div class="card-icon-box">${ICONS.home}</div>
            <h3 style="margin-bottom:12px;">Residential Solar</h3>
            <p style="font-size:0.9rem; margin-bottom:20px; flex-grow:1;">
              Rooftop solar systems designed for homes and residential properties. Cut power bills by up to 90% while benefiting from PM Surya Ghar financial assistance.
            </p>
            <a href="/residential-solar/" class="btn btn-outline btn-sm" style="align-self:flex-start;">
              <span>Learn More</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <!-- 2. Commercial Solar -->
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div class="card-icon-box">${ICONS.briefcase}</div>
            <h3 style="margin-bottom:12px;">Commercial Solar</h3>
            <p style="font-size:0.9rem; margin-bottom:20px; flex-grow:1;">
              Solar solutions for offices, shops, schools, hotels and commercial buildings. Significantly reduce operational power expenses and claim 40% accelerated tax depreciation.
            </p>
            <a href="/commercial-solar/" class="btn btn-outline btn-sm" style="align-self:flex-start;">
              <span>Learn More</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <!-- 3. Industrial Solar -->
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div class="card-icon-box">${ICONS.tool}</div>
            <h3 style="margin-bottom:12px;">Industrial Solar</h3>
            <p style="font-size:0.9rem; margin-bottom:20px; flex-grow:1;">
              Larger capacity solar solutions for factories, warehouses, cold storages and industrial facilities with high daytime peak loads and large shed roof areas.
            </p>
            <a href="/commercial-solar/" class="btn btn-outline btn-sm" style="align-self:flex-start;">
              <span>Learn More</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <!-- 4. On-Grid Solar -->
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div class="card-icon-box">${ICONS.zap}</div>
            <h3 style="margin-bottom:12px;">On-Grid Solar</h3>
            <p style="font-size:0.9rem; margin-bottom:20px; flex-grow:1;">
              Grid-connected systems designed to eliminate purchased grid electricity. Surplus power automatically flows to the DISCOM grid through an official net meter.
            </p>
            <a href="/on-grid-solar/" class="btn btn-outline btn-sm" style="align-self:flex-start;">
              <span>Learn More</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <!-- 5. Off-Grid Solar -->
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div class="card-icon-box">${ICONS.sun}</div>
            <h3 style="margin-bottom:12px;">Off-Grid Solar</h3>
            <p style="font-size:0.9rem; margin-bottom:20px; flex-grow:1;">
              Solar systems with dedicated battery banks designed for rural properties, farmhouses, or areas requiring completely independent, self-sufficient electricity.
            </p>
            <a href="/off-grid-solar/" class="btn btn-outline btn-sm" style="align-self:flex-start;">
              <span>Learn More</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>

        <!-- 6. Hybrid Solar -->
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div class="card-icon-box">${ICONS.shield}</div>
            <h3 style="margin-bottom:12px;">Hybrid Solar</h3>
            <p style="font-size:0.9rem; margin-bottom:20px; flex-grow:1;">
              The best of both worlds: grid-tied net metering savings combined with lithium/tubular battery backup to keep critical appliances running during grid outages.
            </p>
            <a href="/hybrid-solar/" class="btn btn-outline btn-sm" style="align-self:flex-start;">
              <span>Learn More</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Solar Wale -->
  <section class="section" id="why-solar-wale">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Our Commitment</div>
        <h2>Why Choose Solar Wale?</h2>
        <p>
          We take a transparent, engineering-led approach to solar power. No inflated savings projections, no shortcuts in electrical safety, and dedicated local presence.
        </p>
      </div>

      <div class="grid-cols-3">
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Transparent Guidance</h3>
            <p style="font-size:0.9rem;">
              Clear explanation of system capacity, component specifications, expected generation curves, and realistic payback timelines without false claims.
            </p>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Customized System Design</h3>
            <p style="font-size:0.9rem;">
              Every rooftop is unique. We conduct shadow analysis and structural assessments to engineer a system tailored to your actual electricity consumption.
            </p>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Quality Components</h3>
            <p style="font-size:0.9rem;">
              We deploy reputable solar panels (Mono PERC / TopCon), high-efficiency grid inverters, hot-dip galvanized mounting structures, and copper solar cables.
            </p>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Professional Installation</h3>
            <p style="font-size:0.9rem;">
              Proper installation practices with strict attention to electrical safety, dedicated earthing pits, lightning arrestors, and weather-proof conduit routing.
            </p>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Complete Assistance</h3>
            <p style="font-size:0.9rem;">
              End-to-end liaison support through DISCOM net metering approvals, portal documentation, and applicable government subsidy verification procedures.
            </p>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">After-Sales Support</h3>
            <p style="font-size:0.9rem;">
              A responsive local support team to assist with generation monitoring, periodic maintenance checks, and warranty claim coordination whenever required.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works (6-Step Timeline) -->
  <section class="section section-bg-surface" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Clear Process</div>
        <h2>How It Works</h2>
        <p>
          Our streamlined 6-step solar transition ensures complete clarity from your initial inquiry to powering your premises with clean energy.
        </p>
      </div>

      <div class="timeline-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <h3>Free Consultation</h3>
          <p>Initial discussion on your monthly electricity bill, power requirements, and budget to identify suitable solar options.</p>
        </div>

        <div class="step-card">
          <div class="step-number">02</div>
          <h3>Site Survey</h3>
          <p>Technical on-site visit to inspect roof strength, shadow-free azimuth angle, cable run distance, and electrical distribution.</p>
        </div>

        <div class="step-card">
          <div class="step-number">03</div>
          <h3>System Design</h3>
          <p>Detailed engineering layout specifying panel arrangement, structure elevation, inverter sizing, and safety switchgear.</p>
        </div>

        <div class="step-card">
          <div class="step-number">04</div>
          <h3>Quotation</h3>
          <p>Transparent bill of materials with clear itemized pricing, component warranties, and estimated subsidy breakdown.</p>
        </div>

        <div class="step-card">
          <div class="step-number">05</div>
          <h3>Installation</h3>
          <p>Mechanical structure assembly, panel mounting, DC/AC cabling, earthing installation, and neat inverter mounting by trained technicians.</p>
        </div>

        <div class="step-card">
          <div class="step-number">06</div>
          <h3>Testing & Handover</h3>
          <p>Comprehensive electrical testing, DISCOM net meter synchronization, remote app monitoring setup, and documentation handover.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- What Solar System Size Do You Need? -->
  <section class="section" id="system-sizing">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Capacity Guide</div>
        <h2>What Solar System Size Do You Need?</h2>
        <p>
          Compare standard rooftop solar capacities to determine what fits your property's daily power demand and appliance usage in Uttar Pradesh.
        </p>
      </div>

      <div class="size-cards-grid">
        <!-- 1 kW -->
        <div class="size-card">
          <div>
            <div class="size-card-kw">1 <span>kW</span></div>
            <div class="size-card-suitable">Small Homes & 1-2 BHK</div>
            <ul class="size-card-specs">
              <li>${ICONS.check} <strong>Generation:</strong> ~120 units/mo</li>
              <li>${ICONS.check} <strong>Powers:</strong> Lights, fans, TV, fridge</li>
              <li>${ICONS.check} <strong>Roof Needed:</strong> ~90-100 sq ft</li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline btn-sm" data-open-modal="quote-modal" data-kw="1">Select 1 kW</button>
        </div>

        <!-- 2 kW -->
        <div class="size-card">
          <div>
            <div class="size-card-kw">2 <span>kW</span></div>
            <div class="size-card-suitable">2-3 BHK Homes</div>
            <ul class="size-card-specs">
              <li>${ICONS.check} <strong>Generation:</strong> ~240 units/mo</li>
              <li>${ICONS.check} <strong>Powers:</strong> Fans, fridge, TV, cooler/1 AC</li>
              <li>${ICONS.check} <strong>Roof Needed:</strong> ~180-200 sq ft</li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline btn-sm" data-open-modal="quote-modal" data-kw="2">Select 2 kW</button>
        </div>

        <!-- 3 kW -->
        <div class="size-card popular">
          <div class="size-card-tag">Most Popular in UP</div>
          <div>
            <div class="size-card-kw">3 <span>kW</span></div>
            <div class="size-card-suitable">3-4 BHK Homes & Duplexes</div>
            <ul class="size-card-specs">
              <li>${ICONS.check} <strong>Generation:</strong> ~360-380 units/mo</li>
              <li>${ICONS.check} <strong>Powers:</strong> 1-2 ACs, water motor, all basics</li>
              <li>${ICONS.check} <strong>Max Subsidy:</strong> Eligible for ₹78k PM Surya Ghar</li>
              <li>${ICONS.check} <strong>Roof Needed:</strong> ~270-300 sq ft</li>
            </ul>
          </div>
          <button type="button" class="btn btn-primary btn-sm" data-open-modal="quote-modal" data-kw="3">Select 3 kW</button>
        </div>

        <!-- 5 kW -->
        <div class="size-card">
          <div>
            <div class="size-card-kw">5 <span>kW</span></div>
            <div class="size-card-suitable">Large Homes & Boutiques</div>
            <ul class="size-card-specs">
              <li>${ICONS.check} <strong>Generation:</strong> ~600-650 units/mo</li>
              <li>${ICONS.check} <strong>Powers:</strong> 2-3 ACs, geysers, motors, appliances</li>
              <li>${ICONS.check} <strong>Roof Needed:</strong> ~450-500 sq ft</li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline btn-sm" data-open-modal="quote-modal" data-kw="5">Select 5 kW</button>
        </div>

        <!-- 10 kW+ -->
        <div class="size-card">
          <div>
            <div class="size-card-kw">10 <span>kW+</span></div>
            <div class="size-card-suitable">Commercial, Schools & Hospitals</div>
            <ul class="size-card-specs">
              <li>${ICONS.check} <strong>Generation:</strong> ~1,200+ units/mo</li>
              <li>${ICONS.check} <strong>Powers:</strong> Central cooling, machinery, heavy load</li>
              <li>${ICONS.check} <strong>Benefit:</strong> 40% Accelerated Depreciation</li>
              <li>${ICONS.check} <strong>Roof Needed:</strong> ~900+ sq ft</li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline btn-sm" data-open-modal="quote-modal" data-kw="10">Select 10 kW+</button>
        </div>
      </div>

      <div style="text-align:center; margin-top:36px; padding:20px; background:var(--color-bg-surface); border-radius:var(--radius-md); border:1px solid var(--color-border); max-width:680px; margin-left:auto; margin-right:auto;">
        <p style="font-size:0.95rem; font-weight:600; color:var(--color-primary); margin-bottom:12px;">
          Not sure what size you need? Let our engineering team calculate it for you.
        </p>
        <button type="button" class="btn btn-primary btn-sm" data-open-modal="quote-modal">
          <span>Calculate My Requirement</span>
          <span class="btn-icon-circle">${ICONS.arrowRight}</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Projects Showcase Section -->
  <section class="section section-bg-surface" id="projects">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Real Installations</div>
        <h2>Solar Wale Projects</h2>
        <p>
          A selection of rooftop solar installations across residential, commercial, and institutional properties in Uttar Pradesh.
        </p>
      </div>

      <div class="grid-cols-3">
        <!-- Project 1 -->
        <div class="project-card">
          <div class="project-card-image">
            <img src="/assets/images/project-ayodhya-residential.jpg" alt="3 kW Residential Rooftop Solar installation in Ayodhya, Uttar Pradesh" loading="lazy" width="600" height="340">
            <div class="project-card-badges">
              <span class="badge badge-solar">3 kW On-Grid</span>
              <span class="badge badge-navy">Residential</span>
            </div>
          </div>
          <div class="project-card-body">
            <h3 class="project-card-title">3 kW Residential Rooftop Solar</h3>
            <div class="project-card-meta">
              <span>${ICONS.mapPin} Ayodhya, Uttar Pradesh</span>
            </div>
            <p class="project-card-desc">
              Elevated terrace structure installation with high-efficiency monocrystalline panels and net metering synchronization under MVVNL.
            </p>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card">
          <div class="project-card-image">
            <img src="/assets/images/hero-rooftop-solar.jpg" alt="5 kW Home Solar Installation in Lucknow, Uttar Pradesh" loading="lazy" width="600" height="340">
            <div class="project-card-badges">
              <span class="badge badge-solar">5 kW System</span>
              <span class="badge badge-navy">Residential</span>
            </div>
          </div>
          <div class="project-card-body">
            <h3 class="project-card-title">5 kW Home Solar Installation</h3>
            <div class="project-card-meta">
              <span>${ICONS.mapPin} Lucknow, Uttar Pradesh</span>
            </div>
            <p class="project-card-desc">
              Custom pergola elevated mounting structure preserving usable rooftop leisure space while powering 2 ACs and domestic appliances.
            </p>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-card">
          <div class="project-card-image">
            <img src="/assets/images/commercial-solar-rooftop.jpg" alt="15 kW Commercial Rooftop Solar Plant in Gorakhpur, Uttar Pradesh" loading="lazy" width="600" height="340">
            <div class="project-card-badges">
              <span class="badge badge-solar">15 kW Commercial</span>
              <span class="badge badge-navy">Institutional</span>
            </div>
          </div>
          <div class="project-card-body">
            <h3 class="project-card-title">15 kW Commercial Rooftop Plant</h3>
            <div class="project-card-meta">
              <span>${ICONS.mapPin} Gorakhpur, Uttar Pradesh</span>
            </div>
            <p class="project-card-desc">
              Commercial institution solar plant engineered for daytime peak load offset with hot-dip galvanized racking and multi-MPPT inverter.
            </p>
          </div>
        </div>
      </div>

      <div style="text-align:center; margin-top:36px;">
        <a href="/projects/" class="btn btn-secondary">
          <span>View All Projects</span>
          <span class="btn-icon-circle">${ICONS.arrowRight}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Solar Subsidy & Government Assistance Section -->
  <section class="section" id="solar-subsidy">
    <div class="container">
      <div class="subsidy-box">
        <div class="eyebrow" style="background:rgba(255,255,255,0.15); color:#FDE68A; border-color:rgba(255,255,255,0.2);">
          Government Assistance
        </div>
        <h2>Solar Subsidy & Government Financial Assistance</h2>
        <p style="max-width:680px; font-size:1.05rem; margin-top:8px;">
          Eligible residential rooftop solar customers in Uttar Pradesh can benefit from applicable Central and State government solar subsidies under the PM Surya Ghar Muft Bijli Yojana.
        </p>

        <div class="subsidy-steps-grid">
          <div class="subsidy-step-card">
            <div class="subsidy-step-num">Step 1</div>
            <h4>Eligibility Check</h4>
            <p>Independent residential property with an active domestic electricity connection in the owner's name.</p>
          </div>

          <div class="subsidy-step-card">
            <div class="subsidy-step-num">Step 2</div>
            <h4>Portal Registration</h4>
            <p>Registration on the National Solar Rooftop Portal with your DISCOM consumer number.</p>
          </div>

          <div class="subsidy-step-card">
            <div class="subsidy-step-num">Step 3</div>
            <h4>Installation & Inspection</h4>
            <p>Commissioning by an experienced solar installer with compliant technical standards.</p>
          </div>

          <div class="subsidy-step-card">
            <div class="subsidy-step-num">Step 4</div>
            <h4>Direct Subsidy Credit</h4>
            <p>Net meter installation followed by direct bank transfer (DBT) of the subsidy to your account.</p>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
          <a href="/solar-subsidy/" class="btn btn-primary">
            <span>Check Your Solar Eligibility</span>
            <span class="btn-icon-circle">${ICONS.arrowRight}</span>
          </a>
          <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-white btn-sm" style="font-size:0.85rem;">
            <span>Official Portal Link (PM Surya Ghar) ↗</span>
          </a>
        </div>

        <div class="subsidy-disclaimer-note">
          <strong>Important Regulatory Note:</strong> Government schemes, eligibility requirements, rules, and subsidy amounts are established by the Ministry of New and Renewable Energy (MNRE) and the Government of Uttar Pradesh (UPNEDA). Rules may change over time. Please verify the latest applicable rules with the relevant official authority or consult our team for current guidelines.
        </div>
      </div>
    </div>
  </section>

  <!-- Cities We Serve Across Uttar Pradesh -->
  <section class="section section-bg-surface" id="cities-we-serve">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Local Presence</div>
        <h2>Solar Panel Installation Across Uttar Pradesh</h2>
        <p>
          Solar Wale provides rooftop solar consultation, engineering, and installation services across selected key cities and nearby districts in Uttar Pradesh.
        </p>
      </div>

      <div class="cities-grid">
        ${TARGET_CITIES.map(c => `
          <a href="/cities/${c.slug}/" class="city-card">
            <div>
              <div class="city-card-header">
                <div class="city-card-name">${c.name}</div>
                <div class="city-card-tag">UP</div>
              </div>
              <p class="city-card-desc">${c.desc}</p>
              <div style="font-size:0.75rem; color:var(--color-text-subtle); margin-bottom:12px;">
                <strong>DISCOM:</strong> ${c.discom}
              </div>
            </div>
            <div class="city-card-action">
              <span>View City Solutions</span>
              <span>${ICONS.arrowRight}</span>
            </div>
          </a>
        `).join('')}
      </div>

      <div style="text-align:center; margin-top:32px;">
        <p style="font-size:0.85rem; color:var(--color-text-subtle);">
          Don't see your city? We are actively expanding across Uttar Pradesh. <a href="/contact/" style="color:var(--color-primary); font-weight:700; text-decoration:underline;">Contact us</a> to check feasibility in your area.
        </p>
      </div>
    </div>
  </section>

  <!-- Trusted Solar Technology / Components Section -->
  <section class="section" id="technology">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Component Standards</div>
        <h2>Trusted Solar Technology</h2>
        <p>
          We build with high-grade components designed to withstand Uttar Pradesh's harsh summer heat, monsoons, and winter temperature swings.
        </p>
      </div>

      <div class="grid-cols-3">
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Solar Panels</h3>
            <p style="font-size:0.9rem; margin-bottom:12px;">
              High-efficiency Monocrystalline PERC, TopCon, and Bifacial PV modules delivering maximum power output per square foot of terrace area.
            </p>
            <ul style="font-size:0.8rem; color:var(--color-text-subtle); display:flex; flex-direction:column; gap:4px;">
              <li>• Positive power tolerance (0 to +5W)</li>
              <li>• High wind & snow load durability</li>
              <li>• 25+ years linear power performance warranty</li>
            </ul>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Solar Inverters</h3>
            <p style="font-size:0.9rem; margin-bottom:12px;">
              Modern grid-tied string and hybrid inverters with advanced dual-MPPT tracking, high conversion efficiency (>98%), and built-in Wi-Fi monitoring.
            </p>
            <ul style="font-size:0.8rem; color:var(--color-text-subtle); display:flex; flex-direction:column; gap:4px;">
              <li>• Real-time smartphone generation tracking</li>
              <li>• IP65 weather-proof outdoor protection</li>
              <li>• DISCOM grid safety sync & anti-islanding</li>
            </ul>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <h3 style="font-size:1.15rem; margin-bottom:8px;">Mounting Structures</h3>
            <p style="font-size:0.9rem; margin-bottom:12px;">
              Heavy-duty hot-dip galvanized iron (GI) and anodized aluminum structures engineered to resist corrosion and withstand high wind speeds up to 150 km/h.
            </p>
            <ul style="font-size:0.8rem; color:var(--color-text-subtle); display:flex; flex-direction:column; gap:4px;">
              <li>• Elevated high-rise terrace pergolas available</li>
              <li>• Stainless steel SS-304 fastener hardware</li>
              <li>• Zero roof water-leakage anchor design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Feedback & Verified Trust -->
  <section class="section section-bg-surface" id="reviews">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Customer Feedback</div>
        <h2>What Our Customers Value</h2>
        <p>
          Read genuine feedback from residential and commercial property owners who transitioned to rooftop solar with Solar Wale.
        </p>
      </div>

      <div class="grid-cols-3">
        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div style="color:#F59E0B; margin-bottom:10px; font-size:1.1rem;">★★★★★</div>
            <p style="font-size:0.925rem; line-height:1.6; margin-bottom:16px;">
              "The Solar Wale team did an exceptional job with our 3 kW home installation in Ayodhya. The elevated structure gives us full use of our roof, and our electricity bill dropped drastically."
            </p>
            <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-top:auto;">
              <strong style="color:var(--color-primary); font-size:0.9rem; display:block;">Anand K. Shukla</strong>
              <span style="font-size:0.8rem; color:var(--color-text-subtle);">Residential 3 kW • Ayodhya</span>
            </div>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div style="color:#F59E0B; margin-bottom:10px; font-size:1.1rem;">★★★★★</div>
            <p style="font-size:0.925rem; line-height:1.6; margin-bottom:16px;">
              "Very clear advice on the net meter process with MVVNL in Lucknow. No hidden costs or confusing jargon. The mobile app makes tracking daily generation very easy."
            </p>
            <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-top:auto;">
              <strong style="color:var(--color-primary); font-size:0.9rem; display:block;">Pradeep Srivastava</strong>
              <span style="font-size:0.8rem; color:var(--color-text-subtle);">Home Solar 5 kW • Gomti Nagar, Lucknow</span>
            </div>
          </div>
        </div>

        <div class="card-bezel">
          <div class="card-bezel-inner">
            <div style="color:#F59E0B; margin-bottom:10px; font-size:1.1rem;">★★★★★</div>
            <p style="font-size:0.925rem; line-height:1.6; margin-bottom:16px;">
              "We installed a 10 kW commercial system for our retail shop in Sultanpur. The installation was neat, safety earthing was done properly, and daytime power cuts are no longer an issue."
            </p>
            <div style="border-top:1px solid var(--color-border); padding-top:12px; margin-top:auto;">
              <strong style="color:var(--color-primary); font-size:0.9rem; display:block;">Mohd. Farooq</strong>
              <span style="font-size:0.8rem; color:var(--color-text-subtle);">Commercial 10 kW • Sultanpur</span>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align:center; margin-top:28px;">
        <span style="font-size:0.8rem; color:var(--color-text-subtle);">
          * Testimonials reflect customer experiences with Solar Wale installations in Uttar Pradesh.
        </span>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section" id="faq">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Clear Answers</div>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about rooftop solar installation, billing, subsidies, and maintenance in Uttar Pradesh.</p>
      </div>

      ${renderFaqAccordion(homeFaqs)}

      <div style="text-align:center; margin-top:36px;">
        <p style="font-size:0.95rem; color:var(--color-text-muted); margin-bottom:12px;">Have more specific questions regarding your property?</p>
        <a href="/faq/" class="btn btn-outline btn-sm">Explore Complete Solar Knowledgebase →</a>
      </div>
    </div>
  </section>

  <!-- Final Call to Action -->
  <section class="section section-bg-surface" style="border-top:1px solid var(--color-border);">
    <div class="container">
      <div style="background:var(--color-primary); border-radius:var(--radius-xl); padding:clamp(36px, 6vw, 64px); color:#FFFFFF; text-align:center; max-width:960px; margin:0 auto; box-shadow:var(--shadow-lg);">
        <h2 style="color:#FFFFFF; margin-bottom:16px;">Ready to Power Your Property with Solar?</h2>
        <p style="color:#CBD5E1; max-width:600px; margin:0 auto 28px; font-size:1.05rem;">
          Schedule your free rooftop site survey with Solar Wale. We analyze your electricity usage and engineer a customized solar proposal.
        </p>

        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
          <button type="button" class="btn btn-primary btn-lg" data-open-modal="quote-modal">
            <span>Get Free Solar Quote</span>
            <span class="btn-icon-circle">${ICONS.arrowRight}</span>
          </button>
          
          <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20would%20like%20to%20schedule%20a%20site%20survey." class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
            ${ICONS.whatsapp}
            <span>WhatsApp Us Now</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  `;

  const html = renderPage({
    title: metaTitle,
    metaDescription: metaDesc,
    canonicalUrl: '/',
    activeNav: '/',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Solar Wale",
      "url": SITE_DOMAIN,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_DOMAIN}/cities/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    bodyContent
  });

  writeHtml('index.html', html);
}

// ==========================================================================
// 2. DEDICATED CITY PAGES BUILDER (8 CITIES + CITIES HUB)
// ==========================================================================
function buildCityPages() {
  // 2.A Cities Hub Page (/cities/)
  const hubTitle = "Solar Panel Installation Cities in Uttar Pradesh | Solar Wale";
  const hubDesc = "Solar Wale provides rooftop solar panel consultation, net metering assistance & turnkey installations across Ayodhya, Lucknow, Sultanpur, Gonda, Barabanki, Amethi, Prayagraj, and Gorakhpur.";
  registerUrl('/cities/', '0.9', 'weekly');

  const hubBody = `
  <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
    <div class="container">
      <div class="section-header text-left" style="max-width: 840px;">
        <div class="eyebrow eyebrow-accent">Uttar Pradesh Service Coverage</div>
        <h1>Solar Panel Installation Across Selected Cities in Uttar Pradesh</h1>
        <p class="text-lead">
          Solar Wale operates dedicated local consultation and engineering installation teams across primary urban and industrial centers in Uttar Pradesh. Select your city below to learn about local DISCOM procedures, net metering, solar irradiance, and tailored rooftop solutions.
        </p>
      </div>

      <div class="cities-grid">
        ${TARGET_CITIES.map(c => `
          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px;">
                <h2 style="font-size:1.35rem; color:var(--color-primary);">${c.name}</h2>
                <span class="badge badge-solar">UP</span>
              </div>
              <p style="font-size:0.9rem; color:var(--color-text-muted); margin-bottom:16px; flex-grow:1;">${c.desc}</p>
              
              <div style="font-size:0.8rem; color:var(--color-text-subtle); padding:10px; background:var(--color-bg-surface); border-radius:var(--radius-sm); margin-bottom:16px;">
                <div><strong>Electricity DISCOM:</strong> ${c.discom}</div>
                <div style="margin-top:4px;"><strong>Key Local Areas:</strong> ${c.areas}</div>
              </div>

              <a href="/cities/${c.slug}/" class="btn btn-primary btn-sm" style="width:100%;">
                <span>Explore Solar in ${c.shortName}</span>
                <span class="btn-icon-circle">${ICONS.arrowRight}</span>
              </a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Expansion Note -->
      <div style="margin-top:60px; padding:32px; background:var(--color-bg-surface); border-radius:var(--radius-xl); border:1px solid var(--color-border); text-align:center;">
        <h3 style="margin-bottom:10px;">Expanding to More Cities Across Uttar Pradesh</h3>
        <p style="max-width:680px; margin:0 auto 20px; font-size:0.95rem;">
          Solar Wale is progressively expanding operations to neighboring districts including Basti, Rae Bareli, Pratapgarh, and Jaunpur. If your property is near our serviceable cities, our team can arrange a dedicated technical site survey.
        </p>
        <button type="button" class="btn btn-secondary" data-open-modal="quote-modal">
          <span>Inquire About Feasibility in Your Area</span>
          <span class="btn-icon-circle">${ICONS.arrowRight}</span>
        </button>
      </div>
    </div>
  </section>
  `;

  writeHtml('cities/index.html', renderPage({
    title: hubTitle,
    metaDescription: hubDesc,
    canonicalUrl: '/cities/',
    activeNav: '/cities/',
    breadcrumbs: [{ title: 'Cities We Serve', url: '/cities/' }],
    bodyContent: hubBody
  }));

  // 2.B Individual City Landing Pages
  TARGET_CITIES.forEach(city => {
    const route = `/cities/${city.slug}/`;
    registerUrl(route, '0.9', 'weekly');

    let pageTitle = `Solar Panel Installation in ${city.name} | Solar Wale`;
    if (city.slug === 'ayodhya') {
      pageTitle = `Solar Panel Installation in Ayodhya & Faizabad | Solar Wale`;
    }

    const pageDesc = `Looking for rooftop solar panel installation in ${city.shortName}? Solar Wale offers turnkey residential & commercial solar systems with ${city.discom} net metering & PM Surya Ghar subsidy support.`;

    const cityFaqs = [
      {
        question: `How much does rooftop solar installation cost in ${city.shortName}?`,
        answer: `The cost of rooftop solar in ${city.shortName} depends on system capacity, inverter type, and structure height. A standard 3 kW residential on-grid system generally ranges between ₹1,80,000 to ₹2,20,000 before government subsidy. With the PM Surya Ghar Central subsidy of ₹78,000 plus UP state assistance, the effective homeowner expense is substantially lower.`
      },
      {
        question: `How does net metering work with ${city.discom} in ${city.shortName}?`,
        answer: `In ${city.shortName}, net metering is facilitated through ${city.discom}. Once your solar system is installed, a joint inspection is performed and a bidirectional meter is installed. Units produced by your panels are first consumed by your building, and any surplus units are fed back into the grid, offsetting your electricity bill.`
      },
      {
        question: `Can Solar Wale help with the PM Surya Ghar subsidy application in ${city.shortName}?`,
        answer: `Yes. Solar Wale manages the complete documentation process on the national portal for consumers in ${city.shortName}, including consumer number validation, feasibility submission, vendor agreement, net meter application, and final subsidy disbursement paperwork.`
      },
      {
        question: `How long does an installation take in ${city.shortName}?`,
        answer: `Site surveys in ${city.shortName} are typically scheduled within 24 to 48 hours. Physical mounting on your terrace takes 2 to 3 days, followed by DISCOM net meter processing.`
      },
      {
        question: `Which neighborhoods in ${city.shortName} does Solar Wale cover?`,
        answer: `We serve all primary localities across ${city.shortName} including ${city.areas}, as well as immediate peripheral residential and industrial hubs.`
      }
    ];

    const cityBody = `
    <!-- City Hero -->
    <section class="hero-section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="eyebrow eyebrow-accent">
              <span class="eyebrow-dot"></span>
              <span>Local Solar Specialists • ${city.name}</span>
            </div>

            <h1 class="hero-title">
              Solar Panel Installation in <br>
              <span class="highlight">${city.name}</span>
            </h1>

            <p class="hero-subtitle">
              Solar Wale provides rooftop solar consultation, customized engineering, and complete turnkey installation services for homes and businesses in ${city.name} and nearby areas.
            </p>

            <div class="hero-ctas">
              <button type="button" class="btn btn-primary btn-lg" data-open-modal="quote-modal" data-city="${city.shortName}">
                <span>Get Free Quote in ${city.shortName}</span>
                <span class="btn-icon-circle">${ICONS.arrowRight}</span>
              </button>

              <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20am%20looking%20for%20solar%20panel%20installation%20in%20${encodeURIComponent(city.shortName)}." 
                 class="btn btn-whatsapp btn-lg" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 data-location="city_hero">
                ${ICONS.whatsapp}
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div class="hero-trust-micro">
              <span>${city.discom} Support</span>
              <span class="separator">•</span>
              <span>PM Surya Ghar Subsidy</span>
              <span class="separator">•</span>
              <span>Local UP Engineers</span>
            </div>
          </div>

          <div class="hero-visual-wrapper">
            <div class="hero-image-frame">
              <img src="${city.slug === 'ayodhya' ? '/assets/images/project-ayodhya-residential.jpg' : '/assets/images/hero-rooftop-solar.jpg'}" 
                   alt="Rooftop solar panel installation project in ${city.name}, Uttar Pradesh" 
                   width="720" 
                   height="480">
              
              <div class="hero-tag-badge badge-top-left">
                <span class="hero-tag-dot green"></span>
                <span>Active in ${city.shortName}</span>
              </div>

              <div class="hero-tag-badge badge-bottom-right">
                <span class="hero-tag-dot"></span>
                <span>${city.discom} Net Metering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Local Service Overview -->
    <section class="section section-bg-surface">
      <div class="container">
        <div class="grid-cols-2" style="gap:48px; align-items:center;">
          <div>
            <div class="eyebrow">Local Rooftop Solar</div>
            <h2>Why Solar Makes Sense for Properties in ${city.shortName}</h2>
            <p style="margin-bottom:16px;">
              ${city.shortName} receives approximately 300 days of bright sunshine annually, with an average solar irradiance of 4.5 to 5.0 kWh/m²/day. With domestic and commercial power tariffs in Uttar Pradesh, switching to rooftop solar provides an immediate monthly reduction in electricity bills while protecting against seasonal power outages.
            </p>
            <p style="margin-bottom:20px;">
              Whether you own an independent house in a residential colony or operate a commercial showroom, school, or workshop, Solar Wale engineers system layouts that maximize terrace space utility through elevated galvanized structures.
            </p>

            <div style="padding:16px; background:#FFFFFF; border-radius:var(--radius-md); border:1px solid var(--color-border); margin-bottom:24px;">
              <h4 style="margin-bottom:6px; color:var(--color-primary);">Local Areas & Colonies Served in ${city.shortName}:</h4>
              <p style="font-size:0.85rem; color:var(--color-text-muted);">${city.areas}, and surrounding localities.</p>
            </div>

            <div style="display:flex; gap:16px; flex-wrap:wrap;">
              <button type="button" class="btn btn-primary" data-open-modal="quote-modal" data-city="${city.shortName}">
                <span>Book Site Survey in ${city.shortName}</span>
                <span class="btn-icon-circle">${ICONS.arrowRight}</span>
              </button>
              <a href="tel:+919580659559" class="btn btn-outline">
                ${ICONS.phone}
                <span>Call ${PHONE_NUMBER}</span>
              </a>
            </div>
          </div>

          <!-- Quick Lead Form for City -->
          <div>
            <div class="lead-form-card">
              <h3 style="margin-bottom:6px;">Solar Consultation for ${city.shortName}</h3>
              <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:20px;">
                Enter your details to schedule a shadow-free roof survey in ${city.shortName}.
              </p>

              <form data-solar-form="quote" id="city-lead-form-${city.slug}" action="https://formspree.io/f/xrpbadnn" method="POST">
                <input type="text" name="website_shield_trap" class="form-honeypot" tabindex="-1" autocomplete="off">
                <input type="hidden" name="city" value="${city.shortName}">

                <div class="form-group">
                  <label class="form-label" for="c-name-${city.slug}">Your Name <span class="required">*</span></label>
                  <input type="text" id="c-name-${city.slug}" name="full_name" class="form-control" placeholder="Your Name" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="c-phone-${city.slug}">Mobile Number (+91) <span class="required">*</span></label>
                  <input type="tel" id="c-phone-${city.slug}" name="phone_number" class="form-control" placeholder="10-digit number" pattern="[0-9]{10}" required>
                </div>

                <div class="form-grid-2col">
                  <div class="form-group">
                    <label class="form-label" for="c-type-${city.slug}">Property</label>
                    <select id="c-type-${city.slug}" name="property_type" class="form-control">
                      <option value="Home">Home</option>
                      <option value="Shop">Shop</option>
                      <option value="Office">Office</option>
                      <option value="Factory">Factory</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label class="form-label" for="c-bill-${city.slug}">Monthly Bill (₹)</label>
                    <input type="number" id="c-bill-${city.slug}" name="monthly_bill" class="form-control" placeholder="e.g. 3500">
                  </div>
                </div>

                <button type="submit" class="btn btn-primary form-submit-btn">
                  <span>Get Solar Quote for ${city.shortName}</span>
                  <span class="btn-icon-circle">${ICONS.arrowRight}</span>
                </button>

                <div class="form-trust-note">
                  ${ICONS.shield}
                  <span>No spam. Local engineer callback within 2 business hours.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solar Solutions Available in City -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Solutions Portfolio</div>
          <h2>Solar Solutions Available in ${city.shortName}</h2>
          <p>We deploy proven rooftop solar technologies suited for ${city.shortName}'s grid conditions and electrical infrastructure.</p>
        </div>

        <div class="grid-cols-3">
          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div class="card-icon-box">${ICONS.home}</div>
              <h3 style="margin-bottom:8px;">Residential Rooftop Solar</h3>
              <p style="font-size:0.9rem; margin-bottom:16px;">
                Designed for independent residences in ${city.shortName}. Benefit from PM Surya Ghar financial assistance and export excess daytime generation to ${city.discom}.
              </p>
              <a href="/residential-solar/" class="btn btn-outline btn-sm">Residential Guide →</a>
            </div>
          </div>

          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div class="card-icon-box">${ICONS.briefcase}</div>
              <h3 style="margin-bottom:8px;">Commercial & Retail Solar</h3>
              <p style="font-size:0.9rem; margin-bottom:16px;">
                Designed for retail shops, offices, diagnostic centers, and schools in ${city.shortName}. Offset high daytime commercial tariffs and claim 40% depreciation.
              </p>
              <a href="/commercial-solar/" class="btn btn-outline btn-sm">Commercial Guide →</a>
            </div>
          </div>

          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div class="card-icon-box">${ICONS.shield}</div>
              <h3 style="margin-bottom:8px;">Hybrid Solar with Battery</h3>
              <p style="font-size:0.9rem; margin-bottom:16px;">
                Combines grid-tied solar savings with energy storage. Perfect for ${city.shortName} neighborhoods with periodic grid fluctuations and power cuts.
              </p>
              <a href="/hybrid-solar/" class="btn btn-outline btn-sm">Hybrid Systems →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- City System Size Guide -->
    <section class="section section-bg-surface">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Sizing Recommendation</div>
          <h2>Recommended Solar Sizes for Properties in ${city.shortName}</h2>
          <p>Find the right capacity for your home or commercial premises.</p>
        </div>

        <div class="grid-cols-3">
          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div style="font-size:1.5rem; font-weight:800; color:var(--color-primary); margin-bottom:4px;">3 kW System</div>
              <div style="font-size:0.85rem; font-weight:700; color:var(--color-accent); margin-bottom:12px;">Standard 3-4 BHK Homes in ${city.shortName}</div>
              <p style="font-size:0.875rem; margin-bottom:14px;">Generates ~360 units per month. Covers 1 AC, refrigerator, lights, and fans. Qualifies for maximum PM Surya Ghar central subsidy.</p>
              <div style="font-size:0.8rem; color:var(--color-text-subtle);"><strong>Roof Area Needed:</strong> ~270-300 sq. ft.</div>
            </div>
          </div>

          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div style="font-size:1.5rem; font-weight:800; color:var(--color-primary); margin-bottom:4px;">5 kW System</div>
              <div style="font-size:0.85rem; font-weight:700; color:var(--color-accent); margin-bottom:12px;">Large Residences & Clinics in ${city.shortName}</div>
              <p style="font-size:0.875rem; margin-bottom:14px;">Generates ~600-650 units per month. Powers 2 to 3 air conditioners, water motor, and continuous domestic load.</p>
              <div style="font-size:0.8rem; color:var(--color-text-subtle);"><strong>Roof Area Needed:</strong> ~450-500 sq. ft.</div>
            </div>
          </div>

          <div class="card-bezel">
            <div class="card-bezel-inner">
              <div style="font-size:1.5rem; font-weight:800; color:var(--color-primary); margin-bottom:4px;">10 kW+ System</div>
              <div style="font-size:0.85rem; font-weight:700; color:var(--color-accent); margin-bottom:12px;">Commercial Complexes & Workshops</div>
              <p style="font-size:0.875rem; margin-bottom:14px;">Generates 1,200+ units per month. Ideal for high daytime electricity loads, commercial cooling, and machinery.</p>
              <div style="font-size:0.8rem; color:var(--color-text-subtle);"><strong>Roof Area Needed:</strong> ~900+ sq. ft.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- City FAQs -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="eyebrow">Local Knowledge</div>
          <h2>Frequently Asked Questions in ${city.shortName}</h2>
          <p>Common questions from property owners in ${city.name} regarding solar installation and net metering.</p>
        </div>

        ${renderFaqAccordion(cityFaqs)}
      </div>
    </section>

    <!-- Local City Conversion Banner -->
    <section class="section section-bg-surface" style="border-top:1px solid var(--color-border);">
      <div class="container">
        <div style="background:var(--color-primary); border-radius:var(--radius-xl); padding:clamp(36px, 6vw, 56px); color:#FFFFFF; text-align:center; max-width:960px; margin:0 auto; box-shadow:var(--shadow-lg);">
          <h2 style="color:#FFFFFF; margin-bottom:16px;">Looking for Solar Panel Installation in ${city.name}?</h2>
          <p style="color:#CBD5E1; max-width:600px; margin:0 auto 28px; font-size:1.05rem;">
            Connect directly with Solar Wale's engineering team for an on-site survey and customized quotation for your property.
          </p>

          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <a href="tel:+919580659559" class="btn btn-white btn-lg">
              ${ICONS.phone}
              <span>Call: ${PHONE_NUMBER}</span>
            </a>

            <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20am%20looking%20for%20solar%20panel%20installation%20in%20${encodeURIComponent(city.shortName)}." 
               class="btn btn-whatsapp btn-lg" 
               target="_blank" 
               rel="noopener noreferrer">
              ${ICONS.whatsapp}
              <span>WhatsApp: ${PHONE_NUMBER}</span>
            </a>

            <button type="button" class="btn btn-primary btn-lg" data-open-modal="quote-modal" data-city="${city.shortName}">
              <span>Get Free Solar Quote</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
    `;

    const cityHtml = renderPage({
      title: pageTitle,
      metaDescription: pageDesc,
      canonicalUrl: route,
      activeNav: '/cities/',
      breadcrumbs: [
        { title: 'Cities We Serve', url: '/cities/' },
        { title: city.shortName, url: route }
      ],
      cityContext: city.shortName,
      schema: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Solar Wale - Solar Panel Installation ${city.shortName}`,
        "telephone": "+91-9580659559",
        "email": "hello@solarwale.online",
        "url": `${SITE_DOMAIN}${route}`,
        "areaServed": {
          "@type": "City",
          "name": city.shortName
        },
        "description": `Professional rooftop solar panel installation and ${city.discom} net metering solutions in ${city.name}, Uttar Pradesh.`
      },
      bodyContent: cityBody
    });

    writeHtml(`cities/${city.slug}/index.html`, cityHtml);
  });
}

// ==========================================================================
// 3. CORE SERVICE PAGES BUILDER (10 PAGES)
// ==========================================================================
function buildServicePages() {
  const servicePages = [
    {
      slug: 'solar-panel-installation',
      title: 'Solar Panel Installation in Uttar Pradesh | Rooftop Solar Solutions',
      metaDesc: 'Professional rooftop solar panel installation across Uttar Pradesh. Site survey, custom engineering, high-efficiency panels, and full DISCOM net metering support.',
      h1: 'Professional Solar Panel Installation in Uttar Pradesh',
      lead: 'Turnkey rooftop solar solutions engineered for residential and commercial properties. From initial roof survey and structural design to electrical commissioning and net metering synchronization.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">End-to-End Service</div>
            <h2>Engineering-Led Rooftop Solar</h2>
            <p style="margin-bottom:16px;">
              Solar panel installation is a 25-year structural and electrical investment. At Solar Wale, we engineer every installation to maximize solar kilowatt-hour yield while safeguarding the structural integrity of your terrace roof.
            </p>
            <p style="margin-bottom:20px;">
              Our installation teams use hot-dip galvanized mounting structures that can be elevated to preserve your open terrace space for everyday family use. All electrical connections feature dual-protective DC switchgear, dedicated chemical earthing pits, and Class-II surge protection devices.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Book Site Assessment</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-engineer-survey.jpg" alt="Solar engineer conducting rooftop assessment in Uttar Pradesh" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>

        <div class="section-header text-left">
          <h2>The Installation Standards We Adhere To</h2>
        </div>
        <div class="grid-cols-3" style="margin-bottom:48px;">
          <div class="card-bezel"><div class="card-bezel-inner">
            <h3 style="margin-bottom:8px;">Elevated Mounting</h3>
            <p style="font-size:0.9rem;">Elevated pergola structures allow you to walk, dry clothes, and host gatherings beneath your solar panels without any lost terrace space.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h3 style="margin-bottom:8px;">Triple Chemical Earthing</h3>
            <p style="font-size:0.9rem;">Separate dedicated low-resistance earthing pits for lightning arrestor, inverter AC earth, and DC panel structure protection.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h3 style="margin-bottom:8px;">UV-Protected Cabling</h3>
            <p style="font-size:0.9rem;">XLPO insulated cross-linked polyolefin solar cables housed in rigid PVC conduits to withstand intense North Indian summer heat.</p>
          </div></div>
        </div>
      `,
      faqs: [
        { question: "How long does a typical rooftop solar installation take?", answer: "Physical installation on your terrace takes 2 to 4 days for residential systems (1 kW to 10 kW). Complete commissioning with DISCOM net metering typically takes 2 to 3 weeks." },
        { question: "Can I walk on my terrace after installing solar panels?", answer: "Yes! We specialize in elevated high-rise galvanized mounting structures (7 to 9 feet clearance), ensuring your roof remains 100% usable." }
      ]
    },
    {
      slug: 'residential-solar',
      title: 'Residential Rooftop Solar Panel Systems in Uttar Pradesh | Solar Wale',
      metaDesc: 'Residential solar panel installation for independent homes in Uttar Pradesh. Slash power bills by up to 90% and claim up to ₹1,08,000 in PM Surya Ghar & UP State subsidies.',
      h1: 'Residential Rooftop Solar for Homes in Uttar Pradesh',
      lead: 'Clean, reliable solar power for independent houses and duplexes. Generate your own electricity, protect against rising tariffs, and benefit from government rooftop subsidies.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Home Solutions</div>
            <h2>Slash Your Domestic Power Bills by up to 90%</h2>
            <p style="margin-bottom:16px;">
              Rising electricity tariffs in Uttar Pradesh make domestic air conditioning and appliance usage increasingly expensive. With a residential on-grid solar system, your rooftop becomes a miniature power station that covers your daytime power demand and exports surplus electricity to the grid.
            </p>
            <p style="margin-bottom:20px;">
              Under the PM Surya Ghar Muft Bijli Yojana, residential property owners in Uttar Pradesh can receive up to ₹78,000 in Central Government subsidy plus additional UP State assistance, dramatically lowering your initial investment.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Calculate Home Solar Subsidy</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/hero-rooftop-solar.jpg" alt="Residential rooftop solar panels on an Indian home" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "What is the best solar system size for a 3 BHK home in UP?", answer: "For a 3 BHK home with 1-2 air conditioners and a monthly electricity bill between ₹3,000 and ₹4,500, a 3 kW or 4 kW on-grid solar system is typically ideal." },
        { question: "Will my home solar system work during power outages?", answer: "A standard on-grid system automatically disconnects during grid outages for utility lineman safety (anti-islanding). If backup during power cuts is needed, we recommend an intelligent Hybrid Solar System with lithium or tubular battery storage." }
      ]
    },
    {
      slug: 'commercial-solar',
      title: 'Commercial & Industrial Solar Solutions in Uttar Pradesh | Solar Wale',
      metaDesc: 'Commercial rooftop solar systems for offices, schools, shops, and factories in Uttar Pradesh. Lower operational power costs and claim 40% accelerated tax depreciation.',
      h1: 'Commercial & Industrial Solar Solutions in Uttar Pradesh',
      lead: 'Engineered solar plants for commercial buildings, retail showrooms, schools, hospitals, and manufacturing units. High ROI, peak demand reduction, and accelerated tax depreciation benefits.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Commercial Grade</div>
            <h2>Turn Sunlit Commercial Roofs into Profit Centers</h2>
            <p style="margin-bottom:16px;">
              Commercial electricity tariffs in Uttar Pradesh range from ₹8.5 to ₹11 per unit. Because commercial enterprises consume the vast majority of their electricity during daytime business hours, rooftop solar directly displaces peak-cost grid electricity.
            </p>
            <p style="margin-bottom:20px;">
              Commercial solar installations also qualify for 40% accelerated depreciation under Section 32 of the Income Tax Act, significantly lowering your corporate income tax liability while achieving typical capital payback in just 3 to 4 years.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Request Commercial Feasibility Study</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/commercial-solar-rooftop.jpg" alt="Commercial rooftop solar installation on an institution in Lucknow" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "What tax benefits are available for commercial solar in India?", answer: "Commercial and industrial entities can claim 40% accelerated depreciation on solar power assets in the first year, alongside GST input tax credit." },
        { question: "Can a factory or school run heavy daytime cooling on solar?", answer: "Yes! High-yield commercial on-grid solar directly syncs with your building's LT panel, supplying electricity directly to air conditioners, lighting, and machinery." }
      ]
    },
    {
      slug: 'on-grid-solar',
      title: 'On-Grid Solar Systems with Net Metering in Uttar Pradesh | Solar Wale',
      metaDesc: 'On-grid rooftop solar systems connected to the Uttar Pradesh power grid. Learn how bidirectional net metering cuts your electricity bill with zero battery maintenance.',
      h1: 'On-Grid Rooftop Solar Systems with Net Metering',
      lead: 'The most cost-effective and popular solar solution for homes and businesses connected to the electrical grid. Zero battery expenses, automatic surplus power export, and maximum financial ROI.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Grid-Tied Efficiency</div>
            <h2>How On-Grid Solar Works in Uttar Pradesh</h2>
            <p style="margin-bottom:16px;">
              On-grid solar systems are directly synchronized with your local electricity provider (MVVNL or PVVNL in UP). During daytime hours, your solar panels generate direct current (DC) electricity which is converted to alternating current (AC) by a high-efficiency grid inverter.
            </p>
            <p style="margin-bottom:20px;">
              Your building consumes this solar power first. If your panels generate more units than you are using, the surplus electricity automatically flows through a bidirectional net meter into the grid. At the end of the billing cycle, your DISCOM deducts the exported units from your total consumption.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Apply for Net Metered Solar</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-inverter-installation.jpg" alt="Grid-tied solar inverter installation on wall with conduits" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "What happens on cloudy days or during monsoon season?", answer: "Solar panels continue to generate electricity using ambient diffuse light, though at reduced capacity (25% to 50% of peak). Your property automatically draws any additional power required from the grid." },
        { question: "Do on-grid solar systems require batteries?", answer: "No. On-grid systems utilize the electricity grid as a virtual battery, saving you substantial battery replacement costs and ongoing maintenance." }
      ]
    },
    {
      slug: 'off-grid-solar',
      title: 'Off-Grid Solar Systems with Battery Storage | Solar Wale',
      metaDesc: 'Off-grid solar energy systems with battery banks in Uttar Pradesh. Reliable standalone power for farmhouses, rural properties, and locations without dependable grid access.',
      h1: 'Off-Grid Standalone Solar Systems with Battery Storage',
      lead: 'Total energy independence. Engineered for properties located in areas with unreliable electricity grid availability, agricultural setups, farmhouses, and standalone sites.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Energy Independence</div>
            <h2>Reliable Electricity Anywhere, Independent of the Grid</h2>
            <p style="margin-bottom:16px;">
              For remote residences, orchards, agricultural farmhouses, and sites where grid connection is unavailable or subject to prolonged multi-hour outages, an off-grid solar system delivers 24/7 self-sufficient electricity.
            </p>
            <p style="margin-bottom:20px;">
              Equipped with high-capacity C10 solar tubular batteries or modern Lithium Iron Phosphate (LiFePO4) storage and an MPPT charge controller, your system charges during daylight and powers your equipment smoothly through the night.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Get Off-Grid System Sizing</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-battery-hybrid.jpg" alt="Solar battery and off-grid power setup" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "How many hours of backup can an off-grid solar system provide?", answer: "Backup duration depends on battery bank capacity and load consumption. Systems are typically configured to deliver 6 to 14 hours of continuous backup for selected circuits." },
        { question: "Does off-grid solar qualify for PM Surya Ghar subsidy?", answer: "The PM Surya Ghar scheme is specifically designed for grid-connected residential rooftop solar. Standalone off-grid systems generally do not qualify for grid net-metered central subsidies." }
      ]
    },
    {
      slug: 'hybrid-solar',
      title: 'Hybrid Solar Systems in Uttar Pradesh | Solar + Battery Backup',
      metaDesc: 'Intelligent Hybrid solar systems combining grid-tied net metering with battery energy storage in Uttar Pradesh. Continuous power during outages plus maximum electricity savings.',
      h1: 'Intelligent Hybrid Solar Systems with Battery Storage',
      lead: 'The ultimate solar setup: enjoy 90% power bill reduction through net metering while keeping critical home or office loads running seamlessly during power outages.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Smart Energy</div>
            <h2>Net Metering Savings Plus Uninterrupted Backup</h2>
            <p style="margin-bottom:16px;">
              Many property owners in Uttar Pradesh face a dilemma: they want the massive financial savings of grid-tied net metering, but their locality experiences occasional grid interruptions when on-grid systems turn off.
            </p>
            <p style="margin-bottom:20px;">
              Hybrid solar solves this perfectly. A bidirectional hybrid inverter synchronizes with the grid to export excess energy during normal operation, while simultaneously keeping a dedicated battery bank charged. When the grid fails, the inverter transfers critical loads to battery power in milliseconds.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Inquire About Hybrid Solar</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-battery-hybrid.jpg" alt="Hybrid solar inverter and wall battery setup in utility room" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "What is the difference between on-grid and hybrid solar?", answer: "On-grid solar connects directly to the electricity grid without batteries. Hybrid solar combines grid interconnection with battery storage to provide electricity during grid outages." },
        { question: "Can I add batteries to an on-grid system later?", answer: "Yes, by either retrofitting an AC-coupled battery storage system or installing a hybrid inverter from day one." }
      ]
    },
    {
      slug: 'solar-inverter',
      title: 'Solar Inverters: On-Grid, Hybrid & Micro Inverters | Solar Wale',
      metaDesc: 'High-efficiency solar inverters for rooftop installations in Uttar Pradesh. Learn about string inverters, hybrid inverters, dual-MPPT technology, and remote monitoring.',
      h1: 'High-Efficiency Solar Inverter Technology',
      lead: 'The brain of your solar installation. We deploy reliable, high-efficiency solar inverters with dual-MPPT tracking, IP65 weatherproofing, and live smartphone generation monitoring.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Inverter Tech</div>
            <h2>Maximum Energy Conversion & Smart Protection</h2>
            <p style="margin-bottom:16px;">
              Solar panels generate direct current (DC), which cannot be used directly by standard Indian household appliances or fed into the AC electricity grid. The solar inverter converts DC into clean 230V single-phase or 415V three-phase alternating current (AC).
            </p>
            <p style="margin-bottom:20px;">
              Solar Wale specifies inverters with >98% peak conversion efficiency, dual independent Maximum Power Point Trackers (MPPT) to manage multiple roof orientations, and built-in Wi-Fi communication for real-time mobile app tracking.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Explore Inverter Options</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-inverter-installation.jpg" alt="Solar inverter neatly wall mounted with distribution boxes" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "What is an MPPT in a solar inverter?", answer: "Maximum Power Point Tracking (MPPT) is an advanced electronic algorithm that continuously optimizes the electrical operating point of the solar panels to extract maximum possible power under changing sunlight and temperature conditions." },
        { question: "How can I track my solar generation on my smartphone?", answer: "Modern inverters include integrated Wi-Fi or 4G data loggers that transmit generation data to a mobile app, showing real-time generation in kW, daily units produced, and historical performance charts." }
      ]
    },
    {
      slug: 'solar-battery',
      title: 'Solar Batteries & Energy Storage Solutions | Solar Wale UP',
      metaDesc: 'Solar battery storage options in Uttar Pradesh: Lithium Iron Phosphate (LiFePO4) & C10 solar tubular batteries. Long cycle life, reliable backup, and safe energy storage.',
      h1: 'Solar Batteries & Energy Storage Solutions',
      lead: 'Reliable, long-cycle energy storage for hybrid and off-grid solar systems in Uttar Pradesh. Compare Lithium (LiFePO4) and Tubular battery technologies for your backup needs.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Storage Tech</div>
            <h2>Choosing the Right Battery Technology</h2>
            <p style="margin-bottom:16px;">
              When configuring an off-grid or hybrid solar installation, battery chemistry determines backup longevity, space requirements, and lifecycle costs.
            </p>
            <p style="margin-bottom:20px;">
              We offer both traditional heavy-duty C10 tall tubular lead-acid batteries (affordable, proven) and cutting-edge Lithium Iron Phosphate (LiFePO4) battery packs (compact, wall-mountable, 10+ year lifespan, 90% depth of discharge).
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Calculate Battery Capacity</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-battery-hybrid.jpg" alt="Lithium wall battery and hybrid inverter" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "Why is Lithium LiFePO4 battery better than tubular battery for solar?", answer: "Lithium LiFePO4 batteries offer 3,000 to 5,000 charge cycles (compared to 1,200 for tubular), charge significantly faster, occupy 70% less physical space, and require zero water topping maintenance." },
        { question: "How long do solar batteries last?", answer: "Quality solar tubular batteries typically last 4 to 6 years, while Lithium LiFePO4 batteries typically last 10 to 12 years with proper temperature management." }
      ]
    },
    {
      slug: 'solar-maintenance',
      title: 'Solar Panel Maintenance & Cleaning Services in Uttar Pradesh',
      metaDesc: 'Professional rooftop solar panel cleaning and preventive maintenance in Uttar Pradesh. Ensure peak electrical generation, prevent hotspot degradation, and protect your investment.',
      h1: 'Solar Panel Maintenance & Cleaning Services',
      lead: 'Protect your energy harvest. Routine cleaning, thermal inspection, wiring checks, and inverter diagnostics to ensure your solar system performs at peak efficiency year after year.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Performance Assurance</div>
            <h2>Why Regular Panel Cleaning is Essential in UP</h2>
            <p style="margin-bottom:16px;">
              Dust accumulation, vehicular soot, and seasonal bird droppings common across Uttar Pradesh can reduce solar panel electricity generation by 15% to 25% if left uncleaned for several weeks.
            </p>
            <p style="margin-bottom:20px;">
              Solar Wale provides both homeowner maintenance guidelines and comprehensive annual health checks covering module washing techniques, torque inspection of structure bolts, earthing resistance testing, and string voltage audits.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Book Solar Maintenance Check</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <img src="/assets/images/solar-engineer-survey.jpg" alt="Solar engineer testing electrical parameters" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="380">
          </div>
        </div>
      `,
      faqs: [
        { question: "How often should I clean my solar panels in Uttar Pradesh?", answer: "In urban and semi-urban UP areas, cleaning panels once every 10 to 15 days using clean water and a soft micro-fiber brush is recommended, particularly during dry dusty months." },
        { question: "When is the best time of day to wash solar panels?", answer: "Always clean solar panels early in the morning before 8:00 AM or late in the afternoon after sunset. Cleaning hot panels under direct midday sun can cause thermal shock and glass cracking." }
      ]
    },
    {
      slug: 'solar-subsidy',
      title: 'PM Surya Ghar & Uttar Pradesh Solar Subsidy Guide | Solar Wale',
      metaDesc: 'Complete guide to rooftop solar subsidies in Uttar Pradesh under PM Surya Ghar Muft Bijli Yojana. Check eligibility, subsidy rates up to ₹1,08,000, documentation, and application steps.',
      h1: 'PM Surya Ghar & Uttar Pradesh Solar Subsidy Guide',
      lead: 'Comprehensive, transparent guidance on Central and State government solar subsidies for residential homeowners in Uttar Pradesh. Understand eligibility, documentation, and the application process.',
      content: `
        <div class="grid-cols-2" style="gap:40px; margin-bottom:48px; align-items:center;">
          <div>
            <div class="eyebrow">Financial Support</div>
            <h2>Government Assistance for Residential Rooftop Solar</h2>
            <p style="margin-bottom:16px;">
              The Government of India has launched the landmark <strong>PM Surya Ghar: Muft Bijli Yojana</strong> to support 1 crore households across the country with rooftop solar installations. Residential homeowners in Uttar Pradesh can claim both Central financial assistance and State policy support.
            </p>
            <p style="margin-bottom:20px;">
              Solar Wale assists you through the entire official workflow: portal registration, DISCOM consumer number link, technical feasibility clearance, commissioning, and final subsidy disbursement directly into your bank account.
            </p>
            <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
              <span>Check Your Subsidy Eligibility</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
          </div>
          <div>
            <div style="background:#FFFFFF; border-radius:var(--radius-xl); border:1.5px solid var(--color-border); padding:28px; box-shadow:var(--shadow-lg);">
              <h3 style="margin-bottom:16px;">PM Surya Ghar Subsidy Slabs (Central)</h3>
              <div style="display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
                <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--color-border);">
                  <span>1 kW System</span>
                  <strong style="color:var(--color-success);">₹30,000 Subsidy</strong>
                </div>
                <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--color-border);">
                  <span>2 kW System</span>
                  <strong style="color:var(--color-success);">₹60,000 Subsidy</strong>
                </div>
                <div style="display:flex; justify-content:space-between; padding-bottom:8px; border-bottom:1px solid var(--color-border);">
                  <span>3 kW to 10 kW System</span>
                  <strong style="color:var(--color-success);">₹78,000 Max Subsidy</strong>
                </div>
              </div>
              <div style="margin-top:16px; font-size:0.8rem; color:var(--color-text-subtle); line-height:1.5;">
                * Plus up to ₹30,000 supplementary state financial assistance under the Uttar Pradesh State Solar Policy for eligible domestic consumers.
              </div>
            </div>
          </div>
        </div>

        <div class="section-header text-left">
          <h2>Required Documents for Subsidy Registration</h2>
        </div>
        <div class="grid-cols-4" style="margin-bottom:48px;">
          <div class="card-bezel"><div class="card-bezel-inner">
            <h4 style="margin-bottom:8px;">1. Electricity Bill</h4>
            <p style="font-size:0.85rem;">Latest paid electricity bill from your DISCOM (MVVNL/PVVNL) with matching domestic connection name.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h4 style="margin-bottom:8px;">2. Aadhaar Card</h4>
            <p style="font-size:0.85rem;">Aadhaar of the electricity connection owner linked with their active mobile number for OTP verification.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h4 style="margin-bottom:8px;">3. Bank Passbook</h4>
            <p style="font-size:0.85rem;">Cancelled cheque or bank passbook copy in the electricity connection holder's name for direct DBT credit.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h4 style="margin-bottom:8px;">4. Terrace Photo</h4>
            <p style="font-size:0.85rem;">Clear photo showing your shadow-free rooftop area and property building for technical verification.</p>
          </div></div>
        </div>
      `,
      faqs: [
        { question: "How is the solar subsidy disbursed?", answer: "The subsidy is transferred via Direct Benefit Transfer (DBT) directly into the homeowner's Aadhaar-linked bank account within 30 to 45 days after net meter commissioning and inspection." },
        { question: "Can commercial properties claim PM Surya Ghar subsidy?", answer: "No. The PM Surya Ghar scheme is exclusively for residential domestic consumers. Commercial and industrial properties benefit from 40% accelerated tax depreciation and GST credit instead." }
      ]
    }
  ];

  servicePages.forEach(sp => {
    const route = `/${sp.slug}/`;
    registerUrl(route, '0.9', 'weekly');

    const body = `
    <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="section-header text-left" style="max-width: 820px; margin-bottom:40px;">
          <div class="eyebrow eyebrow-accent">Solar Solutions</div>
          <h1>${sp.h1}</h1>
          <p class="text-lead">${sp.lead}</p>
        </div>

        ${sp.content}

        <div style="margin-top:60px; margin-bottom:60px;">
          <div class="section-header">
            <div class="eyebrow">Common Questions</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          ${renderFaqAccordion(sp.faqs)}
        </div>

        <!-- Conversion Banner -->
        <div style="background:var(--color-primary); border-radius:var(--radius-xl); padding:clamp(36px, 6vw, 56px); color:#FFFFFF; text-align:center; box-shadow:var(--shadow-lg);">
          <h2 style="color:#FFFFFF; margin-bottom:14px;">Plan Your Solar Installation with Solar Wale</h2>
          <p style="color:#CBD5E1; max-width:600px; margin:0 auto 24px; font-size:1.05rem;">
            Schedule a free site survey in Uttar Pradesh. Transparent technical guidance and competitive project pricing.
          </p>
          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <button type="button" class="btn btn-primary btn-lg" data-open-modal="quote-modal">
              <span>Get Free Solar Quote</span>
              <span class="btn-icon-circle">${ICONS.arrowRight}</span>
            </button>
            <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20am%20interested%20in%20${encodeURIComponent(sp.h1)}." class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
              ${ICONS.whatsapp}
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    `;

    const html = renderPage({
      title: sp.title,
      metaDescription: sp.metaDesc,
      canonicalUrl: route,
      activeNav: route,
      breadcrumbs: [
        { title: 'Solar Solutions', url: '/solar-panel-installation/' },
        { title: sp.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), url: route }
      ],
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": sp.h1,
        "provider": {
          "@type": "Organization",
          "name": "Solar Wale",
          "url": SITE_DOMAIN
        },
        "areaServed": {
          "@type": "State",
          "name": "Uttar Pradesh"
        },
        "description": sp.metaDesc
      },
      bodyContent: body
    });

    writeHtml(`${sp.slug}/index.html`, html);
  });
}

// ==========================================================================
// 4. STANDALONE TOOL, COMPANY & LEGAL PAGES BUILDER
// ==========================================================================
function buildCompanyPages() {
  // 4.A Solar Calculator Page (/solar-calculator/)
  registerUrl('/solar-calculator/', '0.8', 'monthly');
  const calcHtml = renderPage({
    title: 'Solar Calculator Uttar Pradesh | Solar Savings & Sizing Estimate',
    metaDescription: 'Calculate your rooftop solar capacity, monthly electricity generation, annual bill savings, and PM Surya Ghar subsidy in Uttar Pradesh with Solar Wale calculator.',
    canonicalUrl: '/solar-calculator/',
    activeNav: '/solar-calculator/',
    breadcrumbs: [{ title: 'Solar Calculator', url: '/solar-calculator/' }],
    bodyContent: `
    <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="section-header text-left" style="max-width:820px; margin-bottom:40px;">
          <div class="eyebrow eyebrow-accent">Engineering Estimator</div>
          <h1>Uttar Pradesh Solar Savings Calculator</h1>
          <p class="text-lead">
            Estimate your required rooftop solar panel capacity, expected monthly energy generation (kWh units), and financial savings based on your current electricity bill.
          </p>
        </div>

        <!-- Calculator Container (Reuses calculator styles) -->
        <div id="solar-calculator" class="calculator-card" style="margin-bottom:60px;">
          <div class="calc-layout">
            <div class="calc-inputs-panel">
              <h3 style="margin-bottom: 20px;">1. Enter Your Electricity Details</h3>
              <div class="calc-slider-wrapper">
                <div class="bill-display-box">
                  <label class="form-label" style="margin-bottom:0;" for="calc-bill-slider">Monthly Electricity Bill</label>
                  <div class="bill-amount-display" id="calc-bill-display">₹3,000</div>
                </div>
                <input type="range" id="calc-bill-slider" class="calc-range-slider" min="1000" max="40000" step="500" value="3000">
                <div class="calc-range-ticks">
                  <span>₹1,000</span><span>₹10,000</span><span>₹20,000</span><span>₹40,000+</span>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Property Type</label>
                <div class="property-type-chips">
                  <label class="chip-label"><input type="radio" name="calc_property_type" value="Home" checked><div class="chip-box">${ICONS.home}<span>Home</span></div></label>
                  <label class="chip-label"><input type="radio" name="calc_property_type" value="Shop"><div class="chip-box">${ICONS.briefcase}<span>Shop</span></div></label>
                  <label class="chip-label"><input type="radio" name="calc_property_type" value="Office"><div class="chip-box">${ICONS.zap}<span>Office</span></div></label>
                  <label class="chip-label"><input type="radio" name="calc_property_type" value="Factory"><div class="chip-box">${ICONS.tool}<span>Factory</span></div></label>
                </div>
              </div>

              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label" for="calc-city-select">Select Your City in UP</label>
                <select id="calc-city-select" class="form-control">
                  ${TARGET_CITIES.map(c => `<option value="${c.shortName}">${c.name}</option>`).join('')}
                  <option value="Uttar Pradesh">Other UP Location</option>
                </select>
              </div>
            </div>

            <div class="calc-results-panel">
              <div>
                <div class="calc-results-header">
                  <div class="result-lead-badge">Estimated Requirement</div>
                  <div class="recommended-kw-display">
                    <span class="kw-val" id="calc-result-kw">3</span>
                    <span class="kw-unit">kW System</span>
                  </div>
                  <p style="font-size:0.85rem; color:var(--color-text-muted); margin-top:4px;">Recommended rooftop capacity based on UP solar irradiance.</p>
                </div>

                <div class="results-metrics-grid">
                  <div class="result-metric-card">
                    <div class="result-metric-label">Estimated Monthly Generation</div>
                    <div class="result-metric-val" id="calc-result-monthly-gen">360 units</div>
                  </div>
                  <div class="result-metric-card">
                    <div class="result-metric-label">Approx. Annual Savings</div>
                    <div class="result-metric-val" id="calc-result-annual-savings" style="color:var(--color-success);">₹30,240 / yr</div>
                  </div>
                  <div class="result-metric-card">
                    <div class="result-metric-label">Approx. Monthly Savings</div>
                    <div class="result-metric-val" id="calc-result-monthly-savings">₹2,520 / mo</div>
                  </div>
                  <div class="result-metric-card">
                    <div class="result-metric-label">Roof Area Required</div>
                    <div class="result-metric-val" id="calc-result-roof-area">285 sq. ft.</div>
                  </div>
                </div>

                <div class="subsidy-highlight-card" id="calc-subsidy-card">
                  <div>
                    <div class="subsidy-title">Govt Subsidy Support (Estimated)</div>
                    <div style="font-size:0.75rem; color:#065F46;" id="calc-subsidy-note">PM Surya Ghar + UP State Policy</div>
                  </div>
                  <div class="subsidy-amount" id="calc-subsidy-amount">Up to ₹1,08,000</div>
                </div>
              </div>

              <div>
                <div style="display:flex; flex-direction:column; gap:10px;">
                  <a href="#" id="calc-whatsapp-cta" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer" style="width:100%;">
                    ${ICONS.whatsapp}
                    <span>Get Detailed Assessment on WhatsApp</span>
                  </a>
                  <button type="button" id="calc-quote-modal-cta" class="btn btn-secondary" data-open-modal="quote-modal" style="width:100%;">
                    <span>Book Free Rooftop Site Survey</span>
                    <span class="btn-icon-circle">${ICONS.arrowRight}</span>
                  </button>
                </div>
                <div class="calc-disclaimer">
                  * All calculations are estimates based on standard 4.2 peak sunlight hours in UP. Exact generation depends on orientation, tilt, shading, and DISCOM tariff rules.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('solar-calculator/index.html', calcHtml);

  // 4.B Projects Gallery Page (/projects/)
  registerUrl('/projects/', '0.8', 'weekly');
  const projectsHtml = renderPage({
    title: 'Solar Wale Projects | Rooftop Solar Installations in Uttar Pradesh',
    metaDescription: 'Explore real residential and commercial rooftop solar installations by Solar Wale in Ayodhya, Lucknow, Gorakhpur, and other cities across Uttar Pradesh.',
    canonicalUrl: '/projects/',
    activeNav: '/projects/',
    breadcrumbs: [{ title: 'Projects', url: '/projects/' }],
    bodyContent: `
    <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="section-header text-left" style="max-width:820px; margin-bottom:40px;">
          <div class="eyebrow eyebrow-accent">Portfolio of Work</div>
          <h1>Rooftop Solar Installations in Uttar Pradesh</h1>
          <p class="text-lead">
            Every rooftop solar project is engineered with precision, high-grade hot-dip galvanized mounting structures, and synchronized grid connection.
          </p>
        </div>

        <div class="grid-cols-3">
          <div class="project-card">
            <div class="project-card-image">
              <img src="/assets/images/project-ayodhya-residential.jpg" alt="3 kW Residential Rooftop Solar installation in Ayodhya" loading="lazy" width="600" height="340">
              <div class="project-card-badges"><span class="badge badge-solar">3 kW On-Grid</span><span class="badge badge-navy">Residential</span></div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">3 kW Residential Terrace Solar</h3>
              <div class="project-card-meta"><span>${ICONS.mapPin} Ayodhya, Uttar Pradesh</span></div>
              <p class="project-card-desc">Elevated concrete terrace mounting structure preserving full rooftop recreational use, synchronized with MVVNL net meter.</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-image">
              <img src="/assets/images/hero-rooftop-solar.jpg" alt="5 kW Home Solar Installation in Gomti Nagar, Lucknow" loading="lazy" width="600" height="340">
              <div class="project-card-badges"><span class="badge badge-solar">5 kW System</span><span class="badge badge-navy">Residential</span></div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">5 kW Independent Home Installation</h3>
              <div class="project-card-meta"><span>${ICONS.mapPin} Gomti Nagar, Lucknow</span></div>
              <p class="project-card-desc">Custom galvanized steel structure powering 2 ACs, water motor, and continuous domestic load with real-time app generation monitoring.</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-image">
              <img src="/assets/images/commercial-solar-rooftop.jpg" alt="15 kW Commercial Rooftop Solar Plant in Gorakhpur" loading="lazy" width="600" height="340">
              <div class="project-card-badges"><span class="badge badge-solar">15 kW Commercial</span><span class="badge badge-navy">Institutional</span></div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">15 kW Institutional Rooftop Plant</h3>
              <div class="project-card-meta"><span>${ICONS.mapPin} Gorakhpur, Uttar Pradesh</span></div>
              <p class="project-card-desc">Designed to offset heavy daytime cooling demand and laboratory power usage with high-durability dual MPPT inverter.</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-image">
              <img src="/assets/images/solar-battery-hybrid.jpg" alt="5 kW Hybrid Solar with Storage in Sultanpur" loading="lazy" width="600" height="340">
              <div class="project-card-badges"><span class="badge badge-solar">5 kW Hybrid</span><span class="badge badge-navy">Storage Backup</span></div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">5 kW Hybrid Solar with Battery Backup</h3>
              <div class="project-card-meta"><span>${ICONS.mapPin} Sultanpur, Uttar Pradesh</span></div>
              <p class="project-card-desc">Intelligent hybrid inverter with lithium energy storage ensuring zero power disruption during localized grid maintenance outages.</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-image">
              <img src="/assets/images/solar-inverter-installation.jpg" alt="10 kW Commercial Solar Project in Gonda" loading="lazy" width="600" height="340">
              <div class="project-card-badges"><span class="badge badge-solar">10 kW On-Grid</span><span class="badge badge-navy">Commercial</span></div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">10 kW Retail Commercial Installation</h3>
              <div class="project-card-meta"><span>${ICONS.mapPin} Gonda, Uttar Pradesh</span></div>
              <p class="project-card-desc">Commercial showroom rooftop installation with neat wall conduits, dual protection MCB boxes, and net meter interconnection.</p>
            </div>
          </div>

          <div class="project-card">
            <div class="project-card-image">
              <img src="/assets/images/solar-engineer-survey.jpg" alt="Site Engineering and Survey in Prayagraj" loading="lazy" width="600" height="340">
              <div class="project-card-badges"><span class="badge badge-solar">Custom Survey</span><span class="badge badge-navy">Engineering</span></div>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">Engineering Rooftop Survey</h3>
              <div class="project-card-meta"><span>${ICONS.mapPin} Prayagraj, Uttar Pradesh</span></div>
              <p class="project-card-desc">Comprehensive structural assessment and 3D shadow path modeling before module orientation layout for a residential client.</p>
            </div>
          </div>
        </div>

        <div style="text-align:center; margin-top:48px;">
          <button type="button" class="btn btn-primary" data-open-modal="quote-modal">
            <span>Discuss Your Rooftop Installation</span>
            <span class="btn-icon-circle">${ICONS.arrowRight}</span>
          </button>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('projects/index.html', projectsHtml);

  // 4.C About Page (/about/)
  registerUrl('/about/', '0.8', 'monthly');
  const aboutHtml = renderPage({
    title: 'About Solar Wale | Professional Solar Energy Company in Uttar Pradesh',
    metaDescription: 'Learn about Solar Wale: our mission, transparent engineering philosophy, customer support, and rooftop solar installation standards across Uttar Pradesh.',
    canonicalUrl: '/about/',
    activeNav: '/about/',
    breadcrumbs: [{ title: 'About Us', url: '/about/' }],
    bodyContent: `
    <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="section-header text-left" style="max-width:820px; margin-bottom:48px;">
          <div class="eyebrow eyebrow-accent">Our Story & Mission</div>
          <h1>About Solar Wale</h1>
          <p class="text-lead">
            Solar Wale is a dedicated renewable energy solutions company focused on helping homeowners and businesses across Uttar Pradesh transition smoothly toward clean, cost-effective rooftop solar energy.
          </p>
        </div>

        <div class="grid-cols-2" style="gap:48px; margin-bottom:60px; align-items:center;">
          <div>
            <div class="eyebrow">Our Mission</div>
            <h2>Making Clean Solar Power Transparent & Accessible</h2>
            <p style="margin-bottom:16px;">
              The rooftop solar market in India is frequently complicated by misleading savings claims, substandard wiring practices, and poor after-sales coordination. Solar Wale was founded on a simple principle: deliver high-quality, transparent engineering that clients can rely on for 25 years.
            </p>
            <p style="margin-bottom:20px;">
              From our initial launch market covering Ayodhya, Lucknow, Sultanpur, Gonda, Barabanki, Amethi, Prayagraj, and Gorakhpur, we take complete responsibility for your solar journey — from initial structural survey and portal documentation to physical installation, DISCOM net metering, and ongoing support.
            </p>
            <div style="display:flex; gap:16px; flex-wrap:wrap;">
              <a href="/contact/" class="btn btn-primary">
                <span>Contact Our Team</span>
                <span class="btn-icon-circle">${ICONS.arrowRight}</span>
              </a>
              <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale" class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                ${ICONS.whatsapp}
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
          <div>
            <img src="/assets/images/solar-engineer-survey.jpg" alt="Solar Wale engineering team surveying rooftop" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);" width="640" height="420">
          </div>
        </div>

        <div class="section-header text-left">
          <h2>Our Core Principles</h2>
        </div>
        <div class="grid-cols-3" style="margin-bottom:48px;">
          <div class="card-bezel"><div class="card-bezel-inner">
            <h3 style="margin-bottom:8px;">Zero False Claims</h3>
            <p style="font-size:0.9rem;">We never promise 100% savings or invent unrealistic generation figures. We provide realistic, data-backed projections based on UP weather irradiance.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h3 style="margin-bottom:8px;">Electrical Safety First</h3>
            <p style="font-size:0.9rem;">Every installation uses certified switchgear, dedicated chemical earthing, lightning arrestors, and heavy hot-dip galvanized mounting structures.</p>
          </div></div>
          <div class="card-bezel"><div class="card-bezel-inner">
            <h3 style="margin-bottom:8px;">Local UP Accountability</h3>
            <p style="font-size:0.9rem;">We are physically active across our target UP cities, ensuring rapid response times for site assessments, meter approvals, and customer assistance.</p>
          </div></div>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('about/index.html', aboutHtml);

  // 4.D Contact Page (/contact/)
  registerUrl('/contact/', '0.8', 'monthly');
  const contactHtml = renderPage({
    title: 'Contact Solar Wale | Solar Panel Enquiries in Uttar Pradesh',
    metaDescription: 'Get in touch with Solar Wale for rooftop solar panel installations in Uttar Pradesh. Call or WhatsApp +91 95806 59559 or request an on-site survey online.',
    canonicalUrl: '/contact/',
    activeNav: '/contact/',
    breadcrumbs: [{ title: 'Contact Us', url: '/contact/' }],
    bodyContent: `
    <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="section-header text-left" style="max-width:820px; margin-bottom:48px;">
          <div class="eyebrow eyebrow-accent">Direct Communication</div>
          <h1>Let's Plan Your Solar Installation</h1>
          <p class="text-lead">
            Have questions about solar panel sizing, rooftop requirements, or government subsidies in Uttar Pradesh? Speak directly with our solar engineers.
          </p>
        </div>

        <div class="grid-cols-2" style="gap:48px; align-items:flex-start;">
          <!-- Contact Details Column -->
          <div>
            <div style="background:var(--color-bg-surface); border-radius:var(--radius-xl); border:1px solid var(--color-border); padding:32px; margin-bottom:32px;">
              <h3 style="margin-bottom:20px; color:var(--color-primary);">Direct Channels</h3>

              <div style="display:flex; flex-direction:column; gap:20px;">
                <div style="display:flex; align-items:flex-start; gap:16px;">
                  <div style="width:44px; height:44px; border-radius:50%; background:#FFFFFF; color:var(--color-primary); display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-sm); border:1px solid var(--color-border); flex-shrink:0;">
                    ${ICONS.phone}
                  </div>
                  <div>
                    <div style="font-size:0.8rem; color:var(--color-text-subtle); text-transform:uppercase; font-weight:700;">Phone / Helpline</div>
                    <a href="${PHONE_TEL}" style="font-size:1.15rem; font-weight:800; color:var(--color-primary);">${PHONE_NUMBER}</a>
                    <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:2px;">Monday to Saturday, 9:00 AM – 7:00 PM IST</div>
                  </div>
                </div>

                <div style="display:flex; align-items:flex-start; gap:16px;">
                  <div style="width:44px; height:44px; border-radius:50%; background:rgba(37,211,102,0.15); color:var(--color-whatsapp); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                    ${ICONS.whatsapp}
                  </div>
                  <div>
                    <div style="font-size:0.8rem; color:var(--color-text-subtle); text-transform:uppercase; font-weight:700;">Official WhatsApp</div>
                    <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20would%20like%20to%20plan%20a%20solar%20installation." target="_blank" rel="noopener noreferrer" style="font-size:1.15rem; font-weight:800; color:var(--color-whatsapp);">${PHONE_NUMBER}</a>
                    <div style="font-size:0.8rem; color:var(--color-text-muted); margin-top:2px;">Quick response for bill assessments & quotes</div>
                  </div>
                </div>

                <div style="display:flex; align-items:flex-start; gap:16px;">
                  <div style="width:44px; height:44px; border-radius:50%; background:#FFFFFF; color:var(--color-primary); display:flex; align-items:center; justify-content:center; box-shadow:var(--shadow-sm); border:1px solid var(--color-border); flex-shrink:0;">
                    ${ICONS.mail}
                  </div>
                  <div>
                    <div style="font-size:0.8rem; color:var(--color-text-subtle); text-transform:uppercase; font-weight:700;">Email Support</div>
                    <a href="mailto:${EMAIL_ADDRESS}" style="font-size:1.05rem; font-weight:700; color:var(--color-primary);">${EMAIL_ADDRESS}</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Service Coverage Note -->
            <div style="padding:24px; background:#FFFFFF; border-radius:var(--radius-lg); border:1px solid var(--color-border);">
              <h4 style="margin-bottom:8px; color:var(--color-primary);">Primary Service Territory:</h4>
              <p style="font-size:0.875rem; color:var(--color-text-muted); line-height:1.6;">
                Ayodhya / Faizabad • Lucknow • Sultanpur • Gonda • Barabanki • Amethi • Prayagraj • Gorakhpur, and surrounding districts across Uttar Pradesh.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="lead-form-card">
              <h3 style="margin-bottom:6px;">Send Us an Enquiry</h3>
              <p style="font-size:0.85rem; color:var(--color-text-muted); margin-bottom:20px;">
                Fill out the form below. We will review your requirements and reach out promptly.
              </p>

              <form data-solar-form="contact" id="contact-page-form" action="https://formspree.io/f/xrpbadnn" method="POST">
                <input type="text" name="website_shield_trap" class="form-honeypot" tabindex="-1" autocomplete="off">

                <div class="form-group">
                  <label class="form-label" for="contact-name">Full Name <span class="required">*</span></label>
                  <input type="text" id="contact-name" name="full_name" class="form-control" placeholder="Your Name" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-phone">Mobile Number (+91) <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" name="phone_number" class="form-control" placeholder="10-digit number" pattern="[0-9]{10}" required>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-city">City <span class="required">*</span></label>
                  <select id="contact-city" name="city" class="form-control" required>
                    <option value="">Select City</option>
                    ${TARGET_CITIES.map(c => `<option value="${c.shortName}">${c.name}</option>`).join('')}
                    <option value="Other UP">Other Location in Uttar Pradesh</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="contact-message">Property Details / Questions</label>
                  <textarea id="contact-message" name="message" class="form-control" rows="3" placeholder="Tell us about your roof type or average monthly power bill..."></textarea>
                </div>

                <div style="display:flex; gap:12px; flex-wrap:wrap;">
                  <button type="submit" class="btn btn-primary" style="flex:1;">
                    <span>Send Enquiry</span>
                    <span class="btn-icon-circle">${ICONS.arrowRight}</span>
                  </button>
                  <a href="${PHONE_TEL}" class="btn btn-outline">
                    ${ICONS.phone}
                    <span>Call Now</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('contact/index.html', contactHtml);

  // 4.E Comprehensive FAQ Page (/faq/)
  registerUrl('/faq/', '0.7', 'monthly');
  const faqCategories = [
    {
      category: "Solar Installation & Sizing",
      items: [
        { question: "How do I know what solar system size is right for my home?", answer: "Look at your electricity bill's total monthly units (kWh) consumed. In UP, divide your average monthly units by 120 to find the recommended kW capacity. For example, consuming 360 units per month indicates a 3 kW system." },
        { question: "Does my roof need to face a specific direction?", answer: "In India (Northern Hemisphere), south-facing rooftops receive maximum solar irradiance throughout the year. However, East and West orientations also deliver high yields (approx 85-90% of south). We conduct a shadow simulation during the site survey to select optimal tilt angles." },
        { question: "Can solar panels be installed on an elevated structure?", answer: "Yes! Solar Wale frequently installs high-rise galvanized steel pergola structures (7 to 9 feet clearance). This keeps your entire terrace open for daily activities, drying clothes, and family gatherings." }
      ]
    },
    {
      category: "Net Metering & Electricity Bills",
      items: [
        { question: "What is net metering and how is it billed in UP?", answer: "A bidirectional net meter records both the units you draw from the grid and the excess solar units you export. Your monthly bill is calculated on the net difference. If you export more than you consume in a sunny month, the extra units roll over as credit on subsequent bills." },
        { question: "Who handles the DISCOM net meter application?", answer: "Solar Wale handles the complete technical documentation and liaison with your local electricity division (MVVNL / PVVNL in Uttar Pradesh)." }
      ]
    },
    {
      category: "Government Subsidies & Financing",
      items: [
        { question: "Who qualifies for the PM Surya Ghar subsidy?", answer: "Any individual residential property owner with an active domestic LT electricity meter in their name and clear shadow-free roof rights qualifies." },
        { question: "How much is the UP state subsidy for residential solar?", answer: "Under the UP Solar Energy Policy, the Uttar Pradesh state government provides an additional subsidy of up to ₹15,000 per kW (capped at ₹30,000) for eligible residential connections, supplementing the Central PM Surya Ghar assistance." }
      ]
    },
    {
      category: "Maintenance, Durability & Warranties",
      items: [
        { question: "What warranties come with the solar panels and inverter?", answer: "Tier-1 solar panels carry a 25-year linear performance warranty and 10 to 12-year product warranty. Solar inverters typically carry a 5 to 10-year manufacturer warranty." },
        { question: "Do solar panels get damaged by monkeys or hail in UP?", answer: "Modern solar panels are manufactured with 3.2mm thick tempered, toughened glass designed to withstand heavy hail impacts and common environmental stresses. Elevated structures also help keep panels out of reach." }
      ]
    }
  ];

  const faqPageHtml = renderPage({
    title: 'Rooftop Solar FAQs | Complete Solar Knowledgebase | Solar Wale',
    metaDescription: 'Frequently asked questions regarding solar panel installation, net metering in Uttar Pradesh, PM Surya Ghar subsidy, maintenance, and system sizing.',
    canonicalUrl: '/faq/',
    activeNav: '/faq/',
    breadcrumbs: [{ title: 'FAQs', url: '/faq/' }],
    bodyContent: `
    <section class="section" style="padding-top: clamp(40px, 5vw, 60px);">
      <div class="container">
        <div class="section-header text-left" style="max-width:820px; margin-bottom:48px;">
          <div class="eyebrow eyebrow-accent">Solar Knowledgebase</div>
          <h1>Frequently Asked Questions</h1>
          <p class="text-lead">
            Find clear, authoritative answers to the most common questions about switching to rooftop solar power in Uttar Pradesh.
          </p>
        </div>

        <div style="display:flex; flex-direction:column; gap:48px; max-width:860px; margin:0 auto 60px;">
          ${faqCategories.map(cat => `
            <div>
              <h2 style="font-size:1.4rem; color:var(--color-primary); margin-bottom:20px; padding-bottom:8px; border-bottom:2px solid var(--color-accent-light);">${cat.category}</h2>
              ${renderFaqAccordion(cat.items)}
            </div>
          `).join('')}
        </div>

        <div style="text-align:center; padding:36px; background:var(--color-bg-surface); border-radius:var(--radius-xl); border:1px solid var(--color-border); max-width:760px; margin:0 auto;">
          <h3 style="margin-bottom:8px;">Have a specific technical question?</h3>
          <p style="font-size:0.95rem; color:var(--color-text-muted); margin-bottom:20px;">Our engineering team in Uttar Pradesh is available to assist you.</p>
          <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20have%20a%20question%20about%20rooftop%20solar." class="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            ${ICONS.whatsapp}
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('faq/index.html', faqPageHtml);

  // 4.F Thank You Page (/thank-you/)
  const thankYouHtml = renderPage({
    title: 'Thank You | Enquiry Received | Solar Wale',
    metaDescription: 'Thank you for reaching out to Solar Wale. Our solar engineering team in Uttar Pradesh will contact you shortly regarding your rooftop solar requirement.',
    canonicalUrl: '/thank-you/',
    activeNav: '',
    breadcrumbs: [{ title: 'Thank You', url: '/thank-you/' }],
    bodyContent: `
    <section class="section" style="padding: clamp(60px, 10vw, 120px) 0; text-align:center;">
      <div class="container" style="max-width:680px;">
        <div style="width:72px; height:72px; border-radius:50%; background:var(--color-success-light); color:var(--color-success); display:flex; align-items:center; justify-content:center; margin:0 auto 24px; box-shadow:0 8px 24px rgba(5,150,105,0.2);">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>

        <div class="eyebrow eyebrow-accent">Enquiry Received</div>
        <h1 style="margin-bottom:16px;">Thank You!</h1>
        <p class="text-lead" style="margin-bottom:32px;">
          Your solar enquiry has been received. Our engineering team will review your property details and contact you shortly regarding your solar requirement.
        </p>

        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
          <a href="https://wa.me/${WHATSAPP_RAW}?text=Hi%20Solar%20Wale,%20I%20just%20submitted%20an%20enquiry%20on%20your%20website." class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
            ${ICONS.whatsapp}
            <span>WhatsApp Solar Wale Now</span>
          </a>
          <a href="/" class="btn btn-outline btn-lg">Return Home</a>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('thank-you/index.html', thankYouHtml);

  // 4.G Legal Pages: Privacy, Terms, Disclaimer
  buildLegalPages();
}

function buildLegalPages() {
  const privacyHtml = renderPage({
    title: 'Privacy Policy | Solar Wale',
    metaDescription: 'Privacy policy for Solar Wale. Learn how we handle your personal information and contact details safely.',
    canonicalUrl: '/privacy-policy/',
    breadcrumbs: [{ title: 'Privacy Policy', url: '/privacy-policy/' }],
    bodyContent: `
    <section class="section">
      <div class="container" style="max-width:800px;">
        <h1 style="margin-bottom:20px;">Privacy Policy</h1>
        <p style="font-size:0.85rem; color:var(--color-text-subtle); margin-bottom:24px;">Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div style="display:flex; flex-direction:column; gap:20px; font-size:0.95rem; line-height:1.7; color:var(--color-text-muted);">
          <p>At <strong>Solar Wale</strong> (solarwale.online), we respect your privacy and are committed to protecting the personal information you provide when requesting a solar consultation, site assessment, or financial estimate.</p>

          <h3 style="color:var(--color-primary); margin-top:12px;">Information We Collect</h3>
          <p>When you fill out a quote request or contact form on our website, we collect your name, phone number, city, property type, and approximate monthly electricity bill.</p>

          <h3 style="color:var(--color-primary); margin-top:12px;">How We Use Your Information</h3>
          <p>We use your information exclusively to evaluate your solar feasibility, prepare customized engineering quotes, schedule site surveys, and assist with official DISCOM net metering or PM Surya Ghar portal procedures. We do not sell or rent your personal information to third parties.</p>

          <h3 style="color:var(--color-primary); margin-top:12px;">Contact Us</h3>
          <p>If you have any questions regarding our privacy practices, you can contact us at <a href="mailto:${EMAIL_ADDRESS}" style="color:var(--color-primary); font-weight:700;">${EMAIL_ADDRESS}</a> or via WhatsApp at <a href="tel:+919580659559" style="color:var(--color-primary); font-weight:700;">${PHONE_NUMBER}</a>.</p>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('privacy-policy/index.html', privacyHtml);

  const termsHtml = renderPage({
    title: 'Terms & Conditions | Solar Wale',
    metaDescription: 'Terms and conditions governing the use of Solar Wale website and solar consultation services.',
    canonicalUrl: '/terms-and-conditions/',
    breadcrumbs: [{ title: 'Terms & Conditions', url: '/terms-and-conditions/' }],
    bodyContent: `
    <section class="section">
      <div class="container" style="max-width:800px;">
        <h1 style="margin-bottom:20px;">Terms & Conditions</h1>
        <p style="font-size:0.85rem; color:var(--color-text-subtle); margin-bottom:24px;">Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div style="display:flex; flex-direction:column; gap:20px; font-size:0.95rem; line-height:1.7; color:var(--color-text-muted);">
          <p>Welcome to <strong>Solar Wale</strong> (solarwale.online). By accessing this website and utilizing our consultation services, you agree to these Terms & Conditions.</p>

          <h3 style="color:var(--color-primary); margin-top:12px;">Estimations and Proposals</h3>
          <p>All savings calculations, system capacities, and generation values presented on this website are engineering estimates for informational purposes. Formal commercial contracts and guaranteed specifications are established following a comprehensive on-site physical survey and formal technical proposal.</p>

          <h3 style="color:var(--color-primary); margin-top:12px;">Intellectual Property</h3>
          <p>All brand marks, visual imagery, layout architecture, and textual content are property of Solar Wale.</p>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('terms-and-conditions/index.html', termsHtml);

  const disclaimerHtml = renderPage({
    title: 'Disclaimer & Subsidy Notice | Solar Wale',
    metaDescription: 'Regulatory disclaimer and government subsidy notes for Solar Wale rooftop solar solutions in Uttar Pradesh.',
    canonicalUrl: '/disclaimer/',
    breadcrumbs: [{ title: 'Disclaimer', url: '/disclaimer/' }],
    bodyContent: `
    <section class="section">
      <div class="container" style="max-width:800px;">
        <h1 style="margin-bottom:20px;">Disclaimer & Regulatory Notice</h1>
        <p style="font-size:0.85rem; color:var(--color-text-subtle); margin-bottom:24px;">Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div style="display:flex; flex-direction:column; gap:20px; font-size:0.95rem; line-height:1.7; color:var(--color-text-muted);">
          <div style="padding:20px; background:var(--color-accent-light); border-radius:var(--radius-md); border:1px solid rgba(229,138,0,0.3); color:#92400E;">
            <strong>Important Regulatory Notice:</strong> Solar Wale is an independent rooftop solar engineering and installation company. We are not a government agency. Government schemes, eligibility requirements, application portals, and subsidy amounts (such as the PM Surya Ghar: Muft Bijli Yojana or UP State Solar Policy) are regulated by the Ministry of New and Renewable Energy (MNRE), UPNEDA, and respective state DISCOMs.
          </div>

          <h3 style="color:var(--color-primary); margin-top:12px;">Performance Estimates</h3>
          <p>Solar energy generation varies across seasons and is subject to local weather conditions, rooftop shadow obstacles, ambient temperature, panel cleanliness, and distribution grid voltage stability. Solar Wale provides realistic engineering projections based on North Indian meteorological datasets, but cannot guarantee identical output every billing cycle.</p>
        </div>
      </div>
    </section>
    `
  });
  writeHtml('disclaimer/index.html', disclaimerHtml);
}

// ==========================================================================
// 5. XML SITEMAP & ROBOTS.TXT
// ==========================================================================
function buildTechnicalSeoFiles() {
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${canonicalUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXml.trim(), 'utf8');
  console.log(`Generated: sitemap.xml with ${canonicalUrls.length} canonical URLs`);

  const robotsTxt = `# Solar Wale Robots.txt
User-agent: *
Allow: /

# Sitemap Location
Sitemap: ${SITE_DOMAIN}/sitemap.xml
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt.trim(), 'utf8');
  console.log('Generated: robots.txt');
}

// ==========================================================================
// EXECUTE FULL BUILD
// ==========================================================================
console.log('--- Starting Solar Wale Production Build ---');
buildHomePage();
buildCityPages();
buildServicePages();
buildCompanyPages();
buildTechnicalSeoFiles();
console.log('--- Solar Wale Build Completed Successfully! ---');
