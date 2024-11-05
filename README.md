[![Telegram System Design DAO Forum][telegram-system-design-dao-badge]][telegram-system-design-dao-url]

[telegram-system-design-dao-badge]: https://img.shields.io/badge/-System%20Design%20DAO%20Forum-2CA5E0?style=flat&logo=telegram&logoColor=white
[telegram-system-design-dao-url]: https://t.me/systemdesigndao_forum

# TON Design System

<https://ton.org/en/brand-assets>

## Package size
[![Package raw size](https://deno.bundlejs.com/?q=@designervoid/ton-design-system&badge=detailed&badge-style=for-the-badge)][bundlejs-ton-design-system-link]

[bundlejs-ton-design-system-link]: https://bundlejs.com/?q=@designervoid/ton-design-system

## Repository size
![GitHub repo size](https://img.shields.io/github/repo-size/systemdesigndao/ton-design-system)

## Main idea

Atomic CSS

```css
.atom {
  @apply ... (tw-classes)
}
```

## Usage

Atomic Components using Declarative components with [Raw Framework](https://github.com/systemdesigndao/ton-design-system/tree/master/registry/raw-framework#raw-ui-framework)


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

## More examples

- Examples of usages within [`ton-design-system/registry`](https://github.com/systemdesigndao/ton-design-system/blob/master/registry/README.md#contain)
- Example of usage with [`next-typescript`](https://github.com/designervoid/ton-design-system-next-typescript)
- Example of usage with [`rn-typescript`](https://github.com/designervoid/ton-design-system-rn-typescript)

![Screenshot](./docs/images/App.jpeg)

## Use CLI

### Quick start

1. Copy component from Github - `npx "@designervoid/ton-design-system"@"latest" cli -g`
2. Init Tailwind `npx "@designervoid/ton-design-system"@"latest" cli -t`
3. Init TDS `npx "@designervoid/ton-design-system"@"latest" cli -tds`

## License

MIT
