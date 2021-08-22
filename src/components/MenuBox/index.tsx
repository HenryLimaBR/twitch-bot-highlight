import React from 'react'

import style from './style.module.scss'

import ListContainer from '../ListContainer'
import ButtonBox from '../ButtonBox'

const MenuBox: React.FC<any> = () => {
  return (
    <div className={style.container}>
      <div></div>

      <div className={style.list_container}>
        <ListContainer />
      </div>

      <ButtonBox />
    </div>
  )
}

export default MenuBox