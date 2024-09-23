import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        // if(!title !body !author){
        //     setError("Please fill in the input fields")
        // }

        try {

            const addBlog = {
                title,
                body,
                author
            }

            const response = await fetch("http://localhost:3000/blogs", {
                method:'POST',
                headers:{'content-type': 'application/json'},
                body:JSON.stringify(addBlog)
            })

            if(!response.ok){
                throw new Error("Couldnt fetch blog")
            }
            alert("blog added successfully")
            navigate('/')
            
        } catch (error) {
            console.log("error occured", error);
        }
    }

  return (
    <div>
      <div className='min-h-screen flex justify-center items-center'>

   <form onSubmit={handleSubmit}  className='px-10 py-14 max-w-[700px] w-full border border-blue-800 rounded-xl'>
   <h1 className='text-center'>Add a New Blog</h1>
   {error && <div className='text-red-500'>{error}</div>}
   

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
>Add Blog</button>
   </form>


      </div>
    </div>
  )
}

export default Create
