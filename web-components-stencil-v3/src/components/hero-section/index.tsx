import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'index.css',
  shadow: true,
})
export class HeroSection {

  render() {
    return (
      <Host>
        <div class="grid min-h-screen overflow-hidden pt-hero bg-gradient-to-b from-orange-100 to-orange-400 place-items-center">

        </div>
      </Host>
    );
  }
}
