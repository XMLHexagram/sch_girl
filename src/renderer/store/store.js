import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './test_redux'
import layoutSlice from './layout'

export default configureStore({
  reducer: {
    counter: counterSlice,
    layout: layoutSlice,
  },
})
