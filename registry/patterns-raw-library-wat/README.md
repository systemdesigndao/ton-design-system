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

### Component Examples

#### Button
```JSX
import { Button } from "./components/Button"

export const App = () => {
  return (
    <div className='px-2 py-2 h-full flex'>
      <Button className="custom-classname" variant="default">Cross-platform button (default)</Button>
    </div>
  )
}
```

#### JSX Factory

The JSX factory allows the creation of DOM elements using JSX syntax.

```JSX
import { jsx } from './package/jsx'

const element = <div>Hello World</div>;
```

#### Tailwind CSS Configuration
The tailwind.config.js file defines the basic configuration for Tailwind CSS, including custom themes and plugins.

```js
const { tdsTheme } = require('../../package/index');

export default {
  content: ["./src/**/*.{JSX,JSX}"],
  theme: {
    extend: {
      ...tdsTheme,
    },
  },
  plugins: [],
}
```

# Wabt

`npx -p wabt wat2wasm ./wat/add.wat -o ./public/add.wasm`