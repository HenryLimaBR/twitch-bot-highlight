import React from 'react'
import { MenuProps } from '../../../typings/rc'

import style from './style.module.scss'

import MenuOptions from '../MenuOptions'
import MenuBox from '../MenuBox'

const Menu: React.FC<MenuProps> = ({ setMenuState, hidden }) => {
  return (
    <div className={style.container} hidden={hidden}>
      <MenuOptions setMenuState={setMenuState} />
      <MenuBox />
    </div>
  )
}

export default Menu