import { defineCustomElement } from 'vue';
import ButtonNative from './src/components/ButtonNative.ce.vue';
import ButtonPrimary from './src/components/ButtonPrimary.ce.vue';
import ButtonOutline from './src/components/ButtonOutline.ce.vue';
import SpacingBlock from './src/components/SpacingBlock.ce.vue';

const ButtonNativeElement = defineCustomElement(ButtonNative);
const ButtonPrimaryElement = defineCustomElement(ButtonPrimary);
const ButtonOutlineElement = defineCustomElement(ButtonOutline);
const SpacingElement = defineCustomElement(SpacingBlock);

export function registerCustomElements() {
    customElements.define('button-native', ButtonNativeElement);
    customElements.define('button-primary', ButtonPrimaryElement);
    customElements.define('button-outline', ButtonOutlineElement);
    customElements.define('spacing-block', SpacingElement);
}