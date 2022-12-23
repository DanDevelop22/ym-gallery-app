import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        user: {
            name: '',
            email: '',
            token: '',
            photo: ''
        }
    },
    reducers: {
        isAuthenticated: (state) => {
            return state.auth
        },
    }
})

export const { isAuthenticated } = authSlice.actions

export default authSlice.reducer