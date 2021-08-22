import React from 'react'

import style from './style.module.scss'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setMenu } from '../../store/core/core.state'

const MenuOptions: React.FC<any> = () => {
  const username = useAppSelector(state => state.core.username)
  const chatters_count = useAppSelector(state => state.core.chatters_count)
  const dispatch = useAppDispatch()

  return (
    <div className={style.container}>

      <div className={style.window_container}>
        <button className={style.close_button} onClick={() => dispatch(setMenu(false))}>
          <svg width='80%' height='80%' version='1.1' viewBox='0 0 20 20' x='0px' y='0px' fill='#fff'>
            <g>
              <path d='M8.5 10L4 5.5 5.5 4 10 8.5 14.5 4 16 5.5 11.5 10l4.5 4.5-1.5 1.5-4.5-4.5L5.5 16 4 14.5 8.5 10z'></path>
            </g>
          </svg>
        </button>
        <p className={style.channel_name}>{`${username} - ${chatters_count}`}</p>
      </div>
      
      <div></div>
    </div>
  )
}

export default MenuOptions