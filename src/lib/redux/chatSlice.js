import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        currentUser: null,
        currentRoom: null,
    },
    reducers: {
        setUser(state, action) {
            state.currentUser = action.payload
        },

        setRoom(state, action) {
            state.currentRoom = action.payload
        }
    }
})

export const { setUser, setRoom } = chatSlice.actions
export default chatSlice.reducer