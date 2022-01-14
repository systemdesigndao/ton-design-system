import LayoutTemplate from './LayoutTemplate.ce.vue';
import { mount } from '@vue/test-utils';
import { h, RendererElement, RendererNode, VNode } from 'vue';

type Slots = {
    slots: {
        [key: string]: () => VNode<RendererNode, RendererElement, {
            [key: string]: typeof h;
        }>;
    };
};

const provideMountParams = (slots: Slots) => {
    return mount(LayoutTemplate, slots);
}

describe('Layout', () => {
    const hHeader = h('div', 'header slot');
    const hContent = h('div', 'content slot');
    const hFooter = h('div', 'footer slot');
    const headerNode = '<div>header slot</div>';
    const contentNode = '<div>content slot</div>';
    const footerNode = '<div>footer slot</div>';
    const nextLineNode = '\n';
    const mergedSlotNodes = headerNode + nextLineNode + contentNode + nextLineNode + footerNode;

    test('Header slot exists', () => {
        const slots = { slots: { header: () => hHeader } };
        
        const wrapper = provideMountParams(slots);
  
        expect(wrapper.html()).toBe(headerNode);
    })

    test('Content slot exists', () => {
      const slots = { slots: { content: () => hContent } };
      
      const wrapper = provideMountParams(slots);

      expect(wrapper.html()).toBe(contentNode);
    })

    test('Footer slot exists', () => {
        const slots = { slots: { footer: () => hFooter } };
        
        const wrapper = provideMountParams(slots);
  
        expect(wrapper.html()).toBe(footerNode);
    })

    test('Prev slots works together properly', () => {
        const slots = { slots: { header: () => hHeader, content: () => hContent, footer: () => hFooter } };
        
        const wrapper = provideMountParams(slots);
        
        expect(wrapper.html()).toBe(mergedSlotNodes);
    })
})