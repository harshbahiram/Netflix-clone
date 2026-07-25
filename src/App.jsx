import React from 'react'
import Home from './pages/Home'
import FAQ from "./pages/FAQ"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/faq' element={<FAQ />} />
    </Routes>

  )
}

export default App;