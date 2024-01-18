import mfReducer from './mathfieldSlice'
import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './messageSlice'

export default configureStore({
  reducer: {
    mf: mfReducer,
    chat: messageReducer
  },
})