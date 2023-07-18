import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiState = () => {
    const[item , setitem] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setitem(res.data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <div>
      <h1>Axios Tutorial</h1>
      {item.map((post) =>
      {
        const {id, title, body} = post;
        return(
            <div className='card' key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        )
      })}
    </div>
  )
}

export default ApiState
