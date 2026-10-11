// =====================================================
// WEBYY CONFIGURATION
// =====================================================

export const companyInfo = {
  name: 'Webyy',
  tagline: 'Digital Experience Studio',
  founded: '2023',
  description: 'Premium website design and development agency crafting stunning, high-performance websites for businesses, startups, and professionals.',
  email: 'contact.webyy@gmail.com',
  phone: '9135888913',
  phoneDisplay: '+91 91358 88913',
  phoneTel: 'tel:+919135888913',
  whatsapp: '919135888913',
  locations: ['India', 'Remote-first'],

  social: {
    instagram: 'https://www.instagram.com/_webyy/',
    instagramHandle: '@_webyy',
    twitter: 'https://twitter.com/webyy',
    linkedin: 'https://linkedin.com/company/webyy',
    dribbble: 'https://dribbble.com/webyy',
  },
};

export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    id: 1,
    icon: 'Globe',
    name: 'Website Design',
    description:
      'We craft visually stunning, user-centric websites that reflect your brand identity. Every pixel is considered — from layout to color to typography.',
    tags: ['UI Design', 'Figma', 'Branding', 'Prototypes'],
  },
  {
    id: 2,
    icon: 'Code',
    name: 'Website Development',
    description:
      'High-performance, scalable websites built with modern technologies. Clean code, fast load times, and seamless functionality.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 3,
    icon: 'RefreshCw',
    name: 'Website Redesign',
    description:
      'Transform your outdated website into a conversion-focused digital experience. We analyze, strategize, and rebuild for better results.',
    tags: ['Audit', 'Conversion', 'UX Refresh', 'Performance'],
  },
  {
    id: 4,
    icon: 'Layout',
    name: 'Landing Pages',
    description:
      'High-converting landing pages engineered to turn visitors into leads and customers. Focused design with clear calls-to-action.',
    tags: ['CRO', 'Lead Gen', 'A/B Testing', 'Fast Delivery'],
  },
  {
    id: 5,
    icon: 'Briefcase',
    name: 'Business Websites',
    description:
      'Professional websites for businesses of all sizes. Establish credibility, showcase your offerings, and attract the right clients.',
    tags: ['Corporate', 'Multi-page', 'CMS', 'SEO-ready'],
  },
  {
    id: 6,
    icon: 'Search',
    name: 'SEO Optimization',
    description:
      'Get found by your ideal customers. Technical SEO, on-page optimization, and performance tuning that climbs rankings and drives organic traffic.',
    tags: ['Technical SEO', 'Core Web Vitals', 'Analytics', 'Content Strategy'],
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Flyo.ai',
    url: 'https://flyo.ai',
    icon: 'Globe',
    initials: 'F',
  },
  {
    id: 2,
    title: 'Astyl',
    url: 'https://astyl.in',
    icon: 'ShoppingBag',
    initials: 'A',
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    price: 7000,
    description: 'Perfect for freelancers, consultants, and small businesses getting started online.',
    features: [
      '5 Pages',
      'Custom Design',
      'Responsive Design',
      'Basic SEO Setup',
      '1 Year Hosting',
      'Social Media Icon Support',
    ],
    cta: 'Start This Plan',
    highlight: false,
  },
  {
    id: 2,
    name: 'Standard',
    price: 14000,
    description: 'For growing businesses that need a polished, high-performing online presence.',
    features: [
      '10 Pages',
      'Custom Design',
      'Custom UI',
      'Contact Form',
      'Google Maps Integration',
      'Social Media Integration',
      'Advanced SEO',
      '2 Years Hosting',
      '1 Year Free Domain',
    ],
    cta: 'Start This Plan',
    highlight: true,
  },
  {
    id: 3,
    name: 'Advanced',
    price: 35000,
    description: 'For established businesses and brands that demand the best digital experience.',
    features: [
      'Unlimited Pages',
      'Custom UI',
      'Custom Design',
      'Custom UI',
      'Contact Form',
      'Google Maps Integration',
      'Social Media Integration',
      'Advanced SEO',
      'Free Maintenance',
      '2 Years Hosting Support',
      '1 Year Free Domain',
    ],
    cta: 'Message for More Details',
    highlight: false,
  },
];

export const team = [
  {
    id: 1,
    name: 'Saurabh Mishra',
    role: 'Lead Website Engineer',
    description: 'Responsible for website architecture, development, technical implementation, and project execution. Saurabh leads all engineering efforts at Webyy with a focus on performance and precision.',
    linkedin: 'https://linkedin.com/in/saurabh-mishra',
    avatar: 'S',
  },
  {
    id: 2,
    name: 'Atul Mishra',
    role: 'Business Manager',
    description: 'Responsible for client communication, project coordination, business operations, and growth. Atul ensures every client relationship is built on trust, clarity, and results.',
    linkedin: 'https://linkedin.com/in/atul-mishra',
    avatar: 'A',
  },
];

export const processSteps = [
  {
    step: 1,
    icon: 'Compass',
    title: 'Discovery',
    description:
      'We understand your business goals, target audience, and design preferences. This foundation ensures every decision serves your objectives.',
  },
  {
    step: 2,
    icon: 'Lightbulb',
    title: 'Strategy',
    description:
      'We create a clear roadmap — pages, structure, tech stack, and content plan — so there are no surprises during execution.',
  },
  {
    step: 3,
    icon: 'Pencil',
    title: 'Design',
    description:
      'From wireframes to high-fidelity designs. Every screen is crafted to look stunning, communicate clearly, and guide users toward action.',
  },
  {
    step: 4,
    icon: 'Rocket',
    title: 'Launch',
    description:
      'Thorough testing, speed optimization, and a smooth deployment. We stay available post-launch to ensure everything runs perfectly.',
  },
];

export const tickerItems = [
  'Website Design',
  'Website Development',
  'Landing Pages',
  'SEO Optimization',
  'UI/UX Design',
  'Business Websites',
  'Portfolio Websites',
  'Website Redesign',
];
