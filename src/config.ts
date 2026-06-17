// =====================================================
// WEBYY CONFIGURATION
// Update these values to customize your website
// =====================================================

export const companyInfo = {
  name: 'Webyy',
  tagline: 'Digital Experience Studio',
  founded: '2019',
  description: 'Premium website development agency crafting stunning, high-performance websites that convert visitors into customers.',
  email: 'contact.webyy@gmail.com',
  phone: '+1 (555) 123-4567', // Update with your phone
  whatsapp: '+15551234567', // Update with your WhatsApp number (no spaces/dashes)
  locations: ['New York', 'Los Angeles', 'Remote-first'],

  // Social Media URLs - Update these with your actual profiles
  social: {
    instagram: 'https://instagram.com/yourprofile', // Update this
    twitter: 'https://twitter.com/yourprofile', // Update this
    linkedin: 'https://linkedin.com/company/yourprofile', // Update this
    dribbble: 'https://dribbble.com/yourprofile', // Update this
  },

  // Logo placeholder - Replace with your actual logo
  logo: {
    src: 'https://images.pexels.com/pexels/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=200',
    alt: 'Webyy Logo',
    width: 150,
    height: 40,
  },

  // SEO
  seo: {
    title: 'Webyy — Premium Website Development Agency',
    description: 'Premium website development agency crafting stunning, high-performance websites that convert visitors into customers.',
    keywords: ['web development', 'website design', 'custom websites', 'web agency', 'responsive design', 'React', 'Next.js', 'premium websites'],
    ogImage: 'https://images.pexels.com/pexels/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
};

export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    id: 1,
    icon: 'Zap',
    name: 'Web Development',
    description:
      'High-performance websites engineered for speed, scalability, and conversion. Every line of code is crafted with precision to deliver exceptional user experiences.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    icon: 'Palette',
    name: 'UI/UX Design',
    description:
      'User-centered design that guides visitors through intuitive journeys. We create interfaces that feel natural, look stunning, and drive measurable results.',
    tags: ['Research', 'Wireframes', 'Prototypes', 'Design Systems'],
  },
  {
    id: 3,
    icon: 'ShoppingCart',
    name: 'E-Commerce',
    description:
      'Convert browsers into buyers with custom e-commerce solutions. Seamless checkout experiences, inventory management, and payment integrations that scale.',
    tags: ['Shopify', 'WooCommerce', 'Custom Carts', 'Payment APIs'],
  },
  {
    id: 4,
    icon: 'Smartphone',
    name: 'Responsive Design',
    description:
      'Pixel-perfect across every device and screen size. From mobile-first smartphones to ultra-wide desktop displays, your site looks flawless everywhere.',
    tags: ['Mobile', 'Tablet', 'Desktop', 'Progressive Web Apps'],
  },
  {
    id: 5,
    icon: 'Search',
    name: 'SEO Optimization',
    description:
      'Get found by your ideal customers. Technical SEO architecture, content strategy, and performance optimization that climbs search rankings and drives organic traffic.',
    tags: ['Technical SEO', 'Content Strategy', 'Analytics', 'Core Web Vitals'],
  },
  {
    id: 6,
    icon: 'Rocket',
    name: 'Maintenance & Support',
    description:
      'Keep your website running at peak performance. Regular updates, security patches, performance monitoring, and priority support when you need it most.',
    tags: ['Updates', 'Security', 'Backups', '24/7 Support'],
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'TechFlow — SaaS Platform Redesign',
    type: 'Web Development + UI/UX',
    year: '2024',
    award: 'Awwwards Honorable Mention',
    gradient: 'from-blue-900/30 to-purple-900/30',
    icon: 'Globe',
  },
  {
    id: 2,
    title: 'Verdant Health — Wellness Brand',
    type: 'Brand Identity + Website',
    year: '2024',
    award: 'CSS Design Awards Winner',
    gradient: 'from-emerald-900/30 to-cyan-900/30',
    icon: 'Leaf',
  },
  {
    id: 3,
    title: 'Luxe Fashion — E-Commerce Store',
    type: 'E-Commerce + Motion',
    year: '2024',
    award: 'FWA Site of the Day',
    gradient: 'from-purple-900/30 to-pink-900/30',
    icon: 'ShoppingBag',
  },
  {
    id: 4,
    title: 'BuildRight Construction — Portfolio',
    type: '3D + Interactive',
    year: '2023',
    award: 'Awwwards SOTD',
    gradient: 'from-orange-900/30 to-amber-900/30',
    icon: 'Building2',
  },
];

