"use client";
import { useState } from "react";
import Link from "next/link";

const productsByCategory: Record<string, string[]> = {
  Olives:  ["Selected Greek Black Olives", "Grilled Olives", "Kalamata Olives", "Green Olive", "Whole Green Olives Picholines With Chilli", "Whole Green Olives Picholines"],
  Cheeses: ["Premium Feta Cheese", "Halloumi Cheese", "Aged White Cheese", "Labneh Cream Cheese"],
  Pickles: ["Mixed Mediterranean Pickles", "Green Chilli Pickles", "Stuffed Pepper Pickles"],
  Jam:     ["Fig Jam", "Apricot Jam", "Strawberry Jam"],
};

export default function OrderPage() {
  const [productType, setProductType] = useState("Olives");
  const [submitted, setSubmitted]     = useState(false);

  return (
    <div style={{ paddingTop: "70px", background: "#F8F8F8", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", width: "100%",
        height: "180px", overflow: "hidden",
        display: "flex", alignItems: "center",
      }}>
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
          alt="Order"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,60,46,0.75)" }} />
        <div className="relative z-10 px-5 md:px-16">
          <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, color: "white", marginBottom: "8px" }}>
            Order Our Products
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
            Tell us what you need and we will get back to you shortly
          </p>
        </div>
      </section>

      {/* ── FORM ── */}
      <div style={{ maxWidth: "700px", margin: "48px auto", padding: "0 20px 80px" }}>
        <div className="px-5 md:px-12" style={{
          background: "white", borderRadius: "16px",
          padding: "40px 0",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        }}>

          {/* Form heading */}
          <p style={{
            fontSize: "11px", fontWeight: 700, color: "#E63B2E",
            textTransform: "uppercase", letterSpacing: "0.2em",
            display: "flex", alignItems: "center", gap: "10px",
            marginBottom: "12px",
          }}>
            <span style={{ height: "1px", width: "30px", background: "#E63B2E", display: "block" }} />
            Buy Now
            <span style={{ height: "1px", width: "30px", background: "#E63B2E", display: "block" }} />
          </p>

          <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#1A1A1A", marginBottom: "6px" }}>
            Order Details
          </h2>
          <p style={{ fontSize: "13px", color: "#999", marginBottom: "28px" }}>
            Fields marked with * are required
          </p>

          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1A3C2E", marginBottom: "8px" }}>
                Order Request Sent!
              </h3>
              <p style={{ fontSize: "14px", color: "#666", marginBottom: "24px" }}>
                Thank you! Our team will contact you within 24 hours.
              </p>
              <Link
                href="/products"
                style={{
                  background: "#E63B2E", color: "white",
                  borderRadius: "999px", padding: "12px 28px",
                  fontSize: "14px", fontWeight: 600, textDecoration: "none",
                }}
              >
                Browse More Products
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input placeholder="" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" placeholder="" style={inputStyle} />
                </div>
              </div>

              {/* Row 2: Company + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>Company *</label>
                  <input placeholder="" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input type="tel" placeholder="" style={inputStyle} />
                </div>
              </div>

              {/* Row 3: City + Business Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label style={labelStyle}>City</label>
                  <select style={selectStyle}>
                    <option>Select City</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                    <option>Hyderabad</option>
                    <option>Kolkata</option>
                    <option>Pune</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Business Type</label>
                  <select style={selectStyle}>
                    <option>Select Business Type</option>
                    <option>Hotel</option>
                    <option>Restaurant</option>
                    <option>Café</option>
                    <option>Catering</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label style={labelStyle}>Inquiry Type</label>
                <select style={selectStyle}>
                  <option>Select Inquiry Type</option>
                  <option>Bulk Order</option>
                  <option>Sample Request</option>
                  <option>Pricing</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Product Type */}
              <div>
                <label style={labelStyle}>Product Type</label>
                <select
                  style={selectStyle}
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  {Object.keys(productsByCategory).map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Product Name */}
              <div>
                <label style={labelStyle}>Product Name</label>
                <select style={selectStyle}>
                  {(productsByCategory[productType] ?? []).map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label style={labelStyle}>Quantity (in kg)</label>
                <input
                  type="number"
                  placeholder="e.g. 50"
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Tell us more about your needs: quantities, preferred delivery date..."
                  rows={5}
                  style={{
                    ...inputStyle,
                    height: "auto",
                    resize: "vertical",
                    paddingTop: "12px",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Submit button */}
              <button
                onClick={() => setSubmitted(true)}
                style={{
                  width: "100%",
                  background: "#E63B2E", color: "white",
                  borderRadius: "8px", padding: "15px",
                  fontSize: "15px", fontWeight: 700,
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", gap: "8px",
                  marginTop: "8px",
                }}
              >
                ✉️ Send Message
              </button>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "#1A1A1A",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "44px",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  padding: "0 14px",
  fontSize: "14px",
  color: "#1A1A1A",
  background: "white",
  outline: "none",
  boxSizing: "border-box",
};

const selectStyle: React.CSSProperties = {
  width: "100%",
  height: "44px",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  padding: "0 14px",
  fontSize: "14px",
  color: "#1A1A1A",
  background: "white",
  outline: "none",
  cursor: "pointer",
  boxSizing: "border-box",
  appearance: "auto",
};
