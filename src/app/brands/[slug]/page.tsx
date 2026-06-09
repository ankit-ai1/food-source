import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/sections/CTABanner";

const brandsData = [
  {
    slug: "amul",
    name: "Amul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Amul_Logo.png",
    heroImage: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1600&q=80",
    description: "India's largest dairy cooperative brand, trusted by millions across the country for quality dairy products.",
    fullDescription: "Amul is India's largest food brand and the world's largest pouched milk brand. Founded in 1946 as part of the cooperative movement, Amul has grown to become a symbol of quality and trust in Indian households. The brand covers dairy products including milk, butter, cheese, ice cream, and beverages. Its vast distribution network ensures fresh products reach every corner of India, making it the preferred choice for hotels, restaurants, and food service operators nationwide.",
  },
  {
    slug: "britannia",
    name: "Britannia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Britannia_Industries_logo.png",
    heroImage: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&q=80",
    description: "One of India's leading food companies with a 100+ year legacy in biscuits, dairy and bakery products.",
    fullDescription: "Britannia Industries is one of India's most trusted food brands with over 100 years of heritage. Known primarily for its biscuits and bakery products, Britannia has expanded into dairy with a premium range of cheese, butter, and flavored milk. The brand's commitment to quality and nutrition has made it a staple in Indian kitchens and a preferred supplier for the food service industry across hotels, cafes, and restaurants.",
  },
  {
    slug: "mtr",
    name: "MTR Foods",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f4/MTR_Foods_Logo.svg",
    heroImage: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1600&q=80",
    description: "Bangalore-based food brand known for authentic ready-to-eat meals, spices and traditional Indian recipes.",
    fullDescription: "MTR Foods, founded in 1924 in Bangalore, is one of India's oldest and most respected food brands. Specializing in ready-to-eat meals, instant mixes, spices, and condiments, MTR brings authentic South Indian and pan-Indian flavors to kitchens across the country. Their products are FSSAI certified and trusted by professional chefs and home cooks alike, making them a natural fit for food service operations looking for consistent, authentic taste.",
  },
  {
    slug: "haldirams",
    name: "Haldiram's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Haldiram%27s_Logo_SVG.svg",
    heroImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1600&q=80",
    description: "India's most loved snack and sweets brand with a wide range of namkeens, sweets and ready meals.",
    fullDescription: "Haldiram's is one of the most recognized Indian food brands globally, with roots going back to 1937 in Bikaner, Rajasthan. The brand is synonymous with high-quality traditional Indian snacks, sweets, and namkeens. Today, Haldiram's product range includes packaged snacks, frozen foods, ready meals, and traditional sweets. Their products are exported to over 80 countries and are a top choice for Indian food service operators seeking authentic flavors at scale.",
  },
  {
    slug: "itc",
    name: "ITC Foods",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/ITC_Limited_Logo.svg",
    heroImage: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=1600&q=80",
    description: "Diversified food brand offering premium packaged foods, spices, staples and frozen products across India.",
    fullDescription: "ITC Foods is the food division of ITC Limited, one of India's foremost multi-business enterprises. With brands like Aashirvaad, Sunfeast, Bingo, and Kitchens of India, ITC Foods covers a vast portfolio including wheat flour, spices, biscuits, snacks, ready meals, and dairy. Their commitment to quality, safety, and sustainability makes them a trusted partner for large-scale food service operations, catering companies, and hotel chains across India.",
  },
  {
    slug: "motherdairy",
    name: "Mother Dairy",
    logo: "https://www.motherdairy.com/images/logo.png",
    heroImage: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=1600&q=80",
    description: "Trusted dairy and food brand supplying fresh milk, ice cream, edible oils and vegetables across India.",
    fullDescription: "Mother Dairy, established in 1974, is one of India's leading dairy brands and a subsidiary of the National Dairy Development Board. Known for its fresh milk, ice cream, dahi, and flavored milk, Mother Dairy also supplies edible oils under the Dhara brand and fresh fruits and vegetables under the Safal brand. With a strong cold chain infrastructure and pan-India presence, Mother Dairy is a reliable supplier for food service businesses looking for consistent quality dairy and fresh produce.",
  },
];

