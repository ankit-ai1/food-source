// ─── Product Types ───────────────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  brand: string;
  origin: string;
  description: string;
  shortDescription: string;
  image: string;
  tags: string[];
  featured: boolean;
  packagingSizes: string[];
  certifications: string[];
}

export type ProductCategory = "olives" | "cheeses" | "pickles" | "oils" | "spreads";

// ─── Brand Types ─────────────────────────────────────────────────────────────
export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  country: string;
  description: string;
  productCount: number;
  featured: boolean;
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Testimonial ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

// ─── Timeline ────────────────────────────────────────────────────────────────
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Stat ────────────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

// ─── Subsidiary ──────────────────────────────────────────────────────────────
export interface Subsidiary {
  title: string;
  description: string;
  image: string;
}

// ─── Feature ─────────────────────────────────────────────────────────────────
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

// ─── Contact Form ────────────────────────────────────────────────────────────
export interface ContactFormData {
  businessName: string;
  contactPerson: string;
  email: string;
  phone: string;
  businessType: string;
  city: string;
  inquiryType: string;
  message: string;
  consent: boolean;
}

// ─── Onboarding Form ─────────────────────────────────────────────────────────
export interface OnboardingFormData {
  isExistingCustomer: boolean | null;
  businessType: string;
  companyName: string;
  commercialRegistration: string;
  vatNumber: string;
  website: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  city: string;
  address: string;
  notes: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

// ─── Location ────────────────────────────────────────────────────────────────
export interface Location {
  city: string;
  phone: string;
  hours: string;
  isHQ?: boolean;
}
