import { configureStore } from '@reduxjs/toolkit'
import clothesReducer from './slices/clothesSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    user: userReducer,
  },
})

export default store