import { createSlice } from "@reduxjs/toolkit";
import usersData from '../data/users.json';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        username: '',
        isLoggedIn: false
    },
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;
            const user = usersData.find((user) => user.username === username && user.password === password);
            if(user) {
                state.username = username;
                state.isLoggedIn = true
            }
        },
        logout: (state) => {
            state.username = '',
            state.isLoggedIn = false
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;