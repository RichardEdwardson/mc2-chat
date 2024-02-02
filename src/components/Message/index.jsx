import { MoreVert } from "@mui/icons-material"
import { Avatar, Card, CardContent, IconButton, ListItem, ListItemText, Menu, MenuItem, Typography } from "@mui/material"
import { createContext, useContext, useState } from "react"

const MessageContext = createContext(null)

export default function Message({ content, ...props }) {
    const [anchorEl, setAnchorEl] = useState(null)
    
    return (
        <MessageContext.Provider value={{anchorEl, setAnchorEl, content}}>
            <ListItem secondaryAction={<ActionIcon />}>
                <ListItemText primary={content.name} secondary={content.text} />
            </ListItem>
            <ActionMenu />
        </MessageContext.Provider>

    )
}



function MessageDisplay() {
    const {content} = useContext(MessageContext)
    return (

        <Typography gutterBottom variant="h5" component="div">
            {content.text}
        </Typography>


    )
}

function ActionIcon() {
    const context = useContext(MessageContext)
    const handleClick = e => {
        context.setAnchorEl(e.currentTarget)
    }
    return (
        <IconButton edge='end' aria-label='more' onClick={handleClick}>
            <MoreVert />
        </IconButton>
    )
}

function ActionMenu() {
    const context = useContext(MessageContext)
    const handleClose = () => {
        context.setAnchorEl(null)
    }
    return (
        <Menu
            anchorEl={context.anchorEl}
            id="menu"
            open={context.anchorEl ? true : false}
            onClose={handleClose}
            onClick={handleClose}
            // PaperProps={{
            //     elevation: 0,
            //     sx: {
            //         overflow: 'visible',
            //         filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            //         mt: 1.5,
            //         '& .MuiAvatar-root': {
            //             width: 32,
            //             height: 32,
            //             ml: -0.5,
            //             mr: 1,
            //         },
            //         '&::before': {
            //             content: '""',
            //             display: 'block',
            //             position: 'absolute',
            //             top: 0,
            //             right: 14,
            //             width: 10,
            //             height: 10,
            //             bgcolor: 'background.paper',
            //             transform: 'translateY(-50%) rotate(45deg)',
            //             zIndex: 0,
            //         },
            //     },
            // }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
                <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Avatar /> My account
            </MenuItem>
        </Menu>
    )
}