import React from 'react'
import { ListItemProps } from '../../../typings/rc'

import style from './style.module.scss'

const color = {
  'streamer': '#ff0',
  'moderator': '#08f',
  'vip': '#f80',
  'viewer': '#ccc',
  'trusted_bot': '#0f8',
  'untrusted_bot': '#c00'
}

const ListItem: React.FC<ListItemProps> = ({ user }) => {
  return (
    <li className={style.container} style={{ color: color[user.badges[user.badges.length - 1].type] }}>
      <p title={user.badges[user.badges.length - 1].type.toUpperCase().replace(/_/g, ' ')} style={{ userSelect: 'none' }}>{user.username}</p>
    </li>
  )
}

export default ListItem