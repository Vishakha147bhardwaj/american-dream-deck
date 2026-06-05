# American Dream — Interactive Sales Deck

A cinematic, browser-based interactive sales deck for **American Dream Mall** (East Rutherford, NJ) — the most ambitious retail and entertainment complex ever built in North America.

Built as a high-stakes sales tool for prospective **retail tenants**, **brand sponsors**, and **event partners**. Replaces the fragmented pitch process (PDF + YouTube + spreadsheet) with a single, immersive, self-contained experience.

**Live URL:** [https://american-dream-deck-rosy.vercel.app/]

---

## What It Does

- **Cinematic intro** with YouTube background video and GSAP text animations
- **8 fully interactive sections** — non-linear navigation, viewer controls their journey
- **Buyer Mode System** — three personalized paths (Lease / Partner / Book) that reorder nav priority, surface contextual callouts in every section, and highlight the matching CTA
- **Animated stat counters** — count-up animations triggered on scroll
- **Scroll progress bar** — gold indicator showing position in the deck
- **Cinematic page loader** — branded entry experience
- **Fully responsive** — desktop, tablet, and mobile with hamburger menu
- **Two YouTube videos** — intro hero and entertainment section
- **AI-generated imagery** — all hero images generated using Ideogram.ai

---

## Tech Stack

| Layer      | Choice                                      | Reason                                                                  |
| ---------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| Build tool | Vite                                        | Fast HMR, ES modules, zero config deploy                                |
| Styling    | Tailwind CSS + Custom CSS                   | Utility classes for layout, custom CSS for design tokens and animations |
| Animations | GSAP + ScrollTrigger                        | Industry standard for cinematic scroll-linked animations                |
| Fonts      | Google Fonts (Cormorant Garamond + DM Sans) | Premium editorial feel, free CDN                                        |
| Video      | YouTube embed                               | Free hosting, high quality, no bandwidth cost                           |
| Images     | Ideogram.ai (AI generated) + Unsplash       | Free tier AI generation supplemented with photography                   |
| Deployment | Vercel                                      | Free tier, instant deploy from GitHub                                   |

---

## Project Structure

american-dream-deck/
├── index.html
├── vite.config.js
├── package.json
└── src/
├── main.js # App bootstrap, all inits
├── style.css # Global imports
│
├── components/
│ ├── nav.js # Sidebar nav + mobile menu
│ ├── buyerMode.js # Buyer mode toggle + full logic
│ ├── progressBar.js # Scroll progress indicator
│ ├── loader.js # Cinematic page loader
│ └── state.js # Global state management
│
├── sections/ # One JS module per section
│ ├── intro.js
│ ├── overview.js
│ ├── retail.js
│ ├── luxury.js
│ ├── dining.js
│ ├── entertainment.js
│ ├── events.js
│ └── contact.js
│
├── styles/ # One CSS file per section
│ ├── tokens.css # Design system tokens
│ ├── base.css # Reset + layout
│ ├── polish.css # Loader, progress bar, nav states
│ ├── buyerMode.css # Buyer mode callouts + active states
│ ├── responsive.css # Tablet + mobile breakpoints
│ └── [section].css # Per-section styles
│
├── data/
│ └── stats.json # Property statistics
│
└── assets/
└── images/ # AI-generated and local images

---

## Setup Instructions

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/Vishakha147bhardwaj/american-dream-deck

# Enter the project
cd american-dream-deck

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## Git Workflow

This project uses a structured branching strategy:
main → production only, always deployable
dev → integration branch
feature/xxx → one branch per feature
Each feature was built on its own branch, merged into `dev`, then promoted to `main` when stable.

---

## Design Decisions

### Why Vanilla JS over React

The brief called for a presentation deck — not a web app. Vanilla JS with GSAP gives direct DOM control and cinematic animation capability that React's reconciler actively fights against for scroll-linked work. The result is faster, simpler, and more portable.

### Why a Sidebar Nav (not top nav)

Inspired by Digideck's structure — a persistent sidebar makes non-linear navigation feel natural. The viewer always knows where they are and can jump to any section instantly, mimicking how a sales rep would navigate during a live call.

### Buyer Mode System

The single biggest product decision. Instead of one generic deck, three buyer personas (Lease / Partner / Book) get a personalized experience — different nav priorities, contextual callouts in every section, and a highlighted CTA path. Built with a global state pattern and `CustomEvent` dispatching so any component can react to mode changes without tight coupling.

### Typography

Cormorant Garamond (display) + DM Sans (body) — a classic editorial pairing that signals luxury without being cold. The contrast between the expressive serif and the clean sans-serif mirrors the property itself: grand ambition, modern execution.

### Color System

Gold (`#C9A84C`) as the primary accent against a near-black void (`#08080A`) — inspired by luxury fashion brands. Three distinct buyer mode colors (blue, purple, red) create instant visual differentiation when switching modes.

---

## AI Tools Used

| Tool                   | Usage                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Ideogram.ai**        | Generated all hero images — retail corridor, luxury wing, dining ambiance, and contact section |
| **Claude (Anthropic)** | Used as a development assistant for debugging and research                                     |

---

## What I Would Improve With More Time

1. **More video sections** — events and luxury sections would benefit from background video
2. **3D property map** — Three.js flyover of the American Dream floor plan
3. **Deeper leasing module** — Interactive floor plan with available units by category
4. **Sponsorship tier calculator** — Dynamic pricing tool for brand partners
5. **Mobile Lighthouse score** — Currently 77, target 90+ with image optimization and font subsetting
6. **Real American Dream assets** — Replace placeholder images with official press photography
7. **Micro-interactions** — Cursor effects, magnetic buttons, smoother page transitions

---

## Sections

| #   | Section            | Purpose                                              |
| --- | ------------------ | ---------------------------------------------------- |
| 01  | Intro              | Cinematic hook — video background, animated headline |
| 02  | The Property       | Data-driven overview — 6 animated stat counters      |
| 03  | Retail             | Tenant environment, key brands, leasing CTA          |
| 04  | Luxury             | Premium wing positioning, brand marquee              |
| 05  | Dining & Lifestyle | F&B as foot traffic driver                           |
| 06  | Entertainment      | Key differentiator — theme park, ski, water park     |
| 07  | Events & Platform  | Venue capabilities, past highlights, booking CTA     |
| 08  | Contact            | Three-path action converter                          |

---

_Built with zero budget, maximum craft._
