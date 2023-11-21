import { useState } from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css'

//pages
import Homepage from './pages/Homepage';
import Fitur from './pages/Fitur';
import Harga from './pages/Harga';
import Tema from './pages/Tema';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard_user from './pages/Dashboard_user';

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tema" element={<Tema />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard_user />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
