import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Food Sources | Premium Mediterranean Ingredients — India",
    template: "%s | Food Sources",
  },
  description:
    "Food Sources India — India's premier supplier of authentic Mediterranean deli products. FSSAI-approved olives, cheeses, and pickles for hotels, restaurants, and catering companies.",
  keywords: [
    "Mediterranean food supplier India",
    "premium olives India",
    "feta cheese Mumbai",
    "FSSAI approved food supplier",
    "halal Mediterranean ingredients",
    "food distribution India",
  ],
  openGraph: {
    title: "Food Sources | Premium Mediterranean Ingredients",
    description:
      "India's premier supplier of authentic Mediterranean deli products.",
    url: "https://www.foodsourcesindia.in",
    siteName: "Food Sources",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://www.foodsourcesindia.in"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
