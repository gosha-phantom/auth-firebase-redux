import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/User/slices/userSlice'

export const store = configureStore({
    reducer: {
        userReducer
    }
})
