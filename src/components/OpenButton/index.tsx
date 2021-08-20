import React from 'react'
import { OpenButtonProps } from '../../../typings/rc'
import TwitchRobotIcon from '../TwitchBotIcon'

import style from './style.module.scss'

const OpenButton: React.FC<OpenButtonProps> = ({ setMenuState, hidden }) => {
  return (
    <button
      className={style.open_button}
      onClick={() => setMenuState(true)}
      title='Twitch Bot Highlight Tool'
      hidden={hidden}
    >
      <TwitchRobotIcon width="100%" height="100%" />
    </button>
  )
}

export default OpenButton