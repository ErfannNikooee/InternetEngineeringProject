import { createSlice } from "@reduxjs/toolkit";

export const USER_STATE = {
    LOGGED_OUT : 'logged_out',
    LOGGED_IN : 'logged_in'
}

const USER_TYPE = {
    UNKNOWN : 'unknown'
}

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user: USER_TYPE.UNKNOWN,
        authState: USER_STATE.LOGGED_OUT
    },
    reducers:{
        setUser: (state,action) => {
            state.user = action.payload;
            state.authState = USER_STATE.LOGGED_IN;
        },
        clearUser: (state) => {
            state.user = USER_TYPE.UNKNOWN;
            state.authState = USER_STATE.LOGGED_OUT;
        }
    }
});

export const {setUser,clearUser} = userSlice.actions
export default userSlice.reducer 