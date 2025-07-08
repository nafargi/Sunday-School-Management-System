import React from 'react'

function Attendance() {
  return (
     <div className='px-6 pt-4 pb-2'>
        <h1 className="text-lg mb-3"> Attendance</h1>
         <div className="grid md:grid-cols-2 grid-cols-1 space-y-3 border-b-1 border-gray-200 ">
             <div className="">
                <p className="text-sm text-gray-800">Attendance Pattern</p>
                <p className="text-sm text-gray-800">Regular</p>
             </div>
            
             <div className="">
                <p className="text-sm text-gray-800">Last Attended</p>
                <p className="text-sm text-gray-800">5/12/2016</p>
             </div>
             <div className="">
                <p className="text-sm text-gray-800">Attendance Rate</p>
                <p className="text-sm text-gray-800">92%</p>
             </div>
         </div>
    </div>
  )
}

export default Attendance
