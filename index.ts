import { defineCustomElement } from 'vue';
import ButtonNative from './src/components/ButtonNative.ce.vue';
import ButtonPrimary from './src/components/ButtonPrimary.ce.vue';
import ButtonOutline from './src/components/ButtonOutline.ce.vue';
import SpacingBlock from './src/components/SpacingBlock.ce.vue';
import LayoutTemplate from './src/components/LayoutTemplate.ce.vue'

const ButtonNativeElement = defineCustomElement(ButtonNative);
const ButtonPrimaryElement = defineCustomElement(ButtonPrimary);
const ButtonOutlineElement = defineCustomElement(ButtonOutline);
const SpacingElement = defineCustomElement(SpacingBlock);
const LayoutElement = defineCustomElement(LayoutTemplate);

export function registerCustomElements() {
    customElements.define('button-native', ButtonNativeElement);
    customElements.define('button-primary', ButtonPrimaryElement);
    customElements.define('button-outline', ButtonOutlineElement);
    customElements.define('spacing-block', SpacingElement);
    customElements.define('layout-element', LayoutElement);
}

// https://stackoverflow.com/questions/27334365/how-to-get-list-of-registered-custom-elements

export function getAllCustomElementsNames() {
    document.addEventListener("DOMContentLoaded", function(event) {
        // Get all elements
        const elements = document.querySelectorAll('*')

        // Create an array from elements
        const elementArray = Array.from(elements)

        // Map to node names
        const nodeNames = elementArray.map(element => element.nodeName.toLowerCase())

        // Filter by which ones are registered
        const allCustomElementNames = nodeNames.filter(customElements.get.bind(customElements))
        
        for (let customElementName of allCustomElementNames) {
            const customElement = document.querySelector<HTMLElement>(customElementName)!;
            customElement.style.display = 'flex';

            if (customElementName === 'layout-element') {
                customElement.style.height = '100vh';
                customElement.style.width = '100vw';
                customElement.style.justifyContent = 'center';
                customElement.style.alignItems = 'center';
            }
        }
    });
}