import List from '@mui/material/List';
import { useMessages, usePinnedMessages } from '../hooks';
import Message from './Message';

export default function ChatList() {
    const messages = useMessages()
    return (
        <List id='chat-list'>
            {messages.map((content, index) => (<Message content={content} key={index} />))}
        </List>
    )
}
  