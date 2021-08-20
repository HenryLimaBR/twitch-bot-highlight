import React, { useEffect, useRef } from 'react'

import style from './style.module.scss'

import ListItem from '../ListItem'

import { useAppSelector } from '../../store/hooks'

const ListContainer: React.FC<any> = () => {
  const list = useAppSelector(state => state.core.list)

  const listElement = useRef<HTMLUListElement>(null)

  useEffect(() => {

  })

  return (
    <div className={style.list_container}>
      <ul className={style.list} ref={listElement}>
        {
          list.map((user) => {
            return <ListItem text={user} key={user} />
          })
        }
      </ul>
    </div>
  )
}

export default ListContainer