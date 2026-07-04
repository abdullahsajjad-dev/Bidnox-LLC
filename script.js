const iconMap = {
  calculator: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M16 15h0"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 17 17 4l3 3L7 20z"/><path d="m8 15 2 2M11 12l2 2M14 9l2 2"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 19V5M4 19h16"/><path d="M8 16v-5M12 16V8M16 16v-9"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 21v-5h4v5M8 7h1M13 7h1M8 11h1M13 11h1"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  report: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M5 3h14v18H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 7h16v12H4z"/><path d="M16 11h4v4h-4zM4 7l3-3h10l3 3"/></svg>',
  support: '<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2"/><path d="M6 12h3v5H6zM15 12h3v5h-3z"/><path d="M12 19h4"/></svg>'
};

const fallbackContent = {
  trustLogos: ["Cost Estimates", "Material Takeoffs", "Bid Support", "Budget Planning", "Scope Review"],
  about: {
    eyebrow: "About Bidnox Estimates",
    title: "Professional Estimates, Quotes & Proposals — Fast",
    text: "Bidnox LLC® is a reliable construction cost consulting firm specializing in accurate cost estimation and comprehensive bid management services. Our experienced consultants provide data-driven insights that help clients make informed decisions throughout every stage of their construction projects. We proudly serve public and private sector clients across the country, delivering dependable budgeting support and cost planning to help ensure successful project execution.",
    text2: "Our team of estimators and quantity surveyors are well-versed in the latest industry standards, software, and best practices. We offer a range of services including detailed cost estimates, material takeoffs, bid preparation support, and project budget planning. Whether you are a contractor, developer, or builder, we provide the expertise and resources needed to streamline your estimating process and achieve accurate results",
    image: "https://images.unsplash.com/photo-1549536654-5e3b6d9b1b4d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Construction estimating team reviewing project documents"
  },
  markets: [
    {
      code: "USA",
      flag: "🇺🇸",
      title: "USA construction estimating",
      text: "Built around direct and indirect cost visibility, scope basis, trade quantities, and due-diligence review before bid submission.",
      bullets: ["Commercial and residential estimates", "Material and labour takeoffs", "Bid review and cost summary"]
    },
    {
      code: "UK",
      flag: "🇬🇧",
      title: "UK quantity-focused cost planning",
      text: "Written with RICS NRM language in mind: cost planning, detailed measurement, and consistent reporting for construction work.",
      bullets: ["NRM-aware wording", "Tender-stage cost planning", "Quantity breakdown support"]
    },
    {
      code: "AUS",
      flag: "🇦🇺",
      title: "Australia estimating support",
      text: "Aligned with common quantity surveying responsibilities: quantifying materials, labour, equipment, scope, budget, and financial risk.",
      bullets: ["Feasibility budgeting", "Trade package quantities", "Builder and developer support"]
    }
  ],
  sources: [
    {
      title: "RICS NRM",
      text: "UK measurement and cost-management reference for construction projects and maintenance works.",
      url: "https://www.rics.org/profession-standards/rics-standards-and-guidance/sector-standards/construction-standards/nrm"
    },
    {
      title: "AIQS profession guide",
      text: "Australian reference for quantity surveying roles including estimators, cost consultants, cost planners, and cost managers.",
      url: "https://www.aiqs.com.au/profession"
    },
    {
      title: "GSA estimate FAQ",
      text: "Public USA reference describing Summary Cost Estimates and review of cost estimate validity.",
      url: "https://www.gsa.gov/real-estate/reimbursable-services-program/frequently-asked-questions/estimates"
    },
    {
      title: "ASPE estimating practice",
      text: "USA professional estimating organization with standard estimating practice resources.",
      url: "https://aspenational.org/"
    }
  ],
  why: [
    { title: "Branded With Your Logo", text: "Every estimate, quote, and proposal carries your company logo and contact info — ready to send to your client.", icon: "price_tag" },
    { title: "Quantity-focused workflow", text: "Takeoffs are structured around trade quantities, materials, labour, and equipment needs.", icon: "ruler" },
    { title: "Regional positioning", text: "Content and service language now speaks directly to USA, UK, and Australian project expectations.", icon: "globe" },
    { title: "±10% Accuracy Guarantee", text: "Detailed, line-item takeoffs and pricing you can bid with confidence.", icon: "verified" },
    { title: "Fast Turnaround", text: "We respond within 1 business day and work to your bid deadline — fully remote, nationwide.", icon: "wallet" },
    { title: "Professional communication", text: "The contact flow asks for region, project type, scope, drawings, and deadline so estimates start with better information.", icon: "support" }
  ],
  stats: [
    { value: 3, suffix: "", label: "Core regions" },
    { value: 5, suffix: "", label: "Service categories" },
    { value: 4, suffix: "", label: "Workflow stages" },
    { value: 2, suffix: "", label: "Report formats" }
  ],
  process: [
    { step: "01", title: "Submit Your Project", text: "Fill out the form with your company info, logo, blueprints, or scope of work. All trades and sizes welcome." },
    { step: "02", title: "We Review & Confirm", text: "We'll review your submission and follow up with any clarifying questions within 1 business day. Need it sooner? Send a text or email and we'll prioritize your request." },
    { step: "03", title: "QuickBooks Invoice Sent", text: "You'll receive a professional QuickBooks invoice for the estimating service fee — easy, secure payment." },
    { step: "04", title: "Branded Estimate Delivered", text: "Your completed estimate, quote, or proposal is delivered with your company logo and contact information included" }
  ]
};

