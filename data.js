/* BeBosS site data · services, plans and the November content calendar */
const SERVICES = [
    {
      id: "brand-strategy",
      num: "01",
      name: "Brand strategy and identity systems",
      short: "Positioning, naming, visual architecture and complete brand books.",
      cat: "brand",
      customFee: 14000,
      tier: "Brand Identity Project (EGP 45,000) or Boss Plan",
      deliverables: [
        "Audience research, category positioning and core messaging",
        "Official wordmark, typography law and colour tokens",
        "Complete studio brand book and social templates",
        "90 day brand launch and content roadmap",
      ],
    },
    {
      id: "art-direction",
      num: "02",
      name: "Art direction and graphic design",
      short: "Campaign key visuals, social grids, packaging and studio direction.",
      cat: "brand",
      customFee: 10000,
      tier: "Starter (EGP 20,000/mo) and above",
      deliverables: [
        "Campaign key visuals built on one studio camera standard",
        "Designed feed posts, 3:4 carousels and daily stories",
        "Visual systems built to pass the 1 · 3 · 5 scroll test",
        "Dedicated or shared art director owning visual consistency",
      ],
    },
    {
      id: "video-motion",
      num: "03",
      name: "Video and motion production",
      short: "Commercial animation, 9:16 reels, filming crew and hyperreal renders.",
      cat: "production",
      customFee: 14000,
      tier: "Growth (EGP 38,000/mo · 1 filming day) or Boss (2 filming days)",
      deliverables: [
        "On location filming crew (included from Growth plan upwards)",
        "6 to 10 filmed and edited 9:16 reels per month",
        "3D motion graphics, sound design and platform cuts",
        "Storyboards and shot lists approved prior to every shoot",
      ],
    },
    {
      id: "content-campaign",
      num: "04",
      name: "Content and campaign systems",
      short: "Full funnel concepts, bilingual scripts and converting social ecosystems.",
      cat: "production",
      customFee: 9000,
      tier: "All Monthly Plans (Starter · Growth · Boss)",
      deliverables: [
        "Monthly editorial content calendar approved before going live",
        "Scroll stopping hooks, carousel arcs and reel scripts",
        "Copywriting in English and Arabic tailored to Egypt and the GCC",
        "Seasonal and launch campaign architectures that sell",
      ],
    },
    {
      id: "performance-growth",
      num: "05",
      name: "Performance and growth marketing",
      short: "Paid media creative, omnichannel funnels and conversion engineered ads.",
      cat: "growth",
      customFee: 12000,
      tier: "Growth (1 platform) or Boss (Meta, TikTok & Google)",
      deliverables: [
        "Campaign setup and optimization on Meta, TikTok and Google",
        "Conversion focused ad creatives and split testing",
        "Direct platform ad spend transparency (you pay platforms directly)",
        "Monthly performance reporting with clear next month actions",
      ],
    },
    {
      id: "web-experiences",
      num: "06",
      name: "Web experiences",
      short: "Flagship landing pages, interactive web journeys and conversion sites.",
      cat: "growth",
      customFee: 15000,
      tier: "Custom Project or Boss 360 Retainer",
      deliverables: [
        "Responsive landing pages and interactive brand websites",
        "Mobile first architecture built for Facebook and Instagram traffic",
        "Direct WhatsApp, email and booking conversion flows",
        "Fast edge hosting setup and custom domain configuration",
      ],
    },
    {
      id: "social-management",
      num: "07",
      name: "Social management",
      short: "Publishing, community management, comments, DMs and monthly insights.",
      cat: "production",
      customFee: 8000,
      tier: "Starter (2 platforms) · Growth (3) · Boss (Up to 4)",
      deliverables: [
        "Scheduling and publishing across Instagram, Facebook, TikTok and LinkedIn",
        "Active comment management and daily DM handling from Growth up",
        "Reply SLA within 4 working hours from one account manager",
        "Monthly analytics report and growth review call",
      ],
    },
    {
      id: "events-activations",
      num: "08",
      name: "Events and activations",
      short: "Launch moments, pop up branding, PR plans and experiential rollouts.",
      cat: "physical",
      customFee: 12000,
      tier: "Launch Campaign (From EGP 60,000) or Custom Contract",
      deliverables: [
        "Brand launch activations and physical spatial direction",
        "Creator seeding, press kits and opening night coverage",
        "On site photo and reel capture crew",
        "Environmental signage and booth visual systems",
      ],
    },
    {
      id: "print-packaging",
      num: "09",
      name: "Print and packaging",
      short: "Tactile packaging systems, print catalogues and unboxing craft.",
      cat: "physical",
      customFee: 10000,
      tier: "Brand Identity Add On or Custom Contract",
      deliverables: [
        "Structural packaging direction and print ready dielines",
        "Labels, boxes, bags, menus and retail collateral",
        "Colour controlled CMYK and Pantone production specs",
        "Complete print supervision guidelines for vendors",
      ],
    },
  ];

