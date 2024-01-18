import { forwardRef, useEffect, useImperativeHandle } from "react"
import { useDispatch, useSelector } from "react-redux"
import { mfActions } from "../lib/redux/mathfieldSlice"
import layout from "../lib/keyboardLayout"

const MathField = forwardRef(function MathField({ id, onSubmit }, ref) {
    const dispatch = useDispatch()
    const isMounted = useSelector(({ mf }) => mf.isMounted)

    const handleMount = () => dispatch(mfActions.setIsMounted())
    useEffect(() => {
        document.getElementById(id).addEventListener('mount', handleMount)
    }, [])

    useEffect(() => {
        if (isMounted) {
            console.log('mounted')
            const mf = document.getElementById(id)
            const keyboard = window.mathVirtualKeyboard
            keyboard.container = document.getElementById('keyboard-container')
            keyboard.addEventListener('geometrychange', () => {
                const { x, y, width, height, top, bottom, left, right } = keyboard.boundingRect
                dispatch(mfActions.setKeyboardRect({ x, y, width, height, top, bottom, left, right }))
            })
            mf.addEventListener('focus', () => {
                mf.executeCommand(['switchMode', 'text'])
            })
            mf.addEventListener('input', e => {
                if (e.inputType == 'insertLineBreak') {
                    onSubmit(e)
                }
            })
        }
    }, [isMounted])

    return (
        <math-field id={id} ref={ref}></math-field>
    )
})

export default MathField