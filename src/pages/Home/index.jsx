import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemButton, ListItemText, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    getDoc,
    doc,
} from "firebase/firestore";
// import { db } from "../lib/firebase";
import { setRoom, setUser } from '../../lib/redux/chatSlice';
import { useDispatch } from 'react-redux';
import { db } from '../../lib/firebase';
export default function Home() {
    const [showCreateRoom, setShowCreateRoom] = useState(false)
    const [showJoinRoom, setShowJoinRoom] = useState(false)
    return (
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MC2
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <ListItemButton onClick={e => {
                        setShowCreateRoom(true)
                    }}>
                        <Card sx={{ width: '100%', bgcolor: 'white' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Create Room
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={e => {
                        setShowJoinRoom(true)
                    }}>
                        <Card sx={{ width: '100%', bgcolor: 'white' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Join Room
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItemButton>
                </ListItem>
            </List>
            <RoomDialog
                open={showCreateRoom}
                onClose={() => setShowCreateRoom(false)}
                title="Create Room"
                confirmText="Create"
                onConfirm={() => {
                    console.log('create room')
                }}

            />
            <RoomDialog
                open={showJoinRoom}
                onClose={() => setShowJoinRoom(false)}
                title="Join Room"
                confirmText="Join"
                onConfirm={() => {
                    console.log('join room')
                }}
            />
        </Box>
    );
}

function RoomDialog({ open, onClose, title, onConfirm, confirmText }) {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            roomid: '',
            username: '',
        },
        validationSchema: Yup.object({
            roomid: Yup.string().required('Required'),
            username: Yup.string().required('Required'),
        }),
        onSubmit(value) {
            const docRef = doc(db, 'room', value.roomid)
            getDoc(docRef)
                .then(docSnap => {
                    if (docSnap.exists()) {
                        dispatch(setUser(value.username))
                        dispatch(setRoom(value.roomid))
                    }
                })
        }
    })
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <Box
                    component='form'
                    sx={{
                        '& .MuiTextField-root': { my: 1, width: '100%' },
                    }}
                >
                    <TextField
                        error={formik.errors.roomid && formik.touched.roomid ? true : false}
                        id='outlined'
                        label="RoomID"
                        name='roomid'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.roomid}
                        helperText={formik.errors.roomid}
                    >


                    </TextField>
                    <TextField
                        error={formik.errors.username && formik.touched.username ? true : false}
                        id='outlined'
                        label="Username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        onBlur={formik.handleBlur}
                        helperText={formik.errors.username}
                    >

                    </TextField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={e => {
                    formik.handleSubmit()
                }} autoFocus>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}