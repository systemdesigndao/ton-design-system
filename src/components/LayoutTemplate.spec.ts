import LayoutTemplate from './LayoutTemplate.ce.vue'
import { mount } from '@vue/test-utils';
import { h, RendererElement, RendererNode, VNode } from 'vue'

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
    test('Header slot exists', () => {
        const slots = { slots: { header: () => h('div', 'header slot')} };
        
        const wrapper = provideMountParams(slots);
  
        expect(wrapper.html()).toBe('<div>header slot</div>');
    })

    test('Content slot exists', () => {
      const slots = { slots: { content: () => h('div', 'content slot')} };
      
      const wrapper = provideMountParams(slots);

      expect(wrapper.html()).toBe('<div>content slot</div>');
    })

    test('Footer slot exists', () => {
        const slots = { slots: { content: () => h('div', 'footer slot')} };
        
        const wrapper = provideMountParams(slots);
  
        expect(wrapper.html()).toBe('<div>footer slot</div>');
    })
})