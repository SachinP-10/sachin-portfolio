# Sachin Pawar — Portfolio

Personal portfolio built with **React 19**, **TypeScript** and **modern CSS** (CSS Modules, custom properties, `color-mix()`, `clamp()`, sticky stacking, masks). Bundled with **Vite**. No UI or CSS framework, no icon library.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
```

Requires Node 20.19+ (Node 22 recommended).

## Update your content

Everything shown on the site lives in **`src/data/portfolio.ts`**:

| What | Where |
| --- | --- |
| Name, tagline, about text, email, phone, links, resume URL | `personal` |
| Skills (with category and optional icon) | `skills` |
| Jobs | `experiences` |
| Projects (add `code` / `demo` URLs to show buttons) | `projects` |
| Education | `educations` |

TypeScript checks the shape of each entry (see `src/types.ts`), so a typo or missing field shows up as an error instead of a broken page.

**Skill icons:** drop an SVG into `src/assets/skills/` and set `icon: "file-name"` on the skill. Skills without an icon get a coloured monogram tile automatically.

**Profile photo:** replace `public/profile.webp`.

## Project structure

```
src/
├── data/portfolio.ts        ← all content
├── types.ts                 ← data types
├── components/              ← one component + .module.css per section
│   ├── Navbar, Hero, About, Experience, Skills,
│   ├── Projects, Education, Contact, Footer
│   └── GlowCard, SectionTitle, SkillIcon, ScrollToTop, Icons
├── hooks/                   ← useActiveSection, useScrolled
├── styles/global.css        ← design tokens and base styles
└── assets/skills/           ← skill logos (SVG)
```

## Contact form

The form needs no backend: it validates the input, then opens the visitor's email app with the message pre-filled to your address. To send mail directly instead, swap the `onSubmit` handler in `src/components/Contact.tsx` for a service such as EmailJS or Formspree.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, import the repo. It detects Vite automatically (build command `npm run build`, output `dist`).
3. Deploy. To reuse your current URL, connect the new repo to the existing `sachin-port-folio` project in Vercel settings.
