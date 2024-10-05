import { describe, it, expect, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { render, tags, createState, Props } from './package/raw';

const { window } = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
global.document = window.document;
(global as any).requestAnimationFrame = (callback: any) => {
    setTimeout(callback, 0);
};

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
        const appElement = document.getElementById('app');
        const newContent = div({}, 'New App Content');
        render(newContent);
        expect(appElement?.textContent).toBe('New App Content');
    });
});

describe('createState', () => {
    it('should initialize with the given value', () => {
        const state = createState(0);
        expect(state.val).toBe(0);
    });

    it('should update value and notify subscribers', () => {
        const state = createState(0);
        let updatedValue = 0;
        const subscriber = () => {
            updatedValue = state.val;
        };
        state.subscribers.add(subscriber);
        state.set(1);
        expect(updatedValue).toBe(1);
    });

    it('should unsubscribe correctly', () => {
        const state = createState(0);
        let updatedValue = 0;
        const subscriber = () => {
            updatedValue = state.val;
        };
        state.subscribers.add(subscriber);
        state.unsubscribe(subscriber);
        state.set(1);
        expect(updatedValue).toBe(0);
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
        const child1 = document.createElement('span');
        const child2 = 'Hello World';
        const element = div({}, child1, child2);
        expect(element.children[0]).toBe(child1);
        expect(element.textContent).toContain('Hello World');
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
    it('should render 10 nodes', () => {
        const main = div({});
        const elements = createNestedElements(1e1);
        elements.map(el => main.append(el()));
        render(main);
        const appElement = document.getElementById('app');
        expect(appElement?.firstChild?.childNodes.length).toBe(1e1);
    });

    it('should render 100 nodes', () => {
        const main = div({});
        const elements = createNestedElements(1e2);
        elements.map(el => main.append(el()));
        render(main);
        const appElement = document.getElementById('app');
        expect(appElement?.firstChild?.childNodes.length).toBe(1e2);
    });

    it('should render 1000 nodes', () => {
        const main = div({});
        const elements = createNestedElements(1e3);
        elements.map(el => main.append(el()));
        render(main);
        const appElement = document.getElementById('app');
        expect(appElement?.firstChild?.childNodes.length).toBe(1e3);
    });

    it('should render 10000 nodes', () => {
        const main = div({});
        const elements = createNestedElements(1e4);
        elements.map(el => main.append(el()));
        render(main);
        const appElement = document.getElementById('app');
        expect(appElement?.firstChild?.childNodes.length).toBe(1e4);
    });

    it('should render 100000 nodes', () => {
        const main = div({});
        const elements = createNestedElements(1e5);
        elements.map(el => main.append(el()));
        render(main);
        const appElement = document.getElementById('app');
        expect(appElement?.firstChild?.childNodes.length).toBe(1e5);
    });
});