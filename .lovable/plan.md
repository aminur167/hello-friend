## Reference language
Boutique luxury real estate — cinematic dark imagery, gold pill badges above titles, large Hind Siliguri Bengali display type in white with a gold word, muted Bengali subtitle, dual pill CTAs (gold solid + white outline), circular glass arrow nav, generous vertical breathing room, editorial centered compositions (Emaar / Sobha / Binghatti energy).

## Design tokens (add / refine in `src/styles.css`)
- `--luxe-ink: oklch(0.14 0.03 260)` (near-black navy for section backgrounds)
- `--luxe-cream: oklch(0.97 0.01 85)` (off-white surfaces)
- `--luxe-gold` reuse existing `#D4A017`; add `--luxe-gold-soft: #EBB63A`
- New utility classes: `.pill-badge` (gold-dot + uppercase EN or Bengali micro-label pill), `.btn-luxe-gold`, `.btn-luxe-ghost` (white outline over dark), `.arrow-nav` (44px glass circle).
- Section rhythm: `py-24 md:py-32`, headings `text-5xl md:text-7xl` Hind Siliguri weight 700 with one gold word.

## Sections to restyle (in order)
1. **HeroSlider** — recompose to reference:
   - Centered stack: gold pill (project name) → 2-line Bengali display headline (one line gold) → muted Bengali subtitle → two CTAs (`প্রকল্প দেখুন →` gold, `বুকিং করুন` ghost).
   - Left/right circular glass arrow nav, bottom-center slide dots (gold active).
   - Darker cinematic gradient overlay `linear-gradient(180deg, rgba(11,25,60,.35) 0%, rgba(0,0,0,.65) 100%)`.
2. **TrustStrip** — cream band, centered small gold label "আমাদের স্বীকৃতি", 5 mono-line icon+text items separated by hair-line dividers.
3. **FeaturedProjects / Ongoing / Completed** — editorial cards: full-bleed image, gold status pill top-left, Bengali title, thin gold divider, price + location row; hover lifts card 4px + fades gold border.
4. **BuildingShowcase** — bento kept, but each tile gets a bottom gradient scrim with small gold pill category.
5. **AboutCompany** — split layout: left large muted portrait image with gold frame line; right gold micro-label → Bengali headline (one gold word) → 2 paragraphs → gold outline CTA.
6. **WhyChooseUs / ConstructionQuality / InvestmentBenefits** — icon in gold circle (56px) + Bengali title + short body; 3-column, hair-line dividers, no card chrome.
7. **Statistics** — dark `--luxe-ink` band, 4 counters in serif-weight Hind Siliguri, gold value, muted Bengali label.
8. **CustomerReviews** — single centered testimonial with big gold quote glyph, avatar + name below, arrow nav pagination.
9. **CompanyVideo** — full-bleed image with centered gold-ringed play button, tiny "কোম্পানি ফিল্ম" gold label.
10. **LatestBlog** — 3 editorial cards, gold date meta, thin divider, Bengali title.
11. **BookingCTA** — full-bleed cinematic image, centered Bengali headline + gold + ghost CTA pair, matching hero.
12. **GoogleMap** — cream frame with gold corner accents, muted address block.
13. **SectionHeader** shared component — normalize to: gold uppercase EN micro-label → Bengali headline (one gold word) → optional muted Bengali sub.

## Header / Footer
- Header already matches; only tighten link spacing to 22px and switch active underline to full-width gold on load-in.
- Footer: swap headings to Bengali micro-labels (কোম্পানি / সেবা / যোগাযোগ), gold hairline top border.

## Motion
- Section reveal: fade+8px up on enter (IntersectionObserver already available via existing `animate-fade-in`).
- Cards: `transition-all 400ms cubic-bezier(.16,1,.3,1)` lift on hover.
- Hero slide change: cross-fade 700ms + subtle 1.04→1 scale on the incoming image.

## Content
Every heading, sub, CTA, and pill converted to Bengali (Hind Siliguri). Keep property/project names in English inside gold pills for brand accent.

## Technical notes
- No new packages needed; Hind Siliguri already loaded.
- Reuse `SectionHeader.tsx` and extend props (`kicker`, `titleBn`, `goldWord`, `subBn`).
- Add `src/components/ui/LuxePill.tsx` and `src/components/ui/ArrowNav.tsx` for reuse across Hero, Reviews, and Projects.
- Keep all edits inside `src/components/home/**` and `src/styles.css`; do not touch data files, routes, or backend.

## Out of scope
Admin panel, project detail pages, forms, and routing stay untouched this pass.
