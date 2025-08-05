import React, { useRef } from 'react'
import Header from './components/Header'
import MarketPlace from './components/MarketPlace'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const App = () => {


  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <MarketPlace/>
      {/* <Footer /> */}
      <Navbar />
    </div>
  )
}

export default App