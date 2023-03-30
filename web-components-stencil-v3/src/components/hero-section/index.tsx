import { Component, h } from '@stencil/core';

@Component({
  tag: 'hero-section',
  styleUrl: 'index.css',
})
export class HeroSection {

  render() {
    return (
        <div class="grid min-h-screen overflow-hidden pt-hero bg-gradient-to-b from-orange-100 to-orange-400 place-items-center">

        </div>
    );
  }
}
