import { createSlice } from '@reduxjs/toolkit'

export const mfSlice = createSlice({
    name: 'mf',
    initialState: {
        isMounted: false,
        keyboard: {
            isVisible: false,
            rect: { height: 0 }
        }
    },
    reducers: {
        setIsMounted(state) {
            state.isMounted = true
        },
        setKeyboardIsVisible(state, action) {
            state.keyboard.isVisible = action.payload
        },
        toggleKeyboard(state) {
            state.keyboard.isVisible = !state.keyboard.isVisible
        },
        setKeyboardRect(state, action) {
            const setIsVisible = () => state.keyboard.isVisible = true
            const setIsInvisible = () => state.keyboard.isVisible = false
            action.payload.height == 0 ? setIsInvisible() : setIsVisible()
            state.keyboard.rect = action.payload
        }
    },
})


export const mfActions = mfSlice.actions

export default mfSlice.reducer