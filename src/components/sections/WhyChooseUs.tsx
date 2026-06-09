import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Direct Mediterranean Sourcing",
    description: "Premium ingredients sourced directly from Greece, Turkey, and Morocco — no middlemen, no markups.",
  },
  {
    title: "Food Safety Certified",
    description: "FSSAI approved with full quality certification and complete import documentation handled by our team.",
  },
  {
    title: "Flexible Order Quantities",
    description: "From single-location restaurants to national chains — we scale to your operation.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-stone-50 overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85"
                alt="Premium Mediterranean food"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-stone-100 max-w-[200px]">
              <p className="text-3xl font-heading font-semibold text-brand-600">8+</p>
              <p className="text-sm text-stone-500 mt-0.5">Years serving India's finest establishments</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Why India's Top Chefs Choose Us
            </p>
            <h2 className="section-heading mt-3 text-balance">
              Driving the Future of Food Distribution
            </h2>
            <p className="section-sub mt-4">
              Delivering excellence in every aspect of our service — from source to your kitchen.
            </p>

            <ul className="mt-8 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <CheckCircle2 className="shrink-0 text-olive-500 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-stone-900">{f.title}</h3>
                    <p className="text-sm text-stone-500 mt-0.5 leading-relaxed">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary mt-10 inline-flex">
              Learn About Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
