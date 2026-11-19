/* ==========================================================================
   BeBosS · Client-First Interactive Studio
   Zero personal names · View-only media · Impossible to get lost
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

  const ICONS = {
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    wa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    close: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  };

  const CRAFT_LAB = [
    {
      num: "01",
      title: "1-Second Subject",
      sub: "Stop the thumb before a word is read.",
      desc: "One unmistakable silhouette, upper-left editorial studio lighting, and clean negative space. Zero cluttered collages.",
      img: "assets/brand/boss-master.webp",
      rule: "1·3·5 RULE · SECOND 1",
    },
    {
      num: "02",
      title: "3-Second Surreal Twist",
      sub: "80% clean signal, 20% unforgettable craft.",
      desc: "Retro broadcast hardware, miniature worlds, or a deadpan visual metaphor that turns a marketing insight into a frame people save and share.",
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
      title: "30-Day Content Calendar",
      sub: "Strategy to approved calendar to live grid.",
      desc: "Every monthly plan runs on a structured editorial rhythm timed to Cairo & GCC peak hours — approved by you before anything goes live.",
      img: "assets/calendar/cover-collage.webp",
      rule: "EDITORIAL ENGINE · MONTHLY",
    },
  ];

  const TOUR_STOPS = [
    {
      section: "#work",
      workTab: "feed",
      label: "STOP 1 OF 4 · OUR WORK & BRAND",
      title: "See our live @be.bossss grid & content calendar.",
      desc: "Tap any post to swipe through its frames, or switch tabs to view our real November Content Calendar and 80/20 Brand Direction.",
    },
    {
      section: "#plans",
      planTab: "monthly",
      label: "STOP 2 OF 4 · SERVICES & 2026 PLANS",
      title: "Clear EGP pricing — film crew joins from Growth up.",
      desc: "Compare Starter, Growth, Boss, One-Time projects, or all 9 services. Tap any plan to load it onto your BeBosS Boarding Pass.",
    },
    {
      section: "#sign",
      label: "STOP 3 OF 4 · SIGN WITH US",
      title: "Configure your scope & sign digitally in 60 seconds.",
      desc: "Enter your brand name to watch your BeBosS Boarding Pass update live, sign on the pad, and send straight to our team.",
    },
    {
      section: "#contact",
      label: "STOP 4 OF 4 · DIRECT CONTACT",
      title: "Reach BeBosS in one tap — reply within 4 working hours.",
      desc: "WhatsApp, call +20 100 300 0607, email beboss.creative@outlook.com, or follow @be.bossss anytime.",
    },
  ];

  const state = {
    workTab: "feed",     // 'feed' | 'calendar' | 'brand'
    calView: "week",     // 'week' | 'month'
    calFilter: "all",    // 'all' | 'live' | 'next'
    labIndex: 0,
    planTab: "monthly",  // 'monthly' | 'onetime' | 'services'
    planMode: "monthly", // 'monthly' | 'onetime' | 'custom'
    selectedMonthly: "growth",
    selectedOnetime: "identity",
    customServices: new Set(["brand-strategy", "art-direction", "content-campaign"]),
    brandName: "",
    clientMarket: "Egypt (Cairo)",
    clientEmail: "",
    clientPhone: "",
    clientNotes: "",
    hasSigned: false,
    sigDataUrl: "",
    tourOpen: false,
    tourIdx: 0,
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const egp = (n) => "EGP " + Number(n || 0).toLocaleString("en-US");

  let toastTimer = null;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("on"), 2600);
  }

  /* ---------- Pricing Helper ---------- */
  function getScope() {
    if (state.planMode === "monthly") {
      const p = MONTHLY_PLANS[state.selectedMonthly] || MONTHLY_PLANS.growth;
      return {
        label: `${p.name} Monthly · ${egp(p.price)}/mo`,
        shortRole: `${p.name.toUpperCase()} PLAN · MONTHLY`,
        subtotal: p.price,
        vat: Math.round(p.price * 0.14),
        total: Math.round(p.price * 1.14),
        cadence: "/ month",
        terms: "3 month minimum term · Paid monthly in advance · Ad budget paid directly to platform",
      };
    }
    if (state.planMode === "onetime") {
      const p = ONETIME_PROJECTS[state.selectedOnetime] || ONETIME_PROJECTS.identity;
      return {
        label: `${p.name} · ${egp(p.price)}`,
        shortRole: `${p.name.replace(" Project", "").toUpperCase()} · ONE-TIME`,
        subtotal: p.price,
        vat: Math.round(p.price * 0.14),
        total: Math.round(p.price * 1.14),
        cadence: "one-time",
        terms: p.terms,
      };
    }
    const chosen = SERVICES.filter((s) => state.customServices.has(s.id));
    const subtotal = chosen.reduce((a, s) => a + s.customFee, 0);
    return {
      label: `Custom Stack (${chosen.length} services)`,
      shortRole: `CUSTOM 360° STUDIO · ${chosen.length} SERVICES`,
      subtotal,
      vat: Math.round(subtotal * 0.14),
      total: Math.round(subtotal * 1.14),
      cadence: "est. / mo",
      terms: "Tailored 360° retainer · Final quote confirmed on discovery call",
    };
  }

  /* ---------- Official BeBosS Signature Boarding Pass (Zero Personal Names) ---------- */
  function renderTicket({ onDark = false, studioCard = false } = {}) {
    const sc = getScope();
    const passenger = studioCard ? "BeBosS Studio" : (state.brandName.trim() || "Your Brand Name");
    const role = studioCard ? "360° BRANDING & MARKETING" : sc.shortRole;
    const sub = studioCard ? "NINE SERVICES · ONE ROOF" : sc.label;
    return `
      <div class="ticket ${onDark ? "on-dark" : ""}" aria-label="BeBosS Official Boarding Pass">
        <div class="t-main">
          <div class="t-top">
            <img src="assets/brand/wordmark-cobalt.png" alt="BeBosS" draggable="false" />
            <span>ADMIT ONE</span>
          </div>
          <div style="margin-top:16px">
            <div class="t-lbl">${studioCard ? "OFFICIAL STUDIO PASS" : "PASSENGER · CLIENT BRAND"}</div>
            <div class="t-name">${esc(passenger)}</div>
          </div>
          <div class="t-row">
            <div>
              <div class="t-lbl">${studioCard ? "DISCIPLINE" : "SELECTED TRACK"}</div>
              <strong>${esc(role)}</strong>
            </div>
            <div>
              <div class="t-lbl">ROUTE</div>
              <strong>CAIRO · GCC</strong>
              <div style="font-size:11.5px;color:var(--muted);margin-top:3px;font-weight:600">${esc(sub)}</div>
            </div>
          </div>
          <div class="t-icons">
            <a href="${CONTACT.phoneHref}" title="Call ${CONTACT.phone}" aria-label="Call BeBosS">${ICONS.phone}</a>
            <a href="${CONTACT.wa}?text=${encodeURIComponent(`Hi BeBosS team! I'm reaching out for ${passenger} (${sc.label}).`)}" target="_blank" rel="noopener" title="WhatsApp BeBosS" aria-label="WhatsApp BeBosS">${ICONS.wa}</a>
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

  /* ========================================================================
     SECTION 01 · WORK & BRAND DIRECTION
     ======================================================================== */
  function formatDateMeta(iso) {
    const d = new Date(iso + ":00");
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return {
      dow: days[d.getDay()],
      day: `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]}`,
      time: `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} Cairo`,
    };
  }

  function weekBucket(iso) {
    const dt = iso.slice(0, 10);
    if (dt <= "2026-11-01") return "WEEK OF 26 OCT – 01 NOV 2026";
    if (dt <= "2026-11-08") return "WEEK OF 02 NOV – 08 NOV 2026";
    if (dt <= "2026-11-15") return "WEEK OF 09 NOV – 15 NOV 2026";
    if (dt <= "2026-11-22") return "WEEK OF 16 NOV – 22 NOV 2026";
    return "WEEK OF 23 NOV – 29 NOV 2026";
  }

  function renderWork() {
    $$("[data-worktab]").forEach((b) => b.classList.toggle("on", b.dataset.worktab === state.workTab));
    const stage = $("#workStage");

    if (state.workTab === "feed") {
      const ordered = [...POSTS].sort((a, b) => b.due.localeCompare(a.due));
      const liveN = ordered.filter((p) => p.status === "live").length;
      stage.innerHTML = `
        <div class="card feed-card">
          <div class="feed-head">
            <div class="feed-id">
              <div class="feed-av"><img src="assets/brand/wordmark-cream.png" alt="BeBosS" draggable="false" /></div>
              <div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
                  <strong style="font:700 20px/1 var(--display)">@be.bossss</strong>
                  <span class="pill live">${liveN} Live</span>
                  <span class="pill next">${ordered.length - liveN} Up Next</span>
                </div>
                <p style="margin:6px 0 0;font-size:13.5px;color:var(--muted)">Tap any post to swipe through all frames · View-only portfolio preview.</p>
              </div>
            </div>
            <a class="btn sm line" href="${CONTACT.ig}" target="_blank" rel="noopener">Open Instagram ↗</a>
          </div>
          <div class="feed-grid">
            ${ordered.map((p) => `
              <button type="button" class="tile ${p.status}" data-open-post="${p.id}" aria-label="View ${esc(p.title)}">
                <img src="assets/${p.slides[0]}" alt="${esc(p.title)}" loading="lazy" draggable="false" />
                <span class="badge">${p.slides.length} ${p.slides.length === 1 ? "frame" : "slides"}</span>
                <span class="st" style="background:${p.status === "live" ? "var(--green)" : "var(--pink)"}"></span>
                <span class="cap">${esc(p.title)}<small>${p.status === "live" ? "Posted on @be.bossss" : "Approved · Up Next"}</small></span>
              </button>
            `).join("")}
          </div>
        </div>
      `;
    } else if (state.workTab === "calendar") {
      const filtered = POSTS.filter((p) => state.calFilter === "all" || p.status === state.calFilter);
      const liveN = POSTS.filter((p) => p.status === "live").length;
      stage.innerHTML = `
        <div class="cal-tools">
          <div class="chips">
            <button type="button" class="chip ${state.calView === "week" ? "on" : ""}" data-calview="week">Weekly Plan</button>
            <button type="button" class="chip ${state.calView === "month" ? "on" : ""}" data-calview="month">November Grid</button>
          </div>
          <div class="chips">
            <button type="button" class="chip ${state.calFilter === "all" ? "on" : ""}" data-calfilter="all">All (${POSTS.length})</button>
            <button type="button" class="chip ${state.calFilter === "live" ? "on" : ""}" data-calfilter="live">Posted (${liveN})</button>
            <button type="button" class="chip ${state.calFilter === "next" ? "on" : ""}" data-calfilter="next">Up Next (${POSTS.length - liveN})</button>
          </div>
        </div>
        ${state.calView === "week" ? renderWeekly(filtered) : renderMonth(filtered)}
      `;
    } else {
      const cur = CRAFT_LAB[state.labIndex];
      stage.innerHTML = `
        <div class="card">
          <div class="lab">
            <div class="lab-stage">
              <img src="${cur.img}" alt="${esc(cur.title)}" draggable="false" />
              <span class="pill" style="position:absolute;left:14px;top:14px;background:var(--pink);color:#fff;border-color:var(--pink)">${cur.rule}</span>
            </div>
            <div>
              <span class="eyebrow c">HOW WE BUILD UNFORGETTABLE BRANDS</span>
              <h3 class="h-md" style="margin:8px 0 14px">The 1 · 3 · 5 &amp; 80 / 20 Craft Law</h3>
              <div class="lab-steps">
                ${CRAFT_LAB.map((item, i) => `
                  <button type="button" class="lab-step ${i === state.labIndex ? "on" : ""}" data-lab="${i}">
                    <b>${item.num}</b>
                    <div>
                      <strong style="display:block;font:700 15.5px/1.2 var(--display)">${item.title}</strong>
                      <span style="font-size:13px;opacity:.8">${item.sub}</span>
                    </div>
                  </button>
                `).join("")}
              </div>
              <p style="margin:14px 0 0;font-size:14px;color:var(--muted)">${cur.desc}</p>
            </div>
          </div>
        </div>

        <div class="pillars">
          <div class="pillar"><b>Retro</b><p>Analog warmth &amp; authority — CRT monitors, vinyl, broadcast consoles &amp; fine grain.</p></div>
          <div class="pillar"><b>Future</b><p>Ambition at impossible scale — engineered hybrids &amp; forward-facing direction.</p></div>
          <div class="pillar"><b>Funky Pop</b><p>Stopping power — one dominant colour, bold scale &amp; a deadpan visual joke.</p></div>
          <div class="pillar"><b>Editorial</b><p>Commercial credibility — upper-left studio light, grounded shadows &amp; sharp crops.</p></div>
        </div>

        <div class="grid g2" style="margin-top:16px">
          <div class="card">
            <span class="eyebrow">LOCKED VISUAL SYSTEM · BRAND BOOK V2</span>
            <h3 style="margin-top:8px;font-size:19px">Four core colours. One pink touch per frame.</h3>
            <div class="swatches">
              <i style="background:#F4EDE1" title="Cream #F4EDE1"></i>
              <i style="background:#1F3DFF" title="Cobalt #1F3DFF"></i>
              <i style="background:#10153A" title="Navy #10153A"></i>
              <i style="background:#FF4F9A" title="Pink #FF4F9A"></i>
            </div>
          </div>
          <div class="card">
            <span class="eyebrow">BRANDS OUR TEAM HAS BUILT FOR</span>
            <div style="display:flex;flex-wrap:wrap;gap:12px 24px;margin-top:12px;font:700 20px/1.2 var(--display)">
              <span>Buffalo Wild Wings</span><span>Texas Chicken</span><span>du</span><span>NOTE<span class="dot">.</span></span>
            </div>
            <p style="margin:8px 0 0;font-size:12px;color:var(--muted)">Work by BeBosS team members, including past roles. Names belong to their owners.</p>
          </div>
        </div>
      `;
    }

    $$("[data-open-post]", stage).forEach((b) => b.addEventListener("click", () => {
      const p = POSTS.find((x) => x.id === b.dataset.openPost);
      if (p) openPostModal(p);
    }));
    $$("[data-calview]", stage).forEach((b) => b.addEventListener("click", () => { state.calView = b.dataset.calview; renderWork(); }));
    $$("[data-calfilter]", stage).forEach((b) => b.addEventListener("click", () => { state.calFilter = b.dataset.calfilter; renderWork(); }));
    $$("[data-lab]", stage).forEach((b) => b.addEventListener("click", () => { state.labIndex = Number(b.dataset.lab); renderWork(); }));
  }

  function renderWeekly(list) {
    const groups = new Map();
    list.forEach((p) => {
      const k = weekBucket(p.due);
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(p);
    });
    let out = "";
    for (const [wk, items] of groups.entries()) {
      out += `<div class="week-h"><span>${wk}</span><span>${items.length} ${items.length === 1 ? "post" : "posts"}</span></div>`;
      out += items.map((p) => {
        const m = formatDateMeta(p.due);
        const thumbs = p.slides.slice(0, 6).map((s, i) => `<img src="assets/${s}" alt="${esc(p.title)} slide ${i + 1}" loading="lazy" draggable="false" />`).join("");
        return `
          <button type="button" class="row" data-open-post="${p.id}">
            <div class="d"><small>${m.dow}</small><b>${m.day}</b><em>${m.time}</em></div>
            <div class="thumbs">${thumbs}</div>
            <div><h3>${esc(p.title)}</h3><p>${esc(p.format)} · tap to preview</p></div>
            <span class="pill ${p.status === "live" ? "live" : "next"}">${p.status === "live" ? "Posted" : "Up Next"}</span>
          </button>
        `;
      }).join("");
    }
    return out;
  }

  function renderMonth(list) {
    const byDate = {};
    list.forEach((p) => { byDate[p.due.slice(0, 10)] = p; });
    const dows = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const start = new Date(2026, 9, 25);
    let cells = dows.map((d) => `<div class="dow">${d}</div>`).join("");
    for (let i = 0; i < 35; i++) {
      const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const iso = `${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, "0")}-${String(cur.getDate()).padStart(2, "0")}`;
      const p = byDate[iso];
      const dd = String(cur.getDate()).padStart(2, "0") + (cur.getMonth() === 9 ? " Oct" : "");
      if (p) {
        cells += `<button type="button" class="day has ${p.status === "live" ? "live" : ""}" data-open-post="${p.id}">
          <span>${dd}</span><small>${esc(p.kind.toUpperCase())}<br />${esc(p.title)}</small>
          <img src="assets/${p.slides[0]}" alt="" loading="lazy" draggable="false" /><i></i>
        </button>`;
      } else {
        cells += `<div class="day"><span>${dd}</span><small>${cur.getMonth() === 9 ? "Oct" : "Open"}</small></div>`;
      }
    }
    return `<div class="card"><div class="month">${cells}</div><div class="legend"><span><i style="background:var(--navy)"></i> Posted on @be.bossss</span><span><i style="background:var(--cobalt)"></i> Approved &amp; Up Next</span></div></div>`;
  }

  /* ========================================================================
     SECTION 02 · PLANS & SERVICES
     ======================================================================== */
  function renderPlans() {
    $$("[data-plantab]").forEach((b) => b.classList.toggle("on", b.dataset.plantab === state.planTab));
    const stage = $("#plansStage");
    let mainBlock = "";

    if (state.planTab === "monthly") {
      const list = [MONTHLY_PLANS.starter, MONTHLY_PLANS.growth, MONTHLY_PLANS.boss];
      mainBlock = `
        <div class="grid g3">
          ${list.map((p) => {
            const on = state.planMode === "monthly" && state.selectedMonthly === p.id;
            return `
              <div class="card plan ${p.cobalt ? "dark" : ""} ${on ? "pick-on" : ""}">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
                  <h3 class="h-md">${p.name}</h3>
                  ${p.badge ? `<span class="pill ${p.cobalt ? "next" : "cob"}">${p.badge}</span>` : ""}
                </div>
                <p style="margin:0;font-size:13.5px;opacity:.76">${esc(p.tagline)}</p>
                <div class="price">${egp(p.price)} <small>/ month</small></div>
                <ul>${p.bullets.map((b) => `<li class="${b.included ? "" : "no"}"><span>${esc(b.text)}</span></li>`).join("")}</ul>
                <button type="button" class="btn ${p.cobalt ? "pink" : on ? "navy" : ""}" data-choose-plan="monthly:${p.id}">
                  ${on ? "✓ Selected — Sign Below →" : `Choose ${p.name} & Sign →`}
                </button>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else if (state.planTab === "onetime") {
      const list = [ONETIME_PROJECTS.strategy, ONETIME_PROJECTS.identity, ONETIME_PROJECTS.launch];
      mainBlock = `
        <div class="grid g3">
          ${list.map((p) => {
            const on = state.planMode === "onetime" && state.selectedOnetime === p.id;
            return `
              <div class="card plan ${on ? "pick-on" : ""}">
                <span class="eyebrow c">ONE-TIME PROJECT</span>
                <h3 class="h-md">${p.name}</h3>
                <div class="price">${p.id === "launch" ? "From " : ""}${egp(p.price)}</div>
                <ul>${p.items.map((it) => `<li><span>${esc(it)}</span></li>`).join("")}</ul>
                <button type="button" class="btn ${on ? "navy" : ""}" data-choose-plan="onetime:${p.id}">
                  ${on ? "✓ Selected — Sign Below →" : `Choose ${p.name.replace(" Project", "")} & Sign →`}
                </button>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      mainBlock = `
        <div class="grid g3">
          ${SERVICES.map((s) => `
            <button type="button" class="svc" data-open-svc="${s.id}">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;width:100%">
                <span class="svc-n">${s.num}</span>
                <span class="pill cob">${egp(s.customFee)}/mo est.</span>
              </div>
              <h3>${esc(s.name)}</h3>
              <p>${esc(s.short)}</p>
              <span class="more">Inspect deliverables →</span>
            </button>
          `).join("")}
        </div>
      `;
    }

    stage.innerHTML = `
      ${mainBlock}

      <details class="acc">
        <summary>Compare Starter vs. Growth vs. Boss side by side</summary>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Deliverable</th><th>Starter · EGP 20,000</th><th>Growth · EGP 38,000</th><th>Boss · EGP 60,000</th></tr></thead>
            <tbody>
              <tr><td>Platforms</td><td>2</td><td>3</td><td>Up to 4</td></tr>
              <tr><td>Designed posts &amp; carousels</td><td>12 / month</td><td>16 / month</td><td>20 / month</td></tr>
              <tr><td>Reels</td><td>2 (from your footage)</td><td>6 (filmed by our crew)</td><td>10 (filmed by our crew)</td></tr>
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
      </details>

      <details class="acc">
        <summary>Questions founders ask (Terms, filming, ad budget &amp; ownership)</summary>
        <div class="faq-list">
          ${FAQS.map((f, i) => `
            <div class="faq ${i === 0 ? "open" : ""}">
              <button type="button" data-faq="${i}"><span>${esc(f.q)}</span><span>+</span></button>
              <p>${esc(f.a)}</p>
            </div>
          `).join("")}
        </div>
      </details>
    `;

    $$("[data-choose-plan]", stage).forEach((b) => b.addEventListener("click", () => {
      const [mode, id] = b.dataset.choosePlan.split(":");
      state.planMode = mode;
      if (mode === "monthly") state.selectedMonthly = id;
      else state.selectedOnetime = id;
      renderPlans();
      renderSign();
      $("#sign").scrollIntoView({ behavior: "smooth" });
      toast("Plan loaded onto your BeBosS Boarding Pass");
    }));

    $$("[data-open-svc]", stage).forEach((b) => b.addEventListener("click", () => {
      const s = SERVICES.find((x) => x.id === b.dataset.openSvc);
      if (s) openServiceModal(s);
    }));

    $$("[data-faq]", stage).forEach((b) => b.addEventListener("click", () => b.closest(".faq").classList.toggle("open")));
  }

  /* ========================================================================
     SECTION 03 · SIGN & START WITH US
     ======================================================================== */
  function renderSign() {
    const sc = getScope();
    $("#signStage").innerHTML = `
      <div class="board">
        <div class="grid" style="gap:16px">
          <div class="card">
            <h3 style="font-size:17px;margin-bottom:12px"><span class="step-num">1</span>Choose your scope</h3>
            <div class="chips" style="margin-bottom:14px">
              <button type="button" class="chip ${state.planMode === "monthly" ? "on" : ""}" data-pmode="monthly">Monthly Plan</button>
              <button type="button" class="chip ${state.planMode === "onetime" ? "on" : ""}" data-pmode="onetime">One-Time Project</button>
              <button type="button" class="chip ${state.planMode === "custom" ? "on" : ""}" data-pmode="custom">Custom Services</button>
            </div>
            ${state.planMode === "monthly" ? `
              <div class="opt-grid">
                ${["starter", "growth", "boss"].map((k) => {
                  const p = MONTHLY_PLANS[k];
                  return `<button type="button" class="opt ${state.selectedMonthly === k ? "on" : ""}" data-sel-m="${k}"><b>${p.name}</b><small>${egp(p.price)}/mo</small></button>`;
                }).join("")}
              </div>
            ` : state.planMode === "onetime" ? `
              <div class="opt-grid">
                ${["strategy", "identity", "launch"].map((k) => {
                  const p = ONETIME_PROJECTS[k];
                  return `<button type="button" class="opt ${state.selectedOnetime === k ? "on" : ""}" data-sel-o="${k}"><b>${p.name.replace(" Project", "")}</b><small>${egp(p.price)}</small></button>`;
                }).join("")}
              </div>
            ` : `
              <div class="addons">
                ${SERVICES.map((s) => `<button type="button" class="${state.customServices.has(s.id) ? "on" : ""}" data-toggle-svc="${s.id}">${s.num} · ${esc(s.name.split(" and ")[0])} (${egp(s.customFee)})</button>`).join("")}
              </div>
            `}
          </div>

          <div class="card">
            <h3 style="font-size:17px;margin-bottom:12px"><span class="step-num">2</span>Your brand details</h3>
            <div class="grid g2">
              <div class="field"><label for="bBrand">Brand / Business Name</label><input id="bBrand" type="text" value="${esc(state.brandName)}" placeholder="e.g. Cairo Coffee Co." /></div>
              <div class="field"><label for="bMarket">Market</label><input id="bMarket" type="text" value="${esc(state.clientMarket)}" placeholder="Cairo, Riyadh, Dubai..." /></div>
              <div class="field"><label for="bEmail">Email</label><input id="bEmail" type="email" value="${esc(state.clientEmail)}" placeholder="you@company.com" /></div>
              <div class="field"><label for="bPhone">WhatsApp / Phone</label><input id="bPhone" type="tel" value="${esc(state.clientPhone)}" placeholder="+20 1XX XXX XXXX" /></div>
            </div>
            <div class="field" style="margin-bottom:0">
              <label for="bNotes">Instagram handle or project notes</label>
              <textarea id="bNotes" rows="2" placeholder="Tell us about your brand or target launch date...">${esc(state.clientNotes)}</textarea>
            </div>
          </div>

          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <h3 style="font-size:17px"><span class="step-num">3</span>Sign digitally</h3>
              <button type="button" class="btn sm line" id="clearSigBtn">Clear</button>
            </div>
            <div class="sig-wrap">
              <canvas id="sigCanvas" width="600" height="148"></canvas>
              <span id="sigHint">${state.hasSigned ? "✓ Signed digitally" : "Draw your signature inside this box"}</span>
            </div>
          </div>
        </div>

        <aside class="grid sticky" style="gap:16px">
          <div id="liveTicketSlot">${renderTicket({ onDark: false })}</div>

          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span class="eyebrow">PROPOSAL SUMMARY</span>
              <span class="pill ${state.hasSigned ? "live" : "next"}" id="sigPill">${state.hasSigned ? "Signed ✓" : "Unsigned Draft"}</span>
            </div>
            <h3 style="margin:10px 0 4px;font-size:20px">${esc(sc.label)}</h3>
            <p style="margin:0 0 12px;font-size:12.5px;color:var(--muted)">${esc(sc.terms)}</p>
            <div style="font-size:13.5px;display:grid;gap:6px;padding:12px 0;border-top:1px solid var(--line)">
              <div style="display:flex;justify-content:space-between"><span>Subtotal (${sc.cadence})</span><strong>${egp(sc.subtotal)}</strong></div>
              <div style="display:flex;justify-content:space-between;color:var(--muted)"><span>14% VAT</span><span>${egp(sc.vat)}</span></div>
            </div>
            <div class="total"><span>Total incl. VAT</span><b>${egp(sc.total)}</b></div>
            <div style="display:grid;gap:9px;margin-top:8px">
              <button type="button" class="btn green" id="sendWaBtn">Send Signed Brief via WhatsApp</button>
              <button type="button" class="btn" id="sendEmailBtn">Email to ${CONTACT.email}</button>
              <button type="button" class="btn line" id="copyBriefBtn">Copy Summary</button>
            </div>
          </div>
        </aside>
      </div>
    `;

    const st = $("#signStage");
    $$("[data-pmode]", st).forEach((b) => b.addEventListener("click", () => { state.planMode = b.dataset.pmode; renderSign(); }));
    $$("[data-sel-m]", st).forEach((b) => b.addEventListener("click", () => { state.selectedMonthly = b.dataset.selM; renderPlans(); renderSign(); }));
    $$("[data-sel-o]", st).forEach((b) => b.addEventListener("click", () => { state.selectedOnetime = b.dataset.selO; renderPlans(); renderSign(); }));
    $$("[data-toggle-svc]", st).forEach((b) => b.addEventListener("click", () => {
      const id = b.dataset.toggleSvc;
      state.customServices.has(id) ? state.customServices.delete(id) : state.customServices.add(id);
      renderSign();
    }));

    const bind = (id, key, liveTicket = false) => {
      const el = $(id);
      if (!el) return;
      el.addEventListener("input", () => {
        state[key] = el.value;
        if (liveTicket) $("#liveTicketSlot").innerHTML = renderTicket({ onDark: false });
      });
    };
    bind("#bBrand", "brandName", true);
    bind("#bMarket", "clientMarket");
    bind("#bEmail", "clientEmail");
    bind("#bPhone", "clientPhone");
    bind("#bNotes", "clientNotes");

    wireSignaturePad();

    const briefText = () => {
      const s = getScope();
      return [
        "BEBOSS STUDIO · CLIENT BRIEF",
        `Brand: ${state.brandName.trim() || "New Brand"}`,
        `Market: ${state.clientMarket || "Egypt / GCC"}`,
        `Email: ${state.clientEmail || "—"}`,
        `Phone: ${state.clientPhone || "—"}`,
        `Selected Scope: ${s.label}`,
        `Total incl. 14% VAT: ${egp(s.total)} (${s.cadence})`,
        `Digital Signature: ${state.hasSigned ? "Signed on BeBosS website" : "Draft"}`,
        state.clientNotes ? `Notes: ${state.clientNotes}` : "",
      ].filter(Boolean).join("\n");
    };

    $("#sendWaBtn").addEventListener("click", () => {
      window.open(`${CONTACT.wa}?text=${encodeURIComponent(briefText())}`, "_blank", "noopener");
      toast("Opening WhatsApp dispatch to BeBosS");
    });
    $("#sendEmailBtn").addEventListener("click", () => {
      const subj = `BeBosS Studio Brief · ${state.brandName.trim() || "New Inquiry"}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(briefText())}`;
      toast(`Opening email to ${CONTACT.email}`);
    });
    $("#copyBriefBtn").addEventListener("click", () => {
      navigator.clipboard?.writeText(briefText()).then(() => toast("Brief summary copied")).catch(() => toast("Ready to send"));
    });
  }

  function wireSignaturePad() {
    const canvas = $("#sigCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.max(300, Math.round(rect.width * dpr));
    canvas.height = Math.round(148 * dpr);
    ctx.scale(dpr, dpr);
    ctx.strokeStyle = "#10153A";
    ctx.lineWidth = 2.6;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (state.sigDataUrl) {
      const img = new Image();
      img.onload = () => ctx.drawImage(img, 0, 0, rect.width, 148);
      img.src = state.sigDataUrl;
    }

    let drawing = false;
    const pt = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      drawing = true;
      const p = pt(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    });
    canvas.addEventListener("pointermove", (e) => {
      if (!drawing) return;
      e.preventDefault();
      const p = pt(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });
    const end = () => {
      if (!drawing) return;
      drawing = false;
      state.hasSigned = true;
      state.sigDataUrl = canvas.toDataURL();
      const h = $("#sigHint"); if (h) h.textContent = "✓ Signed digitally";
      const pill = $("#sigPill"); if (pill) { pill.textContent = "Signed ✓"; pill.className = "pill live"; }
    };
    window.addEventListener("pointerup", end);
    $("#clearSigBtn")?.addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      state.hasSigned = false;
      state.sigDataUrl = "";
      const h = $("#sigHint"); if (h) h.textContent = "Draw your signature inside this box";
      const pill = $("#sigPill"); if (pill) { pill.textContent = "Unsigned Draft"; pill.className = "pill next"; }
    });
  }

  /* ========================================================================
     MODALS (View-Only Post Carousel & Service Details)
     ======================================================================== */
  function openModal(html) {
    $("#modalRoot").innerHTML = `<div class="modal" id="activeModal" role="dialog" aria-modal="true"><div class="modal-box"><button type="button" class="modal-x" id="closeModalBtn" aria-label="Close">${ICONS.close}</button>${html}</div></div>`;
    $("#closeModalBtn").addEventListener("click", closeModal);
    $("#activeModal").addEventListener("click", (e) => { if (e.target.id === "activeModal") closeModal(); });
  }
  function closeModal() { $("#modalRoot").innerHTML = ""; }

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
          <h3 class="h-md">${esc(post.title)}</h3>
          <span style="font-size:13px;color:var(--muted)">${esc(post.format)} · View-only preview</span>
          <div class="cap">${esc(post.caption)}</div>
          <div class="tags">${esc(post.hashtags)}</div>
          <div style="margin-top:auto;display:flex;gap:10px;flex-wrap:wrap">
            <button type="button" class="btn sm" id="reqStyleBtn">Build This Style For My Brand</button>
            ${post.url ? `<a class="btn sm line" href="${post.url}" target="_blank" rel="noopener">View on Instagram ↗</a>` : ""}
          </div>
        </div>
      </div>
    `);

    const upd = () => {
      $("#slideTrack").style.transform = `translateX(-${idx * 100}%)`;
      $$("#slideDots i").forEach((d, i) => d.classList.toggle("on", i === idx));
    };
    $("#slidePrev")?.addEventListener("click", () => { idx = (idx - 1 + post.slides.length) % post.slides.length; upd(); });
    $("#slideNext")?.addEventListener("click", () => { idx = (idx + 1) % post.slides.length; upd(); });
    $("#reqStyleBtn").addEventListener("click", () => {
      state.clientNotes = `${state.clientNotes ? state.clientNotes + "\n" : ""}Interested in style: "${post.title}"`;
      closeModal();
      renderSign();
      $("#sign").scrollIntoView({ behavior: "smooth" });
      toast(`Added "${post.title}" to your brief`);
    });

    let sx = 0;
    const tr = $("#slideTrack");
    if (tr && post.slides.length > 1) {
      tr.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
      tr.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 40) { idx = dx < 0 ? (idx + 1) % post.slides.length : (idx - 1 + post.slides.length) % post.slides.length; upd(); }
      });
    }
  }

  function openServiceModal(svc) {
    const on = state.customServices.has(svc.id);
    openModal(`
      <div style="padding:28px">
        <span class="eyebrow c">SERVICE ${svc.num} · BEBOSS STUDIO</span>
        <h3 class="h-lg" style="margin:8px 0">${esc(svc.name)}</h3>
        <p class="lead" style="margin-top:0">${esc(svc.short)}</p>
        <div style="margin:18px 0;padding:16px;border-radius:14px;background:var(--cream)">
          <span class="eyebrow">INCLUDED DELIVERABLES</span>
          <ul style="margin:10px 0 0;padding-left:18px;display:grid;gap:8px;font-size:14px">
            ${svc.deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}
          </ul>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap">
          <div><span class="eyebrow">TYPICAL TIER</span><strong style="display:block;margin-top:4px;font-family:var(--display)">${esc(svc.tier)}</strong></div>
          <button type="button" class="btn" id="svcAddBtn">${on ? "✓ In Custom Stack — Go to Sign" : `+ Add to Custom Stack (${egp(svc.customFee)})`}</button>
        </div>
      </div>
    `);
    $("#svcAddBtn").addEventListener("click", () => {
      state.customServices.add(svc.id);
      state.planMode = "custom";
      closeModal();
      renderSign();
      $("#sign").scrollIntoView({ behavior: "smooth" });
      toast(`Added ${svc.name} to your brief`);
    });
  }

  /* ========================================================================
     OPTIONAL NON-BLOCKING 60-SECOND GUIDED TOUR
     ======================================================================== */
  function showTourStop(i) {
    state.tourOpen = true;
    state.tourIdx = Math.max(0, Math.min(TOUR_STOPS.length - 1, i));
    const s = TOUR_STOPS[state.tourIdx];
    if (s.workTab) { state.workTab = s.workTab; renderWork(); }
    if (s.planTab) { state.planTab = s.planTab; renderPlans(); }
    $(s.section)?.scrollIntoView({ behavior: "smooth" });

    $("#tourStepLabel").textContent = s.label;
    $("#tourTitle").textContent = s.title;
    $("#tourDesc").textContent = s.desc;
    $("#tourPrev").style.display = state.tourIdx === 0 ? "none" : "inline-flex";
    $("#tourNext").textContent = state.tourIdx === TOUR_STOPS.length - 1 ? "Done ✓" : "Next →";
    $("#tourDock").classList.add("on");
  }

  function closeTour() {
    state.tourOpen = false;
    $("#tourDock").classList.remove("on");
  }

  /* ---------- Scroll-Spy Active Nav Highlighting ---------- */
  function wireScrollSpy() {
    const ids = ["work", "plans", "sign", "contact"];
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = "";
      ids.forEach((id) => {
        const el = $("#" + id);
        if (el && el.offsetTop <= y) cur = id;
      });
      $$("#topNav a, #bnav a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Bootstrap ---------- */
  function init() {
    document.addEventListener("contextmenu", (e) => { if (e.target.tagName === "IMG") e.preventDefault(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeTour(); } });

    $$("[data-worktab]").forEach((b) => b.addEventListener("click", () => { state.workTab = b.dataset.worktab; renderWork(); }));
    $$("[data-plantab]").forEach((b) => b.addEventListener("click", () => { state.planTab = b.dataset.plantab; renderPlans(); }));

    $("#startTourBtn").addEventListener("click", () => showTourStop(0));
    $("#heroTourBtn").addEventListener("click", () => showTourStop(0));
    $("#tourPrev").addEventListener("click", () => showTourStop(state.tourIdx - 1));
    $("#tourNext").addEventListener("click", () => state.tourIdx >= TOUR_STOPS.length - 1 ? closeTour() : showTourStop(state.tourIdx + 1));
    $("#tourClose").addEventListener("click", closeTour);

    $("#contactTicketSlot").innerHTML = renderTicket({ onDark: true, studioCard: true });
    renderWork();
    renderPlans();
    renderSign();
    wireScrollSpy();
  }

  init();
})();
