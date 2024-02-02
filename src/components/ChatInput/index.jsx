import Paper from '@mui/material/Paper';
import {MathField} from '../MathField';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { auth, db } from "../../lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from 'react';
import keyboardLayouts from '../../lib/keyboardLayout';
import VirtualKeyboardBox from '../MathField/VirtualKeyboardBox';


export default function ChatInput() {

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <MathField id='mf-chat'/>

            <VirtualKeyboardBox/>
        </Paper>
    );
}
