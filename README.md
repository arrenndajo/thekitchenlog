# The Kitchen Log

A personal recipe log styled as Polaroids on a cream tabletop. Built with Vite +
React + Tailwind, with scroll-reveal animations (framer-motion) and a nav bar
that slides in after you scroll past the hero title.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

Deploys to Vercel as-is (framework preset: Vite).

## Add a dish

Edit `src/data/recipes.js` and add an entry:

```js
{ name: "Palak Paneer", date: "2026-01-14", img: "/images/palak-paneer.jpg" }
```

- `date` accepts any parseable string; the grid sorts newest first.
- Drop photos in `public/images/` and point `img` at `/images/your-file.jpg`.
- Leave `img: ""` to show the paper placeholder with the dish's initial.

## Structure

```
src/
  App.jsx                  # layout + nav-on-scroll + modal state
  data/recipes.js          # your dishes (edit here)
  components/
    Navbar.jsx             # slides in past the hero title
    Hero.jsx               # big "The Kitchen Log" title
    RecipeGrid.jsx         # responsive 5-up polaroid grid
    PolaroidCard.jsx       # a single polaroid tile (scroll reveal + hover tilt)
    PhotoFrame.jsx         # square photo with placeholder fallback
    PolaroidModal.jsx      # enlarged polaroid on click
    Footer.jsx
```

## Design tokens

Colors and fonts live in `tailwind.config.js`: cream `paper`, off-white
`polaroid`, `ink` text, plus Fraunces (display), Caveat (handwriting), Spline
Sans Mono (captions/data), Inter (body).
