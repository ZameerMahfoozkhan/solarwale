/**
 * SOLAR WALLAH - CORE JAVASCRIPT
 * Header scroll, mobile drawer, quote modal, FAQs, WhatsApp routing, analytics
 */

(function () {
  'use strict';

  // --- Safe Analytics Event Dispatcher ---
  window.solarWallahTrack = function (eventName, eventParams) {
    eventParams = eventParams || {};
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventParams);
      }
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({ event: eventName, ...eventParams });
      }
      // Debug event logging
      console.log('[Analytics Event]', eventName, eventParams);
    } catch (e) {
      console.warn('Analytics dispatch error', e);
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    initHeaderScroll();
    initMobileNav();
    initModal();
    initFaqAccordion();
    initLeadForms();
    initAnalyticsTriggers();
  });

  // --- 1. Sticky Compact Header on Scroll ---
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastKnownScrollPosition = 0;
    let ticking = false;

    function handleScroll(scrollPos) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', function () {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          handleScroll(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    handleScroll(window.scrollY);
  }

  // --- 2. Mobile Navigation Drawer ---
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const drawer = document.querySelector('.mobile-menu-drawer');
    if (!toggleBtn || !drawer) return;

    function toggleMenu(open) {
      const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
      toggleBtn.classList.toggle('open', isOpen);
      drawer.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Close button inside mobile drawer
    const drawerCloseBtn = drawer.querySelector('#mobile-drawer-close') || drawer.querySelector('.mobile-drawer-close-btn');
    if (drawerCloseBtn) {
      drawerCloseBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu(false);
      });
    }

    // Close when clicking any nav link inside drawer
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggleMenu(false);
      });
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  // --- 3. Consultation Quote Modal ---
  function initModal() {
    const modal = document.getElementById('quote-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.modal-close-btn');

    function openModal(defaultCity, defaultKw) {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      const citySelect = modal.querySelector('#modal-city');
      if (citySelect && defaultCity) {
        citySelect.value = defaultCity;
      }
      const firstInput = modal.querySelector('input:not([type="hidden"])');
      if (firstInput) firstInput.focus();
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-open-modal="quote-modal"]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const city = btn.getAttribute('data-city') || '';
        const kw = btn.getAttribute('data-kw') || '';
        openModal(city, kw);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    window.openSolarQuoteModal = openModal;
    window.closeSolarQuoteModal = closeModal;
  }

  // --- 4. FAQ Accordion ---
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      const questionBtn = item.querySelector('.faq-question');
      if (!questionBtn) return;

      questionBtn.addEventListener('click', function () {
        const isActive = item.classList.contains('active');
        
        // Optional: close other items for clean accordion UX
        faqItems.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('active');
            const btn = other.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          }
        });

        item.classList.toggle('active', !isActive);
        questionBtn.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
      });
    });
  }

  // --- 5. Lead Form Submission & Anti-Spam ---
  function initLeadForms() {
    const forms = document.querySelectorAll('form[data-solar-form]');
    if (!forms.length) return;

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // 1. Honeypot check
        const honeypot = form.querySelector('input[name="website_shield_trap"]');
        if (honeypot && honeypot.value.trim() !== '') {
          console.warn('Bot submission blocked.');
          return;
        }

        // 2. Extract inputs
        const nameInput = form.querySelector('[name="full_name"]');
        const phoneInput = form.querySelector('[name="phone_number"]');
        const cityInput = form.querySelector('[name="city"]');
        const propertyTypeInput = form.querySelector('[name="property_type"]');
        const billInput = form.querySelector('[name="monthly_bill"]');
        const messageInput = form.querySelector('[name="message"]');

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim().replace(/\D/g, '') : '';
        const city = cityInput ? cityInput.value : '';
        const propertyType = propertyTypeInput ? propertyTypeInput.value : 'Home';
        const monthlyBill = billInput ? billInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        // 3. Validation
        if (!name || name.length < 2) {
          alert('Please enter your full name.');
          if (nameInput) nameInput.focus();
          return;
        }

        // Indian mobile validation: 10 digits starting with 6-9 (or 12 digits with 91)
        const validPhone = /^[6-9]\d{9}$/.test(phone) || (phone.length === 12 && phone.startsWith('91'));
        if (!validPhone) {
          alert('Please enter a valid 10-digit Indian mobile number.');
          if (phoneInput) phoneInput.focus();
          return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = 'Submitting your enquiry...';
        }

        // 4. Save lead data locally
        const leadData = {
          name,
          phone,
          city,
          propertyType,
          monthlyBill,
          message,
          sourcePage: window.location.pathname,
          submittedAt: new Date().toISOString()
        };

        try {
          const pastLeads = JSON.parse(localStorage.getItem('solarwallah_leads') || '[]');
          pastLeads.push(leadData);
          localStorage.setItem('solarwallah_leads', JSON.stringify(pastLeads));
        } catch (err) {
          console.error('Storage error', err);
        }

        // 5. Track Analytics Event
        const isQuoteForm = form.getAttribute('data-solar-form') === 'quote';
        window.solarWallahTrack(isQuoteForm ? 'quote_form_submit' : 'contact_form_submit', {
          city: city,
          property_type: propertyType,
          monthly_bill: monthlyBill
        });

        // 6. Send to Formspree endpoint (https://formspree.io/f/xrpbadnn)
        const endpoint = form.getAttribute('action') || 'https://formspree.io/f/xrpbadnn';
        const payload = {
          name: name,
          phone: phone,
          city: city,
          property_type: propertyType,
          monthly_bill: monthlyBill || 'Not specified',
          message: message || '',
          source_page: window.location.href,
          _subject: `New Solar Wallah Lead: ${name} (${city || 'Uttar Pradesh'})`
        };

        let redirected = false;
        function proceedToThankYou() {
          if (redirected) return;
          redirected = true;
          sessionStorage.setItem('solarwallah_last_submission', JSON.stringify(leadData));
          window.location.href = '/thank-you/';
        }

        // Safety timeout so user is never stuck if network is delayed
        const safetyTimer = setTimeout(proceedToThankYou, 3500);

        fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        .then(function (res) {
          clearTimeout(safetyTimer);
          proceedToThankYou();
        })
        .catch(function (err) {
          console.warn('Formspree submission error, proceeding to thank-you fallback', err);
          clearTimeout(safetyTimer);
          proceedToThankYou();
        });
      });
    });
  }

  // --- 6. Analytics Click Triggers ---
  function initAnalyticsTriggers() {
    // WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (link) {
      link.addEventListener('click', function () {
        window.solarWallahTrack('whatsapp_click', {
          link_location: link.getAttribute('data-location') || 'general',
          url: link.href
        });
      });
    });

    // Phone call clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function () {
        window.solarWallahTrack('phone_click', {
          link_location: link.getAttribute('data-location') || 'general'
        });
      });
    });
  }

})();
