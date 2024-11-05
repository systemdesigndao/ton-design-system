# Patterns Raw Library Wat

Example contains simple page based on `ton-design-system/raw-library` plus `WebAssebmly text format` (`WAT`).

`WAT` format it is `.wat` files with next syntax:

```wat
(module
  (func $add_i32 (param $x i32) (param $y i32) (result i32)
    local.get $x
    local.get $y
    i32.add
  )
  (export "add_i32" (func $add_i32))
)
```

## Quick Start

```bash
git clone git@github.com:systemdesigndao/ton-design-system.git

cd ton-design-system/registry/patterns-raw-library-wat

pnpm i

# dev
pnpm run dev

# preview
pnpm run build && pnpm run preview 
```