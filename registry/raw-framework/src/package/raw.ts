export type Props = { [key: string]: any };
export type TagFunction = (props?: Props, ...children: (HTMLElement | string)[]) => HTMLElement;

export type State<T> = {
    val: T;
    subscribers: Set<() => void>;
    set: (newValue: T) => void;
    unsubscribe: (subscriber: () => void) => void;
};

export const createState = <T>(initialValue: T): State<T> => {
    const state: State<T> = {
        val: initialValue,
        subscribers: new Set(),
        set(newValue: T) {
            this.val = newValue;
            this.subscribers.forEach(subscriber => subscriber());
        },
        unsubscribe(subscriber: () => void) {
            this.subscribers.delete(subscriber);
        }
    };
    
    return state;
};

export const tag = <K extends keyof HTMLElementTagNameMap>(name: K, props: Props = {}, ...children: (HTMLElement | string)[]): HTMLElement => {
    const element = document.createElement(name);
    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith("on")) {
            const event = key.slice(2).toLowerCase();
            element.addEventListener(event, value);
        } else {
            element.setAttribute(key, value);
        }
    });
    children.forEach(child => {
        if (child) {
            element.append(child);
        }
    });
    return element;
};

export const tags = new Proxy({} as Record<keyof HTMLElementTagNameMap, TagFunction>, {
    get: <K extends keyof HTMLElementTagNameMap>(target: Record<K, TagFunction>, name: K): TagFunction => {
        if (!(name in target)) {
            target[name] = (props?: Props, ...children: (HTMLElement | string)[]) => tag(name, props, ...children);
        }
        return target[name];
    }
});

export const raw = {
    tag,
    createState,
};

export const render = (app: HTMLElement) => {
    const appElement = document.getElementById('app')!;
    appElement.replaceChildren(app);
    if (!document.body.contains(appElement)) {
        document.body.append(appElement);
    }
};
