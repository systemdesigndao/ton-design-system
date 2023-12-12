import { jsx } from './package/jsx'

import { Button } from "./components/Button"

export const App = () => {
  return (
    <div className='px-2 py-2 h-full flex'>
      <Button className="custom-classname">Cross-platform button (default)</Button>
    </div>
  )
}