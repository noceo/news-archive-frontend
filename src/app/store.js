import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/modules/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
