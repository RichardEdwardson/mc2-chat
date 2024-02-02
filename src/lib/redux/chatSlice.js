import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        isLoggedIn: true,
        username: 'Rick',
        roomid: 'test',
    },
    reducers: {
        setUser(state, action) {
            state.username = action.payload
        },

        setRoom(state, action) {
            state.roomid = action.payload
        }
    }
})

export const { setUser, setRoom } = chatSlice.actions
export default chatSlice.reducer