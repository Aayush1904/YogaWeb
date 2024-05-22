import React from 'react'
import { Link } from 'react-router-dom'
import yogavd from './yoga.mp4'
const Yoga3 = () => {
  
  return (
    <>
    
    <div>
      <Link to="/class/yoga3"></Link>
    </div>
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <video src={yogavd} alt="Yoga vd" className="mx-auto mb-4" style={{ maxWidth: '1000px' }} />
      </div>
    </div>
    </>
  )
}

export default Yoga3
