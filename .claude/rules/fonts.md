# Fonts

## Current fonts

- **Sans (default):** Inter via `--font-inter`
- **Display:** Eighties Comeback (local) via `--font-eighties`

## Standard procedure to add or change a font

### Step 1: Import in `app/layout.tsx`

**Google Fonts:**
```tsx
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
```

**Local Fonts:**
```tsx
import localFont from "next/font/local";

const eightiesComeback = localFont({
  src: [
    { path: "./fonts/EightiesComeback-LightUltraCondensed.otf", style: "normal" },
    { path: "./fonts/EightiesComebackIt-LightUltraCondensed.otf", style: "italic" },
  ],
  variable: "--font-eighties",
  display: "swap",
});
```

- Google fonts: import from `next/font/google` (self-hosted at build time)
- Local fonts: import `localFont` from `next/font/local`, store font files in `app/fonts/`
- Use the `variable` option to register a CSS custom property
- Always set `display: "swap"` to prevent FOIT (flash of invisible text)

### Step 2: Apply the CSS variable on `<html>`

Add font variables to the `<html>` className in `app/layout.tsx`:

```tsx
<html className={`${inter.variable} ${eightiesComeback.variable}`}>
```

### Step 3: Wire up in `app/globals.css`

Map the CSS variable to a Tailwind v4 design token in the `@theme inline` block:

```css
@theme inline {
  --font-sans: var(--font-inter);
  --font-display: var(--font-eighties);
}
```

Then use via Tailwind classes: `font-sans` (default) or `font-display`.

## Rules

- Never load fonts via `<link>` tags or CSS `@import url()` — always use `next/font`
- Never use `className` approach — always use `variable` + CSS custom property for Tailwind v4 integration
- Store local font files in `app/fonts/`
- Register every font variable in `@theme inline` in `globals.css`
- Apply all font variables on `<html>` in `layout.tsx` — not on `<body>` or deeper elements
