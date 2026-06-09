import { Quote } from "lucide-react";
import { testimonials } from "@/data";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="section-label justify-center">
            <span className="h-px w-6 bg-brand-500 inline-block" />
            Testimonials
          </p>
          <h2 className="section-heading mt-3">What Our Partners Say</h2>
          <p className="section-sub mt-4">
            Trusted by chefs and restaurant owners across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <article
              key={t.id}
              className="relative p-8 rounded-3xl bg-stone-50 border border-stone-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white"
            >
              {/* Quote icon */}
              <Quote className="text-brand-200 mb-4 shrink-0" size={32} fill="currentColor" />

              {/* Quote text */}
              <blockquote className="flex-1 text-stone-600 text-sm leading-relaxed">
                "{t.quote}"
              </blockquote>

              {/* Divider */}
              <div className="my-6 h-px bg-stone-200" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-xs text-stone-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
