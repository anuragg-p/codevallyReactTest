import { configureStore } from '@reduxjs/toolkit'

import fileReducer from './fileReducer'

const store = configureStore({
  reducer: { file: fileReducer }
})

export default store
