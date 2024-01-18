import { Box, CssBaseline } from "@mui/material"
import ChatAppBar from "./ChatAppBar"
import ChatInput from "./ChatInput"
import ChatList from "./ChatList"
import MathField from "./MathField"


export default function Chat() {


    return (
        <Box sx={{ pb: 7, pt: 7 }}>
            <ChatAppBar />
            <ChatList />
            <ChatInput />
        </Box>
    )
}