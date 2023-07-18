import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [quote, setQuote] = useState('')

    const getQuote = () => {
       axios.get('https://api.quotable.io/random')
       .then(res => {
        console.log(res.data.content)
        setQuote(res.data.content)
    }).catch (err => {
        console.log('err')
    })
        
    }

  return (
    <div className='Topbar'>
      <button onClick={getQuote}>Get Quote</button>
      {quote && <p> {quote} </p> }
    </div>

  )
}

export default Home
