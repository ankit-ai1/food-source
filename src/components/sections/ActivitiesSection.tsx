import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { subsidiaries } from "@/data";

export function ActivitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="section-label justify-center">
            <span className="h-px w-6 bg-brand-500 inline-block" />
            Activities & Subsidiaries
          </p>
          <h2 className="section-heading mt-3">
            Driving the Future of Food Distribution
          </h2>
          <p className="section-sub mt-4">
            Delivering excellence in every aspect of our service
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((sub, i) => (
            <article
              key={sub.title}
              className="group relative overflow-hidden rounded-2xl bg-stone-100 aspect-[4/3] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={sub.image}
                alt={sub.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-semibold text-white text-lg leading-snug">
                  {sub.title}
                </h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  {sub.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
