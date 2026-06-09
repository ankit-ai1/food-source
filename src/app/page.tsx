import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardList,
  Globe2,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandCard } from "@/components/sections/BrandCard";

const activities = [
  {
    title: "Marketing, Distribution & Logistics",
    description: "A national network connecting trusted producers with premium kitchens.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
  },
  {
    title: "Catering",
    description: "Reliable food solutions for events, hotels, and hospitality teams.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80",
  },
  {
    title: "Restaurants",
    description: "Chef-ready ingredients selected for consistent flavor and texture.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
  },
  {
    title: "Refrigeration",
    description: "Cold-chain operations that preserve freshness from warehouse to table.",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=900&q=80",
  },
  {
    title: "Restaurant Chains",
    description: "Repeatable supply programs built for multi-location food operators.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
  },
  {
    title: "Food Industry",
    description: "Bulk sourcing and distribution support for food manufacturers.",
    image: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=900&q=80",
  },
];

const brands = [
  { name: "Amul",        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Amul_Logo.png" },
  { name: "Britannia",   logo: "https://companieslogo.com/img/orig/BRITANNIA.NS-f03a94e8.png?t=1720244491" },
  { name: "MTR Foods",   logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/MTR_Foods_Logo.svg" },
  { name: "Haldiram's",  logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Haldiram%27s_Logo_SVG.svg" },
  { name: "ITC Foods",   logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg" },
  { name: "Mother Dairy",logo: "https://www.motherdairy.com/images/logo.png" },
];

const features = [
  {
    icon: Leaf,
    title: "Direct Mediterranean Sourcing",
    description: "Premium olives, cheeses, oils, and pickles from trusted regional producers.",
  },
  {
    icon: ShieldCheck,
    title: "Food Safety Certified",
    description: "FSSAI-approved and quality-certified products with reliable documentation.",
  },
  {
    icon: Truck,
    title: "Flexible Order Quantities",
    description: "Order programs designed for restaurants, hotels, caterers, and chains.",
  },
];

const products = [
  {
    name: "Olives",
    description: "Artisanal green and Kalamata varieties.",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=900&q=80",
  },
  {
    name: "Cheeses",
    description: "Feta, halloumi, and premium dairy staples.",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=900&q=80",
  },
  {
    name: "Pickles",
    description: "Mediterranean fermented vegetables and mezze.",
    image: "https://images.unsplash.com/photo-1601924582975-41e8b6d5a6a5?w=900&q=80",
  },
];

const steps = [
  { icon: Globe2, title: "Browse & Select", description: "Pick the Mediterranean products your kitchen needs." },
  { icon: ClipboardList, title: "Get Custom Quote", description: "Receive pricing and order terms tailored to your operation." },
  { icon: PackageCheck, title: "Receive & Reorder", description: "Get reliable delivery and reorder with confidence." },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Executive Chef",
    quote:
      "Food Sources has transformed our supply chain. Their olive oils, cheeses, and preserved products arrive consistently fresh and ready for service.",
    initials: "PS",
  },
  {
    name: "Rajesh Mehta",
    role: "Restaurant Group Owner",
    quote:
      "Their flexible order quantities and certified products give us confidence across every branch. The service is fast, practical, and dependable.",
    initials: "RM",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E63B2E]">
      <span className="h-px w-10 bg-[#E63B2E]" />
      {children}
      <span className="h-px w-10 bg-[#E63B2E]" />
    </p>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white pt-[70px] text-[#1A1A1A]">

      <HeroSection />

      {/* ── WHY CHEFS CHOOSE US ── */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[42%_58%]">
          <img
            src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80"
            alt="Chef preparing Mediterranean food"
            className="h-[360px] w-full rounded-2xl object-cover shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          />
          <div className="max-w-[620px] text-center md:text-left">
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#E63B2E]">Why India's Top Chefs Choose Us</p>
            <h2 className="text-[30px] font-bold leading-tight md:text-[36px]">Driving the Future of Food Distribution</h2>
            <p className="mt-4 text-[15px] text-[#666666]">Delivering excellence in every aspect of our service</p>
            <div className="mt-7 space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 text-left">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1A3C2E] text-white">
                    <Check size={14} />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold">{feature.title}</h3>
                    <p className="text-[13px] text-[#666666]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E63B2E] px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#cf3025]"
            >
              Learn About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ACTIVITIES & SUBSIDIARIES ── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          <Eyebrow>Activities & Subsidiaries</Eyebrow>
          <h2 className="text-center text-[30px] font-bold md:text-[36px]">Driving the Future of Food Distribution</h2>
          <p className="mt-3 text-center text-[15px] text-[#888888]">Delivering excellence in every aspect of our service</p>

          {/* Desktop: big card (row-span-2) + 2×2 grid */}
          <div
            className="mt-10 hidden gap-4 md:grid"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 260px)" }}
          >
            {/* Big card — spans 2 rows */}
            <article
              className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              style={{ gridRow: "span 2" }}
            >
              <img
                src={activities[0].image}
                alt={activities[0].title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-5 text-white">
                <h3 className="text-[15px] font-semibold">{activities[0].title}</h3>
                <p className="mt-1 text-[12px] leading-5 text-white/80">{activities[0].description}</p>
              </div>
            </article>
            {/* 4 small cards */}
            {activities.slice(1, 5).map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-5 text-white">
                  <h3 className="text-[15px] font-semibold">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-white/80">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Mobile: all 6 items in a single column */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:hidden">
            {activities.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[220px] overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-[220px] w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/60 p-5 text-white">
                  <h3 className="text-[15px] font-semibold">{item.title}</h3>
                  <p className="mt-1 text-[12px] leading-5 text-white/80">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-[42%_58%]">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#E63B2E]">
              <span className="h-px w-8 bg-[#E63B2E] inline-block" />
              Brands
              <span className="h-px w-8 bg-[#E63B2E] inline-block" />
            </p>
            <h2 className="text-[30px] font-bold leading-tight text-[#1A1A1A] md:text-[36px]">
              Trusted by leading establishments
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#666666]">
              Olives or cheese, pickles or olive oil. Our products cover a large variety of premium Mediterranean categories with over 600 quality products to choose from.
            </p>
            <Link
              href="/brands"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#E63B2E] pl-6 pr-3 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#cf3025]"
            >
              Checkout
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-[15px]">↗</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {brands.map((brand) => (
              <BrandCard key={brand.name} name={brand.name} logo={brand.logo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (feature cards) ── */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          <Eyebrow>Choose Us</Eyebrow>
          <h2 className="text-center text-[30px] font-bold md:text-[36px]">Why India's Top Chefs Choose Us</h2>
          <p className="mt-3 text-center text-[15px] text-[#888888]">Delivering excellence in every aspect of our service</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-xl border border-[#E8E8E8] bg-white px-6 py-8 text-center"
                >
                  <span className="mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#EAF4EF] text-[#159257]">
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-[14px] leading-6 text-[#666666]">{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          <Eyebrow>Our Premium Selection</Eyebrow>
          <h2 className="text-center text-[30px] font-bold md:text-[36px]">Explore the products that define our range</h2>
          <div className="mt-4 text-center">
            <Link href="/products" className="text-[14px] font-semibold text-[#E63B2E]">
              See All <ArrowRight className="inline" size={14} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              >
                <img src={product.image} alt={product.name} className="h-[220px] w-full object-cover" />
                <div className="flex items-end justify-between p-5">
                  <div>
                    <h3 className="text-[16px] font-bold">{product.name}</h3>
                    <p className="mt-1 text-[13px] text-[#666666]">{product.description}</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A3C2E] text-white">
                    <ArrowRight size={15} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#F8F8F8] py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          <Eyebrow>Start in 3 Simple Steps</Eyebrow>
          <h2 className="mx-auto max-w-[600px] text-center text-[28px] font-bold leading-tight md:text-[32px]">
            Your journey to premium Mediterranean ingredients starts here
          </h2>
          <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute left-[17%] right-[17%] top-12 hidden border-t-2 border-dashed border-[#CCCCCC] md:block" />
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="relative z-10 text-center">
                  <p className="text-[12px] font-semibold text-[#E63B2E]">Step {index + 1}</p>
                  <span className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#159257] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                    <Icon size={30} />
                  </span>
                  <h3 className="mt-5 text-[16px] font-semibold">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-[250px] text-[14px] leading-6 text-[#666666]">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="text-center text-[30px] font-bold md:text-[36px]">What Our Partners Say</h2>
          <p className="mt-3 text-center text-[15px] text-[#888888]">Trusted by elite restaurants and premium operators across India</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-xl border border-[#EEEEEE] bg-white p-7">
                <p className="text-[#F5B301]">*****</p>
                <p className="mt-4 text-[14px] leading-7 text-[#444444]">{item.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E63B2E] text-[12px] font-bold text-white">
                    {item.initials}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold">{item.name}</h3>
                    <p className="text-[12px] text-[#666666]">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-[#1A3C2E] py-20">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-[62%_38%]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B7D9C8]">Partner With Us</p>
            <h2 className="mt-4 max-w-[520px] text-[30px] font-bold leading-tight text-white md:text-[36px]">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="mt-4 text-[15px] text-white/80">Join hundreds of satisfied partners across India</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/onboarding"
                className="rounded-full bg-[#E63B2E] px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#cf3025]"
              >
                Get Started Today
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white px-7 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="rounded-xl bg-white/95 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h3 className="text-[18px] font-bold text-[#1A1A1A]">What You Get</h3>
            {["Dedicated Account Manager", "Flexible Payment Terms", "Next Day Delivery", "Best Price Guarantee", "Quality Certified Products"].map(
              (item) => (
                <p key={item} className="flex items-center gap-3 py-2 text-[14px] text-[#333333]">
                  <Check size={16} className="text-[#159257]" /> {item}
                </p>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
