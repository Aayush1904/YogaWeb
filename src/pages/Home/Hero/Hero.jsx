import bgImg from '../../../assets/home/banner-1.jpg'

const Hero = () => {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage : `url(${bgImg})`}}>
      <div className='min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-60'>
        <div>
            <div className='space-y-4'>
                <h1 className='md:text-7xl text-4xl font-bold'>The Yogic Way</h1>
                <div className='md:w-1/2'>
                    <p>In today's fast paced world people are stressed because of various reasons and this stress affects our relationships, work life, health and various aspects of our life. The key to managing this stress and having a proper balance in life lies in our ancient scriptures. One such scripture is the Patanjali Yoga Sutras which gives us immense knowledge on what Yoga truly is. Maharshi Patanjali says Yoga is the skill in action and it is a discipline which needs to be inculcated by each one of us. Yoga has innumerable benefits and it helps us in maintaining our physical, mental, emotional as well as spiritual well-being. Let's embark on the journey of the Yogic Path</p>
                </div>
                <div className='flex flex-wrap items-center gap-5'>
                    <button className='px-7 py-3 rounded-lg bg-secondary font-bold uppercase'>Join Us</button>
                    <button className='px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase'>View Content</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
