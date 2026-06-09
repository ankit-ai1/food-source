import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-site max-w-3xl mx-auto prose prose-stone">
        <h1 className="font-heading text-4xl font-semibold text-stone-900">Privacy Policy</h1>
        <p className="text-stone-500">Last updated: January 2024</p>
        <p>Food Sources Trading Co. is committed to protecting your personal information. This policy explains how we collect, use, and protect your data.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly, including business name, contact details, and order history when you open an account or contact us.</p>
        <h2>How We Use Your Information</h2>
        <p>We use your information to process orders, provide customer support, send relevant product updates, and improve our services.</p>
        <h2>Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        <h2>Contact</h2>
        <p>For privacy inquiries, contact us at <a href="mailto:info@foodsourcesindia.in" className="text-brand-600">info@foodsourcesindia.in</a>.</p>
      </div>
    </div>
  );
}
