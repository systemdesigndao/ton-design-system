<script setup lang="ts">
/*
Example of preferred color scheme supporting feature
className="bg-grayLight dark:bg-grayDark"
*/
import GemLogoDark from './components/GemLogoDark.vue';
import GemLogoLight from './components/GemLogoLight.vue';
import GemSymbol from './components/GemSymbol.vue';
import TONLogoDark from './components/TONLogoDark.vue';
import TONLogoLight from './components/TONLogoLight.vue';
import TONSymbol from './components/TONSymbol.vue';
</script>

<template>
    <h1 className="text-title1 text-white p-2 text-center bg-mainDark">
      Dark theme
    </h1>
    <div className="flex flex-col h-screen bg-grayDark">
      <h1 className="text-title1 text-white">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-white">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-white">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-white">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-white">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-white">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-white">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-white">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-white">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-white">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-white">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-white">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-white">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-white">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
      <div className="bg-grayDark rounded-[1.7rem] p-4 flex justify-center w-fit"><TONLogoDark /></div>
    </div>
    <h1 className="text-title1 text-white p-2 text-center bg-mainLight">
      Light theme
    </h1>
    <div className="flex flex-col h-screen bg-grayLight">
      <h1 className="text-title1 text-black">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-black">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-black">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-black">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-black">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-black">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-black">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-black">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-black">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-black">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-black">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-black">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-black">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-black">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
      <div className="bg-grayLight rounded-[1.7rem] p-4 flex justify-center w-fit"><TONLogoLight /></div>
    </div>
</template>