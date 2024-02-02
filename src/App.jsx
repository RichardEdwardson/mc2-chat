import './App.css'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import ChatRoom from './pages/ChatRoom'

export default function App() {
  const isLoggedIn = useSelector(({chat}) => chat.isLoggedIn)
  return (
    <div className='w-full h-full flex flex-col'>
      {!isLoggedIn
        ? <Home />
        : <ChatRoom />
      }
    </div>
  )
}