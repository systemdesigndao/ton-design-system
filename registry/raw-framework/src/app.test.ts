import { describe, it, expect, vi } from 'vitest';
import { JSDOM } from 'jsdom';
import { render, tags, createState, tag } from './package/raw';

const { window } = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
global.document = window.document;

describe('render', () => {
    it('should render the app element into the DOM', () => {
        const appElement = document.getElementById('app');
        const newContent = tags.div({}, 'New App Content');
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
        const element = tag('div');
        expect(element.tagName.toLowerCase()).toBe('div');
    });

    it('should apply props to the created element', () => {
        const element = tag('div', { id: 'test', class: 'my-class' });
        expect(element.getAttribute('id')).toBe('test');
        expect(element.getAttribute('class')).toBe('my-class');
    });

    it('should append children to the element', () => {
        const child1 = document.createElement('span');
        const child2 = 'Hello World';
        const element = tag('div', {}, child1, child2);
        expect(element.children[0]).toBe(child1);
        expect(element.textContent).toContain('Hello World');
    });

    it('should append nested HTMLElement children', () => {
        const parentElement = tag('div');
        const childElement = tag('span', {}, 'Nested Span');
        const nestedChildElement = tag('em', {}, 'Nested Emphasis');
        parentElement.appendChild(childElement);
        childElement.appendChild(nestedChildElement);
        expect(parentElement.children.length).toBe(1);
        expect(childElement.children.length).toBe(1);
        expect(childElement.children[0]).toBe(nestedChildElement);
        expect(parentElement.innerHTML).toContain('<span>Nested Span<em>Nested Emphasis</em></span>');
    });

    it('should bind event listeners to the element', () => {
        const onClick = vi.fn();
        const button = tag('button', { onClick }, 'Click me');
        button.click();
        expect(onClick).toHaveBeenCalled();
    });
});
