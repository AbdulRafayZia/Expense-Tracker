import { configureStore } from '@reduxjs/toolkit'

import TransReducer from './slice.js'

export default configureStore({
  reducer: {
    Transaction:TransReducer
    
  }
})