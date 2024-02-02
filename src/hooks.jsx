import { createContext, useEffect, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    where,
    and,
} from "firebase/firestore";
import { db } from "./lib/firebase";
import { useSelector } from "react-redux";


export const RoomContext = createContext(null)

export const useMessages = () => {
    const [messages, setMessages] = useState([])
    const room = useSelector(({ chat }) => chat.roomid)

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
    }, [])

    return messages
}

export const usePinnedMessages = () => {
    const [messages, setMessages] = useState([])
    const room = useSelector(({ chat }) => chat.roomid)
    const username = useSelector(({ chat }) => chat.username)

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            and(
                where('room', '==', room),
                where('pinnedBy', 'array-contains', username),
            ),
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
    }, [])

    return messages
}