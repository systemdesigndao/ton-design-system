# Patterns Raw Library Rust Wasm

Example contains simple page based on `ton-design-system/raw-library` plus `Rust` bridged via compiled `.wat` modules into `wasm`.

`Rust` files contains next syntax:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Greet!");
}
```

## Quick Start

```bash
git clone git@github.com:systemdesigndao/ton-design-system.git

cd ton-design-system/registry/patterns-raw-library-rust-wasm

pnpm i

# dev
pnpm run dev

# preview
pnpm run build && pnpm run preview 
```