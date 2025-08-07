import React, { useRef } from 'react'
import Header from './components/Header'
import MarketPlace from './components/MarketPlace'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Route, Routes } from 'react-router-dom'
import Login from './views/Login.jsx'
import Home from './views/Home.jsx'

gsap.registerPlugin(useGSAP);

const App = () => {

  return (
    <div className='min-h-screen flex flex-col'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App