import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
<>
<Navbar />
<main className='min-h-screen bg-slate-50'>

<Outlet />

</main>

<Footer />

</>
  )
}

export default Layout
