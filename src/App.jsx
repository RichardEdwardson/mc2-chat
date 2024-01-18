import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import './App.css'
import { auth } from './lib/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import Signin from './components/Signin'
import Home from './components/home'

export default function App() {
  const [user] = useAuthState(auth)
  useEffect(() => {
    
    console.log(user)

  }, [user])

  return (
    <div className='w-full h-full flex flex-col'>
      {!user ? <Signin /> : <Home />}
      {/* <Home /> */}

    </div>
  )
}