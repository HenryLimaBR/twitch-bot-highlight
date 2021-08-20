import React from 'react'

type setMenuState = React.Dispatch<React.SetStateAction<boolean>>
type hidden = boolean

export interface OpenButtonProps {
  setMenuState: setMenuState
  hidden?: hidden
}

export interface MenuProps {
  setMenuState: setMenuState
  hidden?: hidden
}

export interface MenuOptionProps {
  setMenuState: setMenuState
}