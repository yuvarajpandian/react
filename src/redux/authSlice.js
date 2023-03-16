import {createSlice} from '@reduxjs/toolkit'

const state = {
   user: '',
   token: '',
   isLoggedIn : false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState : state,
    reducers: {
        login:(state, action) => {
            console.log(action)
            state.user = action.payload.username
            state.token = action.payload.token
            state.isLoggedIn = true
         
        },
        register:(state, action) => {
            state.user = action.payload.username
            state.token = action.payload.token
        },
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoggedIn = false
            localStorage.clear()
        }
    }
})

export const {login, register, logout} = authSlice.actions

export default authSlice.reducer

// store is composed of several slices, 
// each slice contain specific login (auth slice for auth)
// or cart slice for cart logic 
