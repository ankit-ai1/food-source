import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Food Sources India",
  description: "Build your career with India's leading food distribution company.",
};

const benefits = [
  { icon: "💼", title: "Competitive Salary",     desc: "Industry-leading compensation packages" },
  { icon: "👥", title: "Great Team",             desc: "Work with passionate food industry professionals" },
  { icon: "📈", title: "Growth Opportunities",   desc: "Clear career progression paths" },
  { icon: "❤️", title: "Health Benefits",        desc: "Comprehensive health insurance" },
];

const jobs = [
  { title: "Sales Representative",    dept: "Sales",      location: "Mumbai, India",    type: "Full-time" },
  { title: "Supply Chain Manager",    dept: "Operations", location: "Delhi, India",     type: "Full-time" },
  { title: "Quality Control Specialist", dept: "Quality", location: "Bangalore, India", type: "Full-time" },
  { title: "Customer Service Agent",  dept: "Support",    location: "Remote",           type: "Full-time" },
];

export default function CareersPage() {
  return (
    <div className="pt-[70px]">

      {/* ── SECTION 1: HERO ── */}
      <section style={{
        position: "relative",
        width: "100%",
        height: "220px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1600&q=80"
          alt="Careers"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 80px" }}>
          <h1 style={{ fontSize: "38px", fontWeight: 800, color: "white", marginBottom: "10px" }}>
            Join Our Team
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", maxWidth: "500px" }}>
            Build your career with India's leading food distribution company
          </p>
        </div>
      </section>

      {/* ── SECTION 2: WHY JOIN US ── */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

          {/* Eyebrow */}
          <p style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "12px", fontSize: "12px", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.15em",
            color: "#E63B2E", marginBottom: "16px",
          }}>
            <span style={{ height: "1px", width: "40px", background: "#E63B2E", display: "block" }} />
            Why Join Us
            <span style={{ height: "1px", width: "40px", background: "#E63B2E", display: "block" }} />
          </p>

          <h2 style={{
            textAlign: "center", fontSize: "36px", fontWeight: 800,
            color: "#1A1A1A", marginBottom: "48px",
          }}>
            A Place Where You Thrive
          </h2>

          {/* 4 benefit cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}>
            {benefits.map((b) => (
              <div key={b.title} style={{
                border: "1px solid #EEEEEE",
                borderRadius: "12px",
                padding: "32px 24px",
                textAlign: "center",
                background: "white",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}>
                <div style={{
                  fontSize: "32px", marginBottom: "16px",
                  display: "flex", alignItems: "center",
                  justifyContent: "center",
                }}>
                  {b.icon}
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "8px" }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OPEN POSITIONS ── */}
      <section style={{ background: "#F8F8F8", padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>

          {/* Eyebrow */}
          <p style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "12px", fontSize: "12px", fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.15em",
            color: "#E63B2E", marginBottom: "16px",
          }}>
            <span style={{ height: "1px", width: "40px", background: "#E63B2E", display: "block" }} />
            Opportunities
            <span style={{ height: "1px", width: "40px", background: "#E63B2E", display: "block" }} />
          </p>

          <h2 style={{
            textAlign: "center", fontSize: "36px", fontWeight: 800,
            color: "#1A1A1A", marginBottom: "48px",
          }}>
            Open Positions
          </h2>

          {/* Job cards */}
          <div style={{
            maxWidth: "760px", margin: "0 auto",
            display: "flex", flexDirection: "column", gap: "16px",
          }}>
            {jobs.map((job) => (
              <div key={job.title} style={{
                background: "white",
                border: "1px solid #EEEEEE",
                borderRadius: "12px",
                padding: "20px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}>
                {/* Left */}
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" }}>
                    {job.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <span style={{ fontSize: "12px", color: "#888", display: "flex", alignItems: "center", gap: "4px" }}>
                      🗂️ {job.dept}
                    </span>
                    <span style={{ fontSize: "12px", color: "#888", display: "flex", alignItems: "center", gap: "4px" }}>
                      📍 {job.location}
                    </span>
                    <span style={{ fontSize: "12px", color: "#888" }}>
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Apply button */}
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    background: "#E63B2E", color: "white",
                    borderRadius: "999px", padding: "10px 14px 10px 22px",
                    fontSize: "13px", fontWeight: 700, textDecoration: "none",
                    flexShrink: 0,
                  }}
                >
                  Apply Now
                  <span style={{
                    width: "28px", height: "28px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "14px",
                  }}>
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SEND RESUME ── */}
      <section style={{
        position: "relative", overflow: "hidden",
        width: "100%", padding: "80px 0",
      }}>
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
          alt=""
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 80px", maxWidth: "700px" }}>
          <p style={{
            fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px",
            display: "flex", alignItems: "center", gap: "10px",
          }}>
            <span style={{ height: "1px", width: "30px", background: "rgba(255,255,255,0.4)", display: "block" }} />
            Don't See a Fit?
          </p>
          <h2 style={{
            fontSize: "40px", fontWeight: 800, color: "white",
            marginBottom: "16px", lineHeight: 1.2,
          }}>
            Send Us Your Resume
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", marginBottom: "32px", maxWidth: "480px", lineHeight: 1.7 }}>
            We're always looking for talented people. Send us your CV and we'll reach out when the right role opens up.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#E63B2E", color: "white",
              borderRadius: "999px", padding: "12px 16px 12px 28px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
            }}
          >
            Get in Touch
            <span style={{
              width: "32px", height: "32px", borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "16px",
            }}>
              →
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}
