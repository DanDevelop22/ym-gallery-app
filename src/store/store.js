import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import AsyncStorage from "@react-native-async-storage/async-storage"

const loadStore = async () => {
    try {
        const serializedState = await AsyncStorage.getItem("persistantState")
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        console.warn(e)
        return undefined
    }
}

const saveStore = async (state) => {
    try {
        const serializedState = JSON.stringify(state)
        await AsyncStorage.setItem("persistantState", serializedState)
    } catch (e) {
        console.warn(e)
    }
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
}, loadStore())

store.subscribe(() => saveStore(store.getState()))

export default store