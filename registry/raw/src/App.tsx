import { jsx } from './package/jsx'

import { Button } from "./components/Button"
import { Caption1, Caption2, Caption3, Caption4, Headline1, Headline2, Headline3, Regular1, Regular2, Subtitle1, Subtitle2, Subtitle3, Title1, Title2, Title3 } from './components/Typography'

export const App = () => {
  return (
    <div className='px-2 py-2 h-full flex flex-col'>
      <Button className="custom-classname w-fit">Cross-platform button (default)</Button>
      <div className="flex flex-col">
        <div className='mt-2'>
          <Title1>Title1</Title1>
        </div>
        <Title2>Title2</Title2>
        <Title3>Title3</Title3>
        <div className='mt-2'>
          <Headline1>Headline1</Headline1>
        </div>
        <Headline2>Headline2</Headline2>
        <Headline3>Headline3</Headline3>
        <div className='mt-2'>
          <Regular1>Regular1</Regular1>
        </div>
        <Regular2>Regular2</Regular2>
        <div className='mt-2'>
          <Subtitle1>Subtitle1</Subtitle1>
        </div>
        <Subtitle2>Subtitle2</Subtitle2>
        <Subtitle3>Subtitle3</Subtitle3>
        <div className='mt-2'>
          <Caption1>Caption1</Caption1>
        </div>
        <Caption2>Caption2</Caption2>
        <Caption3>Caption3</Caption3>
        <Caption4>Caption4</Caption4>
      </div>
    </div>
  )
}