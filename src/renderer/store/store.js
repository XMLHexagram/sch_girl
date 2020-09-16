import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './test_redux'

export default configureStore({
  reducer: {
    counter: counterSlice
  },
})
