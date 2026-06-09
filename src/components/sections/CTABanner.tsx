import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Dedicated Account Manager",
  "Flexible Payment Terms",
  "Next-Day Delivery",
  "Best Price Guarantee",
  "Quality Certified Products",
];

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-stone-900">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80"
        alt="Partner with Food Sources"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900/60" />

      <div className="relative container-site py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="section-label text-brand-300">
              <span className="h-px w-6 bg-brand-400 inline-block" />
              Partner With Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white mt-3 text-balance">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Join hundreds of satisfied partners across India
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/onboarding" className="btn-primary text-base px-8 py-4">
                Get Started Today
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="font-semibold text-white text-lg mb-6">What You Get</h3>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="text-olive-400 shrink-0" size={20} />
                  <span className="text-white/80 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
