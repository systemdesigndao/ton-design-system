import { Config } from '@stencil/core'

export const config: Config = {
  globalStyle: 'www/tailwind.css',
  outputTargets: [
    {
      type: 'www',
      empty: false,
      serviceWorker: null,
    },
  ],
}
