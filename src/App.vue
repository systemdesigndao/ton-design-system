<script setup lang="ts">
import Details from './components/Details.vue';
import Layout from './components/Layout.vue';
import CardLight from './components/CardLight.vue';
import CardDark from './components/CardDark.vue';
import Row from './components/Row.vue';
import TextBlack from './components/TextBlack.vue';
import TextBold from './components/TextBold.vue';
import TextRegular from './components/TextRegular.vue';
import TextWhite from './components/TextWhite.vue';
import GemLogoDark from './components/GemLogoDark.vue';
import GemLogoLight from './components/GemLogoLight.vue';
import GemSymbol from './components/GemSymbol.vue';
import TONLogoDark from './components/TONLogoDark.vue';
import TONLogoLight from './components/TONLogoLight.vue';
import TONSymbol from './components/TONSymbol.vue';
</script>

<template>
    <div className="flex flex-col h-screen bg-backgroundGrayLight dark:bg-backgroundGrayDark">
      <h1 className="text-title1 text-black dark:text-white">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-black dark:text-white">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-black dark:text-white">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-black dark:text-white">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-black dark:text-white">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-black dark:text-white">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-black dark:text-white">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-black dark:text-white">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-black dark:text-white">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-black dark:text-white">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-black dark:text-white">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-black dark:text-white">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-black dark:text-white">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-black dark:text-white">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
    </div>
</template>