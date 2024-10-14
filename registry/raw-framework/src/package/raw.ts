type TagFunction = (props?: Record<string, any>, ...children: any[]) => HTMLElement;
type CleanupFunction = () => void;

type Computation = {
    fn: () => void;
    cleanup: CleanupFunction;
    stop?: CleanupFunction;
};

let currentComputation: Computation | undefined;

class Signal<T> {
    private value: T;
    private subs = new Set<Computation>();

    constructor(initialValue: T) {
        this.value = initialValue;
    }

    get(): T {
        if (currentComputation) {
            this.subs.add(currentComputation);
            currentComputation.stop = () => {
                this.subs.delete(currentComputation!);
            };
        }
        return this.value;
    }

    set(newValue: T) {
        if (this.value !== newValue) {
            this.value = newValue;
            this.notify();
        }
    }
    
    private notify() {
        let subsArray = Array.from(this.subs);
        queueMicrotask(() => {
            subsArray.forEach(sub => {
                sub.cleanup();
                runComputation(sub);
            });
        });
    }
}

export function signal<T>(initial: T): Signal<T> {
    return new Signal(initial);
}

export function effect(fn: () => void) {
    let cleanupFn: CleanupFunction = () => {};
    let computation: Computation = {
        fn,
        cleanup: () => {
            cleanupFn();
        },
        stop: () => {}
    };

    runComputation(computation);
    cleanupFn = computation.stop!;
}

function runComputation(computation: Computation) {
    let parent = currentComputation;
    currentComputation = computation;
    try {
        computation.fn();
    } finally {
        currentComputation = parent;
    }
}

function h(tag: string, props: Record<string, any> = {}, ...children: any[]): HTMLElement {
    let el = document.createElement(tag);
    
    Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith('on')) {
            let event = key.slice(2).toLowerCase();
            el.addEventListener(event, value);
        } else if (value instanceof Signal) {
            effect(() => {
                el.setAttribute(key, value.get().toString());
            });
        } else {
            el.setAttribute(key, value.toString());
        }
    });

    children.flat(Infinity).forEach(child => {
        if (child instanceof Signal) {
            let textNode = document.createTextNode('');
            effect(() => {
                textNode.textContent = child.get().toString();
            });
            el.appendChild(textNode);
        } else if (child instanceof Node) {
            el.appendChild(child);
        } else if (child !== null) {
            if (typeof child === 'object') {
                el.appendChild(child);
            }
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child.toString()));
            }
        }
    });
    
    return el;
}

export let tags = new Proxy({}, {
    get: (_, tag: string): TagFunction => 
        (props = {}, ...children) =>
            h(tag, props, ...children)
}) as Record<string, TagFunction>;

export function mount(component: () => HTMLElement, root: HTMLElement | null = document.getElementById('app')) {
    if (!root) {
        root = document.createElement('div');
        root.id = 'app';
        document.body.appendChild(root);
    }
    root.appendChild(component());
}