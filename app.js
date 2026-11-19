/* ==========================================================================
   BeBosS · Interactive Editorial Studio Logic
   Zero personal names · View-only media · Effortless client journey
   ========================================================================== */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const fmtEGP = (n) => "EGP " + Number(n).toLocaleString("en-US");
  const slideSrc = (s) => (s.startsWith("assets/") ? s : "assets/" + s);

  const SERVICE_ART = {
    "brand-strategy": "assets/calendar/post-03-we-tested-40-colours.webp",
    "art-direction": "assets/calendar/post-12-1-brief-3-directions.webp",
    "video-motion": "assets/calendar/post-02-opening-night.webp",
    "content-campaign": "assets/calendar/post-04-the-scroll-stopping-challenge.webp",
    "performance-growth": "assets/calendar/post-06-the-conversion-run.webp",
    "web-experiences": "assets/brand/launch-carousel.webp",
    "social-management": "assets/calendar/month-view.webp",
    "events-activations": "assets/calendar/post-01-final-say-yours.webp",
    "print-packaging": "assets/slides/final-say-yours-04.webp",
  };

  const PHILOSOPHY_STEPS = [
    {
      num: "01",
      badge: "01 · THE 1 · 3 · 5 TEST",
      label: "The 1 · 3 · 5 Scroll Test",
      sub: "1s to stop · 3s to read · 5s to remember",
      title: "1 Second to Stop. 3 to Read. 5 to Remember.",
      desc: "If a frame doesn’t arrest the thumb in one second, deliver the promise in three, and leave an unmistakable brand memory by five, it never leaves our Cairo studio.",
      img: "assets/calendar/post-04-the-scroll-stopping-challenge.webp",
    },
    {
      num: "02",
      badge: "02 · 80 / 20 BRAND BALANCE",
      label: "80% Discipline. 20% Surprise.",
      sub: "Consistent identity with fearless creative punch",
      title: "80% Unmistakable System. 20% Unexpected Spark.",
      desc: "Consistency builds recognition; surprise earns attention. We lock your visual language across 80% of every layout so the remaining 20% hits twice as hard.",
      img: "assets/calendar/post-12-1-brief-3-directions.webp",
    },
    {
      num: "03",
      badge: "03 · ONE STUDIO CAMERA",
      label: "One Studio Camera Standard",
      sub: "Every shot, render & print belongs to one world",
      title: "Everything Looks Like It Came From One World.",
      desc: "Whether we shoot on location, direct 3D object studies, or design packaging, every shadow, color temperature, and framing choice obeys a single art direction.",
      img: "assets/slides/final-say-yours-02.webp",
    },
    {
      num: "04",
      badge: "04 · EGYPT & GCC VOICE",
      label: "Bilingual Cultural Fluency",
      sub: "English & Arabic copy crafted to convert",
      title: "Built for Founders Across Egypt & the GCC.",
      desc: "No awkward translations. We write native English and Arabic hooks shaped around how real audiences in Cairo, Riyadh, and Dubai read, trust, and buy.",
      img: "assets/calendar/post-13-reach-isnt-relevance.webp",
    },
  ];

  const SCOPES = [
    { id: "starter", kind: "Monthly Retainer", name: "Starter Plan", short: "EGP 20,000/mo", price: 20000 },
    { id: "growth", kind: "Monthly Retainer", name: "Growth Plan", short: "EGP 38,000/mo", price: 38000 },
    { id: "boss", kind: "Monthly Retainer", name: "Boss Plan", short: "EGP 60,000/mo", price: 60000 },
    { id: "strategy", kind: "One-Time Project", name: "Brand Strategy", short: "EGP 25,000", price: 25000 },
    { id: "identity", kind: "One-Time Project", name: "Brand Identity", short: "EGP 45,000", price: 45000 },
    { id: "launch", kind: "One-Time Project", name: "Launch Campaign", short: "From EGP 60,000", price: 60000 },
  ];

  const state = {
    activeServiceId: SERVICES[0].id,
    workView: "gallery",
    workFilter: "all",
    calMode: "weekly",
    philIndex: 0,
    planTab: "monthly",
    selectedScopeId: "growth",
    selectedAddons: new Set(),
    hasSignature: false,
    modalPost: null,
    modalSlide: 0,
  };

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function showToast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("on"), 2600);
  }

  /* ---------- View-only image protection ---------- */
  document.addEventListener("contextmenu", (e) => {
    if (e.target && e.target.tagName === "IMG") e.preventDefault();
  });
  document.addEventListener("dragstart", (e) => {
    if (e.target && e.target.tagName === "IMG") e.preventDefault();
  });

  /* ---------- Chapter 02: Interactive Numbered Services ---------- */
  function renderServices() {
    const list = $("#svcList");
    if (!list) return;
    list.innerHTML = SERVICES.map((s) => {
      const on = s.id === state.activeServiceId;
      return `
        <button class="svc-row${on ? " on" : ""}" type="button" role="tab"
                aria-selected="${on}" data-svc="${s.id}">
          <span class="num">${s.num}</span>
          <span>
            <strong>${s.name}</strong>
            <small>${s.short}</small>
          </span>
          <span class="arr" aria-hidden="true">→</span>
        </button>`;
    }).join("");

    $$(".svc-row", list).forEach((btn) => {
      const activate = () => {
        if (state.activeServiceId === btn.dataset.svc) return;
        state.activeServiceId = btn.dataset.svc;
        $$(".svc-row", list).forEach((b) => {
          const isOn = b.dataset.svc === state.activeServiceId;
          b.classList.toggle("on", isOn);
          b.setAttribute("aria-selected", String(isOn));
        });
        renderServicePreview();
      };
      btn.addEventListener("mouseenter", activate);
      btn.addEventListener("focus", activate);
      btn.addEventListener("click", activate);
    });

    renderServicePreview();
  }

  function renderServicePreview() {
    const box = $("#svcPreview");
    const s = SERVICES.find((x) => x.id === state.activeServiceId) || SERVICES[0];
    if (!box || !s) return;
    const added = state.selectedAddons.has(s.id);
    const img = SERVICE_ART[s.id] || "assets/brand/launch-carousel.webp";

    box.innerHTML = `
      <div class="svc-preview-art">
        <span class="tag">${s.num} · ${s.cat.toUpperCase()}</span>
        <img src="${img}" alt="${s.name}">
      </div>
      <div class="svc-preview-body">
        <span class="pill cob" style="margin-bottom:10px">${s.tier}</span>
        <h3 class="h-md">${s.name}</h3>
        <p style="margin:8px 0 0;font-size:14px;color:var(--muted)">${s.short}</p>
        <ul>${s.deliverables.map((d) => `<li><span>${d}</span></li>`).join("")}</ul>
        <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
          <button class="btn ${added ? "green" : "cobalt"} sm" type="button" id="svcAddBtn">
            ${added ? "✓ Added to Your Brief" : "+ Add to My Brief →"}
          </button>
          <a class="btn line sm" href="#sign">Go to Sign Desk</a>
        </div>
      </div>`;

    const addBtn = $("#svcAddBtn", box);
    addBtn.addEventListener("click", () => {
      if (state.selectedAddons.has(s.id)) {
        state.selectedAddons.delete(s.id);
        showToast(`Removed "${s.name}" from your brief`);
      } else {
        state.selectedAddons.add(s.id);
        showToast(`Added "${s.name}" to your brief`);
      }
      renderServicePreview();
      renderAddons();
      updateSummary();
    });
  }

  /* ---------- Chapter 03: Selected Work & November Calendar ---------- */
  function fmtDue(iso) {
    const d = new Date(iso);
    const mon = d.toLocaleString("en-US", { month: "short" });
    const day = d.getDate();
    const dow = d.toLocaleString("en-US", { weekday: "short" });
    const time = d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    return { dow, date: `${mon} ${day}`, time, day, month: d.getMonth() };
  }

  function renderWorkGrid() {
    const grid = $("#workGrid");
    if (!grid) return;
    const filtered = POSTS.filter((p) => {
      if (state.workFilter === "all") return true;
      if (state.workFilter === "live" || state.workFilter === "next") return p.status === state.workFilter;
      return p.kind === state.workFilter;
    });

    grid.innerHTML = filtered.map((p) => {
      const cnt = p.slides.length > 1 ? `${p.slides.length} slides` : p.kind;
      const badge = p.status === "live" ? "Live · @be.bossss" : "November Drop";
      return `
        <button class="work-card" type="button" data-post="${p.id}">
          <div class="work-thumb">
            <img src="${p.art}" alt="${p.title}" loading="lazy">
            <span class="cnt">${cnt}</span>
          </div>
          <div class="work-meta">
            <strong>${p.title}</strong>
            <span>${badge}</span>
          </div>
          <p class="work-sub">${p.format}</p>
        </button>`;
    }).join("");

    $$(".work-card", grid).forEach((card) => {
      card.addEventListener("click", () => openPostModal(card.dataset.post));
    });
  }

  function renderCalendarWeekly() {
    const wrap = $("#calWeekly");
    if (!wrap) return;
    const sorted = [...POSTS].sort((a, b) => new Date(a.due) - new Date(b.due));
    const groups = [
      { label: "Kickoff & Launch Week (Oct 30 – Nov 7)", items: [] },
      { label: "Week 2 · Authority & Craft (Nov 8 – Nov 19)", items: [] },
      { label: "Week 3 · Performance & Conversion (Nov 20 – Nov 24)", items: [] },
    ];
    sorted.forEach((p) => {
      const t = new Date(p.due).getTime();
      if (t <= new Date("2026-11-08T00:00").getTime()) groups[0].items.push(p);
      else if (t <= new Date("2026-11-19T23:59").getTime()) groups[1].items.push(p);
      else groups[2].items.push(p);
    });

    wrap.innerHTML = groups.map((g) => `
      <div class="week-h">
        <span>${g.label}</span>
        <span>${g.items.length} drops</span>
      </div>
      ${g.items.map((p) => {
        const dt = fmtDue(p.due);
        const thumbs = p.slides.slice(0, 4).map((s) => `<img src="${slideSrc(s)}" alt="" loading="lazy">`).join("");
        return `
          <button class="cal-row" type="button" data-post="${p.id}">
            <div class="d">
              <small>${dt.dow.toUpperCase()}</small>
              <b>${dt.date}</b>
              <em>${dt.time}</em>
            </div>
            <div>
              <h3>${p.title}</h3>
              <p>${p.format}</p>
            </div>
            <div class="thumbs">${thumbs}</div>
            <span class="pill ${p.status === "live" ? "live" : "next"}">${p.status === "live" ? "Live" : "Upcoming"}</span>
          </button>`;
      }).join("")}
    `).join("");

    $$(".cal-row", wrap).forEach((row) => {
      row.addEventListener("click", () => openPostModal(row.dataset.post));
    });
  }

  function renderCalendarMonth() {
    const wrap = $("#calMonth");
    if (!wrap) return;
    // November 2026 starts on Sunday (0) and has 30 days
    const dows = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const byDay = new Map();
    POSTS.forEach((p) => {
      const d = new Date(p.due);
      if (d.getMonth() === 10) byDay.set(d.getDate(), p); // November = 10
    });

    let html = `<div class="month">`;
    html += dows.map((d) => `<div class="dow">${d}</div>`).join("");
    for (let day = 1; day <= 30; day++) {
      const p = byDay.get(day);
      if (p) {
        html += `
          <button class="day has${p.status === "live" ? " live" : ""}" type="button" data-post="${p.id}" title="${p.title}">
            <span>${day}</span>
            <img src="${p.art}" alt="" loading="lazy">
            <small>${p.title}</small>
            <i></i>
          </button>`;
      } else {
        html += `<div class="day"><span>${day}</span></div>`;
      }
    }
    html += `</div>`;
    wrap.innerHTML = html;

    $$(".day.has", wrap).forEach((el) => {
      el.addEventListener("click", () => openPostModal(el.dataset.post));
    });
  }

  function initWorkControls() {
    $$("#workTabs .tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.workView = btn.dataset.view;
        $$("#workTabs .tab").forEach((b) => {
          const on = b.dataset.view === state.workView;
          b.classList.toggle("on", on);
          b.setAttribute("aria-selected", String(on));
        });
        $("#workGalleryWrap").hidden = state.workView !== "gallery";
        $("#workCalWrap").hidden = state.workView !== "calendar";
      });
    });

    $$("#workChips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        state.workFilter = chip.dataset.filter;
        $$("#workChips .chip").forEach((c) => c.classList.toggle("on", c === chip));
        renderWorkGrid();
      });
    });

    $$("#calModeTabs .tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.calMode = btn.dataset.mode;
        $$("#calModeTabs .tab").forEach((b) => b.classList.toggle("on", b === btn));
        $("#calWeekly").hidden = state.calMode !== "weekly";
        $("#calMonth").hidden = state.calMode !== "month";
      });
    });
  }

  /* ---------- View-Only Post Modal ---------- */
  function openPostModal(postId) {
    const p = POSTS.find((x) => x.id === postId);
    if (!p) return;
    state.modalPost = p;
    state.modalSlide = 0;

    const dt = fmtDue(p.due);
    $("#mTitle").textContent = p.title;
    $("#mFormat").textContent = p.format;
    $("#mStatus").textContent = p.status === "live" ? "Live on @be.bossss" : "Scheduled · November";
    $("#mStatus").className = "pill " + (p.status === "live" ? "live" : "next");
    $("#mDue").textContent = `${dt.dow}, ${dt.date}, 2026 · ${dt.time} Cairo`;
    $("#mCap").textContent = p.caption;
    $("#mTags").textContent = p.hashtags || "";

    const igLink = $("#mIg");
    igLink.href = p.url || "https://www.instagram.com/be.bossss/";
    igLink.textContent = p.url ? "View Live Post on @be.bossss ↗" : "Follow @be.bossss for Drop ↗";

    const slides = p.slides && p.slides.length ? p.slides.map(slideSrc) : [p.art];
    $("#mTrack").innerHTML = slides.map((src, i) => `<img src="${src}" alt="${p.title} slide ${i + 1}">`).join("");
    $("#mDots").innerHTML = slides.map((_, i) => `<i class="${i === 0 ? "on" : ""}"></i>`).join("");

    const multi = slides.length > 1;
    $("#mPrev").hidden = !multi;
    $("#mNext").hidden = !multi;
    $("#mDots").hidden = !multi;

    updateModalSlide();
    $("#postModal").hidden = false;
    document.body.style.overflow = "hidden";
  }

  function updateModalSlide() {
    if (!state.modalPost) return;
    const total = Math.max(1, state.modalPost.slides.length);
    state.modalSlide = (state.modalSlide + total) % total;
    $("#mTrack").style.transform = `translateX(-${state.modalSlide * 100}%)`;
    $$("#mDots i").forEach((d, i) => d.classList.toggle("on", i === state.modalSlide));
  }

  function closePostModal() {
    $("#postModal").hidden = true;
    document.body.style.overflow = "";
    state.modalPost = null;
  }

  function initPostModal() {
    $("#mClose").addEventListener("click", closePostModal);
    $("#postModal").addEventListener("click", (e) => {
      if (e.target === $("#postModal")) closePostModal();
    });
    $("#mPrev").addEventListener("click", () => { state.modalSlide--; updateModalSlide(); });
    $("#mNext").addEventListener("click", () => { state.modalSlide++; updateModalSlide(); });
    $("#mBrief").addEventListener("click", () => closePostModal());

    // Touch swipe inside modal slider
    let startX = 0;
    const slider = $("#mSlider");
    slider.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    slider.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        state.modalSlide += dx < 0 ? 1 : -1;
        updateModalSlide();
      }
    }, { passive: true });

    document.addEventListener("keydown", (e) => {
      if ($("#postModal").hidden) return;
      if (e.key === "Escape") closePostModal();
      if (e.key === "ArrowLeft") { state.modalSlide--; updateModalSlide(); }
      if (e.key === "ArrowRight") { state.modalSlide++; updateModalSlide(); }
    });
  }

  /* ---------- Chapter 04: Philosophy Craft Lab ---------- */
  function renderPhilosophy() {
    const stepsEl = $("#philSteps");
    if (!stepsEl) return;

    const cur = PHILOSOPHY_STEPS[state.philIndex];
    $("#philBadge").textContent = cur.badge;
    $("#philImg").src = cur.img;
    $("#philImg").alt = cur.title;
    $("#philTitle").textContent = cur.title;
    $("#philDesc").textContent = cur.desc;

    stepsEl.innerHTML = PHILOSOPHY_STEPS.map((st, idx) => `
      <button class="phil-step${idx === state.philIndex ? " on" : ""}" type="button" data-pidx="${idx}">
        <b>${st.num}</b>
        <div>
          <strong>${st.label}</strong>
          <span>${st.sub}</span>
        </div>
      </button>`).join("");

    $$(".phil-step", stepsEl).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.philIndex = Number(btn.dataset.pidx);
        renderPhilosophy();
      });
    });
  }

  /* ---------- Chapter 05: Plans & FAQs ---------- */
  function renderPlans() {
    const grid = $("#plansGrid");
    if (!grid) return;

    if (state.planTab === "monthly") {
      const list = [MONTHLY_PLANS.starter, MONTHLY_PLANS.growth, MONTHLY_PLANS.boss];
      grid.innerHTML = list.map((p) => {
        const picked = state.selectedScopeId === p.id;
        return `
          <article class="card plan${p.cobalt ? " dark" : ""}${picked ? " pick-on" : ""}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
              <h3 class="h-md">${p.name}</h3>
              ${p.badge ? `<span class="pill ${p.cobalt ? "next" : "cob"}">${p.badge}</span>` : ""}
            </div>
            <p style="margin:0;font-size:13.5px;opacity:.78">${p.tagline}</p>
            <div class="price">${fmtEGP(p.price)} <small>/ month + VAT</small></div>
            <ul>
              ${p.bullets.map((b) => `<li class="${b.included ? "" : "no"}"><span>${b.text}</span></li>`).join("")}
            </ul>
            <button class="btn ${p.cobalt ? "pink" : "cobalt"}" type="button" data-pick="${p.id}">
              ${picked ? "Selected · Go to Sign →" : `Choose ${p.name} →`}
            </button>
          </article>`;
      }).join("");
    } else {
      const list = [ONETIME_PROJECTS.strategy, ONETIME_PROJECTS.identity, ONETIME_PROJECTS.launch];
      grid.innerHTML = list.map((p, idx) => {
        const dark = idx === 2;
        const picked = state.selectedScopeId === p.id;
        return `
          <article class="card plan${dark ? " dark" : ""}${picked ? " pick-on" : ""}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
              <h3 class="h-md">${p.name}</h3>
              <span class="pill ${dark ? "next" : "cob"}">One-Time</span>
            </div>
            <p style="margin:0;font-size:13.5px;opacity:.78">${p.terms}</p>
            <div class="price">${idx === 2 ? "From " : ""}${fmtEGP(p.price)} <small>+ VAT</small></div>
            <ul>${p.items.map((it) => `<li><span>${it}</span></li>`).join("")}</ul>
            <button class="btn ${dark ? "pink" : "cobalt"}" type="button" data-pick="${p.id}">
              ${picked ? "Selected · Go to Sign →" : `Choose Project →`}
            </button>
          </article>`;
      }).join("");
    }

    $$("[data-pick]", grid).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedScopeId = btn.dataset.pick;
        renderPlans();
        renderScopeOpts();
        updateSummary();
        $("#sign").scrollIntoView({ behavior: "smooth" });
        showToast("Plan selected — ready for your Boarding Pass");
      });
    });
  }

  function renderFaqs() {
    const box = $("#faqList");
    if (!box) return;
    box.innerHTML = FAQS.map((f, i) => `
      <div class="faq${i === 0 ? " open" : ""}">
        <button type="button" aria-expanded="${i === 0}">
          <span>${f.q}</span>
          <span aria-hidden="true">${i === 0 ? "–" : "+"}</span>
        </button>
        <p>${f.a}</p>
      </div>`).join("");

    $$(".faq button", box).forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(open));
        btn.lastElementChild.textContent = open ? "–" : "+";
      });
    });
  }

  function initPlanTabs() {
    $$("#planTabs .tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.planTab = btn.dataset.ptab;
        $$("#planTabs .tab").forEach((b) => {
          const on = b === btn;
          b.classList.toggle("on", on);
          b.setAttribute("aria-selected", String(on));
        });
        renderPlans();
      });
    });
  }

  /* ---------- Chapter 06: Boarding Pass, Scope & Digital Signature ---------- */
  function renderScopeOpts() {
    const box = $("#scopeOpts");
    if (!box) return;
    box.innerHTML = SCOPES.map((sc) => `
      <button class="opt${sc.id === state.selectedScopeId ? " on" : ""}" type="button" data-scope="${sc.id}">
        <b>${sc.name}</b>
        <small>${sc.short}</small>
      </button>`).join("");

    $$(".opt", box).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedScopeId = btn.dataset.scope;
        renderScopeOpts();
        renderPlans();
        updateSummary();
      });
    });
  }

  function renderAddons() {
    const box = $("#addonBtns");
    if (!box) return;
    box.innerHTML = SERVICES.map((s) => {
      const on = state.selectedAddons.has(s.id);
      return `<button class="${on ? "on" : ""}" type="button" data-addon="${s.id}">${s.num} · ${s.name.split(" and ")[0]}</button>`;
    }).join("");

    $$("button", box).forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.addon;
        if (state.selectedAddons.has(id)) state.selectedAddons.delete(id);
        else state.selectedAddons.add(id);
        renderAddons();
        renderServicePreview();
        updateSummary();
      });
    });
  }

  function updateSummary() {
    const sc = SCOPES.find((x) => x.id === state.selectedScopeId) || SCOPES[1];
    const addonsList = SERVICES.filter((s) => state.selectedAddons.has(s.id));
    const addonTotal = addonsList.reduce((acc, s) => acc + s.customFee, 0);
    const sub = sc.price + addonTotal;
    const vat = Math.round(sub * 0.14);
    const total = sub + vat;

    const brand = ($("#inBrand").value || "").trim();
    $("#tName").textContent = brand ? brand.toUpperCase() : "YOUR BRAND";
    $("#tScope").textContent = sc.name.toUpperCase();

    $("#sumTitle").textContent = sc.name;
    $("#sumType").textContent = sc.kind;
    $("#sumAddons").textContent = addonsList.length
      ? `Add-ons: ${addonsList.map((s) => s.name).join(" · ")}`
      : "No extra add-ons selected";
    $("#sumSub").textContent = fmtEGP(sub);
    $("#sumVat").textContent = fmtEGP(vat);
    $("#sumTotal").textContent = fmtEGP(total);
  }

  function buildBriefText() {
    const sc = SCOPES.find((x) => x.id === state.selectedScopeId) || SCOPES[1];
    const addonsList = SERVICES.filter((s) => state.selectedAddons.has(s.id));
    const sub = sc.price + addonsList.reduce((a, s) => a + s.customFee, 0);
    const vat = Math.round(sub * 0.14);
    const total = sub + vat;

    const brand = ($("#inBrand").value || "New Brand").trim();
    const role = ($("#inRole").value || "Not provided").trim();
    const phone = ($("#inPhone").value || "Not provided").trim();
    const email = ($("#inEmail").value || "Not provided").trim();
    const notes = ($("#inNotes").value || "Let's schedule our kickoff call.").trim();

    return [
      "BEBOSS · SIGNED CLIENT BOARDING PASS",
      "-------------------------------------",
      `Brand: ${brand}`,
      `Contact: ${role}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Selected Scope: ${sc.name} (${sc.kind})`,
      `Add-On Services: ${addonsList.length ? addonsList.map((s) => s.name).join(", ") : "None"}`,
      `Estimated Investment: ${fmtEGP(sub)} + 14% VAT (${fmtEGP(vat)}) = ${fmtEGP(total)}`,
      `Digital Signature: ${state.hasSignature ? "Signed on BeBosS Web Desk" : "Pending kickoff signature"}`,
      `Project Notes: ${notes}`,
      "-------------------------------------",
      "BE YOUR OWN BOSS.",
    ].join("\n");
  }

  function initSignaturePad() {
    const canvas = $("#sigCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let drawing = false;

    function prepCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.max(window.devicePixelRatio || 1, 1);
      if (rect.width > 0 && (canvas.width !== Math.round(rect.width * dpr))) {
        canvas.width = Math.round(rect.width * dpr);
        canvas.height = Math.round(148 * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.lineWidth = 2.4;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#10153A";
      }
    }
    prepCanvas();
    window.addEventListener("resize", () => {
      if (!state.hasSignature) prepCanvas();
    });

    function getPt(e) {
      const rect = canvas.getBoundingClientRect();
      const src = e.touches ? e.touches[0] : e;
      return { x: src.clientX - rect.left, y: src.clientY - rect.top };
    }

    function start(e) {
      prepCanvas();
      drawing = true;
      const pt = getPt(e);
      ctx.beginPath();
      ctx.moveTo(pt.x, pt.y);
      if (!state.hasSignature) {
        state.hasSignature = true;
        $("#sigHint").hidden = true;
        $("#sigStatus").textContent = "Signed ✓";
        $("#sigStatus").className = "pill live";
      }
    }

    function move(e) {
      if (!drawing) return;
      if (e.cancelable) e.preventDefault();
      const pt = getPt(e);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }

    function end() { drawing = false; }

    canvas.addEventListener("pointerdown", start);
    canvas.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);

    $("#sigClear").addEventListener("click", () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      state.hasSignature = false;
      $("#sigHint").hidden = false;
      $("#sigStatus").textContent = "Awaiting signature";
      $("#sigStatus").className = "pill cob";
    });
  }

  function initSignActions() {
    $("#inBrand").addEventListener("input", updateSummary);

    $("#btnSendWA").addEventListener("click", () => {
      const url = `https://wa.me/201003000607?text=${encodeURIComponent(buildBriefText())}`;
      window.open(url, "_blank", "noopener");
      showToast("Opening WhatsApp with your signed brief");
    });

    $("#btnSendMail").addEventListener("click", () => {
      const brand = ($("#inBrand").value || "New Client").trim();
      const subj = `BeBosS Signed Project Brief — ${brand}`;
      window.location.href = `mailto:beboss.creative@outlook.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(buildBriefText())}`;
      showToast("Opening email draft to beboss.creative@outlook.com");
    });

    $("#btnCopyBrief").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(buildBriefText());
        showToast("Signed brief copied to clipboard");
      } catch {
        showToast("Use WhatsApp or Email buttons to dispatch");
      }
    });
  }

  /* ---------- Scroll Spy for Top Nav & Mobile Bottom Nav ---------- */
  function initScrollSpy() {
    const sections = ["about", "services", "work", "philosophy", "plans", "sign", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const id = en.target.id;
          $$("#topNav a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + id));
          $$("#bnav a").forEach((a) => a.classList.toggle("on", a.dataset.sec === id));
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
  }

  /* ---------- Init ---------- */
  renderServices();
  renderWorkGrid();
  renderCalendarWeekly();
  renderCalendarMonth();
  initWorkControls();
  initPostModal();
  renderPhilosophy();
  renderPlans();
  renderFaqs();
  initPlanTabs();
  renderScopeOpts();
  renderAddons();
  updateSummary();
  initSignaturePad();
  initSignActions();
  initScrollSpy();
})();
