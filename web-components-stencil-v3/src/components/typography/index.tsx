import { tdsTheme } from '@designervoid/ton-design-system'
import { Component, h, Prop } from '@stencil/core'
import { Tailwindest } from 'tailwindest'
import { StyledHost } from '../../helpers'

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
  styleUrl: './index.css',
  shadow: false,
})
export class TdsTypography {
  @Prop() variant: TDSTailwind['fontSize'];
  @Prop() color: TDSTailwind['color'];
  @Prop() align: TDSTailwind['textAlign'];
  @Prop() weight: TDSTailwind['fontWeight'];
  @Prop() uppercase: boolean = false
  @Prop() content: HTMLElement | string | undefined;
  @Prop() classCustom: string;

  render() {
    const { variant, color, align, weight, uppercase, content, classCustom } = this;

    return (
      <StyledHost>
        <span class={`${variant ?? ''} ${color ?? ''} ${align ?? ''} ${weight ?? ''} ${uppercase ? 'uppercase' : ''} ${classCustom ?? ''} font-mulish`}>
          {content}
        </span>
      </StyledHost>
    )
  }
}