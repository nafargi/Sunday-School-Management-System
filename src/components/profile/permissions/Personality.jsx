import React from 'react'

function Personality() {
  return (
    <div className='px-6 pt-4 pb-2'>
        <h1 className="text-lg mb-3">Personality & Learning</h1>
         <div className="grid md:grid-cols-2 grid-cols-1  pb-3 space-y-3 border-b-1 border-gray-200 ">
             <div className="">
                <p className="text-sm text-gray-800">Personality</p>
                <p className="text-sm text-gray-800">Friendly, outgoing, and eager to learn</p>
             </div>
             <div className="">
                <p className="text-sm text-gray-800">Learning Style</p>
                <p className="text-sm text-gray-800">Visual learner</p>
             </div>
             <div className="">
                <p className="text-sm text-gray-800">Favorite Activities</p>
                <p className="text-sm text-gray-800">Arts and crafts, group singing</p>
             </div>
             
         </div>
    </div>
  )
}

export default Personality
