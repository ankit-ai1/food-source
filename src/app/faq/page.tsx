"use client";
import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-16">
      <div className="container-site max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-heading">Frequently Asked Questions</h1>
          <p className="section-sub mt-3">Everything you need to know about partnering with Food Sources.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={cn("rounded-2xl border overflow-hidden transition-all", open === i ? "bg-white border-brand-200 shadow-md" : "bg-white border-stone-100")}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center gap-4 p-5 text-left">
                <span className="font-medium text-stone-900 text-sm">{faq.question}</span>
                <span className={cn("w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-transform", open === i ? "bg-brand-600 border-brand-600 text-white rotate-45" : "border-stone-300 text-stone-400")}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5 2v6M2 5h6"/></svg>
                </span>
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-stone-500 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 bg-brand-50 border border-brand-100 rounded-3xl text-center">
          <h2 className="font-heading text-xl font-semibold text-stone-900">Still have questions?</h2>
          <p className="text-stone-500 mt-2 text-sm">Our team is happy to help — reach out anytime.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/contact" className="btn-primary">Contact Us <ArrowRight size={14}/></Link>
            <Link href="/onboarding" className="btn-secondary">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
