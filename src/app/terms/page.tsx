import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container-site max-w-3xl mx-auto prose prose-stone">
        <h1 className="font-heading text-4xl font-semibold text-stone-900">Terms of Service</h1>
        <p className="text-stone-500">Last updated: January 2024</p>
        <p>By using Food Sources' website and services, you agree to these Terms of Service. Please read them carefully.</p>
        <h2>Use of Services</h2>
        <p>Our services are intended for business-to-business transactions. You must be a registered business to open an account and place orders.</p>
        <h2>Orders & Payments</h2>
        <p>All orders are subject to availability and confirmation. Payment terms are agreed upon during the account onboarding process.</p>
        <h2>Delivery</h2>
        <p>We aim to deliver within the timeframes communicated at time of order. Delivery times may vary based on location and product availability.</p>
        <h2>Contact</h2>
        <p>For terms inquiries, contact <a href="mailto:info@foodsourcesindia.in" className="text-brand-600">info@foodsourcesindia.in</a>.</p>
      </div>
    </div>
  );
}
