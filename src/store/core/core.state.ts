import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CoreState {
  list: string[],
  username: string,
  page_index: [number, number]
}

const initialState: CoreState = {
  list: ['default'],
  username: 'default',
  page_index: [1, 1]
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
    }
  }
})

export const { setList, setUsername, setPageIndex } = coreSlice.actions
export const selectCore = (state: RootState) => state
export default coreSlice.reducer