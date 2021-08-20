import { configureStore } from '@reduxjs/toolkit'
import coreReducer from './core/core.state'

const store = configureStore({
  reducer: {
    core: coreReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch