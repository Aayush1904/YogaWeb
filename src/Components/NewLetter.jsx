import React from 'react'
import '../Components/NewLetter.css'
const NewLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on Your Email</h1>
      <p>Subscribe To Our NewsLetter and Stay Updated</p>
      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewLetter
