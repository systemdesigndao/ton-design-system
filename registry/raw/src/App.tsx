import { jsx } from './package/jsx'
import { Caption4, Headline1, Regular1, Regular2 } from './components/Typography'

import json from '../package.json';
import { Link } from './components/Link';

export const App = () => {
  return (
    <div className='px-2 py-2 h-screen flex flex-col relative'>
      <div className="flex flex-col h-full">
        <Headline1>Making frontend in TON Ecosystem since 2022</Headline1>
        <Regular1>👷‍♂️ Maintainers</Regular1>
        <div className="flex flex-col">
          <Regular2>designervoid <Link href="https://t.me/designervoid">telegram</Link> | <Link href="https://github.com/designervoid">github</Link></Regular2>
        </div>
        <Regular1>💻 Code</Regular1>
        <div className="flex flex-col">
          <Regular2>systemdesigndao/ton-design-system <Link href="https://github.com/systemdesigndao/ton-design-system">github</Link></Regular2>
        </div>
        <Regular1>🎨 Art</Regular1>
        <div className="flex flex-col">
          <Regular2>G-Bots Stickers <Link href="https://t.me/addstickers/GBots">telegram</Link></Regular2>
          <Regular2>DeDust Emojis <Link href="https://t.me/addemoji/ScaletonDeDustEmojis">telegram</Link></Regular2>
        </div>
        <Regular1>🌟 Contributions</Regular1>
        <div className="flex flex-col">
          <Regular2>G-Bots <Link href="https://t.me/gbotston_en">telegram</Link></Regular2>
          <Regular2>DeDust <Link href="https://t.me/dedust_en">telegram</Link></Regular2>
        </div>
        <Regular1>🏗️ Infrastructure</Regular1>
        <div className='mt-1 flex flex-col'>
          <Regular2>Web2 ✅</Regular2>
          <Regular2>Web3 ✅</Regular2>
        </div>
        <div>
          {/* untrusted version view currently, just using json property */}
          <Caption4>Site version: {json.version}</Caption4>
        </div>
      </div>
    </div>
  )
}