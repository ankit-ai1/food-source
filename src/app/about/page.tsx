import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { timeline, stats, brands } from "@/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Food Sources India — a family-owned enterprise bringing authentic Mediterranean flavours to India since 2015.",
};

const values = [
  { title: "Respect", description: "We earn respect through our commitment to justice, trust, and integrity in all of our relationships." },
  { title: "Dedication", description: "We take pride in our work and strive to achieve outstanding results." },
  { title: "Excellence", description: "We excel in accomplishing our business and offer regularly the best levels of quality." },
  { title: "Cooperation", description: "We work in a team spirit, cooperate transparently, and share knowledge and skills." },
  { title: "Flexibility", description: "We do our business with flexibility and high efficiency, making bold decisions that enhance the interest of our partners." },
  { title: "Innovation", description: "We strive always to develop our business and maximize the creative capabilities of our employees." },
];

const whyUs = [
  { title: "Direct Producer Relationships", description: "We work directly with farms and cooperatives — no middlemen, no markups. Authentic products at competitive prices with full traceability back to the source." },
  { title: "Regulatory Compliance Built In", description: "Every product is FSSAI-approved and quality-certified. Our documentation team handles all compliance so you never face delays or regulatory headaches." },
  { title: "Flexible Order Structures", description: "From single-location restaurants to national chains, our logistics model scales to your operation." },
  { title: "Cold Chain Integrity", description: "Temperature-controlled warehousing and last-mile fleet ensures perishables arrive in perfect condition, every single time." },
  { title: "Dedicated Account Support", description: "Every client gets a named account manager. One point of contact for orders, queries, and feedback — no call centres, no ticket queues." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
          alt="About Food Sources"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
        <div className="relative container-site pb-20 pt-40">
          <p className="section-label text-brand-300">
            <span className="h-px w-6 bg-brand-400 inline-block" />
            About Us
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white mt-3 max-w-2xl text-balance">
            A family's passion for Mediterranean excellence
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading">Introduction</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Food Sources India is a family-owned enterprise that has been in operation for over 8 years. Established in 2015, we specialize in supplying fresh and nutritious food in Deli to key accounts, restaurants, catering companies, and grocery stores across India.
                </p>
                <p>
                  The company prides itself on providing quality products that not only meet customer needs but also adhere to the highest standards of safety and hygiene. From sourcing only the freshest ingredients to ensuring secure and safe packaging, Food Sources Trading Co is committed to delivering top-notch customer service.
                </p>
                <p>
                  We are a leader in the domestic food industry, and our products are trusted by customers across India. We are committed to providing the highest quality food ingredients while also being mindful of the environment and making a positive contribution to society.
                </p>
              </div>
              <Link href="/onboarding" className="btn-primary mt-8 inline-flex">
                Become a Partner
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1565118531796-763e5082d113?w=1200&q=85"
                  alt="Food Sources operations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-stone-50">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="section-label justify-center">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Purpose
            </p>
            <h2 className="section-heading mt-3">Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80"
                alt="Our Vision"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">Our Vision</span>
                <p className="text-white text-lg font-medium mt-2 leading-relaxed">
                  We strive to make our products the preferred choice for the consumer through our leadership in the target markets and the provision of high-quality, balanced foodstuffs.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
                alt="Our Mission"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">Our Mission</span>
                <p className="text-white text-lg font-medium mt-2 leading-relaxed">
                  Provides many high-quality products at a competitive price for hotels, restaurants and food businesses across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="section-label justify-center">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Our Values
            </p>
            <h2 className="section-heading mt-3">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-stone-100 bg-stone-50 hover:border-brand-200 hover:bg-white transition-all duration-200 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center mb-4">
                  <span className="text-brand-600 font-heading font-semibold text-sm">
                    {v.title.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-stone-900">{v.title}</h3>
                <p className="text-sm text-stone-500 mt-2 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%"><defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
        </div>
        <div className="relative container-site">
          <div className="text-center mb-16">
            <p className="section-label justify-center text-brand-300">
              <span className="h-px w-6 bg-brand-400 inline-block" />
              Our Journey
            </p>
            <h2 className="section-heading mt-3 text-white">Our Journey</h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone-700 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 md:max-w-[calc(50%-3rem)] pl-12 md:pl-0">
                    <div className={`p-6 rounded-2xl bg-stone-800 border border-stone-700 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="text-brand-400 font-mono text-sm font-bold">{item.year}</span>
                      <h3 className="font-semibold text-white mt-1">{item.title}</h3>
                      <p className="text-stone-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-500 border-4 border-stone-900 z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why businesses choose us */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">
                <span className="h-px w-6 bg-brand-500 inline-block" />
                Our Difference
              </p>
              <h2 className="section-heading mt-3">
                Why businesses across India choose Food Sources
              </h2>
              <p className="section-sub mt-4">
                We don't just distribute food — we build long-term partnerships rooted in transparency, traceability, and trust.
              </p>

              <ul className="mt-8 space-y-5">
                {whyUs.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckCircle2 className="shrink-0 text-olive-500 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-semibold text-stone-900">{item.title}</h4>
                      <p className="text-sm text-stone-500 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
                  alt="Why choose Food Sources"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-600 py-14">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-semibold text-white">Strategy Compatibility</h2>
            <p className="text-white/70 mt-2">Targeting trusted retailer and hospitality houses to enforce loyalty</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-5xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Kitchen */}
      <section className="section-padding bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80"
                alt="From Farm to Kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="section-label">
                <span className="h-px w-6 bg-brand-500 inline-block" />
                From Farm to Kitchen
              </p>
              <h2 className="section-heading mt-3">From Farm to Kitchen</h2>
              <p className="section-sub mt-4">
                We personally visit every supplier to ensure quality standards are met. Our partnerships with Mediterranean producers span generations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {["Freshness", "Quality", "Trust", "Sustainability"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-stone-700">
                    <CheckCircle2 className="text-olive-500 shrink-0" size={16} />
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/products" className="btn-primary mt-8 inline-flex">
                Explore Our Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
