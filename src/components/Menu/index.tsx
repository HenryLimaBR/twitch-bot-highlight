import React from 'react'

import style from './style.module.scss'

import MenuOptions from '../MenuOptions'
import MenuBox from '../MenuBox'

const Menu: React.FC<any> = () => {
  return (
    <div className={style.container}>
      <MenuOptions />
      <MenuBox />
    </div>
  )
}

export default Menu