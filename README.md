# Integrative Dental Wellness — Premium Redesign

A luxury wellness-centered healthcare website for [Integrative Dental Wellness](https://dentalwellnessmd.com/) in Eldersburg, Maryland.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS 4** with custom wellness design tokens
- **TypeScript**
- Real photography from the practice (no stock/AI imagery)

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Soft White | `#FAFAF8` | Backgrounds |
| Sage Green | `#7D9B8A` | Primary brand |
| Gold Champagne | `#C9A962` | Accents & CTAs |
| Soft Beige | `#E8E0D5` | Supporting surfaces |

Typography: **Cormorant Garamond** (display) + **DM Sans** (body)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
```

Static files are exported to the `out/` directory — deploy to any standard static host (Netlify, Vercel, cPanel, Cloudflare Pages, etc.).

## Homepage Sections

1. Cinematic Wellness Hero
2. Oral-Systemic Health Experience (interactive)
3. Meet Dr. Kelly Betts
4. Concierge Dental Experience
5. Meet The Specialists
6. Smile & Wellness Services
7. Advanced Surgery & Implant Center
8. Special Needs Excellence
9. Patient Success Stories
10. Wellness Membership
11. Dental Anxiety Center
12. Luxury Office Tour
13. Flexible Payment Experience
14. New Patient Journey
15. Final Emotional CTA

## Deployment Notes

- Images load from `dentalwellnessmd.com/wp-content/uploads/` — for production independence, download assets locally to `public/images/`
- Booking links point to FlexBook: `https://www.flexbook.me/intdentwel/`
- Phone: (410) 552-3368
