import Layout from './Layout.vue';
import { mount, VueWrapper } from '@vue/test-utils';
import { h, RendererElement, RendererNode, VNode } from 'vue';

type Slots = {
    slots: {
        [key: string]: () => VNode<RendererNode, RendererElement, {
            [key: string]: typeof h;
        }>;
    };
};

const provideMountParams = (slots: Slots) => {
    return mount(Layout, slots);
}

const makeHtmlOneLineString = (wrapper: VueWrapper<any>) => {
    let html = wrapper.html();
    // remove newline / carriage return
    html = html.replace(/\n/g, "");

    // remove whitespace (space and tabs) before tags
    html = html.replace(/[\t ]+\</g, "<");

    // remove whitespace between tags
    html = html.replace(/\>[\t ]+\</g, "><");

    // remove whitespace after tags
    html = html.replace(/\>[\t ]+$/g, ">");

    return html;
}
describe('Layout', () => {
    const hHeader = h('div', 'header slot');
    const hContent = h('div', 'content slot');
    const hFooter = h('div', 'footer slot');

    test('Header slot exists', () => {
        const slots = { slots: { header: () => hHeader } };
        
        const wrapper = provideMountParams(slots);
  
        let html = makeHtmlOneLineString(wrapper);

        expect(html).toBe('<header class="header"><div>header slot</div></header><main class="content"></main><footer class="footer"></footer>');
    })

    test('Content slot exists', () => {
        const slots = { slots: { content: () => hContent } };
      
        const wrapper = provideMountParams(slots);

        let html = makeHtmlOneLineString(wrapper);

        expect(html).toBe('<header class="header"></header><main class="content"><div>content slot</div></main><footer class="footer"></footer>');
    })

    test('Footer slot exists', () => {
        const slots = { slots: { footer: () => hFooter } };
        
        const wrapper = provideMountParams(slots);
  
        let html = makeHtmlOneLineString(wrapper);

        expect(html).toBe('<header class="header"></header><main class="content"></main><footer class="footer"><div>footer slot</div></footer>');
    })

    test('Prev slots works together properly', () => {
        const slots = { slots: { header: () => hHeader, content: () => hContent, footer: () => hFooter } };
        
        const wrapper = provideMountParams(slots);
        
        let html = makeHtmlOneLineString(wrapper);

        expect(html).toBe('<header class="header"><div>header slot</div></header><main class="content"><div>content slot</div></main><footer class="footer"><div>footer slot</div></footer>');
    })
})