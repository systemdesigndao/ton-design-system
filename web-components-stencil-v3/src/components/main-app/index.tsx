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

    fontDeclarationElement.textContent += `@font-face{font-family:Mulish;src:url(${getAssetPath('./assets/fonts/Mulish-Regular.ttf')})  format("truetype");}`;

    document.head.append(fontDeclarationElement);
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
