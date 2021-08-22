import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CoreState {
  list: string[],
  username: string,
  page_index: [number, number],
  chatters_count: number,
  menu: boolean
}

const initialState: CoreState = {
  list: [],
  username: '',
  page_index: [1, 1],
  chatters_count: 0,
  menu: false
}

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setList(state, action: PayloadAction<string[]>) {
      state.list = action.payload
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPageIndex(state, action: PayloadAction<[number, number]>) {
      state.page_index = action.payload
    },
    setChattersCount(state, action: PayloadAction<number>) {
      state.chatters_count = action.payload
    },
    setMenu(state, action: PayloadAction<boolean>) {
      state.menu = action.payload
    }
  }
})

export const {
  setList,
  setUsername,
  setPageIndex,
  setChattersCount,
  setMenu
} = coreSlice.actions
export const selectCore = (state: RootState) => state
export default coreSlice.reducer