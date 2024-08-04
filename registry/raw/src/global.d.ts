/**
 * Very base types, will build what needed only
 * Based on solid-js/types/jsx.d.ts
 */

/**
 * Based on JSX types for Surplus and Inferno and adapted for `dom-expressions`.
 *
 * https://github.com/adamhaile/surplus/blob/master/index.d.ts
 * https://github.com/infernojs/inferno/blob/master/packages/inferno/src/core/types.ts
 */
type JSXParent = Node | DocumentFragment;

namespace JSX {
  type Element = Node | ArrayElement | (string & {}) | number | boolean | null | undefined;
  // Defining ElementChildrenAttribute lets us type the children passed to an embedded subcomponent
  interface ElementChildrenAttribute {
    children: {};
  }
  interface IntrinsicElements {
      a: HTMLAttributes<HTMLAnchorElement>;
      button: HTMLAttributes<HTMLButtonElement>;
      div: HTMLAttributes<HTMLDivElement>;
  }
}