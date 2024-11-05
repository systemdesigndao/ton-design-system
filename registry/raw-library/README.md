# Raw Library

Raw Library is a small library for creating user interfaces using JSX, Tailwind CSS (сurrenly available only in `dev` mode, `prod` currently can be used only for simple and small landing pages).

The syntax of components is a little bit compatible with React, Vue 3, and Solid.js.

And no reactivity there.

This micro-library capable for landing pages.

To see more capable for reactive interfaces templates:

1. Raw Pattern React (`ton-design-system/registry/patterns-react`)
  - Capable for quick MVP's, Ideas, a lot of solutions

    [Read docs](https://github.com/systemdesigndao/ton-design-system/blob/master/registry/patterns-react/README.md#contain)

2. Raw Pattern Vanjs (`ton-design-system/registry/patterns-vanjs`)
  - Capable for very lightweight clients, but weight 2kb all things like components with reactive joint state between components (out from the box), **not so powerful and optimised as vanjs**

    [Read docs](https://github.com/systemdesigndao/ton-design-system/blob/master/registry/patterns-vanjs/README.md#contain)

3. Raw Framework (`ton-design-system/registry/raw-framework`)
  - Also capable for very lightweight clients, but weight 2kb all things like components with reactive joint state between components (out from the box), **not so powerful and optimised as vanjs (based on i5 Performance)**

  [Read docs](https://github.com/systemdesigndao/ton-design-system/blob/master/registry/raw-framework/README.md#contain)

## Contain

- **Simple JSX Factory**: Allows the use of JSX without additional dependencies.
- **Tailwind CSS Integration**: Provides convenient utilities for styling.
- **Minimalist Approach**: No use of large dependencies or complex configurations.

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