// getAssetPath

import { h, Host } from '@stencil/core'

// wip
export const StyledHost: typeof Host = (attrs, children) => {
  return (
    <Host {...attrs}>
      {/* <link rel='stylesheet' href={getAssetPath('app.css')} /> */}
      {children}
    </Host>
  )
}
