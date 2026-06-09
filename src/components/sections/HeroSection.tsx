"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { heroSlides } from "@/data";

function splitHeadline(headline: string) {
  const words = headline.split(" ");
  const line2 = words.pop()!;
  return { line1: words.join(" "), line2 };
}

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating]
  );

  const next = useCallback(
    () => goTo((current + 1) % heroSlides.length),
    [current, goTo]
  );

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = heroSlides[current];
  const { line1, line2 } = splitHeadline(slide.headline);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 70px)",
        overflow: "hidden",
        background: "#060f08",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ── BACKGROUND IMAGES — full height, right side ── */}
      {heroSlides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt={s.headline}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            height: "100%",
            width: "auto",
            maxWidth: "65%",
            objectFit: "contain",
            objectPosition: "right center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.9s ease",
            zIndex: 1,
          }}
        />
      ))}

      {/* ── LEFT GRADIENT — blends image into dark bg ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "65%",
          background:
            "linear-gradient(to right, #060f08 0%, #060f08 30%, rgba(6,15,8,0.95) 45%, rgba(6,15,8,0.7) 58%, transparent 80%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── GREEN GLOW on left ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "50%",
          background:
            "radial-gradient(ellipse at 10% 50%, rgba(26,60,46,0.55) 0%, transparent 65%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* ── TEXT — left aligned ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "580px",
          padding: "80px 40px 110px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          marginRight: "auto",
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "28px",
            opacity: animating ? 0 : 1,
            transition: "opacity 0.35s ease",
          }}
        >
          <span style={{ height: "1px", width: "38px", background: "#E63B2E", flexShrink: 0, display: "block" }} />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", whiteSpace: "nowrap" }}>
            Food Sources
          </span>
          <span style={{ height: "1px", width: "38px", background: "#E63B2E", flexShrink: 0, display: "block" }} />
        </div>

        {/* Heading */}
        <h1
          style={{
            margin: 0,
            lineHeight: 1.02,
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(14px)" : "translateY(0)",
            transition: "opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s",
          }}
        >
          <span style={{ display: "block", fontSize: "clamp(38px, 5vw, 72px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
            {line1}
          </span>
          <span style={{ display: "block", fontSize: "clamp(40px, 5.4vw, 76px)", fontWeight: 800, color: "#E63B2E", fontStyle: "italic", letterSpacing: "-0.02em" }}>
            {line2}
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            marginTop: "20px",
            fontSize: "15px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.58)",
            maxWidth: "460px",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
          }}
        >
          {slide.subheadline}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: "36px",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s",
          }}
        >
          <Link
            href="/onboarding"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "#E63B2E", color: "#fff", borderRadius: "999px",
              padding: "11px 14px 11px 26px", fontSize: "14px", fontWeight: 700, textDecoration: "none",
            }}
          >
            Open Account
            <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>
              ↗
            </span>
          </Link>

          <Link
            href={slide.cta.href}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.16)",
              color: "#fff", borderRadius: "999px",
              padding: "11px 14px 11px 26px", fontSize: "14px", fontWeight: 700, textDecoration: "none",
            }}
          >
            {slide.cta.label}
            <span style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>
              ↗
            </span>
          </Link>
        </div>

        {/* Slide dots */}
        <div style={{ marginTop: "48px", display: "flex", alignItems: "center", gap: "8px" }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: "3px",
                width: i === current ? "28px" : "10px",
                borderRadius: "2px",
                background: i === current ? "#E63B2E" : "rgba(255,255,255,0.28)",
                border: "none", cursor: "pointer",
                transition: "all 0.35s ease", padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── BOTTOM WAVE ── */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, right: 0, height: "58px", zIndex: 20, pointerEvents: "none" }}>
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}>
          <path d="M0 63L80 57.7C160 52 320 42 480 47.3C640 53 800 75 960 73.7C1120 72 1280 48 1360 36L1440 24V96H0V63Z" fill="#F8F8F8" />
        </svg>
      </div>
    </section>
  );
}
