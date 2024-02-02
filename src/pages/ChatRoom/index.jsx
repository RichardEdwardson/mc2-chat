import { Box, CssBaseline } from "@mui/material"
import ChatAppBar from "../../components/ChatAppBar"
import ChatInput from "../../components/ChatInput"
import ChatList from "../../components/MessageList"
import EdgeDrawer from "../../components/PinnedMessageList"


export default function Chat() {
    return (
        <Box sx={{ pb: 7, pt: 7 }} id='chat-room'>
            <ChatAppBar />
            <EdgeDrawer />
            <ChatList />
            <ChatInput />
        </Box>
    )
}