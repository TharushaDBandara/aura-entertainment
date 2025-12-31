# Viragaya Website - AI Coding Instructions

## Project Context
- **Framework**: Next.js 16.1+ (App Router)
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules (`*.module.css`) + Global CSS variables
- **Animation**: Framer Motion
- **Fonts**: `next/font/google` (Playfair Display, Inter)

## Architecture & Structure
- **App Router**: Pages live in `app/`. The root layout is in `app/layout.js`.
- **Components**: Reusable UI components are in `components/`. Each component typically has a co-located CSS module (e.g., `Navbar.js` and `Navbar.module.css`).
- **Assets**: Static images and assets are in `public/`.
- **Global Styles**: Design tokens (colors, fonts, spacing) are defined in `app/globals.css`.

## Coding Conventions

### Components
- Use **Functional Components** with hooks.
- Add `'use client';` at the top of files *only* when using React hooks (`useState`, `useEffect`) or event listeners.
- Prefer **Server Components** (default) for static content and data fetching.
- Use `framer-motion` for entrance animations and interactions.

### Styling
- **CSS Modules**: Use `styles.className` for component-specific styling.
- **Design Tokens**: ALWAYS use CSS variables from `app/globals.css` for consistency.
  - **Colors**: `var(--color-bg-primary)`, `var(--color-gold)`, `var(--color-purple)`, etc.
  - **Fonts**: `var(--font-display)` (Playfair), `var(--font-body)` (Inter).
  - **Spacing**: `var(--spacing-md)`, `var(--spacing-lg)`, etc.
- **Responsive Design**: Use media queries within CSS modules to handle mobile/tablet layouts.

### Navigation
- The site uses **anchor links** (`#home`, `#about`) for single-page navigation.
- Ensure smooth scrolling behavior (handled in `globals.css` or via Next.js `Link` behavior).

## Development Workflow
- **Run Dev Server**: `npm run dev`
- **Linting**: `npm run lint` (ESLint)
- **Build**: `npm run build`

## Key Files
- `app/layout.js`: Root layout, font configuration, and metadata.
- `app/globals.css`: Global styles, CSS variables, and resets.
- `components/Navbar.js`: Example of a client component with scroll detection and mobile menu.

## Common Patterns
- **Animation**:
  ```javascript
  import { motion } from 'framer-motion';
  // ...
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
  ```
- **Fonts**:
  Apply fonts via CSS variables set in `app/layout.js`:
  ```css
  .heading {
    font-family: var(--font-display);
  }
  ```
