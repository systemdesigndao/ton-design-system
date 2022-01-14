import LayoutTemplate from './LayoutTemplate.ce.vue'
import { mount } from '@vue/test-utils';
import { h } from 'vue'

describe('Layout', () => {
    test('Content slot exists', () => {
      const wrapper = mount(LayoutTemplate, { slots: { content: () => h('div', 'content slot')} });

      expect(wrapper.html()).toBe('<div>content slot</div>');
    })
})