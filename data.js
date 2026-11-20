/* BeBosS · Seamless 3-Step Pocket-Pass Sales Journey Data */

const GOALS = {
  launch: {
    id: "launch",
    num: "01",
    code: "LAUNCH",
    label: "Launch New",
    short: "Build your strategy, unmistakable brand identity, and day-one market authority.",
    recommendedPlan: "identity",
    recommendedTab: "onetime",
    recLabel: "Brand Identity · EGP 45,000",
    recText: "Complete logo system, visual identity, typography law & brand book — 50% to start, 50% on delivery."
  },
  grow: {
    id: "grow",
    num: "02",
    code: "SCALE",
    label: "Scale Fast",
    short: "Deploy our in-house filming crew, monthly reels, bilingual content & paid ads that convert.",
    recommendedPlan: "growth",
    recommendedTab: "monthly",
    recLabel: "Growth Plan · EGP 38,000/mo",
    recText: "1 monthly filming day, 6 crew-filmed reels, 16 posts, comments & DMs + paid ads management."
  },
  own: {
    id: "own",
    num: "03",
    code: "DOMINATE",
    label: "Own the Category",
    short: "Put the entire 360° BeBosS studio behind your brand across up to 4 platforms.",
    recommendedPlan: "boss",
    recommendedTab: "monthly",
    recLabel: "Boss Plan · EGP 60,000/mo",
    recText: "2 monthly filming days, 10 crew-filmed reels, Meta + TikTok + Google ads & dedicated art director."
  }
};

const MONTHLY_PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: "",
    tagline: "For new brands building a sharp, consistent presence.",
    priceLabel: "EGP 20,000",
    shortPrice: "20k/mo",
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
    shortPrice: "38k/mo",
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
    shortPrice: "60k/mo",
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
    shortPrice: "25k",
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
    shortPrice: "45k",
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
    shortPrice: "60k+",
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
