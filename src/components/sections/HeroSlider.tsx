"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroSlides } from "@/data";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-900">
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={s.image}
            alt={s.headline}
            fill
            priority={i === 0}
            className="object-cover object-center scale-105 transition-transform duration-[8000ms]"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-site flex min-h-screen items-center pt-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <div
            className={cn(
              "mb-6 transition-all duration-500",
              animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            )}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1
            className={cn(
              "font-heading text-5xl font-semibold text-white md:text-6xl lg:text-7xl text-balance transition-all duration-500 delay-75",
              animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
            )}
          >
            {slide.headline}
          </h1>

          {/* Subheadline */}
          <p
            className={cn(
              "mt-6 text-lg text-white/75 max-w-lg leading-relaxed transition-all duration-500 delay-150",
              animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
            )}
          >
            {slide.subheadline}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "mt-10 flex flex-wrap items-center gap-4 transition-all duration-500 delay-200",
              animating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
            )}
          >
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Open Account
              <ArrowRight size={16} />
            </Link>
            <Link
              href={slide.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm border border-white/20 transition-all hover:bg-white/20 hover:-translate-y-0.5"
            >
              {slide.cta.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 inset-x-0 z-10 container-site flex items-center justify-between">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === current ? "bg-white w-8" : "bg-white/40 w-4 hover:bg-white/60"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="p-2.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
          <span className="ml-3 text-xs text-white/50 font-mono tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
