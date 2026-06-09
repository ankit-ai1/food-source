"use client";
import Link from "next/link";
import { useState, use } from "react";
import { CTABanner } from "@/components/sections/CTABanner";

const allProducts = [
  { id: 1,  slug: "selected-greek-black-olives",            name: "Selected Greek Black Olives",               category: "OLIVES",  weight: "10kg", rating: 5.0, shelfLife: "24 MONTHS", barcode: "6224003986001", storage: "Store in a cool, dry place. Keep sealed after opening. Best consumed within 7 days of opening.", description: "Premium Greek black olives carefully selected from the finest Mediterranean groves. These olives have a rich, full-bodied flavor with a firm texture, perfect for salads, antipasto platters, and Mediterranean dishes.", suggestedUses: "Perfect as a table olive, in salads, pasta, pizza toppings, and mezze platters.", image: "https://images.unsplash.com/photo-1611171711791-b34e43f64e82?w=600&q=80" },
  { id: 2,  slug: "grilled-olives",                         name: "Grilled Olives",                            category: "OLIVES",  weight: "1kg",  rating: 5.0, shelfLife: "18 MONTHS", barcode: "6224003986002", storage: "Store at room temperature. Refrigerate after opening.", description: "Smoky, char-grilled olives with a distinctive roasted flavor. These premium olives are grilled to perfection, bringing out their natural oils and intensifying their Mediterranean character.", suggestedUses: "Ideal as a gourmet appetizer, charcuterie board addition, or topping for artisan pizzas.", image: "https://images.unsplash.com/photo-1587401988879-5929e14e03df?w=600&q=80" },
  { id: 3,  slug: "selected-greek-black-kalamata-olives",   name: "Selected Greek Black Kalamata Olives",      category: "OLIVES",  weight: "10kg", rating: 5.0, shelfLife: "24 MONTHS", barcode: "6224003986003", storage: "Store in a cool, dry place. Refrigerate after opening and consume within 10 days.", description: "Authentic Kalamata olives from the Peloponnese region of Greece. Known for their almond shape, dark purple color, and rich, fruity taste with a hint of wine vinegar.", suggestedUses: "Eaten fresh with bread, olives, and vegetables. Excellent in Greek salads and pasta.", image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=600&q=80" },
  { id: 4,  slug: "green-olive",                            name: "Green Olive",                               category: "OLIVES",  weight: "10kg", rating: 5.0, shelfLife: "24 MONTHS", barcode: "6224003986004", storage: "Store in a cool, dry place. Keep sealed after opening.", description: "Crisp, fresh green olives with a mild, buttery flavor. Harvested before full ripening to preserve their distinctive green color and slightly firm texture.", suggestedUses: "Perfect for martinis, cheese boards, salads, and as a healthy snack.", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80" },
  { id: 5,  slug: "whole-green-olives-picholines-with-chilli", name: "Whole Green Olives Picholines With Chilli", category: "OLIVES", weight: "10kg", rating: 5.0, shelfLife: "18 MONTHS", barcode: "6224003986005", storage: "Store at 2-6°C. Keep the container sealed. Consume within 7 days of opening.", description: "French Picholine olives marinated with premium chilli for a spicy Mediterranean kick. These elongated green olives have a firm flesh and nutty flavor enhanced by the heat of chilli.", suggestedUses: "Great as a spicy appetizer, tapas, or alongside grilled meats and fish.", image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?w=600&q=80" },
  { id: 6,  slug: "whole-green-olives-picholines",          name: "Whole Green Olives Picholines",             category: "OLIVES",  weight: "10kg", rating: 5.0, shelfLife: "18 MONTHS", barcode: "6224003986006", storage: "Store at 2-6°C. Keep sealed after opening.", description: "Classic French Picholine olives — elongated, firm, and mildly nutty. One of the most prized olive varieties in French cuisine, perfect for professional kitchens.", suggestedUses: "Ideal as table olives, in Niçoise salads, or as part of a refined olive selection.", image: "https://images.unsplash.com/photo-1558030087-b7d6f4d40c6a?w=600&q=80" },
  { id: 7,  slug: "premium-feta-cheese",                    name: "Premium Feta Cheese",                       category: "CHEESES", weight: "5kg",  rating: 5.0, shelfLife: "6 MONTHS",  barcode: "6224003986007", storage: "Store at 2-6°C (refrigerated). Keep the container sealed. Do not freeze — freezing alters the texture significantly.", description: "Authentic Greek feta cheese made from pasteurized sheep's and goat's milk. This premium feta has a creamy yet crumbly texture with a tangy, salty flavor that is distinctively Mediterranean.", suggestedUses: "Perfect in Greek salads, stuffed pastries, on pizza, or crumbled over roasted vegetables.", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80" },
  { id: 8,  slug: "halloumi-cheese",                        name: "Halloumi Cheese",                           category: "CHEESES", weight: "2kg",  rating: 4.8, shelfLife: "6 MONTHS",  barcode: "6224003986008", storage: "Store at 2-6°C. Best consumed grilled or fried.", description: "Traditional Cypriot halloumi cheese with a high melting point, making it perfect for grilling and frying. Has a squeaky texture and mild, salty flavor.", suggestedUses: "Grill or pan-fry until golden. Serve with salads, in wraps, or as a vegetarian main.", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80" },
  { id: 9,  slug: "mixed-mediterranean-pickles",            name: "Mixed Mediterranean Pickles",               category: "PICKLES", weight: "5kg",  rating: 5.0, shelfLife: "12 MONTHS", barcode: "6224003986009", storage: "Store in a cool, dry place. Refrigerate after opening. Consume within 14 days.", description: "A vibrant mix of Mediterranean pickled vegetables including cauliflower, carrots, peppers, and cucumber in a tangy brine. Perfect for adding a punch of flavor to any meal.", suggestedUses: "Serve alongside grilled meats, in sandwiches, mezze platters, or as a condiment.", image: "https://images.unsplash.com/photo-1595981234058-a9302fb97229?w=600&q=80" },
  { id: 10, slug: "fig-jam",                                name: "Fig Jam",                                   category: "JAM",     weight: "1kg",  rating: 4.9, shelfLife: "18 MONTHS", barcode: "6224003986010", storage: "Store in a cool, dry place. Refrigerate after opening. Consume within 30 days.", description: "Premium fig jam made from sun-ripened Mediterranean figs. Rich, naturally sweet with a complex fruity depth. No artificial preservatives or colors.", suggestedUses: "Serve with cheese boards, spread on toast, pair with yogurt, or use as a glaze for meats.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80" },
  { id: 11, slug: "apricot-jam",                            name: "Apricot Jam",                               category: "JAM",     weight: "1kg",  rating: 5.0, shelfLife: "18 MONTHS", barcode: "6224003986011", storage: "Store in a cool, dry place. Refrigerate after opening.", description: "Golden apricot jam crafted from premium sun-dried apricots. Bright, tangy-sweet flavor with a smooth, spreadable consistency. Made with real fruit pieces.", suggestedUses: "Perfect on croissants, as a pastry filling, with cheese, or as a glaze for chicken and pork.", image: "https://images.unsplash.com/photo-1571167366136-b57e40467e1f?w=600&q=80" },
  { id: 12, slug: "strawberry-jam",                         name: "Strawberry Jam",                            category: "JAM",     weight: "1kg",  rating: 4.8, shelfLife: "18 MONTHS", barcode: "6224003986012", storage: "Store in a cool, dry place. Refrigerate after opening. Consume within 30 days.", description: "Classic strawberry jam made from hand-picked, ripe strawberries. Vibrant red color, intensely fruity aroma, and the perfect balance of sweetness and natural fruit tartness.", suggestedUses: "Ideal on toast, scones, waffles, as a cake filling, or mixed into yogurt and smoothies.", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=600&q=80" },
];

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = allProducts.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState("description");

  function handleDownload() {
    if (!product) return;
    const content = [
      "FOOD SOURCES INDIA — PRODUCT SPECIFICATION SHEET",
      "=".repeat(52),
      "",
      `Product Name  : ${product.name}`,
      `Category      : ${product.category}`,
      `Weight        : ${product.weight}`,
      `Shelf Life    : ${product.shelfLife}`,
      `Barcode       : ${product.barcode}`,
      `Rating        : ${product.rating.toFixed(1)} / 5.0`,
      "",
      "DESCRIPTION",
      "-".repeat(52),
      product.description,
      "",
      "SUGGESTED USES",
      "-".repeat(52),
      product.suggestedUses,
      "",
      "STORAGE INSTRUCTIONS",
      "-".repeat(52),
      product.storage,
      "",
      "=".repeat(52),
      "For bulk pricing & orders: www.foodsources.in",
      "Contact: info@foodsources.in",
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${product.slug}-spec-sheet.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!product) {
    return (
      <div style={{ paddingTop: "70px", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#1A1A1A", marginBottom: "12px" }}>Product not found</h1>
          <Link href="/products" style={{ color: "#E63B2E", fontWeight: 600 }}>← Back to Products</Link>
        </div>
      </div>
    );
  }

  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div style={{ paddingTop: "70px", background: "#F8F8F8", minHeight: "100vh" }}>

      {/* ── BREADCRUMB ── */}
      <div style={{ background: "white", borderBottom: "1px solid #EEEEEE", padding: "12px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <p style={{ fontSize: "13px", color: "#888" }}>
            <Link href="/" style={{ color: "#888", textDecoration: "none" }}>Home</Link>
            {" »  "}
            <Link href="/products" style={{ color: "#888", textDecoration: "none" }}>Products</Link>
            {" »  "}
            <Link href="/products" style={{ color: "#888", textDecoration: "none" }}>{product.category}</Link>
            {" »  "}
            <span style={{ color: "#1A1A1A" }}>{product.name}</span>
          </p>
        </div>
      </div>

      {/* ── MAIN PRODUCT SECTION ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          background: "white",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}>

          {/* LEFT — Product Image */}
          <div style={{
            borderRadius: "12px",
            overflow: "hidden",
            background: "#F8F8F8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "380px",
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "380px", objectFit: "cover", borderRadius: "12px" }}
            />
          </div>

          {/* RIGHT — Product Info */}
          <div style={{ display: "flex", flexDirection: "column" }}>

            {/* Category label */}
            <p style={{
              fontSize: "12px", fontWeight: 700, color: "#E63B2E",
              textTransform: "uppercase", letterSpacing: "0.12em",
              marginBottom: "10px",
            }}>
              {product.category}
            </p>

            {/* Product name */}
            <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "12px" }}>
              {product.name}
            </h1>

            {/* Short description */}
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, marginBottom: "20px" }}>
              {product.description}
            </p>

            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span style={{ color: "#F5C518", fontSize: "16px" }}>★★★★★</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>{product.rating.toFixed(1)}</span>
            </div>

            {/* Product specs */}
            <div style={{ borderTop: "1px solid #F0F0F0", paddingTop: "20px", marginBottom: "20px" }}>
              {[
                { label: "Available Sizes", value: product.weight },
                { label: "Shelf Life", value: product.shelfLife },
                { label: "Barcode", value: product.barcode },
                { label: "Storage", value: product.storage },
              ].map((spec) => (
                <div key={spec.label} style={{ marginBottom: "14px" }}>
                  <p style={{ fontSize: "12px", color: "#999", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2px" }}>
                    {spec.label}
                  </p>
                  <p style={{ fontSize: "14px", color: "#1A1A1A", fontWeight: 500, lineHeight: 1.5 }}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link
                href="/order"
                style={{
                  background: "#E63B2E", color: "white",
                  borderRadius: "8px", padding: "14px 24px",
                  fontSize: "14px", fontWeight: 700, textDecoration: "none",
                  textAlign: "center", display: "block",
                }}
              >
                Interested in this product? Open an account to place orders
              </Link>
              <Link
                href="/order"
                style={{
                  background: "#FFF0EE", color: "#E63B2E",
                  borderRadius: "8px", padding: "12px 24px",
                  fontSize: "14px", fontWeight: 600, textDecoration: "none",
                  textAlign: "center", display: "block",
                  border: "1px solid #FFCCC7",
                }}
              >
                Open an account to place orders
              </Link>
              <button
                onClick={handleDownload}
                style={{
                  background: "white", color: "#1A1A1A",
                  borderRadius: "8px", padding: "12px 24px",
                  fontSize: "14px", fontWeight: 600,
                  border: "1px solid #DDDDDD", cursor: "pointer",
                  textAlign: "center", width: "100%",
                }}
              >
                ↓ Download Product Specifications Sheet
              </button>
              <Link
                href="/contact"
                style={{ textAlign: "center", fontSize: "13px", color: "#E63B2E", textDecoration: "underline", display: "block" }}
              >
                Contact for Bulk Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* ── TABS SECTION ── */}
        <div style={{
          background: "white", borderRadius: "16px",
          marginTop: "24px", overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}>
          {/* Tab headers */}
          <div style={{ display: "flex", borderBottom: "1px solid #EEEEEE" }}>
            {["description", "nutritional", "shipping"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "16px 24px",
                  fontSize: "14px", fontWeight: 600,
                  cursor: "pointer", border: "none",
                  background: "none", textTransform: "capitalize",
                  color: activeTab === tab ? "#1A1A1A" : "#888",
                  borderBottom: activeTab === tab ? "2px solid #E63B2E" : "2px solid transparent",
                  marginBottom: "-1px",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: "32px 40px" }}>
            {activeTab === "description" && (
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>Description</h3>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
                  {product.description}
                </p>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>Suggested Uses</h3>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, marginBottom: "24px" }}>
                  {product.suggestedUses}
                </p>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>Shelf Life Details</h3>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>
                  Unopened: Up to {product.shelfLife} at room temperature.<br />
                  Opened: Best consumed within 7 days.
                </p>
              </div>
            )}
            {activeTab === "nutritional" && (
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>Nutritional Information</h3>
                <p style={{ fontSize: "14px", color: "#888" }}>
                  Nutritional information per 100g serving. Please contact us for detailed nutritional sheets.
                </p>
                <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                  {[
                    { label: "Calories", value: "~120 kcal" },
                    { label: "Protein", value: "~1.2g" },
                    { label: "Fat", value: "~11g" },
                    { label: "Carbohydrates", value: "~5g" },
                    { label: "Sodium", value: "~735mg" },
                    { label: "Fiber", value: "~3g" },
                  ].map((n) => (
                    <div key={n.label} style={{
                      background: "#F8F8F8", borderRadius: "8px",
                      padding: "16px", textAlign: "center",
                    }}>
                      <p style={{ fontSize: "20px", fontWeight: 700, color: "#1A3C2E" }}>{n.value}</p>
                      <p style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>{n.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "shipping" && (
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "16px" }}>Shipping & Delivery</h3>
                {[
                  { title: "Delivery Coverage", desc: "We deliver pan-India to all major cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Kolkata, and Pune." },
                  { title: "Delivery Time", desc: "Standard delivery within 24-48 hours for metro cities. 3-5 business days for other locations." },
                  { title: "Minimum Order", desc: "Minimum order quantities apply for bulk purchases. Contact us for details." },
                  { title: "Cold Chain", desc: "Temperature-controlled delivery available for all refrigerated products to ensure freshness." },
                ].map((item) => (
                  <div key={item.title} style={{ marginBottom: "20px" }}>
                    <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" }}>{item.title}</h4>
                    <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── RELATED PRODUCTS ── */}
        {related.length > 0 && (
          <div style={{ marginTop: "48px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#1A1A1A", marginBottom: "24px" }}>
              Related Products
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}>
              {related.map((p) => (
                <div key={p.id} style={{
                  background: "white", borderRadius: "12px",
                  border: "1px solid #EEEEEE", overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100%", height: "160px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ fontSize: "11px", color: "#E63B2E", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                      {p.category}
                    </p>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px", lineHeight: 1.3 }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>{p.weight}</p>
                    <span style={{ color: "#F5C518", fontSize: "12px" }}>★★★★★</span>
                    <span style={{ fontSize: "12px", color: "#888", marginLeft: "4px" }}>{p.rating.toFixed(1)}</span>
                  </div>
                  <div style={{ padding: "8px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link href={`/products/${p.slug}`} style={{ fontSize: "12px", color: "#666", textDecoration: "underline" }}>
                      View Details
                    </Link>
                    <button style={{
                      background: "#E63B2E", color: "white",
                      borderRadius: "999px", padding: "7px 14px",
                      fontSize: "12px", fontWeight: 600, border: "none", cursor: "pointer",
                    }}>
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <CTABanner />
    </div>
  );
}
