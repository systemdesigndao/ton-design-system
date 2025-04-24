# Raw Pattern React

This registry contains example of using `VanJS` + `Rsbuild` + `Tailwind V4`.

The syntax is based on `TypeScript`.

# Contain

- System Fonts CSS
- Rsbuild
- TailwindV4 & TDS (phi based design system font sizes, spacings) & Custom TMA TailwindCSS Plugins
- Different themes. System & Force Theme & TMA Theme.
- Router (`react-router-dom`)
- Joint state between components using `zustand` (`src/stores/theme`)
- Dev mode includes a convenient `biome-js` check and lint feature.
- `dotlottie-rs` with lottie packs.
- `tma:` tw plugin (activate classes in TMA applications), [TMA Theme](https://core.telegram.org/bots/webapps#themeparams) Params in Tailwind 

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