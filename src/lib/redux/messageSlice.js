import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: []
    },
    reducers: {
        setMessages(state, action) {
            return {messages: action.payload}
        }
    }
})

export const messageActions = messageSlice.actions
export default messageSlice.reducer