import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
            state.currentUser = action.payload;
        },
        signInError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export const { signInStart, signInSuccess, signInError } = userSlices.actions;
export default userSlices.reducer;