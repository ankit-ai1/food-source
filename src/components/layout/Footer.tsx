import Link from "next/link";
import { Leaf } from "lucide-react";

const footerColumns = [
  {
    title: "Products",
    links: ["Olives", "Cheeses", "Pickles", "Olive Oil"],
  },
  {
    title: "Business",
    links: ["Marketing & Logistics", "Catering", "Bakeries", "Restaurant Chains", "Refrigeration", "Food Industry"],
  },
  {
    title: "About Us",
    links: ["About Us", "Careers", "Blog"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0F2218] pt-[60px] text-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_0.8fr_1.1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="text-white" size={20} />
            <span className="text-sm font-bold uppercase tracking-[0.02em]">
              <span>Food</span> <span className="text-[#E63B2E]">Sources</span>
            </span>
          </Link>
          <p className="mt-4 max-w-[260px] text-[14px] leading-7 text-white/70">
            Premium Mediterranean Ingredients for Indian Tables
          </p>
          <Link href="/onboarding" className="mt-5 inline-flex text-[14px] font-semibold text-white hover:text-[#E63B2E]">
            Open Account
          </Link>
          <div className="mt-3 space-y-2">
            <Link href="/faq" className="block text-[14px] text-white/65 hover:text-white">FAQ</Link>
            <Link href="/privacy" className="block text-[14px] text-white/65 hover:text-white">Privacy</Link>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-3 text-[14px] font-semibold text-white">{column.title}</h3>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[14px] leading-7 text-white/65 transition-colors hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 text-[14px] font-semibold text-white">Contact</h3>
          <div className="space-y-2 text-[14px] leading-7 text-white/65">
            <p>Mumbai, India</p>
            <a href="tel:+919820012345" className="block hover:text-white">+91 98200 12345</a>
            <a href="mailto:info@foodsourcesindia.in" className="block hover:text-white">info@foodsourcesindia.in</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-center gap-2 px-6 py-5 text-center text-[12px] text-white/60 md:flex-row">
          <span>Copyright 2026 Food Sources</span>
          <span className="hidden md:inline">|</span>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <span className="hidden md:inline">|</span>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
