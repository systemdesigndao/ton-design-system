import { defineCustomElement } from 'vue';
import ButtonCustom from './src/components/ButtonCustom.ce.vue';
import ButtonPrimary from './src/components/ButtonPrimary.ce.vue';
import ButtonOutline from './src/components/ButtonOutline.ce.vue';
import SpacingBlock from './src/components/SpacingBlock.ce.vue';

const ButtonCustomElement = defineCustomElement(ButtonCustom);
const ButtonPrimaryElement = defineCustomElement(ButtonPrimary);
const ButtonOutlineElement = defineCustomElement(ButtonOutline);
const SpacingElement = defineCustomElement(SpacingBlock);

export function registerCustomElements() {
    customElements.define('button-custom', ButtonCustomElement);
    customElements.define('button-primary', ButtonPrimaryElement);
    customElements.define('button-outline', ButtonOutlineElement);
    customElements.define('spacing-block', SpacingElement);
}