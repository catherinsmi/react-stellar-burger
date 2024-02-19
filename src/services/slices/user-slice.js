import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { refreshToken } from '../../utils/api'
import { checkResponse } from '../../utils/check-response';

export const login = createAsyncThunk('user/login', async (body) => {
    const res = await fetch('https://norma.nomoreparties.space/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    const data = await checkResponse(res)
    console.log(data)
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    
})

export const logout = createAsyncThunk('user/logout', async (body) => {
    const res = await fetch('https://norma.nomoreparties.space/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    const data = await checkResponse(res)
    console.log(data)
    localStorage.removeItem('accessToken')
})


const initialState ={
    user: null,
    isAuthChecked: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthChecked(state, action){
            state.isAuthChecked = action.payload;
        },
        setUser(state, action){
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(logout.fulfilled, (state) => {
            state.user = null;
        })
    }
})

export const { setAuthChecked,  setUser } = userSlice.actions
export default userSlice.reducer