import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SinglePages = () => {
    const {id} = useParams()
    const [blogs, setBlogs] = useState([])

   useEffect(() => {
    const fetchData = async () => {
        try{
        const response = await fetch(`http://localhost:3000/blogs/${id}`)
        if(!response.ok){
            throw new Error('failed to fetch')
        }
        const data = await response.json()
      
        setBlogs(data)
    } catch(error){
        console.log(error);
    }
    }

    fetchData()
   }, [])

   const {title, body, author} = blogs

  return (
    <div className='px-40'>
        <h1>{title}</h1>
        <p>{body}</p>
        <p>{author}</p>
      
    </div>
  )
}

export default SinglePages
