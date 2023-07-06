import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Home, Login, Register } from "./pages/index.js"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute'
import PublicRoute from './components/Routes/PublicRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='/login'
          element=
          {
            <PublicRoute>
              <Login />
            </PublicRoute>

          } />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>

        } />

      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
