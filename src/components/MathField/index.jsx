import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"

const MathFieldBase = forwardRef(function MathFieldBase({ value, ...props }, ref) {
    return (
        <math-field ref={ref} {...props} >{value}</math-field>
    )
})

const withEvents = MF => forwardRef(function EnhancedMF(props, ref) {
    const {
        onMount,
        onUnmount,
        onFocusOut,
        onMoveOut,
        onModeChange,
        onReadAloudStatusChange,
        onSelectionChange,
        onUndoStateChange,
        onInput,
        onSubmit,
        disableInput,
        ...extraProps
    } = props

    useImperativeHandle(ref, () => mfRef.current, [])

    const mfRef = useRef()
    const handleBeforeInput = e => {
        if (disableInput) {
            e.preventDefault()
            return
        }
        switch (e.inputType) {
            case 'insertLineBreak':
                onSubmit && onSubmit(e)
                break
            case 'insertFromPaste':
                break
            case 'deleteWordBackward':
                break
            case 'deleteWordForward':
                break
            case 'deleteSoftLineBackward':
                break
            case 'deleteSoftLineForward':
                break
            case 'deleteHardLineBackward':
                break
            case 'deleteHardLineForward':
                break
            case 'deleteContent':
                break
            case 'deleteContentBackward':
                break
            case 'deleteContentForward':
                break
            case 'historyUndo':
                break
            case 'historyRedo':
                break
            default:
                break
        }

    }

    useEffect(() => {
        const mf = mfRef.current
        mf.addEventListener('mount', onMount)
        mf.addEventListener('unmount', onUnmount)
        mf.addEventListener('focus-out', onFocusOut)
        mf.addEventListener('mode-change', onModeChange)
        mf.addEventListener('read-aloud-status-change', onReadAloudStatusChange)
        mf.addEventListener('selection-change', onSelectionChange)
        mf.addEventListener('undo-state-change', onUndoStateChange)
        mf.addEventListener('input', onInput)
        mf.addEventListener('beforeinput', handleBeforeInput)
        mf.defaultMode='text'
    }, [])

    return (
        <MF ref={mfRef} {...extraProps} />
    )
})

export function MathField({ value, id, ...props }) {
    let MF = MathFieldBase
    MF = withEvents(MF)

    return (
        <MF value={value}
            id={id}
            onFocus={e => {
                e.target.executeCommand(['switchMode', 'text'])
            }}
            {...props} />
    )
}


