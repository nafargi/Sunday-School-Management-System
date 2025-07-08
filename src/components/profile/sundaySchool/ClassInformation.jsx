import React from 'react'

function ClassInformation() {
  return (
   <div className='px-6 pt-4 pb-2'>
        <h1 className="text-lg mb-3">Class Information</h1>
         <div className="grid md:grid-cols-2 grid-cols-1 space-y-3 border-b-1 border-gray-200 ">
             <div className="">
                <p className="text-sm text-gray-800">Age Group</p>
                <p className="text-sm text-gray-800">Young Explorers</p>
             </div>
            
             <div className="">
                <p className="text-sm text-gray-800">Date Joined</p>
                <p className="text-sm text-gray-800">5/12/2016</p>
             </div>
             <div className="">
                <p className="text-sm text-gray-800">Grade</p>
                <p className="text-sm text-gray-800">2nd Grade</p>
             </div>
         </div>
    </div>
  )
}

export default ClassInformation
