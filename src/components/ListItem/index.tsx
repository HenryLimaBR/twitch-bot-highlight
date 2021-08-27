import React from 'react'
import { ListItemProps } from '../../../typings/rc'

import style from './style.module.scss'

const color = {
  'streamer': '#0bf',
  'moderator': '#08f',
  'vip': '#ff0',
  'viewer': '#fff',
  'trusted_bot': '#0f8',
  'unknown_bot': '#f80'
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  return (
    <li className={style.container} style={{ color: color[user.badges[user.badges.length - 1].type] }}>
      <p title={user.badges[user.badges.length - 1].type.toUpperCase().replace(/_/g, ' ')} style={{ userSelect: 'none' }}>{user.username}</p>
    </li>
  )
}

export default ListItem