import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import {Home, Login, Register} from "./pages/index.js"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/register' element={<Register />} /> 

      </Routes>
    </div>
  )
}

export default App
