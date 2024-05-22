import React from 'react';
import { Link } from 'react-router-dom';
import yoga from './yoga.jpeg'
const Yoga1 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        {/* Image */}
        <img src={yoga} alt="Yoga Image" className="mx-auto mb-4" style={{ maxWidth: '1000px' }} />
        {/* Information */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold">9 Days Yoga Challenge!</h2>
          <p>Yoga challenge specifically designed for you all people ! Stay fit yoga and sleep !</p>
        </div>
        {/* Link */}
        <div>
          <Link to="/class/yoga1" ></Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <a href='https://www.youtube.com/watch?v=j3HaXpIsauI&list=PLSjDLxYztqhp72GhXVts3oRCSoHfDRxK1&pp=iAQB' >Accept Here</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Yoga1;
