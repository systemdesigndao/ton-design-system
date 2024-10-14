import { describe, it, expect, vi, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { tags, signal, mount } from './package/raw';
import { beforeAll } from 'vitest';

const { window } = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');

beforeAll(() => {
    const dom = new JSDOM();
    (global as any).window = dom.window;
    global.document = window.document;
    (global as any).requestAnimationFrame = (callback: any) => {
        setTimeout(callback, 0);
    };
    global.Node = dom.window.Node;
    global.HTMLElement = dom.window.HTMLElement;
});

afterEach(() => {
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = '';
    }
});

const { div, span, em, button } = tags;

const createNestedElements = (count: number) => {
    const elements: ((() => HTMLElement) | never)[] = [];
    for (let i = 0; i < count; i++) {
        const q = () => div({}, `Node ${i}`);
        elements.push(q);
    }
    return elements;
};

describe('render', () => {
    it('should render the app element into the DOM', () => {
        const newContent = div({}, 'New App Content');
        mount(() => newContent);
        const mountedElement = document.getElementById('app');
        expect(mountedElement?.textContent).toBe('New App Content');
    });
});

describe('createState', () => {
    it('should initialize with the given value', () => {
        const state = signal(0);
        expect(state.get()).toBe(0);
    });
});

describe('tag', () => {
    it('should create a DOM element with the given tag name', () => {
        const element = div({});
        expect(element.tagName.toLowerCase()).toBe('div');
    });

    it('should apply props to the created element', () => {
        const element = div({ id: 'test', class: 'my-class' });
        expect(element.getAttribute('id')).toBe('test');
        expect(element.getAttribute('class')).toBe('my-class');
    });

    it('should append children to the element', () => {
        const child1 = span({});
        const child2 = 'Hello World';
        const element = div({}, child1, child2);
        expect(element.children[0]).toBe(child1);
    });

    it('should append nested HTMLElement children', () => {
        const parentElement = div();
        const childElement = span({}, 'Nested Span');
        const nestedChildElement = em({}, 'Nested Emphasis');
        parentElement.appendChild(childElement);
        childElement.appendChild(nestedChildElement);
        expect(parentElement.children.length).toBe(1);
        expect(childElement.children.length).toBe(1);
        expect(childElement.children[0]).toBe(nestedChildElement);
        expect(parentElement.innerHTML).toContain('<span>Nested Span<em>Nested Emphasis</em></span>');
    });

    it('should bind event listeners to the element', () => {
        const onClick = vi.fn();
        const button0 = button({ onClick }, 'Click me');
        button0.click();
        expect(onClick).toHaveBeenCalled();
    });
});

describe('Performance tests', () => {
    const nodeCounts = [1e1, 1e2, 1e3, 1e4, 1e5];

    nodeCounts.forEach(count => {
        it(`should render ${count} nodes`, () => {
            const main = div({});
            const elements = createNestedElements(count);
            elements.map(el => main.append(el()));
            mount(() => main);
            const appElement = document.getElementById('app');
            expect(appElement?.firstChild?.childNodes.length).toBe(count);
        });
    });
});