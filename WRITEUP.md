# Design & Strategy Write-Up

## American Dream Interactive Sales Deck

---

## The Problem I Was Solving

The brief described a broken sales process — reps juggling YouTube tabs,
static PDFs, and spreadsheets while trying to convey the scale and energy
of a 3.3 million square foot destination to a decision-maker on a Zoom call.

The core problem isn't missing content. It's missing context. A PDF can't
make you feel the roar of a theme park. A spreadsheet can't convey why
40 million people chose to spend 4.5 hours somewhere. The tool needed to
do what no sales rep can do alone — create emotional buy-in before a single
word is spoken.

My north star for every decision: **would this make a brand director say
"I need to be here" within 10 seconds?**

---

## Key Design Decisions

### 1. The Buyer Mode System — The Most Important Product Decision

Early in planning I identified the core tension: three completely different
buyer types (tenants, sponsors, event producers) care about completely
different things. A retail leasing director wants foot traffic data and
tenant mix. An event producer wants venue capacity and past event highlights.
A brand sponsor wants audience demographics and activation examples.

Building three separate decks was impractical. Building one generic deck
meant nobody felt spoken to.

The solution was a **buyer mode toggle** — a single codebase that
personalizes itself based on who's watching. Selecting a mode:

- Reorders nav priority to surface the most relevant sections first
- Injects contextual callouts into every section with persona-specific messaging
- Highlights the matching CTA path in the contact section

This is the difference between a brochure and a sales tool. A brochure
tells everyone the same story. A sales tool reads the room.

### 2. Video as the Primary Medium

The brief was explicit: video is the primary storytelling medium, not
decoration. Static images can show a mall. Video makes you feel it.

I used YouTube embeds with all controls stripped — no pause button,
no progress bar, no YouTube branding. The result feels like a native
cinematic experience, not an embedded player. This was a deliberate
choice to maintain the luxury aesthetic while using free infrastructure.

### 3. Typography as Brand Signal

Cormorant Garamond paired with DM Sans communicates the property's
dual identity — grand ambition (the expressive serif) and modern
execution (the clean sans-serif). Typography does more emotional
work than any other design element at zero performance cost.

### 4. The Sidebar Navigation

Inspired by Digideck's structure. A persistent sidebar makes
non-linear navigation feel natural and professional — critical
for a tool used on live sales calls where a rep needs to jump
instantly to the section a prospect asks about. No fumbling
through slides. No "let me find that page." Just click.

### 5. Dark Luxury Aesthetic

Gold on near-black. Every luxury brand reference in the brief —
Hermès, Louis Vuitton, Saint Laurent — uses this palette for a reason.
It signals premium, creates cinematic atmosphere, and makes imagery
and video pop without competing with the content.

---

## How I Used AI

AI was used strategically at every layer of this project:

**Ideogram.ai** was the primary tool for visual asset generation — all hero
images across the deck were generated using carefully crafted prompts to
produce photorealistic architectural renders and atmospheric photography
that matched the luxury aesthetic of the property. This replaced what would
otherwise require a professional photographer or 3D artist.

Prompts were iterated to achieve the right balance of:

- Cinematic dark atmosphere matching the gold/black design system
- Architectural scale that communicates the property's ambition
- Photorealistic quality indistinguishable from real photography

**The broader AI integration philosophy:** rather than using AI to generate
generic assets, every image was purpose-built for its section — the retail
corridor communicates scale and brand density, the luxury wing communicates
prestige, the dining image communicates atmosphere. AI was a creative tool,
not a shortcut.

---

## What I Would Do With More Time

### Immediate (1-2 days)

- Replace all placeholder images with official American Dream press assets
- Add background video to the luxury and events sections
- Improve mobile Lighthouse score from 77 to 90+ via image optimization

### Short Term (1 week)

- Build a deep leasing module — interactive floor plan with available
  units filterable by category (luxury, F&B, pop-up, flagship)
- Build a sponsorship tier calculator — dynamic tool showing reach
  and pricing by activation type
- Add cursor effects and magnetic button interactions for desktop

### Longer Term

- Three.js property flyover — aerial 3D map of American Dream's floor plan
- Real-time availability data integration for leasing units
- Analytics dashboard showing which sections get most engagement
  per buyer mode — closing the loop between the sales tool and
  actual conversion data

---

## What This Signals

The assignment asked for signal, not perfection. Here's what I hope
this project demonstrates:

- **Product thinking** — the buyer mode system solves a real sales problem,
  not just a design problem
- **Technical fundamentals** — modular architecture, clean git history,
  zero-cost stack that performs at 93 Lighthouse
- **AI fluency** — used throughout as a thinking partner and accelerator,
  not a replacement for judgment
- **Craft** — every section has a deliberate visual hierarchy,
  consistent design language, and a clear call to action

The world's most exciting destination deserves a sales tool that
matches its ambition. This is that tool.

---

_Submitted by Vishakha Bhardwaj_
