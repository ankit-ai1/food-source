"use client";
import { useState } from "react";

export function BrandCard({ name, logo }: { name: string; logo: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex h-[110px] items-center justify-center rounded-2xl border border-[#E2E2E2] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
      {!imgFailed ? (
        <img
          src={logo}
          alt={name}
          className="h-12 w-auto max-w-[120px] object-contain"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-[16px] font-bold text-[#E63B2E]">{name}</span>
      )}
    </div>
  );
}
