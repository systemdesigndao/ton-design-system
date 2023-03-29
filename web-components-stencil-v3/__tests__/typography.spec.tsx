import { Fragment, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { TdsTypography } from '../src/components/typography';

describe('tds-typography', () => {
  it('should render text with variant "text-regular1"', async () => {
    const { root } = await newSpecPage({
      components: [TdsTypography],
      template: () => (
        <tds-typography variant='text-regular1'></tds-typography>
      ),
    });

    expect(root).toEqualHtml('<tds-typography><span class="text-regular1"></span></tds-typography>');
  });

  it('should render nested typography elements correctly', async () => {
    const { root } = await newSpecPage({
      components: [TdsTypography],
      template: () => (
        <tds-typography
          color="text-black-5"
          content={
            <Fragment>
              <tds-typography variant="text-title1" color="text-black-5" content="DeDust" />
              <tds-typography variant="text-title1" color="text-purple-900" content="UI" />
            </Fragment>
          }
        />
      ),
    });
    
    expect(root).toEqualHtml('<tds-typography><span class="text-black-5"><tds-typography><span class="text-title1 text-black-5">DeDust</span></tds-typography><tds-typography><span class="text-title1 text-purple-900">UI</span></tds-typography></span></tds-typography>');
  });

  it('should apply gradient to the text', async () => {
    const { root } = await newSpecPage({
      components: [TdsTypography],
      template: () => (
        <tds-typography
          variant='text-title1'
          content="DeDust UI"
          classCustom='text-transparent bg-clip-text bg-gradient-to-br from-orange-600/50 to-orange-400/80'
        />
      ),
    });

    const span = root.querySelector('span') as HTMLSpanElement;

    expect(span.className).toContain('bg-clip-text bg-gradient-to-br from-orange-600/50 to-orange-400/80');
  });
});