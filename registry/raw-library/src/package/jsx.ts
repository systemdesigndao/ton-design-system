import { JSXChild, JSXProps, JSXType } from "./types";

export function jsx(type: JSXType, props: JSXProps, ...children: JSXChild[]): JSX.Element {
  if (typeof type === "function") {
    props = { ...props, children } as JSXProps;
    return type(props);
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

  const appendChild = (parent: JSXParent, child: JSXChild) => {
    if (Array.isArray(child)) {
      child.forEach(nestedChild => appendChild(parent, nestedChild));
    } else if (typeof child === 'string') {
      parent.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      parent.appendChild(child);
    } else if (typeof child === 'function') {
      appendChild(parent, child());
    }
  };

  const fragment = document.createDocumentFragment();
  children.forEach(child => appendChild(fragment, child));
  element.appendChild(fragment);

  return element;
}

export const render = (app: HTMLDivElement, appElement: Node) => {
  app.appendChild(appElement);
}