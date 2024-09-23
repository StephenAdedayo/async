import React, { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { TiDeleteOutline } from 'react-icons/ti'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
    const {id} = useParams()

    const [blogs, setBlogs] = useState(null)
    const [error, setError] = useState('')

    const fetchBlogs = async () => {
        try {
        const response = await fetch('http://localhost:3000/blogs')
        const data = await response.json()

        setBlogs(data)
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchBlogs()
    }, [])



    const deleteBlogs = async (id) => {
       try {
        const response = await fetch(`http://localhost:3000/blogs/${id}`,{
            method:"DELETE"
           })
           if(!response.ok){
            throw new Error('failed to fetch')
           }
          
           setBlogs((prevBlogs) => prevBlogs.filter(blog => blog.id !== id))
       } catch (error) {
        console.log(error);
        
       }
    }
    


  return (
    <div className='px-5 lg:px-40 '>


        
      <div className='grid grid-cols-2 gap-10 mt-10'>

      {blogs && blogs.map(blog => (
              <div key={blog.id} className='space-y-6 shadow-md px-8 py-10 hover:shadow-xl'>
              {/* <img src={} alt="" /> */}
              <Link to={`/single/${blog.id}`}><p>{blog.title}</p></Link>
              <p>{blog.body}</p>
              <p>Written by: <span className='text-blue-800'>{blog.author}</span></p>
       
              <div className='flex space-x-5'>
               
               <Link to={`/update/${blog.id}`}>
               <CiEdit className='text-2xl  transform hover:-translate-x-2  rounded  hover:text-white hover:scale-105 duration-300 delay-150 hover:bg-blue-800'/>
               </Link>
       
               <TiDeleteOutline onClick={() => deleteBlogs(blog.id)} className='text-2xl transform hover:-translate-y-2 rounded  hover:text-white hover:scale-105 duration-300 delay-150 hover:bg-blue-800'/>
              </div>
             </div>
      ))}
      




      </div>
    </div>
  )
}

export default Home
