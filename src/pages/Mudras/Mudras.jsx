import React from 'react'
import { Link } from 'react-router-dom'
import img from './mudra.png'
import img2 from './mudra2.png'
const Mudras = () => {
  return (
    <>
      <Link to= "mudras"></Link>
   <div>
         <div className="bg-white rounded-lg shadow-md p-6 pt-20 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Introduction to Therapeutic Mudras</h2>
      <p className="text-lg mb-4 text-yellow-500">
The ancient Vedic science of Yoga and Ayurveda contains a treasure-trove of practical knowledge and techniques to live a long, happy and healthy life, that today’s modern world has only just begun to rediscover. One of these treasures is the knowledge of Mudra therapy, or ‘therapeutic and healing Mudras’. These different postures of the hands and fingers
– most of which are relatively simple – can have profound and instant effects on our physical, mental and emotional state of being.
      </p>
      <h2 className="text-3xl font-bold mb-4 text-center">Basic Principles of Ayurveda</h2>
      <p className="text-lg mb-4 text-yellow-500">
The first step to take if you are interested in learning more about Mudra therapy, and
how to use it properly and effectively, would be to familiarize yourself with the basic principles of Ayurveda. As there are many good books and websites available on this topic, I won’t go into detail here, but it is important to learn more about one’s own body and its unique constitution, also called ‘prakriti’.

      </p>
      <br />
      <br />
      <p className="text-lg mb-4">
       <span className='font-bold'>As a general rule that applies to most therapeutic Mudras, these guidelines can be followed when practicing Mudras, for the best results:</span>

<br />
<br />
● Practice the Mudras while sitting in a quiet place where you will not be disturbed, and sitting in a posture where you can keep the spine erect.
It is also good to close the eyes, so that the Prana Shakti or subtle life-force energy settles down and is most easily directed. If one is not able to sit for some reason, one can practice most Mudras while lying down.
<br />
<br />
● Take comfortable long deep breaths, and keep your attention on the breath.
<br />
<br />
● Most Mudras can be practiced for up to 15 minutes at a stretch, maximum three times a day (so per Mudra maximum 45 minutes per day).
<br />
<br />
● Apart from Mudras specifically practiced to aid digestion etc, it is
advisable not to practice Mudras immediately after having food, as it might interfere with the digestive process. Wait for at least 1-2 hours after a meal. One should also not practice Mudras right before going to bed.
<br />

      </p>
      <p className="text-lg mb-4">
       <p className='text-center text-2xl'><span className='font-bold text-yellow-500'>Mudras for the Five Elements (Pancha Tattva)</span></p>
       <br />

According to Ayurveda this entire Creation, including our body and mind, are
made up of and influenced by the five elements: Earth, Water, Fire, Air and Ether or Space. Any imbalance in the body or mind is a sign of an imbalance of one or more of these elements in our system, and knowing how to increase, balance, or decrease
these elements in the system therefore gives us a tool to return the system to balance, which is health. In this section we have given the specific Mudras for these five elements.
<br />
<br />
<div className='flex'>
  <div className='flex flex-col justify-center w-1/2'>
    <p className='text-center text-lg'><span className='font-bold text-lg'>MUDRA FOR EARTH ELEMENT</span></p>
    <br />
    <div className='flex items-center'>
      <p className='text-left ml-20'><span className='font-semibold'>How Prithvi (Earth) Mudra is Formed: </span>
      <br />
      Prithvi Mudra is formed by gently touching the tip of your ring finger with the tip of your thumb. The other fingers are straight. This is done in both hands.</p>
      <p className='text-left ml-40'><span className='font-semibold'>Effects and Benefits of Prithvi Mudra: </span>
      <br />
      Prithvi Mudra balances the Earth element in the body, which makes it effective in cooling down the body when it is hot (due to excess Fire element), and it can also be used to reduce fever in the body. It also helps in increasing stamina.</p>
    </div>
  </div>
  {/* Right side image */}
  <div className='w-1/2 h-1/2' style={{maxWidth: "250px" , marginLeft : "500px"}}>
    <img className='w-full' src={img} alt="" />
  </div>
</div>
<br />
<br />

<div className='flex'>
  <div className='flex flex-col justify-center w-1/2'>
    <p className='text-center text-lg'><span className='font-bold text-lg'>MUDRA FOR WATER ELEMENT</span></p>
    <br />
    <div className='flex items-center'>
      <p className='text-left ml-20'><span className='font-semibold'>How Varuna (Water) Mudra is Formed: </span>
      <br />
     Varuna Mudra is formed by gently touching the tip
of your little finger with the tip of your thumb. The other fingers are straight. This is done in both hands.</p>
      <p className='text-left ml-40'><span className='font-semibold'>Effects and Benefits of Varuna Mudra: </span>
      <br />
     Varuna Mudra balances the Water element in the body, which makes it effective in cooling down the body when it is hot (due to excess Fire element), and it also balances the water metabolism in the body. It also helps in removing all kinds of dryness in the body (whether in the throat, skin, eyes or other) and is also useful in case of acidity. However, this Mudra should not be practiced much during traveling, etc as it might cause an urge to urinate.</p>
    </div>
  </div>
  {/* Right side image */}
  <div className='w-1/2 h-1/2' style={{maxWidth: "250px" , marginLeft : "500px"}}>
    <img className='w-full' src={img2} alt="" />
  </div>
</div>
<br />
<br />

<div className='flex'>
  <div className='flex flex-col justify-center w-1/2'>
    <p className='text-center text-lg'><span className='font-bold text-lg'>MUDRA FOR FIRE ELEMENT</span></p>
    <br />
    <div className='flex items-center'>
      <p className='text-left ml-20'><span className='font-semibold'>How Surya (Fire) Mudra is Formed: </span>
      <br />
     Surya Mudra is formed by gently touching the base of your thumb with the tip of your ring finger, while you press down the ring finger with your thumb. The other fingers are straight. This is done in both hands.</p>
      <p className='text-left ml-40'><span className='font-semibold'>Effects and Benefits of Surya Mudra: </span>
      <br />
     Surya Mudra balances the Fire element in the body, which makes it effective in heating up the body when it is cold (due to lack of Fire element), either due to internal or external cause. It can be used to increase the body temperature when in a very cold place
(also if affected by A/C for example), or to get rid of cough, common cold or congested nose. It increases metabolism and as it reduces the Earth element, it can also help in reducing excess fat in the body and lose excessive weight. It is also beneficial in case of indigestion, loss of appetite, etc. It should be used with caution, however, and not
for more than 5-6 minutes at a time, as too much heat may be generated. It should also not be practiced when there is already a lot of heat in the system, like when one has a fever, or acidity problems.</p>
    </div>
  </div>
  {/* Right side image */}
  <div className='w-1/2' style={{maxWidth: "250px" , marginLeft : "500px"}}>
    <img className='w-full' src={img2} alt="" />
  </div>
</div>
<br />
<br />

      </p>
    </div>
    </div>
    </>
  )
}

export default Mudras
