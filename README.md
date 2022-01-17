# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Import WC

### Development + production

Такой способ используется, когда мы хотим проверить перед сборкой веб-компонент в этом [репозитории](https://github.com/designervoid/ton-design-system).

1. Соберите веб-компоненты `npm run build`
2. Измените `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <link rel="stylesheet" href="./src/assets/styles/global.css">
  </head>
  <body>
    <layout-element>
      <main slot="content">
          <card-light>
          <div slot="content">
            <button-primary link="https://t.me"></button-primary>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <button-outline link="https://github.com"></button-outline>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <text-black>
              <span slot="text">text black</span>
            </text-black>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <text-bold>
              <span slot="text">text bold</span>
            </text-bold>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <text-regular>
              <span slot="text">text regular</span>
            </text-regular>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-dark>
          <div slot="content">
            <text-white>
              <span slot="text">text white</span>
            </text-white>
          </div>
        </card-dark>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-dark>
          <div slot="content">
            <ton-logo-dark></ton-logo-dark>
          </div>
        </card-dark>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <ton-logo-light></ton-logo-light>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <ton-symbol></ton-symbol>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-dark>
          <div slot="content">
            <gem-logo-dark></gem-logo-dark>
          </div>
        </card-dark>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <gem-logo-light></gem-logo-light>
          </div>
        </card-light>
        <spacing-block type="top" :payload="12"></spacing-block>
        <card-light>
          <div slot="content">
            <gem-symbol></gem-symbol>
          </div>
        </card-light>
      </main>
    </layout-element>
    <script src="https://unpkg.com/vue@next"></script>
    <script type="module">
      import {registerCustomElements, getAllCustomElementsNames} from '/dist/index.es.js';
  
      registerCustomElements();
      getAllCustomElementsNames();
    </script>
  </body>
</html>
```


### Production

Такой способ используется, когда мы хотим проверить перед сборкой веб-компонент в этом [`package`](https://github.com/designervoid/ton-design-system/packages/1180696).
Провайдим `vue@next` (в примере используется `CDN`), `tonweb`, `tonweb-mnemonic`, `@designervoid/ton-design-system` из `node_modules`.

1. Если через CSS импорты, тогда порядок важен, должен быть сначала стиль дизайн системы, 
        так как он провайдит стиль:  

    ```css
      * { 
        margin: 0; 
        padding: 0;
      }
    ```

    Затем можно уже свои стили, дабы переписать дефолтные через кастомные стили:

    ```css
      layout-element {
        width: 0px !important;
      }
    ```

    Здесь передается `important`, потому что эти стили через JS задаются.

    Передать кастомный стиль классу, который находится внутри Shadow DOM:

    ```css
      layout-element main {
        width: 0px;
      }
    ```

    Вложенный элемент можно переписать без `important`;

2. Тоже самое, что и в пункте 1, только со скриптами и импортами CSS. В примере в дальнейшем импорт используется в скрипте.

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <!-- Пункт 1 -->
    <!-- <link rel="stylesheet" href="@designervoid/ton-design-system/assets/styles/global.css"> -->
  </head>
  <body>
    <layout-element>
      <main slot="content">
          <card-light>
            <div slot="content">
              <button-primary link="https://t.me"></button-primary>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <button-outline link="https://github.com"></button-outline>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <text-black>
                <span slot="text">text black</span>
              </text-black>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <text-bold>
                <span slot="text">text bold</span>
              </text-bold>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <text-regular>
                <span slot="text">text regular</span>
              </text-regular>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-dark>
            <div slot="content">
              <text-white>
                <span slot="text">text white</span>
              </text-white>
            </div>
          </card-dark>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-dark>
            <div slot="content">
              <ton-logo-dark></ton-logo-dark>
            </div>
          </card-dark>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <ton-logo-light></ton-logo-light>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <ton-symbol></ton-symbol>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-dark>
            <div slot="content">
              <gem-logo-dark></gem-logo-dark>
            </div>
          </card-dark>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <gem-logo-light></gem-logo-light>
            </div>
          </card-light>
          <spacing-block type="top" :payload="12"></spacing-block>
          <card-light>
            <div slot="content">
              <gem-symbol></gem-symbol>
            </div>
          </card-light>
      </main>
    </layout-element>
    <script src="https://unpkg.com/vue@next"></script>
    <script type="module">
      import {registerCustomElements, getAllCustomElementsNames} from '/dist/index.es.js';
      // Пункт 2
      import '@designervoid/ton-design-system/assets/styles/global.css';
  
      registerCustomElements();
      getAllCustomElementsNames();
    </script>
  </body>
</html>
```

Пример использования с [`vite-vanilla-ts`](https://github.com/designervoid/ton-design-system-vite-vanilla-ts)

# License

MIT