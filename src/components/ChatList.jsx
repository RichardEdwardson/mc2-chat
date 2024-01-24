import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    where,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useSelector } from 'react-redux';


export default function ChatList() {
    const [messages, setMessages] = useState([])
    const room = useSelector(({ chat }) => chat.currentRoom)

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            where('room', '==', room),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id });
            });
            const sortedMessages = fetchedMessages.sort(
                (a, b) => a.createdAt - b.createdAt
            );
            setMessages(sortedMessages);
        });
        return () => unsubscribe;
    }, []);

    return (

        <List>
            {messages.map(({ name, text, id }, index) => (
                <ListItemButton key={id}>
                    <ListItemText primary={name} secondary={<math-field id='mf-display'>{text}</math-field>} />
                </ListItemButton>
            ))}
        </List>


    );
}

