# Raw UI Library

Raw UI Library is a small library for creating user interfaces using JSX, Tailwind CSS (сurrenly available only in `dev` mode).

The syntax of components is typically compatible with React, Vue 3, and Solid.js.

## Features

- **Simple JSX Factory**: Allows the use of JSX without additional dependencies.
- **Tailwind CSS Integration**: Provides convenient utilities for styling.
- **Minimalist Approach**: No use of large dependencies or complex configurations.
- **Wabt**: Easy to use WebAssembly modules via WebAssebly Text with Wabt.

## Installation

Install the necessary dependencies via npm:

```bash
pnpm install
```

To run the project in development mode, use the command:

```bash
npm run dev
```

For building the project, use:

```bash
npm run build
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