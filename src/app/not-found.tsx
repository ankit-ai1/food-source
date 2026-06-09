import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <p className="font-mono text-8xl font-bold text-stone-200">404</p>
        <h1 className="font-heading text-3xl font-semibold text-stone-900 mt-4">Page not found</h1>
        <p className="text-stone-500 mt-2 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            Back to Home
            <ArrowRight size={16} />
          </Link>
          <Link href="/products" className="btn-secondary">
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
}
