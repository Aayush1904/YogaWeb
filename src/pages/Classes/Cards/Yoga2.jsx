import React from 'react'
import { Link } from 'react-router-dom'
import yogaImage1 from './yoga2.avif'
import yogaImage2 from './yoga3.jpeg'
import yogaImage3 from './yoga4.avif'
import yogaImage4 from './yoga5.avif'
import yogaImage5 from './yoga6.avif'
import yogaImage6 from './yoga7.avif'
const Yoga2 = () => {

  const yogaData = [
    {
      image: yogaImage1,
      info: 'Chair Surya Namaskar!!',
      videoLink: 'https://www.youtube.com/watch?v=qZUxfeO84Yw',
    },
    {

      image: yogaImage2,
      info: 'Fix your body posture with yoga!!',
      videoLink: 'https://www.youtube.com/watch?v=z_DFcuDIIsk',
    },
    {
  
      image: yogaImage3,
      info: 'Simple Exercise for eyes!!',
      videoLink: 'https://www.youtube.com/watch?v=y2em3UIfqzQ',
    },
    {

      image: yogaImage4,
      info: 'Increase Your Lung capacity with yoga!!',
      videoLink: 'https://www.youtube.com/watch?v=4IysyfrQTs4',
    },
    {

      image: yogaImage5,
      info: 'Yoga for better sleep!!',
      videoLink: 'https://www.youtube.com/watch?v=Qd1AM8eW3ag',
    },
    {

      image: yogaImage6,
      info: 'Yoga for anxiety!!',
      videoLink: 'https://www.youtube.com/watch?v=dO7u-FfkzrY',
    },
  ];


  return (
    <>
    
    <Link to="/class/yoga2"></Link>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pt-20">
    {yogaData.map(yoga => (
      <div key={yoga.info} className="bg-white p-4 rounded shadow-md text-center">
        <img src={yoga.image} alt="Yoga Image" className="w-full mb-4" style={{ maxWidth: '600px' }} />
        <div className="mb-2">
          <h2 className="text-xl font-bold">{yoga.info}</h2>
        </div>
        <div>
          <Link to={yoga.videoLink} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 block text-center">
            Video Link
          </Link>
        </div>
      </div>
    ))}
  </div>
 
    
    </>
  )
}

export default Yoga2
