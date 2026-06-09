import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data";

export function BrandsSection() {
  // Duplicate for infinite scroll illusion
  const allBrands = [...brands, ...brands];

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Brands
            </p>
            <h2 className="section-heading mt-3">Trusted by leading establishments</h2>
            <p className="section-sub mt-3 max-w-xl">
              Over 600 quality products across premium Mediterranean brands — sourced and distributed with care.
            </p>
          </div>
          <Link href="/brands" className="btn-secondary shrink-0">
            View All Brands
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden py-4">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 w-max animate-marquee">
            {allBrands.map((brand, i) => (
              <Link
                key={`${brand.id}-${i}`}
                href={`/brands#${brand.slug}`}
                className="flex flex-col items-center justify-center gap-3 w-48 h-32 bg-white rounded-2xl shadow-sm border border-stone-100 hover:border-brand-200 hover:shadow-md transition-all duration-200 group px-6 shrink-0"
              >
                <span className="font-heading font-semibold text-xl text-stone-700 group-hover:text-brand-700 transition-colors capitalize">
                  {brand.name}
                </span>
                <span className="text-xs text-stone-400">{brand.country}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Brand cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brands#${brand.slug}`}
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-stone-100 hover:border-brand-200 hover:shadow-lg transition-all duration-200 text-center"
            >
              <span className="font-heading font-semibold text-lg text-stone-700 group-hover:text-brand-700 transition-colors capitalize">
                {brand.name}
              </span>
              <span className="text-xs text-stone-400 mt-1">{brand.productCount} products</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
