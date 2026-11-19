/* ==========================================================================
   BeBosS · Interactive Studio & Guided Client Journey
   Zero personal names · View-only media · BeBosS signature boarding pass
   ========================================================================== */

(() => {
  const CONTACT = {
    email: "beboss.creative@outlook.com",
    phone: "+20 100 300 0607",
    phoneHref: "tel:+201003000607",
    wa: "https://wa.me/201003000607",
    ig: "https://instagram.com/be.bossss",
    igHandle: "@be.bossss",
  };

  const DESTINATIONS = {
    launch: {
      label: "Launch New",
      role: "NEW BRAND LAUNCH · DAY ONE",
      planType: "onetime",
      planId: "identity",
      note: "Recommended path: Brand Identity (EGP 45,000) or Brand Strategy (EGP 25,000) straight into Starter.",
    },
    growth: {
      label: "Ready to Grow",
      role: "GROWTH PARTNER · FILM & ADS",
      planType: "monthly",
      planId: "growth",
      note: "Recommended path: Growth Plan (EGP 38,000/mo) — our film crew joins with 1 shoot day, 6 filmed reels & paid ads.",
    },
    boss: {
      label: "Own the Category",
      role: "FULL 360° STUDIO PARTNER",
      planType: "monthly",
      planId: "boss",
      note: "Recommended path: Boss Plan (EGP 60,000/mo) — dedicated art director, 2 filming days, 10 reels & 3 ad platforms.",
    },
  };

  const GATES = [
    {
      id: "g1",
      num: "01",
      route: "desk",
      short: "Desk",
      eyebrow: "GATE 01 · STUDIO DESK",
      title: "Start from where your brand stands today.",
      body: "Every client flight starts at the Production Desk. Pick the stage that matches your business right now — we tailor your plan, crew, and timeline around it.",
      task: "Tap one of the 3 starting stages below",
      selector: "#stagePicker",
    },
    {
      id: "g2",
      num: "02",
      route: "calendar",
      short: "Calendar",
      eyebrow: "GATE 02 · CONTENT CALENDAR",
      title: "Approve every post before a single frame goes live.",
      body: "This is the real BeBosS November Content Calendar — built on Cairo peak hours. Switch between the Weekly Plan and Month Grid, or tap any post to flip through its slides.",
      task: "Switch calendar view or open any post to inspect its slides",
      selector: "#calendarStage",
    },
    {
      id: "g3",
      num: "03",
      route: "feed",
      short: "Feed",
      eyebrow: "GATE 03 · @BE.BOSSSS FEED",
      title: "See how every grid locks together in 4:5.",
      body: "Every BeBosS client sees their live 3-column feed before publishing — comparing what is live on Instagram against what is queued next under one visual standard.",
      task: "Tap any tile on the @be.bossss grid to view the full story",
      selector: "#feedStage",
    },
    {
      id: "g4",
      num: "04",
      route: "services",
      short: "Services",
      eyebrow: "GATE 04 · NINE SERVICES",
      title: "Nine services. One roof. Zero freelancers in between.",
      body: "From brand strategy and art direction to our in-house filming crew, reels, paid growth, and web experiences — one art director keeps every piece aligned.",
      task: "Tap any service card to inspect its deliverables",
      selector: "#servicesGrid",
    },
    {
      id: "g5",
      num: "05",
      route: "plans",
      short: "Plans",
      eyebrow: "GATE 05 · 2026 EGP PLANS",
      title: "Clear EGP pricing. Monthly retainers or one-time builds.",
      body: "Starter starts at EGP 20,000/mo, our film crew joins from Growth (EGP 38,000/mo), and Boss (EGP 60,000/mo) puts the whole studio behind your brand.",
      task: "Select a monthly plan or one-time project to load your pass",
      selector: "#plansGrid",
    },
    {
      id: "g6",
      num: "06",
      route: "board",
      short: "Sign",
      eyebrow: "GATE 06 · BOARDING & SIGN",
      title: "Review your BeBosS Pass and sign your brief.",
      body: "Your selected scope is loaded onto your official BeBosS Boarding Pass. Draw your signature on the pad and dispatch directly to beboss.creative@outlook.com or WhatsApp.",
      task: "Sign on the digital signature pad to stamp your final gate",
      selector: "#sigPadCard",
    },
  ];

  const ICONS = {
    desk: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
    feed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
    services: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    plans: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    lab: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3M18.4 5.6l-2.1 2.1M21 12h-3M5.6 5.6l2.1 2.1M3 12h3"/><path d="M9 18h6M10 21h4M12 7a5 5 0 0 0-3 9h6a5 5 0 0 0-3-9z"/></svg>`,
    board: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    wa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  };

  const ROUTES = [
    { id: "desk", label: "Studio Desk", icon: "desk", gate: "g1", group: "main" },
    { id: "calendar", label: "Content Calendar", icon: "calendar", gate: "g2", group: "main", count: POSTS.length },
    { id: "feed", label: "Feed Preview", icon: "feed", gate: "g3", group: "main" },
    { id: "services", label: "Nine Services", icon: "services", gate: "g4", group: "main", count: SERVICES.length },
    { id: "plans", label: "Plans & Pricing", icon: "plans", gate: "g5", group: "main" },
    { id: "board", label: "Boarding & Sign", icon: "board", gate: "g6", group: "main" },
    { id: "lab", label: "Brand Studio Lab", icon: "lab", group: "sys" },
  ];

  const CRAFT_LAB = [
    {
      num: "01",
      title: "1-Second Subject",
      sub: "Stop the thumb before a word is read.",
      desc: "One unmistakable silhouette, crisp editorial studio lighting from upper-left, and clean negative space. Zero cluttered collages.",
      img: "assets/brand/boss-master.webp",
      rule: "1·3·5 RULE · SECOND 1",
    },
    {
      num: "02",
      title: "3-Second Surreal Twist",
      sub: "80% clean signal, 20% unforgettable craft.",
      desc: "Retro broadcast hardware, miniature worlds, or a deadpan visual metaphor that turns a marketing insight into a frame people save and send.",
      img: "assets/brand/object-studies.webp",
      rule: "80/20 CRAFT LAW · SECOND 3",
    },
    {
      num: "03",
      title: "5-Second BeBosS Signature",
      sub: "Cream, Cobalt, Navy — and one Pink touch.",
      desc: "Every carousel, reel, and campaign closes on a say line under one locked palette, Space Grotesk + Inter typography, and the stencil wordmark.",
      img: "assets/brand/launch-carousel.webp",
      rule: "BRAND BOOK V2 · SECOND 5",
    },
    {
      num: "04",
      title: "30-Day Content Architecture",
      sub: "Strategy to calendar to live grid.",
      desc: "Every monthly plan runs on a structured editorial rhythm timed to Cairo & GCC peak windows — approved by you before anything goes live.",
      img: "assets/calendar/cover-collage.webp",
      rule: "EDITORIAL ENGINE · MONTHLY",
    },
  ];

  const state = {
    route: "desk",
    brandName: "",
    destination: "growth",
    stamps: new Set(),
    tourActive: false,
    tourPaused: false,
    tourIndex: 0,
    arrivalShown: false,
    calView: "week", // 'week' | 'month'
    calFilter: "all", // 'all' | 'live' | 'next'
    svcCat: "all", // 'all' | 'brand' | 'production' | 'growth'
    planMode: "monthly", // 'monthly' | 'onetime' | 'custom'
    selectedMonthly: "growth",
    selectedOnetime: "identity",
    customServices: new Set(["brand-strategy", "art-direction", "content-campaign"]),
    labIndex: 0,
    clientEmail: "",
    clientPhone: "",
    clientMarket: "Egypt (Cairo)",
    clientNotes: "",
    hasSigned: false,
    sigDataUrl: "",
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const egp = (n) => "EGP " + Number(n || 0).toLocaleString("en-US");

  /* ---------- Persistence (visitor progress in browser) ---------- */
  function saveLocal() {
    try {
      localStorage.setItem("beboss_journey_v2", JSON.stringify({
        brandName: state.brandName,
        destination: state.destination,
        stamps: [...state.stamps],
        planMode: state.planMode,
        selectedMonthly: state.selectedMonthly,
        selectedOnetime: state.selectedOnetime,
        customServices: [...state.customServices],
        visited: true,
      }));
    } catch {}
  }

  function loadLocal() {
    try {
      const raw = localStorage.getItem("beboss_journey_v2");
      if (!raw) return false;
      const d = JSON.parse(raw);
      if (d.brandName) state.brandName = d.brandName;
      if (d.destination && DESTINATIONS[d.destination]) state.destination = d.destination;
      if (Array.isArray(d.stamps)) d.stamps.forEach((g) => state.stamps.add(g));
      if (d.planMode) state.planMode = d.planMode;
      if (d.selectedMonthly) state.selectedMonthly = d.selectedMonthly;
      if (d.selectedOnetime) state.selectedOnetime = d.selectedOnetime;
      if (Array.isArray(d.customServices)) state.customServices = new Set(d.customServices);
      return Boolean(d.visited);
    } catch { return false; }
  }

  /* ---------- Toast & Stamp celebration ---------- */
  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("on"), 2600);
  }

  function popStamp(label, sub) {
    const div = document.createElement("div");
    div.className = "stamp-pop";
    div.innerHTML = `<small>${esc(sub)}</small>${esc(label)}`;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 1150);
  }

  function stampGate(gateId) {
    const gate = GATES.find((g) => g.id === gateId);
    if (!gate) return;
    const isNew = !state.stamps.has(gateId);
    state.stamps.add(gateId);
    saveLocal();
    renderNav();
    updatePassBadges();
    if (isNew) {
      popStamp(`GATE ${gate.num} STAMPED`, "BEBOSS BOARDING PASS");
      if (state.tourActive && GATES[state.tourIndex]?.id === gateId) {
        updateCoach();
      }
      if (state.stamps.size === GATES.length && !state.arrivalShown) {
        state.arrivalShown = true;
        setTimeout(() => openArrivalModal(), 900);
      }
    }
  }

  /* ---------- Boarding Pass Component (BeBosS Signature Ticket) ---------- */
  function renderTicketHTML({ onDark = false, compact = false } = {}) {
    const dest = DESTINATIONS[state.destination] || DESTINATIONS.growth;
    const passenger = state.brandName.trim() || "BeBosS Guest";
    const summary = getSelectedScope();
    const gatesHtml = GATES.map((g) => {
      const ok = state.stamps.has(g.id);
      return `<i class="${ok ? "ok" : ""}" title="Gate ${g.num}: ${g.short}">${ok ? "✓" : g.num}</i>`;
    }).join("");

    return `
      <div class="ticket ${onDark ? "on-dark" : ""}" aria-label="BeBosS Studio Boarding Pass">
        <div class="t-main">
          <div class="t-top">
            <img src="assets/brand/wordmark-cobalt.png" alt="BeBosS" draggable="false" />
            <span>ADMIT ONE</span>
          </div>
          <div style="margin-top:16px">
            <div class="t-lbl">PASSENGER · BRAND</div>
            <div class="t-name">${esc(passenger)}</div>
          </div>
          <div class="t-row">
            <div>
              <div class="t-lbl">BOARDING TRACK</div>
              <strong>${esc(compact ? dest.label : dest.role)}</strong>
            </div>
            <div>
              <div class="t-lbl">ROUTE · PLAN</div>
              <strong>CAIRO · GCC</strong>
              <div style="font-size:11.5px;color:var(--muted);margin-top:3px;font-weight:600">${esc(summary.label)}</div>
            </div>
          </div>
          <div style="margin-bottom:14px">
            <div class="t-lbl">STUDIO GATES (${state.stamps.size} / ${GATES.length})</div>
            <div class="t-gates">${gatesHtml}</div>
          </div>
          <div class="t-icons">
            <a href="${CONTACT.phoneHref}" title="Call BeBosS ${CONTACT.phone}" aria-label="Call BeBosS">${ICONS.phone}</a>
            <a href="${CONTACT.wa}?text=${encodeURIComponent(`Hi BeBosS team, I'm touring the studio for ${passenger} (${summary.label}).`)}" target="_blank" rel="noopener" title="WhatsApp BeBosS" aria-label="WhatsApp BeBosS">${ICONS.wa}</a>
            <a href="${CONTACT.ig}" target="_blank" rel="noopener" title="Instagram ${CONTACT.igHandle}" aria-label="Instagram BeBosS">${ICONS.ig}</a>
          </div>
          <div class="t-stamp">BE YOUR<br />OWN BOSS.</div>
        </div>
        <div class="t-stub">
          <img src="assets/brand/boss.webp" alt="The Boss" draggable="false" />
        </div>
      </div>
    `;
  }

  function updatePassBadges() {
    const brand = state.brandName.trim() || "BeBosS Guest Pass";
    $("#sidePassBrand").textContent = brand;
    $("#sidePassMeta").textContent = `${state.stamps.size} / ${GATES.length} gates stamped`;
    const slot = $("#gateTicketSlot");
    if (slot) slot.innerHTML = renderTicketHTML({ onDark: true });
    const liveSlot = $("#boardTicketSlot");
    if (liveSlot) liveSlot.innerHTML = renderTicketHTML({ onDark: false });
  }

  /* ---------- Pricing Calculation ---------- */
  function getSelectedScope() {
    if (state.planMode === "monthly") {
      const p = MONTHLY_PLANS[state.selectedMonthly] || MONTHLY_PLANS.growth;
      return {
        label: `${p.name} Monthly · ${egp(p.price)}/mo`,
        subtotal: p.price,
        vat: Math.round(p.price * 0.14),
        total: Math.round(p.price * 1.14),
        cadence: "/ month",
        terms: "3 month minimum term · Paid monthly in advance · Ad budget paid directly to platform",
        items: p.bullets.filter((b) => b.included).map((b) => b.text),
      };
    }
    if (state.planMode === "onetime") {
      const p = ONETIME_PROJECTS[state.selectedOnetime] || ONETIME_PROJECTS.identity;
      return {
        label: `${p.name} · ${egp(p.price)}`,
        subtotal: p.price,
        vat: Math.round(p.price * 0.14),
        total: Math.round(p.price * 1.14),
        cadence: "one-time",
        terms: p.terms,
        items: p.items,
      };
    }
    const chosen = SERVICES.filter((s) => state.customServices.has(s.id));
    const subtotal = chosen.reduce((a, s) => a + s.customFee, 0);
    return {
      label: `Custom Studio Stack (${chosen.length} services)`,
      subtotal,
      vat: Math.round(subtotal * 0.14),
      total: Math.round(subtotal * 1.14),
      cadence: "est. / mo",
      terms: "Tailored 360° retainer · Final quote confirmed on discovery call",
      items: chosen.map((s) => `${s.num} · ${s.name} (${egp(s.customFee)})`),
    };
  }

  /* ---------- Navigation ---------- */
  function renderNav() {
    const mainLinks = ROUTES.filter((r) => r.group === "main");
    const sysLinks = ROUTES.filter((r) => r.group === "sys");

    $("#sideNav").innerHTML = mainLinks.map((r) => {
      const on = state.route === r.id ? "on" : "";
      const stamped = r.gate && state.stamps.has(r.gate);
      return `<a href="#${r.id}" class="${on}" data-route="${r.id}">
        ${ICONS[r.icon]}
        <span>${r.label}</span>
        ${r.gate ? `<span class="stamp-dot ${stamped ? "ok" : ""}" title="${stamped ? "Gate stamped" : "Unstamped gate"}"></span>` : ""}
      </a>`;
    }).join("");

    $("#sysNav").innerHTML = sysLinks.map((r) => `
      <a href="#${r.id}" class="${state.route === r.id ? "on" : ""}" data-route="${r.id}">
        ${ICONS[r.icon]}
        <span>${r.label}</span>
      </a>
    `).join("");

    const mobileIds = ["desk", "calendar", "feed", "plans", "board"];
    $("#bnav").innerHTML = mobileIds.map((id) => {
      const r = ROUTES.find((x) => x.id === id);
      const short = id === "desk" ? "Desk" : id === "calendar" ? "Calendar" : id === "feed" ? "Feed" : id === "plans" ? "Plans" : "Sign";
      return `<a href="#${id}" class="${state.route === id ? "on" : ""}" data-route="${id}">${ICONS[r.icon]}<span>${short}</span></a>`;
    }).join("");

    const cur = ROUTES.find((r) => r.id === state.route);
    $("#crumbCur").textContent = cur ? cur.label : "Studio Desk";

    $$("[data-route]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        closeDrawer();
        go(a.dataset.route);
      });
    });
  }

  function closeDrawer() {
    $("#sidebar").classList.remove("open");
    $("#scrim").classList.remove("on");
  }

  function go(routeId, opts = {}) {
    if (!ROUTES.some((r) => r.id === routeId)) routeId = "desk";
    state.route = routeId;
    if (location.hash !== "#" + routeId) history.replaceState(null, "", "#" + routeId);
    renderNav();
    renderView();
    if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: "instant" });
    if (state.tourActive && !opts.fromTour) {
      const idx = GATES.findIndex((g) => g.route === routeId);
      if (idx >= 0) {
        state.tourIndex = idx;
        updateTourUI();
      } else {
        hideSpotlight();
      }
    }
  }

  /* ========================================================================
     VIEWS
     ======================================================================== */
  function renderView() {
    const main = $("#main");
    if (state.route === "desk") main.innerHTML = viewDesk();
    else if (state.route === "calendar") main.innerHTML = viewCalendar();
    else if (state.route === "feed") main.innerHTML = viewFeed();
    else if (state.route === "services") main.innerHTML = viewServices();
    else if (state.route === "plans") main.innerHTML = viewPlans();
    else if (state.route === "lab") main.innerHTML = viewLab();
    else if (state.route === "board") main.innerHTML = viewBoard();

    wireViewEvents();
    if (state.tourActive) setTimeout(positionSpotlight, 120);
  }

  /* ---------- 1. STUDIO DESK ---------- */
  function viewDesk() {
    const dest = DESTINATIONS[state.destination];
    const guest = state.brandName.trim();
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">BEBOSS · CAIRO · EGYPT &amp; THE GCC</span>
          <h1 class="h-xl">${guest ? `Welcome aboard, ${esc(guest)}` : "The production desk"}<span class="dot">.</span></h1>
          <p class="lead">One studio. One camera. One art director. Explore how BeBosS plans, shoots, designs, and scales brands across nine services under one roof.</p>
        </div>
        <button type="button" class="btn" id="deskStartTourBtn">
          ${state.stamps.size ? `Continue Tour (${state.stamps.size}/6)` : "Start Guided Tour"} ${ICONS.arrow}
        </button>
      </div>

      <section class="hero">
        <div style="position:relative;z-index:2">
          <span class="eyebrow">ONE STUDIO · NINE SERVICES · 2026</span>
          <h1>Be your own boss<span class="dot">.</span></h1>
          <p>Step inside our live production workspace — browse the real November content calendar, inspect the @be.bossss grid, configure your 2026 plan, and sign directly with the studio.</p>
          <div class="hero-actions">
            <button type="button" class="btn cream" data-go="calendar">Explore Live Calendar</button>
            <button type="button" class="btn pink" data-go="board">Open Boarding Pass</button>
          </div>
        </div>
        <div class="hero-checks">
          <div>${ICONS.check}<span>Strategy in 5 working days</span></div>
          <div>${ICONS.check}<span>First drafts in 72 hours</span></div>
          <div>${ICONS.check}<span>In-house film crew from Growth up</span></div>
          <div>${ICONS.check}<span>You approve every calendar first</span></div>
        </div>
        <img class="hero-boss" src="assets/brand/boss.webp" alt="The Boss figurine" draggable="false" />
      </section>

      <div class="stats">
        <div class="stat dark"><b>9+</b><span>Years of team experience in Egypt &amp; GCC</span></div>
        <div class="stat"><b>5</b><span>Markets served across the region</span></div>
        <div class="stat"><b>360°</b><span>Strategy, design, film, content &amp; ads</span></div>
        <div class="stat"><b>72 h</b><span>To first drafts on every new brief</span></div>
      </div>

      <div class="desk">
        <div class="grid" style="gap:20px">
          <section class="card" id="stagePicker">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
              <div>
                <span class="eyebrow c">GATE 01 · CHOOSE YOUR FLIGHT PATH</span>
                <h2 class="h-md" style="margin-top:8px">Where is your brand today?</h2>
              </div>
              <span class="pill cob">${esc(dest.label)}</span>
            </div>
            <div class="picker">
              ${Object.entries(DESTINATIONS).map(([k, v], i) => `
                <button type="button" class="pick ${state.destination === k ? "on" : ""}" data-stage="${k}">
                  <span class="num">ROUTE 0${i + 1}</span>
                  <span class="arrow">${ICONS.arrow}</span>
                  <strong>${v.label}</strong>
                  <span>${k === "launch" ? "Need identity, strategy & day-one authority" : k === "growth" ? "Need film crew, reels, content & paid ads" : "Want the full 360° studio & 9 services"}</span>
                </button>
              `).join("")}
            </div>
            <p style="margin:14px 0 0;font-size:13.5px;color:var(--muted)">
              <strong style="color:var(--ink)">Studio directive:</strong> ${esc(dest.note)}
              <button type="button" data-go="plans" style="color:var(--cobalt);font-weight:700;text-decoration:underline;margin-left:6px">View matching plan →</button>
            </p>
          </section>

          <section class="card">
            <span class="eyebrow">HOW WE WORK</span>
            <h2 class="h-md" style="margin-top:8px">Five steps to live.</h2>
            <div class="route">
              <div><b>01</b><strong>Discovery call</strong><span>Business, audience &amp; goals</span></div>
              <div><b>02</b><strong>Kickoff</strong><span>Within one week of signing</span></div>
              <div><b>03</b><strong>Direction</strong><span>Strategy in 5 working days</span></div>
              <div><b>04</b><strong>Calendar</strong><span>Approved before going live</span></div>
              <div><b>05</b><strong>Review</strong><span>Monthly report &amp; optimization</span></div>
            </div>
          </section>

          <section class="card">
            <span class="eyebrow">BRANDS OUR TEAM HAS BUILT FOR</span>
            <div style="display:flex;flex-wrap:wrap;gap:18px 28px;margin-top:14px;font:700 22px/1.2 var(--display)">
              <span>Buffalo Wild Wings</span>
              <span>Texas Chicken</span>
              <span>du</span>
              <span>NOTE<span class="dot">.</span></span>
            </div>
            <p style="margin:10px 0 0;font-size:12.5px;color:var(--muted)">Work by BeBosS team members, including past roles. Names belong to their owners. NOTE. shown for social and content scope.</p>
          </section>
        </div>

        <aside class="card locked">
          <h3><span>The brand stays locked.</span><span class="pill navy">V2</span></h3>
          <span class="eyebrow" style="margin-top:6px;display:block">CANONICAL · BRAND BOOK</span>
          <div class="swatches">
            <i style="background:#F4EDE1" title="Cream #F4EDE1"></i>
            <i style="background:#1F3DFF" title="Cobalt #1F3DFF"></i>
            <i style="background:#10153A" title="Navy #10153A"></i>
            <i style="background:#FF4F9A" title="Pink #FF4F9A"></i>
          </div>
          <ul class="checks">
            <li><span><strong>Four core colours.</strong> One pink touch per frame.</span></li>
            <li><span><strong>Original Boss.</strong> Exact stencil wordmark every time.</span></li>
            <li><span><strong>Space Grotesk + Inter.</strong> Readable at delivery size.</span></li>
            <li><span><strong>80 / 20 Craft Law.</strong> Clean signal, one surreal twist.</span></li>
          </ul>
          <div style="margin-top:18px;display:grid;gap:8px">
            <button type="button" class="btn sm navy" data-go="lab">Enter Brand Studio Lab</button>
            <button type="button" class="btn sm line" id="deskOpenPassBtn">View Boarding Pass</button>
          </div>
        </aside>
      </div>
    `;
  }

  /* ---------- 2. CONTENT CALENDAR ---------- */
  function viewCalendar() {
    const liveCount = POSTS.filter((p) => p.status === "live").length;
    const nextCount = POSTS.filter((p) => p.status === "next").length;
    const filtered = POSTS.filter((p) => state.calFilter === "all" || p.status === state.calFilter);

    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">BEBOSS · CREATIVE OPERATIONS · GATE 02</span>
          <h1 class="h-xl">Content Calendar — BeBosS<span class="dot">.</span></h1>
          <p class="lead">Real November editorial plan sorted in Africa/Cairo time. Tap any row or day to inspect the full carousel and copy — view-only studio preview.</p>
        </div>
        <button type="button" class="btn" data-go="board">Request a Calendar Like This</button>
      </div>

      <div class="stats">
        <div class="stat dark"><b>${POSTS.length}</b><span>Total Campaign Pieces</span></div>
        <div class="stat"><b>${liveCount}</b><span>Live on @be.bossss</span></div>
        <div class="stat"><b>${nextCount}</b><span>Approved &amp; Queued Next</span></div>
        <div class="stat"><b>100%</b><span>Client-Approved Before Posting</span></div>
      </div>

      <div id="calendarStage">
        <div class="cal-tools">
          <div class="chips">
            <button type="button" class="chip ${state.calView === "week" ? "on" : ""}" data-calview="week">Weekly Plan</button>
            <button type="button" class="chip ${state.calView === "month" ? "on" : ""}" data-calview="month">November Grid</button>
          </div>
          <div class="chips">
            <button type="button" class="chip ${state.calFilter === "all" ? "on" : ""}" data-calfilter="all">All (${POSTS.length})</button>
            <button type="button" class="chip ${state.calFilter === "live" ? "on" : ""}" data-calfilter="live">Live on IG (${liveCount})</button>
            <button type="button" class="chip ${state.calFilter === "next" ? "on" : ""}" data-calfilter="next">Up Next (${nextCount})</button>
          </div>
        </div>

        ${state.calView === "week" ? renderWeeklyCalendar(filtered) : renderMonthCalendar(filtered)}
      </div>
    `;
  }

  function formatDateMeta(iso) {
    const d = new Date(iso + ":00");
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return { dow: days[d.getDay()], day: `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]}`, time: `${hh}:${mm} Cairo`, dateObj: d };
  }

  function weekBucket(iso) {
    const dt = iso.slice(0, 10);
    if (dt <= "2026-11-01") return "WEEK OF 26 OCT – 01 NOV 2026";
    if (dt <= "2026-11-08") return "WEEK OF 02 NOV – 08 NOV 2026";
    if (dt <= "2026-11-15") return "WEEK OF 09 NOV – 15 NOV 2026";
    if (dt <= "2026-11-22") return "WEEK OF 16 NOV – 22 NOV 2026";
    return "WEEK OF 23 NOV – 29 NOV 2026";
  }

  function renderWeeklyCalendar(list) {
    const groups = new Map();
    list.forEach((p) => {
      const k = weekBucket(p.due);
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(p);
    });
    let html = "";
    for (const [week, items] of groups.entries()) {
      html += `<div class="week-h"><span>${week}</span><span>${items.length} ${items.length === 1 ? "post" : "posts"}</span></div>`;
      html += items.map((p) => {
        const m = formatDateMeta(p.due);
        const thumbs = p.slides.slice(0, 6).map((s, i) => `<img src="assets/${s}" alt="${esc(p.title)} slide ${i + 1}" loading="lazy" draggable="false" />`).join("");
        return `
          <button type="button" class="row" data-open-post="${p.id}">
            <div class="d">
              <small>${m.dow}</small>
              <b>${m.day}</b>
              <em>${m.time}</em>
            </div>
            <div class="thumbs">${thumbs}</div>
            <div>
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.format)} · ${p.slides.length} ${p.slides.length === 1 ? "frame" : "frames"}</p>
            </div>
            <span class="pill ${p.status === "live" ? "live" : "next"}">${p.status === "live" ? "Posted" : "Up Next"}</span>
          </button>
        `;
      }).join("");
    }
    return html;
  }

  function renderMonthCalendar(list) {
    const byDate = {};
    list.forEach((p) => { byDate[p.due.slice(0, 10)] = p; });
    const dows = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    // Oct 25 2026 is Sunday -> Nov 28 2026 is Saturday (35 cells)
    const start = new Date(2026, 9, 25);
    let cells = dows.map((d) => `<div class="dow">${d}</div>`).join("");
    for (let i = 0; i < 35; i++) {
      const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const iso = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, "0")}-${String(cur.getDate()).padStart(2, "0")}`;
      const post = byDate[iso];
      const dayNum = String(cur.getDate()).padStart(2, "0");
      const monLbl = cur.getMonth() === 9 ? " Oct" : "";
      const isToday = iso === "2026-11-18";
      if (post) {
        cells += `
          <button type="button" class="day has ${post.status === "live" ? "live" : ""} ${isToday ? "today" : ""}" data-open-post="${post.id}">
            <span>${dayNum}${monLbl}</span>
            <small>${esc(post.kind.toUpperCase())}<br />${esc(post.title)}</small>
            <img src="assets/${post.slides[0]}" alt="" loading="lazy" draggable="false" />
            <i></i>
          </button>
        `;
      } else {
        cells += `<div class="day ${isToday ? "today" : ""}"><span>${dayNum}${monLbl}</span><small>${cur.getMonth() === 9 ? "Oct" : "Open"}</small></div>`;
      }
    }
    return `
      <div class="card">
        <div class="month">${cells}</div>
        <div class="legend">
          <span><i style="background:var(--navy)"></i> Live on @be.bossss</span>
          <span><i style="background:var(--cobalt)"></i> Approved &amp; Up Next</span>
          <span><i style="background:var(--pink)"></i> Today (18 Nov)</span>
        </div>
      </div>
    `;
  }

  /* ---------- 3. FEED PREVIEW ---------- */
  function viewFeed() {
    const ordered = [...POSTS].sort((a, b) => b.due.localeCompare(a.due));
    const liveCount = ordered.filter((p) => p.status === "live").length;
    const nextCount = ordered.length - liveCount;
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">BEBOSS · SOCIAL GRID · GATE 03</span>
          <h1 class="h-xl">Feed Preview — @be.bossss<span class="dot">.</span></h1>
          <p class="lead">Live 3-column 4:5 Instagram profile grid, newest at top left. Tap any tile to swipe through the slides and read the caption.</p>
        </div>
        <a class="btn line" href="${CONTACT.ig}" target="_blank" rel="noopener">Open ${CONTACT.igHandle} on Instagram ↗</a>
      </div>

      <div class="card feed" id="feedStage">
        <div class="feed-head">
          <div class="feed-av"><img src="assets/brand/wordmark-cream.png" alt="BeBosS" draggable="false" /></div>
          <div style="flex:1">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <strong style="font:700 22px/1 var(--display)">@be.bossss</strong>
              <span class="pill live">${liveCount} Live</span>
              <span class="pill next">${nextCount} Up Next</span>
            </div>
            <p style="margin:8px 0 0;font-size:13.5px;color:var(--muted)">
              <strong style="color:var(--ink)">${ordered.length}</strong> campaign pieces · <strong style="color:var(--ink)">4:5</strong> locked ratio<br />
              <strong style="color:var(--ink)">BE YOUR OWN BOSS.</strong> 360° branding, creative direction &amp; marketing studio · Cairo &amp; GCC.
            </p>
          </div>
        </div>

        <div class="legend" style="margin:0 0 14px">
          <span><i style="background:var(--green)"></i> Live on Instagram (full colour)</span>
          <span><i style="background:var(--pink)"></i> Up Next (planned grid position)</span>
        </div>

        <div class="feed-grid">
          ${ordered.map((p) => `
            <button type="button" class="tile ${p.status}" data-open-post="${p.id}" aria-label="View ${esc(p.title)}">
              <img src="assets/${p.slides[0]}" alt="${esc(p.title)}" loading="lazy" draggable="false" />
              <span class="badge">${p.slides.length}</span>
              <span class="st" style="background:${p.status === "live" ? "var(--green)" : "var(--pink)"}"></span>
              <span class="cap">${esc(p.title)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  /* ---------- 4. NINE SERVICES ---------- */
  function viewServices() {
    const list = SERVICES.filter((s) => state.svcCat === "all" || s.cat === state.svcCat);
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">BEBOSS · FULL CAPABILITIES · GATE 04</span>
          <h1 class="h-xl">Nine services. One roof<span class="dot">.</span></h1>
          <p class="lead">Every discipline owned in-house by one team and one art director. Tap any service to inspect exact deliverables or add it to your custom brief.</p>
        </div>
        <button type="button" class="btn" data-go="board">Build Custom Stack</button>
      </div>

      <div class="chips" style="margin-bottom:18px">
        <button type="button" class="chip ${state.svcCat === "all" ? "on" : ""}" data-svccat="all">All 9 Services</button>
        <button type="button" class="chip ${state.svcCat === "brand" ? "on" : ""}" data-svccat="brand">Brand &amp; Design</button>
        <button type="button" class="chip ${state.svcCat === "production" ? "on" : ""}" data-svccat="production">Film &amp; Content</button>
        <button type="button" class="chip ${state.svcCat === "growth" ? "on" : ""}" data-svccat="growth">Growth, Web &amp; Live</button>
      </div>

      <div class="grid g3" id="servicesGrid">
        ${list.map((s) => `
          <button type="button" class="svc" data-open-svc="${s.id}">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;width:100%">
              <span class="svc-n">${s.num}</span>
              <span class="pill cob">${egp(s.customFee)}/mo est.</span>
            </div>
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.short)}</p>
            <span class="more">Inspect deliverables ${ICONS.arrow}</span>
          </button>
        `).join("")}
      </div>
    `;
  }

  /* ---------- 5. PLANS & PRICING ---------- */
  function viewPlans() {
    const mPlans = [MONTHLY_PLANS.starter, MONTHLY_PLANS.growth, MONTHLY_PLANS.boss];
    const oPlans = [ONETIME_PROJECTS.strategy, ONETIME_PROJECTS.identity, ONETIME_PROJECTS.launch];
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">PACKAGES &amp; PRICES · NOVEMBER 2026 · EGP · GATE 05</span>
          <h1 class="h-xl">Pick your plan<span class="dot">.</span></h1>
          <p class="lead">Three monthly retainers and three one-time projects priced in Egyptian pounds. Our film crew joins from Growth upwards.</p>
        </div>
        <button type="button" class="btn" data-go="board">Proceed to Sign ${ICONS.arrow}</button>
      </div>

      <div id="plansGrid">
        <span class="eyebrow c">MONTHLY PLANS · 3 MONTH MINIMUM</span>
        <div class="grid g3" style="margin:12px 0 28px">
          ${mPlans.map((p) => {
            const picked = state.planMode === "monthly" && state.selectedMonthly === p.id;
            return `
              <div class="card plan ${p.cobalt ? "dark" : ""} ${picked ? "pick-on" : ""}">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
                  <h2 class="h-md">${p.name}</h2>
                  ${p.badge ? `<span class="pill ${p.cobalt ? "next" : "cob"}">${p.badge}</span>` : ""}
                </div>
                <p style="margin:0;font-size:13px;opacity:.75">${esc(p.tagline)}</p>
                <div class="price">${egp(p.price)} <small>/ month</small></div>
                <ul>
                  ${p.bullets.map((b) => `<li class="${b.included ? "" : "no"}"><span>${esc(b.text)}</span></li>`).join("")}
                </ul>
                <button type="button" class="btn ${p.cobalt ? "pink" : picked ? "navy" : ""}" data-pick-plan="monthly:${p.id}">
                  ${picked ? "✓ Loaded on Your Pass" : `Select ${p.name} Plan`}
                </button>
              </div>
            `;
          }).join("")}
        </div>

        <span class="eyebrow c">ONE-TIME PROJECTS · 50% TO START / 50% ON DELIVERY</span>
        <div class="grid g3" style="margin:12px 0 28px">
          ${oPlans.map((p) => {
            const picked = state.planMode === "onetime" && state.selectedOnetime === p.id;
            return `
              <div class="card plan ${picked ? "pick-on" : ""}">
                <h2 class="h-md">${p.name}</h2>
                <div class="price">${p.id === "launch" ? "From " : ""}${egp(p.price)}</div>
                <ul>${p.items.map((it) => `<li><span>${esc(it)}</span></li>`).join("")}</ul>
                <button type="button" class="btn ${picked ? "navy" : "line"}" data-pick-plan="onetime:${p.id}">
                  ${picked ? "✓ Loaded on Your Pass" : `Select ${p.name.replace(" Project", "")}`}
                </button>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <section style="margin-bottom:28px">
        <span class="eyebrow">COMPARE EVERY DETAIL</span>
        <div class="tbl-wrap" style="margin-top:12px">
          <table>
            <thead>
              <tr><th>Deliverable</th><th>Starter · EGP 20,000</th><th>Growth · EGP 38,000</th><th>Boss · EGP 60,000</th></tr>
            </thead>
            <tbody>
              <tr><td>Platforms</td><td>2</td><td>3</td><td>Up to 4</td></tr>
              <tr><td>Designed posts &amp; carousels</td><td>12 / month</td><td>16 / month</td><td>20 / month</td></tr>
              <tr><td>Reels</td><td>2 (edited from your footage)</td><td>6 (filmed by our crew)</td><td>10 (filmed by our crew)</td></tr>
              <tr><td>On-location filming days</td><td>Not included</td><td>1 day / month</td><td>2 days / month</td></tr>
              <tr><td>Stories</td><td>8 / month</td><td>15 / month</td><td>25 / month</td></tr>
              <tr><td>Copywriting</td><td>English &amp; Arabic</td><td>English &amp; Arabic</td><td>English &amp; Arabic</td></tr>
              <tr><td>Community management</td><td>Comments</td><td>Comments &amp; DMs</td><td>Comments &amp; DMs, daily</td></tr>
              <tr><td>Paid ads management</td><td>Not included</td><td>1 platform</td><td>Meta, TikTok &amp; Google</td></tr>
              <tr><td>Art director</td><td>Shared art director</td><td>Shared art director</td><td>Dedicated art director</td></tr>
              <tr><td>Revision rounds</td><td>2 per piece</td><td>2 per piece</td><td>3 per piece</td></tr>
            </tbody>
          </table>
        </div>
        <p style="margin:10px 0 0;font-size:12.5px;color:var(--muted)">Ad budget is paid by you directly to the platform. Prices exclude 14% VAT and are valid for 30 days from issue.</p>
      </section>

      <section class="card">
        <span class="eyebrow">QUESTIONS FOUNDERS ASK</span>
        <h2 class="h-md" style="margin:8px 0 12px">Simple terms, written down.</h2>
        <div>
          ${FAQS.map((f, i) => `
            <div class="faq ${i === 0 ? "open" : ""}">
              <button type="button" data-faq="${i}"><span>${esc(f.q)}</span><i>+</i></button>
              <div><p>${esc(f.a)}</p></div>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  /* ---------- 6. BRAND STUDIO LAB ---------- */
  function viewLab() {
    const cur = CRAFT_LAB[state.labIndex];
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">BRAND BOOK V2 · CANONICAL SYSTEM</span>
          <h1 class="h-xl">Brand Studio Lab<span class="dot">.</span></h1>
          <p class="lead">How BeBosS maintains one unmistakable visual standard across campaigns — 80% clean signal, 20% unforgettable craft.</p>
        </div>
        <button type="button" class="btn" data-go="board">Build Your Brand System</button>
      </div>

      <section class="card" style="margin-bottom:22px">
        <span class="eyebrow c">INTERACTIVE CRAFT WALKTHROUGH</span>
        <h2 class="h-md" style="margin:8px 0 18px">The 1 · 3 · 5 &amp; 80 / 20 Method</h2>
        <div class="lab">
          <div class="lab-stage">
            <img src="${cur.img}" alt="${esc(cur.title)}" draggable="false" />
            <span class="pill pink" style="position:absolute;left:14px;top:14px;background:var(--pink);color:#fff;border-color:var(--pink)">${cur.rule}</span>
          </div>
          <div class="lab-steps">
            ${CRAFT_LAB.map((item, i) => `
              <button type="button" class="lab-step ${i === state.labIndex ? "on" : ""}" data-lab="${i}">
                <b>${item.num}</b>
                <div>
                  <strong style="display:block;font:700 16px/1.2 var(--display)">${item.title}</strong>
                  <span style="font-size:13px;opacity:.78">${item.sub}</span>
                </div>
              </button>
            `).join("")}
            <div class="card soft" style="margin-top:8px">
              <span class="eyebrow">${cur.rule}</span>
              <p style="margin:8px 0 0;font-size:14px;color:var(--muted)">${cur.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section style="margin-bottom:22px">
        <span class="eyebrow">FOUR CREATIVE PILLARS</span>
        <div class="pillars" style="margin-top:12px">
          <div class="pillar"><b>Retro</b><p>Analog warmth and authority — CRT monitors, vinyl, broadcast consoles, and tactile fine grain.</p></div>
          <div class="pillar"><b>Future</b><p>Ambition at impossible scale — engineered hybrids, clean portals, and forward-facing craft.</p></div>
          <div class="pillar"><b>Funky Pop</b><p>Stopping power — one dominant colour, confident framing, and a deadpan visual joke.</p></div>
          <div class="pillar"><b>Editorial</b><p>Commercial credibility — deliberate upper-left studio light, grounded shadows, precise crops.</p></div>
        </div>
      </section>

      <section>
        <span class="eyebrow">SIGNATURE STUDIO SERIES</span>
        <div class="grid g2" style="margin-top:12px">
          <div class="card concept">
            <div class="art cream">
              <span class="tag">MASTER REFERENCE</span>
              <h3>Open for business.</h3>
              <img src="assets/brand/boss.webp" alt="The Boss" draggable="false" />
            </div>
            <div class="body">
              <span class="eyebrow">CAROUSEL · 4:5</span>
              <p>Introducing The Boss — clay figurine craft with warm skin tone, navy two-piece suit, and the single pink tie touch.</p>
            </div>
          </div>
          <div class="card concept">
            <div class="art navy">
              <span class="tag">STUDIO CAMPAIGN</span>
              <h3>Someone’s at the door.</h3>
              <img src="assets/calendar/post-02-opening-night.webp" alt="Opening night" style="height:105%;right:-10px;bottom:-10px;border-radius:10px" draggable="false" />
            </div>
            <div class="body">
              <span class="eyebrow">CLIENT STORY · 4:5</span>
              <p>Turning a real client brief into an illustrated story arc from first knock to launch night.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  /* ---------- 7. BOARDING & SIGN ---------- */
  function viewBoard() {
    const scope = getSelectedScope();
    const passenger = state.brandName.trim() || "BeBosS Guest";
    return `
      <div class="page-head">
        <div>
          <span class="eyebrow">BEBOSS · OFFICIAL BRIEF &amp; DIGITAL SIGN-OFF · GATE 06</span>
          <h1 class="h-xl">Board &amp; sign your brief<span class="dot">.</span></h1>
          <p class="lead">Your BeBosS Boarding Pass updates live as you configure your scope. Sign below and send directly to <strong>${CONTACT.email}</strong> or WhatsApp.</p>
        </div>
      </div>

      <div class="board">
        <div class="grid" style="gap:18px">
          <section class="card">
            <div class="steps-bar">
              <i class="on"></i>
              <i class="${state.brandName.trim() ? "on" : ""}"></i>
              <i class="${state.hasSigned ? "on" : ""}"></i>
            </div>
            <span class="eyebrow c">STEP 01 · CHOOSE ENGAGEMENT</span>
            <div class="chips" style="margin:12px 0 14px">
              <button type="button" class="chip ${state.planMode === "monthly" ? "on" : ""}" data-pmode="monthly">Monthly Plan</button>
              <button type="button" class="chip ${state.planMode === "onetime" ? "on" : ""}" data-pmode="onetime">One-Time Project</button>
              <button type="button" class="chip ${state.planMode === "custom" ? "on" : ""}" data-pmode="custom">Custom 9 Services</button>
            </div>

            ${state.planMode === "monthly" ? `
              <div class="opt-grid">
                ${["starter", "growth", "boss"].map((k) => {
                  const p = MONTHLY_PLANS[k];
                  return `<button type="button" class="opt ${state.selectedMonthly === k ? "on" : ""}" data-sel-m="${k}">
                    <b>${p.name}</b><small>${egp(p.price)} / mo</small>
                  </button>`;
                }).join("")}
              </div>
            ` : state.planMode === "onetime" ? `
              <div class="opt-grid">
                ${["strategy", "identity", "launch"].map((k) => {
                  const p = ONETIME_PROJECTS[k];
                  return `<button type="button" class="opt ${state.selectedOnetime === k ? "on" : ""}" data-sel-o="${k}">
                    <b>${p.name.replace(" Project", "")}</b><small>${egp(p.price)}</small>
                  </button>`;
                }).join("")}
              </div>
            ` : `
              <div class="addons">
                ${SERVICES.map((s) => `
                  <button type="button" class="${state.customServices.has(s.id) ? "on" : ""}" data-toggle-svc="${s.id}">
                    ${s.num} · ${esc(s.name.split(" and ")[0])} (${egp(s.customFee)})
                  </button>
                `).join("")}
              </div>
            `}
          </section>

          <section class="card">
            <span class="eyebrow c">STEP 02 · BRAND DETAILS</span>
            <div class="grid g2" style="margin-top:12px">
              <div class="field">
                <label for="bBrand">Brand / Business Name</label>
                <input id="bBrand" type="text" value="${esc(state.brandName)}" placeholder="Your brand name" />
              </div>
              <div class="field">
                <label for="bMarket">Primary Market</label>
                <input id="bMarket" type="text" value="${esc(state.clientMarket)}" placeholder="Cairo, Riyadh, Dubai..." />
              </div>
              <div class="field">
                <label for="bEmail">Business Email</label>
                <input id="bEmail" type="email" value="${esc(state.clientEmail)}" placeholder="team@yourbrand.com" />
              </div>
              <div class="field">
                <label for="bPhone">WhatsApp / Phone</label>
                <input id="bPhone" type="tel" value="${esc(state.clientPhone)}" placeholder="+20 1XX XXX XXXX" />
              </div>
            </div>
            <div class="field" style="margin-bottom:0">
              <label for="bNotes">Launch Goals, Handles or Timeline</label>
              <textarea id="bNotes" rows="3" placeholder="Share your Instagram handle, launch window, or creative goals...">${esc(state.clientNotes)}</textarea>
            </div>
          </section>

          <section class="card" id="sigPadCard">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px">
              <span class="eyebrow c">STEP 03 · DIGITAL SIGNATURE</span>
              <button type="button" class="btn sm line" id="clearSigBtn">Clear</button>
            </div>
            <p style="margin:0 0 12px;font-size:13px;color:var(--muted)">Sign inside the box to authorize your BeBosS proposal and stamp Gate 06 on your boarding pass.</p>
            <div class="sig-wrap">
              <canvas id="sigCanvas" width="600" height="160"></canvas>
              <span id="sigHint">${state.hasSigned ? "✓ Signed digitally" : "Draw your signature here"}</span>
            </div>
          </section>
        </div>

        <aside class="grid sticky" style="gap:18px">
          <div id="boardTicketSlot">${renderTicketHTML({ onDark: false })}</div>

          <section class="card">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span class="eyebrow">PROPOSAL SUMMARY</span>
              <span class="pill ${state.hasSigned ? "live" : "next"}">${state.hasSigned ? "Signed ✓" : "Awaiting Signature"}</span>
            </div>
            <h3 style="margin:10px 0 6px;font-size:20px">${esc(scope.label)}</h3>
            <p style="margin:0 0 12px;font-size:12.5px;color:var(--muted)">${esc(scope.terms)}</p>

            <div style="font-size:13px;display:grid;gap:6px;padding:12px 0;border-top:1px solid var(--line)">
              <div style="display:flex;justify-content:space-between"><span>Subtotal (${esc(scope.cadence)})</span><strong>${egp(scope.subtotal)}</strong></div>
              <div style="display:flex;justify-content:space-between;color:var(--muted)"><span>14% VAT (Egypt)</span><span>${egp(scope.vat)}</span></div>
            </div>
            <div class="total">
              <span>Total incl. VAT</span>
              <b>${egp(scope.total)}</b>
            </div>

            <div style="display:grid;gap:10px;margin-top:8px">
              <button type="button" class="btn" id="sendEmailBtn">Send Proposal to ${CONTACT.email}</button>
              <button type="button" class="btn navy" id="sendWaBtn">Dispatch via WhatsApp (${CONTACT.phone})</button>
              <button type="button" class="btn line" id="copyBriefBtn">Copy Brief Summary</button>
            </div>
            <p style="margin:12px 0 0;font-size:12px;color:var(--muted);text-align:center">BeBosS replies within 4 working hours on every working day · Passenger: ${esc(passenger)}</p>
          </section>
        </aside>
      </div>
    `;
  }

  /* ========================================================================
     VIEW INTERACTIONS
     ======================================================================== */
  function wireViewEvents() {
    $$("[data-go]").forEach((b) => b.addEventListener("click", () => go(b.dataset.go)));

    const deskStart = $("#deskStartTourBtn");
    if (deskStart) deskStart.addEventListener("click", () => startTour(state.stamps.size < GATES.length ? firstUnstampedIndex() : 0));

    const deskPass = $("#deskOpenPassBtn");
    if (deskPass) deskPass.addEventListener("click", openPassModal);

    $$("[data-stage]").forEach((b) => b.addEventListener("click", () => {
      const k = b.dataset.stage;
      state.destination = k;
      const d = DESTINATIONS[k];
      state.planMode = d.planType;
      if (d.planType === "monthly") state.selectedMonthly = d.planId;
      else state.selectedOnetime = d.planId;
      saveLocal();
      stampGate("g1");
      renderView();
      updatePassBadges();
      toast(`Flight path locked: ${d.label}`);
    }));

    $$("[data-calview]").forEach((b) => b.addEventListener("click", () => {
      state.calView = b.dataset.calview;
      stampGate("g2");
      renderView();
    }));

    $$("[data-calfilter]").forEach((b) => b.addEventListener("click", () => {
      state.calFilter = b.dataset.calfilter;
      renderView();
    }));

    $$("[data-open-post]").forEach((b) => b.addEventListener("click", () => {
      const post = POSTS.find((p) => p.id === b.dataset.openPost);
      if (!post) return;
      if (state.route === "calendar") stampGate("g2");
      if (state.route === "feed") stampGate("g3");
      openPostModal(post);
    }));

    $$("[data-svccat]").forEach((b) => b.addEventListener("click", () => {
      state.svcCat = b.dataset.svccat;
      renderView();
    }));

    $$("[data-open-svc]").forEach((b) => b.addEventListener("click", () => {
      const svc = SERVICES.find((s) => s.id === b.dataset.openSvc);
      if (!svc) return;
      stampGate("g4");
      openServiceModal(svc);
    }));

    $$("[data-pick-plan]").forEach((b) => b.addEventListener("click", () => {
      const [mode, id] = b.dataset.pickPlan.split(":");
      state.planMode = mode;
      if (mode === "monthly") state.selectedMonthly = id;
      else state.selectedOnetime = id;
      saveLocal();
      stampGate("g5");
      updatePassBadges();
      renderView();
      toast("Loaded onto your BeBosS Boarding Pass");
    }));

    $$("[data-faq]").forEach((b) => b.addEventListener("click", () => {
      b.closest(".faq").classList.toggle("open");
    }));

    $$("[data-lab]").forEach((b) => b.addEventListener("click", () => {
      state.labIndex = Number(b.dataset.lab);
      renderView();
    }));

    // Boarding & Sign controls
    $$("[data-pmode]").forEach((b) => b.addEventListener("click", () => { state.planMode = b.dataset.pmode; saveLocal(); renderView(); }));
    $$("[data-sel-m]").forEach((b) => b.addEventListener("click", () => { state.selectedMonthly = b.dataset.selM; saveLocal(); renderView(); }));
    $$("[data-sel-o]").forEach((b) => b.addEventListener("click", () => { state.selectedOnetime = b.dataset.selO; saveLocal(); renderView(); }));
    $$("[data-toggle-svc]").forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.toggleSvc;
      if (state.customServices.has(id)) state.customServices.delete(id);
      else state.customServices.add(id);
      saveLocal();
      renderView();
    }));

    const bindInput = (id, key, refreshPass = false) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener("input", () => {
        state[key] = el.value;
        saveLocal();
        if (refreshPass) updatePassBadges();
      });
    };
    bindInput("#bBrand", "brandName", true);
    bindInput("#bMarket", "clientMarket");
    bindInput("#bEmail", "clientEmail");
    bindInput("#bPhone", "clientPhone");
    bindInput("#bNotes", "clientNotes");

    if ($("#sigCanvas")) wireSignaturePad();

    const buildBriefText = () => {
      const sc = getSelectedScope();
      return [
        "BEBOSS STUDIO · BOARDING BRIEF",
        "================================",
        `Brand: ${state.brandName.trim() || "New Brand Inquiry"}`,
        `Market: ${state.clientMarket || "Egypt / GCC"}`,
        `Email: ${state.clientEmail || "Not provided"}`,
        `Phone / WhatsApp: ${state.clientPhone || "Not provided"}`,
        `Flight Track: ${DESTINATIONS[state.destination].label}`,
        `Selected Scope: ${sc.label}`,
        `Subtotal: ${egp(sc.subtotal)} (${sc.cadence})`,
        `Total incl. 14% VAT: ${egp(sc.total)}`,
        `Digital Signature: ${state.hasSigned ? "Signed on BeBosS Studio website" : "Pending"}`,
        `Gates Completed: ${state.stamps.size} / ${GATES.length}`,
        state.clientNotes ? `Notes: ${state.clientNotes}` : "",
      ].filter(Boolean).join("\n");
    };

    if ($("#sendEmailBtn")) {
      $("#sendEmailBtn").addEventListener("click", () => {
        const sc = getSelectedScope();
        const subj = `BeBosS Studio Brief · ${state.brandName.trim() || "New Client"} · ${sc.label}`;
        window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(buildBriefText())}`;
        toast(`Opening email to ${CONTACT.email}`);
      });
    }
    if ($("#sendWaBtn")) {
      $("#sendWaBtn").addEventListener("click", () => {
        window.open(`${CONTACT.wa}?text=${encodeURIComponent(buildBriefText())}`, "_blank", "noopener");
        toast("Opening WhatsApp dispatch to BeBosS");
      });
    }
    if ($("#copyBriefBtn")) {
      $("#copyBriefBtn").addEventListener("click", () => {
        navigator.clipboard?.writeText(buildBriefText()).then(() => toast("Brief summary copied to clipboard")).catch(() => toast("Ready to copy"));
      });
    }
  }

  /* ---------- Signature Pad ---------- */
  function wireSignaturePad() {
    const canvas = $("#sigCanvas");
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(300, Math.round(rect.width * dpr));
    canvas.height = Math.round(150 * dpr);
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = "#10153A";
    ctx.lineWidth = 2.6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (state.sigDataUrl) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, 150);
      img.src = state.sigDataUrl;
    }

    let drawing = false;
    const pos = (e) => {
      const r = canvas.getBoundingClientRect();
      const pt = e.touches ? e.touches[0] : e;
      return { x: pt.clientX - r.left, y: pt.clientY - r.top };
    };
    const start = (e) => {
      e.preventDefault();
      drawing = true;
      const p = pos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };
    const move = (e) => {
      if (!drawing) return;
      e.preventDefault();
      const p = pos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };
    const end = () => {
      if (!drawing) return;
      drawing = false;
      state.hasSigned = true;
      state.sigDataUrl = canvas.toDataURL();
      const hint = $("#sigHint");
      if (hint) hint.textContent = "✓ Signed digitally";
      stampGate("g6");
    };

    canvas.addEventListener("pointerdown", start);
    canvas.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);

    $("#clearSigBtn")?.addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      state.hasSigned = false;
      state.sigDataUrl = "";
      const hint = $("#sigHint");
      if (hint) hint.textContent = "Draw your signature here";
      toast("Signature cleared");
    });
  }

  /* ========================================================================
     MODALS (View-only Post Carousel · Service Inspector · Boarding Pass · Arrival)
     ======================================================================== */
  function openModal(html) {
    const root = $("#modalRoot");
    root.innerHTML = `<div class="modal" id="activeModal" role="dialog" aria-modal="true"><div class="modal-box"><button type="button" class="modal-x" id="closeModalBtn" aria-label="Close">${ICONS.close}</button>${html}</div></div>`;
    $("#closeModalBtn").addEventListener("click", closeModal);
    $("#activeModal").addEventListener("click", (e) => { if (e.target.id === "activeModal") closeModal(); });
  }

  function closeModal() {
    $("#modalRoot").innerHTML = "";
  }

  function openPostModal(post) {
    let idx = 0;
    const m = formatDateMeta(post.due);
    openModal(`
      <div class="post-m">
        <div class="slider">
          <div class="slider-track" id="slideTrack">
            ${post.slides.map((s, i) => `<img src="assets/${s}" alt="${esc(post.title)} frame ${i + 1}" draggable="false" />`).join("")}
          </div>
          ${post.slides.length > 1 ? `
            <button type="button" class="slider-arrow l" id="slidePrev" aria-label="Previous slide">‹</button>
            <button type="button" class="slider-arrow r" id="slideNext" aria-label="Next slide">›</button>
            <div class="slider-nav" id="slideDots">${post.slides.map((_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("")}</div>
          ` : ""}
        </div>
        <div class="post-info">
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
            <span class="pill ${post.status === "live" ? "live" : "next"}">${post.status === "live" ? "Posted on @be.bossss" : "Approved · Up Next"}</span>
            <span class="eyebrow">${m.day} · ${m.time}</span>
          </div>
          <h2 class="h-md">${esc(post.title)}</h2>
          <span style="font-size:13px;color:var(--muted)">${esc(post.format)} · View-only studio preview</span>
          <div class="cap">${esc(post.caption)}</div>
          <div class="tags">${esc(post.hashtags)}</div>
          <div style="margin-top:auto;display:flex;gap:10px;flex-wrap:wrap">
            <button type="button" class="btn sm" id="reqStyleBtn">Build This Style For My Brand</button>
            ${post.url ? `<a class="btn sm line" href="${post.url}" target="_blank" rel="noopener">View on Instagram ↗</a>` : ""}
          </div>
        </div>
      </div>
    `);

    const updateSlide = () => {
      const track = $("#slideTrack");
      if (track) track.style.transform = `translateX(-${idx * 100}%)`;
      $$("#slideDots i").forEach((d, i) => d.classList.toggle("on", i === idx));
    };
    $("#slidePrev")?.addEventListener("click", () => { idx = (idx - 1 + post.slides.length) % post.slides.length; updateSlide(); });
    $("#slideNext")?.addEventListener("click", () => { idx = (idx + 1) % post.slides.length; updateSlide(); });
    $("#reqStyleBtn")?.addEventListener("click", () => {
      state.clientNotes = `${state.clientNotes ? state.clientNotes + "\n" : ""}Inspired by BeBosS piece: "${post.title}" (${post.format}).`;
      closeModal();
      go("board");
      toast(`Added "${post.title}" to your brief notes`);
    });

    // Touch swipe on carousel
    let sx = 0;
    const tr = $("#slideTrack");
    if (tr && post.slides.length > 1) {
      tr.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
      tr.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 40) {
          idx = dx < 0 ? (idx + 1) % post.slides.length : (idx - 1 + post.slides.length) % post.slides.length;
          updateSlide();
        }
      });
    }
  }

  function openServiceModal(svc) {
    const added = state.customServices.has(svc.id);
    openModal(`
      <div style="padding:30px">
        <span class="eyebrow c">SERVICE ${svc.num} · BEBOSS STUDIO</span>
        <h2 class="h-lg" style="margin:10px 0 10px">${esc(svc.name)}</h2>
        <p class="lead" style="margin-top:0">${esc(svc.short)}</p>
        <div style="margin:18px 0;padding:16px;border-radius:14px;background:var(--cream)">
          <span class="eyebrow">INCLUDED DELIVERABLES</span>
          <ul class="checks" style="margin-top:12px">
            ${svc.deliverables.map((d) => `<li><span>${esc(d)}</span></li>`).join("")}
          </ul>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap">
          <div>
            <span class="eyebrow">TYPICAL TIER</span>
            <strong style="display:block;margin-top:5px;font-family:var(--display)">${esc(svc.tier)}</strong>
          </div>
          <div style="display:flex;gap:10px">
            <button type="button" class="btn ${added ? "navy" : ""}" id="modalToggleSvc">
              ${added ? "✓ In Your Custom Stack" : `+ Add to Custom Stack (${egp(svc.customFee)})`}
            </button>
          </div>
        </div>
      </div>
    `);
    $("#modalToggleSvc").addEventListener("click", () => {
      if (state.customServices.has(svc.id)) state.customServices.delete(svc.id);
      else state.customServices.add(svc.id);
      state.planMode = "custom";
      saveLocal();
      updatePassBadges();
      closeModal();
      toast(`Updated your custom stack with ${svc.name}`);
    });
  }

  function openPassModal() {
    openModal(`
      <div style="padding:28px;background:var(--navy);color:var(--cream);border-radius:20px">
        <span class="eyebrow p">OFFICIAL BEBOSS BOARDING PASS</span>
        <h2 class="h-md" style="margin:8px 0 18px">Your interactive studio journey<span class="dot">.</span></h2>
        ${renderTicketHTML({ onDark: true })}
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:20px;justify-content:flex-end">
          <button type="button" class="btn cream" id="passTourBtn">${state.stamps.size === GATES.length ? "Replay Tour" : "Continue Guided Tour"}</button>
          <button type="button" class="btn pink" id="passSignBtn">Go to Boarding &amp; Sign →</button>
        </div>
      </div>
    `);
    $("#passTourBtn").addEventListener("click", () => { closeModal(); startTour(firstUnstampedIndex()); });
    $("#passSignBtn").addEventListener("click", () => { closeModal(); go("board"); });
  }

  function openArrivalModal() {
    if (state.tourActive) pauseTour(true);
    openModal(`
      <div class="arrival" style="padding:32px;background:var(--navy);color:var(--cream);border-radius:20px">
        <span class="eyebrow p">ALL 6 GATES STAMPED · CLEARED FOR TAKEOFF</span>
        <h2 class="h-lg" style="margin:10px 0 8px">Welcome to BeBosS<span class="dot">.</span></h2>
        <p style="color:rgba(244,237,225,.75);max-width:52ch;margin:0 auto">You have toured the entire studio — from the live November calendar and @be.bossss grid to all 9 services and 2026 EGP plans. Your final say starts now.</p>
        ${renderTicketHTML({ onDark: true })}
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button type="button" class="btn pink" id="arrSignBtn">Dispatch Signed Brief</button>
          <a class="btn cream" href="${CONTACT.wa}?text=${encodeURIComponent(`Hi BeBosS team! I just completed all 6 gates of the BeBosS Studio Tour for ${state.brandName.trim() || "my brand"}.`)}" target="_blank" rel="noopener">Chat on WhatsApp</a>
        </div>
      </div>
    `);
    $("#arrSignBtn").addEventListener("click", () => { closeModal(); go("board"); });
  }

  /* ========================================================================
     GUIDED TOUR ENGINE (Flight Path + Spotlight + Coach Card)
     ======================================================================== */
  function firstUnstampedIndex() {
    const idx = GATES.findIndex((g) => !state.stamps.has(g.id));
    return idx >= 0 ? idx : 0;
  }

  function startTour(index = 0) {
    state.tourActive = true;
    state.tourPaused = false;
    state.tourIndex = Math.max(0, Math.min(GATES.length - 1, index));
    $("#resumeBtn").classList.remove("on");
    $("#flightBar").classList.add("on");
    $("#topTourLabel").textContent = "Tour Active";
    renderFlightBar();
    const gate = GATES[state.tourIndex];
    go(gate.route, { fromTour: true });
    updateTourUI();
  }

  function pauseTour(silent = false) {
    state.tourActive = false;
    state.tourPaused = state.stamps.size < GATES.length;
    $("#flightBar").classList.remove("on");
    $("#coachCard").classList.remove("on");
    hideSpotlight();
    $("#topTourLabel").textContent = "Guided Tour";
    if (state.tourPaused) {
      $("#resumeText").textContent = `Resume Tour (${state.stamps.size}/6)`;
      $("#resumeBtn").classList.add("on");
    } else {
      $("#resumeBtn").classList.remove("on");
    }
    if (!silent) toast("Tour paused — resume any time from the pink button");
  }

  function renderFlightBar() {
    $("#flightGates").innerHTML = GATES.map((g, i) => {
      const ok = state.stamps.has(g.id);
      const cur = i === state.tourIndex;
      return `<button type="button" class="${cur ? "cur" : ok ? "ok" : ""}" data-jump-gate="${i}" title="Gate ${g.num}: ${g.short}">${ok ? "✓" : g.num}</button>`;
    }).join("");
    $$("[data-jump-gate]").forEach((b) => b.addEventListener("click", () => startTour(Number(b.dataset.jumpGate))));
  }

  function updateTourUI() {
    if (!state.tourActive) return;
    const pct = (state.tourIndex / (GATES.length - 1)) * 100;
    $("#flightFill").style.width = pct + "%";
    $("#flightPlane").style.left = pct + "%";
    renderFlightBar();
    updateCoach();
    setTimeout(positionSpotlight, 120);
  }

  function updateCoach() {
    const gate = GATES[state.tourIndex];
    const done = state.stamps.has(gate.id);
    $("#coachEyebrow").textContent = gate.eyebrow;
    $("#coachTitle").textContent = gate.title;
    $("#coachBody").textContent = gate.body;
    $("#coachTaskText").textContent = done ? `Gate ${gate.num} stamped — ready for takeoff!` : gate.task;
    $("#coachTaskIcon").textContent = done ? "✓" : "→";
    $("#coachTask").classList.toggle("done", done);
    $("#coachCount").textContent = `Gate ${state.tourIndex + 1} / ${GATES.length}`;
    $("#coachPrev").style.display = state.tourIndex === 0 ? "none" : "inline-flex";
    $("#coachNext").textContent = state.tourIndex === GATES.length - 1 ? "Finish Tour ✓" : "Next Gate →";
    $("#coachCard").classList.add("on");
  }

  function hideSpotlight() {
    $("#spotlight").classList.remove("on");
  }

  function positionSpotlight() {
    if (!state.tourActive) return;
    const gate = GATES[state.tourIndex];
    const target = gate ? $(gate.selector) : null;
    const spot = $("#spotlight");
    const coach = $("#coachCard");
    if (!target) { hideSpotlight(); return; }

    const rect = target.getBoundingClientRect();
    const topVisible = rect.top >= 120 && rect.top <= window.innerHeight - 160;
    if (!topVisible) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => applySpotRect(target, spot, coach), 420);
      return;
    }
    applySpotRect(target, spot, coach);
  }

  function applySpotRect(target, spot, coach) {
    if (!state.tourActive) return;
    const r = target.getBoundingClientRect();
    const pad = 8;
    const top = Math.max(84, r.top - pad);
    const height = Math.min(window.innerHeight - top - 24, r.height + pad * 2);
    spot.style.left = Math.max(8, r.left - pad) + "px";
    spot.style.top = top + "px";
    spot.style.width = Math.min(window.innerWidth - 16, r.width + pad * 2) + "px";
    spot.style.height = Math.max(80, height) + "px";
    spot.classList.add("on");

    if (window.innerWidth > 760) {
      const cw = 390;
      const ch = coach.offsetHeight || 240;
      const left = Math.max(20, Math.min(window.innerWidth - cw - 24, window.innerWidth - cw - 28));
      const ctop = Math.max(150, window.innerHeight - ch - 24);
      coach.style.left = left + "px";
      coach.style.top = ctop + "px";
    }
  }

  /* ========================================================================
     GLOBAL SEARCH
     ======================================================================== */
  function wireSearch() {
    const inp = $("#searchInput");
    const box = $("#searchRes");
    const index = [
      ...SERVICES.map((s) => ({ title: `${s.num} · ${s.name}`, sub: "Service · " + s.short, run: () => { go("services"); openServiceModal(s); } })),
      ...POSTS.map((p) => ({ title: p.title, sub: `Calendar · ${p.format}`, run: () => { go("calendar"); openPostModal(p); } })),
      ...Object.values(MONTHLY_PLANS).map((p) => ({ title: `${p.name} Plan (${egp(p.price)}/mo)`, sub: "Monthly Plan", run: () => go("plans") })),
      ...Object.values(ONETIME_PROJECTS).map((p) => ({ title: `${p.name} (${egp(p.price)})`, sub: "One-Time Project", run: () => go("plans") })),
      { title: "Brand Studio Lab · 80/20 & 1·3·5", sub: "Brand Book v2", run: () => go("lab") },
      { title: "BeBosS Boarding Pass & Digital Signature", sub: "Gate 06", run: () => go("board") },
    ];

    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      if (!q) { box.classList.remove("open"); return; }
      const hits = index.filter((i) => i.title.toLowerCase().includes(q) || i.sub.toLowerCase().includes(q)).slice(0, 7);
      if (!hits.length) {
        box.innerHTML = `<div style="padding:12px;font-size:13px;color:var(--muted)">No matches for "${esc(q)}"</div>`;
      } else {
        box.innerHTML = hits.map((h, i) => `<button type="button" data-hit="${i}"><strong>${esc(h.title)}</strong><small>${esc(h.sub)}</small></button>`).join("");
        $$("[data-hit]", box).forEach((b) => b.addEventListener("click", () => {
          hits[Number(b.dataset.hit)].run();
          inp.value = "";
          box.classList.remove("open");
        }));
      }
      box.classList.add("open");
    });

    document.addEventListener("click", (e) => { if (!e.target.closest(".search")) box.classList.remove("open"); });
  }

  /* ========================================================================
     BOARDING GATE INTRO & BOOTSTRAP
     ======================================================================== */
  function dismissGate(launchTour) {
    const gate = $("#boardingGate");
    if (!gate) return;
    saveLocal();
    gate.classList.add("leave");
    setTimeout(() => { gate.style.display = "none"; }, 760);
    if (launchTour) setTimeout(() => startTour(0), 500);
  }

  function init() {
    const returning = loadLocal();
    const hash = location.hash.replace("#", "");
    if (ROUTES.some((r) => r.id === hash)) state.route = hash;

    // View-only media guard (disable right-click saving on images)
    document.addEventListener("contextmenu", (e) => {
      if (e.target.tagName === "IMG") e.preventDefault();
    });

    // Gate intro wiring
    const gateInp = $("#gateBrandInput");
    gateInp.value = state.brandName;
    gateInp.addEventListener("input", () => {
      state.brandName = gateInp.value;
      updatePassBadges();
    });

    $$("#gateDestBtns button").forEach((b) => {
      b.classList.toggle("on", b.dataset.dest === state.destination);
      b.addEventListener("click", () => {
        state.destination = b.dataset.dest;
        const d = DESTINATIONS[state.destination];
        state.planMode = d.planType;
        if (d.planType === "monthly") state.selectedMonthly = d.planId;
        else state.selectedOnetime = d.planId;
        $$("#gateDestBtns button").forEach((x) => x.classList.toggle("on", x === b));
        updatePassBadges();
      });
    });

    $("#boardTourBtn").addEventListener("click", () => dismissGate(true));
    $("#exploreFreeBtn").addEventListener("click", () => dismissGate(false));
    $("#skipGateBtn").addEventListener("click", () => dismissGate(false));

    if (returning && hash) {
      $("#boardingGate").style.display = "none";
    }

    // Shell buttons
    $("#menuBtn").addEventListener("click", () => { $("#sidebar").classList.add("open"); $("#scrim").classList.add("on"); });
    $("#scrim").addEventListener("click", closeDrawer);
    $("#openPassBtn").addEventListener("click", openPassModal);
    $("#avatarPassBtn").addEventListener("click", openPassModal);
    $("#sideTourBtn").addEventListener("click", () => { closeDrawer(); startTour(firstUnstampedIndex()); });
    $("#topTourBtn").addEventListener("click", () => state.tourActive ? pauseTour() : startTour(firstUnstampedIndex()));
    $("#resumeBtn").addEventListener("click", () => startTour(firstUnstampedIndex()));
    $("#exitTourBtn").addEventListener("click", () => pauseTour());

    $("#coachPrev").addEventListener("click", () => startTour(state.tourIndex - 1));
    $("#coachNext").addEventListener("click", () => {
      if (state.tourIndex >= GATES.length - 1) {
        pauseTour(true);
        openArrivalModal();
      } else {
        startTour(state.tourIndex + 1);
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if ($("#activeModal")) closeModal();
        else if (state.tourActive) pauseTour();
      }
    });

    window.addEventListener("resize", () => { if (state.tourActive) positionSpotlight(); });
    window.addEventListener("scroll", () => { if (state.tourActive) { const gate = GATES[state.tourIndex]; const t = gate && $(gate.selector); if (t) applySpotRect(t, $("#spotlight"), $("#coachCard")); } }, { passive: true });

    wireSearch();
    renderNav();
    renderView();
    updatePassBadges();
  }

  init();
})();
