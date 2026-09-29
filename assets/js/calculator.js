/**
 * SOLAR WALLAH - SOLAR SAVINGS CALCULATOR
 * Real-time estimation based on Uttar Pradesh solar irradiance & tariff models
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const calcSection = document.getElementById('solar-calculator');
    if (!calcSection) return;

    initCalculator(calcSection);
  });

  function initCalculator(container) {
    const billSlider = container.querySelector('#calc-bill-slider');
    const billDisplay = container.querySelector('#calc-bill-display');
    const propertyTypeInputs = container.querySelectorAll('input[name="calc_property_type"]');
    const citySelect = container.querySelector('#calc-city-select');

    // Result target elements
    const kwDisplay = container.querySelector('#calc-result-kw');
    const monthlyGenDisplay = container.querySelector('#calc-result-monthly-gen');
    const annualGenDisplay = container.querySelector('#calc-result-annual-gen');
    const annualSavingsDisplay = container.querySelector('#calc-result-annual-savings');
    const monthlySavingsDisplay = container.querySelector('#calc-result-monthly-savings');
    const roofAreaDisplay = container.querySelector('#calc-result-roof-area');
    const subsidyCard = container.querySelector('#calc-subsidy-card');
    const subsidyAmountDisplay = container.querySelector('#calc-subsidy-amount');
    const subsidyNote = container.querySelector('#calc-subsidy-note');
    const whatsappBtn = container.querySelector('#calc-whatsapp-cta');
    const quoteModalBtn = container.querySelector('#calc-quote-modal-cta');

    if (!billSlider || !billDisplay) return;

    function formatCurrency(num) {
      return '₹' + Math.round(num).toLocaleString('en-IN');
    }

    function calculate() {
      const bill = parseFloat(billSlider.value) || 3000;
      billDisplay.textContent = formatCurrency(bill);

      // Property type
      let selectedProperty = 'Home';
      propertyTypeInputs.forEach(function (radio) {
        if (radio.checked) selectedProperty = radio.value;
      });

      const selectedCity = citySelect ? citySelect.value : 'Uttar Pradesh';

      // 1. Determine Tariff per unit (UP average rates)
      // Domestic slabs average ~₹7.0 / unit; Commercial ~₹9.0 / unit
      const isCommercial = selectedProperty === 'Shop' || selectedProperty === 'Office' || selectedProperty === 'Factory';
      const tariffPerUnit = isCommercial ? 9.0 : 7.0;

      // Estimated Monthly Units Consumed
      const monthlyUnits = bill / tariffPerUnit;

      // In UP, 1 kW generates approx 120-125 units (kWh) per month
      const unitsPerKwPerMonth = 120;
      let rawKw = monthlyUnits / unitsPerKwPerMonth;

      // Round to realistic practical standard kW steps:
      // Minimum 1 kW; round to nearest integer or 0.5 kW
      let recommendedKw = Math.max(1, Math.round(rawKw));
      if (rawKw < 1.4) recommendedKw = 1;
      else if (rawKw < 2.4) recommendedKw = 2;
      else if (rawKw < 3.5) recommendedKw = 3;
      else if (rawKw < 4.5) recommendedKw = 4;
      else if (rawKw < 6.0) recommendedKw = 5;
      else if (rawKw < 8.0) recommendedKw = 7;
      else if (rawKw < 12.0) recommendedKw = 10;
      else recommendedKw = Math.round(rawKw / 5) * 5; // steps of 5 for larger sizes

      // 2. Generation calculations
      const monthlyGen = Math.round(recommendedKw * unitsPerKwPerMonth);
      const annualGen = Math.round(monthlyGen * 12);

      // 3. Savings calculations
      // Most homeowners offset 80% to 90% of electricity bill
      const potentialMonthlySavings = Math.min(bill * 0.90, monthlyGen * tariffPerUnit);
      const annualSavings = potentialMonthlySavings * 12;

      // 4. Roof Area needed: approx 90-100 sq ft shadow-free terrace area per kW
      const roofArea = Math.round(recommendedKw * 95);

      // 5. Subsidy calculations (PM Surya Ghar + UP State Policy)
      let centralSubsidy = 0;
      let stateSubsidy = 0;
      let isEligibleResidential = !isCommercial && recommendedKw <= 10;

      if (isEligibleResidential) {
        if (recommendedKw === 1) {
          centralSubsidy = 30000;
          stateSubsidy = 15000;
        } else if (recommendedKw === 2) {
          centralSubsidy = 60000;
          stateSubsidy = 30000;
        } else {
          // 3 kW and above: capped at 78,000 central + 30,000 state
          centralSubsidy = 78000;
          stateSubsidy = 30000;
        }
      }

      const totalSubsidy = centralSubsidy + stateSubsidy;

      // --- Update DOM ---
      if (kwDisplay) kwDisplay.textContent = recommendedKw;
      if (monthlyGenDisplay) monthlyGenDisplay.textContent = monthlyGen.toLocaleString('en-IN') + ' units';
      if (annualGenDisplay) annualGenDisplay.textContent = annualGen.toLocaleString('en-IN') + ' units';
      if (monthlySavingsDisplay) monthlySavingsDisplay.textContent = formatCurrency(potentialMonthlySavings) + ' / mo';
      if (annualSavingsDisplay) annualSavingsDisplay.textContent = formatCurrency(annualSavings) + ' / yr';
      if (roofAreaDisplay) roofAreaDisplay.textContent = roofArea.toLocaleString('en-IN') + ' sq. ft.';

      if (subsidyCard && subsidyAmountDisplay) {
        if (isEligibleResidential) {
          subsidyCard.style.display = 'flex';
          subsidyAmountDisplay.textContent = 'Up to ' + formatCurrency(totalSubsidy);
          if (subsidyNote) {
            subsidyNote.textContent = '(PM Surya Ghar: ' + formatCurrency(centralSubsidy) + ' + UP State: ' + formatCurrency(stateSubsidy) + ' for eligible homes)';
          }
        } else {
          subsidyCard.style.display = 'flex';
          subsidyAmountDisplay.textContent = '40% Accelerated Depr.';
          if (subsidyNote) {
            subsidyNote.textContent = 'Commercial properties benefit from tax depreciation & GST credit.';
          }
        }
      }

      // Contextual WhatsApp link
      if (whatsappBtn) {
        const text = encodeURIComponent(
          'Hi Solar Wallah, I used your solar calculator.\n' +
          '• City: ' + selectedCity + '\n' +
          '• Property: ' + selectedProperty + '\n' +
          '• Monthly Bill: ' + formatCurrency(bill) + '\n' +
          '• Recommended System: ' + recommendedKw + ' kW\n' +
          'Please provide a detailed solar assessment and quote.'
        );
        whatsappBtn.href = 'https://wa.me/919580659559?text=' + text;
      }

      if (quoteModalBtn) {
        quoteModalBtn.setAttribute('data-city', selectedCity);
        quoteModalBtn.setAttribute('data-kw', recommendedKw);
      }
    }

    // Event listeners
    billSlider.addEventListener('input', function () {
      calculate();
      window.solarWallahTrack('calculator_use', { bill: billSlider.value });
    });

    propertyTypeInputs.forEach(function (radio) {
      radio.addEventListener('change', calculate);
    });

    if (citySelect) {
      citySelect.addEventListener('change', calculate);
    }

    // Initial run
    calculate();
  }
})();
