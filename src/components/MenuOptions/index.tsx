import React from 'react'

import style from './style.module.scss'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setMenu } from '../../store/core/core.state'
import CloseIcon from '../Icons/CloseIcon'

const MenuOptions: React.FC<any> = () => {
  const username = useAppSelector(state => state.core.username)
  const chatters_count = useAppSelector(state => state.core.chatters_count)
  const dispatch = useAppDispatch()

  return (
    <div className={style.container}>

      <div className={style.window_container}>
        <button className={style.close_button} onClick={() => dispatch(setMenu(false))}>
          <CloseIcon width='100%' height='100%' fill='#fff' />
        </button>
        <p className={style.channel_stats}>{`${username} ${chatters_count}`}</p>
      </div>

      <div></div>
    </div>
  )
}

export default MenuOptions