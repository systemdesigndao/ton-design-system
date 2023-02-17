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
import DeDustLogo from './components/DeDustLogo.vue';
</script>

<template>
    <h1 className="text-title1 text-white-1 p-2 text-center bg-main-dark-5">
      Dark theme
    </h1>
    <div className="flex flex-col h-screen bg-gray-dark-5 p-2">
      <h1 className="text-title1 text-main-dark-4 p-1">
        Typography
      </h1>
      <h1 className="text-title1 text-white-1 p-1">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-white-1 p-1">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-white-1 p-1">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-white-1 p-1">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-white-1 p-1">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-white-1 p-1">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-white-1 p-1">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-white-1 p-1">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-white-1 p-1">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-white-1 p-1">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-white-1 p-1">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-white-1 p-1">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-white-1 p-1">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-white-1 p-1">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
      <h1 className="text-title1 text-main-dark-4 p-1">
        Cards
      </h1>
      <div className="flex gap-3">
        <div className="bg-gray-dark-6 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <TONLogoDark />
        </div>
        <div className="bg-gray-dark-6 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <GemLogoDark />
        </div>
        <div className="bg-gray-dark-6 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <TONSymbol />
        </div>
        <div className="bg-gray-dark-6 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <GemSymbol />
        </div>
        <div className="bg-gray-dark-6 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <DeDustLogo />
        </div>
      </div>
    </div>
    <h1 className="text-title1 text-white-1 p-2 text-center bg-main-light-5">
      Light theme
    </h1>
    <div className="flex flex-col h-screen bg-white-1 p-2">
      <h1 className="text-title1 text-main-light-4 p-1">
        Typography
      </h1>
      <h1 className="text-title1 text-black-9 p-1">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-black-9 p-1">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-black-9 p-1">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-black-9 p-1">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-black-9 p-1">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-black-9 p-1">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-black-9 p-1">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-black-9 p-1">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-black-9 p-1">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-black-9 p-1">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-black-9 p-1">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-black-9 p-1">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-black-9 p-1">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-black-9 p-1">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
      <h1 className="text-title1 text-main-light-4 p-1">
        Cards
      </h1>
      <div className="flex gap-3">
        <div className="bg-gray-light-6/10 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <TONLogoLight />
        </div>
        <div className="bg-gray-light-6/10 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <GemLogoLight />
        </div>
        <div className="bg-gray-light-6/10 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <TONSymbol />
        </div>
        <div className="bg-gray-light-6/10 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <GemSymbol />
        </div>
        <div className="bg-gray-light-6/10 rounded-[1.7rem] p-4 flex justify-center w-fit items-center">
          <DeDustLogo />
        </div>
      </div>
    </div>
</template>