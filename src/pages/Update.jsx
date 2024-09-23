import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {
    const {id} = useParams()

const [title, setTitle] = useState('')
const [body, setBody] = useState('')
const [author, setAuthor] = useState('')
const navigate = useNavigate()

useEffect(() => {
    const fetchBlogs = async () => {
        try {
            const response = await fetch(`http://localhost:3000/blogs/${id}`)
            if(!response.ok){
                throw new Error("failed to fetch")
            }
            const data = await response.json()
            setTitle(data.title)
            setBody(data.body)
            setAuthor(data.author)
        } catch (error) {
            console.log('error occured', error);
        }
    }
    fetchBlogs()
}, [id])


const updateBlogs = async (e) => {
    e.preventDefault()

    try {
     const updateblog = {
        title,
        body,
        author,
     }

     const response = await fetch(`http://localhost:3000/blogs/${id}`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(updateblog)
     })

     if(!response.ok){
        throw new Error('failed to fetch')
     }

     alert('blog updated succesfully')
     navigate('/')

        
    } catch (error) {
        console.log('error occured', error);
    }
}


  return (
    <div>
      <div className='min-h-screen flex justify-center items-center'>

<form  onSubmit={updateBlogs} className='px-10 py-14 max-w-[700px] w-full border border-blue-800 rounded-xl'>
<h1 className='text-center'>Update Blog</h1>



<label for="title">Title:</label><br />
<input
className='w-full outline-none border border-blue-800 rounded-lg p-4' 
type="text" 
value={title}
onChange={(e) => setTitle(e.target.value)}  
/> <br /> <br />

<label for="body">Body:</label> <br />
<textarea className='w-full outline-none border border-blue-800 rounded-lg p-4' 
name="" 
id=""
value={body}
rows={5}
cols={5}
onChange={(e) => setBody(e.target.value)}>

</textarea>
<br /> <br />

<label for="title">Author:</label><br />
<input
className='w-full outline-none border border-blue-800 rounded-lg p-4' 
type="text" 
value={author}
onChange={(e) => setAuthor(e.target.value)}  
/> <br /> <br />


<button 
type='submit'
className='bg-blue-800 rounded-xl mx-auto block hover:bg-blue-500 px-6 py-3 text-white'
>Update Blog</button>
</form>


   </div>
    </div>
  )
}

export default Update
