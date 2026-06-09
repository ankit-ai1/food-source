import { Search, FileText, Package } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Browse & Select",
    description: "Explore our premium product catalog and select what you need",
    color: "bg-brand-50 text-brand-600",
  },
  {
    step: "02",
    icon: FileText,
    title: "Get Custom Quote",
    description: "Receive personalized pricing tailored to your business needs",
    color: "bg-olive-50 text-olive-600",
  },
  {
    step: "03",
    icon: Package,
    title: "Receive & Reorder",
    description: "Fast delivery with easy reordering for regular customers",
    color: "bg-stone-100 text-stone-600",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-stone-900 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container-site">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-label justify-center text-brand-300">
            <span className="h-px w-6 bg-brand-400 inline-block" />
            Start in 3 Simple Steps
          </p>
          <h2 className="section-heading mt-3 text-white">
            Your journey to premium Mediterranean ingredients starts here
          </h2>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.75rem] left-[calc(16.667%+2rem)] right-[calc(16.667%+2rem)] h-px bg-gradient-to-r from-brand-500/30 via-olive-500/30 to-stone-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-6 ring-8 ring-stone-800`}>
                      <Icon size={32} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-stone-700 border border-stone-600 flex items-center justify-center text-xs font-mono font-bold text-stone-300">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-white">{step.title}</h3>
                  <p className="text-stone-400 mt-2 text-sm leading-relaxed max-w-xs">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Open Account — Get Started Free
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-stone-600 px-7 py-3.5 text-sm font-semibold text-stone-300 hover:border-stone-400 hover:text-white transition-all"
          >
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