const MONTHLY_PLANS = {
    starter: {
      id: "starter",
      name: "Starter",
      badge: "",
      tagline: "For new brands finding their voice.",
      price: 20000,
      cobalt: false,
      bullets: [
        { text: "2 platforms", included: true },
        { text: "12 designed posts and carousels", included: true },
        { text: "2 reels, edited from your footage", included: true },
        { text: "8 stories a month", included: true },
        { text: "Content plan and calendar", included: true },
        { text: "Copy in English and Arabic", included: true },
        { text: "Comments managed", included: true },
        { text: "Monthly report · Shared art director · 2 revisions", included: true },
        { text: "Filming crew joins from Growth up", included: false },
        { text: "Paid ads management from Growth up", included: false },
      ],
    },
    growth: {
      id: "growth",
      name: "Growth",
      badge: "RECOMMENDED",
      tagline: "For brands ready to grow their audience.",
      price: 38000,
      cobalt: false,
      bullets: [
        { text: "3 platforms", included: true },
        { text: "16 designed posts and carousels", included: true },
        { text: "6 reels, filmed by our crew", included: true },
        { text: "1 filming day a month", included: true },
        { text: "15 stories a month", included: true },
        { text: "Content plan and calendar", included: true },
        { text: "Copy in English and Arabic", included: true },
        { text: "Comments and DMs managed", included: true },
        { text: "Ads managed on 1 platform", included: true },
        { text: "Monthly report & review call · Shared art director", included: true },
      ],
    },
    boss: {
      id: "boss",
      name: "Boss",
      badge: "FULL TEAM",
      tagline: "For brands that want the whole studio behind them.",
      price: 60000,
      cobalt: true,
      bullets: [
        { text: "Up to 4 platforms", included: true },
        { text: "20 designed posts and carousels", included: true },
        { text: "10 reels, filmed by our crew", included: true },
        { text: "2 filming days a month", included: true },
        { text: "25 stories a month", included: true },
        { text: "Content plan and calendar", included: true },
        { text: "Copy in English and Arabic", included: true },
        { text: "Comments and DMs, daily", included: true },
        { text: "Ads on Meta, TikTok and Google", included: true },
        { text: "Dedicated art director · Strategy session · 3 revisions", included: true },
      ],
    },
  };

const ONETIME_PROJECTS = {
    strategy: {
      id: "strategy",
      name: "Brand Strategy Project",
      price: 25000,
      terms: "One time project · 50% to start, 50% on delivery",
      items: ["Audience & market research", "Category positioning", "Core messaging system", "90 day content direction"],
    },
    identity: {
      id: "identity",
      name: "Brand Identity Project",
      price: 45000,
      terms: "One time project · 50% to start, 50% on delivery",
      items: ["Logo system & master marks", "Colours and typography", "Brand voice guide", "Social templates & complete brand book"],
    },
    launch: {
      id: "launch",
      name: "Launch Campaign Project",
      price: 60000,
      terms: "From EGP 60,000 · Confirmed after discovery call · 50/50 payment",
      items: ["Launch strategy", "Teaser and reveal content", "Flagship launch film", "Creator and press plan"],
    },
  };

