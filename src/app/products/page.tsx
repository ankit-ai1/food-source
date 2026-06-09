"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";

const categoryTabs = [
  { id: "olives",  name: "Olives",  image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=80&q=80" },
  { id: "dairy",   name: "Dairy",   image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=80&q=80" },
  { id: "pickles", name: "Pickles", image: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=80&q=80" },
  { id: "jam",     name: "Jam",     image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=80&q=80" },
];

const subcategories: Record<string, string[]> = {
  olives:  ["All Olives", "Green", "Black", "Kalamata", "Stuffed", "Grilled", "Other"],
  dairy:   ["All Dairy", "Cheese", "Feta", "Halloumi", "Butter", "Cream", "Other"],
  pickles: ["All Pickles", "Cucumber", "Pepper", "Mixed", "Stuffed", "Chilli", "Other"],
  jam:     ["All Jam", "Strawberry", "Apricot", "Fig", "Orange", "Berry", "Other"],
};

const allProducts = [
  { id: 1,  slug: "selected-greek-black-olives",            name: "Selected Greek Black Olives",               weight: "10kg", rating: 5.0, category: "olives",  image: "https://images.unsplash.com/photo-1558030087-b7d6f4d40c6a?w=400&q=80" },
  { id: 2,  slug: "grilled-olives",                         name: "Grilled Olives",                            weight: "1kg",  rating: 5.0, category: "olives",  image: "https://images.unsplash.com/photo-1587401988879-5929e14e03df?w=400&q=80" },
  { id: 3,  slug: "selected-greek-black-kalamata-olives",   name: "Selected Greek Black Kalamata Olives",      weight: "10kg", rating: 5.0, category: "olives",  image: "https://images.unsplash.com/photo-1611171711791-b34e43f64e82?w=400&q=80" },
  { id: 4,  slug: "green-olive",                            name: "Green Olive",                               weight: "10kg", rating: 5.0, category: "olives",  image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" },
  { id: 5,  slug: "whole-green-olives-picholines-with-chilli", name: "Whole Green Olives Picholines With Chilli", weight: "10kg", rating: 5.0, category: "olives",  image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=400&q=80" },
  { id: 6,  slug: "whole-green-olives-picholines",          name: "Whole Green Olives Picholines",             weight: "10kg", rating: 5.0, category: "olives",  image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&q=80" },
  { id: 7,  slug: "premium-feta-cheese",                    name: "Premium Feta Cheese",                       weight: "5kg",  rating: 5.0, category: "dairy",   image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80" },
  { id: 8,  slug: "halloumi-cheese",                        name: "Halloumi Cheese",                           weight: "2kg",  rating: 4.8, category: "dairy",   image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80" },
  { id: 9,  slug: "halloumi-cheese-aged",                   name: "Aged White Cheese",                         weight: "3kg",  rating: 5.0, category: "dairy",   image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&q=80" },
  { id: 10, slug: "labneh-cream-cheese",                    name: "Labneh Cream Cheese",                       weight: "1kg",  rating: 4.9, category: "dairy",   image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80" },
  { id: 11, slug: "mixed-mediterranean-pickles",            name: "Mixed Mediterranean Pickles",               weight: "5kg",  rating: 5.0, category: "pickles", image: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=400&q=80" },
  { id: 12, slug: "green-chilli-pickles",                   name: "Green Chilli Pickles",                      weight: "2kg",  rating: 4.8, category: "pickles", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=400&q=80" },
  { id: 13, slug: "stuffed-pepper-pickles",                 name: "Stuffed Pepper Pickles",                    weight: "3kg",  rating: 5.0, category: "pickles", image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?w=400&q=80" },
  { id: 14, slug: "fig-jam",                                name: "Fig Jam",                                   weight: "1kg",  rating: 4.9, category: "jam",     image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
  { id: 15, slug: "apricot-jam",                            name: "Apricot Jam",                               weight: "1kg",  rating: 5.0, category: "jam",     image: "https://images.unsplash.com/photo-1571167366136-b57e40467e1f?w=400&q=80" },
  { id: 16, slug: "strawberry-jam",                         name: "Strawberry Jam",                            weight: "1kg",  rating: 4.8, category: "jam",     image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400&q=80" },
];

const heroBannerImages: Record<string, string> = {
  olives:  "https://res.cloudinary.com/dtg3lepr4/image/upload/v1781026527/ChatGPT_Image_Jun_9_2026_11_05_10_PM_xpn5qa.png",
  dairy:   "https://res.cloudinary.com/dtg3lepr4/image/upload/v1781026250/ChatGPT_Image_Jun_9_2026_11_00_29_PM_cfp6pb.png",
  pickles: "https://res.cloudinary.com/dtg3lepr4/image/upload/v1781025825/ChatGPT_Image_Jun_9_2026_10_53_02_PM_mttzjn.png",
  jam:     "https://res.cloudinary.com/dtg3lepr4/image/upload/v1781026709/ChatGPT_Image_Jun_9_2026_11_08_09_PM_ycqsdr.png",
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory]       = useState("olives");
  const [activeSubcategory, setActiveSubcategory] = useState("All Olives");
  const [search, setSearch]                       = useState("");
  const [sortBy, setSortBy]                       = useState("Relevance");

  const subs = subcategories[activeCategory] ?? [];

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat    = p.category === activeCategory;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  function handleCategoryChange(catId: string) {
    setActiveCategory(catId);
    setActiveSubcategory(subcategories[catId]?.[0] ?? "");
    setSearch("");
  }

  const activeCatLabel = categoryTabs.find((c) => c.id === activeCategory)?.name ?? "";

  return (
    <div className="pt-[70px]">

      {/* ── SECTION 1: HERO BANNER ─────────────────────────────────── */}
      <section className="relative overflow-hidden w-full bg-[#f5f5f0]" style={{ height: "56.25vw", maxHeight: "calc(100vh - 70px)", minHeight: "220px" }}>
        <img
          src={heroBannerImages[activeCategory]}
          alt={activeCatLabel}
          className="w-full h-full object-contain md:object-cover"
          style={{
            objectPosition: "center center",
            display: "block",
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Slide dots at bottom center */}
        <div style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "6px",
          zIndex: 10,
        }}>
          {categoryTabs.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                width: activeCategory === cat.id ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: activeCategory === cat.id ? "#E63B2E" : "rgba(255,255,255,0.6)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── SECTION 2: CATEGORY TABS ───────────────────────────────── */}
      <section style={{ background: "white", borderBottom: "1px solid #EEEEEE", padding: "20px 0" }}>
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center px-4 md:px-10" style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto pb-1">
            {categoryTabs.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", cursor: "pointer", background: "none", border: "none", padding: 0, flexShrink: 0 }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{ width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover", border: activeCategory === cat.id ? "2px solid #E63B2E" : "2px solid #E0E0E0" }}
                />
                <span style={{ fontSize: "13px", fontWeight: activeCategory === cat.id ? 700 : 500, color: activeCategory === cat.id ? "#E63B2E" : "#666", textDecoration: activeCategory === cat.id ? "underline" : "none" }}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="self-start md:self-auto"
            style={{ border: "1px solid #DDD", borderRadius: "6px", padding: "8px 12px", fontSize: "13px", color: "#333", cursor: "pointer", background: "white", flexShrink: 0 }}
          >
            <option>↑↓ Sort By: Relevance</option>
            <option>↑↓ Sort By: Name A–Z</option>
            <option>↑↓ Sort By: Name Z–A</option>
            <option>↑↓ Sort By: Rating</option>
          </select>
        </div>
      </section>

      {/* ── SECTION 3: SEARCH BAR ──────────────────────────────────── */}
      <section style={{ background: "#F8F8F8", padding: "16px 0" }}>
        <div className="px-4 md:px-10" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <Search size={16} style={{ position: "absolute", left: "calc(1rem + 16px)", top: "50%", transform: "translateY(-50%)", color: "#999", pointerEvents: "none" }} />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "100%", height: "44px", border: "1px solid #E0E0E0", borderRadius: "8px", padding: "0 16px 0 40px", fontSize: "14px", background: "white", outline: "none", boxSizing: "border-box" }}
          />
        </div>
      </section>

      {/* ── SECTION 4: MAIN CONTENT ────────────────────────────────── */}
      <section style={{ background: "#FAFAFA", minHeight: "500px" }}>
        <div
          className="flex flex-col md:flex-row px-4 md:px-10"
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 0", gap: "24px" }}
        >
          {/* SIDEBAR — desktop: fixed width | mobile: horizontal scroll */}
          <aside
            className="hidden md:block"
            style={{ width: "200px", flexShrink: 0, borderRight: "1px solid #EEEEEE", paddingRight: "16px" }}
          >
            <h3 style={{ color: "#E63B2E", fontSize: "16px", fontWeight: 700, marginBottom: "12px" }}>
              {activeCatLabel}
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {subs.map((sub) => (
                <li key={sub}>
                  <button
                    onClick={() => setActiveSubcategory(sub)}
                    style={{
                      width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "10px 14px", fontSize: "14px", cursor: "pointer", border: "none",
                      borderRadius: "6px", textAlign: "left",
                      background: activeSubcategory === sub ? "#E63B2E" : "transparent",
                      color: activeSubcategory === sub ? "white" : "#333",
                    }}
                  >
                    {sub}
                    <ChevronRight size={14} style={{ opacity: 0.6, flexShrink: 0 }} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* MOBILE SUBCATEGORY TABS */}
          <div className="flex md:hidden overflow-x-auto gap-2 pb-2">
            {subs.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                style={{
                  flexShrink: 0, padding: "7px 14px", borderRadius: "999px", fontSize: "13px", cursor: "pointer", border: "1px solid",
                  borderColor: activeSubcategory === sub ? "#E63B2E" : "#DDD",
                  background: activeSubcategory === sub ? "#E63B2E" : "white",
                  color: activeSubcategory === sub ? "white" : "#555",
                  fontWeight: activeSubcategory === sub ? 600 : 400,
                }}
              >
                {sub}
              </button>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <main style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>
              {filtered.length} products found
            </p>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#999" }}>
                No products found
              </div>
            ) : (
              <div
                className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                style={{ gap: "16px" }}
              >
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    style={{ background: "white", border: "1px solid #EEEEEE", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}
                  >
                    {/* Image */}
                    <div style={{ height: "180px", background: "#F8F8F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxHeight: "160px", objectFit: "contain", padding: "16px" }}
                      />
                    </div>
                    {/* Info */}
                    <div style={{ padding: "12px 16px 0" }}>
                      <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px", lineHeight: 1.3 }}>
                        {product.name}
                      </h3>
                      <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>{product.weight}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ color: "#F5C518", fontSize: "13px" }}>★★★★★</span>
                        <span style={{ fontSize: "12px", color: "#888" }}>{product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    {/* Buttons */}
                    <div style={{ padding: "12px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginTop: "auto" }}>
                      <Link
                        href={`/products/${product.slug}`}
                        style={{ fontSize: "12px", color: "#666", textDecoration: "underline" }}
                      >
                        View Details
                      </Link>
                      <Link
                        href="/order"
                        style={{ background: "#E63B2E", color: "white", borderRadius: "20px", padding: "8px 16px", fontSize: "12px", fontWeight: 600, textDecoration: "none", flexShrink: 0 }}
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </section>

      {/* ── SECTION 5: CTA BANNER ──────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#1A3C2E", padding: "80px 0" }}>
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }}
        />
        <div className="grid grid-cols-1 md:grid-cols-[62%_38%] gap-8 px-4 md:px-10" style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", alignItems: "center" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#B7D9C8" }}>Partner With Us</p>
            <h2 style={{ marginTop: "16px", fontSize: "36px", fontWeight: 700, color: "white", lineHeight: 1.2, maxWidth: "520px" }}>
              Ready to Transform Your Supply Chain?
            </h2>
            <p style={{ marginTop: "16px", fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
              Join hundreds of satisfied partners across India
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/onboarding" style={{ background: "#E63B2E", color: "white", borderRadius: "999px", padding: "12px 28px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                Get Started Today
              </Link>
              <Link href="/contact" style={{ border: "1px solid white", color: "white", borderRadius: "999px", padding: "12px 28px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                Talk to Sales
              </Link>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.95)", borderRadius: "12px", padding: "28px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1A1A1A", marginBottom: "16px" }}>What You Get</h3>
            {["Dedicated Account Manager", "Flexible Payment Terms", "Next Day Delivery", "Best Price Guarantee", "Quality Certified Products"].map((item) => (
              <p key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", fontSize: "14px", color: "#333" }}>
                <span style={{ color: "#159257", fontWeight: 700 }}>✓</span> {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
