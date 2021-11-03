import React from 'react'
import { ListItemProps } from '../../../typings/rc'
import { capitalizeAll } from '../../utils/string'

import style from './style.module.scss'

import { badge_colors as colors } from '../../styles/colors'

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  const color = colors[user.badges[user.badges.length - 1].type]
  return (
    <li className={style.container}>
      <p
        className={style.username}
        style={{ color }}
        title={user.username}
      >{user.username.slice(0, 16)}</p>

      <div className={style.badge_container}>
        {
          user.badges.map((badge) => {
            const title = `${capitalizeAll(badge.type, '_', ' ')} - ${badge.source}`
            const backgroundColor = colors[badge.type]
            return (<div className={style.badge} style={{ backgroundColor }} title={title}></div>)
          })
        }
      </div>
    </li>
  )
}

export default ListItem