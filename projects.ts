export type Project = {
  slug: string;
  title: string;
  image: string;
  detailsImage: string;
  description: string;
  overview: string;
  duration: string;
  created: string;
  tags: string[];
  builtWith: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl: string;
};

export const projects: Project[] = [
  {
    slug: "pixalo",
    title: "Pixalo - Figma Resources & UI Component Marketplace",
    image: "/images/projects/project-1.webp",
    detailsImage: "/images/projects/project-1.webp",
    description:
      "Pixalo is a modern Figma resources platform built for designers.",
    overview:
      "Pixalo is a modern Figma resources platform built by Codlinker that provides designers and developers with high-quality UI components, design templates, animations, and web inspirations. The platform operates on a subscription-based model, allowing users to access a growing library of professional design assets that help accelerate design workflows and product development.",
    duration: "3",
    created: "Mar 2026",
    tags: [
      "figma resources",
      "figma ui kits",
      "ui components",
      "figma templates",
      "design marketplace",
      "saas design platform",
      "ui design assets",
      "figma libraries",
      "web design inspiration",
      "design system resources",
    ],
    builtWith: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn UI",
      "Redux Toolkit",
      "SEO Optimization",
      "Dynamic Routing",
      "Subscription System",
      "Stripe Integration",
      "Framer Motion",
    ],
    challenges: [
      "Building a scalable resource library",
      "SEO optimization for resource pages",
      "Fast asset preview and loading",
      "Subscription access control",
    ],
    solutions: [
      "We implemented a structured PostgreSQL database with optimized indexing and dynamic API queries.",
      "SEO money pages, category pages, and dynamic detail pages were designed to maximize organic search visibility.",
      "Next.js App Router and server components were used to improve loading speed and rendering performance.",
      "A subscription-based access flow was implemented to allow controlled access to premium resources.",
    ],
    results: [
      "Designers can now access ready-made UI components and templates that drastically reduce design time.",
      "Pixalo is built with an SEO-first architecture, helping it scale with organic traffic growth.",
      "The platform can handle thousands of assets and users without performance issues.",
      "Advanced filtering, responsive layouts, and fast previews provide a seamless browsing experience.",
    ],
    liveUrl: "https://pixalo.example.com",
  },
  {
    slug: "restaurant",
    title: "Design Restaurant Website and Online Ordering System",
    image: "/images/projects/project-2.webp",
    detailsImage: "/images/projects/project-2.webp",
    description:
      "High-performance restaurant website with online ordering system.",
    overview:
      "Food-CodLinker is a complete restaurant ordering system crafted for restaurants, cafés, cloud kitchens, and takeaway businesses. It includes a stunning customer-facing website, a full online ordering system, a smart cart and checkout flow, QR table ordering, and a powerful admin dashboard that lets owners manage menus, orders, invoices, and more all optimized for speed and user experience. This product is fully customizable for any restaurant brand and is available as a professional setup service for $500.",
    duration: "2",
    created: "Jan 2026",
    tags: [
      "figma resources",
      "figma ui kits",
      "ui components",
      "figma templates",
      "design marketplace",
      "saas design platform",
      "ui design assets",
      "figma libraries",
      "web design inspiration",
      "design system resources",
    ],
    builtWith: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn UI",
      "Framer Motion",
      "Dynamic Routing",
      "SEO Optimization",
    ],
    challenges: [
      "Creating a smooth ordering journey",
      "Keeping menu pages fast on mobile",
      "Building reusable restaurant sections",
      "Improving local SEO structure",
    ],
    solutions: [
      "We designed a clear ordering flow with direct calls to action.",
      "Menu sections were structured for fast rendering and easy scanning.",
      "Reusable components were created for dishes, categories, and promotions.",
      "SEO-friendly headings and page structure were used for discoverability.",
    ],
    results: [
      "Customers can browse menu items faster from any device.",
      "The restaurant has a clearer online ordering path.",
      "Reusable page sections make future updates easier.",
      "The site is structured for better local search visibility.",
    ],
    liveUrl: "https://restaurant.example.com",
  },
  {
    slug: "line-marking",
    title: "Line Marking Australia",
    image: "/images/projects/project-3.webp",
    detailsImage: "/images/projects/project-3.webp",
    description: "SEO-optimized Next.js website for line marking business.",
    overview:
      "Web Design Solutions developed a modern, SEO-optimised Next.js site for Line Marking Australia. The project delivers a clean and professional user experience, with responsive layouts, engaging framer-motion animations, and a streamlined Quote Form to capture leads. We structured 15+ core service pages with internal linking, LocalBusiness + Services + FAQ schema, and optimised metadata to target competitive keywords like 'line marking Australia.' The result is a fast, scalable, and user-friendly platform that builds trust while driving conversions.",
    duration: "2",
    created: "Dec 2025",
    tags: [
      "figma resources",
      "figma ui kits",
      "ui components",
      "figma templates",
      "design marketplace",
      "saas design platform",
      "ui design assets",
      "figma libraries",
      "web design inspiration",
      "design system resources",
    ],
    builtWith: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO Optimization",
      "Landing Pages",
      "Performance Optimization",
      "Responsive Design",
    ],
    challenges: [
      "Presenting service information clearly",
      "Optimizing pages for location-based SEO",
      "Improving mobile lead generation",
      "Keeping the site lightweight",
    ],
    solutions: [
      "We created dedicated service sections with clear content hierarchy.",
      "Location and service-focused copy was organized for search engines.",
      "Mobile-first calls to action were added for fast inquiries.",
      "The frontend was kept lightweight for quick loading.",
    ],
    results: [
      "Visitors can quickly understand services and request quotes.",
      "The website is easier to optimize for search traffic.",
      "Mobile users get a smoother inquiry experience.",
      "Performance-focused structure supports faster loading.",
    ],
    liveUrl: "https://linemarking.example.com",
  },
];
