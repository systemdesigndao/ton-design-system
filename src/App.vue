<script setup lang="ts">
/*
    --background_light_icon: rgba(0,136,204,0.06);
    --background_light_blue: rgba(0,136,204,0.1);
    --background_dark_main: #232328;
    --background_dark_gradient: linear-gradient(0deg,#232328,#343437 101.47%);
    --background_dark_secondary: hsla(0,0%,100%,0.03);
    --background_gradient_light: linear-gradient(180deg,#fff,#f7f9fb 134.8%);
    --background_green_light: #829a94;
    --background_black_mini_opacity: rgb(0,0,0,0.24);
    --background_loading_gradient_light: linear-gradient(90deg,#f7f9fb -9.69%,#f2f5f8 -9.68%,#fff 52.19%,#f2f5f8 106.56%);
    --button_light_primary: #08c;
    --button_light_primary_hover: #0197e2;
    --button_light_primary_pressed: #0082c2;
    --button_light_secondary: rgba(246,248,251,0.8);
    --button_light_secondary_hover: #f4f7fa;
    --button_light_secondary_pressed: #f4f7fa;
    --button_dark_primary: #08c;
    --button_dark_primary_hover: #00a1f1;
    --button_dark_primary_pressed: #076c9f;
    --button_dark_secondary: hsla(0,0%,100%,0.06);
    --button_dark_secondary_hover: hsla(0,0%,100%,0.12);
    --button_dark_secondary_pressed: hsla(0,0%,100%,0.03);
    --button_dark_text: #07a0ec;
    --button_dark_secondary_text_hover: #5bc8ff;
    --button_dark_secondary_text_pressed: #0186c9;
    --button_light_primary_small: rgba(0,136,204,0.06);
    --button_light_primary_small_hover: rgba(0,136,204,0.3);
    --button_light_primary_small_pressed: rgba(0,136,204,0.03);
    --text_light_primary: #161c28;
    --text_light_secondary: #728a96;
    --text_dark_primary: #fff;
    --text_dark_secondary: hsla(0,0%,100%,0.7);
    --text_dark_gradient: linear-gradient(89.92deg,#06a1ef 28.51%,#69cdff 85.79%);
    --icon_light_primary: #08c;
    --icon_light_secondary: rgba(236,240,243,0.8);
    --icon_light_thirdly: #98b2bf;
    --icon_dark_primary: #02a8fb;
    --separator_light: rgba(123,148,160,0.2);
    --separator_dark: hsla(0,0%,100%,0.06);
    --black: #000;
    --covers_light_green: #caefd9;
    --hovered_link: #08c;
    --light_border: rgba(114,138,150,0.24);

    --ton_blue: #08c;
    --ton_dark_blue: #019be9;
    --default_white: #fff;
    --default_black: #161c28;
    --toncoin_header: #353538;
    --toncoin_gradient: linear-gradient(297.97deg,#232328 9.93%,#343437 76.88%);
*/

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
    <h1 className="text-title1 text-white-1 p-2 text-center bg-main-1-dark">
      Dark theme
    </h1>
    <div className="flex flex-col h-screen bg-gray-1-dark p-2">
      <h1 className="text-title1 text-main-1-dark">
        Typography
      </h1>
      <h1 className="text-title1 text-white-1">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-white-1">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-white-1">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-white-1">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-white-1">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-white-1">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-white-1">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-white-1">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-white-1">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-white-1">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-white-1">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-white-1">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-white-1">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-white-1">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
      <h1 className="text-title1 text-main-1-dark">
        Cards
      </h1>
      <div className="bg-gray-2-dark rounded-[1.7rem] p-4 flex justify-center w-fit"><TONLogoDark /></div>
    </div>
    <h1 className="text-title1 text-white-1 p-2 text-center bg-main-1-light">
      Light theme
    </h1>
    <div className="flex flex-col h-screen bg-gray-1-light p-2">
      <h1 className="text-title1 text-main-1-light">
        Typography
      </h1>
      <h1 className="text-title1 text-black-1">
        Title1/2rem/Medium - 2rem/2.35rem
      </h1>
        <h2 className="text-title2 text-black-1">
        Title2/1.42rem/Medium - 1.42rem/1.64rem
      </h2>
      <h3 className="text-title3 text-black-1">
        Title3/1.21rem/Medium - 1.21rem/1.42rem
      </h3>
      <h4 className="text-headline1 text-black-1">
        Headline1/1.14rem/Regular - 1.14rem/1.35rem
      </h4>
      <h5 className="text-headline2 text-black-1">
        Headline2/1.14rem/Medium - 1.14rem/1.35rem
      </h5>
      <h6 className="text-headline3 text-black-1">
        Headline3/1.07rem/Medium - 1.07rem/1.28rem
      </h6>
      <p className="text-regular1 text-black-1">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
      <p className="text-regular2 text-black-1">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
      <p className="text-subtitle1 text-black-1">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
      <p className="text-subtitle2 text-black-1">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
      <p className="text-subtitle3 text-black-1">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
      <p className="text-caption1 text-black-1">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
      <p className="text-caption2 text-black-1">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
      <p className="text-caption3 text-black-1">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
      <h1 className="text-title1 text-main-1-light">
        Cards
      </h1>
      <div className="bg-gray-2-light rounded-[1.7rem] p-4 flex justify-center w-fit"><TONLogoLight /></div>
    </div>
</template>