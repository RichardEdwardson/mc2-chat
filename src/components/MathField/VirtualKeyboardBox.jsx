import { Box } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import keyboardLayouts from '../../lib/keyboardLayout'
export default function VirtualKeyboardBox() {
    const [keyboardRect, setKeyboardRect] = useState({ height: 0 })
    const ref = useRef()
    useEffect(() => {
        const keyboard = window.mathVirtualKeyboard
        keyboard.container = ref.current
        keyboard.layouts = keyboardLayouts
        keyboard.addEventListener('geometrychange', () => {
            setKeyboardRect(keyboard.boundingRect)
        })
    }, [])
    return (
        <Box
            ref={ref}
            sx={{height: () => keyboardRect.height}}
            onMouseDown={e => {
                e.preventDefault()
            }}
        ></Box>
    )

}