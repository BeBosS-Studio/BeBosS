/* BeBosS · 100% Sales-Driven 3-Step Closing Circuit Data */

const BRAND_CRAFT = [
  {
    id: "craft-briefcase",
    img: "assets/slides/final-say-yours-04.webp",
    tag: "IDENTITY SYSTEM",
    title: "Carry your own case.",
    caption: "Tactile navy leather, cream corner hardware, and one deliberate pink tag — built to command a room before you speak."
  },
  {
    id: "craft-monitor",
    img: "assets/slides/final-say-yours-01.webp",
    tag: "CREATIVE DIRECTION",
    title: "Turn off the noise.",
    caption: "Studio art direction engineered to stop the scroll in 1 second across Egypt and the GCC."
  },
  {
    id: "craft-switch",
    img: "assets/slides/final-say-yours-05.webp",
    tag: "CAMPAIGN DESIGN",
    title: "One switch away.",
    caption: "Bold cobalt architecture anchored by high-contrast typography and unmistakable brand recall."
  },
  {
    id: "craft-vinyl",
    img: "assets/slides/final-say-yours-02.webp",
    tag: "VISUAL CRAFT",
    title: "Play your own record.",
    caption: "Every frame is directed under one studio standard — zero stock templates, zero generic agency filler."
  },
  {
    id: "craft-gavel",
    img: "assets/slides/final-say-yours-06.webp",
    tag: "BRAND AUTHORITY",
    title: "Final say. Yours.",
    caption: "From brand book to filming crew to paid growth — we build category leaders that own the shelf and the feed."
  },
  {
    id: "craft-top",
    img: "assets/slides/final-say-yours-03.webp",
    tag: "MOTION & OBJECTS",
    title: "Keep it spinning.",
    caption: "Commercial 3D, reels, and physical brand worlds that stay top-of-mind long after the first impression."
  }
];

const GOALS = {
  launch: {
    id: "launch",
    num: "01",
    label: "Launch New",
    short: "Need strategy, brand identity, and day-one market authority.",
    recommendedPlan: "identity",
    recommendedTab: "onetime",
    recText: "Brand Identity Project (EGP 45,000) — complete logo system, visual identity & brand book, 50/50 payment."
  },
  grow: {
    id: "grow",
    num: "02",
    label: "Ready to Grow",
    short: "Need our filming crew, monthly reels, bilingual content & paid ads.",
    recommendedPlan: "growth",
    recommendedTab: "monthly",
    recText: "Growth Plan (EGP 38,000/mo) — 1 monthly filming day, 6 crew-filmed reels, 16 posts & paid ads management."
  },
  own: {
    id: "own",
    num: "03",
    label: "Own the Category",
    short: "Want the full 360° studio behind you across up to 4 platforms.",
    recommendedPlan: "boss",
    recommendedTab: "monthly",
    recText: "Boss Plan (EGP 60,000/mo) — 2 filming days/mo, 10 crew reels, Meta + TikTok + Google ads & dedicated art director."
  }
};

const MONTHLY_PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: "",
    tagline: "For new brands building a sharp, consistent presence.",
    priceLabel: "EGP 20,000",
    unit: "/ month",
    featured: false,
    dark: false,
    bullets: [
      "2 social platforms managed",
      "12 designed posts & carousels",
      "2 edited reels + 8 stories / mo",
      "English & Arabic copywriting",
      "Comment management & monthly report"
    ]
  },
  {
    id: "growth",
    name: "Growth",
    badge: "MOST POPULAR",
    tagline: "For brands ready to scale with our filming crew & paid ads.",
    priceLabel: "EGP 38,000",
    unit: "/ month",
    featured: true,
    dark: false,
    bullets: [
      "3 platforms · 16 posts & carousels",
      "1 on-location filming day / month",
      "6 crew-filmed reels + 15 stories / mo",
      "Paid ads managed on 1 platform",
      "Comments & DMs managed + review call"
    ]
  },
  {
    id: "boss",
    name: "Boss",
    badge: "FULL 360° STUDIO",
    tagline: "For brands that want the entire BeBosS studio behind them.",
    priceLabel: "EGP 60,000",
    unit: "/ month",
    featured: false,
    dark: true,
    bullets: [
      "Up to 4 platforms · 20 posts & carousels",
      "2 on-location filming days / month",
      "10 crew-filmed reels + 25 stories / mo",
      "Paid ads on Meta, TikTok & Google",
      "Dedicated art director & daily DMs"
    ]
  }
];

const ONETIME_PLANS = [
  {
    id: "strategy",
    name: "Brand Strategy",
    badge: "ONE-TIME",
    tagline: "Lock your positioning, messaging, and 90-day growth roadmap.",
    priceLabel: "EGP 25,000",
    unit: "50% start · 50% delivery",
    featured: false,
    dark: false,
    bullets: [
      "Audience & market research (Egypt / GCC)",
      "Category positioning & differentiation",
      "Core bilingual messaging system",
      "90-day content & campaign roadmap"
    ]
  },
  {
    id: "identity",
    name: "Brand Identity",
    badge: "MOST POPULAR",
    tagline: "Everything your brand needs to look unmistakable from day one.",
    priceLabel: "EGP 45,000",
    unit: "50% start · 50% delivery",
    featured: true,
    dark: false,
    bullets: [
      "Wordmark, master marks & logo system",
      "Colour architecture & typography rules",
      "Brand voice & visual direction guide",
      "Social templates & complete brand book"
    ]
  },
  {
    id: "launch",
    name: "Launch Campaign",
    badge: "FULL LAUNCH",
    tagline: "Make your market entry impossible to miss.",
    priceLabel: "From EGP 60,000",
    unit: "Confirmed after discovery call",
    featured: false,
    dark: true,
    bullets: [
      "End-to-end launch strategy & concept",
      "Teaser & reveal content production",
      "Flagship launch film by our crew",
      "Creator seeding & rollout direction"
    ]
  }
];

const ALL_PLANS = [...MONTHLY_PLANS, ...ONETIME_PLANS];