export const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Webyy transformed our outdated website into a conversion machine. Our leads increased 340% in the first quarter after launch. The attention to detail is unmatched.",
    author: 'Sarah Mitchell',
    role: 'CEO, TechFlow',
    avatar: 'S',
  },
  {
    id: 2,
    rating: 5,
    text: "Working with Webyy was a game-changer. They didn't just build us a website — they built us a digital growth engine. Professional, responsive, and incredibly talented.",
    author: 'David Park',
    role: 'Founder, Verdant Health',
    avatar: 'D',
  },
  {
    id: 3,
    rating: 5,
    text: "Our conversion rate jumped 280% after the redesign. The site loads in under 2 seconds and our customers love the new experience. Worth every penny.",
    author: 'Jessica Torres',
    role: 'CMO, Luxe Fashion',
    avatar: 'J',
  },
  {
    id: 4,
    rating: 5,
    text: "The best agency we've ever worked with. They took our vague ideas and turned them into a stunning, functional website that exceeds all expectations.",
    author: 'Michael Chen',
    role: 'Director, BuildRight',
    avatar: 'M',
  },
  {
    id: 5,
    rating: 5,
    text: "From strategy to launch, Webyy delivered beyond our expectations. The custom CMS they built saves our team hours every week. Highly recommend!",
    author: 'Amanda Brooks',
    role: 'VP Marketing, Horizon Media',
    avatar: 'A',
  },
  {
    id: 6,
    rating: 5,
    text: "Professional, creative, and technically brilliant. Webyy understood our brand and translated it into a digital experience that truly represents who we are.",
    author: 'Robert Williams',
    role: 'CEO, NexGen Solutions',
    avatar: 'R',
  },
];

export const processSteps = [
  {
    step: 1,
    icon: 'Compass',
    title: 'Discovery',
    description:
      'We dive deep into your business goals, target audience, and competitive landscape. This foundation ensures every decision aligns with your objectives.',
  },
  {
    step: 2,
    icon: 'Lightbulb',
    title: 'Strategy',
    description:
      'Research transforms into action. We create a strategic roadmap with clear timelines, deliverables, and measurable KPIs to track success.',
  },
  {
    step: 3,
    icon: 'Pencil',
    title: 'Design',
    description:
      'From wireframes to pixel-perfect designs. Every visual element is crafted to communicate your brand story and guide users toward conversion.',
  },
  {
    step: 4,
    icon: 'Rocket',
    title: 'Launch',
    description:
      'Rigorous testing, performance optimization, and a seamless launch. We monitor everything post-launch and optimize until the numbers speak for themselves.',
  },
];

export const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered', sublabel: 'Across 18 countries' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Based on feedback surveys' },
  { value: 35, suffix: '+', label: 'Awards Won', sublabel: 'Awwwards, FWA, CSS Awards' },
  { value: 6, suffix: 'yr', label: 'In Business', sublabel: 'Established 2019' },
];

export const timeline = [
  { year: '2019', title: 'Founded', description: 'Started with a vision to create exceptional digital experiences for growing businesses.' },
  { year: '2021', title: 'First Award Recognition', description: 'Won our first Awwwards Site of the Day for an innovative fintech project.' },
  { year: '2023', title: 'Team Expansion', description: 'Grew to a team of 15 specialists covering design, development, and strategy.' },
  { year: '2025', title: 'New Partnerships', description: 'Accepting new client partnerships. Selective by design to maintain quality.' },
];

export const tickerItems = [
  'Web Development',
  'UI/UX Design',
  'E-Commerce',
  'SEO Optimization',
  'Responsive Design',
  'Brand Identity',
  'Custom Solutions',
  'Maintenance & Support',
];
