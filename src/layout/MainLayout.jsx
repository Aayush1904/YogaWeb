import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/headers/Navbar'
import Footer from '../Components/Footer'
import NewLetter from '../Components/NewLetter'

const MainLayout = () => {
  return (
    <main className='dark:bg-black overflow-hidden'>
        <Navbar />
        <Outlet />
        <NewLetter />
        <Footer />
    </main>
  )
}

export default MainLayout
