import React from 'react'
import { Link } from 'react-router-dom'
import s1 from './s1.avif'
const Spirituality = () => {
  return (
    <div>
        <Link to='/spirituality' ></Link>
         <div className="bg-white rounded-lg shadow-md p-6 pt-20 ">
      <h2 className="text-3xl font-bold mb-4 text-center">What is Spirituality?</h2>
      <p className="text-lg mb-4">
        As we all know , Our body is made up carbohydrates, proteins, minerals etc. but if we keep all these components together will it contain life? The answer is surely no . We have something additional which makes us lively and that is our spirit . Our spirit is a combination of qualities such as compassion, love, co-operation, enthusiasm, etc. <span className='font-semibold'>Spirituality is nurturing and enhancing these qualities of the spirit</span>. Stress and anxiety creates a lack of these qualities. This is where <span className='font-semibold'>Sudarshan Kriya, Meditation, Chanting and other Spiritual Practices come into role</span> . They help us in keeping our life uplifted with energy and enthusiasm. In a lighting arrangement the bulb is just an external thing but the electricity inside it is the most important thing. Spirituality is knowing you are the electricity and not the bulb.


      </p>
      <p className="text-lg mb-4">
       Three things which are the most difficult to achieve are :-
1) Human Birth
2) Inclination towards knowledge
3) Company of the Guru
What is the role of the Guru in spirituality?
Guru is here to answer our questions and relieve us from all our bondages .
People think that their individuality is lost when they come on the spiritual path. Rather it is the other way round, our true individuality blossoms when we walk on this path. Spirituality brings us back into our true nature and makes us free from within.
5 measures of our Spiritual Growth:-
<br />
● How broad-minded we have become
<br />
● How much are we aware of our shortcomings and good qualities
<br />
● How skillful we have become in our action
<br />
● How quickly we can return to our balanced state of mind
<br />
● Undying smile and Confidence
<br />
      </p>
      <p className="text-lg mb-4">
       <p className='text-center'><span className='font-bold'>How can we balance our Spiritual and Material life ?</span></p>
       <br />
How do we balance our bicycle? We just do it . Similarly if we want we can surely remove some time for our spiritual growth. Spirituality is nowhere contrary to our materialistic success rather it is complementary to our materialistic success.
<br />
<br />
<p className='text-center'><span className='font-bold text-lg'>Spirituality and Celebration</span></p>
<br />
Celebration is the nature of the spirit. True celebration has to be spiritual. A celebration without spirituality has no depth. Silence gives depth to spirituality. Some people think being silent and serious is spirituality. For example, many meditators feel that laughing, singing, and dancing are not spiritual. Some think only celebration is spirituality. For example in some parts of the world celebration means loud music; there is no silence at all. Spirituality is a harmonious blend of outer silence and inner celebration; and also, inner silence and outer celebration.

      </p>
    <div className='items-center justify-center flex flex-col mt-5'>
        <div className='items-center justify-center flex '>
            <img src={s1} alt="img" style={{ maxWidth: '600px' }}/>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 items-center justify-center flex mt-5">
            <a href='https://youtu.be/SiCkSP28GBQ?feature=shared' >Watch in detail!</a>
          </button>
    </div>
    </div>
    </div>
  )
}

export default Spirituality
