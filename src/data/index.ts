import type {
  Product,
  Brand,
  Testimonial,
  TimelineItem,
  Stat,
  Subsidiary,
  FaqItem,
  Location,
  NavItem,
} from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Hero Slides ─────────────────────────────────────────────────────────────
export const heroSlides = [
  {
    id: "1",
    headline: "Artisanal Greek Olives",
    subheadline: "Handpicked from the finest Mediterranean groves, delivering authentic flavors to your table",
    image: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1780993879/ChatGPT_Image_Jun_9_2026_02_00_45_PM_prenur.png",
    cta: { label: "View Olives", href: "/products?category=olives" },
    tag: "Mediterranean Collection",
  },
  {
    id: "2",
    headline: "Premium Feta Cheese",
    subheadline: "Sourced from Greek farms, aged to perfection — the authentic taste of the Aegean",
    image: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1780993997/ChatGPT_Image_Jun_9_2026_01_59_16_PM_bwtnci.png",
    cta: { label: "View Cheeses", href: "/products?category=cheeses" },
    tag: "Dairy Excellence",
  },
  {
    id: "3",
    headline: "Mediterranean Pickles",
    subheadline: "Traditionally fermented, bursting with authentic flavors from Turkey and Morocco",
    image: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1780993953/ChatGPT_Image_Jun_9_2026_01_57_38_PM_etadmk.png",
    cta: { label: "View Pickles", href: "/products?category=pickles" },
    tag: "Artisan Fermented",
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────
export const products: Product[] = [
  {
    id: "p1",
    name: "Kalamata Olives",
    slug: "kalamata-olives",
    category: "olives",
    brand: "Sahtain",
    origin: "Greece",
    description: "Hand-picked from ancient Kalamata groves in the Peloponnese region, these olives are naturally brined for 8–12 months using traditional methods passed down through generations. Their deep purple skin and meaty texture deliver a rich, fruity flavour with a hint of wine-like complexity.",
    shortDescription: "Hand-picked from ancient Kalamata groves, naturally brined for 8–12 months.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    tags: ["Premium", "Vegan", "Halal"],
    featured: true,
    packagingSizes: ["500g", "1kg", "5kg", "10kg"],
    certifications: ["FSSAI", "Halal", "ISO 22000"],
  },
  {
    id: "p2",
    name: "Green Cracked Olives",
    slug: "green-cracked-olives",
    category: "olives",
    brand: "Sahtain",
    origin: "Morocco",
    description: "Cracked early-harvest green olives marinated with preserved lemon, garlic, and cumin in the Moroccan tradition. A vibrant, citrus-forward olive with satisfying firm bite.",
    shortDescription: "Cracked Moroccan green olives marinated with preserved lemon and cumin.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
    tags: ["Artisan", "Vegan", "Halal"],
    featured: true,
    packagingSizes: ["500g", "1kg", "5kg"],
    certifications: ["FSSAI", "Halal"],
  },
  {
    id: "p3",
    name: "Premium Feta Cheese",
    slug: "premium-feta-cheese",
    category: "cheeses",
    brand: "Muratbey",
    origin: "Greece",
    description: "PDO-certified Greek feta, made exclusively from sheep's and goat's milk in the traditional region. Aged in wooden barrels for at least three months, yielding a creamy, tangy flavour profile ideal for salads, pastries, and mezze.",
    shortDescription: "PDO-certified Greek feta, barrel-aged for authentic tangy creaminess.",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80",
    tags: ["PDO Certified", "Halal", "Premium"],
    featured: true,
    packagingSizes: ["400g", "900g", "5kg"],
    certifications: ["FSSAI", "Halal", "PDO"],
  },
  {
    id: "p4",
    name: "Halloumi Cheese",
    slug: "halloumi-cheese",
    category: "cheeses",
    brand: "Muratbey",
    origin: "Cyprus",
    description: "Authentic Cypriot halloumi crafted from a blend of sheep, goat, and cow's milk. Its high melting point makes it ideal for grilling and frying — golden on the outside, soft and salty within.",
    shortDescription: "Authentic Cypriot halloumi, perfect for grilling and pan-frying.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80",
    tags: ["Grill-Ready", "Halal", "Premium"],
    featured: true,
    packagingSizes: ["250g", "500g", "2.5kg"],
    certifications: ["FSSAI", "Halal"],
  },
  {
    id: "p5",
    name: "Turkish Pickles Mix",
    slug: "turkish-pickles-mix",
    category: "pickles",
    brand: "Laziza",
    origin: "Turkey",
    description: "A colourful assortment of traditionally fermented vegetables — turnip, cucumber, cauliflower, and peppers — crafted using age-old Turkish recipes. Naturally lacto-fermented with no artificial preservatives.",
    shortDescription: "Naturally fermented Turkish vegetable medley — no artificial preservatives.",
    image: "https://images.unsplash.com/photo-1601924582975-41e8b6d5a6a5?w=800&q=80",
    tags: ["Probiotic", "Vegan", "Halal"],
    featured: false,
    packagingSizes: ["500g", "1kg", "5kg"],
    certifications: ["FSSAI", "Halal"],
  },
  {
    id: "p6",
    name: "Stuffed Vine Leaves",
    slug: "stuffed-vine-leaves",
    category: "olives",
    brand: "Altaieb",
    origin: "Turkey",
    description: "Tender vine leaves hand-rolled around fragrant herb rice, seasoned with dill, mint, and lemon. Ready to serve from jar — a time-honoured mezze staple used by restaurants across the region.",
    shortDescription: "Hand-rolled vine leaves stuffed with herb rice — ready-to-serve mezze.",
    image: "https://images.unsplash.com/photo-1565299715199-866c917206bb?w=800&q=80",
    tags: ["Ready-to-Serve", "Vegan", "Halal"],
    featured: false,
    packagingSizes: ["400g", "1.8kg"],
    certifications: ["FSSAI", "Halal"],
  },
  {
    id: "p7",
    name: "Extra Virgin Olive Oil",
    slug: "extra-virgin-olive-oil",
    category: "oils",
    brand: "Joud",
    origin: "Greece",
    description: "Cold-pressed from hand-harvested Koroneiki olives, this premium EVOO delivers exceptional polyphenol content and a distinctive grassy, peppery finish. Ideal for dressing, dipping, and finishing.",
    shortDescription: "Cold-pressed Koroneiki EVOO — exceptional polyphenols, grassy finish.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    tags: ["Cold-Pressed", "Vegan", "Halal"],
    featured: true,
    packagingSizes: ["500ml", "1L", "5L", "17L"],
    certifications: ["FSSAI", "Halal", "PDO"],
  },
  {
    id: "p8",
    name: "Tahini Paste",
    slug: "tahini-paste",
    category: "spreads",
    brand: "Wexford",
    origin: "Lebanon",
    description: "Stone-ground from 100% Ethiopian sesame seeds, this tahini is remarkably smooth with a rich, nutty depth. A foundational ingredient in hummus, dressings, and sauces — preferred by top chefs throughout India.",
    shortDescription: "Stone-ground from Ethiopian sesame seeds — smooth, rich, nutty depth.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    tags: ["Premium", "Vegan", "Halal"],
    featured: false,
    packagingSizes: ["500g", "1kg", "5kg"],
    certifications: ["FSSAI", "Halal"],
  },
];

// ─── Brands ──────────────────────────────────────────────────────────────────
export const brands: Brand[] = [
  {
    id: "b1",
    name: "Sahtain",
    slug: "sahtain",
    logo: "https://res.cloudinary.com/daeyqeofn/image/upload/v1778678401/noun-mediterranean-food_t4gygf.svg",
    country: "India",
    description: "A homegrown Indian brand offering premium Mediterranean deli products — olives, pickles, and specialty items crafted for local palates with authentic imported ingredients.",
    productCount: 48,
    featured: true,
  },
  {
    id: "b2",
    name: "Altaieb",
    slug: "altaieb",
    logo: "https://res.cloudinary.com/daeyqeofn/image/upload/v1778678404/prevention_1_xpxclw.svg",
    country: "Turkey",
    description: "Turkish artisan producer specialising in traditional preserved foods — stuffed vine leaves, mixed pickles, and olive-based spreads with authentic Anatolian recipes.",
    productCount: 32,
    featured: true,
  },
  {
    id: "b3",
    name: "Laziza",
    slug: "laziza",
    logo: "https://res.cloudinary.com/daeyqeofn/image/upload/v1778678396/cancel-order_1_rg3jhy.svg",
    country: "Lebanon",
    description: "Lebanese brand known for its vibrant range of premium pickles and condiments made to traditional family recipes using only the freshest regional produce.",
    productCount: 26,
    featured: true,
  },
  {
    id: "b4",
    name: "Joud",
    slug: "joud",
    logo: "https://res.cloudinary.com/daeyqeofn/image/upload/v1778678401/noun-mediterranean-food_t4gygf.svg",
    country: "Greece",
    description: "Greek producer of award-winning extra-virgin olive oils and table olives, cultivated in the olive-rich regions of the Peloponnese and Crete.",
    productCount: 18,
    featured: true,
  },
  {
    id: "b5",
    name: "Wexford",
    slug: "wexford",
    logo: "https://res.cloudinary.com/daeyqeofn/image/upload/v1778678404/prevention_1_xpxclw.svg",
    country: "Lebanon",
    description: "Premium Lebanese producer of stone-ground tahini and sesame-based products, supplying professional kitchens and food manufacturers across the Middle East.",
    productCount: 14,
    featured: true,
  },
  {
    id: "b6",
    name: "Muratbey",
    slug: "muratbey",
    logo: "https://res.cloudinary.com/daeyqeofn/image/upload/v1778678396/cancel-order_1_rg3jhy.svg",
    country: "Turkey",
    description: "One of Turkey's leading dairy brands, producing an extensive range of halloumi, white cheeses, and specialty dairy products to European quality standards.",
    productCount: 40,
    featured: true,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Executive Chef & Owner",
    company: "Spice Garden Restaurant, Mumbai",
    quote: "Food Sources has completely transformed our kitchen supply chain. The quality of their Mediterranean products — from the olive oils to the premium cheeses — is consistently outstanding. Same-day delivery and a dedicated account manager make all the difference for a busy restaurant.",
    initials: "PS",
  },
  {
    id: "t2",
    name: "Rajesh Mehta",
    role: "Owner",
    company: "Mehta's Kitchen Group, Delhi",
    quote: "We've been working with Food Sources for over two years across our restaurant chain. Their flexible order quantities mean we never over-stock, and their FSSAI-certified products give us full confidence in what we're serving our guests. Highly recommend to any serious F&B operator.",
    initials: "RM",
  },
  {
    id: "t3",
    name: "Khalid Al Otaibi",
    role: "Purchasing Manager",
    company: "Radisson Blu Riyadh",
    quote: "The consistency and reliability from Food Sources is unmatched. Their cold-chain logistics ensure every delivery arrives in perfect condition. For a luxury hotel operation, that level of dependability is non-negotiable — and they deliver it every single time.",
    initials: "KO",
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const timeline: TimelineItem[] = [
  { year: "2015", title: "Founded in Mumbai", description: "Started with a vision to bring authentic Mediterranean flavors to India", icon: "MapPin" },
  { year: "2017", title: "Expanded Product Range", description: "Added premium cheeses and pickles to our olive collection", icon: "Package" },
  { year: "2019", title: "Delhi Distribution Center", description: "Opened our second facility to serve North India", icon: "Building" },
  { year: "2021", title: "200+ Partner Milestone", description: "Celebrated serving over 200 hotels and restaurants", icon: "Award" },
  { year: "2023", title: "Digital Ordering Platform", description: "Launched our online portal for seamless ordering", icon: "Monitor" },
  { year: "2024", title: "500+ Establishments", description: "Now proudly serving 500+ partners across India", icon: "Flag" },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { value: "100%", label: "Authentic Quality" },
  { value: "48h", label: "Max Delivery Time" },
  { value: "50+", label: "Product Lines" },
  { value: "24/7", label: "Client Support" },
];

// ─── Subsidiaries ─────────────────────────────────────────────────────────────
export const subsidiaries: Subsidiary[] = [
  {
    title: "Marketing, Distribution & Logistics",
    description: "A comprehensive network connecting global producers with regional markets through efficient, reliable logistics.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    title: "Catering",
    description: "Premium food solutions for hospitality and events, delivering quality and consistency at every scale.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
  },
  {
    title: "Wellness",
    description: "Curated health-focused products that meet the growing demand for nutritious, clean-label food options.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    title: "Refrigeration",
    description: "Full refrigeration solutions with unwavering commitment towards meeting deadlines to your full satisfaction.",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=800&q=80",
  },
  {
    title: "Restaurant Chains",
    description: "Tailored supply and sourcing strategies built for the pace and precision that restaurant chains demand.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    title: "Food Industry",
    description: "End-to-end support for food manufacturers — from raw material sourcing to finished product distribution.",
    image: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=800&q=80",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqs: FaqItem[] = [
  {
    question: "What types of businesses can open an account?",
    answer: "We work with hotels, restaurants, cafés, catering companies, grocery stores, and food manufacturers across India. If your business is in the F&B sector, we'd love to work with you.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "We accommodate businesses of all sizes. There is no strict minimum — we work with single-location restaurants as well as national chains, tailoring order structures to your operational needs.",
  },
  {
    question: "Are all products FSSAI approved and quality certified?",
    answer: "Yes. Every product we distribute is fully FSSAI-approved and quality-certified. Our documentation team handles all compliance so you never face regulatory issues.",
  },
  {
    question: "How long does delivery take?",
    answer: "We offer next-day delivery for major cities and a maximum 48-hour delivery window for other regions in India. Our cold-chain fleet ensures perishables arrive in perfect condition.",
  },
  {
    question: "Do you offer credit terms?",
    answer: "Yes, we offer flexible payment terms to established partners. Credit terms are discussed and agreed upon during the onboarding process based on your business profile.",
  },
  {
    question: "How do I track my orders?",
    answer: "Once onboarded, you'll have access to our digital portal where you can place orders, track deliveries in real time, and manage your account — 24/7.",
  },
];

// ─── Locations ───────────────────────────────────────────────────────────────
export const locations: Location[] = [
  { city: "Mumbai", phone: "+91 98200 12345", hours: "Mon – Sat: 9am – 6pm", isHQ: true },
  { city: "Delhi", phone: "+91 98200 12346", hours: "Mon – Sat: 9am – 6pm" },
  { city: "Bangalore", phone: "+91 98200 12347", hours: "Mon – Sat: 9am – 5pm" },
  { city: "Chennai", phone: "+91 98200 12348", hours: "Mon – Sat: 9am – 5pm" },
  { city: "Hyderabad", phone: "+91 98200 12349", hours: "Mon – Sat: 9am – 5pm" },
  { city: "Kolkata", phone: "+91 98200 12350", hours: "Mon – Sat: 9am – 5pm" },
  { city: "Pune", phone: "+91 98200 12351", hours: "Mon – Sat: 9am – 5pm" },
];
