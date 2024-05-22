import React, { useEffect, useState } from 'react'
// import useAxiosFetch from '../../../hooks/useAxiosFetch'
import Card from './Card';
import {classes} from '../../../Constants/index'
const PopularClasses = () => {

    // const [classes , setClasses] = useState([]);
    // const axiosFetch = useAxiosFetch();
    // useEffect(() => {
    //     const fetchClasses = async () => {
    //         const response = await axiosFetch.get('/classes')
    //         console.log(response)
    //     }
    //     fetchClasses();
    // } , [])

  return (
    <div className='md:w-[80%] mx-auto my-36'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'>Popular</span> Classes</h1>
            <div className='w-[40%] text-center mx-auto my-4'>
                <p className='text-gray-500'>
                    Explore our classes . Here are some free and paid classes of yoga for you.
                </p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                classes.slice(0,6).map((item , index) => <Card key={index} item ={item} />)
            }
        </div>
    </div>
  )
}

export default PopularClasses