const fallbackServices = [
  { title: "Construction Cost Estimation", description: "Detailed cost estimates for residential, commercial, industrial, renovation, and tender-stage projects.", icon: "calculator" },
  { title: "Material Takeoff Services", description: "Measured quantities for materials, finishes, structural elements, MEP items, and trade packages.", icon: "ruler" },
  { title: "Bid Preparation Support", description: "Bid-ready summaries with scope notes, exclusions, assumptions, and organized line-item reporting.", icon: "file" },
  { title: "Project Budget Planning", description: "Early cost planning support for owners, developers, architects, and preconstruction teams.", icon: "chart" },
  { title: "Commercial & Industrial", description: "Estimating support for offices, retail, hospitality, warehouses, fit-outs, and industrial scopes.", icon: "building" }
];

const fallbackPricing = [
  {
    name: "Starter",
    tagline: "Small residential or single-trade scope",
    project: "750",
    currency: "$",
    features: ["Up to 3 estimates per month",
      "All trades covered",
      "Branded with your logo",
      "±10% accuracy guarantee",
      "1 business day response"],
    highlight: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    tagline: "Contractor bid package",
    project: "1,000",
    currency: "$",
    features: ["Up to 5 estimates per month",
      "All trades covered",
      "Branded with your logo",
      "±10% accuracy guarantee",
      "Priority turnaround",
      "Bid proposal preparation included"],
    highlight: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    tagline: "Commercial, multi-trade, or repeat work",
    project: "2,400",
    currency: "$",
    features: ["Up to 15 estimates per month",
      "Dedicated estimator",
      "All trades covered",
      "Branded with your logo",
      "±10% accuracy guarantee",
      "Fastest priority turnaround"],
    highlight: false,
    cta: "Get Started"
  }
];

const fallbackScenarios = [
  { name: "General Contractor", role: "Bid package", company: "Commercial project", country: "USA", quote: "A contractor needs a clean trade-level estimate, scope notes, and a spreadsheet output before submitting a competitive bid.", rating: 5 },
  { name: "Developer", role: "Early budget", company: "Mixed-use feasibility", country: "UK", quote: "A developer needs cost-planning support before the design is finalized, with measured quantities and clear assumptions for decision-making.", rating: 5 },
  { name: "Builder", role: "Material takeoff", company: "Residential construction", country: "Australia", quote: "A builder needs measured quantities for materials, labour planning, and subcontractor discussions before pricing the job.", rating: 5 }
];

