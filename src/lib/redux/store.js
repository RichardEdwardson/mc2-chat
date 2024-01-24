import mfReducer from './mathfieldSlice'
import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './chatSlice'

export default configureStore({
  reducer: {
    mf: mfReducer,
    chat: chatReducer,
  },
})