import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: [{
            
            title: '',
            description: ''
        }],
        loading: null,
        error: false
    },
    reducers: {
        startUser: (state) => {
            state.loading = true
        },
        successUser: (state, action) => {
            state.userData = action.payload
            state.loading = null
            console.log(action.payload);
        },
        errorUser: (state) => {
            state.loading = null
            state.error = true
        }
    }
})

export const { startUser, successUser, errorUser } = userSlice.actions
export default userSlice.reducer