import React,{useState , useEffect} from 'react'
// import useAxiosFetch from '../../hooks/useAxiosFetch';
import { instructors } from '../../Constants'
import img from '../../assets/home/girl.jpg'
const Instructor = () => {

//   const [instructors , setInstructors] = useState([]);
//     const axiosFetch = useAxiosFetch();
//     useEffect(() => {
//         axiosFetch.get('/instructors').then((data) => {
//             setInstructors(data.data)
//         }).catch((err) => {console.log(err)})
//     } , [])

  return (
     <div className='md:w-[80%] mx-auto my-36'>
        <div>
            <h1 className='text-5xl font-bold text-center'>Our <span className='text-secondary'>Best</span> Instructors</h1>
            <div className='w-[40%] text-center mx-auto my-4'>
                <p className='text-gray-500'>
                    Explore our classes . Here are some free and paid classes of yoga for you.
                </p>
            </div>
        </div>
        {
            instructors ? <>
                <div className='grid mb-28 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto'>
                    {
                        instructors?.slice(0,4).map((instructor , i) => (
                            <div className='flex dark:text-white hover:-translate-y-2 duration-200 cursor-pointer flex-col shadow-md py-8 px-10 md:px-8 rounded-md'>
                                <div className='flex-col flex gap-6 md:gap-8'>
                                    <img className='rounded-full border-4 border-gray-400 h-24 w-24 mx-auto ' src={instructor.photoUrl || `${img}`} alt="" />

                                    <div className='flex flex-col text-center'>
                                        <p className='font-medium text-1g dark:text-white text-gray-800 '>{instructor?.name}</p>
                                        <p className='text-gray-500 whitespace-nowrap'>instructors</p>
                                        <p className='text-gray-500 mb-4 whitespace-nowrap'>Total Members {instructor?.totalEnrolled}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </> : <p>No Instructors. </p>
        }
    </div>
  )
}

export default Instructor
