# West Edmonton Mall — Interactive Sales Deck

Built as part of a product design challenge. The brief asked for a tool that replaces the fragmented, manual process of pitching a mega-mall property to prospective tenants, sponsors, and event partners — and turns it into a single cinematic, self-contained web experience.

I chose West Edmonton Mall — North America's largest shopping mall — as my subject.

## Live Site
https://west-edmonton-mall.vercel.app/

---

## What I Built

A fully interactive, browser-based sales deck that works two ways: a salesperson can screen-share it on a live call, or send it as a standalone link that a prospect can explore on their own. No PDFs. No switching between tabs. No verbal narration required.

The deck covers the full commercial story of the property — scale, retail, luxury, dining, lifestyle, attractions, and events — with each section designed around a specific business action rather than just presenting information.

---

## Tech Stack

- **React + Vite** — component architecture, fast builds
- **Tailwind CSS** — utility styling, consistent spacing system
- **Framer Motion** — scroll animations, marquee effects, carousel transitions
- **Cloudinary** — video hosting with automatic format and quality optimization
- **Vercel** — deployment

---

## Getting Started

```bash
git clone https://github.com/Kharkarpratiksha/West-Edmonton-Mall-.git
cd West-Edmonton-Mall-
npm install
npm run dev
```

Production build:
```bash
npm run build
npm run preview
```

---


## Project Structure
src/
├── components/
│   ├── Navbar.jsx        # Fixed nav with scroll-aware transparency
│   ├── Hero.jsx          # Cinematic video hero with 3 CTAs
│   ├── Scale.jsx         # Property stats & demographics
│   ├── Retail.jsx        # Brand marquee — 800+ stores
│   ├── Luxury.jsx        # Premium tenant corridor
│   ├── Dining.jsx        # F&B ecosystem — 100+ restaurants
│   ├── Lifestyle.jsx     # Beyond retail — wellness, arts, family
│   ├── Attractions.jsx   # World Waterpark & Galaxyland
│   ├── Events.jsx        # Event platform & booking
│   └── Footer.jsx        # Contact & leasing CTAs
├── App.jsx
└── main.jsx

---

## Sections and Their Purpose

Each section is built around a specific commercial audience and a specific action I want them to take.

**Hero** — The first 10 seconds. Full-screen autoplay video with the property's core numbers overlaid. Three buttons immediately signal the three audiences this deck serves: retail tenants, event partners, and brand sponsors.

**Scale** — The credibility section. 5.3M sq ft, 32M+ annual visitors, 800+ stores, 24K parking stalls. Presented as data but designed to feel like a statement. Cream background creates a visual pause after the dark hero.

**Retail** — An infinite horizontal marquee of real WEM anchor brands. The motion communicates abundance without listing. Ends with a leasing CTA.

**Luxury** — Warm cream section with a brand ticker of WEM's actual luxury tenants. Four offering tiles explain what the luxury corridor specifically provides — not generic claims, but actual services like private shopping sessions and flagship positioning.

**Dining** — Grid of real WEM restaurants with F&B-specific stats. Pitched at food and beverage brands considering leasing, not at general visitors.

**Lifestyle** — Auto-advancing full-card slider covering wellness, arts, family entertainment, and business facilities. Each slide has WEM-specific copy, not generic descriptions.

**Attractions** — Video switches between World Waterpark and Galaxyland based on which dot the user clicks. The video is the pitch — no static image could do what a 30-second clip does here.

**Events** — Draggable carousel with four event categories. Active card shows a booking CTA. Section ends with a direct enquiry button.

**Footer** — Structured as a CTA block first, then navigation. The top of the footer has two buttons — retail leasing and venue booking — before any links appear.

---

## Design Decisions

**Alternating dark and cream sections.** Every section being black flattens the experience. Scale and Luxury use `#f5f0eb` warm cream — the same visual rhythm Apple uses on product pages. It gives the eye somewhere to rest and makes the dark sections feel more cinematic by contrast.

**Font weight as a luxury signal.** Almost everything is `font-light` (300). Bold weights feel like consumer retail. Light weights with generous tracking feel like Hermès or Aesop. The serif headings do the heavy lifting on hierarchy without needing heavy weight.

**Sharp edges throughout.** No `rounded-2xl`, no pill buttons. Luxury real estate, fashion, and architecture brands use sharp geometry. Rounded corners belong in SaaS dashboards and mobile apps.

**Video hosted on Cloudinary, not bundled.** Bundling video files kills Lighthouse scores. Cloudinary's `f_auto,q_auto` parameters serve the right format and quality per device automatically.

**Every section has a CTA.** The brief was explicit — this is a sales tool, not a website. A prospect landing on any section should immediately see what action is available to them.

**Non-linear navigation.** The fixed navbar lets a prospect jump directly to whichever section matters to them. A leasing director doesn't need to sit through the dining section to get to retail. The deck works as a guided presentation and as a self-directed exploration.

---

## How I Used AI

I used Claude (Anthropic) throughout this project — not to generate the whole thing at once, but as a working partner at specific points.

For copy: WEM's public press materials give you facts but not a sales narrative. I used Claude to turn raw stats into section-level pitches aimed at specific audiences — retail tenants vs event partners vs luxury brands each need a different hook.

For code review: After building each component I'd paste it in and ask what was inconsistent with the rest of the design system. That caught things like mismatched font weights, inconsistent button styles, and sections that still had placeholder stats from generic templates.

For design decisions: When I wasn't sure whether to merge dining and lifestyle into one section or keep them separate, I talked through the tradeoffs. Kept them separate — they serve different commercial audiences.

I also used Cloudinary for video hosting and optimization.

---

## What I'd Do Differently With More Time

**A leasing sub-module.** The brief asked for expandable architecture and I designed for it, but didn't have time to build a full leasing path segmented by category — flagship, standard retail, F&B, and pop-up all have different pitch requirements and different decision-makers.

**Scroll-triggered stat counters.** The numbers on the Scale section are compelling but static. Animating them from zero on scroll would add impact without adding complexity.

**A sponsorship module.** Brand partners need audience demographics, activation examples, and tier pricing. That's a full section's worth of content that exists in the data but didn't make the cut.

**Lighthouse optimization.** Images could be lazily loaded and further compressed. The score is good but not 90+ across all categories yet.

**Better mobile layouts.** The deck works on mobile but was designed desktop-first. The marquee and attraction video sections in particular would benefit from dedicated mobile treatments.

---

## Property Data Sources

All statistics sourced from West Edmonton Mall's official website and public press materials.

- 5.3 million sq ft total leasable area
- 800+ stores, restaurants and services
- 32 million+ annual visitors
- 24,000+ parking stalls
- Opened September 1981
- 8882 170 St NW, Edmonton, AB T5T 4J2
- (780) 444-5321