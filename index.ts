import { defineCustomElement } from 'vue';
import ButtonNativeCeVue from './src/components/ButtonNative.ce.vue';
import ButtonPrimaryCeVue from './src/components/ButtonPrimary.ce.vue';
import ButtonOutlineCeVue from './src/components/ButtonOutline.ce.vue';
import SpacingBlockCeVue from './src/components/SpacingBlock.ce.vue';
import LayoutTemplateCeVue from './src/components/LayoutTemplate.ce.vue';
import TextBlackCeVue from './src/components/TextBlack.ce.vue';
import TextBoldCeVue from './src/components/TextBold.ce.vue';
import TextRegularCeVue from './src/components/TextRegular.ce.vue';
import TextWhiteCeVue from './src/components/TextWhite.ce.vue';
import TONLogoDarkCeVue from './src/components/TONLogoDark.ce.vue';
import TONLogoLightCeVue from './src/components/TONLogoLight.ce.vue';
import TONSymbolCeVue from './src/components/TONSymbol.ce.vue';
import GemLogoDarkCeVue from './src/components/GemLogoDark.ce.vue';
import GemLogoLightCeVue from './src/components/GemLogoLight.ce.vue';
import GemSymbolCeVue from './src/components/GemSymbol.ce.vue';
import CardDarkCeVue from './src/components/CardDark.ce.vue';
import CardLightCeVue from './src/components/CardLight.ce.vue';
import ChartLineCeVue from './src/components/ChartLine.ce.vue';

const ButtonNativeElement = defineCustomElement(ButtonNativeCeVue);
const ButtonPrimaryElement = defineCustomElement(ButtonPrimaryCeVue);
const ButtonOutlineElement = defineCustomElement(ButtonOutlineCeVue);
const CardDarkElement = defineCustomElement(CardDarkCeVue);
const CardLightElement = defineCustomElement(CardLightCeVue);
const GemLogoDarkElement = defineCustomElement(GemLogoDarkCeVue);
const GemLogoLightElement = defineCustomElement(GemLogoLightCeVue);
const GemSymbolElement = defineCustomElement(GemSymbolCeVue);
const LayoutElement = defineCustomElement(LayoutTemplateCeVue);
const SpacingElement = defineCustomElement(SpacingBlockCeVue);
const TextBlackElement = defineCustomElement(TextBlackCeVue);
const TextBoldElement = defineCustomElement(TextBoldCeVue);
const TextRegularElement = defineCustomElement(TextRegularCeVue);
const TextWhiteElement = defineCustomElement(TextWhiteCeVue);
const TONLogoDarkElement = defineCustomElement(TONLogoDarkCeVue);
const TONLogoLightElement = defineCustomElement(TONLogoLightCeVue);
const TONSymbolElement = defineCustomElement(TONSymbolCeVue);
const ChartLineElement = defineCustomElement(ChartLineCeVue);

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
    customElements.define('chart-line', ChartLineElement);
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