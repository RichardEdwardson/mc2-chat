import Paper from '@mui/material/Paper';
import MathField from './MathField';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { auth, db } from "../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export default function ChatInput() {
    const keyboardIsVisible = useSelector(({ mf }) => mf.keyboard.isVisible)
    const keyboardHeight = useSelector(({ mf }) => mf.keyboard.rect.height)
    const sendMessage = async e => {
        const message = e.target.value
        if (message.trim() === '') return
        const { uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        })
        e.target.setValue('')
    }

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <MathField id='mf-chat' onSubmit={sendMessage} />
            <Box sx={{ height: () => (keyboardHeight) }} id='keyboard-container' onMouseDown={e => {
                e.preventDefault()
                console.log('click')
            }}>
            </Box>
        </Paper>
    );
}
