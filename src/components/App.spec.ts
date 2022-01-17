import App from '../App.vue';
import { mount } from '@vue/test-utils';

describe('App', () => {
    const appNode = `<layout-element>\n  <main slot="content">\n    <button-primary></button-primary>\n    <spacing-block type="top" payload="12"></spacing-block>\n    <button-outline></button-outline>\n    <spacing-block type="top" payload="12"></spacing-block>\n  </main>\n</layout-element>`;

    test('Test', () => {
        const wrapper = mount(App);
        expect(wrapper.html()).toBe(appNode);
    })
})