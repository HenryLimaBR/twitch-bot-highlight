import React from 'react'

import OpenButton from './components/OpenButton'
import Menu from './components/Menu'
import { useAppSelector } from './store/hooks'

const App: React.FC = () => {
  const menu = useAppSelector((state) => state.core.menu)

  return (
    <>
      <div style={{ display: menu ? '' : 'none' }}>
        <Menu />
      </div>
      <div style={{ display: !menu ? '' : 'none' }}>
        <OpenButton />
      </div>
    </>
  )
}

export default App