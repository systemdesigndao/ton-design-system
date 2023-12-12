type JSXProps = {
  [key: string]: any;
  children?: (HTMLElement | string)[];
  className?: string;
};

type JSXType = string | ((props: JSXProps) => HTMLElement);

type JSXChild = string | HTMLElement | (() => string);

export function jsx(type: JSXType, props: JSXProps, ...children: JSXChild[]): HTMLElement | DocumentFragment {
  if (typeof type === "function") {
    props = { ...props, children } as any;
    return type(props as any);
  }

  const element = document.createElement(type);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (key.startsWith("on")) {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "className") {
      element.setAttribute("class", value);
    } else if (key !== "children") {
      element.setAttribute(key, value);
    }
  });

  const appendChild = (parent: any, child: any) => {
    if (Array.isArray(child)) {
      child.forEach(nestedChild => appendChild(parent, nestedChild));
    } else if (typeof child === 'string' || child instanceof String) {
      parent.appendChild(document.createTextNode(child as any));
    } else if (child instanceof HTMLElement) {
      parent.appendChild(child);
    } else if (typeof child === 'function') {
      appendChild(parent, child());
    }
  };

  children.forEach(child => appendChild(element, child));

  return element;
}

export const render = (app: HTMLDivElement, appElement: Node) => {
  app.appendChild(appElement);
}