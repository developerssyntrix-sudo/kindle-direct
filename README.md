# Amazon Books Publishing

A professional full-service book publishing agency website built with Next.js 16, React 19, and Tailwind CSS v4. Designed with the Amazon color palette and a compact, conversion-focused layout.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — Hero, Brands, About, Services, Portfolio, Process, Testimonials, CTA, FAQs, Footer |
| `/services/book-writing` | Ghostwriting service page |
| `/services/book-publishing` | KDP publishing service page |
| `/services/book-editing-proofreading` | Editing & proofreading service page |
| `/services/book-marketing` | Book marketing service page |
| `/services/book-trailer` | Book trailer production service page |
| `/services/childrens-book-writing` | Children's book writing service page |
| `/services/poetry-publishing` | Poetry publishing service page |
| `/portfolio` | Published books portfolio with genre filters |
| `/about` | Team, story, timeline, and values |
| `/faqs` | 30 Q&As across 6 categories with accordion UI |
| `/contact` | Contact form + consultation info |

## Tech Stack

- **Framework** — Next.js 16.2.4 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 with custom Amazon color tokens
- **Icons** — lucide-react
- **UI Components** — shadcn/ui

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `amazon-orange` | `#FF9900` | Primary CTA, highlights |
| `amazon-dark` | `#232F3E` | Header, dark sections |
| `amazon-navy` | `#131921` | Deep backgrounds |
| `amazon-teal` | `#00A8A2` | Accent badges |
| `amazon-surface` | `#F7F7F7` | Section backgrounds |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  page.tsx                  # Homepage
  about/page.tsx
  contact/page.tsx
  faqs/page.tsx
  portfolio/page.tsx
  services/
    book-writing/page.tsx
    book-publishing/page.tsx
    book-editing-proofreading/page.tsx
    book-marketing/page.tsx
    book-trailer/page.tsx
    childrens-book-writing/page.tsx
    poetry-publishing/page.tsx

components/
  sections/                 # Homepage sections & shared layout
  service-page/             # Shared service page components
  contact/                  # Contact form (client component)
  portfolio/                # Portfolio grid with filters (client component)
```

## Build

```bash
npm run build
npm start
```
