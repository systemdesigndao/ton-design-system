# Raw Pattern React

This registry contains example of using `VanJS` + `Rsbuild` + `TailwindCSS`.

The syntax is based on `TypeScript`.

# Contain

- System Fonts CSS
- Rsbuild
- TailwindCSS & TDS (phi based design system font sizes, spacings)
- System & Force Theme
- Router (`TanStackRouterRspack`) & Lazy routes (`src/theme.lazy.tsx`)
- Joint state between components using `@tanstack/react-store` (`src/stores/theme`)
- Benchmark overview of 1e4 components (`src/routes/benchmark/likes.lazy.tsx`)

## Quick Start

```bash
git clone git@github.com:systemdesigndao/ton-design-system.git

cd ton-design-system/registry/patterns-react

pnpm i

# dev
pnpm run dev

# preview
pnpm run build && pnpm run preview 
```