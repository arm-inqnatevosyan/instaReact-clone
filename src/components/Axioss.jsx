import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Axiosscss from "../components/Axioss.css"

const Axioss = () => {
    const [posts,setPosts] = useState([]);

    const [value,setValue] = useState()
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
    },[])
  return (
    <div className='comment'>
        <ul>
            {posts.map(post => (
                <div>
                    <li key={post.id}>{post.title}</li>
                </div>
            ))}
        </ul>
        <div className='add-post'>
            <input type="text" placeholder='Add comment ...'
             value={value}
            onChange={(e) => setValue(e.target.value)}
             />
            <button onClick={(e) =>{
                e.preventDefault()
                setPosts([
                    ...posts,
                    {
                        id:Math.random(),
                        title:value
                    }
                ])
                setValue("")
            }}>Add Comment</button>
        </div>
    </div>
  )
}

export default Axioss
