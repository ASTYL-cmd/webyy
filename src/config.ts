// =====================================================
// WEBYY CONFIGURATION
// =====================================================

export const companyInfo = {
  name: 'Webyy',
  tagline: 'Digital Experience Studio',
  founded: '2023',
  description: 'Premium website design and development agency crafting stunning, high-performance websites for businesses, startups, and professionals.',
  email: 'contact.webyy@gmail.com',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  locations: ['India', 'Remote-first'],

  social: {
    instagram: 'https://instagram.com/webyy',
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
    type: 'SaaS / AI Platform',
    description: 'A modern AI-powered platform designed to streamline workflows. Webyy built the full frontend experience — from onboarding to dashboard — with a focus on speed and clarity.',
    url: 'https://flyo.ai',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-blue-900/50 to-cyan-900/40',
    icon: 'Globe',
    tags: ['React', 'Tailwind', 'AI Integration'],
  },
  {
    id: 2,
    title: 'Astyl',
    type: 'Fashion / E-Commerce',
    description: 'A premium fashion brand website with a sleek editorial aesthetic. Webyy redesigned and developed the full shopping experience, improving engagement and conversions.',
    url: 'https://astyl.in',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200',
    gradient: 'from-purple-900/50 to-pink-900/40',
    icon: 'ShoppingBag',
    tags: ['E-Commerce', 'UI/UX', 'Next.js'],
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 17000,
    duration: '1 Year',
    description: 'Perfect for freelancers, consultants, and small businesses getting started online.',
    features: [
      'Up to 5 pages',
      'Responsive Design',
      'Contact Form',
      'Basic SEO Setup',
      'Google Analytics Integration',
      '1 Year Hosting Support',
      '1 Round of Revisions',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    id: 2,
    name: 'Professional',
    price: 25000,
    duration: '2 Years',
    description: 'For growing businesses that need a polished, high-performing online presence.',
    features: [
      'Up to 10 pages',
      'Custom UI/UX Design',
      'Advanced Contact & Inquiry Forms',
      'Full On-Page SEO',
      'Speed Optimization',
      'Social Media Integration',
      '2 Years Hosting Support',
      '3 Rounds of Revisions',
      'WhatsApp Chat Integration',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    id: 3,
    name: 'Business',
    price: 35000,
    duration: '3 Years',
    description: 'For established businesses and brands that demand the best digital experience.',
    features: [
      'Unlimited Pages',
      'Premium Custom Design',
      'E-Commerce or Blog (optional)',
      'Advanced SEO & Analytics',
      'Performance Audits',
      'CMS Integration',
      '3 Years Hosting Support',
      'Unlimited Revisions',
      'Priority Support',
      'Monthly Maintenance',
    ],
    cta: 'Build Now',
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

export const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Webyy built our landing page from scratch and it looks incredible. The design exceeded our expectations and we started getting inquiries within days of launch.",
    author: 'Priya Sharma',
    role: 'Founder, StyleBoutique',
    avatar: 'P',
  },
  {
    id: 2,
    rating: 5,
    text: "Professional, responsive, and incredibly talented. Webyy redesigned our business website and it now feels like a proper enterprise brand. Highly recommend.",
    author: 'Rahul Verma',
    role: 'Director, TechSpark Solutions',
    avatar: 'R',
  },
  {
    id: 3,
    rating: 5,
    text: "Fast delivery, clean code, beautiful design. Webyy understood our brand voice perfectly and translated it into a website we're genuinely proud to share.",
    author: 'Ananya Patel',
    role: 'CEO, Greenwave Organics',
    avatar: 'A',
  },
  {
    id: 4,
    rating: 5,
    text: "The attention to detail is unmatched. Our portfolio website now gets compliments from every client we share it with. The team at Webyy is exceptional.",
    author: 'Karan Singh',
    role: 'Photographer & Creative Director',
    avatar: 'K',
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
