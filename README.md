# Food Sources — Production Website

A production-ready Next.js 15 replica and modernisation of [foodsources.com.sa](https://www.foodsources.com.sa/en), the Saudi Arabia-based Mediterranean food distribution company.

---

## 🧪 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 |
| UI Components | Radix UI primitives |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Fonts | Playfair Display + DM Sans |

---

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx            # Home
│   ├── about/              # About Us
│   ├── products/           # Products list + [slug] detail
│   ├── brands/             # Brands showcase
│   ├── contact/            # Contact + FAQ + Locations
│   ├── onboarding/         # Multi-step partnership form
│   ├── faq/                # FAQ page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── layout.tsx          # Root layout (Header + Footer)
│   └── globals.css         # Design tokens + global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky responsive header
│   │   └── Footer.tsx      # Multi-column footer
│   └── sections/
│       ├── HeroSlider.tsx        # Auto-advancing hero carousel
│       ├── WhyChooseUs.tsx       # Features with image
│       ├── ActivitiesSection.tsx # Subsidiaries grid
│       ├── BrandsSection.tsx     # Brand carousel + grid
│       ├── ProductCategoriesSection.tsx
│       ├── HowItWorks.tsx        # 3-step process
│       ├── Testimonials.tsx      # Customer quotes
│       ├── CTABanner.tsx         # Full-width CTA
│       └── StatsSection.tsx      # Stats bar
├── data/
│   └── index.ts            # All mock data
├── lib/
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript types
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone or extract the project
cd food-sources

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero slider, features, brands, products, CTA |
| `/about` | Company story, vision, values, timeline, stats |
| `/products` | Searchable, filterable product grid |
| `/products/[slug]` | Product detail with related products |
| `/brands` | Full brand showcase with product links |
| `/contact` | Contact form, locations map, FAQ |
| `/onboarding` | 5-step partnership application form |
| `/faq` | Full FAQ accordion |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

---

## 🎨 Design System

### Colors
- **Brand** (amber-orange): `#d98328` — primary CTA and accents
- **Olive** (green): `#778f4e` — secondary accents, tags
- **Stone** (neutral): Tailwind stone scale — backgrounds, text

### Typography
- **Headings**: Playfair Display (serif) — premium Mediterranean feel
- **Body**: DM Sans — clean, readable, modern

### Key Design Tokens (CSS Variables)
```css
--brand-600: #c4691e    /* Primary button */
--olive-500: #778f4e    /* Secondary accent */
--stone-900: #1c1917    /* Primary text */
```

---

## 🌐 Deploying to Vercel

### Method 1: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Method 2: Git Integration

1. Push to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

### Environment Variables

No environment variables required for the base build. If you integrate a CMS or email API:

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
RESEND_API_KEY=your_key_here
```

---

## 🔍 UI/UX Audit Summary

### Improvements over reference site

| Area | Original | This Build |
|---|---|---|
| Fonts | Generic system fonts | Playfair Display + DM Sans |
| Hero | Simple slider | Auto-advancing with smooth fade |
| Mobile nav | Basic dropdown | Full-screen animated menu |
| Product pages | Blank (JS-required) | Full SSG product grid + detail |
| Forms | Basic HTML | React Hook Form with validation |
| Onboarding | 5-step form | Improved with progress indicator |
| Performance | Client-rendered | Static generation where possible |
| Accessibility | Limited | ARIA labels, keyboard nav, focus states |
| SEO | Basic | Full metadata, OG tags, structured routes |

---

## 📊 Expected Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

---

## 📞 Original Brand Details

- **Company**: Food Sources Trading Co.
- **Location**: Riyadh, Saudi Arabia
- **Phone**: +966 54 354 3309
- **Email**: info@foodsources.com.sa
- **Founded**: 2015

---

Built with ❤️ as a production-quality modernisation project.
