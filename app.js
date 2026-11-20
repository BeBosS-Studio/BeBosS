/* ==========================================================================
   BeBosS · Seamless 3-Step Pocket-Pass Sales Journey Engine
   ========================================================================== */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // View-only media protection
  document.addEventListener("contextmenu", (e) => { if (e.target.tagName === "IMG") e.preventDefault(); });
  document.addEventListener("dragstart", (e) => { if (e.target.tagName === "IMG") e.preventDefault(); });

  const state = {
    goal: "grow",
    planTab: "monthly",
    planId: "growth",
    currentStep: 1
  };

  let toastTimer;
  const showToast = (msg) => {
    const t = $("#toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
  };

  const getPlan = (id = state.planId) => ALL_PLANS.find((p) => p.id === id) || MONTHLY_PLANS[1];

  const popPocket = () => {
    const dock = $("#pocketDock");
    if (!dock) return;
    dock.classList.remove("pop");
    void dock.offsetWidth;
    dock.classList.add("pop");

    const ticket = $("#liveTicket");
    if (ticket) {
      ticket.classList.remove("pulse");
      void ticket.offsetWidth;
      ticket.classList.add("pulse");
    }
  };

  // ---------- 1. Step 01 · Interactive Destination Cards ----------
  const renderGoals = () => {
    const grid = $("#goalGrid");
    if (!grid) return;
    grid.innerHTML = Object.values(GOALS).map((g) => `
      <button class="goal-card ${state.goal === g.id ? "on" : ""}" type="button" data-goal="${g.id}" role="tab" aria-selected="${state.goal === g.id}">
        <div class="goal-top"><small>${g.num} · ${g.code}</small><i aria-hidden="true">→</i></div>
        <strong>${g.label}</strong>
        <p>${g.short}</p>
      </button>
    `).join("");

    const cur = GOALS[state.goal];
    $("#recPill").textContent = `MATCHED · ${cur.label.toUpperCase()}`;
    $("#recLabel").textContent = cur.recLabel;
    $("#recText").textContent = cur.recText;
  };

  // ---------- 2. Step 02 · Pocket-Ready Packages ----------
  const renderPlans = () => {
    const grid = $("#plansGrid");
    if (!grid) return;
    const list = state.planTab === "monthly" ? MONTHLY_PLANS : ONETIME_PLANS;

    grid.innerHTML = list.map((p) => {
      const isSelected = state.planId === p.id;
      const cls = ["plan", p.featured ? "featured" : "", p.dark ? "dark" : "", isSelected ? "selected" : ""].filter(Boolean).join(" ");
      const btnCls = p.dark ? "btn pink" : (p.featured ? "btn cobalt" : "btn");
      return `
        <article class="${cls}">
          <div class="p-head">
            <h3>${p.name}</h3>
            ${p.badge ? `<span class="p-tag">${p.badge}</span>` : ""}
          </div>
          <p class="p-sub">${p.tagline}</p>
          <div class="p-price">
            <b>${p.priceLabel}</b>
            <span>${p.unit}</span>
          </div>
          <ul class="p-list">
            ${p.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
          <button class="${btnCls}" type="button" data-pick-plan="${p.id}" style="width:100%">
            ${isSelected ? `✓ In Your Pocket · Claim Pass →` : `Put ${p.name} in My Pocket →`}
          </button>
        </article>
      `;
    }).join("");
  };

  // ---------- 3. Step 03 · Live Boarding Pass + Pocket Dock Sync ----------
  const renderPlanPills = () => {
    const wrap = $("#planPills");
    if (!wrap) return;
    wrap.innerHTML = ALL_PLANS.map((p) => `
      <button class="ppill ${state.planId === p.id ? "on" : ""}" type="button" data-pill-plan="${p.id}">
        ${p.name}
      </button>
    `).join("");
  };

  const syncBoardingPass = () => {
    const plan = getPlan();
    const brand = ($("#inBrand")?.value || "").trim();
    const name = ($("#inName")?.value || "").trim();
    const phone = ($("#inPhone")?.value || "").trim();

    $("#tName").textContent = (brand || "YOUR BRAND").toUpperCase();
    const unitShort = plan.unit.includes("month") ? "/MO" : "";
    $("#tPlan").textContent = `${plan.name.toUpperCase()} · ${plan.priceLabel.toUpperCase()}${unitShort}`;
    $("#pocketTitle").textContent = `${plan.name} · ${plan.shortPrice}`;

    const ready = Boolean(brand || name || phone);
    $("#tStep3")?.classList.toggle("ok", ready);
  };

  const buildBriefMessage = () => {
    const plan = getPlan();
    const goal = GOALS[state.goal];
    const brand = ($("#inBrand")?.value || "").trim() || "My Brand";
    const name = ($("#inName")?.value || "").trim() || "Not specified";
    const phone = ($("#inPhone")?.value || "").trim() || "Not specified";

    return [
      "Hi BeBosS — I'm claiming my Boarding Pass:",
      `• Brand: ${brand}`,
      `• Destination: ${goal.label}`,
      `• Package in My Pocket: ${plan.name} (${plan.priceLabel} ${plan.unit})`,
      `• Name: ${name}`,
      `• WhatsApp: ${phone}`,
      "",
      "Ready for our quick kickoff call!"
    ].join("\n");
  };

  // ---------- 4. Live 3-Step Flight Route Bar & Scroll Reveals ----------
  const updateFlightBar = (step) => {
    state.currentStep = step;
    const pct = step === 1 ? 0 : step === 2 ? 50 : 100;
    $("#flightFill").style.width = `${pct}%`;
    $("#flightPlane").style.left = `${pct}%`;

    $$(".flight-gate").forEach((btn) => {
      const s = Number(btn.dataset.step);
      btn.classList.toggle("cur", s === step);
      btn.classList.toggle("done", s < step);
    });

    $$("#topNav a").forEach((a, idx) => {
      a.classList.toggle("on", idx + 1 === step);
    });
  };

  const initObservers = () => {
    const sections = $$("[data-step-sec]");
    if (sections.length) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) updateFlightBar(Number(entry.target.dataset.stepSec));
        });
      }, { rootMargin: "-35% 0px -45% 0px", threshold: 0.05 });
      sections.forEach((sec) => io.observe(sec));
    }

    $$(".flight-gate").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = $(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        updateFlightBar(Number(btn.dataset.step));
      });
    });

    // Subtle luxury scroll-reveal
    const reveals = $$(".reveal");
    if (reveals.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveals.forEach((el) => el.classList.add("pre"));
      const rio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove("pre");
            rio.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
      reveals.forEach((el) => rio.observe(el));
    }
  };

  // ---------- Wire Interactions ----------
  const bindEvents = () => {
    $("#goalGrid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-goal]");
      if (!btn) return;
      state.goal = btn.dataset.goal;
      const g = GOALS[state.goal];
      state.planTab = g.recommendedTab;
      state.planId = g.recommendedPlan;

      $$("#planTabs .tab").forEach((t) => {
        const on = t.dataset.ptab === state.planTab;
        t.classList.toggle("on", on);
        t.setAttribute("aria-selected", String(on));
      });

      renderGoals();
      renderPlans();
      renderPlanPills();
      syncBoardingPass();
      popPocket();
      showToast(`${getPlan().name} matched & ready in your pocket`);
    });

    $("#planTabs").addEventListener("click", (e) => {
      const tab = e.target.closest("[data-ptab]");
      if (!tab) return;
      state.planTab = tab.dataset.ptab;
      $$("#planTabs .tab").forEach((t) => {
        const on = t === tab;
        t.classList.toggle("on", on);
        t.setAttribute("aria-selected", String(on));
      });
      renderPlans();
    });

    $("#plansGrid").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-pick-plan]");
      if (!btn) return;
      state.planId = btn.dataset.pickPlan;
      renderPlans();
      renderPlanPills();
      syncBoardingPass();
      popPocket();
      showToast(`${getPlan().name} is now in your pocket`);
      $("#step-3").scrollIntoView({ behavior: "smooth" });
    });

    $("#planPills").addEventListener("click", (e) => {
      const pill = e.target.closest("[data-pill-plan]");
      if (!pill) return;
      state.planId = pill.dataset.pillPlan;
      renderPlans();
      renderPlanPills();
      syncBoardingPass();
      popPocket();
    });

    ["#inBrand", "#inName", "#inPhone"].forEach((sel) => {
      $(sel)?.addEventListener("input", syncBoardingPass);
    });

    $("#btnSendWA").addEventListener("click", () => {
      const url = `https://wa.me/201003000607?text=${encodeURIComponent(buildBriefMessage())}`;
      window.open(url, "_blank", "noopener");
      showToast("Opening WhatsApp with your Boarding Pass…");
    });

    $("#btnSendMail").addEventListener("click", () => {
      const plan = getPlan();
      const brand = ($("#inBrand")?.value || "").trim() || "New Brand";
      const subject = `BeBosS Boarding Pass — ${brand} (${plan.name})`;
      window.location.href = `mailto:beboss.creative@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBriefMessage())}`;
    });
  };

  // Boot
  renderGoals();
  renderPlans();
  renderPlanPills();
  syncBoardingPass();
  updateFlightBar(1);
  initObservers();
  bindEvents();
})();
