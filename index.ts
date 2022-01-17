import { defineCustomElement } from 'vue';
import ButtonNative from './src/components/ButtonNative.ce.vue';
import ButtonPrimary from './src/components/ButtonPrimary.ce.vue';
import ButtonOutline from './src/components/ButtonOutline.ce.vue';
import SpacingBlock from './src/components/SpacingBlock.ce.vue';
import LayoutTemplate from './src/components/LayoutTemplate.ce.vue';
import TextBlack from './src/components/TextBlack.ce.vue';
import TextBold from './src/components/TextBold.ce.vue';
import TextRegular from './src/components/TextRegular.ce.vue';
import TextWhite from './src/components/TextWhite.ce.vue';
import TONLogoDark from './src/components/TONLogoDark.ce.vue';
import TONLogoLight from './src/components/TONLogoLight.ce.vue';
import TONSymbol from './src/components/TONSymbol.ce.vue';
import GemLogoDark from './src/components/GemLogoDark.ce.vue';
import GemLogoLight from './src/components/GemLogoLight.ce.vue';
import GemSymbol from './src/components/GemSymbol.ce.vue';
import CardDark from './src/components/CardDark.ce.vue';
import CardLight from './src/components/CardLight.ce.vue';

const ButtonNativeElement = defineCustomElement(ButtonNative);
const ButtonPrimaryElement = defineCustomElement(ButtonPrimary);
const ButtonOutlineElement = defineCustomElement(ButtonOutline);
const CardDarkElement = defineCustomElement(CardDark);
const CardLightElement = defineCustomElement(CardLight);
const GemLogoDarkElement = defineCustomElement(GemLogoDark);
const GemLogoLightElement = defineCustomElement(GemLogoLight);
const GemSymbolElement = defineCustomElement(GemSymbol);
const LayoutElement = defineCustomElement(LayoutTemplate);
const SpacingElement = defineCustomElement(SpacingBlock);
const TextBlackElement = defineCustomElement(TextBlack);
const TextBoldElement = defineCustomElement(TextBold);
const TextRegularElement = defineCustomElement(TextRegular);
const TextWhiteElement = defineCustomElement(TextWhite);
const TONLogoDarkElement = defineCustomElement(TONLogoDark);
const TONLogoLightElement = defineCustomElement(TONLogoLight);
const TONSymbolElement = defineCustomElement(TONSymbol);

export function registerCustomElements() {
    customElements.define('button-native', ButtonNativeElement);
    customElements.define('button-primary', ButtonPrimaryElement);
    customElements.define('button-outline', ButtonOutlineElement);
    customElements.define('card-dark', CardDarkElement);
    customElements.define('card-light', CardLightElement);
    customElements.define('gem-logo-dark', GemLogoDarkElement);
    customElements.define('gem-logo-light', GemLogoLightElement);
    customElements.define('gem-symbol', GemSymbolElement);
    customElements.define('layout-element', LayoutElement);
    customElements.define('spacing-block', SpacingElement);
    customElements.define('text-black', TextBlackElement);
    customElements.define('text-bold', TextBoldElement);
    customElements.define('text-regular', TextRegularElement);
    customElements.define('text-white', TextWhiteElement);
    customElements.define('ton-logo-dark', TONLogoDarkElement);
    customElements.define('ton-logo-light', TONLogoLightElement);
    customElements.define('ton-symbol', TONSymbolElement);
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

            if (customElementName === 'layout-element') {
                customElement.style.display = 'flex';
                customElement.style.width = '100%';
                customElement.style.justifyContent = 'center';
                customElement.style.alignItems = 'center';
            }
        }
    });
}