const FAQS = [
    { q: "Why is filming not in Starter?", a: "Starter is built for brands with their own footage or product shots. Our crew joins from Growth, where video becomes the engine of the plan." },
    { q: "Can I switch plans?", a: "Yes. Move up at any time. Move down at the end of a 3 month term." },
    { q: "Do you guarantee followers or sales?", a: "We guarantee the work and the reporting. We set targets together at kickoff and show you exactly what moved each month." },
    { q: "Who owns the content?", a: "You do, once the month is paid. BeBosS keeps the right to show the work in its portfolio." },
    { q: "Can I add more posts or another filming day?", a: "Yes. Extra content or extra filming days are quoted as add ons, so you only pay for what you need." },
    { q: "How fast do you reply?", a: "Within 4 working hours on every working day, with one account manager as your main contact." },
    { q: "Do you work outside Cairo?", a: "Yes, across Egypt and the GCC. Filming outside Cairo includes travel costs." },
    { q: "Is the ad budget part of the fee?", a: "No. You pay the platform directly, so every pound of ad budget goes to your ads." },
  ];

  /* ========================================================================
     APPLICATION STATE
     ======================================================================== */

const POSTS = [
 {
  "id": "nov-01-final-say-yours",
  "title": "Final say. Yours.",
  "status": "live",
  "due": "2026-10-30T19:30",
  "kind": "Carousel",
  "format": "Carousel · 6 Slides",
  "caption": "Turn off the noise. Play your own record. Keep it spinning. Carry your own case. Flip the switch. Final say. Yours. BE YOUR OWN BOSS.",
  "hashtags": "#BeBosS #comingsoon #PickYourSeat",
  "url": "https://www.instagram.com/be.bossss/p/DfImnbyDOYN/",
  "slides": [
   "slides/final-say-yours-01.webp",
   "slides/final-say-yours-02.webp",
   "slides/final-say-yours-03.webp",
   "slides/final-say-yours-04.webp",
   "slides/final-say-yours-05.webp",
   "slides/final-say-yours-06.webp"
  ],
  "art": "assets/calendar/post-01-final-say-yours.webp"
 },
 {
  "id": "nov-02-opening-night",
  "title": "Opening night.",
  "status": "live",
  "due": "2026-10-31T14:00",
  "kind": "Carousel",
  "format": "Carousel · 4 Slides",
  "caption": "Ribbon taut. Slate up. Lights on. Door ajar. Four scenes, one set, built for the founder who runs the show. Be your own boss.",
  "hashtags": "#BeBosS #comingsoon",
  "url": "https://www.instagram.com/be.bossss/p/DfKoT83jGwj/",
  "slides": [
   "slides/opening-night-01.webp",
   "slides/opening-night-02.webp",
   "slides/opening-night-03.webp",
   "slides/opening-night-04.webp"
  ],
  "art": "assets/calendar/post-02-opening-night.webp"
 },
 {
  "id": "nov-03-40-colours",
  "title": "We tested 40 colours.",
  "status": "live",
  "due": "2026-11-03T19:30",
  "kind": "Carousel",
  "format": "Carousel · 5 Slides",
  "caption": "More than just colors. A whole identity. Every shade tells a story, every detail reflects who we are.",
  "hashtags": "#BeBosS #brandidentity #creativity #branding",
  "url": "https://www.instagram.com/be.bossss/p/DfSv--MjMdH/",
  "slides": [
   "slides/we-tested-40-colours-01.webp",
   "slides/we-tested-40-colours-02.webp",
   "slides/we-tested-40-colours-03.webp",
   "slides/we-tested-40-colours-04.webp",
   "slides/we-tested-40-colours-05.webp"
  ],
  "art": "assets/calendar/post-03-we-tested-40-colours.webp"
 },
 {
  "id": "nov-04-scroll-challenge",
  "title": "The scroll stopping challenge.",
  "status": "live",
  "due": "2026-11-07T20:30",
  "kind": "Reel",
  "format": "Reel · 28s",
  "caption": "No trend. No dancing. No shortcuts. Just creativity, a strong hook and a reason to stop scrolling.",
  "hashtags": "#BeBosS #creativecontent #contentcreation #creativeadvertising #reelsideas",
  "url": "https://www.instagram.com/be.bossss/reel/Dfc3ZtVsy4t/",
  "slides": [
   "slides/the-scroll-stopping-challenge-01.webp",
   "slides/the-scroll-stopping-challenge-02.webp",
   "slides/the-scroll-stopping-challenge-03.webp",
   "slides/the-scroll-stopping-challenge-04.webp",
   "slides/the-scroll-stopping-challenge-05.webp"
  ],
  "art": "assets/calendar/post-04-the-scroll-stopping-challenge.webp"
 },
 {
  "id": "nov-08-services-stack",
  "title": "Nine services. One roof.",
  "status": "live",
  "due": "2026-11-11T20:30",
  "kind": "Reel",
  "format": "Reel",
  "caption": "Nine services. One roof. Built for founders who are done juggling.",
  "hashtags": "#BeBosS #BrandStudio #CairoStartups #NewCairo #BrandIdentity",
  "url": "https://www.instagram.com/be.bossss/reel/DfnBoQIMnyf/",
  "slides": [
   "slides/nine-services-one-roof-01.webp"
  ],
  "art": "assets/calendar/post-08-the-services-stack.webp"
 },
 {
  "id": "nov-11-marketing-vs-ad",
  "title": "Marketing vs. advertising.",
  "status": "next",
  "due": "2026-11-17T19:30",
  "kind": "Carousel",
  "format": "6 slides Carousel",
  "caption": "Advertising is part of marketing, but marketing goes way beyond running ads.\nOne promotes the message. The other builds the entire strategy behind it.\nKnow the difference.\nSave this for your next marketing conversation.",
  "hashtags": "#BeBosS #marketingeducation #marketingstrategy #advertising #digitalmarketing",
  "url": "",
  "slides": [
   "slides/marketing-vs-advertising-01.webp",
   "slides/marketing-vs-advertising-02.webp",
   "slides/marketing-vs-advertising-03.webp",
   "slides/marketing-vs-advertising-04.webp",
   "slides/marketing-vs-advertising-05.webp",
   "slides/marketing-vs-advertising-06.webp"
  ],
  "art": "assets/calendar/post-11-marketing-vs-advertising.webp"
 },
 {
  "id": "nov-12-1-brief-3-directions",
  "title": "1 brief. 3 directions.",
  "status": "next",
  "due": "2026-11-18T19:30",
  "kind": "Carousel",
  "format": "5 slides Carousel",
  "caption": "1 brief. 3 different directions.\nA fictional energy drink. The same audience. The same launch objective.\nAmbition makes it a challenge. Momentum makes it a starting point. Belonging makes it a shared moment.\nThe brief gives us direction. Creativity gives your brand possibilities.\nBeBosS team.",
  "hashtags": "#BeBosS #CreativeConcept #ArtDirection #CampaignDesign",
  "url": "",
  "slides": [
   "slides/1-brief-3-directions-01.webp",
   "slides/1-brief-3-directions-02.webp",
   "slides/1-brief-3-directions-03.webp",
   "slides/1-brief-3-directions-04.webp",
   "slides/1-brief-3-directions-05.webp"
  ],
  "art": "assets/calendar/post-12-1-brief-3-directions.webp"
 },
 {
  "id": "nov-13-reach-isnt-relevance",
  "title": "Reach isn't relevance.",
  "status": "next",
  "due": "2026-11-19T19:30",
  "kind": "Carousel",
  "format": "5 slides Carousel",
  "caption": "Choose creators who reach your customer.\nA following shows scale. Audience location, life stage and interests help you judge fit.\nFor a Cairo homeware launch, compare who watches, how they respond and whether the content belongs beside your brand.\nReview recent work. Read the comments. Agree on the objective before the campaign begins.\nBeBosS team.",
  "hashtags": "#BeBosS #BeBosSStudio #MarketingAgency #BrandStrategy",
  "url": "",
  "slides": [
   "slides/reach-isn-t-relevance-01.webp",
   "slides/reach-isn-t-relevance-02.webp",
   "slides/reach-isn-t-relevance-03.webp",
   "slides/reach-isn-t-relevance-04.webp",
   "slides/reach-isn-t-relevance-05.webp"
  ],
  "art": "assets/calendar/post-13-reach-isnt-relevance.webp"
 },
 {
  "id": "nov-05-the-recipe",
  "title": "The recipe. (Day 08)",
  "status": "next",
  "due": "2026-11-20T14:00",
  "kind": "Carousel",
  "format": "5 slides Carousel",
  "caption": "THE RECIPE\nAI needs creative direction.\nStart with your audience, your context and your voice. Use AI to explore possibilities, then check the sources, the claims and the fit.\nWhat is your take on AI and creativity?\nBeBosS team",
  "hashtags": "#BeBosS #aimarketing #creativeprocess #brandstrategy",
  "url": "",
  "slides": [
   "slides/the-recipe-day-08-01.webp",
   "slides/the-recipe-day-08-02.webp",
   "slides/the-recipe-day-08-03.webp",
   "slides/the-recipe-day-08-04.webp",
   "slides/the-recipe-day-08-05.webp"
  ],
  "art": "assets/calendar/post-05-the-recipe.webp"
 },
 {
  "id": "nov-06-conversion-run",
  "title": "The conversion run. (Day 09)",
  "status": "next",
  "due": "2026-11-21T14:00",
  "kind": "Carousel",
  "format": "7 slides Carousel",
  "caption": "THE CONVERSION RUN\nGive every part of your ad a purpose.\nAttention. Relevance. Offer. Trust. Action.\nSave this before creating your next ad.\nBeBosS team",
  "hashtags": "#BeBosS #performancemarketing #advertisingstrategy #adcreative",
  "url": "",
  "slides": [
   "slides/the-conversion-run-day-09-01.webp",
   "slides/the-conversion-run-day-09-02.webp",
   "slides/the-conversion-run-day-09-03.webp",
   "slides/the-conversion-run-day-09-04.webp",
   "slides/the-conversion-run-day-09-05.webp",
   "slides/the-conversion-run-day-09-06.webp",
   "slides/the-conversion-run-day-09-07.webp"
  ],
  "art": "assets/calendar/post-06-the-conversion-run.webp"
 },
 {
  "id": "nov-07-the-relief",
  "title": "The relief. (Day 10)",
  "status": "next",
  "due": "2026-11-22T19:30",
  "kind": "Carousel",
  "format": "6 slides Carousel",
  "caption": "THE RELIEF\nMake the customer benefit clear.\nA feature tells people what something does. A benefit explains why that matters to them.\nSave this and rethink your product descriptions.\nBeBosS team",
  "hashtags": "#BeBosS #copywriting #brandcommunication #contentstrategy",
  "url": "",
  "slides": [
   "slides/the-relief-day-10-01.webp",
   "slides/the-relief-day-10-02.webp",
   "slides/the-relief-day-10-03.webp",
   "slides/the-relief-day-10-04.webp",
   "slides/the-relief-day-10-05.webp",
   "slides/the-relief-day-10-06.webp"
  ],
  "art": "assets/calendar/post-07-the-relief.webp"
 },
 {
  "id": "nov-09-the-crossroads",
  "title": "The crossroads. (Day 12)",
  "status": "next",
  "due": "2026-11-23T19:30",
  "kind": "Carousel",
  "format": "5 slides Carousel",
  "caption": "THE CROSSROADS\nGive people a clear next step.\nFind the offer. Check the message. Make the intended action easy to follow.\nComment your answers before swiping to the solution.\nBeBosS team",
  "hashtags": "#BeBosS #marketingchallenge #creativeaudit #advertisingdesign",
  "url": "",
  "slides": [
   "slides/the-crossroads-day-12-01.webp",
   "slides/the-crossroads-day-12-02.webp",
   "slides/the-crossroads-day-12-03.webp",
   "slides/the-crossroads-day-12-04.webp",
   "slides/the-crossroads-day-12-05.webp"
  ],
  "art": "assets/calendar/post-09-the-crossroads.webp"
 },
 {
  "id": "nov-10-domino-effect",
  "title": "The domino effect. (Day 13)",
  "status": "next",
  "due": "2026-11-24T19:30",
  "kind": "Carousel",
  "format": "5 slides Carousel",
  "caption": "THE DOMINO EFFECT\nBuild a position your audience can understand.\nStudy competitors to understand the market, then make decisions around your own audience, capabilities and promise.\nShare this with a business owner.\nBeBosS team",
  "hashtags": "#BeBosS #competitoranalysis #brandstrategy #businessgrowth",
  "url": "",
  "slides": [
   "slides/the-domino-effect-day-13-01.webp",
   "slides/the-domino-effect-day-13-02.webp",
   "slides/the-domino-effect-day-13-03.webp",
   "slides/the-domino-effect-day-13-04.webp",
   "slides/the-domino-effect-day-13-05.webp"
  ],
  "art": "assets/calendar/post-10-the-domino-effect.webp"
 }
];
