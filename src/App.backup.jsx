import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [keyboardToggle, setKeyboardToggle] = useState(false)

  const handleMount = () => setIsMounted(true)
  useEffect(() => {
    if (!isMounted) return
    console.log('math-field is mounted')
    const keyboard = window.mathVirtualKeyboard
    keyboard.addEventListener('geometrychange', () => {
      setKeyboardToggle(state => !state)
      console.log(keyboard.boundingRect.height)
    })
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return
    console.log('keyboard toggled')


  }, [keyboardToggle])

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex-1 h-0 bg-slate-500'>
        <h1>HI</h1>

      </div>
      <div className='flex-none h-48 bg-slate-300'>
        <MathField id='mf-chat' onMount={handleMount}/>

      </div>
      <div className='flex-none' id="keyboard">

      </div>

    </div>
  )
}

const MathField = forwardRef(function MathField({ id, onMount }, ref) {
  useEffect(() => {
    return () => document.getElementById(id).addEventListener('mount', onMount)
  }, [])
  return (
    <math-field id={id} ref={ref}>{`\\frac{1}{2}`}</math-field>
  )
})


