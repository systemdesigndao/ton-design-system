import { Component, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'main-app',
  styleUrl: 'index.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MainApp {
  componentWillLoad() {
    const fontDeclarationElement: HTMLStyleElement = document.createElement('style');

    fontDeclarationElement.textContent += `html{font-size:16px}\n` + `@font-face{font-family:Mulish;src:url(${getAssetPath('./assets/fonts/Mulish-Regular.ttf')})  format("truetype");}\n`;

    document.head.append(fontDeclarationElement);

    const linkTailwind: HTMLLinkElement = document.createElement('link');

    linkTailwind.href = getAssetPath('./assets/tailwind.css');
    linkTailwind.rel = 'stylesheet';

    document.head.append(linkTailwind);
  }

  render() {
    return (
        <div>
          <main>
            <top-nav-bar></top-nav-bar>
            <hero-section></hero-section>
            <footer-nav></footer-nav>
          </main>
        </div>
    );
  }
}
