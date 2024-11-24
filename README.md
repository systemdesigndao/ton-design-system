[![Telegram System Design DAO Forum][telegram-system-design-dao-badge]][telegram-system-design-dao-url]

[telegram-system-design-dao-badge]: https://img.shields.io/badge/-System%20Design%20DAO%20Forum-2CA5E0?style=flat&logo=telegram&logoColor=white
[telegram-system-design-dao-url]: https://t.me/systemdesigndao_forum

# TON Design System

<https://ton.org/en/brand-assets>

## TDS Wiki

[Home](https://github.com/systemdesigndao/ton-design-system/wiki)  
[Quick start](https://github.com/systemdesigndao/ton-design-system/wiki/Quick-start)  
[dotlottie](https://github.com/systemdesigndao/ton-design-system/wiki/dotlottie)  

## Package size

```sh
/
@designervoid/ton-design-system
/
lib/
folder
20.8 kB
package/
folder
13.3 kB
public/
folder
28.3 kB
LICENSE.md
text/markdown
1.09 kB
README.md
text/markdown
2.03 kB
package.json
application/json
516 B
```

[verify on the npm code tab](https://www.npmjs.com/package/@designervoid/ton-design-system?activeTab=code)

## Repository size

```sh
git count-objects -vH
count: 733
size: 3.45 MiB
in-pack: 1666
packs: 2
size-pack: 3.20 MiB
prune-packable: 55
garbage: 0
size-garbage: 0 bytes
```

## TDS Highlights

- Advantages of TailwindCSS

  TailwindCSS offers flexibility and scalability with its utility-first approach.  
  It allows for fast, customizable UI development without imposing design constraints.

- Awesome DX (Developer Experience)

  TailwindCSS improves developer experience by offering instant feedback, comprehensive documentation, and tools like `rsbuild` for optimized development workflows.

- Atomic CSS

  TailwindCSS automates the generation of atomic classes, where each class does one specific thing, ensuring small, reusable, and predictable CSS.

- Design Tokens

  Design tokens provide a system for values like colors, typography, and spacing.  
  The example includes the golden ratio for generating dynamic spacing, font sizes, and more, ensuring design consistency across the app.

- Lightweight

  TailwindCSS is lightweight, especially with tools like patterns-vanjs, which offer a lean, production-ready solution for creating fast and optimized products.

- Ready to go patterns

  A folder (registry/patterns) with pre-built, customizable UI patterns, enabling quick prototyping and reusable components for rapid development.  
Checkout [stable patterns](https://github.com/systemdesigndao/ton-design-system/tree/master/registry#stable-patterns).

- CLI

  You can copy projects and components from the `registry` with the CLI. See [README.md#use-cli](README.md#use-cli).

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

## License

MIT
