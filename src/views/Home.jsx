import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import MarketPlace from '../components/MarketPlace'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Header/>
    <MarketPlace/>
    <Navbar/>
    </>
  )
}

export default Home
