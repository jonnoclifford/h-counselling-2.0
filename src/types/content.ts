// ============================================================================
// Site Configuration Types
// ============================================================================

export interface SiteConfig {
  homepage: HomepageConfig;
  about: AboutConfig;
  faq: FAQConfig;
  contact: ContactConfig;
  footer: FooterConfig;
  navigation: NavigationConfig;
  helpTopics: HelpTopicPage[];
  cityPages: CityPage[];
}

// ============================================================================
// Homepage
// ============================================================================

export interface HomepageConfig {
  hero: {
    label: string;
    heading: string;
    subheading: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    illustration: string;
    illustrationAlt: string;
  };
  marquee: {
    text: string;
  };
  introduction: {
    label: string;
    heading: string;
    paragraphs: string[];
    buttonText: string;
    buttonHref: string;
    image: string;
    imageAlt: string;
  };
  statements: [StatementConfig, StatementConfig, StatementConfig];
  services: {
    label: string;
    heading: string;
    description: string;
    items: ServiceItem[];
  };
  process: {
    label: string;
    heading: string;
    steps: ProcessStep[];
  };
  testimonials: {
    label: string;
    heading: string;
    items: Testimonial[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    emailText: string;
    email: string;
  };
}

export interface StatementConfig {
  text: string;
  subtitle?: string;
  bg: "lilac" | "terracotta";
  shadow: "orange" | "purple";
}

export interface ServiceItem {
  title: string;
  description: string;
  illustration: string;
  bgColor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

// ============================================================================
// About
// ============================================================================

export interface AboutConfig {
  hero: {
    heading: string;
    subtitle: string;
  };
  story: {
    label: string;
    heading: string;
    paragraphs: string[];
  };
  approach: {
    label: string;
    heading: string;
    paragraphs: string[];
    illustration: string;
    illustrationAlt: string;
  };
  qualifications: {
    label: string;
    heading: string;
    items: string[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

// ============================================================================
// FAQ
// ============================================================================

export interface FAQConfig {
  hero: {
    label: string;
    heading: string;
    description: string;
  };
  items: FAQItem[];
  pricing: {
    label: string;
    heading: string;
    consultation: {
      price: string;
      description: string;
      details: string;
    };
    session: {
      price: string;
      description: string;
      badge: string;
      details: string;
    };
  };
  logistics: {
    label: string;
    heading: string;
    items: {
      heading: string;
      description: string;
    }[];
  };
  cta: {
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ============================================================================
// Contact
// ============================================================================

export interface ContactConfig {
  hero: {
    label: string;
    heading: string;
    description: string;
  };
  email: string;
  emailResponseTime: string;
  whatHappensNext: {
    heading: string;
    steps: string[];
  };
  bookDirectly: {
    heading: string;
    description: string;
  };
}

// ============================================================================
// Footer
// ============================================================================

export interface FooterConfig {
  tagline: string;
  email: string;
  credentials: string[];
  sessionPrice: string;
  links: { label: string; href: string }[];
}

// ============================================================================
// Navigation
// ============================================================================

export interface NavigationConfig {
  links: { label: string; href: string }[];
  ctaText: string;
  ctaHref: string;
}

// ============================================================================
// Help Topics
// ============================================================================

export interface HelpTopicPage {
  slug: string;
  title: string;
  metaDescription: string;
  heading: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  ctaText: string;
  relatedSlugs: string[];
  illustration: string;
  illustrationAlt: string;
  statementText: string;
  statementBg: "lilac" | "terracotta";
  statementShadow: "orange" | "purple";
}

// ============================================================================
// City Pages
// ============================================================================

export interface CityPage {
  slug: string;
  city: string;
  title: string;
  metaDescription: string;
  heading: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  ctaText: string;
  illustration: string;
  illustrationAlt: string;
  statementText: string;
  statementBg: "lilac" | "terracotta";
  statementShadow: "orange" | "purple";
}
