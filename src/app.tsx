import React, { useState } from 'react'

import OpenButton from './components/OpenButton'
import Menu from './components/Menu'

const App: React.FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false)

  return (
    <>
      <div style={{ display: menuState ? '' : 'none' }}>
        <Menu setMenuState={setMenuState} />
      </div>
      <div style={{ display: !menuState ? '' : 'none' }}>
        <OpenButton setMenuState={setMenuState} />
      </div>
    </>
  )
}

export default App