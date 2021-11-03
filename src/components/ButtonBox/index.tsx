import React, { useState } from 'react'
import { useAppSelector } from '../../store/hooks'

import style from './style.module.scss'

import core from '../../services/core'

const ButtonBox: React.FC<any> = () => {
  const page_index = useAppSelector(state => state.core.page_index)
  const [a,b] = useState<boolean>(false)

  return (
    <div className={style.container}>
      <button
        className={style.button}
        onClick={() => core.prevPage()}
        disabled={page_index[0] <= 1}
      >Prev</button>

      <div>
        <p className={style.page_count}>{`${page_index[0]} / ${page_index[1]}`}</p>
      </div>

      <button
        className={style.button}
        onClick={() => core.nextPage()}
        disabled={page_index[0] >= page_index[1]}
      >Next</button>
    </div>
  )
}

export default ButtonBox