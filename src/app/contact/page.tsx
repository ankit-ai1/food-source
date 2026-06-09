"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { locations, faqs } from "@/data";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900 pt-32 pb-20">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80"
          alt="Contact us"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 to-stone-900" />
        <div className="relative container-site text-center">
          <p className="section-label justify-center text-brand-300">
            <span className="h-px w-6 bg-brand-400 inline-block" />
            Contact
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white mt-3 text-balance">
            Let's Start a Conversation
          </h1>
          <p className="section-sub mt-4 text-white/70 max-w-lg mx-auto">
            Whether you're ready to order or just have questions, we're here to help.
          </p>

          {/* Quick contact buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+919820012345" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-all backdrop-blur-sm">
              <Phone size={16} className="text-brand-300" />
              Call Us
            </a>
            <a href="mailto:info@foodsourcesindia.in" className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-all backdrop-blur-sm">
              <Mail size={16} className="text-brand-300" />
              Email Us
            </a>
            <a href="https://wa.me/919820012345" className="inline-flex items-center gap-2 rounded-full bg-green-500/20 border border-green-400/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-500/30 transition-all backdrop-blur-sm">
              <MessageCircle size={16} className="text-green-300" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section-padding bg-stone-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-stone-900">Get in touch</h2>
                <p className="text-stone-500 mt-2">Fill out the form and we'll get back within 24 hours.</p>
              </div>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <div className="p-2.5 rounded-lg bg-brand-50 text-brand-600 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900 text-sm">Office Hours</p>
                    <p className="text-stone-500 text-sm">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2.5 rounded-lg bg-brand-50 text-brand-600 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900 text-sm">Email</p>
                    <a href="mailto:info@foodsourcesindia.in" className="text-brand-600 text-sm hover:underline">
                      info@foodsourcesindia.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="p-2.5 rounded-lg bg-green-50 text-green-600 shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-stone-900 text-sm">WhatsApp</p>
                    <a href="https://wa.me/919820012345" className="text-green-600 text-sm hover:underline">
                      +91 98200 12345
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-50 border border-brand-100">
                <h3 className="font-semibold text-stone-900 text-sm mb-2">Open an Account</h3>
                <p className="text-stone-500 text-xs mb-3">Start your partnership journey with us</p>
                <Link href="/onboarding" className="btn-primary text-sm py-2 inline-flex">
                  Open Account
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-olive-50 flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-olive-500" size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-stone-900">Message Sent!</h3>
                  <p className="text-stone-500 mt-2 max-w-sm">
                    Thanks for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 inline-flex">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading text-xl font-semibold text-stone-900 mb-6">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-base">Business Name <span className="text-red-400">*</span></label>
                      <input type="text" required placeholder="Your business name" className="input-base" />
                    </div>
                    <div>
                      <label className="label-base">Contact Person <span className="text-red-400">*</span></label>
                      <input type="text" required placeholder="Your full name" className="input-base" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-base">Email <span className="text-red-400">*</span></label>
                      <input type="email" required placeholder="you@company.com" className="input-base" />
                    </div>
                    <div>
                      <label className="label-base">Phone Number <span className="text-red-400">*</span></label>
                      <input type="tel" required placeholder="+91 98XXX XXXXX" className="input-base" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="label-base">Business Type</label>
                      <select className="input-base">
                        <option value="">Select type</option>
                        {["Hotel", "Restaurant", "Café", "Catering", "Retail", "Other"].map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label-base">City</label>
                      <select className="input-base">
                        <option value="">Select city</option>
                        {["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Other"].map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label-base">Inquiry Type</label>
                    <select className="input-base">
                      <option value="">Select inquiry type</option>
                      {["Pricing", "Product Info", "Partnership", "Support", "Other"].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label-base">Message</label>
                    <textarea
                      placeholder="Tell us about your business and how we can help..."
                      rows={4}
                      className="input-base resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 accent-brand-600" />
                    <span className="text-sm text-stone-500">
                      I agree to receive communications from Food Sources Trading Co.
                    </span>
                  </label>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                    Send Message
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-xs text-stone-400 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-label justify-center">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Locations
            </p>
            <h2 className="section-heading mt-3">Connecting Near and Far</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className={cn(
                  "p-5 rounded-2xl border transition-all duration-200",
                  loc.isHQ
                    ? "bg-brand-50 border-brand-200 col-span-2"
                    : "bg-stone-50 border-stone-100 hover:border-brand-200 hover:bg-white hover:shadow-md"
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className={loc.isHQ ? "text-brand-600" : "text-stone-400"} />
                  <p className="font-semibold text-stone-900 text-sm">{loc.city}</p>
                  {loc.isHQ && (
                    <span className="text-xs font-medium text-brand-600 bg-brand-100 px-2 py-0.5 rounded-full">HQ</span>
                  )}
                </div>
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-sm text-stone-500 hover:text-brand-600 transition-colors block">
                  {loc.phone}
                </a>
                <p className="text-xs text-stone-400 mt-1">{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-stone-50">
        <div className="container-site max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label justify-center">
              <span className="h-px w-6 bg-brand-500 inline-block" />
              Inquiries
            </p>
            <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border overflow-hidden transition-all duration-200",
                  openFaq === i ? "bg-white border-brand-200 shadow-md" : "bg-white border-stone-100"
                )}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-medium text-stone-900 text-sm">{faq.question}</span>
                  <span className={cn(
                    "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-stone-400 transition-transform",
                    openFaq === i ? "bg-brand-600 border-brand-600 text-white rotate-45" : "border-stone-300"
                  )}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                      <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-stone-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
