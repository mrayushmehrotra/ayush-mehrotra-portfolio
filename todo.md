# Animation Enhancement Todo

## Priority 1 — Do these first (high impact, low effort)

- [x] **Hero word-by-word reveal** — `WordReveal` component that staggers each word in the hero heading instead of a block fade-up
- [x] **Animated counters on stats** — `useCounter` hook that counts up from 0 when stats scroll into view
- [ ] **Image clip-path reveal** — project images wipe in from below using `clip-path: inset(100% 0 0 0)` → `inset(0 0 0 0)`
- [ ] **Scroll progress bar** — fixed 2px bar at the top of the page that fills as you scroll
- [ ] **Animated underlines on links** — sweep-in underline on email, GitHub, Live links (replaces static borderBottom)

## Priority 2 — Polish (medium impact, low-medium effort)

- [ ] **Staggered grid items** — tech stack and principles cards fade in sequentially rather than all at once
- [ ] **Grain / noise overlay** — subtle `0.035` opacity grain texture over the entire page for a premium feel
- [ ] **Timeline line-draw animation** — experience timeline line draws from top to bottom on scroll
- [ ] **Timeline dot pop-in** — timeline dots scale in with a spring animation as each item scrolls into view

## Priority 3 — Tactile interactions (medium impact, medium effort)

- [ ] **3D tilt on tech cards** — perspective tilt that follows the mouse on tech stack and principle cards
- [ ] **Magnetic hover on links & CTA** — buttons and links subtly follow the cursor position
- [ ] **Parallax on hero portrait** — portrait shifts slightly on scroll for depth

## Priority 4 — Stretch (high effort, high impact)

- [ ] **Horizontal scroll for projects** — restructure the projects section into a horizontal scroll with snap points

---

**Quick-start notes:**

- All components and hooks go in `components/` or inline in `page.tsx`
- CSS `@keyframes` go in `app/global.css`
- The existing `fade-up` / `is-in` IntersectionObserver system can be reused for triggering
- For word reveal, handle `<em>considered</em>` by splitting the h1 into segments manually
- Tilt and magnetic hover replace existing inline `onMouseEnter`/`onMouseLeave` handlers
