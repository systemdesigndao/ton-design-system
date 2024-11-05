# Raw Pattern Vanjs

This registry contains example of using `VanJS` + `Rsbuild` + `TailwindCSS`.

The syntax is based on `TypeScript`.

# Contain

- System Fonts CSS
- TailwindCSS & TDS (phi based design system font sizes, spacings)
- System & Force Theme
- Lazy routes (`src/theme.lazy.tsx`)
- Joint state between components using `@tanstack/react-store` (`src/stores/theme`)

## Quick Start

```bash
git clone git@github.com:systemdesigndao/ton-design-system.git

cd ton-design-system/registry/patterns-vanjs

pnpm i

# dev
pnpm run dev

# preview
pnpm run build && pnpm run preview 
```