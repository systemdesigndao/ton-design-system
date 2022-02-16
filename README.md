# TON Design System

## Prerequisites

`node16.13.2`, `npm8.1.2`, `make3.81`

## Quick start

Install packages:

```zsh
npm i
```

Run `dev` (1) or `prod` (2) environment

1:

```zsh
npm run dev
```

2:

```zsh
make prod
npm run serve -- --host
```

`

## Main idea

Atomary CSS

```css
.atom {
  /*
    ... properties
  */
}
```

Usage of class:

```html
<div class="atom"></div>
```

## License

MIT