const brandProducts = [
  { id: 1,  name: "Stuffed Eggplants",                    weight: "2kg",  badge: "NEW",      stars: 5, image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=400&q=80" },
  { id: 2,  name: "Mixed Pickles",                         weight: "5kg",  badge: "PREMIUM",  stars: 5, image: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=400&q=80" },
  { id: 3,  name: "Berries Jam",                           weight: "1kg",  badge: "POPULAR",  stars: 5, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80" },
  { id: 4,  name: "Apricot Jam",                           weight: "1kg",  badge: "TOP PICK", stars: 5, image: "https://images.unsplash.com/photo-1571167366136-b57e40467e1f?w=400&q=80" },
  { id: 5,  name: "Fig Jam",                               weight: "1kg",  badge: "NEW",      stars: 5, image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?w=400&q=80" },
  { id: 6,  name: "Strawberry Jam",                        weight: "1kg",  badge: "PREMIUM",  stars: 5, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&q=80" },
  { id: 7,  name: "Whole Green Olives Picholines W Chilli",weight: "10kg", badge: "POPULAR",  stars: 5, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=80" },
  { id: 8,  name: "Whole Green Olives Picholines",         weight: "10kg", badge: "TOP PICK", stars: 5, image: "https://images.unsplash.com/photo-1611171711791-b34e43f64e82?w=400&q=80" },
  { id: 9,  name: "Selected Greek Black Olives",           weight: "10kg", badge: "NEW",      stars: 5, image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&q=80" },
  { id: 10, name: "Grilled Olives",                        weight: "1kg",  badge: "PREMIUM",  stars: 5, image: "https://images.unsplash.com/photo-1587401988879-5929e14e03df?w=400&q=80" },
  { id: 11, name: "Selected Greek Black Kalamata Olives",  weight: "10kg", badge: "POPULAR",  stars: 5, image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=400&q=80" },
  { id: 12, name: "Green Olive",                           weight: "10kg", badge: "TOP PICK", stars: 5, image: "https://images.unsplash.com/photo-1558030087-b7d6f4d40c6a?w=400&q=80" },
];

const badgeColors: Record<string, string> = {
  "NEW":      "#22c55e",
  "PREMIUM":  "#3b82f6",
  "POPULAR":  "#f97316",
  "TOP PICK": "#E63B2E",
};

export async function generateStaticParams() {
  return [
    { slug: "amul" },
    { slug: "britannia" },
    { slug: "mtr" },
    { slug: "haldirams" },
    { slug: "itc" },
    { slug: "motherdairy" },
  ];
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brandsData.find((b) => b.slug === slug);
  if (!brand) notFound();

  const otherBrands = brandsData.filter((b) => b.slug !== slug);

  return (
    <div className="pt-[70px]">

      {/* ── SECTION 1: HERO ─────────────────────────────────────────── */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "280px",
        overflow: "hidden",
      }}>
        <img
          src={brand.heroImage}
          alt={brand.name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />

        {/* Breadcrumb */}
        <p style={{
          position: "absolute", top: "80px", left: "80px",
          color: "rgba(255,255,255,0.7)", fontSize: "13px", zIndex: 2,
        }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Home</Link>
          {" » "}
          <Link href="/brands" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Brand Profile</Link>
          {" » "}
          {brand.name}
        </p>

        {/* Back button */}
        <Link href="/brands" style={{
          position: "absolute", top: "80px", right: "80px",
          color: "white", fontSize: "13px", textDecoration: "none",
          border: "1px solid rgba(255,255,255,0.4)", borderRadius: "999px",
          padding: "8px 16px", zIndex: 2,
        }}>
          ← Back to Brands
        </Link>

        {/* Bottom content */}
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          padding: "0 80px 32px", zIndex: 2,
        }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, color: "#E63B2E",
            letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px",
          }}>
            BRAND PROFILE
          </p>
          <h1 style={{ fontSize: "42px", fontWeight: 800, color: "white", margin: "0 0 6px 0" }}>
            {brand.name}
          </h1>
          <p style={{
            fontSize: "14px", color: "rgba(255,255,255,0.8)",
            maxWidth: "400px", margin: 0, lineHeight: 1.5,
          }}>
            {brand.description}
          </p>
        </div>

        {/* Logo badge */}
        <div style={{
          position: "absolute", bottom: "-40px", left: "80px",
          width: "90px", height: "90px", borderRadius: "50%",
          background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 3,
        }}>
          <img
            src={brand.logo}
            alt={brand.name}
            style={{ maxWidth: "70px", maxHeight: "70px", objectFit: "contain" }}
          />
        </div>
      </section>

      {/* ── SECTION 2: OVERVIEW & QUICK FACTS ──────────────────────── */}
      <section style={{ background: "white", padding: "80px 0 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px", display: "flex", gap: "24px" }}>

          {/* Left — Overview */}
          <div style={{
            flex: "0 0 60%", border: "1px solid #EEEEEE",
            borderRadius: "12px", padding: "28px",
          }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px", color: "#1A1A1A" }}>
              Overview
            </h2>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, margin: 0 }}>
              {brand.fullDescription}
            </p>
          </div>

          {/* Right — Quick Facts */}
          <div style={{
            flex: "0 0 40%", border: "1px solid #EEEEEE",
            borderRadius: "12px", padding: "28px",
          }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px", color: "#1A1A1A" }}>
              Quick Facts
            </h2>
            {[
              { label: "Core Category",       value: "Dairy & Food Products" },
              { label: "Demand Driver",        value: "Everyday household and food service consumption" },
              { label: "Key Differentiators",  value: "Quality, authenticity, and variety" },
              { label: "Digital Presence",     value: "Strong online and retail presence" },
            ].map((fact) => (
              <div key={fact.label}>
                <p style={{ fontSize: "12px", color: "#999", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                  {fact.label}
                </p>
                <p style={{ fontSize: "14px", color: "#1A1A1A", fontWeight: 500, marginBottom: "16px" }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: INFO PILLS ───────────────────────────────────── */}
      <section style={{ background: "white", padding: "20px 0 60px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px", display: "flex", gap: "16px" }}>
          {[
            { icon: "🌍", label: "Region",    value: "India" },
            { icon: "🏷️", label: "Brand",     value: brand.name },
            { icon: "📦", label: "Portfolio", value: "Food Sources Partners" },
          ].map((pill) => (
            <div key={pill.label} style={{
              flex: 1, border: "1px solid #EEEEEE", borderRadius: "10px",
              padding: "16px 24px", display: "flex", alignItems: "center", gap: "12px",
            }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "#EAF4EF", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "18px", flexShrink: 0,
              }}>
                {pill.icon}
              </div>
              <div>
                <p style={{ fontSize: "12px", color: "#999", textTransform: "uppercase", marginBottom: "2px" }}>
                  {pill.label}
                </p>
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#1A3C2E", margin: 0 }}>
                  {pill.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: PRODUCTS GRID ────────────────────────────────── */}
      <section style={{ background: "#F8F8F8", padding: "60px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, color: "#E63B2E",
            letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px",
          }}>
            OUR PRODUCTS
          </p>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#1A1A1A", marginBottom: "32px" }}>
            {brand.name} Product Range
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {brandProducts.map((product) => (
              <div key={product.id} style={{
                background: "white", borderRadius: "12px",
                border: "1px solid #EEEEEE", overflow: "hidden",
                position: "relative", display: "flex", flexDirection: "column",
              }}>
                {/* Badge */}
                <span style={{
                  position: "absolute", top: 0, left: 0, zIndex: 2,
                  background: badgeColors[product.badge] ?? "#888",
                  color: "white", fontSize: "10px", fontWeight: 700,
                  padding: "4px 8px", borderRadius: "0 0 6px 0",
                }}>
                  {product.badge}
                </span>

                {/* Image */}
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: "12px" }}>
                  <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px", lineHeight: 1.3 }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#888", marginBottom: "6px" }}>{product.weight}</p>
                  <span style={{ color: "#F5C518", fontSize: "12px" }}>{"★".repeat(product.stars)}</span>
                </div>

                {/* Buttons */}
                <div style={{
                  padding: "8px 12px 12px", display: "flex",
                  justifyContent: "space-between", alignItems: "center",
                  gap: "8px", marginTop: "auto",
                }}>
                  <Link href="/products" style={{ fontSize: "12px", color: "#666", textDecoration: "underline" }}>
                    View Details
                  </Link>
                  <button style={{
                    background: "#E63B2E", color: "white", borderRadius: "999px",
                    padding: "7px 14px", fontSize: "12px", fontWeight: 600,
                    border: "none", cursor: "pointer", flexShrink: 0,
                  }}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: EXPLORE OTHER BRANDS ─────────────────────────── */}
      <section style={{ background: "white", padding: "40px 0 60px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 80px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A", margin: 0 }}>
              Explore Other Brands
            </h2>
            <Link href="/brands" style={{ fontSize: "13px", color: "#E63B2E", textDecoration: "none" }}>
              View All →
            </Link>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {otherBrands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  border: "1px solid #EEEEEE", borderRadius: "10px",
                  padding: "16px 24px", background: "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  minWidth: "120px",
                }}>
                  <img
                    src={b.logo}
                    alt={b.name}
                    style={{ maxHeight: "40px", maxWidth: "100px", objectFit: "contain" }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ──────────────────────────────────────────── */}
      <CTABanner />
    </div>
  );
}
