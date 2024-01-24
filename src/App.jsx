import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import './App.css'
// import { auth } from './lib/firebase'
// import { useAuthState } from "react-firebase-hooks/auth"
// import Signin from './components/Signin'
import Home from './components/home'
import { useSelector } from 'react-redux'
import ChatRoom from './components/Chat'

export default function App() {
  const user = useSelector(({ chat }) => chat.currentUser)
  // useEffect(() => {

  //   console.log(user)

  // }, [user])

  return (
    <div className='w-full h-full flex flex-col'>
      {/* {!user ? <Signin /> : <Home />} */}
      
      {!user ? <Home />: <ChatRoom/>}

    </div>
  )
}