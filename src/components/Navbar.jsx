import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full bg-slate-100 px-40  h-[100px] '>
      <div className='flex justify-between  items-center h-full'>
      
      <Link to="/">
      <h1 className='text-xl text-blue-500'>My Blogs</h1>
      </Link>
      
       <Link to="/create">
       <p className='border border-blue-600 px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-800'>Add Blog +</p>
       </Link>
       

      </div>

      </nav>
    </div>
  )
}

export default Navbar