async function loadJson(file, fallbackValue) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Could not load ${file}`);
    return await response.json();
  } catch (error) {
    console.warn(error.message);
    return fallbackValue;
  }
}

// renderTrust removed — trust-bar was removed from the page

function isLikelyValidImageSrc(src) {
  if (!src || typeof src !== 'string') return false;
  const s = src.trim();
  if (!s) return false;
  // Accept relative paths (including ones with spaces/parentheses) and data:/http(s): URLs.
  // Reject obviously empty/placeholder values.
  if (s === 'about:blank') return false;
  return true;
}

function renderAbout(about) {
  document.getElementById('aboutEyebrow').textContent = about.eyebrow;
  document.getElementById('about-title').textContent = about.title;
  document.getElementById('aboutText').textContent = about.text;
  document.getElementById('aboutText2').textContent = about.text2;

  const image = document.getElementById('aboutImage');
  if (!image) return;

  const defaultSrc = image.getAttribute('src');
  const overrideSrcRaw = about && typeof about.image === 'string' ? about.image.trim() : '';

  const overrideSrc = overrideSrcRaw.replace(/\s+\(/g, '  (');

  const shouldOverride = isLikelyValidImageSrc(overrideSrc) && overrideSrc !== defaultSrc;
  if (shouldOverride) {
    image.src = overrideSrc;
  }

  if (about.imageAlt) {
    image.alt = about.imageAlt;
  }
}


function renderServices(services) {
  document.getElementById('servicesGrid').innerHTML = services.map(service => `
    <article class="service-card reveal">
      <div class="icon-box" aria-hidden="true">${iconMap[service.icon] || iconMap.file}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </article>
  `).join('');
}

function renderMarkets(markets) {
  const el = document.getElementById('marketsGrid');
  if (!el) return;
  el.innerHTML = markets.map(item => `
    <article class="market-card reveal" data-code="${item.code}">
      <div class="market-flag" aria-hidden="true">${item.flag}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <ul>${item.bullets.map(point => `<li>${point}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderSources(sources) {
  const el = document.getElementById('sourceGrid');
  if (!el) return;
  el.innerHTML = sources.map(source => `
    <a class="source-card reveal" href="${source.url}" target="_blank" rel="noopener noreferrer">
      <h3>${source.title}</h3>
      <p>${source.text}</p>
      <span>Open source →</span>
    </a>
  `).join('');
}

function renderProcess(process) {
  document.getElementById('processGrid').innerHTML = process.map(item => `
    <article class="process-card reveal" data-step="${item.step}">
      <span class="process-step">${item.step}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderStats(stats) {
  document.getElementById('statsGrid').innerHTML = stats.map(item => `
    <article class="stat-card reveal">
      <span class="stat-value"><span class="counter" data-target="${item.value}">0</span>${item.suffix}</span>
      <p>${item.label}</p>
    </article>
  `).join('');
}

function renderWhy(items) {
  document.getElementById('whyGrid').innerHTML = items.map(item => `
    <article class="why-card reveal">
      <div class="icon-box" aria-hidden="true">${iconMap[item.icon] || iconMap.target}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

let currentBilling = 'project';
let pricingData = [];
function renderPricing() {
  document.getElementById('pricingGrid').innerHTML = pricingData.map(plan => {
    // pricing.json uses "monthly"/"currency"/"features" etc.
    // currentBilling expects keys like "project" but the plan objects don't have that.
    // So map missing keys to the available ones to avoid "undefined" rendering.
    const priceKey = plan.hasOwnProperty(currentBilling) ? currentBilling : 'monthly';
    const price = plan[priceKey];

    const period = currentBilling === 'project' ? '/ mo' : '/ ongoing support';

    const priceMarkup = price === 'Quote' || price === 'Custom'
      ? `<div class="price"><strong>${price}</strong><span>${period}</span></div>`
      : `<div class="price"><span>${plan.currency || ''}</span><strong>${price}</strong><span>${period}</span></div>`;
    return `
      <article class="price-card reveal ${plan.highlight ? 'highlight' : ''}">
        ${plan.highlight ? '<span class="popular-badge">Most requested</span>' : ''}
        <h3>${plan.name}</h3>
        <p class="price-tagline">${plan.tagline}</p>
        ${priceMarkup}
        <ul class="features">${plan.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
        <a class="btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}" href="#contact">${plan.cta}</a>
      </article>
    `;
  }).join('');
  observeReveal();
}

let testimonials = [];
let testimonialIndex = 0;
function renderTestimonial() {
  if (!testimonials.length) return;
  const item = testimonials[testimonialIndex];
  document.getElementById('testimonialCard').innerHTML = `
    <div class="stars" aria-hidden="true">${'★'.repeat(item.rating || 5)}</div>
    <blockquote>“${item.quote}”</blockquote>
    <div class="testimonial-meta">
      <div><strong>${item.name}</strong><span>${item.role}, ${item.company}</span></div>
      <span class="country">${item.country}</span>
    </div>
  `;
}

function observeReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target);
      const duration = 1000;
      const started = performance.now();
      function tick(now) {
        const progress = Math.min((now - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(counter => observer.observe(counter));
}

function setupNavigation() {
  const header = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12));
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.classList.toggle('active', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

function setupPricingToggle() {
  document.querySelectorAll('[data-billing]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentBilling = btn.dataset.billing;
      document.querySelectorAll('[data-billing]').forEach(item => item.classList.toggle('active', item === btn));
      renderPricing();
    });
  });
}

function setupTestimonials() {
  const previous = document.getElementById('prevTestimonial');
  const next = document.getElementById('nextTestimonial');
  if (!previous || !next) return;
  previous.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonial();
  });
  next.addEventListener('click', () => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  });
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    renderTestimonial();
  }, 6500);
}

function setupForm() {
  const form = document.getElementById('quoteForm');
  const status = document.getElementById('formStatus');

  // If Web3Forms success container isn't present, don't block submission.
  if (!form || !status) return;

  // Web3Forms submits to a server. This handler should NOT prevent submission.
  // Keep only basic UX validation and let the form post normally.
  const validators = {
    name: value => value.trim().length >= 2 ? '' : 'Please enter your name.',
    email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email.',
    projectType: value => value ? '' : 'Please select a project type.',
    region: value => value ? '' : 'Please select a region.',
    message: value => value.trim().length >= 10 ? '' : 'Please add brief project details.'
  };
  function setError(field, message) {
    const wrapper = field.closest('.field');
    wrapper.classList.toggle('error', Boolean(message));
    wrapper.querySelector('small').textContent = message;
  }
  form.addEventListener('submit', event => {
    // Do not prevent default submit (Web3Forms handles the POST).
    // Only stop submission if we want to hard-block UX validation.
    event.preventDefault();
    status.textContent = '';
    let valid = true;
    Object.entries(validators).forEach(([id, validate]) => {
      const field = document.getElementById(id);
      const error = validate(field.value);
      setError(field, error);
      if (error) valid = false;
    });
    if (valid) {
      form.reset();
      status.textContent = 'Thank you. Your estimate request has been received.';
    }
  });
}

function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 500));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

async function init() {
  setupNavigation();
  setupPricingToggle();
  setupBackToTop();
  setupForm();
  document.getElementById('year').textContent = new Date().getFullYear();

  const [content, services, pricing, scenarioItems] = await Promise.all([
    loadJson('content.json', fallbackContent),
    loadJson('services.json', fallbackServices),
    loadJson('pricing.json', fallbackPricing),
    loadJson('testimonials.json', fallbackScenarios)
  ]);

  renderAbout(content.about || fallbackContent.about);
  renderServices(services.length ? services : fallbackServices);
  renderMarkets(content.markets || fallbackContent.markets);
  renderSources(content.sources || fallbackContent.sources);
  renderProcess(content.process || fallbackContent.process);
  renderStats(content.stats || fallbackContent.stats);
  renderWhy(content.why || fallbackContent.why);
  pricingData = pricing.length ? pricing : fallbackPricing;
  renderPricing();
  testimonials = scenarioItems.length ? scenarioItems : fallbackScenarios;
  renderTestimonial();
  setupTestimonials();
  observeReveal();
  animateCounters();
}

document.addEventListener('DOMContentLoaded', init);



(function () {
  "use strict";

  const MAX_DOCS_BYTES = 10 * 1024 * 1024; // 10 MB, matches the on-page copy

  const MAX_LOGO_BYTES = 5 * 1024 * 1024; // sane ceiling for a logo image

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    buildTitleBlock();
    wireSectionSpine();
    wireLogoUpload();
    wireDocsUpload();
    wireDragAndDrop();
    setMinBidDate();
    formatPhoneAsTyped();
    ensureErrorSlot();
  }

  /* ---- Title block meta strip -------------------------------------- */
  function buildTitleBlock() {
    const heading = document.querySelector(".quote-form > h3");
    if (!heading || document.querySelector(".form-meta")) return;

    const today = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const meta = document.createElement("div");
    meta.className = "form-meta";
    meta.innerHTML =

      '<span>REV: <strong>A</strong></span>' +
      '<span>DATE: <strong>' + today + '</strong></span>' +
      '<span>ISSUED BY: <strong>BIDNOX LLC&reg;</strong></span>';

    heading.insertAdjacentElement("afterend", meta);
  }

  /* ---- Turn "① Section Name" into a numbered node on the spine ------ */
  function wireSectionSpine() {
    const circled = /^([\u2460-\u2473])\s*(.*)$/; // ①..⑳
    const heads = document.querySelectorAll(".form-section-head");
    for (let i = 0; i < heads.length; i++) {
      const el = heads[i];
      const match = el.textContent.match(circled);
      if (!match) continue;
      el.innerHTML =
        '<span class="section-num">' + match[1] + "</span>" +
        '<span class="section-title">' + match[2] + "</span>";

      // ensure a visible space between the circled number and the title
      // (inline layout; replaces prior boxed/spine-only look)
      const titleSpan = el.querySelector('.section-title');
      if (titleSpan && titleSpan.textContent) {
        titleSpan.style.marginLeft = '6px';
      }
    }
  }


  /* ---- Logo upload: preview + basic validation ----------------------- */
  function wireLogoUpload() {
    const input = document.getElementById("logoInput");
    const zone = document.getElementById("logoZone");
    const preview = document.getElementById("logoPreview");
    const img = document.getElementById("logoImg");
    if (!input || !preview || !img) return;

    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) {
        preview.classList.remove("is-visible");
        zone && zone.classList.remove("has-file");
        return;
      }

      if (file.size > MAX_LOGO_BYTES) {
        showError("That logo is over 5 MB — please upload a smaller image file.");
        input.value = "";
        preview.classList.remove("is-visible");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        preview.classList.add("is-visible");
        zone && zone.classList.add("has-file");
      };
      reader.readAsDataURL(file);
    });
  }

  /* ---- Blueprint / scope documents: file list + size check ----------- */
  function wireDocsUpload() {
    const input = document.getElementById("docsInput");
    const zone = document.getElementById("docsZone");
    const label = document.getElementById("docsLabel");
    if (!input || !label) return;

    input.addEventListener("change", () => renderDocsSummary(input, zone, label));
  }

  function renderDocsSummary(input, zone, label) {
    const files = Array.from(input.files || []);

    // Remove any previous summary line before redrawing
    const existing = label.querySelector(".file-summary");
    if (existing) existing.remove();

    if (files.length === 0) {
      zone && zone.classList.remove("has-file");
      return;
    }

    zone && zone.classList.add("has-file");

    const totalBytes = files.reduce((sum, f) => sum + f.size, 0);
    const totalMb = (totalBytes / (1024 * 1024)).toFixed(1);
    const over = totalBytes > MAX_DOCS_BYTES;

    const summary = document.createElement("span");
    summary.className = "file-summary" + (over ? " is-over" : "");
    const names = files.map((f) => f.name).join(", ");
    summary.textContent =
      files.length === 1
        ? names + " — " + totalMb + " MB"
        : files.length + " files selected — " + totalMb + " MB total";

    if (over) {
      summary.textContent += " · over 10 MB, use the Dropbox link below instead";
    }

    label.appendChild(summary);
  }

  /* ---- Drag & drop polish for both upload zones ----------------------- */
  function wireDragAndDrop() {
    const zones = document.querySelectorAll(".upload-area");
    for (let i = 0; i < zones.length; i++) {
      const zone = zones[i];
      const input = zone.querySelector('input[type="file"]');
      if (!input) continue;

      ["dragenter", "dragover"].forEach((evt) =>
        zone.addEventListener(evt, (e) => {
          e.preventDefault();
          zone.classList.add("is-dragover");
        })
      );

      ["dragleave", "drop"].forEach((evt) =>
        zone.addEventListener(evt, (e) => {
          e.preventDefault();
          zone.classList.remove("is-dragover");
        })
      );

      zone.addEventListener("drop", (e) => {
        const dropped = e.dataTransfer && e.dataTransfer.files;
        if (dropped && dropped.length) {
          input.files = dropped;
          input.dispatchEvent(new Event("change"));
        }
      });
    }
  }

  /* ---- Small conveniences --------------------------------------------- */
  function setMinBidDate() {
    const dateInput = document.querySelector('input[name="bid_date"]');
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
  }

  function formatPhoneAsTyped() {
    const phone = document.querySelector('input[name="phone"]');
    if (!phone) return;
    phone.addEventListener("input", () => {
      const digits = phone.value.replace(/\D/g, "").slice(0, 10);
      let formatted = digits;
      if (digits.length > 6) {
        formatted =
          "(" +
          digits.slice(0, 3) +
          ") " +
          digits.slice(3, 6) +
          "-" +
          digits.slice(6);
      } else if (digits.length > 3) {
        formatted = "(" + digits.slice(0, 3) + ") " + digits.slice(3, 6);
      } else if (digits.length > 0) {
        formatted = "(" + digits;
      }
      phone.value = formatted;
    });
  }

  function ensureErrorSlot() {
    const form = document.getElementById("quoteForm");
    if (!form || document.querySelector(".form-error")) return;
    const box = document.createElement("div");
    box.className = "form-error";
    box.setAttribute("role", "alert");
    form.appendChild(box);
  }

  function showError(message) {
    const box = document.querySelector(".form-error");
    if (!box) {
      alert(message);
      return;
    }
    box.textContent = message;
    box.classList.add("is-visible");
    if (typeof box.scrollIntoView === "function") {
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function clearError() {
    const box = document.querySelector(".form-error");
    if (box) box.classList.remove("is-visible");
  }

  /* ---- Submit handler, referenced by the form's onsubmit ------------- */
  window.handleSubmit = function (event) {
    event.preventDefault();
    clearError();

    const form = event.target;
    const button = form.querySelector(".submit-btn");
    const docsInput = document.getElementById("docsInput");

    if (docsInput && docsInput.files) {
      const totalBytes = Array.from(docsInput.files).reduce((sum, f) => sum + f.size, 0);
      if (totalBytes > MAX_DOCS_BYTES) {
        showError(
          "Your attached files total over 10 MB. Please remove some, or send the full set " +
          "using the \u201CUpload Large Files\u201D link instead, then submit this form without them."
        );
        return;
      }
    }

    const formData = new FormData(form);

    if (button) {
      button.disabled = true;
      button.classList.add("is-loading");
    }

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json().catch(() => ({})).then((data) => ({ ok: response.ok, data })))
      .then(({ ok, data }) => {
        if (ok && data.success !== false) {
          form.style.display = "none";
          const success = document.getElementById("successMsg");
          if (success) {
            success.classList.add("is-visible");
            if (typeof success.scrollIntoView === "function") {
              success.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        } else {
          throw new Error((data && data.message) || "Submission failed");
        }
      })
      .catch(() => {
        showError(
          "Something went wrong sending your request. Please try again, or email your " +
          "project details directly to info@bidnoxestimates.com."
        );
      })
      .finally(() => {
        if (button) {
          button.disabled = false;
          button.classList.remove("is-loading");
        }
      });

    return false;
  };
})();

