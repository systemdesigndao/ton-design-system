import { jsx } from './package/jsx'

import { Button } from "./components/Button"
import { Caption1, Caption2, Caption3, Caption4, Headline1, Headline2, Headline3, Regular1, Regular2, Subtitle1, Subtitle2, Subtitle3, Title1, Title2, Title3 } from './components/Typography'
import init from '@/rust_wasm_module/rust_wasm_module';

export const App = () => {
  init().then((module) => module.greet());

  return (
    <div className='px-2 py-2 h-full flex flex-col'>
      <Button className="custom-classname w-fit">Cross-platform button (default)</Button>
      <div className="flex flex-col">
        <Title1>Title1</Title1>
        <Title2>Title2</Title2>
        <Title3>Title3</Title3>
        <Headline1>Headline1</Headline1>
        <Headline2>Headline2</Headline2>
        <Headline3>Headline3</Headline3>
        <Regular1>Regular1</Regular1>
        <Regular2>Regular2</Regular2>
        <Subtitle1>Subtitle1</Subtitle1>
        <Subtitle2>Subtitle2</Subtitle2>
        <Subtitle3>Subtitle 3</Subtitle3>
        <Caption1>Caption1</Caption1>
        <Caption2>Caption 2</Caption2>
        <Caption3>Caption 3</Caption3>
        <Caption4>Caption 4</Caption4>
      </div>
    </div>
  )
}