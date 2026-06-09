"use client";
import Link from "next/link";
import { CTABanner } from "@/components/sections/CTABanner";


const brandsList = [
  {
    id: 1,
    slug: "amul",
    name: "Amul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Amul_Logo.png",
    description: "India's largest dairy cooperative brand, trusted by millions across the country for quality dairy products.",
  },
  {
    id: 2,
    slug: "britannia",
    name: "Britannia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Britannia_Industries_logo.png",
    description: "One of India's leading food companies with a 100+ year legacy in biscuits, dairy and bakery products.",
  },
  {
    id: 3,
    slug: "mtr",
    name: "MTR Foods",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/MTR_Foods_Logo.svg",
    description: "Bangalore-based food brand known for authentic ready-to-eat meals, spices and traditional Indian recipes.",
  },
  {
    id: 4,
    slug: "haldirams",
    name: "Haldiram's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Haldiram%27s_Logo_SVG.svg",
    description: "India's most loved snack and sweets brand with a wide range of namkeens, sweets and ready meals.",
  },
  {
    id: 5,
    slug: "itc",
    name: "ITC Foods",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg",
    description: "Diversified food brand offering premium packaged foods, spices, staples and frozen products across India.",
  },
  {
    id: 6,
    slug: "motherdairy",
    name: "Mother Dairy",
    logo: "https://www.motherdairy.com/images/logo.png",
    description: "Trusted dairy and food brand supplying fresh milk, ice cream, edible oils and vegetables across India.",
  },
];

export default function BrandsPage() {
  return (
    <div className="pt-[70px]">

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "200px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80"
          alt="Brands"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 px-5 md:px-16">
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "white", marginBottom: "8px" }}>
            Our Brands
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", maxWidth: "500px" }}>
            Explore our trusted brand partners across dairy, olives, and pickles. Click any brand to view its full profile.
          </p>
        </div>
      </section>

      {/* ── BRAND GRID ── */}
      <section style={{ background: "#F8F8F8", padding: "60px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }} className="px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandsList.map((brand) => (
              <article
                key={brand.id}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  border: "1px solid #EEEEEE",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Logo area */}
                <div style={{
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "32px",
                  borderBottom: "1px solid #F0F0F0",
                  background: "white",
                }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{
                      maxHeight: "90px",
                      maxWidth: "180px",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span style="font-size:32px;font-weight:800;color:#1A3C2E">${brand.name.charAt(0)}</span>`;
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "8px",
                  }}>
                    {brand.name}
                  </h2>
                  <p style={{
                    fontSize: "13px",
                    color: "#666",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    flex: 1,
                  }}>
                    {brand.description}
                  </p>

                  {/* View Details button */}
                  <Link
                    href={`/brands/${brand.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "#E63B2E",
                      color: "white",
                      borderRadius: "999px",
                      padding: "10px 20px",
                      fontSize: "13px",
                      fontWeight: 600,
                      textDecoration: "none",
                      width: "fit-content",
                    }}
                  >
                    View Details
                    <span style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                    }}>
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
