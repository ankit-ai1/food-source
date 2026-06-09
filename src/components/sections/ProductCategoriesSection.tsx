import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data";

const categories = [
  {
    id: "olives",
    label: "Olives",
    description: "Hand-picked Mediterranean olives from Greece, Turkey & Morocco",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    count: products.filter((p) => p.category === "olives").length,
  },
  {
    id: "cheeses",
    label: "Cheeses",
    description: "Authentic feta, halloumi and specialty cheeses from Europe",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80",
    count: products.filter((p) => p.category === "cheeses").length,
  },
  {
    id: "pickles",
    label: "Pickles",
    description: "Naturally fermented vegetables with traditional recipes",
    image: "https://images.unsplash.com/photo-1601924582975-41e8b6d5a6a5?w=800&q=80",
    count: products.filter((p) => p.category === "pickles").length,
  },
];

export function ProductCategoriesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Our Premium Selection
            </p>
            <h2 className="section-heading mt-3">
              Explore the products that define our range
            </h2>
          </div>
          <Link href="/products" className="btn-secondary shrink-0">
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-stone-100 block"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-white/60 mb-1">{cat.count} products</p>
                    <h3 className="font-heading text-2xl font-semibold text-white">{cat.label}</h3>
                    <p className="text-sm text-white/70 mt-1 leading-snug">{cat.description}</p>
                  </div>
                  <div className="p-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 group-hover:bg-brand-600 group-hover:border-brand-600 transition-all duration-300 shrink-0">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.filter((p) => p.featured).slice(0, 4).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group card overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 flex-wrap">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs font-medium text-olive-700 bg-olive-50 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-semibold text-stone-900 mt-2 group-hover:text-brand-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-stone-400 mt-1">{product.origin}</p>
                <p className="text-sm text-stone-500 mt-2 line-clamp-2">{product.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
