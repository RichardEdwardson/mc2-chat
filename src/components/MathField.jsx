import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { mfActions } from "../lib/redux/mathfieldSlice"
import layout from "../lib/keyboardLayout"

// const MathField = forwardRef(function MathField({ id, onSubmit }, ref) {
//     const dispatch = useDispatch()
//     const isMounted = useSelector(({ mf }) => mf.isMounted)

//     const handleMount = () => dispatch(mfActions.setIsMounted())
//     useEffect(() => {
//         document.getElementById(id).addEventListener('mount', handleMount)
//     }, [])

//     useEffect(() => {
//         if (isMounted) {
//             console.log('mounted')
//             console.log(document.getElementById(id).shadowRoot)
//             const mf = document.getElementById(id)
//             const keyboard = window.mathVirtualKeyboard
//             keyboard.container = document.getElementById('keyboard-container')
//             keyboard.addEventListener('geometrychange', () => {
//                 const { x, y, width, height, top, bottom, left, right } = keyboard.boundingRect
//                 dispatch(mfActions.setKeyboardRect({ x, y, width, height, top, bottom, left, right }))
//             })
//             keyboard.layouts = layout
//             // mf.addEventListener('focus', () => {
//             //     mf.executeCommand(['switchMode', 'text'])
//             // })
//             mf.defaultMode = 'text'
//             mf.addEventListener('input', e => {
//                 if (e.inputType == 'insertLineBreak') {
//                     onSubmit(e)
//                 }
//             })
//         }
//     }, [isMounted])

//     return (
//         <math-field id={id} ref={ref}></math-field>
//     )
// })

export default MathField



const withEvents = MF => forwardRef(
    function EnhancedMF({
        onMount,
        onUnmount,
        onFocusOut,
        onMoveOut,
        onModeChange,
        onReadAloudStatusChange,
        onSelectionChange,
        onUndoStateChange,
        ...props }, ref) {

        useImperativeHandle(ref, () => mfRef.current, [])

        const mfRef = useRef()

        useEffect(() => {
            const mf = mfRef.current
            mf.addEventListener('mount', onMount)
            mf.addEventListener('unmount', onUnmount)
            mf.addEventListener('focus-out', onFocusOut)
            mf.addEventListener('mode-change', onModeChange)
            mf.addEventListener('read-aloud-status-change', onReadAloudStatusChange)
            mf.addEventListener('selection-change', onSelectionChange)
            mf.addEventListener('undo-state-change', onUndoStateChange)
        }, [])

        return (
            <MF ref={mfRef} {...props} />
        )
    })


const MathFieldBase = forwardRef(function MathFieldBase({value, ...props}, ref) {
    return (
        <math-field {...props} ref={ref}>{value}</math-field>
    )
})