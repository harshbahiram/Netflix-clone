import React from 'react';
import Home from './pages/Home';
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/faq' element={<FAQ />} />

      <Route
        path='/browse'
        element={
          <ProtectedRoute>
            <Browse />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;