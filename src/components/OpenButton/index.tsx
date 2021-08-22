import React from 'react'
import TwitchRobotIcon from '../TwitchBotIcon'

import style from './style.module.scss'

import { useAppDispatch } from '../../store/hooks'
import { setMenu } from '../../store/core/core.state'

const OpenButton: React.FC<any> = () => {
  const dispatch = useAppDispatch()

  return (
    <button
      className={style.open_button}
      onClick={() => dispatch(setMenu(true))}
      title='Twitch Bot Highlight Tool'
    >
      <TwitchRobotIcon width="100%" height="100%" />
    </button>
  )
}

export default OpenButton