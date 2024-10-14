# Raw UI Framework

Raw UI Framework is a small framework for creating user interfaces using pure TypeScript and Tailwind CSS.

The syntax is based on TypeScript.

## Features

- **Simple Component Factory**: Allows the use of JSX without additional dependencies.
- **Reactivity via Signals**: You can write state anywhere you want
- **Tailwind CSS Integration**: Provides convenient utilities for styling.
- **Minimalist Approach**: No use of large dependencies or complex configurations.
- **Easy Testing**: Testing components and functions is straightforward with Vitest and JSDOM. This setup allows you to write and run tests for your TypeScript code easily, without complex configurations. Vitest provides a simple syntax, while JSDOM simulates a browser environment for validating UI interactions and DOM manipulations.

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
```ts
import { tags } from './package/raw'

const { div, button } = tags;

export const Button = () => {
  return (
    div(
      { className='px-2 py-2 h-full flex' }, 
      button(
        { class: "custom-classname", variant="default" }, 
        'Cross-platform button (default)'
      )
    );
};
```

#### Like/dislike

```ts
import { signal, tags } from './package/raw';

const { div, span, button } = tags;

function Counter() {
    let count = signal(0);

    return div({},
        span({}, "❤️ ", count, " "),
        button({ onclick: () => count.set(count.get() + 1) }, "👍"),
        button({ onclick: () => count.set(count.get() - 1) }, tags.span({}, '👎')),
    );
}
```

#### Component Factory

The component factory allows the creation of DOM elements using TypeScript syntax by declarative way.

Big thanks to [VanJS](https://github.com/vanjs-org/van) for the inspiration and the declarative pattern of using Vanilla JS elements!

```ts
import { tags } from './package/raw';

const { span } = tags;

// props first, children second
span({}, 'Hello World 🌎');

// decomposed
const props = {};
const children = 'Hello World 🌎';
span(props, children);
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

To force use Tailwind classes use this property in `tailwind.config.js`:

```
safelist: [
    {
      pattern: /bg-(white|blue)/,
    },
  ],
```

If you want this classes, they will cost ~15kb (ungzip), ~3kb (gzip).

By default these TW Classes are removed from tds/raw build.

Current example app only with Counter and Typography Title1:

```
dist/index.html                 0.45 kB │ gzip: 0.29 kB
dist/assets/index-${rand0}.css  5.63 kB │ gzip: 1.76 kB
dist/assets/index-${rand1}.js   2.50 kB │ gzip: 1.26 kB
```