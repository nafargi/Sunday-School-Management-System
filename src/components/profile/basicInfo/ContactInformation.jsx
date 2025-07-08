import React from 'react'

function ContactInformation() {
  return (
    <div className='px-6 pt-0  pb-2'>
        <h1 className="text-lg mb-3">Personal Inforamtion</h1>
         <div className="grid md:grid-cols-2 grid-cols-1 space-y-3 border-b-1 border-gray-200 ">
             <div className="">
                <p className="text-sm text-gray-800">Full Name</p>
                <p className="text-sm text-gray-800">Biruk Tsadkan</p>
             </div>
             <div className="">
                <p className="text-sm text-gray-800">Age </p>
                <p className="text-sm text-gray-800">7 years</p>
             </div>
             <div className="">
                <p className="text-sm text-gray-800">Date of Birth</p>
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

export default ContactInformation
