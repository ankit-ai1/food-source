"use client";
import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Brands", href: "/brands" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.08)]">
      <div className="mx-auto w-full max-w-[1500px] px-6">
        <div className="flex h-[70px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Leaf className="text-[#1A3C2E]" size={20} strokeWidth={2.4} />
            <span className="text-sm font-bold uppercase tracking-[0.02em]">
              <span className="text-[#1A3C2E]">Food</span>{" "}
              <span className="text-[#E63B2E]">Sources</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] font-medium text-[#333333] transition-colors duration-300 hover:text-[#E63B2E]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-1 text-[13px] font-medium text-[#333333] sm:inline-flex">
              EN <ChevronDown size={14} />
            </button>
            <Link
              href="/onboarding"
              className="hidden rounded-full bg-[#E63B2E] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#cf3025] sm:inline-flex"
            >
              Open Account
            </Link>

            <button
              className="rounded-lg p-2 text-[#1A3C2E] transition-colors hover:bg-[#F8F8F8] lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-stone-100 bg-white transition-all duration-300 lg:hidden",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="mx-auto w-full max-w-[1500px] space-y-1 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-[#333333] transition-colors hover:bg-[#F8F8F8] hover:text-[#E63B2E]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 pb-1">
            <Link
              href="/onboarding"
              className="flex w-full justify-center rounded-full bg-[#E63B2E] px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
