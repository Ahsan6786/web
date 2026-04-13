// =====================================================
// WEBIS — Static Data Layer
// =====================================================

export const services = [
  {
    id: "business",
    title: "Business Websites",
    description:
      "Professional, conversion-optimized websites that establish your brand's digital authority and turn visitors into customers.",
    icon: "Building2",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    description:
      "Stunning portfolio showcases that highlight your work with curated layouts, smooth galleries, and unforgettable first impressions.",
    icon: "Layers",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: "restaurant",
    title: "Restaurant Websites",
    description:
      "Mouth-watering digital experiences with online menus, reservation systems, and visual storytelling that drives foot traffic.",
    icon: "UtensilsCrossed",
    gradient: "from-orange-500 to-pink-400",
  },
  {
    id: "webapp",
    title: "Custom Web Apps",
    description:
      "Full-stack web applications tailored to your business logic — scalable, performant, and built with the latest technologies.",
    icon: "Code2",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export const projects = [
  {
    slug: "blingish",
    title: "Blingish – Premium Artificial Jewellery",
    category: "E-Commerce Store",
    description:
      "A luxurious, elegant e-commerce brand experience with a premium feminine aesthetic, smooth reveal animations, and a seamless shopping journey.",
    longDescription:
      "Blingish wanted a digital storefront that exuded the same luxury as their artificial jewellery collection. We crafted a highly immersive e-commerce experience using soft beige and rose gold tones, featuring edge-to-edge product storytelling and seamless cart integration. The result: a 340% increase in online sales during their launch month.",
    image: "/blingish-photos/1.png",
    gradient: "from-amber-400 to-orange-500",
    stats: { increase: "340%", metric: "Sales Growth" },
  },
  {
    slug: "bites-co",
    title: "Bites & Co",
    category: "Restaurant Website",
    description:
      "A modern restaurant website with online ordering, real-time table reservations, and dynamic menu management.",
    longDescription:
      "Bites & Co is a contemporary fusion restaurant that needed a website as vibrant as their menu. We delivered a full digital dining experience — from online ordering to table reservations. Online orders grew by 210% in the first month.",
    gradient: "from-rose-400 to-pink-500",
    stats: { increase: "210%", metric: "Online Orders" },
  },
  {
    slug: "nova-creative",
    title: "Nova Creative",
    category: "Portfolio Website",
    description:
      "A visually striking creative agency portfolio with case studies, animated transitions, and a custom CMS.",
    longDescription:
      "A fast-growing FinTech startup needed a secure, highly scalable platform to handle concurrent transactions and real-time data streaming. We architected a custom Nuxt & Node.js solution that led to a 150% boost in user acquisition within 6 weeks.",
    gradient: "from-violet-400 to-indigo-500",
    stats: { increase: "150%", metric: "User Acquisition" },
  },
  {
    slug: "taskflow-app",
    title: "TaskFlow App",
    category: "Custom Web App",
    description:
      "A B2B project management SaaS platform with real-time collaboration, Kanban boards, and AI task suggestions.",
    longDescription:
      "This architecture firm wanted a minimalist, ultra-fast portfolio that lets their work speak for itself. We built a custom CMS integration that allows them to effortlessly update their case studies, achieving a perfect PageSpeed score.",
    gradient: "from-emerald-400 to-cyan-500",
    stats: { increase: "100", metric: "Lighthouse Score" },
  },
  {
    slug: "atlas-finance",
    title: "Atlas Finance",
    category: "Business Website",
    description:
      "A trust-building financial advisory firm website with secure client portal and animated data visualizations.",
    longDescription:
      "We digitized physical healthcare consultations by building an intuitive telehealth portal. It features HIPAA-compliant WebRTC video calls, integrated calendar booking, and interactive patient history dashboards.",
    gradient: "from-sky-400 to-blue-500",
    stats: { increase: "3x", metric: "Booking Rate" },
  },
  {
    slug: "aria-fashion",
    title: "Aria Fashion",
    category: "E-Commerce",
    description:
      "A luxury fashion e-commerce experience with virtual try-on, editorial lookbooks, and a seamless checkout.",
    longDescription:
      "Created a robust learning management system for a prominent design agency, offering interactive courses, project submissions, and peer reviews. The platform now supports over 5,000 active concurrent students without breaking a sweat.",
    gradient: "from-fuchsia-400 to-rose-400",
    stats: { increase: "5k+", metric: "Active Students" },
  },
];

export const stats = [
  { label: "Projects Completed", value: 50, suffix: "+", description: "Across 12 countries" },
  { label: "Client Satisfaction", value: 98, suffix: "%", description: "5-star rated" },
  { label: "Performance Boost", value: 3, suffix: "x", description: "Average speed improvement" },
  { label: "Support Response", value: 2, suffix: "hr", description: "Average response time" },
];

export const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Founder, Blingish",
    content:
      "Webis didn't just build a store — they crafted a high-end digital boutique. Our sales tripled within the first month. The rose-gold aesthetic is absolutely stunning, and the shopping experience feels incredible.",
    rating: 5,
    initials: "AK",
    gradient: "from-rose-400 to-pink-500",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Owner, Bites & Co",
    content:
      "I was blown away by how quickly Webis understood our brand. The restaurant website they built feels like a Michelin-starred experience online. Online orders went through the roof!",
    rating: 5,
    initials: "PS",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    id: 3,
    name: "Kiran Nair",
    role: "Creative Director, Nova Creative",
    content:
      "As a design studio, we had extremely high standards. Webis exceeded every single one. The transitions, the animations, the attention to detail — it's world-class.",
    rating: 5,
    initials: "KN",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    name: "Rohan Kapoor",
    role: "CTO, TaskFlow",
    content:
      "The TaskFlow platform Webis built handles 200+ concurrent teams without breaking a sweat. Their technical depth and design sensibility is a rare combination.",
    rating: 5,
    initials: "RK",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 5,
    name: "Divya Pillai",
    role: "MD, Atlas Finance",
    content:
      "Our new website has transformed how clients perceive us. The secure dashboard and data visualizations communicate trust and expertise exactly as we needed.",
    rating: 5,
    initials: "DP",
    gradient: "from-sky-500 to-blue-500",
  },
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "₹6,999",
    period: "one-time",
    description: "Perfect for individuals and small businesses launching their digital presence.",
    popular: false,
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "1 month support",
      "SSL certificate",
    ],
    notIncluded: ["Custom animations", "CMS integration", "E-commerce"],
    cta: "Get Started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹10,999",
    period: "one-time",
    description: "For growing businesses that want to make a serious digital impact.",
    popular: true,
    features: [
      "Up to 15 pages",
      "Premium animations (Framer Motion)",
      "Advanced SEO optimization",
      "CMS integration",
      "Blog / News section",
      "WhatsApp & social integration",
      "Performance optimization",
      "3 months priority support",
      "Analytics dashboard",
    ],
    notIncluded: ["Custom web app features"],
    cta: "Most Popular — Get Growth",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "project-based",
    description: "Full-scale web applications, SaaS platforms, and complex digital ecosystems.",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom web app development",
      "Database & backend architecture",
      "API integrations",
      "E-commerce / payments",
      "User authentication",
      "CI/CD deployment pipeline",
      "12 months dedicated support",
      "Performance SLA",
      "Custom AI integrations",
    ],
    notIncluded: [],
    cta: "Let's Talk",
  },
];

export const whyWebis = [
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Every site we build scores 95+ on Google PageSpeed. Speed isn't a feature — it's the foundation.",
  },
  {
    icon: "Palette",
    title: "Design That Converts",
    description: "We blend aesthetics with psychology. Every pixel is placed to guide your visitor toward taking action.",
  },
  {
    icon: "Shield",
    title: "Built to Last",
    description: "Clean code, scalable architecture, and rigorous testing. Your site won't just launch — it'll grow with you.",
  },
  {
    icon: "Globe",
    title: "SEO-First",
    description: "From semantic HTML to Core Web Vitals, every site is engineered to rank and be discovered.",
  },
  {
    icon: "MessageCircle",
    title: "Always Available",
    description: "Two-hour average response time. We're your digital partner — not a vendor who disappears after delivery.",
  },
  {
    icon: "TrendingUp",
    title: "Results-Obsessed",
    description: "We don't just build websites — we measure, optimize, and iterate until your goals are exceeded.",
  },
];
