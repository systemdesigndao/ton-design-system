import { tdsTheme } from '@designervoid/ton-design-system'
import { Component, h, Prop } from '@stencil/core'
import { Tailwindest } from 'tailwindest'

import { StyledHost } from './helpers'

export type TDSTailwind = Tailwindest<
  {
    color:
      | 'transparent'
      | 'current'
      | `black-${keyof typeof tdsTheme.colors.black}`
      | `white-${keyof typeof tdsTheme.colors.white}`
      | `main-${keyof typeof tdsTheme.colors.main}-${
          | keyof typeof tdsTheme.colors.main.dark
          | keyof typeof tdsTheme.colors.main.light}`
      | `gray-${keyof typeof tdsTheme.colors.gray}-${
          | keyof typeof tdsTheme.colors.gray.dark
          | keyof typeof tdsTheme.colors.gray.light}`
  },
  {
    fontFamily: keyof typeof tdsTheme.fontFamily
    fontSize: keyof typeof tdsTheme.fontSize
  }
>

@Component({
  tag: 'tds-typography',
  styleUrl: './typography.css',
  shadow: true,
})
export class TdsTypography {
  @Prop() variant: TDSTailwind['fontSize'] = 'text-regular1'
  @Prop() color: TDSTailwind['color'] = 'text-black-1'
  @Prop() align: TDSTailwind['textAlign'] = 'text-left'
  @Prop() uppercase: boolean = false

  render() {
    return (
      <StyledHost>
        <div class={`${this.variant} ${this.color} ${this.align} ${this.uppercase ? 'uppercase' : ''}`}>
          <slot />
        </div>
      </StyledHost>
    )
  }
}
