import Paper from '@mui/material/Paper';
import {MathField} from './MathField';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { auth, db } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from 'react';
import keyboardLayouts from '../lib/keyboardLayout';


export default function ChatInput() {
    // const keyboardIsVisible = useSelector(({ mf }) => mf.keyboard.isVisible)
    // const keyboardHeight = useSelector(({ mf }) => mf.keyboard.rect.height)
    // const sendMessage = async e => {
    //     const message = e.target.value
    //     if (message.trim() === '') return
    //     const { uid, displayName, photoURL } = auth.currentUser
    //     await addDoc(collection(db, 'messages'), {
    //         text: message,
    //         name: displayName,
    //         avatar: photoURL,
    //         createdAt: serverTimestamp(),
    //         uid,
    //     })
    //     e.target.setValue('')
    // }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <MathField id='mf-chat'/>

            <VirtualKeyboardBox/>
        </Paper>
    );
}
{/* <Box sx={{ height: () => (100) }} id='keyboard-container' onMouseDown={e => {
    e.preventDefault()
    console.log('click')
}}> */}
function VirtualKeyboardBox() {
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
