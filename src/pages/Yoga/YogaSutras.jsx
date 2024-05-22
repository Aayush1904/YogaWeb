



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import YogaPoseAnimation from '../../Components/YogaPoseAnimation';
import YogaPoseAnimation2 from '../../Components/YogaPoseAnimation2';

const YogaSutras = () => {
  // State to store the selected Pada and Chapter
  const [selectedPada, setSelectedPada] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');

  // Options for Padas and Chapters
  const padas = ['Samadhi Pada', 'Sadhana Pada', 'Vibhuti Pada', 'Kaivalya Pada'];
  const chapters = [
    ['The Discipline of Yoga', 'The Modulations of the mind', 'Honouring the practice', 'Dispassion', 'Types of Samadhi', 'Who is God?', 'Obstacles on the path', 'Overcoming the Obstacles', 'The fruit of the practice'],
    ['Kriya Yoga', 'Three types of Tapas', 'Types of Miseries', 'Eliminating the cause of Misery', 'Karma', 'The Scenery and the Seer', 'The Eight Limbs of Yoga'],
    ['Vibhuti', 'The Eight Limbs of Yoga [Continue]', 'Samyama', 'The Three Outcomes', 'ExtraOrdinary Abilities' , 'Higher States'],
    ['The Big Mind', 'Nuances of Karma', 'Perceiving Power of the Mind', 'Beyound the Mind', 'Absolute Liberation']
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center pt-20">
      {/* Heading */}
      <div className=" text-black py-4 text-center">
        <h1 className="text-3xl font-semibold">Yoga Sutras</h1>
      </div>
      {/* Main content */}
      <div className="container mx-auto px-4 mt-8"> {/* Adjust top value according to your navbar height */}
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
          <div className="text-center mb-8">
            <p className="text-lg">Explore the wisdom of Yoga Sutras</p>
            {/* Additional content */}
            <p className="text-lg mt-4">
              <strong>Salutation to Maharşi Patanjali:</strong><br />
              yogena cittasya padena vācām malamśarīrasya ca vaidyakena |
              yo'pākarot tam pravaram munīnām patanjalim prāñjalirānato'smi ||

              योगेन चित्तस्य पदेन वाचां मलं शरीरस्य च वैद्यकेन ।

              योऽपाकरोत् तं प्रवरं मुनीनां पतञ्जलिं प्राञ्जलिरानतोऽस्मि
            </p>
            <br />
            <p className="text-lg">
              I offer salutations with folded hands to the noblest in the lineage of sages, Maharşi Patanjali, who removed impurity from the mind through yoga, from speech through grammar and from the body through the science of medicine.
            </p>
            <br />
            <p className="text-lg">
              yogena cittasya padena vācām

Maharși Patañjali has given us three things. The first is yoga, through the Yoga Sūtra. He says, "Through yoga we get rid of the impurities in the mind, in the cittā, in the consciousness."

He is also a proponent of grammar and phonetics. Our happiness and misery depend on how and what we speak. If we are imperfect in our speech, we cannot be successful in life. Maharşi Patañjali is also a proponent of right speech. Through his sūtras he talks about the expression of life through speech and how speech can be refined. 

malam śarīrasya ca vaidyakena.

He tells you how you can remove impurities from your system through āyurveda. Yoga, speech and āyurveda -the contribution of Maharși Patañjali to these three fields is immense.

We bow to the great sage who has given us these instruments to purify our body, speech and mind.

Yoga Sūtra forms one of the most important scriptures of the Vaidika literature, Vaidika lore. Vedas are the main body of which the Vedānga (limbs) and the Upānga (subordinate limbs) are attributed to many scriptures. śikṣā (phonetics), Chandas (rhyme and meter), Vyākarana (grammar), Nirukta (use of words), Kalpa (vaidika rituals) and jyotișa (astrology) are the limbs (vedānga). Sada Darśana or the six philosophies are the subordinate limbs (upānga).

            </p>
            <br />
            <p className="text-lg">
              Yoga Sūtra is one of the subordinate limbs, the others being Nyāya, Vaiśeşika, Sänkhya, Purva Mimāmsā and Vedānta or Uttara Mimāmsā.

Nyāya is the first of the six. Nyāya is logic or reason. The Nyāya Śāstra examines the means of knowing; whether your knowledge, your perception and the means of acquiring the knowledge are correct. All these parameters are measured by Nyāya.

Vaiśeşika is the science of all material objects in this universe. What is matter? What is an atom? How is the mind also a part of these?

Sānkhya, the third darśana, talks about consciousness and matter. This is analysis. Analyzing the creation as the inert and the conscious (jada and cetana), nature and consciousness, the manifest and the unmanifest ( Prakrti and Puruşa).

The fourth philosophy, the one that we are going to embark on is the Yoga Sūtra by Maharși Patañjali.

Maharși Patañjali was a scientist to the core and gave us formulas on different aspects of our consciousness.

Yoga does not mean just āsanas. Āsanas, too, are a part of it but today when we think 'yoga', we only think about its āsana aspect. Āsanas are actually a very minuscule part of yoga. The major portion is about the Self, about the consciousness. It is a highly intellectual exercise and you have to be really sharp and alert to pick up the finer points. That is why I call yoga 'The Science of Consciousness'.


            </p>
            
          </div>
          <h3 className="text-xl font-semibold mb-2">The Four Padas of Yoga:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Dropdown for Padas */}
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedPada}
                onChange={(e) => setSelectedPada(e.target.value)}
              >
                <option value="">Select a Pada</option>
                {padas.map((pada, index) => (
                  <option key={index} value={pada}>{pada}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z"/></svg>
              </div>
            </div>
          </div>

          {/* Navigation based on selected Chapter */}
          {selectedPada && (
            <div className="mt-4">
              {/* Links to the selected chapters */}
              {chapters[padas.indexOf(selectedPada)].map((chapter, index) => (
                <div key={index}>
                  <Link
                    to={`/yoga/pada${padas.indexOf(selectedPada) + 1}/chapter${index + 1}`}
                    className="text-blue-500 hover:underline"
                  >
                   {chapter}
                  </Link>
                </div>
              ))}
            </div>
          )}
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-800 w-full md:w-1/2">
          <div className="flex justify-center">
            <div className="w-full">
              <YogaPoseAnimation />
            </div>
            <div className="w-full">
              <YogaPoseAnimation2 />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default YogaSutras;

