import { FunctionalComponent, h } from '@stencil/core';

export interface LinkProps {
  class?: string;
  classObj?: {
    [className: string]: boolean;
  };
  to?: string;
}

export const Link: FunctionalComponent<LinkProps> = ({to, class: classes = '', classObj }, children) => {
  return (
    <a
      href={to}
      class={{
        'no-underline transition duration-300 ease-in-out rounded cursor-pointer': true,
        [classes]: true,
        ...classObj
      }}
      rel="noopener noreferrer"
    >
      { children }
    </a>
  );
};
