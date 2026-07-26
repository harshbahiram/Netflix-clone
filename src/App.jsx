import React from 'react'
import Home from './pages/Home'
import FAQ from "./pages/FAQ"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/faq' element={<FAQ />} />
    </Routes>

  )
}

export default App;