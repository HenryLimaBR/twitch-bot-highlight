import React from 'react'
import { useAppSelector } from '../../store/hooks'
import ListContainer from '../ListContainer'

import style from './style.module.scss'

const MenuBox: React.FC<any> = () => {
  const page_index = useAppSelector(state => state.core.page_index)

  return (
    <div className={style.container}>
      <div></div>

      <div className={style.list_container}>
        <ListContainer />
      </div>

      <div className={style.button_container}>
        <button className={style.button}>Prev</button>
        <p className={style.page_count}>{`${page_index[0] + 1} / ${page_index[1]}`}</p>
        <button className={style.button}>Next</button>
      </div>
    </div>
  )
}

export default MenuBox