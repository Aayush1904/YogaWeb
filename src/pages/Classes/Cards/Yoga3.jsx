import React from 'react'
import { Link } from 'react-router-dom'
import yoga2 from './yoga2.avif'
const Yoga3 = () => {
  
  return (
    <>
    
    <div>
      <Link to="/class/yoga3"></Link>
    </div>
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <video src={yoga2} alt="Yoga vd" className="mx-auto mb-4" style={{ maxWidth: '1000px' }} />
      </div>
    </div>
    </>
  )
}

export default Yoga3
