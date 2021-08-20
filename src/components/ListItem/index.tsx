import React from 'react'

import style from './style.module.scss'

const ListItem: React.FC<any> = ({ text }) => {
  return (
    <li className={style.container}>
      {text}
    </li>
  )
}

export default ListItem