// =====================================================
// WEBYY CONFIGURATION
// =====================================================

export const companyInfo = {
  name: 'Webyy',
  tagline: 'Website Development Company',
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
    dribbble: 'https://dribbble.com/webyy',
  },
};

// Web3Forms access keys are public by design (they only allow sending to your inbox).
export const web3forms = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: 'f7c69e89-f1f4-4c8a-9b2a-f9e12c9fa39b',
};

export const siteUrl = 'https://webyyonline.netlify.app';

// Founder photo: hosted image supplied for this site.
export const assets = {
  owner: 'https://i.ibb.co/prbPWGQp/file-000000008c408211975c2ed96b7d1d79.png',
};

export const owner = {
  name: 'Atul Mishra',
  role: 'Founder & Owner of WEBYY',
  // Founder copy below reuses wording that was already live on the site.
  // Replace/extend these lines when Atul supplies his own words.
  bio: [
    'WEBYY is a website development brand helping businesses build a strong online presence through modern design, responsive websites, clean interfaces, performance and SEO-conscious development.',
    'The focus is on quality, usability and continuous improvement, so every site we ship is something its owner can be proud of.',
  ],
  role_description:
    'Responsible for client communication, project coordination, business operations, and growth. Atul ensures every client relationship is built on trust, clarity, and results.',
};

// Absolute hrefs so the same menu works on every page.
// Hash links ("/#services") scroll on the homepage and navigate back to it from other pages.
export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/#contact' },
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

export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  logo: string;
  alt: string;
  /** Optional verified destination. Leave undefined for an informational card (no link is rendered). */
  url?: string;
  /** Optional: render a transparent logo as a single-colour white silhouette (only for dark artwork on a transparent PNG). */
  silhouette?: boolean;
}

// Logos are the exact hosted images supplied for this site.
export const projects: Project[] = [
  {
    id: 1,
    name: 'ASTYL',
    category: 'T-shirt Brand',
    description:
      'A T-shirt brand focused on presenting apparel with a distinctive brand identity and a modern visual style.',
    logo: 'https://i.ibb.co/B21HrV3v/Black-Beige-Modern-Typography-Monogram-Logo-1-1-pdf-20260126-204857-0000.png',
    alt: 'ASTYL T-shirt brand logo',
  },
  {
    id: 2,
    name: 'Flyo.ai',
    category: 'AI Travel Assistant App',
    description:
      'An AI-powered travel assistant concept designed to help users explore destinations and plan travel more conveniently.',
    logo: 'https://i.ibb.co/N2W61sJy/IMG-ca5b15f6-c6b3-41e1-9e0f-2536f4b6074b.png',
    alt: 'Flyo.ai AI travel assistant logo',
  },
  {
    id: 3,
    name: "Mother's Muffins",
    category: 'Bakery Shop',
    description:
      'A bakery brand focused on baked treats, a welcoming identity, and an appetizing customer experience.',
    logo: 'https://i.ibb.co/M5Zc9gK4/Mother-s-muffins-20261012-105553-0000.png',
    alt: "Mother's Muffins bakery logo",
  },
  {
    id: 4,
    name: 'Stylin',
    category: 'Fashion Brand',
    description:
      'A fashion brand built around style, contemporary aesthetics, and a recognizable visual identity.',
    logo: 'https://i.ibb.co/RpY1JGWp/Stylin-20261012-105633-0000.png',
    alt: 'Stylin fashion brand logo',
  },
  {
    id: 5,
    name: 'HJP Studio',
    category: 'Photography Studio',
    description:
      'A photography studio brand focused on visual storytelling, photography, and creative presentation.',
    logo: 'https://i.ibb.co/35kYYcrP/HJP-Studio-20261012-105709-0000.png',
    alt: 'HJP Studio photography studio logo',
  },
];

export const pricingPlans = [
  {
    id: 1,
    slug: 'basic',
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
    slug: 'standard',
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
    slug: 'advanced',
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
    cta: 'Start This Plan',
    highlight: false,
  },
];

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  avatar: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Saurabh Mishra',
    role: 'Lead Website Engineer',
    description: 'Responsible for website architecture, development, technical implementation, and project execution. Saurabh leads all engineering efforts at Webyy with a focus on performance and precision.',
    linkedin: 'https://in.linkedin.com/in/sauravmishra2050?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile',
    avatar: 'S',
  },
  {
    id: 2,
    name: 'Atul Mishra',
    role: 'Junior Engineer',
    description: 'Responsible for client communication, project coordination, business operations, and growth. Atul ensures every client relationship is built on trust, clarity, and results.',
    avatar: 'A',
  },
];

export const processSteps = [
  {
    step: 1,
    icon: 'Compass',
    title: 'Discover',
    description:
      'We understand your business goals, target audience, and design preferences, then map out pages, structure, and content so there are no surprises later.',
  },
  {
    step: 2,
    icon: 'Pencil',
    title: 'Design',
    description:
      'From wireframes to high-fidelity designs. Every screen is crafted to look clean, communicate clearly, and guide users toward action.',
  },
  {
    step: 3,
    icon: 'Code',
    title: 'Build',
    description:
      'Approved designs become clean, responsive, performance-minded code on modern tooling.',
  },
  {
    step: 4,
    icon: 'Rocket',
    title: 'Launch',
    description:
      'Thorough testing, speed optimization, and a smooth deployment. We stay available post-launch to ensure everything runs perfectly.',
  },
];

// Technologies this site is actually built and deployed with (see package.json).
export const tickerItems = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'GitHub',
  'Netlify',
];
